const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_oo_clif_not_exists.clas.abap
class cx_oo_clif_not_exists extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_OO_CLIF_NOT_EXISTS'] = cx_oo_clif_not_exists;
export {cx_oo_clif_not_exists};
//# sourceMappingURL=cx_oo_clif_not_exists.clas.mjs.map