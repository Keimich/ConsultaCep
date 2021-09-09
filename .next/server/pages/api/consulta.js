"use strict";
(() => {
var exports = {};
exports.id = 792;
exports.ids = [792];
exports.modules = {

/***/ 859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();

const consulta = async (req, res) => {
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consulta);

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(859));
module.exports = __webpack_exports__;

})();