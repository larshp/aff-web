const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.docu_get.abap
const constant_1 = new abap.types.Integer().set(1);
async function docu_get(INPUT) {
  // importing ID undefined
  let id = INPUT.exporting.id;
  // importing LANGU undefined
  let langu = INPUT.exporting.langu;
  // importing OBJECT undefined
  let object = INPUT.exporting.object;
  // importing TYP undefined
  let typ = INPUT.exporting.typ;
  // tables LINE TLINE
  let line = INPUT.tables.line;
  abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));
}
abap.FunctionModules['DOCU_GET'] = docu_get;
//# sourceMappingURL=openabap.fugr.docu_get.mjs.map