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
exports.id = "pages/api/makeTransaction";
exports.ids = ["pages/api/makeTransaction"];
exports.modules = {

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ "bignumber.js":
/*!*******************************!*\
  !*** external "bignumber.js" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ "@solana/spl-token":
/*!************************************!*\
  !*** external "@solana/spl-token" ***!
  \************************************/
/***/ ((module) => {

module.exports = import("@solana/spl-token");;

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "(api)/./lib/addresses.ts":
/*!**************************!*\
  !*** ./lib/addresses.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"shopAddress\": () => (/* binding */ shopAddress),\n/* harmony export */   \"usdcAddress\": () => (/* binding */ usdcAddress)\n/* harmony export */ });\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shopAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey('EQVsZofCQaH79ajTJDXSbyAopWUWmmWddnBAzZzCp23v');\nconst usdcAddress = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__.PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYWRkcmVzc2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFFcEMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsR0FBRyxDQUFDRCxzREFBUyxDQUFDLENBQThDO0FBQ2hGLEtBQUssQ0FBQ0UsV0FBVyxHQUFHLEdBQUcsQ0FBQ0Ysc0RBQVMsQ0FBQyxDQUE4QyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9hZGRyZXNzZXMudHM/OWU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQdWJsaWNLZXkgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5cbmV4cG9ydCBjb25zdCBzaG9wQWRkcmVzcyA9IG5ldyBQdWJsaWNLZXkoJ0VRVnNab2ZDUWFINzlhalRKRFhTYnlBb3BXVVdtbVdkZG5CQXpaekNwMjN2JylcbmV4cG9ydCBjb25zdCB1c2RjQWRkcmVzcyA9IG5ldyBQdWJsaWNLZXkoJ0doOVp3RW1kTEo4RHNjS05Ua1RxUGJOd0xOTkJqdVN6YUc5VnAyS0d0S0pyJykiXSwibmFtZXMiOlsiUHVibGljS2V5Iiwic2hvcEFkZHJlc3MiLCJ1c2RjQWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/addresses.ts\n");

/***/ }),

/***/ "(api)/./lib/calculatePrice.ts":
/*!*******************************!*\
  !*** ./lib/calculatePrice.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calculatePrice)\n/* harmony export */ });\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bignumber.js */ \"bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products */ \"(api)/./lib/products.ts\");\n\n\nfunction calculatePrice(query) {\n    let amount = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(0);\n    for (let [id, quantity] of Object.entries(query)){\n        const product = _products__WEBPACK_IMPORTED_MODULE_1__.products.find((p)=>p.id === id\n        );\n        if (!product) continue;\n        const price = product.priceUsd;\n        const productQuantity = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(quantity);\n        amount = amount.plus(productQuantity.multipliedBy(price));\n    }\n    return amount;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2FsY3VsYXRlUHJpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFvQztBQUVDO0FBRXRCLFFBQVEsQ0FBQ0UsY0FBYyxDQUFDQyxLQUFxQixFQUFhLENBQUM7SUFDeEUsR0FBRyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDSixxREFBUyxDQUFDLENBQUM7SUFDNUIsR0FBRyxFQUFFLEdBQUcsRUFBRUssRUFBRSxFQUFFQyxRQUFRLEtBQUtDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDTCxLQUFLLEVBQUcsQ0FBQztRQUNqRCxLQUFLLENBQUNNLE9BQU8sR0FBR1Isb0RBQWEsRUFBQ1UsQ0FBQyxHQUFJQSxDQUFDLENBQUNOLEVBQUUsS0FBS0EsRUFBRTs7UUFDOUMsRUFBRSxHQUFHSSxPQUFPLEVBQUUsUUFBUTtRQUV0QixLQUFLLENBQUNHLEtBQUssR0FBR0gsT0FBTyxDQUFDSSxRQUFRO1FBQzlCLEtBQUssQ0FBQ0MsZUFBZSxHQUFHLEdBQUcsQ0FBQ2QscURBQVMsQ0FBQ00sUUFBUTtRQUM5Q0YsTUFBTSxHQUFHQSxNQUFNLENBQUNXLElBQUksQ0FBQ0QsZUFBZSxDQUFDRSxZQUFZLENBQUNKLEtBQUs7SUFDekQsQ0FBQztJQUVELE1BQU0sQ0FBQ1IsTUFBTTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvY2FsY3VsYXRlUHJpY2UudHM/ZWJjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmlnTnVtYmVyIGZyb20gXCJiaWdudW1iZXIuanNcIjtcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gXCIuL3Byb2R1Y3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZVByaWNlKHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSk6IEJpZ051bWJlciB7XG4gIGxldCBhbW91bnQgPSBuZXcgQmlnTnVtYmVyKDApO1xuICBmb3IgKGxldCBbaWQsIHF1YW50aXR5XSBvZiBPYmplY3QuZW50cmllcyhxdWVyeSkpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZChwID0+IHAuaWQgPT09IGlkKVxuICAgIGlmICghcHJvZHVjdCkgY29udGludWU7XG5cbiAgICBjb25zdCBwcmljZSA9IHByb2R1Y3QucHJpY2VVc2RcbiAgICBjb25zdCBwcm9kdWN0UXVhbnRpdHkgPSBuZXcgQmlnTnVtYmVyKHF1YW50aXR5IGFzIHN0cmluZylcbiAgICBhbW91bnQgPSBhbW91bnQucGx1cyhwcm9kdWN0UXVhbnRpdHkubXVsdGlwbGllZEJ5KHByaWNlKSlcbiAgfVxuXG4gIHJldHVybiBhbW91bnRcbn1cbiJdLCJuYW1lcyI6WyJCaWdOdW1iZXIiLCJwcm9kdWN0cyIsImNhbGN1bGF0ZVByaWNlIiwicXVlcnkiLCJhbW91bnQiLCJpZCIsInF1YW50aXR5IiwiT2JqZWN0IiwiZW50cmllcyIsInByb2R1Y3QiLCJmaW5kIiwicCIsInByaWNlIiwicHJpY2VVc2QiLCJwcm9kdWN0UXVhbnRpdHkiLCJwbHVzIiwibXVsdGlwbGllZEJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/calculatePrice.ts\n");

