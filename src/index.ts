import Curso from "./rules/curso/model/Curso";

const curso = new Curso({nome: "Curso de TypeScript"})
console.log(curso.id.valor)
console.log(curso.nome.completo)