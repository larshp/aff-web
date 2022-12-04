const {cl_abap_typedescr} = await import("./cl_abap_typedescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_datadescr.clas.abap
const constant_1 = new abap.types.Integer().set(1);
class cl_abap_datadescr extends cl_abap_typedescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_data_type_kind(INPUT) {
    return cl_abap_datadescr.get_data_type_kind(INPUT);
  }
  static async get_data_type_kind(INPUT) {
    let p_type_kind = new abap.types.Character({qualifiedName: "abap_typekind"});
    let p_data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.p_data) {p_data = INPUT.p_data;}
    let descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    descr.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: p_data})));
    p_type_kind.set(descr.get().type_kind);
    return p_type_kind;
  }
  async applies_to_data(INPUT) {
    let p_flag = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let p_data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.p_data) {p_data = INPUT.p_data;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return p_flag;
  }
}
abap.Classes['CL_ABAP_DATADESCR'] = cl_abap_datadescr;
export {cl_abap_datadescr};
//# sourceMappingURL=cl_abap_datadescr.clas.mjs.map