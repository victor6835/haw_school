var arr = [11, 22];
var points = [{ x: 10, y: 10 }, { x: 20, y: 20 }]
let products = [
    { psn: 1, pname: "PHP4+MySQL", price: 220, author: "馬孝瑀", image: "1.gif" },
    { psn: 2, pname: "Acess程式設計", price: 710, author: "郭尚君", image: "2.gif" },
    { psn: 3, pname: "VisualC++ 入門進階", price: "620", author: "郭尚君", image: "3.gif" },
    { psn: 4, pname: "Visio5.0輕鬆學習", price: 310, author: "位元文化", image: "4.gif" },
    { psn: 5, pname: "PHP祕笈", price: 710, author: "董董", image: "5.gif" },
    { psn: 6, pname: "精通VB.NET完全手冊", price: 960, author: "王小明", image: "6.gif" },
    { psn: 7, pname: "JavaScript大絶招", price: 998, author: "董董", image: "7.gif" }
]; 
function showProducts(){
    let html = "";
    products.forEach(function(products){
        html += `<tr><td>${product.psn}<tr><td>${product.pname}<tr><td>{product.price}<tr><td>{product.author}<tr><td>`
    })

    document.getElementById("prodRowsPanel").onclick = function(){
        products.sort(function(a,b){
            return a.price - b.price;
        })
        showProducts();
    }
    }
    document.getElementById("prodRowsPanel").onclick = function(){
        products.sort(function(a,b){
            return b.price - a.price;
        })
        showProducts();
    }
    }
