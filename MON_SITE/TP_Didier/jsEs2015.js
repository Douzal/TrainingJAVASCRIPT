// approche objet en es2015
// class, constructor, extends, ...

class Figure {
    constructor(col = "red") {
        this.color = col;
    }
}


class Cercle extends Figure{

    constructor(x, y, r, col) {
        super(col);
        this.xc = x;
        this.yc = y;
        this.rayon = r;
    }

    perimetre() {
        return 2*Math.PI * this.rayon;
    }
}

var c1 = new Cercle();
c1.xc = 10;
c1.yc = 10;
c1.rayon = 5;

console.log(JSON.stringify(c1));
console.log("Périmètre : " + c1.perimetre());

var c2 = new Cercle(5,10,100);
decrisToi(c2);

function decrisToi(c) {
    console.log("x : " + c.xc +
    "\ny : " + c.xy +
    "\nr : " + c.rayon +
    "\n\nPérimètre : " + c.perimetre + 
    "\nStringify : " + JSON.stringify(c));
}