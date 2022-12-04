const {cx_root} = await import("./cx_root.clas.mjs");
// cl_numberrange_runtime.clas.abap
class cl_numberrange_runtime {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async number_get(INPUT) {
    return cl_numberrange_runtime.number_get(INPUT);
  }
  static async number_get(INPUT) {
    let nr_range_nr = new abap.types.Character(2, {"qualifiedName":"cl_numberrange_runtime=>nr_interval"});
    if (INPUT && INPUT.nr_range_nr) {nr_range_nr.set(INPUT.nr_range_nr);}
    let object = new abap.types.Character(10, {"qualifiedName":"cl_numberrange_runtime=>nr_object"});
    if (INPUT && INPUT.object) {object.set(INPUT.object);}
    let number = new abap.types.Numc({length: 20, qualifiedName: "cl_numberrange_runtime=>nr_number"});
    if (INPUT && INPUT.number) {number = INPUT.number;}
    await abap.FunctionModules['NUMBER_GET_NEXT']({exporting: {nr_range_nr: nr_range_nr, object: object}, importing: {number: number}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      return;
    }
  }
}
abap.Classes['CL_NUMBERRANGE_RUNTIME'] = cl_numberrange_runtime;
cl_numberrange_runtime.nr_interval = new abap.types.Character(2, {"qualifiedName":"cl_numberrange_runtime=>nr_interval"});
cl_numberrange_runtime.nr_object = new abap.types.Character(10, {"qualifiedName":"cl_numberrange_runtime=>nr_object"});
cl_numberrange_runtime.nr_number = new abap.types.Numc({length: 20, qualifiedName: "cl_numberrange_runtime=>nr_number"});
export {cl_numberrange_runtime};
//# sourceMappingURL=cl_numberrange_runtime.clas.mjs.map