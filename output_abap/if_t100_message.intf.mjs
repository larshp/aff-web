// if_t100_message.intf.abap
class if_t100_message {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_T100_MESSAGE'] = if_t100_message;
if_t100_message.if_t100_message$default_textid = new abap.types.Structure({msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}), attr1: new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), attr2: new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), attr3: new abap.types.String({qualifiedName: "SCX_ATTRNAME"}), attr4: new abap.types.String({qualifiedName: "SCX_ATTRNAME"})});
if_t100_message.if_t100_message$default_textid.get().msgid.set('AB');
if_t100_message.if_t100_message$default_textid.get().msgno.set('123');
if_t100_message.if_t100_message$default_textid.get().attr1.set('');
if_t100_message.if_t100_message$default_textid.get().attr2.set('');
if_t100_message.if_t100_message$default_textid.get().attr3.set('');
if_t100_message.if_t100_message$default_textid.get().attr4.set('');
export {if_t100_message};
//# sourceMappingURL=if_t100_message.intf.mjs.map