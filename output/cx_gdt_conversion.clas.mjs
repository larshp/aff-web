const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_gdt_conversion.clas.abap
class cx_gdt_conversion extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_GDT_CONVERSION'] = cx_gdt_conversion;
export {cx_gdt_conversion};
//# sourceMappingURL=cx_gdt_conversion.clas.mjs.map