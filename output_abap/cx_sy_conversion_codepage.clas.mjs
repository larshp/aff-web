const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_conversion_codepage.clas.abap
class cx_sy_conversion_codepage extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.source_extract = new abap.types.XString({qualifiedName: "XSTRING"});
    return this;
  }
}
abap.Classes['CX_SY_CONVERSION_CODEPAGE'] = cx_sy_conversion_codepage;
export {cx_sy_conversion_codepage};
//# sourceMappingURL=cx_sy_conversion_codepage.clas.mjs.map