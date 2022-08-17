import { Aluno } from "./Aluno";
import { Pessoa } from "./Pessoa.js";

export class Professor extends Pessoa {

    private alunos: Array<Aluno>

    constructor(nome: string, idade: number, cidade: string, alunos: Array<Aluno>) {

        super(nome, idade, cidade)
        this.alunos = alunos
    }

    Apresentar(): string {


        return `Ola me chamo ${this.nome} tenho ${this.idade} anos e venho da cidade ${this.cidade}`
    }

    gerarBoletins(): Array<number> {

        let boletins: Array<number> = []
        this.alunos.forEach(Aluno => {
            boletins.push(Aluno.calcularMedia())
        });

        return boletins

    }


}

// Atributos
// nome:string
// idade:number
// cidade:string
// alunos:Array<Aluno>