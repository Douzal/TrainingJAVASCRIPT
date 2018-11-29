

//modules to load:
var express = require('express');
var app = express();

class Produit {
    constructor(i=0, n='defaultName', p=0.0) {
        this.id = i;
        this.nom = n;
        this.prix = p;
    }
}

var listeProduits = []; // ou bien = new Array()S;
listeProduits.unshift(new Produit(1, "cahier", 1.0));
listeProduits.unshift(new Produit(2, "Switch", 249.99));
listeProduits.unshift(new Produit(3, "Pokémon", 45.0));
listeProduits.unshift(new Produit(4, "Zelda", 30.99));

// ligne ws
// URL  = http://localhost:8282/rest/produit?prixMaxi=100
app.get('/rest/produit', function (req, res, next) {
    var prixMaxi = Number(req.query.prixMaxi);
    var listeProduitsPasChers = [];
    for(let prod of listeProduits) {
        if(prod.prix <= prixMaxi) {
            listeProduitsPasChers.push(prod);
        }
    }
    // retour
    res.send(listeProduitsPasChers);
});


app.get('/', function (req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('<p>index (welcome page) of simpleApp</p>');
    res.write('<a href="rest/produit?prixMaxi=100</a>');
    res.write("</body></html>");
    res.end();
});

//GET addition?a=5&b=6
app.get('/addition', function (req, res, next) {
    a = Number(req.query.a); b = Number(req.query.b);
    resAdd = a + b;
    res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('a=' + a + '<br/>'); res.write('b=' + b + '<br/>');
    res.write('a+b=' + resAdd + '<br/>');
    res.write("</body></html>");
    res.end();
});
app.listen(8282, function () {
    console.log("simple express node server listening at 8282");
});