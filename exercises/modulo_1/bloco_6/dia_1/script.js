let list = [];
function federalUnit() {
  const states = {
    ac: 'Acre',
    al: 'Alagoas',
    ap: 'Amapá',
    am: 'Amazonas',
    ba: 'Bahia',
    ce: 'Ceará',
    df: 'Distrito Federal',
    es: 'Espírito Santo',
    gp: 'Goiás',
    ma: 'Maranhão',
    mt: 'Mato Grosso',
    ms: 'Mato Grosso do Sul',
    mg: 'Minas Gerais',
    pa: 'Pará',
    pb: 'Paraíba',
    pr: 'Paraná',
    pe: 'Pernambuco',
    pt: 'Piauí',
    rj: 'Rio de Janeiro',
    rn: 'Rio Grande do Norte',
    rs: 'Rio Grande do Sul',
    ro: 'Rondônia',
    rr: 'Roraima',
    sc: 'Santa Catarina',
    sp: 'São Paulo',
    se: 'Sergipe',
    to: 'Tocantins'
  };
  return states;
}

function showStates() {
  const uf = document.querySelector('#uf');
  for (const key in federalUnit()) {
    const createOptionStates = document.createElement('option');
    createOptionStates.innerHTML = federalUnit()[key];
    createOptionStates.value = key;
    uf.appendChild(createOptionStates);
  }
}

/*
*Função para validar data
*/
function validateData() {
  let dateForm = document.querySelector('#date');
  let dtArray = dateForm.value.split("/");
  let regex = /^\d\d\/\d\d\/\d\d\d\d$/; // Regex pego do Gabarito

  if (!regex.test(dateForm.value)) {
    return 'errorInvalid';
  }
  if (dtArray[0] < 1 || dtArray[0] > 31) {
    return 'errorDays';
  }
  if (dtArray[1] < 1 || dtArray[1] > 12) {
    return 'errorMonths';
  }
  if (dtArray[2] < 1) {
    return 'errorYears';
  }
  return dateForm.value;
}

function nameF() {
  const nameC = document.querySelector('#name');
  if (nameC.value !== '') {
    return nameC.value;
  } else {
    nameC.attributes.required = 'required';
  }
}

function emailF() {
  const emailC = document.querySelector('#email');
  return emailC.value;
}

function cpfF() {
  const cpfC = document.querySelector('#cpf');
  return cpfC.value;
}

function adressF() {
  const adressC = document.querySelector('#adress');
  return adressC.value;
}

function statesF() {
  const statesC = document.querySelector('#uf');
  return federalUnit()[statesC.value];
}

function homeF() {
  const homeC = document.querySelector('#casa');
  const apartmentC = document.querySelector('#apartamento');
  if (homeC.checked) {
    return 'Casa';
  } else if (apartmentC.checked) {
    return 'Apartamento';
  }
}

function resumeCurriculumF() {
  const resumeCurriculumC = document.querySelector('#ResumeCurriculum');
  return resumeCurriculumC.value;
}

function officeF() {
  const officeC = document.querySelector('#office');
  return officeC.value;
}

function descriOfficeF() {
  const descriOfficeC = document.querySelector('#descriOffice');
  return descriOfficeC.value;
}

function objCurriculum() {
  let obj = {
    name: '',
    email: '',
    cpf: '',
    adress: '',
    states: '',
    home: '',
    resumeCurriculum: '',
    office: '',
    resumeOffice: '',
    date: ''
  };
  obj.name = nameF();
  obj.email = emailF();
  obj.cpf = cpfF();
  obj.states = statesF();
  obj.adress = adressF();
  obj.home = homeF();
  obj.resumeCurriculum = resumeCurriculumF();
  obj.office = officeF();
  obj.resumeOffice = descriOfficeF();
  obj.date = validateData();
  return obj;
}

function submitForm(event) {
  event.preventDefault();
  const divResult = document.querySelector('#infos');
  if (objCurriculum()['date'] === 'errorInvalid') {
    alert('Data em formato inválido');
  } else if (objCurriculum()['date'] === 'errorDays') {
    alert('Data inválida, os dias devem estar entra 1 e 31.');
  } 
  else if (objCurriculum()['date'] === 'errorMonths') {
    alert('Data inválida, os meses devem estar entra 1 e 12.');
  } 
  else if (objCurriculum()['date'] === 'errorYears') {
    alert('Data inválida, o ano não pode ser negativo.');
  } else {
    divResult.classList.add('conteudo');
    for (const key in objCurriculum()) {
      const spans = document.createElement('p');
      spans.innerHTML = objCurriculum()[key];
      divResult.appendChild(spans);
    }
  }
}

function resetForm() {
  const divResult = document.querySelector('#infos');
  while (divResult.firstChild) {
    divResult.firstChild.remove();
  }
  divResult.classList.remove('conteudo');
}

window.onload = function () {
  const idSubmit = document.querySelector('#submit');
  const idReset = document.querySelector('#reset');
  showStates();
  idSubmit.addEventListener('click', submitForm);
  idReset.addEventListener('click', resetForm);
}