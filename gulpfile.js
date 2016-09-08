var fs = require('fs');
var path = require('path');
var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");


function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
};

gulp.task("es62es5", function () {
    var folders = getFolders("src");

    return folders.map(function (folder) {
        return gulp.src(path.join("src", folder, '/*.js'))
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest(path.join("dist", folder)))
            .pipe(babel())
            .pipe(gulp.dest(path.join("dist", folder)));
    });
});

gulp.task("default", ["es62es5"], function () {
    console.log("done!");
});
