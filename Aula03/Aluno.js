import { Pessoa } from "./Pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, cidade, notas) {
        super(nome, idade, cidade);
        this.notas = notas;
    }
    Apresentar() {
        return `Ola meu nome é ${this.nome} tenho ${this.idade} anos e moro em ${this.cidade}`;
    }
    calcularMedia() {
        return this.notas.reduce((anterior, posterior) => posterior + anterior, 0) / this.notas.length;
    }
}
// Atributos
// nome:string
// idade:number
// cidade:string
// notas:Array<string>
