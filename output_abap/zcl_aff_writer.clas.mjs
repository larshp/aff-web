const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_103 = new abap.types.Integer().set(103);
const constant_104 = new abap.types.Integer().set(104);
const constant_105 = new abap.types.Integer().set(105);
const constant_112 = new abap.types.Integer().set(112);
const constant_117 = new abap.types.Integer().set(117);
const constant_122 = new abap.types.Integer().set(122);
const constant_2 = new abap.types.Integer().set(2);
const constant_3 = new abap.types.Integer().set(3);
const constant_4 = new abap.types.Integer().set(4);
const constant_6 = new abap.types.Integer().set(6);
class zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.output = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    this.content = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    this.stack_of_structure = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), absolute_name: new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer=>tt_structure_stack");
    this.stack = new abap.types.Table(new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    this.indent_level = new abap.types.Integer({qualifiedName: "I"});
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    this.abap_doc_parser = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER"});
    this.ignore_til_indent_level = new abap.types.Integer({qualifiedName: "I"});
    this.abap_doc = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    this.fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
    this.c_indent_number_characters = zcl_aff_writer.c_indent_number_characters;
    this.c_abap_types = zcl_aff_writer.c_abap_types;
    this.log.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    this.abap_doc_parser.set(await (new abap.Classes['ZCL_AFF_ABAP_DOC_PARSER']()).constructor_());
    return this;
  }
  async format_name(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    result.set((await this.me.get().format_to_camel_case({name: name})));
    return result;
  }
  async format_to_camel_case(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let lower_name = new abap.types.String({qualifiedName: "STRING"});
    lower_name.set(abap.builtin.to_lower({val: name}));
    result.set(abap.builtin.to_mixed({val: lower_name}));
    return result;
  }
  async get_json_type_from_description(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique45 = element_description.get().type_kind;
    if (abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_csequence) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_clike) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_w) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_xstring) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_hex) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_enum)) {
      if (abap.compare.initial((await this.is_type_boolean({element_description: element_description}))) === false) {
        temp1.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean);
      } else {
        temp1.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string);
      }
      result.set(temp1);
    } else if (abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_float) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_numeric)) {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric);
    } else if (abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      if (abap.compare.initial((await this.is_type_timestamp({element_description: element_description}))) === false) {
        temp2.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time);
      } else {
        temp2.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric);
      }
      result.set(temp2);
    } else if (abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time) || abap.compare.eq(unique45, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time);
    } else {
      temp3.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp3.get();
    }
    return result;
  }
  async is_type_boolean(INPUT) {
    let result = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    type_name.set((await element_description.get().get_relative_name()));
    result.set(abap.builtin.boolc(abap.compare.eq(element_description.get().output_length, constant_1) && (abap.compare.initial(type_name) === false && abap.compare.cs(zcl_aff_writer.c_abap_types.get().boolean, type_name))));
    return result;
  }
  async is_type_timestamp(INPUT) {
    let result = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    type_name.set((await element_description.get().get_relative_name()));
    result.set(abap.builtin.boolc(abap.compare.initial(type_name) === false && abap.compare.cs(zcl_aff_writer.c_abap_types.get().timestamp, type_name)));
    return result;
  }
  async zif_aff_writer$write_element(INPUT) {
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let temp4 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    await this.write_element({element_name: element_name, element_description: element_description});
    abap.statements.clear(temp4);
    temp4.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().write_element);
    temp4.get().name.set(element_name);
    await this.add_to_stack({entry: temp4});
  }
  async zif_aff_writer$open_node(INPUT) {
    let node_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.node_description) {node_description.set(INPUT.node_description);}
    let node_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.node_name) {node_name.set(INPUT.node_name);}
    let temp5 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    let temp6 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    let temp7 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique46 = node_description.get().kind;
    if (abap.compare.eq(unique46, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await this.open_structure({structure_name: node_name, structure_description: node_description});
      abap.statements.clear(temp5);
      temp5.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_structure);
      temp5.get().name.set(node_name);
      await this.add_to_stack({entry: temp5});
    } else if (abap.compare.eq(unique46, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      await this.open_table({table_name: node_name, table_description: node_description});
      abap.statements.clear(temp6);
      temp6.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table);
      temp6.get().name.set(node_name);
      await this.add_to_stack({entry: temp6});
    } else {
      temp7.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp7.get();
    }
  }
  async zif_aff_writer$close_node(INPUT) {
    let node_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.node_description) {node_description.set(INPUT.node_description);}
    let node_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.node_name) {node_name.set(INPUT.node_name);}
    let temp8 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    let temp9 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    let temp10 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique47 = node_description.get().kind;
    if (abap.compare.eq(unique47, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await this.close_structure({structure_name: node_name, structure_description: node_description});
      abap.statements.clear(temp8);
      temp8.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_structure);
      temp8.get().name.set(node_name);
      await this.add_to_stack({entry: temp8});
    } else if (abap.compare.eq(unique47, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      await this.close_table({table_name: node_name, table_description: node_description});
      abap.statements.clear(temp9);
      temp9.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_table);
      temp9.get().name.set(node_name);
      await this.add_to_stack({entry: temp9});
    } else {
      temp10.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp10.get();
    }
  }
  async zif_aff_writer$get_output() {
    let result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    await this.append_before_output();
    abap.statements.append({source: this.content, lines: true, target: this.output});
    await this.append_after_output();
    result.set(this.output);
    return result;
  }
  async write_open_tag(INPUT) {
    let line = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.line) {line.set(INPUT.line);}
    await this.write_tag({line: line});
    this.indent_level.set(abap.operators.add(this.indent_level,constant_1));
  }
  async write_closing_tag(INPUT) {
    let line = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.line) {line.set(INPUT.line);}
    this.indent_level.set(abap.operators.minus(this.indent_level,constant_1));
    await this.write_tag({line: line});
  }
  async add_to_stack(INPUT) {
    let entry = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    if (INPUT && INPUT.entry) {entry.set(INPUT.entry);}
    abap.statements.insertInternal({data: entry, index: constant_1, table: this.stack});
  }
  async last_operation() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.Structure({operation: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry");
    if (abap.compare.initial(this.stack) === false) {
      abap.statements.clear(temp11);
      abap.statements.readTable(this.stack,{index: constant_1,into: temp12});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
        temp11.set(temp12.get().operation);
      }
      result.set(temp11);
    } else {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial);
    }
    return result;
  }
  async append_to_previous_line(INPUT) {
    let string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string) {string.set(INPUT.string);}
    let index = new abap.types.Integer({qualifiedName: "I"});
    let fs_temp13_ = new abap.types.FieldSymbol(new abap.types.String());
    let temp14 = new abap.types.Integer();
    let temp1 = new abap.types.String();
    let temp2 = new abap.types.Integer();
    index.set(abap.builtin.lines({val: this.me.get().content}));
    if (abap.compare.gt(index, constant_0)) {
      temp14.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().content,{index: index,assigning: fs_temp13_});
      abap.builtin.sy.get().tabix.set(temp14);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().content,{index: index,into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      fs_temp13_.set(abap.operators.concat(temp1,string));
    } else {
      abap.statements.insertInternal({data: string, table: this.me.get().content});
    }
  }
  async append_after_output() {
  }
  async append_before_output() {
  }
  async call_reader_and_decode(INPUT) {
    let read_abap_doc = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_source) {name_of_source.set(INPUT.name_of_source);}
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let ref = new abap.types.ABAPObject({qualifiedName: "IF_OO_CLIF_SOURCE"});
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let reader = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"});
    let result = new abap.types.String({qualifiedName: "STRING"});
    ref.set((await (await abap.Classes['CL_OO_FACTORY'].create_instance()).get().create_clif_source({clif_name: name_of_source})));
    await ref.get().if_oo_clif_source$get_source({source: source});
    reader.set((await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({name: name_of_source, source: source})));
    try {
      result.set((await reader.get().get_abap_doc_for_element({element_name: element_name})));
      read_abap_doc.set((await this.abap_doc_parser.get().parse({component_name: element_name, to_parse: result, log: this.log})));
    } catch (e) {
      if (e instanceof abap.Classes['CX_ROOT']) {
      } else {
        throw e;
      }
    }
    return read_abap_doc;
  }
  async remove_leading_trailing_spaces(INPUT) {
    let string_to_work_on = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string_to_work_on) {string_to_work_on = INPUT.string_to_work_on;}
    abap.statements.shift(string_to_work_on, {direction: 'RIGHT',deletingTrailing: abap.builtin.space});
    abap.statements.shift(string_to_work_on, {direction: 'LEFT',deletingLeading: abap.builtin.space});
  }
  async delete_first_of_struc_stack() {
    if (abap.compare.initial(this.stack_of_structure) === false) {
      await abap.statements.deleteInternal(this.stack_of_structure,{index: constant_1});
    }
  }
  async get_all_path_information(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source_type) {source_type = INPUT.source_type;}
    let source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.source) {source = INPUT.source;}
    let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.fullname_of_type) {fullname_of_type = INPUT.fullname_of_type;}
    let previous_absolute_name = new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"});
    let splitted_prev_name = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let index = new abap.types.Integer({qualifiedName: "I"});
    let temp15 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), absolute_name: new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack");
    let temp16 = new abap.types.Integer();
    let name_of_prev = new abap.types.String();
    let temp3 = new abap.types.String();
    let temp4 = new abap.types.Integer();
    let temp17 = new abap.types.String();
    let temp18 = new abap.types.Integer();
    let temp19 = new abap.types.String();
    let temp20 = new abap.types.Integer();
    let temp21 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), absolute_name: new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack");
    let temp22 = new abap.types.Integer();
    index.set(constant_0);
    while (abap.compare.le(abap.builtin.lines({val: splitted_prev_name}), constant_2)) {
      if (abap.compare.ge(index, abap.builtin.lines({val: this.stack_of_structure}))) {
        return;
      }
      index.set(abap.operators.add(index,constant_1));
      temp16.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_of_structure,{index: index,into: temp15});
      abap.builtin.sy.get().tabix.set(temp16);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      previous_absolute_name.set(temp15.get().absolute_name);
      splitted_prev_name.set((await this.get_splitted_absolute_name({absolute_name: previous_absolute_name})));
    }
    temp4.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: abap.builtin.lines({val: splitted_prev_name}),into: temp3});
    abap.builtin.sy.get().tabix.set(temp4);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    name_of_prev.set(temp3);
    temp18.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: constant_1,into: temp17});
    abap.builtin.sy.get().tabix.set(temp18);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    source_type.set(temp17);
    temp20.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: constant_2,into: temp19});
    abap.builtin.sy.get().tabix.set(temp20);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    source.set(temp19);
    fullname_of_type.set(abap.operators.concat(name_of_prev,new abap.types.Character({length: 1}).set('-')));
    index.set(abap.operators.minus(index,constant_1));
    while (abap.compare.gt(index, constant_0)) {
      temp22.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_of_structure,{index: index,into: temp21});
      abap.builtin.sy.get().tabix.set(temp22);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      fullname_of_type.set(abap.operators.concat(fullname_of_type,abap.operators.concat(temp21.get().name,new abap.types.Character({length: 1}).set('-'))));
      index.set(abap.operators.minus(index,constant_1));
    }
    fullname_of_type.set(abap.operators.concat(fullname_of_type,name));
  }
  async get_splitted_absolute_name(INPUT) {
    let result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let absolute_name = new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"});
    if (INPUT && INPUT.absolute_name) {absolute_name.set(INPUT.absolute_name);}
    let place_of_type = new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"});
    let splitted_in_componets = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let splitted_in_details = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    place_of_type.set(absolute_name);
    abap.statements.split({source: place_of_type, at: new abap.types.Character({length: 1}).set('\\'), table: splitted_in_componets});
    for await (const unique48 of abap.statements.loop(splitted_in_componets)) {
      fs_component_.assign(unique48);
      if (abap.compare.initial(fs_component_) === false) {
        abap.statements.split({source: fs_component_, at: new abap.types.Character({length: 1}).set('='), table: splitted_in_details});
        abap.statements.append({source: splitted_in_details, lines: true, target: result});
      }
    }
    return result;
  }
  async get_structure_of_enum_values(INPUT) {
    let link_to_values = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.link_to_values) {link_to_values.set(INPUT.link_to_values);}
    let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.fullname_of_type) {fullname_of_type.set(INPUT.fullname_of_type);}
    let structure_of_values = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    if (INPUT && INPUT.structure_of_values) {structure_of_values = INPUT.structure_of_values;}
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_source) {name_of_source = INPUT.name_of_source;}
    let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_constant) {name_of_constant = INPUT.name_of_constant;}
    await this.get_infos_of_values_link({values_link: link_to_values, name_of_source: name_of_source, name_of_constant: name_of_constant});
    structure_of_values.set((await this.get_constant_as_struc({name_of_source: name_of_source, name_of_constant: name_of_constant, fullname_of_type: fullname_of_type})));
  }
  async get_constant_as_struc(INPUT) {
    let constant_as_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_source) {name_of_source.set(INPUT.name_of_source);}
    let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_constant) {name_of_constant.set(INPUT.name_of_constant);}
    let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.fullname_of_type) {fullname_of_type.set(INPUT.fullname_of_type);}
    let constant = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let constant_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let temp23 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let temp24 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_INTFDESCR"});
    let constant_descr_intf = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_INTFDESCR"});
    let temp25 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let temp26 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR"});
    let constant_descr_clas = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR"});
    let temp27 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let temp28 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    try {
      constant_descr.set(await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_name({p_name: name_of_source}));
      abap.builtin.sy.get().subrc.set(0);
    } catch (e) {
      if (e.classic) {
          switch (e.classic.toUpperCase()) {
          case "TYPE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
          default: abap.builtin.sy.get().subrc.set(2); break;
            }
        } else {
            throw e;
        }
      }
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        temp23.set(name_of_source);
        msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_103, msgv1: temp23})));
        await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
      } else {
        if (abap.compare.eq(constant_descr.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_intf)) {
          await abap.statements.cast(temp24, constant_descr);
          constant_descr_intf.set(temp24);
          try {
            constant.set(await constant_descr_intf.get().get_attribute_type({p_name: name_of_constant}));
            abap.builtin.sy.get().subrc.set(0);
          } catch (e) {
            if (e.classic) {
                switch (e.classic.toUpperCase()) {
                case "ATTRIBUTE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                default: abap.builtin.sy.get().subrc.set(2); break;
                  }
              } else {
                  throw e;
              }
            }
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              temp25.set(abap.operators.concat(name_of_source,abap.operators.concat(new abap.types.Character({length: 2}).set('=>'),name_of_constant)));
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_104, msgv1: temp25})));
              await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
            }
          } else if (abap.compare.eq(constant_descr.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_class)) {
            await abap.statements.cast(temp26, constant_descr);
            constant_descr_clas.set(temp26);
            try {
              constant.set(await constant_descr_clas.get().get_attribute_type({p_name: name_of_constant}));
              abap.builtin.sy.get().subrc.set(0);
            } catch (e) {
              if (e.classic) {
                  switch (e.classic.toUpperCase()) {
                  case "ATTRIBUTE_NOT_FOUND": abap.builtin.sy.get().subrc.set(1); break;
                  default: abap.builtin.sy.get().subrc.set(2); break;
                    }
                } else {
                    throw e;
                }
              }
              if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
                temp27.set(abap.operators.concat(name_of_source,abap.operators.concat(new abap.types.Character({length: 2}).set('=>'),name_of_constant)));
                msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_104, msgv1: temp27})));
                await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
              }
            }
            await abap.statements.cast(temp28, constant);
            constant_as_struc.set(temp28);
          }
          return constant_as_struc;
        }
        async get_infos_of_values_link(INPUT) {
          let values_link = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.values_link) {values_link.set(INPUT.values_link);}
          let name_of_source = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.name_of_source) {name_of_source = INPUT.name_of_source;}
          let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.name_of_constant) {name_of_constant = INPUT.name_of_constant;}
          let link = new abap.types.String({qualifiedName: "STRING"});
          let split_at_point = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
          let temp29 = new abap.types.String({qualifiedName: "STRING"});
          let temp30 = new abap.types.Integer();
          let temp31 = new abap.types.String({qualifiedName: "STRING"});
          let temp32 = new abap.types.Integer();
          link.set(values_link);
          abap.statements.replace({target:link, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`[\\s]`)});
          abap.statements.replace({target:link, all:true, with: new abap.types.String().set(``),of: new abap.types.String().set(`data:`)});
          abap.statements.split({source: link, at: new abap.types.Character({length: 1}).set('.'), table: split_at_point});
          if (abap.compare.eq(abap.builtin.lines({val: split_at_point}), constant_2)) {
            temp30.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(split_at_point,{index: constant_1,into: temp29});
            abap.builtin.sy.get().tabix.set(temp30);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            name_of_source.set(abap.builtin.to_upper({val: temp29}));
            temp32.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(split_at_point,{index: constant_2,into: temp31});
            abap.builtin.sy.get().tabix.set(temp32);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            name_of_constant.set(abap.builtin.to_upper({val: temp31}));
          }
        }
        async get_abap_doc_for_absolute_name(INPUT) {
          let abap_doc = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
          let absolute_name = new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"});
          if (INPUT && INPUT.absolute_name) {absolute_name.set(INPUT.absolute_name);}
          let splitted_prev_name = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
          let source_type = new abap.types.String();
          let temp5 = new abap.types.String();
          let temp6 = new abap.types.Integer();
          let source = new abap.types.String();
          let temp7 = new abap.types.String();
          let temp8 = new abap.types.Integer();
          let fullname_of_type = new abap.types.String();
          let temp9 = new abap.types.String();
          let temp10 = new abap.types.Integer();
          splitted_prev_name.set((await this.get_splitted_absolute_name({absolute_name: absolute_name})));
          if (abap.compare.ge(abap.builtin.lines({val: splitted_prev_name}), constant_4)) {
            temp6.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: constant_1,into: temp5});
            abap.builtin.sy.get().tabix.set(temp6);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            source_type.set(temp5);
            temp8.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: constant_2,into: temp7});
            abap.builtin.sy.get().tabix.set(temp8);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            source.set(temp7);
            temp10.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: constant_4,into: temp9});
            abap.builtin.sy.get().tabix.set(temp10);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            fullname_of_type.set(temp9);
            if (abap.compare.eq(source_type, new abap.types.Character({length: 5}).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character({length: 9}).set('INTERFACE'))) {
              abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: fullname_of_type})));
            }
          }
          return abap_doc;
        }
        async compare_abap_doc(INPUT) {
          let abap_doc_additional = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
          if (INPUT && INPUT.abap_doc_additional) {abap_doc_additional.set(INPUT.abap_doc_additional);}
          let abap_doc_base = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
          if (INPUT && INPUT.abap_doc_base) {abap_doc_base = INPUT.abap_doc_base;}
          if (abap.compare.initial(abap_doc_base.get().enumvalues_link)) {
            abap_doc_base.get().enumvalues_link.set(abap_doc_additional.get().enumvalues_link);
          }
          if (abap.compare.initial(abap_doc_base.get().title) && abap.compare.initial(abap_doc_base.get().description)) {
            abap_doc_base.get().title.set(abap_doc_additional.get().title);
            abap_doc_base.get().description.set(abap_doc_additional.get().description);
          }
          if (abap.compare.initial(abap_doc_base.get().minimum) && abap.compare.initial(abap_doc_base.get().maximum) && abap.compare.initial(abap_doc_base.get().exclusive_maximum) && abap.compare.initial(abap_doc_base.get().exclusive_minimum)) {
            abap_doc_base.get().minimum.set(abap_doc_additional.get().minimum);
            abap_doc_base.get().maximum.set(abap_doc_additional.get().maximum);
            abap_doc_base.get().exclusive_minimum.set(abap_doc_additional.get().exclusive_minimum);
            abap_doc_base.get().exclusive_maximum.set(abap_doc_additional.get().exclusive_maximum);
          }
          if (abap.compare.initial(abap_doc_base.get().multiple_of)) {
            abap_doc_base.get().multiple_of.set(abap_doc_additional.get().multiple_of);
          }
          if (abap.compare.initial(abap_doc_base.get().max_length) && abap.compare.initial(abap_doc_base.get().min_length)) {
            abap_doc_base.get().min_length.set(abap_doc_additional.get().min_length);
            abap_doc_base.get().max_length.set(abap_doc_additional.get().max_length);
          }
          if (abap.compare.initial(abap_doc_base.get().default_)) {
            abap_doc_base.get().default_.set(abap_doc_additional.get().default_);
          }
          if (abap.compare.initial(abap_doc_base.get().callback_class)) {
            abap_doc_base.get().callback_class.set(abap_doc_additional.get().callback_class);
          }
        }
        async get_default_from_link(INPUT) {
          let default_value = new abap.types.String({qualifiedName: "STRING"});
          let link = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.link) {link.set(INPUT.link);}
          let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.fullname_of_type) {fullname_of_type.set(INPUT.fullname_of_type);}
          let element_type = new abap.types.Character({qualifiedName: "abap_typekind"});
          if (INPUT && INPUT.element_type) {element_type = INPUT.element_type;}
          let link_to_work_on = new abap.types.String({qualifiedName: "STRING"});
          let splitted = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
          let default_abap = new abap.types.String({qualifiedName: "STRING"});
          let temp11 = new abap.types.String({qualifiedName: "STRING"});
          let temp12 = new abap.types.Integer();
          link_to_work_on.set(link);
          abap.statements.replace({target:link_to_work_on, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`(@link|data:)`)});
          abap.statements.replace({target:link_to_work_on, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`[\\s]`)});
          abap.statements.split({source: link_to_work_on, at: new abap.types.Character({length: 1}).set('.'), table: splitted});
          if (abap.compare.eq((await this.validate_default_link({splitted_link: splitted, fullname_of_type: fullname_of_type, element_type: element_type})), abap.builtin.abap_true)) {
            temp12.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted,{index: abap.builtin.lines({val: splitted}),into: temp11});
            abap.builtin.sy.get().tabix.set(temp12);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
              throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
            }
            default_abap.set(temp11);
            default_value.set((await this.format_to_camel_case({name: default_abap})));
          }
          return default_value;
        }
        async zif_aff_writer$get_log() {
          let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
          log.set(this.me.get().log);
          return log;
        }
        async is_callback_class_valid(INPUT) {
          let is_valid = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
          let class_name = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.class_name) {class_name.set(INPUT.class_name);}
          let component_name = new abap.types.String({qualifiedName: "STRING"});
          if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
          let name_of_callback_class = new abap.types.String({qualifiedName: "STRING"});
          let temp33 = new abap.types.String({qualifiedName: "STRING"});
          let result = new abap.types.Table(new abap.types.Structure({cpdkey: new abap.types.Structure({clsname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), cpdname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow")}, "cl_oo_classname_service=>ty_row"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "cl_oo_classname_service=>ty_result");
          let has_method_get_subschema = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
          let temp1 = new abap.types.Integer();
          let temp4 = new abap.types.Structure({clsname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), cpdname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow");
          let has_method_serialize = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
          let temp2 = new abap.types.Integer();
          let temp5 = new abap.types.Structure({clsname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), cpdname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow");
          let has_method_deserialize = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
          let temp3 = new abap.types.Integer();
          let temp6 = new abap.types.Structure({clsname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), cpdname: new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow");
          name_of_callback_class.set(abap.builtin.to_upper({val: class_name}));
          temp33.set(name_of_callback_class);
          try {
            result.set(await abap.Classes['CL_OO_CLASSNAME_SERVICE'].get_all_method_includes({clsname: temp33}));
            abap.builtin.sy.get().subrc.set(0);
          } catch (e) {
            if (e.classic) {
                switch (e.classic.toUpperCase()) {
                case "CLASS_NOT_EXISTING": abap.builtin.sy.get().subrc.set(1); break;
                  }
              } else {
                  throw e;
              }
            }
            if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
              abap.statements.clear(temp4);
              temp4.get().clsname.set(name_of_callback_class);
              temp4.get().cpdname.set(new abap.types.Character({length: 13}).set('GET_SUBSCHEMA'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp4);}});
              temp1.set(abap.builtin.sy.get().subrc);
              has_method_get_subschema.set(abap.builtin.boolc(abap.compare.eq(temp1, constant_0)));
              abap.statements.clear(temp5);
              temp5.get().clsname.set(name_of_callback_class);
              temp5.get().cpdname.set(new abap.types.Character({length: 9}).set('SERIALIZE'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp5);}});
              temp2.set(abap.builtin.sy.get().subrc);
              has_method_serialize.set(abap.builtin.boolc(abap.compare.eq(temp2, constant_0)));
              abap.statements.clear(temp6);
              temp6.get().clsname.set(name_of_callback_class);
              temp6.get().cpdname.set(new abap.types.Character({length: 11}).set('DESERIALIZE'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp6);}});
              temp3.set(abap.builtin.sy.get().subrc);
              has_method_deserialize.set(abap.builtin.boolc(abap.compare.eq(temp3, constant_0)));
              is_valid.set(abap.builtin.boolc(abap.compare.eq(has_method_get_subschema, abap.builtin.abap_true) && abap.compare.eq(has_method_serialize, abap.builtin.abap_true) && abap.compare.eq(has_method_deserialize, abap.builtin.abap_true)));
            }
            if (abap.compare.eq(is_valid, abap.builtin.abap_false)) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg106, component_name: component_name});
            }
            return is_valid;
          }
          async validate_default_link(INPUT) {
            let is_valid = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
            let splitted_link = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
            if (INPUT && INPUT.splitted_link) {splitted_link.set(INPUT.splitted_link);}
            let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
            if (INPUT && INPUT.fullname_of_type) {fullname_of_type.set(INPUT.fullname_of_type);}
            let element_type = new abap.types.Character({qualifiedName: "abap_typekind"});
            if (INPUT && INPUT.element_type) {element_type = INPUT.element_type;}
            let msg = new abap.types.String({qualifiedName: "STRING"});
            let source_name = new abap.types.String({qualifiedName: "STRING"});
            let temp13 = new abap.types.String();
            let temp14 = new abap.types.Integer();
            let constant_name = new abap.types.String({qualifiedName: "STRING"});
            let temp15 = new abap.types.String();
            let temp16 = new abap.types.Integer();
            let component_name = new abap.types.String({qualifiedName: "STRING"});
            let temp17 = new abap.types.String();
            let temp18 = new abap.types.Integer();
            let constant_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
            let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
            let temp34 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
            let temp35 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
            let row = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
            let temp36 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
            let temp19 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
            let temp37 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
            let temp20 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
            if (abap.compare.eq(abap.builtin.lines({val: splitted_link}), constant_3)) {
              temp14.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: constant_1,into: temp13});
              abap.builtin.sy.get().tabix.set(temp14);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
                throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              }
              source_name.set(abap.builtin.to_upper({val: temp13}));
              temp16.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: constant_2,into: temp15});
              abap.builtin.sy.get().tabix.set(temp16);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
                throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              }
              constant_name.set(abap.builtin.to_upper({val: temp15}));
              temp18.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: constant_3,into: temp17});
              abap.builtin.sy.get().tabix.set(temp18);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
                throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              }
              component_name.set(abap.builtin.to_upper({val: temp17}));
              constant_description.set((await this.get_constant_as_struc({name_of_source: source_name, name_of_constant: constant_name, fullname_of_type: fullname_of_type})));
              if (abap.compare.initial(constant_description) === false) {
                components.set((await constant_description.get().get_components()));
                abap.statements.clear(temp34);
                abap.statements.readTable(components,{into: temp35,withKey: (i) => {return abap.compare.eq(i.name, component_name);}});
                if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
                  temp34.set(temp35);
                }
                row.set(temp34);
                if (abap.compare.initial(row) === false) {
                  if (abap.compare.eq(row.get().type.get().type_kind, element_type)) {
                    is_valid.set(abap.builtin.abap_true);
                  } else {
                    temp36.set(constant_name);
                    temp19.set(fullname_of_type);
                    msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_122, msgv1: temp36, msgv2: temp19})));
                    await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
                  }
                } else {
                  temp37.set(component_name);
                  temp20.set(constant_name);
                  msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_105, msgv1: temp37, msgv2: temp20})));
                  await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
                }
              }
            }
            return is_valid;
          }
          async is_default_value_valid(INPUT) {
            let is_valid = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
            let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
            if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
            let default_value = new abap.types.String({qualifiedName: "STRING"});
            if (INPUT && INPUT.default_value) {default_value.set(INPUT.default_value);}
            let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
            if (INPUT && INPUT.fullname_of_type) {fullname_of_type.set(INPUT.fullname_of_type);}
            let default_ = new abap.types.String({qualifiedName: "STRING"});
            let type = new abap.types.String({qualifiedName: "STRING"});
            let r_field = new abap.types.DataReference(new abap.types.Character({length: 4}));
            let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
            let message_text = new abap.types.String({qualifiedName: "STRING"});
            let string = new abap.types.String({qualifiedName: "STRING"});
            default_.set(default_value);
            abap.statements.replace({target:default_, all:true, with: new abap.types.String().set(``),of: new abap.types.String().set(`"`)});
            type.set((await this.get_json_type_from_description({element_description: element_description})));
            if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
            await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: element_description, dref: r_field});
            abap.statements.assign({target: fs_field_, source: (r_field).getPointer()});
            if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
              message_text.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_117, msgv1: new abap.types.String().set(`UTCLONG`)})));
              await this.log.get().zif_aff_log$add_warning({message_text: message_text, component_name: fullname_of_type});
              is_valid.set(abap.builtin.abap_false);
              return is_valid;
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
              default_.set(abap.builtin.to_lower({val: default_}));
              if (abap.compare.eq(default_, new abap.types.Character({length: 9}).set('abap_true')) || abap.compare.eq(default_, new abap.types.Character({length: 1}).set('x')) || abap.compare.eq(default_, new abap.types.Character({length: 10}).set('abap_false')) || abap.compare.eq(default_, new abap.types.Character({length: 0}).set(''))) {
                is_valid.set(abap.builtin.abap_true);
              }
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string) || abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
              try {
                fs_field_.set(default_);
                string.set(fs_field_);
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_numeric)) {
                  abap.statements.shift(string, {direction: 'LEFT',deletingLeading: new abap.types.Character({length: 1}).set('0')});
                }
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
                  default_.set(abap.operators.concat(default_,abap.builtin.repeat({val: new abap.types.Character({length: 1}).set('0'), occ: abap.operators.minus(constant_6,abap.builtin.strlen({val: default_}))})));
                }
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
                  abap.statements.replace({target:default_, all:false, with: new abap.types.String().set(` `),regex: new abap.types.String().set(`T|t`),of: new abap.types.String().set(`T|t`)});
                }
                await this.remove_leading_trailing_spaces({string_to_work_on: string});
                await this.remove_leading_trailing_spaces({string_to_work_on: default_});
                if (abap.compare.eq(string, default_)) {
                  is_valid.set(abap.builtin.abap_true);
                } else {
                  is_valid.set(abap.builtin.abap_false);
                }
              } catch (e) {
                if (e instanceof abap.Classes['CX_ROOT']) {
                  is_valid.set(abap.builtin.abap_false);
                } else {
                  throw e;
                }
              }
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
              try {
                fs_field_.set(default_);
                if (abap.compare.eq(abap.operators.minus(fs_field_,default_), constant_0)) {
                  is_valid.set(abap.builtin.abap_true);
                } else {
                  is_valid.set(abap.builtin.abap_false);
                }
              } catch (e) {
                if (e instanceof abap.Classes['CX_ROOT']) {
                  is_valid.set(abap.builtin.abap_false);
                } else {
                  throw e;
                }
              }
            }
            if (abap.compare.eq(is_valid, abap.builtin.abap_false)) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg114, component_name: fullname_of_type});
            }
            return is_valid;
          }
          async zif_aff_writer$validate(INPUT) {
            let result = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
            let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
            if (INPUT && INPUT.source) {source.set(INPUT.source);}
            let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
            if (INPUT && INPUT.log) {log.set(INPUT.log);}
            result.set(abap.builtin.abap_true);
            return result;
          }
          async zif_aff_writer$close_include() {
            await this.delete_first_of_struc_stack();
          }
          async zif_aff_writer$open_include(INPUT) {
            let include_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
            if (INPUT && INPUT.include_description) {include_description.set(INPUT.include_description);}
            let temp38 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), absolute_name: new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack");
            abap.statements.clear(temp38);
            temp38.get().absolute_name.set(include_description.get().absolute_name);
            abap.statements.insertInternal({data: temp38, index: constant_1, table: this.me.get().stack_of_structure});
          }
          async is_sy_langu(INPUT) {
            let result = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
            let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
            if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
            let temp39 = new abap.types.Character({qualifiedName: "sy-langu"});
            let temp21 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
            let sy_langu_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
            abap.statements.clear(temp39);
            await abap.statements.cast(temp21, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: temp39})));
            sy_langu_description.set(temp21);
            result.set(abap.builtin.boolc(abap.compare.eq(sy_langu_description.get().edit_mask, element_description.get().edit_mask)));
            return result;
          }
          async clear_type_specifics() {
            abap.statements.clear(this.abap_doc);
            abap.statements.clear(this.fullname_of_type);
          }
          async check_redundant_annotations() {
            let msg = new abap.types.String({qualifiedName: "STRING"});
            if (abap.compare.eq(this.abap_doc.get().showalways, abap.builtin.abap_true) && abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true)) {
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_112})));
              await this.log.get().zif_aff_log$add_info({message_text: msg, component_name: this.fullname_of_type});
            }
            if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true) && abap.compare.initial(this.abap_doc.get().default_) === false) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg126, component_name: this.fullname_of_type});
            }
          }
        }
        abap.Classes['ZCL_AFF_WRITER'] = zcl_aff_writer;
        zcl_aff_writer.c_indent_number_characters = new abap.types.Integer({qualifiedName: "I"});
        zcl_aff_writer.c_indent_number_characters.set(2);
        zcl_aff_writer.c_abap_types = new abap.types.Structure({boolean: new abap.types.String({qualifiedName: "STRING"}), timestamp: new abap.types.String({qualifiedName: "STRING"})});
        zcl_aff_writer.c_abap_types.get().boolean.set(`ABAP_BOOLEAN;ABAP_BOOL;BOOLEAN;BOOLE_D;XFELD;XSDBOOLEAN;FLAG`);
        zcl_aff_writer.c_abap_types.get().timestamp.set(`TIMESTAMP;TIMESTAMPL`);
export {zcl_aff_writer};
//# sourceMappingURL=zcl_aff_writer.clas.mjs.map