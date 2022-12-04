const {cx_root} = await import("./cx_root.clas.mjs");
// cl_bcs.clas.abap
class cl_bcs {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async set_document(INPUT) {
    let i_document = new abap.types.ABAPObject({qualifiedName: "IF_DOCUMENT_BCS"});
    if (INPUT && INPUT.i_document) {i_document.set(INPUT.i_document);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_send_immediately(INPUT) {
    let i_send_immediately = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_send_immediately) {i_send_immediately = INPUT.i_send_immediately;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_message_subject(INPUT) {
    let ip_subject = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.ip_subject) {ip_subject.set(INPUT.ip_subject);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_sender(INPUT) {
    let i_sender = new abap.types.ABAPObject({qualifiedName: "IF_SENDER_BCS"});
    if (INPUT && INPUT.i_sender) {i_sender.set(INPUT.i_sender);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async send(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let i_with_error_screen = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_with_error_screen) {i_with_error_screen = INPUT.i_with_error_screen;}
    if (INPUT === undefined || INPUT.i_with_error_screen === undefined) {i_with_error_screen = abap.builtin.abap_false;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return result;
  }
  async create_persistent() {
    return cl_bcs.create_persistent();
  }
  static async create_persistent() {
    let result = new abap.types.ABAPObject({qualifiedName: "CL_BCS"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return result;
  }
  async add_recipient(INPUT) {
    let i_recipient = new abap.types.ABAPObject({qualifiedName: "IF_RECIPIENT_BCS"});
    if (INPUT && INPUT.i_recipient) {i_recipient.set(INPUT.i_recipient);}
    let i_express = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_express) {i_express = INPUT.i_express;}
    let i_copy = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_copy) {i_copy = INPUT.i_copy;}
    let i_blind_copy = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_blind_copy) {i_blind_copy = INPUT.i_blind_copy;}
    let i_no_forward = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_no_forward) {i_no_forward = INPUT.i_no_forward;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_BCS'] = cl_bcs;
export {cl_bcs};
//# sourceMappingURL=cl_bcs.clas.mjs.map