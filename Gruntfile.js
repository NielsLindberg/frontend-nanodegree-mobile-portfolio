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
        embed: {
            options: {
                threshold: '5KB'
            },
            some_target: {
                files: [{
                    'dist/index.html': 'src/index.html'
                }, {
                    'dist/project-2048.html': 'src/project-2048.html'
                }, {
                    'dist/project-mobile.html': 'src/project-mobile.html'
                }, {
                    'dist/project-webperf.html': 'src/project-webperf.html'
                }, {
                    'dist/views/pizza.html': 'dist/views/pizza.html'
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
                    cwd: 'dist/',
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
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-embed');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'embed', 'cssmin', 'htmlmin', 'uglify']);
};
