function selectMokepon() {
    let mokeponsAvailable = document.querySelectorAll("[name='mokepon']")
    
    for (let mokepon of mokeponsAvailable){
        if (mokepon.checked) {
            showMokepon(mokepon, "player")
            let mokeponOpponent = selectMokeponOpponent(mokeponsAvailable, mokepon.id)
            
            return [mokepon, mokeponOpponent]
        }
    }
    
    alert("Por favor, haz click en alguno de los mokepones o no podrás seguir jugando")
}

function selectMokeponOpponent(mokeponsList, mokeponExceptionId) {
    while(true) {
        let shuffleIndex = shuffle(0, mokeponsList.length - 1)
        let mokeponOpponent = mokeponsList[shuffleIndex]
        
        if (mokeponOpponent.id == mokeponExceptionId){
            continue
        }

        showMokepon(mokeponOpponent, "opponent")
        return mokeponOpponent
    }
}

function shuffle(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
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