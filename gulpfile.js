// VARIABLES & PATHS

let preprocessor = 'scss', // Preprocessor (sass, scss, less, styl)
    fileswatch   = 'html,htm,txt,json,md,woff2', // List of files extensions for watching & hard reload (comma separated)
    imageswatch  = 'jpg,jpeg,png,webp,svg', // List of images extensions for watching & compression (comma separated)
    baseDir      = 'app', // Base directory path without «/» at the end
    online       = true; // If «false» - Browsersync will work offline without internet connection

let paths = {

	scripts: {
		src: [
			// 'node_modules/jquery/dist/jquery.min.js', // npm vendor example (npm i --save-dev jquery)
			baseDir + '/js/modules/**/*.js',
			baseDir + '/js/app.js' // app.js. Always at the end
		],
		dest: baseDir + '/js',
	},

	styles: {
		src:  baseDir + '/' + preprocessor + '/main.*',
		dest: baseDir + '/css',
	},

	fonts: {
		src: baseDir + '/fonts/src/**/*.ttf',
		dest: baseDir + '/fonts/dist',
	},

	otf2ttf: {
		src: baseDir + '/fonts/src/**/*.otf',
		dest: baseDir + '/fonts/src',
	},

	images: {
		src:  baseDir + '/images/src/**/*',
		dest: baseDir + '/images/dest',
	},

	deploy: {
		hostname:    'username@yousite.com', // Deploy hostname
		destination: 'yousite/public_html/', // Deploy destination
		include:     [/* '*.htaccess' */], // Included files to deploy
		exclude:     [ '**/Thumbs.db', '**/*.DS_Store' ], // Excluded files from deploy
	},

	cssOutputName: 'app.min.css',
	jsOutputName:  'app.min.js',

}

// LOGIC

const { src, dest, parallel, series, watch } = require('gulp'),
		sass         = require('gulp-sass'),
		scss         = require('gulp-sass'),
		less         = require('gulp-less'),
		styl         = require('gulp-stylus'),
		cleancss     = require('gulp-clean-css'),
		concat       = require('gulp-concat'),
		browserSync  = require('browser-sync').create(),
		uglify       = require('gulp-uglify-es').default,
		autoprefixer = require('gulp-autoprefixer'),
		shorthand	 = require('gulp-shorthand'),
		ttf2woff2	 = require('gulp-ttf2woff2'),
		fonter		 = require('gulp-fonter'),
		imagemin     = require('gulp-imagemin'),
		newer        = require('gulp-newer'),
		rsync        = require('gulp-rsync'),
		del          = require('del');

function browsersync() {
	browserSync.init({
		server: { baseDir: baseDir + '/' },
		notify: false,
		online: online
	})
}

function scripts() {
	return src(paths.scripts.src)
	.pipe(concat(paths.jsOutputName))
	.pipe(uglify())
	.pipe(dest(paths.scripts.dest))
	.pipe(browserSync.stream())
}

function styles() {
	return src(paths.styles.src)
	.pipe(eval(preprocessor)())
	.pipe(concat(paths.cssOutputName))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(shorthand())
	.pipe(cleancss( {level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
	.pipe(dest(paths.styles.dest))
	.pipe(browserSync.stream())
}

function fonts() {
	return src(paths.fonts.src)
	.pipe(ttf2woff2())
	.pipe(dest(paths.fonts.dest))
}

function otf2ttf() {
	return src(paths.otf2ttf.src)
	.pipe(fonter({
		formats: ['ttf']
	}))
	.pipe(dest(paths.otf2ttf.dest))
}

function images() {
	return src(paths.images.src)
	.pipe(newer(paths.images.dest))
	.pipe(imagemin())
	.pipe(dest(paths.images.dest))
}

function cleanimg() {
	return del('' + paths.images.dest + '/**/*', { force: true })
}

function cleandist() {
	return del('dist/**/*', { force: true })
}

function deploy() {
	return src(baseDir + '/')
	.pipe(rsync({
		root: baseDir + '/',
		hostname: paths.deploy.hostname,
		destination: paths.deploy.destination,
		include: paths.deploy.include,
		exclude: paths.deploy.exclude,
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
}

function startwatch() {
	watch(baseDir  + '/' + preprocessor + '/**/*', {usePolling: true, delay: 500}, styles);
	watch(baseDir  + '/images/src/**/*.{' + imageswatch + '}', {usePolling: true}, images);
	watch(baseDir + '/fonts/src/**/*', {usePolling: true}, fonts);
	watch(baseDir  + '/**/*.{' + fileswatch + '}', {usePolling: true}).on('change', browserSync.reload);
	watch([baseDir + '/js/**/*.js', '!' + paths.scripts.dest + '/*.min.js'], {usePolling: true}, scripts);
}

function buildcopy() {
	return src([
		'app/css/**.min.css',
		'app/js/**/*.min.js',
		'app/images/dest/**/*',
		'app/**/*.html',
	], { base: 'app' })
	.pipe(dest('dist'))
}

exports.browsersync = browsersync;
exports.assets      = series(cleanimg, styles, scripts, images);
exports.styles      = styles;
exports.scripts     = scripts;
exports.fonts		  = fonts;
exports.otf2ttf	  = otf2ttf;
exports.images      = images;
exports.cleanimg    = cleanimg;
exports.deploy      = deploy;
exports.build       = series(cleandist, styles, scripts, images, buildcopy);
exports.default     = parallel(images, styles, scripts, fonts, browsersync, startwatch);
