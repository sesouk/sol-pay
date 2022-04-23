"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/NumberInput.tsx":
/*!************************************!*\
  !*** ./components/NumberInput.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NumberInput)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction NumberInput({ name , formRef  }) {\n    const { 0: number , 1: setNumber  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    function decrement() {\n        setNumber((n)=>n > 0 ? n - 1 : 0\n        );\n    }\n    function increment() {\n        setNumber((n)=>n + 1\n        );\n    }\n    function handleKeyboard(e) {\n        if (e.key === \"ArrowDown\") {\n            e.preventDefault();\n            decrement();\n        }\n        if (e.key === \"ArrowUp\") {\n            e.preventDefault();\n            increment();\n        }\n        if (e.key === \"Enter\") {\n            var ref;\n            e.preventDefault();\n            (ref = formRef.current) === null || ref === void 0 ? void 0 : ref.submit();\n        }\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-36 border-2 border-gray-200 rounded-md flex flex-row items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                tabIndex: -1,\n                className: \"basis-1/3 focus:outline-none\",\n                onClick: decrement,\n                onKeyDown: handleKeyboard,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"m-auto text-2xl font-thin\",\n                    children: \"−\"\n                }, void 0, false, {\n                    fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                name: name,\n                value: number,\n                onChange: (e)=>setNumber(Number(e.target.value))\n                ,\n                min: 0,\n                className: \"w-12 border-none focus:ring-0 text-center bg-gray-200\"\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                tabIndex: -1,\n                className: \"basis-1/3 focus:outline-none\",\n                onClick: increment,\n                onKeyDown: handleKeyboard,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"m-auto text-2xl font-thin\",\n                    children: \"+\"\n                }, void 0, false, {\n                    fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sesouk/solana/sol-pay/components/NumberInput.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL051bWJlcklucHV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFPakIsUUFBUSxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEdBQUVDLE9BQU8sRUFBUSxDQUFDLEVBQUUsQ0FBQztJQUM3RCxLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUSxDQUFDLENBQUM7YUFFN0JNLFNBQVMsR0FBRyxDQUFDO1FBQ3BCRCxTQUFTLEVBQUNFLENBQUMsR0FBSUEsQ0FBQyxHQUFHLENBQUMsR0FBR0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOztJQUNsQyxDQUFDO2FBRVFDLFNBQVMsR0FBRyxDQUFDO1FBQ3BCSCxTQUFTLEVBQUNFLENBQUMsR0FBSUEsQ0FBQyxHQUFHLENBQUM7O0lBQ3RCLENBQUM7YUFFUUUsY0FBYyxDQUFDQyxDQUF5QyxFQUFFLENBQUM7UUFDbEUsRUFBRSxFQUFFQSxDQUFDLENBQUNDLEdBQUcsS0FBSyxDQUFXLFlBQUUsQ0FBQztZQUMxQkQsQ0FBQyxDQUFDRSxjQUFjO1lBQ2hCTixTQUFTO1FBQ1gsQ0FBQztRQUNELEVBQUUsRUFBRUksQ0FBQyxDQUFDQyxHQUFHLEtBQUssQ0FBUyxVQUFFLENBQUM7WUFDeEJELENBQUMsQ0FBQ0UsY0FBYztZQUNoQkosU0FBUztRQUNYLENBQUM7UUFDRCxFQUFFLEVBQUVFLENBQUMsQ0FBQ0MsR0FBRyxLQUFLLENBQU8sUUFBRSxDQUFDO2dCQUV0QlIsR0FBZTtZQURmTyxDQUFDLENBQUNFLGNBQWM7YUFDaEJULEdBQWUsR0FBZkEsT0FBTyxDQUFDVSxPQUFPLGNBQWZWLEdBQWUsS0FBZkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsR0FBZSxDQUFFVyxNQUFNO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUNGQyxTQUFTLEVBQUMsQ0FBcUU7O3dGQUU5RUMsQ0FBTTtnQkFDTEMsSUFBSSxFQUFDLENBQVE7Z0JBQ2JDLFFBQVEsR0FBRyxDQUFDO2dCQUNaSCxTQUFTLEVBQUMsQ0FBOEI7Z0JBQ3hDSSxPQUFPLEVBQUVkLFNBQVM7Z0JBQ2xCZSxTQUFTLEVBQUVaLGNBQWM7c0dBRXhCYSxDQUFJO29CQUFDTixTQUFTLEVBQUMsQ0FBMkI7OEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7d0ZBRTlDTyxDQUFLO2dCQUNKTCxJQUFJLEVBQUMsQ0FBUTtnQkFDYmhCLElBQUksRUFBRUEsSUFBSTtnQkFDVnNCLEtBQUssRUFBRXBCLE1BQU07Z0JBQ2JxQixRQUFRLEdBQUVmLENBQUMsR0FBSUwsU0FBUyxDQUFDcUIsTUFBTSxDQUFDaEIsQ0FBQyxDQUFDaUIsTUFBTSxDQUFDSCxLQUFLOztnQkFDOUNJLEdBQUcsRUFBRSxDQUFDO2dCQUNOWixTQUFTLEVBQUMsQ0FBdUQ7Ozs7Ozt3RkFFbEVDLENBQU07Z0JBQ0xDLElBQUksRUFBQyxDQUFRO2dCQUNiQyxRQUFRLEdBQUcsQ0FBQztnQkFDWkgsU0FBUyxFQUFDLENBQThCO2dCQUN4Q0ksT0FBTyxFQUFFWixTQUFTO2dCQUNsQmEsU0FBUyxFQUFFWixjQUFjO3NHQUV4QmEsQ0FBSTtvQkFBQ04sU0FBUyxFQUFDLENBQTJCOzhCQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL051bWJlcklucHV0LnRzeD8zZDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nLFxuICBmb3JtUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTEZvcm1FbGVtZW50Pixcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVySW5wdXQoeyBuYW1lLCBmb3JtUmVmIH06IFByb3BzKSB7XG4gIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGZ1bmN0aW9uIGRlY3JlbWVudCgpIHtcbiAgICBzZXROdW1iZXIobiA9PiBuID4gMCA/IG4gLSAxIDogMClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgICBzZXROdW1iZXIobiA9PiBuICsgMSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleWJvYXJkKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZWNyZW1lbnQoKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaW5jcmVtZW50KCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBmb3JtUmVmLmN1cnJlbnQ/LnN1Ym1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwidy0zNiBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZC1tZCBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICBjbGFzc05hbWU9XCJiYXNpcy0xLzMgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgb25DbGljaz17ZGVjcmVtZW50fVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleWJvYXJkfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC0yeGwgZm9udC10aGluXCI+4oiSPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIHZhbHVlPXtudW1iZXJ9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldE51bWJlcihOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgbWluPXswfVxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEyIGJvcmRlci1ub25lIGZvY3VzOnJpbmctMCB0ZXh0LWNlbnRlciBiZy1ncmF5LTIwMFwiXG4gICAgICAvPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICBjbGFzc05hbWU9XCJiYXNpcy0xLzMgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgb25DbGljaz17aW5jcmVtZW50fVxuICAgICAgICBvbktleURvd249e2hhbmRsZUtleWJvYXJkfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtLWF1dG8gdGV4dC0yeGwgZm9udC10aGluXCI+Kzwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOdW1iZXJJbnB1dCIsIm5hbWUiLCJmb3JtUmVmIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiZGVjcmVtZW50IiwibiIsImluY3JlbWVudCIsImhhbmRsZUtleWJvYXJkIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJ0YWJJbmRleCIsIm9uQ2xpY2siLCJvbktleURvd24iLCJzcGFuIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiTnVtYmVyIiwidGFyZ2V0IiwibWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NumberInput.tsx\n");

/***/ }),

