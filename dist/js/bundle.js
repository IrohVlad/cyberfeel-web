/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sidebar */ \"./src/modules/sidebar\");\n/* harmony import */ var _modules_galary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/galary */ \"./src/modules/galary.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n\n\n\n\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\ntry {\n  (0,_modules_galary__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n} catch {}\n\n//# sourceURL=webpack://cyberfeel/./src/index.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burger() {\n  const burgers = document.querySelectorAll('.burger');\n  burgers.forEach(item => {\n    item.addEventListener('click', e => {\n      item.parentElement.classList.add('burger_active');\n      console.log('ddwe');\n    });\n  });\n  burgers.forEach(item => {\n    item.parentElement.addEventListener('click', e => {\n      if (e.target && e.target == item.parentElement && item.parentElement.classList.contains('burger_active')) {\n        item.parentElement.classList.remove('burger_active');\n      }\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://cyberfeel/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/galary.js":
/*!*******************************!*\
  !*** ./src/modules/galary.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction galary() {\n  let galaryItem;\n\n  class Galary {\n    //класс сазмещения и выравнивания сетки картинок\n    constructor(galary, col) {\n      this.galary = galary, this.columnCount = col, this.columns = [];\n\n      for (let i = 0; i < this.columnCount; i++) {\n        let column = document.createElement('div');\n        column.classList.add('gallary__grid-item');\n        galary.append(column);\n      }\n    }\n\n    Log() {\n      console.log(this.columns);\n    }\n\n    Add(imgs) {\n      const column = document.querySelectorAll('.gallary__grid-item');\n      let columnIndex = 0;\n\n      for (let i = 0; i < imgs.length; i++) {\n        if (columnIndex > this.columnCount - 1) {\n          columnIndex = 0;\n        }\n\n        let img = document.createElement('div');\n        img.classList.add('grid-item');\n        img.innerHTML = `<img class=\"grid-img\" index=${i} src=${imgs[i].src} alt=\"\">`;\n        column[columnIndex].append(img);\n        columnIndex++;\n      }\n    }\n\n    Crop() {\n      const column = document.querySelectorAll('.gallary__grid-item');\n      let minHeight = 0;\n      let heightDiff = [];\n      column.forEach(item => {\n        let now = 0;\n        Array.from(item.children).forEach((img, i, arr) => {\n          now += img.clientHeight;\n        });\n\n        if (item.children.length > column[column.length - 1].children.length) {\n          now += 10;\n        }\n\n        heightDiff.push(now);\n\n        if (minHeight > now || minHeight == 0) {\n          minHeight = now;\n          now = 0;\n        }\n      });\n      heightDiff = heightDiff.map(item => item - minHeight);\n      column.forEach((item, id) => {\n        Array.from(item.children).forEach((ite, i, arr) => {\n          ite.style.maxHeight = `${ite.clientHeight - heightDiff[id] / arr.length}px`;\n        });\n      });\n    }\n\n  }\n\n  function GoToImg() {\n    //переход по клику на картинку\n    Array.from(document.querySelector('.gallary__grid').children).forEach(item => {\n      item.addEventListener('click', e => {\n        const target = e.target;\n\n        if (target && target.classList.contains('grid-img')) {\n          console.log(target);\n          let index = target.getAttribute('index');\n          document.querySelectorAll('.img').forEach(item => {\n            item.style.transform = '';\n            item.style.transform = `translateX(-${index * 100}vw)`;\n          });\n        }\n      });\n    });\n  }\n\n  ;\n\n  const setGalary = async (g, bd) => {\n    //функция всей работы с картинками\n    await g.Add(bd);\n    let waitImg = setInterval(() => {\n      let imgLoad = 0;\n      document.querySelectorAll('.grid-item').forEach(item => {\n        if (item.clientHeight != 0) {\n          imgLoad++;\n        }\n      });\n\n      if (imgLoad == document.querySelectorAll('.grid-item').length) {\n        g.Crop();\n        clearTimeout(waitImg);\n      }\n    }, 50); // await g.Crop();\n\n    GoToImg();\n  };\n\n  let imgData = [];\n\n  async function getImgFromDB() {\n    await fetch('db.json', {\n      // размещение картинок при загрузке страницы\n      method: 'GET',\n      headers: {\n        'Content-type': 'aplication/json'\n      }\n    }).then(data => data.json()).then(data => {\n      if (document.documentElement.clientWidth > 1000) {\n        document.getElementById('galary').innerHTML = '';\n        const x = new Galary(document.getElementById('galary'), 6);\n        setGalary(x, data.gridimg);\n      } else if (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550) {\n        document.getElementById('galary').innerHTML = '';\n        const y = new Galary(document.getElementById('galary'), 4);\n        setGalary(y, data.gridimg);\n      } else if (document.documentElement.clientWidth < 500) {\n        document.getElementById('galary').innerHTML = '';\n        const z = new Galary(document.getElementById('galary'), 2);\n        setGalary(z, data.gridimg);\n      }\n    });\n    galaryItem = document.querySelectorAll('.img img');\n    console.log(galaryItem);\n    galaryItem.forEach(item => {\n      imgData.push({\n        src: item.getAttribute('src') // title: item.getAttribute('title')\n\n      });\n    }, 0);\n    console.log(imgData);\n  }\n\n  getImgFromDB();\n  window.addEventListener('resize', () => {\n    //переразмещение при масштабировании страницы\n    //     fetch('db.json', {\n    //         method: 'GET',\n    //         headers: {\n    //             'Content-type': 'aplication/json'\n    //         }\n    //     }).then(data=> data.json())\n    //     .then (data=> {\n    //         if (document.documentElement.clientWidth > 1000){\n    //             document.getElementById('galary').innerHTML = '';\n    //             const x = new Galary(document.getElementById('galary'), 6);\n    //             setGalary(x, data.gridimg);\n    //         }\n    //         else if(document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550){\n    //             document.getElementById('galary').innerHTML = '';\n    //             const y = new Galary(document.getElementById('galary'), 4);\n    //             setGalary(y, data.gridimg);\n    //         }\n    //         else if(document.documentElement.clientWidth < 550){\n    //             document.getElementById('galary').innerHTML = '';\n    //             const z = new Galary(document.getElementById('galary'), 2);\n    //             setGalary(z, data.gridimg);\n    //         }\n    //     });\n    if (document.documentElement.clientWidth > 1000) {\n      document.getElementById('galary').innerHTML = '';\n      const x = new Galary(document.getElementById('galary'), 6);\n      setGalary(x, imgData);\n    } else if (document.documentElement.clientWidth < 1000 && document.documentElement.clientWidth > 550) {\n      document.getElementById('galary').innerHTML = '';\n      const y = new Galary(document.getElementById('galary'), 4);\n      setGalary(y, imgData);\n    } else if (document.documentElement.clientWidth < 550) {\n      document.getElementById('galary').innerHTML = '';\n      const z = new Galary(document.getElementById('galary'), 2);\n      setGalary(z, imgData);\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (galary);\n\n//# sourceURL=webpack://cyberfeel/./src/modules/galary.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction slider() {\n  function maxImg(number) {\n    if (number > document.querySelectorAll('.img').length - 1) {\n      return 0;\n    } else if (number < 0) {\n      return document.querySelectorAll('.img').length - 1;\n    } else {\n      return number;\n    }\n  }\n\n  let position = 0;\n\n  function SliderNext() {\n    position++;\n    position = maxImg(position);\n    const sliderIMG = document.querySelectorAll('.img');\n    sliderIMG.forEach(item => {\n      item.style.transform = '';\n      item.style.transform = `translateX(-${position * 100}vw)`;\n    });\n  }\n\n  function SliderPrev() {\n    position--;\n    position = maxImg(position);\n    const sliderIMG = document.querySelectorAll('.img');\n    sliderIMG.forEach(item => {\n      item.style.transform = '';\n      item.style.transform = `translateX(-${position * 100}vw)`;\n    });\n  }\n\n  document.querySelector('.vector-2').addEventListener('click', () => {\n    SliderNext(position);\n    console.log(position);\n  });\n  document.querySelector('.vector-1').addEventListener('click', () => {\n    SliderPrev(position);\n    console.log(position);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://cyberfeel/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/header":
/*!****************************!*\
  !*** ./src/modules/header ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header(content){\r\n    let elem = document.createElement('li');\r\n    elem.classList.add('header__nav_item');\r\n    elem.classList.add('_btn');\r\n    elem.textContent = content;\r\n    let elem1 = document.createElement('li');\r\n    elem1.classList.add('header__nav_item');\r\n    elem1.classList.add('_btn');\r\n    elem1.textContent = content;\r\n    document.querySelector('.header__nav').append(elem1);\r\n    document.querySelector('.header__burger_content').append(elem);\r\n}\r\n\n\n//# sourceURL=webpack://cyberfeel/./src/modules/header?");

/***/ }),

