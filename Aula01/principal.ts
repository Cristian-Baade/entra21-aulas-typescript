let nome: string = "Cristian Schauffert"
let idade: number = 19


console.log(nome, idade);

$("<p>", {
    text: `Oi ${nome} vc tem ${idade} anos`
}).appendTo("body")

function teste(): number {

    return 0
}

function dados(nome: string, idade: number): boolean {
    if (nome == "Cristian" && idade == 19) {
        return true
    } else {
        return false
    }
}
function somar(numA: number, numB: number): number {

    return numA + numB
}
