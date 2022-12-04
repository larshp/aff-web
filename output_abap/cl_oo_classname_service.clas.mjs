const {cx_root} = await import("./cx_root.clas.mjs");
// cl_oo_classname_service.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_oo_classname_service {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_all_method_includes(INPUT) {
    return cl_oo_classname_service.get_all_method_includes(INPUT);
  }
  static async get_all_method_includes(INPUT) {
    let result = new abap.types.Table(new abap.types.Structure({cpdkey: new abap.types.Structure({clsname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), cpdname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow")}, "cl_oo_classname_service=>ty_row"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "cl_oo_classname_service=>ty_result");
    let clsname = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.clsname) {clsname.set(INPUT.clsname);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return result;
  }
}
abap.Classes['CL_OO_CLASSNAME_SERVICE'] = cl_oo_classname_service;
export {cl_oo_classname_service};
//# sourceMappingURL=cl_oo_classname_service.clas.mjs.map