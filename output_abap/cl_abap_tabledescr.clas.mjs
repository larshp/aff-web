const {cl_abap_datadescr} = await import("./cl_abap_datadescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_tabledescr.clas.abap
class cl_abap_tabledescr extends cl_abap_datadescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.has_unique_key = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.key = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(255, {"qualifiedName":"abap_keyname"})}, "abap_keydescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_keydescr_tab");
    this.key_defkind = new abap.types.Character(1, {"qualifiedName":"abap_keydefkind"});
    this.table_kind = new abap.types.Character(1, {"qualifiedName":"abap_tablekind"});
    this.mo_line_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    this.tablekind_any = cl_abap_tabledescr.tablekind_any;
    this.tablekind_std = cl_abap_tabledescr.tablekind_std;
    this.tablekind_index = cl_abap_tabledescr.tablekind_index;
    this.tablekind_hashed = cl_abap_tabledescr.tablekind_hashed;
    this.tablekind_sorted = cl_abap_tabledescr.tablekind_sorted;
    this.keydefkind_default = cl_abap_tabledescr.keydefkind_default;
    this.keydefkind_tableline = cl_abap_tabledescr.keydefkind_tableline;
    this.keydefkind_user = cl_abap_tabledescr.keydefkind_user;
    this.keydefkind_empty = cl_abap_tabledescr.keydefkind_empty;
    return this;
  }
  async create(INPUT) {
    return cl_abap_tabledescr.create(INPUT);
  }
  static async create(INPUT) {
    let ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let p_line_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.p_line_type) {p_line_type.set(INPUT.p_line_type);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return ref;
  }
  async get_with_keys(INPUT) {
    return cl_abap_tabledescr.get_with_keys(INPUT);
  }
  static async get_with_keys(INPUT) {
    let p_result = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let p_line_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (INPUT && INPUT.p_line_type) {p_line_type.set(INPUT.p_line_type);}
    let p_keys = new abap.types.Table(new abap.types.Structure({"components": new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"})}, "abap_table_keycompdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_table_keydescr-components"), "name": new abap.types.String({qualifiedName: "NAME"}), "is_primary": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "access_kind": new abap.types.String({qualifiedName: "ACCESS_KIND"}), "is_unique": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key_kind": new abap.types.String({qualifiedName: "KEY_KIND"})}, "abap_table_keydescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_table_keydescr_tab");
    if (INPUT && INPUT.p_keys) {p_keys.set(INPUT.p_keys);}
    let ls_key = new abap.types.Structure({"components": new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"})}, "abap_table_keycompdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_table_keydescr-components"), "name": new abap.types.String({qualifiedName: "NAME"}), "is_primary": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "access_kind": new abap.types.String({qualifiedName: "ACCESS_KIND"}), "is_unique": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "key_kind": new abap.types.String({qualifiedName: "KEY_KIND"})}, "abap_table_keydescr");
    if (abap.compare.ne(abap.builtin.lines({val: p_keys}), new abap.types.Integer().set(1))) {
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    }
    abap.statements.readTable(p_keys,{index: new abap.types.Integer().set(1),into: ls_key});
    abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0)));
    p_result.set(await (new abap.Classes['CL_ABAP_TABLEDESCR']()).constructor_());
    p_result.get().has_unique_key.set(ls_key.get().is_unique);
    p_result.get().mo_line_type.set(p_line_type);
    p_result.get().key_defkind.set(ls_key.get().key_kind);
    p_result.get().table_kind.set(ls_key.get().access_kind);
    p_result.get().type_kind.set(cl_abap_tabledescr.typekind_table);
    p_result.get().kind.set(cl_abap_tabledescr.kind_table);
    return p_result;
  }
  async get(INPUT) {
    return cl_abap_tabledescr.get(INPUT);
  }
  static async get(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async construct_from_data(INPUT) {
    return cl_abap_tabledescr.construct_from_data(INPUT);
  }
  static async construct_from_data(INPUT) {
    let descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let data = new abap.types.Character(4);
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let lv_dummy = new abap.types.Integer({qualifiedName: "I"});
    let lv_flag = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    descr.set(await (new abap.Classes['CL_ABAP_TABLEDESCR']()).constructor_());
    lv_flag.set(data.getOptions()?.primaryKey?.isUnique === true ? "X" : "");
    descr.get().has_unique_key.set(lv_flag);
    lv_dummy = data.getRowType();
    descr.get().mo_line_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: lv_dummy})));
    return descr;
  }
  async get_table_line_type() {
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    await abap.statements.cast(type, this.mo_line_type);
    return type;
  }
}
abap.Classes['CL_ABAP_TABLEDESCR'] = cl_abap_tabledescr;
cl_abap_tabledescr.tablekind_any = new abap.types.Character(1, {});
cl_abap_tabledescr.tablekind_any.set('A');
cl_abap_tabledescr.tablekind_std = new abap.types.Character(1, {});
cl_abap_tabledescr.tablekind_std.set('S');
cl_abap_tabledescr.tablekind_index = new abap.types.Character(1, {});
cl_abap_tabledescr.tablekind_index.set('I');
cl_abap_tabledescr.tablekind_hashed = new abap.types.Character(1, {});
cl_abap_tabledescr.tablekind_hashed.set('H');
cl_abap_tabledescr.tablekind_sorted = new abap.types.Character(1, {});
cl_abap_tabledescr.tablekind_sorted.set('O');
cl_abap_tabledescr.keydefkind_default = new abap.types.Character(1, {});
cl_abap_tabledescr.keydefkind_default.set('D');
cl_abap_tabledescr.keydefkind_tableline = new abap.types.Character(1, {});
cl_abap_tabledescr.keydefkind_tableline.set('L');
cl_abap_tabledescr.keydefkind_user = new abap.types.Character(1, {});
cl_abap_tabledescr.keydefkind_user.set('U');
cl_abap_tabledescr.keydefkind_empty = new abap.types.Character(1, {});
cl_abap_tabledescr.keydefkind_empty.set('E');
export {cl_abap_tabledescr};
//# sourceMappingURL=cl_abap_tabledescr.clas.mjs.map