const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_test_types.clas.abap
class zcl_aff_test_types {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_TEST_TYPES';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"SUBSCHEMA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table");}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "EXPECTED_VAR": {"type": () => {return new abap.types.DataReference(new abap.types.Character(4));}, "visibility": "U", "is_constant": " ", "is_class": "X"},
  "CO_TEST": {"type": () => {return new abap.types.Structure({"test": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_ENUM": {"type": () => {return new abap.types.Structure({"test": new abap.types.String({qualifiedName: "STRING"}), "test2": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ENUM_VALUES": {"type": () => {return new abap.types.Structure({"general": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"}), "classic_badi": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ENUM_VALUES_NO_INITIAL": {"type": () => {return new abap.types.Structure({"component_1": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"}), "component_2": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_ABAP_LANGUAGE_VERSION": {"type": () => {return new abap.types.Structure({"standard": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"}), "cloud_development": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_CLASS_CATEGORY": {"type": () => {return new abap.types.Structure({"general": new abap.types.Numc({length: 2}), "exit_class": new abap.types.Numc({length: 2})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_OVERWRITTEN_VALUES": {"type": () => {return new abap.types.Structure({"first_value": new abap.types.Character(2, {}), "second_value": new abap.types.Character(2, {})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"JUMP_TO_END": {"visibility": "I", "parameters": {"READER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"});}, "is_optional": " "}}},
  "GET_SUBSCHEMA": {"visibility": "U", "parameters": {"SUBSCHEMA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table");}, "is_optional": " "}}},
  "SERIALIZE": {"visibility": "U", "parameters": {"WRITER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"});}, "is_optional": " "}, "SIMPLE_CALLBACK": {"type": () => {return new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});}, "is_optional": " "}, "STRUCTURE_CALLBACK": {"type": () => {return new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});}, "is_optional": " "}, "TABLE_CALLBACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");}, "is_optional": " "}, "ELEMENT_CALLBACK": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_STRUCTURE_CALLBACK": {"type": () => {return new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});}, "is_optional": " "}, "ELEMENT_TABLE_CALLBACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");}, "is_optional": " "}}},
  "DESERIALIZE": {"visibility": "U", "parameters": {"READER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"});}, "is_optional": " "}, "SIMPLE_CALLBACK": {"type": () => {return new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});}, "is_optional": " "}, "STRUCTURE_CALLBACK": {"type": () => {return new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});}, "is_optional": " "}, "TABLE_CALLBACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");}, "is_optional": " "}, "ELEMENT_CALLBACK": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_STRUCTURE_CALLBACK": {"type": () => {return new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});}, "is_optional": " "}, "ELEMENT_TABLE_CALLBACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");}, "is_optional": " "}}},
  "SET_EXPECTED": {"visibility": "U", "parameters": {"EXPECTED_VARIABLE": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.subschema = zcl_aff_test_types.subschema;
    this.expected_var = zcl_aff_test_types.expected_var;
    this.co_test = zcl_aff_test_types.co_test;
    this.co_enum = zcl_aff_test_types.co_enum;
    this.enum_values = zcl_aff_test_types.enum_values;
    this.enum_values_no_initial = zcl_aff_test_types.enum_values_no_initial;
    this.co_abap_language_version = zcl_aff_test_types.co_abap_language_version;
    this.co_class_category = zcl_aff_test_types.co_class_category;
    this.co_overwritten_values = zcl_aff_test_types.co_overwritten_values;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async get_subschema() {
    return zcl_aff_test_types.get_subschema();
  }
  static async get_subschema() {
    let subschema = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table");
    subschema.set(abap.Classes['ZCL_AFF_TEST_TYPES'].subschema);
    return subschema;
  }
  async serialize(INPUT) {
    return zcl_aff_test_types.serialize(INPUT);
  }
  static async serialize(INPUT) {
    let writer = INPUT?.writer;
    if (writer?.getQualifiedName === undefined || writer.getQualifiedName() !== "IF_SXML_WRITER") { writer = undefined; }
    if (writer === undefined) { writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER", RTTIName: "\\INTERFACE=IF_SXML_WRITER"}).set(INPUT.writer); }
    let simple_callback = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});
    if (INPUT && INPUT.simple_callback) {simple_callback.set(INPUT.simple_callback);}
    let structure_callback = new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});
    if (INPUT && INPUT.structure_callback) {structure_callback.set(INPUT.structure_callback);}
    let table_callback = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.table_callback) {table_callback.set(INPUT.table_callback);}
    let element_callback = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_callback) {element_callback.set(INPUT.element_callback);}
    let element_structure_callback = new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});
    if (INPUT && INPUT.element_structure_callback) {element_structure_callback.set(INPUT.element_structure_callback);}
    let element_table_callback = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");
    if (INPUT && INPUT.element_table_callback) {element_table_callback.set(INPUT.element_table_callback);}
    if ((INPUT && INPUT.simple_callback)) {
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
    } else if ((INPUT && INPUT.structure_callback)) {
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character(3).set('str')});
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: new abap.types.Character(11).set('elementName')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.table_callback)) {
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character(3).set('str')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.element_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: new abap.types.Character(15).set('elementCallback')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
    } else if ((INPUT && INPUT.element_structure_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: new abap.types.Character(24).set('elementStructureCallback')});
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character(3).set('str')});
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: new abap.types.Character(11).set('elementName')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    } else if ((INPUT && INPUT.element_table_callback)) {
      await writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character(4).set('name'), value: new abap.types.Character(20).set('elementTableCallback')});
      await writer.get().if_sxml_writer$open_element({name: new abap.types.Character(3).set('str')});
      await writer.get().if_sxml_writer$write_value({value: new abap.types.Character(24).set('callbackClass was called')});
      await writer.get().if_sxml_writer$close_element();
    }
  }
  async deserialize(INPUT) {
    return zcl_aff_test_types.deserialize(INPUT);
  }
  static async deserialize(INPUT) {
    let reader = INPUT?.reader;
    if (reader?.getQualifiedName === undefined || reader.getQualifiedName() !== "IF_SXML_READER") { reader = undefined; }
    if (reader === undefined) { reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"}).set(INPUT.reader); }
    let simple_callback = INPUT?.simple_callback || new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});
    let structure_callback = INPUT?.structure_callback || new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});
    let table_callback = INPUT?.table_callback || abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");
    let element_callback = INPUT?.element_callback || new abap.types.String({qualifiedName: "STRING"});
    let element_structure_callback = INPUT?.element_structure_callback || new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});
    let element_table_callback = INPUT?.element_table_callback || abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");
    let fs_attr_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    await reader.get().if_sxml_reader$next_node();
    abap.statements.assign({target: fs_attr_, source: (zcl_aff_test_types.expected_var).dereference()});
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
    let reader = INPUT?.reader;
    if (reader?.getQualifiedName === undefined || reader.getQualifiedName() !== "IF_SXML_READER") { reader = undefined; }
    if (reader === undefined) { reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"}).set(INPUT.reader); }
    let type_start = new abap.types.String({qualifiedName: "STRING"});
    let exit = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    exit.set(abap.builtin.abap_false);
    type_start.set(reader.get().if_sxml_reader$name);
    if (abap.compare.eq(reader.get().if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
      exit.set(abap.builtin.abap_true);
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique65 = 1;
    while (abap.compare.eq(exit, abap.builtin.abap_false)) {
      abap.builtin.sy.get().index.set(unique65++);
      await reader.get().if_sxml_reader$next_node();
      if (abap.compare.eq(reader.get().if_sxml_reader$node_type, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close) && abap.compare.eq(reader.get().if_sxml_reader$name, type_start)) {
        exit.set(abap.builtin.abap_true);
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async set_expected(INPUT) {
    return zcl_aff_test_types.set_expected(INPUT);
  }
  static async set_expected(INPUT) {
    let expected_variable = INPUT?.expected_variable;
    zcl_aff_test_types.expected_var.assign(expected_variable);
  }
}
abap.Classes['ZCL_AFF_TEST_TYPES'] = zcl_aff_test_types;
zcl_aff_test_types.subschema = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table");
zcl_aff_test_types.expected_var = new abap.types.DataReference(new abap.types.Character(4));
zcl_aff_test_types.co_test = new abap.types.Structure({"test": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
zcl_aff_test_types.co_test.get().test.set(' ');
zcl_aff_test_types.co_enum = new abap.types.Structure({"test": new abap.types.String({qualifiedName: "STRING"}), "test2": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
zcl_aff_test_types.co_enum.get().test.set(' ');
zcl_aff_test_types.co_enum.get().test2.set('A');
zcl_aff_test_types.enum_values = new abap.types.Structure({"general": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"}), "classic_badi": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"})}, undefined, undefined, {}, {});
zcl_aff_test_types.enum_values.get().general.set('00');
zcl_aff_test_types.enum_values.get().classic_badi.set('01');
zcl_aff_test_types.enum_values_no_initial = new abap.types.Structure({"component_1": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"}), "component_2": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"})}, undefined, undefined, {}, {});
zcl_aff_test_types.enum_values_no_initial.get().component_1.set('01');
zcl_aff_test_types.enum_values_no_initial.get().component_2.set('02');
zcl_aff_test_types.co_abap_language_version = new abap.types.Structure({"standard": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"}), "cloud_development": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"})}, undefined, undefined, {}, {});
zcl_aff_test_types.co_abap_language_version.get().standard.set(' ');
zcl_aff_test_types.co_abap_language_version.get().cloud_development.set('5');
zcl_aff_test_types.co_class_category = new abap.types.Structure({"general": new abap.types.Numc({length: 2}), "exit_class": new abap.types.Numc({length: 2})}, undefined, undefined, {}, {});
zcl_aff_test_types.co_class_category.get().general.set('00');
zcl_aff_test_types.co_class_category.get().exit_class.set('01');
zcl_aff_test_types.co_overwritten_values = new abap.types.Structure({"first_value": new abap.types.Character(2, {}), "second_value": new abap.types.Character(2, {})}, undefined, undefined, {}, {});
zcl_aff_test_types.co_overwritten_values.get().first_value.set('AA');
zcl_aff_test_types.co_overwritten_values.get().second_value.set('BB');
zcl_aff_test_types.unknown_annotation = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>UNKNOWN_ANNOTATION"});
zcl_aff_test_types.content_encoded_string = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>CONTENT_ENCODED_STRING"});
zcl_aff_test_types.unknown_content_encoded_string = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>UNKNOWN_CONTENT_ENCODED_STRING"});
zcl_aff_test_types.content_encoded_integer = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>CONTENT_ENCODED_INTEGER"});
zcl_aff_test_types.content_media_type_string = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>CONTENT_MEDIA_TYPE_STRING"});
zcl_aff_test_types.content_media_type_integer = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>CONTENT_MEDIA_TYPE_INTEGER"});
zcl_aff_test_types.media_type_content_ecoding = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MEDIA_TYPE_CONTENT_ECODING"});
zcl_aff_test_types.struc_with_type_encoding = new abap.types.Structure({"component": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MEDIA_TYPE_CONTENT_ECODING"})}, "zcl_aff_test_types=>struc_with_type_encoding", undefined, {}, {});
zcl_aff_test_types.description_not_found = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>DESCRIPTION_NOT_FOUND"});
zcl_aff_test_types.type_with_long_description = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>TYPE_WITH_LONG_DESCRIPTION"});
zcl_aff_test_types.default_link = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>DEFAULT_LINK"});
zcl_aff_test_types.struc_link_wrong_type = new abap.types.Structure({"default_link": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>DEFAULT_LINK"})}, "zcl_aff_test_types=>struc_link_wrong_type", undefined, {}, {});
zcl_aff_test_types.enum = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>ENUM"});
zcl_aff_test_types.ty_format_version = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_FORMAT_VERSION-FORMAT_VERSION"}), "field1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_FORMAT_VERSION-FIELD1"})}, "zcl_aff_test_types=>ty_format_version", undefined, {}, {});
zcl_aff_test_types.num_text = new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"});
zcl_aff_test_types.struc_with_num_text = new abap.types.Structure({"numerical_text1": new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), "numerical_text2": new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), "numerical_text3": new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), "numerical_text4": new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"})}, "zcl_aff_test_types=>struc_with_num_text", undefined, {}, {});
zcl_aff_test_types.num_text1 = new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text1"});
zcl_aff_test_types.integer = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INTEGER"});
zcl_aff_test_types.mystring = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"});
zcl_aff_test_types.my_date = new abap.types.Date({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_DATE"});
zcl_aff_test_types.my_structure = new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {});
zcl_aff_test_types.my_structure_single = new abap.types.Structure({"foo_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"})}, "zcl_aff_test_types=>my_structure_single", undefined, {}, {});
zcl_aff_test_types.my_structure_two = new abap.types.Structure({"foo1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE_TWO-FOO1"}), "foo2": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE_TWO-FOO2"})}, "zcl_aff_test_types=>my_structure_two", undefined, {}, {});
zcl_aff_test_types.my_standard_table = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>my_standard_table");
zcl_aff_test_types.my_hashed_table = abap.types.TableFactory.construct(new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["MY_FIRST_ELEMENT"]},"secondary":[]}, "zcl_aff_test_types=>my_hashed_table");
zcl_aff_test_types.my_sorted_table_unique = abap.types.TableFactory.construct(new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["MY_SECOND_ELEMENT"]},"secondary":[]}, "zcl_aff_test_types=>my_sorted_table_unique");
zcl_aff_test_types.my_sorted_table_n_unique = abap.types.TableFactory.construct(new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":false,"keyFields":["MY_SECOND_ELEMENT"]},"secondary":[]}, "zcl_aff_test_types=>my_sorted_table_n_unique");
zcl_aff_test_types.my_structure_with_tables = new abap.types.Structure({"first_table": abap.types.TableFactory.construct(new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["MY_SECOND_ELEMENT"]},"secondary":[]}, "zcl_aff_test_types=>my_sorted_table_unique"), "second_table": abap.types.TableFactory.construct(new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":false,"keyFields":["MY_SECOND_ELEMENT"]},"secondary":[]}, "zcl_aff_test_types=>my_sorted_table_n_unique")}, "zcl_aff_test_types=>my_structure_with_tables", undefined, {}, {});
zcl_aff_test_types.my_structure2 = new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE2-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure2", undefined, {}, {});
zcl_aff_test_types.my_nested_structure = new abap.types.Structure({"my_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_NESTED_STRUCTURE-MY_ELEMENT"})}, "zcl_aff_test_types=>my_nested_structure", undefined, {}, {});
zcl_aff_test_types.my_structure3 = new abap.types.Structure({"nested_struc": new abap.types.Structure({"my_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_NESTED_STRUCTURE-MY_ELEMENT"})}, "zcl_aff_test_types=>my_nested_structure", undefined, {}, {}), "my_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE3-MY_ELEMENT"})}, "zcl_aff_test_types=>my_structure3", undefined, {}, {});
zcl_aff_test_types.category = new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"});
zcl_aff_test_types.category_no_initial = new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"});
zcl_aff_test_types.structure_with_different_enum = new abap.types.Structure({"enum_without_all": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"}), "enum_with_default": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"}), "enum_with_required": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_no_initial"})}, "zcl_aff_test_types=>structure_with_different_enum", undefined, {}, {});
zcl_aff_test_types.language_version = new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"});
zcl_aff_test_types.header = new abap.types.Structure({"description": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>HEADER-DESCRIPTION"}), "original_language": new abap.types.Character(1, {"qualifiedName":"sy-langu","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"})}, "zcl_aff_test_types=>header", undefined, {}, {});
zcl_aff_test_types.ty_class_properties = new abap.types.Structure({"header": new abap.types.Structure({"description": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>HEADER-DESCRIPTION"}), "original_language": new abap.types.Character(1, {"qualifiedName":"sy-langu","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>language_version"})}, "zcl_aff_test_types=>header", undefined, {}, {}), "class_category": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>ty_class_properties-class_category"})}, "zcl_aff_test_types=>ty_class_properties", undefined, {}, {});
zcl_aff_test_types.list = new abap.types.Structure({"field1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>LIST-FIELD1"}), "field2": new abap.types.Character(2, {"qualifiedName":"zcl_aff_test_types=>list-field2"}), "list1": new abap.types.Structure({"element_of_list1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>LIST-LIST1-ELEMENT_OF_LIST1"}), "list2": new abap.types.Structure({"element_of_list2": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>LIST-LIST1-LIST2-ELEMENT_OF_LIST2"})}, "zcl_aff_test_types=>list-list1-list2", undefined, {}, {})}, "zcl_aff_test_types=>list-list1", undefined, {}, {}), "field3": new abap.types.Character(2, {"qualifiedName":"zcl_aff_test_types=>list-field3"})}, "zcl_aff_test_types=>list", undefined, {}, {});
zcl_aff_test_types.nsimple = new abap.types.Structure({"list1": new abap.types.Structure({"element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>NSIMPLE-LIST1-ELEMENT"})}, "zcl_aff_test_types=>nsimple-list1", undefined, {}, {})}, "zcl_aff_test_types=>nsimple", undefined, {}, {});
zcl_aff_test_types.outer_struc = new abap.types.Structure({"field1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>OUTER_STRUC-FIELD1"}), "inner_struc": new abap.types.Structure({"element_of_inner_struc": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>OUTER_STRUC-INNER_STRUC-ELEMENT_OF_INNER_STRUC"}), "inner_table_var": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>outer_struc-inner_struc-inner_table_var")}, "zcl_aff_test_types=>outer_struc-inner_struc", undefined, {}, {}), "field2": new abap.types.Character(2, {"qualifiedName":"zcl_aff_test_types=>outer_struc-field2"})}, "zcl_aff_test_types=>outer_struc", undefined, {}, {});
zcl_aff_test_types.aff_test_type = new abap.types.Structure({"field1": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>AFF_TEST_TYPE-FIELD1"}), "inner_struc": new abap.types.Structure({"inner_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>AFF_TEST_TYPE-INNER_STRUC-INNER_ELEMENT"}), "inner_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>aff_test_type-inner_struc-inner_table")}, "zcl_aff_test_types=>aff_test_type-inner_struc", undefined, {}, {}), "field2": new abap.types.Character(2, {"qualifiedName":"zcl_aff_test_types=>aff_test_type-field2"})}, "zcl_aff_test_types=>aff_test_type", undefined, {}, {});
zcl_aff_test_types.nested_table = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>nested_table");
zcl_aff_test_types.first_table = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>nested_table"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>first_table");
zcl_aff_test_types.category_wrong = new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_wrong"});
zcl_aff_test_types.structure_with_wrong_link = new abap.types.Structure({"element_one": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_WRONG_LINK-ELEMENT_ONE"}), "element_two": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category_wrong"})}, "zcl_aff_test_types=>structure_with_wrong_link", undefined, {}, {});
zcl_aff_test_types.string_table = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table");
zcl_aff_test_types.inner_struc = new abap.types.Structure({"field": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC-FIELD"})}, "zcl_aff_test_types=>inner_struc", undefined, {}, {});
zcl_aff_test_types.structure_with_doc_outside = new abap.types.Structure({"table1": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table"), "structure": new abap.types.Structure({"field": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC-FIELD"})}, "zcl_aff_test_types=>inner_struc", undefined, {}, {}), "table2": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>string_table")}, "zcl_aff_test_types=>structure_with_doc_outside", undefined, {}, {});
zcl_aff_test_types.integer_outside = new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INTEGER_OUTSIDE"});
zcl_aff_test_types.structure_multiple_of_warning = new abap.types.Structure({"integer": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_MULTIPLE_OF_WARNING-INTEGER"}), "integer_with_multiple": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_MULTIPLE_OF_WARNING-INTEGER_WITH_MULTIPLE"}), "packed_with_multiple": new abap.types.Packed({length: 4, decimals: 1, qualifiedName: "zcl_aff_test_types=>structure_multiple_of_warning-packed_with_multiple"})}, "zcl_aff_test_types=>structure_multiple_of_warning", undefined, {}, {});
zcl_aff_test_types.structure_with_default_problem = new abap.types.Structure({"integer": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_DEFAULT_PROBLEM-INTEGER"}), "string_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_DEFAULT_PROBLEM-STRING_ELEMENT"}), "enum_required": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>structure_with_default_problem-enum_required"}), "enum_show_always": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>structure_with_default_problem-enum_show_always"})}, "zcl_aff_test_types=>structure_with_default_problem", undefined, {}, {});
zcl_aff_test_types.ty_original_language = new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>ty_original_language","conversionExit":"ISOLA"});
zcl_aff_test_types.ty_header_60_src = new abap.types.Structure({"original_language": new abap.types.Character(1, {"qualifiedName":"zcl_aff_test_types=>ty_original_language","conversionExit":"ISOLA"})}, "zcl_aff_test_types=>ty_header_60_src", undefined, {}, {});
zcl_aff_test_types.inner_struc_with_default = new abap.types.Structure({"inner_component": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC_WITH_DEFAULT-INNER_COMPONENT"})}, "zcl_aff_test_types=>inner_struc_with_default", undefined, {}, {});
zcl_aff_test_types.middle_struc_with_default = new abap.types.Structure({"middle_component": new abap.types.Character(4, {"qualifiedName":"zcl_aff_test_types=>middle_struc_with_default-middle_component"}), "inner_struc": new abap.types.Structure({"inner_component": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC_WITH_DEFAULT-INNER_COMPONENT"})}, "zcl_aff_test_types=>inner_struc_with_default", undefined, {}, {})}, "zcl_aff_test_types=>middle_struc_with_default", undefined, {}, {});
zcl_aff_test_types.nested_struc_with_default = new abap.types.Structure({"outer_component": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>NESTED_STRUC_WITH_DEFAULT-OUTER_COMPONENT"}), "middle_struc": new abap.types.Structure({"middle_component": new abap.types.Character(4, {"qualifiedName":"zcl_aff_test_types=>middle_struc_with_default-middle_component"}), "inner_struc": new abap.types.Structure({"inner_component": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC_WITH_DEFAULT-INNER_COMPONENT"})}, "zcl_aff_test_types=>inner_struc_with_default", undefined, {}, {})}, "zcl_aff_test_types=>middle_struc_with_default", undefined, {}, {})}, "zcl_aff_test_types=>nested_struc_with_default", undefined, {}, {});
zcl_aff_test_types.structure_with_wrong_default = new abap.types.Structure({"element_one": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"}), "element_two": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"})}, "zcl_aff_test_types=>structure_with_wrong_default", undefined, {}, {});
zcl_aff_test_types.simple_callback = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>SIMPLE_CALLBACK"});
zcl_aff_test_types.table_callback = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback");
zcl_aff_test_types.table_call_of_table = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>my_standard_table"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_call_of_table");
zcl_aff_test_types.structure_callback = new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {});
zcl_aff_test_types.table_of_struc_with_callback = abap.types.TableFactory.construct(new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_of_struc_with_callback");
zcl_aff_test_types.struc_of_table_with_callback = new abap.types.Structure({"element_table_callback": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_callback"), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUC_OF_TABLE_WITH_CALLBACK-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>struc_of_table_with_callback", undefined, {}, {});
zcl_aff_test_types.struc_in_struc_with_callback = new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUC_IN_STRUC_WITH_CALLBACK-MY_FIRST_ELEMENT"}), "element_structure_callback": new abap.types.Structure({"element_name": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_CALLBACK-ELEMENT_NAME"})}, "zcl_aff_test_types=>structure_callback", undefined, {}, {}), "my_third_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUC_IN_STRUC_WITH_CALLBACK-MY_THIRD_ELEMENT"})}, "zcl_aff_test_types=>struc_in_struc_with_callback", undefined, {}, {});
zcl_aff_test_types.structure_with_elem_callback = new abap.types.Structure({"element_callback": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_ELEM_CALLBACK-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>structure_with_elem_callback", undefined, {}, {});
zcl_aff_test_types.structure_with_wrong_callback = new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_WRONG_CALLBACK-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>structure_with_wrong_callback", undefined, {}, {});
zcl_aff_test_types.element_no_title_descr = new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>ELEMENT_NO_TITLE_DESCR"});
zcl_aff_test_types.inner_struc_no_title_descr = new abap.types.Structure({"inner_field": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC_NO_TITLE_DESCR-INNER_FIELD"})}, "zcl_aff_test_types=>inner_struc_no_title_descr", undefined, {}, {});
zcl_aff_test_types.table_no_title_descr = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_no_title_descr");
zcl_aff_test_types.structure_no_title_descr = new abap.types.Structure({"field1": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_NO_TITLE_DESCR-FIELD1"}), "inner_struc": new abap.types.Structure({"inner_field": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>INNER_STRUC_NO_TITLE_DESCR-INNER_FIELD"})}, "zcl_aff_test_types=>inner_struc_no_title_descr", undefined, {}, {}), "inner_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_test_types=>table_no_title_descr")}, "zcl_aff_test_types=>structure_no_title_descr", undefined, {}, {});
zcl_aff_test_types.ty_include_type = new abap.types.Structure({"first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-FIRST_ELEMENT"}), "second_element": new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), "third_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-THIRD_ELEMENT"})}, "zcl_aff_test_types=>ty_include_type", undefined, {}, {});
zcl_aff_test_types.structure_with_include = new abap.types.Structure({"first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-FIRST_ELEMENT"}), "second_element": new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), "third_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-THIRD_ELEMENT"}), "other_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>STRUCTURE_WITH_INCLUDE-OTHER_ELEMENT"}), "other_structure": new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {})}, "zcl_aff_test_types=>structure_with_include", undefined, {}, {});
zcl_aff_test_types.struc_with_own_enum_values = new abap.types.Structure({"enum_component": new abap.types.Character(2, {"qualifiedName":"zcl_aff_test_types=>struc_with_own_enum_values-enum_component"})}, "zcl_aff_test_types=>struc_with_own_enum_values", undefined, {}, {});
export {zcl_aff_test_types};
//# sourceMappingURL=zcl_aff_test_types.clas.mjs.map