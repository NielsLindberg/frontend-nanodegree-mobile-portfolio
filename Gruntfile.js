module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
                    quality: 100,
                    newFilesOnly: true,
                    rename: false,
                    autoOrient: true,
                    sizes: [
                        { width: 100 }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ['**/*.{jpeg,JPG,jpg,gif,png}'],
                    dest: "dist/"
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.css'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },
        htmlmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images', 'cssmin', 'htmlmin', 'uglify']);
};
