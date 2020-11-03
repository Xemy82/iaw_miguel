let menuMostrado = false;

function mostrarOcultarMenu() {
    if(menuMostrado){
        ocultarMenu();
    }else{
        mostrarMenu();
    }
}


function mostrarMenu() {
    /* codigo para mostrar el menu */
    let menu = document.getElementById("listaMenu");
    console.log(menu);
    menu.children[0].children[1].style.display = "inline";
<<<<<<< HEAD
    menu.children[1].children[3].style.display = "inline";
    menu.children[2].children[1].style.display = "inline";
    menu.children[3].children[2].style.display = "inline";
=======
    menu.children[1].children[1].style.display = "inline";
    menu.children[2].children[1].style.display = "inline";
    menu.children[3].children[1].style.display = "inline";
>>>>>>> 44cf7eb8aa090c51ed1f5426935f5f78478ecf52


    /* ---- */
    menuMostrado = true;
}

function ocultarMenu() {
    /* codigo para ocultar el menu */
    let menu = document.getElementById("listaMenu");
<<<<<<< HEAD
    console.log(menu);
    menu.children[0].children[1].style.display = "none";
    menu.children[1].children[3].style.display = "none";
    menu.children[2].children[1].style.display = "none";
    menu.children[3].children[2].style.display = "none";
=======
    menu.children[0].children[1].style.display = "none";
    menu.children[1].children[1].style.display = "none";
    menu.children[2].children[1].style.display = "none";
    menu.children[3].children[1].style.display = "none";

>>>>>>> 44cf7eb8aa090c51ed1f5426935f5f78478ecf52


    /* ---- */
    menuMostrado = false;
}



