var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = '0px';
function menuToggle(){
    if(menuItems.style.maxHeight == '0px'){
        menuItems.style.maxHeight = '200px';
    }
    else{
        menuItems.style.maxHeight = '0px';
    }
}

let arrow = document.getElementById("arrow");
arrow.addEventListener("click",function(){
window.scrollTo({top:0,behavior:"smooth"})
});