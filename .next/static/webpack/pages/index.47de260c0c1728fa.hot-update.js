"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Password\"), pass = ref[0], updatePass = ref[1];\n    // array of pass values\n    var alp_cap = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\",\n        \"K\",\n        \"L\",\n        \"M\",\n        \"N\",\n        \"O\",\n        \"P\",\n        \"Q\",\n        \"R\",\n        \"S\",\n        \"T\",\n        \"U\",\n        \"V\",\n        \"W\",\n        \"X\",\n        \"Y\",\n        \"Z\"\n    ];\n    var symbols = [\n        \"!\",\n        \"@\",\n        \"#\",\n        \"$\",\n        \"%\",\n        \"^\",\n        \"&\",\n        \"*\",\n        \"(\",\n        \")\"\n    ];\n    var generatePassword = function() {\n        var password = \"\";\n        var len = 10;\n        var alp_cap_el = document.getElementById(\"alp_cap\");\n        var alp_sm_el = document.getElementById(\"alp_sm\");\n        var numbers_el = document.getElementById(\"numbers\");\n        var symbols_el = document.getElementById(\"symbols\");\n        var checked = [];\n        if (alp_cap_el.checked) {\n            checked.push(0);\n        }\n        if (alp_sm_el.checked) {\n            checked.push(0);\n        }\n        if (numbers_el.checked) {\n            checked.push(0);\n        }\n        if (symbols_el.checked) {\n            checked.push(0);\n        }\n        for(var i = 0; i < len; i++){\n            var base_sel = Math.floor(Math.random() * checked.length);\n            if (base_sel === 0) {\n                // alp_cap\n                var alp_cap_rand_sel = alp_cap[Math.floor(Math.random(0) * alp_cap.length)];\n                password += alp_cap_rand_sel;\n            } else if (base_sel === 1) {\n                // alp_sm\n                var alp_sm_rand_sel = alp_cap[Math.floor(Math.random(0) * alp_cap.length)];\n                password += String(alp_sm_rand_sel).toLowerCase();\n            } else if (base_sel === 2) {\n                // num\n                var num_rand_sel = Math.floor(Math.random(0) * 10).toString();\n                password += num_rand_sel;\n            } else if (base_sel === 3) {\n                // symbols\n                var symbol_rand_sel = symbols[Math.floor(Math.random(0) * symbols.length)];\n                password += symbol_rand_sel;\n            }\n        }\n        updatePass(password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen flex flex-col 2xl:flex-row text-white font-mono\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"2xl:w-1/2 2xl:h-full w-full h-1/4 bg-slate-800 flex flex-row items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 p-2 h-10 flex flex-row items-center bg-gray-600 rounded-sm\",\n                        children: pass\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-5 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700\",\n                        children: \"Copy\"\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"2xl:w-1/2 2xl:h-full w-full h-3/4 bg-slate-700 flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-72 justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"A to Z\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"alp_cap\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-72 justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"a to z\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"alp_sm\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-72 justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"0 to 9\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"numbers\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-72 justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-60 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"Symbols\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"symbols\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row w-72 justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"Length\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"range\",\n                                min: \"1\",\n                                max: \"20\",\n                                defaultValue: \"10\",\n                                className: \"mx-10 w-10\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: generatePassword,\n                        className: \"my-6 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700\",\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LQ8+8refGoHsot3nOK6bBAi9OP4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFbEMsZ0JBQWdCO3dCQUFFeUIsU0FBUyxFQUFDLHNGQUFzRjtrQ0FBQyxVQUFROzs7Ozs0QkFBUzs7Ozs7O29CQUNqSjs7Ozs7O1lBQ0YsQ0FDUDtDQUNGO0dBbEZROUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBb0ZiLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gSG9tZSgpe1xuICBjb25zdCBbcGFzcyx1cGRhdGVQYXNzXSA9IHVzZVN0YXRlKCdQYXNzd29yZCcpXG5cbiAgLy8gYXJyYXkgb2YgcGFzcyB2YWx1ZXNcbiAgY29uc3QgYWxwX2NhcCA9IFsnQScsJ0InLCdDJywnRCcsJ0UnLCdGJywnRycsJ0gnLCdJJywnSicsJ0snLCdMJywnTScsJ04nLCdPJywnUCcsJ1EnLCdSJywnUycsJ1QnLCdVJywnVicsJ1cnLCdYJywnWScsJ1onXVxuICBjb25zdCBzeW1ib2xzID0gWychJywnQCcsJyMnLCckJywnJScsJ14nLCcmJywnKicsJygnLCcpJ11cblxuICBjb25zdCBnZW5lcmF0ZVBhc3N3b3JkID0gKCkgPT4ge1xuICAgIHZhciBwYXNzd29yZCA9ICcnXG4gICAgY29uc3QgbGVuID0gMTBcbiAgXG4gICAgY29uc3QgYWxwX2NhcF9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbHBfY2FwJylcbiAgICBjb25zdCBhbHBfc21fZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxwX3NtJylcbiAgICBjb25zdCBudW1iZXJzX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bWJlcnMnKVxuICAgIGNvbnN0IHN5bWJvbHNfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ltYm9scycpXG5cbiAgICBjb25zdCBjaGVja2VkID0gW11cblxuICAgIGlmIChhbHBfY2FwX2VsLmNoZWNrZWQpIHsgY2hlY2tlZC5wdXNoKDApIH1cbiAgICBpZiAoYWxwX3NtX2VsLmNoZWNrZWQpIHsgY2hlY2tlZC5wdXNoKDApIH1cbiAgICBpZiAobnVtYmVyc19lbC5jaGVja2VkKSB7IGNoZWNrZWQucHVzaCgwKSB9XG4gICAgaWYgKHN5bWJvbHNfZWwuY2hlY2tlZCkgeyBjaGVja2VkLnB1c2goMCkgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICBsZXQgYmFzZV9zZWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGVja2VkLmxlbmd0aClcblxuICAgICAgaWYgKGJhc2Vfc2VsID09PSAwKXtcbiAgICAgICAgLy8gYWxwX2NhcFxuICAgICAgICB2YXIgYWxwX2NhcF9yYW5kX3NlbCA9IGFscF9jYXBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgwKSAqIGFscF9jYXAubGVuZ3RoKV1cbiAgICAgICAgcGFzc3dvcmQgKz0gYWxwX2NhcF9yYW5kX3NlbFxuICAgICAgfVxuICAgICAgZWxzZSBpZihiYXNlX3NlbCA9PT0gMSl7XG4gICAgICAgIC8vIGFscF9zbVxuICAgICAgICB2YXIgYWxwX3NtX3JhbmRfc2VsID0gYWxwX2NhcFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKDApICogYWxwX2NhcC5sZW5ndGgpXVxuICAgICAgICBwYXNzd29yZCArPSBTdHJpbmcoYWxwX3NtX3JhbmRfc2VsKS50b0xvd2VyQ2FzZSgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmKGJhc2Vfc2VsID09PSAyKXtcbiAgICAgICAgLy8gbnVtXG4gICAgICAgIHZhciBudW1fcmFuZF9zZWwgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgwKSAqIDEwKSkudG9TdHJpbmcoKVxuICAgICAgICBwYXNzd29yZCArPSBudW1fcmFuZF9zZWxcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYmFzZV9zZWwgPT09IDMpe1xuICAgICAgICAvLyBzeW1ib2xzXG4gICAgICAgIHZhciBzeW1ib2xfcmFuZF9zZWwgPSBzeW1ib2xzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oMCkgKiBzeW1ib2xzLmxlbmd0aCldXG4gICAgICAgIHBhc3N3b3JkICs9IHN5bWJvbF9yYW5kX3NlbFxuICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVBhc3MocGFzc3dvcmQpXG4gIH1cblxuICByZXR1cm4oXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIDJ4bDpmbGV4LXJvdyB0ZXh0LXdoaXRlIGZvbnQtbW9ub1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dy0xLzIgMnhsOmgtZnVsbCB3LWZ1bGwgaC0xLzQgYmctc2xhdGUtODAwIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcC0yIGgtMTAgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgYmctZ3JheS02MDAgcm91bmRlZC1zbVwiPntwYXNzfTwvZGl2PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm14LTUgcC0yIHJvdW5kZWQgdGV4dC1zbSBiZy1ncmF5LTMwMCB0ZXh0LWJsYWNrIGhvdmVyOmJnLWdyYXktNDAwIGFjdGl2ZTpiZy1ncmF5LTcwMFwiPkNvcHk8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIyeGw6dy0xLzIgMnhsOmgtZnVsbCB3LWZ1bGwgaC0zLzQgYmctc2xhdGUtNzAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyB3LTcyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTN4bCBsZzp3LTQ4IG1kOnRleHQtMnhsIG1kOnctMzIgdGV4dC1sZyB3LTI0IG14LTVcIj5BIHRvIFo8L2gxPlxuICAgICAgICAgIDxpbnB1dCBpZD0nYWxwX2NhcCcgdHlwZT0nY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy03MiBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC0zeGwgbGc6dy00OCBtZDp0ZXh0LTJ4bCBtZDp3LTMyIHRleHQtbGcgdy0yNCBteC01XCI+YSB0byB6PC9oMT5cbiAgICAgICAgICA8aW5wdXQgaWQ9J2FscF9zbScgdHlwZT0nY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy03MiBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC0zeGwgbGc6dy00OCBtZDp0ZXh0LTJ4bCBtZDp3LTMyIHRleHQtbGcgdy0yNCBteC01XCI+MCB0byA5PC9oMT5cbiAgICAgICAgICA8aW5wdXQgaWQ9J251bWJlcnMnIHR5cGU9J2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHctNzIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtM3hsIGxnOnctNjAgbWQ6dGV4dC0yeGwgbWQ6dy0zMiB0ZXh0LWxnIHctMjQgbXgtNVwiPlN5bWJvbHM8L2gxPlxuICAgICAgICAgIDxpbnB1dCBpZD0nc3ltYm9scycgdHlwZT0nY2hlY2tib3gnPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB3LTcyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtM3hsIG1kOnRleHQtMnhsIG1kOnctMzIgdGV4dC1sZyB3LTI0IG14LTVcIj5MZW5ndGg8L2gxPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPSdyYW5nZScgbWluPScxJyBtYXg9JzIwJyBkZWZhdWx0VmFsdWU9JzEwJyBjbGFzc05hbWU9J214LTEwIHctMTAnPjwvaW5wdXQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dlbmVyYXRlUGFzc3dvcmR9IGNsYXNzTmFtZT1cIm15LTYgcC0yIHJvdW5kZWQgdGV4dC1zbSBiZy1ncmF5LTMwMCB0ZXh0LWJsYWNrIGhvdmVyOmJnLWdyYXktNDAwIGFjdGl2ZTpiZy1ncmF5LTcwMFwiPkdlbmVyYXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZSIsInBhc3MiLCJ1cGRhdGVQYXNzIiwiYWxwX2NhcCIsInN5bWJvbHMiLCJnZW5lcmF0ZVBhc3N3b3JkIiwicGFzc3dvcmQiLCJsZW4iLCJhbHBfY2FwX2VsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFscF9zbV9lbCIsIm51bWJlcnNfZWwiLCJzeW1ib2xzX2VsIiwiY2hlY2tlZCIsInB1c2giLCJpIiwiYmFzZV9zZWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJhbHBfY2FwX3JhbmRfc2VsIiwiYWxwX3NtX3JhbmRfc2VsIiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJudW1fcmFuZF9zZWwiLCJ0b1N0cmluZyIsInN5bWJvbF9yYW5kX3NlbCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImgxIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});