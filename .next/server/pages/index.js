"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/NavBar.tsx


const NavBar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "nav",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "logo",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        children: ["Consulta", /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "CEP"
        })]
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Infos.tsx


const Infos = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "infos",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      children: ["Consulte qualquer ", /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "CEP"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        id: "amount",
        children: props.amount
      }), " consultas j\xE1 realizadas!"]
    })]
  });
};
;// CONCATENATED MODULE: external "react-input-mask"
const external_react_input_mask_namespaceObject = require("react-input-mask");
var external_react_input_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_input_mask_namespaceObject);
;// CONCATENATED MODULE: ./components/Input.tsx




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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "input",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "input_cep",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "material-icons",
        children: "room"
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_input_mask_default()), {
        mask: "99999-999",
        placeholder: "Ex:12345-678",
        id: "cep"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: getCep,
      children: "Consultar"
    })]
  });
};
;// CONCATENATED MODULE: ./components/Result.tsx


const Result = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    id: "result",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      id: "error",
      children: "CEP nao encontrado :("
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "result",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Informacoes"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Logradouro: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "logradouro"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Localidade: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "localidade"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Bairro: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "bairro"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["CEP: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "cep_result"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["UF: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          id: "uf"
        })]
      })]
    })]
  });
};
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(212);
;// CONCATENATED MODULE: ./pages/index.tsx


(external_react_default()).useLayoutEffect = (external_react_default()).useEffect;








const getServerSideProps = async context => {
  const prisma = new client_.PrismaClient();
  const result = await prisma.queries.count();
  return {
    props: {
      result
    }
  };
};

const Home = result => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Consulta CEP"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@100&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(NavBar, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Infos, {
          amount: Object.values(result)[0]
        }), /*#__PURE__*/jsx_runtime_.jsx(Input, {}), /*#__PURE__*/jsx_runtime_.jsx(Result, {})]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {})]
  });
};

/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(118));
module.exports = __webpack_exports__;

})();