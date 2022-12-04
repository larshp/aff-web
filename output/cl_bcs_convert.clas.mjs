const {cx_root} = await import("./cx_root.clas.mjs");
// cl_bcs_convert.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_bcs_convert {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async string_to_soli(INPUT) {
    return cl_bcs_convert.string_to_soli(INPUT);
  }
  static async string_to_soli(INPUT) {
    let et_soli = new abap.types.Table(new abap.types.Structure({line: new abap.types.Character({length: 255, qualifiedName: "SO_TEXT255"})}, "SOLI"), {"withHeader":false}, "SOLI_TAB");
    let iv_string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_string) {iv_string.set(INPUT.iv_string);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return et_soli;
  }
  async xstring_to_solix(INPUT) {
    return cl_bcs_convert.xstring_to_solix(INPUT);
  }
  static async xstring_to_solix(INPUT) {
    let et_solix = new abap.types.Table(new abap.types.Structure({line: new abap.types.Hex({length: 255})}, "SOLIX"), {"withHeader":false}, "SOLIX_TAB");
    let iv_xstring = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.iv_xstring) {iv_xstring.set(INPUT.iv_xstring);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return et_solix;
  }
}
abap.Classes['CL_BCS_CONVERT'] = cl_bcs_convert;
export {cl_bcs_convert};
//# sourceMappingURL=cl_bcs_convert.clas.mjs.map