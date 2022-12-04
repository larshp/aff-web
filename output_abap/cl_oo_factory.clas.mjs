const {cx_root} = await import("./cx_root.clas.mjs");
// cl_oo_factory.clas.abap
class cl_oo_factory {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_OO_CLIF_SOURCE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_name = new abap.types.String({qualifiedName: "STRING"});
    return this;
  }
  async create_instance() {
    return cl_oo_factory.create_instance();
  }
  static async create_instance() {
    let result = new abap.types.ABAPObject({qualifiedName: "CL_OO_FACTORY"});
    result.set(await (new abap.Classes['CL_OO_FACTORY']()).constructor_());
    return result;
  }
  async create_clif_source(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "IF_OO_CLIF_SOURCE"});
    let clif_name = new abap.types.Character();
    if (INPUT && INPUT.clif_name) {clif_name = INPUT.clif_name;}
    result.set(this.me);
    this.mv_name.set(abap.builtin.to_upper({val: clif_name}));
    return result;
  }
  async if_oo_clif_source$get_source(INPUT) {
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.source) {source = INPUT.source;}
    let ls_data = new abap.types.Structure({"progname": new abap.types.Character(40, {}), "data": new abap.types.String()}, "REPOSRC");
    await abap.statements.select(ls_data, {select: "SELECT * FROM reposrc WHERE progname = '" + this.mv_name.get() + "' UP TO 1 ROWS", primaryKey: ["progname"]});
    abap.statements.split({source: ls_data.get().data, at: new abap.types.String().set(`\n`), table: source});
  }
}
abap.Classes['CL_OO_FACTORY'] = cl_oo_factory;
export {cl_oo_factory};
//# sourceMappingURL=cl_oo_factory.clas.mjs.map