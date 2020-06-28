# 接触 JavaScript

<br/>

### 本节课内容：

<br/>

    1.前端三巨头：Html、Css、Javascript

    2.配合辅助：PHP、SQL

    3.实操部分（上）：创建项目与配置Html文件

    4.实操部分（下）：逻辑实现价格判断与循环加和

    5.算法导论：时间复杂度

<br/>

### 1. 前端三巨头

<br/>

#### 1.1 Html

<br/>

HTML：Hypertext Markup Language，超文本标记语言

来指定网页的内容和结构，如段落、标题、区块等

作为网页的内容框架，向用户呈现内容，是整个网页的基础

<br/>

**Html代码基本结构**

<br/>

标签成对出现

结构包含根节点 html 和两个子节点 head body

```html
<html>
    <head> </head>
    <body> </body>
</html>
```

<br/>

比如

```html
<html>
    <head>
        <title>HTML课程演示</title>
    </head>
    <body>
        从这里开始设计要向用户展现的内容
    </body>
</html>
```

<br/>

**注意**


1. Html基本结构是不能乱的，不然浏览器会迷惑
<br/>
2. 代码书写要有层次缩进
<br/>
3. 标签成对出现，不可以顾头不顾尾

<br/>

#### 1.2 Css

<br/>

CSS：Cascading Style Sheets，层叠样式表

包含内容的渲染参数，来指定网页的外观，让页面更好看，编写很简单

以独立于网页结构的方式存在

这部分知识会在后面的课程补充

<br/>

#### 1.3 JavaScript

<br/>

在网页中作为脚本的角色，提供网页所用的逻辑计算

控制 html 中的各种标签

本节课会在实际操作时进行讲解

<br/>

<br/>

### 2. 配合辅助

<br/>

SQL：用于数据库的访问、搜索、数据处理

PHP：用现有库来代替SQL实现对服务器端的操作

<br/>

在我们近期的学习中只需要用到浏览器和 VS Code

当未来需要与服务器沟通时，将会用到 SQL 和 PHP 来对数据进行操作。

<br/>

<br/>

### 3. 实操部分（上）：创建项目与配置Html文件

<br/>

#### 3.1 建立网站基本文件结构

<br/>

1. 创建网站文件夹，取自己喜欢的名字
<br/>
2. 在网站文件夹中，创建三个文件夹：css img js
<br/>
3. 新建文本文档，并将名称与后缀更改为 index.html ，并将编码格式改为 UTF-8
<br/>

<img height="160" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/3-1%20%E7%BD%91%E7%AB%99%E5%9F%BA%E6%9C%AC%E7%BB%93%E6%9E%84.png">
<br/>

<br/>

**css文件夹** 存放页面未来的样式文件

**img文件夹** 存放网页素材文件

**js文件夹** 存放js脚本文件

**index.html** 是网站首页，因为 web 服务器默认会把 index.html 或 index.htm 当作首页来首先加载浏览。

<br/>

#### 3.2 配置Html文件

<br/>

实际使用时，需要将各种内容填写进 html 文件中，例子如下：

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>这是网页在浏览器中显示的标题</title>
        <script>
            // 这是普遍在网页中添加js脚本的位置
        </script>
    </head>
    <body>
        <h1>这是页面里显示的内容</h1>
        <p>body里的内容也可以加入各种标签让它们变得好看，比如加粗、居中、分段等等。
            为了避免一节课内容过多，关于 Html 标签这部分内容会放在下一节课统一讲解。
            在本节课你只需要对各种文件和格式有个大概的印象就好。</p>
    </body>
</html>
```

<br/>

将网站文件夹和 html 文件配置妥善后，我们便可以进入下一步骤，编写 JavaScript 脚本来实现想要的功能了。

<br/>

#### 3.3 向 html 文件中添加脚本语句

<br/>

用 VS Code 打开我们在 3.2 中配置好的 html 文件

首先我们要找到 ```<script> </script>``` 标记，在标记围起的区域内加入 js 代码

这里我给你个例子，添加进去后，再用浏览器打开 html 文件，看看有什么变化吧

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>这是网页在浏览器中显示的标题</title>
        <script>
            setTimeout(wakeUpUser, 3000);
            function wakeUpUser(){
                alert("你发现不同了吗？");
            }
        </script>
    </head>
    <body>
        <h1>这是页面里显示的内容</h1>
        <p>body里的内容也可以加入各种标签让它们变得好看，比如加粗、居中、分段等等。
            为了避免一节课内容过多，关于 Html 标签这部分内容会放在下一节课统一讲解。
            在本节课你只需要对各种文件和格式有个大概的印象就好</p>
    </body>
</html>
```

