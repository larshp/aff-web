const {cx_sy_data_access_error} = await import("./cx_sy_data_access_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_range_out_of_bounds.clas.abap
class cx_sy_range_out_of_bounds extends cx_sy_data_access_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_RANGE_OUT_OF_BOUNDS'] = cx_sy_range_out_of_bounds;
export {cx_sy_range_out_of_bounds};
//# sourceMappingURL=cx_sy_range_out_of_bounds.clas.mjs.map