/***/ "./components/Products.tsx":
/*!*********************************!*\
  !*** ./components/Products.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/products */ \"./lib/products.ts\");\n/* harmony import */ var _NumberInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NumberInput */ \"./components/NumberInput.tsx\");\n\n\n\n\nfunction Products({ submitTarget , enabled  }) {\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"get\",\n        action: submitTarget,\n        ref: formRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 gap-8\",\n                    children: _lib_products__WEBPACK_IMPORTED_MODULE_2__.products.map((product)=>{\n                        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rounded-md bg-white text-left p-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm text-gray-800\",\n                                    children: product.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"my-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"mt-4 text-xl font-bold\",\n                                            children: [\n                                                \"$\",\n                                                product.priceUsd\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 19\n                                        }, this),\n                                        product.unitName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm text-gray-800\",\n                                            children: [\n                                                \" /\",\n                                                product.unitName\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 40\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NumberInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        name: product.id,\n                                        formRef: formRef\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, product.id, true, {\n                            fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, this));\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"items-center px-20 rounded-md py-2 max-w-fit self-center bg-gray-900 text-white hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed\",\n                    disabled: !enabled,\n                    children: \"Checkout\"\n                }, void 0, false, {\n                    fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sesouk/solana/sol-pay/components/Products.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBQ0g7QUFPeEIsUUFBUSxDQUFDRyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxZQUFZLEdBQUVDLE9BQU8sRUFBUSxDQUFDLEVBQUUsQ0FBQztJQUNsRSxLQUFLLENBQUNDLE9BQU8sR0FBR04sNkNBQU0sQ0FBa0IsSUFBSTtJQUU1QyxNQUFNLDZFQUNITyxDQUFJO1FBQUNDLE1BQU0sRUFBQyxDQUFLO1FBQUNDLE1BQU0sRUFBRUwsWUFBWTtRQUFFTSxHQUFHLEVBQUVKLE9BQU87OEZBQ2xESyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFzQjs7NEZBQ2xDRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBd0I7OEJBQ3BDWCx1REFBWSxFQUFDYSxPQUFPLEdBQUksQ0FBQzt3QkFDeEIsTUFBTSw2RUFDSEgsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQW1DOzs0R0FDL0NHLENBQUU7b0NBQUNILFNBQVMsRUFBQyxDQUFvQjs4Q0FBRUUsT0FBTyxDQUFDRSxJQUFJOzs7Ozs7NEdBQy9DQyxDQUFDO29DQUFDTCxTQUFTLEVBQUMsQ0FBdUI7OENBQUVFLE9BQU8sQ0FBQ0ksV0FBVzs7Ozs7OzRHQUN4REQsQ0FBQztvQ0FBQ0wsU0FBUyxFQUFDLENBQU07O29IQUNoQk8sQ0FBSTs0Q0FBQ1AsU0FBUyxFQUFDLENBQXdCOztnREFBQyxDQUFDO2dEQUFDRSxPQUFPLENBQUNNLFFBQVE7Ozs7Ozs7d0NBQzFETixPQUFPLENBQUNPLFFBQVEsZ0ZBQUtGLENBQUk7NENBQUNQLFNBQVMsRUFBQyxDQUF1Qjs7Z0RBQUMsQ0FBRTtnREFBQ0UsT0FBTyxDQUFDTyxRQUFROzs7Ozs7Ozs7Ozs7OzRHQUVqRlYsQ0FBRztvQ0FBQ0MsU0FBUyxFQUFDLENBQU07MEhBQ2xCVixvREFBVzt3Q0FBQ2MsSUFBSSxFQUFFRixPQUFPLENBQUNRLEVBQUU7d0NBQUVoQixPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7Ozs7OzsyQkFSS1EsT0FBTyxDQUFDUSxFQUFFOzs7OztvQkFZdEUsQ0FBQzs7Ozs7OzRGQUlGQyxDQUFNO29CQUNMWCxTQUFTLEVBQUMsQ0FBaUo7b0JBQzNKWSxRQUFRLEdBQUduQixPQUFPOzhCQUNuQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3RzLnRzeD82OTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvZHVjdHMgfSBmcm9tIFwiLi4vbGliL3Byb2R1Y3RzXCJcbmltcG9ydCBOdW1iZXJJbnB1dCBmcm9tIFwiLi9OdW1iZXJJbnB1dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBzdWJtaXRUYXJnZXQ6IHN0cmluZztcbiAgZW5hYmxlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoeyBzdWJtaXRUYXJnZXQsIGVuYWJsZWQgfTogUHJvcHMpIHtcbiAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZjxIVE1MRm9ybUVsZW1lbnQ+KG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gbWV0aG9kPSdnZXQnIGFjdGlvbj17c3VibWl0VGFyZ2V0fSByZWY9e2Zvcm1SZWZ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTE2Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy13aGl0ZSB0ZXh0LWxlZnQgcC04XCIga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3Byb2R1Y3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTgwMFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS00XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtdC00IHRleHQteGwgZm9udC1ib2xkXCI+JHtwcm9kdWN0LnByaWNlVXNkfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnVuaXROYW1lICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTgwMFwiPiAve3Byb2R1Y3QudW5pdE5hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXQgbmFtZT17cHJvZHVjdC5pZH0gZm9ybVJlZj17Zm9ybVJlZn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBweC0yMCByb3VuZGVkLW1kIHB5LTIgbWF4LXctZml0IHNlbGYtY2VudGVyIGJnLWdyYXktOTAwIHRleHQtd2hpdGUgaG92ZXI6c2NhbGUtMTA1IGRpc2FibGVkOm9wYWNpdHktNTAgZGlzYWJsZWQ6Y3Vyc29yLW5vdC1hbGxvd2VkXCJcbiAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICBDaGVja291dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInByb2R1Y3RzIiwiTnVtYmVySW5wdXQiLCJQcm9kdWN0cyIsInN1Ym1pdFRhcmdldCIsImVuYWJsZWQiLCJmb3JtUmVmIiwiZm9ybSIsIm1ldGhvZCIsImFjdGlvbiIsInJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJoMyIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJzcGFuIiwicHJpY2VVc2QiLCJ1bml0TmFtZSIsImlkIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Products.tsx\n");

