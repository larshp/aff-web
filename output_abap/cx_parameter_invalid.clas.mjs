const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_parameter_invalid.clas.abap
class cx_parameter_invalid extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_PARAMETER_INVALID'] = cx_parameter_invalid;
export {cx_parameter_invalid};
//# sourceMappingURL=cx_parameter_invalid.clas.mjs.map