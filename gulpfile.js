const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const $ = require('gulp-load-plugins')({
  lazy: true
});

const basePath = './src/';
const deployPath = './build/';
const config = {
  url: './build/',
  styles: {
    source: basePath + 'sass/**/*.scss',
    build: deployPath + 'css'
  },
  html: {
    source: basePath + '**/*.{pug, html}',
    build: deployPath
  },
  scripts: {
    source: basePath + 'js/**/*.js',
    build: deployPath + 'js'
  },
  images: {
    source: basePath + 'images/**/*.*',
    build: deployPath + 'images/'
  }
};

gulp.task('default', ['help']);

gulp.task('help', $.taskListing);

gulp.task('dev', ['dev-styles', 'dev-scripts', 'dev-html', 'dev-images', 'dev-watch']);

gulp.task('dev-styles', () => {
  return gulp
    .src(config.styles.source)
    .pipe(errorHandler())
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 15 versions']
    }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest(config.styles.build))
    .pipe(browserSync.stream());
});

gulp.task('dev-scripts', () => {
  return gulp
    .src(config.scripts.source)
    .pipe($.babel())
    .pipe($.changed(config.scripts.build))
    .pipe(gulp.dest(config.scripts.build));
});

gulp.task('dev-html', () => {
  return gulp
    .src(config.html.source)
    .pipe(errorHandler())
    .pipe($.pug())
    .pipe($.rename({
      extname: '.html'
    }))
    .pipe($.changed(config.html.build))
    .pipe(gulp.dest(config.html.build));
});

gulp.task('dev-images', () => {
  return gulp
    .src(config.images.source)
    .pipe($.changed(config.images.build))
    .pipe(gulp.dest(config.images.build));
});

gulp.task('dev-watch', ['dev-server'], () => {
  gulp.watch(config.styles.source, ['dev-styles']);
  gulp.watch(config.html.source, ['dev-html', 'dev-bsReload']);
  gulp.watch(config.scripts.source, ['dev-scripts', 'dev-bsReload']);
  gulp.watch(config.images.source, ['dev-images', 'bsReload']);
});

gulp.task('dev-server', () => {
  let options = {
    server: {
      baseDir: config.url
    },
    files: [
      config.styles.build + '/**/*.css',
      config.html.build + '/**/*.html',
      config.scripts.build + '/js/**/*.js',
    ],
    ghostMode: {
      clicks: true,
      location: true,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    notify: true,
    reloadDelay: 0 //1000
  };

  browserSync.init(null, options);
});

gulp.task('dev-bsReload', function() {
  browserSync.reload();
});

// functions
function errorHandler() {
  return $.plumber({
    errorHandler: function(err) {
      $.notify.onError({
        title: `Error : ${err.plugin}`,
        message: `Issue : ${cleanMessage(err.extract)} | File Name ${findName(err.fileName)}:${err.line}`,
        sound: false
      })(err);

      console.log(`

/////////////////////////////////////

Error: ${err.plugin}
Issue:  ${cleanMessage(err.extract)}
File Name: ${findName(err.fileName)}:${err.line}

/////////////////////////////////////

            `);
      this.emit('end');
    }
  });
}

function cleanMessage(msg) {
  return msg.join('').replace(/\s+/g, ' ');
}

function findName(path) {
  let name = path.split('\\');
  return name[name.length - 1];
}