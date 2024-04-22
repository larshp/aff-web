const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_create_data_handle.clas.abap
class kernel_create_data_handle {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async call(INPUT) {
    return kernel_create_data_handle.call(INPUT);
  }
  static async call(INPUT) {
    let handle = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (INPUT && INPUT.handle) {handle.set(INPUT.handle);}
    let dref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.dref) {dref = INPUT.dref;}
    abap.statements.assert(abap.compare.initial(handle) === false);
    let unique136 = handle.get().kind;
    if (abap.compare.eq(unique136, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      await this.elem({handle: handle, dref: dref});
    } else if (abap.compare.eq(unique136, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await this.struct({handle: handle, dref: dref});
    } else if (abap.compare.eq(unique136, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      await this.table({handle: handle, dref: dref});
    } else {
      console.dir(handle);
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    }
  }
  async struct(INPUT) {
    return kernel_create_data_handle.struct(INPUT);
  }
  static async struct(INPUT) {
    let handle = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (INPUT && INPUT.handle) {handle.set(INPUT.handle);}
    let dref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.dref) {dref = INPUT.dref;}
    let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let lt_components = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let ls_component = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let field = new abap.types.DataReference(new abap.types.Character(4));
    await abap.statements.cast(lo_struct, handle);
    lt_components.set((await lo_struct.get().get_components()));
    let obj = {};
    for await (const unique137 of abap.statements.loop(lt_components)) {
      ls_component.set(unique137);
      await this.call({handle: (await lo_struct.get().get_component_type({p_name: ls_component.get().name})), dref: field});
      obj[ls_component.get().name.get().toLowerCase()] = field.getPointer();
    }
    dref.assign(new abap.types.Structure(obj));
  }
  async table(INPUT) {
    return kernel_create_data_handle.table(INPUT);
  }
  static async table(INPUT) {
    let handle = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (INPUT && INPUT.handle) {handle.set(INPUT.handle);}
    let dref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.dref) {dref = INPUT.dref;}
    let lo_table = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let field = new abap.types.DataReference(new abap.types.Character(4));
    await abap.statements.cast(lo_table, handle);
    await this.call({handle: (await lo_table.get().get_table_line_type()), dref: field});
    dref.assign(new abap.types.Table(field.getPointer()));
  }
  async elem(INPUT) {
    return kernel_create_data_handle.elem(INPUT);
  }
  static async elem(INPUT) {
    let handle = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (INPUT && INPUT.handle) {handle.set(INPUT.handle);}
    let dref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.dref) {dref = INPUT.dref;}
    let unique138 = handle.get().type_kind;
    if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_float)) {
      abap.statements.createData(dref,{"typeName": "F"});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string)) {
      abap.statements.createData(dref,{"typeName": "STRING"});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_xstring)) {
      abap.statements.createData(dref,{"typeName": "XSTRING"});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {
      abap.statements.createData(dref,{"typeName": "I"});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date)) {
      abap.statements.createData(dref,{"typeName": "D"});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_hex)) {
      abap.statements.createData(dref,{"typeName": "X","length": handle.get().length});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      abap.statements.createData(dref,{"typeName": "P","length": handle.get().length,"decimals": handle.get().decimals});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char)) {
      abap.statements.createData(dref,{"typeName": "C","length": handle.get().length});
    } else if (abap.compare.eq(unique138, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
      abap.statements.createData(dref,{"typeName": "T"});
    } else {
      console.dir(handle);
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    }
  }
}
abap.Classes['KERNEL_CREATE_DATA_HANDLE'] = kernel_create_data_handle;
export {kernel_create_data_handle};
//# sourceMappingURL=kernel_create_data_handle.clas.mjs.map