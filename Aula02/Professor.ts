export class Professor {

    public nome: string
    public idade: number
    public disciplina: Array<string>
    public valorHora: number
    private quantidadeHoras: number

    constructor(
        nome: string,
        idade: number,
        disciplina: Array<string>,
        valorHora: number,
        quantidadeHoras: number
    ) {
        this.nome = nome
        this.idade = idade
        this.disciplina = disciplina
        this.valorHora = valorHora
        this.quantidadeHoras = quantidadeHoras

    }

    public apresentar(): string {
        return `Ola me chamo ${this.nome} tenho ${this.idade} anos de idade, Minha disciplina é ${this.disciplina.join(" ")}`
    }

    public calcularRendimento(): number {



        return this.quantidadeHoras * this.valorHora

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