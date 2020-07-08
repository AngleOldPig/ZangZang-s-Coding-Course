
//0707

//32 16 4 13 62 20，循环遍历这数组中的6个数字，若大于20则加1，否则加10
function homework0707(){
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
}
homework0707();




//定义一个函数实现数组加和，并调用该函数，计算32 16 4 13 62 20数组的总和
/*var arr = [32,16,4,13,62,20];
function sum(){
    var i = 0;    //只在函数里 临时变量
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
    return i;    //返回经历了计算的i
}
var result = sum(i);
alert(result);
*/

/*
var i = 0;   //全局变量
function Sum(){
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
}
Sum();
alert(i);
*/

function sum(){
    var arr = [32,16,4,13,62,20];
    var i = 0;
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
    alert(i);
}
sum();



//0807

// !!!!!!!SUPER IMPORTANTE
//给定一个整数数组nums和一个目标值target，在该数组中找出和为目标值的两个整数，并返回他们的数组下标，假设每种输入只对应一个答案，数组中的同一元素不能使用两遍
function homework0807(){
    var nums = [2,7,11,15];
    var arr = [];
    var target = 9;
    for(var j = 0; j < nums.length-1; j++){
        for(var m = j+1; m < nums.length; m++){
            i = nums[j] + nums[m];
            if(i == target){
                arr = [j,m];
            }
        }
    }  
//for用于遍历数组
//先算j，开始循环m，当m循环结束之后再回到j
// -> 0+1, 0+2, 0+3, 1+2, ...
//var j = 0 初始值，只执行一次
//最后一次m循环 m=4 
alert(arr);
}
homework0807();






