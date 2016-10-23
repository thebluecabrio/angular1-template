// For styling you can use plain CSS, SASS or LESS

// 'newer' plugin is used to only update files with a newer timestamp (during development)

// Two beeps = A task has succesfully completed
// One beep = Something has failed


module.exports = function (grunt) {
    require('load-grunt-config')(grunt); // Save us having to do grunt.loadNpmTasks() for every plugin we use
    require('time-grunt')(grunt); // Get timings of how long each task took (more useful for 'build' than 'develop')

    var port = 4000;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Empty out the contents of dist for a fresh build
        clean: {
            all: ['dist/']
        },

        // Copy over files from src to dist
        copy: {
            options: {},
            html: {
                expand: true,
                cwd: 'src/',
                src: ['**/*.html', '!app/**/*.html'],
                dest: 'dist/',
                filter: 'isFile'
            },
            views: {
                expand: true,
                flatten: true,
                src: ['src/app/**/*.html'],
                dest: 'dist/views'
            },
            images: {
                expand: true,
                cwd: 'src/',
                // Copy all images
                src: ['img/**/*.{png,jpg,gif,svg}'],
                dest: 'dist/',
                filter: 'isFile'
            },
            data: {
                expand: true,
                cwd: 'src/',
                // Copy all images
                src: ['data/**/*.json'],
                dest: 'dist/',
                filter: 'isFile'
            },
            fonts: {
                expand: true,
                cwd: 'src/',
                src: ['fonts/**/*.{eot,svg,ttf,oft,woff,woff2}'],
                dest: 'dist/',
                filter: 'isFile'
            },
        },

        // Run JShint on all of JS files (but not on vendor files)
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                debug: true
            },
            all: ['src/js/**/*.js', 'src/app/**/*.js', '!src/js/vendor/**/*.js']
        },


        /* NGANNOTATE */
        ngAnnotate: {
            app_js: {
                src: [
                   'src/app/app.js',
                   'src/app/**/*Module.js',
                   'src/app/**/*Filter.js',
                   'src/app/**/*Factory.js',
                   'src/app/**/*Service.js',
                   'src/app/**/*Directive.js',
                   'src/app/**/*Controller.js'
                ],
                dest: 'dist/js/app.js'
            }
        },

        // Combine all of the vendor JS files into a single file
        concat: {
            angular_js: {
                src: [
                  'node_modules/angular/angular.js',
                  'node_modules/angular-*/angular-*.min.js'],
                dest: 'dist/js/angular.js'
            },
            angular_js_prod: {
                src: [
                  'node_modules/angular/angular.min.js',
                  'node_modules/angular-*/angular-*.min.js'
                ],
                dest: 'dist/js/angular.js'
            },
            vendor_js: {
                src: [
                    'node_modules/moment/min/moment.min.js'
                ],
                dest: 'dist/js/vendor.js'
            }
        },

        // Uglify all of our JavaScript into one file (but not on vendor files)
        uglify: {
            options: {},
            build: {
                files: {
                    'dist/js/app.js': ['dist/js/app.js']
                }
            }
        },

        // Automatically compile SASS into CSS
        sass: {
            options: {
                sourceMap: true
            },
            all: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['**/*.{scss,sass}'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },

        // Minify all CSS files into a single file
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        cacheBust: {
            cacheBustCssAndJs: {
                options: {
                    baseDir: 'dist/',
                    assets: ['css/**', 'js/**'],
                    deleteOriginals: true
                },
                src: ['dist/index.html']
            }
        },

        karma: {
          options: {
            configFile: 'karma.conf.js'
          },
          development: {
            background: true,
            singleRun: false
          },
          test: {
              reporters: ['progress', 'coverage']
          },
          production: {

          }
        },

        // Process our HTML includes
        // Replace JS and CSS imports for minified build versions
        processhtml: {
            build: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        },

            // Launch a local development server with LiveReloading
            connect: {
                options: {
                    port: port,
                    base: 'dist/',
                    hostname: '*',
                    livereload: true
                },
                livereload: {
                    options: {
                        open: {
                            target: 'http://localhost:' + port
                        },
                        base: [
                            'dist/'
                        ]
                    }
                }
            },

            // Watch for file changes
            watch: {

                sass: {
                    files: ['src/css/**/*.{scss,sass}'],
                    tasks: ['sass', 'beep:error:*'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },

                scripts: {
                    files: ['src/js/**/*.js', 'src/app/**/*.js'],
                    tasks: ['newer:jshint', 'beep:error:*', 'ngAnnotate', 'concat:angular_js', 'concat:vendor_js'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },

                html: {
                    files: ['src/**/*.html'],
                    tasks: ['copy:views', 'copy:html'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },

                images: {
                    files: 'src/img/**/*',
                    tasks: ['copy:images'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },

                data: {
                    files: 'src/data/**/*',
                    tasks: ['copy:data'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },

                font: {
                    files: 'src/fonts/**/*',
                    tasks: ['copy:fonts'],
                    options: {
                        livereload: true,
                        nospawn: true
                    }
                },
                karma: {
                    autoWatch: true,
                    files: {
                        pattern: "src/app/**/*.spec.js",
                        watched: false,
                        served: true,
                        included: true
                    },
                    tasks: ['karma:development:run']
                }
            }
        });

    // Detect what IP address the local webserver is running
    grunt.registerTask('getip', 'Tells you the ip address your server is running on.', function () {
        var os = require("os");
        var ifaces = os.networkInterfaces();
        var ip = "";
        var alias = 0;

        function checker(details) {
            if (details.family == "IPv4") {
                if (dev == "Local Area Connection") ip = details.address;

                ++alias;
            }
        }

        for (var dev in ifaces) {
            ifaces[dev].forEach(checker);
        }

        var serverMessage = 'Your server is running on: http://' + ip + ':' + port;

        grunt.log.writeln('');
        grunt.log.writeln(serverMessage['green']);
    });

    // 'develop' task for active site development
    grunt.registerTask('develop',
        ['karma:development',
         'jshint',
         'clean:all',
         'copy_static',
         'sass',
         'concat:angular_js',
         'concat:vendor_js',
         'ngAnnotate',
         'connect',
         'getip',
         'beep:error:*',
         'beep:**',
         'watch']);

    // 'build' task for creating a clean, optimised set of files for distribution
    grunt.registerTask('build:test',
        ['jshint',
         'clean:all',
         'copy_static',
         'sass',
         'concat:angular_js',
         'concat:vendor_js',
         'ngAnnotate',
         'cacheBust',
         'karma:test']);

    grunt.registerTask('build:production',
     ['jshint',
      'clean:all',
      'copy_static',
      'processhtml',
      'sass',
      'concat:angular_js_prod',
      'concat:vendor_js',
      'ngAnnotate',
      'cssmin',
      'uglify',
      'cacheBust',
      'karma:production']);

    grunt.registerTask('copy_static', [
      'copy:html',
      'copy:views',
      'copy:images',
      'copy:data',
      'copy:fonts'
    ]);
};
