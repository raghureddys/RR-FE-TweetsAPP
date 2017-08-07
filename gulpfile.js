/**
 * @Author: Raghu Reddy <raghureddy>
 * @Date:   8/3/17
 * @Email:  sanikommu@gmail.com
 * @Filename: gulpfile.js
 * @Last modified by:   Raghu Reddy <raghureddy>
 * @Last modified time: 8/3/17
 */

var gulp = require('gulp'),
    path = require('path'),
    less = require('gulp-less'),
    connect = require('gulp-connect'),
    runSequence = require('run-sequence'),
    paths = {
        indexFile: 'app/index.html',
        js: [
            'app/*.js'
        ],
        mainCss: './app/main.css',
        mainLess: './app/styles/main.less'
    };


// ========== server ========== //
gulp.task('server', function () {
    return connect.server({
        root: 'app',
        port: 9200,
        livereload: true
    });
});


// ========== less compilation task ========== //

gulp.task('less', function () {
    return gulp.src(paths.mainLess)
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('default', function() {
    runSequence('server', ['less']);
});