const {cx_root} = await import("./cx_root.clas.mjs");
// cl_progress_indicator.clas.abap
class cl_progress_indicator {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async progress_indicate(INPUT) {
    return cl_progress_indicator.progress_indicate(INPUT);
  }
  static async progress_indicate(INPUT) {
    let i_text = new abap.types.Character({length: 4});
    if (INPUT && INPUT.i_text) {i_text = INPUT.i_text;}
    let i_processed = new abap.types.Integer();
    if (INPUT && INPUT.i_processed) {i_processed.set(INPUT.i_processed);}
    let i_total = new abap.types.Integer();
    if (INPUT && INPUT.i_total) {i_total.set(INPUT.i_total);}
    let i_output_immediately = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.i_output_immediately) {i_output_immediately = INPUT.i_output_immediately;}
    let e_progress_sent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.e_progress_sent) {e_progress_sent = INPUT.e_progress_sent;}
    return;
  }
}
abap.Classes['CL_PROGRESS_INDICATOR'] = cl_progress_indicator;
export {cl_progress_indicator};
//# sourceMappingURL=cl_progress_indicator.clas.mjs.map