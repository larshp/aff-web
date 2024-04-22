const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_parser.clas.abap
class zcl_aff_abap_doc_parser {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_ABAP_DOC_PARSER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"ABAP_DOC_STRING": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "PARSER_LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "DECODED_ABAP_DOC": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "DESCRIPTION_WARNING_IS_NEEDED": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "ABAP_DOC_ANNOTATION": {"type": () => {return new abap.types.Structure({"callback_class": new abap.types.String({qualifiedName: "STRING"}), "default_": new abap.types.String({qualifiedName: "STRING"}), "values": new abap.types.String({qualifiedName: "STRING"}), "required": new abap.types.String({qualifiedName: "STRING"}), "show_always": new abap.types.String({qualifiedName: "STRING"}), "minimum": new abap.types.String({qualifiedName: "STRING"}), "maximum": new abap.types.String({qualifiedName: "STRING"}), "exclusive_minimum": new abap.types.String({qualifiedName: "STRING"}), "exclusive_maximum": new abap.types.String({qualifiedName: "STRING"}), "max_length": new abap.types.String({qualifiedName: "STRING"}), "min_length": new abap.types.String({qualifiedName: "STRING"}), "multiple_of": new abap.types.String({qualifiedName: "STRING"}), "content_media_type": new abap.types.String({qualifiedName: "STRING"}), "content_encoding": new abap.types.String({qualifiedName: "STRING"}), "enum_value": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_SHORTTEXT_TAG_OPEN": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"PARSE_TITLE": {"visibility": "I", "parameters": {}},
  "PARSE_DESCRIPTION": {"visibility": "I", "parameters": {}},
  "REMOVE_LEADING_TRAILING_SPACES": {"visibility": "I", "parameters": {"STRING_TO_WORK_ON": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PARSE_ANNOTATIONS": {"visibility": "I", "parameters": {}},
  "PARSE_CALLBACK_CLASS": {"visibility": "I", "parameters": {}},
  "GET_ANNOTATION_VALUE": {"visibility": "I", "parameters": {"ANNOTATION_VALUE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "LENGTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "OFFSET": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "TO_DECODE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "LENGTH_OF_ANNOTATION": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "REMOVE_WHITESPACES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});}, "is_optional": " "}}},
  "PARSE_DEFAULT": {"visibility": "I", "parameters": {}},
  "PARSE_ENUM_VALUES": {"visibility": "I", "parameters": {}},
  "PARSE_REQUIRED": {"visibility": "I", "parameters": {}},
  "PARSE_CONTENT_ENCODING": {"visibility": "I", "parameters": {}},
  "PARSE_CONTENT_MEDIA_TYPE": {"visibility": "I", "parameters": {}},
  "PARSE_SHOW_ALWAYS": {"visibility": "I", "parameters": {}},
  "PARSE_NUMBER_ANNOTATIONS": {"visibility": "I", "parameters": {"KEY_WORD": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_NUMBER_ANNOTATION": {"visibility": "I", "parameters": {"NUMBER": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ANNOTATION_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CHECK_NEXT_WORD": {"visibility": "I", "parameters": {"OFFSET": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "is_optional": " "}, "TEXT_TO_CHECK": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "WRITE_DESCRIPTION_MESSAGE": {"visibility": "I", "parameters": {}},
  "WORKAROUND_REMOVE_TITLES": {"visibility": "I", "parameters": {}},
  "CHECK_TITLE_POSITIONS": {"visibility": "I", "parameters": {}},
  "PARSE_ENUM_VALUE": {"visibility": "I", "parameters": {}},
  "WRITE_LOG_FOR_MULTIPLE_ENTRIES": {"visibility": "I", "parameters": {"RESULT_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");}, "is_optional": " "}, "ANNOTAION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PARSE": {"visibility": "U", "parameters": {"FOUND_ABAP_DOC": {"type": () => {return new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "TO_PARSE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.abap_doc_string = new abap.types.String({qualifiedName: "STRING"});
    this.parser_log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    this.component_name = new abap.types.String({qualifiedName: "STRING"});
    this.decoded_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    this.description_warning_is_needed = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    this.abap_doc_annotation = zcl_aff_abap_doc_parser.abap_doc_annotation;
    this.co_shorttext_tag_open = zcl_aff_abap_doc_parser.co_shorttext_tag_open;
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async parse(INPUT) {
    let found_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    let to_parse = INPUT?.to_parse;
    if (to_parse?.getQualifiedName === undefined || to_parse.getQualifiedName() !== "STRING") { to_parse = undefined; }
    if (to_parse === undefined) { to_parse = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.to_parse); }
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    if (INPUT && INPUT.log) {log = INPUT.log;}
    abap.statements.clear(this.description_warning_is_needed);
    abap.statements.clear(this.decoded_abap_doc);
    this.abap_doc_string.set(to_parse);
    this.me.get().component_name.set(component_name);
    this.parser_log.set(log);
    await this.parse_title();
    await this.parse_annotations();
    await this.parse_description();
    found_abap_doc.set(this.decoded_abap_doc);
    await this.write_description_message();
    return found_abap_doc;
  }
  async parse_title() {
    abap.statements.replace({target: this.abap_doc_string, all: true, with: new abap.types.String().set(`<p class="shorttext">`), pcre: new abap.types.String().set(`[\\s]*(<p[\\s]+class="shorttext([\\s]+synchronized)?"([\\s]+lang="[a-zA-Z]{2}")?[\\s]*>)[\\s]*`)});
    this.decoded_abap_doc.get().title.set(abap.builtin.substring_after({val: this.abap_doc_string, pcre: zcl_aff_abap_doc_parser.co_shorttext_tag_open}));
    if ((abap.compare.initial(this.decoded_abap_doc.get().title) === false)) {
      this.decoded_abap_doc.get().title.set(abap.builtin.substring_before({val: this.decoded_abap_doc.get().title, sub: new abap.types.Character(4).set('</p>')}));
      await this.remove_leading_trailing_spaces({string_to_work_on: this.decoded_abap_doc.get().title});
    }
    await this.check_title_positions();
    await this.workaround_remove_titles();
  }
  async check_title_positions() {
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if ((abap.compare.gt(abap.builtin.count({val: this.abap_doc_string, pcre: zcl_aff_abap_doc_parser.co_shorttext_tag_open}), abap.IntegerFactory.get(1)))) {
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(107), msgv1: new abap.types.String().set(`'Title'`)})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
    if ((abap.compare.gt(abap.builtin.find({val: this.abap_doc_string, pcre: zcl_aff_abap_doc_parser.co_shorttext_tag_open}), abap.IntegerFactory.get(0)))) {
      await this.parser_log.get().zif_aff_log$add_info({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg113, component_name: this.component_name});
    }
  }
  async workaround_remove_titles() {
    let start_offset = new abap.types.Integer({qualifiedName: "I"});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique2 = 1;
    while ((abap.compare.eq(abap.builtin.boolc({val: abap.builtin.matches({val: this.abap_doc_string, pcre: new abap.types.String().set(`.*[\\s]*<p\\sclass="shorttext">.*`)})}), abap.builtin.abap_true))) {
      abap.builtin.sy.get().index.set(unique2++);
      start_offset.set(abap.builtin.find({val: this.abap_doc_string, pcre: zcl_aff_abap_doc_parser.co_shorttext_tag_open, occ: abap.IntegerFactory.get(1)}));
      this.abap_doc_string.set(abap.operators.concat(this.abap_doc_string.getOffset({length: start_offset}),abap.builtin.substring_after({val: this.abap_doc_string.getOffset({offset: start_offset}), sub: new abap.types.String().set(`</p>`)})));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async parse_description() {
    let offset = new abap.types.Integer({qualifiedName: "I"});
    let description = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.find(this.abap_doc_string, {pcre: new abap.types.String().set(`(\\$callbackClass|\\$default|\\$values|\\$required|\\$showAlways|\\$minimum|\\$maximum|\\$exclusiveMinimum|\\$exclusiveMaximum|\\$multipleOf|\\$maxLength|\\$minLength|\\$enumValue|\\$contentMediaType|\\$contentEncoding)`), first: true, offset: offset});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      description.set(this.abap_doc_string.getOffset({offset: 0, length: offset}));
      await this.remove_leading_trailing_spaces({string_to_work_on: description});
      this.decoded_abap_doc.get().description.set(description);
    } else {
      await this.remove_leading_trailing_spaces({string_to_work_on: this.abap_doc_string});
      this.decoded_abap_doc.get().description.set(this.abap_doc_string);
    }
  }
  async parse_annotations() {
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let modified_abap_doc_string = new abap.types.String({qualifiedName: "STRING"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    let offset = new abap.types.Integer({qualifiedName: "I"});
    let length = new abap.types.Integer({qualifiedName: "I"});
    let key_word = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.find(this.abap_doc_string, {pcre: new abap.types.String().set(`\\$[a-zA-Z]+`), first: false, results: result_table});
    modified_abap_doc_string.set(this.abap_doc_string);
    for await (const unique3 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique3);
      offset.set(fs_entry_.get().offset);
      length.set(fs_entry_.get().length);
      key_word.set(this.abap_doc_string.getOffset({offset: offset, length: length}));
      let unique4 = key_word;
      if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class)) {
        await this.parse_callback_class();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_)) {
        await this.parse_default();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().values)) {
        await this.parse_enum_values();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().required)) {
        await this.parse_required();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always)) {
        await this.parse_show_always();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().minimum) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().maximum) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_minimum) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_maximum) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().max_length) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().multiple_of) || abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().min_length)) {
        await this.parse_number_annotations({key_word: key_word});
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value)) {
        await this.parse_enum_value();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_encoding)) {
        await this.parse_content_encoding();
      } else if (abap.compare.eq(unique4, zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_media_type)) {
        await this.parse_content_media_type();
      } else {
        abap.statements.replace({target: modified_abap_doc_string, all: false, with: new abap.types.Character(1).set(''), of: key_word});
        temp1.set(key_word);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(108), msgv1: temp1})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      }
    }
    this.abap_doc_string.set(modified_abap_doc_string);
  }
  async parse_callback_class() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let temp2 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let temp4 = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    if (abap.compare.initial(this.decoded_abap_doc.get().callback_class) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target: string_to_parse, all: true, with: new abap.types.String().set(`\\$callbackClass\\{@link`), pcre: new abap.types.String().set(`\\$callbackClass[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {pcre: new abap.types.String().set(`\\$callbackClass\\{@link[^\\}]+\\}`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), abap.IntegerFactory.get(0))) {
      temp2.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp2})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class});
    temp3.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: abap.IntegerFactory.get(1),
      into: temp1});
    abap.builtin.sy.get().tabix.set(temp3);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique5 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique5.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 275};
      throw unique5;
    }
    offset_found.set(temp1.get().offset);
    temp5.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: abap.IntegerFactory.get(1),
      into: temp4});
    abap.builtin.sy.get().tabix.set(temp5);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique6 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique6.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 285};
      throw unique6;
    }
    length_found.set(temp4.get().length);
    this.decoded_abap_doc.get().callback_class.set((await this.get_annotation_value({length: abap.operators.minus(length_found,abap.IntegerFactory.get(1)), offset: offset_found, to_decode: string_to_parse, length_of_annotation: abap.IntegerFactory.get(20), remove_whitespaces: abap.builtin.abap_true})));
    for await (const unique7 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique7);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: string_to_parse});
    }
  }
  async get_annotation_value(INPUT) {
    let annotation_value = new abap.types.String({qualifiedName: "STRING"});
    let length = INPUT?.length;
    if (length?.getQualifiedName === undefined || length.getQualifiedName() !== "I") { length = undefined; }
    if (length === undefined) { length = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.length); }
    let offset = INPUT?.offset;
    if (offset?.getQualifiedName === undefined || offset.getQualifiedName() !== "I") { offset = undefined; }
    if (offset === undefined) { offset = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.offset); }
    let to_decode = INPUT?.to_decode;
    if (to_decode?.getQualifiedName === undefined || to_decode.getQualifiedName() !== "STRING") { to_decode = undefined; }
    if (to_decode === undefined) { to_decode = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.to_decode); }
    let length_of_annotation = INPUT?.length_of_annotation;
    if (length_of_annotation?.getQualifiedName === undefined || length_of_annotation.getQualifiedName() !== "I") { length_of_annotation = undefined; }
    if (length_of_annotation === undefined) { length_of_annotation = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.length_of_annotation); }
    let remove_whitespaces = INPUT?.remove_whitespaces;
    if (remove_whitespaces?.getQualifiedName === undefined || remove_whitespaces.getQualifiedName() !== "ABAP_BOOLEAN") { remove_whitespaces = undefined; }
    if (remove_whitespaces === undefined) { remove_whitespaces = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"}).set(INPUT.remove_whitespaces); }
    let step = new abap.types.Integer({qualifiedName: "I"});
    let length_of_annotation_value = new abap.types.Integer({qualifiedName: "I"});
    let value = new abap.types.String({qualifiedName: "STRING"});
    step.set(abap.operators.add(offset,length_of_annotation));
    length_of_annotation_value.set(abap.operators.minus(length,length_of_annotation));
    value.set(to_decode.getOffset({offset: step, length: length_of_annotation_value}));
    if (abap.compare.eq(remove_whitespaces, abap.builtin.abap_true)) {
      await this.remove_leading_trailing_spaces({string_to_work_on: value});
    }
    annotation_value.set(value);
    return annotation_value;
  }
  async parse_default() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table_value = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let result_table_link = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let mixed_result_table = abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["OFFSET"]},"secondary":[]}, "zcl_aff_abap_doc_parser=>tt_mixed_table_entry");
    let fs_default_value_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    let temp3 = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {});
    let fs_default_link_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    let temp4 = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {});
    let temp5 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let warning_set = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {}));
    let link = new abap.types.String({qualifiedName: "STRING"});
    let link_for_testing = new abap.types.String({qualifiedName: "STRING"});
    let splitted = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp7 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (abap.compare.initial(this.decoded_abap_doc.get().default_) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target: string_to_parse, all: true, with: new abap.types.String().set(`\\$default'`), pcre: new abap.types.String().set(`\\$default[\\s]*(:[\\s]*)?'`)});
    abap.statements.replace({target: string_to_parse, all: true, with: new abap.types.String().set(`\\$default\\{@link`), pcre: new abap.types.String().set(`\\$default[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {pcre: new abap.types.String().set(`\\$default'[^']*'`), first: false, results: result_table_value});
    abap.statements.find(string_to_parse, {pcre: new abap.types.String().set(`\\$default\\{@link[^\\}]+\\}`), first: false, results: result_table_link});
    for await (const unique8 of abap.statements.loop(result_table_value)) {
      fs_default_value_.assign(unique8);
      abap.statements.clear(temp3);
      temp3.get().offset.set(fs_default_value_.get().offset);
      temp3.get().length.set(fs_default_value_.get().length);
      temp3.get().is_link.set(abap.builtin.abap_false);
      abap.statements.insertInternal({data: temp3, table: mixed_result_table});
    }
    for await (const unique9 of abap.statements.loop(result_table_link)) {
      fs_default_link_.assign(unique9);
      abap.statements.clear(temp4);
      temp4.get().offset.set(fs_default_link_.get().offset);
      temp4.get().length.set(fs_default_link_.get().length);
      temp4.get().is_link.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp4, table: mixed_result_table});
    }
    if (abap.compare.eq(abap.builtin.lines({val: mixed_result_table}), abap.IntegerFactory.get(0))) {
      temp5.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp5})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    if (abap.compare.gt(abap.builtin.lines({val: mixed_result_table}), abap.IntegerFactory.get(1))) {
      temp6.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(107), msgv1: temp6})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
    warning_set.set(abap.builtin.abap_false);
    for await (const unique10 of abap.statements.loop(mixed_result_table)) {
      fs_entry_.assign(unique10);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: string_to_parse});
      if (abap.compare.eq(fs_entry_.get().is_link, abap.builtin.abap_false) && abap.compare.initial(this.decoded_abap_doc.get().default_)) {
        this.decoded_abap_doc.get().default_.set(abap.operators.concat(new abap.types.String().set(`"`),abap.operators.concat((await this.get_annotation_value({length: abap.operators.minus(fs_entry_.get().length,abap.IntegerFactory.get(1)), offset: fs_entry_.get().offset, to_decode: string_to_parse, length_of_annotation: abap.IntegerFactory.get(9), remove_whitespaces: abap.builtin.abap_false})),new abap.types.String().set(`"`))));
      } else if (abap.compare.eq(fs_entry_.get().is_link, abap.builtin.abap_true) && abap.compare.initial(this.decoded_abap_doc.get().default_)) {
        link.set((await this.get_annotation_value({length: abap.operators.minus(fs_entry_.get().length,abap.IntegerFactory.get(1)), offset: fs_entry_.get().offset, to_decode: string_to_parse, length_of_annotation: abap.IntegerFactory.get(9), remove_whitespaces: abap.builtin.abap_true})));
        link_for_testing.set(link);
        abap.statements.replace({target: link_for_testing, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`\\s`)});
        abap.statements.replace({target: link_for_testing, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`(@link|data:)`)});
        abap.statements.split({source: link_for_testing, at: new abap.types.Character(1).set('.'), table: splitted});
        if (abap.compare.eq(abap.builtin.lines({val: splitted}), abap.IntegerFactory.get(3))) {
          this.decoded_abap_doc.get().default_.set(link);
        } else if (abap.compare.eq(warning_set, abap.builtin.abap_false)) {
          temp7.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
          msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(111), msgv1: temp7})));
          await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
          warning_set.set(abap.builtin.abap_true);
        }
      }
    }
  }
  async parse_enum_values() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let temp8 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let warning_written = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let link = new abap.types.String({qualifiedName: "STRING"});
    let link_for_testing = new abap.types.String({qualifiedName: "STRING"});
    let splitted = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp9 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (abap.compare.initial(this.decoded_abap_doc.get().enumvalues_link) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target: string_to_parse, all: true, with: new abap.types.String().set(`\\$values\\{@link`), pcre: new abap.types.String().set(`\\$values[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {pcre: new abap.types.String().set(`\\$values\\{@link([^\\}]+)\\}`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), abap.IntegerFactory.get(0))) {
      temp8.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp8})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().values});
    warning_written.set(abap.builtin.abap_false);
    for await (const unique11 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique11);
      offset_found.set(fs_entry_.get().offset);
      length_found.set(fs_entry_.get().length);
      link.set((await this.get_annotation_value({length: abap.operators.minus(length_found,abap.IntegerFactory.get(1)), offset: offset_found, to_decode: string_to_parse, length_of_annotation: abap.IntegerFactory.get(13), remove_whitespaces: abap.builtin.abap_true})));
      await this.check_next_word({offset: abap.operators.add(offset_found,length_found), text_to_check: string_to_parse});
      link_for_testing.set(link);
      abap.statements.replace({target: link_for_testing, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`\\s`)});
      abap.statements.replace({target: link_for_testing, all: true, with: new abap.types.String().set(``), pcre: new abap.types.String().set(`data:`)});
      abap.statements.split({source: link_for_testing, at: new abap.types.Character(1).set('.'), table: splitted});
      if (abap.compare.eq(abap.builtin.lines({val: splitted}), abap.IntegerFactory.get(2)) && abap.compare.initial(this.decoded_abap_doc.get().enumvalues_link)) {
        this.decoded_abap_doc.get().enumvalues_link.set(link);
      } else if (abap.compare.ne(abap.builtin.lines({val: splitted}), abap.IntegerFactory.get(2)) && abap.compare.eq(warning_written, abap.builtin.abap_false)) {
        temp9.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(111), msgv1: temp9})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
        warning_written.set(abap.builtin.abap_true);
      }
    }
  }
  async parse_required() {
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    if (abap.compare.initial(this.decoded_abap_doc.get().required) === false) {
      return;
    }
    abap.statements.find(this.abap_doc_string, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().required, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().required});
    this.decoded_abap_doc.get().required.set(abap.builtin.abap_true);
    for await (const unique12 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique12);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: this.abap_doc_string});
    }
  }
  async parse_content_encoding() {
    let abap_doc = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let content_encoding_occurrences = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let match = abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB");
    let first_match = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let temp6 = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let temp7 = new abap.types.Integer({qualifiedName: "I"});
    let temp10 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    abap_doc.set(this.abap_doc_string);
    if (abap.compare.initial(this.decoded_abap_doc.get().content_encoding) === false) {
      return;
    }
    abap.statements.find(this.abap_doc_string, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_encoding, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_encoding});
    abap.statements.replace({target: abap_doc, all: false, with: new abap.types.String().set(`\\$contentEncoding'`), pcre: new abap.types.String().set(`\\$contentEncoding[\\s]*'`)});
    abap.statements.find(abap_doc, {pcre: new abap.types.String().set(`\\$contentEncoding'([^']*)'`), first: true, results: content_encoding_occurrences});
    match.set(content_encoding_occurrences.get().submatches);
    if (abap.compare.ge(abap.builtin.lines({val: match}), abap.IntegerFactory.get(1))) {
      temp7.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(match,{index: abap.IntegerFactory.get(1),
        into: temp6});
      abap.builtin.sy.get().tabix.set(temp7);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique13 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique13.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 515};
        throw unique13;
      }
      first_match.set(temp6);
      this.decoded_abap_doc.get().content_encoding.set(abap_doc.getOffset({offset: first_match.get().offset, length: first_match.get().length}));
    } else {
      temp10.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_encoding);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp10})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
    }
  }
  async parse_content_media_type() {
    let abap_doc = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let content_media_type_occurrences = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let match = abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB");
    let first_match = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let temp8 = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {});
    let temp9 = new abap.types.Integer({qualifiedName: "I"});
    let temp11 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    abap_doc.set(this.abap_doc_string);
    if (abap.compare.initial(this.decoded_abap_doc.get().content_media_type) === false) {
      return;
    }
    abap.statements.find(abap_doc, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_media_type, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_media_type});
    abap.statements.replace({target: abap_doc, all: false, with: new abap.types.String().set(`\\$contentMediaType'`), pcre: new abap.types.String().set(`\\$contentMediaType[\\s]*'`)});
    abap.statements.find(abap_doc, {pcre: new abap.types.String().set(`\\$contentMediaType'([^']*)'`), first: true, results: content_media_type_occurrences});
    match.set(content_media_type_occurrences.get().submatches);
    if (abap.compare.ge(abap.builtin.lines({val: match}), abap.IntegerFactory.get(1))) {
      temp9.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(match,{index: abap.IntegerFactory.get(1),
        into: temp8});
      abap.builtin.sy.get().tabix.set(temp9);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique14 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique14.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 560};
        throw unique14;
      }
      first_match.set(temp8);
      this.decoded_abap_doc.get().content_media_type.set(abap_doc.getOffset({offset: first_match.get().offset, length: first_match.get().length}));
    } else {
      temp11.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_media_type);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp11})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
    }
  }
  async parse_show_always() {
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    if (abap.compare.initial(this.decoded_abap_doc.get().showalways) === false) {
      return;
    }
    abap.statements.find(this.abap_doc_string, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always});
    this.decoded_abap_doc.get().showalways.set(abap.builtin.abap_true);
    for await (const unique15 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique15);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: this.abap_doc_string});
    }
  }
  async parse_number_annotations(INPUT) {
    let key_word = INPUT?.key_word;
    if (key_word?.getQualifiedName === undefined || key_word.getQualifiedName() !== "STRING") { key_word = undefined; }
    if (key_word === undefined) { key_word = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.key_word); }
    let unique16 = key_word;
    if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().minimum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().minimum)) {
        this.decoded_abap_doc.get().minimum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().maximum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().maximum)) {
        this.decoded_abap_doc.get().maximum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_minimum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().exclusive_minimum)) {
        this.decoded_abap_doc.get().exclusive_minimum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_maximum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().exclusive_maximum)) {
        this.decoded_abap_doc.get().exclusive_maximum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().multiple_of)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().multiple_of)) {
        this.decoded_abap_doc.get().multiple_of.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().min_length)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().min_length)) {
        this.decoded_abap_doc.get().min_length.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique16, zcl_aff_abap_doc_parser.abap_doc_annotation.get().max_length)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().max_length)) {
        this.decoded_abap_doc.get().max_length.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    }
  }
  async get_number_annotation(INPUT) {
    let number = new abap.types.String({qualifiedName: "STRING"});
    let annotation_name = INPUT?.annotation_name;
    if (annotation_name?.getQualifiedName === undefined || annotation_name.getQualifiedName() !== "STRING") { annotation_name = undefined; }
    if (annotation_name === undefined) { annotation_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.annotation_name); }
    let abap_doc = new abap.types.String({qualifiedName: "STRING"});
    let dummy_annotation = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let temp12 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let annotation_length = new abap.types.Integer({qualifiedName: "I"});
    let pcre_of_number_expressions = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX", RTTIName: "\\CLASS=CL_ABAP_REGEX"});
    let warning_written = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let begin_of_number = new abap.types.Integer({qualifiedName: "I"});
    let length_of_number = new abap.types.Integer({qualifiedName: "I"});
    let number_candidate = new abap.types.String({qualifiedName: "STRING"});
    let matcher = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_MATCHER", RTTIName: "\\CLASS=CL_ABAP_MATCHER"});
    let match = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp13 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    abap_doc.set(this.abap_doc_string);
    dummy_annotation.set(new abap.types.String().set(`$dummyannotation`));
    abap.statements.replace({target: abap_doc, all: true, with: dummy_annotation, of: annotation_name});
    abap.statements.replace({target: abap_doc, all: true, with: new abap.types.String().set(`\\$dummyannotation`), pcre: new abap.types.String().set(`\\$dummyannotation[\\s]*(:[\\s]*)?`)});
    abap.statements.find(abap_doc, {pcre: new abap.types.String().set(`\\$dummyannotation[^\\s]+`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), abap.IntegerFactory.get(0))) {
      temp12.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp12})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return number;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: annotation_name});
    annotation_length.set(abap.builtin.strlen({val: dummy_annotation}));
    pcre_of_number_expressions.set((await abap.Classes['CL_ABAP_REGEX'].create_pcre({pattern: new abap.types.String().set(`(\\+|-)?[0-9]+(.[0-9]+)?(e(\\+|-)?[0-9]+)?`), ignore_case: abap.builtin.abap_true})));
    warning_written.set(abap.builtin.abap_false);
    for await (const unique17 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique17);
      offset_found.set(fs_entry_.get().offset);
      length_found.set(fs_entry_.get().length);
      begin_of_number.set(abap.operators.add(offset_found,annotation_length));
      length_of_number.set(abap.operators.minus(length_found,annotation_length));
      number_candidate.set(abap_doc.getOffset({offset: begin_of_number, length: length_of_number}));
      await this.remove_leading_trailing_spaces({string_to_work_on: number_candidate});
      matcher.set((await pcre_of_number_expressions.get().create_matcher({text: number_candidate})));
      match.set((await matcher.get().match()));
      await this.check_next_word({offset: abap.operators.add(offset_found,length_found), text_to_check: abap_doc});
      if (abap.compare.eq(match, abap.builtin.abap_true) && abap.compare.initial(number)) {
        number.set(number_candidate);
      } else if (abap.compare.eq(match, abap.builtin.abap_false) && abap.compare.eq(warning_written, abap.builtin.abap_false)) {
        temp13.set(annotation_name);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(110), msgv1: temp13})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
        warning_written.set(abap.builtin.abap_true);
      }
    }
    return number;
  }
  async parse_enum_value() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB");
    let temp14 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let temp10 = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let temp11 = new abap.types.Integer({qualifiedName: "I"});
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let temp12 = new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {});
    let temp13 = new abap.types.Integer({qualifiedName: "I"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}));
    if (abap.compare.initial(this.decoded_abap_doc.get().enum_value) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target: string_to_parse, all: true, with: new abap.types.String().set(`\\$enumValue'`), pcre: new abap.types.String().set(`\\$enumValue[\\s]*(:[\\s]*)?'`)});
    abap.statements.find(string_to_parse, {pcre: new abap.types.String().set(`\\$enumValue'[^']*'`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), abap.IntegerFactory.get(0))) {
      temp14.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp14})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value});
    temp11.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: abap.IntegerFactory.get(1),
      into: temp10});
    abap.builtin.sy.get().tabix.set(temp11);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique18 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique18.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 732};
      throw unique18;
    }
    offset_found.set(temp10.get().offset);
    temp13.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: abap.IntegerFactory.get(1),
      into: temp12});
    abap.builtin.sy.get().tabix.set(temp13);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique19 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique19.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_abap_doc_parser.clas.abap","INTERNAL_LINE": 742};
      throw unique19;
    }
    length_found.set(temp12.get().length);
    this.decoded_abap_doc.get().enum_value.set((await this.get_annotation_value({length: abap.operators.minus(length_found,abap.IntegerFactory.get(1)), offset: offset_found, to_decode: string_to_parse, length_of_annotation: abap.IntegerFactory.get(11), remove_whitespaces: abap.builtin.abap_true})));
    for await (const unique20 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique20);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: string_to_parse});
    }
  }
  async remove_leading_trailing_spaces(INPUT) {
    let string_to_work_on = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string_to_work_on) {string_to_work_on = INPUT.string_to_work_on;}
    abap.statements.shift(string_to_work_on, {direction: 'RIGHT',deletingTrailing: abap.builtin.space});
    abap.statements.shift(string_to_work_on, {direction: 'LEFT',deletingLeading: abap.builtin.space});
  }
  async check_next_word(INPUT) {
    let offset = INPUT?.offset;
    if (offset?.getQualifiedName === undefined || offset.getQualifiedName() !== "I") { offset = undefined; }
    if (offset === undefined) { offset = new abap.types.Integer({qualifiedName: "I"}).set(INPUT.offset); }
    let text_to_check = INPUT?.text_to_check;
    if (text_to_check?.getQualifiedName === undefined || text_to_check.getQualifiedName() !== "STRING") { text_to_check = undefined; }
    if (text_to_check === undefined) { text_to_check = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.text_to_check); }
    let current_offset = new abap.types.Integer({qualifiedName: "I"});
    let next_word = new abap.types.String({qualifiedName: "STRING"});
    let next_char = new abap.types.Character(1, {});
    let pcre_of_letter = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX", RTTIName: "\\CLASS=CL_ABAP_REGEX"});
    if (abap.compare.eq(this.description_warning_is_needed, abap.builtin.abap_true)) {
      return;
    }
    current_offset.set(offset);
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique21 = 1;
    while (abap.compare.eq(next_char, abap.builtin.space) && abap.compare.lt(current_offset, abap.builtin.strlen({val: text_to_check}))) {
      abap.builtin.sy.get().index.set(unique21++);
      next_char.set(text_to_check.getOffset({offset: current_offset, length: 1}));
      current_offset.set(abap.operators.add(current_offset,abap.IntegerFactory.get(1)));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    next_word.set(next_char);
    if (abap.compare.ge(current_offset, abap.builtin.strlen({val: text_to_check}))) {
      return;
    }
    pcre_of_letter.set((await abap.Classes['CL_ABAP_REGEX'].create_pcre({pattern: new abap.types.String().set(`[a-zA-Z]`)})));
    const indexBackup2 = abap.builtin.sy.get().index.get();
    let unique22 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique22++);
      next_char.set(text_to_check.getOffset({offset: current_offset, length: 1}));
      current_offset.set(abap.operators.add(current_offset,abap.IntegerFactory.get(1)));
      next_word.set(abap.operators.concat(next_word,next_char));
      if (abap.compare.eq((await (await pcre_of_letter.get().create_matcher({text: next_char})).get().match()), abap.builtin.abap_false) || abap.compare.ge(current_offset, abap.builtin.strlen({val: text_to_check}))) {
        break;
      }
    }
    abap.builtin.sy.get().index.set(indexBackup2);
    await this.remove_leading_trailing_spaces({string_to_work_on: next_word});
    if (abap.compare.eq(abap.builtin.strlen({val: next_word}), abap.IntegerFactory.get(1)) || abap.compare.ne(next_word.getOffset({offset: 0, length: 1}), new abap.types.String().set(`$`))) {
      this.description_warning_is_needed.set(abap.builtin.abap_true);
    }
  }
  async write_description_message() {
    if (abap.compare.eq(this.description_warning_is_needed, abap.builtin.abap_true) && abap.compare.initial(this.decoded_abap_doc.get().description)) {
      await this.parser_log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg115, component_name: this.component_name});
    } else if (abap.compare.eq(this.description_warning_is_needed, abap.builtin.abap_true) && abap.compare.initial(this.decoded_abap_doc.get().description) === false) {
      await this.parser_log.get().zif_aff_log$add_info({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg116, component_name: this.component_name});
    }
  }
  async write_log_for_multiple_entries(INPUT) {
    let result_table = INPUT?.result_table;
    if (result_table?.getQualifiedName === undefined || result_table.getQualifiedName() !== "MATCH_RESULT_TAB") { result_table = undefined; }
    if (result_table === undefined) { result_table = abap.types.TableFactory.construct(new abap.types.Structure({"line": new abap.types.Integer({qualifiedName: "I"}), "offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"}), "submatches": abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "I"}), "length": new abap.types.Integer({qualifiedName: "I"})}, "SUBMATCH_RESULT", "SUBMATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT", "MATCH_RESULT", {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "MATCH_RESULT_TAB").set(INPUT.result_table); }
    let annotaion = INPUT?.annotaion;
    if (annotaion?.getQualifiedName === undefined || annotaion.getQualifiedName() !== "STRING") { annotaion = undefined; }
    if (annotaion === undefined) { annotaion = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.annotaion); }
    let temp15 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.gt(abap.builtin.lines({val: result_table}), abap.IntegerFactory.get(1))) {
      temp15.set(annotaion);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(107), msgv1: temp15})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
  }
}
abap.Classes['ZCL_AFF_ABAP_DOC_PARSER'] = zcl_aff_abap_doc_parser;
zcl_aff_abap_doc_parser.abap_doc_annotation = new abap.types.Structure({"callback_class": new abap.types.String({qualifiedName: "STRING"}), "default_": new abap.types.String({qualifiedName: "STRING"}), "values": new abap.types.String({qualifiedName: "STRING"}), "required": new abap.types.String({qualifiedName: "STRING"}), "show_always": new abap.types.String({qualifiedName: "STRING"}), "minimum": new abap.types.String({qualifiedName: "STRING"}), "maximum": new abap.types.String({qualifiedName: "STRING"}), "exclusive_minimum": new abap.types.String({qualifiedName: "STRING"}), "exclusive_maximum": new abap.types.String({qualifiedName: "STRING"}), "max_length": new abap.types.String({qualifiedName: "STRING"}), "min_length": new abap.types.String({qualifiedName: "STRING"}), "multiple_of": new abap.types.String({qualifiedName: "STRING"}), "content_media_type": new abap.types.String({qualifiedName: "STRING"}), "content_encoding": new abap.types.String({qualifiedName: "STRING"}), "enum_value": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class.set(`$callbackClass`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_.set(`$default`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().values.set(`$values`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().required.set(`$required`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always.set(`$showAlways`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().minimum.set(`$minimum`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().maximum.set(`$maximum`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_minimum.set(`$exclusiveMinimum`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_maximum.set(`$exclusiveMaximum`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().max_length.set(`$maxLength`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().min_length.set(`$minLength`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().multiple_of.set(`$multipleOf`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_media_type.set(`$contentMediaType`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().content_encoding.set(`$contentEncoding`);
zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value.set(`$enumValue`);
zcl_aff_abap_doc_parser.co_shorttext_tag_open = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_abap_doc_parser.co_shorttext_tag_open.set(`[\\s]*<p\\sclass="shorttext">`);
zcl_aff_abap_doc_parser.abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
zcl_aff_abap_doc_parser.ty_mixed_table_entry = new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {});
zcl_aff_abap_doc_parser.tt_mixed_table_entry = abap.types.TableFactory.construct(new abap.types.Structure({"offset": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), "length": new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), "is_link": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["OFFSET"]},"secondary":[]}, "zcl_aff_abap_doc_parser=>tt_mixed_table_entry");
export {zcl_aff_abap_doc_parser};
//# sourceMappingURL=zcl_aff_abap_doc_parser.clas.mjs.map