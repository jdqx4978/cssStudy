css学习

## 1背景

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



#### 伪随机背景

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>伪随机背景</title>
</head>
<body>
<span class="demo1"></span>
<span class="demo2"></span>
<span class="demo3"></span>
</body>
<style>
    span {
        width: 240px;
        height: 240px;
        float: left;
        margin-left: 30px;
    }
    .demo1 {
        background: linear-gradient(90deg, #fb3 15%, #655 0, #655 40%, #ab4 0, #ab4 65%, hsl(20, 40%, 90%) 0);
        background-size: 80px 100%;
    }
    .demo2{
        background: hsl(20, 40%, 90%);
        background-image:
         linear-gradient(90deg, #fb3 10px, transparent 0),
         linear-gradient(90deg, #ab4 20px, transparent 0),
         linear-gradient(90deg, #655 20px, transparent 0);
        background-size: 80px 100%, 60px 100%, 40px 100%;
    }
    /*使用相对质数进行平铺*/
    .demo3{
        background: hsl(20, 40%, 90%);
        background-image:
         linear-gradient(90deg, #fb3 11px, transparent 0),
         linear-gradient(90deg, #ab4 23px, transparent 0),
         linear-gradient(90deg, #655 41px, transparent 0);
        background-size: 41px 100%, 61px 100%, 83px 100%;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-19_23-37-09.png)

### 1.7连续的图像边框

```html
![Snipaste_2022-09-20_00-03-55](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-20_00-03-55.png)<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>连续的图像边框</title>
</head>
<body>
<!--最简单的办法是使用两个 HTML 元素：一个元素用来把我们的石雕图-->
<!--片设为背景，另一个元素用来存放内容，并设置纯白背景，然后覆盖在前者-->
<!--之上：-->
<div class="something-meaningful"><div>
 I have a nice stone art border,
 don't I look pretty?
</div></div>
<div class="demo1">I have a nice stone art border,
 don't I look pretty?</div>
<div class="demo2">I have a nice stone art border,
 don't I look pretty?</div>
</body>
<style>
  .something-meaningful {
     background: url(stone-art.jpg);
      /*cover此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。*/
     background-size: cover;
     padding: 1em;
  }
    .something-meaningful > div {
     background: white;
     padding: 1em;
    }
    .demo1{
        margin-top: 20px;
        padding: 1em;
        border: 1em solid transparent;
        background: linear-gradient(white, white),
         url(stone-art.jpg);
        background-size: cover;
        /*background-clip属性指定背景绘制区域。不指定的花白色背景就会渗透到padding和border*/
        background-clip: padding-box, border-box;
    }
    /*demo1的例子不协调的原因是background-origin的起点是padding-box,然后平铺到border-box，只要把origin调整成border-box就好*/
    .demo2{
        margin-top: 20px;
        padding: 1em;
        border: 1em solid transparent;
        background: linear-gradient(white, white),
         url(stone-art.jpg);
        background-size: cover;
        background-clip: padding-box, border-box;
        background-origin: border-box;
    }
    /*简写形式*/
    .demo3{
        padding: 1em;
        border: 1em solid transparent;
        background:
         linear-gradient(white, white) padding-box,
         url(stone-art.jpg) border-box 0 / cover;
    }
</style>
</html>
```

![](.\\image\Snipaste_2022-09-20_00-03-55.png)

### 1.8行军蚂蚁

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>行军蚂蚁</title>
</head>
<body>
<div>Bacon ipsum dolor amet eu adipisicing elit tongue 
    ground round ex fatback proident kielbasa ham hock. 
    Sausage beef beef ribs aliquip t-bone mollit. 
    Quis beef tri-tip sunt, cupim ut magna salami t-bone. 
    Ut laboris bresaola ribeye biltong landjaeger. 
    Chuck pork belly sed sausage.</div>
</body>
<style>
 @keyframes ants { to { background-position: 100% 100% } }

div {
	padding: 1em;
	border: 1px solid transparent;
	background: linear-gradient(white, white) padding-box,
	            repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
	animation: ants 12s linear infinite;

	max-width: 20em;
	font: 100%/1.6 Baskerville, Palatino, serif;
}
</style>
</html>
```

![](.\image\Snipaste_2022-09-21_20-27-33.png)

## 2形状

### 2.1自适应椭圆

![](\image\Snipaste_2022-09-21_20-36-21.png)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>自适应椭圆</title>
</head>
<body>
<div></div>
</body>
<style>
div {
	width: 16em;
	height: 10em;
	background: #fb3;
	border-radius: 50%;
}
</style>
</html>
```

![](.\image\Snipaste_2022-09-21_20-33-55.png)

### 2.2半椭圆

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>半椭圆</title>
</head>
<body>
<div></div>
</body>
<style>
div {
	display: inline-block;
	width: 16em;
	height: 10em;
	margin: 1em;
	background: #fb3;
	border-radius: 50% / 100% 100% 0 0;
}

div:nth-of-type(2) { border-radius: 50% /0 0 100% 100%; }
div:nth-of-type(3) { border-radius: 100% 0 0 100% / 50%; }
div:nth-of-type(4) { border-radius: 0 100% 100% 0 / 50%; }
</style>
</html>
```

![](\image\Snipaste_2022-09-21_20-50-00.png)

### 2.3四分之一圆

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>半椭圆</title>
</head>
<body>
<div></div>
</body>
<style>
div {
	display: inline-block;
	width: 16em;
	height: 10em;
	margin: 1em;
	background: #fb3;
	border-radius: 100% 0 0 0;
}

div:nth-of-type(2) { border-radius: 0 100% 0 0; }
div:nth-of-type(3) { border-radius: 0 0 100% 0; }
div:nth-of-type(4) { border-radius: 0 0 0 100%; }
</style>
</html>
```

![](\image\Snipaste_2022-09-21_23-04-58.png)



### 2.4 糖果button网站

http://simurai.com/archive/buttons

### 2.5平行四边形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>平行四方形</title>
</head>
<body>
<a class="button">
 <div>click me</div>
</a>
</body>
<style lang="less">
    /*基础方案*/
.button { transform: skewX(45deg); }
.button > div { transform: skewX(-45deg);width:200px;height: 30px }

.button {
	display: inline-block;
	padding: .5em 1em;
	border: 0;
    margin: .5em;
	background: #58a;
	color: white;
    /*text-transform转换不同元素中的文本：
    none	默认。定义带有小写字母和大写字母的标准的文本。
    capitalize	文本中的每个单词以大写字母开头。
    uppercase	定义仅有大写字母。
    lowercase	定义无大写字母，仅有小写字母。
    inherit	规定应该从父元素继承 text-transform 属性的值。*/
	text-transform: uppercase;
    /*下划线*/
	text-decoration: none;
	font: bold 200%/1 sans-serif;
}
    /*伪元素方案*/
/*.button {*/
/*	position: relative;*/
/*	display: inline-block;*/
/*	padding: .5em 1em;*/
/*	border: 0; margin: .5em;*/
/*	background: transparent;*/
/*	color: white;*/
/*	text-transform: uppercase;*/
/*	text-decoration: none;*/
/*	font: bold 200%/1 sans-serif;*/
/*}*/

/*.button::before {*/
/*	content: ''; !* To generate the box *!*/
/*	position: absolute;*/
/*	top: 0; right: 0; bottom: 0; left: 0;*/
/*	z-index: -1;*/
/*	background: #58a;*/
/*	transform: skew(45deg);*/
/*}*/
</style>
</html>
```

![](\image\Snipaste_2022-09-22_00-04-05.png)

### 2.6菱形

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>菱形</title>
</head>
<body>
<!--<div class="diamond">-->
<!--    <img src="stone-art.jpg" alt=""/>-->
<!--</div>-->
<img src="stone-art.jpg" alt="">
</body>
<style lang="less">
    /*不理想的做法*/
    /*.diamond {*/
    /*	width: 200px;*/
    /*	transform: rotate(45deg);*/
    /*	overflow: hidden;*/
    /*    margin: 200px 0 0 50px*/
    /*}*/

    /*.diamond img {*/
    /*	max-width: 100%;*/
    /*	transform: rotate(-45deg);*/
    /*}*/
    /*普通方案 用lingxing.png*/
    /*.diamond {*/
    /*    width: 250px;*/
    /*    height: 250px;*/
    /*    transform: rotate(45deg);*/
    /*    overflow: hidden;*/
    /*}*/
    /*!*1.42为等边三角形斜边长的长度 1.42n 图片不是正方形 效果不够完美*!*/
    /*.diamond > img {*/
    /*    max-width: 100%;*/
    /*    transform: rotate(-45deg) scale(1.42);*/
    /*}*/
    /*裁切路径方案 可以不用等边图片*/
img {
	max-width: 250px;
	margin: 20px;
    /*这下面为4个点，每个点对应的坐标位置*/
	clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
	transition: 1s;
}

img:hover {
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
</html>
```

![](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-22_20-51-29.png)

### 2.7切角效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>菱形</title>
    <link rel="stylesheet" href="demo1.css">
</head>
<body>
<div>
    Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!
</div>
</body>
<style lang="css">
    /*渐变方案*/
div {
	background: #58a;
	background: linear-gradient(135deg, transparent 15px, #58a 0) top left,
	            linear-gradient(-135deg, transparent 15px, #58a 0) top right,
	            linear-gradient(-45deg, transparent 15px, #58a 0) bottom right,
	            linear-gradient(45deg, transparent 15px, #58a 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;

	padding: 1em 1.2em;
	max-width: 12em;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
}
    /*裁切路径方案 这个方法最大的好处在于，我们可以使用任意类型的背景，甚至可以对
替换元素（比如图片）进行裁切。它还有一个更
大的缺点，就是当内边距不够宽时，它会裁切掉文本，*/
div {
	background: #58a;
	clip-path:
	 		polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
	 		calc(100% - 20px) 100%,
	 		20px 100%, 0 calc(100% - 20px), 0 20px);
	
	padding: 1em 1.2em;
	max-width: 12em;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
}
    /*内联 SVG 与 border-image 方案*/
    div {
	border: 21px solid transparent;
	border-image: 1 url('data:image/svg+xml,\
	                      <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" fill="%2358a">\
	                      <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2" />\
	                      </svg>');
	background: #58a;
	background-clip: padding-box;
	
	padding: .2em .3em;
	max-width: 12em;
	color: white;
	font: 150%/1.6 Baskerville, Palatino, serif;
}
</style>
</html>
```

```scss
@mixin beveled-corners($bg,
 $tl:0, $tr:$tl, $br:$tl, $bl:$tr) {
 background: $bg;
 background:
 linear-gradient(135deg, transparent $tl, $bg 0)
 top left,
 linear-gradient(225deg, transparent $tr, $bg 0)
 top right,
 linear-gradient(-45deg, transparent $br, $bg 0)
 bottom right,
 linear-gradient(45deg, transparent $bl, $bg 0)
 bottom left;
 background-size: 50% 50%;
 background-repeat: no-repeat; }
div{
  @include beveled-corners(#58a, 15px, 5px);
}
```

![](\image\Snipaste_2022-09-23_00-15-28.png)

### 2.8弧形切角

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>弧形切角</title>
    <link rel="stylesheet" href="demo1.css">
</head>
<body>
<div>
    Hey, focus! You’re supposed to be looking at my corners, not reading my text. The text is just placeholder!
</div>
</body>
<style lang="css">
div {
	background: #58a;
	background:	radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
	            radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
	            radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
	            radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
	background-size: 50% 50%;
	background-repeat: no-repeat;

	padding: 1em 1.2em;
	max-width: 12em;
	color: white;
	font: 130%/1.6 Baskerville, Palatino, serif;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-23_00-36-08.png)

### 2.9梯形标签页

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>梯形</title>
    <link rel="stylesheet" href="demo1.css">
</head>
<body>
<!-- This HTML is invalid and just for demo purposes. Don't use multiple main elements! -->

<nav>
	<a href="#">Home</a>
	<a href="#" class="selected">Projects</a>
	<a href="#">About</a>
</nav>
<main>
	Content area
</main>

<nav class="left">
	<a href="#">Home</a>
	<a href="#" class="selected">Projects</a>
	<a href="#">About</a>
</nav>
<main>
	Content area
</main>

<nav class="right">
	<a href="#">Home</a>
	<a href="#" class="selected">Projects</a>
	<a href="#">About</a>
</nav>
<main>
	Content area
</main>
</body>
<style lang="css">
/**
 * Trapezoid tabs
 */
/*对元素使用了 3D 变形之后，其内部的变形效应是“不可逆转”的*/
/*指定 transform-origin: bottom;，当它在 3D 空间中旋转时，可以把它的底边固定住。*/
/*垂直方向上的缩放程度（也就是scaleY() 变形属性）在达到 130% 左右时刚好可以补足它在高度上的缩水*/
/*这个技巧最大的优点在于样式层面上极大的灵活性 给它添加了背景、边框、圆角、投影等一系列样式。
它们都可以完美生效！*/
/*缺点：斜边的角度依赖于元素的宽度。*/
body {
	padding: 40px;
	font: 130%/2 Frutiger LT Std, sans-serif;
}

nav {
	position: relative;
	z-index: 1;
	padding-left: 1em;
}

nav > a {
	position: relative;
	display: inline-block;
	padding: .3em 1em 0;
	color: inherit;
	text-decoration: none;
	margin: 0 -.3em;
}

nav > a::before,
main {
	border: .1em solid rgba(0,0,0,.4);
}

nav a::before {
	content: ''; /* To generate the box */
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	z-index: -1;
	border-bottom: none;
	border-radius: .5em .5em 0 0;
	background: #ccc linear-gradient(hsla(0,0%,100%,.6), hsla(0,0%,100%,0));
	box-shadow: 0 .15em white inset;
	transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom;
}

nav a.selected { z-index: 2;}

nav a.selected::before {
	background-color: #eee;
	margin-bottom: -.08em;
}

main {
	display: block;
	margin-bottom: 1em;
	background: #eee;
	padding: 1em;
	border-radius: .15em;
}

nav.left > a::before {
	transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom left;
}

nav.right { padding-left: 2em; }

nav.right > a::before {
	transform: scale(1.2, 1.3) perspective(.5em) rotateX(5deg);
	transform-origin: bottom right;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-24_12-54-13.png)

### 2.10简单的饼图

#### 基于 transform 的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>梯形</title>
</head>
<body>
<div class="pie">0%</div>
<div class="pie">20%</div>
<div class="pie">40%</div>
<div class="pie">60%</div>
<div class="pie">80%</div>
<script>
    document.querySelectorAll('.pie').forEach(function(pie) {
        const p = parseFloat(pie.textContent);
        pie.style.animationDelay = '-' + p + 's';
});
</script>
</body>
<style lang="css">
.pie {
	display: inline-block;
	position: relative;
	width: 100px;
	line-height: 100px;
	border-radius: 50%;
	background: yellowgreen;
	background-image: linear-gradient(to right, transparent 50%, #655 0);
	color: transparent;
	text-align: center;
}

@keyframes spin {
	to { transform: rotate(.5turn); }
}
@keyframes bg {
	50% { background: #655; }
}

.pie::before {
	content: '';
	position: absolute;
	top: 0; left: 50%;
	width: 50%; height: 100%;
	border-radius: 0 100% 100% 0 / 50%;
	background-color: inherit;
	transform-origin: left;
	animation: spin 50s linear infinite, bg 100s step-end infinite;
	animation-play-state: paused;
	animation-delay: inherit;
}
</style>
</html>
```

#### 基于svg的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>梯形</title>
</head>
<body>
<div class="pie">20%</div>
<div class="pie">60%</div>
<div class="pie animated">0%</div>

</body>
<script>
    function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
}

 $$('.pie').forEach(function(pie) {
	var p = parseFloat(pie.textContent);
	var NS = "http://www.w3.org/2000/svg";
	var svg = document.createElementNS(NS, "svg");
	var circle = document.createElementNS(NS, "circle");
	var title = document.createElementNS(NS, "title");

	circle.setAttribute("r", 16);
	circle.setAttribute("cx", 16);
	circle.setAttribute("cy", 16);
	circle.setAttribute("stroke-dasharray", p + " 100");

	svg.setAttribute("viewBox", "0 0 32 32");
	title.textContent = pie.textContent;
	pie.textContent = '';
	svg.appendChild(title);
	svg.appendChild(circle);
	pie.appendChild(svg);
});
</script>
<style lang="css">
.pie {
	width: 100px;
	height: 100px;
	display: inline-block;
	margin: 10px;
	transform: rotate(-90deg);
}

svg {
	background: yellowgreen;
	border-radius: 50%;
}

circle {
	fill: yellowgreen;
	stroke: #655;
	stroke-width: 32;
}

@keyframes grow { to { stroke-dasharray: 100 100 } }

.pie.animated circle {
	animation: grow 2s infinite linear;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-24_14-01-33.png)

### 2.11投影

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>投影</title>
</head>
<body>
<div></div>
<div></div>
<div></div>
</body>
<style lang="css">
    /*单侧投影*/
    div {
        width: 1.6in;
        height: 1in;
        background: #fb3;
        box-shadow: 0 5px 4px -4px black;
        float: left;
        margin-left: 10px;
    }

    /*临边投影*/
    div:nth-child(2) {
        box-shadow: 3px 3px 6px -3px black;
    }

    /*双侧投影*/
    div:nth-child(3) {
        box-shadow: 5px 0 5px -5px black,
        -5px 0 5px -5px black;
    }
</style>
</html>
```

![](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-24_15-31-32.png)

### 2.12不规则投影

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>投影</title>
</head>
<body>
<div class="speech">Speech bubble</div>
<div class="dotted">Dotted border</div>
<div class="cutout">Cutout corners</div>
</body>
<style lang="css">
div {
	position: relative;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	vertical-align: bottom;
	box-sizing: border-box;
	width: 5.9em;
	height: 5.2em;
	margin: .6em;
	background: #fb3;
	/*box-shadow: .1em .1em .3em rgba(0,0,0,.5);*/
	-webkit-filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
	filter: drop-shadow(.1em .1em .1em rgba(0,0,0,.5));
	font: 200%/1.6 Baskerville, Palatino, serif;
	text-align: center;
}

.speech {
	border-radius: .3em;
}

.speech::before {
	content: '';
	position: absolute;
	top: 1em;
	right: -.7em;
	width: 0;
	height: 0;
	border: 1em solid transparent;
	border-left-color: #fb3;
	border-right-width: 0;
}

.dotted {
	background: transparent;
	border: .3em dotted #fb3;
}

.cutout {
	border: .5em solid #58a;
	border-image: 1 url('data:image/svg+xml,\
	                     <svg xmlns="http://www.w3.org/2000/svg"\
		                 width="3" height="3" fill="%23fb3">\
		     	         <polygon points="0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2"/>\
		     	</svg>');
	background-clip: padding-box;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-24_15-44-06.png)

tip：任何非透明的部分都会被一视同仁地打上投影，比如说text-shadow已经设置了，drop-shadow也会在投影的基础上投影

### 2.13染色

#### 基于滤镜的方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>染色</title>
</head>
<body>
<img src="lingxing.png"  alt=""/>
</body>
<style lang="css">
    /*sepia()，它会给图片增加一种降饱和度的橙黄色染色效果，几乎所有像素的色相值会被收敛到 35~40;
    saturate() 滤镜来给每个像素提升饱和度 假设我们想要的主色调是 hsl(335, 100%, 50%)，那就需要把饱和度提升一些，
    于是我们将饱和度参数设置为 4。具体取值取决于实际情况，我们通常需要用肉眼来观察和判断。
    但我们并不希望把图片调为这种橙黄色调，而是稍深的亮粉色。因此，我们还需要再添加一个 hue-rotate() 滤镜，
    把每个像素的色相以指定的度数进行偏移。为了把原有的色相值 40 改变为 335，我们需要增加大约 295 度（335 – 40）：
    */
    /*sepiar()将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0；*/
    /*saturate()转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。
    若值未设置，值默认是1。*/
    /*hue-rotate()  给图像应用色相旋转。"angle"一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。*/
img {
	max-width: 640px;
	transition: 1s filter, 1s -webkit-filter;
	-webkit-filter: sepia(1) saturate(4) hue-rotate(295deg);
	filter: sepia(1) saturate(4) hue-rotate(295deg);
}

img:hover,
img:focus {
	-webkit-filter: none;
	filter: none;
}
</style>
</html>
```

#### 居于混合模式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>染色</title>
</head>
<body>
<!--第一种选择-->
<a href="#something">
 <img src="lingxing.png" alt="Rawrrr!" />
</a>
<!--第二种选择-->
<div style="background-image:url(lingxing.png)" class="tinted-image"></div>
</body>
<style lang="css">
    /*第一种选择：需要把图片包裹在一个容器中，并把容器的背景色设置为我们想要的主色调。*/
    a {
        background: hsl(335, 100%, 50%);
        display: inline-block;
        transition: .5s background-color;
        background-size: cover;
        width: 640px;
        height: 440px;
        overflow: hidden;
    }
    img {
        mix-blend-mode: luminosity;
    }
    a:hover{
        background-color: transparent;
    }
    /*第二种选择：不用图片元素，而是用 <div> 元素——把这个元素的 第一层背景设置为要染色的图片，并把第二层的背景设置为我们想要的主色调*/
    .tinted-image {
        margin-top: 10px;
        width: 640px;
        height: 440px;
        background-size: cover;
        background-color: hsl(335, 100%, 50%);
        background-blend-mode: luminosity;
        transition: .5s background-color;
    }

    .tinted-image:hover {
        background-color: transparent;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-24_16-04-41.png)

#### 一般方法

使用图像处理软件来生成图片的两个版本，然后再写一些简单的 CSS 代码来处理这两个版本的交替显现

tip：它们的主要问题在于：

图片的尺寸需要在 CSS 代码中写死； 

在语义上，这个元素并不是一张图片，因此并不会被读屏器之类的设备读出来。

### 2.14毛玻璃

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>毛玻璃</title>
</head>
<body>
<main>
<blockquote>“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”</em>
<footer>— <cite>Oscar Wilde, The Picture of Dorian Gray</cite></footer>
</blockquote>
</main>
</body>
<style lang="css">

body {
	min-height: 100vh;
	box-sizing: border-box;
	margin: 0;
    /*这里的padding-top用的真好 让我对盒子的理解有了新的理解*/
	padding-top: calc(50vh - 6em);
	font: 150%/1.6 Baskerville, Palatino, serif;
}

body, main::before {
	background: url("lingxing.png") 0 / cover fixed;
}

main {
	position: relative;
	margin: 0 auto;
	padding: 1em;
	max-width: 23em;
	background: hsla(0,0%,100%,.25) border-box;
	overflow: hidden;
	border-radius: .3em;
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
}

main::before {
	content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: -30px;
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: blur(20px);
}

blockquote { font-style: italic }
blockquote cite { font-style: normal; }
</style>
</html>
```

<img src="\image\Snipaste_2022-09-24_17-01-42.png" style="zoom:50%;" />

### 2.15折角

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>折角</title>
</head>
<body>
<div class="demo">“The only way to get rid of a temptation is to yield to it.”
— Oscar Wilde, The Picture of Dorian Gray</div>
<div class="note">“The only way to get rid of a temptation is to yield to it.”
— Oscar Wilde, The Picture of Dorian Gray</div>
</body>
<style lang="css">
/*普通45度折角方案*/
.demo {
	width: 12em;
	background: #58a; /* Fallback */
	background:
		linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.4) 0) 100% 0 no-repeat,
		linear-gradient(-135deg, transparent 1.5em, #58a 0);
	background-size: 2em 2em, auto;

	padding: 2em;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
}

/**
 * Folded corner effect — at an angle
 */
/*30度折角方案*/
.note {
	position: relative;
	width: 12em;
	background: #58a; /* Fallback */
	background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
	padding: 2em;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
	border-radius: .5em;
}

.note::before {
	content: '';
	position: absolute;
	top: 0; right: 0;
	width: 1.73em; height: 3em;
	background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
	transform: translateY(-1.3em) rotate(-30deg);
	transform-origin: bottom right;
	border-bottom-left-radius: .5em;
	box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15)
}
/*多角度复用方案*/
/*在scss文件中*/
    <!--多角度复用方案-->
<!--在scss文件中-->
<div class="note">“The only way to get rid of a temptation is to yield to it.”
— Oscar Wilde, The Picture of Dorian Gray</div>
<div class="note">“The only way to get rid of a temptation is to yield to it.”
— Oscar Wilde, The Picture of Dorian Gray</div>
<div class="note">“The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
— Oscar Wilde, The Picture of Dorian Gray</div> 
</style>
</html>
```

```scss
//@import "compass/css3";

@mixin folded-corner($background, $size, $angle: 30deg) {

position: relative;
background: $background; /* Fallback */
background: linear-gradient($angle - 180deg, transparent $size, $background 0);
border-radius: .5em;

$x: $size / sin($angle);
$y: $size / cos($angle);

&::before {
	content: '';
	position: absolute;
	top: 0; right: 0;
	background: linear-gradient(to left bottom, transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
	width: $y;
	height: $x;
	transform: translateY($y - $x) rotate(2*$angle - 90deg);
  transform-origin: bottom right;
	border-bottom-left-radius: inherit;
	box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);
}

}

.note {
 	position: relative;
 	display: inline-block;
 	vertical-align: top;
	width: 15em;
 	padding: 2em;
  margin: 0 1rem;
	color: white;
	font: 100%/1.6 Baskerville, Palatino, serif;
	border-radius: .5em;
	@include folded-corner(#58a, 1.5em, 25deg);
}

.note + .note {
  font-size: 130%;
 	@include folded-corner(#655, 2em, 70deg);
}

.note:nth-child(3) {
  width: 20em;
 	@include folded-corner(yellowgreen, 1.8em, 45deg);
}

body {
	/* Showcase that the effect supports any backdrop */
	background: repeating-linear-gradient(-45deg, #ddd 0, #ddd 25%, white 0, white 50%) 0 / 6px 6px;
	box-sizing: border-box;
	padding: 1em;
	height: 100vh;
}
//SCSS还没有原生支持三角函数。如果想正常使用三角函数，需要用到 Compass 框架（http://compass-style.org）或 其他库。借助泰勒展开式，还可
//以自己写一套三角函数的实现。 另外，Stylus和LESS原生内置了三角函数。
```

![](\image\Snipaste_2022-09-25_01-35-39.png)



## 3文字排印

### 3.1连字符断行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<div>
    “The only way to get rid of a temptation is to yield to it.”
</div>
</body>
<style lang="css">
    /*宽度 字体大小都会影响断字*/
    div {
        width: 10em;
        font: 180%/1.4 Baskerville, serif;
        text-align: justify;
        hyphens: auto;
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_11-45-34.png)

### 3.2插入换行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>

<dl>
    <dt>Name:</dt>
    <dd>Lea Verou</dd>
    <dt>Email:</dt>
    <dd>lea@verou.me</dd>
    <dd>lea@verou.me</dd>
    <dt>Location:</dt>
    <dd>Earth</dd>
</dl>

</body>
<style lang="css">
    /**
     * Inserting line breaks
     */

    dt, dd {
        display: inline;
        margin: 0;
    }

    dd {
        font-weight: 600;
    }

    dd + dt:before {
        content: "\A";
        white-space: pre;
    }

    dd + dd::before {
        content: ', ';
        font-weight: normal;
        margin-left: -.25em;
    }

    body {
        font: 150%/1.6 Baskerville, Palatino, serif;
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_12-12-59.png)

### 3.3文本行的斑马行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>

<pre><code>while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>
</body>
<style lang="css">
pre{
    /*因为加了内边距 所以要通过background-origin调整背景起始位置*/
    /*前提就是我们处理的是代码段。在其他情况下，如果有行内元素把行框撑得比常规行高更大（比如有张图片或行内元素设置了更大的字号），则这个效果也会被破坏*/
    padding: .5em;
    line-height: 1.5;
    font-family: Consolas, Monaco, monospace;
    background: hsl(20, 50%, 95%) linear-gradient(rgba(120, 0, 0, .1) 50%, transparent 0);
    background-size: auto 3em;
    background-origin: content-box;
}
</style>
</html>
```

![Snipaste_2022-09-25_13-03-57](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-25_13-03-57.png)

### 3.4调整tab的宽度

```htnl
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>

<pre><code>// Default tab size
while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>

<pre><code>// tab-size: 2;
while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>

<pre><code>// tab-size: 4;
while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>

<pre><code>// tab-size: 0;
while (true) {
	var d = new Date();
	if (d.getDate()==1 &amp;&amp;
	    d.getMonth()==3) {
		alert("TROLOLOL");
	}
}</code></pre>
</body>
<style lang="css">
/**
 * Adjusting tabs
 */

pre {
	padding: .5em;
	line-height: 1.5;
	background: hsl(20, 50%, 95%);
	font-family: Consolas, Monaco, monospace;
}

pre:nth-of-type(2) { tab-size: 2 }
pre:nth-of-type(3) { tab-size: 4 }
pre:nth-of-type(4) { tab-size: 0 }

code {
	font: inherit;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-25_13-12-04.png)

### 3.5连字

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>

Common ligatures: fi ff fl ffi ffl <br />
Discretionary ligatures: st ct
</body>
<style lang="css">
body {
	font: 200%/1.6 "Adobe Caslon Pro", Baskerville, serif;
	font-variant-ligatures: common-ligatures discretionary-ligatures historical-ligatures;
}
</style>
</html>
```

tip：谷歌未支持、字体不支持或window系统不支持

### 3.6华丽的 & 符号

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<h1>HTML & CSS</h1>
</body>
<style lang="css">
/**
 * Fancy Ampersands
 */

@font-face {
	font-family: Ampersand;
	src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
	unicode-range: U+26;
}

h1 {
	font-family: Ampersand, Helvetica, sans-serif;
}
</style>
</html>
```

tip：没有该字体或不支持

### 3.7自定义下划线

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<p>“The only way to <a>get rid of a temptation</a> is to <a>yield</a> to it.”</p>
<p>“The only way to <a>get rid of a temptation</a> is to <a>yield</a> to it.”</p>
<p>“The only way to <a class="wavy">get rrid of a temptatoin</a> is to <a class="wavy">yeild</a> to it.”</p>
</body>
<style lang="css">
body{
	font-size: 250%;
}
a {
	background: linear-gradient(gray, gray) no-repeat;
	background-size: 100% 1px;
	background-position: 0 1.02em;
	text-shadow: .05em 0 white, -.05em 0 white;
}

p:nth-child(2) a {
	background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
	background-size: .2em 2px;
	background-position: 0 1em;
}
/*波浪线*/
.wavy {
	background: linear-gradient(-45deg, transparent 40%, red 0, red 60%, transparent 0) 0 1em,
	            linear-gradient(45deg, transparent 40%, red 0, red 60%, transparent 0) .1em 1em;
	background-repeat: repeat-x;
	background-size: .2em .1em;
	text-shadow: .05em 0 white, -.05em 0 white;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-25_20-53-22.png)

### 3.8现实中的字体效果

#### 凸版印刷效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<p>“The only way to get rid of a temptation is to yield to it.”</p>
<p>“The only way to get rid of a temptation is to yield to it.”</p>
</body>
<style lang="css">
body{
	font-size: 250%;
}
p{
    padding: .8em 1em;
    background: hsl(210, 13%, 60%);
    color:hsl(210, 13%, 30%);
    text-shadow: 0 1px 1px hsla(0,0%,100%,.8);
}
p + p{
    background: hsl(210,13%,30%);
    color: hsl(210,13%,60%);
    text-shadow:0 -1px 1px black;
}
</style>
</html>
```

![](\image\Snipaste_2022-09-25_21-07-12.png)

#### 空心字

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<h1>CSS</h1>

<h1>
    <svg overflow="visible" width="2em" height="1.2em">
        <use xlink:href="#css"/>
        <text id="css" y="1em">CSS</text>
    </svg>
</h1>
</body>
<style lang="css">
    body {
        background: deeppink;
        font-size: 250%;
    }

    h1 {
        margin: 0;
        color: white;
    }

    h1:nth-child(1) {
        text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
    }

    h1 text {
        fill: currentColor
    }

    h1 use {
        stroke: black;
        stroke-width: 6;
        stroke-linejoin: round;
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_21-21-42.png)

#### 文字外发光

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<div>
    <a href="http://csssecrets.io">Glow</a>
</div>

</body>
<style lang="css">
    /*a {*/
    /*    color: #ffc;*/
    /*    text-decoration: none;*/
    /*    transition: 1s;*/
    /*}*/

    /*a:hover {*/
    /*    text-shadow: 0 0 .1em, 0 0 .3em;*/
    /*}*/

    div {
        font-size: 250%;
        background: #203;
    }
    /*使用blur的好处就是浏览器不支持知会没效果，但text-shadow不支持，文字会不见*/
    a {
        background: #203;
        text-decoration: none;
        color: white;
        transition: 1s;
    }

    a:hover {
        filter: blur(.1em);
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_21-32-12.png)

#### 文字凸起效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
</head>
<body>
<div>CSS3d</div>

</body>
<style lang="css">
div{
    padding: 1em;
    background: #58a;
    color: white;
	text-shadow: 0 1px hsl(0,0%,85%),
	             0 2px hsl(0,0%,80%),
	             0 3px hsl(0,0%,75%),
	             0 4px hsl(0,0%,70%),
	             0 5px hsl(0,0%,65%),
                0 5px 10px black;
    font-weight: bold;
    font-size: 300%;
}
</style>
</html>
```

```scss
//@mixin text-3d($color: white, $depth: 5) {
// $shadows: ();
// $shadow-color: $color;
// @for $i from 1 through $depth {
// $shadow-color: darken($shadow-color, 10%);
// $shadows: append($shadows,
// 0 ($i * 1px) $shadow-color, comma);
// }
// color: $color;
// text-shadow: append($shadows,
// 0 ($depth * 1px) 10px black, comma);
//}
//h1 { @include text-3d(#eee, 4); }

@function text-retro($color: black, $depth: 8) {
  $shadows: (1px 1px $color,);
  @for $i from 2 through $depth {
    $shadows: append($shadows,
                    ($i*1px) ($i*1px) $color, comma);
  }
  @return $shadows;
}

h1 {
  color: white;
  background: hsl(0, 50%, 45%);
  text-shadow: text-retro();
}
```

![](\image\Snipaste_2022-09-25_21-43-48.png)

### 3.9环形文字

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<div class="circular">
    <svg viewBox="0 0 100 100">
        <path d="M 0,50 a 50,50 0 1,1 0,1 z"
              id="circle"/>
        <text>
            <textPath xlink:href="#circle">
                circular reasoning works because
            </textPath>
        </text>
    </svg>
</div>
<!--<div class="circular">-->
<!--    circular reasoning works because-->
<!--</div>-->
<script>
    // function $$(selector, context) {
    //     context = context || document;
    //     var elements = context.querySelectorAll(selector);
    //     return Array.prototype.slice.call(elements);
    // }
    //
    // $$('.circular').forEach(function (el) {
    //     var NS = "http://www.w3.org/2000/svg";
    //
    //     var svg = document.createElementNS(NS, "svg");
    //     svg.setAttribute("viewBox", "0 0 100 100");
    //
    //     var circle = document.createElementNS(NS, "path");
    //     circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
    //     circle.setAttribute("id", "circle");
    //
    //     var text = document.createElementNS(NS, "text");
    //     var textPath = document.createElementNS(NS, "textPath");
    //     textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
    //     textPath.textContent = el.textContent;
    //     text.appendChild(textPath);
    //
    //     svg.appendChild(circle);
    //     svg.appendChild(text);
    //
    //     el.textContent = '';
    //     el.appendChild(svg);
    // });
</script>
</body>
<style lang="css">
    /*基础方案*/
    .circular {
        width: 20em;
        height: 20em;
        margin: 3em auto 0;
        font-size: 120%;
    }

    .circular svg {
        display: block;
        overflow: visible;
    }

    .circular path {
        fill: none;
    }

    /*复用方案*/
    /*body {*/
    /*    font: bold 120% Helvetica, sans-serif;*/
    /*}*/

    /*.circular {*/
    /*    width: 30em;*/
    /*    height: 30em;*/
    /*    margin: 4em auto 0;*/
    /*}*/

    /*.circular svg {*/
    /*    display: block;*/
    /*    overflow: visible;*/
    /*    transition: 10s linear transform;*/
    /*}*/

    /*.circular svg:hover {*/
    /*    transform: rotate(-2turn);*/
    /*}*/

    /*.circular text {*/
    /*    fill: currentColor*/
    /*}*/

    /*.circular path {*/
    /*    fill: none;*/
    /*}*/
</style>
</html>
```

![](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-25_22-01-58.png)

## 4用户体验

### 4.1选用合适的鼠标光标

![](\image\Snipaste_2022-09-25_22-13-27.png)

![](\image\Snipaste_2022-09-25_22-16-15.png)

tip：这是mac系统的图标

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<button disabled>Disabled button</button>
</body>
<style lang="css">
    /*禁用*/
    :disabled, [disabled], [aria-disabled="true"] {
        cursor: not-allowed;
    }
    /*看视频时隐藏光标*/
    video {
        cursor: url('transparent.gif');
        cursor: none;
    }
</style>
</html>
```

### 4.2扩大可点击区域

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<button>+</button>
</body>
<style lang="css">
    /*对于触摸屏或者比较小的按钮可以增加它的可点击区域*/
    /*基于边框的方案*/
    button {
        padding: .3em .5em;
        border: 10px solid transparent;
        border-radius: 50%;
        background: #58a;
        background-clip: padding-box;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .3) inset;
        color: white;
        font: bold 150%/1 sans-serif;
        cursor: pointer;
    }

    /*基于伪元素的方案*/
    button {
        position: relative;
        padding: .3em .5em;
        background: #58a;
        border-radius: 50%;
        border: 1px solid rgba(0, 0, 0, .3);
        box-shadow: 0 .1em .2em -.05em rgba(0, 0, 0, .5);
        color: white;
        font: bold 150%/1 sans-serif;
        cursor: pointer;
    }

    button:before {
        content: '';
        position: absolute;
        top: -10px;
        right: -10px;
        bottom: -10px;
        left: -10px;
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_22-42-53.png)

### 4.3自定义复选框

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<input type="checkbox" id="awesome"/>
<label for="awesome">Awesome!</label>
</body>
<style lang="css">
    input[type="checkbox"] + label::before {
        content: '\a0';
        display: inline-block;
        vertical-align: .2em;
        width: .8em;
        height: .8em;
        margin-right: .2em;
        border-radius: .2em;
        background: silver;
        text-indent: .15em;
        line-height: .65;
    }

    input[type="checkbox"]:checked + label::before {
        content: '\2713';
        background: yellowgreen;
    }

    input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
    }

    input[type="checkbox"]:focus + label::before {
        box-shadow: 0 0 .1em .1em #58a;
    }

    input[type="checkbox"]:disabled + label::before {
        background: gray;
        box-shadow: none;
        color: #555;
    }
</style>
</html>
```

![](\image\Snipaste_2022-09-25_23-02-58.png)

### 4.4开关式按钮

```html
![Snipaste_2022-09-25_23-06-59](C:\Users\Administrator\Desktop\cssbiji\cssStudy\css文档\image\Snipaste_2022-09-25_23-06-59.png)<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<input type="checkbox" id="awesome" autofocus />
<label for="awesome">Awesome!</label>

<input type="checkbox" id="awesome2" checked />
<label for="awesome2">Awesome!</label>
</body>
<style lang="css">


input[type="checkbox"] {
	position: absolute;
	clip: rect(0,0,0,0);
}

input[type="checkbox"] + label {
	display: inline-block;
	padding: .35em .5em .2em;
	background: #ccc;
	background-image: linear-gradient(#ddd, #bbb);
	border: 1px solid rgba(0,0,0,.2);
	border-radius: .3em;
	box-shadow: 0 1px white inset;
	text-align: center;
	text-shadow: 0 1px 1px white;
	cursor: pointer;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:active + label {
	box-shadow: .04em .1em .2em rgba(0,0,0,.6) inset;
	border-color: rgba(0,0,0,.3);
	background: #bbb;
}

body {	font: 150%/1.6 sans-serif; }
</style>
</html>
```

![Snipaste_2022-09-25_23-06-59](\image\Snipaste_2022-09-25_23-06-59.png)

### 4.5通过阴影弱化背景-遮罩层

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body class="dimmed">
<!--<div class="overlay"></div>-->
<!--<div class="lightbox">sdffffffffffffffffffffffffff</div>-->
<!--box-shadow方案-->
<!--<img src="lingxing.png" class="lightbox"/>-->
<!--<p>-->
<!--    Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork.-->
<!--    Elit chicken ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.</p>-->
<!--<p>-->
<!--    Pork chop ad cow spare ribs capicola ball tip alcatra cillum magna short ribs tempor.-->
<!--    Pork loin do sint magna ea pork belly duis. Shoulder ullamco chicken porchetta, ham anim veniam venison.-->
<!--    Fugiat tenderloin venison, turducken non pork chop ribeye enim. Beef turkey salami, ipsum prosciutto commodo-->
<!--    cupidatat.-->
<!--    Tri-tip ham hock non brisket pig cupim commodo ball tip nulla turkey kielbasa corned beef flank. Hamburger pariatur-->
<!--    ham,-->
<!--    porchetta cupidatat sirloin pork loin quis nulla culpa tail esse.</p>-->
<!--<p>Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt.-->
<!--    Nostrud porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage cillum-->
<!--    shoulder minim esse.-->
<!--    Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.</p>-->
<!--<p>Et dolor occaecat dolore doner shoulder. Swine pancetta tri-tip irure turducken,-->
<!--    kevin est meatball aliqua aute quis ham venison sunt. Consequat pancetta sint beef turkey.-->
<!--    Fugiat occaecat commodo, short ribs corned beef aliquip elit eiusmod pork belly ut eu tri-tip.-->
<!--    Sint aute picanha proident corned beef ad beef dolore landjaeger. Laboris est deserunt tempor,-->
<!--    bresaola ham hock non brisket frankfurter ad leberkas aute sirloin. Minim et ribeye shank pork loin sint corned beef-->
<!--    ball tip-->
<!--    dolor.</p>-->
<!--<p>Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla meatloaf.-->
<!--    Adipisicing aliqua kielbasa nulla proident.-->
<!--    Ground round meatloaf kevin, shank adipisicing pork frankfurter t-bone spare ribs cupidatat.-->
<!--    Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto. Non minim picanha, ad in-->
<!--    occaecat fugiat veniam dolor-->
<!--    deserunt.</p>-->

<!--dialog方案-->
<button onclick="document.querySelector('#modal').showModal()">Click me</button>
<dialog id="modal">
    O HAI!
    <button onclick="this.parentNode.close()">Close</button>
</dialog>
</body>
<style lang="css">
    /*增加html元素方案*/
    /*.overlay { !* 用于遮挡背景 *!*/
    /*    position: fixed;*/
    /*    top: 0;*/
    /*    right: 0;*/
    /*    bottom: 0;*/
    /*    left: 0;*/
    /*    background: rgba(0, 0, 0, .5);*/
    /*}*/

    /*.lightbox { !* 需要吸引用户注意的元素 *!*/
    /*    position: absolute;*/
    /*    z-index: 1;*/
    /*    !* [其余样式] *!*/
    /*}*/
    /*box-shadow方案*/
    /*.lightbox {*/
    /*    position: fixed;*/
    /*    top: 50%;*/
    /*    left: 50%;*/
    /*    margin: -200px;*/
    /*    box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .8);*/
    /*}*/
    dialog::backdrop {
        background: rgba(0, 0, 0, .8)
    }
    /*伪元素方案*/
    /*移植性不好，chrome不支持*/
</style>
</html>
```

![](\image\Snipaste_2022-09-25_23-26-51.png)

### 4.6通过模糊弱化背景

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<dialog>O HAI, I’m a dialog. Click on me to dismiss.</dialog>
<main>
    <button>Show dialog</button>
    <p>
        Bacon ipsum dolor amet consectetur short loin ut tri-tip alcatra ground round jowl beef meatloaf in pork.
        Elit chicken ea spare ribs. Shank andouille ex boudin picanha turkey esse. Do doner fugiat tongue.</p>
    <p>
        Pork chop ad cow spare ribs capicola ball tip alcatra cillum magna short ribs tempor.
        Pork loin do sint magna ea pork belly duis. Shoulder ullamco chicken porchetta, ham anim veniam venison.
        Fugiat tenderloin venison, turducken non pork chop ribeye enim. Beef turkey salami, ipsum prosciutto commodo
        cupidatat.
        Tri-tip ham hock non brisket pig cupim commodo ball tip nulla turkey kielbasa corned beef flank. Hamburger
        pariatur
        ham,
        porchetta cupidatat sirloin pork loin quis nulla culpa tail esse.</p>
    <p>Chuck filet mignon flank pork chop mollit enim veniam sed pork loin aliquip sausage prosciutto in deserunt.
        Nostrud porchetta non nulla sunt. Cupim et velit picanha laborum salami capicola exercitation alcatra sausage
        cillum
        shoulder minim esse.
        Pig boudin aliquip aute, tail ut cow incididunt short loin aliqua.</p>
    <p>Et dolor occaecat dolore doner shoulder. Swine pancetta tri-tip irure turducken,
        kevin est meatball aliqua aute quis ham venison sunt. Consequat pancetta sint beef turkey.
        Fugiat occaecat commodo, short ribs corned beef aliquip elit eiusmod pork belly ut eu tri-tip.
        Sint aute picanha proident corned beef ad beef dolore landjaeger. Laboris est deserunt tempor,
        bresaola ham hock non brisket frankfurter ad leberkas aute sirloin. Minim et ribeye shank pork loin sint corned
        beef
        ball tip
        dolor.</p>
    <p>Doner alcatra pastrami pig, strip steak eu in frankfurter occaecat in filet mignon chuck short loin nulla
        meatloaf.
        Adipisicing aliqua kielbasa nulla proident.
        Ground round meatloaf kevin, shank adipisicing pork frankfurter t-bone spare ribs cupidatat.
        Sed ham non duis enim, in ipsum fugiat est tongue short ribs ad bresaola prosciutto. Non minim picanha, ad in
        occaecat fugiat veniam dolor
        deserunt.</p>
</main>
<script>
    function $(sel) {
        return document.querySelector(sel);
    }

    var dialog = $('dialog');
    var main = $('main');

    $('button').onclick = function () {

        dialog.setAttribute('open', '');

        main.classList.add('de-emphasized');
    }

    dialog.onclick = function () {
        if (dialog.close) {
            dialog.close();
        } else {
            dialog.removeAttribute('open');
        }

        main.classList.remove('de-emphasized');
    }
</script>
</body>
<style lang="css">
/**
 * De-emphasizing by blurring (AND dimming)
 */

main {
	transition: .6s;
	background: white;
}

main.de-emphasized {
	-webkit-filter: blur(3px);
	filter: blur(3px);
}

dialog {
	position: fixed;
	top: 50%; left: 50%;
	z-index: 1;
	width: 10em;
	padding: 2em;
	margin: -5em;
	border: 1px solid silver;
	border-radius: .5em;
	box-shadow: 0 .2em .5em rgba(0,0,0,.5),
	            0 0 0 100vmax rgba(0,0,0,.2);
}

dialog:not([open]) {
	display: none;
}

body {
	font: 150%/1.6 Baskerville, Palatino, serif;
}
</style>
</html>
```

![](.\image\Snipaste_2022-09-26_22-03-33.png)

### 4.7滚动提示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<!-- Geeky cat names! -->
<ul>
	<li>Ada Catlace</li>
	<li>Alan Purring</li>
	<li>Schrödingcat</li>
	<li>Tim Purrners-Lee</li>
	<li>Webkitty</li>
	<li>Json</li>
	<li>Void</li>
	<li>Neko</li>
	<li>NaN</li>
	<li>Cat5</li>
	<li>Vector</li>
</ul>
</body>
<style lang="css">
/**
 * Scrolling hints
 */

ul {
	display: inline-block;
	overflow: auto;
	width: 7.2em;
	height: 7em;
	border: 1px solid silver;
	padding: .3em .5em;
	list-style: none;
	font: 100 200%/1.6 'Frutiger LT Std', sans-serif;
	background: linear-gradient(white 15px, hsla(0,0%,100%,0)) 0 0 / 100% 50px,
	            radial-gradient(at top, rgba(0,0,0,.2), transparent 70%) 0 0 / 100% 15px,
	            linear-gradient(to top, white 15px, hsla(0,0%,100%,0)) bottom / 100% 50px,
	            radial-gradient(at bottom, rgba(0,0,0,.2), transparent 70%) bottom / 100% 15px;
	background-repeat: no-repeat;
	background-attachment: local, scroll, local, scroll;
	margin-top: 30px;
}
</style>
</html>
```

![](.\image\Snipaste_2022-09-26_22-04-33.png)

### 4.8交互式的图片对比控件

#### css方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<div class="image-slider">
 <div>
 <img src="lingxing.png" alt="Before" />
 </div>
 <img src="lingxing1.png" alt="After" />
</div>
</body>
<style lang="css">
/**
 * Interactive image comparison - with CSS resize
 */

.image-slider {
	position:relative;
	display: inline-block;
}

.image-slider > div {
	position: absolute;
	top: 0; bottom: 0; left: 0;
	width: 50%;
	max-width: 100%;
	overflow: hidden;
	resize: horizontal;
}

.image-slider > div:before {
	content: '';
	position: absolute;
	right: 0; bottom: 0;
	width: 12px; height: 12px;
	padding: 5px;
	background: linear-gradient(-45deg, white 50%, transparent 0);
	background-clip: content-box;
	cursor: ew-resize;
	-webkit-filter: drop-shadow(0 0 2px black);
	filter: drop-shadow(0 0 2px black);
}

.image-slider img {
	display: block;
	user-select: none;
}
</style>
</html>
```

![](.\image\Snipaste_2022-09-26_22-34-25.png)

#### javascript方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>

<div class="image-slider">
    <div>
        <img src="lingxing.png" alt="Before"/>
    </div>
    <img src="lingxing1.png" alt="After"/>
</div>
<script>
    function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elements);
    }

    $$('.image-slider').forEach(function (slider) {
        // 创建附加的div元素，并用它包住第一个图片元素
        // 案例给的代码会报错，先用拿到div取代创建
        var div = document.querySelector('.image-slider').querySelector('div');
        // 创建滑块
        var range = document.createElement('input');
        range.type = 'range';
        range.oninput = function () {
            div.style.width = this.value + '%';
        };
        slider.appendChild(range);
    });
</script>
</body>
<style lang="css">
    .image-slider {
        position: relative;
        display: inline-block;
    }

    .image-slider > div {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 50%;
        max-width: 100%;
        overflow: hidden;
        display: inline-block;
    }

    .image-slider img {
        display: block;
        user-select: none;
    }

    .image-slider input {
        position: absolute;
        left: 0;
        bottom: 10px;
        margin: 0;
        filter: contrast(.5);
        mix-blend-mode: luminosity;
        width: 50%;
        transform: scale(2);
        transform-origin: left bottom;
    }
</style>
</html>
```

![](.\image\Snipaste_2022-09-26_22-56-59.png)



## 5结构与布局

### 5.1自适应内部元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>

<p>Let’s assume we have some text here. Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone
    occaecat.</p>
<figure>
    <img src="lingxing.png"/>
    <figcaption>
        The great Sir Adam Catlace was named after Countess Ada Lovelace, the first programmer ever.
    </figcaption>
</figure>
<p>We also have some more text here. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta.</p>
</body>
<style lang="css">
    /**
     * Intrinsic sizing
     */

    figure {
        max-width: 300px;
        max-width: min-content;
        margin: auto;
    }

    figure > img {
        max-width: inherit
    }

    /* Basic styling */

    figure {
        padding: 10px;
        border: 1px solid silver;
    }
</style>
</html>
```

### 5.2精确控制表格列宽

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<section>
    <h1>With table-layout: auto</h1>
    <div>
        <table>
            <tr>
                <td>如果我们不……</td>
                <td>指定单元格的宽度，则这些单元格就会根据它们内容的长
                    短来分配宽度。也就是说，内容较长的单元格所能分配到
                    的宽度也较多
                </td>
            </tr>
        </table>

        <table>
            <tr>
                <td>如果我们不……</td>
                <td>指定单元格的宽度，则这些单元格就会根据
                    它们内容的长短来分配宽度。也就是说，内
                    容较长的单元格所能分配到的宽度也较多
                </td>
            </tr>
            <tr>
                <td>表格的每一行都会参与到列
                    宽的计算中，而不仅是第一
                    行
                </td>
                <td>注意，这个表格的列宽分配结果跟上面那个
                    表格不同
                </td>
            </tr>
        </table>

        <table>
            <tr>
                <td style="width: 1000px">即使我们为单元格指定了
                    宽度，也未必会得到对应
                    的结果。比如这个单元格
                    的宽度被指定为
                    <code>1000px</code>…
                </td>
                <td style="width: 2000px">.由于
                    外层容器所能提供的空间远远不足<code>3000px</code>，
                    这两个单元格的宽度会按比例缩小，分别得
                    到总宽度的 33.3% 和 66.6%
                </td>
            </tr>
        </table>

        <table>
            <tr>
                <td>如果我们禁
                    止文本折行
                    行为，那么
                    表格宽度可
                    能会远远超
                    出其容器的
                    宽度
                </td>
                <td class="preformatted">且 <code>text-overflow: ellipsis</code> 对此也无能为力，这一点很遗憾</td>
            </tr>
        </table>

        <table>
            <tr>
                <td>大图片或代
                    码块也可能
                    会导致同样
                    的问题
                </td>
                <td><img src="haijing.png"/></td>
            </tr>
        </table>
    </div>
</section>

<section>
    <h1>With table-layout: fixed</h1>
    <div></div>
</section>
<script>
    document.querySelector('section + section div').innerHTML = document.querySelector('section:first-of-type div').innerHTML;
</script>
</body>
<style lang="css">
    /**
     * Taming table column widths
     */

    body {
        background: #ddd
    }

    section {
        width: 500px;
        margin: 2em;
        background: white;
    }

    table {
        border-collapse: collapse;
        margin-bottom: 1em;
        width: 100%;
    }

    section + section table {
        table-layout: fixed
    }

    td {
        border: 1px solid #aaa;
    }

    td.preformatted {
        white-space: pre;
        font-family: Consolas, Monaco, monospace;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
</html>
```

<img src=".\image\Snipaste_2022-09-26_23-13-46.png" style="zoom:50%;" />

### 5.3根据兄弟元素的数量来设置样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<ul class="palette">
    <li>
        <div class="color-options">
            <a class="add" href="#">Add</a>
            <a class="delete" href="#">Delete</a>
        </div>
    </li>
</ul>
<script>
    function $$(expr, con) {
        return [].slice.call((con || document).querySelectorAll(expr));
    }

    var colors = [
            '#D6E055', // Agave
            '#082323', '#E6E2AF', '#A7A37E', '#EFECCA', '#046380', // Sandy stone beach
            '#1C171D', '#FEE169', '#CDD452', '#F9722E', '#C9313D', // Sushi Maki
            '#2E95A3', '#50B8B4', '#C6FFFA', '#E2FFA8'  // Agave
        ],
        palette = document.querySelector('.palette'),
        template = palette.firstElementChild;

    function addColor(template) {
        var li = template.cloneNode(true);
        var color = colors.pop();
        colors.unshift(color);
        li.style.background = color;
        palette.insertBefore(li, template.nextSibling);
    }

    palette.onclick = function (evt) {
        var button = evt.target;

        if (button.className == 'add') {
            addColor(button.parentNode.parentNode);
        } else if (button.className == 'delete') {
            var li = button.parentNode.parentNode;
            li.parentNode.removeChild(li);
        }
    }
</script>
</body>
<style lang="css">
    /**
     * Styling by sibling count: Color palette example
     */

    /* Hide "color" 4 items or more */
    .palette li:first-child:nth-last-child(n+4) .color-options a:after,
    .palette li:first-child:nth-last-child(n+4) ~ li .color-options a:after {
        content: none;
    }

    /* Hide word when 6 items or more */
    .palette li:first-child:nth-last-child(n+6) .color-options a,
    .palette li:first-child:nth-last-child(n+6) ~ li .color-options a {
        color: transparent;
        font-size: 0;
    }

    .palette li:only-child .delete {
        display: none;
    }

    /* From this point it’s just styling */
    .palette {
        display: flex;
        height: 200px;
        max-width: 900px;
        font: bold 90%/1 sans-serif;
    }

    .palette li {
        flex: 1;
        list-style: none;
        background: #D6E055;
    }

    .color-options {
        background: rgba(0, 0, 0, .5);
        padding: 10px;
        margin: 0 10px;
        overflow: hidden;
        border-radius: 0 0 10px 10px;
    }

    .color-options .add {
        float: left;
    }

    .color-options .delete {
        float: right;
    }

    .color-options a {
        color: white;
        text-decoration: none;
    }

    .color-options a:before {
        display: inline-block;
        font-size: 1rem;
        width: 1.3rem;
        margin-right: .3rem;
        text-align: center;
        line-height: 1.3;
        background: white;
        border-radius: 50%;
        letter-spacing: normal;
    }

    .color-options .add:before {
        content: '✚';
        color: #590;
    }

    .color-options .delete:before {
        content: '✖';
        color: #b00;
    }

    .color-options a:after {
        content: ' color';
        font-weight: normal;
    }
</style>
</html>
```

![Snipaste_2022-10-09_21-38-05](.\image\Snipaste_2022-10-09_21-38-05.png)

### 5.4满幅的背景，定宽的内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<header>
	<h1>Fluid background, <br />fixed content</h1>
</header>
<section>
	<h1>Heading</h1>
	<p>Bacon ipsum dolor amet voluptate et shoulder, ipsum flank tongue exercitation commodo sed beef ribs drumstick in venison laborum. Laboris ut enim id drumstick, et aute esse. Consequat ad kielbasa anim pork loin turkey qui cupidatat drumstick doner labore. Nulla sirloin jerky do sed magna meatloaf. Ribeye ea ut elit leberkas laboris sausage corned beef drumstick cillum non.</p>
</section>
<section>
	<h1>Another heading</h1>
	<p>Nostrud landjaeger cillum beef cow tail cupidatat non mollit voluptate jowl. Enim sunt in, flank hamburger proident qui. Id aute excepteur chuck magna tempor ipsum pork chop t-bone. Frankfurter meatball pork loin beef et leberkas pork. Pig ball tip pancetta in.</p>
	<p>Ribeye in veniam ipsum flank. Elit incididunt t-bone proident meatball. Porchetta exercitation prosciutto sausage chuck ut eu brisket shank pastrami turkey sunt laboris tenderloin anim. Landjaeger do venison laboris kevin.</p>
</section>
<footer>
	<p>&copy; 2015 Lea Verou (j/k, feel free to use wherever)</p>
	<p>Consectetur et t-bone pork loin. Tri-tip cupim in, spare ribs velit exercitation in. Tempor cillum fugiat, nisi leberkas reprehenderit anim laboris proident cow. Eu fatback kevin sint, ad shoulder in venison picanha. Sausage drumstick capicola, culpa boudin pork belly minim aute ipsum biltong picanha venison nulla adipisicing.</p>
</footer>
</body>
<style lang="css">
/**
 * Fluid background, fixed content
 */

header, section, footer {
	padding: 1em calc(50% - 350px);
}

footer {
	background: #333;
	color: white;
}

header {
	background: orange;
	color: white;
}

section + section {
	background: #eee;
}

body {
	margin: 0;
	font: 100%/1.5 sans-serif;
}
</style>
</html>
```

<img src=".\image\Snipaste_2022-10-09_21-46-41.png" style="zoom:50%;" />

### 5.5垂直居中

#### 基于绝对定位的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<main>
	<h1>Am I centered yet?</h1>
	<p>Center me, please!</p>
</main>
</body>
<style lang="css">
main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	padding: 1em 1.5em;
	box-sizing: border-box;
	background: #655;
	color: white;
	text-align: center;
}

h1 {
	margin: 0 0 .2em;
	font-size: 150%;
}

p {
	margin: 0;
}

body {
	background: #fb3;
	font: 100%/1.5 sans-serif;
}
</style>
</html>
```

#### 基于视口单位的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<main>
	<h1>Am I centered yet?</h1>
	<p>Center me, please!</p>
</main>
</body>
<style lang="css">
/**
 * Vertical centering - Viewport unit method
 */
/*这个技巧的实用性是*/
/*相当有限的，因为它只适用于在视口中居中的场景。*/
main {
	width: 18em;
	padding: 1em 1.5em;
	margin: 50vh auto 0;
	transform: translateY(-50%);
	box-sizing: border-box;
	background: #655;
	color: white;
	text-align: center;
}

h1 {
	margin: 0 0 .2em;
	font-size: 150%;
}

p {
	margin: 0;
}

body {
	background: #fb3;
	font: 100%/1.5 sans-serif;
}
</style>
</html>
```

#### 基于 Flexbox 的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<main>
	<h1>Am I centered yet?</h1>
	<p>Center me, please!</p>
</main>
</body>
<style lang="css">
/**
 * Vertical centering - Flexbox solution
 */

* { margin: 0 }

body {
	display: flex;
	min-height: 100vh;
}

main {
	padding: 1em 2em;
	margin: auto;
	box-sizing: border-box;
	background: #655;
	color: white;
	text-align: center;
}

h1 {
	margin-bottom: .2em;
	font-size: 150%;
}

body {
	background: #fb3;
	font: 100%/1.5 sans-serif;
}
</style>
</html>
```

### 5.6紧贴底部的页脚

#### 更灵活的解决方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<header>
	<h1>Site name</h1>
</header>
<main>
	<input type="checkbox" id="contents" /><label for="contents">Toggle contents</label>
	<p>Bacon ipsum dolor sit amet turkey veniam shankle, culpa short ribs kevin t-bone occaecat. Et laborum venison nostrud, ut veniam sint kielbasa ullamco pancetta. Qui drumstick tail, bacon leberkas shoulder capicola laborum. Minim ipsum bacon, mollit laboris t-bone pariatur. Ham hock reprehenderit sint beef, sausage pig eiusmod t-bone shankle strip steak.</p>
	<p>Cow enim excepteur, boudin dolore lorem magna fugiat consequat voluptate. Picanha fugiat chicken, cupim aliquip magna filet mignon prosciutto ut nostrud. Kielbasa rump frankfurter sunt corned beef. Andouille in cillum deserunt, rump et picanha landjaeger tongue anim.</p>
	<p>Ad meatball ipsum ground round shank. Quis ipsum meatball exercitation. Laborum swine spare ribs, sunt ball tip magna t-bone venison. Velit doner voluptate non occaecat do ribeye kevin strip steak et. Esse biltong shank ribeye dolor pariatur aute deserunt non est eiusmod pork belly pancetta pork chop. Pork chop id consectetur rump, meatball short loin brisket tail andouille deserunt alcatra irure prosciutto do.</p>
	<p>Dolore reprehenderit ex, meatball doner commodo consectetur ea ribeye. Ad aliqua kevin, chuck excepteur minim et cow esse ham hock landjaeger. Alcatra bresaola dolore tempor do, excepteur in velit flank officia dolore meatloaf corned beef picanha. Eu pancetta brisket eiusmod ipsum aute sausage, culpa rump shoulder excepteur nostrud venison sed pork loin. Tempor proident do magna ground round. Ut venison frankfurter et veniam dolore. Pig pork belly beef ribs kevin, doner exercitation magna esse shankle.</p>
	<p>Flank anim chuck boudin id consectetur bresaola ham pork loin cupim andouille frankfurter. Proident do ball tip nostrud nulla sed, frankfurter ut commodo corned beef ut. Ex aute in, pig deserunt beef ribs turducken pastrami irure ball tip pork belly pork chop sausage id. Chicken sunt nisi tempor sed. In eiusmod non fatback tempor tenderloin pastrami adipisicing cow lorem ut tail jerky cupidatat venison. Jowl consequat commodo pork loin ipsum pork belly prosciutto aute beef. Ball tip shoulder aliqua, fugiat landjaeger kevin pork chop beef ribs leberkas hamburger cillum turkey ut doner culpa.</p>
</main>
<footer>
	<p>© 2015 No rights reserved.</p>
	<p>Made with ♥ by an anonymous pastafarian.</p>
</footer>
</body>
<style lang="css">
/**
 * Sticky footer with flexible height
 */

body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex: 1;
}

/* Toggle checkbox to alternate between short/long content */
#contents:checked ~ p { display: none }

/* Basic styling */
body {
	margin: 0;
	font: 100%/1.5 Baskerville, Palatino Linotype, Palatino, serif;
}

h1 { margin: .5em 0 0; }

header { text-align: center; height: 3em; }

main, footer {
	display: block;
	padding: .5em calc(50% - 400px);
}

footer {
	background: linear-gradient(#222, #444);
	color: white;
}
</style>
</html>
```

## 6过渡与动画

### 6.1弹跳动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<header>
	<h1>Site name</h1>
</header>
<div class="ball"></div>
</body>
<style lang="css">
/**
 * Bouncing animation
 */

@keyframes bounce {
	60%, 80%, to {
		transform: translateY(400px);
		animation-timing-function: ease;
	}
	70% { transform: translateY(300px); }
	90% { transform: translateY(360px); }
}

.ball {
	width: 0; height: 0; padding: 1.5em;
	border-radius: 50%;
	margin: auto;
	background: red radial-gradient(at 30% 30%, #fdd, red);
	animation: bounce 2s cubic-bezier(.1,.25,1,.25) forwards;
}

body {
	background: linear-gradient(skyblue, white 450px, yellowgreen 0);
	min-height: 100vh;
}
</style>
</html>
```

### 5.2弹性过渡

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<label>
	Your username:
	<input value="leaverou"/>
	<span class="callout">
	Only letters, numbers, underscores (_) and hyphens (-) allowed!
	</span>
</label>
</body>
<style lang="css">
/**
 * Elastic transitions
 */

input:not(:focus) + .callout:not(:hover) {
	transform: scale(0);
	transition: .25s transform;
}

.callout {
	transition: .5s cubic-bezier(.25,.1,.3,1.5) transform;
	transform-origin: 1.4em -.4em;
}

/* Styling */
body {
	padding: 1.5em;
	font: 200%/1.6 Baskerville;
}

input {
	display: block;
	padding: 0 .4em;
	font: inherit;
}

.callout {
	position: absolute;
	max-width: 14em;
	padding: .6em .8em;
	border-radius: .3em;
	margin: .3em 0 0 -.2em;
	background: #fed;
	border: 1px solid rgba(0,0,0,.3);
	box-shadow: .05em .2em .6em rgba(0,0,0,.2);
	font-size: 75%;
}

.callout:before {
	content: "";
	position: absolute;
	top: -.4em;
	left: 1em;
	padding: .35em;
	background: inherit;
	border: inherit;
	border-right: 0;
	border-bottom: 0;
	transform: rotate(45deg);
}
</style>
</html>
```

![](.\image\Snipaste_2022-10-09_22-23-53.png)

### 5.3逐帧动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<div class="loader">Loading…</div>
</body>
<style lang="css">
/**
 * Frame-by-frame animations
 */

@keyframes loader {
	to { background-position: -800px 0; }
}

.loader {
	width: 100px; height: 100px;
	text-indent: 999px; overflow: hidden; /* Hide text */
	background: url(loader.png) 0 0;
	animation: loader 1s infinite steps(8);
}
</style>
</html>
```

![](.\image\Snipaste_2022-10-09_22-34-19.png)

### 6.4闪烁效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>字符</title>
    <!--    <link rel="stylesheet" href="demo1.css">-->
</head>
<body>
<p class="blink-smooth-1">Peek-a-boo!</p>
<p class="blink-smooth-2">Peek-a-boo!</p>
<p class="blink">Peek-a-boo!</p>
</body>
<style lang="css">
/**
 * Blinking
 */

@keyframes blink-1 { 50% { color: transparent } }
@keyframes blink-2 { to { color: transparent } }

p {
	padding: 1em;
	background: gold;
}

.blink-smooth-1 {
	animation: 1s blink-1 3;
}

.blink-smooth-2 {
	animation: .5s blink-2 6;
	animation-direction: alternate;
}

.blink {
	animation: 1s blink-1 3 steps(1);
}
</style>
</html>
```

![](.\image\Snipaste_2022-10-09_22-41-03.png)
