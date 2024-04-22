const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_container.clas.abap
class cl_gui_container {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.visible_true = cl_gui_container.visible_true;
    this.visible_false = cl_gui_container.visible_false;
    return this;
  }
}
abap.Classes['CL_GUI_CONTAINER'] = cl_gui_container;
cl_gui_container.screen0 = new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER"});
cl_gui_container.default_screen = new abap.types.ABAPObject({qualifiedName: "CL_GUI_CONTAINER"});
cl_gui_container.visible_true = new abap.types.Character(1, {});
cl_gui_container.visible_true.set('1');
cl_gui_container.visible_false = new abap.types.Character(1, {});
cl_gui_container.visible_false.set('0');
export {cl_gui_container};
//# sourceMappingURL=cl_gui_container.clas.mjs.map