# 居中的数种方法
## 1.
```
.center {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%,-50%);
     }
```
仅在H5有效

## 2.
```
.center{
   width:300px;
   height:200px;
   position:absolute;
   left:50%;
   top:50%;
   margin:-100px 0 0 -150px
}
```
此方法需要宽和高

## 3.
```
.vertical-container{
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
              align-items: center;
        -webkit-justify-content: center;
              justify-content: center;
    }
```
使用CSS3的flexbox

## 3.
```
.center{
    position:absolute;
    width:140px;
    height:140px;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    background:black;
}
```
使用position：absolute属性，设置top/tottom/right/left

## 4.
```
.center{
    position:fixed;
    display:block;
    top:0;
    right:0;
    bottom:0;
    left:0;
    text-align:center;
    background:rgba(0,0,0,.5);
}
.center:before{
    content:'';
    display:inline-block;
    vertical-align:middle;
    height:100%;
}
.center .content{
    display:inline-block;
    vertical-align:middle;
    width:60px;
    height:60px;
    line-height:60px;
    color:red;
    background:yellow;
}
```
最高大上的一种，使用before元素。
