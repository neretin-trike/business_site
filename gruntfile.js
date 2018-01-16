module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            scripts: {
                files: [{
                expand: true,
                cwd: 'app/sass',
                src: ['*.scss'],
                dest: 'app/css',
                ext: '.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['app/sass/*.scss'],
                tasks: ['process']
            }
        },
        concat: {
            dist: {
                src: ['app/css/*.css'],
                dest: 'app/css/style.css'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/style.min.css': ['app/css/style.css']
                }
            }
        } 
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', ['newer:sass', 'concat', 'cssmin']);
    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'watch']);
}
