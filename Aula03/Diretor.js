import { Pessoa } from "./Pessoa.js";
export class Diretor extends Pessoa {
    constructor(nome, idade, cidade, professores) {
        super(nome, idade, cidade);
        this.professores = professores;
    }
    Apresentar() {
        return `Bem vindos a escola,Vou me apresentar,Me chamo ${this.nome} tenho ${this.idade} e sou de ${this.cidade}`;
    }
    relatorioDesempenho() {
        let desempenhos = [];
        this.professores.forEach(Professor => {
            desempenhos.push(Professor.gerarBoletins().reduce((anterior, posterior) => anterior + posterior, 0));
        });
        return desempenhos;
    }
}
// Atributos
// nome:string
// idade:number
// cidade:string
// professores:Array<Professor>
