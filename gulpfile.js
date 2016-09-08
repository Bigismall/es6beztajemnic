var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var runSequence = require("run-sequence").use(gulp);

gulp.task("concat", function () {
    return gulp.src("src/chapter01/*.js")
        .pipe(concat("result.js"))
        .pipe(gulp.dest("dist/chapter01"));
});

gulp.task("transpile", function () {
    return gulp.src("dist/chapter01/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/chapter01"));
});

gulp.task("default", function () {
    return runSequence("concat", "transpile");
});