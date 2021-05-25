let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

let segundoInfo = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (let key in info) {
  if (info[key] != segundoInfo[key]) {
    console.log(info[key] + " e " + segundoInfo[key]);
  }else {
    console.log("Ambos recorrentes");
  }
}
