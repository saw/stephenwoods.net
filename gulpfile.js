var gulp = require('gulp'),
    inlinesource = require('gulp-inline-source'),
    htmlmin = require('gulp-htmlmin'),
    insert = require('gulp-insert'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css/'))
});
 
gulp.task('default', ['sass'], function() {
    return gulp.src('./*.html')
        .pipe(inlinesource())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(insert.append('\n<!-- page source at github.com -->\n'))
        .pipe(gulp.dest('build/'));
});

gulp.task('watch', ['default'], function() {
	gulp.watch(['index.html','scss/styles.scss'], ['default']);
})