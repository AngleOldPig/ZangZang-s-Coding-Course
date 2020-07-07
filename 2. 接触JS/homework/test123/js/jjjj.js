
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


var arr = [32,16,4,13,62,20];
var i = 0;
function Sum(i){
    for(var j = 0; j < arr.length; j++){
        i = i + arr[j];
    }
}
var result = Sum(i);
alert(result);
