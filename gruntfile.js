module.exports = function(grunt){
    grunt.initConfig({
        sass: {
            scripts: {
                files: [{
                expand: true,
                cwd: 'app/sass',
                src: ['style.scss'],
                dest: 'app/css',
                ext: '.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['app/sass/*.scss','app/*.html'],
                tasks: ['process']
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', ['sass', 'cssmin']);
    grunt.registerTask('default', ['sass','cssmin', 'watch']);
}
