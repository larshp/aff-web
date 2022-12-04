const {cx_root} = await import("./cx_root.clas.mjs");
// cx_no_check.clas.abap
class cx_no_check extends cx_root {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    await super.constructor_({previous: previous});
    return this;
  }
}
abap.Classes['CX_NO_CHECK'] = cx_no_check;
export {cx_no_check};
//# sourceMappingURL=cx_no_check.clas.mjs.map