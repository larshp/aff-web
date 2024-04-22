const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcx_aff_tools.clas.abap
class zcx_aff_tools extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCX_AFF_TOOLS';
  static IMPLEMENTED_INTERFACES = ["IF_T100_DYN_MSG","IF_T100_MESSAGE","IF_MESSAGE","IF_MESSAGE"];
  static ATTRIBUTES = {"IF_T100_DYN_MSG~MSGTY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_DYN_MSG~MSGV1": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_DYN_MSG~MSGV2": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_DYN_MSG~MSGV3": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_DYN_MSG~MSGV4": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_MESSAGE~T100KEY": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});}, "visibility": "U", "is_constant": " ", "is_class": " "},
  "IF_T100_MESSAGE~DEFAULT_TEXTID": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"CONSTRUCTOR": {"visibility": "U", "parameters": {"MESSAGE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TEXTID": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});}, "is_optional": " "}, "PREVIOUS": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    if (this.if_t100_dyn_msg$msgty === undefined) this.if_t100_dyn_msg$msgty = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    if (this.if_t100_dyn_msg$msgv1 === undefined) this.if_t100_dyn_msg$msgv1 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (this.if_t100_dyn_msg$msgv2 === undefined) this.if_t100_dyn_msg$msgv2 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (this.if_t100_dyn_msg$msgv3 === undefined) this.if_t100_dyn_msg$msgv3 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (this.if_t100_dyn_msg$msgv4 === undefined) this.if_t100_dyn_msg$msgv4 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    this.if_t100_message$default_textid = abap.Classes['IF_T100_MESSAGE'].if_t100_message$default_textid;
    if (this.if_t100_message$t100key === undefined) this.if_t100_message$t100key = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});
  }
  async constructor_(INPUT) {
    let message = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message) {message.set(INPUT.message);}
    let textid = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    await super.constructor_({previous: previous});
    abap.statements.clear(this.me.get().textid);
    if (abap.compare.initial(message) === false) {
      await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_clike({text: message});
      abap.statements.clear(this.if_t100_message$t100key);
      this.if_t100_message$t100key.get().attr1.set(new abap.types.Character(21).set('IF_T100_DYN_MSG~MSGV1'));
      this.if_t100_message$t100key.get().attr2.set(new abap.types.Character(21).set('IF_T100_DYN_MSG~MSGV2'));
      this.if_t100_message$t100key.get().attr3.set(new abap.types.Character(21).set('IF_T100_DYN_MSG~MSGV3'));
      this.if_t100_message$t100key.get().attr4.set(new abap.types.Character(21).set('IF_T100_DYN_MSG~MSGV4'));
      this.if_t100_dyn_msg$msgty.set(new abap.types.Character(1).set('E'));
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
zcx_aff_tools.if_t100_message$default_textid = new abap.types.Structure({"msgid": new abap.types.Character(20, {"qualifiedName":"SYMSGID","ddicName":"SYMSGID"}), "msgno": new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), "attr1": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr2": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr3": new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), "attr4": new abap.types.String({qualifiedName: "SCX_ATTRNAME"})}, undefined, undefined, {}, {});
zcx_aff_tools.if_t100_message$default_textid.get().msgid.set('AB');
zcx_aff_tools.if_t100_message$default_textid.get().msgno.set('123');
zcx_aff_tools.if_t100_message$default_textid.get().attr1.set('');
zcx_aff_tools.if_t100_message$default_textid.get().attr2.set('');
zcx_aff_tools.if_t100_message$default_textid.get().attr3.set('');
zcx_aff_tools.if_t100_message$default_textid.get().attr4.set('');
export {zcx_aff_tools};
//# sourceMappingURL=zcx_aff_tools.clas.mjs.map