/***/ }),

/***/ "./components/SiteHeading.tsx":
/*!************************************!*\
  !*** ./components/SiteHeading.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SiteHeading)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction SiteHeading({ children  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        className: \"text-8xl my-8 font-extrabold self-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/sesouk/solana/sol-pay/components/SiteHeading.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpdGVIZWFkaW5nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWUsUUFBUSxDQUFDQSxXQUFXLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQXdCLENBQUMsRUFBRSxDQUFDO0lBQ3hFLE1BQU0sNkVBQUVDLENBQUU7UUFBQ0MsU0FBUyxFQUFDLENBQXNIO2tCQUFFRixRQUFROzs7Ozs7QUFDdkosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2l0ZUhlYWRpbmcudHN4P2ExYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2l0ZUhlYWRpbmcoeyBjaGlsZHJlbiB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7fT4pIHtcbiAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBteS04IGZvbnQtZXh0cmFib2xkIHNlbGYtY2VudGVyIHRleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1mdWNoc2lhLTYwMCB0by1waW5rLTYwMFwiPntjaGlsZHJlbn08L2gxPlxufVxuIl0sIm5hbWVzIjpbIlNpdGVIZWFkaW5nIiwiY2hpbGRyZW4iLCJoMSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SiteHeading.tsx\n");

/***/ }),

