let listaDeEstudantes = [
  {
      nomeDoEstudante: 'kn',
      primeiraNota: 9,
      segundaNota: 9,
  },

  {
      nomeDoEstudante: 'joao',
      primeiraNota: 4,
      segundaNota: 6,
  },

  {
      nomeDoEstudante: 'Pablo',
      primeiraNota: 10,
      segundaNota: 6,
  }        
]

function calculaMedia(primeiraNota,segundaNota) {
let media = (primeiraNota + segundaNota) / 2
return media
}
 

for(let estudante of listaDeEstudantes){
  mediaIndividual = calculaMedia(estudante.primeiraNota, estudante.segundaNota)
  let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'

  alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
${aprovadoOuNao}`)
}       