'use strict';

module.exports = function(grunt) {

  var fs = require('fs');
  var moment = require('moment');

  grunt.initConfig({

    today: moment(),
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        options: {
          banner: '/* <%= pkg.main %> */',
          alias: {
            pos: './pos/pos',
            admin: './admin/admin',
            pulse: './client/pulse',
            rms: './rms/rms',
            pkg: '../package.json',
            route: 'page.js',
            logger: './dev/logger',
            client: './client/client',
            lodash: 'lodash',
            jQuery: 'jquery',
            bootstrap: 'bootstrap',
            semver: 'semver',
            utils: './utils/utils',
            db: 'localforage',
            request: 'request',
            configuration: './client/configuration',
            store: './client/store',
            signal: './client/signal',
            dev: './dev/dev',
            ui: './ui/ui',
            templates: './ui/templates',
            moment: 'moment'
          },
          browserifyOptions: {
            insertGlobals: true,
            basedir: './lib',
            debug: false
          }
        },
        files: {
          'tmp/opos.js': ['./client/client']
        }
      }
    },
    copy: {
      tmp: {
        files: [
          {
            expand: true,
            src: ['**'],
            cwd: 'lib/ui/assets/css/',
            dest: 'tmp'
          },
          {
            expand: true,
            src: ['*.html'],
            cwd: 'lib/ui/assets/templates/',
            dest: 'tmp'
          }
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            src: ['index.html'],
            cwd: 'tmp/',
            dest: 'dist/<%= pkg.version %>'
          }
        ]
      },
      dev: {
        files: [
          {
            expand: true,
            src: ['**'],
            cwd: 'tmp/',
            dest: 'dist/<%= pkg.version %>'
          }
        ]
      }
    },
    bump: {
      options: {
        files: ['package.json'],
        commit: false,
        createTag: false,
        updateConfigs: ['pkg'],
        push: false
      }
    },
    uglify: {
      options: {
        //banner: null,
        sourceMap: false,
        sourceMapName: 'tmp/opos.min.map',
        mangle: { except: [] },
        preserveComments:false,
        compress: {
          sequences     : true,
          properties    : true,
          dead_code     : false,
          drop_debugger : true,
          unsafe        : false,
          conditionals  : true,
          drop_console  : true,
          comparisons   : true,
          evaluate      : true,
          booleans      : true,
          loops         : true,
          unused        : false,
          hoist_funs    : true,
          hoist_vars    : true,
          if_return     : true,
          join_vars     : true,
          cascade       : false,
          side_effects  : false,
          warnings      : true,
          global_defs: {}
        }
      },
      dist: {
        files: {
          'tmp/opos.min.js': ['tmp/opos.js']
        }
      }
    },
    clean: {
      all: ['tmp']
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: false,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'tmp/index.html': 'tmp/index.html'
        }
      }
    },
    inline: {
      options:{
          cssmin: true,
          uglify: true,
          tag: ''
      },
      dist: {
        src: 'tmp/index.html',
        dest: 'tmp/index.html'
      }
    },
    symlink: {
      options: {
        overwrite: true
      },
      stable: {
        src: 'dist/<%= pkg.dist.stable %>',
        dest: 'dist/stable'
      },
      lts: {
        src: 'dist/<%= pkg.dist.lts %>',
        dest: 'dist/lts'
      },
      dev: {
        src: 'dist/<%= pkg.version %>',
        dest: 'dist/dev'
      },
    },
    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        options: {
          paths: ['lib','bin'],
          outdir: 'docs'
        }
      }
    },
    hogan: {
        mytarget : {
          options : { binderName : 'nodejs' },
          src : 'lib/ui/assets/templates/*.mustache',
          dest : 'lib/ui/templates.js'
        }
    },
    usebanner: {
      html: {
        options: {
          position: 'top',
          banner: fs.readFileSync('lib/ui/assets/templates/banner.html', { encoding: 'utf8' }),
          linebreak: true
        },
        files: {
          dist: [ 'tmp/index.html' ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-banner');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-hogan');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-inline');
  grunt.loadNpmTasks('grunt-contrib-symlink');


  grunt.registerTask('default', [
    'hogan',
    'browserify',
    'copy:tmp',
    'usebanner',
    'copy:dev',
    'clean',
    'yuidoc',
    'symlink'
  ]);

  grunt.registerTask('min', [
    'hogan',
    'browserify',
    'copy:tmp',
    'uglify',
    'copy:dev',
    'clean',
    'yuidoc',
    'symlink',
  ]);

  grunt.registerTask('docs', [
    'yuidoc'
  ]);

  grunt.registerTask('release', [
    'bump',
    'hogan',
    'browserify',
    'copy:tmp',
    'inline',
    'htmlmin',
    'copy:dist',
    'clean',
    'yuidoc',
    'symlink'
  ]);

};
