function getNum(num){
    var number = document.getElementById("input");
    number.value += num;
}
function clearAll(){
    var inpt = document.getElementById("input");
    var res = document.getElementById("result");
    inpt.value = "";
     res.value = "";
}
function del(){
    var inpt = document.getElementById("input");
    var str = inpt.value.slice(0, inpt.value.length-1);
    inpt.value = str;
}
function calculate(){
    var inpt = document.getElementById("input");
    var res = document.getElementById("result");
    res.value = eval(inpt.value)

}