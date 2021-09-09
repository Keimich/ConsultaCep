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
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const data = req.body[2];
  console.log(data);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbnN1bHRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBR0EsaUVBQWUsT0FBT0UsR0FBUCxFQUE0QkMsR0FBNUIsS0FBbUQ7QUFDOUQsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7QUFDckIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxDQUFQO0FBQ0g7O0FBQ0QsUUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNLLElBQUosQ0FBUyxDQUFULENBQWI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDSCxDQU5EOzs7Ozs7Ozs7O0FDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9wYWdlcy9hcGkvY29uc3VsdGEudHN4Iiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk9PntcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJyl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KVxyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5WzJdXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=