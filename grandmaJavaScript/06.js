// 函式 function:預先寫好的程式碼
// 1. 函式的定義:
// 2. 函式的呼叫
function hello(name, age) {
    document.write("你好" + name + "你今年" + age + "歲");
}

hello("小白", "82");/*呼叫前面hello程式碼*/

document.write("<br>");

function add(num1, num2) {
    document.write(num1 + num2);
    document.write("<br>");
    return 10;
    document.write("你好")
}
value = add(12,13); 
document.write(value);

/*回傳的值將覆蓋掉原先的呼叫，且下面不會再執行，且之後的value值已經變成10*/

// function add(num1, num2){
//     document.write(num1 + num2)
//     document.write("<br>");
//     return 10;
//     document.write("你好")
// }
// value = add(12,11);
// document.write(value);
