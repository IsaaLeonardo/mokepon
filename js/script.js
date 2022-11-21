function selectMokepon() {
    let mokeponsAvailable = document.querySelectorAll("[name='mokepon']")
    
    for (let mokepon of mokeponsAvailable){
        if (mokepon.checked) {
            let mokeponNameSpan = document.getElementById('mokepon-player')
            let mokeponName = document.querySelector(`[for='${mokepon.id}']`).innerHTML
            
            mokeponNameSpan.innerHTML = mokeponName
            return mokepon
        }
    }
    
    alert("Por favor, haz click en alguno de los mokepones o no podrás seguir jugando")
}

// The program starts here:
window.addEventListener('load', () => {
    let buttonSelectMokepon = document.getElementById("button-select")
    let mokeponSelected = buttonSelectMokepon.addEventListener("click", selectMokepon)
})