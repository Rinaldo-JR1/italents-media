const { Media } = require('./utils/media');
const { Status } = require('./utils/status');

const prompt = require('prompt-sync')();

let Aluno =
{
  nome: 'Rinaldo',
  materias: [],
  mediaFinal: 0,
  aprovado: false
}


let quantidadeDeMaterias = prompt('Digite a quantidade de matérias: ')
for (let i = 0; i < quantidadeDeMaterias; i++) {
  let materia = prompt('Digite o nome da matéria: ')
  let quantidadeDeProvas = prompt('Digite a quantidade de avaliações: ')
  let notas = []
  for (let j = 0; j < quantidadeDeProvas; j++) {
    notas.push(parseFloat(prompt(`Digite a nota - ${j+1}: `)))
  }
  Aluno.materias.push({
    nome: materia,
    notas,
    media: Media(notas, quantidadeDeProvas),
    faltas: parseInt(prompt('Digite a quantidade de faltas: '))
  })
}

Aluno.mediaFinal = Media(Aluno.materias.map(materia => materia.media), quantidadeDeMaterias)
Status(Aluno)