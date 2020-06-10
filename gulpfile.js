'use strict';
var gulp = require ("gulp");
var sass = require("gulp-sass");
sass.compiler = require ("node-sass");
var iconfont = require ("gulp-iconfont");
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'Icons';
var uglifycss = require('gulp-uglifycss');
var sassLint = require('gulp-sass-lint');
var prefix = require ('gulp-autoprefixer');

// Convertion from scss to css, minification of css and adding prefixes
gulp.task("sass",async function(){
    return gulp.src("./sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix('last 4 versions'))
    .pipe(uglifycss({
        "uglyComent" : true
    }))
    .pipe(gulp.dest("./assets/css"));
});

// Converting svg to font
gulp.task('iconfont', async function(){
  gulp.src(['./assets/images/*.svg'], {base: 'app/assets'})
    .pipe(iconfontCss({
      fontName: fontName,
      path: './template/_icons.scss',
      targetPath: '../../../sass/abstracts/_icons.scss',
      fontPath: '../../assets/fonts/icons/'
    }))
    .pipe(iconfont({
      fontName: fontName
      }))
    .pipe(gulp.dest('./assets/fonts/icons/'));
});

// Sass-lint 
gulp.task('sass-lint', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sassLint({
        configFile: 'sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// Watching for change in folders
gulp.task("watch", function(){
    gulp.watch("./sass", gulp.series("sass-lint"));
    gulp.watch("./sass", gulp.series("sass"));
})
