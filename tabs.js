"use strict"

const tabList = document.querySelector('[role=tablist]');
const tabs = tabList.querySelectorAll('[role=tab]');

let tabIndex = 0;

tabList.addEventListener('keydown', changeTabFocus);

tabs.forEach((tab) => {
   tab.addEventListener('click', changePanel);
})

function changeTabFocus(e) {

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

function changePanel(e) {
   const targetTab = e.target;
   const targetPanel = targetTab.getAttribute('aria-controls');
   const targetImage = targetTab.getAttribute('data-img');

   const tabContainer = targetTab.parentNode;
   const mainContainer = tabContainer.parentNode;

   mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.setAttribute("hidden", true);
   });
   mainContainer.querySelectorAll('[role="tabimg"]').forEach((img) => {
      img.setAttribute("hidden", true);
   });
   
   mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden');
   mainContainer.querySelector([`#${targetImage}`]).removeAttribute('hidden');

   // mainContainer.querySelector([`#${targer}`])
}

