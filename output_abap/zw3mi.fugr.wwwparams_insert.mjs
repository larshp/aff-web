const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_insert.abap
async function wwwparams_insert(INPUT) {
  // importing PARAMS WWWPARAMS
  let params = INPUT.exporting?.params;
  if (params === undefined) {
                params = new abap.types.Structure({"relid": new abap.types.Character(2, {}), "objid": new abap.types.Character(40, {}), "name": new abap.types.Character(50, {}), "value": new abap.types.Character(250, {})}, "WWWPARAMS");
              }
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  abap.FunctionModules['WWWPARAMS_INSERT'] = wwwparams_insert;
//# sourceMappingURL=zw3mi.fugr.wwwparams_insert.mjs.map