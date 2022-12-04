const {cx_sxml_error} = await import("./cx_sxml_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sxml_parse_error.clas.abap
class cx_sxml_parse_error extends cx_sxml_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.xml_offset = new abap.types.Integer({qualifiedName: "I"});
    let xml_offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.xml_offset) {xml_offset.set(INPUT.xml_offset);}
    await super.constructor_();
    this.me.get().xml_offset.set(xml_offset);
    return this;
  }
}
abap.Classes['CX_SXML_PARSE_ERROR'] = cx_sxml_parse_error;
export {cx_sxml_parse_error};
//# sourceMappingURL=cx_sxml_parse_error.clas.mjs.map