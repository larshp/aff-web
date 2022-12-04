const {cx_sy_open_sql_error} = await import("./cx_sy_open_sql_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_dynamic_osql_error.clas.abap
class cx_sy_dynamic_osql_error extends cx_sy_open_sql_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    let sqlmsg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.sqlmsg) {sqlmsg.set(INPUT.sqlmsg);}
    await super.constructor_({sqlmsg: sqlmsg});
    return this;
  }
}
abap.Classes['CX_SY_DYNAMIC_OSQL_ERROR'] = cx_sy_dynamic_osql_error;
export {cx_sy_dynamic_osql_error};
//# sourceMappingURL=cx_sy_dynamic_osql_error.clas.mjs.map