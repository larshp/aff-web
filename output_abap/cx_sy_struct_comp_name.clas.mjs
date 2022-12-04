const {cx_sy_struct_creation} = await import("./cx_sy_struct_creation.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_struct_comp_name.clas.abap
class cx_sy_struct_comp_name extends cx_sy_struct_creation {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SY_STRUCT_COMP_NAME'] = cx_sy_struct_comp_name;
export {cx_sy_struct_comp_name};
//# sourceMappingURL=cx_sy_struct_comp_name.clas.mjs.map