"use strict"

const tabList = document.querySelector('[role=tablist]');
const tabs = document.querySelectorAll('[role=tab]');

let tabFocus = 0;

tabList.addEventListener('keydown', changeTabFocus);
tabs.forEach((tab) => {
   tab.addEventListener('click', changeTabPanel);
});

function changeTabFocus(e) {
   if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      tabs[tabFocus].setAttribute('tabindex', -1);

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
}

function changeTabPanel(e) {
   const tabClicked = e.target;
   const tabAttribute = tabClicked.getAttribute('aria-controls');
   const imgAttribute = tabClicked.getAttribute('data-img');
   
   const clickedParent = tabClicked.parentNode;
   const commonParent = clickedParent.parentNode;

   hideContent(commonParent, '[role=tabpanel]');
   hideContent(commonParent, '[role=tabimg]');

   showContent(commonParent, [`#${tabAttribute}`]);
   showContent(commonParent, [`#${imgAttribute}`]);

   commonParent.querySelector('[aria-selected=true]').setAttribute('aria-selected', false);
   tabClicked.setAttribute('aria-selected', true);
}

function hideContent(element, content) {
   element.querySelectorAll(content).forEach((item) => {
      item.style.display="none";
   });
}

function showContent(element, content) {
   element.querySelector(content).style.display="block";
}



