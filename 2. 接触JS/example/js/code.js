setTimeout(wakeUpUser, 3000);
function wakeUpUser(){
    alert("你发现不同了吗？");
}


// 以下为练习题答案

function Q1(){
    var price = 10;
    var money = 20;
    if(money < price){
        alert("Not enough");
    }
    else{
        alert("Buy buy buy");
    }
}

function Q2(){
    var prices = [4,50,28,63];
    var result = 0;
    for(var i = 0; i < prices.length; i++){
        result = result + prices[i];
    }
    alert(result);
}

setTimeout(Q1, 5000);
setTimeout(Q2, 7000);