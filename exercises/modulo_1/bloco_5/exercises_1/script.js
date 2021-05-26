let headerContainer = document.getElementById("header-container");
let bodySite = document.getElementById("container");
let emergencyTasks = document.querySelector(".emergency-tasks");
let noEmergencyTasks = document.querySelector(".no-emergency-tasks");
let h3 = document.querySelectorAll("section h3");
let footer = document.querySelector("footer");

bodySite.style.backgroundColor = "#F3F3F3";

headerContainer.style.cssText = "background-color: #3EB069";

emergencyTasks.style.backgroundColor = "#F6A084";
h3[0].style.backgroundColor = "#A500F3";
h3[1].style.backgroundColor = "#A500F3";

noEmergencyTasks.style.backgroundColor = "#F9DB5E";
h3[2].style.backgroundColor = "#232525";
h3[3].style.backgroundColor = "#232525";

footer.style.cssText = "background-color: #0E3533;";