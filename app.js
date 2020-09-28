function getNum(value){
    var a = document.getElementById(result);
    result.value += value;
}
function clearResult(){
    var b = document.getElementById(result);
    result.value = " ";
}
function getResult(){
    var c = document.getElementById(result);
    result.value = eval(result.value);
}