module.exports = function (grunt) {
    const sass = require('node-sass')

    require('load-grunt-tasks')(grunt)

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                outputStyle: 'compressed',
                sourceMap: false
            },
            dist: {
                files: {
                    'css/style.css': 'css/style.scss'
                }
            }
        },
        watch: {
            source: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    })

    grunt.registerTask('default', ['sass'])
}
