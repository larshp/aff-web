const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_data_access_error.clas.abap
class cx_sy_data_access_error extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_DATA_ACCESS_ERROR'] = cx_sy_data_access_error;
export {cx_sy_data_access_error};
//# sourceMappingURL=cx_sy_data_access_error.clas.mjs.map