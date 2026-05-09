
function afficherResultat(score, nbMot){
    
    let result = document.getElementById("result")
    result.textContent = " Votre score est de " + score + " sur " + nbMot + "."
}

function phraseOuMots(){

    let inputMots = document.getElementById("mots");
    let inputPhrase = document.getElementById("phrases");
    let MP;

    if(inputMots.checked){
        return 0
    }else{
        return 1
    }
}


function lancerBoucleDeJeu(tab){

    console.log("Démarage de la boucle de jeu !")

    let justeConteur = 0
    let texteGuess = document.getElementById("zoneProposition");
    let userText = document.getElementById("userText")
    let i = 0

    texteGuess.textContent = tab[i]

    userText.addEventListener("keydown", function(){
        if (event.key === "Enter") {
            let guess = userText.value
            userText.value = "";

            if(guess === tab[i]){
                justeConteur++;
            }

            i++
            if(i < tab.length){
                texteGuess.textContent = tab[i]
            }else{
                afficherResultat(justeConteur, tab.length)
                texteGuess.textContent = "Finit !"
            }    
        }


    })
}

function lancerJeu(){

    let x = phraseOuMots()
    let tab

    if(x === 0){
        tab = listeMots
    }else{ tab = listePhrases}

    lancerBoucleDeJeu(tab)



}


let bouton = document.getElementById("buton");

bouton.addEventListener("click", function(){
    lancerJeu();
})


