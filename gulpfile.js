const sitegen = require('./sitegen').create({dest: "docs"});
const gulp = sitegen.gulp();

gulp.task('clear', () => sitegen.clear());

gulp.task('html', () => 
    sitegen.html()
        .frontMatter()
        .ejsmd()
        .markdown()
        .permalink()
        .ejs()
        .inline({dest: true})
        .dest()
);

gulp.task('css', () => sitegen.css().sass().dest());
gulp.task('img', () => sitegen.img().dest());
gulp.task('files', () => sitegen.files({src: 'files'}).dest());

gulp.task('default', gulp.series('clear', 'css', 'img', 'files', 'html'));
gulp.task('server', gulp.series('default', () => sitegen.serve()));
