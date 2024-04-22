const {cx_transformation_error} = await import("./cx_transformation_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_xslt_runtime_error.clas.abap
class cx_xslt_runtime_error extends cx_transformation_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_XSLT_RUNTIME_ERROR'] = cx_xslt_runtime_error;
export {cx_xslt_runtime_error};
//# sourceMappingURL=cx_xslt_runtime_error.clas.mjs.map