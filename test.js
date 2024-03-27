import gulp from 'gulp';
import react from 'gulp-react';
import uglify from 'gulp-uglify';

const bundleReact = () => {
  return gulp
    .src('src/components/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('dist/components'));
};

const minifyJS = () => {
  return gulp.src('src/*.js').pipe(uglify()).pipe(gulp.dest('dist'));
};

export default gulp.series(bundleReact, minifyJS);