/***/ "./lib/products.ts":
/*!*************************!*\
  !*** ./lib/products.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\nconst products = [\n    {\n        id: 'mochi-donut',\n        name: 'Mochi Donut',\n        description: 'A delicious homemade mochi donut',\n        unitName: 'donut',\n        priceSol: 0.02,\n        priceUsd: 2\n    },\n    {\n        id: 'dozen-mochi-donuts',\n        name: 'One Dozen Mochi Donuts',\n        description: 'A box of a dozen homemade mochi donuts',\n        unitName: 'box',\n        priceSol: 0.17,\n        priceUsd: 17\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQUM7SUFDdkIsQ0FBQztRQUNDQyxFQUFFLEVBQUUsQ0FBYTtRQUNqQkMsSUFBSSxFQUFFLENBQWE7UUFDbkJDLFdBQVcsRUFBRSxDQUFrQztRQUMvQ0MsUUFBUSxFQUFFLENBQU87UUFDakJDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELENBQUM7UUFDQ0wsRUFBRSxFQUFFLENBQW9CO1FBQ3hCQyxJQUFJLEVBQUUsQ0FBd0I7UUFDOUJDLFdBQVcsRUFBRSxDQUF3QztRQUNyREMsUUFBUSxFQUFFLENBQUs7UUFDZkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsUUFBUSxFQUFFLEVBQUU7SUFDZCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wcm9kdWN0cy50cz8xYWRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcbiAge1xuICAgIGlkOiAnbW9jaGktZG9udXQnLFxuICAgIG5hbWU6ICdNb2NoaSBEb251dCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGRlbGljaW91cyBob21lbWFkZSBtb2NoaSBkb251dCcsXG4gICAgdW5pdE5hbWU6ICdkb251dCcsIC8vIHNob3dzIGFmdGVyIHRoZSBwcmljZSwgZWcuIDAuMDUgU09ML2JveFxuICAgIHByaWNlU29sOiAwLjAyLFxuICAgIHByaWNlVXNkOiAyLFxuICB9LFxuICB7XG4gICAgaWQ6ICdkb3plbi1tb2NoaS1kb251dHMnLFxuICAgIG5hbWU6ICdPbmUgRG96ZW4gTW9jaGkgRG9udXRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYm94IG9mIGEgZG96ZW4gaG9tZW1hZGUgbW9jaGkgZG9udXRzJyxcbiAgICB1bml0TmFtZTogJ2JveCcsXG4gICAgcHJpY2VTb2w6IDAuMTcsXG4gICAgcHJpY2VVc2Q6IDE3LFxuICB9XG5dXG4iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXROYW1lIiwicHJpY2VTb2wiLCJwcmljZVVzZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/products.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Products */ \"./components/Products.tsx\");\n/* harmony import */ var _components_SiteHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SiteHeading */ \"./components/SiteHeading.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction HomePage() {\n    const { publicKey  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SiteHeading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"Mochi Donuts\"\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"basis-1/4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {\n                    className: \"!bg-gray-900 hover:scale-105\"\n                }, void 0, false, {\n                    fileName: \"/Users/sesouk/solana/sol-pay/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                submitTarget: \"/checkout\",\n                enabled: publicKey !== null\n            }, void 0, false, {\n                fileName: \"/Users/sesouk/solana/sol-pay/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sesouk/solana/sol-pay/pages/index.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDVztBQUN0QjtBQUNNO0FBRXBDLFFBQVEsQ0FBQ0ksUUFBUSxHQUFHLENBQUM7SUFDbEMsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFDLENBQUMsR0FBR0wsdUVBQVM7SUFFL0IsTUFBTSw2RUFDSE0sQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBMEQ7O3dGQUN0RUosK0RBQVc7MEJBQUMsQ0FBWTs7Ozs7O3dGQUV4QkcsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVc7c0dBQ3ZCTiw4RUFBaUI7b0JBQUNNLFNBQVMsRUFBQyxDQUE4Qjs7Ozs7Ozs7Ozs7d0ZBRzVETCw0REFBUTtnQkFBQ00sWUFBWSxFQUFDLENBQVc7Z0JBQUNDLE9BQU8sRUFBRUosU0FBUyxLQUFLLElBQUk7Ozs7Ozs7Ozs7OztBQUdwRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSdcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzJ1xuaW1wb3J0IFNpdGVIZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvU2l0ZUhlYWRpbmcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCB7IHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtOCBtYXgtdy00eGwgaXRlbXMtc3RyZXRjaCBtLWF1dG8gcHQtMjRcIj5cbiAgICAgIDxTaXRlSGVhZGluZz5Nb2NoaSBEb251dHM8L1NpdGVIZWFkaW5nPlxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmFzaXMtMS80Jz5cbiAgICAgICAgPFdhbGxldE11bHRpQnV0dG9uIGNsYXNzTmFtZT0nIWJnLWdyYXktOTAwIGhvdmVyOnNjYWxlLTEwNScgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UHJvZHVjdHMgc3VibWl0VGFyZ2V0PScvY2hlY2tvdXQnIGVuYWJsZWQ9e3B1YmxpY0tleSAhPT0gbnVsbH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldE11bHRpQnV0dG9uIiwiUHJvZHVjdHMiLCJTaXRlSGVhZGluZyIsIkhvbWVQYWdlIiwicHVibGljS2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3VibWl0VGFyZ2V0IiwiZW5hYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();