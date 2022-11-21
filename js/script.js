function selectMokepon() {
    let mokeponsAvailable = document.querySelectorAll("[name='mokepon']")
    
    for (let mokepon of mokeponsAvailable){
        if (mokepon.checked) {
            showMokepon(mokepon, "player")
            selectMokeponOpponent(mokepon.id)
            return mokepon
        }
    }
    
    alert("Por favor, haz click en alguno de los mokepones o no podrás seguir jugando")
}

function selectMokeponOpponent(exceptionId){
    let mokeponsList = document.querySelectorAll("[name='mokepon']")
    let mokeponsAvailable

    for (let mokeponIndex in mokeponsList) {
        let mokepon = mokeponsList[mokeponIndex]
        
        if (mokepon.id == exceptionId) {
            console.log(mokeponsList)
            // mokeponsAvailable = mokeponsList.splice(mokeponIndex, 1)
        }
    }
    console.log(mokeponsAvailable)
    // showMokepon(mokepon, "opponent")
}

function showMokepon(mokepon, owner){
    let mokeponNameSpan = document.getElementById(`mokepon-${owner}`)
    let mokeponName = document.querySelector(`[for='${mokepon.id}']`).innerHTML
    mokeponNameSpan.innerHTML = mokeponName
}

// The program starts here:
window.addEventListener('load', () => {
    let buttonSelectMokepon = document.getElementById("button-select")
    let mokeponSelected = buttonSelectMokepon.addEventListener("click", selectMokepon)
})