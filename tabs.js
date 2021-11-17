"use strict"

const tabList = document.querySelector('[role=tablist]');
const tabs = document.querySelectorAll('[role=tab]');

let tabFocus = 0;

tabList.addEventListener('keydown', changeTabFocus);

function changeTabFocus(e) {
   if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      tabs[tabFocus].setAttribute('tabindex', -1);
   }

   if (e.key === "ArrowRight") {
      tabFocus++;
   } else if (e.key === "ArrowLeft") {
      tabFocus--;
   }

   if (tabFocus >= tabs.length) {
      tabFocus = 0;
   } else if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
   }

   tabs[tabFocus].setAttribute('tabindex', 0);
   tabs[tabFocus].focus();
}

tabs.forEach((tab) => {
   tab.addEventListener('click', changeTabPanel);
});

function changeTabPanel(e) {
   const tabClicked = e.target;
   const tabAttribute = tabClicked.getAttribute('aria-controls');
   const imgAttribute = tabClicked.getAttribute('data-img');
   const clickedParent = tabClicked.parentNode;
   const commonParent = clickedParent.parentNode;

   commonParent.querySelectorAll('[role=tabpanel]').forEach((panel) => {
      panel.setAttribute('hidden', 'true');
   });
   commonParent.querySelector([`#${tabAttribute}`]).removeAttribute('hidden');

   commonParent.querySelectorAll('[role=tabimg]').forEach((img) => {
      img.setAttribute('hidden', 'true');
   });
   commonParent.querySelector([`#${imgAttribute}`]).removeAttribute('hidden');
}

