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
//import { PrismaClient } from "@prisma/client";
const fs = __webpack_require__(/*! fs */ "fs"); //const prisma = new PrismaClient();


const consulta = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405);
  } else {
    const dataReq = JSON.parse(req.body);
    const dataSave = {
      cep: dataReq.cep,
      res_api: JSON.stringify(dataReq)
    };
    /*const saveCep = await prisma.queries.create({
        data:dataSave
    })*/

    const dataDb = __webpack_require__(/*! ../../prisma/dev_db.json */ "./prisma/dev_db.json");

    const datoToPushOnJSON = {
      "id": dataDb.queries.length + 1,
      "cep": dataReq.cep,
      "res_api": dataReq
    }; //const saveCep = dataDb.queries.push(datoToPushOnJSON)

    fs.readFile('prisma/dev_db.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        const obj = JSON.parse(data); //now it an object

        obj.queries.push(datoToPushOnJSON); //add some data

        const json = JSON.stringify(obj); //convert it back to json

        fs.writeFile('prisma/dev_db.json', json, 'utf8'); // write it back 
      }
    });
    res.json({
      msg: 'done'
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (consulta);

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./prisma/dev_db.json":
/*!****************************!*\
  !*** ./prisma/dev_db.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('{"queries":[{"id":1,"cep":"05010000","res_api":"{\\"cep\\":\\"05010-000\\",\\"logradouro\\":\\"Rua Caiubi\\",\\"complemento\\":\\"\\",\\"bairro\\":\\"Perdizes\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":2,"cep":"05013-001","res_api":"{\\"cep\\":\\"05013-001\\",\\"logradouro\\":\\"Rua Cardoso de Almeida\\",\\"complemento\\":\\"de 751/752 a 1689/1690\\",\\"bairro\\":\\"Perdizes\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":3,"cep":"05010-000","res_api":"{\\"cep\\":\\"05010-000\\",\\"logradouro\\":\\"Rua Caiubi\\",\\"complemento\\":\\"\\",\\"bairro\\":\\"Perdizes\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":4,"cep":"01150-001","res_api":"{\\"cep\\":\\"01150-001\\",\\"logradouro\\":\\"Avenida General Olímpio da Silveira\\",\\"complemento\\":\\"lado ímpar\\",\\"bairro\\":\\"Santa Cecília\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":5,"cep":"01156-050","res_api":"{\\"cep\\":\\"01156-050\\",\\"logradouro\\":\\"Avenida Doutor Adolpho Pinto\\",\\"complemento\\":\\"\\",\\"bairro\\":\\"Barra Funda\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":6,"cep":"05013-000","res_api":"{\\"cep\\":\\"05013-000\\",\\"logradouro\\":\\"Rua Cardoso de Almeida\\",\\"complemento\\":\\"até 749/750\\",\\"bairro\\":\\"Perdizes\\",\\"localidade\\":\\"São Paulo\\",\\"uf\\":\\"SP\\",\\"ibge\\":\\"3550308\\",\\"gia\\":\\"1004\\",\\"ddd\\":\\"11\\",\\"siafi\\":\\"7107\\"}"},{"id":7,"cep":"40020-025","res_api":"{\\"cep\\":\\"40020-025\\",\\"logradouro\\":\\"Avenida Sá Ferreira\\",\\"complemento\\":\\"\\",\\"bairro\\":\\"Centro\\",\\"localidade\\":\\"Salvador\\",\\"uf\\":\\"BA\\",\\"ibge\\":\\"2927408\\",\\"gia\\":\\"\\",\\"ddd\\":\\"71\\",\\"siafi\\":\\"3849\\"}"},{"id":8,"cep":"40020-315","res_api":"{\\"cep\\":\\"40020-315\\",\\"logradouro\\":\\"Avenida São Francisco\\",\\"complemento\\":\\"\\",\\"bairro\\":\\"Centro\\",\\"localidade\\":\\"Salvador\\",\\"uf\\":\\"BA\\",\\"ibge\\":\\"2927408\\",\\"gia\\":\\"\\",\\"ddd\\":\\"71\\",\\"siafi\\":\\"3849\\"}"},{"id":9,"cep":"05010-000","res_api":{"cep":"05010-000","logradouro":"Rua Caiubi","complemento":"","bairro":"Perdizes","localidade":"São Paulo","uf":"SP","ibge":"3550308","gia":"1004","ddd":"11","siafi":"7107"}},{"id":10,"cep":"05014-001","res_api":{"cep":"05014-001","logradouro":"Rua Monte Alegre","complemento":"de 901/902 a 1299/1300","bairro":"Perdizes","localidade":"São Paulo","uf":"SP","ibge":"3550308","gia":"1004","ddd":"11","siafi":"7107"}},{"id":11,"cep":"38706-400","res_api":{"cep":"38706-400","logradouro":"Avenida Presidente Tancredo Neves","complemento":"até 729/730","bairro":"Cidade Nova","localidade":"Patos de Minas","uf":"MG","ibge":"3148004","gia":"","ddd":"34","siafi":"4959"}}]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2NvbnN1bHRhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFsQixFQUVBOzs7QUFHSSxNQUFNQyxRQUFRLEdBQUcsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBbUQ7QUFDcEUsTUFBR0QsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbEIsRUFBeUI7QUFDckIsV0FBT0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxDQUFQO0FBQ0gsR0FGRCxNQUVLO0FBQ0QsVUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV04sR0FBRyxDQUFDTyxJQUFmLENBQWhCO0FBRUEsVUFBTUMsUUFBUSxHQUFHO0FBQ2JDLE1BQUFBLEdBQUcsRUFBRUwsT0FBTyxDQUFDSyxHQURBO0FBRWJDLE1BQUFBLE9BQU8sRUFBRUwsSUFBSSxDQUFDTSxTQUFMLENBQWVQLE9BQWY7QUFGSSxLQUFqQjtBQUtBO0FBQ1I7QUFDQTs7QUFFUSxVQUFNUSxNQUFNLEdBQUdkLG1CQUFPLENBQUMsc0RBQUQsQ0FBdEI7O0FBQ0EsVUFBTWUsZ0JBQWdCLEdBQUc7QUFDckIsWUFBT0QsTUFBTSxDQUFDRSxPQUFQLENBQWVDLE1BQWYsR0FBd0IsQ0FEVjtBQUVyQixhQUFRWCxPQUFPLENBQUNLLEdBRks7QUFHckIsaUJBQVlMO0FBSFMsS0FBekIsQ0FiQyxDQWtCRDs7QUFDQVAsSUFBQUEsRUFBRSxDQUFDbUIsUUFBSCxDQUFZLG9CQUFaLEVBQWtDLE1BQWxDLEVBQTBDLFNBQVNDLGdCQUFULENBQTBCQyxHQUExQixFQUFtQ0MsSUFBbkMsRUFBNEM7QUFDbEYsVUFBSUQsR0FBSixFQUFRO0FBQ0pFLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0gsT0FGRCxNQUVPO0FBQ1AsY0FBTUksR0FBRyxHQUFHakIsSUFBSSxDQUFDQyxLQUFMLENBQVdhLElBQVgsQ0FBWixDQURPLENBQ3VCOztBQUM5QkcsUUFBQUEsR0FBRyxDQUFDUixPQUFKLENBQVlTLElBQVosQ0FBaUJWLGdCQUFqQixFQUZPLENBRTZCOztBQUNwQyxjQUFNVyxJQUFJLEdBQUduQixJQUFJLENBQUNNLFNBQUwsQ0FBZVcsR0FBZixDQUFiLENBSE8sQ0FHMkI7O0FBQ2xDekIsUUFBQUEsRUFBRSxDQUFDNEIsU0FBSCxDQUFhLG9CQUFiLEVBQW1DRCxJQUFuQyxFQUF5QyxNQUF6QyxFQUpPLENBSTJDO0FBQ3JEO0FBQUMsS0FSRjtBQVNBdkIsSUFBQUEsR0FBRyxDQUFDdUIsSUFBSixDQUFTO0FBQUNFLE1BQUFBLEdBQUcsRUFBQztBQUFMLEtBQVQ7QUFDSDtBQUNKLENBakNHOztBQW1DSixpRUFBZTNCLFFBQWY7Ozs7Ozs7Ozs7QUMxQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25zdWx0YS1jZXAvLi9wYWdlcy9hcGkvY29uc3VsdGEudHN4Iiwid2VicGFjazovL2NvbnN1bHRhLWNlcC9leHRlcm5hbCBcImZzXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbi8vaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuXHJcbi8vY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IGFzeW5jIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk9PntcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJyl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgZGF0YVJlcSA9IEpTT04ucGFyc2UocmVxLmJvZHkpXHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFTYXZlID0ge1xyXG4gICAgICAgICAgICBjZXA6IGRhdGFSZXEuY2VwLFxyXG4gICAgICAgICAgICByZXNfYXBpOiBKU09OLnN0cmluZ2lmeShkYXRhUmVxKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvKmNvbnN0IHNhdmVDZXAgPSBhd2FpdCBwcmlzbWEucXVlcmllcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOmRhdGFTYXZlXHJcbiAgICAgICAgfSkqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGFEYiA9IHJlcXVpcmUoJy4uLy4uL3ByaXNtYS9kZXZfZGIuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdG9Ub1B1c2hPbkpTT04gPSB7XHJcbiAgICAgICAgICAgIFwiaWRcIiA6IGRhdGFEYi5xdWVyaWVzLmxlbmd0aCArIDEsXHJcbiAgICAgICAgICAgIFwiY2VwXCIgOiBkYXRhUmVxLmNlcCxcclxuICAgICAgICAgICAgXCJyZXNfYXBpXCIgOiBkYXRhUmVxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc3Qgc2F2ZUNlcCA9IGRhdGFEYi5xdWVyaWVzLnB1c2goZGF0b1RvUHVzaE9uSlNPTilcclxuICAgICAgICBmcy5yZWFkRmlsZSgncHJpc21hL2Rldl9kYi5qc29uJywgJ3V0ZjgnLCBmdW5jdGlvbiByZWFkRmlsZUNhbGxiYWNrKGVycjphbnksIGRhdGE6YW55KXtcclxuICAgICAgICAgICAgaWYgKGVycil7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGRhdGEpOyAvL25vdyBpdCBhbiBvYmplY3RcclxuICAgICAgICAgICAgb2JqLnF1ZXJpZXMucHVzaChkYXRvVG9QdXNoT25KU09OKTsgLy9hZGQgc29tZSBkYXRhXHJcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShvYmopOyAvL2NvbnZlcnQgaXQgYmFjayB0byBqc29uXHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZSgncHJpc21hL2Rldl9kYi5qc29uJywganNvbiwgJ3V0ZjgnKTsgLy8gd3JpdGUgaXQgYmFjayBcclxuICAgICAgICB9fSk7XHJcbiAgICAgICAgcmVzLmpzb24oe21zZzonZG9uZSd9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25zdWx0YSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJjb25zdWx0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImRhdGFSZXEiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiZGF0YVNhdmUiLCJjZXAiLCJyZXNfYXBpIiwic3RyaW5naWZ5IiwiZGF0YURiIiwiZGF0b1RvUHVzaE9uSlNPTiIsInF1ZXJpZXMiLCJsZW5ndGgiLCJyZWFkRmlsZSIsInJlYWRGaWxlQ2FsbGJhY2siLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm9iaiIsInB1c2giLCJqc29uIiwid3JpdGVGaWxlIiwibXNnIl0sInNvdXJjZVJvb3QiOiIifQ==