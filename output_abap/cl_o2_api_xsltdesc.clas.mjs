const {cx_root} = await import("./cx_root.clas.mjs");
// cl_o2_api_xsltdesc.clas.abap
class cl_o2_api_xsltdesc {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async check_transformation_source(INPUT) {
    return cl_o2_api_xsltdesc.check_transformation_source(INPUT);
  }
  static async check_transformation_source(INPUT) {
    let i_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_name) {i_name.set(INPUT.i_name);}
    let i_source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "O2PAGELINE_TABLE");
    if (INPUT && INPUT.i_source) {i_source.set(INPUT.i_source);}
    let e_error_list = new abap.types.Table(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
    if (INPUT && INPUT.e_error_list) {e_error_list = INPUT.e_error_list;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_O2_API_XSLTDESC'] = cl_o2_api_xsltdesc;
cl_o2_api_xsltdesc.ty_error = new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error");
cl_o2_api_xsltdesc.ty_error_tab = new abap.types.Table(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
export {cl_o2_api_xsltdesc};
//# sourceMappingURL=cl_o2_api_xsltdesc.clas.mjs.map