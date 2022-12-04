const {cx_static_check} = await import("./cx_static_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_abap_message_digest.clas.abap
class cx_abap_message_digest extends cx_static_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_ABAP_MESSAGE_DIGEST'] = cx_abap_message_digest;
export {cx_abap_message_digest};
//# sourceMappingURL=cx_abap_message_digest.clas.mjs.map