"use strict";
(() => {
var exports = {};
exports.id = "pages/api/consulta";
exports.ids = ["pages/api/consulta"];
exports.modules = {

/***/ "./pages/api/consulta.tsx":
/*!********************************!*\
  !*** ./pages/api/consulta.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ "./prisma/client.ts");


const consulta = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405);
  } else {
    const dataReq = JSON.parse(req.body);
    const dataSave = {
      cep: dataReq.cep,
      res_api: JSON.stringify(dataReq)
    };
    const saveCep = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__.default.queries.create({
      data: dataSave
    });
    res.json(saveCep);
  }

  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consulta);

/***/ }),

/***/ "./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (true) global.prisma = prisma;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/consulta.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbnN1bHRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVJLE1BQU1DLFFBQVEsR0FBRyxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFtRDtBQUNwRSxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUF5QjtBQUNyQixXQUFPRCxHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLENBQVA7QUFDSCxHQUZELE1BRU87QUFDSCxVQUFNQyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixHQUFHLENBQUNPLElBQWYsQ0FBaEI7QUFFQSxVQUFNQyxRQUFRLEdBQUc7QUFDYkMsTUFBQUEsR0FBRyxFQUFFTCxPQUFPLENBQUNLLEdBREE7QUFFYkMsTUFBQUEsT0FBTyxFQUFFTCxJQUFJLENBQUNNLFNBQUwsQ0FBZVAsT0FBZjtBQUZJLEtBQWpCO0FBS0EsVUFBTVEsT0FBTyxHQUFHLE1BQU1kLGtFQUFBLENBQXNCO0FBQ3hDaUIsTUFBQUEsSUFBSSxFQUFDUDtBQURtQyxLQUF0QixDQUF0QjtBQUlBUCxJQUFBQSxHQUFHLENBQUNlLElBQUosQ0FBU0osT0FBVDtBQUNIOztBQUFBO0FBQ0osQ0FqQkc7O0FBbUJKLGlFQUFlYixRQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBUUEsTUFBTUQsTUFBTSxHQUFHb0IsTUFBTSxDQUFDcEIsTUFBUCxJQUFpQixJQUFJbUIsd0RBQUosRUFBaEM7QUFFQSxJQUFJLE1BQXdDQyxNQUFNLENBQUNwQixNQUFQLEdBQWdCQSxNQUFoQjtBQUU1QyxpRUFBZUEsTUFBZjs7Ozs7Ozs7OztBQ1pBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwLy4vcGFnZXMvYXBpL2NvbnN1bHRhLnRzeCIsIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9wcmlzbWEvY2xpZW50LnRzIiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uL3ByaXNtYS9jbGllbnRcIjtcclxuXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk9PntcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJyl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZGF0YVJlcSA9IEpTT04ucGFyc2UocmVxLmJvZHkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhU2F2ZSA9IHtcclxuICAgICAgICAgICAgY2VwOiBkYXRhUmVxLmNlcCxcclxuICAgICAgICAgICAgcmVzX2FwaTogSlNPTi5zdHJpbmdpZnkoZGF0YVJlcSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVDZXAgPSBhd2FpdCBwcmlzbWEucXVlcmllcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOmRhdGFTYXZlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmVzLmpzb24oc2F2ZUNlcCk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uc3VsdGEiLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcclxuXHJcbmludGVyZmFjZSBDdXN0b21Ob2RlSnNHbG9iYWwge1xyXG4gIHByaXNtYTogUHJpc21hQ2xpZW50XHJcbn1cclxuXHJcbmRlY2xhcmUgY29uc3QgZ2xvYmFsOiBDdXN0b21Ob2RlSnNHbG9iYWxcclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOyJdLCJuYW1lcyI6WyJwcmlzbWEiLCJjb25zdWx0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImRhdGFSZXEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiZGF0YVNhdmUiLCJjZXAiLCJyZXNfYXBpIiwic3RyaW5naWZ5Iiwic2F2ZUNlcCIsInF1ZXJpZXMiLCJjcmVhdGUiLCJkYXRhIiwianNvbiIsIlByaXNtYUNsaWVudCIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=