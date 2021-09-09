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
var _jsxFileName = "C:\\Users\\Keimich\\www\\consulta-cep\\components\\Infos.tsx";

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
var _jsxFileName = "C:\\Users\\Keimich\\www\\consulta-cep\\components\\Input.tsx";



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
      console.log(resultJSON);
      saveCep(resultJSON);

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
var _jsxFileName = "C:\\Users\\Keimich\\www\\consulta-cep\\components\\NavBar.tsx";

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
var _jsxFileName = "C:\\Users\\Keimich\\www\\consulta-cep\\components\\Result.tsx";

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
var _jsxFileName = "C:\\Users\\Keimich\\www\\consulta-cep\\pages\\index.tsx";


(react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect) = (react__WEBPACK_IMPORTED_MODULE_1___default().useEffect);







const getServerSideProps = async context => {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_6__.PrismaClient();
  const result = await prisma.queries.count({
    where: {
      res_api_error: 0
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEYsZUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkY7QUFBQSxrQkFERjtBQXdCRCxDQTFCRDs7QUE0QkEsaUVBQWV1QixJQUFmOzs7Ozs7Ozs7O0FDOUNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9jb21wb25lbnRzL0luZm9zLnRzeCIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9jb21wb25lbnRzL0lucHV0LnRzeCIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9jb21wb25lbnRzL05hdkJhci50c3giLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwLy4vY29tcG9uZW50cy9SZXN1bHQudHN4Iiwid2VicGFjazovL2NvbnN1bHRhLWNlcC8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwL2V4dGVybmFsIFwicmVhY3QtaW5wdXQtbWFza1wiIiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgY291bnRQcm9wcyA9IHtcclxuICAgIGFtb3VudDphbnlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9zID0gKHByb3BzOmNvdW50UHJvcHMpPT57XHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBpZD1cImluZm9zXCI+XHJcbiAgICAgICAgICAgIDxoMT5Db25zdWx0ZSBxdWFscXVlciA8c3Bhbj5DRVA8L3NwYW4+PC9oMT5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZyBpZD1cImFtb3VudFwiPntwcm9wcy5hbW91bnR9PC9zdHJvbmc+IGNvbnN1bHRhcyBqw6EgcmVhbGl6YWRhcyE8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSIsImltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuXHJcblxyXG5jb25zdCBzYXZlQ2VwID0gYXN5bmMoZGF0YTogYW55KT0+e1xyXG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY29uc3VsdGEnLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRDZXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbmZvRmllbGRzID0ge1xyXG4gICAgICAgIGVycm9yOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGluZm9zRmllbGQ6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcmVzdWx0JykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGxvZ3JhZG91cm86IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncmFkb3VybycpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBiYWlycm86IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpcnJvJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGxvY2FsaWRhZGU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYWxpZGFkZScpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBjZXA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VwX3Jlc3VsdCcpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICB1ZjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1ZicpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgfVxyXG4gICBsZXQgY2VwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZXAnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG5cclxuICAgaWYoY2VwID09PSAnJyl7XHJcblxyXG4gICAgaW5mb0ZpZWxkcy5pbmZvc0ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3IuaW5uZXJUZXh0ID0gJ0Zhdm9yIGRpZ2l0ZSB1bSBDRVAnO1xyXG4gICB9IGlmKGNlcC5yZXBsYWNlKCctJywnJykucmVwbGFjZUFsbCgnXycsJycpLmxlbmd0aCA8IDgpIHtcclxuXHJcbiAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5pbm5lclRleHQgPSAnSW5mb3JtZSB1bSBDRVAgY29tIHBlbG8gbWVub3MgOCBudW1lcm9zJztcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly92aWFjZXAuY29tLmJyL3dzLyR7Y2VwLnJlcGxhY2UoJy0nLCcnKX0vanNvbi9gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0SlNPTiA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRKU09OKVxyXG4gICAgICAgIHNhdmVDZXAocmVzdWx0SlNPTik7XHJcblxyXG4gICAgICAgIGlmKHJlc3VsdEpTT04uZXJybyA9IHRydWUgJiYgIXJlc3VsdEpTT04ubG9ncmFkb3Vybykge1xyXG5cclxuICAgICAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBpbmZvRmllbGRzLmVycm9yLmlubmVyVGV4dCA9ICdDRVAgbmFvIGVuY29udHJhZG8gOignO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGluZm9GaWVsZHMuaW5mb3NGaWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5sb2dyYWRvdXJvLmlubmVyVGV4dCA9IHJlc3VsdEpTT04ubG9ncmFkb3VybztcclxuICAgICAgICBpbmZvRmllbGRzLmJhaXJyby5pbm5lclRleHQgPSByZXN1bHRKU09OLmJhaXJybztcclxuICAgICAgICBpbmZvRmllbGRzLmxvY2FsaWRhZGUuaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi5sb2NhbGlkYWRlO1xyXG4gICAgICAgIGluZm9GaWVsZHMuY2VwLmlubmVyVGV4dCA9IHJlc3VsdEpTT04uY2VwO1xyXG4gICAgICAgIGluZm9GaWVsZHMudWYuaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi51Zn07XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7ICAgXHJcbn19XHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQgPSAoKT0+e1xyXG4gICAgcmV0dXJuKCBcclxuICAgIDxzZWN0aW9uIGlkPVwiaW5wdXRcIj5cclxuICAgIDxkaXYgaWQ9XCJpbnB1dF9jZXBcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPnJvb208L3NwYW4+XHJcbiAgICAgICAgPElucHV0TWFzayBtYXNrPVwiOTk5OTktOTk5XCIgcGxhY2Vob2xkZXI9XCJFeDoxMjM0NS02NzhcIiBpZD1cImNlcFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDZXB9PkNvbnN1bHRhcjwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBjb25zdCBOYXZCYXIgPSAoKSA9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxoMj5Db25zdWx0YTxzcGFuPkNFUDwvc3Bhbj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJcclxuXHJcbmV4cG9ydCBjb25zdCBSZXN1bHQgPSAoKT0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbiBpZD1cInJlc3VsdFwiPlxyXG4gICAgICAgICAgICA8aDEgaWQ9XCJlcnJvclwiPkNFUCBuYW8gZW5jb250cmFkbyA6KDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZXN1bHRcIj5cclxuICAgICAgICAgICAgPGgxPkluZm9ybWFjb2VzPC9oMT5cclxuICAgICAgICAgICAgPHA+TG9ncmFkb3VybzogPHNwYW4gaWQ9XCJsb2dyYWRvdXJvXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+TG9jYWxpZGFkZTogPHNwYW4gaWQ9XCJsb2NhbGlkYWRlXCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+QmFpcnJvOiA8c3BhbiBpZD1cImJhaXJyb1wiPjwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDxwPkNFUDogPHNwYW4gaWQ9XCJjZXBfcmVzdWx0XCI+PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPHA+VUY6IDxzcGFuIGlkPVwidWZcIj48L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgKTtcclxufSIsImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiIFxuUmVhY3QudXNlTGF5b3V0RWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0IFxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5pbXBvcnQgeyBJbmZvcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5mb3MnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXQnXG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuLi9jb21wb25lbnRzL1Jlc3VsdCdcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucXVlcmllcy5jb3VudCh7d2hlcmU6e3Jlc19hcGlfZXJyb3I6MH19KVxuXG4gIHJldHVybiB7IHByb3BzOiB7cmVzdWx0fSB9XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKHJlc3VsdCkgPT4ge1xuICBcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db25zdWx0YSBDRVA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIi8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BemVyZXQrTW9ubzp3Z2h0QDEwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc1wiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2QmFyLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxJbmZvcyBhbW91bnQ9e09iamVjdC52YWx1ZXMocmVzdWx0KVswXX0vPlxuICAgICAgICAgIDxJbnB1dC8+XG4gICAgICAgICAgPFJlc3VsdC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3Rlcj5cblxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlucHV0LW1hc2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJJbmZvcyIsInByb3BzIiwiYW1vdW50IiwiSW5wdXRNYXNrIiwic2F2ZUNlcCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJnZXRDZXAiLCJpbmZvRmllbGRzIiwiZXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5mb3NGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dyYWRvdXJvIiwiYmFpcnJvIiwibG9jYWxpZGFkZSIsImNlcCIsInVmIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lclRleHQiLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsImxlbmd0aCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJyZXN1bHQiLCJyZXN1bHRKU09OIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImVycm8iLCJjYXRjaCIsIklucHV0IiwiTmF2QmFyIiwiUmVzdWx0IiwiSGVhZCIsIlJlYWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0IiwiUHJpc21hQ2xpZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByaXNtYSIsInF1ZXJpZXMiLCJjb3VudCIsIndoZXJlIiwicmVzX2FwaV9lcnJvciIsIkhvbWUiLCJPYmplY3QiLCJ2YWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9