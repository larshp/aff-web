const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer_json_schema.clas.abap
class zcl_aff_writer_json_schema extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_WRITER_JSON_SCHEMA';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  static ATTRIBUTES = {"SCHEMA_ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "STRUCTURE_BUFFER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>tt_buffer");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "TABLE_BUFFER": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>tt_buffer");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "IGNORE_NEXT_ELEMENTS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "STACK_OF_REQUIRED_TABS": {"type": () => {return abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>temp1_44ba95addc");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "FORMAT_VERSION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "C_SCHEMA_SPECIFICATION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "C_LINK_TO_REPOSITORY": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "C_FORMAT_VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": "X", "is_class": "X"},
  "C_MAX_LENGTH_OF_DESCRIPTION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"APPEND_COMMA_TO_PREV_LINE": {"visibility": "I", "parameters": {}},
  "GET_JSON_SCHEMA_TYPE": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "OPEN_JSON_SCHEMA_FOR_STRUCTURE": {"visibility": "I", "parameters": {"STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "OPEN_JSON_SCHEMA_FOR_TABLE": {"visibility": "I", "parameters": {"TABLE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});}, "is_optional": " "}}},
  "OPEN_JSON_SCHEMA_FOR_ELEMENT": {"visibility": "I", "parameters": {}},
  "GET_DESCRIPTION": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "GET_ENUM_PROPERTIES": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_ENUM_DESCRIPTIONS": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ENUM_PROPERTIES": {"type": () => {return new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});}, "is_optional": " "}}},
  "TYPE_IS_INTEGER": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_PROPERTIES_FROM_STRUCTURE": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});}, "is_optional": " "}, "ENUM_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_typekind"});}, "is_optional": " "}}},
  "ADD_REQUIRED_TABLE_TO_STACK": {"visibility": "I", "parameters": {}},
  "DELETE_FIRST_TAB_OF_REQ_STACK": {"visibility": "I", "parameters": {}},
  "WRITE_REQ_AND_ADD_PROPS": {"visibility": "I", "parameters": {}},
  "GET_FORMAT": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "DATE_TIME_FROM_ABAP_TO_JSON": {"visibility": "I", "parameters": {"DATE_TIME_JSON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "DATE_TIME_ABAP": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "HANDLE_DEFAULT": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ENUM_PROPERTIES": {"type": () => {return new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});}, "is_optional": " "}}},
  "HANDLE_EXTREMA": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "HANDLE_STRING": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "HANDLE_LANGUAGE_FIELD": {"visibility": "I", "parameters": {}},
  "HANDLE_ENUMS": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ENUM_PROPERTIES": {"type": () => {return new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});}, "is_optional": " "}}},
  "WRITE_SUBSCHEMA": {"visibility": "I", "parameters": {"CALLBACK_CLASS": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "RESET_INDENT_LEVEL_TAG": {"visibility": "I", "parameters": {}},
  "WRITE_ENUM_PROPERTIES": {"visibility": "I", "parameters": {"PROPERTY_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "CHECK_TITLE_AND_DESCRIPTION": {"visibility": "I", "parameters": {"ABAP_DOC_TO_CHECK": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}, "FULLNAME_OF_CHECKED_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_TITLE_AND_DESCRIPTION": {"visibility": "I", "parameters": {"TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "CHECK_NOT_NEEDED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}}},
  "SET_ABAPDOC_FULLNAME_ELEMENT": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SPLITTED_PREV_NAME": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "SET_ABAPDOC_FULLNAME_STRUC_TAB": {"visibility": "I", "parameters": {"TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "TYPE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_MAX_LENGTH": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_EXTREMA": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "MAX": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MIN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_CONTENT_ENCODING_VALID": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "CONTENT_ENCODING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_CONTENT_ENCODING": {"visibility": "I", "parameters": {"JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_CONTENT_MEDIA_TYPE": {"visibility": "I", "parameters": {"JSON_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_ELEMENT_DESCR_KIND_INT": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "WRITE_ELEMENT": {"visibility": "O", "parameters": {}},
  "OPEN_STRUCTURE": {"visibility": "O", "parameters": {}},
  "CLOSE_STRUCTURE": {"visibility": "O", "parameters": {}},
  "OPEN_TABLE": {"visibility": "O", "parameters": {}},
  "WRITE_TAG": {"visibility": "O", "parameters": {}},
  "CLOSE_TABLE": {"visibility": "O", "parameters": {}},
  "APPEND_AFTER_OUTPUT": {"visibility": "O", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"SCHEMA_ID": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FORMAT_VERSION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}}},
  "ZIF_AFF_WRITER~VALIDATE": {"visibility": "U", "parameters": {}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.schema_id = new abap.types.String({qualifiedName: "STRING"});
    this.structure_buffer = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>tt_buffer");
    this.table_buffer = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>tt_buffer");
    this.ignore_next_elements = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    this.stack_of_required_tabs = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>temp1_44ba95addc");
    this.format_version = new abap.types.Integer({qualifiedName: "I"});
    this.c_schema_specification = zcl_aff_writer_json_schema.c_schema_specification;
    this.c_link_to_repository = zcl_aff_writer_json_schema.c_link_to_repository;
    this.c_format_version = zcl_aff_writer_json_schema.c_format_version;
    this.c_max_length_of_description = zcl_aff_writer_json_schema.c_max_length_of_description;
  }
  async constructor_(INPUT) {
    let schema_id = INPUT?.schema_id;
    if (schema_id?.getQualifiedName === undefined || schema_id.getQualifiedName() !== "STRING") { schema_id = undefined; }
    if (schema_id === undefined) { schema_id = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.schema_id); }
    let format_version = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.format_version) {format_version.set(INPUT.format_version);}
    if (INPUT === undefined || INPUT.format_version === undefined) {format_version = abap.IntegerFactory.get(1);}
    await super.constructor_();
    this.me.get().schema_id.set(schema_id);
    this.me.get().format_version.set(format_version);
    return this;
  }
  async write_element(INPUT) {
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let json_type = new abap.types.String({qualifiedName: "STRING"});
    let formatted_name = new abap.types.String({qualifiedName: "STRING"});
    let splitted_prev_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_table1_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"));
    let callback_class = new abap.types.String({qualifiedName: "STRING"});
    let enum_properties = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});
    let check_not_needed = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let format = new abap.types.String({qualifiedName: "STRING"});
    let last_line = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let fs_temp3_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq(this.ignore_next_elements, abap.builtin.abap_true)) {
      return;
    }
    await this.clear_type_specifics();
    await this.append_comma_to_prev_line();
    json_type.set((await this.get_json_type_from_description({element_description: element_description})));
    formatted_name.set((await this.format_name({name: element_name})));
    splitted_prev_name.set((await this.get_splitted_absolute_name({absolute_name: element_description.get().absolute_name})));
    await this.set_abapdoc_fullname_element({element_description: element_description, element_name: element_name, splitted_prev_name: splitted_prev_name});
    if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true) && abap.compare.ge(abap.builtin.lines({val: this.stack_of_required_tabs}), abap.IntegerFactory.get(1))) {
      abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
        assigning: fs_table1_});
      abap.statements.append({source: formatted_name, target: fs_table1_});
    }
    callback_class.set(abap.builtin.to_upper({val: this.abap_doc.get().callback_class}));
    if (abap.compare.initial(callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: callback_class, component_name: this.fullname_of_type}))) === false) {
      if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial)) {
        await this.open_json_schema_for_element();
      }
      await this.write_subschema({callback_class: callback_class});
      if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial)) {
        await this.write_closing_tag({line: new abap.types.String().set(`}`)});
      }
      abap.statements.clear(this.ignore_til_indent_level);
      return;
    }
    if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial)) {
      await this.open_json_schema_for_element();
    } else if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
      await this.write_open_tag({line: new abap.types.String().set(`"${abap.templateFormatting(formatted_name)}": \{`)});
    }
    enum_properties.set((await this.get_enum_properties({element_description: element_description})));
    if (abap.compare.initial(enum_properties) === false) {
      json_type.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string);
    }
    check_not_needed.set(abap.builtin.abap_false);
    temp2.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(2),
      into: temp1});
    abap.builtin.sy.get().tabix.set(temp2);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique99 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique99.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 304};
      throw unique99;
    }
    if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table) && abap.compare.eq(abap.builtin.lines({val: splitted_prev_name}), abap.IntegerFactory.get(2)) && abap.compare.eq(temp1, element_name)) {
      check_not_needed.set(abap.builtin.abap_true);
    }
    await this.write_title_and_description({type_description: element_description, check_not_needed: check_not_needed});
    if (abap.compare.eq(element_name, zcl_aff_writer_json_schema.c_format_version)) {
      await this.write_tag({line: new abap.types.String().set(`"type": "string",`)});
      await this.write_tag({line: new abap.types.String().set(`"const": "${abap.templateFormatting(this.format_version)}",`)});
    } else {
      await this.write_tag({line: new abap.types.String().set(`"type": "${abap.templateFormatting((await this.get_json_schema_type({element_description: element_description, json_type: json_type})))}",`)});
      format.set((await this.get_format({element_description: element_description})));
      if (abap.compare.initial(format) === false) {
        await this.write_tag({line: new abap.types.String().set(`"format": "${abap.templateFormatting(format)}",`)});
      }
      if (abap.compare.initial(enum_properties) === false) {
        await this.handle_enums({element_description: element_description, enum_properties: enum_properties});
      } else {
        await this.write_content_encoding({json_type: json_type});
        await this.write_content_media_type({json_type: json_type});
        if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
          await this.handle_extrema({element_description: element_description});
        } else if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string) && !(abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong))) {
          if (abap.compare.initial((await this.is_sy_langu({element_description: element_description}))) === false) {
            await this.handle_language_field();
          } else {
            await this.handle_string({element_description: element_description});
          }
        }
      }
      if (abap.compare.initial(this.abap_doc.get().default_) === false) {
        await this.handle_default({element_description: element_description, json_type: json_type, enum_properties: enum_properties});
      }
    }
    if (abap.compare.gt(this.ignore_til_indent_level, this.indent_level) || abap.compare.initial(this.ignore_til_indent_level)) {
      temp5.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp5);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique100 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique100.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 356};
        throw unique100;
      }
      last_line.set(temp3);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
        assigning: fs_temp3_});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique101 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique101.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 365};
        throw unique101;
      }
      fs_temp3_.set(abap.builtin.substring({val: last_line, off: abap.IntegerFactory.get(0), len: abap.operators.minus(abap.builtin.strlen({val: last_line}),abap.IntegerFactory.get(1))}));
    }
    if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
      await this.write_closing_tag({line: new abap.types.String().set(`}`)});
    }
  }
  async write_content_encoding(INPUT) {
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    if (abap.compare.initial(this.abap_doc.get().content_encoding)) {
      return;
    }
    if (abap.compare.ne(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string)) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg132, component_name: this.fullname_of_type});
      return;
    }
    if (abap.compare.initial((await this.is_content_encoding_valid({content_encoding: this.abap_doc.get().content_encoding}))) === true) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg133, component_name: this.fullname_of_type});
      return;
    }
    await this.write_tag({line: new abap.types.String().set(`"contentEncoding": "${abap.templateFormatting(this.abap_doc.get().content_encoding)}",`)});
  }
  async write_content_media_type(INPUT) {
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    if (abap.compare.initial(this.abap_doc.get().content_media_type)) {
      return;
    }
    if (abap.compare.ne(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string)) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg132, component_name: this.fullname_of_type});
      return;
    }
    await this.write_tag({line: new abap.types.String().set(`"contentMediaType": "${abap.templateFormatting(this.abap_doc.get().content_media_type)}",`)});
  }
  async is_content_encoding_valid(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let content_encoding = INPUT?.content_encoding;
    if (content_encoding?.getQualifiedName === undefined || content_encoding.getQualifiedName() !== "STRING") { content_encoding = undefined; }
    if (content_encoding === undefined) { content_encoding = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.content_encoding); }
    if (abap.compare.eq(content_encoding, new abap.types.Character(4).set('7bit')) || abap.compare.eq(content_encoding, new abap.types.Character(4).set('8bit')) || abap.compare.eq(content_encoding, new abap.types.Character(6).set('binary')) || abap.compare.eq(content_encoding, new abap.types.Character(16).set('quoted-printable')) || abap.compare.eq(content_encoding, new abap.types.Character(6).set('base16')) || abap.compare.eq(content_encoding, new abap.types.Character(6).set('base32')) || abap.compare.eq(content_encoding, new abap.types.Character(6).set('base64'))) {
      result.set(abap.builtin.abap_true);
    }
    return result;
  }
  async write_title_and_description(INPUT) {
    let type_description = INPUT?.type_description;
    if (type_description?.getQualifiedName === undefined || type_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { type_description = undefined; }
    if (type_description === undefined) { type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.type_description); }
    let check_not_needed = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    if (INPUT && INPUT.check_not_needed) {check_not_needed.set(INPUT.check_not_needed);}
    if (INPUT === undefined || INPUT.check_not_needed === undefined) {check_not_needed = abap.builtin.abap_false;}
    let title = new abap.types.String({qualifiedName: "STRING"});
    let description = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.eq(check_not_needed, abap.builtin.abap_false)) {
      await this.check_title_and_description({abap_doc_to_check: this.abap_doc, fullname_of_checked_type: this.fullname_of_type});
    }
    title.set(abap.builtin.escape({val: this.abap_doc.get().title, format: abap.Classes['CL_ABAP_FORMAT'].e_json_string}));
    description.set((abap.builtin.escape({val: (await this.get_description({type_description: type_description})), format: abap.Classes['CL_ABAP_FORMAT'].e_json_string})));
    if (abap.compare.initial(title) === false) {
      await this.write_tag({line: new abap.types.String().set(`"title": "${abap.templateFormatting(title)}",`)});
    }
    if (abap.compare.initial(description) === false) {
      await this.write_tag({line: new abap.types.String().set(`"description": "${abap.templateFormatting(description)}",`)});
    }
  }
  async handle_enums(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let enum_properties = INPUT?.enum_properties;
    if (enum_properties?.getQualifiedName === undefined || enum_properties.getQualifiedName() !== "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_PROPERTIES") { enum_properties = undefined; }
    if (enum_properties === undefined) { enum_properties = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {}).set(INPUT.enum_properties); }
    let enum_values = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_enum_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}));
    let enum_descr = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let lt_copy = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    await this.write_tag({line: new abap.types.String().set(`"enum": [`)});
    for await (const unique102 of abap.statements.loop(enum_properties.get().values)) {
      fs_enum_value_.assign(unique102);
      if (abap.compare.initial(fs_enum_value_.get().overwritten_value)) {
        abap.statements.insertInternal({data: fs_enum_value_.get().value, table: enum_values});
      } else {
        abap.statements.insertInternal({data: fs_enum_value_.get().overwritten_value, table: enum_values});
      }
    }
    await this.write_enum_properties({property_table: enum_values});
    if (abap.compare.initial(enum_properties.get().titles) === false) {
      await this.write_tag({line: new abap.types.String().set(`"enumTitles": [`)});
      await this.write_enum_properties({property_table: enum_properties.get().titles});
    }
    enum_descr.set((await this.get_enum_descriptions({element_description: element_description, enum_properties: enum_properties})));
    lt_copy.set(enum_descr);
    await abap.statements.deleteInternal(lt_copy,{where: (I) => {return abap.compare.eq(I.table_line, new abap.types.Character(1).set(''));}});
    if (abap.compare.gt(abap.builtin.lines({val: lt_copy}), abap.IntegerFactory.get(0))) {
      await this.write_tag({line: new abap.types.String().set(`"enumDescriptions": [`)});
      await this.write_enum_properties({property_table: enum_descr});
    }
  }
  async write_enum_properties(INPUT) {
    let property_table = INPUT?.property_table;
    if (property_table?.getQualifiedName === undefined || property_table.getQualifiedName() !== "STRING_TABLE") { property_table = undefined; }
    if (property_table === undefined) { property_table = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.property_table); }
    let fs_value_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    this.indent_level.set(abap.operators.add(this.indent_level,abap.IntegerFactory.get(1)));
    for await (const unique103 of abap.statements.loop(property_table)) {
      fs_value_.assign(unique103);
      if (abap.compare.lt(abap.builtin.sy.get().tabix, abap.builtin.lines({val: property_table}))) {
        await this.write_tag({line: new abap.types.String().set(`"${abap.templateFormatting(fs_value_)}",`)});
      } else {
        await this.write_tag({line: new abap.types.String().set(`"${abap.templateFormatting(fs_value_)}"`)});
      }
    }
    this.indent_level.set(abap.operators.minus(this.indent_level,abap.IntegerFactory.get(1)));
    await this.write_tag({line: new abap.types.String().set(`],`)});
  }
  async handle_string(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let max_length = new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"});
    if (abap.compare.initial(this.abap_doc.get().max_length) === false) {
      max_length.set(this.abap_doc.get().max_length);
    } else {
      max_length.set((await this.get_max_length({element_description: element_description})));
    }
    if (abap.compare.initial(this.abap_doc.get().min_length) === false) {
      await this.write_tag({line: new abap.types.String().set(`"minLength": ${abap.templateFormatting(this.abap_doc.get().min_length)},`)});
    }
    if (abap.compare.initial(max_length) === false) {
      await this.write_tag({line: new abap.types.String().set(`"maxLength": ${abap.templateFormatting(max_length)},`)});
      if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num)) {
        await this.write_tag({line: new abap.types.String().set(`"pattern": "^[0-9]+$",`)});
      }
    }
  }
  async handle_extrema(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let max_value = new abap.types.String({qualifiedName: "STRING"});
    let min_value = new abap.types.String({qualifiedName: "STRING"});
    let multiple_of = new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"});
    let exclusive_minimum = new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"});
    let exclusive_maximum = new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"});
    await this.get_extrema({element_description: element_description, max: max_value, min: min_value});
    multiple_of.set(this.abap_doc.get().multiple_of);
    if (abap.compare.initial(multiple_of) === false && abap.compare.eq((await this.is_element_descr_kind_int({element_description: element_description})), abap.builtin.abap_false)) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg129, component_name: this.fullname_of_type});
    }
    exclusive_minimum.set(this.abap_doc.get().exclusive_minimum);
    exclusive_maximum.set(this.abap_doc.get().exclusive_maximum);
    if (abap.compare.initial(exclusive_minimum) === false) {
      abap.statements.clear(min_value);
    } else if (abap.compare.initial(this.abap_doc.get().minimum) === false) {
      min_value.set(this.abap_doc.get().minimum);
    }
    if (abap.compare.initial(exclusive_maximum) === false) {
      abap.statements.clear(max_value);
    } else if (abap.compare.initial(this.abap_doc.get().maximum) === false) {
      max_value.set(this.abap_doc.get().maximum);
    }
    if (abap.compare.initial(min_value) === false) {
      await this.write_tag({line: new abap.types.String().set(`"minimum": ${abap.templateFormatting(min_value)},`)});
    }
    if (abap.compare.initial(exclusive_minimum) === false) {
      await this.write_tag({line: new abap.types.String().set(`"exclusiveMinimum": ${abap.templateFormatting(exclusive_minimum)},`)});
    }
    if (abap.compare.initial(max_value) === false) {
      await this.write_tag({line: new abap.types.String().set(`"maximum": ${abap.templateFormatting(max_value)},`)});
    }
    if (abap.compare.initial(exclusive_maximum) === false) {
      await this.write_tag({line: new abap.types.String().set(`"exclusiveMaximum": ${abap.templateFormatting(exclusive_maximum)},`)});
    }
    if (abap.compare.initial(multiple_of) === false && abap.compare.eq((await this.is_element_descr_kind_int({element_description: element_description})), abap.builtin.abap_true)) {
      await this.write_tag({line: new abap.types.String().set(`"multipleOf": ${abap.templateFormatting(multiple_of)},`)});
    }
  }
  async is_element_descr_kind_int(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)));
    result.set(temp1);
    return result;
  }
  async handle_default(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    let enum_properties = INPUT?.enum_properties;
    if (enum_properties?.getQualifiedName === undefined || enum_properties.getQualifiedName() !== "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_PROPERTIES") { enum_properties = undefined; }
    if (enum_properties === undefined) { enum_properties = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {}).set(INPUT.enum_properties); }
    let default_ = new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}));
    default_.set(this.abap_doc.get().default_);
    if (abap.compare.cs(this.abap_doc.get().default_, new abap.types.Character(5).set('@link'))) {
      default_.set((await this.get_default_from_link({link: this.abap_doc.get().default_, fullname_of_type: this.fullname_of_type, element_type: element_description.get().type_kind})));
      if (abap.compare.initial(default_)) {
        return;
      }
      abap.statements.readTable(enum_properties.get().values,{assigning: fs_entry_,
        withKey: (i) => {return abap.compare.eq(i.value, default_);},
        withKeyValue: [{key: (i) => {return i.value}, value: default_}],
        usesTableLine: false,
        withKeySimple: {"value": default_}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0)) && abap.compare.initial(fs_entry_.get().overwritten_value) === false) {
        default_.set(fs_entry_.get().overwritten_value);
      }
      default_.set(new abap.types.String().set(`"${abap.templateFormatting(default_)}"`));
    } else if (abap.compare.initial((await this.is_default_value_valid({element_description: element_description, default_value: default_, fullname_of_type: this.fullname_of_type}))) === false) {
      if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric) || abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
        abap.statements.replace({target: default_, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`"`)});
      } else if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
        default_.set(abap.operators.concat(new abap.types.String().set(`"`),abap.operators.concat((await this.date_time_from_abap_to_json({date_time_abap: default_, element_description: element_description})),new abap.types.String().set(`"`))));
      }
      if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
        abap.statements.replace({target: default_, all: false, with: new abap.types.String().set(`e`), of: new abap.types.String().set(`E`)});
      }
      if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
        if (abap.compare.eq(default_, new abap.types.Character(1).set('X')) || abap.compare.eq(default_, new abap.types.Character(9).set('abap_true'))) {
          default_.set(new abap.types.Character(4).set('true'));
        } else {
          default_.set(new abap.types.Character(5).set('false'));
        }
      }
    } else {
      return;
    }
    await this.write_tag({line: new abap.types.String().set(`"default": ${abap.templateFormatting(default_)},`)});
  }
  async open_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp5 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp6 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let formatted_name = new abap.types.String({qualifiedName: "STRING"});
    let callback_class = new abap.types.String({qualifiedName: "STRING"});
    let temp7 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp8 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp9 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let fs_table1_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"));
    await this.clear_type_specifics();
    if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial)) {
      abap.statements.clear(temp5);
      temp5.get().name.set(structure_name);
      temp5.get().absolute_name.set(structure_description.get().absolute_name);
      abap.statements.insertInternal({data: temp5, index: abap.IntegerFactory.get(1), table: this.me.get().stack_of_structure});
      await this.add_required_table_to_stack();
      await this.open_json_schema_for_structure({structure_name: structure_name, structure_description: structure_description});
      abap.statements.clear(temp6);
      temp6.get().name.set(structure_name);
      temp6.get().number_brackets.set(abap.IntegerFactory.get(2));
      abap.statements.insertInternal({data: temp6, index: abap.IntegerFactory.get(1), table: this.me.get().structure_buffer});
      return;
    }
    await this.append_comma_to_prev_line();
    formatted_name.set((await this.format_name({name: structure_name})));
    await this.set_abapdoc_fullname_struc_tab({type_description: structure_description, type_name: structure_name});
    callback_class.set(abap.builtin.to_upper({val: this.abap_doc.get().callback_class}));
    if (abap.compare.initial(callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_subschema({callback_class: callback_class});
    }
    abap.statements.clear(temp7);
    temp7.get().name.set(structure_name);
    temp7.get().absolute_name.set(structure_description.get().absolute_name);
    abap.statements.insertInternal({data: temp7, index: abap.IntegerFactory.get(1), table: this.me.get().stack_of_structure});
    if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
      await this.write_open_tag({line: new abap.types.String().set(`"${abap.templateFormatting(formatted_name)}": \{`)});
      abap.statements.clear(temp8);
      temp8.get().name.set(structure_name);
      temp8.get().number_brackets.set(abap.IntegerFactory.get(2));
      abap.statements.insertInternal({data: temp8, index: abap.IntegerFactory.get(1), table: this.me.get().structure_buffer});
    } else {
      abap.statements.clear(temp9);
      temp9.get().name.set(structure_name);
      temp9.get().number_brackets.set(abap.IntegerFactory.get(1));
      abap.statements.insertInternal({data: temp9, index: abap.IntegerFactory.get(1), table: this.me.get().structure_buffer});
    }
    await this.write_title_and_description({type_description: structure_description});
    if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true)) {
      abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
        assigning: fs_table1_});
      abap.statements.append({source: formatted_name, target: fs_table1_});
    }
    await this.write_tag({line: new abap.types.String().set(`"type": "object",`)});
    await this.write_open_tag({line: new abap.types.String().set(`"properties": {`)});
    await this.add_required_table_to_stack();
  }
  async close_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp10 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp11 = new abap.types.Integer({qualifiedName: "I"});
    let temp12 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp13 = new abap.types.Integer({qualifiedName: "I"});
    let temp14 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp15 = new abap.types.Integer({qualifiedName: "I"});
    await this.delete_first_of_struc_stack();
    temp11.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.me.get().structure_buffer,{index: abap.IntegerFactory.get(1),
      into: temp10});
    abap.builtin.sy.get().tabix.set(temp11);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique104 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique104.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 696};
      throw unique104;
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique105 = temp10.get().number_brackets.get();
    for (let unique106 = 0; unique106 < unique105; unique106++) {
      abap.builtin.sy.get().index.set(unique106 + 1);
      temp13.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().structure_buffer,{index: abap.IntegerFactory.get(1),
        into: temp12});
      abap.builtin.sy.get().tabix.set(temp13);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique107 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique107.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 705};
        throw unique107;
      }
      if (abap.compare.eq(temp12.get().number_brackets, abap.IntegerFactory.get(2)) && abap.compare.eq(abap.builtin.sy.get().index, abap.IntegerFactory.get(2))) {
        await this.write_req_and_add_props();
      }
      await this.write_closing_tag({line: new abap.types.String().set(`}`)});
      temp15.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().structure_buffer,{index: abap.IntegerFactory.get(1),
        into: temp14});
      abap.builtin.sy.get().tabix.set(temp15);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique108 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique108.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 717};
        throw unique108;
      }
      if (abap.compare.eq(temp14.get().number_brackets, abap.IntegerFactory.get(1))) {
        await this.write_req_and_add_props();
      }
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    await abap.statements.deleteInternal(this.me.get().structure_buffer,{index: abap.IntegerFactory.get(1)});
    await this.reset_indent_level_tag();
  }
  async open_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
    let temp16 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    let temp17 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let formatted_name = new abap.types.String({qualifiedName: "STRING"});
    let fs_table1_ = new abap.types.FieldSymbol(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"));
    let callback_class = new abap.types.String({qualifiedName: "STRING"});
    let temp18 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp19 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp20 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    await this.clear_type_specifics();
    if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial)) {
      await abap.statements.cast(temp16, table_description);
      await this.open_json_schema_for_table({table_name: table_name, table_description: temp16});
      abap.statements.clear(temp17);
      temp17.get().name.set(table_name);
      temp17.get().number_brackets.set(abap.IntegerFactory.get(2));
      abap.statements.insertInternal({data: temp17, table: this.me.get().table_buffer});
      return;
    }
    await this.append_comma_to_prev_line();
    formatted_name.set((await this.format_name({name: table_name})));
    await this.set_abapdoc_fullname_struc_tab({type_description: table_description, type_name: table_name});
    if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true) && abap.compare.ge(abap.builtin.lines({val: this.stack_of_required_tabs}), abap.IntegerFactory.get(1))) {
      abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
        assigning: fs_table1_});
      abap.statements.append({source: formatted_name, target: fs_table1_});
    }
    callback_class.set(abap.builtin.to_upper({val: this.abap_doc.get().callback_class}));
    if (abap.compare.initial(callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: callback_class, component_name: this.fullname_of_type}))) === false) {
      await this.write_subschema({callback_class: callback_class});
    }
    if (abap.compare.ne((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
      await this.write_open_tag({line: new abap.types.String().set(`"${abap.templateFormatting(formatted_name)}": \{`)});
      abap.statements.clear(temp18);
      temp18.get().name.set(table_name);
      temp18.get().number_brackets.set(abap.IntegerFactory.get(2));
      abap.statements.insertInternal({data: temp18, index: abap.IntegerFactory.get(1), table: this.me.get().table_buffer});
    } else {
      abap.statements.clear(temp19);
      temp19.get().name.set(table_name);
      temp19.get().number_brackets.set(abap.IntegerFactory.get(1));
      abap.statements.insertInternal({data: temp19, index: abap.IntegerFactory.get(1), table: this.me.get().table_buffer});
    }
    await this.write_title_and_description({type_description: table_description});
    await this.write_tag({line: new abap.types.String().set(`"type": "array",`)});
    await abap.statements.cast(temp20, table_description);
    if (abap.compare.eq(temp20.get().has_unique_key, abap.builtin.abap_true)) {
      await this.write_tag({line: new abap.types.String().set(`"uniqueItems": true,`)});
    }
    await this.write_open_tag({line: new abap.types.String().set(`"items": {`)});
  }
  async close_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
    let temp21 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
    let temp22 = new abap.types.Integer({qualifiedName: "I"});
    let temp23 = new abap.types.Integer({qualifiedName: "I"});
    temp22.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.me.get().table_buffer,{into: temp21,
      withKey: (i) => {return abap.compare.eq(i.name, table_name);},
      withKeyValue: [{key: (i) => {return i.name}, value: table_name}],
      usesTableLine: false,
      withKeySimple: {"name": table_name}});
    abap.builtin.sy.get().tabix.set(temp22);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique109 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique109.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 802};
      throw unique109;
    }
    const indexBackup1 = abap.builtin.sy.get().index.get();
    const unique110 = temp21.get().number_brackets.get();
    for (let unique111 = 0; unique111 < unique110; unique111++) {
      abap.builtin.sy.get().index.set(unique111 + 1);
      await this.write_closing_tag({line: new abap.types.String().set(`}`)});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    abap.statements.readTable(this.me.get().table_buffer,{withKey: (i) => {return abap.compare.eq(i.name, table_name);},
      withKeyValue: [{key: (i) => {return i.name}, value: table_name}],
      usesTableLine: false,
      withKeySimple: {"name": table_name}});
    temp23.set(abap.builtin.sy.get().tabix);
    await abap.statements.deleteInternal(this.me.get().table_buffer,{index: temp23});
    await this.reset_indent_level_tag();
  }
  async append_comma_to_prev_line() {
    if ((abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().write_element) || abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_structure) || abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_table)) && (abap.compare.gt(this.ignore_til_indent_level, this.indent_level) || abap.compare.initial(this.ignore_til_indent_level))) {
      await this.append_to_previous_line({string: new abap.types.String().set(`,`)});
    }
  }
  async set_abapdoc_fullname_struc_tab(INPUT) {
    let type_description = INPUT?.type_description;
    if (type_description?.getQualifiedName === undefined || type_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { type_description = undefined; }
    if (type_description === undefined) { type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.type_description); }
    let type_name = INPUT?.type_name;
    if (type_name?.getQualifiedName === undefined || type_name.getQualifiedName() !== "STRING") { type_name = undefined; }
    if (type_name === undefined) { type_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.type_name); }
    let absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    let splitted_absolute_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let temp7 = new abap.types.Integer({qualifiedName: "I"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    let temp9 = new abap.types.Integer({qualifiedName: "I"});
    let already_found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let abap_doc_second = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    if (abap.compare.eq((await this.last_operation()), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table)) {
      absolute_name.set(type_description.get().absolute_name);
      splitted_absolute_name.set((await this.get_splitted_absolute_name({absolute_name: absolute_name})));
      temp7.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(1),
        into: temp6});
      abap.builtin.sy.get().tabix.set(temp7);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique112 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique112.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 846};
        throw unique112;
      }
      source_type.set(temp6);
      temp9.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(2),
        into: temp8});
      abap.builtin.sy.get().tabix.set(temp9);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique113 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique113.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 856};
        throw unique113;
      }
      source.set(temp8);
      this.fullname_of_type.set(type_name);
      already_found.set(abap.builtin.abap_true);
    } else {
      await this.get_all_path_information({name: type_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
    }
    if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
      this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: this.fullname_of_type})));
    }
    if (abap.compare.eq(already_found, abap.builtin.abap_false)) {
      abap_doc_second.set((await this.get_abap_doc_for_absolute_name({absolute_name: type_description.get().absolute_name})));
      await this.compare_abap_doc({abap_doc_additional: abap_doc_second, abap_doc_base: this.abap_doc});
    }
    await this.check_redundant_annotations();
  }
  async set_abapdoc_fullname_element(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let splitted_prev_name = INPUT?.splitted_prev_name;
    if (splitted_prev_name?.getQualifiedName === undefined || splitted_prev_name.getQualifiedName() !== "STRING_TABLE") { splitted_prev_name = undefined; }
    if (splitted_prev_name === undefined) { splitted_prev_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.splitted_prev_name); }
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp24 = new abap.types.String({qualifiedName: "STRING"});
    let temp25 = new abap.types.Integer({qualifiedName: "I"});
    let temp26 = new abap.types.String({qualifiedName: "STRING"});
    let temp27 = new abap.types.Integer({qualifiedName: "I"});
    let already_searched = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let abap_doc_second = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    if (abap.compare.gt(abap.builtin.lines({val: this.stack_of_structure}), abap.IntegerFactory.get(0))) {
      await this.get_all_path_information({name: element_name, source_type: source_type, source: source, fullname_of_type: this.fullname_of_type});
    } else if (abap.compare.eq(abap.builtin.lines({val: this.stack_of_structure}), abap.IntegerFactory.get(0))) {
      this.fullname_of_type.set(element_name);
      temp25.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(1),
        into: temp24});
      abap.builtin.sy.get().tabix.set(temp25);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique114 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique114.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 918};
        throw unique114;
      }
      source_type.set(temp24);
      temp27.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(2),
        into: temp26});
      abap.builtin.sy.get().tabix.set(temp27);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique115 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique115.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 927};
        throw unique115;
      }
      source.set(temp26);
      already_searched.set(abap.builtin.abap_true);
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
  async get_json_schema_type(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let json_type = INPUT?.json_type;
    if (json_type?.getQualifiedName === undefined || json_type.getQualifiedName() !== "STRING") { json_type = undefined; }
    if (json_type === undefined) { json_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.json_type); }
    if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
      result.set(new abap.types.Character(6).set('number'));
      if (abap.compare.eq((await this.type_is_integer({element_description: element_description})), abap.builtin.abap_true)) {
        result.set(new abap.types.Character(7).set('integer'));
      }
    } else if (abap.compare.eq(json_type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
      result.set(new abap.types.Character(6).set('string'));
    } else {
      result.set(abap.builtin.to_lower({val: json_type}));
    }
    return result;
  }
  async open_json_schema_for_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    let temp10 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp11 = new abap.types.Integer({qualifiedName: "I"});
    let splitted_absolute_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.String({qualifiedName: "STRING"});
    let temp13 = new abap.types.Integer({qualifiedName: "I"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp14 = new abap.types.String({qualifiedName: "STRING"});
    let temp15 = new abap.types.Integer({qualifiedName: "I"});
    let callback_class = new abap.types.String({qualifiedName: "STRING"});
    temp11.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.stack_of_structure,{index: abap.IntegerFactory.get(1),
      into: temp10});
    abap.builtin.sy.get().tabix.set(temp11);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique116 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique116.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 981};
      throw unique116;
    }
    absolute_name.set(temp10.get().absolute_name);
    splitted_absolute_name.set((await this.get_splitted_absolute_name({absolute_name: absolute_name})));
    temp13.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(1),
      into: temp12});
    abap.builtin.sy.get().tabix.set(temp13);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique117 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique117.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 993};
      throw unique117;
    }
    source_type.set(temp12);
    if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
      temp15.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(2),
        into: temp14});
      abap.builtin.sy.get().tabix.set(temp15);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique118 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique118.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1004};
        throw unique118;
      }
      source.set(temp14);
      this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: structure_name})));
    }
    this.fullname_of_type.set(structure_name);
    await this.check_redundant_annotations();
    await this.write_open_tag({line: new abap.types.Character(1).set('{')});
    await this.write_tag({line: new abap.types.String().set(`"$comment": "This file is autogenerated, do not edit manually, see ${abap.templateFormatting(zcl_aff_writer_json_schema.c_link_to_repository)} for more information.",`)});
    await this.write_tag({line: new abap.types.String().set(`"$schema": "${abap.templateFormatting(zcl_aff_writer_json_schema.c_schema_specification)}",`)});
    await this.write_tag({line: new abap.types.String().set(`"$id": "${abap.templateFormatting(this.me.get().schema_id)}",`)});
    callback_class.set(abap.builtin.to_upper({val: this.abap_doc.get().callback_class}));
    if (abap.compare.initial(callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: callback_class, component_name: structure_name}))) === false) {
      await this.write_subschema({callback_class: callback_class});
    }
    await this.write_title_and_description({type_description: structure_description});
    await this.write_tag({line: new abap.types.Character(17).set('"type": "object",')});
    await this.write_open_tag({line: new abap.types.Character(15).set('"properties": {')});
  }
  async open_json_schema_for_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TABLEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"}).set(INPUT.table_description); }
    let absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    let splitted_absolute_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let source_type = new abap.types.String({qualifiedName: "STRING"});
    let temp16 = new abap.types.String({qualifiedName: "STRING"});
    let temp17 = new abap.types.Integer({qualifiedName: "I"});
    let source = new abap.types.String({qualifiedName: "STRING"});
    let temp18 = new abap.types.String({qualifiedName: "STRING"});
    let temp19 = new abap.types.Integer({qualifiedName: "I"});
    let callback_class = new abap.types.String({qualifiedName: "STRING"});
    absolute_name.set(table_description.get().absolute_name);
    splitted_absolute_name.set((await this.get_splitted_absolute_name({absolute_name: absolute_name})));
    temp17.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(1),
      into: temp16});
    abap.builtin.sy.get().tabix.set(temp17);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique119 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique119.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1048};
      throw unique119;
    }
    source_type.set(temp16);
    if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
      temp19.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(splitted_absolute_name,{index: abap.IntegerFactory.get(2),
        into: temp18});
      abap.builtin.sy.get().tabix.set(temp19);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique120 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique120.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1059};
        throw unique120;
      }
      source.set(temp18);
      this.abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: table_name})));
    }
    this.fullname_of_type.set(table_name);
    await this.check_redundant_annotations();
    await this.write_open_tag({line: new abap.types.Character(1).set('{')});
    await this.write_tag({line: new abap.types.String().set(`"$comment": "This file is autogenerated, do not edit manually, see ${abap.templateFormatting(zcl_aff_writer_json_schema.c_link_to_repository)} for more information.",`)});
    await this.write_tag({line: new abap.types.String().set(`"$schema": "${abap.templateFormatting(zcl_aff_writer_json_schema.c_schema_specification)}",`)});
    await this.write_tag({line: new abap.types.String().set(`"$id": "${abap.templateFormatting(this.me.get().schema_id)}",`)});
    callback_class.set(abap.builtin.to_upper({val: this.abap_doc.get().callback_class}));
    if (abap.compare.initial(callback_class) === false && abap.compare.initial((await this.is_callback_class_valid({class_name: callback_class, component_name: table_name}))) === false) {
      await this.write_subschema({callback_class: callback_class});
    }
    await this.write_title_and_description({type_description: table_description});
    await this.write_tag({line: new abap.types.Character(16).set('"type": "array",')});
    if (abap.compare.eq(table_description.get().has_unique_key, abap.builtin.abap_true)) {
      await this.write_tag({line: new abap.types.Character(20).set('"uniqueItems": true,')});
    }
    await this.write_open_tag({line: new abap.types.Character(10).set('"items": {')});
  }
  async write_subschema(INPUT) {
    let callback_class = INPUT?.callback_class;
    if (callback_class?.getQualifiedName === undefined || callback_class.getQualifiedName() !== "STRING") { callback_class = undefined; }
    if (callback_class === undefined) { callback_class = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.callback_class); }
    let subschema = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    try {
      if (abap.Classes[callback_class.get().trimEnd()] === undefined) { if (abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_CLASS not found"; } else {throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_CLASS'.trimEnd()](); } }
      subschema.set(await abap.Classes[callback_class.get().trimEnd()].get_subschema());
      for await (const unique121 of abap.statements.loop(subschema)) {
        fs_line_.assign(unique121);
        await this.write_tag({line: fs_line_});
      }
      this.ignore_til_indent_level.set(this.indent_level);
    } catch (e) {
      if ((abap.Classes['CX_SY_DYN_CALL_ERROR'] && e instanceof abap.Classes['CX_SY_DYN_CALL_ERROR'])) {
      } else {
        throw e;
      }
    }
  }
  async open_json_schema_for_element() {
    await this.write_open_tag({line: new abap.types.Character(1).set('{')});
    await this.write_tag({line: new abap.types.String().set(`"$comment": "This file is autogenerated, do not edit manually, see ${abap.templateFormatting(zcl_aff_writer_json_schema.c_link_to_repository)} for more information.",`)});
    await this.write_tag({line: new abap.types.String().set(`"$schema": "${abap.templateFormatting(zcl_aff_writer_json_schema.c_schema_specification)}",`)});
    await this.write_tag({line: new abap.types.String().set(`"$id": "${abap.templateFormatting(this.me.get().schema_id)}",`)});
  }
  async get_description(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.type_description) {type_description.set(INPUT.type_description);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp28 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let ddic_field = new abap.types.Structure({"tabname": new abap.types.Character(30, {}), "fieldname": new abap.types.Character(30, {}), "langu": new abap.types.Character(1, {}), "position": new abap.types.Numc({length: 4}), "offset": new abap.types.Numc({length: 6}), "domname": new abap.types.Character(30, {}), "rollname": new abap.types.Character(30, {}), "checktable": new abap.types.Character(1, {}), "leng": new abap.types.Numc({length: 6}), "intlen": new abap.types.Numc({length: 6}), "outputlen": new abap.types.Numc({length: 6}), "decimals": new abap.types.Numc({length: 6}), "datatype": new abap.types.Character(1, {}), "inttype": new abap.types.Character(1, {}), "reftable": new abap.types.Character(1, {}), "reffield": new abap.types.Character(1, {}), "precfield": new abap.types.Character(1, {}), "authorid": new abap.types.Character(1, {}), "memoryid": new abap.types.Character(1, {}), "logflag": new abap.types.Character(1, {}), "mask": new abap.types.Character(20, {}), "masklen": new abap.types.Character(1, {}), "convexit": new abap.types.Character(1, {}), "headlen": new abap.types.Character(1, {}), "scrlen1": new abap.types.Character(1, {}), "scrlen2": new abap.types.Character(1, {}), "scrlen3": new abap.types.Character(1, {}), "fieldtext": new abap.types.Character(1, {}), "reptext": new abap.types.Character(1, {}), "scrtext_s": new abap.types.Character(1, {}), "scrtext_m": new abap.types.Character(1, {}), "scrtext_l": new abap.types.Character(1, {}), "keyflag": new abap.types.Character(1, {}), "lowercase": new abap.types.Character(1, {}), "mac": new abap.types.Character(1, {}), "genkey": new abap.types.Character(1, {}), "noforkey": new abap.types.Character(1, {}), "valexi": new abap.types.Character(1, {}), "noauthch": new abap.types.Character(1, {}), "sign": new abap.types.Character(1, {}), "dynpfld": new abap.types.Character(1, {}), "f4availabl": new abap.types.Character(1, {}), "comptype": new abap.types.Character(1, {}), "outputstyle": new abap.types.Character(1, {}), "lfieldname": new abap.types.Character(132, {})}, "DFIES", "DFIES", {}, {});
    if (abap.compare.initial(this.abap_doc.get().description) === false) {
      result.set(this.abap_doc.get().description);
    } else if (INPUT && INPUT.type_description) {
      try {
        await abap.statements.cast(temp28, type_description);
        element_description.set(temp28);
      } catch (e) {
        if ((abap.Classes['CX_SY_MOVE_CAST_ERROR'] && e instanceof abap.Classes['CX_SY_MOVE_CAST_ERROR'])) {
          return result;
        } else {
          throw e;
        }
      }
      try {
        ddic_field.set(await element_description.get().get_ddic_field({p_langu: new abap.types.Character(1).set('E')}));
        abap.builtin.sy.get().subrc.set(0);
      } catch (e) {
        if (e.classic) {
            switch (e.classic.toUpperCase()) {
            default: abap.builtin.sy.get().subrc.set(1); break;
              }
          } else {
              throw e;
          }
        }
        if (abap.compare.initial(ddic_field) === false && abap.compare.initial(ddic_field.get().fieldtext) === false) {
          result.set(ddic_field.get().fieldtext);
        }
      }
      return result;
    }
    async get_enum_properties(INPUT) {
      let result = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});
      let element_description = INPUT?.element_description;
      if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
      if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
      let ddic_fixed_values = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddtext"})}, "cl_abap_elemdescr=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_abap_elemdescr=>fixvalues");
      let fs_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddtext"})}, "cl_abap_elemdescr=>fixvalue", undefined, {}, {}));
      let text = new abap.types.String({qualifiedName: "STRING"});
      let temp29 = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {});
      if (abap.compare.initial(this.abap_doc.get().enumvalues_link) === false) {
        result.set((await this.get_properties_from_structure({enum_type: element_description.get().type_kind})));
      } else {
        if (abap.compare.eq((await this.get_json_type_from_description({element_description: element_description})), abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
          return result;
        }
        try {
          ddic_fixed_values.set(await element_description.get().get_ddic_fixed_values());
          abap.builtin.sy.get().subrc.set(0);
        } catch (e) {
          if (e.classic) {
              switch (e.classic.toUpperCase()) {
              default: abap.builtin.sy.get().subrc.set(1); break;
                }
            } else {
                throw e;
            }
          }
          if (abap.compare.initial(ddic_fixed_values)) {
            return result;
          }
          for await (const unique122 of abap.statements.loop(ddic_fixed_values)) {
            fs_value_.assign(unique122);
            text.set(fs_value_.get().ddtext);
            abap.statements.replace({target: text, all: true, with: new abap.types.Character(1).set('_'), pcre: new abap.types.Character(2).set('\\s')});
            abap.statements.clear(temp29);
            temp29.get().value.set((await this.format_to_camel_case({name: text})));
            abap.statements.insertInternal({data: temp29, table: result.get().values});
          }
        }
        return result;
      }
      async get_enum_descriptions(INPUT) {
        let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
        let element_description = INPUT?.element_description;
        if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
        if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
        let enum_properties = INPUT?.enum_properties;
        if (enum_properties?.getQualifiedName === undefined || enum_properties.getQualifiedName() !== "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_PROPERTIES") { enum_properties = undefined; }
        if (enum_properties === undefined) { enum_properties = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {}).set(INPUT.enum_properties); }
        let ddic_fixed_values = abap.types.TableFactory.construct(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddtext"})}, "cl_abap_elemdescr=>fixvalue", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_abap_elemdescr=>fixvalues");
        let fs_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"low": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-low"}), "high": new abap.types.Character(10, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-high"}), "option": new abap.types.Character(2, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-option"}), "ddlanguage": new abap.types.Character(1, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddlanguage"}), "ddtext": new abap.types.Character(60, {"qualifiedName":"cl_abap_elemdescr=>fixvalue-ddtext"})}, "cl_abap_elemdescr=>fixvalue", undefined, {}, {}));
        if (abap.compare.initial(this.abap_doc.get().enumvalues_link) === false) {
          result.set(enum_properties.get().descriptions);
        } else {
          try {
            ddic_fixed_values.set(await element_description.get().get_ddic_fixed_values());
            abap.builtin.sy.get().subrc.set(0);
          } catch (e) {
            if (e.classic) {
                switch (e.classic.toUpperCase()) {
                default: abap.builtin.sy.get().subrc.set(1); break;
                  }
              } else {
                  throw e;
              }
            }
            if (abap.compare.initial(ddic_fixed_values) === false) {
              for await (const unique123 of abap.statements.loop(ddic_fixed_values)) {
                fs_value_.assign(unique123);
                abap.statements.append({source: fs_value_.get().ddtext, target: result});
              }
            }
          }
          return result;
        }
        async type_is_integer(INPUT) {
          let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
          let element_description = INPUT?.element_description;
          if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
          if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
          result.set(abap.builtin.abap_false);
          if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8)) {
            result.set(abap.builtin.abap_true);
          }
          return result;
        }
        async get_properties_from_structure(INPUT) {
          let result = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});
          let enum_type = INPUT?.enum_type;
          if (enum_type?.getQualifiedName === undefined || enum_type.getQualifiedName() !== "ABAP_TYPEKIND") { enum_type = undefined; }
          if (enum_type === undefined) { enum_type = new abap.types.Character(1, {"qualifiedName":"abap_typekind"}).set(INPUT.enum_type); }
          let structure_of_values = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
          let name_of_source = new abap.types.String({qualifiedName: "STRING"});
          let name_of_constant = new abap.types.String({qualifiedName: "STRING"});
          let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "name": new abap.types.Character(30, {"qualifiedName":"abap_compname"})}, "abap_compdescr", undefined, {}, {}));
          let temp30 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
          let temp20 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
          let msg = new abap.types.String({qualifiedName: "STRING"});
          let temp31 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
          let fullname_of_value = new abap.types.String({qualifiedName: "STRING"});
          let abap_doc_of_component = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
          let temp32 = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {});
          let temp21 = new abap.types.String({qualifiedName: "STRING"});
          await this.get_structure_of_enum_values({link_to_values: this.abap_doc.get().enumvalues_link, fullname_of_type: this.fullname_of_type, structure_of_values: structure_of_values, name_of_source: name_of_source, name_of_constant: name_of_constant});
          if (abap.compare.initial(structure_of_values) === false) {
            for await (const unique124 of abap.statements.loop(structure_of_values.get().components)) {
              fs_component_.assign(unique124);
              if (abap.compare.ne(fs_component_.get().type_kind, enum_type)) {
                temp30.set(name_of_constant);
                temp20.set(this.fullname_of_type);
                msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(122), msgv1: temp30, msgv2: temp20})));
                temp31.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: msg}));
                throw temp31.get();
              }
              fullname_of_value.set(abap.operators.concat(name_of_constant,abap.operators.concat(new abap.types.Character(1).set('-'),fs_component_.get().name)));
              abap_doc_of_component.set((await this.call_reader_and_decode({name_of_source: name_of_source, element_name: fullname_of_value})));
              abap.statements.clear(temp32);
              temp21.set(fs_component_.get().name);
              temp32.get().value.set((await this.format_to_camel_case({name: temp21})));
              temp32.get().overwritten_value.set(abap_doc_of_component.get().enum_value);
              abap.statements.append({source: temp32, target: result.get().values});
              abap.statements.append({source: abap_doc_of_component.get().description, target: result.get().descriptions});
              abap.statements.append({source: abap_doc_of_component.get().title, target: result.get().titles});
              await this.check_title_and_description({abap_doc_to_check: abap_doc_of_component, fullname_of_checked_type: fullname_of_value});
            }
            if (abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_false) && abap.compare.initial(this.abap_doc.get().default_)) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg127, component_name: this.fullname_of_type});
            }
          }
          return result;
        }
        async add_required_table_to_stack() {
          let temp33 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          abap.statements.clear(temp33);
          abap.statements.insertInternal({data: temp33, index: abap.IntegerFactory.get(1), table: this.stack_of_required_tabs});
        }
        async delete_first_tab_of_req_stack() {
          if (abap.compare.initial(this.stack_of_required_tabs) === false) {
            await abap.statements.deleteInternal(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1)});
          }
        }
        async write_req_and_add_props() {
          let fs_temp34_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
          let temp35 = new abap.types.Integer({qualifiedName: "I"});
          let temp22 = new abap.types.String({qualifiedName: "STRING"});
          let temp23 = new abap.types.Integer({qualifiedName: "I"});
          let temp36 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let temp37 = new abap.types.Integer({qualifiedName: "I"});
          let fs_temp38_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
          let temp39 = new abap.types.Integer({qualifiedName: "I"});
          let temp24 = new abap.types.String({qualifiedName: "STRING"});
          let temp25 = new abap.types.Integer({qualifiedName: "I"});
          let temp26 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let temp27 = new abap.types.Integer({qualifiedName: "I"});
          let fs_required_comp_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
          let temp28 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let temp29 = new abap.types.Integer({qualifiedName: "I"});
          let temp40 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let temp41 = new abap.types.Integer({qualifiedName: "I"});
          if (abap.compare.gt(this.ignore_til_indent_level, this.indent_level) || abap.compare.initial(this.ignore_til_indent_level)) {
            temp35.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
              assigning: fs_temp34_});
            abap.builtin.sy.get().tabix.set(temp35);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique125 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique125.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1310};
              throw unique125;
            }
            temp23.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
              into: temp22});
            abap.builtin.sy.get().tabix.set(temp23);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique126 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique126.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1318};
              throw unique126;
            }
            fs_temp34_.set(abap.operators.concat(temp22,new abap.types.String().set(`,`)));
            await this.write_tag({line: new abap.types.String().set(`"additionalProperties": false`)});
            temp37.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
              into: temp36});
            abap.builtin.sy.get().tabix.set(temp37);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique127 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique127.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1328};
              throw unique127;
            }
            if (abap.compare.initial(temp36) === false) {
              temp39.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
                assigning: fs_temp38_});
              abap.builtin.sy.get().tabix.set(temp39);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique128 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique128.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1337};
                throw unique128;
              }
              temp25.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(this.content,{index: abap.builtin.lines({val: this.content}),
                into: temp24});
              abap.builtin.sy.get().tabix.set(temp25);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique129 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique129.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1345};
                throw unique129;
              }
              fs_temp38_.set(abap.operators.concat(temp24,new abap.types.String().set(`,`)));
              await this.write_tag({line: new abap.types.String().set(`"required": [`)});
              this.indent_level.set(abap.operators.add(this.indent_level,abap.IntegerFactory.get(1)));
              temp27.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
                into: temp26});
              abap.builtin.sy.get().tabix.set(temp27);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique130 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique130.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1356};
                throw unique130;
              }
              temp29.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
                into: temp28});
              abap.builtin.sy.get().tabix.set(temp29);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique131 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique131.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1365};
                throw unique131;
              }
              for await (const unique132 of abap.statements.loop(temp28)) {
                fs_required_comp_.assign(unique132);
                temp41.set(abap.builtin.sy.get().tabix);
                abap.statements.readTable(this.stack_of_required_tabs,{index: abap.IntegerFactory.get(1),
                  into: temp40});
                abap.builtin.sy.get().tabix.set(temp41);
                if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                  const unique133 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                  unique133.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer_json_schema.clas.abap","INTERNAL_LINE": 1374};
                  throw unique133;
                }
                if (abap.compare.lt(abap.builtin.sy.get().tabix, abap.builtin.lines({val: temp40}))) {
                  await this.write_tag({line: new abap.types.String().set(`"${abap.templateFormatting(fs_required_comp_)}",`)});
                } else {
                  await this.write_tag({line: new abap.types.String().set(`"${abap.templateFormatting(fs_required_comp_)}"`)});
                }
              }
              this.indent_level.set(abap.operators.minus(this.indent_level,abap.IntegerFactory.get(1)));
              await this.write_tag({line: new abap.types.String().set(`]`)});
            }
          }
          await this.delete_first_tab_of_req_stack();
        }
        async get_format(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let element_description = INPUT?.element_description;
          if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
          if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
          if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
            result.set(new abap.types.String().set(`date-time`));
          }
          return result;
        }
        async write_tag(INPUT) {
          let line = INPUT?.line;
          if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
          if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
          let temp42 = new abap.types.String({qualifiedName: "STRING"});
          if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(this.ignore_til_indent_level, this.indent_level)) {
            temp42.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,zcl_aff_writer_json_schema.c_indent_number_characters)}))}${abap.templateFormatting(line)}`));
            abap.statements.append({source: temp42, target: this.content});
          }
        }
        async date_time_from_abap_to_json(INPUT) {
          let date_time_json = new abap.types.String({qualifiedName: "STRING"});
          let date_time_abap = INPUT?.date_time_abap;
          if (date_time_abap?.getQualifiedName === undefined || date_time_abap.getQualifiedName() !== "STRING") { date_time_abap = undefined; }
          if (date_time_abap === undefined) { date_time_abap = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.date_time_abap); }
          let element_description = INPUT?.element_description;
          if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
          if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
          let abap_date = new abap.types.String({qualifiedName: "STRING"});
          let difference = new abap.types.Integer({qualifiedName: "I"});
          abap_date.set(date_time_abap);
          abap.statements.replace({target: abap_date, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`"`)});
          if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date)) {
            if (abap.compare.eq(abap.builtin.strlen({val: abap_date}), abap.IntegerFactory.get(8))) {
              date_time_json.set(abap.operators.concat(abap_date.getOffset({offset: 0, length: 4}),abap.operators.concat(new abap.types.String().set(`-`),abap.operators.concat(abap_date.getOffset({offset: 4, length: 2}),abap.operators.concat(new abap.types.String().set(`-`),abap_date.getOffset({offset: 6, length: 2}))))));
            } else if (abap.compare.eq(abap.builtin.strlen({val: abap_date}), abap.IntegerFactory.get(6))) {
              date_time_json.set(abap.operators.concat(abap_date.getOffset({offset: 0, length: 4}),abap.operators.concat(new abap.types.String().set(`-`),abap_date.getOffset({offset: 4, length: 2}))));
            } else {
              date_time_json.set(abap_date);
            }
          } else if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
            date_time_json.set(abap.operators.concat(abap_date.getOffset({offset: 0, length: 19}),new abap.types.String().set(`+00:00`)));
          } else if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
            difference.set(abap.operators.minus(abap.IntegerFactory.get(6),abap.builtin.strlen({val: abap_date})));
            if (abap.compare.gt(difference, abap.IntegerFactory.get(0))) {
              abap_date.set(abap.operators.concat(abap_date,abap.builtin.repeat({val: new abap.types.Character(1).set('0'), occ: difference})));
            }
            date_time_json.set(abap.operators.concat(abap_date.getOffset({offset: 0, length: 2}),abap.operators.concat(new abap.types.String().set(`:`),abap.operators.concat(abap_date.getOffset({offset: 2, length: 2}),abap.operators.concat(new abap.types.String().set(`:`),abap_date.getOffset({offset: 4, length: 2}))))));
          }
          return date_time_json;
        }
        async reset_indent_level_tag() {
          if (abap.compare.eq(this.ignore_til_indent_level, this.indent_level)) {
            abap.statements.clear(this.ignore_til_indent_level);
          }
        }
        async append_after_output() {
          abap.statements.append({source: new abap.types.String().set(``), target: this.output});
        }
        async check_title_and_description(INPUT) {
          let abap_doc_to_check = INPUT?.abap_doc_to_check;
          if (abap_doc_to_check?.getQualifiedName === undefined || abap_doc_to_check.getQualifiedName() !== "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC") { abap_doc_to_check = undefined; }
          if (abap_doc_to_check === undefined) { abap_doc_to_check = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {}).set(INPUT.abap_doc_to_check); }
          let fullname_of_checked_type = INPUT?.fullname_of_checked_type;
          if (fullname_of_checked_type?.getQualifiedName === undefined || fullname_of_checked_type.getQualifiedName() !== "STRING") { fullname_of_checked_type = undefined; }
          if (fullname_of_checked_type === undefined) { fullname_of_checked_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_checked_type); }
          let msg = new abap.types.String({qualifiedName: "STRING"});
          let temp43 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
          if (abap.compare.initial(this.ignore_til_indent_level) || abap.compare.gt(this.ignore_til_indent_level, this.indent_level)) {
            if (abap.compare.initial(abap_doc_to_check.get().title)) {
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(119), msgv1: new abap.types.String().set(`Title`)})));
              await this.log.get().zif_aff_log$add_info({message_text: msg, component_name: fullname_of_checked_type});
            }
            if (abap.compare.initial(abap_doc_to_check.get().description)) {
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(119), msgv1: new abap.types.String().set(`Description`)})));
              await this.log.get().zif_aff_log$add_info({message_text: msg, component_name: fullname_of_checked_type});
            } else if (abap.compare.gt(abap.builtin.strlen({val: abap_doc_to_check.get().description}), zcl_aff_writer_json_schema.c_max_length_of_description)) {
              temp43.set(zcl_aff_writer_json_schema.c_max_length_of_description);
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(125), msgv1: temp43})));
              await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_checked_type});
            }
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
          let string = new abap.types.String({qualifiedName: "STRING"});
          let json_as_xstring = new abap.types.XString({qualifiedName: "XSTRING"});
          let json_reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER", RTTIName: "\\INTERFACE=IF_SXML_READER"});
          let exception = new abap.types.ABAPObject({qualifiedName: "CX_SXML_PARSE_ERROR", RTTIName: "\\CLASS=CX_SXML_PARSE_ERROR"});
          try {
            string.set(abap.builtin.concat_lines_of({table: source, sep: abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline}));
            json_as_xstring.set((await abap.Classes['CL_ABAP_CODEPAGE'].convert_to({source: string})));
            json_reader.set((await abap.Classes['CL_SXML_STRING_READER'].create({input: json_as_xstring})));
            await json_reader.get().if_sxml_reader$next_node();
            await json_reader.get().if_sxml_reader$skip_node();
          } catch (e) {
            if ((abap.Classes['CX_SXML_PARSE_ERROR'] && e instanceof abap.Classes['CX_SXML_PARSE_ERROR'])) {
              exception.set(e);
              await log.get().zif_aff_log$add_exception({exception: exception, component_name: new abap.types.String().set(``)});
              return result;
            } else {
              throw e;
            }
          }
          result.set(abap.builtin.abap_true);
          return result;
        }
        async handle_language_field() {
          await this.write_tag({line: new abap.types.String().set(`"minLength": 2,`)});
        }
        async get_max_length(INPUT) {
          let result = new abap.types.String({qualifiedName: "STRING"});
          let element_description = INPUT?.element_description;
          if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
          if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
          let temp44 = new abap.types.Integer({qualifiedName: "I"});
          let length = new abap.types.Integer({qualifiedName: "I"});
          let length_as_string = new abap.types.String({qualifiedName: "STRING"});
          if (abap.compare.gt(element_description.get().output_length, abap.IntegerFactory.get(0))) {
            if (abap.compare.gt(abap.operators.divide(element_description.get().length,abap.Classes['CL_ABAP_CHAR_UTILITIES'].charsize), element_description.get().output_length)) {
              temp44.set(abap.operators.divide(element_description.get().length,abap.Classes['CL_ABAP_CHAR_UTILITIES'].charsize));
            } else {
              temp44.set(element_description.get().output_length);
            }
            length.set(temp44);
            length_as_string.set(length);
            await this.remove_leading_trailing_spaces({string_to_work_on: length_as_string});
            result.set(length_as_string);
          }
          return result;
        }
        async get_extrema(INPUT) {
          let element_description = INPUT?.element_description;
          if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
          if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
          let max = INPUT?.max || new abap.types.String({qualifiedName: "STRING"});
          let min = INPUT?.min || new abap.types.String({qualifiedName: "STRING"});
          let r_field = new abap.types.DataReference(new abap.types.Character(4));
          let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          let max_val = new abap.types.DataReference(new abap.types.Character(4));
          let fs_max_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          let min_val = new abap.types.DataReference(new abap.types.Character(4));
          let fs_min_ = new abap.types.FieldSymbol(new abap.types.Character(4));
          let min_str = new abap.types.String({qualifiedName: "STRING"});
          let length = new abap.types.Integer({qualifiedName: "I"});
          let front = new abap.types.String({qualifiedName: "STRING"});
          let back = new abap.types.String({qualifiedName: "STRING"});
          if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
          await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: element_description, dref: r_field});
          abap.statements.assign({target: fs_field_, source: (r_field).dereference()});
          max_val.set((await abap.Classes['CL_ABAP_EXCEPTIONAL_VALUES'].get_max_value({in_: fs_field_})));
          abap.statements.assign({target: fs_max_, source: (max_val).dereference()});
          if (abap.compare.assigned(fs_max_)) {
            max.set(fs_max_);
            abap.statements.replace({target: max, all: true, with: new abap.types.Character(1).set('e'), of: new abap.types.Character(1).set('E')});
            abap.statements.replace({target: max, all: true, with: new abap.types.Character(1).set(''), of: new abap.types.Character(1).set('+')});
            await this.remove_leading_trailing_spaces({string_to_work_on: max});
          }
          if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {
            if (abap.compare.assigned(fs_max_)) {
              min.set(abap.operators.concat(new abap.types.Character(1).set('-'),max));
            }
          } else {
            min_val.set((await abap.Classes['CL_ABAP_EXCEPTIONAL_VALUES'].get_min_value({in_: fs_field_})));
            abap.statements.assign({target: fs_min_, source: (min_val).dereference()});
            if (abap.compare.assigned(fs_min_)) {
              min_str.set(fs_min_);
              length.set(abap.operators.minus(abap.builtin.strlen({val: min_str}),abap.IntegerFactory.get(1)));
              front.set(abap.builtin.substring({val: min_str, off: abap.IntegerFactory.get(0), len: length}));
              back.set(abap.builtin.substring({val: min_str, off: length, len: abap.IntegerFactory.get(1)}));
              if (abap.compare.eq(back, new abap.types.Character(1).set('-'))) {
                min.set(abap.operators.concat(back,front));
              } else {
                min.set(min_str);
              }
              abap.statements.replace({target: min, all: true, with: new abap.types.Character(1).set('e'), of: new abap.types.Character(1).set('E')});
              abap.statements.replace({target: min, all: true, with: new abap.types.Character(1).set(''), of: new abap.types.Character(1).set('+')});
              await this.remove_leading_trailing_spaces({string_to_work_on: min});
            }
          }
        }
      }
      abap.Classes['ZCL_AFF_WRITER_JSON_SCHEMA'] = zcl_aff_writer_json_schema;
      zcl_aff_writer_json_schema.c_schema_specification = new abap.types.String({qualifiedName: "STRING"});
      zcl_aff_writer_json_schema.c_schema_specification.set('https://json-schema.org/draft/2020-12/schema');
      zcl_aff_writer_json_schema.c_link_to_repository = new abap.types.String({qualifiedName: "STRING"});
      zcl_aff_writer_json_schema.c_link_to_repository.set('https://github.com/SAP/abap-file-formats');
      zcl_aff_writer_json_schema.c_format_version = new abap.types.String({qualifiedName: "STRING"});
      zcl_aff_writer_json_schema.c_format_version.set('FORMAT_VERSION');
      zcl_aff_writer_json_schema.c_max_length_of_description = new abap.types.Integer({qualifiedName: "I"});
      zcl_aff_writer_json_schema.c_max_length_of_description.set(253);
      zcl_aff_writer_json_schema.ty_buffer = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {});
      zcl_aff_writer_json_schema.tt_buffer = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NAME"}), "number_brackets": new abap.types.Integer({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_BUFFER-NUMBER_BRACKETS"})}, "zcl_aff_writer_json_schema=>ty_buffer", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>tt_buffer");
      zcl_aff_writer_json_schema.ty_enum_value = new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {});
      zcl_aff_writer_json_schema.ty_enum_properties = new abap.types.Structure({"values": abap.types.TableFactory.construct(new abap.types.Structure({"value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-VALUE"}), "overwritten_value": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA=>TY_ENUM_VALUE-OVERWRITTEN_VALUE"})}, "zcl_aff_writer_json_schema=>ty_enum_value", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>ty_enum_properties-values"), "titles": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "descriptions": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE")}, "zcl_aff_writer_json_schema=>ty_enum_properties", undefined, {}, {});
      zcl_aff_writer_json_schema.temp1_44ba95addc = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer_json_schema=>temp1_44ba95addc");
export {zcl_aff_writer_json_schema};
//# sourceMappingURL=zcl_aff_writer_json_schema.clas.mjs.map