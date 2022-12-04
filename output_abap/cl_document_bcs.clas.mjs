const {cx_root} = await import("./cx_root.clas.mjs");
// cl_document_bcs.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_document_bcs {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_DOCUMENT_BCS"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create_document(INPUT) {
    return cl_document_bcs.create_document(INPUT);
  }
  static async create_document(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "CL_DOCUMENT_BCS"});
    let i_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_type) {i_type.set(INPUT.i_type);}
    let i_subject = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_subject) {i_subject.set(INPUT.i_subject);}
    let i_text = new abap.types.Character({length: 4});
    if (INPUT && INPUT.i_text) {i_text = INPUT.i_text;}
    let i_length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.i_length) {i_length.set(INPUT.i_length);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return result;
  }
  async add_attachment(INPUT) {
    let i_attachment_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_attachment_type) {i_attachment_type.set(INPUT.i_attachment_type);}
    let i_attachment_subject = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_attachment_subject) {i_attachment_subject.set(INPUT.i_attachment_subject);}
    let i_attachment_size = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.i_attachment_size) {i_attachment_size.set(INPUT.i_attachment_size);}
    let i_att_content_text = new abap.types.Character({length: 4});
    if (INPUT && INPUT.i_att_content_text) {i_att_content_text = INPUT.i_att_content_text;}
    let i_att_content_hex = new abap.types.Character({length: 4});
    if (INPUT && INPUT.i_att_content_hex) {i_att_content_hex = INPUT.i_att_content_hex;}
    let i_attachment_header = new abap.types.Table(new abap.types.Structure({line: new abap.types.Character({length: 255, qualifiedName: "SO_TEXT255"})}, "SOLI"), {"withHeader":false}, "SOLI_TAB");
    if (INPUT && INPUT.i_attachment_header) {i_attachment_header.set(INPUT.i_attachment_header);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
}
abap.Classes['CL_DOCUMENT_BCS'] = cl_document_bcs;
export {cl_document_bcs};
//# sourceMappingURL=cl_document_bcs.clas.mjs.map