/***/ "./src/modules/sidebar":
/*!*****************************!*\
  !*** ./src/modules/sidebar ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/modules/header\");\nfunction sidebar(){\r\n    function sidebarFill(content){\r\n        let elem = document.createElement('li');\r\n        elem.classList.add('sidebar__nav_item');\r\n        elem.classList.add('_btn');\r\n        elem.textContent = content;\r\n        let elem1 = document.createElement('li');\r\n        elem1.classList.add('sidebar__nav_item');\r\n        elem1.classList.add('_btn');\r\n        elem1.textContent = content;\r\n        let elem2 = document.createElement('li');\r\n        elem2.classList.add('sidebar__nav_item');\r\n        elem2.classList.add('_btn');\r\n        elem2.textContent = content;\r\n        document.querySelector('.sidebar__nav').append(elem1);\r\n        document.querySelectorAll('.burger__content')[0].append(elem);\r\n        document.querySelectorAll('.burger__content')[1].append(elem2);\r\n    }\r\n    /*----------------------------------------запрос--------------------------------------------*/\r\n\r\n\r\n    fetch('db.json', {\r\n        method: 'GET',\r\n        headers: {\r\n            'Content-type': 'aplication/json'\r\n        }\r\n    }).then(data=> data.json())\r\n    .then(data=> {\r\n        data.slider.forEach((item)=>{\r\n            sidebarFill(item);\r\n        });\r\n        data.header.forEach((item)=>{\r\n            (0,_header__WEBPACK_IMPORTED_MODULE_0__.header)(item);\r\n        })\r\n        const slider = document.querySelector('.galary__slider');\r\n        data.gridimg.forEach((item)=>{\r\n            let imgContainer = document.createElement('div');\r\n            imgContainer.classList.add('img');\r\n            imgContainer.innerHTML = `<img src=${item.src} alt=\"\">`;\r\n            slider.append(imgContainer);\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\r\n\n\n//# sourceURL=webpack://cyberfeel/./src/modules/sidebar?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;