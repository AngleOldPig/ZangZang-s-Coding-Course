
//32 16 4 13 62 20，循环遍历这数组中的6个数字，若大于20则加1，否则加10

var arr = [32,16,4,13,62,20];
for(var j = 0; j < arr.length; j++){
    if (arr[j] > 20){
        arr[j]+1;
    }
    else{
        arr[j]+10;
    }
}
return arr;
    


//定义一个函数实现数组加和，并调用该函数，计算32 16 4 13 62 20数组的总和

var arr = [32,16,4,13,62,20];
var i = 0;
function Sum(i){
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
    return i;
}
