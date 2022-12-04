const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_import.abap
async function wwwdata_import(INPUT) {
  // importing KEY WWWDATATAB
  let key = INPUT.exporting?.key;
  if (key === undefined) {
                key = new abap.types.Structure({"relid": new abap.types.Character(2, {}), "objid": new abap.types.Character(40, {})}, "WWWDATATAB");
              }
    // tables MIME W3MIME
    let mime = INPUT.tables?.mime;
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  abap.FunctionModules['WWWDATA_IMPORT'] = wwwdata_import;
//# sourceMappingURL=zw3mi.fugr.wwwdata_import.mjs.map