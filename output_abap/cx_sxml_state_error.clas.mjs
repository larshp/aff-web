const {cx_sxml_error} = await import("./cx_sxml_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sxml_state_error.clas.abap
class cx_sxml_state_error extends cx_sxml_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SXML_STATE_ERROR'] = cx_sxml_state_error;
export {cx_sxml_state_error};
//# sourceMappingURL=cx_sxml_state_error.clas.mjs.map