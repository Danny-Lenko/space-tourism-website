"use strict"

const tabList = document.querySelector('[role=tablist]');
const tabs = tabList.querySelectorAll('[role=tab]');

let tabIndex = 0;

tabList.addEventListener('keydown', trackKeyEvents);

function trackKeyEvents(e) {

   if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      tabs[tabIndex].setAttribute("tabindex", -1);
   }

   if (e.key === "ArrowRight") {
      tabIndex++;
   }

   if (e.key === "ArrowLeft") {
      tabIndex--;
   }

   if (tabIndex >= tabs.length) {
      tabIndex = 0;
   } else if (tabIndex < 0) {
      tabIndex = tabs.length - 1;
   }

   tabs[tabIndex].setAttribute("tabindex", 0);
   tabs[tabIndex].focus();
}