var iconMenu = document.getElementsByClassName("icon-menu")[0]

iconMenu.addEventListener('click',() => {
    // Efeito de opacidade
    let menu = document.getElementById("menu")
    
    if(menu.classList.contains("hide")){
        menu.classList.add("show")
        menu.classList.remove("hide")
    }
    else{
        menu.classList.add("hide")
        menu.classList.remove("show") 
    }

    // Efeito Toggle
    // Show e Hide com Height ou Width
})

var x
console.log(x)