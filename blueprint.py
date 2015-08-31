# -*- coding: utf-8 -*-
import codecs
import getpass
import json
import os
import requests
import shutil

from clint.textui import colored, puts
from cssmin import cssmin
from flask import g, Blueprint
from jinja2 import Markup
from slimit import minify
from smartypants import smartypants
from tarbell.hooks import register_hook
from tarbell.utils import ensure_directory

NAME = "Big Read Builder"

EXCLUDES = [
    'LICENSE',
    'lib',
    'bower.json',
    'requirements.txt',
    '*.md',
]

blueprint = Blueprint('base', __name__)


class Includer(object):
    """
    Base class for Javascript and CSS psuedo-template-tags.
    See `make_context` for an explanation of `asset_depth`.
    """
    def __init__(self):
        self.includes = []
        self.tag_string = None

    def push(self, path):
        self.includes.append(path)

        return ''

    def _compress(self):
        raise NotImplementedError()

    def _get_path(self, path):
        blueprint_root = os.path.dirname(os.path.realpath(__file__))

        project_path = os.path.join(blueprint_root, '../', path)
        if os.path.isfile(project_path):
            return project_path

        blueprint_path = os.path.join(blueprint_root, path)
        if os.path.isfile(blueprint_path):
            return blueprint_path

    def render(self, path):
        config = g.current_site.app.config

        # If we're in a build context, mash everything together
        if config.get('BUILD_PATH'):
            fullpath = os.path.join(config.get('BUILD_PATH'), path)
            ensure_directory(fullpath)
            with codecs.open(fullpath, 'w', encoding='utf-8') as f:
                f.write(self._compress())
            response = self.tag_string.format(path)
        else:
            response = '\n'.join([
                self.tag_string.format(src) for src in self.includes
            ])

        markup = Markup(response)

        del self.includes[:]

        return markup


class JavascriptIncluder(Includer):
    """
    Psuedo-template tag that handles collecting Javascript and serving appropriate clean or compressed versions.
    """
    def __init__(self, *args, **kwargs):
        Includer.__init__(self, *args, **kwargs)
        self.tag_string = '<script type="text/javascript" src="{0}"></script>'

    def _compress(self):
        output = []

        for src in self.includes:
            with codecs.open(self._get_path(src), encoding='utf-8') as f:
                output.append(minify(f.read()))

        return '\n'.join(output)


class CSSIncluder(Includer):
    """
    Psuedo-template tag that handles collecting CSS and serving appropriate clean or compressed versions.
    """
    def __init__(self, *args, **kwargs):
        Includer.__init__(self, *args, **kwargs)
        self.tag_string = '<link rel="stylesheet" type="text/css" href="{0}" />'

    def _compress(self):
        output = []

        for src in self.includes:
            with codecs.open(self._get_path(src), encoding='utf-8') as f:
                output.append(cssmin(f.read()))

        return '\n'.join(output)


@blueprint.app_context_processor
def context_processor():
    """
    Add helper functions to context for all projects.
    """
    return {
        'JS': JavascriptIncluder(),
        'CSS': CSSIncluder(),
        'enumerate': enumerate,
    }


@register_hook('newproject')
def copy_files(site, git):
    """
    Copy the files
    """
    puts('\nCopying files from blueprint\n')
    style_dir = '{0}/css'.format(site.path)
    #os.mkdir(style_dir)
    style_src_path = '{0}/_blueprint/css'.format(site.path)
    shutil.copytree(style_src_path, style_dir)
    git.add('css')
    git.commit(m='Add css folder')

    #style_dir = '{0}/js'.format(site.path)
    #os.mkdir(style_dir)
    ##style_src_path = '{0}/_blueprint/js'.format(site.path)
    #shutil.copytree(style_src_path, style_dir)
    #git.add('js')
    #git.commit(m='Add js folder')

    #bowerrc_src_path = '{0}/_blueprint/.bowerrc'.format(site.path)
    #shutil.copy(bowerrc_src_path, site.path)
    #git.add('.bowerrc')
    #git.commit(m='Add Bower configuration')


@register_hook('newproject')
def create_repo(site, git):
    """
    Create repo when making new project
    """
    create = raw_input("Want to create a Github repo for this project [Y/n]? ")
    if create and not create.lower() == "y":
        return puts("Not creating Github repo...")

    name = site.path.split('/')[-1]
    user = raw_input("What is your Github username? ")
    password = getpass.getpass("What is your Github password? ")
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    data = {'name': name, 'has_issues': True, 'has_wiki': True}
    resp = requests.post('https://api.github.com/user/repos', auth=(user, password), headers=headers, data=json.dumps(data))
    puts("Created {0}".format(colored.green("https://github.com/{0}/{1}".format(user, name))))
    clone_url = resp.json().get("clone_url")
    puts(git.remote.add("origin", "git@github.com:{0}/{1}.git".format(user,name)))
    puts(git.push("origin", "master"))


@blueprint.app_template_filter('smartypants')
def smartypants_filter(text):
    """
    Smarty pants
    """
    if text:
        return smartypants(text)
    else:
        return ''
