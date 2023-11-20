//危險的範例
function sum(){
    total = 0; //因為在函式內没宣告, 所以會往外找, 使用到外層的全域變數
    for(i = 0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}