let menulist = document.getElementById("menulist");

if (window.innerWidth <= 900) {
  menulist.style.maxHeight = "0";
}

function toggle() {
  if (menulist.style.maxHeight === "0px") {
    menulist.style.maxHeight = "400px";
  } else {
    menulist.style.maxHeight = "0px";
  }

}

const serviceBalls = document.querySelectorAll(".ball");
const services = document.querySelectorAll(".service");

for (let i = 0; i < serviceBalls.length; i++) {
  serviceBalls[i].addEventListener("click", function () {
    for (let j = 0; j < services.length; j++) {
      services[j].classList.remove("centered");
    }
    services[i].classList.add("centered");
    
  });
}

var cases = document.querySelectorAll('.case1, .case2, .case3');

for (let i = 0; i < cases.length; i++) {
  cases[i].addEventListener('click', function() {
    for (let j = 0; j < cases.length; j++) {
      cases[j].style.border = '';
    }
    this.style.border = '5px solid #406aff';
  });
}




const customer_sq = document.querySelectorAll(".square");
const customers = document.querySelectorAll(".customer");

for (let i = 0; i < customer_sq.length; i++) {
  customer_sq[i].addEventListener("click", function () {
    for (let j = 0; j < customers.length; j++) {
      customers[j].classList.remove("active");
      customers[j].style.opacity = ""; 

    }
    customers[i].classList.add("active");
    customers[i].style.opacity = "1"; 

    
  });
}