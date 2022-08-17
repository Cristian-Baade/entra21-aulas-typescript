import { Professor } from "./Professor.js";
import { Pessoa } from "./Pessoa.js";

export class Diretor extends Pessoa {

    private professores: Array<Professor>

    constructor(nome: string, idade: number, cidade: string, professores: Array<Professor>) {

        super(nome, idade, cidade)
        this.professores = professores

    }


    Apresentar(): string {

        return `Bem vindos a escola,Vou me apresentar,Me chamo ${this.nome} tenho ${this.idade} e sou de ${this.cidade}`

    }

    relatorioDesempenho(): Array<number> {
        
        let desempenhos: Array<number> = []
        this.professores.forEach(Professor => {
            desempenhos.push(Professor.gerarBoletins().reduce((anterior, posterior) => anterior + posterior, 0))
        });

        return desempenhos

    }


}

// Atributos
// nome:string
// idade:number
// cidade:string
// professores:Array<Professor>