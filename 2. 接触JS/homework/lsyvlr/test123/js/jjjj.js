
            setTimeout(wakeUpUser, 1000);
            function wakeUpUser(){
                alert("不许套娃");
            }


var x = 30;
if (x>20) {
    alert("Not enough");
}
else 
    alert("Buy buy buy!");



var arr = [4,50,28,63];
var i = 0;
for(var j = 0; j < arr.length; j++) {
    i = i + arr[j];
}
alert(i);



//32 16 4 13 62 20，循环遍历这数组中的6个数字，若大于20则加1，否则加10
var arr = [32,16,4,13,62,20];
for(var j = 0; j < arr.length; j++){
    if (arr[j] > 20){
        arr[j] = arr[j] + 1;
    }
    else{
        arr[j] = arr[j] + 10;
    }
}
alert(arr);


//定义一个函数实现数组加和，并调用该函数，计算32 16 4 13 62 20数组的总和
var arr = [32,16,4,13,62,20];
function Sum(){
    var i = 0;    //只在函数里 临时变量
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
    return i;    //返回经历了计算的i
}
var result = Sum(i);
alert(result);


/*var i = 0;   //全局变量
function Sum(){
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
}
Sum();
alert(i);
*/
