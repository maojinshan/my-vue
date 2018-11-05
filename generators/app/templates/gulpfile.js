const fs = require('fs')
const path = require('path')
const gulp = require('gulp')
const vsftp = require('gulp-vsftp')
const zip = require('gulp-zip')
const moment = require('moment-kirk')
// const webpackFile = require("./config/webpack/webpack.file.conf");
const remoteServer = require('./build/webpack.remoteServer.conf')
const config = require('./config')
const packageInfo = require('./package.json')

/* 生成构建时间 存放在 生产目录里 */
gulp.task('buildTime', () =>
  fs.writeFile(path.resolve(config.build.assetsRoot) + '/buildTime.txt', moment(new Date()).format('YYYY-MM-DD HH:mm:ss') + ' ' + packageInfo.version, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!', path.resolve())
  })
)
/* 打包生产目录 */
gulp.task('zip', () =>
  gulp.src(path.resolve(config.build.assetsRoot + '/**'))
    .pipe(zip('mobile-[' + packageInfo.version + ']-[' + moment(new Date()).format('YYYY-MM-DD HH-mm-ss') + '].zip'))
    .pipe(gulp.dest('backup'))
)
/* 上传生产目录到测试环境  */
gulp.task('smart', function () {
  return gulp.src(config.build.assetsRoot + '/**')
    .pipe(vsftp(remoteServer.smart))
})
