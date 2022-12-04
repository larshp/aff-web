const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_read.abap
const constant_1 = new abap.types.Integer().set(1);
async function wwwparams_read(INPUT) {
  // importing RELID WWWPARAMS-RELID
  let relid = INPUT.exporting.relid;
  // importing OBJID WWWPARAMS-OBJID
  let objid = INPUT.exporting.objid;
  // importing NAME C
  let name = INPUT.exporting.name;
  // exporting VALUE C
  let value = INPUT.importing.value;
  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
}
abap.FunctionModules['WWWPARAMS_READ'] = wwwparams_read;
//# sourceMappingURL=zw3mi.fugr.wwwparams_read.mjs.map