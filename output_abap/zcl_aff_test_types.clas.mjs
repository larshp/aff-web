const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_test_types.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_3 = new abap.types.Integer().set(3);
const constant_4 = new abap.types.Integer().set(4);
const constant_5 = new abap.types.Integer().set(5);
class zcl_aff_test_types {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.co_test = zcl_aff_test_types.co_test;
    this.co_enum = zcl_aff_test_types.co_enum;
    this.enum_values = zcl_aff_test_types.enum_values;
    this.enum_values_no_initial = zcl_aff_test_types.enum_values_no_initial;
    this.co_abap_language_version = zcl_aff_test_types.co_abap_language_version;
    this.co_class_category = zcl_aff_test_types.co_class_category;
    this.co_overwritten_values = zcl_aff_test_types.co_overwritten_values;
    return this;
  }
  async get_subschema() {
    return zcl_aff_test_types.get_subschema();
  }
  static async get_subschema() {
    let subschema = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>string_table");
    subschema.set(abap.Classes['ZCL_AFF_TEST_TYPES'].subschema);
    return subschema;
  }
  async serialize(INPUT) {
    return zcl_aff_test_types.serialize(INPUT);
  }
  static async serialize(INPUT) {
    let writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER"});
    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}
    let simple_callback = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});
    if (INPUT && INPUT.simple_callback) {simple_callback.set(INPUT.simple_callback);}
    let structure_callback = new abap.types.Structure({element_name: new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback");
    if (INPUT && INPUT.structure_callback) {structure_callback.set(INPUT.structure_callback);}
    let table_callback = new abap.types.Table(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.table_callback) {table_callback.set(INPUT.table_callback);}
    let element_callback = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_callback) {element_callback.set(INPUT.element_callback);}
    let element_structure_callback = new abap.types.Structure({element_name: new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback");
    if (INPUT && INPUT.element_structure_callback) {element_structure_callback.set(INPUT.element_structure_callback);}
    let element_table_callback = new abap.types.Table(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.element_table_callback) {element_table_callback.set(INPUT.element_table_callback);}
    if ((INPUT && INPUT.simple_callback)) {
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
    } else if ((INPUT && INPUT.structure_callback)) {
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: new abap.types.Character({length: 11}).set('elementName')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.table_callback)) {
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.element_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: new abap.types.Character({length: 15}).set('elementCallback')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
    } else if ((INPUT && INPUT.element_structure_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: new abap.types.Character({length: 24}).set('elementStructureCallback')});
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: new abap.types.Character({length: 11}).set('elementName')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.element_table_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: new abap.types.Character({length: 20}).set('elementTableCallback')});
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character({length: 24}).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    }
  }
  async deserialize(INPUT) {
    return zcl_aff_test_types.deserialize(INPUT);
  }
  static async deserialize(INPUT) {
    let reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER"});
    if (INPUT && INPUT.reader) {reader.set(INPUT.reader);}
    let simple_callback = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});
    if (INPUT && INPUT.simple_callback) {simple_callback = INPUT.simple_callback;}
    let structure_callback = new abap.types.Structure({element_name: new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback");
    if (INPUT && INPUT.structure_callback) {structure_callback = INPUT.structure_callback;}
    let table_callback = new abap.types.Table(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.table_callback) {table_callback = INPUT.table_callback;}
    let element_callback = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_callback) {element_callback = INPUT.element_callback;}
    let element_structure_callback = new abap.types.Structure({element_name: new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback");
    if (INPUT && INPUT.element_structure_callback) {element_structure_callback = INPUT.element_structure_callback;}
    let element_table_callback = new abap.types.Table(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.element_table_callback) {element_table_callback = INPUT.element_table_callback;}
    let fs_attr_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    await reader.get().if_sxml_reader$next_node();
    abap.statements.assign({target: fs_attr_, source: (zcl_aff_test_types.expected_var).getPointer()});
    if ((INPUT && INPUT.simple_callback)) {
      simple_callback.set(fs_attr_);
    } else if ((INPUT && INPUT.structure_callback)) {
      structure_callback.set(fs_attr_);
      await this.jump_to_end({reader: reader});
    } else if ((INPUT && INPUT.table_callback)) {
      table_callback.set(fs_attr_);
      await this.jump_to_end({reader: reader});
    } else if ((INPUT && INPUT.element_callback)) {
      element_callback.set(fs_attr_);
    } else if ((INPUT && INPUT.element_structure_callback)) {
      element_structure_callback.set(fs_attr_);
      await this.jump_to_end({reader: reader});
    } else if ((INPUT && INPUT.element_table_callback)) {
      element_table_callback.set(fs_attr_);
      await this.jump_to_end({reader: reader});
    }
  }
  async jump_to_end(INPUT) {
    return zcl_aff_test_types.jump_to_end(INPUT);
  }
  static async jump_to_end(INPUT) {
    let reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER"});
    if (INPUT && INPUT.reader) {reader.set(INPUT.reader);}
    let type_start = new abap.types.String({qualifiedName: "STRING"});
    let exit = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    exit.set(abap.builtin.abap_false);
    type_start.set(reader.get().if_sxml_reader$name);
    if (abap.compare.eq(reader.get().if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
      exit.set(abap.builtin.abap_true);
    }
    while (abap.compare.eq(exit, abap.builtin.abap_false)) {
      await reader.get().if_sxml_reader$next_node();
      if (abap.compare.eq(reader.get().if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close) && abap.compare.eq(reader.get().if_sxml_reader$name, type_start)) {
        exit.set(abap.builtin.abap_true);
      }
    }
  }
  async set_expected(INPUT) {
    return zcl_aff_test_types.set_expected(INPUT);
  }
  static async set_expected(INPUT) {
    let expected_variable = new abap.types.Character({length: 4});
    if (INPUT && INPUT.expected_variable) {expected_variable = INPUT.expected_variable;}
    zcl_aff_test_types.expected_var.assign(expected_variable);
  }
}
abap.Classes['ZCL_AFF_TEST_TYPES'] = zcl_aff_test_types;
zcl_aff_test_types.subschema = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_test_types=>string_table");
zcl_aff_test_types.expected_var = new abap.types.DataReference(new abap.types.Character({length: 4}));
zcl_aff_test_types.co_test = new abap.types.Structure({test: new abap.types.String({qualifiedName: "STRING"})});
zcl_aff_test_types.co_test.get().test.set(' ');
zcl_aff_test_types.co_enum = new abap.types.Structure({test: new abap.types.String({qualifiedName: "STRING"}), test2: new abap.types.String({qualifiedName: "STRING"})});
zcl_aff_test_types.co_enum.get().test.set(' ');
zcl_aff_test_types.co_enum.get().test2.set('A');
zcl_aff_test_types.enum_values = new abap.types.Structure({general: new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"}), classic_badi: new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"})});
zcl_aff_test_types.enum_values.get().general.set('00');
zcl_aff_test_types.enum_values.get().classic_badi.set('01');
zcl_aff_test_types.enum_values_no_initial = new abap.types.Structure({component_1: new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"}), component_2: new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"})});
zcl_aff_test_types.enum_values_no_initial.get().component_1.set('01');
zcl_aff_test_types.enum_values_no_initial.get().component_2.set('02');
zcl_aff_test_types.co_abap_language_version = new abap.types.Structure({standard: new abap.types.Character({qualifiedName: "zcl_aff_test_types=>language_version"}), cloud_development: new abap.types.Character({qualifiedName: "zcl_aff_test_types=>language_version"})});
zcl_aff_test_types.co_abap_language_version.get().standard.set(' ');
zcl_aff_test_types.co_abap_language_version.get().cloud_development.set('5');
zcl_aff_test_types.co_class_category = new abap.types.Structure({general: new abap.types.Numc({length: 2}), exit_class: new abap.types.Numc({length: 2})});
zcl_aff_test_types.co_class_category.get().general.set('00');
zcl_aff_test_types.co_class_category.get().exit_class.set('01');
zcl_aff_test_types.co_overwritten_values = new abap.types.Structure({first_value: new abap.types.Character({length: 2, qualifiedName: "undefined"}), second_value: new abap.types.Character({length: 2, qualifiedName: "undefined"})});
zcl_aff_test_types.co_overwritten_values.get().first_value.set('AA');
zcl_aff_test_types.co_overwritten_values.get().second_value.set('BB');
export {zcl_aff_test_types};
//# sourceMappingURL=zcl_aff_test_types.clas.mjs.map