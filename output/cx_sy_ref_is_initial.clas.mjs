const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_ref_is_initial.clas.abap
class cx_sy_ref_is_initial extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_REF_IS_INITIAL'] = cx_sy_ref_is_initial;
export {cx_sy_ref_is_initial};
//# sourceMappingURL=cx_sy_ref_is_initial.clas.mjs.map