const {cx_sy_dyn_call_error} = await import("./cx_sy_dyn_call_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dyn_call_illegal_class.clas.abap
class cx_sy_dyn_call_illegal_class extends cx_sy_dyn_call_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'] = cx_sy_dyn_call_illegal_class;
export {cx_sy_dyn_call_illegal_class};
//# sourceMappingURL=cx_sy_dyn_call_illegal_class.clas.mjs.map