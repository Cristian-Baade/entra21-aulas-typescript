import { Aluno } from "./Aluno.js";
import { Diretor } from "./Diretor.js";
import { Professor } from "./Professor.js";


let fulano:Aluno = new Aluno("Cristian",19,"Otacilio",[10,9,5])
let alunoTeste:Aluno = new Aluno("Rubem",40,"Blumenau",[1,2,10])

console.log(fulano.nome);
console.log(fulano.idade);
console.log(fulano.cidade);
console.log(fulano.Apresentar());
console.log(fulano.calcularMedia());

console.log(alunoTeste.nome);
console.log(alunoTeste.idade);
console.log(alunoTeste.cidade);
console.log(alunoTeste.Apresentar());
console.log(alunoTeste.calcularMedia());

let Oliota:Professor = new Professor("Rubem Oliota",33,"Blumenau",[fulano,alunoTeste])

console.log(Oliota.nome);
console.log(Oliota.idade);
console.log(Oliota.cidade);
console.log(Oliota.Apresentar());
console.log(Oliota.gerarBoletins());


let diretor1:Diretor = new Diretor("Pedro Cabral",55,"Lages",[Oliota])

console.log(diretor1.nome);
console.log(diretor1.idade);
console.log(diretor1.cidade);
console.log(diretor1.Apresentar());
console.log(diretor1.relatorioDesempenho());

