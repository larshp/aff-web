// cx_root.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_32 = new abap.types.Integer().set(32);
class cx_root extends Error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_MESSAGE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    this.textid = new abap.types.Character({length: 32, qualifiedName: "undefined"});
    this.get_longtext = this.if_message$get_longtext;
    this.get_text = this.if_message$get_text;
    let textid = new abap.types.Character({length: 32, qualifiedName: "undefined"});
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    this.me.get().previous.set(previous);
    this.me.get().textid.set(textid);
    return this;
  }
  async get_source_position(INPUT) {
    let program_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.program_name) {program_name = INPUT.program_name;}
    let include_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.include_name) {include_name = INPUT.include_name;}
    let source_line = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source_line) {source_line = INPUT.source_line;}
    abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));
  }
  async if_message$get_longtext(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let preserve_newlines = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.preserve_newlines) {preserve_newlines = INPUT.preserve_newlines;}
    result.set(new abap.types.Character({length: 29}).set('OpenAbapGetLongtextDummyValue'));
    return result;
  }
  async if_message$get_text() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await abap.Classes['CL_MESSAGE_HELPER'].get_text_for_message({text: this.me})));
    return result;
  }
}
abap.Classes['CX_ROOT'] = cx_root;
export {cx_root};
//# sourceMappingURL=cx_root.clas.mjs.map