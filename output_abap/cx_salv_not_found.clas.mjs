const {cx_salv_access_error} = await import("./cx_salv_access_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_salv_not_found.clas.abap
class cx_salv_not_found extends cx_salv_access_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SALV_NOT_FOUND'] = cx_salv_not_found;
export {cx_salv_not_found};
//# sourceMappingURL=cx_salv_not_found.clas.mjs.map