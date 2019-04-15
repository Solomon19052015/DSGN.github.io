
(function menuFunction(){
    let menu = document.querySelector(".menu");
    let buttonMenu = document.querySelector(".buttonMenu");
    let close = document.querySelector(".close");
    let listMenu = document.querySelectorAll(".menu ul li a");

    buttonMenu.addEventListener("click", clickHeandlerOpen);
    close.addEventListener("click", clickHeandlerClose);
    
    function cicle(arr){
        for(let i of arr){
            i.addEventListener("click", clickHeandlerClose);
        }
    }
    cicle(listMenu); 

    function clickHeandlerOpen(){
      
        openMenu(menu);
    }

    function openMenu(el){
        el.classList.add("openMenu");
    }

    function closeMenu(el){
        el.classList.remove("openMenu");
    }

    function clickHeandlerClose(){
        closeMenu(menu);
    }

//SCROLl MENU

window.addEventListener("scroll", scrollMenuAdd);

function scrollMenuAdd(){
    scrollMenu();
}

function scrollMenu(){
    let offset = window.pageYOffset ||  document.documentElement.scrollTop;
    if(offset > 300){
        buttonMenu.classList.add("buttonMenuScroll");
    }
    else{
        buttonMenu.classList.remove("buttonMenuScroll");
    }
}



})();
