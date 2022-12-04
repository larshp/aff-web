const {cx_sy_conversion_error} = await import("./cx_sy_conversion_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_conversion_data_loss.clas.abap
class cx_sy_conversion_data_loss extends cx_sy_conversion_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_CONVERSION_DATA_LOSS'] = cx_sy_conversion_data_loss;
export {cx_sy_conversion_data_loss};
//# sourceMappingURL=cx_sy_conversion_data_loss.clas.mjs.map