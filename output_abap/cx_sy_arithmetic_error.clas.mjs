const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_arithmetic_error.clas.abap
class cx_sy_arithmetic_error extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_ARITHMETIC_ERROR'] = cx_sy_arithmetic_error;
export {cx_sy_arithmetic_error};
//# sourceMappingURL=cx_sy_arithmetic_error.clas.mjs.map