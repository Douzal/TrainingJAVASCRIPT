console.log("COURAGE aux devs !");

// fonction du démarrage page
function initComportementPage(){
    var liste = document.querySelector("#idListe");
    var enfantsListe = document.getElementsByTagName("li");
    var btnAdd = document.querySelector("#btnAdd");

    var btnSaison = document.querySelector("#btnSaison")
    btnSaison.addEventListener("mouseover", function(eve) {
        alertSaisons()}
    );

    // reaction au clic pour btn Add
    // marche très bien
    btnAdd.addEventListener("click", function(eve) {
        ManipulerElement(true);
    });

    // alert("enfantListe : " + enfantsListe);
    
    // TODO : se lance dès le onload, mais plus sur les clics !
    for(let i = 0; i < liste.length; i++) {
        console.log("je suis dans le test");
        var element = liste[i];
        element.addEventListener("click", function (eve) {
            // you think it will be element you clicked on? It will be last element in array
            alert(element.innerText); 
        });
    }
    // test par Babar
    // enfantsListe.forEach((listItem, index) => listItem.addEventListener('click', () => alert('Hello from li number ' + i)));
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
    // alert("yo");
}

function reactionDoubleClickLi(evt) {
    // supprimer l'élément sélectionné
    // TODO : récupérer l'indice de l'élément cliqué

    // methode prof, mais no need de recup l'indice
    var selectedLiNode = evt.target;
    var parentDuLi = selectedLiNode.parentNode;
    parentDuLi.removeChild(selectedLiNode);

    ManipulerElement(false);
}

function alertSaisons(eve) {
    var tablSaisons = ["Printemps", "Ete", "Automne", "Amour"];
    for(let saison of tablSaisons) {
        // let tirageAleat = Math.round(Math.random()*4);
        let tirageAleat = getRandomInt(4);
        alert("J'aime quand on est en " + tablSaisons[tirageAleat]);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}