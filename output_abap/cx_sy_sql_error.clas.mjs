const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_sy_sql_error.clas.abap
class cx_sy_sql_error extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.sqlmsg = new abap.types.String({qualifiedName: "STRING"});
    let sqlmsg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.sqlmsg) {sqlmsg.set(INPUT.sqlmsg);}
    await super.constructor_();
    this.me.get().sqlmsg.set(sqlmsg);
    return this;
  }
}
abap.Classes['CX_SY_SQL_ERROR'] = cx_sy_sql_error;
export {cx_sy_sql_error};
//# sourceMappingURL=cx_sy_sql_error.clas.mjs.map