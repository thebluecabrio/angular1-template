# The Blue Cabrio

This is a template for angular 1.5.5 with sass

## Get started

1. `git clone git@github.com:thebluecabrio/angular1-template.git myproject` - clone project
2. `cd myproject`
3. `npm install -g grunt-cli` - install grunt cli on command line
4. `npm install` - install npm dependencies
5. `grunt develop` - builds project, opens browser with welcome page, and watches files for changes

### Developing

`grunt develop` is all you need, and an editor of your choice to change the files.

### Production
`grunt build:production` will output files to `dist/` directory, copy them files, zip them up and deploy it to your webserver.

#### Dependencies used in this project

##### Vendors
JS Vendors used in project, they live in src/js/vendor
- AngularJS v1.5.5
- AngularJS Route
- AngularJS Sanatize
- moment.js v2.15.0

##### Dev dependencies
List of dev dependencies used, can be found in package.json.
```grunt": "~0.4.4",
"grunt-beep": "latest",
"grunt-cache-bust": "^1.3.0",
"grunt-contrib-clean": "latest",
"grunt-contrib-concat": "latest",
"grunt-contrib-connect": "latest",
"grunt-contrib-copy": "latest",
"grunt-contrib-cssmin": "latest",
"grunt-contrib-imagemin": "latest",
"grunt-contrib-jshint": "latest",
"grunt-contrib-less": "latest",
"grunt-contrib-uglify": "latest",
"grunt-contrib-watch": "latest",
"grunt-newer": "latest",    
"grunt-ng-annotate": "^2.0.2",
"grunt-processhtml": "latest",
"grunt-sass": "latest",
"jshint-stylish": "latest",
"load-grunt-config": "latest",
"time-grunt": "latest"
```
