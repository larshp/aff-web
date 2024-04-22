const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_strg_par_val.clas.abap
class cx_sy_strg_par_val extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_STRG_PAR_VAL'] = cx_sy_strg_par_val;
export {cx_sy_strg_par_val};
//# sourceMappingURL=cx_sy_strg_par_val.clas.mjs.map