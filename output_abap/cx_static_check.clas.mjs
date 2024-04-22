const {cx_root} = await import("./cx_root.clas.mjs");
// cx_static_check.clas.abap
class cx_static_check extends cx_root {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    let textid = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY");
    if (INPUT && INPUT.textid) {textid.set(INPUT.textid);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    let msgv1 = new abap.types.Character(1, {});
    if (INPUT && INPUT.msgv1) {msgv1 = INPUT.msgv1;}
    let msgv2 = new abap.types.Character(1, {});
    if (INPUT && INPUT.msgv2) {msgv2 = INPUT.msgv2;}
    let msgv3 = new abap.types.Character(1, {});
    if (INPUT && INPUT.msgv3) {msgv3 = INPUT.msgv3;}
    let msgv4 = new abap.types.Character(1, {});
    if (INPUT && INPUT.msgv4) {msgv4 = INPUT.msgv4;}
    await super.constructor_({textid: textid, previous: previous});
    return this;
  }
}
abap.Classes['CX_STATIC_CHECK'] = cx_static_check;
export {cx_static_check};
//# sourceMappingURL=cx_static_check.clas.mjs.map