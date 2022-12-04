const {cl_abap_objectdescr} = await import("./cl_abap_objectdescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_classdescr.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_abap_classdescr extends cl_abap_objectdescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_class_name(INPUT) {
    return cl_abap_classdescr.get_class_name(INPUT);
  }
  static async get_class_name(INPUT) {
    let p_name = new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"});
    let p_object = new abap.types.ABAPObject();
    if (INPUT && INPUT.p_object) {p_object = INPUT.p_object;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return p_name;
  }
  async get_super_class_type() {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return p_descr_ref;
  }
}
abap.Classes['CL_ABAP_CLASSDESCR'] = cl_abap_classdescr;
export {cl_abap_classdescr};
//# sourceMappingURL=cl_abap_classdescr.clas.mjs.map