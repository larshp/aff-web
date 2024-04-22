const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_transformation_error.clas.abap
class cx_transformation_error extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_TRANSFORMATION_ERROR'] = cx_transformation_error;
export {cx_transformation_error};
//# sourceMappingURL=cx_transformation_error.clas.mjs.map