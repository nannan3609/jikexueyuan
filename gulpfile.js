/**
 * Created by nannan on 16-5-26.
 */
var gulp=require('gulp');
var sass=require('gulp-sass');
var minifycss=require('gulp-minify-css');
var seajsCombo=require('gulp-seajs-combo');
var uglify=require('gulp-uglify');

gulp.task('sass',function(){
    return gulp.src('./stylesheet/jikexueyuan.scss')
        .pipe(sass())
        .pipe(minifycss())
        .pipe(gulp.dest('./stylesheet'));
});
//sass编译,css压缩
gulp.task('jscombo',function(){
   return gulp.src('./js/module/main.js')
       .pipe(seajsCombo({       //合并seajs模块
           ignore:['jquery'] //排除合并对象
       }))
       .pipe(uglify())     //压缩js
       .pipe(gulp.dest('./js'));
});

gulp.task('default',['sass'],function(){
   gulp.start('jscombo');
});
//执行任务