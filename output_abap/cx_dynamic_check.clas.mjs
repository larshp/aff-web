const {cx_root} = await import("./cx_root.clas.mjs");
// cx_dynamic_check.clas.abap
class cx_dynamic_check extends cx_root {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_DYNAMIC_CHECK'] = cx_dynamic_check;
export {cx_dynamic_check};
//# sourceMappingURL=cx_dynamic_check.clas.mjs.map