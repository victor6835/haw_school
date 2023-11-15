// 如何使用用字串、字串用法
var phrase = "hello\"12Mr.White" + " haha";
var text = "哈哈"
document.write(phrase.length);/*回傳字數(包含空白)*/
document.write("<br>");
document.write(phrase.toUpperCase());/*變成大寫*/
document.write("<br>")
document.write(phrase.toLowerCase());/*變成小寫*/
document.write("<br>")
document.write(phrase.charAt(0));/*回傳第N位的值-h為第零位*/
document.write("<br>")
document.write(phrase.indexOf("l"));/*回傳某個值為第第N位-h為第零位*/
document.write("<br>")
document.write(phrase.indexOf("q"));/*不存在的值顯示-1*/
document.write("<br>")
document.write(phrase.substring(2,10));/*回傳字串2-10的值*/


