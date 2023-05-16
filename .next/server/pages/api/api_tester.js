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
exports.id = "pages/api/api_tester";
exports.ids = ["pages/api/api_tester"];
exports.modules = {

/***/ "(api)/./pages/api/api_tester.js":
/*!*********************************!*\
  !*** ./pages/api/api_tester.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ testApiSSR)\n/* harmony export */ });\nconst api_tester = \"https://jsonplaceholder.typicode.com/users\";\nasync function testApiSSR(req, res) {\n    const result = await fetch(api_tester);\n    let newVar = await result.json();\n    console.log(result, \"==> result API_Tester\");\n    //return res.json(result)\n    res.json(newVar);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXBpX3Rlc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsYUFBYTtBQUVILGVBQWVDLFdBQWFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ2xELE1BQU1DLFNBQVMsTUFBTUMsTUFBTUw7SUFFM0IsSUFBSU0sU0FBUyxNQUFNRixPQUFPRyxJQUFJO0lBRTlCQyxRQUFRQyxHQUFHLENBQUNMLFFBQVE7SUFFcEIseUJBQXlCO0lBQ3pCRCxJQUFJSSxJQUFJLENBQUNEO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nzci1zZXNpMy8uL3BhZ2VzL2FwaS9hcGlfdGVzdGVyLmpzPzM3NGQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpX3Rlc3RlciA9IFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzXCJcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB0ZXN0QXBpU1NSICAocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGFwaV90ZXN0ZXIpXHJcblxyXG4gICAgbGV0IG5ld1ZhciA9IGF3YWl0IHJlc3VsdC5qc29uKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQsIFwiPT0+IHJlc3VsdCBBUElfVGVzdGVyXCIpXHJcblxyXG4gICAgLy9yZXR1cm4gcmVzLmpzb24ocmVzdWx0KVxyXG4gICAgcmVzLmpzb24obmV3VmFyKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJhcGlfdGVzdGVyIiwidGVzdEFwaVNTUiIsInJlcSIsInJlcyIsInJlc3VsdCIsImZldGNoIiwibmV3VmFyIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/api_tester.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/api_tester.js"));
module.exports = __webpack_exports__;

})();