"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Keimich\\www\\ConsultaCep\\components\\Input.tsx",
    _this = undefined;





var saveCep = /*#__PURE__*/function () {
  var _ref = (0,C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(data) {
    return C_Users_Keimich_www_ConsultaCep_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/consulta', {
              method: 'POST',
              body: data
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveCep(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCep = function getCep() {
  var infoFields = {
    error: document.getElementById('error'),
    infosField: document.querySelector('div#result'),
    logradouro: document.getElementById('logradouro'),
    bairro: document.getElementById('bairro'),
    localidade: document.getElementById('localidade'),
    cep: document.getElementById('cep_result'),
    uf: document.getElementById('uf')
  };
  var cep = document.getElementById('cep').value;

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
    fetch("https://viacep.com.br/ws/".concat(cep.replace('-', ''), "/json/")).then(function (response) {
      return response.text();
    }).then(function (result) {
      var resultJSON = JSON.parse(result);
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
    })["catch"](function (error) {
      return console.log('error', error);
    });
  }
};

var Input = function Input() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
    id: "input",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      id: "input_cep",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: "material-icons",
        children: "room"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), {
        mask: "99999-999",
        placeholder: "Ex:12345-678",
        id: "cep"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: getCep,
      children: "Consultar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};
_c = Input;

var _c;

$RefreshReg$(_c, "Input");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTAyN2I4NGQ5MDZhMGZlZTdmNGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBTUMsT0FBTztBQUFBLG1UQUFHLGlCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNOQyxLQUFLLENBQUMsZUFBRCxFQUFpQjtBQUN4QkMsY0FBQUEsTUFBTSxFQUFFLE1BRGdCO0FBRXhCQyxjQUFBQSxJQUFJLEVBQUVIO0FBRmtCLGFBQWpCLENBREM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEQsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQU9BLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLElBQUFBLEtBQUssRUFBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBRE87QUFFZkMsSUFBQUEsVUFBVSxFQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FGRTtBQUdmQyxJQUFBQSxVQUFVLEVBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUhFO0FBSWZJLElBQUFBLE1BQU0sRUFBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBSk07QUFLZkssSUFBQUEsVUFBVSxFQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FMRTtBQU1mTSxJQUFBQSxHQUFHLEVBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQU5TO0FBT2ZPLElBQUFBLEVBQUUsRUFBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCO0FBUFUsR0FBbkI7QUFTRCxNQUFJTSxHQUFHLEdBQUlQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFELENBQXFEUSxLQUEv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O0FBQ3JCLHNCQUNBO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDQTtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQUEsOEJBQ0k7QUFBTSxpQkFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMseURBQUQ7QUFBVyxZQUFJLEVBQUMsV0FBaEI7QUFBNEIsbUJBQVcsRUFBQyxjQUF4QztBQUF1RCxVQUFFLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBS0E7QUFBUSxhQUFPLEVBQUU5QixNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBU0gsQ0FWTTtLQUFNOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0TWFzayBmcm9tIFwicmVhY3QtaW5wdXQtbWFza1wiO1xyXG5cclxuXHJcbmNvbnN0IHNhdmVDZXAgPSBhc3luYyhkYXRhOiBhbnkpPT57XHJcbiAgICBhd2FpdCBmZXRjaCgnL2FwaS9jb25zdWx0YScse1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IGdldENlcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluZm9GaWVsZHMgPSB7XHJcbiAgICAgICAgZXJyb3I6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3InKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgaW5mb3NGaWVsZDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNyZXN1bHQnKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgbG9ncmFkb3VybzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dyYWRvdXJvJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGJhaXJybzogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWlycm8nKSBhcyBIVE1MRWxlbWVudCksXHJcbiAgICAgICAgbG9jYWxpZGFkZTogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhbGlkYWRlJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGNlcDogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZXBfcmVzdWx0JykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIHVmOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VmJykgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICB9XHJcbiAgIGxldCBjZXAgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlcCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcblxyXG4gICBpZihjZXAgPT09ICcnKXtcclxuXHJcbiAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5pbm5lclRleHQgPSAnRmF2b3IgZGlnaXRlIHVtIENFUCc7XHJcbiAgIH0gaWYoY2VwLnJlcGxhY2UoJy0nLCcnKS5yZXBsYWNlQWxsKCdfJywnJykubGVuZ3RoIDwgOCkge1xyXG5cclxuICAgIGluZm9GaWVsZHMuaW5mb3NGaWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpbmZvRmllbGRzLmVycm9yLmlubmVyVGV4dCA9ICdJbmZvcm1lIHVtIENFUCBjb20gcGVsbyBtZW5vcyA4IG51bWVyb3MnO1xyXG4gICB9IGVsc2Uge1xyXG5cclxuICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGZldGNoKGBodHRwczovL3ZpYWNlcC5jb20uYnIvd3MvJHtjZXAucmVwbGFjZSgnLScsJycpfS9qc29uL2ApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgICAudGhlbihyZXN1bHQgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHRKU09OID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmVDZXAoSlNPTi5zdHJpbmdpZnkocmVzdWx0SlNPTikpO1xyXG5cclxuICAgICAgICBpZihyZXN1bHRKU09OLmVycm8gPSB0cnVlICYmICFyZXN1bHRKU09OLmxvZ3JhZG91cm8pIHtcclxuXHJcbiAgICAgICAgaW5mb0ZpZWxkcy5pbmZvc0ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5lcnJvci5pbm5lclRleHQgPSAnQ0VQIG5hbyBlbmNvbnRyYWRvIDooJztcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xyXG4gICAgICAgIGluZm9GaWVsZHMubG9ncmFkb3Vyby5pbm5lclRleHQgPSByZXN1bHRKU09OLmxvZ3JhZG91cm87XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5iYWlycm8uaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi5iYWlycm87XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5sb2NhbGlkYWRlLmlubmVyVGV4dCA9IHJlc3VsdEpTT04ubG9jYWxpZGFkZTtcclxuICAgICAgICBpbmZvRmllbGRzLmNlcC5pbm5lclRleHQgPSByZXN1bHRKU09OLmNlcDtcclxuICAgICAgICBpbmZvRmllbGRzLnVmLmlubmVyVGV4dCA9IHJlc3VsdEpTT04udWZ9O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpOyAgIFxyXG59fVxyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0ID0gKCk9PntcclxuICAgIHJldHVybiggXHJcbiAgICA8c2VjdGlvbiBpZD1cImlucHV0XCI+XHJcbiAgICA8ZGl2IGlkPVwiaW5wdXRfY2VwXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5yb29tPC9zcGFuPlxyXG4gICAgICAgIDxJbnB1dE1hc2sgbWFzaz1cIjk5OTk5LTk5OVwiIHBsYWNlaG9sZGVyPVwiRXg6MTIzNDUtNjc4XCIgaWQ9XCJjZXBcIi8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gb25DbGljaz17Z2V0Q2VwfT5Db25zdWx0YXI8L2J1dHRvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiSW5wdXRNYXNrIiwic2F2ZUNlcCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJnZXRDZXAiLCJpbmZvRmllbGRzIiwiZXJyb3IiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5mb3NGaWVsZCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dyYWRvdXJvIiwiYmFpcnJvIiwibG9jYWxpZGFkZSIsImNlcCIsInVmIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJpbm5lclRleHQiLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsImxlbmd0aCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJyZXN1bHQiLCJyZXN1bHRKU09OIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiZXJybyIsImNvbnNvbGUiLCJsb2ciLCJJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=