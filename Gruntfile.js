module.exports = function(grunt) {

    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
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
                    'dist/views/images/pizzeria.jpg': 'dist/views/images/pizzeria.jpg'
                }]
            }
        },
        uglify: {
            options: {
                preserveComments: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: '**/*.js',
                    dest: 'dist/'
                }]
            }
        },
        htmlmin: {
            target: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'dist/',
                    ext: '.html'
                }]
            }
        },
        embed: {
            options: {
                threshold: '5KB'
            },
            index: {
                files: {
                    'dist/index.html': 'dist/index.html'
                }
            },
            project: {
                files: {
                    'dist/project-2048.html': 'dist/project-2048.html'
                }
            },
            mobile: {
                files: {
                    'dist/project-mobile.html': 'dist/project-mobile.html'
                }
            },
            projectweb: {
                files: {
                    'dist/project-webperf.html': 'dist/project-webperf.html'
                }
            },
            pizza: {
                files: {
                    'dist/views/pizza.html': 'dist/views/pizza.html'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-embed');
    grunt.registerTask('default', ['imagemin', 'responsive_images', 'cssmin', 'uglify', 'htmlmin', 'embed']);
};
