const {cx_salv_static_check} = await import("./cx_salv_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_data_error.clas.abap
class cx_salv_data_error extends cx_salv_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SALV_DATA_ERROR'] = cx_salv_data_error;
export {cx_salv_data_error};
//# sourceMappingURL=cx_salv_data_error.clas.mjs.map