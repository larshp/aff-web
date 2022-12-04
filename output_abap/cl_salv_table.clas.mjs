const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_table.clas.abap
class cl_salv_table {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.c_functions_all = cl_salv_table.c_functions_all;
    return this;
  }
  async get_functions() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_FUNCTIONS_LIST"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async get_selected_rows() {
    let rows = new abap.types.Table(new abap.types.Integer({qualifiedName: "I"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_salv_table=>ty_rows");
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rows;
  }
  async get_metadata() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_selection_mode(INPUT) {
    let val = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.val) {val.set(INPUT.val);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_striped_pattern(INPUT) {
    let val = new abap.types.Character(4);
    if (INPUT && INPUT.val) {val = INPUT.val;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_list_header(INPUT) {
    let val = new abap.types.Character(4);
    if (INPUT && INPUT.val) {val = INPUT.val;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async factory(INPUT) {
    return cl_salv_table.factory(INPUT);
  }
  static async factory(INPUT) {
    let r_container = new abap.types.Character(4);
    if (INPUT && INPUT.r_container) {r_container = INPUT.r_container;}
    let r_salv_table = new abap.types.Character(4);
    if (INPUT && INPUT.r_salv_table) {r_salv_table = INPUT.r_salv_table;}
    let t_table = new abap.types.Character(4);
    if (INPUT && INPUT.t_table) {t_table = INPUT.t_table;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async is_offline() {
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return value;
  }
  async get_selections() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async close_screen() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async refresh() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async display() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async set_screen_status(INPUT) {
    let pfstatus = new abap.types.Character(4);
    if (INPUT && INPUT.pfstatus) {pfstatus = INPUT.pfstatus;}
    let set_functions = new abap.types.Character(4);
    if (INPUT && INPUT.set_functions) {set_functions = INPUT.set_functions;}
    let report = new abap.types.Character(4);
    if (INPUT && INPUT.report) {report = INPUT.report;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
  }
  async set_screen_popup(INPUT) {
    let start_column = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.start_column) {start_column.set(INPUT.start_column);}
    let end_column = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.end_column) {end_column.set(INPUT.end_column);}
    let start_line = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.start_line) {start_line.set(INPUT.start_line);}
    let end_line = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.end_line) {end_line.set(INPUT.end_line);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
  }
  async get_event() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_EVENTS_TABLE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
  async get_display_settings() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_TABLE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
  async set_top_of_list(INPUT) {
    let val = new abap.types.Character(4);
    if (INPUT && INPUT.val) {val = INPUT.val;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
  }
  async get_columns() {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_SALV_COLUMNS_TABLE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('TODO')));
    return val;
  }
}
abap.Classes['CL_SALV_TABLE'] = cl_salv_table;
cl_salv_table.c_functions_all = new abap.types.Integer({qualifiedName: "I"});
cl_salv_table.c_functions_all.set(1);
cl_salv_table.ty_rows = new abap.types.Table(new abap.types.Integer({qualifiedName: "I"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_salv_table=>ty_rows");
export {cl_salv_table};
//# sourceMappingURL=cl_salv_table.clas.mjs.map