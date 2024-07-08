const Media = (notas, quantidadeDeProvas) => {
  return notas.reduce((acc, nota) => acc + nota) / quantidadeDeProvas
}
module.exports = { Media }