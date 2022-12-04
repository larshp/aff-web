const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_insert.abap
const constant_1 = new abap.types.Integer().set(1);
async function wwwparams_insert(INPUT) {
  // importing PARAMS WWWPARAMS
  let params = INPUT.exporting.params;
  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
}
abap.FunctionModules['WWWPARAMS_INSERT'] = wwwparams_insert;
//# sourceMappingURL=zw3mi.fugr.wwwparams_insert.mjs.map