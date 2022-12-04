const {cx_salv_error} = await import("./cx_salv_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_static_check.clas.abap
class cx_salv_static_check extends cx_salv_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SALV_STATIC_CHECK'] = cx_salv_static_check;
export {cx_salv_static_check};
//# sourceMappingURL=cx_salv_static_check.clas.mjs.map