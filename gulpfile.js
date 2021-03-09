const gulp = require("gulp");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
const browserSync = require("browser-sync").create();

const cssFiles = ["./src/css/swiper.min.css", "./src/css/styles.css"];

const jsFiles = [
  "./src/js/swiper.min.js",
  "./src/js/jquery.inputmask.min.js",
  "./src/js/jquery.validate.min.js",
  "./src/js/script.js",
];

function styles() {
  return gulp
    .src(cssFiles)
    .pipe(concat("styles.min.css"))
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./build/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./src/css/**/*.css", styles);
  gulp.watch("./src/js/**/*.js", scripts);
  gulp.watch("./*.html", browserSync.reload);
}

function clean() {
  return del(["build/*"]);
}

gulp.task("styles", styles);
gulp.task("scripts", scripts);
gulp.task("watch", watch);

gulp.task("build", gulp.series(clean, gulp.parallel(styles, scripts)));
