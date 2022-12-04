const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_o2_xslt_error.clas.abap
class cx_o2_xslt_error extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_O2_XSLT_ERROR'] = cx_o2_xslt_error;
export {cx_o2_xslt_error};
//# sourceMappingURL=cx_o2_xslt_error.clas.mjs.map