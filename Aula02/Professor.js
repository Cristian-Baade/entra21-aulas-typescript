export class Professor {
    constructor(nome, idade, disciplina, valorHora, quantidadeHoras) {
        this.nome = nome;
        this.idade = idade;
        this.disciplina = disciplina;
        this.valorHora = valorHora;
        this.quantidadeHoras = quantidadeHoras;
    }
    apresentar() {
        return `Ola me chamo ${this.nome} tenho ${this.idade} anos de idade, Minha disciplina é ${this.disciplina.join(" ")}`;
    }
    calcularRendimento() {
        return this.quantidadeHoras * this.valorHora;
    }
}
// Professor
// atributos
// nome
// idade
// disciplina
// valorHora
// quantidadeHoras
// métodos
// apresentar
// calcularRendimento
