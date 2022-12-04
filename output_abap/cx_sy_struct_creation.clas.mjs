const {cx_sy_type_creation} = await import("./cx_sy_type_creation.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_struct_creation.clas.abap
class cx_sy_struct_creation extends cx_sy_type_creation {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_STRUCT_CREATION'] = cx_sy_struct_creation;
export {cx_sy_struct_creation};
//# sourceMappingURL=cx_sy_struct_creation.clas.mjs.map