/***/ }),

/***/ "(api)/./lib/products.ts":
/*!*************************!*\
  !*** ./lib/products.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"products\": () => (/* binding */ products)\n/* harmony export */ });\nconst products = [\n    {\n        id: 'mochi-donut',\n        name: 'Mochi Donut',\n        description: 'A delicious homemade mochi donut',\n        unitName: 'donut',\n        priceSol: 0.02,\n        priceUsd: 2\n    },\n    {\n        id: 'dozen-mochi-donuts',\n        name: 'One Dozen Mochi Donuts',\n        description: 'A box of a dozen homemade mochi donuts',\n        unitName: 'box',\n        priceSol: 0.17,\n        priceUsd: 17\n    }\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQUM7SUFDdkIsQ0FBQztRQUNDQyxFQUFFLEVBQUUsQ0FBYTtRQUNqQkMsSUFBSSxFQUFFLENBQWE7UUFDbkJDLFdBQVcsRUFBRSxDQUFrQztRQUMvQ0MsUUFBUSxFQUFFLENBQU87UUFDakJDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLFFBQVEsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUNELENBQUM7UUFDQ0wsRUFBRSxFQUFFLENBQW9CO1FBQ3hCQyxJQUFJLEVBQUUsQ0FBd0I7UUFDOUJDLFdBQVcsRUFBRSxDQUF3QztRQUNyREMsUUFBUSxFQUFFLENBQUs7UUFDZkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsUUFBUSxFQUFFLEVBQUU7SUFDZCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wcm9kdWN0cy50cz8xYWRhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9kdWN0cyA9IFtcbiAge1xuICAgIGlkOiAnbW9jaGktZG9udXQnLFxuICAgIG5hbWU6ICdNb2NoaSBEb251dCcsXG4gICAgZGVzY3JpcHRpb246ICdBIGRlbGljaW91cyBob21lbWFkZSBtb2NoaSBkb251dCcsXG4gICAgdW5pdE5hbWU6ICdkb251dCcsIC8vIHNob3dzIGFmdGVyIHRoZSBwcmljZSwgZWcuIDAuMDUgU09ML2JveFxuICAgIHByaWNlU29sOiAwLjAyLFxuICAgIHByaWNlVXNkOiAyLFxuICB9LFxuICB7XG4gICAgaWQ6ICdkb3plbi1tb2NoaS1kb251dHMnLFxuICAgIG5hbWU6ICdPbmUgRG96ZW4gTW9jaGkgRG9udXRzJyxcbiAgICBkZXNjcmlwdGlvbjogJ0EgYm94IG9mIGEgZG96ZW4gaG9tZW1hZGUgbW9jaGkgZG9udXRzJyxcbiAgICB1bml0TmFtZTogJ2JveCcsXG4gICAgcHJpY2VTb2w6IDAuMTcsXG4gICAgcHJpY2VVc2Q6IDE3LFxuICB9XG5dXG4iXSwibmFtZXMiOlsicHJvZHVjdHMiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInVuaXROYW1lIiwicHJpY2VTb2wiLCJwcmljZVVzZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/products.ts\n");

/***/ }),

