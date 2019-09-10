

module.exports = function(grunt){
	'use strict';

	var libs = {
		jquery: true,
		aos: true,
		back_to_top: true,
		bootstrap: true,
		fontawesome: true,
		html5shiv: true,
		js_color_picker: true,
		lazy_load: true,
		lightgallery: true,
		mask: true,
		picturefill: true,
		smoothscroll: true,
		swiper: true,
		tether: true
	};

	require('load-grunt-tasks')(grunt);

	// Initialize Grunt Config

	grunt.initConfig({

		// Gets the package vars
		pkg: grunt.file.readJSON('package.json'),

		// Setting folder templates
		dirs: {
			css: '../../', // For Wordpress
			//css: '../css', For Other Sites
			js: '../js',
			sass: '../sass',
			images: '../images',
			fonts: '../fonts',
			src: '../src',
			tmp: 'tmp',
			jqver: '3.2.1'
		},

		// Downloads dependencies
		curl: {
			jquery: {
				src: 'https://code.jquery.com/jquery-<%= dirs.jqver %>.js',
				dest: '<%= dirs.js %>/libs/jquery.js'
			},
			aos: {
				src: 'https://github.com/michalsnik/aos/archive/master.zip',
				dest: '<%= dirs.tmp %>/aos.zip'
			},
			back_to_top: {
				src: 'https://github.com/CodyHouse/back-to-top/archive/master.zip',
				dest: '<%= dirs.tmp %>/back_to_top.zip'
			},
			bootstrap: {
				src: 'https://github.com/twbs/bootstrap/archive/v4.0.0-alpha.6.zip',
				dest: '<%= dirs.tmp %>/bootstrap.zip'
			},
			fontawesome: {
				src: 'https://use.fontawesome.com/releases/v5.5.0/fontawesome-free-5.5.0-web.zip',				
				dest: '<%= dirs.tmp %>/fontawesome.zip'
			},
			fullcalendar: {
				src: 'https://github.com/fullcalendar/fullcalendar/releases/download/v3.9.0/fullcalendar-3.9.0.zip',
				dest: '<%= dirs.tmp %>/fullcalendar.zip'
			},
			html5shiv: {
				src: 'https://github.com/aFarkas/html5shiv/archive/master.zip',
				dest: '<%= dirs.tmp %>/html5shiv.zip'
			},
			lazy_load: {
				src: 'https://github.com/tuupola/jquery_lazyload/archive/master.zip',
				dest: '<%= dirs.tmp %>/lazy_load.zip'
			},
			lightgallery: {
				src: 'https://github.com/sachinchoolur/lightGallery/archive/master.zip',
				dest: '<%= dirs.tmp %>/lightgallery.zip'
			},
			mask: {
				src: 'https://github.com/igorescobar/jQuery-Mask-Plugin/archive/master.zip',
				dest: '<%= dirs.tmp %>/mask.zip'
			},
			picturefill: {
				src: 'https://github.com/scottjehl/picturefill/archive/master.zip',
				dest: '<%= dirs.tmp %>/picturefill.zip'
			},
			smoothscroll: {
				src: 'https://github.com/mathiasbynens/jquery-smooth-scrolling/archive/master.zip',
				dest: '<%= dirs.tmp %>/smoothscroll.zip'
			},
			swiper: {
				src: 'https://github.com/nolimits4web/Swiper/archive/master.zip',
				dest: '<%= dirs.tmp %>/swiper.zip'
			},
			tether: {
				src: 'https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js',
				dest: '<%= dirs.js %>/libs/tether.min.js'
			}
		},

		// Unzip files
		unzip:{
			aos: {
				src: '<%= dirs.tmp %>/aos.zip',
				dest: '<%= dirs.tmp %>'
			},
			back_to_top: {
				src: '<%= dirs.tmp %>/back_to_top.zip',
				dest: '<%= dirs.tmp %>'
			},
			bootstrap: {
				src: '<%= dirs.tmp %>/bootstrap.zip',
				dest: '<%= dirs.tmp %>'
			},
			fontawesome: {
				src: '<%= dirs.tmp %>/fontawesome.zip',
				dest: '<%= dirs.tmp %>'
			},
			fullcalendar: {
				src: '<%= dirs.tmp %>/fullcalendar.zip',
				dest: '<%= dirs.tmp %>'
			},
			html5shiv: {
				src: '<%= dirs.tmp %>/html5shiv.zip',
				dest: '<%= dirs.tmp %>'
			},
			lazy_load: {
				src: '<%= dirs.tmp %>/lazy_load.zip',
				dest: '<%= dirs.tmp %>'
			},
			lightgallery: {
				src: '<%= dirs.tmp %>/lightgallery.zip',
				dest: '<%= dirs.tmp %>'
			},
			mask: {
				src: '<%= dirs.tmp %>/mask.zip',
				dest: '<%= dirs.tmp %>'
			},
			picturefill: {
				src: '<%= dirs.tmp %>/picturefill.zip',
				dest: '<%= dirs.tmp %>'
			},
			smoothscroll: {
				src: '<%= dirs.tmp %>/smoothscroll.zip',
				dest: '<%= dirs.tmp %>'
			},
			swiper: {
				src: '<%= dirs.tmp %>/swiper.zip',
				dest: '<%= dirs.tmp %>'
			}			
		},

		// Renames and moves directories and files
		rename: {
			aos_scss: {
				src: '<%= dirs.tmp %>/aos-master/src/sass/',
				dest: '<%= dirs.sass %>/aos'
			},
			aos_js: {
				src: '<%= dirs.tmp %>/aos-master/dist/*.js',
				dest: '<%= dirs.js %>/libs/aos.min.js'
			},
			aos_files: {
				src: '<%= dirs.sass %>/aos/aos.scss',
				dest: '<%= dirs.sass %>/aos/_aos.scss'
			},
			back_to_top_js: {
				src: '<%= dirs.tmp %>/back-to-top-master/js/main.js',
				dest: '<%= dirs.js %>/libs/backtotop.js'
			},
			bootstrap_scss: {
				src: '<%= dirs.tmp %>/bootstrap-4.0.0-alpha.6/scss/',
				dest: '<%= dirs.sass %>/bootstrap'
			},
			bootstrap_js: {
				src: '<%= dirs.tmp %>/bootstrap-4.0.0-alpha.6/dist/js/bootstrap.js',
				dest: '<%= dirs.js %>/libs/bootstrap.js'
			},
			bootstrap_files: {
				files: [
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap.scss'
					},
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap-grid.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap-grid.scss'
					},
					{
						src: '<%= dirs.sass %>/bootstrap/bootstrap-reboot.scss', 
						dest: '<%= dirs.sass %>/bootstrap/_bootstrap-reboot.scss'
					}
				]
			},
			fontawesome_scss: {
				src: '<%= dirs.tmp %>/fontawesome-free-5.5.0-web/scss/',
				dest: '<%= dirs.sass %>/fontawesome'
			},
			fontawesome_fonts: {
				src: '<%= dirs.tmp %>/fontawesome-free-5.5.0-web/webfonts/',
				dest: '<%= dirs.fonts %>/fontawesome'
			},
			fontawesome_files: {
				files: [
					{
						src: '<%= dirs.sass %>/fontawesome/fontawesome.scss',
						dest: '<%= dirs.sass %>/fontawesome/_fontawesome.scss'
					},
					{
						src: '<%= dirs.sass %>/fontawesome/brands.scss',
						dest: '<%= dirs.sass %>/fontawesome/_brands.scss'
					},
					{
						src: '<%= dirs.sass %>/fontawesome/regular.scss',
						dest: '<%= dirs.sass %>/fontawesome/_regular.scss'
					},
					{
						src: '<%= dirs.sass %>/fontawesome/solid.scss',
						dest: '<%= dirs.sass %>/fontawesome/_solid.scss'
					},
				]
			},
			fullcalendar_scss: {
				src: '<%= dirs.tmp %>/fullcalendar-3.9.0/fullcalendar.min.css',
				dest: '<%= dirs.sass %>/fullcalendar/_fullcalendar.scss'
			},
			fullcalendar_files: {
				files: [
					{
						src: '<%= dirs.tmp %>/fullcalendar-3.9.0/lib/jquery-ui.min.js',
						dest: '<%= dirs.js %>/libs/jquery-ui.js'
					},
					{
						src: '<%= dirs.tmp %>/fullcalendar-3.9.0/lib/moment.min.js',
						dest: '<%= dirs.js %>/libs/moment.min.js'
					},
					{
						src: '<%= dirs.tmp %>/fullcalendar-3.9.0/fullcalendar.min.js',
						dest: '<%= dirs.js %>/libs/fullcalendar.min.js'
					},
					{
						src: '<%= dirs.tmp %>/fullcalendar-3.9.0/locale-all.js',
						dest: '<%= dirs.js %>/libs/locale-all.js'
					}
				]
			},
			html5shiv_js: {
				src: '<%= dirs.tmp %>/html5shiv-master/dist/html5shiv.js',
				dest: '<%= dirs.js %>/libs/html5shiv.js'
			},
			lazy_load_js: {
				src: '<%= dirs.tmp %>/jquery_lazyload-master/jquery.lazyload.min.js',
				dest: '<%= dirs.js %>/libs/lazyload.min.js'
			},
			lightgallery_scss: {
				src: '<%= dirs.tmp %>/lightGallery-master/src/sass/',
				dest: '<%= dirs.sass %>/lightgallery'
			},
			lightgallery_js: {
				src: '<%= dirs.tmp %>/lightGallery-master/dist/js/lightgallery.min.js',
				dest: '<%= dirs.js %>/libs/lightgallery.js'
			},
			lightgallery_modules: {
				src: '<%= dirs.tmp %>/lightGallery-master/modules/',
				dest: '<%= dirs.js %>/libs/lightgallery/'
			},			
			lightgallery_fonts: {
				src: '<%= dirs.tmp %>/lightGallery-master/src/fonts/',
				dest: '<%= dirs.fonts %>/lightgallery'
			},
			lightgallery_images: {
				src: '<%= dirs.tmp %>/lightGallery-master/src/img/',
				dest: '<%= dirs.images %>/lightgallery'
			},
			mask: {
				src: '<%= dirs.tmp %>/jQuery-Mask-Plugin-master/src/*.js',
				dest: '<%= dirs.js %>/libs/mask.js'
			},
			picturefill_js: {
				src: '<%= dirs.tmp %>/picturefill-master/dist/picturefill.js',
				dest: '<%= dirs.js %>/libs/picturefill.js'
			},
			smoothscroll_js: {
				src: '<%= dirs.tmp %>/jquery-smooth-scrolling-master/jquery.smoothscroll.min.js',
				dest: '<%= dirs.js %>/libs/smoothscroll.js'
			},
			swiper_css: {
				src: '<%= dirs.tmp %>/swiper-master/dist/css/swiper.css',
				dest: '<%= dirs.sass %>/swiper/_swiper.scss'
			},
			swiper_js: {
				src: '<%= dirs.tmp %>/swiper-master/dist/js/swiper.js',
				dest: '<%= dirs.js %>/libs/swiper.js'
			}
		},

		// Javascript linting with jshint
		jshint:{
			options: {
				jshintrc: '<%= dirs.src %>/.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= dirs.js %>/libs/main.js'
			]
		},

		// Uglify to concat and minify
		uglify: {				
			dist: {
				files: {
					'<%= dirs.js %>/main.min.js': [
						'<%= dirs.js %>/libs/jquery.js',
						'<%= dirs.js %>/libs/jquery-ui.js',
						'<%= dirs.js %>/libs/aos.min.js',
						'<%= dirs.js %>/libs/backtotop.js',
						'<%= dirs.js %>/libs/tether.min.js',
						'<%= dirs.js %>/libs/bootstrap.js',
						'<%= dirs.js %>/libs/html5shiv.js',
						'<%= dirs.js %>/libs/lazyload.min.js',
						'<%= dirs.js %>/libs/lightgallery.js',
						'<%= dirs.js %>/libs/lightgallery/modules/lg-video.min.js',
						'<%= dirs.js %>/libs/lightgallery/modules/lg-thumbnail.min.js',
						'<%= dirs.js %>/libs/lightgallery/modules/lg-share.min.js',
						'<%= dirs.js %>/libs/lightgallery/modules/lg-fullscreen.min.js',
						'<%= dirs.js %>/libs/mask.js',
						'<%= dirs.js %>/libs/picturefill.js',						
						'<%= dirs.js %>/libs/smoothscroll.js',
						'<%= dirs.js %>/libs/swiper.js',
						'<%= dirs.js %>/libs/moment.min.js',
						'<%= dirs.js %>/libs/fullcalendar.min.js',
						'<%= dirs.js %>/libs/main.js'
					]
				}
			}							
		},

		// Compile scss/sass files to CSS
		sass: {
			options: {
				style: 'expanded'
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= dirs.sass %>',
					src: ['*.scss'],
					dest: '<%= dirs.css %>',
					ext: '.css'
				}]
			}
		},

		// Add fallbacks multi browser
		postcss: {
			options: {
				processors: [
					require('pixrem')(), // Add fallbacks for rem units
					require('autoprefixer')({
						browsers: 'last 2 versions'
					})
					/*, 
					// Add vendor prefixes
					require('cssnano')() // Minify the result 
					*/
				]
			},
			dist: {
				src: '<%= dirs.css %>/*.css'
			}
		},

		// Image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 10,
					progressive: true
				},
				files: [{
					expand: true,
					filter: 'isFile',
					cwd: '<%= dirs.images %>',
					src: '**/*.{png,jpg,gif}',
					dest: '<%= dirs.images %>'
				}]
			}
		},

		// Watch for changes and trigger sass, postcss, jshint, uglify and livereload browser
		watch: {
			js: {
				files: [
					'<%= jshint.all %>'
				],
				tasks: ['jshint', 'uglify']
			},
			sass: {
				files: [
					'<%= dirs.sass %>/**'
				],
				tasks: ['sass', 'postcss']
			},			
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'<%= dirs.css %>/*.css',
					'<%= dirs.js %>/*.js',
					'../**/*.php'
				]
			},
			options: {
				spawn: false
			}
		},

		// Clean directories and files
		clean: {
			options: {
				force: true
			},
			jquery_prepare: [
				'<%= dirs.js %>/libs/jquery.js'
			],	
			tether_prepare: [
				'<%= dirs.js %>/libs/tether.min.js'
			],	
			html5shiv_prepare: [
				'<%= dirs.js %>/libs/html5shiv.js'
			],
			bootstrap_prepare: [
				'<%= dirs.sass %>/bootstrap',
				'<%= dirs.js %>/bootstrap',
				'<%= dirs.js %>/libs/bootstrap.min.js',
				'<%= dirs.fonts %>/bootstrap'
			],
			fontawesome_prepare: [
				'<%= dirs.sass %>/fontawesome',
				'<%= dirs.fonts %>/fontawesome'
			],
			fullcalendar_prepare: [
				'<%= dirs.sass %>/fullcalendar/',
				'<%= dirs.js %>/libs/fullcalendar.min.js',
				'<%= dirs.js %>/libs/jquery-ui.js',
			],
			swiper_prepare: [
				'<%= dirs.sass %>/swiper',
				'<%= dirs.js %>/swiper'
			],
			picturefill_prepare: [
				'<%= dirs.js %>/libs/picturefill.js'
			],
			aos_prepare: [
				'<%= dirs.sass %>/aos/',
				'<%= dirs.js %>/aos/',
				'<%= dirs.js %>/libs/aos.js'
			],
			mask_prepare: [
				'<%= dirs.js %>/mask/',
				'<%= dirs.js %>/libs/jquery.mask.js'
			],
			lightgallery_prepare: [
				'<%= dirs.js %>/lightgallery/',
				'<%= dirs.js %>/libs/lightgallery/modules/',
				'<%= dirs.js %>/libs/lightgallery.js',
				'<%= dirs.sass %>/lightgallery/',
				'<%= dirs.fonts %>/lightgallery/',
				'<%= dirs.images %>/lightgallery/'
			],
			owl_carousel_prepare: [
				'<%= dirs.sass %>/owl_carousel',
				'<%= dirs.js %>/owl_carousel',
				'<%= dirs.js %>/libs/owl.carousel.min.js'
			],
			lazy_load_prepare: [
				'<%= dirs.js %>/libs/lazyload.min.js'
			],
			back_to_top_prepare: [
				'<%= dirs.js %>/libs/backtotop.js'
			],
			smoothscroll_prepare: [
				'<%= dirs.js %>/libs/smoothscrool.js'
			],
			clean_tmp: [
				'<%= dirs.tmp %>'
			] 
		},

		//Clean directories and files
		replace: {
			fontawesome: {
				src: ['<%= dirs.sass %>/fontawesome/_variables.scss'],
				overwrite: true,
				replacements: [
					{
						from: '../fonts',
						to: '../fonts/fontawesome'
					}	
				]
			}
		},

		// Zip the theme
		zip: {
			dist: {
				cwd: '..',
				src: [
					'../**',
					'!../src/**',
					'!../**.md',
					'!<%= dirs.sass %>/**',
					'!<%= dirs.js %>/bootstrap/**',
					'!<%= dirs.js %>/libs/**',
					'!../**.zip',
					'<%= dirs.js %>/main.min.js'
				],
				dest: '../<%= pkg.name %>.zip'
			}
		},

		// Deploy via rsync
		rsync: {
			options: {
				args: ['--verbose'],
				exclude: [
					'**.DS_Store',
					'**Thumbs.db',
					'.editorconfig',
					'.git',
					'.gitignore',
					'.jshintrc',
					'sass',
					'src',
					'README.md',
					'.ftppass'
				],
				recursive: true,
				syncDest: true
			},
			staging: {
				options: {
					src: '..',
					dest: '~/PATH/wp-content/themes/atras-da-porta',
					host: 'user@host.com'
				}
			},
			production: {
				options: {
					src: '..',
					dest: '~/PATH/wp-content/themes/atras-da-porta',
					host: 'user@host.com'
				}
			}
		},

		// FTP deploy
		'ftp-deploy': {
			build: {
				auth: {
					host: 'ftp.SEU-SITE.com',
					port: 21,
					authPath: '../.ftppass',
					authKey: 'key_for_deploy'
				},
				src: '..',
				dest: '/PATH/wp-content/themes/atras-da-porta',
				exclusions: [
					'../**.DS_Store',
					'../**Thumbs.db',
					'../.git/*',
					'../*.md',
					'../.gitignore',
					'../assets/js/**bootstrap',
					'../assets/js/**libs',
					'../assets/js/plugins.js',
					'../assets/js/main.js',
					'../*.zip',
					'../*.sublime-project',
					'../*.sublime-workspace',
					'../src/**',
					'../.ftppass'
				]
			}
		},
	});

	// Register Task

	// Default Task
	grunt.registerTask('default', [
		'jshint',
		'sass',
		//'imagemin',
		'uglify'
	]);

	// Optimize Images Task
	grunt.registerTask('optimize', [
		'imagemin'
	]);

	// Bootstrap Task
	grunt.registerTask('bootstrap', [
		'clean:clean_tmp',
		'clean:bootstrap_prepare',
		'curl:bootstrap',
		'unzip:bootstrap',
		'rename:bootstrap_scss',
		'rename:bootstrap_js',
		'rename:bootstrap_files',
		'clean:clean_tmp'
	]);

	// jQuery Task
	grunt.registerTask('jquery', [
		'clean:clean_tmp',
		'clean:jquery_prepare',
		'curl:jquery',
		'clean:clean_tmp'
	]);

	// Tether Task
	grunt.registerTask('tether', [
		'clean:clean_tmp',
		'clean:tether_prepare',
		'curl:tether',
		'clean:clean_tmp'
	]);

	// Html5shiv Task
	grunt.registerTask('html5shiv', [
		'clean:clean_tmp',
		'clean:html5shiv_prepare',
		'curl:html5shiv',
		'unzip:html5shiv',
		'rename:html5shiv_js',
		'clean:clean_tmp'
	]);

	// Fontawesome Task
	grunt.registerTask('fontawesome', [
		'clean:clean_tmp',
		'clean:fontawesome_prepare',
		'curl:fontawesome',
		'unzip:fontawesome',
		'rename:fontawesome_scss',
		'rename:fontawesome_fonts',
		'rename:fontawesome_files',
		'replace:fontawesome',
		'clean:clean_tmp'
	]);

	// Fullcalendar Task
	grunt.registerTask('fullcalendar', [
		'clean:clean_tmp',
		'clean:fullcalendar_prepare',
		'curl:fullcalendar',
		'unzip:fullcalendar',
		'rename:fullcalendar_scss',
		'rename:fullcalendar_files',
		'clean:clean_tmp'
	]);	

	// Swiper Task
	grunt.registerTask('swiper', [
		'clean:clean_tmp',
		'clean:swiper_prepare',
		'curl:swiper',
		'unzip:swiper',
		'rename:swiper_css',
		'rename:swiper_js',
		'clean:clean_tmp'
	]);

	// Picturefill Task
	grunt.registerTask('picturefill', [
		'clean:clean_tmp',
		'clean:picturefill_prepare',
		'curl:picturefill',
		'unzip:picturefill',
		'rename:picturefill_js',
		'clean:clean_tmp'
	]);

	// AOS Task
	grunt.registerTask('aos',[
		'clean:clean_tmp',
		'clean:aos_prepare',
		'curl:aos',
		'unzip:aos',
		'rename:aos_scss',
		'rename:aos_js',
		'rename:aos_files',
		'clean:clean_tmp'
	]);

	// Mask Task
	grunt.registerTask('mask',[
		'clean:clean_tmp',
		'clean:mask_prepare',
		'curl:mask',
		'unzip:mask',
		'rename:mask',
		'clean:clean_tmp'
	]);	

	// Lightgallery Task
	grunt.registerTask('lightgallery',[
		'clean:clean_tmp',
		'clean:lightgallery_prepare',
		'curl:lightgallery',
		'unzip:lightgallery',
		'rename:lightgallery_js',
		'rename:lightgallery_modules',
		'rename:lightgallery_scss',
		'rename:lightgallery_fonts',
		'rename:lightgallery_images',
		'clean:clean_tmp'
	]);	

	grunt.registerTask('owl_carousel', [
		'clean:clean_tmp',
		'clean:owl_carousel_prepare',
		'curl:owl_carousel',
		'unzip:owl_carousel',
		'rename:owl_carousel_scss',
		'rename:owl_carousel_js',
		'rename:owl_carousel_files',
		'clean:clean_tmp'
	]);	

	grunt.registerTask('lazy_load', [
		'clean:clean_tmp',
		'clean:lazy_load_prepare',
		'curl:lazy_load',
		'unzip:lazy_load',
		'rename:lazy_load_js',
		'clean:clean_tmp'
	]);

	grunt.registerTask('back_to_top', [
		'clean:clean_tmp',
		'clean:back_to_top_prepare',
		'curl:back_to_top',
		'unzip:back_to_top',
		'rename:back_to_top_js',
		'clean:clean_tmp'
	]);

	grunt.registerTask('smoothscroll', [
		'clean:clean_tmp',
		'clean:smoothscroll_prepare',
		'curl:smoothscroll',
		'unzip:smoothscroll',
		'rename:smoothscroll_js',
		'clean:clean_tmp'
	]);

	grunt.registerTask('empty',[]);

	// All Tasks
	grunt.registerTask('alltasks', [
		libs.jquery ? 'jquery' : 'empty',
		libs.lodash ? 'lodash': 'empty',
		libs.html5shiv ? 'html5shiv': 'empty',
		libs.bootstrap ? 'bootstrap': 'empty',
		libs.fontawesome ? 'fontawesome': 'empty',
		libs.fontawesome ? 'fullcalendar': 'empty',
		libs.swiper ? 'swiper': 'empty',
		libs.picturefill ? 'picturefill': 'empty',
		libs.aos ? 'aos': 'empty',
		libs.mask ? 'mask': 'empty',
		libs.lightgallery ? 'lightgallery': 'empty',
		libs.owl_carousel ? 'owl_carousel': 'empty',
		libs.lazy_load ? 'lazy_load': 'empty',
		libs.back_to_top ? 'back_to_top': 'empty',
		libs.smoothscroll ? 'smoothscroll': 'empty',
		'default'
	]);

	// Deploy Task
	grunt.registerTask('ftp', [
		'ftp-deploy',
		'zip'
	]);

	// Short aliases
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('o', ['optimize']);
	grunt.registerTask('f', ['ftp']);
	grunt.registerTask('r', ['rsync']);
	grunt.registerTask('c', ['compress']);
};

