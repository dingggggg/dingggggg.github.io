# node-sass安装失败的解决措施

大部分安装node-sass报错都是因为墙的原因。

解决方法可以用淘宝镜像。

#### 首先安装cnpm

    npm install -g cnpm --registry=https://registry.npm.taobao.org

#### 然后安装node-sass

    cnpm install node-sass

启动服务！

#### 在各社区看到的可能解决方案:
1.

更新所有包

    npm update -g

安装cnpm

    cnpm npm install cnpm -g

删掉失败的包

    node_modules/XXX

最后

    cnpm install

另， 用SS或者pac类的翻墙的，请使用proxychain来保障shell也翻墙。

    proxychain npm install 。

2.
简单粗暴，执行下面的命令即可(mac下)

    SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/ npm install node-sass --save-dev
