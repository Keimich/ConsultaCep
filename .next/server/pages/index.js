"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Infos.tsx":
/*!******************************!*\
  !*** ./components/Infos.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Infos": () => (/* binding */ Infos)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\components\\Infos.tsx";

const Infos = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "infos",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: ["Consulte qualquer ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "CEP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 35
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        id: "amount",
        children: props.amount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 16
      }, undefined), " consultas j\xE1 realizadas!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-input-mask */ "react-input-mask");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\components\\Input.tsx";



const saveCep = async data => {
  await fetch('/api/consulta', {
    method: 'POST',
    body: data
  });
};

const getCep = () => {
  const infoFields = {
    error: document.getElementById('error'),
    infosField: document.querySelector('div#result'),
    logradouro: document.getElementById('logradouro'),
    bairro: document.getElementById('bairro'),
    localidade: document.getElementById('localidade'),
    cep: document.getElementById('cep_result'),
    uf: document.getElementById('uf')
  };
  let cep = document.getElementById('cep').value;

  if (cep === '') {
    infoFields.infosField.style.display = "none";
    infoFields.error.style.display = "block";
    infoFields.error.innerText = 'Favor digite um CEP';
  }

  if (cep.replace('-', '').replaceAll('_', '').length < 8) {
    infoFields.infosField.style.display = "none";
    infoFields.error.style.display = "block";
    infoFields.error.innerText = 'Informe um CEP com pelo menos 8 numeros';
  } else {
    infoFields.error.style.display = "none";
    fetch(`https://viacep.com.br/ws/${cep.replace('-', '')}/json/`).then(response => response.text()).then(result => {
      const resultJSON = JSON.parse(result);
      saveCep(JSON.stringify(resultJSON));

      if (resultJSON.erro =  true && !resultJSON.logradouro) {
        infoFields.infosField.style.display = "none";
        infoFields.error.style.display = "block";
        infoFields.error.innerText = 'CEP nao encontrado :(';
      } else {
        infoFields.error.style.display = "none";
        infoFields.infosField.style.display = "grid";
        infoFields.logradouro.innerText = resultJSON.logradouro;
        infoFields.bairro.innerText = resultJSON.bairro;
        infoFields.localidade.innerText = resultJSON.localidade;
        infoFields.cep.innerText = resultJSON.cep;
        infoFields.uf.innerText = resultJSON.uf;
      }

      ;
    }).catch(error => console.log('error', error));
  }
};

const Input = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    id: "input",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "input_cep",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "material-icons",
        children: "room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_0___default()), {
        mask: "99999-999",
        placeholder: "Ex:12345-678",
        id: "cep"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
      onClick: getCep,
      children: "Consultar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/NavBar.tsx":
/*!*******************************!*\
  !*** ./components/NavBar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBar": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\components\\NavBar.tsx";

const NavBar = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "nav",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "logo",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        children: ["Consulta", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "CEP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 5,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Result.tsx":
/*!*******************************!*\
  !*** ./components/Result.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Result": () => (/* binding */ Result)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\components\\Result.tsx";

const Result = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "result",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      id: "error",
      children: "CEP nao encontrado :("
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "result",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Informacoes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Logradouro: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "logradouro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Localidade: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "localidade"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 28
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["Bairro: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "bairro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 24
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["CEP: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "cep_result"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["UF: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          id: "uf"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 20
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.tsx");
/* harmony import */ var _components_Infos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Infos */ "./components/Infos.tsx");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Input */ "./components/Input.tsx");
/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Result */ "./components/Result.tsx");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\pages\\index.tsx";


(react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect) = (react__WEBPACK_IMPORTED_MODULE_1___default().useEffect);







const getServerSideProps = async context => {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_6__.PrismaClient();
  const result = await prisma.queries.count();
  return {
    props: {
      result
    }
  };
};