/***/ "(api)/./pages/api/makeTransaction.ts":
/*!**************************************!*\
  !*** ./pages/api/makeTransaction.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/spl-token */ \"@solana/spl-token\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_addresses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/addresses */ \"(api)/./lib/addresses.ts\");\n/* harmony import */ var _lib_calculatePrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/calculatePrice */ \"(api)/./lib/calculatePrice.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__]);\n([_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    try {\n        const amount = (0,_lib_calculatePrice__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req.query);\n        if (amount.toNumber() === 0) {\n            res.status(400).json({\n                error: \"Can't checkout with charge of 0\"\n            });\n            return;\n        }\n        const { reference  } = req.query;\n        if (!reference) {\n            res.status(400).json({\n                error: \"No reference provided\"\n            });\n            return;\n        }\n        const { account  } = req.body;\n        if (!account) {\n            res.status(400).json({\n                error: \"No account provided\"\n            });\n            return;\n        }\n        const buyerPublicKey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(account);\n        const shopPublicKey = _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.shopAddress;\n        const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__.WalletAdapterNetwork.Devnet;\n        const endpoint = (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.clusterApiUrl)(network);\n        const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Connection(endpoint);\n        const usdcMint = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getMint)(connection, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress);\n        const buyerUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getAssociatedTokenAddress)(_lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, buyerPublicKey);\n        const shopUsdcAddress = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.getAssociatedTokenAddress)(_lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, shopPublicKey);\n        const { blockhash  } = await connection.getLatestBlockhash('finalized');\n        const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.Transaction({\n            recentBlockhash: blockhash,\n            feePayer: buyerPublicKey\n        });\n        const transferInstruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_0__.createTransferCheckedInstruction)(buyerUsdcAddress, _lib_addresses__WEBPACK_IMPORTED_MODULE_3__.usdcAddress, shopUsdcAddress, buyerPublicKey, amount.toNumber() * 10 ** (await usdcMint).decimals, usdcMint.decimals);\n        transferInstruction.keys.push({\n            pubkey: new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.PublicKey(reference),\n            isSigner: false,\n            isWritable: false\n        });\n        transaction.add(transferInstruction);\n        const serializedTransaction = transaction.serialize({\n            requireAllSignatures: false\n        });\n        const base64 = serializedTransaction.toString('base64');\n        res.status(200).json({\n            transaction: base64,\n            message: \"Thanks for your order! 🍩\"\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: 'error creating transaction'\n        });\n        return;\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1AsbUJBQW1CO1FBRW5DLEtBQUssQ0FBQ1EscUJBQXFCLEdBQUdYLFdBQVcsQ0FBQ1ksU0FBUyxDQUFDLENBQUM7WUFDbkRDLG9CQUFvQixFQUFFLEtBQUs7UUFDN0IsQ0FBQztRQUNELEtBQUssQ0FBQ0MsTUFBTSxHQUFHSCxxQkFBcUIsQ0FBQ0ksUUFBUSxDQUFDLENBQVE7UUFFdERwQyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQ3BCZ0IsV0FBVyxFQUFFYyxNQUFNO1lBQ25CRSxPQUFPLEVBQUUsQ0FBMEI7UUFDckMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVDLEdBQUcsRUFBRSxDQUFDO1FBQ2JDLE9BQU8sQ0FBQ2pDLEtBQUssQ0FBQ2dDLEdBQUc7UUFFakJ0QyxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLEtBQUssRUFBRSxDQUE0QjtRQUFFLENBQUM7UUFDN0QsTUFBTTtJQUNSLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL21ha2VUcmFuc2FjdGlvbi50cz81N2E4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uLCBnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzLCBnZXRNaW50IH0gZnJvbSBcIkBzb2xhbmEvc3BsLXRva2VuXCJcbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItYmFzZVwiXG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIFRyYW5zYWN0aW9uLCBTeXN0ZW1Qcm9ncmFtLCBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHsgc2hvcEFkZHJlc3MsIHVzZGNBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL2xpYi9hZGRyZXNzZXNcIlxuaW1wb3J0IGNhbGN1bGF0ZVByaWNlIGZyb20gXCIuLi8uLi9saWIvY2FsY3VsYXRlUHJpY2VcIlxuXG5leHBvcnQgdHlwZSBNYWtlVHJhbnNhY3Rpb25JbnB1dERhdGEgPSB7XG4gIGFjY291bnQ6IHN0cmluZyxcbn1cblxuZXhwb3J0IHR5cGUgTWFrZVRyYW5zYWN0aW9uT3V0cHV0RGF0YSA9IHtcbiAgdHJhbnNhY3Rpb246IHN0cmluZyxcbiAgbWVzc2FnZTogc3RyaW5nLFxufVxuXG50eXBlIEVycm9yT3V0cHV0ID0ge1xuICBlcnJvcjogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPE1ha2VUcmFuc2FjdGlvbk91dHB1dERhdGEgfCBFcnJvck91dHB1dD5cbikge1xuICB0cnkge1xuICAgIGNvbnN0IGFtb3VudCA9IGNhbGN1bGF0ZVByaWNlKHJlcS5xdWVyeSlcbiAgICBpZiAoYW1vdW50LnRvTnVtYmVyKCkgPT09IDApIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiQ2FuJ3QgY2hlY2tvdXQgd2l0aCBjaGFyZ2Ugb2YgMFwiIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHJlZmVyZW5jZSB9ID0gcmVxLnF1ZXJ5XG4gICAgaWYgKCFyZWZlcmVuY2UpIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiTm8gcmVmZXJlbmNlIHByb3ZpZGVkXCIgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgYWNjb3VudCB9ID0gcmVxLmJvZHkgYXMgTWFrZVRyYW5zYWN0aW9uSW5wdXREYXRhXG4gICAgaWYgKCFhY2NvdW50KSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk5vIGFjY291bnQgcHJvdmlkZWRcIiB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGJ1eWVyUHVibGljS2V5ID0gbmV3IFB1YmxpY0tleShhY2NvdW50KVxuICAgIGNvbnN0IHNob3BQdWJsaWNLZXkgPSBzaG9wQWRkcmVzc1xuXG4gICAgY29uc3QgbmV0d29yayA9IFdhbGxldEFkYXB0ZXJOZXR3b3JrLkRldm5ldFxuICAgIGNvbnN0IGVuZHBvaW50ID0gY2x1c3RlckFwaVVybChuZXR3b3JrKVxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihlbmRwb2ludClcblxuXG4gICAgY29uc3QgdXNkY01pbnQgPSBhd2FpdCBnZXRNaW50KGNvbm5lY3Rpb24sIHVzZGNBZGRyZXNzKVxuICAgIGNvbnN0IGJ1eWVyVXNkY0FkZHJlc3MgPSBhd2FpdCBnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzKHVzZGNBZGRyZXNzLCBidXllclB1YmxpY0tleSlcbiAgICBjb25zdCBzaG9wVXNkY0FkZHJlc3MgPSBhd2FpdCBnZXRBc3NvY2lhdGVkVG9rZW5BZGRyZXNzKHVzZGNBZGRyZXNzLCBzaG9wUHVibGljS2V5KVxuXG4gICAgY29uc3QgeyBibG9ja2hhc2ggfSA9IGF3YWl0IChjb25uZWN0aW9uLmdldExhdGVzdEJsb2NraGFzaCgnZmluYWxpemVkJykpXG5cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih7XG4gICAgICByZWNlbnRCbG9ja2hhc2g6IGJsb2NraGFzaCxcbiAgICAgIGZlZVBheWVyOiBidXllclB1YmxpY0tleSxcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhbnNmZXJJbnN0cnVjdGlvbiA9IGNyZWF0ZVRyYW5zZmVyQ2hlY2tlZEluc3RydWN0aW9uKFxuICAgICAgYnV5ZXJVc2RjQWRkcmVzcyxcbiAgICAgIHVzZGNBZGRyZXNzLFxuICAgICAgc2hvcFVzZGNBZGRyZXNzLFxuICAgICAgYnV5ZXJQdWJsaWNLZXksXG4gICAgICBhbW91bnQudG9OdW1iZXIoKSAqICgxMCAqKiAoYXdhaXQgdXNkY01pbnQpLmRlY2ltYWxzKSxcbiAgICAgIHVzZGNNaW50LmRlY2ltYWxzLFxuICAgIClcblxuICAgIHRyYW5zZmVySW5zdHJ1Y3Rpb24ua2V5cy5wdXNoKHtcbiAgICAgIHB1YmtleTogbmV3IFB1YmxpY0tleShyZWZlcmVuY2UpLFxuICAgICAgaXNTaWduZXI6IGZhbHNlLFxuICAgICAgaXNXcml0YWJsZTogZmFsc2UsXG4gICAgfSlcblxuICAgIHRyYW5zYWN0aW9uLmFkZCh0cmFuc2Zlckluc3RydWN0aW9uKVxuXG4gICAgY29uc3Qgc2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdHJhbnNhY3Rpb24uc2VyaWFsaXplKHtcbiAgICAgIHJlcXVpcmVBbGxTaWduYXR1cmVzOiBmYWxzZVxuICAgIH0pXG4gICAgY29uc3QgYmFzZTY0ID0gc2VyaWFsaXplZFRyYW5zYWN0aW9uLnRvU3RyaW5nKCdiYXNlNjQnKVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgdHJhbnNhY3Rpb246IGJhc2U2NCxcbiAgICAgIG1lc3NhZ2U6IFwiVGhhbmtzIGZvciB5b3VyIG9yZGVyISDwn42pXCIsXG4gICAgfSlcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ2Vycm9yIGNyZWF0aW5nIHRyYW5zYWN0aW9uJywgfSlcbiAgICByZXR1cm5cbiAgfVxufSJdLCJuYW1lcyI6WyJjcmVhdGVUcmFuc2ZlckNoZWNrZWRJbnN0cnVjdGlvbiIsImdldEFzc29jaWF0ZWRUb2tlbkFkZHJlc3MiLCJnZXRNaW50IiwiV2FsbGV0QWRhcHRlck5ldHdvcmsiLCJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIlRyYW5zYWN0aW9uIiwic2hvcEFkZHJlc3MiLCJ1c2RjQWRkcmVzcyIsImNhbGN1bGF0ZVByaWNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImFtb3VudCIsInF1ZXJ5IiwidG9OdW1iZXIiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJyZWZlcmVuY2UiLCJhY2NvdW50IiwiYm9keSIsImJ1eWVyUHVibGljS2V5Iiwic2hvcFB1YmxpY0tleSIsIm5ldHdvcmsiLCJEZXZuZXQiLCJlbmRwb2ludCIsImNvbm5lY3Rpb24iLCJ1c2RjTWludCIsImJ1eWVyVXNkY0FkZHJlc3MiLCJzaG9wVXNkY0FkZHJlc3MiLCJibG9ja2hhc2giLCJnZXRMYXRlc3RCbG9ja2hhc2giLCJ0cmFuc2FjdGlvbiIsInJlY2VudEJsb2NraGFzaCIsImZlZVBheWVyIiwidHJhbnNmZXJJbnN0cnVjdGlvbiIsImRlY2ltYWxzIiwia2V5cyIsInB1c2giLCJwdWJrZXkiLCJpc1NpZ25lciIsImlzV3JpdGFibGUiLCJhZGQiLCJzZXJpYWxpemVkVHJhbnNhY3Rpb24iLCJzZXJpYWxpemUiLCJyZXF1aXJlQWxsU2lnbmF0dXJlcyIsImJhc2U2NCIsInRvU3RyaW5nIiwibWVzc2FnZSIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/makeTransaction.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/makeTransaction.ts"));
module.exports = __webpack_exports__;

})();