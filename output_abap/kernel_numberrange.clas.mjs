const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_numberrange.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class kernel_numberrange {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async number_get(INPUT) {
    return kernel_numberrange.number_get(INPUT);
  }
  static async number_get(INPUT) {
    let nr_range_nr = new abap.types.Character({length: 2, qualifiedName: "cl_numberrange_runtime=>nr_interval"});
    if (INPUT && INPUT.nr_range_nr) {nr_range_nr.set(INPUT.nr_range_nr);}
    let object = new abap.types.Character({length: 10, qualifiedName: "cl_numberrange_runtime=>nr_object"});
    if (INPUT && INPUT.object) {object.set(INPUT.object);}
    let number = new abap.types.Numc({length: 20, qualifiedName: "cl_numberrange_runtime=>nr_number"});
    if (INPUT && INPUT.number) {number = INPUT.number;}
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.Structure({nr_range_nr: new abap.types.Character({length: 2, qualifiedName: "kernel_numberrange=>ty_status-nr_range_nr"}), object: new abap.types.Character({length: 10, qualifiedName: "kernel_numberrange=>ty_status-object"}), number: new abap.types.Numc({length: 20, qualifiedName: "cl_numberrange_runtime=>nr_number"})}, "kernel_numberrange=>ty_status"));
    abap.statements.readTable(kernel_numberrange.status,{assigning: fs_row_,withKey: (i) => {return abap.compare.eq(i.nr_range_nr, nr_range_nr) && abap.compare.eq(i.object, object);}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      fs_row_.get().number.set(abap.operators.add(fs_row_.get().number,constant_1));
    } else {
      fs_row_.assign(kernel_numberrange.status.appendInitial());
      fs_row_.get().nr_range_nr.set(nr_range_nr);
      fs_row_.get().object.set(object);
      fs_row_.get().number.set(constant_1);
    }
    number.set(fs_row_.get().number);
  }
}
abap.Classes['KERNEL_NUMBERRANGE'] = kernel_numberrange;
kernel_numberrange.status = new abap.types.Table(new abap.types.Structure({nr_range_nr: new abap.types.Character({length: 2, qualifiedName: "kernel_numberrange=>ty_status-nr_range_nr"}), object: new abap.types.Character({length: 10, qualifiedName: "kernel_numberrange=>ty_status-object"}), number: new abap.types.Numc({length: 20, qualifiedName: "cl_numberrange_runtime=>nr_number"})}, "kernel_numberrange=>ty_status"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
export {kernel_numberrange};
//# sourceMappingURL=kernel_numberrange.clas.mjs.map