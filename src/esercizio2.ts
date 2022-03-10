type Quadrato = {
    lato: number;
}

type Rettangolo = {
    base: number;
    altezza: number;
}

type Triangolo = {
    base: number;
    altezza: number;
}

type Cerchio = {
    raggio: number;
}

var quadrato: Quadrato = {lato: 4};
var rettangolo: Rettangolo = {base: 2, altezza:4};
var triangolo: Triangolo = {base: 6, altezza: 10};
var cerchio: Cerchio = {raggio: 5};

function areaQuadrato(quadrato: Quadrato) {
    return quadrato.lato * quadrato.lato;
}

function areaRettangolo(rettangolo: Rettangolo) {
    return rettangolo.base * rettangolo.altezza;
}

function areaTriangolo(triangolo: Triangolo) {
    return (triangolo.base * triangolo.altezza) / 2;
}

function areaCerchio(cerchio: Cerchio) {
    return Math.PI * cerchio.raggio * cerchio.raggio;
}

console.log(`\nL'area del quadrato è: ${areaQuadrato(quadrato)}`);
console.log(`L'area del rettangolo è: ${areaRettangolo(rettangolo)}`);
console.log(`L'area del triangolo è: ${areaTriangolo(triangolo)}`);
console.log(`L'area del cerchio è: ${areaCerchio(cerchio)}\n`);
