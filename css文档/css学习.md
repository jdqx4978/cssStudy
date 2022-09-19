# css学习

### 1.半透明边框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>半透明边框</title>

</head>
<body>
<button>Yes!</button>
<button class="cancel">Cancel</button>
<button class="ok">OK</button>
</body>
<style>
	// 效果 高亮遮罩层 圆角随font-size变化而变化 更少的代码
    button{
        padding: .3em .8em;
        border: 1px solid rgba(0,0,0,.1);
        background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent);
        border-radius: .2em;
        box-shadow: 0 .05em .25em rgba(0,0,0,.5);
        color: white;
        text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
        font-size: 125%;
        line-height: 1.5;
    }
    button.cancel{
        background-color: #c00;
    }
    button.ok {
        background-color: #6b0;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_19-48-24.png)

### 1.2多重边框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<!--<div style="background: yellowgreen;box-shadow: 0 0 0 10px #655;margin: 0;padding: 0;width: 20px;height: 20px;">sdfgsdfg</div>-->
<!--<div style="background: yellowgreen;box-shadow: 0 0 0 10px #655,0 0 0 15px deeppink;width: 20px;height: 20px;"></div>-->

<!--outline实现-->
<!--只能实现两个外边框-->
<!--通过outline-offset可以调整外边框的距离-->
<div style="background: yellowgreen;border: 10px solid #655;outline: 1px solid deeppink;width: 20px;height: 20px;outline-offset: 10px;border-radius: 5px"></div>
</body>
</html>
```

![](.\image\Snipaste_2022-09-18_19-53-13.png)

### 1.3灵活的背景定位

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>灵活的背景定位</title>
</head>
<body>
<div></div>
</body>
<style>
    /*要求: 针对右下角做基准,调整背景位置*/
    div {
        width: 150px;
        height: 150px;
    }
    /*calc()方案*/
    /*div{*/
    /*    background: #66bb00 url("ceshi.jpg") no-repeat calc(100% - 10px) calc(100% - 10px);*/
    /*}*/
/*background-origin方案*/
    div{
        padding: 10px;
        background: #66bb00 url("ceshi.jpg") no-repeat bottom right;
        background-origin: content-box;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_19-55-49.png)

### 1.4边框内圆角

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>边框内圆角</title>
</head>
<body>
<!--两个元素的方案-->
<div class="something-meaningful">
    <div>I have a nice subtle inner rounding,
        dont I look pretty?
    </div>
</div>

<!--<div></div>-->
</body>
<style>
    两个元素的方案 基础方案
    .something-meaningful {
        background: #655;
        padding: .8em;
    }
    .something-meaningful > div{
        background: tan;
        border-radius: .8em;
        padding: 1em;
    }
    /*不能实现外直内圆 因为outline已经随圆角变化 box-shadow也随圆角*/
    /*div{*/
    /*    background: #655;*/
    /*    border-radius: .8em;*/
    /*    padding: 1em;*/
    /*    box-shadow: 0 0 0 .6em tan;*/
    /*    !*outline: .6em solid tan;*!*/
    /*}*/
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_19-59-35.png)

### 1.5条纹背景

#### 水平条纹

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>条纹背景</title>
</head>
<body>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo3"></span>
<span class="demo4"></span>
<span class="demo5"></span>
</body>
<style>
    span{
        width: 100px;
        height: 100px;
        display: block;
        float: left;
        margin: 10px;
    }
    /*正常渐变*/
    .demo1{
        background: linear-gradient(#fb3,#58a);
    }
    /*色标具有相同位置,会产生一个无限小的区域,因此看起来没有渐变效果*/
    .demo2{
        background: linear-gradient(#fb3 50%,#58a 50%);
    }
    .demo3{
        background: linear-gradient(#fb3 50%,#58a 50%);
        background-size: 100% 30px;
    }
    /*小技巧 如果不想重复改两次百分比,后面的百分比可以用0代替*/
    .demo4{
        /*background: linear-gradient(#fb3 30%,#58a 30%);*/
        background: linear-gradient(#fb3 30%,#58a 0);
        background-size: 100% 30px;
    }
    .demo5{
        background: linear-gradient(#fb3 33.3%,#58a 0, #58a 66.6%, yellowgreen 0);
        background-size: 100% 45px;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_20-12-51.png)

#### 垂直条纹

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>条纹背景</title>
</head>
<body>
<span class="demo4"></span>
</body>
<style>
    span{
        width: 100px;
        height: 100px;
        display: block;
        float: left;
        margin: 10px;
    }
    .demo4{
        background: linear-gradient(to right, #fb3 50%,#58a 0);
        background-size: 30px 100%; /* 这里跟水平条纹的位置相反*/
    }
</style>
</html>
```

![Snipaste_2022-09-18_20-17-48](.\image\Snipaste_2022-09-18_20-17-48.png)

#### 斜向条纹

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>条纹背景</title>
</head>
<body>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo3"></span>
<span class="demo4"></span>
<span class="demo5"></span>
<span class="demo6"></span>
</body>
<style>
    span{
        width: 100px;
        height: 100px;
        display: block;
        float: left;
        margin: 10px;
    }
    /*非预期的斜向 原因这种写法只是把贴片内部旋转45° 而不是整个背景旋转*/
    .demo1{
        background: linear-gradient(45deg,#fb3 50%,#58a 0);
        background-size: 30px 30px;
    }

    .demo2{
        background: linear-gradient(45deg,#fb3 25%,#58a 0,#58a 50%,#fb3 0,#fb3 75%,#58a 0);
        background-size: 30px 30px;
    }
    .demo3{
        background: linear-gradient(45deg,#fb3 25%,#58a 0,#58a 50%,#fb3 0,#fb3 75%,#58a 0);
        /*2 * 15* 根号2 约等于42.426406871*/
        background-size: 42.426406871px 42.426406871px;
    }
    /*更好的选择*/
    .demo4{
        background: repeating-linear-gradient(45deg,#fb3,#58a 30px);
    }
    .demo5{
        background: repeating-linear-gradient(60deg,#fb3,#fb3 15px, #58a 0, #58a 30px);
    }
    .demo6{
        background: repeating-linear-gradient(45deg,#fb3 0,#fb3 25%, #58a 0, #58a 50%);
        /*用上了42.426406871px的情况只适合45度角,因为这是15px等边直角三角形的 其他角度需要另算斜角长度*/
        background-size: 42.426406871px 42.426406871px;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_20-39-03.png)



#### 灵活的同色系条纹

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>条纹背景</title>
</head>
<body>
<span class="demo1"></span>

</body>
<style>
    span{
        width: 100px;
        height: 100px;
        display: block;
        float: left;
        margin: 10px;
    }
    /*通过斜向条纹的写法需要修改4处颜色,但通过叠加的手法,只需要改一处就行，因为大多情况下条纹图案是同色系形成的，因此深色系做背景，透明斜线做叠加*/
    .demo1{
        background: #58a repeating-linear-gradient(30deg, hsla(0, 0%, 100%, .1),
        hsla(0, 0%, 100%, .1) 15px,
        transparent 0,
        transparent 30px);
    }

</style>
</html>
```

![](.\image\Snipaste_2022-09-18_20-53-19.png)

### 1.6复杂的背景图案

#### 网格

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>网格</title>
</head>
<body>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo3"></span>

</body>
<style>

    span{
        width: 100px;
        height: 100px;
        display: block;
        float: left;
        margin: 10px;
    }
    
    .demo1{
        background: white;
        background-image:linear-gradient(90deg, rgba(200, 0, 0, .5) 50%, transparent 0),
        linear-gradient(rgba(200, 0, 0, .5) 50%, transparent 0);
        background-size: 30px 30px;
    }
    .demo2{
        background: #58a;
        background-image:linear-gradient(white 1px, transparent 0),
        linear-gradient(90deg,white 1px, transparent 0);
        background-size: 30px 30px;
    }
    .demo3{
        width: 200px;
        height: 200px;
        background: #58a;
        background-image:
                linear-gradient(white 2px, transparent 0),
                linear-gradient(90deg,white 2px, transparent 0),
                linear-gradient(hsla(0,0%,100%,.3) 1px, transparent 0),
                linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);
        background-size: 75px 75px,75px 75px,15px 15px,15px 15px;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-18_21-28-30.png)

#### 波点

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>波点</title>
    <link rel="stylesheet" href="demo1.css">
</head>
<body>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo3"></span>

</body>
<style lang="scss">


</style>
</html>
```



```scss
    @mixin polka($size,$dot,$base,$accent){
        background: $base;
        background-image: radial-gradient($accent $dot,transparent 0),
                            radial-gradient($accent $dot,transparent 0);
        background-size: $size $size;
        background-position: 0 0, $size/2 $size/2;
    }
 span{
        width: 90px;
        height: 90px;
        display: block;
        float: left;
        margin: 10px;
    }
    .demo1{
        background: #655 radial-gradient(tan 30%, transparent 0);
        background-size: 30px 30px;
    }
    /*为了达到效果,第二层背景的偏移定位值必须是贴片宽度的一半,如果要改贴片的尺寸,那么就要改4次*/
    .demo2{
        background: #655;
        background-image: radial-gradient(tan 30%,transparent 0),
                            radial-gradient(tan 30%,transparent 0);
        background-size: 30px 30px;
        background-position: 0 0,15px 15px;
    }
    .demo3{
        @include polka(30px,30%,#655,tan)
    }
```

![](.\image\Snipaste_2022-09-18_22-01-51.png)

#### 棋盘

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>棋盘</title>
    <link rel="stylesheet" href="demo1.css">
</head>
<body>
<span class="demo0"></span>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo4"></span>
<span class="demo3"></span>
<span class="demo5"></span>
<span class="demo6"></span>
<span class="demo7"></span>
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25">
    <rect x="50" height="50" width="50"></rect>
    <rect y="50" height="50" width="50"></rect>
</svg>

</body>
<style lang="scss">
</style>
</html>
```

```scss
    @mixin polka($size,$dot,$base,$accent){
        background: $base;
        background-image: radial-gradient($accent $dot,transparent 0),
                            radial-gradient($accent $dot,transparent 0);
        background-size: $size $size;
        background-position: 0 0, $size/2 $size/2;
    }
 span{
        width: 90px;
        height: 90px;
        display: block;
        float: left;
        margin: 10px;
    }

    .demo0{
        background: #eee;
        background-image: linear-gradient(45deg,#bbb 25%, transparent 0);
        background-size: 30px 30px;
    }
    .demo1{
        background: #eee;
        background-image: linear-gradient(45deg,transparent 75%,#bbb 0);
        background-size: 30px 30px;
    }
    .demo2{
      background: #eee;
      background-image: linear-gradient(45deg, #bbb 25%,transparent 0),
                  linear-gradient(45deg,transparent 75%, #bbb 0);
      background-size: 30px 30px;
    }
    .demo4{
      background: #eee;
      background-image: linear-gradient(45deg, #bbb 25%,transparent 0),
                  linear-gradient(45deg,transparent 75%, #bbb 0);
      background-position: 0 0,15px 15px;
      background-size: 30px 30px;
    }
    .demo3{
      background: #eee;
      background-image: linear-gradient(45deg, #bbb 25%,transparent 0),
                  linear-gradient(45deg,transparent 75%, #bbb 0),
                  linear-gradient(45deg, #bbb 25%,transparent 0),
                  linear-gradient(45deg,transparent 75%,#bbb 0);
      background-position: 0 0,15px 15px,15px 15px,30px 30px;
      background-size: 30px 30px;
    }
    //把demo3的第一组和第二组合成一层，第三组和第四组合成一层
    .demo5{
      background: #eee;
      background-image: linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0,transparent 75%,rgba(0,0,0,.25) 0),
                        linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0,transparent 75%,rgba(0,0,0,.25) 0);
      background-position: 0 0,15px 15px;
      background-size: 30px 30px;
    }
    @mixin checkerboard($size,$base,$accent:rgba(0,0,0,.25)){
      background: $base;
      background-image: linear-gradient(45deg,$accent 25%,transparent 0,transparent 75%,$accent 0),
                        linear-gradient(45deg,$accent 25%,transparent 0,transparent 75%,$accent 0);
      background-position: 0 0,$size $size;
      background-size: 2*$size 2*$size;
    }
    .demo6{
      @include checkerboard(15px,#58a,tan)
    }
    .demo7{
      background: #eee url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25">\
    <rect x="50" height="50" width="50"></rect>\
    <rect y="50" height="50" width="50"></rect>\
    </svg>');
      background-size: 30px 30px;
    }
```

![](.\image\Snipaste_2022-09-18_23-24-51.png)
