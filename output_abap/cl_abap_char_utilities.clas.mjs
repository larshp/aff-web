const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_char_utilities.clas.abap
class cl_abap_char_utilities {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.byte_order_mark_utf8 = cl_abap_char_utilities.byte_order_mark_utf8;
    this.byte_order_mark_big = cl_abap_char_utilities.byte_order_mark_big;
    this.byte_order_mark_little = cl_abap_char_utilities.byte_order_mark_little;
    this.cr_lf = cl_abap_char_utilities.cr_lf;
    this.charsize = cl_abap_char_utilities.charsize;
    this.horizontal_tab = cl_abap_char_utilities.horizontal_tab;
    this.vertical_tab = cl_abap_char_utilities.vertical_tab;
    this.form_feed = cl_abap_char_utilities.form_feed;
    this.backspace = cl_abap_char_utilities.backspace;
    this.minchar = cl_abap_char_utilities.minchar;
    this.maxchar = cl_abap_char_utilities.maxchar;
    this.newline = cl_abap_char_utilities.newline;
    return this;
  }
  async class_constructor() {
    return cl_abap_char_utilities.class_constructor();
  }
  static async class_constructor() {
    cl_abap_char_utilities.cr_lf.set("\r\n");
    cl_abap_char_utilities.horizontal_tab.set("\t");
    cl_abap_char_utilities.vertical_tab.set("\v");
    cl_abap_char_utilities.form_feed.set("\f");
    cl_abap_char_utilities.backspace.set("\b");
    cl_abap_char_utilities.newline.set("\n");
    cl_abap_char_utilities.minchar.set(Buffer.from("0000", "hex").toString());
    cl_abap_char_utilities.maxchar.set(Buffer.from("FDFF", "hex").toString());
  }
  async get_simple_spaces_for_cur_cp() {
    return cl_abap_char_utilities.get_simple_spaces_for_cur_cp();
  }
  static async get_simple_spaces_for_cur_cp() {
    let s_str = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.concatenate({source: [new abap.types.String().set(` `), cl_abap_char_utilities.horizontal_tab, cl_abap_char_utilities.vertical_tab, cl_abap_char_utilities.newline, cl_abap_char_utilities.cr_lf.getOffset({length: 1}), cl_abap_char_utilities.form_feed], target: s_str});
    return s_str;
  }
}
abap.Classes['CL_ABAP_CHAR_UTILITIES'] = cl_abap_char_utilities;
cl_abap_char_utilities.byte_order_mark_utf8 = new abap.types.Hex({length: 3});
cl_abap_char_utilities.byte_order_mark_utf8.set('EFBBBF');
cl_abap_char_utilities.byte_order_mark_big = new abap.types.Hex({length: 2});
cl_abap_char_utilities.byte_order_mark_big.set('FEFF');
cl_abap_char_utilities.byte_order_mark_little = new abap.types.Hex({length: 2});
cl_abap_char_utilities.byte_order_mark_little.set('FFFE');
cl_abap_char_utilities.cr_lf = new abap.types.Character(2, {});
cl_abap_char_utilities.cr_lf.set('__');
cl_abap_char_utilities.charsize = new abap.types.Integer({qualifiedName: "I"});
cl_abap_char_utilities.charsize.set(2);
cl_abap_char_utilities.horizontal_tab = new abap.types.Character(1, {});
cl_abap_char_utilities.horizontal_tab.set('_');
cl_abap_char_utilities.vertical_tab = new abap.types.Character(1, {});
cl_abap_char_utilities.vertical_tab.set('_');
cl_abap_char_utilities.form_feed = new abap.types.Character(1, {});
cl_abap_char_utilities.form_feed.set('_');
cl_abap_char_utilities.backspace = new abap.types.Character(1, {});
cl_abap_char_utilities.backspace.set('_');
cl_abap_char_utilities.minchar = new abap.types.Character(1, {});
cl_abap_char_utilities.minchar.set('_');
cl_abap_char_utilities.maxchar = new abap.types.Character(1, {});
cl_abap_char_utilities.maxchar.set('_');
cl_abap_char_utilities.newline = new abap.types.Character(1, {});
cl_abap_char_utilities.newline.set('_');
await cl_abap_char_utilities.class_constructor();
export {cl_abap_char_utilities};
//# sourceMappingURL=cl_abap_char_utilities.clas.mjs.map