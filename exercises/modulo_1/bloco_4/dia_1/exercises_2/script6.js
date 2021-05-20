let peca = "CAVALO";

switch (peca.toLowerCase()) {
  case "torre":
    console.log("Movimento em linha reta");
    break;
  case "cavalo":
    console.log("Movimento em L");
    break;
  case "bispo":
    console.log("Movimento em Diagonal");
  default:
    console.log("Erro: Peça não encontrada");
}