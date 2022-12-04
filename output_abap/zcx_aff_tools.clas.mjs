const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcx_aff_tools.clas.abap
class zcx_aff_tools extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_T100_DYN_MSG","IF_T100_MESSAGE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.if_t100_dyn_msg$msgty = new abap.types.Character({qualifiedName: "SYMSGTY"});
    this.if_t100_dyn_msg$msgv1 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    this.if_t100_dyn_msg$msgv2 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    this.if_t100_dyn_msg$msgv3 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    this.if_t100_dyn_msg$msgv4 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    this.if_t100_message$t100key = new abap.types.Structure({msgid: new abap.types.Character({length: 20, qualifiedName: "SCX_T100KEY-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SCX_T100KEY-MSGNO"}), attr1: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR1"}), attr2: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR2"}), attr3: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR3"}), attr4: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR4"})}, "SCX_T100KEY");
    let message = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message) {message.set(INPUT.message);}
    let textid = new abap.types.Structure({msgid: new abap.types.Character({length: 20, qualifiedName: "SCX_T100KEY-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SCX_T100KEY-MSGNO"}), attr1: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR1"}), attr2: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR2"}), attr3: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR3"}), attr4: new abap.types.Character({length: 255, qualifiedName: "SCX_T100KEY-ATTR4"})}, "SCX_T100KEY");
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    await super.constructor_({previous: previous});
    abap.statements.clear(this.me.get().textid);
    if (abap.compare.initial(message) === false) {
      await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_clike({text: message});
      abap.statements.clear(this.if_t100_message$t100key);
      this.if_t100_message$t100key.get().attr1.set(new abap.types.Character({length: 21}).set('IF_T100_DYN_MSG~MSGV1'));
      this.if_t100_message$t100key.get().attr2.set(new abap.types.Character({length: 21}).set('IF_T100_DYN_MSG~MSGV2'));
      this.if_t100_message$t100key.get().attr3.set(new abap.types.Character({length: 21}).set('IF_T100_DYN_MSG~MSGV3'));
      this.if_t100_message$t100key.get().attr4.set(new abap.types.Character({length: 21}).set('IF_T100_DYN_MSG~MSGV4'));
      this.if_t100_dyn_msg$msgty.set(new abap.types.Character({length: 1}).set('E'));
      this.if_t100_dyn_msg$msgv1.set(abap.builtin.sy.get().msgv1);
      this.if_t100_dyn_msg$msgv2.set(abap.builtin.sy.get().msgv2);
      this.if_t100_dyn_msg$msgv3.set(abap.builtin.sy.get().msgv3);
      this.if_t100_dyn_msg$msgv4.set(abap.builtin.sy.get().msgv4);
    } else {
      this.if_t100_message$t100key.set(textid);
    }
    return this;
  }
}
abap.Classes['ZCX_AFF_TOOLS'] = zcx_aff_tools;
export {zcx_aff_tools};
//# sourceMappingURL=zcx_aff_tools.clas.mjs.map