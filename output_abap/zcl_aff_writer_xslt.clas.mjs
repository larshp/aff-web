const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer_xslt.clas.abap
class zcl_aff_writer_xslt extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_WRITER_XSLT';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  static ATTRIBUTES = {"ST_ROOT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "ST_TEMPLATE_IMPORTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "NEXT_TAG_WITHOUT_NAME_AND_REF": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "STACK_DEFAULT_COMP_OF_STRUC": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_components_with_default");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IGNORE_NEXT_ELEMENTS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"GET_TAG_FROM_TYPE": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_OPTION": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "WRITE_ENUM_VALUE_MAPPINGS": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_VALUES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}}},
  "GET_ABAP_VALUE": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ABAP_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_NAME": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_REF": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_REF_FOR_STRUCTURE": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_CONDITION_TAB_OR_STRUC": {"visibility": "I", "parameters": {"CONDITION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TYPE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_CONDITION_FOR_ELEMENT": {"visibility": "I", "parameters": {"CONDITION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_VALUES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}}},
  "GET_ENUM_VALUES": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}, "ENUM_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_typekind"});}, "is_optional": " "}}},
  "GET_DEFAULT_VALUE_FROM_DEFAULT": {"visibility": "I", "parameters": {"DEFAULT_": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_VALUES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_PREFIXED_DEFAULT": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "WRITE_CALLBACK_TEMPLATE": {"visibility": "I", "parameters": {"ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "TAG": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESET_INDENT_LEVEL_TAG": {"visibility": "I", "parameters": {}},
  "WRITE_DEFAULTS": {"visibility": "I", "parameters": {}},
  "WRITE_ISO_LANGUAGE_CALLBACK": {"visibility": "I", "parameters": {"ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ENABLE_EXTENSION": {"visibility": "I", "parameters": {"STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}}},
  "GET_DEFAULT": {"visibility": "I", "parameters": {"DEFAULT_": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_VALUES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_ABAPDOC_FULLNAME_TAB_STRUC": {"visibility": "I", "parameters": {"TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "TYPE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_ABAPDOC_FULLNAME_ELEMENT": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_ENUM_MAP_EXT_COMPATIBLE": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_VALUES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");}, "is_optional": " "}}},
  "GET_TO_REF": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_OPEN_STRUCTURE": {"visibility": "O", "parameters": {"STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "APPEND_AFTER_OUTPUT": {"visibility": "O", "parameters": {}},
  "APPEND_BEFORE_OUTPUT": {"visibility": "O", "parameters": {}},
  "WRITE_ELEMENT": {"visibility": "O", "parameters": {}},
  "OPEN_STRUCTURE": {"visibility": "O", "parameters": {}},
  "OPEN_TABLE": {"visibility": "O", "parameters": {}},
  "CLOSE_STRUCTURE": {"visibility": "O", "parameters": {}},
  "WRITE_TAG": {"visibility": "O", "parameters": {}},
  "CLOSE_TABLE": {"visibility": "O", "parameters": {}},
  "WRITE_CALLBACK": {"visibility": "O", "parameters": {"NAME_OF_CALLBACK_CLASS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "PARAMETER_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "REF_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"ST_ROOT_NAME": {"type": () => {return new abap.types.Character();}, "is_optional": " "}}},
  "ZIF_AFF_WRITER~VALIDATE": {"visibility": "U", "parameters": {}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.st_root_name = new abap.types.String({qualifiedName: "STRING"});
    this.st_template_imports = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.next_tag_without_name_and_ref = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    this.stack_default_comp_of_struc = abap.types.TableFactory.construct(new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_components_with_default");
    this.ignore_next_elements = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
  }
  async constructor_(INPUT) {
    let st_root_name = INPUT?.st_root_name || new abap.types.Character();
    if (INPUT === undefined || INPUT.st_root_name === undefined) {st_root_name = new abap.types.Character(4).set('root');}
    await super.constructor_();
    this.me.get().st_root_name.set(st_root_name);
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_true);
    return this;
  }
  async open_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    await this.write_open_structure({structure_name: structure_name, structure_description: structure_description});
    abap.statements.clear(temp1);
    temp1.get().name.set(structure_name);
    temp1.get().absolute_name.set(structure_description.get().absolute_name);
    abap.statements.insertInternal({data: temp1, index: abap.IntegerFactory.get(1), table: this.me.get().stack_of_structure});
  }
  async write_open_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp2 = new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {});
    await this.clear_type_specifics();
    await this.set_abapdoc_fullname_tab_struc({type_description: structure_description, type_name: structure_name});
    if (abap.compare.initial(this.abap_doc.get().callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: this.abap_doc.get().callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_callback_template({element_name: structure_name, description: structure_description});
    }
    await this.write_open_tag({line: new abap.types.String().set(`<tt:cond${abap.templateFormatting((await this.get_condition_tab_or_struc({type_name: structure_name})))}>`)});
    await this.write_open_tag({line: new abap.types.String().set(`<object${abap.templateFormatting((await this.get_name({name: structure_name})))}${abap.templateFormatting((await this.get_ref_for_structure({name: structure_name})))}>`)});
    abap.statements.clear(temp2);
    temp2.get().line_to_insert.set(abap.builtin.lines({val: this.content}));
    abap.statements.insertInternal({data: temp2, index: abap.IntegerFactory.get(1), table: this.me.get().stack_default_comp_of_struc});
    await this.write_open_tag({line: new abap.types.String().set(`<tt:group>`)});
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_false);
  }
  async open_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
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
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp3 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
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
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:group>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:loop>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</array>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond>`)});
    this.next_tag_without_name_and_ref.set(abap.builtin.abap_false);
    await this.reset_indent_level_tag();
  }
  async append_before_output() {
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.append({source: new abap.types.String().set(`<?sap.transform simple?>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">`), target: this.output});
    abap.statements.append({source: this.st_template_imports, lines: true, target: this.output});
    temp4.set(new abap.types.String().set(`<tt:root name="${abap.templateFormatting(this.st_root_name)}"/>`));
    abap.statements.append({source: temp4, target: this.output});
    temp5.set(new abap.types.String().set(`<tt:variable name="VARIABLE"/>`));
    abap.statements.append({source: temp5, target: this.output});
    abap.statements.append({source: new abap.types.String().set(`<tt:template>`), target: this.output});
    temp6.set(new abap.types.String().set(`<tt:ref name="${abap.templateFormatting(this.st_root_name)}">`));
    abap.statements.append({source: temp6, target: this.output});
  }
  async append_after_output() {
    abap.statements.append({source: new abap.types.String().set(`</tt:ref>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`</tt:template>`), target: this.output});
    abap.statements.append({source: new abap.types.String().set(`</tt:transform>`), target: this.output});
  }
  async write_element(INPUT) {
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
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
      temp7.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string);
    } else {
      temp7.set((await this.get_json_type_from_description({element_description: element_description})));
    }
    type.set(temp7);
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
    } else if (abap.compare.initial(this.abap_doc.get().default_) === false) {
      await this.write_open_tag({line: new abap.types.String().set(`<tt:deserialize>`)});
      await this.write_enum_map_ext_compatible({element_description: element_description, element_name: element_name, enum_values: enum_values});
      await this.write_closing_tag({line: new abap.types.String().set(`</tt:deserialize>`)});
      await this.write_open_tag({line: new abap.types.String().set(`<tt:serialize>`)});
      await this.write_enum_value_mappings({element_description: element_description, element_name: element_name, enum_values: enum_values});
      await this.write_closing_tag({line: new abap.types.String().set(`</tt:serialize>`)});
    } else {
      await this.write_enum_value_mappings({element_description: element_description, element_name: element_name, enum_values: enum_values});
    }
    await this.write_closing_tag({line: new abap.types.String().set(`</${abap.templateFormatting(tag)}>`)});
    await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond>`)});
    await this.reset_indent_level_tag();
  }
  async set_abapdoc_fullname_element(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let splitted_absolute_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let already_searched = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let abap_doc_second = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_true)) {
      splitted_absolute_name.set((await this.get_splitted_absolute_name({absolute_name: element_description.get().absolute_name})));
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(1),
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique134 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique134.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_xslt.clas.abap","INTERNAL_LINE": 395};
        throw unique134;
      }
      source_type.set(temp1);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(2),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique135 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique135.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_xslt.clas.abap","INTERNAL_LINE": 405};
        throw unique135;
      }
      source.set(temp3);
      this.fullname_of_type.set(element_name);
      already_searched.set(abap.builtin.abap_true);
    } else {
      await this.get_all_path_information({name: element_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
    }
    if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
      this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: this.fullname_of_type})));
    }
    if (abap.compare.eq(already_searched, abap.builtin.abap_false)) {
      abap_doc_second.set((await this.get_abap_doc_for_absolute_name({absolute_name: element_description.get().absolute_name})));
      await this.compare_abap_doc({abap_doc_additional: abap_doc_second, abap_doc_base: this.abap_doc});
    }
    await this.check_redundant_annotations();
  }
  async set_abapdoc_fullname_tab_struc(INPUT) {
    let type_description = INPUT?.type_description;
    if (type_description?.getQualifiedName === undefined || type_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { type_description = undefined; }
    if (type_description === undefined) { type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.type_description); }
    let type_name = INPUT?.type_name;
    if (type_name?.getQualifiedName === undefined || type_name.getQualifiedName() !== "STRING") { type_name = undefined; }
    if (type_name === undefined) { type_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type_name); }
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_second = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      await this.get_all_path_information({name: type_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
      if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
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
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    let temp8 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp9 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let unique136 = json_type;
    if (abap.compare.eq(unique136, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string) || abap.compare.eq(unique136, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
      result.set(new abap.types.String().set(`str`));
    } else if (abap.compare.eq(unique136, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
      result.set(new abap.types.String().set(`bool`));
    } else if (abap.compare.eq(unique136, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
      result.set(new abap.types.String().set(`num`));
    } else {
      temp8.set(json_type);
      msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(102), msgv1: temp8})));
      temp9.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
      throw temp9.get();
    }
    return result;
  }
  async get_option(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let temp10 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    if (abap.compare.eq((await this.is_sy_langu({element_description: element_description})), abap.builtin.abap_true)) {
      result.set(new abap.types.String().set(` option="format(language)"`));
    } else {
      let unique137 = json_type;
      if (abap.compare.eq(unique137, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string)) {
        result.set(abap.builtin.space);
      } else if (abap.compare.eq(unique137, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
        result.set(new abap.types.String().set(` option="format(dateTimeOffset)"`));
      } else if (abap.compare.eq(unique137, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
        result.set(new abap.types.String().set(` option="format(boolean)"`));
      } else if (abap.compare.eq(unique137, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
        result.set(new abap.types.String().set(` option="format(alpha)"`));
      } else {
        temp10.set(json_type);
        msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(102), msgv1: temp10})));
        temp11.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
        throw temp11.get();
      }
    }
    return result;
  }
  async write_enum_value_mappings(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let enum_values = INPUT?.enum_values;
    if (enum_values?.getQualifiedName === undefined || enum_values.getQualifiedName() !== "ZCL_AFF_WRITER_XSLT=>TT_ENUM_VALUES") { enum_values = undefined; }
    if (enum_values === undefined) { enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values").set(INPUT.enum_values); }
    let index = new abap.types.Integer({qualifiedName: "I"});
    let fs_enum_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}));
    let abap_value = new abap.types.String({qualifiedName: "STRING"});
    let xml_value = new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"});
    if (abap.compare.eq(abap.builtin.lines({val: enum_values}), abap.IntegerFactory.get(0))) {
      return;
    }
    await this.write_tag({line: new abap.types.String().set(`<tt:value${abap.templateFormatting((await this.get_ref({name: element_name})))} map="`)});
    index.set(abap.IntegerFactory.get(1));
    for await (const unique138 of abap.statements.loop(enum_values)) {
      fs_enum_value_.assign(unique138);
      abap_value.set((await this.get_abap_value({abap_value: fs_enum_value_.get().abap_value, element_description: element_description})));
      if (abap.compare.initial(fs_enum_value_.get().overwritten_json_value)) {
        xml_value.set(fs_enum_value_.get().json_value);
      } else {
        xml_value.set(fs_enum_value_.get().overwritten_json_value);
      }
      if (abap.compare.lt(index, abap.builtin.lines({val: enum_values}))) {
        await this.write_tag({line: new abap.types.String().set(`  val(${abap.templateFormatting(abap_value)})=xml('${abap.templateFormatting(xml_value)}'),`)});
      } else {
        await this.write_tag({line: new abap.types.String().set(`  val(${abap.templateFormatting(abap_value)})=xml('${abap.templateFormatting(xml_value)}')"`)});
        await this.write_tag({line: new abap.types.String().set(`/>`)});
      }
      index.set(abap.operators.add(index,abap.IntegerFactory.get(1)));
    }
  }
  async get_abap_value(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let abap_value = INPUT?.abap_value;
    if (abap_value?.getQualifiedName === undefined || abap_value.getQualifiedName() !== "STRING") { abap_value = undefined; }
    if (abap_value === undefined) { abap_value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.abap_value); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let abap_value_copy = new abap.types.String({qualifiedName: "STRING"});
    let unique139 = element_description.get().type_kind;
    if (abap.compare.eq(unique139, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique139, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique139, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique139, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)) {
      abap_value_copy.set(abap_value);
      abap.statements.condense(abap_value_copy, {nogaps: false});
      result.set(new abap.types.String().set(`I(${abap.templateFormatting(abap_value_copy)})`));
    } else if (abap.compare.eq(unique139, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num)) {
      result.set(new abap.types.String().set(`N('${abap.templateFormatting(abap_value)}')`));
    } else {
      result.set(new abap.types.String().set(`'${abap.templateFormatting(abap_value)}'`));
    }
    return result;
  }
  async get_name(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` name="${abap.templateFormatting((await this.format_name({name: name})))}"`));
    }
    return result;
  }
  async get_ref(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` ref="${abap.templateFormatting(name)}"`));
    }
    return result;
  }
  async get_to_ref(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` to-ref="${abap.templateFormatting(name)}"`));
    }
    return result;
  }
  async get_ref_for_structure(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_false)) {
      result.set(new abap.types.String().set(` tt:ref="${abap.templateFormatting(name)}"`));
    }
    return result;
  }
  async get_condition_tab_or_struc(INPUT) {
    let condition = new abap.types.String({qualifiedName: "STRING"});
    let type_name = INPUT?.type_name;
    if (type_name?.getQualifiedName === undefined || type_name.getQualifiedName() !== "STRING") { type_name = undefined; }
    if (type_name === undefined) { type_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type_name); }
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
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "STRING") { type = undefined; }
    if (type === undefined) { type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type); }
    let enum_values = INPUT?.enum_values;
    if (enum_values?.getQualifiedName === undefined || enum_values.getQualifiedName() !== "ZCL_AFF_WRITER_XSLT=>TT_ENUM_VALUES") { enum_values = undefined; }
    if (enum_values === undefined) { enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values").set(INPUT.enum_values); }
    let default_ = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(this.next_tag_without_name_and_ref, abap.builtin.abap_true)) {
      return condition;
    }
    if (abap.compare.initial(this.abap_doc.get().default_) === false && (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) || abap.compare.initial(this.abap_doc.get().enumvalues_link) === false)) {
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
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let enum_values = INPUT?.enum_values;
    if (enum_values?.getQualifiedName === undefined || enum_values.getQualifiedName() !== "ZCL_AFF_WRITER_XSLT=>TT_ENUM_VALUES") { enum_values = undefined; }
    if (enum_values === undefined) { enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values").set(INPUT.enum_values); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "STRING") { type = undefined; }
    if (type === undefined) { type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type); }
    let table = abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair");
    let temp5 = new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    let temp12 = new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {});
    let fs_temp13_ = new abap.types.FieldSymbol(new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {}));
    let temp14 = new abap.types.Integer({qualifiedName: "I"});
    default_.set((await this.get_default_value_from_default({enum_values: enum_values, element_description: element_description, type: type})));
    if (abap.compare.initial(default_) === false) {
      temp6.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_default_comp_of_struc,{index: abap.IntegerFactory.get(1),
        into: temp5});
      abap.builtin.sy.get().tabix.set(temp6);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique140 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique140.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_xslt.clas.abap","INTERNAL_LINE": 647};
        throw unique140;
      }
      table.set(temp5.get().table_of_defaults);
      abap.statements.clear(temp12);
      temp12.get().var_name.set(structure_name);
      temp12.get().default_value.set(default_);
      abap.statements.append({source: temp12, target: table});
      temp14.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_default_comp_of_struc,{index: abap.IntegerFactory.get(1),
        assigning: fs_temp13_});
      abap.builtin.sy.get().tabix.set(temp14);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique141 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique141.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_xslt.clas.abap","INTERNAL_LINE": 661};
        throw unique141;
      }
      fs_temp13_.get().table_of_defaults.set(table);
    }
    return default_;
  }
  async get_enum_values(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
    let enum_type = INPUT?.enum_type;
    if (enum_type?.getQualifiedName === undefined || enum_type.getQualifiedName() !== "ABAP_TYPEKIND") { enum_type = undefined; }
    if (enum_type === undefined) { enum_type = new abap.types.Character(1, {"qualifiedName":"abap_typekind"}).set(INPUT.enum_type); }
    let structure_of_values = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    let fs_attr_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_fs_data_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "name": new abap.types.Character(30, {"qualifiedName":"abap_compname"})}, "abap_compdescr", undefined, {}, {}));
    let fullname_of_component = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_of_component = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let temp15 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let temp7 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp16 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let temp17 = new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {});
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    await this.get_structure_of_enum_values({link_to_values: this.abap_doc.get().enumvalues_link, fullname_of_type: this.fullname_of_type, structure_of_values: structure_of_values, name_of_source: name_of_source, name_of_constant: name_of_constant});
    if (abap.compare.initial(structure_of_values) === false) {
      abap.statements.assign({target: fs_attr_, dynamicName: name_of_source.get() + '=>' + name_of_constant.get(), dynamicSource: (() => {
                    const name = name_of_source.get().toLowerCase().replace(/[~\/]/g, "$").match(/[\w\$\/]+/)[0];
                    try { return eval(name); } catch {}
                    try { return eval("this." + name); } catch {}
                  })()});
        for await (const unique142 of abap.statements.loop(structure_of_values.get().components)) {
          fs_component_.assign(unique142);
          fullname_of_component.set(abap.operators.concat(name_of_constant,abap.operators.concat(new abap.types.Character(1).set('-'),fs_component_.get().name)));
          abap_doc_of_component.set((await this.call_reader_and_decode({name_of_source: name_of_source, element_name: fullname_of_component})));
          if (abap.compare.ne(fs_component_.get().type_kind, enum_type)) {
            temp15.set(name_of_constant);
            temp7.set(this.fullname_of_type);
            msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(122), msgv1: temp15, msgv2: temp7})));
            temp16.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
            throw temp16.get();
          }
          abap.statements.assign({component: fs_component_.get().name, target: fs_fs_data_, source: fs_attr_});
          abap.statements.clear(temp17);
          temp17.get().abap_value.set(fs_fs_data_);
          temp8.set(fs_component_.get().name);
          temp17.get().json_value.set((await this.format_name({name: temp8})));
          temp17.get().overwritten_json_value.set(abap_doc_of_component.get().enum_value);
          abap.statements.insertInternal({data: temp17, table: result});
        }
        if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) && abap.compare.initial(this.abap_doc.get().default_)) {
          await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg127, component_name: this.fullname_of_type});
        }
      }
      return result;
    }
    async write_tag(INPUT) {
      let line = INPUT?.line;
      if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
      if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
      let temp18 = new abap.types.String({qualifiedName: "STRING"});
      if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(abap.operators.minus(this.ignore_til_indent_level,abap.IntegerFactory.get(1)), this.indent_level)) {
        temp18.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters)}))}${abap.templateFormatting(line)}`));
        abap.statements.append({source: temp18, target: this.content});
      }
    }
    async get_default_value_from_default(INPUT) {
      let default_ = new abap.types.String({qualifiedName: "STRING"});
      let enum_values = INPUT?.enum_values;
      if (enum_values?.getQualifiedName === undefined || enum_values.getQualifiedName() !== "ZCL_AFF_WRITER_XSLT=>TT_ENUM_VALUES") { enum_values = undefined; }
      if (enum_values === undefined) { enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values").set(INPUT.enum_values); }
      let type = INPUT?.type;
      if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "STRING") { type = undefined; }
      if (type === undefined) { type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type); }
      let element_description = INPUT?.element_description;
      if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
      if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
      let message = new abap.types.String({qualifiedName: "STRING"});
      let default_json = new abap.types.String({qualifiedName: "STRING"});
      let mapping_for_given_default = new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {});
      if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
        message.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(117), msgv1: new abap.types.String().set(`UTCLONG`)})));
        await this.log.get().zif_aff_log$add_warning({message_text: message, component_name: this.fullname_of_type});
        return default_;
      }
      default_.set(this.abap_doc.get().default_);
      abap.statements.replace({target: default_, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`"`)});
      if (abap.compare.cs(default_, new abap.types.Character(5).set('@link'))) {
        default_json.set((await this.get_default_from_link({link: default_, fullname_of_type: this.fullname_of_type, element_type: element_description.get().type_kind})));
        if (abap.compare.initial(default_json)) {
          abap.statements.clear(default_);
          return default_;
        }
        abap.statements.readTable(enum_values,{into: mapping_for_given_default,
          withKey: (i) => {return abap.compare.eq(i.json_value, default_json);},
          withKeyValue: [{key: (i) => {return i.json_value}, value: default_json}],
          usesTableLine: false,
          withKeySimple: {"json_value": default_json}});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
          default_.set((await this.get_prefixed_default({value: mapping_for_given_default.get().abap_value, element_description: element_description})));
        } else {
          abap.statements.clear(default_);
          return default_;
        }
      } else {
        if (abap.compare.initial((await this.is_default_value_valid({element_description: element_description, default_value: default_, fullname_of_type: this.fullname_of_type}))) === true) {
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
      let value = INPUT?.value;
      if (value?.getQualifiedName === undefined || value.getQualifiedName() !== "STRING") { value = undefined; }
      if (value === undefined) { value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.value); }
      let element_description = INPUT?.element_description;
      if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
      if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
      let value_copy = new abap.types.String({qualifiedName: "STRING"});
      let message = new abap.types.String({qualifiedName: "STRING"});
      let temp19 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
      let temp20 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
      let unique143 = element_description.get().type_kind;
      if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2)) {
        value_copy.set(value);
        abap.statements.condense(value_copy, {nogaps: false});
        result.set(new abap.types.String().set(`I(${abap.templateFormatting(value_copy)})`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)) {
        result.set(new abap.types.String().set(`INT8(${abap.templateFormatting(value)})`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_float)) {
        result.set(new abap.types.String().set(`F('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_xstring) || abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_hex)) {
        result.set(new abap.types.String().set(`X('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16)) {
        result.set(new abap.types.String().set(`DECFLOAT16('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {
        result.set(new abap.types.String().set(`DECFLOAT34('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
        result.set(new abap.types.String().set(`P(${abap.templateFormatting(value)})`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num)) {
        result.set(new abap.types.String().set(`N('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char) || abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string)) {
        result.set(new abap.types.String().set(`C('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date)) {
        result.set(new abap.types.String().set(`D('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
        result.set(new abap.types.String().set(`T('${abap.templateFormatting(value)}')`));
      } else if (abap.compare.eq(unique143, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
        message.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(117), msgv1: new abap.types.String().set(`UTCLONG`)})));
        temp19.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: message}));
        throw temp19.get();
      } else {
        temp20.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
        throw temp20.get();
      }
      return result;
    }
    async write_defaults() {
      let actual_entry = new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {});
      let temp9 = new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {});
      let temp10 = new abap.types.Integer({qualifiedName: "I"});
      let list_of_applies = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
      let fs_default_ = new abap.types.FieldSymbol(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}));
      let temp21 = new abap.types.String({qualifiedName: "STRING"});
      temp10.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().stack_default_comp_of_struc,{index: abap.IntegerFactory.get(1),
        into: temp9});
      abap.builtin.sy.get().tabix.set(temp10);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique144 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique144.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_xslt.clas.abap","INTERNAL_LINE": 843};
        throw unique144;
      }
      actual_entry.set(temp9);
      for await (const unique145 of abap.statements.loop(actual_entry.get().table_of_defaults)) {
        fs_default_.assign(unique145);
        temp21.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.minus(abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters),zcl_aff_writer_xslt.c_indent_number_characters)}))}<tt:assign to-ref="${abap.templateFormatting(fs_default_.get().var_name)}" val="${abap.templateFormatting(fs_default_.get().default_value)}"/>`));
        abap.statements.append({source: temp21, target: list_of_applies});
      }
      abap.statements.insertInternal({lines: true, data: list_of_applies, index: abap.operators.add(actual_entry.get().line_to_insert,abap.IntegerFactory.get(1)), table: this.content});
      await abap.statements.deleteInternal(this.me.get().stack_default_comp_of_struc,{index: abap.IntegerFactory.get(1)});
    }
    async write_callback_template(INPUT) {
      let element_name = INPUT?.element_name;
      if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
      if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
      let description = INPUT?.description;
      if (description?.getQualifiedName === undefined || description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { description = undefined; }
      if (description === undefined) { description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.description); }
      let tag = new abap.types.String({qualifiedName: "STRING"});
      if (INPUT && INPUT.tag) {tag.set(INPUT.tag);}
      let ref_name = new abap.types.String({qualifiedName: "STRING"});
      let calculated_tag = new abap.types.String({qualifiedName: "STRING"});
      let temp22 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
      let component_start = new abap.types.String({qualifiedName: "STRING"});
      let component_end = new abap.types.String({qualifiedName: "STRING"});
      if (abap.compare.gt(this.indent_level, abap.IntegerFactory.get(0))) {
        await this.write_open_tag({line: new abap.types.Character(9).set('<tt:cond>')});
        if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
          ref_name.set(element_name);
        } else {
          ref_name.set(new abap.types.Character(4).set('$ref'));
        }
      } else {
        ref_name.set(new abap.types.String().set(`.${abap.templateFormatting(this.st_root_name)}`));
      }
      let unique146 = description.get().kind;
      if (abap.compare.eq(unique146, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
        if (abap.compare.initial(tag) === false) {
          calculated_tag.set(tag);
        } else {
          await abap.statements.cast(temp22, description);
          calculated_tag.set((await this.get_tag_from_type({json_type: (await this.get_json_type_from_description({element_description: temp22}))})));
        }
        component_start.set(new abap.types.String().set(`<${abap.templateFormatting(calculated_tag)}>`));
        component_end.set(new abap.types.String().set(`</${abap.templateFormatting(calculated_tag)}>`));
      } else if (abap.compare.eq(unique146, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
        component_start.set(new abap.types.String().set(`<object>`));
        component_end.set(new abap.types.String().set(`</object>`));
      } else if (abap.compare.eq(unique146, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
        component_start.set(new abap.types.String().set(`<array>`));
        component_end.set(new abap.types.String().set(`</array>`));
      }
      await this.write_open_tag({line: new abap.types.String().set(`${abap.templateFormatting(component_start)} `)});
      await this.write_callback({name_of_callback_class: this.abap_doc.get().callback_class, parameter_name: element_name, ref_name: ref_name});
      await this.write_closing_tag({line: new abap.types.String().set(`  ${abap.templateFormatting(component_end)} `)});
      if (abap.compare.gt(this.indent_level, abap.IntegerFactory.get(0))) {
        await this.write_closing_tag({line: new abap.types.Character(10).set('</tt:cond>')});
      }
      this.ignore_til_indent_level.set(abap.operators.add(this.indent_level,abap.IntegerFactory.get(1)));
    }
    async write_callback(INPUT) {
      let name_of_callback_class = INPUT?.name_of_callback_class;
      if (name_of_callback_class?.getQualifiedName === undefined || name_of_callback_class.getQualifiedName() !== "STRING") { name_of_callback_class = undefined; }
      if (name_of_callback_class === undefined) { name_of_callback_class = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name_of_callback_class); }
      let parameter_name = INPUT?.parameter_name;
      if (parameter_name?.getQualifiedName === undefined || parameter_name.getQualifiedName() !== "STRING") { parameter_name = undefined; }
      if (parameter_name === undefined) { parameter_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.parameter_name); }
      let ref_name = INPUT?.ref_name;
      if (ref_name?.getQualifiedName === undefined || ref_name.getQualifiedName() !== "STRING") { ref_name = undefined; }
      if (ref_name === undefined) { ref_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.ref_name); }
      let parameter_name_to_lower = new abap.types.String({qualifiedName: "STRING"});
      await this.write_open_tag({line: new abap.types.String().set(`<tt:call-method class="${abap.templateFormatting(name_of_callback_class)}" d-name="deserialize" reader="reader" s-name="serialize" writer="writer">`)});
      parameter_name_to_lower.set(abap.builtin.to_lower({val: parameter_name}));
      await this.write_tag({line: new abap.types.String().set(`<tt:with-parameter name="${abap.templateFormatting(parameter_name_to_lower)}" ref="${abap.templateFormatting(ref_name)}"/>`)});
      await this.write_closing_tag({line: new abap.types.Character(17).set('</tt:call-method>')});
    }
    async reset_indent_level_tag() {
      if (abap.compare.eq(abap.operators.minus(this.ignore_til_indent_level,abap.IntegerFactory.get(1)), this.indent_level)) {
        abap.statements.clear(this.ignore_til_indent_level);
      }
    }
    async zif_aff_writer$validate(INPUT) {
      let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
      let source = INPUT?.source;
      if (source?.getQualifiedName === undefined || source.getQualifiedName() !== "STRING_TABLE") { source = undefined; }
      if (source === undefined) { source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.source); }
      let log = INPUT?.log;
      if (log?.getQualifiedName === undefined || log.getQualifiedName() !== "ZIF_AFF_LOG") { log = undefined; }
      if (log === undefined) { log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log); }
      let tsource = (() => { throw "Void type: O2PAGELINE_TABLE" })();
      let errors = abap.types.TableFactory.construct(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_o2_api_xsltdesc=>ty_error_tab");
      let exception = new abap.types.ABAPObject({qualifiedName: "CX_O2_XSLT_ERROR", RTTIName: "\\CLASS=CX_O2_XSLT_ERROR"});
      let fs_error_ = new abap.types.FieldSymbol(new abap.types.Structure({"text": new abap.types.String({qualifiedName: "CL_O2_API_XSLTDESC=>TY_ERROR-TEXT"})}, "cl_o2_api_xsltdesc=>ty_error", undefined, {}, {}));
      let msg = new abap.types.String({qualifiedName: "STRING"});
      let temp23 = new abap.types.String({qualifiedName: "STRING"});
      abap.statements.append({source: source, lines: true, target: tsource});
      try {
        await abap.Classes['CL_O2_API_XSLTDESC'].check_transformation_source({i_name: new abap.types.Character(13).set('GENERATED_AFF'), i_source: tsource, e_error_list: errors});
      } catch (e) {
        if ((abap.Classes['CX_O2_XSLT_ERROR'] && e instanceof abap.Classes['CX_O2_XSLT_ERROR'])) {
          exception.set(e);
        } else {
          throw e;
        }
      }
      if (abap.compare.gt(abap.builtin.lines({val: errors}), abap.IntegerFactory.get(0)) || abap.compare.initial(exception) === false) {
        for await (const unique147 of abap.statements.loop(errors)) {
          fs_error_.assign(unique147);
          await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_clike({text: fs_error_.get().text});
          msg.set((await log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(0), msgv1: abap.builtin.sy.get().msgv1, msgv2: abap.builtin.sy.get().msgv2, msgv3: abap.builtin.sy.get().msgv3, msgv4: abap.builtin.sy.get().msgv4})));
          abap.statements.clear(temp23);
          await log.get().zif_aff_log$add_error({message_text: msg, component_name: temp23});
        }
        return result;
      }
      result.set(abap.builtin.abap_true);
      return result;
    }
    async write_iso_language_callback(INPUT) {
      let element_name = INPUT?.element_name;
      if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
      if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
      await this.write_callback({name_of_callback_class: new abap.types.Character(29).set('cl_aff_xslt_callback_language'), parameter_name: new abap.types.Character(8).set('language'), ref_name: element_name});
    }
    async enable_extension(INPUT) {
      let structure_description = INPUT?.structure_description;
      if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { structure_description = undefined; }
      if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.structure_description); }
      let components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
      let str_comp = new abap.types.String({qualifiedName: "STRING"});
      let component = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
      let formatted_name = new abap.types.String({qualifiedName: "STRING"});
      let tag = new abap.types.String({qualifiedName: "STRING"});
      let temp24 = new abap.types.String({qualifiedName: "STRING"});
      await this.write_open_tag({line: new abap.types.String().set(`<tt:d-cond frq="*">`)});
      await this.write_open_tag({line: new abap.types.String().set(` <_ tt:lax="on">`)});
      await this.write_open_tag({line: new abap.types.String().set(`<tt:call-method class="CL_AFF_XSLT_CALLBACK_TYPE" name="RAISE_DIFFERENT_TYPE_EXCEPTION" reader="IO_READER">`)});
      components.set((await structure_description.get().get_components()));
      for await (const unique148 of abap.statements.loop(components)) {
        component.set(unique148);
        formatted_name.set((await this.format_name({name: component.get().name})));
        if (abap.compare.initial(component.get().as_include) === false) {
          continue;
        }
        if (abap.compare.eq(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
          str_comp.set(new abap.types.String().set(`${abap.templateFormatting(formatted_name)};`));
          continue;
        }
        str_comp.set(new abap.types.String().set(`${abap.templateFormatting(str_comp)}${abap.templateFormatting(formatted_name)};`));
      }
      tag.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,zcl_aff_writer_xslt.c_indent_number_characters)}))}<tt:with-parameter name="MEMBERS" val="'${abap.templateFormatting(str_comp)}'"/>`));
      if (abap.compare.gt(abap.builtin.strlen({val: tag}), new abap.types.Integer().set(255))) {
        await this.write_tag({line: new abap.types.String().set(`<tt:with-parameter name="MEMBERS"`)});
        if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(abap.operators.minus(this.ignore_til_indent_level,abap.IntegerFactory.get(1)), this.indent_level)) {
          temp24.set(new abap.types.String().set(`val="'${abap.templateFormatting(str_comp)}'"/>`));
          abap.statements.append({source: temp24, target: this.content});
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
    async write_enum_map_ext_compatible(INPUT) {
      let element_description = INPUT?.element_description;
      if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
      if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
      let element_name = INPUT?.element_name;
      if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
      if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
      let enum_values = INPUT?.enum_values;
      if (enum_values?.getQualifiedName === undefined || enum_values.getQualifiedName() !== "ZCL_AFF_WRITER_XSLT=>TT_ENUM_VALUES") { enum_values = undefined; }
      if (enum_values === undefined) { enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values").set(INPUT.enum_values); }
      let fs_enum_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}));
      let abap_value = new abap.types.String({qualifiedName: "STRING"});
      let xml_value = new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"});
      await this.write_tag({line: new abap.types.String().set(`<tt:read type="C" var="VARIABLE"/>`)});
      for await (const unique149 of abap.statements.loop(enum_values)) {
        fs_enum_value_.assign(unique149);
        abap_value.set((await this.get_abap_value({abap_value: fs_enum_value_.get().abap_value, element_description: element_description})));
        if (abap.compare.initial(fs_enum_value_.get().overwritten_json_value)) {
          xml_value.set(fs_enum_value_.get().json_value);
        } else {
          xml_value.set(fs_enum_value_.get().overwritten_json_value);
        }
        await this.write_open_tag({line: new abap.types.String().set(`<tt:cond-var check="VARIABLE='${abap.templateFormatting(xml_value)}'">`)});
        await this.write_tag({line: new abap.types.String().set(`<tt:assign ${abap.templateFormatting((await this.get_to_ref({name: element_name})))} val="${abap.templateFormatting(abap_value)}"/>`)});
        await this.write_closing_tag({line: new abap.types.String().set(`</tt:cond-var>`)});
      }
    }
  }
  abap.Classes['ZCL_AFF_WRITER_XSLT'] = zcl_aff_writer_xslt;
  zcl_aff_writer_xslt.ty_variable_default_pair = new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {});
  zcl_aff_writer_xslt.tt_variable_default_pair = abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair");
  zcl_aff_writer_xslt.ty_components_with_default = new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {});
  zcl_aff_writer_xslt.tt_components_with_default = abap.types.TableFactory.construct(new abap.types.Structure({"line_to_insert": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_COMPONENTS_WITH_DEFAULT-LINE_TO_INSERT"}), "table_of_defaults": abap.types.TableFactory.construct(new abap.types.Structure({"var_name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-VAR_NAME"}), "default_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_VARIABLE_DEFAULT_PAIR-DEFAULT_VALUE"})}, "zcl_aff_writer_xslt=>ty_variable_default_pair", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_variable_default_pair")}, "zcl_aff_writer_xslt=>ty_components_with_default", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_components_with_default");
  zcl_aff_writer_xslt.ty_enum_value = new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {});
  zcl_aff_writer_xslt.tt_enum_values = abap.types.TableFactory.construct(new abap.types.Structure({"abap_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-ABAP_VALUE"}), "json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-JSON_VALUE"}), "overwritten_json_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_XSLT=>TY_ENUM_VALUE-OVERWRITTEN_JSON_VALUE"})}, "zcl_aff_writer_xslt=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_xslt=>tt_enum_values");
export {zcl_aff_writer_xslt};
//# sourceMappingURL=zcl_aff_writer_xslt.clas.mjs.map