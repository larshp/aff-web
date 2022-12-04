const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_cfw.clas.abap
class cl_gui_cfw {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async compute_pixel_from_metric(INPUT) {
    return cl_gui_cfw.compute_pixel_from_metric(INPUT);
  }
  static async compute_pixel_from_metric(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    let x_or_y = new abap.types.Character(1, {});
    if (INPUT && INPUT.x_or_y) {x_or_y = INPUT.x_or_y;}
    let in_ = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.in_) {in_.set(INPUT.in_);}
    val.set(new abap.types.Integer().set(1));
    return val;
  }
  async flush() {
    return cl_gui_cfw.flush();
  }
  static async flush() {
    return;
  }
}
abap.Classes['CL_GUI_CFW'] = cl_gui_cfw;
export {cl_gui_cfw};
//# sourceMappingURL=cl_gui_cfw.clas.mjs.map