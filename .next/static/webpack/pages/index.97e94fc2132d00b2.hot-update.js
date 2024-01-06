/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ImageGallery/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/ImageGallery/index.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ImageGallery */ \"./src/components/ImageGallery/index.tsx\");\n/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_ImageGallery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ProductTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ProductTitle */ \"./src/components/ProductTitle/index.tsx\");\n/* harmony import */ var _components_ProductPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ProductPrice */ \"./src/components/ProductPrice/index.tsx\");\n/* harmony import */ var _components_ProductOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ProductOptions */ \"./src/components/ProductOptions/index.tsx\");\n/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AddToCart */ \"./src/components/AddToCart/index.tsx\");\n\n\n\n\n\n\nconst ProductDetail = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_ImageGallery__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: \"Apple iPhone 6s Rose Gold Front Pane\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductPrice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        price: 1300,\n                        minQuantity: 100\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductOptions__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddToCart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        totalPrice: 3000\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Ata Bayraktar\\\\Desktop\\\\Belgeler\\\\Projects\\\\Personal\\\\yildiz-tech-case-study\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\nvar _c;\n$RefreshReg$(_c, \"ProductDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUQ7QUFDQTtBQUNBO0FBQ0k7QUFDVjtBQUUvQyxNQUFNSyxnQkFBZ0IsSUFBTTtJQUMxQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNQLGlFQUFZQTs7Ozs7MEJBQ2IsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ04sZ0VBQVlBO3dCQUFDTyxPQUFNOzs7Ozs7a0NBQ3BCLDhEQUFDTixnRUFBWUE7d0JBQUNPLE9BQU87d0JBQU1DLGFBQWE7Ozs7OztrQ0FDeEMsOERBQUNQLGtFQUFjQTs7Ozs7a0NBQ2YsOERBQUNDLDZEQUFTQTt3QkFBQ08sWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9CO0tBWk1OO0FBY04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9JbWFnZUdhbGxlcnlcIjtcbmltcG9ydCBQcm9kdWN0VGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0VGl0bGVcIjtcbmltcG9ydCBQcm9kdWN0UHJpY2UgZnJvbSBcIkAvY29tcG9uZW50cy9Qcm9kdWN0UHJpY2VcIjtcbmltcG9ydCBQcm9kdWN0T3B0aW9ucyBmcm9tIFwiQC9jb21wb25lbnRzL1Byb2R1Y3RPcHRpb25zXCI7XG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvQWRkVG9DYXJ0XCI7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWwgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgIDxJbWFnZUdhbGxlcnkgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxcIj5cbiAgICAgICAgPFByb2R1Y3RUaXRsZSB0aXRsZT1cIkFwcGxlIGlQaG9uZSA2cyBSb3NlIEdvbGQgRnJvbnQgUGFuZVwiIC8+XG4gICAgICAgIDxQcm9kdWN0UHJpY2UgcHJpY2U9ezEzMDB9IG1pblF1YW50aXR5PXsxMDB9IC8+XG4gICAgICAgIDxQcm9kdWN0T3B0aW9ucyAvPlxuICAgICAgICA8QWRkVG9DYXJ0IHRvdGFsUHJpY2U9ezMwMDB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWw7XG4iXSwibmFtZXMiOlsiSW1hZ2VHYWxsZXJ5IiwiUHJvZHVjdFRpdGxlIiwiUHJvZHVjdFByaWNlIiwiUHJvZHVjdE9wdGlvbnMiLCJBZGRUb0NhcnQiLCJQcm9kdWN0RGV0YWlsIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJwcmljZSIsIm1pblF1YW50aXR5IiwidG90YWxQcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});