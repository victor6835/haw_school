function showAns() {
    var a=10;
    var b=20;
    window.alert(a+b);
}

function noAns() {
    alert("不告訢你!!")
}

function showSmile() {
    count++;
    window.alert("^____________^");
    if( count === 3) {
        btns[2].removeEventListener("click", showSmile, false); 
    }          
}

var btns;
var count = 0;

function init() {
    btns = document.getElementsByName("btn"); 

    btns[1].onclick = showAns;
    btns[1].onclick = noAns;

    btns[2].addEventListener("click", showAns, false);
    btns[2].addEventListener("click", showSmile, false);    
}

window.onload = init;