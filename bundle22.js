/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/components/mkacSidebar/mkacSidebar.module.scss
// extracted by mini-css-extract-plugin
var _1 = "mkacSidebar-module__container__y8ww2";
var _2 = "mkacSidebar-module__sidebar__boXWW";


;// ./src/components/mkacSidebar/mkacSidebar.js
// src/components/mkacSidebar/mkacSidebar.js


class mkacSidebar {
  constructor() {
    this.sidebar = document.createElement('div');
    this.sidebar.classList.add(_2);
    this.sidebar.textContent = 'This is a Sidebar';
    document.body.appendChild(this.sidebar);
  }
}

;// ./src/components/mkacPopup/mkacPopup.module.scss
// extracted by mini-css-extract-plugin
var mkacPopup_module_1 = "mkacPopup-module__container__LvarT";
var mkacPopup_module_2 = "mkacPopup-module__popup___36q4";


;// ./src/components/mkacPopup/mkacPopup.js
// src/components/mkacPopup/mkacPopup.js


class mkacPopup {
  constructor() {
    this.popup = document.createElement('div');
    this.popup.classList.add(mkacPopup_module_2);
    this.popup.textContent = 'This is a Popup';
    document.body.appendChild(this.popup);
  }
}

;// ./src/components/mkacTabs/mkacTabs.module.scss
// extracted by mini-css-extract-plugin
var mkacTabs_module_1 = "mkacTabs-module__container__eaOWQ";
var mkacTabs_module_2 = "mkacTabs-module__indicator__Dn_OW";
var _3 = "mkacTabs-module__tab__MbwvU";
var _4 = "mkacTabs-module__tabContainer__KtGt3";
var _5 = "mkacTabs-module__tabs__Ts8zO";


;// ./src/components/mkacTabs/mkacTabs.js
// src/components/mkacTabs/mkacTabs.js


class mkacTabs {
    constructor(container, tabs) {
        this.container = container;
        this.tabs = tabs;
        this.render();
        this.attachEvents();
    }

    render() {
        this.container.classList.add(_4);

        // Tạo div tabs
        this.tabsContainer = document.createElement("div");
        this.tabsContainer.classList.add(_5);

        // Tạo các tab và thêm vào tabsContainer
        this.tabs.forEach((tabData, index) => {
            const tab = document.createElement("div");
            tab.classList.add(_3);
            tab.textContent = tabData.label;
            tab.dataset.index = index;
            this.tabsContainer.appendChild(tab);
        });

        // Tạo indicator
        this.indicator = document.createElement("div");
        this.indicator.classList.add(mkacTabs_module_2);
        this.indicator.style.width = '50px';

        // Thêm tabsContainer và indicator vào container
        this.container.appendChild(this.tabsContainer);
        this.container.appendChild(this.indicator);

        // Chọn tab đầu tiên mặc định
        this.selectTab(0);
    }

    attachEvents() {
        this.tabsContainer.addEventListener("click", (event) => {
            const tabElement = event.target.closest(`.${_3}`);
            if (!tabElement) return;
            const index = Number(tabElement.dataset.index);
            this.selectTab(index);

            // Gọi callback của tab
            this.tabs[index].onclick();
        });
    }

    selectTab(index) {
        const selectedTab = this.tabsContainer.children[index];
        const tabWidth = selectedTab.offsetWidth;
        const tabOffsetLeft = selectedTab.offsetLeft;

        this.indicator.style.width = `${tabWidth}px`;
        this.indicator.style.transform = `translateX(${tabOffsetLeft}px)`;

        // Loại bỏ lớp active khỏi tất cả các tab và thêm vào tab đã chọn
        Array.from(this.tabsContainer.children).forEach((tab, i) => {
            tab.classList.toggle("active", i === index);
        });
    }
}

;// ./src/index.js
// src/index.js



  // Import theme để các component sử dụng

document.addEventListener('DOMContentLoaded', () => {
  new mkacSidebar();
  new mkacPopup();
  new mkacTabs();
});

/******/ })()
;