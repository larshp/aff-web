const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_import.abap
const constant_1 = new abap.types.Integer().set(1);
async function wwwdata_import(INPUT) {
  // importing KEY WWWDATATAB
  let key = INPUT.exporting.key;
  // tables MIME W3MIME
  let mime = INPUT.tables.mime;
  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
}
abap.FunctionModules['WWWDATA_IMPORT'] = wwwdata_import;
//# sourceMappingURL=zw3mi.fugr.wwwdata_import.mjs.map