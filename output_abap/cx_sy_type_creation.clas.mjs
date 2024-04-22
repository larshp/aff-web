const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_type_creation.clas.abap
class cx_sy_type_creation extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_TYPE_CREATION'] = cx_sy_type_creation;
export {cx_sy_type_creation};
//# sourceMappingURL=cx_sy_type_creation.clas.mjs.map