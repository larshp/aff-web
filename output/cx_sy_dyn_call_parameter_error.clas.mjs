const {cx_sy_dyn_call_error} = await import("./cx_sy_dyn_call_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dyn_call_parameter_error.clas.abap
class cx_sy_dyn_call_parameter_error extends cx_sy_dyn_call_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.parameter = new abap.types.String({qualifiedName: "STRING"});
    return this;
  }
}
abap.Classes['CX_SY_DYN_CALL_PARAMETER_ERROR'] = cx_sy_dyn_call_parameter_error;
export {cx_sy_dyn_call_parameter_error};
//# sourceMappingURL=cx_sy_dyn_call_parameter_error.clas.mjs.map