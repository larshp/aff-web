const {cx_sy_dyn_call_error} = await import("./cx_sy_dyn_call_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dyn_call_illegal_func.clas.abap
class cx_sy_dyn_call_illegal_func extends cx_sy_dyn_call_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_DYN_CALL_ILLEGAL_FUNC'] = cx_sy_dyn_call_illegal_func;
export {cx_sy_dyn_call_illegal_func};
//# sourceMappingURL=cx_sy_dyn_call_illegal_func.clas.mjs.map