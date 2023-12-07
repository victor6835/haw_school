window.addEventListener("scroll",function(){
    if(this.document.documentElement.scrollTo>300{
        this.document.getElementById("header").classList.add("smallPanel")
    }
    else{
        this.document.getElementById("header").classList.remove("smallPanel")
    })
})