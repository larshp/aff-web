await import("./cl_ixml.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_ixml.clas.abap
class cl_ixml {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create() {
    return cl_ixml.create();
  }
  static async create() {
    let xml = new abap.types.ABAPObject({qualifiedName: "IF_IXML"});
    xml.set(await (new abap.Classes['CL_IXML']()).constructor_());
    return xml;
  }
  async if_ixml$create_encoding(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ENCODING"});
    let byte_order = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.byte_order) {byte_order.set(INPUT.byte_order);}
    let character_set = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.character_set) {character_set.set(INPUT.character_set);}
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_ENCODING']()).constructor_());
    return rval;
  }
  async if_ixml$create_document() {
    let doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    doc.set(await (new abap.Classes['CLAS-CL_IXML-LCL_DOCUMENT']()).constructor_());
    return doc;
  }
  async if_ixml$create_stream_factory() {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_STREAM_FACTORY"});
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_STREAM_FACTORY']()).constructor_());
    return stream;
  }
  async if_ixml$create_renderer(INPUT) {
    let renderer = new abap.types.ABAPObject({qualifiedName: "IF_IXML_RENDERER"});
    let ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    if (INPUT && INPUT.ostream) {ostream.set(INPUT.ostream);}
    let document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    renderer.set(await (new abap.Classes['CLAS-CL_IXML-LCL_RENDERER']()).constructor_({ostream: ostream, document: document}));
    return renderer;
  }
  async if_ixml$create_parser(INPUT) {
    let parser = new abap.types.ABAPObject({qualifiedName: "IF_IXML_PARSER"});
    let stream_factory = new abap.types.ABAPObject({qualifiedName: "IF_IXML_STREAM_FACTORY"});
    if (INPUT && INPUT.stream_factory) {stream_factory.set(INPUT.stream_factory);}
    let istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
    if (INPUT && INPUT.istream) {istream.set(INPUT.istream);}
    let document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    parser.set(await (new abap.Classes['CLAS-CL_IXML-LCL_PARSER']()).constructor_({istream: istream, document: document}));
    return parser;
  }
}
abap.Classes['CL_IXML'] = cl_ixml;
export {cl_ixml};
//# sourceMappingURL=cl_ixml.clas.mjs.map