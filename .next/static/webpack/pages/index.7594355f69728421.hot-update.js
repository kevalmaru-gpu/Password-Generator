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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Password\"), pass = ref[0], updatePass = ref[1];\n    // array of pass values\n    var alp_cap = [\n        \"A\",\n        \"B\",\n        \"C\",\n        \"D\",\n        \"E\",\n        \"F\",\n        \"G\",\n        \"H\",\n        \"I\",\n        \"J\",\n        \"K\",\n        \"L\",\n        \"M\",\n        \"N\",\n        \"O\",\n        \"P\",\n        \"Q\",\n        \"R\",\n        \"S\",\n        \"T\",\n        \"U\",\n        \"V\",\n        \"W\",\n        \"X\",\n        \"Y\",\n        \"Z\"\n    ];\n    var symbols = [\n        \"!\",\n        \"@\",\n        \"#\",\n        \"$\",\n        \"%\",\n        \"^\",\n        \"&\",\n        \"*\",\n        \"(\",\n        \")\"\n    ];\n    var generatePassword = function() {\n        var password = \"\";\n        var len = 10;\n        var alp_cap_el = document.getElementById(\"alp_cap\");\n        var alp_sm_el = document.getElementById(\"alp_sm\");\n        var numbers_el = document.getElementById(\"numbers\");\n        var symbols_el = document.getElementById(\"symbols\");\n        for(var i = 0; i < len; i++){\n            var base_sel = Math.floor(Math.random() * 4);\n            console.log(base_sel);\n            if (base_sel === 0) {\n                // alp_cap\n                var alp_cap_rand_sel = alp_cap[Math.random(0, alp_cap.length)];\n                password += alp_cap_rand_sel;\n            } else if (base_sel === 1) {\n                // alp_sm\n                var alp_sm_rand_sel = alp_cap[Math.random(0, alp_cap.length)];\n                password += alp_sm_rand_sel.toString().toLowerCase();\n            } else if (base_sel === 2) {\n                // num\n                var num_rand_sel = Math.random(0).toString();\n                password += num_rand_sel;\n            } else if (base_sel === 3) {\n                // symbols\n                var symbol_rand_sel = symbols[Math.random(0, symbols.length)];\n                password += symbol_rand_sel;\n            }\n        }\n        updatePass(password);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen flex flex-col 2xl:flex-row text-white font-mono\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"2xl:w-1/2 2xl:h-full w-full h-1/4 bg-slate-800 flex flex-row items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 p-2 h-10 flex flex-row items-center bg-gray-600 rounded-sm\",\n                        children: pass\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"mx-5 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700\",\n                        children: \"Copy\"\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"2xl:w-1/2 2xl:h-full w-full h-3/4 bg-slate-700 flex flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"A to Z\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"alp_cap\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"a to z\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"alp_sm\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"0 to 9\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"numbers\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"lg:text-3xl lg:w-48 md:text-2xl md:w-32 text-lg w-24 mx-5\",\n                                children: \"Symbols\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                id: \"symbols\",\n                                type: \"checkbox\"\n                            }, void 0, false, {\n                                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: generatePassword,\n                        className: \"my-6 p-2 rounded text-sm bg-gray-300 text-black hover:bg-gray-400 active:bg-gray-700\",\n                        children: \"Generate\"\n                    }, void 0, false, {\n                        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/kiya/Projects/password-generator/pages/index.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"LQ8+8refGoHsot3nOK6bBAi9OP4=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNOLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxlQUFlOzswQ0FDNUIsOERBQUNFLElBQUU7Z0NBQUNGLFNBQVMsRUFBQywyREFBMkQ7MENBQUMsU0FBTzs7Ozs7b0NBQUs7MENBQ3RGLDhEQUFDRyxPQUFLO2dDQUFDQyxFQUFFLEVBQUMsU0FBUztnQ0FBQ0MsSUFBSSxFQUFDLFVBQVU7Ozs7O29DQUFTOzs7Ozs7NEJBQ3hDO2tDQUNOLDhEQUFDSixRQUFNO3dCQUFDSyxPQUFPLEVBQUU5QixnQkFBZ0I7d0JBQUV3QixTQUFTLEVBQUMsc0ZBQXNGO2tDQUFDLFVBQVE7Ozs7OzRCQUFTOzs7Ozs7b0JBQ2pKOzs7Ozs7WUFDRixDQUNQO0NBQ0Y7R0F4RVE3QixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUEwRWIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBIb21lKCl7XG4gIGNvbnN0IFtwYXNzLHVwZGF0ZVBhc3NdID0gdXNlU3RhdGUoJ1Bhc3N3b3JkJylcblxuICAvLyBhcnJheSBvZiBwYXNzIHZhbHVlc1xuICBjb25zdCBhbHBfY2FwID0gWydBJywnQicsJ0MnLCdEJywnRScsJ0YnLCdHJywnSCcsJ0knLCdKJywnSycsJ0wnLCdNJywnTicsJ08nLCdQJywnUScsJ1InLCdTJywnVCcsJ1UnLCdWJywnVycsJ1gnLCdZJywnWiddXG4gIGNvbnN0IHN5bWJvbHMgPSBbJyEnLCdAJywnIycsJyQnLCclJywnXicsJyYnLCcqJywnKCcsJyknXVxuXG4gIGNvbnN0IGdlbmVyYXRlUGFzc3dvcmQgPSAoKSA9PiB7XG4gICAgdmFyIHBhc3N3b3JkID0gJydcbiAgICBjb25zdCBsZW4gPSAxMFxuICBcbiAgICBjb25zdCBhbHBfY2FwX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FscF9jYXAnKVxuICAgIGNvbnN0IGFscF9zbV9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbHBfc20nKVxuICAgIGNvbnN0IG51bWJlcnNfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVycycpXG4gICAgY29uc3Qgc3ltYm9sc19lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzeW1ib2xzJylcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspe1xuICAgICAgbGV0IGJhc2Vfc2VsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNClcblxuICAgICAgY29uc29sZS5sb2coYmFzZV9zZWwpXG4gICAgICBpZiAoYmFzZV9zZWwgPT09IDApe1xuICAgICAgICAvLyBhbHBfY2FwXG4gICAgICAgIHZhciBhbHBfY2FwX3JhbmRfc2VsID0gYWxwX2NhcFtNYXRoLnJhbmRvbSgwLGFscF9jYXAubGVuZ3RoKV1cbiAgICAgICAgcGFzc3dvcmQgKz0gYWxwX2NhcF9yYW5kX3NlbFxuICAgICAgfVxuICAgICAgZWxzZSBpZihiYXNlX3NlbCA9PT0gMSl7XG4gICAgICAgIC8vIGFscF9zbVxuICAgICAgICB2YXIgYWxwX3NtX3JhbmRfc2VsID0gYWxwX2NhcFtNYXRoLnJhbmRvbSgwLGFscF9jYXAubGVuZ3RoKV1cbiAgICAgICAgcGFzc3dvcmQgKz0gYWxwX3NtX3JhbmRfc2VsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZihiYXNlX3NlbCA9PT0gMil7XG4gICAgICAgIC8vIG51bVxuICAgICAgICB2YXIgbnVtX3JhbmRfc2VsID0gTWF0aC5yYW5kb20oMCkudG9TdHJpbmcoKVxuICAgICAgICBwYXNzd29yZCArPSBudW1fcmFuZF9zZWxcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYoYmFzZV9zZWwgPT09IDMpe1xuICAgICAgICAvLyBzeW1ib2xzXG4gICAgICAgIHZhciBzeW1ib2xfcmFuZF9zZWwgPSBzeW1ib2xzW01hdGgucmFuZG9tKDAsc3ltYm9scy5sZW5ndGgpXVxuICAgICAgICBwYXNzd29yZCArPSBzeW1ib2xfcmFuZF9zZWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQYXNzKHBhc3N3b3JkKVxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCAyeGw6ZmxleC1yb3cgdGV4dC13aGl0ZSBmb250LW1vbm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnctMS8yIDJ4bDpoLWZ1bGwgdy1mdWxsIGgtMS80IGJnLXNsYXRlLTgwMCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHAtMiBoLTEwIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGJnLWdyYXktNjAwIHJvdW5kZWQtc21cIj57cGFzc308L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteC01IHAtMiByb3VuZGVkIHRleHQtc20gYmctZ3JheS0zMDAgdGV4dC1ibGFjayBob3ZlcjpiZy1ncmF5LTQwMCBhY3RpdmU6YmctZ3JheS03MDBcIj5Db3B5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiMnhsOnctMS8yIDJ4bDpoLWZ1bGwgdy1mdWxsIGgtMy80IGJnLXNsYXRlLTcwMCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibGc6dGV4dC0zeGwgbGc6dy00OCBtZDp0ZXh0LTJ4bCBtZDp3LTMyIHRleHQtbGcgdy0yNCBteC01XCI+QSB0byBaPC9oMT5cbiAgICAgICAgICA8aW5wdXQgaWQ9J2FscF9jYXAnIHR5cGU9J2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtM3hsIGxnOnctNDggbWQ6dGV4dC0yeGwgbWQ6dy0zMiB0ZXh0LWxnIHctMjQgbXgtNVwiPmEgdG8gejwvaDE+XG4gICAgICAgICAgPGlucHV0IGlkPSdhbHBfc20nIHR5cGU9J2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImxnOnRleHQtM3hsIGxnOnctNDggbWQ6dGV4dC0yeGwgbWQ6dy0zMiB0ZXh0LWxnIHctMjQgbXgtNVwiPjAgdG8gOTwvaDE+XG4gICAgICAgICAgPGlucHV0IGlkPSdudW1iZXJzJyB0eXBlPSdjaGVja2JveCc+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsZzp0ZXh0LTN4bCBsZzp3LTQ4IG1kOnRleHQtMnhsIG1kOnctMzIgdGV4dC1sZyB3LTI0IG14LTVcIj5TeW1ib2xzPC9oMT5cbiAgICAgICAgICA8aW5wdXQgaWQ9J3N5bWJvbHMnIHR5cGU9J2NoZWNrYm94Jz48L2lucHV0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnZW5lcmF0ZVBhc3N3b3JkfSBjbGFzc05hbWU9XCJteS02IHAtMiByb3VuZGVkIHRleHQtc20gYmctZ3JheS0zMDAgdGV4dC1ibGFjayBob3ZlcjpiZy1ncmF5LTQwMCBhY3RpdmU6YmctZ3JheS03MDBcIj5HZW5lcmF0ZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJwYXNzIiwidXBkYXRlUGFzcyIsImFscF9jYXAiLCJzeW1ib2xzIiwiZ2VuZXJhdGVQYXNzd29yZCIsInBhc3N3b3JkIiwibGVuIiwiYWxwX2NhcF9lbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhbHBfc21fZWwiLCJudW1iZXJzX2VsIiwic3ltYm9sc19lbCIsImkiLCJiYXNlX3NlbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJhbHBfY2FwX3JhbmRfc2VsIiwibGVuZ3RoIiwiYWxwX3NtX3JhbmRfc2VsIiwidG9TdHJpbmciLCJ0b0xvd2VyQ2FzZSIsIm51bV9yYW5kX3NlbCIsInN5bWJvbF9yYW5kX3NlbCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImgxIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});