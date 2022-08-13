import { Aluno } from "./Aluno.js";
import { Animal } from "./Animal.js";
import { Professor } from "./Professor.js";

console.log("Aula 02 funcionou");

let animal1:Animal=new Animal("Drosofila", "Mosca", 0.5 , ["Ar", "Lixo", "Comida"])
console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);


animal1.nome="Cachorro do mato"
animal1.peso=2.5
animal1.habitat[1]="Mato"
animal1.setEspecie="Lupuscaninus"


console.log(animal1);
console.log(animal1.nome);
console.log(animal1.peso);
console.log(animal1.habitat[0]);
console.log(animal1.getEspecie);

let animal2:Animal =new Animal ("Amazona","Papagaio", 4.5,["Ar","Floresta"])
console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);

animal2.nome="Calopsita"
animal2.peso=0.7
animal2.habitat[2]="Caseiro"
animal2.setEspecie= "Nymphicus"

console.log(animal2);
console.log(animal2.nome);
console.log(animal2.peso);
console.log(animal2.habitat[1]);
console.log(animal2.getEspecie);

let Cristian:Aluno = new Aluno("Cristian Schauffert", 19,[10,9,7])
console.log(Cristian);
console.log(Cristian.nome);
console.log(Cristian.idade);
console.log(Cristian.calcularMedia());
console.log(Cristian.apresentar());

let RonaldinhoSoccer:Aluno = new Aluno ("Ronaldinho soccer",64,[9,5,10])
console.log(RonaldinhoSoccer);
console.log(RonaldinhoSoccer.nome);
console.log(RonaldinhoSoccer.idade);
console.log(RonaldinhoSoccer.calcularMedia());
console.log(RonaldinhoSoccer.apresentar());

let professor1:Professor = new Professor("Alex", 23, ["Historia","Portugues", "Java"], 12, 80)
console.log(professor1);
console.log(professor1.nome);
console.log(professor1.idade);
console.log(professor1.valorHora);
console.log(professor1.calcularRendimento());
console.log(professor1.apresentar());







