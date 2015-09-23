# Big Read Builder

## Install & setup

1. First, install [Tarbell](http://tarbell.io). Using a virtualenv is recommended.

    1. Install virtualenv with `[sudo] pip install virtualenv`
    2. Run `which virtualenv`. On a Mac, it should read `/usr/local/bin/virtualenv`.
    3. Install virtualenvwrapper with `[sudo] pip install virtualenvwrapper`
    4. Copy the following into your shell file (e.g. `~/.bash_profile`): `export WORKON_HOME=$HOME/.virtualenvs; export PROJECT_HOME=$HOME/Devel; source /usr/local/bin/virtualenvwrapper.sh`
    5. Close your shell and open it again.
    6. Make a new virtualenv by typing in `mkvirtualenv tarbell1.0.3` (you can replace `tarbell1.0.3` with anything you want to name your virtualenv).
    7. Now install Tarbell into your virtualenv by running `pip install tarbell`
    8. Expand your terminal window so that it fills your screen (there's a bug that occurs if your text overflows over one line).
    9. Configure tarbell with `tarbell configure`. Follow the directions at [http://tarbell.readthedocs.org/en/1.0.3/install.html](http://tarbell.readthedocs.org/en/1.0.3/install.html)

2. Install the blueprint: `tarbell install-blueprint https://github.com/ajam/tarbell-big-read-template.git`
(**NOTE**: until the project is public, use: `tarbell install blueprint git@github.com:ajam/tarbell-big-read-template.git`)

3. Run `tarbell newproject` and select the Big Read blueprint.

## Using the template

(Note: Directions for using this template is specific to the template in this repository, not all Tarbell templates)

Generating a new project with `tarbell newproject` should generate a Google Spreadsheet for you. Your Google Spreadsheet should have the following sheets. Do not modify any sheet names (order of the sheets does not matter).

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
`name` | `string` | The name of the chapter
`link` | `url` | The url (can be full url or just the path) to each chapter
`_notes` | `text` | Anything you want. Isn't being used.


column in content (order matters!) | possible values | description
---|---|---
`content_type` | `text`, `subhead`, `image`, `markup` | The type of content you want to put in
`id` | `string` | If you need to target a specific content block, include a unique id here. Can leave blank.
`value` | `text` | For `text`, include the article text (to add in hyperlinks, use `<a href=linkhere target=_blank>hyperlinked text here</a>` without any quotes). For `subhead`, include the subhead. For `image`, include a unique image_group id (e.g. `image-group-1`). For `markup`, include the name of the HTML markup file to grab (e.g. `_graphic.html`) or type in the markup you'd like directly into the cell
`right_rail_id` | `string` | The unique id that you use to link the text content with the right rail content in the `right_rail` sheet.
`_notes` | `text` | Anything you want. Isn't being used.


column in right_rail | possible values | description
---|---|---
`right_rail_id` | `string` | The right rail id connects right rail information to where it should go within the content. Right_rail_id should also be found somewhere in the content sheet under the `right_rail_id` column.
`content_type` | `text`, `subhead`, `image`, `markup` | The type of content you want to put in
`id` | `string` | TK
`value` | `text` | For `text`, include the article text. For `subhead`, include the subhead. For `image`, include a unique image_group id (e.g. `image-group-1`). For `markup`, include the name of the HTML markup file to grab (e.g. `_graphic.html`) or type in the markup you'd like directly into the cell
`_notes` | `text` | Anything you want. Isn't being used.


column in images | possible values | description
---|---|---
`image_group` | `string` | Image group connects image information with the content information in the content sheet. Image_group should also be found somewhere in the content sheet under the `value` column.
`image_id` | `string` | If you need to target a specific image, you can include a unique id here. Can leave blank.
`image_layout` | `full`, `half left`, `half right`, `third left`, `third middle`, `third right`, `<blank>` | Specify how you want the image to show up. 
`image_source` | `url` | Path to the image (can be full URL or just path)
`caption` | `text` | Caption for the photo(s). Only fill out the caption for the first row out of each group (put all captions for the group in one row). If you leave this blank, you will get rid of space below photo (e.g. if you want to stack photos on top of each other, you can leave the caption for the top full image blank).
`_notes` | `text` | Anything you want. Isn't being used.


column in bylines | possible values | description
---|---|---
`role_prefix` | _string_ | Role in the project (e.g. "By", "Produced by", "Photos")
`name` | `string` | Person's name
`miscellaneous` | `string` | Stuff you append to someone's name, like "for Al Jazeera America"
`link` | `url` | a link to someone's profile or Twitter profile (shows up as a link on the byline). Can be blank.
`facebook_profile_url` | `url` | a link to someone's Facebook profile. Optional. Only used for the author ("written").
`byline_position` | `top` or `bottom` | specifies whether you want the byline at the top of the piece or the bottom of the page
`_notes` | `text` | Anything you want. Isn't being used.





## Support

[File a ticket](https://github.com/ajam/tarbell-big-read-template/issues), docs (TK).
