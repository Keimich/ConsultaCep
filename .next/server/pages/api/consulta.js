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
  } else {
    const dataReq = JSON.parse(req.body);
    const dataSave = {
      cep: dataReq.cep,
      res_api: JSON.stringify(dataReq)
    };
    const saveCep = await prisma.queries.create({
      data: dataSave
    });
    res.json(saveCep);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbnN1bHRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmO0FBR0EsaUVBQWUsT0FBT0UsR0FBUCxFQUE0QkMsR0FBNUIsS0FBbUQ7QUFDOUQsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7QUFDckIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxDQUFQO0FBQ0gsR0FGRCxNQUVLO0FBQ0QsVUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sR0FBRyxDQUFDTyxJQUFmLENBQWhCO0FBRUEsVUFBTUMsUUFBUSxHQUFHO0FBQ2JDLE1BQUFBLEdBQUcsRUFBRUwsT0FBTyxDQUFDSyxHQURBO0FBRWJDLE1BQUFBLE9BQU8sRUFBRUwsSUFBSSxDQUFDTSxTQUFMLENBQWVQLE9BQWY7QUFGSSxLQUFqQjtBQUtBLFVBQU1RLE9BQU8sR0FBRyxNQUFNYixNQUFNLENBQUNjLE9BQVAsQ0FBZUMsTUFBZixDQUFzQjtBQUN4Q0MsTUFBQUEsSUFBSSxFQUFDUDtBQURtQyxLQUF0QixDQUF0QjtBQUdBUCxJQUFBQSxHQUFHLENBQUNlLElBQUosQ0FBU0osT0FBVDtBQUNIO0FBQ0osQ0FoQkQ7Ozs7Ozs7Ozs7QUNOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnN1bHRhLWNlcC8uL3BhZ2VzL2FwaS9jb25zdWx0YS50c3giLCJ3ZWJwYWNrOi8vY29uc3VsdGEtY2VwL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcblxyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKT0+e1xyXG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBkYXRhUmVxID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YVNhdmUgPSB7XHJcbiAgICAgICAgICAgIGNlcDogZGF0YVJlcS5jZXAsXHJcbiAgICAgICAgICAgIHJlc19hcGk6IEpTT04uc3RyaW5naWZ5KGRhdGFSZXEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVDZXAgPSBhd2FpdCBwcmlzbWEucXVlcmllcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOmRhdGFTYXZlXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXMuanNvbihzYXZlQ2VwKVxyXG4gICAgfVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7Il0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImRhdGFSZXEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiZGF0YVNhdmUiLCJjZXAiLCJyZXNfYXBpIiwic3RyaW5naWZ5Iiwic2F2ZUNlcCIsInF1ZXJpZXMiLCJjcmVhdGUiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=