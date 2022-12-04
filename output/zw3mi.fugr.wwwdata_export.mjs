const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_export.abap
const constant_1 = new abap.types.Integer().set(1);
async function wwwdata_export(INPUT) {
  // importing KEY WWWDATATAB
  let key = INPUT.exporting.key;
  // tables MIME W3MIME
  let mime = INPUT.tables.mime;
  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
}
abap.FunctionModules['WWWDATA_EXPORT'] = wwwdata_export;
//# sourceMappingURL=zw3mi.fugr.wwwdata_export.mjs.map