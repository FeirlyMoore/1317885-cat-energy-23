const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');
const rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const svgstore = require('gulp-svgstore');
const del = require('del');
const fileinclude = require('gulp-file-include');
const sync = require('browser-sync').create();

// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    // .pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("docs/css"))
    .pipe(gulp.dest("source/css"))
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    // .pipe(gulp.dest("build/css"))
    .pipe(gulp.dest("docs/css"))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}

exports.styles = styles;

// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(gulp.dest("build"));
    .pipe(gulp.dest("docs"));
}

// Scripts

const scripts = () => {
  return gulp.src("source/js/script.js")
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    // .pipe(gulp.dest("build/js"))
    .pipe(gulp.dest("docs/js"))
    .pipe(terser())
    .pipe(rename("script.min.js"))
    // .pipe(gulp.dest("build/js"))
    .pipe(gulp.dest("docs/js"))
    .pipe(sync.stream());
}

exports.scripts = scripts;

// Images

const optimizeImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin({
      interlaced: false,
      progressive: false,
      optimizationLevel: 3,
      svgoPlugins: [
          { removeViewBox: false }
      ]
    }))
    // .pipe(gulp.dest("build/img"))
    .pipe(gulp.dest("docs/img"))
}

exports.images = optimizeImages;

const copyImages = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    // .pipe(gulp.dest("build/img"))
    .pipe(gulp.dest("docs/img"))
}

exports.images = copyImages;

// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    // .pipe(gulp.dest("build/img"))
    .pipe(gulp.dest("docs/img"))
}

exports.createWebp = createWebp;

// Sprite

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    // .pipe(gulp.dest("build/img"));
    .pipe(gulp.dest("docs/img"));
}

exports.sprite = sprite;

// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/img/**/*.svg",
    "!source/img/icons/*.svg",
  ], {
    base: "source"
  })
    // .pipe(gulp.dest("build"))
    .pipe(gulp.dest("docs"))
  done();
}

exports.copy = copy;

// Clean

const clean = () => {
  // return del("build");
  return del("docs");
};

// Server

const server = (done) => {
  sync.init({
    server: {
      // baseDir: "build"
      baseDir: "docs"
    },
    host: "192.168.1.71",
    tunnel: true,
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done();
}

// Watcher

const watcher = () => {
  // gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  // gulp.watch("source/*.html").on("change", sync.reload);
  gulp.watch("source/sass/**/*.scss", gulp.series(styles, reload));
  gulp.watch("source/js/**/*.js", gulp.series(scripts, reload));
  gulp.watch("source/*.html", gulp.series(html, reload));
  gulp.watch("source/img/**", gulp.series(copyImages, reload));
}

// Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
);

exports.build = build;

// const docs = gulp.series(
//   clean,
//   copy,
//   optimizeImages,
//   gulp.parallel(
//     styles,
//     html,
//     scripts,
//     sprite,
//     createWebp
//   ),
// );

// exports.docs = docs;

// Default


exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    sprite,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));
