var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    typescript = require('gulp-typescript'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    webserver = require('gulp-webserver');

gulp.task('ts', function () {

    //compile typescript and minify it
    gulp.src(['client/ts/**/*.ts'])
        .pipe(typescript({
            module: "amd",
            sourcemap: true,
            emitError: false
        }))
        //.pipe(uglify())
        .pipe(gulp.dest('client/build/js'));
});

gulp.task('less', function () {
    //compile less
    gulp.src(['client/less/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('client/build/css'));
});

gulp.task('lib', function () {
    //minify libs
    gulp.src(['client/lib/**'])
        .pipe(gulp.dest('client/build/lib'));
});

gulp.task('font', function () {
    //copy fonts
    gulp.src(['client/font/**'])
        .pipe(gulp.dest('client/build/font'));
});

gulp.task('tmpl', function () {
    //copy tmpl
    gulp.src(['client/tmpl/**'])
        .pipe(gulp.dest('client/build/tmpl'));
});

gulp.task('other', function () {
    //copy other
    gulp.src(['client/index.html'])
        .pipe(gulp.dest('client/build'));
});

gulp.task('clean', function () {
    //copy fonts
    gulp.src('client/build', {read: false})
        .pipe(clean());

});

gulp.task('watch', function () {
    gulp.watch('client/ts/**', ['ts']);
    gulp.watch('client/lib/**', ['lib']);
    gulp.watch('client/ts/**', ['less']);
    gulp.watch('client/ts/**', ['font']);
});

gulp.task('webserver', function() {
    gulp.src('client/build')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'client/build/index.html'
        }));
});

gulp.task('default', ['ts', 'less', 'lib', 'font', 'tmpl', 'other']);
