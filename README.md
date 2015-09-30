# Big Read Builder (Tarbell template)

### Table of Contents:

1. [Install & setup](#install--setup)
2. [Working with Tarbell](#working-with-tarbell)
3. [Using the template](#using-the-template)
4. [Customizing the template](#customizing-the-template)
5. [Publishing a Tarbell project](#publishing-a-tarbell-project)
6. [Creating multiple pages ](#creating-multiple-pages)
7. [Breaking down the template files](#breaking-down-the-template-files)
8. [Support](#support)


## Install & setup
Warning: This install process looks intense, but you only have to do it once. After all this is installed, you can literally spin up a project in minutes. 

Tarbell requires the following:

1. Python. To make sure you have this, open the Terminal/command line and type `which python`. If you don't have it (you probably do), [follow these download instructions](https://www.python.org/downloads/). 

2. pip. Pip comes packaged with Python 2.7.9 and 3.4, so you also probably have this. To check if this is installed, type `which pip`. Otherwise, [install here](https://pip.pypa.io/en/latest/installing/). 

3. [virtualenv](https://virtualenv.pypa.io/en/latest/). To check for this, type `which virtualenv`.

    1. Install virtualenv with `[sudo] pip install virtualenv`
    2. Run `which virtualenv`. On a Mac, it should read `/usr/local/bin/virtualenv`.

4. [virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/install.html#basic-installation) (optional, but highly recommended)
    
    1. Install virtualenvwrapper with `[sudo] pip install virtualenvwrapper` (Typing which
    2. Copy the following into your shell file (e.g. `~/.bash_profile`): `export WORKON_HOME=$HOME/.virtualenvs; export PROJECT_HOME=$HOME/Devel; source /usr/local/bin/virtualenvwrapper.sh`
    3. Close your shell and open it again.


Once you've installed the above, install Tarbell!

1. Make a new virtualenv by typing in `mkvirtualenv tarbell1.0.4` (You can replace `tarbell1.0.4` with anything you want to name your virtualenv). Tarbell1.0.4 is simply the newest version of Tarbell. 
2. Then, install [Tarbell](http://tarbell.io). Using a virtualenv is recommended because it helps you isolate different versions of Tarbell and it's dependencies. As new versions come out, you want to be able to separate the older from the new. 

    1. Now install Tarbell into your virtualenv by running `pip install tarbell`
    2. Expand your terminal window so that it fills your screen (there's a bug that occurs if your text overflows over one line).
    3. Configure tarbell with `tarbell configure`. Follow the directions at [http://tarbell.readthedocs.org/en/1.0.4/install.html](http://tarbell.readthedocs.org/en/1.0.4/install.html)

2. Install the blueprint: `tarbell install-blueprint https://github.com/ajam/tarbell-big-read-template.git`. The blueprint is the actual HTML and CSS template.

3. Run `tarbell newproject` and select the Big Read blueprint.


## Working with Tarbell

If you installed Tarbell into a virtualenv, go into your virtualenv by typing in `workon <name of virtualenv>` (e.g. `workon tarbell1.0.4`). Create a new project using `tarbell newproject`. If you use Google Spreadsheets, this command will create a new spreadsheet and send you an invitation to edit. You can begin putting in content through your Spreadsheet. To preview the changes you make to your spreadsheet, run `tarbell serve` in the folder where you project lives and open your browser to `localhost:5000`. Your project preview is there. Anytime you make a change to the spreadsheet, simply refresh your browser window. 

(For more information, check out the main [Tarbell site](http://tarbell.io))


## Using the template

(Note: Directions for using this template is specific to the template in this repository, not all Tarbell templates)

Generating a new project with `tarbell newproject` should generate a Google Spreadsheet for you. Your Google Spreadsheet should have the following sheets. Do not modify any sheet names (order of the sheets does not matter). Do not change any headers in the sheets. (If you encounter an inexplicable error, it's likely someone accidentally changed the name of a header.)

Sheet name | Description
--- | ---
`values` | global values for the project
`header` | values that distinguish this project from other projects (like a name or headline)
`chapters` | each row represents a chapter in a series (can be left blank)
`content` | each row represents one piece of content on the page (text, image, subhead, graphic, etc...)
`right_rail` | each row represents one piece of content in the right rail
`images` | each row represents one image
`bylines` | each row represents one person who worked on the project and his/her role


#### Values for each sheet

rows in values | possible values | description
---|---|---
`google_analytics_id` | _string_ | your unique ID from Google Analytics (can be left blank)
`chartbeat_uid` | _integer_ | your unique ID from Chartbeat (can be left blank)
`chartbeat_domain` | _string_ | the domain you've configured in Chartbeat
`organization_name` | _string_ | the name of the organization you'd like to see in the upper left hand corner of the page
`og_site_name` | _string_ | name of your site you've registered on Facebook
`og_app_id`| _integer_ | unique app ID from Facebook
`og_article_publisher_url` | _url_ | the URL of your app on Facebook
`twitter_site_handle` | _string_ | your organization's Twitter handle (include the @)
`twitter_domain` | _url_ | the root URL of your site


rows in header | possible values | description
---|---|---
`splash_image_source` | _url_ | The path to the opening image (the big one on top). Does not need to be a full URL (e.g. `images/portrait_01.jpg` works)
`headline` | _string_ | The headline of the project
`subhead` | _string_ | The subhead of the project
`opengraph_url` | _url_ | The full URL of the project for Facebook sharing
`opengraph_image` | _url_ | The full URL to the image we will use for Facebook
`opengraph_image_width` | _integer_ | Width of opengraph_image in pixels
`opengraph_image_height` | _integer_ | Height of opengraph_image in pixels
`opengraph_description` | _text_ | The text you want to use for Facebook sharing
`twitter_description` | _text_ | The text you want to use for Twitter sharing
`twitter_image` | _url_ | The full URL to the image we will use for Twitter


column in chapters (optional) | possible values | description
---|---|---
`name` | _string_ | The name of the chapter
`link` | _url_ | The url (can be full url or just the path) to each chapter
`_notes` | _text_ | Anything you want. Isn't being used.


column in content (order matters!) | possible values | description
---|---|---
`content_type` | `text`, `subhead`, `image`, `markup` | The type of content you want to put in
`id` | _string_ | If you need to target a specific content block, include a unique id here. Can leave blank.
`value` | _text_ | For `text`, include the article text (to add in hyperlinks, use `<a href=linkhere target=_blank>hyperlinked text here</a>` without any quotes). For `subhead`, include the subhead. For `image`, include a unique image_group id (e.g. `image-group-1`). For `markup`, include the name of the HTML markup file to grab (e.g. `_graphic.html`) or type in the markup you'd like directly into the cell
`right_rail_id` | _string_ | The unique id that you use to link the text content with the right rail content in the `right_rail` sheet.
`_notes` | _text_ | Anything you want. Isn't being used.


column in right_rail | possible values | description
---|---|---
`right_rail_id` | _string_ | The right rail id connects right rail information to where it should go within the content. Right_rail_id should also be found somewhere in the content sheet under the `right_rail_id` column.
`content_type` | `text`, `subhead`, `image`, `markup` | The type of content you want to put in
`id` | _string_ | If you need to target a specific right rail block, include a unique id here. Can leave blank.
`value` | _text_ | For `text`, include the article text. For `subhead`, include the subhead. For `image`, include a unique image_group id (e.g. `image-group-1`). For `markup`, include the name of the HTML markup file to grab (e.g. `_graphic.html`) or type in the markup you'd like directly into the cell
`_notes` | _text_ | Anything you want. Isn't being used.


column in images | possible values | description
---|---|---
`image_group` | _string_ | Image group connects image information with the content information in the content sheet. Image_group should also be found somewhere in the content sheet under the `value` column.
`image_id` | _string_ | If you need to target a specific image, you can include a unique id here. Can leave blank.
`image_layout` | `full`, `half left`, `half right`, `third left`, `third middle`, `third right`, `<blank>` | Specify how you want the image to show up. 
`image_source` | _url_ | Path to the image (can be full URL or just path)
`caption` | _text_ | Caption for the photo(s). Only fill out the caption for the first row out of each group (put all captions for the group in one row). If you leave this blank, you will get rid of space below photo (e.g. if you want to stack photos on top of each other, you can leave the caption for the top full image blank).
`_notes` | _text_ | Anything you want. Isn't being used.


column in bylines | possible values | description
---|---|---
`role_prefix` | _string_ | Role in the project (e.g. "By", "Produced by", "Photos")
`name` | _string_ | Person's name
`miscellaneous` | _string_ | Stuff you append to someone's name, like "for Al Jazeera America"
`link` | _url_ | a link to someone's profile or Twitter profile (shows up as a link on the byline). Can be blank.
`facebook_profile_url` | _url_ | a link to someone's Facebook profile. Optional. Only used for the author ("written").
`byline_position` | `top` or `bottom` | specifies whether you want the byline at the top of the piece or the bottom of the page
`_notes` | _text_ | Anything you want. Isn't being used.


## Customizing the template

If you would like to make any style changes, etc... you should modify the files that are in the project folder, not the `_blueprint/` or `_output/` folders. 


## Publishing a Tarbell project

1. Run `tarbell generate _output`. This takes the template and your spreadsheet and bakes a standalone folder with the main index file, and all necessary JS, CSS, images and other assets. Remember to re-generate whenever you make changes to your spreadsheet or to any of your template files.
2. Take the contents of your _output folder and upload these to a server (example: projects.aljazeera.com). You can also use the built-in `tarbell publish <target>` command in Tarbell to move your files onto your staging and production servers.



## Creating multiple pages 

(In late October 2015, Tarbell will have a better and easier way of creating multiple pages. The directions below, however, do work for now.)

1. Rename `_story2.html` to `story2.html` or a better, more SEO-friendly name. 
2. Duplicate the following sheets in your spreadsheet and rename them all with the same suffix: `header` to `header2`, `content` to `content2`, `right_rail` to `right_rail2`, `images` to `images2`, `bylines` to `bylines2`. 
3. In `story2.html`, add the suffix from the Google Spreadsheet so that the tab names match the variables: `header2`, `bylines2`, `content2`, `images2` and `right_rail2`.
4. Repeat for any additional pages you may need.


## Breaking down the template files

(Note: You don't need to know any of the following to use the template. These are just useful notes in case you want to modify the template.)

#### List of files

Tarbell using [Jinja2](http://jinja.pocoo.org/docs/dev/#) as its templating engine. 

file name | description
---|---|---
`_analytics.html` | Code snippets for analytics (e.g. Google Analytics & Chartbeat)
`_base.html` | Code snippet to connect all code snippets together into one page
`_content.html` | Code snippets for all the content on the page under the intro
`_example-markup-file.html` | An example file with markup
`_global-variables.html` | Includes variables from your spreadsheet that your javascript references. It's generally bad practice to put javascript variables in your markup, but this allows you to use one javascript template file and apply it to multiple HTML pages.
`_intro.html` | Code snippets to create the top image + headline + subhead
`_macros.html` | This file does the heavy lifting. Includes templates for all content components (e.g. text, image, markup, subhead)
`_meta.html` | Code snippets for HTML meta tags (e.g. open graph tags, twitter tags)
`_navigation.html` | Code snippet for the top navigation header bar
`_spreadsheet.xlsx` | This spreadsheet holds the template spreadsheet file for this particular Tarbell layout template (same as the Google Spreadsheet that gets created when you start a new project). After production, download your Google spreadsheet as `_spreadsheet.xlsx` to save it as a backup.
`_story2.html` | A demo page for how to create new HTML pages within one project (e.g. with one spreadsheet)
`_title.html` | Holds the `<title></title>` tag
`blueprint.py` | Holds python functions (called "filters" in Jinja) that can help you manipulate content in your template. Holds some of the python scripts that make Tarbell work. 
`index.html` | The main file of your project that calls the `_base.html` file, which wires everything together. 


## Support

[File a ticket](https://github.com/ajam/tarbell-big-read-template/issues).
