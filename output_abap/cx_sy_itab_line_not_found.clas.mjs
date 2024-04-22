const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_itab_line_not_found.clas.abap
class cx_sy_itab_line_not_found extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND'] = cx_sy_itab_line_not_found;
export {cx_sy_itab_line_not_found};
//# sourceMappingURL=cx_sy_itab_line_not_found.clas.mjs.map