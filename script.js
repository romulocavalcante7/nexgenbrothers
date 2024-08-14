const btn = document.getElementById("btnTop")

btn.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 10){
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()


function toggleOverlay(element) {
    // Adiciona ou remove a classe 'active' na div clicada
    element.classList.toggle('active');
}
