# css学习

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
</style>
</html>
```

![](\image\Snipaste_2022-09-22_00-04-05.png)
