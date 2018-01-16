module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            dist: {
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
            options: {
                livereaload: true
            },
            scripts: {
                files: ['app/sass/*.scss'],
                tasks: ['process']
            }
        },
        concat: {
            dist: {
                src: ['app/css/*.css'],
                dest: 'dist/css/all.css'
            }
        },
        cssmin: {
            dist: {
                files: {
                    'dist/css/all.min.css': ['dist/css/all.css']
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
