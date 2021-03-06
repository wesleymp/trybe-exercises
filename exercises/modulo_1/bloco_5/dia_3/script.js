function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//-- Listando todos os dias da semana
function listWeekDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const getULDays = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const createElementLI = document.createElement("li");
    createElementLI.innerHTML = dezDaysList[index];
    getULDays.appendChild(createElementLI).className = "day";

    if (createElementLI.innerHTML === "24" || createElementLI.innerHTML === "25" || createElementLI.innerHTML === "31"){
      getULDays.appendChild(createElementLI).className += " holiday";
    }
    if (createElementLI.innerHTML === "4" || createElementLI.innerHTML === "11" || createElementLI.innerHTML === "18" || createElementLI.innerHTML === "25"){
      getULDays.appendChild(createElementLI).className += " friday";
    }

  }
}
listWeekDays();

//-- Botão Feriado
function createButtonHoliday() {
  const createButton = document.createElement("button");
  const getDivButton = document.querySelector(".buttons-container");
  createButton.innerHTML = "Feriados";
  getDivButton.appendChild(createButton).className = "btn-holiday";
}
createButtonHoliday();

//-- Botão Sexta-Feira
function createButtonFriday() {
  const createButton = document.createElement("button");
  const getDivButton = document.querySelector(".buttons-container");
  createButton.innerHTML = "Sexta-feira";
  getDivButton.appendChild(createButton).className = "btn-friday";
}
createButtonFriday();

//-- Mostra os feriados ao clicar o botão
const buttonHoliday = document.querySelector(".btn-holiday");
buttonHoliday.addEventListener("click", function(){
  const dayHoliday = document.querySelectorAll(".holiday");
  for (let i = 0; i < dayHoliday.length; i += 1) {
    if (dayHoliday[i].style.backgroundColor === "white") {
      dayHoliday[i].style.backgroundColor = "rgb(238,238,238)";
    }else {
      dayHoliday[i].style.backgroundColor = "white";
    }
  }
});

//-- Mostra as Sexta-Feiras ao clicar o botão
const buttonFriday = document.querySelector(".btn-friday");
buttonFriday.addEventListener("click", function(){
  const dayFriday = document.querySelectorAll(".friday");
  let contador = 4;

  for (let i = 0; i < dayFriday.length; i += 1) {
    if (dayFriday[i].innerHTML === "Sexta-Feira") {
      dayFriday[i].innerHTML = contador;
      contador += 7;
    }else {
      dayFriday[i].innerHTML = "Sexta-Feira";
    }
  }
});

//-- Zoom ao passar o mouse por cima do LI
const getLiToZoom = document.querySelectorAll(".day");
for (let i = 0; i < getLiToZoom.length; i += 1) {
  getLiToZoom[i].addEventListener("mouseover", function(event){
      event.target.style.fontSize = "32px";
  });
  getLiToZoom[i].addEventListener("mouseout", function(event){
    event.target.style.fontSize = "20px";
  });
}

//-- Tag span criada
function createCooking(){
  const myTasks = document.querySelector(".my-tasks");
  const createSpan = document.createElement("span");
  createSpan.innerHTML = "Cozinhar:";
  myTasks.appendChild(createSpan);
}
createCooking();

//-- Adicionado div cor
function addSubtitleColor(cor) {
  const myTasks = document.querySelector(".my-tasks");
  const createDivTask = document.createElement("div");
  createDivTask.className = "task";
  createDivTask.style.backgroundColor = cor;
  myTasks.appendChild(createDivTask);
}
addSubtitleColor("green");

//-- Tarefa selecionada com a cor
const colorSelected = document.querySelector(".task");
function taskSelected() {
  colorSelected.addEventListener("click", function(){
    if (colorSelected.classList[1] === "selected") {
      colorSelected.className = "task";
    } else {
      colorSelected.className += " selected";
    }
  });
}
taskSelected();

//-- Adicionado ao dia a tarefa selecionada com a cor
function colorDayWeek() {
  const colorTaskSelected = document.querySelector(".task");
  for (let i = 0; i < getLiToZoom.length; i += 1) {
    getLiToZoom[i].addEventListener("click", function(){
      if (colorTaskSelected.classList[1] === "selected") {
        getLiToZoom[i].style.color = "green";
      } else {
        getLiToZoom[i].style.color = "rgb(119,119,119)";
      }
    });
  }
}
colorDayWeek();

function addTasks() {
  const valueInput = document.querySelector("#task-input");
  const button = document.querySelector("#btn-add");
  const listTask = document.querySelector(".task-list");

  button.addEventListener("click", function(){
    const createElementLi = document.createElement("li");
    listTask.appendChild(createElementLi).innerHTML = valueInput.value;
    if (valueInput.value === "") {
      alert("Insira alguma tarefa");
    }
  });

  valueInput.addEventListener("keypress", function(keyEnter){
    if (keyEnter.key === "Enter") {
      const createElementLi = document.createElement("li");
      listTask.appendChild(createElementLi).innerHTML = valueInput.value;
      if (valueInput.value === "") {
        alert("Insira alguma tarefa");
      }
    }
  });
}
addTasks();