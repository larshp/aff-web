const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer.clas.abap
class zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_WRITER';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  static ATTRIBUTES = {"OUTPUT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "CONTENT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "STACK_OF_STRUCTURE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>tt_structure_stack");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "STACK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>temp1_f81e03d158");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "INDENT_LEVEL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "ABAP_DOC_PARSER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_PARSER"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "IGNORE_TIL_INDENT_LEVEL": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "ABAP_DOC": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "C_INDENT_NUMBER_CHARACTERS": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "O", "is_constant": "X", "is_class": "X"},
  "C_ABAP_TYPES": {"type": () => {return new abap.types.Structure({"boolean": new abap.types.String({qualifiedName: "STRING"}), "timestamp": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "I", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_WRITER~TYPE_INFO": {"type": () => {return new abap.types.Structure({"string": new abap.types.String({qualifiedName: "STRING"}), "numeric": new abap.types.String({qualifiedName: "STRING"}), "boolean": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_WRITER~OPERATION": {"type": () => {return new abap.types.Structure({"initial": new abap.types.String({qualifiedName: "STRING"}), "write_element": new abap.types.String({qualifiedName: "STRING"}), "open_structure": new abap.types.String({qualifiedName: "STRING"}), "close_structure": new abap.types.String({qualifiedName: "STRING"}), "open_table": new abap.types.String({qualifiedName: "STRING"}), "close_table": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"IS_TYPE_TIMESTAMP": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "IS_TYPE_BOOLEAN": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "GET_CONSTANT_AS_STRUC": {"visibility": "I", "parameters": {"CONSTANT_AS_STRUC": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}, "NAME_OF_SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME_OF_CONSTANT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_INFOS_OF_VALUES_LINK": {"visibility": "I", "parameters": {"VALUES_LINK": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME_OF_SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME_OF_CONSTANT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "VALIDATE_DEFAULT_LINK": {"visibility": "I", "parameters": {"IS_VALID": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "SPLITTED_LINK": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_typekind"});}, "is_optional": " "}}},
  "FORMAT_NAME": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_JSON_TYPE_FROM_DESCRIPTION": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "WRITE_OPEN_TAG": {"visibility": "O", "parameters": {"LINE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_CLOSING_TAG": {"visibility": "O", "parameters": {"LINE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ADD_TO_STACK": {"visibility": "O", "parameters": {"ENTRY": {"type": () => {return new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});}, "is_optional": " "}}},
  "LAST_OPERATION": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "APPEND_TO_PREVIOUS_LINE": {"visibility": "O", "parameters": {"STRING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "APPEND_BEFORE_OUTPUT": {"visibility": "O", "parameters": {}},
  "APPEND_AFTER_OUTPUT": {"visibility": "O", "parameters": {}},
  "WRITE_TAG": {"visibility": "O", "parameters": {"LINE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_ELEMENT": {"visibility": "O", "parameters": {"ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "OPEN_STRUCTURE": {"visibility": "O", "parameters": {"STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "CLOSE_STRUCTURE": {"visibility": "O", "parameters": {"STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "OPEN_TABLE": {"visibility": "O", "parameters": {"TABLE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "CLOSE_TABLE": {"visibility": "O", "parameters": {"TABLE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TABLE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "FORMAT_TO_CAMEL_CASE": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CALL_READER_AND_DECODE": {"visibility": "O", "parameters": {"READ_ABAP_DOC": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}, "NAME_OF_SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "DELETE_FIRST_OF_STRUC_STACK": {"visibility": "O", "parameters": {}},
  "GET_ALL_PATH_INFORMATION": {"visibility": "O", "parameters": {"NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SOURCE_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_STRUCTURE_OF_ENUM_VALUES": {"visibility": "O", "parameters": {"LINK_TO_VALUES": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "STRUCTURE_OF_VALUES": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}, "NAME_OF_SOURCE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "NAME_OF_CONSTANT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_ABAP_DOC_FOR_ABSOLUTE_NAME": {"visibility": "O", "parameters": {"ABAP_DOC": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}, "ABSOLUTE_NAME": {"type": () => {return new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});}, "is_optional": " "}}},
  "COMPARE_ABAP_DOC": {"visibility": "O", "parameters": {"ABAP_DOC_ADDITIONAL": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}, "ABAP_DOC_BASE": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}}},
  "GET_SPLITTED_ABSOLUTE_NAME": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "ABSOLUTE_NAME": {"type": () => {return new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});}, "is_optional": " "}}},
  "GET_DEFAULT_FROM_LINK": {"visibility": "O", "parameters": {"DEFAULT_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "LINK": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"abap_typekind"});}, "is_optional": " "}}},
  "REMOVE_LEADING_TRAILING_SPACES": {"visibility": "O", "parameters": {"STRING_TO_WORK_ON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_CALLBACK_CLASS_VALID": {"visibility": "O", "parameters": {"IS_VALID": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "CLASS_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_DEFAULT_VALUE_VALID": {"visibility": "O", "parameters": {"IS_VALID": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "DEFAULT_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FULLNAME_OF_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "IS_SY_LANGU": {"visibility": "O", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "CLEAR_TYPE_SPECIFICS": {"visibility": "O", "parameters": {}},
  "CHECK_REDUNDANT_ANNOTATIONS": {"visibility": "O", "parameters": {}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.output = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.content = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.stack_of_structure = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>tt_structure_stack");
    this.stack = abap.types.TableFactory.construct(new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>temp1_f81e03d158");
    this.indent_level = new abap.types.Integer({qualifiedName: "I"});
    this.indent_level.set(0);
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    this.abap_doc_parser = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_PARSER"});
    this.ignore_til_indent_level = new abap.types.Integer({qualifiedName: "I"});
    this.abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    this.fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
    this.zif_aff_writer$type_info = abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info;
    this.zif_aff_writer$operation = abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation;
    this.c_indent_number_characters = zcl_aff_writer.c_indent_number_characters;
    this.c_abap_types = zcl_aff_writer.c_abap_types;
  }
  async constructor_(INPUT) {
    this.log.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    this.abap_doc_parser.set(await (new abap.Classes['ZCL_AFF_ABAP_DOC_PARSER']()).constructor_());
    return this;
  }
  async format_name(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    result.set((await this.me.get().format_to_camel_case({name: name})));
    return result;
  }
  async format_to_camel_case(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let lower_name = new abap.types.String({qualifiedName: "STRING"});
    lower_name.set(abap.builtin.to_lower({val: name}));
    result.set(abap.builtin.to_mixed({val: lower_name}));
    return result;
  }
  async get_json_type_from_description(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let unique74 = element_description.get().type_kind;
    if (abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_string) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_csequence) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_clike) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_char) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_w) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_xstring) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_hex) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_enum)) {
      if (abap.compare.initial((await this.is_type_boolean({element_description: element_description}))) === false) {
        temp1.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean);
      } else {
        temp1.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string);
      }
      result.set(temp1);
    } else if (abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_float) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_numeric)) {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric);
    } else if (abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      if (abap.compare.initial((await this.is_type_timestamp({element_description: element_description}))) === false) {
        temp2.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time);
      } else {
        temp2.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric);
      }
      result.set(temp2);
    } else if (abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_date) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time) || abap.compare.eq(unique74, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time);
    } else {
      temp3.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp3.get();
    }
    return result;
  }
  async is_type_boolean(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    type_name.set((await element_description.get().get_relative_name()));
    temp1.set(abap.builtin.boolc(abap.compare.eq(element_description.get().output_length, abap.IntegerFactory.get(1)) && (abap.compare.initial(type_name) === false && abap.compare.cs(zcl_aff_writer.c_abap_types.get().boolean, type_name))));
    result.set(temp1);
    return result;
  }
  async is_type_timestamp(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    type_name.set((await element_description.get().get_relative_name()));
    temp2.set(abap.builtin.boolc(abap.compare.initial(type_name) === false && abap.compare.cs(zcl_aff_writer.c_abap_types.get().timestamp, type_name)));
    result.set(temp2);
    return result;
  }
  async zif_aff_writer$write_element(INPUT) {
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let temp4 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    await this.write_element({element_name: element_name, element_description: element_description});
    abap.statements.clear(temp4);
    temp4.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().write_element);
    temp4.get().name.set(element_name);
    await this.add_to_stack({entry: temp4});
  }
  async zif_aff_writer$open_node(INPUT) {
    let node_description = INPUT?.node_description;
    if (node_description?.getQualifiedName === undefined || node_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { node_description = undefined; }
    if (node_description === undefined) { node_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.node_description); }
    let node_name = INPUT?.node_name;
    if (node_name?.getQualifiedName === undefined || node_name.getQualifiedName() !== "STRING") { node_name = undefined; }
    if (node_name === undefined) { node_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.node_name); }
    let temp5 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    let temp6 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    let temp7 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let unique75 = node_description.get().kind;
    if (abap.compare.eq(unique75, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await this.open_structure({structure_name: node_name, structure_description: node_description});
      abap.statements.clear(temp5);
      temp5.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_structure);
      temp5.get().name.set(node_name);
      await this.add_to_stack({entry: temp5});
    } else if (abap.compare.eq(unique75, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
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
    let node_description = INPUT?.node_description;
    if (node_description?.getQualifiedName === undefined || node_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { node_description = undefined; }
    if (node_description === undefined) { node_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.node_description); }
    let node_name = INPUT?.node_name;
    if (node_name?.getQualifiedName === undefined || node_name.getQualifiedName() !== "STRING") { node_name = undefined; }
    if (node_name === undefined) { node_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.node_name); }
    let temp8 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    let temp9 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    let temp10 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let unique76 = node_description.get().kind;
    if (abap.compare.eq(unique76, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await this.close_structure({structure_name: node_name, structure_description: node_description});
      abap.statements.clear(temp8);
      temp8.get().operation.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_structure);
      temp8.get().name.set(node_name);
      await this.add_to_stack({entry: temp8});
    } else if (abap.compare.eq(unique76, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
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
    let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    await this.append_before_output();
    abap.statements.append({source: this.content, lines: true, target: this.output});
    await this.append_after_output();
    result.set(this.output);
    return result;
  }
  async write_open_tag(INPUT) {
    let line = INPUT?.line;
    if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
    if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
    await this.write_tag({line: line});
    this.indent_level.set(abap.operators.add(this.indent_level,abap.IntegerFactory.get(1)));
  }
  async write_closing_tag(INPUT) {
    let line = INPUT?.line;
    if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
    if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
    this.indent_level.set(abap.operators.minus(this.indent_level,abap.IntegerFactory.get(1)));
    await this.write_tag({line: line});
  }
  async add_to_stack(INPUT) {
    let entry = INPUT?.entry;
    if (entry?.getQualifiedName === undefined || entry.getQualifiedName() !== "ZCL_AFF_WRITER=>TY_STACK_ENTRY") { entry = undefined; }
    if (entry === undefined) { entry = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {}).set(INPUT.entry); }
    abap.statements.insertInternal({data: entry, index: abap.IntegerFactory.get(1), table: this.stack});
  }
  async last_operation() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
    if (abap.compare.initial(this.stack) === false) {
      abap.statements.clear(temp11);
      abap.statements.readTable(this.stack,{index: abap.IntegerFactory.get(1),
        into: temp12});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp11.set(temp12.get().operation);
      }
      result.set(temp11);
    } else {
      result.set(abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial);
    }
    return result;
  }
  async append_to_previous_line(INPUT) {
    let string = INPUT?.string;
    if (string?.getQualifiedName === undefined || string.getQualifiedName() !== "STRING") { string = undefined; }
    if (string === undefined) { string = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.string); }
    let index = new abap.types.Integer({qualifiedName: "I"});
    let fs_temp13_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let temp14 = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    index.set(abap.builtin.lines({val: this.me.get().content}));
    if (abap.compare.gt(index, abap.IntegerFactory.get(0))) {
      temp14.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().content,{index: index,
        assigning: fs_temp13_});
      abap.builtin.sy.get().tabix.set(temp14);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique77 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique77.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 434};
        throw unique77;
      }
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.me.get().content,{index: index,
        into: temp1});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique78 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique78.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 442};
        throw unique78;
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
    let read_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let name_of_source = INPUT?.name_of_source;
    if (name_of_source?.getQualifiedName === undefined || name_of_source.getQualifiedName() !== "STRING") { name_of_source = undefined; }
    if (name_of_source === undefined) { name_of_source = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name_of_source); }
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let ref = new abap.types.ABAPObject({qualifiedName: "IF_OO_CLIF_SOURCE", RTTIName: "\\INTERFACE=IF_OO_CLIF_SOURCE"});
    let source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let reader = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"});
    let result = new abap.types.String({qualifiedName: "STRING"});
    ref.set((await (await abap.Classes['CL_OO_FACTORY'].create_instance()).get().create_clif_source({clif_name: name_of_source})));
    await ref.get().if_oo_clif_source$get_source({source: source});
    reader.set((await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({name: name_of_source, source: source})));
    try {
      result.set((await reader.get().get_abap_doc_for_element({element_name: element_name})));
      read_abap_doc.set((await this.abap_doc_parser.get().parse({component_name: element_name, to_parse: result, log: this.log})));
    } catch (e) {
      if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
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
      await abap.statements.deleteInternal(this.stack_of_structure,{index: abap.IntegerFactory.get(1)});
    }
  }
  async get_all_path_information(INPUT) {
    let name = INPUT?.name;
    if (name?.getQualifiedName === undefined || name.getQualifiedName() !== "STRING") { name = undefined; }
    if (name === undefined) { name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name); }
    let source_type = INPUT?.source_type || new abap.types.String({qualifiedName: "STRING"});
    let source = INPUT?.source || new abap.types.String({qualifiedName: "STRING"});
    let fullname_of_type = INPUT?.fullname_of_type || new abap.types.String({qualifiedName: "STRING"});
    let previous_absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    let splitted_prev_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let index = new abap.types.Integer({qualifiedName: "I"});
    let temp15 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp16 = new abap.types.Integer({qualifiedName: "I"});
    let name_of_prev = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp17 = new abap.types.String({qualifiedName: "STRING"});
    let temp18 = new abap.types.Integer({qualifiedName: "I"});
    let temp19 = new abap.types.String({qualifiedName: "STRING"});
    let temp20 = new abap.types.Integer({qualifiedName: "I"});
    let temp21 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp22 = new abap.types.Integer({qualifiedName: "I"});
    index.set(abap.IntegerFactory.get(0));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique79 = 1;
    while (abap.compare.le(abap.builtin.lines({val: splitted_prev_name}), abap.IntegerFactory.get(2))) {
      abap.builtin.sy.get().index.set(unique79++);
      if (abap.compare.ge(index, abap.builtin.lines({val: this.stack_of_structure}))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return;
      }
      index.set(abap.operators.add(index,abap.IntegerFactory.get(1)));
      temp16.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_of_structure,{index: index,
        into: temp15});
      abap.builtin.sy.get().tabix.set(temp16);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique80 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique80.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 528};
        throw unique80;
      }
      previous_absolute_name.set(temp15.get().absolute_name);
      splitted_prev_name.set((await this.get_splitted_absolute_name({absolute_name: previous_absolute_name})));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    temp4.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: abap.builtin.lines({val: splitted_prev_name}),
      into: temp3});
    abap.builtin.sy.get().tabix.set(temp4);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique81 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique81.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 540};
      throw unique81;
    }
    name_of_prev.set(temp3);
    temp18.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(1),
      into: temp17});
    abap.builtin.sy.get().tabix.set(temp18);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique82 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique82.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 549};
      throw unique82;
    }
    source_type.set(temp17);
    temp20.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(2),
      into: temp19});
    abap.builtin.sy.get().tabix.set(temp20);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique83 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique83.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 558};
      throw unique83;
    }
    source.set(temp19);
    fullname_of_type.set(abap.operators.concat(name_of_prev,new abap.types.Character(1).set('-')));
    index.set(abap.operators.minus(index,abap.IntegerFactory.get(1)));
    const indexBackup2 = abap.builtin.sy.get().index.get();
    let unique84 = 1;
    while (abap.compare.gt(index, abap.IntegerFactory.get(0))) {
      abap.builtin.sy.get().index.set(unique84++);
      temp22.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.stack_of_structure,{index: index,
        into: temp21});
      abap.builtin.sy.get().tabix.set(temp22);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique85 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique85.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 570};
        throw unique85;
      }
      fullname_of_type.set(abap.operators.concat(fullname_of_type,abap.operators.concat(temp21.get().name,new abap.types.Character(1).set('-'))));
      index.set(abap.operators.minus(index,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup2);
    fullname_of_type.set(abap.operators.concat(fullname_of_type,name));
  }
  async get_splitted_absolute_name(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let absolute_name = INPUT?.absolute_name;
    if (absolute_name?.getQualifiedName === undefined || absolute_name.getQualifiedName() !== "ABAP_ABSTYPENAME") { absolute_name = undefined; }
    if (absolute_name === undefined) { absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"}).set(INPUT.absolute_name); }
    let place_of_type = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    
    let splitted_in_componets = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp2");
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    
    let splitted_in_details = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp3");
    place_of_type.set(absolute_name);
    abap.statements.split({source: place_of_type, at: new abap.types.Character(1).set('\\'), table: splitted_in_componets});
    for await (const unique86 of abap.statements.loop(splitted_in_componets)) {
      fs_component_.assign(unique86);
      if (abap.compare.initial(fs_component_) === false) {
        abap.statements.split({source: fs_component_, at: new abap.types.Character(1).set('='), table: splitted_in_details});
        abap.statements.append({source: splitted_in_details, lines: true, target: result});
      }
    }
    return result;
  }
  async get_structure_of_enum_values(INPUT) {
    let link_to_values = INPUT?.link_to_values;
    if (link_to_values?.getQualifiedName === undefined || link_to_values.getQualifiedName() !== "STRING") { link_to_values = undefined; }
    if (link_to_values === undefined) { link_to_values = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.link_to_values); }
    let fullname_of_type = INPUT?.fullname_of_type;
    if (fullname_of_type?.getQualifiedName === undefined || fullname_of_type.getQualifiedName() !== "STRING") { fullname_of_type = undefined; }
    if (fullname_of_type === undefined) { fullname_of_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_type); }
    let structure_of_values = INPUT?.structure_of_values || new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let name_of_source = INPUT?.name_of_source || new abap.types.String({qualifiedName: "STRING"});
    let name_of_constant = INPUT?.name_of_constant || new abap.types.String({qualifiedName: "STRING"});
    await this.get_infos_of_values_link({values_link: link_to_values, name_of_source: name_of_source, name_of_constant: name_of_constant});
    structure_of_values.set((await this.get_constant_as_struc({name_of_source: name_of_source, name_of_constant: name_of_constant, fullname_of_type: fullname_of_type})));
  }
  async get_constant_as_struc(INPUT) {
    let constant_as_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let name_of_source = INPUT?.name_of_source;
    if (name_of_source?.getQualifiedName === undefined || name_of_source.getQualifiedName() !== "STRING") { name_of_source = undefined; }
    if (name_of_source === undefined) { name_of_source = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name_of_source); }
    let name_of_constant = INPUT?.name_of_constant;
    if (name_of_constant?.getQualifiedName === undefined || name_of_constant.getQualifiedName() !== "STRING") { name_of_constant = undefined; }
    if (name_of_constant === undefined) { name_of_constant = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.name_of_constant); }
    let fullname_of_type = INPUT?.fullname_of_type;
    if (fullname_of_type?.getQualifiedName === undefined || fullname_of_type.getQualifiedName() !== "STRING") { fullname_of_type = undefined; }
    if (fullname_of_type === undefined) { fullname_of_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_type); }
    let constant = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let constant_descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    let temp23 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let temp24 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_INTFDESCR", RTTIName: "\\CLASS=CL_ABAP_INTFDESCR"});
    let constant_descr_intf = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_INTFDESCR", RTTIName: "\\CLASS=CL_ABAP_INTFDESCR"});
    let temp25 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let temp26 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR", RTTIName: "\\CLASS=CL_ABAP_CLASSDESCR"});
    let constant_descr_clas = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CLASSDESCR", RTTIName: "\\CLASS=CL_ABAP_CLASSDESCR"});
    let temp27 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let temp28 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
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
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        temp23.set(name_of_source);
        msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(103), msgv1: temp23})));
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
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              temp25.set(abap.operators.concat(name_of_source,abap.operators.concat(new abap.types.Character(2).set('=>'),name_of_constant)));
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(104), msgv1: temp25})));
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
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                temp27.set(abap.operators.concat(name_of_source,abap.operators.concat(new abap.types.Character(2).set('=>'),name_of_constant)));
                msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(104), msgv1: temp27})));
                await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
              }
            }
            await abap.statements.cast(temp28, constant);
            constant_as_struc.set(temp28);
          }
          return constant_as_struc;
        }
        async get_infos_of_values_link(INPUT) {
          let values_link = INPUT?.values_link;
          if (values_link?.getQualifiedName === undefined || values_link.getQualifiedName() !== "STRING") { values_link = undefined; }
          if (values_link === undefined) { values_link = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.values_link); }
          let name_of_source = INPUT?.name_of_source || new abap.types.String({qualifiedName: "STRING"});
          let name_of_constant = INPUT?.name_of_constant || new abap.types.String({qualifiedName: "STRING"});
          let link = new abap.types.String({qualifiedName: "STRING"});
          
          let split_at_point = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp4");
          let temp29 = new abap.types.String({qualifiedName: "STRING"});
          let temp30 = new abap.types.Integer({qualifiedName: "I"});
          let temp31 = new abap.types.String({qualifiedName: "STRING"});
          let temp32 = new abap.types.Integer({qualifiedName: "I"});
          link.set(values_link);
          abap.statements.replace({target: link, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`[\\s]`)});
          abap.statements.replace({target: link, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`data:`)});
          abap.statements.split({source: link, at: new abap.types.Character(1).set('.'), table: split_at_point});
          if (abap.compare.eq(abap.builtin.lines({val: split_at_point}), abap.IntegerFactory.get(2))) {
            temp30.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(split_at_point,{index: abap.IntegerFactory.get(1),
              into: temp29});
            abap.builtin.sy.get().tabix.set(temp30);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique87 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique87.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 713};
              throw unique87;
            }
            name_of_source.set(abap.builtin.to_upper({val: temp29}));
            temp32.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(split_at_point,{index: abap.IntegerFactory.get(2),
              into: temp31});
            abap.builtin.sy.get().tabix.set(temp32);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique88 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique88.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 722};
              throw unique88;
            }
            name_of_constant.set(abap.builtin.to_upper({val: temp31}));
          }
        }
        async get_abap_doc_for_absolute_name(INPUT) {
          let abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
          let absolute_name = INPUT?.absolute_name;
          if (absolute_name?.getQualifiedName === undefined || absolute_name.getQualifiedName() !== "ABAP_ABSTYPENAME") { absolute_name = undefined; }
          if (absolute_name === undefined) { absolute_name = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"}).set(INPUT.absolute_name); }
          let splitted_prev_name = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
          let source_type = new abap.types.String({qualifiedName: "STRING"});
          let temp5 = new abap.types.String({qualifiedName: "STRING"});
          let temp6 = new abap.types.Integer({qualifiedName: "I"});
          let source = new abap.types.String({qualifiedName: "STRING"});
          let temp7 = new abap.types.String({qualifiedName: "STRING"});
          let temp8 = new abap.types.Integer({qualifiedName: "I"});
          let fullname_of_type = new abap.types.String({qualifiedName: "STRING"});
          let temp9 = new abap.types.String({qualifiedName: "STRING"});
          let temp10 = new abap.types.Integer({qualifiedName: "I"});
          splitted_prev_name.set((await this.get_splitted_absolute_name({absolute_name: absolute_name})));
          if (abap.compare.ge(abap.builtin.lines({val: splitted_prev_name}), abap.IntegerFactory.get(4))) {
            temp6.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(1),
              into: temp5});
            abap.builtin.sy.get().tabix.set(temp6);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique89 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique89.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 749};
              throw unique89;
            }
            source_type.set(temp5);
            temp8.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(2),
              into: temp7});
            abap.builtin.sy.get().tabix.set(temp8);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique90 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique90.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 759};
              throw unique90;
            }
            source.set(temp7);
            temp10.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted_prev_name,{index: abap.IntegerFactory.get(4),
              into: temp9});
            abap.builtin.sy.get().tabix.set(temp10);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique91 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique91.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 769};
              throw unique91;
            }
            fullname_of_type.set(temp9);
            if (abap.compare.eq(source_type, new abap.types.Character(5).set('CLASS')) || abap.compare.eq(source_type, new abap.types.Character(9).set('INTERFACE'))) {
              abap_doc.set((await this.call_reader_and_decode({name_of_source: source, element_name: fullname_of_type})));
            }
          }
          return abap_doc;
        }
        async compare_abap_doc(INPUT) {
          let abap_doc_additional = INPUT?.abap_doc_additional;
          if (abap_doc_additional?.getQualifiedName === undefined || abap_doc_additional.getQualifiedName() !== "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC") { abap_doc_additional = undefined; }
          if (abap_doc_additional === undefined) { abap_doc_additional = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {}).set(INPUT.abap_doc_additional); }
          let abap_doc_base = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
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
          if (abap.compare.initial(abap_doc_base.get().content_encoding)) {
            abap_doc_base.get().content_encoding.set(abap_doc_additional.get().content_encoding);
          }
          if (abap.compare.initial(abap_doc_base.get().content_media_type)) {
            abap_doc_base.get().content_media_type.set(abap_doc_additional.get().content_media_type);
          }
        }
        async get_default_from_link(INPUT) {
          let default_value = new abap.types.String({qualifiedName: "STRING"});
          let link = INPUT?.link;
          if (link?.getQualifiedName === undefined || link.getQualifiedName() !== "STRING") { link = undefined; }
          if (link === undefined) { link = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.link); }
          let fullname_of_type = INPUT?.fullname_of_type;
          if (fullname_of_type?.getQualifiedName === undefined || fullname_of_type.getQualifiedName() !== "STRING") { fullname_of_type = undefined; }
          if (fullname_of_type === undefined) { fullname_of_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_type); }
          let element_type = INPUT?.element_type;
          if (element_type?.getQualifiedName === undefined || element_type.getQualifiedName() !== "ABAP_TYPEKIND") { element_type = undefined; }
          if (element_type === undefined) { element_type = new abap.types.Character(1, {"qualifiedName":"abap_typekind"}).set(INPUT.element_type); }
          let link_to_work_on = new abap.types.String({qualifiedName: "STRING"});
          
          let splitted = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "temp5");
          let default_abap = new abap.types.String({qualifiedName: "STRING"});
          let temp11 = new abap.types.String({qualifiedName: "STRING"});
          let temp12 = new abap.types.Integer({qualifiedName: "I"});
          link_to_work_on.set(link);
          abap.statements.replace({target: link_to_work_on, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`(@link|data:)`)});
          abap.statements.replace({target: link_to_work_on, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`[\\s]`)});
          abap.statements.split({source: link_to_work_on, at: new abap.types.Character(1).set('.'), table: splitted});
          if (abap.compare.eq((await this.validate_default_link({splitted_link: splitted, fullname_of_type: fullname_of_type, element_type: element_type})), abap.builtin.abap_true)) {
            temp12.set(abap.builtin.sy.get().tabix);
            abap.statements.readTable(splitted,{index: abap.builtin.lines({val: splitted}),
              into: temp11});
            abap.builtin.sy.get().tabix.set(temp12);
            if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              const unique92 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
              unique92.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 836};
              throw unique92;
            }
            default_abap.set(temp11);
            default_value.set((await this.format_to_camel_case({name: default_abap})));
          }
          return default_value;
        }
        async zif_aff_writer$get_log() {
          let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
          log.set(this.me.get().log);
          return log;
        }
        async is_callback_class_valid(INPUT) {
          let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
          let class_name = INPUT?.class_name;
          if (class_name?.getQualifiedName === undefined || class_name.getQualifiedName() !== "STRING") { class_name = undefined; }
          if (class_name === undefined) { class_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.class_name); }
          let component_name = INPUT?.component_name;
          if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
          if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
          let name_of_callback_class = new abap.types.String({qualifiedName: "STRING"});
          let temp33 = new abap.types.String({qualifiedName: "STRING"});
          let result = abap.types.TableFactory.construct(new abap.types.Structure({"cpdkey": new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {})}, "cl_oo_classname_service=>ty_row", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_oo_classname_service=>ty_result");
          let has_method_get_subschema = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
          let temp13 = new abap.types.Integer({qualifiedName: "I"});
          let temp1 = new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {});
          let temp4 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
          let has_method_serialize = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
          let temp14 = new abap.types.Integer({qualifiedName: "I"});
          let temp2 = new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {});
          let temp5 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
          let has_method_deserialize = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
          let temp15 = new abap.types.Integer({qualifiedName: "I"});
          let temp3 = new abap.types.Structure({"clsname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CLSNAME"}), "cpdname": new abap.types.String({qualifiedName: "CL_OO_CLASSNAME_SERVICE=>TY_ROWROW-CPDNAME"})}, "cl_oo_classname_service=>ty_rowrow", undefined, {}, {});
          let temp6 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
          let temp7 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
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
            if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
              abap.statements.clear(temp1);
              temp1.get().clsname.set(name_of_callback_class);
              temp1.get().cpdname.set(new abap.types.Character(13).set('GET_SUBSCHEMA'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp1);},
                withKeyValue: [{key: (i) => {return i.cpdkey}, value: temp1}],
                usesTableLine: false,
                withKeySimple: {"cpdkey": temp1}});
              temp13.set(abap.builtin.sy.get().subrc);
              temp4.set(abap.builtin.boolc(abap.compare.eq(temp13, abap.IntegerFactory.get(0))));
              has_method_get_subschema.set(temp4);
              abap.statements.clear(temp2);
              temp2.get().clsname.set(name_of_callback_class);
              temp2.get().cpdname.set(new abap.types.Character(9).set('SERIALIZE'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp2);},
                withKeyValue: [{key: (i) => {return i.cpdkey}, value: temp2}],
                usesTableLine: false,
                withKeySimple: {"cpdkey": temp2}});
              temp14.set(abap.builtin.sy.get().subrc);
              temp5.set(abap.builtin.boolc(abap.compare.eq(temp14, abap.IntegerFactory.get(0))));
              has_method_serialize.set(temp5);
              abap.statements.clear(temp3);
              temp3.get().clsname.set(name_of_callback_class);
              temp3.get().cpdname.set(new abap.types.Character(11).set('DESERIALIZE'));
              abap.statements.readTable(result,{withKey: (i) => {return abap.compare.eq(i.cpdkey, temp3);},
                withKeyValue: [{key: (i) => {return i.cpdkey}, value: temp3}],
                usesTableLine: false,
                withKeySimple: {"cpdkey": temp3}});
              temp15.set(abap.builtin.sy.get().subrc);
              temp6.set(abap.builtin.boolc(abap.compare.eq(temp15, abap.IntegerFactory.get(0))));
              has_method_deserialize.set(temp6);
              temp7.set(abap.builtin.boolc(abap.compare.eq(has_method_get_subschema, abap.builtin.abap_true) && abap.compare.eq(has_method_serialize, abap.builtin.abap_true) && abap.compare.eq(has_method_deserialize, abap.builtin.abap_true)));
              is_valid.set(temp7);
            }
            if (abap.compare.eq(is_valid, abap.builtin.abap_false)) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg106, component_name: component_name});
            }
            return is_valid;
          }
          async validate_default_link(INPUT) {
            let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
            let splitted_link = INPUT?.splitted_link;
            if (splitted_link?.getQualifiedName === undefined || splitted_link.getQualifiedName() !== "STRING_TABLE") { splitted_link = undefined; }
            if (splitted_link === undefined) { splitted_link = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.splitted_link); }
            let fullname_of_type = INPUT?.fullname_of_type;
            if (fullname_of_type?.getQualifiedName === undefined || fullname_of_type.getQualifiedName() !== "STRING") { fullname_of_type = undefined; }
            if (fullname_of_type === undefined) { fullname_of_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_type); }
            let element_type = INPUT?.element_type;
            if (element_type?.getQualifiedName === undefined || element_type.getQualifiedName() !== "ABAP_TYPEKIND") { element_type = undefined; }
            if (element_type === undefined) { element_type = new abap.types.Character(1, {"qualifiedName":"abap_typekind"}).set(INPUT.element_type); }
            let msg = new abap.types.String({qualifiedName: "STRING"});
            let source_name = new abap.types.String({qualifiedName: "STRING"});
            let temp16 = new abap.types.String({qualifiedName: "STRING"});
            let temp17 = new abap.types.Integer({qualifiedName: "I"});
            let constant_name = new abap.types.String({qualifiedName: "STRING"});
            let temp18 = new abap.types.String({qualifiedName: "STRING"});
            let temp19 = new abap.types.Integer({qualifiedName: "I"});
            let component_name = new abap.types.String({qualifiedName: "STRING"});
            let temp20 = new abap.types.String({qualifiedName: "STRING"});
            let temp21 = new abap.types.Integer({qualifiedName: "I"});
            let constant_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
            let components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
            let temp34 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
            let temp35 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
            let row = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {});
            let temp36 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
            let temp22 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
            let temp37 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
            let temp23 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
            if (abap.compare.eq(abap.builtin.lines({val: splitted_link}), abap.IntegerFactory.get(3))) {
              temp17.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: abap.IntegerFactory.get(1),
                into: temp16});
              abap.builtin.sy.get().tabix.set(temp17);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique93 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique93.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 946};
                throw unique93;
              }
              source_name.set(abap.builtin.to_upper({val: temp16}));
              temp19.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: abap.IntegerFactory.get(2),
                into: temp18});
              abap.builtin.sy.get().tabix.set(temp19);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique94 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique94.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 956};
                throw unique94;
              }
              constant_name.set(abap.builtin.to_upper({val: temp18}));
              temp21.set(abap.builtin.sy.get().tabix);
              abap.statements.readTable(splitted_link,{index: abap.IntegerFactory.get(3),
                into: temp20});
              abap.builtin.sy.get().tabix.set(temp21);
              if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                const unique95 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
                unique95.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.abap","INTERNAL_LINE": 966};
                throw unique95;
              }
              component_name.set(abap.builtin.to_upper({val: temp20}));
              constant_description.set((await this.get_constant_as_struc({name_of_source: source_name, name_of_constant: constant_name, fullname_of_type: fullname_of_type})));
              if (abap.compare.initial(constant_description) === false) {
                components.set((await constant_description.get().get_components()));
                abap.statements.clear(temp34);
                abap.statements.readTable(components,{into: temp35,
                  withKey: (i) => {return abap.compare.eq(i.name, component_name);},
                  withKeyValue: [{key: (i) => {return i.name}, value: component_name}],
                  usesTableLine: false,
                  withKeySimple: {"name": component_name}});
                if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
                  temp34.set(temp35);
                }
                row.set(temp34);
                if (abap.compare.initial(row) === false) {
                  if (abap.compare.eq(row.get().type.get().type_kind, element_type)) {
                    is_valid.set(abap.builtin.abap_true);
                  } else {
                    temp36.set(constant_name);
                    temp22.set(fullname_of_type);
                    msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(122), msgv1: temp36, msgv2: temp22})));
                    await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
                  }
                } else {
                  temp37.set(component_name);
                  temp23.set(constant_name);
                  msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(105), msgv1: temp37, msgv2: temp23})));
                  await this.log.get().zif_aff_log$add_warning({message_text: msg, component_name: fullname_of_type});
                }
              }
            }
            return is_valid;
          }
          async is_default_value_valid(INPUT) {
            let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
            let element_description = INPUT?.element_description;
            if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
            if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
            let default_value = INPUT?.default_value;
            if (default_value?.getQualifiedName === undefined || default_value.getQualifiedName() !== "STRING") { default_value = undefined; }
            if (default_value === undefined) { default_value = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.default_value); }
            let fullname_of_type = INPUT?.fullname_of_type;
            if (fullname_of_type?.getQualifiedName === undefined || fullname_of_type.getQualifiedName() !== "STRING") { fullname_of_type = undefined; }
            if (fullname_of_type === undefined) { fullname_of_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.fullname_of_type); }
            let default_ = new abap.types.String({qualifiedName: "STRING"});
            let type = new abap.types.String({qualifiedName: "STRING"});
            let r_field = new abap.types.DataReference(new abap.types.Character(4));
            let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character(4));
            let message_text = new abap.types.String({qualifiedName: "STRING"});
            let string = new abap.types.String({qualifiedName: "STRING"});
            default_.set(default_value);
            abap.statements.replace({target: default_, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`"`)});
            type.set((await this.get_json_type_from_description({element_description: element_description})));
            if (abap.Classes['KERNEL_CREATE_DATA_HANDLE'] === undefined) throw new Error("CreateData, kernel class missing");
            await abap.Classes['KERNEL_CREATE_DATA_HANDLE'].call({handle: element_description, dref: r_field});
            abap.statements.assign({target: fs_field_, source: (r_field).dereference()});
            if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
              message_text.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(117), msgv1: new abap.types.String().set(`UTCLONG`)})));
              await this.log.get().zif_aff_log$add_warning({message_text: message_text, component_name: fullname_of_type});
              is_valid.set(abap.builtin.abap_false);
              return is_valid;
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean)) {
              default_.set(abap.builtin.to_lower({val: default_}));
              if (abap.compare.eq(default_, new abap.types.Character(9).set('abap_true')) || abap.compare.eq(default_, new abap.types.Character(1).set('x')) || abap.compare.eq(default_, new abap.types.Character(10).set('abap_false')) || abap.compare.eq(default_, new abap.types.Character(1).set(''))) {
                is_valid.set(abap.builtin.abap_true);
              }
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string) || abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time)) {
              try {
                fs_field_.set(default_);
                string.set(fs_field_);
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_num) || abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_numeric)) {
                  abap.statements.shift(string, {direction: 'LEFT',deletingLeading: new abap.types.Character(1).set('0')});
                }
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_time)) {
                  default_.set(abap.operators.concat(default_,abap.builtin.repeat({val: new abap.types.Character(1).set('0'), occ: abap.operators.minus(abap.IntegerFactory.get(6),abap.builtin.strlen({val: default_}))})));
                }
                if (abap.compare.eq(element_description.get().type_kind, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_utclong)) {
                  abap.statements.replace({target: default_, all: false, with: new abap.types.String().set(` `), pcre: new abap.types.String().set(`T|t`)});
                }
                await this.remove_leading_trailing_spaces({string_to_work_on: string});
                await this.remove_leading_trailing_spaces({string_to_work_on: default_});
                if (abap.compare.eq(string, default_)) {
                  is_valid.set(abap.builtin.abap_true);
                } else {
                  is_valid.set(abap.builtin.abap_false);
                }
              } catch (e) {
                if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
                  is_valid.set(abap.builtin.abap_false);
                } else {
                  throw e;
                }
              }
            } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric)) {
              try {
                fs_field_.set(default_);
                if (abap.compare.eq(abap.operators.minus(fs_field_,default_), abap.IntegerFactory.get(0))) {
                  is_valid.set(abap.builtin.abap_true);
                } else {
                  is_valid.set(abap.builtin.abap_false);
                }
              } catch (e) {
                if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
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
            let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
            let source = INPUT?.source;
            if (source?.getQualifiedName === undefined || source.getQualifiedName() !== "STRING_TABLE") { source = undefined; }
            if (source === undefined) { source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.source); }
            let log = INPUT?.log;
            if (log?.getQualifiedName === undefined || log.getQualifiedName() !== "ZIF_AFF_LOG") { log = undefined; }
            if (log === undefined) { log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log); }
            result.set(abap.builtin.abap_true);
            return result;
          }
          async zif_aff_writer$close_include() {
            await this.delete_first_of_struc_stack();
          }
          async zif_aff_writer$open_include(INPUT) {
            let include_description = INPUT?.include_description;
            if (include_description?.getQualifiedName === undefined || include_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { include_description = undefined; }
            if (include_description === undefined) { include_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.include_description); }
            let temp38 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
            abap.statements.clear(temp38);
            temp38.get().absolute_name.set(include_description.get().absolute_name);
            abap.statements.insertInternal({data: temp38, index: abap.IntegerFactory.get(1), table: this.me.get().stack_of_structure});
          }
          async is_sy_langu(INPUT) {
            let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
            let element_description = INPUT?.element_description;
            if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
            if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
            let temp39 = new abap.types.Character(1, {"qualifiedName":"sy-langu","conversionExit":"ISOLA"});
            let temp24 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
            let sy_langu_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
            let temp8 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
            abap.statements.clear(temp39);
            await abap.statements.cast(temp24, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: temp39})));
            sy_langu_description.set(temp24);
            temp8.set(abap.builtin.boolc(abap.compare.eq(sy_langu_description.get().edit_mask, element_description.get().edit_mask)));
            result.set(temp8);
            return result;
          }
          async clear_type_specifics() {
            abap.statements.clear(this.abap_doc);
            abap.statements.clear(this.fullname_of_type);
          }
          async check_redundant_annotations() {
            let msg = new abap.types.String({qualifiedName: "STRING"});
            if (abap.compare.eq(this.abap_doc.get().showalways, abap.builtin.abap_true) && abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true)) {
              msg.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(112)})));
              await this.log.get().zif_aff_log$add_info({message_text: msg, component_name: this.fullname_of_type});
            }
            if (abap.compare.initial(this.abap_doc.get().enumvalues_link) && abap.compare.eq(this.abap_doc.get().required, abap.builtin.abap_true) && abap.compare.initial(this.abap_doc.get().default_) === false) {
              await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg126, component_name: this.fullname_of_type});
            }
          }
        }
        abap.Classes['ZCL_AFF_WRITER'] = zcl_aff_writer;
        zcl_aff_writer.c_indent_number_characters = new abap.types.Integer({qualifiedName: "I"});
        zcl_aff_writer.c_indent_number_characters.set(2);
        zcl_aff_writer.c_abap_types = new abap.types.Structure({"boolean": new abap.types.String({qualifiedName: "STRING"}), "timestamp": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
        zcl_aff_writer.c_abap_types.get().boolean.set(`ABAP_BOOLEAN;ABAP_BOOL;BOOLEAN;BOOLE_D;XFELD;XSDBOOLEAN;FLAG`);
        zcl_aff_writer.c_abap_types.get().timestamp.set(`TIMESTAMP;TIMESTAMPL`);
        zcl_aff_writer.zif_aff_writer$type_info = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "STRING"}), "numeric": new abap.types.String({qualifiedName: "STRING"}), "boolean": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
        zcl_aff_writer.zif_aff_writer$type_info.get().string.set('string');
        zcl_aff_writer.zif_aff_writer$type_info.get().numeric.set('numeric');
        zcl_aff_writer.zif_aff_writer$type_info.get().boolean.set('boolean');
        zcl_aff_writer.zif_aff_writer$type_info.get().date_time.set('date_time');
        zcl_aff_writer.zif_aff_writer$operation = new abap.types.Structure({"initial": new abap.types.String({qualifiedName: "STRING"}), "write_element": new abap.types.String({qualifiedName: "STRING"}), "open_structure": new abap.types.String({qualifiedName: "STRING"}), "close_structure": new abap.types.String({qualifiedName: "STRING"}), "open_table": new abap.types.String({qualifiedName: "STRING"}), "close_table": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
        zcl_aff_writer.zif_aff_writer$operation.get().initial.set('initial');
        zcl_aff_writer.zif_aff_writer$operation.get().write_element.set('write_element');
        zcl_aff_writer.zif_aff_writer$operation.get().open_structure.set('open_structure');
        zcl_aff_writer.zif_aff_writer$operation.get().close_structure.set('close_structure');
        zcl_aff_writer.zif_aff_writer$operation.get().open_table.set('open_table');
        zcl_aff_writer.zif_aff_writer$operation.get().close_table.set('close_table');
        zcl_aff_writer.ty_stack_entry = new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {});
        zcl_aff_writer.ty_structure_stack = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
        zcl_aff_writer.tt_structure_stack = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>tt_structure_stack");
        zcl_aff_writer.temp1_f81e03d158 = abap.types.TableFactory.construct(new abap.types.Structure({"operation": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-OPERATION"}), "name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STACK_ENTRY-NAME"})}, "zcl_aff_writer=>ty_stack_entry", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>temp1_f81e03d158");
export {zcl_aff_writer};
//# sourceMappingURL=zcl_aff_writer.clas.mjs.map