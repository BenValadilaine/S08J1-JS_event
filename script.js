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
