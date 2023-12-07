window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop>300) {
        document.getElementById("header").classList.add("smallPanel");
    } else {
        document.getElementById("header").classList.remove("smallPanel");
    }
})