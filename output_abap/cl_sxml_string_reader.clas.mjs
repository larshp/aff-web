await import("./cl_sxml_string_reader.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_sxml_string_reader.clas.abap
class cl_sxml_string_reader {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create(INPUT) {
    return cl_sxml_string_reader.create(INPUT);
  }
  static async create(INPUT) {
    let reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER"});
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    reader.set(await (new abap.Classes['CLAS-CL_SXML_STRING_READER-LCL_READER']()).constructor_({iv_json: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_from({source: data}))}));
    return reader;
  }
}
abap.Classes['CL_SXML_STRING_READER'] = cl_sxml_string_reader;
export {cl_sxml_string_reader};
//# sourceMappingURL=cl_sxml_string_reader.clas.mjs.map