var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

gulp.task('tsc', function() {
    var tsProject = ts.createProject(__dirname + '/tsconfig.json');
    return gulp.src('app/**/*.ts', { follow: true })
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.', {
            sourceRoot: function (file) {
                return file.base
            }
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['tsc']);