<br/>

这里你肯定会逐行看这些代码，并猜测它们的含义。

虽然它们不是本节课要学习的内容，但那你能大概猜猜它们的作用吗？

<br/>

<br/>

### 4. 实操部分（下）：逻辑实现价格判断

<br/>

#### 4.1 编写独立的 JavaScript 文件

<br/>

在实际生活中，html 文件往往会很冗长，若直接在它上面编辑代码，极不方便查改，因此我们需要将网页中的代码放在单独的文件中进行编辑。

<br/>

我们在 3.3 中已经编写了四行代码，是时候让它们单独出现在 js 文件中了。

<br/>

首先，我们在 js 文件夹中新建一个文件，并重命名为 code.js 。

第二步，将之前我们写好的四行 js 代码复制进 code.js 中，并保存 code.js 。

```js
setTimeout(wakeUpUser, 3000);
function wakeUpUser(){
    alert("你发现不同了吗？");
}
```

最后，我们需要修改 html 文件，告诉它这四行代码要去哪里找，如我下面所做的这样：

```html
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta charset="utf-8" />
        <title>这是网页在浏览器中显示的标题</title>
        <script src=".\js\code.js">
        </script>
    </head>
    <body>
        <h1>这是页面里显示的内容</h1>
        <p>body里的内容也可以加入各种标签让它们变得好看，比如加粗、居中、分段等等。
            为了避免一节课内容过多，关于 Html 标签这部分内容会放在下一节课统一讲解。
            在本节课你只需要对各种文件和格式有个大概的印象就好</p>
    </body>
</html>
```

<br/>

