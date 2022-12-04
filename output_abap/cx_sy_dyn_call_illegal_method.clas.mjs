const {cx_sy_dyn_call_error} = await import("./cx_sy_dyn_call_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dyn_call_illegal_method.clas.abap
class cx_sy_dyn_call_illegal_method extends cx_sy_dyn_call_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.private_method = cx_sy_dyn_call_illegal_method.private_method;
    let textid = new abap.types.Character({length: 32, qualifiedName: "undefined"});
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    let classname = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.classname) {classname.set(INPUT.classname);}
    let methodname = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.methodname) {methodname.set(INPUT.methodname);}
    await super.constructor_({previous: previous});
    return this;
  }
}
abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] = cx_sy_dyn_call_illegal_method;
cx_sy_dyn_call_illegal_method.private_method = new abap.types.Character();
cx_sy_dyn_call_illegal_method.private_method.set('1');
export {cx_sy_dyn_call_illegal_method};
//# sourceMappingURL=cx_sy_dyn_call_illegal_method.clas.mjs.map