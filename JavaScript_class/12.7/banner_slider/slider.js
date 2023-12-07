function $id(id) {  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function () {

    let wrap = document.querySelector(".wrap");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function () {
        curIndex--;
        wrap.style.left = - curIndex * 310 + 'px';
        if (curIndex === 0) {
            $id("btnLeft").disable = true;
        } else {
            $id("btnRight").disabled = false;
        }

    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function () {
        curIndex++;
        wrap.style.left = - curIndex * 310 + 'px';
        if (curIndex === 5) {
            $id("btnRight").disable = true;
        } else {
            $id("btnLeft").disabled = false;
        }

    }


})