const {cl_abap_elemdescr} = await import("./cl_abap_elemdescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_enumdescr.clas.abap
class cl_abap_enumdescr extends cl_abap_elemdescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.members = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"cl_abap_enumdescr=>member-name"}), "value": new abap.types.String({qualifiedName: "CL_ABAP_ENUMDESCR=>MEMBER-VALUE"})}, "cl_abap_enumdescr=>member"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "cl_abap_enumdescr=>member_table");
    return this;
  }
}
abap.Classes['CL_ABAP_ENUMDESCR'] = cl_abap_enumdescr;
cl_abap_enumdescr.member = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"cl_abap_enumdescr=>member-name"}), "value": new abap.types.String({qualifiedName: "CL_ABAP_ENUMDESCR=>MEMBER-VALUE"})}, "cl_abap_enumdescr=>member");
cl_abap_enumdescr.member_table = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"cl_abap_enumdescr=>member-name"}), "value": new abap.types.String({qualifiedName: "CL_ABAP_ENUMDESCR=>MEMBER-VALUE"})}, "cl_abap_enumdescr=>member"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "cl_abap_enumdescr=>member_table");
export {cl_abap_enumdescr};
//# sourceMappingURL=cl_abap_enumdescr.clas.mjs.map