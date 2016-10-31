module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    usebanner: {
      dist: {
        position: 'top',
        banner: '/*! <%= pkg.name %> -== v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      files: {
        src: [
          'dist/angularis.min.js',
          'dist/angularis.min.css',
          'dist/angularis.js',
          'dist/angularis.css'
        ]
      }
    },
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          'dist/angularis.css': 'styles/index.less'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/angularis.min.css': ['dist/angularis.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/angularis.min.js':  'dist/angularis.js'
        }
      }
    },
    browserify: {
      development: {
        src: 'index.js',
        dest: 'dist/angularis.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-banner')

  grunt.registerTask('default', ['browserify', 'uglify']);
  grunt.registerTask('styles', ['less', 'cssmin']);
  grunt.registerTask('build', ['styles', 'default', 'usebanner']);
};
