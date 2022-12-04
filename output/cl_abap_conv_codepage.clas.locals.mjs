const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_conv_codepage.clas.locals_imp.abap
class lcl_in {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_IN"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_abap_conv_in$convert(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let source = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({input: source, data: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_IN'] = lcl_in;
class lcl_out {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_ABAP_CONV_OUT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_abap_conv_out$convert(INPUT) {
    let result = new abap.types.XString({qualifiedName: "XSTRING"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})));
    await conv.get().convert({data: source, buffer: result});
    return result;
  }
}
abap.Classes['CLAS-CL_ABAP_CONV_CODEPAGE-LCL_OUT'] = lcl_out;
export {lcl_in, lcl_out};
//# sourceMappingURL=cl_abap_conv_codepage.clas.locals.mjs.map