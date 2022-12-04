const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_column.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_salv_column {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async set_technical(INPUT) {
    let value = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.value) {value = INPUT.value;}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async set_short_text(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async set_medium_text(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async set_long_text(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
}
abap.Classes['CL_SALV_COLUMN'] = cl_salv_column;
export {cl_salv_column};
//# sourceMappingURL=cl_salv_column.clas.mjs.map