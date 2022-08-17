import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa{

    private notas: Array<number>

    constructor(nome: string, idade: number, cidade: string, notas: Array<number>) {
        
        super(nome,idade,cidade)
            this.notas = notas


    }

    Apresentar(): string {

        return `Ola meu nome é ${this.nome} tenho ${this.idade} anos e moro em ${this.cidade}`

    }

    calcularMedia(): number {

        return this.notas.reduce((anterior, posterior) => posterior + anterior, 0)/ this.notas.length

    

    }

}




// Atributos
// nome:string
// idade:number
// cidade:string
// notas:Array<string>