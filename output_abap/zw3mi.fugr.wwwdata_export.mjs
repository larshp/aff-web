const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwdata_export.abap
async function wwwdata_export(INPUT) {
  // importing KEY WWWDATATAB
  let key = INPUT.exporting?.key;
  if (key === undefined) {
                key = new abap.types.Structure({"relid": new abap.types.Character(2, {}), "objid": new abap.types.Character(40, {})}, "WWWDATATAB");
              }
    // tables MIME W3MIME
    let mime = INPUT.tables?.mime;
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  abap.FunctionModules['WWWDATA_EXPORT'] = wwwdata_export;
//# sourceMappingURL=zw3mi.fugr.wwwdata_export.mjs.map