const Home = result => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("title", {
        children: "Consulta CEP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__.NavBar, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("main", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Infos__WEBPACK_IMPORTED_MODULE_3__.Infos, {
          amount: Object.values(result)[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Input__WEBPACK_IMPORTED_MODULE_4__.Input, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Result__WEBPACK_IMPORTED_MODULE_5__.Result, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("footer", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-input-mask":
/*!***********************************!*\
  !*** external "react-input-mask" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-input-mask");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhGLGVBa0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUEsa0JBREY7QUF3QkQsQ0ExQkQ7O0FBNEJBLGlFQUFlc0IsSUFBZjs7Ozs7Ozs7OztBQzlDQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwLy4vY29tcG9uZW50cy9JbmZvcy50c3giLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwLy4vY29tcG9uZW50cy9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwLy4vY29tcG9uZW50cy9OYXZCYXIudHN4Iiwid2VicGFjazovL2NvbnN1bHRhLWNlcC8uL2NvbXBvbmVudHMvUmVzdWx0LnRzeCIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcInJlYWN0LWlucHV0LW1hc2tcIiIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIGNvdW50UHJvcHMgPSB7XHJcbiAgICBhbW91bnQ6YW55XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcyA9IChwcm9wczpjb3VudFByb3BzKT0+e1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJpbmZvc1wiPlxyXG4gICAgICAgICAgICA8aDE+Q29uc3VsdGUgcXVhbHF1ZXIgPHNwYW4+Q0VQPC9zcGFuPjwvaDE+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmcgaWQ9XCJhbW91bnRcIj57cHJvcHMuYW1vdW50fTwvc3Ryb25nPiBjb25zdWx0YXMgasOhIHJlYWxpemFkYXMhPC9wPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSW5wdXRNYXNrIGZyb20gXCJyZWFjdC1pbnB1dC1tYXNrXCI7XHJcblxyXG5cclxuY29uc3Qgc2F2ZUNlcCA9IGFzeW5jKGRhdGE6IGFueSk9PntcclxuICAgIGF3YWl0IGZldGNoKCcvYXBpL2NvbnN1bHRhJyx7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogZGF0YVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgZ2V0Q2VwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5mb0ZpZWxkcyA9IHtcclxuICAgICAgICBlcnJvcjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvcicpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBpbmZvc0ZpZWxkOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I3Jlc3VsdCcpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBsb2dyYWRvdXJvOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ3JhZG91cm8nKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgYmFpcnJvOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhaXJybycpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBsb2NhbGlkYWRlOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2FsaWRhZGUnKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgY2VwOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlcF9yZXN1bHQnKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgdWY6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndWYnKSBhcyBIVE1MRWxlbWVudClcclxuICAgIH1cclxuICAgbGV0IGNlcCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VwJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuXHJcbiAgIGlmKGNlcCA9PT0gJycpe1xyXG5cclxuICAgIGluZm9GaWVsZHMuaW5mb3NGaWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpbmZvRmllbGRzLmVycm9yLmlubmVyVGV4dCA9ICdGYXZvciBkaWdpdGUgdW0gQ0VQJztcclxuICAgfSBpZihjZXAucmVwbGFjZSgnLScsJycpLnJlcGxhY2VBbGwoJ18nLCcnKS5sZW5ndGggPCA4KSB7XHJcblxyXG4gICAgaW5mb0ZpZWxkcy5pbmZvc0ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3IuaW5uZXJUZXh0ID0gJ0luZm9ybWUgdW0gQ0VQIGNvbSBwZWxvIG1lbm9zIDggbnVtZXJvcyc7XHJcbiAgIH0gZWxzZSB7XHJcblxyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgZmV0Y2goYGh0dHBzOi8vdmlhY2VwLmNvbS5ici93cy8ke2NlcC5yZXBsYWNlKCctJywnJyl9L2pzb24vYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcclxuICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdEpTT04gPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2F2ZUNlcChKU09OLnN0cmluZ2lmeShyZXN1bHRKU09OKSk7XHJcblxyXG4gICAgICAgIGlmKHJlc3VsdEpTT04uZXJybyA9IHRydWUgJiYgIXJlc3VsdEpTT04ubG9ncmFkb3Vybykge1xyXG5cclxuICAgICAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBpbmZvRmllbGRzLmVycm9yLmlubmVyVGV4dCA9ICdDRVAgbmFvIGVuY29udHJhZG8gOignO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGluZm9GaWVsZHMuaW5mb3NGaWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5sb2dyYWRvdXJvLmlubmVyVGV4dCA9IHJlc3VsdEpTT04ubG9ncmFkb3VybztcclxuICAgICAgICBpbmZvRmllbGRzLmJhaXJyby5pbm5lclRleHQgPSByZXN1bHRKU09OLmJhaXJybztcclxuICAgICAgICBpbmZvRmllbGRzLmxvY2FsaWRhZGUuaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi5sb2NhbGlkYWRlO1xyXG4gICAgICAgIGluZm9GaWVsZHMuY2VwLmlubmVyVGV4dCA9IHJlc3VsdEpTT04uY2VwO1xyXG4gICAgICAgIGluZm9GaWVsZHMudWYuaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi51Zn07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7ICAgXHJcbn19XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSAoKT0+e1xyXG4gICAgcmV0dXJuKCBcclxuICAgIDxzZWN0aW9uIGlkPVwiaW5wdXRcIj5cclxuICAgIDxkaXYgaWQ9XCJpbnB1dF9jZXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJvb208L3NwYW4+XHJcbiAgICAgICAgPElucHV0TWFzayBtYXNrPVwiOTk5OTktOTk5XCIgcGxhY2Vob2xkZXI9XCJFeDoxMjM0NS02NzhcIiBpZD1cImNlcFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDZXB9PkNvbnN1bHRhcjwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Db25zdWx0YTxzcGFuPkNFUDwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHQgPSAoKT0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBpZD1cInJlc3VsdFwiPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJlcnJvclwiPkNFUCBuYW8gZW5jb250cmFkbyA6KDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRcIj5cclxuICAgICAgICAgICAgPGgxPkluZm9ybWFjb2VzPC9oMT5cclxuICAgICAgICAgICAgPHA+TG9ncmFkb3VybzogPHNwYW4gaWQ9XCJsb2dyYWRvdXJvXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+TG9jYWxpZGFkZTogPHNwYW4gaWQ9XCJsb2NhbGlkYWRlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+QmFpcnJvOiA8c3BhbiBpZD1cImJhaXJyb1wiPjwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwPkNFUDogPHNwYW4gaWQ9XCJjZXBfcmVzdWx0XCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+VUY6IDxzcGFuIGlkPVwidWZcIj48L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxufSIsImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiIFxuUmVhY3QudXNlTGF5b3V0RWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0IFxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5pbXBvcnQgeyBJbmZvcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb3MnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXQnXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucXVlcmllcy5jb3VudCgpXG5cbiAgcmV0dXJuIHsgcHJvcHM6IHtyZXN1bHR9IH1cbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAocmVzdWx0KSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbnN1bHRhIENFUDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUF6ZXJldCtNb25vOndnaHRAMTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZCYXIvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPEluZm9zIGFtb3VudD17T2JqZWN0LnZhbHVlcyhyZXN1bHQpWzBdfS8+XG4gICAgICAgICAgPElucHV0Lz5cbiAgICAgICAgICA8UmVzdWx0Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaW5wdXQtbWFza1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkluZm9zIiwicHJvcHMiLCJhbW91bnQiLCJJbnB1dE1hc2siLCJzYXZlQ2VwIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImdldENlcCIsImluZm9GaWVsZHMiLCJlcnJvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmZvc0ZpZWxkIiwicXVlcnlTZWxlY3RvciIsImxvZ3JhZG91cm8iLCJiYWlycm8iLCJsb2NhbGlkYWRlIiwiY2VwIiwidWYiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwibGVuZ3RoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlc3VsdCIsInJlc3VsdEpTT04iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnJvIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiSW5wdXQiLCJOYXZCYXIiLCJSZXN1bHQiLCJIZWFkIiwiUmVhY3QiLCJ1c2VMYXlvdXRFZmZlY3QiLCJ1c2VFZmZlY3QiLCJQcmlzbWFDbGllbnQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicHJpc21hIiwicXVlcmllcyIsImNvdW50IiwiSG9tZSIsIk9iamVjdCIsInZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=