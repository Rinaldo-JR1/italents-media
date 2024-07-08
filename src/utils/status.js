
const Status = (aluno) => {
  if(aluno.materias.every(materia => materia.faltas >= 10)){

  }
  if (aluno.mediaFinal >= 7 && aluno.materias.every(materia => materia.media >= 7)) {
    aluno.aprovado = true
  }
  return aluno
}
module.exports = { Status }