这里的 src 代表文件的地址，它告诉了网页需要去哪里找它需要的代码， ```.\``` 代表了当前文件所在的目录。

如此这般我们便将网页和代码逻辑从文件上分开来，可以尽情发挥 JavaScript 的作用了。

<br/>

#### 4.2 在 JS 中实现功能的方法

<br/>

既然已经有了 code.js 文件，那我们就可以在里面实现更多的功能。

还记得上节课的「编程语言基础功能」吗？

在这里我们需要了解在 JavaScript 中，这些功能要怎么书写。

<br/>

定义变量
```js
var i;
```

定义数组
```js
var arr = new Array;
```

```js
var arr = [1,2,3,4,5];
```

变量赋值
```js
i = 10;
```

```js
arr[0] = 6;
```

条件判断
```js
if( i < 20 ){
    i++;
}
```

循环
```js
for(var i = 0; i < 20; i++){
    printf("Hello, World!");
}
```

```js
for(var j = 0; j < arr.length; j++){
    arr[j] = arr[j] * 2;
}
```

返回结果
```js
return result;
```

```js
return "Hello, World!";
```

定义函数
```js
function function_name(parameter){
   body of the function
}
```

```js
function showHelloWorld(number){
    if(number < 20){
        return "Hello, World!";
    }
    return "Not enough";
}
```

```js
function sayHello(name){
    alert("Hello "+name+"!");
}
```

调用函数
```js
var result = showHelloWorld(i);
```

<br/>

如果上节课有学好的话，在这部分你会发现许多相似的地方，但也有一些点需要你注意：

1. JavaScript 并不强制要求在每个语句的结尾加分号 ; ，浏览器中负责执行 JavaScript 代码的引擎会自动在每个语句的结尾补上分号 ; ，但是为了养成好习惯，我建议你从现在开始就严格给每个语句末尾都带上分号 ; 。
<br/>

2. JavaScript 中变量的类型是可变的，例如：
    ```js
    var x = 1;      // 此时 x 是整型
    x = "OldPig";   // 此时 x 是字符串
    x = 3.14;       // 此时 x 是浮点数
    // 这样的代码是可执行且不报错的
    ```
    <br/>
3. JavaScript 中许多变量传递时，类型是没有严格要求的，比如函数返回值。这就要求开发人员拥有清醒的头脑，避免出现人为混淆的低级错误。

<br/>

#### 4.3 更进一步，实现价格判断与循环加和

<br/>

既然已经学习了 js 语句的作用，接下来我们来结合练习题实际运用一番：

<br/>

练习题 1

    假如目前我只有 20 块钱，给定一个商品的价格为 10 时，

    若高于 20 时提示用户 Not enough ，

    若低于或等于 20 时提示用户 Buy buy buy 。

练习题 2

    给定了 4 个商品的价格，分别是 4、50、28、63 ，
    
    将它们放在一个数组中，用循环的方式求出四件商品的总和，并提示给用户。

你需要在课后的作业中给出你的解答，如果遭遇挫折可以询问附近的小伙伴或者你的讲师寻求帮助。对于孤独的小伙伴，我准备了一份答案放在 \example\js\code.js 中供参考。

<br/>

<br/>

### 5. 理论知识：时间复杂度

<br/>

<img height="360" src="https://raw.githubusercontent.com/AngleOldPig/ZangZang-s-Coding-Course/master/Resources/images/2-5%20%E5%8F%82%E8%80%83%E6%95%99%E6%9D%90.png">

<br/>

    参考教材
    
    《Algorithm Design》 Jon Kleinberg & Éva Tardos

    2.1 Computational Tractability 计算可解性 【Page 29-35】

<br/>

随着输入数据的数量规模增加，程序运行需要更大的内存空间和更长的时间，但不同的算法对数据增加的敏感性不同。

<br/>

定义：给定输入数据规模 n，在最差的情况下花费的时间为 T(n) ，随着 n 的规模增大，算法执行所需要的时间增长速度用 f(n) 表示。

<br/>

目前时间复杂度普遍采用大O表示法：T(n) = O( f(n) )
```C
int oldpig = 0;
for(int i=0;i<n;i++){
    oldpig++;
}
```

<br/>

这段循环程序的时间复杂度为 T(n) = O(n)

<br/>

因为程序根据 n 的大小决定循环的次数，若 n 翻倍，花费的时间亦要翻倍，因此 f(n) = n ，代入公式则得到T(n) = O( f(n) ) = O(n)

<br/>

但是要注意大O准确的意义是 f(n) 函数的数量级上界。若 f(n) 最终结果是多项式形式，则只取最高阶数量级，其中的低阶项和常数可省略。例如：
```C
int PrintCount(int n){
    for(int i=0;i<n;i++){
        printf("Hello world!\n");
    }
    for(int j=0;j<n;j++){
        printf("This is OldPig!\n");
    }
    return 0;
}
```

<br/>

以上程序中，我们根据 n 的大小决定了循环次数，每翻倍 n 一次，就增加了 2n 次循环，但这个程序的时间复杂度依然是 T(n) = O(n) 。因为虽然 f(n) = 2n ，但它作为多项式，最高阶为 n 的一次方，因此取 O(n) 来代表此程序的时间复杂度。

<br/>

#### 常见的时间复杂度量级

- 常数阶O(1)
- 对数阶O(logN)
- 线性阶O(n)
- 线性对数阶O(nlogN)
- 平方阶O(n²)
- 立方阶O(n³)
- K次方阶O(n^k)
- 指数阶(2^n)

<br/>

它们的性能如下表：

<img height="600" src="https://github.com/AngleOldPig/ZangZang-s-Coding-Course/raw/master/Resources/images/2-5%20%E4%B8%8D%E5%90%8C%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%E7%9A%84%E7%A8%8B%E5%BA%8F%E8%BF%90%E8%A1%8C%E6%97%B6%E9%97%B4.jpg">

<br/>

#### 因此我们使用更少的时间空间完成目标，才是优秀程序员的能力。

<br/>

<br/>

<br/>

### [本节作业](https://github.com/AngleOldPig/ZangZang-s-Coding-Course/blob/master/2.%20%E6%8E%A5%E8%A7%A6JS/%E6%8E%A5%E8%A7%A6JS%E4%BD%9C%E4%B8%9A.md)

<br/>

### [返回课程目录](https://github.com/AngleOldPig/ZangZang-s-Coding-Course/blob/master/README.md)

<br/>