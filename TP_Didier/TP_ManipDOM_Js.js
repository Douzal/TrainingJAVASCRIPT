console.log("COURAGE aux devs !");

// fonction du démarrage page
function initComportementPage(){
    var liste = document.querySelector("#idListe");
    // var enfantsListe = liste.children;
    var enfantsListe2 = document.getElementsByTagName("li");
    enfantsListe2.addEventListener("click", alert("coucou"));
}

function ManipulerElement(bool, numElement) {

    // TODO : gérer le bool pour ajouter / supprimer
    // var liste = document.querySelectorAll("#idListe")[0];
    var liste = document.querySelector("#idListe");
    // console.log("\nDernier élément de la liste : " + liste.lastElementChild.innerHTML);

    if(bool) {
        // recuperation de la zone avec texte à ajouter
        var zone = document.querySelector("#newContenu");

        // creation nouvel élement
        var newElement = document.createElement("li");
        newElement.innerHTML = zone.value;

        liste.appendChild(newElement);
        liste.lastChild.addEventListener("onmouseover", reactionClickLi());
    } else {
        //TODO : condition sur l'élément à supprimer ?
        if (numElement!=null) {
            liste.removeChild(liste[numElement]);
        } else {
            liste.removeChild(liste.lastChild);
        }
    }
}


function reactionClickLi(evt) {
    //changer la couleur pour montrer la sélection
    alert("yo");
}

function reactionDoubleClickLi(evt) {
    // supprimer l'élément sélectionné
    // TODO : récupérer l'indice de l'élément cliqué
    ManipulerElement(false);
}