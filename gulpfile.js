const gulp = require("gulp"),
  concat = require("gulp-concat"), // merge files together
  sass = require("gulp-sass")(require("sass")), // convert sass to css
  sourcemaps = require("gulp-sourcemaps"), // add sourcemaps
  uglify = require('gulp-uglify'), // Minify JavaScript
  livereload = require("gulp-livereload"), // For auto refresh
  htmlmin = require('gulp-htmlmin'); // Minify Html

// html Task
gulp.task("html", () => {
  return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
    .pipe(gulp.dest("public"))
    .pipe(livereload());
});

// Css Task
gulp.task("css", () => {
  return gulp.src("src/css/**/*.*")
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/css"))
    .pipe(livereload());
});

// JS Task
gulp.task("js", () => {
  return gulp.src("src/js/*")
    .pipe(uglify())
    .pipe(gulp.dest("public/js"))
    .pipe(livereload());
});

// Watch Task
gulp.task("watch", () => {
  require("./server.js");
  livereload.listen();
  gulp.watch("src/*.html", gulp.series("html"));
  gulp.watch("src/css/**/*", gulp.series("css"));
  gulp.watch("src/js/*.js", gulp.series("js"));
});

// Default Task
gulp.task('default', gulp.series('watch'));