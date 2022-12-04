const {cl_abap_elemdescr} = await import("./cl_abap_elemdescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_enumdescr.clas.abap
const constant_30 = new abap.types.Integer().set(30);
class cl_abap_enumdescr extends cl_abap_elemdescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.members = new abap.types.Table(new abap.types.Structure({name: new abap.types.Character({length: 30, qualifiedName: "cl_abap_enumdescr=>member-name"}), value: new abap.types.String({qualifiedName: "CL_ABAP_ENUMDESCR=>MEMBER-VALUE"})}, "cl_abap_enumdescr=>member"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":["NAME"]}, "cl_abap_enumdescr=>member_table");
    return this;
  }
}
abap.Classes['CL_ABAP_ENUMDESCR'] = cl_abap_enumdescr;
export {cl_abap_enumdescr};
//# sourceMappingURL=cl_abap_enumdescr.clas.mjs.map