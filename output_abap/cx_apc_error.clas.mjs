const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_apc_error.clas.abap
class cx_apc_error extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_APC_ERROR'] = cx_apc_error;
export {cx_apc_error};
//# sourceMappingURL=cx_apc_error.clas.mjs.map