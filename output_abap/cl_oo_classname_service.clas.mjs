const {cx_root} = await import("./cx_root.clas.mjs");
// cl_oo_classname_service.clas.abap
class cl_oo_classname_service {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_OO_CLASSNAME_SERVICE';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"GET_ALL_METHOD_INCLUDES": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"cpdkey": new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {})}, "cl_oo_classname_service=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_oo_classname_service=>ty_result");}, "is_optional": " "}, "CLSNAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_all_method_includes(INPUT) {
    return cl_oo_classname_service.get_all_method_includes(INPUT);
  }
  static async get_all_method_includes(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"cpdkey": new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {})}, "cl_oo_classname_service=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_oo_classname_service=>ty_result");
    let clsname = INPUT?.clsname;
    if (clsname?.getQualifiedName === undefined || clsname.getQualifiedName() !== "STRING") { clsname = undefined; }
    if (clsname === undefined) { clsname = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.clsname); }
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
    return result;
  }
}
abap.Classes['CL_OO_CLASSNAME_SERVICE'] = cl_oo_classname_service;
cl_oo_classname_service.ty_rowrow = new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {});
cl_oo_classname_service.ty_row = new abap.types.Structure({"cpdkey": new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {})}, "cl_oo_classname_service=>ty_row", undefined, {}, {});
cl_oo_classname_service.ty_result = abap.types.TableFactory.construct(new abap.types.Structure({"cpdkey": new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {})}, "cl_oo_classname_service=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_oo_classname_service=>ty_result");
export {cl_oo_classname_service};
//# sourceMappingURL=cl_oo_classname_service.clas.mjs.map