"use strict"

const burgerBtn = document.querySelector('.burger-btn');
const primaryNavigation = document.querySelector('.primaryNavigation');

let btnPushed = false;

burgerBtn.addEventListener('click', function() {

   console.log("btnClicked");

   // if (btnPushed === false) {
   //    primaryNavigation.style.transform = "translateX(0)";
   //    btnPushed = true;
   // } else {
   //    primaryNavigation.style.transform = "translateX(100%)";
   //    btnPushed = false;
   // }
})
