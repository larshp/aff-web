const {cx_root} = await import("./cx_root.clas.mjs");
// cl_o2_api_xsltdesc.clas.abap
class cl_o2_api_xsltdesc {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_O2_API_XSLTDESC';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"CHECK_TRANSFORMATION_SOURCE": {"visibility": "U", "parameters": {"I_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "I_SOURCE": {"type": () => {return (() => { throw "Void type: O2PAGELINE_TABLE" })();}, "is_optional": " "}, "E_ERROR_LIST": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async check_transformation_source(INPUT) {
    return cl_o2_api_xsltdesc.check_transformation_source(INPUT);
  }
  static async check_transformation_source(INPUT) {
    let i_name = INPUT?.i_name;
    if (i_name?.getQualifiedName === undefined || i_name.getQualifiedName() !== "STRING") { i_name = undefined; }
    if (i_name === undefined) { i_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.i_name); }
    let i_source = INPUT?.i_source;
    if (i_source === undefined) { i_source = (() => { throw "Void type: O2PAGELINE_TABLE" })().set(INPUT.i_source); }
    let e_error_list = INPUT?.e_error_list || abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
    abap.statements.assert(abap.compare.eq(abap.IntegerFactory.get(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_O2_API_XSLTDESC'] = cl_o2_api_xsltdesc;
cl_o2_api_xsltdesc.ty_error = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {});
cl_o2_api_xsltdesc.ty_error_tab = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
export {cl_o2_api_xsltdesc};
//# sourceMappingURL=cl_o2_api_xsltdesc.clas.mjs.map