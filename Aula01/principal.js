let nome = "Cristian Schauffert";
let idade = 19;
console.log(nome, idade);
$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body");
function teste() {
    return 0;
}
function dados(nome, idade) {
    if (nome == "Cristian" && idade == 19) {
        return true;
    }
    else {
        return false;
    }
}
function somar(numA, numB) {
    return numA + numB;
}
