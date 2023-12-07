
let products = [
    {psn:1,pname:"PHP4+MySQL",price:220,author:"馬孝瑀",image:"1.gif"},
    {psn:2,pname:"Acess程式設計",price:710,author:"郭尚君",image:"2.gif"},
    {psn:3,pname:"VisualC++ 入門進階",price:"620",author:"郭尚君",image:"3.gif"},
    {psn:4,pname:"Visio5.0輕鬆學習",price:310,author:"位元文化",image:"4.gif"},
    {psn:5,pname:"PHP祕笈",price:710,author:"董董",image:"5.gif"},
    {psn:6,pname:"精通VB.NET完全手冊",price:960,author:"王小明",image:"6.gif"},
    {psn:7,pname:"JavaScript大絶招",price:998,author:"董董",image:"7.gif"}
    ]; 
/* 
function showProducts() {
    //<tr><td></td><td></td><td></td><td></td></tr>
    let html = "";

    for(let i=0; i<products.length; i++) {
        html += `<tr><td>${products[i].psn}</td><td>${products[i].pname}</td>
        <td>${products[i].price}</td><td>${products[i].author}</td></tr>`
    }
    document.getElementById("prodRowsPanel").innerHTML = html;
}
 */
function showProducts() {
    let html = "";
    products.forEach(function(product){
        html += `<tr><td>${product.psn}</td><td>${product.pname}</td><td>${product.price}</td><td>${product.author}</td></tr>`
    })
    document.getElementById("prodRowsPanel").innerHTML = html;
}

window.addEventListener("load", function(){
    showProducts();

    document.getElementById("btnAsc").onclick = function () {
        products.sort(function(product1, product2){
            return product1.price - product2.price;
        });
        showProducts();
    }

    document.getElementById("btnDesc").onclick = function () {
        products.sort(function(product1, product2){
            return product2.price-product1.price;
        });
        showProducts();
    }
})    