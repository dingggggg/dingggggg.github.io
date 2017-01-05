# Angular学习之ui-router (嵌套路由)

一级路由够我们完成一些简单的跳转了，但是在某些特殊页面我们需要二级路由甚至三级路由。

这时候我们需要 ui-router (嵌套路由)。

#### 1.我们创建一个主页面。

    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title></title>
        <script src="Scripts/angular.js"></script>
        <script src="Scripts/angular-ui-router.js"></script>

    </head>
    <body data-ng-app="myApp">
        <h1>AngularJS Home Page (Ui-router Demonstration)</h1>
        <div data-ui-view=""></div>
    </body>
    <html>

我们需要在主页中做一些事情。
1. 我们需要引入AngularJS框架
2. 我们需要引入ui-router框架
3. 第三件事情就是让主页内容在data-ui-view展示出来，然后显示出它里面的页面


#### 2.设置路由配置

    var myApp = angular.module("myApp", [&apos;ui.router&apos;]);

    myApp.config(function ($stateProvider, $urlRouterProvider) {

       $urlRouterProvider.when("", "/PageTab");

       $stateProvider
          .state("PageTab", {
              url: "/PageTab",
              templateUrl: "PageTab.html"
          })
          .state("PageTab.Page1", {
              url:"/PageTab/Page1",
              templateUrl: "Page-1.html"
          })
          .state("PageTab.Page2", {
              url:"/PageTab/Page2",
              templateUrl: "Page-2.html"
          })
          .state("PageTab.Page3", {
              url:"/PageTab/Page3",
              templateUrl: "Page3.html"
          });
    });

我们一步步地来解释这做了什么。

Line-1: 第一行，声明AngularJS模块, 并把ui-router传入AngularJS主模块，所有的结合起来我们就得到了Angular模块。

    var myApp = angular.module("myApp", [&apos;ui.router&apos;]);

代码行-2:这一行声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.

    myApp.config(function ($stateProvider, $urlRouterProvider) {

代码行-3: 好，那这一行做什么的呢，如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 PageTab.html, 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.

    $urlRouterProvider.when("", "/PageTab");

#### 3.我们在PageTab页面管理子页面

    <div>
       <div>
           <span style="width:100px" ui-sref=".Page1"><a href="">Page-1</a></span>
           <span style="width:100px" ui-sref=".Page2"><a href="">Page-2</a></span>
           <span style="width:100px" ui-sref=".Page3"><a href="">Page-3</a></span>
       </div>
       <div>
            <div ui-view=""/>
       </div>
    </div>

点击超链接让子页面在ui-view指令下显示。
