//fonctionnalité 1

let foot = document.querySelector("footer");
let count = 0;
console.log(foot);
function footerClick() {
  count ++;
  console.log("clique numéro " + count)
};
foot.addEventListener("click", footerClick);


//fonctionnalité 2
let hamburger = document.querySelector(".navbar-toggler");
let hamburgerStatus = false;
console.log(hamburger);
function editCollapse() {
  if (hamburgerStatus === false) {
    hamburger.removeAttribute('data-toggle');
    hamburgerStatus = true;
  } else {
    hamburger.setAttribute("data-toggle","collapse");
    hamburgerStatus = false;
  }
  console.log(hamburger);
};
hamburger.addEventListener("click", editCollapse);


//fonctionnalité 3
let editBtn = document.querySelector(".btn-outline-secondary");
let editTxt = document.querySelector(".card-text");
function changeColor() {
  editTxt.style.color = "red";
};
editBtn.addEventListener("click", changeColor);


//fonctionnalité 4
let editBtn1 = document.querySelectorAll(".btn-outline-secondary")[1];
let editTxt1 = document.querySelectorAll(".card-text")[1];
function greenText() {
  if (editTxt1.style.color === "") {
    editTxt1.style.color = "green";
  } else {
    editTxt1.style.color = "";
  }
};
editBtn1.addEventListener("click", greenText);



//fonctionnalité 5
let navBar = document.querySelector(".navbar");
let bootstrap = document.querySelector("link");
let isNuke = false;
console.log(navBar);
console.log(bootstrap);
function nuke() {
  if (isNuke === false) {
    bootstrap.removeAttribute('rel');
    isNuke = true;
  } else {
    bootstrap.setAttribute("rel","stylesheet");
    isNuke = false;
  }
};
navBar.addEventListener("dblclick", nuke);
