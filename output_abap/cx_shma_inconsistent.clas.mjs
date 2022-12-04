const {cx_shma_dynamic} = await import("./cx_shma_dynamic.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shma_inconsistent.clas.abap
class cx_shma_inconsistent extends cx_shma_dynamic {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHMA_INCONSISTENT'] = cx_shma_inconsistent;
export {cx_shma_inconsistent};
//# sourceMappingURL=cx_shma_inconsistent.clas.mjs.map