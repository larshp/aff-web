const {cx_sy_arithmetic_error} = await import("./cx_sy_arithmetic_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_zerodivide.clas.abap
class cx_sy_zerodivide extends cx_sy_arithmetic_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_ZERODIVIDE'] = cx_sy_zerodivide;
export {cx_sy_zerodivide};
//# sourceMappingURL=cx_sy_zerodivide.clas.mjs.map