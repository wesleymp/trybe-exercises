let custoProduto = 100;
let valorVenda = 200;
let produtosVendidos = 1000;

let impostoCustoProduto = custoProduto * 0.20; // taxa de 20% de imposto
let lucroProduto = valorVenda - (custoProduto + impostoCustoProduto);
let lucroVendidos = lucroProduto * produtosVendidos;



if (custoProduto < 0 && valorVenda < 0) {
  console.log("Os valores devem ser maior que 0");
}else {
  console.log("Lucro sobre cada produto: ");
  console.log(lucroProduto);
  console.log("Lucro total de vendas: ");
  console.log(lucroVendidos);
}
