var gulp = require('gulp'),
    less = require("gulp-less"),
    nano = require("gulp-cssnano"),
    browserSync = require("browser-sync").create(),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    addSrc = require("gulp-add-src");
//rgo = require("gulp-requirejs-optimize");

gulp.task("html", function () {
    return gulp.src("src/*.html")
        .pipe(gulp.dest("dist"));
});
gulp.task("json", function () {
    return gulp.src("src/data/*.json")
        .pipe(gulp.dest("dist/data"));
});

gulp.task("img", function () {
    return gulp.src("src/img/*.{jpg,png}")
        .pipe(gulp.dest("dist/img"))
});
gulp.task("fonts", function () {
    return gulp.src([
            "src/bower_files/bootstrap/dist/fonts/*.*",
            "src/fonts/*.*"
        ])
        .pipe(gulp.dest("dist/fonts"))
});
gulp.task("vendor-css", function () {
    return gulp.src([
            "src/bower_files/bootstrap/dist/css/bootstrap.css",
            "src/bower_files/normalize-css/normalize.css",
            "src/bower_files/datatables.net-bs/css/dataTables.bootstrap.css"

        ])
        .pipe(nano())
        .pipe(concat("vendor.min.css"))
        .pipe(gulp.dest("dist/css"));
});
gulp.task("less", function () {
    return gulp.src("src/styles/main.less")
        .pipe(less())
        .pipe(nano())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});
gulp.task("vendor-js", function () {
    return gulp.src([
            "src/bower_files/bootstrap/dist/js/bootstrap.js",
            "src/bower_files/masonry/dist/masonry.pkgd.js",
            "src/bower_files/desandro-matches-selector/matches-selector.js",
            "src/bower_files/ev-emitter/ev-emitter.js",
            "src/bower_files/fizzy-ui-utils/utils.js",
            "src/bower_files/get-size/get-size.js",
            "src/bower_files/outlayer/item.js",
            "src/bower_files/datatables.net/js/jquery.dataTables.js",
            "src/bower_files/datatables.net-bs/js/dataTables.bootstrap.js",
            "src/bower_files/jquery.nicescroll/dist/jquery.nicescroll.min.js",
            "src/main.js"

        ])
        .pipe(addSrc.prepend("src/bower_files/jquery/dist/jquery.js"))
        .pipe(concat("vendor.min.js"))
        //.pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

//gulp.task("rgs", function(){
//    return gulp.src("src/main.js")
//        .pipe(rgo({
//            mainConfigFile:"src/main.js",
//            out:"app.min.js"
//        }))
//        .pipe(gulp.dest("dist/js"));
//});
gulp.task("watch", function () {
    browserSync.init({
        server: "dist"
    });
    gulp.watch("src/styles/*.less", ["less"]);
    gulp.watch("src/*.html", ["html"]);

    gulp.watch("dist/*.html").on("change", browserSync.reload)
});

gulp.task("default", ["html", "img", "fonts", "vendor-css", "less", "vendor-js", "json", "watch"]);