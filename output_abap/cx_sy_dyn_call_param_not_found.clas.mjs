const {cx_sy_dyn_call_parameter_error} = await import("./cx_sy_dyn_call_parameter_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dyn_call_param_not_found.clas.abap
class cx_sy_dyn_call_param_not_found extends cx_sy_dyn_call_parameter_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_DYN_CALL_PARAM_NOT_FOUND'] = cx_sy_dyn_call_param_not_found;
export {cx_sy_dyn_call_param_not_found};
//# sourceMappingURL=cx_sy_dyn_call_param_not_found.clas.mjs.map