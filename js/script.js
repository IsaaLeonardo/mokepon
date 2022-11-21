function selectMokepon() {
    let mokepon
    let mokeponsAvailable = document.querySelectorAll("[name='mokepon']")
    
    for (let element of mokeponsAvailable){
        if (element.checked) {
            mokepon = element
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