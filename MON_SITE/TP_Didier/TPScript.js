console.log("COURAGE aux devs !");

function afficheVal() {
    var v = document.querySelector("#val"); // getElementById('#val');
    var v2 = document.getElementById(val);
    var zoneRecup = document.getElementById(boutRecup);
    var zoneRecup2 = document.querySelector("#boutRecup");

    zoneRecup2.value = v.value;
    // pourquoi CECI ne marche pas : car c'est une balise
    // zoneRecup2.innerHTML = eval(v.value);
}

function afficheVal2(val) {
        var v = document.querySelector("#val").innerHTML; // getElementById('#val');
        var v2 = document.getElementById(val).innerHTML;
        alert(v);
        alert(v2);
    }

    // ca marche je ne sais pas pourquoi et j'ai le seum.
//    function evaluerExpression(ex) {
//         var zoneInputExpression = document.querySelector("#" + ex);

//         var zoneSpanResultat = doxument.querySelector("#" + spanResultat);
//         zoneSpanResultat.innerHTML = eval(zoneInputExpression.value);

//         alert(zoneSpanResultat);
//     }

//     function evaluerExpression1() {
//         var zoneInputExpression = document.querySelector("#val");

//         var zoneSpanResultat = doxument.querySelector("#val");
//         zoneSpanResultat.innerHTML = eval(zoneInputExpression.value);
        
//         alert(zoneSpanResultat);
//     }

    function verifForm() {
        var nom = document.querySelector("#nom").value;
        var prenom = document.querySelector("#prenom").value;
        var annee = document.querySelector("#annee").value;
        // annee = parseInt(annee);

        console.log("nom : " + nom);
        console.log("prenom : " + prenom);
        console.log("annee : " + annee);
        
        // verif date
        if(isNaN(annee) || (annee =="")) {
            alert("L'année doit être numérique !");
        }
        
        // verif nom
        var car1 = nom.charAt(0);
        var carUppCase = car1.toUpperCase();
        if(car1 !== carUppCase || nom.length < 2) {
            alert("Majuscules aux NOMS et 2 lettres min svp !");
        }

        // verif prenom
        car1 = prenom.charAt(0);
        carUppCase = car1.toUpperCase();
        if((car1 !== carUppCase) || (prenom.length <2)) {
            alert("Majuscules aux PRENOMS et 2 lettres min svp !");
        }
    }

    function sendForm() {
        var nom = document.querySelector("#nom").value;
        var prenom = document.querySelector("#prenom").value;
        var annee = document.querySelector("#annee").value;

        nom1.innerHTML = nom;
        prenom1.innerHTML = prenom;
        annee1.innerHTML = annee;
    }


    // prototypes
    function Voiture(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }

    function affVoiture() {
        alert("marque : " + marque + "\nmodele : " + modele);
    }


    // APPROCHE BASIC OBJECT (es5) de JAVASCRIPT
    function Personne(prenom, nom, age, homme) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.homme = homme;

        // aff est vu comme une méthode
        // fonction anonyme
        this.aff = (function() {
            if(this.homme) {
                console.log("\nCe type s'appelle : " + this.prenom +
                            "\nBGnom : " + this.nom + 
                            "\nBG d'age : " + this.age);
            } else {
                console.log("\nCette bitch s'appelle : " + this.prenom +
                            "\nSlutname : " + this.nom +
                            "\nSlut d'age : " + this.age);
            }
        });
    }


    var pers1 = new Personne("Gillet", "Jaune", 2018, 1);
    pers1.nom = "couille";
    pers1.aff();
    
    var chris = new Personne("Christopher", "Portouguèzé", 69, 0);
    chris.aff();
    
    var myArr = [];
    myArr.push(pers1);
    myArr.push(chris);
    var jsonObject = JSON.stringify(myArr[0]);
    console.log(jsonObject);

    /* var persPerso = new Personne(prompt('Nom ?'),
    prompt('Prenom ?'),
    prompt('Age ?'),
    parseInt(prompt('Homme ?')));
    persPerso.aff(); */

    function showR() {
        var formR = document.getElementById("formResultat");
        // if(formR.style.display = 'none') {
        //     formR.style.display = 'block';
        // } else {
        //     formR.style.display = 'none';
        // }
        // if(formR.style.visibility = hidden) {
        //     formR.style.visibility = visible;
        // } else {
        //     formR.style.visibility = hidden;
        // }
        // console.log(formR.st.yle.display);
        if(formR.style.display ='none') {
            formR.style.display ='block';
        } else {
            formR.style.display ='none';
        }
        console.log("fin de showR()");
        // if(formR.hidden ==true) {
        //     formR.hidden ==false;
        // } else {
        //     formR.hidden ==true;
        // }

        // if(formR.addClass("hidden")) {
        //     formR.addClass("hidden");
        // } else {
        //     formR.removeClass("hidden");
        // }
    }