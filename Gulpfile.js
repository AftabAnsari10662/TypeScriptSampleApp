var gulp = require('gulp');
var tsc = require('gulp-typescript');
var browserSync = require('browser-sync');
superstatic = require('superstatic');

var typescriptSrc = './src/app/**/*.ts';

gulp.task('toes5', function() {
    gulp.src(typescriptSrc)
    .pipe(tsc({
        module:"amd",
        target:"es5"
    }))
    .pipe(gulp.dest('./src/dist/es5'))
});

gulp.task('watch', function() {
    gulp.watch([typescriptSrc],['toes5']);
});


gulp.task('run', ['toes5', 'watch'], function () {
    process.stdout.write('Starting browserSync and superstatic...\n');
    browserSync({
        port: 5000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        logPrefix: 'angularin20typescript',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './src',
            middleware: superstatic({ debug: false })
        }
    });
});