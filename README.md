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

2. Install the blueprint:

```
tarbell install-blueprint https://github.com/ajam/tarbell-big-read-template.git
```

<hr/>

**NOTE**: until the project is public, use:

```
tarbell install blueprint git@github.com:ajam/tarbell-big-read-template.git
```

<hr/>

3. Run `tarbell newproject` and select the Big Read blueprint.

(screenshot)

## Support

[File a ticket](https://github.com/ajam/tarbell-big-read-template/issues), docs (TK).
