const {cx_sy_itab_error} = await import("./cx_sy_itab_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_itab_duplicate_key.clas.abap
class cx_sy_itab_duplicate_key extends cx_sy_itab_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_ITAB_DUPLICATE_KEY'] = cx_sy_itab_duplicate_key;
export {cx_sy_itab_duplicate_key};
//# sourceMappingURL=cx_sy_itab_duplicate_key.clas.mjs.map