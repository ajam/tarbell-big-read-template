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

Generating a new project with `tarbell newproject` should generate a Google Spreadsheet for you. Your Google Spreadsheet should have the following sheets. Do not modify any sheet names.

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

row in values | possible values | description
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


## Support

[File a ticket](https://github.com/ajam/tarbell-big-read-template/issues), docs (TK).
