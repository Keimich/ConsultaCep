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
        id: "cep",
        type: "number"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjVjMTY1NDkzZjZiZDdlNGE1NDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0EsSUFBTUMsT0FBTztBQUFBLG1UQUFHLGlCQUFNQyxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNOQyxLQUFLLENBQUMsZUFBRCxFQUFpQjtBQUN4QkMsY0FBQUEsTUFBTSxFQUFFLE1BRGdCO0FBRXhCQyxjQUFBQSxJQUFJLEVBQUVIO0FBRmtCLGFBQWpCLENBREM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUEQsT0FBTztBQUFBO0FBQUE7QUFBQSxHQUFiOztBQU9BLElBQU1LLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLElBQUFBLEtBQUssRUFBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBRE87QUFFZkMsSUFBQUEsVUFBVSxFQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsWUFBdkIsQ0FGRTtBQUdmQyxJQUFBQSxVQUFVLEVBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUhFO0FBSWZJLElBQUFBLE1BQU0sRUFBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBSk07QUFLZkssSUFBQUEsVUFBVSxFQUFHTixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FMRTtBQU1mTSxJQUFBQSxHQUFHLEVBQUdQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQU5TO0FBT2ZPLElBQUFBLEVBQUUsRUFBR1IsUUFBUSxDQUFDQyxjQUFULENBQXdCLElBQXhCO0FBUFUsR0FBbkI7QUFTRCxNQUFJTSxHQUFHLEdBQUlQLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFELENBQXFEUSxLQUEv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O0FBQ3JCLHNCQUNBO0FBQVMsTUFBRSxFQUFDLE9BQVo7QUFBQSw0QkFDQTtBQUFLLFFBQUUsRUFBQyxXQUFSO0FBQUEsOEJBQ0k7QUFBTSxpQkFBUyxFQUFDLGdCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksOERBQUMseURBQUQ7QUFBVyxZQUFJLEVBQUMsV0FBaEI7QUFBNEIsbUJBQVcsRUFBQyxjQUF4QztBQUF1RCxVQUFFLEVBQUMsS0FBMUQ7QUFBZ0UsWUFBSSxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEQSxlQUtBO0FBQVEsYUFBTyxFQUFFOUIsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQVNILENBVk07S0FBTThCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dE1hc2sgZnJvbSBcInJlYWN0LWlucHV0LW1hc2tcIjtcclxuXHJcblxyXG5jb25zdCBzYXZlQ2VwID0gYXN5bmMoZGF0YTogYW55KT0+e1xyXG4gICAgYXdhaXQgZmV0Y2goJy9hcGkvY29uc3VsdGEnLHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBkYXRhXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBnZXRDZXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbmZvRmllbGRzID0ge1xyXG4gICAgICAgIGVycm9yOiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGluZm9zRmllbGQ6IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcmVzdWx0JykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGxvZ3JhZG91cm86IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9ncmFkb3VybycpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBiYWlycm86IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFpcnJvJykgYXMgSFRNTEVsZW1lbnQpLFxyXG4gICAgICAgIGxvY2FsaWRhZGU6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYWxpZGFkZScpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICBjZXA6IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2VwX3Jlc3VsdCcpIGFzIEhUTUxFbGVtZW50KSxcclxuICAgICAgICB1ZjogKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1ZicpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgfVxyXG4gICBsZXQgY2VwID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjZXAnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG5cclxuICAgaWYoY2VwID09PSAnJyl7XHJcblxyXG4gICAgaW5mb0ZpZWxkcy5pbmZvc0ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGluZm9GaWVsZHMuZXJyb3IuaW5uZXJUZXh0ID0gJ0Zhdm9yIGRpZ2l0ZSB1bSBDRVAnO1xyXG4gICB9IGlmKGNlcC5yZXBsYWNlKCctJywnJykucmVwbGFjZUFsbCgnXycsJycpLmxlbmd0aCA8IDgpIHtcclxuXHJcbiAgICBpbmZvRmllbGRzLmluZm9zRmllbGQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW5mb0ZpZWxkcy5lcnJvci5pbm5lclRleHQgPSAnSW5mb3JtZSB1bSBDRVAgY29tIHBlbG8gbWVub3MgOCBudW1lcm9zJztcclxuICAgfSBlbHNlIHtcclxuXHJcbiAgICBpbmZvRmllbGRzLmVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBmZXRjaChgaHR0cHM6Ly92aWFjZXAuY29tLmJyL3dzLyR7Y2VwLnJlcGxhY2UoJy0nLCcnKX0vanNvbi9gKVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxyXG4gICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0SlNPTiA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICBcclxuICAgICAgICBzYXZlQ2VwKEpTT04uc3RyaW5naWZ5KHJlc3VsdEpTT04pKTtcclxuXHJcbiAgICAgICAgaWYocmVzdWx0SlNPTi5lcnJvID0gdHJ1ZSAmJiAhcmVzdWx0SlNPTi5sb2dyYWRvdXJvKSB7XHJcblxyXG4gICAgICAgIGluZm9GaWVsZHMuaW5mb3NGaWVsZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGluZm9GaWVsZHMuZXJyb3IuaW5uZXJUZXh0ID0gJ0NFUCBuYW8gZW5jb250cmFkbyA6KCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaW5mb0ZpZWxkcy5lcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5pbmZvc0ZpZWxkLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcclxuICAgICAgICBpbmZvRmllbGRzLmxvZ3JhZG91cm8uaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi5sb2dyYWRvdXJvO1xyXG4gICAgICAgIGluZm9GaWVsZHMuYmFpcnJvLmlubmVyVGV4dCA9IHJlc3VsdEpTT04uYmFpcnJvO1xyXG4gICAgICAgIGluZm9GaWVsZHMubG9jYWxpZGFkZS5pbm5lclRleHQgPSByZXN1bHRKU09OLmxvY2FsaWRhZGU7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy5jZXAuaW5uZXJUZXh0ID0gcmVzdWx0SlNPTi5jZXA7XHJcbiAgICAgICAgaW5mb0ZpZWxkcy51Zi5pbm5lclRleHQgPSByZXN1bHRKU09OLnVmfTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTsgICBcclxufX1cclxuXHJcbmV4cG9ydCBjb25zdCBJbnB1dCA9ICgpPT57XHJcbiAgICByZXR1cm4oIFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJpbnB1dFwiPlxyXG4gICAgPGRpdiBpZD1cImlucHV0X2NlcFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cm9vbTwvc3Bhbj5cclxuICAgICAgICA8SW5wdXRNYXNrIG1hc2s9XCI5OTk5OS05OTlcIiBwbGFjZWhvbGRlcj1cIkV4OjEyMzQ1LTY3OFwiIGlkPVwiY2VwXCIgdHlwZT1cIm51bWJlclwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRDZXB9PkNvbnN1bHRhcjwvYnV0dG9uPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJJbnB1dE1hc2siLCJzYXZlQ2VwIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsImdldENlcCIsImluZm9GaWVsZHMiLCJlcnJvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmZvc0ZpZWxkIiwicXVlcnlTZWxlY3RvciIsImxvZ3JhZG91cm8iLCJiYWlycm8iLCJsb2NhbGlkYWRlIiwiY2VwIiwidWYiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsImlubmVyVGV4dCIsInJlcGxhY2UiLCJyZXBsYWNlQWxsIiwibGVuZ3RoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInJlc3VsdCIsInJlc3VsdEpTT04iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnJvIiwiY29uc29sZSIsImxvZyIsIklucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==