function selectMokepon() {
    let mokepon
    let mokeponsAvailable = document.querySelectorAll("[name='mokepon']")
    
    for (let element of mokeponsAvailable){
        if (element.checked) {
            mokepon = element
        }
    }

    return mokepon
}

// The program starts here:
window.addEventListener('load', () => {
    let selectMokeponButton = document.getElementById("button-select")
    let mokeponSelected = selectMokeponButton.addEventListener("click", selectMokepon)
})