const gulp = require('gulp'),
      refresh = require('gulp-refresh')

gulp.task('html', () => {
  gulp
    .src('*.html')
    .pipe(refresh())
})

gulp.task('watch', () => {
  refresh.listen({
    port: 8083
  })
  gulp.watch('*.html', ['html'])
})