//ranking Jogar de Valorant

function getValorantRanking(nome, experiencia) {
    let ranking;
  
    if (experiencia <= 1000) {
      ranking = "Ferro";
    } else if (experiencia <= 2000) {
      ranking = "Bronze";
    } else if (experiencia <= 3000) {
      ranking = "Prata";
    } else if (experiencia <= 4000) {
      ranking = "Ouro";
    } else if (experiencia <= 5000) {
      ranking = "Platina";
    } else if (experiencia <= 6000) {
      ranking = "Diamante";
    } else if (experiencia <= 7000) {
      ranking = "Ascendente";
    } else if (experiencia <= 8000) {
      ranking = "Imortal";
    } else if (experiencia <= 10000) {
      ranking = "Radiante";
    } else {
      ranking = "Inválido";
    }
    
    console.log(nome, experiencia, ranking);
  }
  
  // Exemplo de uso:
  const nomeJogador = "Scarlet";
  const experienciaJogador = 4500;
  
  getValorantRanking(nomeJogador, experienciaJogador);