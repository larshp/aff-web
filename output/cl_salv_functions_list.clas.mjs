const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_functions_list.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_salv_functions_list {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async set_all() {
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
}
abap.Classes['CL_SALV_FUNCTIONS_LIST'] = cl_salv_functions_list;
export {cl_salv_functions_list};
//# sourceMappingURL=cl_salv_functions_list.clas.mjs.map