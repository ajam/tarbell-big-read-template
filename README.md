# Big Read Builder

## Install

First, install [Tarbell](http://tarbell.io).

Install the blueprint:

```
tarbell install-blueprint https://github.com/ajam/tarbell-big-read-template.git
```

<hr/>

**NOTE**: until the project is public, use:

```
tarbell install blueprint git@github.com:ajam/tarbell-big-read-template.git
```

<hr/>

Run `tarbell newproject` and select the Big Read blueprint.

(screenshot)

## What's in here?

A single page:

* `index.html`: The page. Start editing here.

A base template:

* `_base.html`: The root project template.

Some includes:

* `_analytics.html`: Chartbeat and Google Analytics configuration.
* `_content.html`: Page content.
* `_global-variables.html`: Global Javascript variables.
* `_macros.html`: Jinja macros.
* `_meta.html`: Meta tags.
* `_navigation.html`: Page navigation.
* `_title.html`: Page title.

Example content:

* `_example-markup-file.html`: Example of included markup content/
* `story2.html`: A second page.

Asset directories:

* `fonts`: Web fonts.
* `img`: Images go here.

Libraries:

* `lib`: CSS & Javascript libraries

If you have [Bower](http://bower.io) installed, new libraries can be installed with `bower install <library-name>`.

Styles:

* `css`: Custom & rendered CSS.
* `css/text-styles.css`: Text & typographic styles
* `css/theme.css`: Page design

Scripts:

* `js`: Custom & rendered Javascript.
* `js/analytics.js`: Wraps up analytics in a single API.
* `js/social-buttons.js`: Social button interaction.
* `js/theme.js`: Page-specific interactivity.

Configuration and docs:

* `tarbell_config.py`: Tarbell configuration
* `README.md`: What you're reading. Please help improve it!
* `LICENSE`: How to share.

## Support

[File a ticket](https://github.com/ajam/tarbell-big-read-template/issues), docs (TK).
