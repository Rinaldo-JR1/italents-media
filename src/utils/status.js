
const Status = (aluno) => {
  if (aluno.materias.every(materia => materia.faltas > 15)) {
    aluno.aprovado = false
    console.log('Reprovado por falta')
  } else {
    if (aluno.mediaFinal >= 7) {
      aluno.aprovado = true
      console.log('Aprovado')
    } else if (aluno.mediaFinal >= 4) {
      aluno.aprovado = true
      console.log('Avaliação Final')
    } else {
      aluno.aprovado = false
      console.log('Reprovado')
    }
  }
  console.log(aluno)
}
module.exports = { Status }