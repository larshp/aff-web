const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_codepage.clas.abap
class cl_abap_codepage {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async convert_to(INPUT) {
    return cl_abap_codepage.convert_to(INPUT);
  }
  static async convert_to(INPUT) {
    let output = new abap.types.XString({qualifiedName: "XSTRING"});
    let codepage = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.codepage) {codepage.set(INPUT.codepage);}
    let source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({data: source, buffer: output});
    return output;
  }
  async convert_from(INPUT) {
    return cl_abap_codepage.convert_from(INPUT);
  }
  static async convert_from(INPUT) {
    let output = new abap.types.String({qualifiedName: "STRING"});
    let codepage = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.codepage) {codepage.set(INPUT.codepage);}
    let source = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE"});
    let data = new abap.types.String({qualifiedName: "STRING"});
    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({input: source, data: output});
    return output;
  }
  async sap_codepage(INPUT) {
    return cl_abap_codepage.sap_codepage(INPUT);
  }
  static async sap_codepage(INPUT) {
    let codepage = new abap.types.Character({length: 20, qualifiedName: "abap_encoding"});
    let encoding = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}
    abap.statements.assert(abap.compare.eq(encoding, new abap.types.Character({length: 8}).set('UTF-16LE')));
    codepage.set(new abap.types.Character({length: 4}).set('4103'));
    return codepage;
  }
}
abap.Classes['CL_ABAP_CODEPAGE'] = cl_abap_codepage;
export {cl_abap_codepage};
//# sourceMappingURL=cl_abap_codepage.clas.mjs.map