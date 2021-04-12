// header fixed
window.onscroll=function(){
    const docScrollTop = document.documentElement.scrollTop;
    if(window.innerWidth>991){
        if(docScrollTop>100){
            document.querySelector("header").classList.add("fixed")
        }
        else{
            document.querySelector("header").classList.remove("fixed")
        }
    }
    
}

// navbar links

const navbar = document.querySelector(".navbar");
    a=navbar.querySelectorAll("a");

    a.forEach(function(element){
        element.addEventListener("click",function(){
           for(let i=0;i<a.length;i++){
               a[i].classList.remove("active");
           }
           this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
        })
    })
    

    // hamburger
    const hamburger=document.querySelector(".ham-burger");

    hamburger.addEventListener("click",function(){
        document.querySelector(".navbar").classList.toggle("show");
    });

    document.onkeydown=function(e)
    {
        if(event.keyCode == 123)
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
        {
            return false;
        }
        if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
        {
            return false;
        }
    }