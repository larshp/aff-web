"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkaff_web"] = self["webpackChunkaff_web"] || []).push([["output_abap_cl_abap_conv_codepage_clas_locals_mjs"],{

/***/ "./output_abap/cl_abap_conv_codepage.clas.locals.mjs":
/*!***********************************************************!*\
  !*** ./output_abap/cl_abap_conv_codepage.clas.locals.mjs ***!
  \***********************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lcl_in\": () => (/* binding */ lcl_in),\n/* harmony export */   \"lcl_out\": () => (/* binding */ lcl_out)\n/* harmony export */ });\nconst {cx_root} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./cx_root.clas.mjs */ \"./output_abap/cx_root.clas.mjs\"));\r\n// cl_abap_conv_codepage.clas.locals_imp.abap\r\nclass lcl_in {\r\n  static INTERNAL_TYPE = 'CLAS';\r\n  static IMPLEMENTED_INTERFACES = [\"IF_ABAP_CONV_IN\"];\r\n  async constructor_(INPUT) {\r\n    this.me = new abap.types.ABAPObject();\r\n    this.me.set(this);\r\n    return this;\r\n  }\r\n  async if_abap_conv_in$convert(INPUT) {\r\n    let result = new abap.types.String({qualifiedName: \"STRING\"});\r\n    let source = new abap.types.XString({qualifiedName: \"XSTRING\"});\r\n    if (INPUT && INPUT.source) {source.set(INPUT.source);}\r\n    let conv = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_CONV_IN_CE\"});\r\n    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));\r\n    await conv.get().convert({input: source, data: result});\r\n    return result;\r\n  }\r\n}\r\nabap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN'] = lcl_in;\r\nclass lcl_out {\r\n  static INTERNAL_TYPE = 'CLAS';\r\n  static IMPLEMENTED_INTERFACES = [\"IF_ABAP_CONV_OUT\"];\r\n  async constructor_(INPUT) {\r\n    this.me = new abap.types.ABAPObject();\r\n    this.me.set(this);\r\n    return this;\r\n  }\r\n  async if_abap_conv_out$convert(INPUT) {\r\n    let result = new abap.types.XString({qualifiedName: \"XSTRING\"});\r\n    let source = new abap.types.String({qualifiedName: \"STRING\"});\r\n    if (INPUT && INPUT.source) {source.set(INPUT.source);}\r\n    let conv = new abap.types.ABAPObject({qualifiedName: \"CL_ABAP_CONV_OUT_CE\"});\r\n    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character(5).set('UTF-8')})));\r\n    await conv.get().convert({data: source, buffer: result});\r\n    return result;\r\n  }\r\n}\r\nabap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT'] = lcl_out;\r\n\r\n//# sourceMappingURL=cl_abap_conv_codepage.clas.locals.mjs.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://aff-web/./output_abap/cl_abap_conv_codepage.clas.locals.mjs?");

/***/ })

}]);