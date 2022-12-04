const {cx_root} = await import("./cx_root.clas.mjs");
// cl_message_helper.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_100 = new abap.types.Integer().set(100);
const constant_150 = new abap.types.Integer().set(150);
const constant_50 = new abap.types.Integer().set(50);
class cl_message_helper {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.gc_fallback = cl_message_helper.gc_fallback;
    return this;
  }
  async get_text_for_message(INPUT) {
    return cl_message_helper.get_text_for_message(INPUT);
  }
  static async get_text_for_message(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let text = new abap.types.ABAPObject({qualifiedName: "IF_MESSAGE"});
    if (INPUT && INPUT.text) {text.set(INPUT.text);}
    let lv_msgid = new abap.types.Character({length: 20, qualifiedName: "sy-msgid"});
    let lv_msgno = new abap.types.Numc({length: 3, qualifiedName: "sy-msgno"});
    let lv_msgv1 = new abap.types.Character({length: 50, qualifiedName: "sy-msgv1"});
    let lv_msgv2 = new abap.types.Character({length: 50, qualifiedName: "sy-msgv2"});
    let lv_msgv3 = new abap.types.Character({length: 50, qualifiedName: "sy-msgv3"});
    let lv_msgv4 = new abap.types.Character({length: 50, qualifiedName: "sy-msgv4"});
    if (text.get().if_t100_message$t100key === undefined) { result.set(this.gc_fallback); return result; };
    lv_msgid.set(text.get().if_t100_message$t100key.get().msgid);
    lv_msgno.set(text.get().if_t100_message$t100key.get().msgno);
    lv_msgv1.set(text.get()[text.get().if_t100_message$t100key.get().attr1.get().toLowerCase().replace("~", "$")] ? text.get()[text.get().if_t100_message$t100key.get().attr1.get().toLowerCase().replace("~", "$")].get() : "");
    lv_msgv2.set(text.get()[text.get().if_t100_message$t100key.get().attr2.get().toLowerCase().replace("~", "$")] ? text.get()[text.get().if_t100_message$t100key.get().attr2.get().toLowerCase().replace("~", "$")].get() : "");
    lv_msgv3.set(text.get()[text.get().if_t100_message$t100key.get().attr3.get().toLowerCase().replace("~", "$")] ? text.get()[text.get().if_t100_message$t100key.get().attr3.get().toLowerCase().replace("~", "$")].get() : "");
    lv_msgv4.set(text.get()[text.get().if_t100_message$t100key.get().attr4.get().toLowerCase().replace("~", "$")] ? text.get()[text.get().if_t100_message$t100key.get().attr4.get().toLowerCase().replace("~", "$")].get() : "");
    await abap.statements.message({into: result, id: lv_msgid, type: new abap.types.Character({length: 1}).set('I'), number: lv_msgno, with: [lv_msgv1,lv_msgv2,lv_msgv3,lv_msgv4]});
    return result;
  }
  async set_msg_vars_for_if_msg(INPUT) {
    return cl_message_helper.set_msg_vars_for_if_msg(INPUT);
  }
  static async set_msg_vars_for_if_msg(INPUT) {
    let text = new abap.types.ABAPObject({qualifiedName: "IF_MESSAGE"});
    if (INPUT && INPUT.text) {text.set(INPUT.text);}
    let string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string) {string = INPUT.string;}
    if (abap.compare.initial(text)) {
      throw await (new abap.Classes['CX_SY_MESSAGE_ILLEGAL_TEXT']()).constructor_();
    }
    string.set((await this.get_text_for_message({text: text})));
    if (abap.compare.ne(string, cl_message_helper.gc_fallback)) {
      abap.statements.clear(abap.builtin.sy.get().msgty);
      return;
    }
    string.set((await text.get().if_message$get_text()));
    if (abap.compare.initial(string)) {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    }
    await this.set_msg_vars_for_clike({text: string});
  }
  async set_msg_vars_for_clike(INPUT) {
    return cl_message_helper.set_msg_vars_for_clike(INPUT);
  }
  static async set_msg_vars_for_clike(INPUT) {
    let text = new abap.types.Character();
    if (INPUT && INPUT.text) {text = INPUT.text;}
    abap.builtin.sy.get().msgid.set(new abap.types.Character({length: 2}).set('00'));
    abap.builtin.sy.get().msgno.set(new abap.types.Character({length: 3}).set('001'));
    abap.builtin.sy.get().msgv1.set(text);
    if (abap.compare.gt(abap.builtin.strlen({val: text}), constant_50)) {
      abap.builtin.sy.get().msgv2.set(text.getOffset({offset: 50}));
    }
    if (abap.compare.gt(abap.builtin.strlen({val: text}), constant_100)) {
      abap.builtin.sy.get().msgv3.set(text.getOffset({offset: 100}));
    }
    if (abap.compare.gt(abap.builtin.strlen({val: text}), constant_150)) {
      abap.builtin.sy.get().msgv4.set(text.getOffset({offset: 150}));
    }
  }
}
abap.Classes['CL_MESSAGE_HELPER'] = cl_message_helper;
cl_message_helper.gc_fallback = new abap.types.String({qualifiedName: "STRING"});
cl_message_helper.gc_fallback.set('An exception was raised.');
export {cl_message_helper};
//# sourceMappingURL=cl_message_helper.clas.mjs.map