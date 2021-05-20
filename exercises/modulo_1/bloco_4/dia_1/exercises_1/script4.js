let pessoa = "reprovada";

switch (pessoa) {
  case "aprovada":
    console.log("Parabéns!");
    break;
  case "lista":
    console.log("Parabéns! Continue estudando.");
    break;
  case "reprovada":
    console.log("Que pena! Estude mais e tente novamente.");
    break;
  default:
    console.log("não se aplica");
}