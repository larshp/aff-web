const {cx_sy_struct_creation} = await import("./cx_sy_struct_creation.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_struct_attributes.clas.abap
class cx_sy_struct_attributes extends cx_sy_struct_creation {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_STRUCT_ATTRIBUTES'] = cx_sy_struct_attributes;
export {cx_sy_struct_attributes};
//# sourceMappingURL=cx_sy_struct_attributes.clas.mjs.map