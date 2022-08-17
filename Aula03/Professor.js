import { Pessoa } from "./Pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, cidade, alunos) {
        super(nome, idade, cidade);
        this.alunos = alunos;
    }
    Apresentar() {
        return `Ola me chamo ${this.nome} tenho ${this.idade} anos e venho da cidade ${this.cidade}`;
    }
    gerarBoletins() {
        let boletins = [];
        this.alunos.forEach(Aluno => {
            boletins.push(Aluno.calcularMedia());
        });
        return boletins;
    }
}
// Atributos
// nome:string
// idade:number
// cidade:string
// alunos:Array<Aluno>
