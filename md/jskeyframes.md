# js学习之插入keyframes

在写css动画的时候需要用到keyframes，在某些特殊情况我们需要用js动态改变keyframes。

如果直接

    document.stylesheet[0].insertRule(rule)

插入的规则是不能改变的，就达不到我们动态改变keyframes的目的了。

在国内外引擎网站进行一番查阅，并经过我亲自验证之后，以下方法是可行的！

    var hourRule = "@-webkit-keyframes hourCircle{0% {transform:rotate(" +
     degHour + "deg);}\n" +"100%{transform:rotate(360deg);}}";

    var minuteRule = "@-webkit-keyframes minuteCircle{0% {transform:rotate(" +
     degMinute + "deg);}\n" + "100%{transform:rotate(360deg);}}";

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '';
    document.getElementsByTagName('head')[0].appendChild(style);
    this.stylesheet = document.styleSheets[document.styleSheets.length - 1];

    try {
    this.stylesheet.insertRule(hourRule, this.stylesheet.rules.length);
    this.stylesheet.insertRule(minuteRule, this.stylesheet.rules.length);
    } catch(e) {};

我的博客首页的小钟就是用这个方法写的。
