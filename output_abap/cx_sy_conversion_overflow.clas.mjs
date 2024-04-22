const {cx_sy_conversion_error} = await import("./cx_sy_conversion_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_conversion_overflow.clas.abap
class cx_sy_conversion_overflow extends cx_sy_conversion_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_CONVERSION_OVERFLOW'] = cx_sy_conversion_overflow;
export {cx_sy_conversion_overflow};
//# sourceMappingURL=cx_sy_conversion_overflow.clas.mjs.map