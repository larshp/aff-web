const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer_xslt.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_102 = new abap.types.Integer().set(102);
const constant_117 = new abap.types.Integer().set(117);
const constant_122 = new abap.types.Integer().set(122);
const constant_2 = new abap.types.Integer().set(2);
const constant_255 = new abap.types.Integer().set(255);
class zcl_aff_writer_xslt extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.st_root_name = new abap.types.String({qualifiedName: "STRING"});
    this.st_template_imports = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    this.next_tag_without_name_and_ref = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    this.stack_default_comp_of_struc = new abap.types.Table(new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_components_with_default");
    this.ignore_next_elements = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    let st_root_name = new abap.types.Character();
    if (INPUT && INPUT.st_root_name) {st_root_name = INPUT.st_root_name;}
    if (INPUT === undefined || INPUT.st_root_name === undefined) {st_root_name = new abap.types.Character({length: 4}).set('root');}
    await super.constructor_();
    this.me.get().st_root_name.set(st_root_name);
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_true);
    return this;
  }
  async open_structure(INPUT) {
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let temp1 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), absolute_name: new abap.types.Character({length: 200, qualifiedName: "abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack");
    await this.write_open_structure({structure_name: structure_name, structure_description: structure_description});
    abap.statements.clear(temp1);
    temp1.get().name.set(structure_name);
    temp1.get().absolute_name.set(structure_description.get().absolute_name);
    abap.statements.insertInternal({data: temp1, index: constant_1, table: this.me.get().stack_of_structure});
  }
  async write_open_structure(INPUT) {
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let temp2 = new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default");
    await this.clear_type_specifics();
    await this.set_abapdoc_fullname_tab_struc({type_description: structure_description, type_name: structure_name});
    if (abap.compare.initial(this.abap_doc.get().callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: this.abap_doc.get().callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_callback_template({element_name: structure_name, description: structure_description});
    }
    await this.write_open_tag({line: new abap.types.String().set(`<tt:cond${abap.templateFormatting((await this.get_condition_tab_or_struc({type_name: structure_name})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<object${abap.templateFormatting((await this.get_name({name: structure_name})))}${abap.templateFormatting((await this.get_ref_for_structure({name: structure_name})))}>`)});
    abap.statements.clear(temp2);
    temp2.get().line_to_insert.set(abap.builtin.lines({val: this.content}));
    abap.statements.insertInternal({data: temp2, index: constant_1, table: this.me.get().stack_default_comp_of_struc});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:group>`)});
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_false);
  }
  async open_table(INPUT) {
    let table_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.table_name) {table_name.set(INPUT.table_name);}
    let table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.table_description) {table_description.set(INPUT.table_description);}
    await this.clear_type_specifics();
    await this.set_abapdoc_fullname_tab_struc({type_description: table_description, type_name: table_name});
    if (abap.compare.initial(this.abap_doc.get().callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: this.abap_doc.get().callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_callback_template({element_name: table_name, description: table_description});
    }
    await this.write_open_tag({line: new abap.types.String().set(`<tt:cond${abap.templateFormatting((await this.get_condition_tab_or_struc({type_name: table_name})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<array${abap.templateFormatting((await this.get_name({name: table_name})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:loop${abap.templateFormatting((await this.get_ref({name: table_name})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:group>`)});
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_true);
  }
  async close_structure(INPUT) {
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let temp3 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    await this.delete_first_of_struc_stack();
    await this.write_defaults();
    await abap.statements.cast(temp3, structure_description);
    await this.enable_extension({structure_description: temp3});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:group>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</object>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond>`)});
    await this.reset_indent_level_tag();
  }
  async close_table(INPUT) {
    let table_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.table_name) {table_name.set(INPUT.table_name);}
    let table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.table_description) {table_description.set(INPUT.table_description);}
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:group>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:loop>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</array>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond>`)});
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_false);
    await this.reset_indent_level_tag();
  }
  async append_before_output() {
    let temp4 = new abap.types.String();
    let temp5 = new abap.types.String();
    abap.statements.append({source: new abap.types.String().set(`<?sap.transform simple?>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">`), target: this.output});
    abap.statements.append({source: this.st_template_imports, lines: true, target: this.output});
    temp4.set(new abap.types.String().set(`<tt:root name="${abap.templateFormatting(this.st_root_name)}"/>`));
    abap.statements.append({source: temp4, target: this.output});
    abap.statements.append({source: new abap.types.String().set(`<tt:template>`), target: this.output});
    temp5.set(new abap.types.String().set(`<tt:ref name="${abap.templateFormatting(this.st_root_name)}">`));
    abap.statements.append({source: temp5, target: this.output});
  }
  async append_after_output() {
    abap.statements.append({source: new abap.types.String().set(`</tt:ref>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`</tt:template>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`</tt:transform>`), target: this.output});
  }
  async write_element(INPUT) {
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let enum_values = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let type = new abap.types.String({qualifiedName: "STRING"});
    let tag = new abap.types.String({qualifiedName: "STRING"});
    if (!(abap.compare.eq(this.ignore_next_elements, abap.builtin.abap_false))) {
      return;
    }
    await this.clear_type_specifics();
    await this.set_abapdoc_fullname_element({element_description: element_description, element_name: element_name});
    if (abap.compare.initial(this.abap_doc.get().enumvalues_link) === false) {
      enum_values.set((await this.get_enum_values({enum_type: element_description.get().type_kind})));
    }
    if (abap.compare.initial(enum_values) === false) {
      temp6.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string);
    } else {
      temp6.set((await this.get_json_type_from_description({element_description: element_description})));
    }
    type.set(temp6);
    tag.set((await this.get_tag_from_type({json_type: type})));
    if (abap.compare.initial(this.abap_doc.get().callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: this.abap_doc.get().callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_callback_template({element_name: element_name, description: element_description, tag: tag});
    }
    await this.write_open_tag({line: new abap.types.String().set(`<tt:cond${abap.templateFormatting((await this.get_condition_for_element({element_name: element_name, element_description: element_description, enum_values: enum_values, type: type})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<${abap.templateFormatting(tag)}${abap.templateFormatting((await this.get_name({name: element_name})))}>`)});
    if ((abap.compare.initial((await this.is_sy_langu({element_description: element_description}))) === false)) {
      await this.write_iso_language_callback({element_name: element_name});
    } else if (abap.compare.initial(enum_values)) {
      await this.write_tag({line: new abap.types.String().set(`<tt:value${abap.templateFormatting((await this.get_ref({name: element_name})))}${abap.templateFormatting((await this.get_option({json_type: type, element_description: element_description})))}/>`)});
    } else {
      await this.write_enum_value_mappings({element_description: element_description, json_type: type, element_name: element_name, enum_values: enum_values});
    }
    await this.write_closing_tag({line: new abap.types.String().set(`</${abap.templateFormatting(tag)}>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond>`)});
    await this.reset_indent_level_tag();
  }
  async set_abapdoc_fullname_element(INPUT) {
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let splitted_absolute_name = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let source_type = new abap.types.String();
    let temp1 = new abap.types.String();
    let temp2 = new abap.types.Integer();
    let source = new abap.types.String();
    let temp3 = new abap.types.String();
    let temp4 = new abap.types.Integer();
    let already_searched = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let abap_doc_second = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_true)) {
      splitted_absolute_name.set((await this.get_splitted_absolute_name({absolute_name: element_description.get().absolute_name})));
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: constant_1,into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      source_type.set(temp1);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: constant_2,into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      source.set(temp3);
      this.fullname_of_type.set(element_name);
      already_searched.set(abap.builtin.abap_true);
    } else {
      await this.get_all_path_information({name: element_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
    }
    if (abap.compare.eq(source_type, new abap.types.Character({length: 5}).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character({length: 9}).set('INTERFACE'))) {
      this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: this.fullname_of_type})));
    }
    if (abap.compare.eq(already_searched, abap.builtin.abap_false)) {
      abap_doc_second.set((await this.get_abap_doc_for_absolute_name({absolute_name: element_description.get().absolute_name})));
      await this.compare_abap_doc({abap_doc_additional: abap_doc_second, abap_doc_base: this.abap_doc});
    }
    await this.check_redundant_annotations();
  }
  async set_abapdoc_fullname_tab_struc(INPUT) {
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.type_description) {type_description.set(INPUT.type_description);}
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type_name) {type_name.set(INPUT.type_name);}
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_second = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      await this.get_all_path_information({name: type_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
      if (abap.compare.eq(source_type, new abap.types.Character({length: 5}).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character({length: 9}).set('INTERFACE'))) {
        this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: this.fullname_of_type})));
      }
      abap_doc_second.set((await this.get_abap_doc_for_absolute_name({absolute_name: type_description.get().absolute_name})));
      await this.compare_abap_doc({abap_doc_additional: abap_doc_second, abap_doc_base: this.abap_doc});
    } else {
      this.abap_doc.set((await this.get_abap_doc_for_absolute_name({absolute_name: type_description.get().absolute_name})));
      this.fullname_of_type.set(type_name);
    }
    await this.check_redundant_annotations();
  }
  async get_tag_from_type(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let json_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.json_type) {json_type.set(INPUT.json_type);}
    let temp7 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp8 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique60 = json_type;
    if (abap.compare.eq(unique60, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string) || abap.compare.eq(unique60, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
      result.set(new abap.types.String().set(`str`));
    } else if (abap.compare.eq(unique60, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
      result.set(new abap.types.String().set(`bool`));
    } else if (abap.compare.eq(unique60, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
      result.set(new abap.types.String().set(`num`));
    } else {
      temp7.set(json_type);
      msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_102, msgv1: temp7})));
      temp8.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
      throw temp8.get();
    }
    return result;
  }
  async get_option(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let json_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.json_type) {json_type.set(INPUT.json_type);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let temp9 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    if (abap.compare.eq((await this.is_sy_langu({element_description: element_description})), abap.builtin.abap_true)) {
      result.set(new abap.types.String().set(` option="format(language)"`));
    } else {
      let unique61 = json_type;
      if (abap.compare.eq(unique61, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string)) {
        result.set(abap.builtin.space);
      } else if (abap.compare.eq(unique61, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
        result.set(new abap.types.String().set(` option="format(dateTimeOffset)"`));
      } else if (abap.compare.eq(unique61, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
        result.set(new abap.types.String().set(` option="format(boolean)"`));
      } else if (abap.compare.eq(unique61, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
        result.set(new abap.types.String().set(` option="format(alpha)"`));
      } else {
        temp9.set(json_type);
        msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_102, msgv1: temp9})));
        temp10.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
        throw temp10.get();
      }
    }
    return result;
  }
  async write_enum_value_mappings(INPUT) {
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let json_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.json_type) {json_type.set(INPUT.json_type);}
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let enum_values = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    if (INPUT && INPUT.enum_values) {enum_values.set(INPUT.enum_values);}
    let index = new abap.types.Integer({qualifiedName: "I"});
    let fs_enum_value_ = new abap.types.FieldSymbol(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"));
    let abap_value = new abap.types.String({qualifiedName: "STRING"});
    let xml_value = new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"});
    if (abap.compare.eq(abap.builtin.lines({val: enum_values}), constant_0)) {
      return;
    }
    await this.write_tag({line: new abap.types.String().set(`<tt:value${abap.templateFormatting((await this.get_ref({name: element_name})))} ${abap.templateFormatting((await this.get_option({json_type: json_type, element_description: element_description})))}map="`)});
    index.set(constant_1);
    for await (const unique62 of abap.statements.loop(enum_values)) {
      fs_enum_value_.assign(unique62);
      abap_value.set((await this.get_abap_value({abap_value: fs_enum_value_.get().abap_value, element_description: element_description})));
      if (abap.compare.initial(fs_enum_value_.get().overwritten_json_value)) {
        xml_value.set(fs_enum_value_.get().json_value);
      } else {
        xml_value.set(fs_enum_value_.get().overwritten_json_value);
      }
      if (abap.compare.lt(index, abap.builtin.lines({val: enum_values}))) {
        await this.write_tag({line: new abap.types.String().set(`  val(${abap.templateFormatting(abap_value)})=xml('${abap.templateFormatting(xml_value)}'),`)});
      } else {
        await this.write_tag({line: new abap.types.String().set(`  val(${abap.templateFormatting(abap_value)})=xml('${abap.templateFormatting(xml_value)}')`)});
        await this.write_tag({line: new abap.types.String().set(`"/>`)});
      }
      index.set(abap.operators.add(index,constant_1));
    }
  }
  async get_abap_value(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let abap_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.abap_value) {abap_value.set(INPUT.abap_value);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let abap_value_copy = new abap.types.String({qualifiedName: "STRING"});
    let unique63 = element_description.get().type_kind;
    if (abap.compare.eq(unique63, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique63, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique63, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique63, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)) {
      abap_value_copy.set(abap_value);
      abap.statements.condense(abap_value_copy, {nogaps: false});
      result.set(new abap.types.String().set(`I(${abap.templateFormatting(abap_value_copy)})`));
    } else if (abap.compare.eq(unique63, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num)) {
      result.set(new abap.types.String().set(`N('${abap.templateFormatting(abap_value)}')`));
    } else {
      result.set(new abap.types.String().set(`'${abap.templateFormatting(abap_value)}'`));
    }
    return result;
  }
  async get_name(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` name="${abap.templateFormatting((await this.format_name({name: name})))}"`));
    }
    return result;
  }
  async get_ref(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` ref="${abap.templateFormatting(name)}"`));
    }
    return result;
  }
  async get_ref_for_structure(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` tt:ref="${abap.templateFormatting(name)}"`));
    }
    return result;
  }
  async get_condition_tab_or_struc(INPUT) {
    let condition = new abap.types.String({qualifiedName: "STRING"});
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type_name) {type_name.set(INPUT.type_name);}
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_true)) {
      return condition;
    }
    if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) && abap.compare.eq(this.abap_doc.get().showalways, abap.builtin.abap_false)) {
      condition.set(new abap.types.String().set(` s-check="not-initial(${abap.templateFormatting(type_name)})"`));
    }
    condition.set(new abap.types.String().set(`${abap.templateFormatting(condition)} frq="?"`));
    return condition;
  }
  async get_condition_for_element(INPUT) {
    let condition = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    let enum_values = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    if (INPUT && INPUT.enum_values) {enum_values.set(INPUT.enum_values);}
    let default_ = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_true)) {
      return condition;
    }
    if (abap.compare.initial(this.abap_doc.get().default_) === false && abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false)) {
      default_.set((await this.get_default({enum_values: enum_values, structure_name: element_name, element_description: element_description, type: type})));
    }
    if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) && abap.compare.eq(this.abap_doc.get().showalways, abap.builtin.abap_false)) {
      if (abap.compare.initial(default_) === false) {
        condition.set(new abap.types.String().set(` s-check="${abap.templateFormatting(element_name)}!=${abap.templateFormatting(default_)}"`));
      } else {
        condition.set(new abap.types.String().set(` s-check="not-initial(${abap.templateFormatting(element_name)})"`));
      }
    }
    condition.set(new abap.types.String().set(`${abap.templateFormatting(condition)} frq="?"`));
    return condition;
  }
  async get_default(INPUT) {
    let default_ = new abap.types.String({qualifiedName: "STRING"});
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let enum_values = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    if (INPUT && INPUT.enum_values) {enum_values.set(INPUT.enum_values);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    let table = new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair");
    let temp5 = new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default");
    let temp6 = new abap.types.Integer();
    let temp11 = new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair");
    let fs_temp12_ = new abap.types.FieldSymbol(new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default"));
    let temp13 = new abap.types.Integer();
    default_.set((await this.get_default_value_from_default({enum_values: enum_values, element_description: element_description, type: type})));
    if (abap.compare.initial(default_) === false) {
      temp6.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_default_comp_of_struc,{index: constant_1,into: temp5});
      abap.builtin.sy.get().tabix.set(temp6);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      table.set(temp5.get().table_of_defaults);
      abap.statements.clear(temp11);
      temp11.get().var_name.set(structure_name);
      temp11.get().default_value.set(default_);
      abap.statements.append({source: temp11, target: table});
      temp13.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_default_comp_of_struc,{index: constant_1,assigning: fs_temp12_});
      abap.builtin.sy.get().tabix.set(temp13);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      fs_temp12_.get().table_of_defaults.set(table);
    }
    return default_;
  }
  async get_enum_values(INPUT) {
    let result = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    let enum_type = new abap.types.Character({qualifiedName: "abap_typekind"});
    if (INPUT && INPUT.enum_type) {enum_type = INPUT.enum_type;}
    let structure_of_values = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    let fs_attr_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    let fs_fs_data_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({length: new abap.types.Integer({qualifiedName: "LENGTH"}), decimals: new abap.types.Integer({qualifiedName: "DECIMALS"}), type_kind: new abap.types.Character({qualifiedName: "abap_typekind"}), name: new abap.types.Character({length: 30, qualifiedName: "abap_compname"})}, "abap_compdescr"));
    let fullname_of_component = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_of_component = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    let temp14 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let temp7 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp15 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let temp16 = new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value");
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    await this.get_structure_of_enum_values({link_to_values: this.abap_doc.get().enumvalues_link, fullname_of_type: this.fullname_of_type, structure_of_values: structure_of_values, name_of_source: name_of_source, name_of_constant: name_of_constant});
    if (abap.compare.initial(structure_of_values) === false) {
      abap.statements.assign({target: fs_attr_, dynamicName: name_of_source.get() + '=>' + name_of_constant.get(), dynamicSource: (() => {try { return eval(name_of_source.get().toLowerCase().match(/\w+/)[0]); } catch {}})()});
      for await (const unique64 of abap.statements.loop(structure_of_values.get().components)) {
        fs_component_.assign(unique64);
        fullname_of_component.set(abap.operators.concat(name_of_constant,abap.operators.concat(new abap.types.Character({length: 1}).set('-'),fs_component_.get().name)));
        abap_doc_of_component.set((await this.call_reader_and_decode({name_of_source: name_of_source, element_name: fullname_of_component})));
        if (abap.compare.ne(fs_component_.get().type_kind, enum_type)) {
          temp14.set(name_of_constant);
          temp7.set(this.fullname_of_type);
          msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_122, msgv1: temp14, msgv2: temp7})));
          temp15.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
          throw temp15.get();
        }
        abap.statements.assign({component: fs_component_.get().name, target: fs_fs_data_, source: fs_attr_});
        abap.statements.clear(temp16);
        temp16.get().abap_value.set(fs_fs_data_);
        temp8.set(fs_component_.get().name);
        temp16.get().json_value.set((await this.format_name({name: temp8})));
        temp16.get().overwritten_json_value.set(abap_doc_of_component.get().enum_value);
        abap.statements.insertInternal({data: temp16, table: result});
      }
      if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) && abap.compare.initial(this.abap_doc.get().default_)) {
        await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg127, component_name: this.fullname_of_type});
      }
    }
    return result;
  }
  async write_tag(INPUT) {
    let line = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.line) {line.set(INPUT.line);}
    let temp17 = new abap.types.String();
    if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(abap.operators.minus(this.ignore_til_indent_level,constant_1), this.indent_level)) {
      temp17.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters)}))}${abap.templateFormatting(line)}`));
      abap.statements.append({source: temp17, target: this.content});
    }
  }
  async get_default_value_from_default(INPUT) {
    let default_ = new abap.types.String({qualifiedName: "STRING"});
    let enum_values = new abap.types.Table(new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    if (INPUT && INPUT.enum_values) {enum_values.set(INPUT.enum_values);}
    let type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let message = new abap.types.String({qualifiedName: "STRING"});
    let default_json = new abap.types.String({qualifiedName: "STRING"});
    let mapping_for_given_default = new abap.types.Structure({abap_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), overwritten_json_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value");
    if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
      message.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_117, msgv1: new abap.types.String().set(`UTCLONG`)})));
      await this.log.get().zif_aff_log$add_warning({message_text: message, component_name: this.fullname_of_type});
      return default_;
    }
    default_.set(this.abap_doc.get().default_);
    abap.statements.replace({target:default_, all:true, with: new abap.types.String().set(``),of: new abap.types.String().set(`"`)});
    if (abap.compare.cs(default_, new abap.types.Character({length: 5}).set('@link'))) {
      default_json.set((await this.get_default_from_link({link: default_, fullname_of_type: this.fullname_of_type, element_type: element_description.get().type_kind})));
      if (abap.compare.initial(default_json)) {
        abap.statements.clear(default_);
        return default_;
      }
      abap.statements.readTable(enum_values,{into: mapping_for_given_default,withKey: (i) => {return abap.compare.eq(i.json_value, default_json);}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
        default_.set((await this.get_prefixed_default({value: mapping_for_given_default.get().abap_value, element_description: element_description})));
      } else {
        abap.statements.clear(default_);
        return default_;
      }
    } else {
      if (abap.compare.initial((await this.is_default_value_valid({element_description: element_description, default_value: default_, fullname_of_type: this.fullname_of_type}))) === false) {
        abap.statements.clear(default_);
        return default_;
      }
      if (abap.compare.ne(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
        default_.set((await this.get_prefixed_default({value: default_, element_description: element_description})));
      } else if (abap.compare.eq(default_, new abap.types.String().set(`abap_true`)) || abap.compare.eq(default_, new abap.types.String().set(`X`))) {
        default_.set(new abap.types.String().set(`C('X')`));
      } else {
        default_.set(new abap.types.String().set(`C('')`));
      }
    }
    return default_;
  }
  async get_prefixed_default(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let value_copy = new abap.types.String({qualifiedName: "STRING"});
    let message = new abap.types.String({qualifiedName: "STRING"});
    let temp18 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let temp19 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique65 = element_description.get().type_kind;
    if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2)) {
      value_copy.set(value);
      abap.statements.condense(value_copy, {nogaps: false});
      result.set(new abap.types.String().set(`I(${abap.templateFormatting(value_copy)})`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)) {
      result.set(new abap.types.String().set(`INT8(${abap.templateFormatting(value)})`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_float)) {
      result.set(new abap.types.String().set(`F('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_xstring) || abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_hex)) {
      result.set(new abap.types.String().set(`X('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16)) {
      result.set(new abap.types.String().set(`DECFLOAT16('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {
      result.set(new abap.types.String().set(`DECFLOAT34('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      result.set(new abap.types.String().set(`P(${abap.templateFormatting(value)})`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num)) {
      result.set(new abap.types.String().set(`N('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char) || abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string)) {
      result.set(new abap.types.String().set(`C('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date)) {
      result.set(new abap.types.String().set(`D('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
      result.set(new abap.types.String().set(`T('${abap.templateFormatting(value)}')`));
    } else if (abap.compare.eq(unique65, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
      message.set((await this.log.get().zif_aff_log$get_message_text({msgno: constant_117, msgv1: new abap.types.String().set(`UTCLONG`)})));
      temp18.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: message}));
      throw temp18.get();
    } else {
      temp19.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp19.get();
    }
    return result;
  }
  async write_defaults() {
    let actual_entry = new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default");
    let temp9 = new abap.types.Structure({line_to_insert: new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), table_of_defaults: new abap.types.Table(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default");
    let temp10 = new abap.types.Integer();
    let list_of_applies = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let fs_default_ = new abap.types.FieldSymbol(new abap.types.Structure({var_name: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), default_value: new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair"));
    let temp20 = new abap.types.String();
    temp10.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.me.get().stack_default_comp_of_struc,{index: constant_1,into: temp9});
    abap.builtin.sy.get().tabix.set(temp10);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    actual_entry.set(temp9);
    for await (const unique66 of abap.statements.loop(actual_entry.get().table_of_defaults)) {
      fs_default_.assign(unique66);
      temp20.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.minus(abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters),zcl_aff_writer_xslt.c_indent_number_characters)}))}<tt:assign to-ref="${abap.templateFormatting(fs_default_.get().var_name)}" val="${abap.templateFormatting(fs_default_.get().default_value)}"/>`));
      abap.statements.append({source: temp20, target: list_of_applies});
    }
    abap.statements.insertInternal({lines: true, data: list_of_applies, index: abap.operators.add(actual_entry.get().line_to_insert,constant_1), table: this.content});
    await abap.statements.deleteInternal(this.me.get().stack_default_comp_of_struc,{index: constant_1});
  }
  async write_callback_template(INPUT) {
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.description) {description.set(INPUT.description);}
    let tag = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.tag) {tag.set(INPUT.tag);}
    let ref_name = new abap.types.String({qualifiedName: "STRING"});
    let calculated_tag = new abap.types.String({qualifiedName: "STRING"});
    let temp21 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    let component_start = new abap.types.String({qualifiedName: "STRING"});
    let component_end = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.gt(this.indent_level, constant_0)) {
      await this.write_open_tag({line: new abap.types.Character({length: 9}).set('<tt:cond>')});
      if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
        ref_name.set(element_name);
      } else {
        ref_name.set(new abap.types.Character({length: 4}).set('$ref'));
      }
    } else {
      ref_name.set(new abap.types.String().set(`.${abap.templateFormatting(this.st_root_name)}`));
    }
    let unique67 = description.get().kind;
    if (abap.compare.eq(unique67, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      if (abap.compare.initial(tag) === false) {
        calculated_tag.set(tag);
      } else {
        await abap.statements.cast(temp21, description);
        calculated_tag.set((await this.get_tag_from_type({json_type: (await this.get_json_type_from_description({element_description: temp21}))})));
      }
      component_start.set(new abap.types.String().set(`<${abap.templateFormatting(calculated_tag)}>`));
      component_end.set(new abap.types.String().set(`</${abap.templateFormatting(calculated_tag)}>`));
    } else if (abap.compare.eq(unique67, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      component_start.set(new abap.types.String().set(`<object>`));
      component_end.set(new abap.types.String().set(`</object>`));
    } else if (abap.compare.eq(unique67, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      component_start.set(new abap.types.String().set(`<array>`));
      component_end.set(new abap.types.String().set(`</array>`));
    }
    await this.write_open_tag({line: new abap.types.String().set(`${abap.templateFormatting(component_start)} `)});
    await this.write_callback({name_of_callback_class: this.abap_doc.get().callback_class, parameter_name: element_name, ref_name: ref_name});
    await this.write_closing_tag({line: new abap.types.String().set(`  ${abap.templateFormatting(component_end)} `)});
    if (abap.compare.gt(this.indent_level, constant_0)) {
      await this.write_closing_tag({line: new abap.types.Character({length: 10}).set('</tt:cond>')});
    }
    this.ignore_til_indent_level.set(abap.operators.add(this.indent_level,constant_1));
  }
  async write_callback(INPUT) {
    let name_of_callback_class = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name_of_callback_class) {name_of_callback_class.set(INPUT.name_of_callback_class);}
    let parameter_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.parameter_name) {parameter_name.set(INPUT.parameter_name);}
    let ref_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.ref_name) {ref_name.set(INPUT.ref_name);}
    let parameter_name_to_lower = new abap.types.String({qualifiedName: "STRING"});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:call-method class="${abap.templateFormatting(name_of_callback_class)}" d-name="deserialize" reader="reader" s-name="serialize" writer="writer">`)});
    parameter_name_to_lower.set(abap.builtin.to_lower({val: parameter_name}));
    await this.write_tag({line: new abap.types.String().set(`<tt:with-parameter name="${abap.templateFormatting(parameter_name_to_lower)}" ref="${abap.templateFormatting(ref_name)}"/>`)});
    await this.write_closing_tag({line: new abap.types.Character({length: 17}).set('</tt:call-method>')});
  }
  async reset_indent_level_tag() {
    if (abap.compare.eq(abap.operators.minus(this.ignore_til_indent_level,constant_1), this.indent_level)) {
      abap.statements.clear(this.ignore_til_indent_level);
    }
  }
  async zif_aff_writer$validate(INPUT) {
    let result = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    if (INPUT && INPUT.log) {log.set(INPUT.log);}
    let tsource = (() => { throw "Void type: O2PAGELINE_TABLE" })();
    let errors = new abap.types.Table(new abap.types.Structure({text: new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
    let exception = new abap.types.ABAPObject({qualifiedName: "CX_O2_XSLT_ERROR"});
    let fs_error_ = new abap.types.FieldSymbol(new abap.types.Structure({text: new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error"));
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp22 = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.append({source: source, lines: true, target: tsource});
    try {
      await abap.Classes['CL_O2_API_XSLTDESC'].check_transformation_source({i_name: new abap.types.Character({length: 13}).set('GENERATED_AFF'), i_source: tsource, e_error_list: errors});
    } catch (e) {
      if (e instanceof abap.Classes['CX_O2_XSLT_ERROR']) {
        exception.set(e);
      } else {
        throw e;
      }
    }
    if (abap.compare.gt(abap.builtin.lines({val: errors}), constant_0) || abap.compare.initial(exception) === false) {
      for await (const unique68 of abap.statements.loop(errors)) {
        fs_error_.assign(unique68);
        await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_clike({text: fs_error_.get().text});
        msg.set((await log.get().zif_aff_log$get_message_text({msgno: constant_0, msgv1: abap.builtin.sy.get().msgv1, msgv2: abap.builtin.sy.get().msgv2, msgv3: abap.builtin.sy.get().msgv3, msgv4: abap.builtin.sy.get().msgv4})));
        abap.statements.clear(temp22);
        await log.get().zif_aff_log$add_error({message_text: msg, component_name: temp22});
      }
      return result;
    }
    result.set(abap.builtin.abap_true);
    return result;
  }
  async write_iso_language_callback(INPUT) {
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    await this.write_callback({name_of_callback_class: new abap.types.Character({length: 29}).set('cl_aff_xslt_callback_language'), parameter_name: new abap.types.Character({length: 8}).set('language'), ref_name: element_name});
  }
  async enable_extension(INPUT) {
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let str_comp = new abap.types.String({qualifiedName: "STRING"});
    let component = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let formatted_name = new abap.types.String({qualifiedName: "STRING"});
    let tag = new abap.types.String({qualifiedName: "STRING"});
    let temp23 = new abap.types.String();
    await this.write_open_tag({line: new abap.types.String().set(`<tt:d-cond frq="*">`)});
    await this.write_open_tag({line: new abap.types.String().set(` <_ tt:lax="on">`)});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:call-method class="CL_AFF_XSLT_CALLBACK_TYPE" name="RAISE_DIFFERENT_TYPE_EXCEPTION" reader="IO_READER">`)});
    components.set((await structure_description.get().get_components()));
    for await (const unique69 of abap.statements.loop(components)) {
      component.set(unique69);
      formatted_name.set((await this.format_name({name: component.get().name})));
      if (abap.compare.initial(component.get().as_include) === false) {
        continue;
      }
      if (abap.compare.eq(abap.builtin.sy.get().tabix, constant_1)) {
        str_comp.set(new abap.types.String().set(`${abap.templateFormatting(formatted_name)};`));
        continue;
      }
      str_comp.set(new abap.types.String().set(`${abap.templateFormatting(str_comp)}${abap.templateFormatting(formatted_name)};`));
    }
    tag.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters)}))}<tt:with-parameter name="MEMBERS" val="'${abap.templateFormatting(str_comp)}'"/>`));
    if (abap.compare.gt(abap.builtin.strlen({val: tag}), constant_255)) {
      await this.write_tag({line: new abap.types.String().set(`<tt:with-parameter name="MEMBERS"`)});
      if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(abap.operators.minus(this.ignore_til_indent_level,constant_1), this.indent_level)) {
        temp23.set(new abap.types.String().set(`val="'${abap.templateFormatting(str_comp)}'"/>`));
        abap.statements.append({source: temp23, target: this.content});
      }
    } else {
      await this.write_tag({line: new abap.types.String().set(`<tt:with-parameter name="MEMBERS" val="'${abap.templateFormatting(str_comp)}'"/>`)});
    }
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:call-method>`)});
    await this.write_tag({line: new abap.types.String().set(`<tt:skip/>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</_>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:d-cond>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:d-cond frq="?">`)});
    await this.write_tag({line: new abap.types.String().set(`<__/>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:d-cond>`)});
  }
}
abap.Classes['ZCL_AFF_WRITER_XSLT'] = zcl_aff_writer_xslt;
export {zcl_aff_writer_xslt};
//# sourceMappingURL=zcl_aff_writer_xslt.clas.mjs.map