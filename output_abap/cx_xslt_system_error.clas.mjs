const {cx_xslt_exception} = await import("./cx_xslt_exception.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_xslt_system_error.clas.abap
class cx_xslt_system_error extends cx_xslt_exception {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_XSLT_SYSTEM_ERROR'] = cx_xslt_system_error;
export {cx_xslt_system_error};
//# sourceMappingURL=cx_xslt_system_error.clas.mjs.map