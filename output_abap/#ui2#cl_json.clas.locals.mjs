const {cx_root} = await import("./cx_root.clas.mjs");
// #ui2#cl_json.clas.locals_imp.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class lcl_stack {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_data = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    return this;
  }
  async push(INPUT) {
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_type) {iv_type.set(INPUT.iv_type);}
    let ls_data = new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    ls_data.get().name.set(iv_name);
    ls_data.get().is_array.set(abap.builtin.boolc(abap.compare.eq(iv_type, new abap.types.Character({length: 5}).set('array'))));
    abap.statements.append({source: ls_data, target: this.mt_data});
  }
  async is_array() {
    let rv_array = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let ls_data = new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    abap.statements.readTable(this.mt_data,{index: lv_index,into: ls_data});
    rv_array.set(ls_data.get().is_array);
    return rv_array;
  }
  async get_and_increase_index() {
    let rv_index = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let fs_ls_data_ = new abap.types.FieldSymbol(new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data"));
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    abap.statements.readTable(this.mt_data,{index: lv_index,assigning: fs_ls_data_});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      fs_ls_data_.get().array_index.set(abap.operators.add(fs_ls_data_.get().array_index,constant_1));
      rv_index.set(fs_ls_data_.get().array_index);
      rv_index.set(abap.builtin.condense({val: rv_index}));
    }
    return rv_index;
  }
  async pop() {
    let rv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let ls_data = new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    lv_index.set(abap.builtin.lines({val: this.mt_data}));
    if (abap.compare.gt(lv_index, constant_0)) {
      abap.statements.readTable(this.mt_data,{index: lv_index,into: ls_data});
      rv_name.set(ls_data.get().name);
      await abap.statements.deleteInternal(this.mt_data,{index: lv_index});
    }
    return rv_name;
  }
  async get_full_name() {
    let rv_path = new abap.types.String({qualifiedName: "STRING"});
    let ls_data = new abap.types.Structure({name: new abap.types.String({qualifiedName: "LCL_STACK=>TY_DATA-NAME"}), is_array: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), array_index: new abap.types.Integer({qualifiedName: "LCL_STACK=>TY_DATA-ARRAY_INDEX"})}, "lcl_stack=>ty_data");
    for await (const unique99 of abap.statements.loop(this.mt_data)) {
      ls_data.set(unique99);
      rv_path.set(abap.operators.concat(rv_path,ls_data.get().name));
    }
    return rv_path;
  }
}
abap.Classes['CLAS-/UI2/CL_JSON-LCL_STACK'] = lcl_stack;
class lcl_parser {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_data = new abap.types.Table(new abap.types.Structure({parent: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-PARENT"}), name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-NAME"}), full_name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-FULL_NAME"}), value: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-VALUE"})}, "lcl_parser=>ty_data"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "lcl_parser=>ty_data_tt");
    return this;
  }
  async exists(INPUT) {
    let rv_exists = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    abap.statements.readTable(this.mt_data,{withKey: (i) => {return abap.compare.eq(i.full_name, iv_path);}});
    rv_exists.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)));
    return rv_exists;
  }
  async members(INPUT) {
    let rt_members = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    let ls_data = new abap.types.Structure({parent: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-PARENT"}), name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-NAME"}), full_name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-FULL_NAME"}), value: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-VALUE"})}, "lcl_parser=>ty_data");
    for await (const unique100 of abap.statements.loop(this.mt_data,{where: async (i) => {return abap.compare.eq(i.parent, iv_path);}})) {
      ls_data.set(unique100);
      abap.statements.append({source: ls_data.get().name, target: rt_members});
    }
    return rt_members;
  }
  async value_boolean(INPUT) {
    let rv_value = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    rv_value.set(abap.builtin.boolc(abap.compare.eq((await this.value_string({iv_path: iv_path})), new abap.types.Character({length: 4}).set('true'))));
    return rv_value;
  }
  async value_integer(INPUT) {
    let rv_value = new abap.types.Integer({qualifiedName: "I"});
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    rv_value.set((await this.value_string({iv_path: iv_path})));
    return rv_value;
  }
  async value_number(INPUT) {
    let rv_value = new abap.types.Integer({qualifiedName: "I"});
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    rv_value.set((await this.value_string({iv_path: iv_path})));
    return rv_value;
  }
  async value_string(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_path) {iv_path.set(INPUT.iv_path);}
    let ls_data = new abap.types.Structure({parent: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-PARENT"}), name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-NAME"}), full_name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-FULL_NAME"}), value: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-VALUE"})}, "lcl_parser=>ty_data");
    abap.statements.readTable(this.mt_data,{into: ls_data,withKey: (i) => {return abap.compare.eq(i.full_name, iv_path);}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      rv_value.set(ls_data.get().value);
    }
    return rv_value;
  }
  async parse(INPUT) {
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    let li_next = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    let li_reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER"});
    let li_close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT"});
    let li_open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT"});
    let lt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"});
    let li_value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE"});
    let lv_push = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lo_stack = new abap.types.ABAPObject({qualifiedName: "LCL_STACK"});
    let ls_data = new abap.types.Structure({parent: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-PARENT"}), name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-NAME"}), full_name: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-FULL_NAME"}), value: new abap.types.String({qualifiedName: "LCL_PARSER=>TY_DATA-VALUE"})}, "lcl_parser=>ty_data");
    let lv_index = new abap.types.Integer({qualifiedName: "I"});
    let lt_nodes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    lo_stack.set(await (new abap.Classes['CLAS-/UI2/CL_JSON-LCL_STACK']()).constructor_());
    li_reader.set((await abap.Classes['CL_SXML_STRING_READER'].create({data: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_to({source: iv_json}))})));
    let unique101 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique101++);
      li_node.set((await li_reader.get().if_sxml_reader$read_next_node()));
      if (abap.compare.initial(li_node)) {
        break;
      }
      abap.statements.append({source: li_node, target: lt_nodes});
    }
    for await (const unique102 of abap.statements.loop(lt_nodes)) {
      li_node.set(unique102);
      lv_index.set(abap.builtin.sy.get().tabix);
      let unique103 = li_node.get().if_sxml_node$type;
      if (abap.compare.eq(unique103, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        await abap.statements.cast(li_open, li_node);
        lt_attributes.set((await li_open.get().if_sxml_open_element$get_attributes()));
        abap.statements.readTable(lt_attributes,{index: constant_1,into: li_attribute});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
          lv_push.set((await li_attribute.get().if_sxml_attribute$get_value()));
        } else if (abap.compare.eq((await lo_stack.get().is_array()), abap.builtin.abap_true)) {
          lv_push.set((await lo_stack.get().get_and_increase_index()));
        }
        if (abap.compare.initial(lv_push) === false) {
          abap.statements.clear(ls_data);
          ls_data.get().parent.set((await lo_stack.get().get_full_name()));
          ls_data.get().name.set(lv_push);
          ls_data.get().full_name.set(abap.operators.concat(ls_data.get().parent,ls_data.get().name));
          lv_index.set(abap.operators.add(lv_index,constant_1));
          abap.statements.readTable(lt_nodes,{index: lv_index,into: li_next});
          if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0) && abap.compare.eq(li_next.get().if_sxml_node$type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
            await abap.statements.cast(li_value, li_next);
            ls_data.get().value.set((await li_value.get().if_sxml_value_node$get_value()));
          }
          abap.statements.append({source: ls_data, target: this.mt_data});
          await lo_stack.get().push({iv_name: lv_push, iv_type: li_open.get().if_sxml_open_element$qname.get().name});
        }
        if (abap.compare.eq(li_open.get().if_sxml_open_element$qname.get().name, new abap.types.Character({length: 6}).set('object')) || abap.compare.eq(li_open.get().if_sxml_open_element$qname.get().name, new abap.types.Character({length: 5}).set('array'))) {
          abap.statements.clear(ls_data);
          ls_data.get().parent.set((await lo_stack.get().get_full_name()));
          ls_data.get().name.set(new abap.types.Character({length: 1}).set('/'));
          ls_data.get().full_name.set(abap.operators.concat(ls_data.get().parent,ls_data.get().name));
          abap.statements.append({source: ls_data, target: this.mt_data});
          await lo_stack.get().push({iv_name: new abap.types.Character({length: 1}).set('/'), iv_type: li_open.get().if_sxml_open_element$qname.get().name});
        }
      } else if (abap.compare.eq(unique103, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        await abap.statements.cast(li_close, li_node);
        lv_name.set((await lo_stack.get().pop()));
        if (abap.compare.eq(lv_name, new abap.types.Character({length: 1}).set('/'))) {
          await lo_stack.get().pop();
        }
      }
    }
  }
}
abap.Classes['CLAS-/UI2/CL_JSON-LCL_PARSER'] = lcl_parser;
export {lcl_stack, lcl_parser};
//# sourceMappingURL=#ui2#cl_json.clas.locals.mjs.map