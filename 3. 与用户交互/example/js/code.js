function welcome(){
    var lastName = document.getElementById("userInput1");
    var firstName = document.getElementById("userInput2");
    var result = document.getElementById("result");
    var welcome = "欢迎! "+lastName.value+" "+firstName.value+"! ";
    result.innerHTML = welcome;
    alert(welcome);
}

function reset(){
    var lastName = document.getElementById("userInput1");
    var firstName = document.getElementById("userInput2");
    var result = document.getElementById("result");
    lastName.value = "";
    firstName.value = "";
    result.innerHTML = "公告";
}
