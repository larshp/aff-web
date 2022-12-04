const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_columns_table.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_salv_columns_table {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_column(INPUT) {
    let value = new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMN"});
    let columnname = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.columnname) {columnname.set(INPUT.columnname);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return value;
  }
  async set_cell_type_column(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async set_optimize(INPUT) {
    let value = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.value) {value = INPUT.value;}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async get() {
    let value = new abap.types.Character({length: 4});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return value;
  }
  async set_color_column(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
}
abap.Classes['CL_SALV_COLUMNS_TABLE'] = cl_salv_columns_table;
export {cl_salv_columns_table};
//# sourceMappingURL=cl_salv_columns_table.clas.mjs.map