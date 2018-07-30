const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const image = require('gulp-image');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const minifyJs = require('gulp-minify');

gulp.task('sass', function () {
    return gulp.src('./src/styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false})) 
      .pipe(gulp.dest('./build/styles'));
  });
   
  gulp.task('pug', function () {
    return gulp.src('./src/pages/*.pug')
    .pipe(pug({

    }))
    .pipe(gulp.dest('./build'))
  });

  // gulp.task('image', function () {
  //   gulp.src('./src/image/**/*')
  //     .pipe(image())
  //     .pipe(gulp.dest('./build/image'));
  // });

  gulp.task('fonts', function () {
    return gulp.src('./src/fonts/**/*')
       .pipe(gulp.dest('./build/fonts'))
 });

 gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./build/"
        }
    });
});

gulp.task('compress', function() {
  gulp.src('./src/js/*.js')
    .pipe(minify())
    .pipe(gulp.dest('./build/js'))
});


gulp.task('watch', ['sass', 'pug','fonts', 'browserSync'], function () {
    gulp.watch('./src/styles/*.scss', ['sass']);
    gulp.watch('./src/pages/*.pug', ['pug']);
    gulp.watch('./src/image/*', ['image']);
    gulp.watch('./src/fonts/**/*', ['fonts']);
    gulp.watch('build/*.html', browserSync.reload);
    gulp.watch("./build/css/**/*.css").on("change", browserSync.reload);
    gulp.watch('./build/js/**/*.js').on("change", browserSync.reload);
  });

gulp.task('default', ['watch', 'fonts']);

