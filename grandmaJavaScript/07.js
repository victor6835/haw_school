// if判斷

/*  1.如果 肚子餓
        我就去吃飯*/

var hungry = false;
if(hungry){
    document.write("我就去吃飯")
}
/*  2.如果 今天下雨
        我就開車上班
      否則  
        我就走路上班
*/

var rainy = false;
if(rainy){
    document.write("我就開車上班");
}
else{
    document.write("我就走路上班");
}

document.write("<br>");
/*  3.如果 你考100分
        我給你1000元
      或是如果 你考80分以上  
        我給你500元
      或是如果 你考60分以上
        我給你100元
      否則
        你給我300元
*/
var score = 85;
if(score==100){
    document.write("我給你1000");
}
else if(score>=80){
    document.write("我給你500");
}
else if(score>=60){
    document.write("我給你100")
}
else{
    document.write("你給我300元")
}
document.write("<br>");

/*  4.如果 你考100分 且 今天下雨
        我給你1000元
     
      否則
        你給我100元
*/
var score = 100;
var rainy = true;
if(score == 100 && rainy){
    document.write("我給你1000");
}
else{
    document.write("你給我100元");

}
document.write("<br>");

/*  5.如果 你考100分 或 今天下雨
        我給你1000元
     
      否則
        你給我100元
*/
var score = 100;
var rainy = true;
if(score == 100 || rainy){
    document.write("我給你1000元元");
}
else{
    document.write("你給我100元");

}
document.write("<br>");

/*  6.如果 你考100分 或 今天沒有下雨
        我給你1000元
     
      否則
        你給我100元
*/
var score = 60;
var rainy = true;
if(score == 100 || !rainy){
    document.write("我給你1000元1");
}
else{
    document.write("你給我100元");
}
document.write("<br>");


function max_num(num1, num2, num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }
    else if(num2>= num1 && num2>=num3){
        return num2;
    }
    else{
        return num3;
    }
}
document.write(max_num(2,4,5));