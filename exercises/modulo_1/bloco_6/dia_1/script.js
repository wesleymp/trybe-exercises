function federalUnit() {
  const uf = document.querySelector('#uf');
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
  for (const key in states) {
    const createOptionStates = document.createElement('option');
    createOptionStates.innerHTML = states[key];
    createOptionStates.value = key;
    uf.appendChild(createOptionStates);
  }
}

window.onload = function () {
  federalUnit();
  const btnSubmit = document.querySelector('#submit');
  const btnClear = document.querySelector('#reset');
}