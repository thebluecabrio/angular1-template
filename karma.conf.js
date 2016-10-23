// Karma configuration
// Generated on Sun Oct 23 2016 13:50:25 GMT+0100 (BST)

module.exports = function(config) {

  var configuration = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-*/angular-*.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'src/app/app.js',
      'src/app/**/*Module.js',
      'src/app/**/*Filter.js',
      'src/app/**/*Factory.js',
      'src/app/**/*Service.js',
      'src/app/**/*Directive.js',
      'src/app/**/*Controller.js',
      'src/app/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'beep'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'src/app/**/*.js': ['coverage'],
        'src/app/**/*.html': ['ng-html2js']
    },

    // How to report on coverage
    coverageReporter: {
        reporters: [
            { type: 'html', dir: 'coverage/html' },
            { type: 'cobertura', dir: 'coverage/cobertura' }
        ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // run in the background
    background: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    customLaunchers: {
        Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
    },

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    // Processing templates for use with directives using templateUrl
    ngHtml2JsPreprocessor: {
        // strip this from the file path
        stripPrefix: '',
        // prepend this to the
        prependPrefix: 'views/'
    }
  };

  if (process.env.TRAVIS) {
    configuration.browsers = ['Chrome_travis_ci'];
  }

  config.set(configuration);
}
