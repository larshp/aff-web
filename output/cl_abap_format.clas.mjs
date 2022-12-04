const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_format.clas.abap
const constant_12 = new abap.types.Integer().set(12);
const constant_24 = new abap.types.Integer().set(24);
const constant_4 = new abap.types.Integer().set(4);
const constant_5 = new abap.types.Integer().set(5);
class cl_abap_format {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.e_html_attr = cl_abap_format.e_html_attr;
    this.e_html_text = cl_abap_format.e_html_text;
    this.e_json_string = cl_abap_format.e_json_string;
    this.e_url = cl_abap_format.e_url;
    return this;
  }
}
abap.Classes['CL_ABAP_FORMAT'] = cl_abap_format;
cl_abap_format.e_html_attr = new abap.types.Integer({qualifiedName: "I"});
cl_abap_format.e_html_attr.set(5);
cl_abap_format.e_html_text = new abap.types.Integer({qualifiedName: "I"});
cl_abap_format.e_html_text.set(4);
cl_abap_format.e_json_string = new abap.types.Integer({qualifiedName: "I"});
cl_abap_format.e_json_string.set(24);
cl_abap_format.e_url = new abap.types.Integer({qualifiedName: "I"});
cl_abap_format.e_url.set(12);
export {cl_abap_format};
//# sourceMappingURL=cl_abap_format.clas.mjs.map