# GulpSample

Gulpタスクを書いてみる

## intall and run: default

インストール
~~~ bash
$ npm install --global gulp
~~~

とりあえず"Hollow　World"。
-> 失敗。

~~~
[23:18:08] Local gulp not found in ~/Develop/GulpSample
[23:18:08] Try running: npm install gulp
~~~

Gulpをlocalにinstallしていなかった。
[参考](http://nakajmg.github.io/blog/2014-09-03/gulp-structure.html)

~~~
$ npm install --save-dev gulp
~~~
成功。

## copy

`/app/*` -> `/dist/`　OK

igunore.htmlはコピーしない。　OK

## browserSync

serve: serverを起動し、変更を監視。　OK
server: サーバー機能　OK
reload: 再読み込み OK
