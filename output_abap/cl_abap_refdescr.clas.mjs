const {cl_abap_datadescr} = await import("./cl_abap_datadescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_refdescr.clas.abap
class cl_abap_refdescr extends cl_abap_datadescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_referenced_type() {
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    await abap.statements.cast(type, this.me);
    return type;
  }
  async get_ref_to_data() {
    return cl_abap_refdescr.get_ref_to_data();
  }
  static async get_ref_to_data() {
    let p_result = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REFDESCR"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return p_result;
  }
}
abap.Classes['CL_ABAP_REFDESCR'] = cl_abap_refdescr;
export {cl_abap_refdescr};
//# sourceMappingURL=cl_abap_refdescr.clas.mjs.map