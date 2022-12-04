const {cx_transformation_error} = await import("./cx_transformation_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_xslt_exception.clas.abap
class cx_xslt_exception extends cx_transformation_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_XSLT_EXCEPTION'] = cx_xslt_exception;
export {cx_xslt_exception};
//# sourceMappingURL=cx_xslt_exception.clas.mjs.map