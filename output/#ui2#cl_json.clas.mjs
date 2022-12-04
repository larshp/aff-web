await import("./%23ui2%23cl_json.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// #ui2#cl_json.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class $ui2$cl_json {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.pretty_mode = $ui2$cl_json.pretty_mode;
    return this;
  }
  async serialize(INPUT) {
    return $ui2$cl_json.serialize(INPUT);
  }
  static async serialize(INPUT) {
    let r_json = new abap.types.String({qualifiedName: "STRING"});
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let compress = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.compress) {compress = INPUT.compress;}
    let pretty_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.pretty_name) {pretty_name.set(INPUT.pretty_name);}
    let assoc_arrays = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.assoc_arrays) {assoc_arrays = INPUT.assoc_arrays;}
    let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let lt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let ls_component = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {"withHeader":false}));
    lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: data})));
    let unique104 = lo_type.get().kind;
    if (abap.compare.eq(unique104, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      let unique105 = lo_type.get().type_kind;
      if (abap.compare.eq(unique105, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char) || abap.compare.eq(unique105, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string)) {
        r_json.set(abap.operators.concat(new abap.types.Character({length: 1}).set('"'),abap.operators.concat(data,new abap.types.Character({length: 1}).set('"'))));
      } else {
        r_json.set(data);
      }
    } else if (abap.compare.eq(unique104, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      r_json.set(new abap.types.Character({length: 1}).set('['));
      abap.statements.assign({target: fs_tab_, source: data});
      for await (const unique106 of abap.statements.loop(fs_tab_)) {
        fs_any_.assign(unique106);
        lv_index.set(abap.builtin.sy.get().tabix);
        r_json.set(abap.operators.concat(r_json,(await this.serialize({data: fs_any_}))));
        if (abap.compare.ne(abap.builtin.lines({val: data}), lv_index)) {
          r_json.set(abap.operators.concat(r_json,new abap.types.Character({length: 1}).set(',')));
        }
      }
      r_json.set(abap.operators.concat(r_json,new abap.types.Character({length: 1}).set(']')));
    } else if (abap.compare.eq(unique104, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await abap.statements.cast(lo_struct, lo_type);
      lt_components.set((await lo_struct.get().get_components()));
      r_json.set(new abap.types.Character({length: 1}).set('{'));
      for await (const unique107 of abap.statements.loop(lt_components)) {
        ls_component.set(unique107);
        lv_index.set(abap.builtin.sy.get().tabix);
        abap.statements.assign({component: ls_component.get().name, target: fs_any_, source: data});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));
        r_json.set(abap.operators.concat(r_json,abap.operators.concat(new abap.types.String().set(`"${abap.templateFormatting(ls_component.get().name)}":`),(await this.serialize({data: fs_any_})))));
        if (abap.compare.ne(abap.builtin.lines({val: lt_components}), lv_index)) {
          r_json.set(abap.operators.concat(r_json,new abap.types.Character({length: 1}).set(',')));
        }
      }
      r_json.set(abap.operators.concat(r_json,new abap.types.Character({length: 1}).set('}')));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 21}).set('cl_json, unknown kind')));
    }
    return r_json;
  }
  async deserialize(INPUT) {
    return $ui2$cl_json.deserialize(INPUT);
  }
  static async deserialize(INPUT) {
    let json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.json) {json.set(INPUT.json);}
    let jsonx = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.jsonx) {jsonx.set(INPUT.jsonx);}
    let pretty_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.pretty_name) {pretty_name.set(INPUT.pretty_name);}
    let assoc_arrays = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.assoc_arrays) {assoc_arrays = INPUT.assoc_arrays;}
    let assoc_arrays_opt = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.assoc_arrays_opt) {assoc_arrays_opt = INPUT.assoc_arrays_opt;}
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    $ui2$cl_json.mo_parsed.set(await (new abap.Classes['CLAS-/UI2/CL_JSON-LCL_PARSER']()).constructor_());
    abap.statements.assert(abap.compare.initial(jsonx));
    await $ui2$cl_json.mo_parsed.get().parse({iv_json: json});
    abap.statements.clear(data);
    await this._deserialize({prefix: new abap.types.Character({length: 0}).set(''), pretty_name: pretty_name, data: data});
  }
  async _deserialize(INPUT) {
    return $ui2$cl_json._deserialize(INPUT);
  }
  static async _deserialize(INPUT) {
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let pretty_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.pretty_name) {pretty_name.set(INPUT.pretty_name);}
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let lo_struct = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let lt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let ls_component = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let lt_members = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_member = new abap.types.String();
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: data})));
    let unique108 = lo_type.get().kind;
    if (abap.compare.eq(unique108, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      if (abap.compare.eq(lo_type.get().absolute_name, new abap.types.Character({length: 30}).set('\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL')) || abap.compare.eq(lo_type.get().absolute_name, new abap.types.Character({length: 10}).set('\\TYPE=FLAG'))) {
        data.set(abap.builtin.boolc(abap.compare.eq((await $ui2$cl_json.mo_parsed.get().value_string({iv_path: prefix})), new abap.types.Character({length: 4}).set('true'))));
      } else {
        data.set((await $ui2$cl_json.mo_parsed.get().value_string({iv_path: prefix})));
      }
    } else if (abap.compare.eq(unique108, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      lt_members.set((await $ui2$cl_json.mo_parsed.get().members({iv_path: abap.operators.concat(prefix,new abap.types.Character({length: 1}).set('/'))})));
      for await (const unique109 of abap.statements.loop(lt_members)) {
        lv_member.set(unique109);
        abap.statements.createData(ref,{"likeLineOf": data});
        abap.statements.assign({target: fs_any_, source: (ref).getPointer()});
        await this._deserialize({prefix: abap.operators.concat(prefix,abap.operators.concat(new abap.types.Character({length: 1}).set('/'),lv_member)), pretty_name: pretty_name, data: fs_any_});
        abap.statements.insertInternal({data: fs_any_, table: data});
      }
    } else if (abap.compare.eq(unique108, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await abap.statements.cast(lo_struct, lo_type);
      lt_components.set((await lo_struct.get().get_components()));
      for await (const unique110 of abap.statements.loop(lt_components)) {
        ls_component.set(unique110);
        abap.statements.assign({component: ls_component.get().name, target: fs_any_, source: data});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));
        let unique111 = pretty_name;
        if (abap.compare.eq(unique111, $ui2$cl_json.pretty_mode.get().camel_case)) {
          lv_name.set(abap.builtin.to_mixed({val: abap.builtin.to_lower({val: ls_component.get().name})}));
        } else {
          lv_name.set(abap.builtin.to_lower({val: ls_component.get().name}));
        }
        await this._deserialize({prefix: abap.operators.concat(prefix,abap.operators.concat(new abap.types.Character({length: 1}).set('/'),lv_name)), pretty_name: pretty_name, data: fs_any_});
      }
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 21}).set('cl_json, unknown kind')));
    }
  }
}
abap.Classes['/UI2/CL_JSON'] = $ui2$cl_json;
$ui2$cl_json.mo_parsed = new abap.types.ABAPObject({qualifiedName: "LCL_PARSER"});
$ui2$cl_json.pretty_mode = new abap.types.Structure({low_case: new abap.types.String({qualifiedName: "STRING"}), camel_case: new abap.types.String({qualifiedName: "STRING"})});
$ui2$cl_json.pretty_mode.get().low_case.set('low_case');
$ui2$cl_json.pretty_mode.get().camel_case.set('camel_case');
export {$ui2$cl_json};
//# sourceMappingURL=#ui2#cl_json.clas.mjs.map