module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
                    quality: 100,
                    newFilesOnly: false,
                    rename: false,
                    autoOrient: true,
                    sizes: [
                        { width: 150 }
                    ]
                },
                files: [{
                    'dist/views/images/pizzeria.jpg': 'src/views/images/pizzeria.jpg'
                }]
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dist/',
                    src: ['**/*.{jpeg,png,jpg,gif}'],
                    dest: 'dist/'
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'cssmin', 'htmlmin', 'uglify']);
};
