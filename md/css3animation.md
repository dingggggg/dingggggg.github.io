# css学习之animation

## 1.@keyframes
要创建CSS3动画，你将不得不了解@keyframes规则。

@keyframes规则是创建动画，@keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。

    @keyframes myfirst
    {
        from {background: red;}
        to {background: yellow;}
    }

当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。

    div
    {
        animation: myfirst 5s;
    }

## 2.CSS3的动画属性

| 属性     | 描述     |
| :------------- | :------------- |
| animation      |所有动画属性的简写属性，除了 animation-play-state 属性。|
| animation-name |	规定 @keyframes 动画的名称
|animation-duration	|规定动画完成一个周期所花费的秒或毫秒，默认是 0
|animation-timing-function	|规定动画的速度曲线，默认是 "ease"
|animation-delay|	规定动画何时开始，默认是0
|animation-iteration-count|	规定动画被播放的次数，默认是 1
|animation-direction	|规定动画是否在下一周期逆向地播放，默认是 "normal"
|animation-play-state	|规定动画是否正在运行或暂停，默认是 "running"

下面我写一个简单示例

    @keyframes circle {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
    }

    .miCircle {
        position: absolute;
        left: 50%;
        top: 50%;
        /*transform: translate(-50%, -50%);*/
        margin-left: -10px;
        margin-top: -10px;
        border: 10px solid blue;
        border-radius: 10px;
        margin-top:-120px ;
        transform-origin:center 120px;
        animation-name: circle;
        animation-duration: 60s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

示例中蓝色小球会在60s内匀速旋转360度。

在示例中出现了

    transform-origin:center 120px;

transform-origin一般用来表示设置旋转的圆心，属性可能为百分数，也可能是具体的长度。
