const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_parser.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_107 = new abap.types.Integer().set(107);
const constant_108 = new abap.types.Integer().set(108);
const constant_109 = new abap.types.Integer().set(109);
const constant_11 = new abap.types.Integer().set(11);
const constant_110 = new abap.types.Integer().set(110);
const constant_111 = new abap.types.Integer().set(111);
const constant_13 = new abap.types.Integer().set(13);
const constant_2 = new abap.types.Integer().set(2);
const constant_20 = new abap.types.Integer().set(20);
const constant_3 = new abap.types.Integer().set(3);
const constant_9 = new abap.types.Integer().set(9);
class zcl_aff_abap_doc_parser {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.abap_doc_string = new abap.types.String({qualifiedName: "STRING"});
    this.parser_log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    this.component_name = new abap.types.String({qualifiedName: "STRING"});
    this.decoded_abap_doc = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    this.description_warning_is_needed = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    this.abap_doc_annotation = zcl_aff_abap_doc_parser.abap_doc_annotation;
    this.co_shorttext_tag_open = zcl_aff_abap_doc_parser.co_shorttext_tag_open;
    return this;
  }
  async parse(INPUT) {
    let found_abap_doc = new abap.types.Structure({required: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), showalways: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), title: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), description: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), enumvalues_link: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), exclusive_minimum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), exclusive_maximum: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), multiple_of: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), default_: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), min_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), max_length: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), callback_class: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), enum_value: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc");
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    let to_parse = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.to_parse) {to_parse.set(INPUT.to_parse);}
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
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
    abap.statements.replace({target:this.abap_doc_string, all:true, with: new abap.types.String().set(`<p class="shorttext">`),regex: new abap.types.String().set(`[\\s]*(<p[\\s]+class="shorttext([\\s]+synchronized)?"([\\s]+lang="[a-zA-Z]{2}")?[\\s]*>)[\\s]*`)});
    this.decoded_abap_doc.get().title.set(abap.builtin.substring_after({val: this.abap_doc_string, regex: zcl_aff_abap_doc_parser.co_shorttext_tag_open}));
    if ((abap.compare.initial(this.decoded_abap_doc.get().title) === false)) {
      this.decoded_abap_doc.get().title.set(abap.builtin.substring_before({val: this.decoded_abap_doc.get().title, sub: new abap.types.Character({length: 4}).set('</p>')}));
      await this.remove_leading_trailing_spaces({string_to_work_on: this.decoded_abap_doc.get().title});
    }
    await this.check_title_positions();
    await this.workaround_remove_titles();
  }
  async check_title_positions() {
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if ((abap.compare.gt(abap.builtin.count({val: this.abap_doc_string, regex: zcl_aff_abap_doc_parser.co_shorttext_tag_open}), constant_1))) {
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_107, msgv1: new abap.types.String().set(`'Title'`)})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
    if ((abap.compare.gt(abap.builtin.find({val: this.abap_doc_string, regex: zcl_aff_abap_doc_parser.co_shorttext_tag_open}), constant_0))) {
      await this.parser_log.get().zif_aff_log$add_info({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg113, component_name: this.component_name});
    }
  }
  async workaround_remove_titles() {
    let start_offset = new abap.types.Integer({qualifiedName: "I"});
    while ((abap.compare.eq(abap.builtin.boolc({val: abap.builtin.matches({val: this.abap_doc_string, regex: new abap.types.String().set(`.*[\\s]*<p\\sclass="shorttext">.*`)})}), abap.builtin.abap_true))) {
      start_offset.set(abap.builtin.find({val: this.abap_doc_string, regex: zcl_aff_abap_doc_parser.co_shorttext_tag_open, occ: constant_1}));
      this.abap_doc_string.set(abap.operators.concat(this.abap_doc_string.getOffset({length: start_offset}),abap.builtin.substring_after({val: this.abap_doc_string.getOffset({offset: start_offset}), sub: new abap.types.String().set(`</p>`)})));
    }
  }
  async parse_description() {
    let offset = new abap.types.Integer({qualifiedName: "I"});
    let description = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.find(this.abap_doc_string, {regex: new abap.types.String().set(`(\\$callbackClass|\\$default|\\$values|\\$required|\\$showAlways|\\$minimum|\\$maximum|\\$exclusiveMinimum|\\$exclusiveMaximum|\\$multipleOf|\\$maxLength|\\$minLength|\\$enumValue)`), first: true, offset: offset});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      description.set(this.abap_doc_string.getOffset({offset: 0, length: offset}));
      await this.remove_leading_trailing_spaces({string_to_work_on: description});
      this.decoded_abap_doc.get().description.set(description);
    } else {
      await this.remove_leading_trailing_spaces({string_to_work_on: this.abap_doc_string});
      this.decoded_abap_doc.get().description.set(this.abap_doc_string);
    }
  }
  async parse_annotations() {
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let modified_abap_doc_string = new abap.types.String({qualifiedName: "STRING"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    let offset = new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"});
    let length = new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"});
    let key_word = new abap.types.String({qualifiedName: "STRING"});
    let temp1 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.find(this.abap_doc_string, {regex: new abap.types.String().set(`\\$[a-zA-Z]+`), first: false, results: result_table});
    modified_abap_doc_string.set(this.abap_doc_string);
    for await (const unique2 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique2);
      offset.set(fs_entry_.get().offset);
      length.set(fs_entry_.get().length);
      key_word.set(this.abap_doc_string.getOffset({offset: offset, length: length}));
      let unique3 = key_word;
      if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class)) {
        await this.parse_callback_class();
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_)) {
        await this.parse_default();
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().values)) {
        await this.parse_enum_values();
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().required)) {
        await this.parse_required();
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always)) {
        await this.parse_show_always();
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().minimum) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().maximum) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_minimum) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_maximum) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().max_length) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().multiple_of) || abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().min_length)) {
        await this.parse_number_annotations({key_word: key_word});
      } else if (abap.compare.eq(unique3, zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value)) {
        await this.parse_enum_value();
      } else {
        abap.statements.replace({target:modified_abap_doc_string, all:false, with: new abap.types.Character({length: 0}).set(''),of: key_word});
        temp1.set(key_word);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_108, msgv1: temp1})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      }
    }
    this.abap_doc_string.set(modified_abap_doc_string);
  }
  async parse_callback_class() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let temp2 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let temp3 = new abap.types.Integer();
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let temp4 = new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let temp5 = new abap.types.Integer();
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    if (abap.compare.initial(this.decoded_abap_doc.get().callback_class) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target:string_to_parse, all:true, with: new abap.types.String().set(`\\$callbackClass\\{@link`),regex: new abap.types.String().set(`\\$callbackClass[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {regex: new abap.types.String().set(`\\$callbackClass\\{@link[^\\}]+\\}`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), constant_0)) {
      temp2.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_109, msgv1: temp2})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().callback_class});
    temp3.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: constant_1,into: temp1});
    abap.builtin.sy.get().tabix.set(temp3);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    offset_found.set(temp1.get().offset);
    temp5.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: constant_1,into: temp4});
    abap.builtin.sy.get().tabix.set(temp5);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    length_found.set(temp4.get().length);
    this.decoded_abap_doc.get().callback_class.set((await this.get_annotation_value({length: abap.operators.minus(length_found,constant_1), offset: offset_found, to_decode: string_to_parse, length_of_annotation: constant_20, remove_whitespaces: abap.builtin.abap_true})));
    for await (const unique4 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique4);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: string_to_parse});
    }
  }
  async get_annotation_value(INPUT) {
    let annotation_value = new abap.types.String({qualifiedName: "STRING"});
    let length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length) {length.set(INPUT.length);}
    let offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.offset) {offset.set(INPUT.offset);}
    let to_decode = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.to_decode) {to_decode.set(INPUT.to_decode);}
    let length_of_annotation = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length_of_annotation) {length_of_annotation.set(INPUT.length_of_annotation);}
    let remove_whitespaces = new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"});
    if (INPUT && INPUT.remove_whitespaces) {remove_whitespaces = INPUT.remove_whitespaces;}
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
    let result_table_value = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let result_table_link = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let mixed_result_table = new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), length: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), is_link: new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry"), {"withHeader":false,"type":"SORTED","isUnique":true,"keyFields":["OFFSET"]}, "zcl_aff_abap_doc_parser=>tt_mixed_table_entry");
    let fs_default_value_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    let temp3 = new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), length: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), is_link: new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry");
    let fs_default_link_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    let temp4 = new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), length: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), is_link: new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry");
    let temp5 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let warning_set = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-OFFSET"}), length: new abap.types.Integer({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>TY_MIXED_TABLE_ENTRY-LENGTH"}), is_link: new abap.types.Character({qualifiedName: "ABAP_BOOLEAN"})}, "zcl_aff_abap_doc_parser=>ty_mixed_table_entry"));
    let link = new abap.types.String({qualifiedName: "STRING"});
    let link_for_testing = new abap.types.String({qualifiedName: "STRING"});
    let splitted = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    let temp7 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (abap.compare.initial(this.decoded_abap_doc.get().default_) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target:string_to_parse, all:true, with: new abap.types.String().set(`\\$default'`),regex: new abap.types.String().set(`\\$default[\\s]*(:[\\s]*)?'`)});
    abap.statements.replace({target:string_to_parse, all:true, with: new abap.types.String().set(`\\$default\\{@link`),regex: new abap.types.String().set(`\\$default[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {regex: new abap.types.String().set(`\\$default'[^']*'`), first: false, results: result_table_value});
    abap.statements.find(string_to_parse, {regex: new abap.types.String().set(`\\$default\\{@link[^\\}]+\\}`), first: false, results: result_table_link});
    for await (const unique5 of abap.statements.loop(result_table_value)) {
      fs_default_value_.assign(unique5);
      abap.statements.clear(temp3);
      temp3.get().offset.set(fs_default_value_.get().offset);
      temp3.get().length.set(fs_default_value_.get().length);
      temp3.get().is_link.set(abap.builtin.abap_false);
      abap.statements.insertInternal({data: temp3, table: mixed_result_table});
    }
    for await (const unique6 of abap.statements.loop(result_table_link)) {
      fs_default_link_.assign(unique6);
      abap.statements.clear(temp4);
      temp4.get().offset.set(fs_default_link_.get().offset);
      temp4.get().length.set(fs_default_link_.get().length);
      temp4.get().is_link.set(abap.builtin.abap_true);
      abap.statements.insertInternal({data: temp4, table: mixed_result_table});
    }
    if (abap.compare.eq(abap.builtin.lines({val: mixed_result_table}), constant_0)) {
      temp5.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_109, msgv1: temp5})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    if (abap.compare.gt(abap.builtin.lines({val: mixed_result_table}), constant_1)) {
      temp6.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_107, msgv1: temp6})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
    warning_set.set(abap.builtin.abap_false);
    for await (const unique7 of abap.statements.loop(mixed_result_table)) {
      fs_entry_.assign(unique7);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: string_to_parse});
      if (abap.compare.eq(fs_entry_.get().is_link, abap.builtin.abap_false) && abap.compare.initial(this.decoded_abap_doc.get().default_)) {
        this.decoded_abap_doc.get().default_.set(abap.operators.concat(new abap.types.String().set(`"`),abap.operators.concat((await this.get_annotation_value({length: abap.operators.minus(fs_entry_.get().length,constant_1), offset: fs_entry_.get().offset, to_decode: string_to_parse, length_of_annotation: constant_9, remove_whitespaces: abap.builtin.abap_false})),new abap.types.String().set(`"`))));
      } else if (abap.compare.eq(fs_entry_.get().is_link, abap.builtin.abap_true) && abap.compare.initial(this.decoded_abap_doc.get().default_)) {
        link.set((await this.get_annotation_value({length: abap.operators.minus(fs_entry_.get().length,constant_1), offset: fs_entry_.get().offset, to_decode: string_to_parse, length_of_annotation: constant_9, remove_whitespaces: abap.builtin.abap_true})));
        link_for_testing.set(link);
        abap.statements.replace({target:link_for_testing, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`\\s`)});
        abap.statements.replace({target:link_for_testing, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`(@link|data:)`)});
        abap.statements.split({source: link_for_testing, at: new abap.types.Character({length: 1}).set('.'), table: splitted});
        if (abap.compare.eq(abap.builtin.lines({val: splitted}), constant_3)) {
          this.decoded_abap_doc.get().default_.set(link);
        } else if (abap.compare.eq(warning_set, abap.builtin.abap_false)) {
          temp7.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().default_);
          msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_111, msgv1: temp7})));
          await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
          warning_set.set(abap.builtin.abap_true);
        }
      }
    }
  }
  async parse_enum_values() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let temp8 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let warning_written = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    let offset_found = new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"});
    let length_found = new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"});
    let link = new abap.types.String({qualifiedName: "STRING"});
    let link_for_testing = new abap.types.String({qualifiedName: "STRING"});
    let splitted = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    let temp9 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (abap.compare.initial(this.decoded_abap_doc.get().enumvalues_link) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target:string_to_parse, all:true, with: new abap.types.String().set(`\\$values\\{@link`),regex: new abap.types.String().set(`\\$values[\\s]*(:[\\s]*)?\\{[\\s]*@link`)});
    abap.statements.find(string_to_parse, {regex: new abap.types.String().set(`\\$values\\{@link([^\\}]+)\\}`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), constant_0)) {
      temp8.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_109, msgv1: temp8})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().values});
    warning_written.set(abap.builtin.abap_false);
    for await (const unique8 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique8);
      offset_found.set(fs_entry_.get().offset);
      length_found.set(fs_entry_.get().length);
      link.set((await this.get_annotation_value({length: abap.operators.minus(length_found,constant_1), offset: offset_found, to_decode: string_to_parse, length_of_annotation: constant_13, remove_whitespaces: abap.builtin.abap_true})));
      await this.check_next_word({offset: abap.operators.add(offset_found,length_found), text_to_check: string_to_parse});
      link_for_testing.set(link);
      abap.statements.replace({target:link_for_testing, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`\\s`)});
      abap.statements.replace({target:link_for_testing, all:true, with: new abap.types.String().set(``),regex: new abap.types.String().set(`data:`)});
      abap.statements.split({source: link_for_testing, at: new abap.types.Character({length: 1}).set('.'), table: splitted});
      if (abap.compare.eq(abap.builtin.lines({val: splitted}), constant_2) && abap.compare.initial(this.decoded_abap_doc.get().enumvalues_link)) {
        this.decoded_abap_doc.get().enumvalues_link.set(link);
      } else if (abap.compare.ne(abap.builtin.lines({val: splitted}), constant_2) && abap.compare.eq(warning_written, abap.builtin.abap_false)) {
        temp9.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_111, msgv1: temp9})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
        warning_written.set(abap.builtin.abap_true);
      }
    }
  }
  async parse_required() {
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    if (abap.compare.initial(this.decoded_abap_doc.get().required) === false) {
      return;
    }
    abap.statements.find(this.abap_doc_string, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().required, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().required});
    this.decoded_abap_doc.get().required.set(abap.builtin.abap_true);
    for await (const unique9 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique9);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: this.abap_doc_string});
    }
  }
  async parse_show_always() {
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    if (abap.compare.initial(this.decoded_abap_doc.get().showalways) === false) {
      return;
    }
    abap.statements.find(this.abap_doc_string, {find: zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always, first: false, results: result_table});
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().show_always});
    this.decoded_abap_doc.get().showalways.set(abap.builtin.abap_true);
    for await (const unique10 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique10);
      await this.check_next_word({offset: abap.operators.add(fs_entry_.get().offset,fs_entry_.get().length), text_to_check: this.abap_doc_string});
    }
  }
  async parse_number_annotations(INPUT) {
    let key_word = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.key_word) {key_word.set(INPUT.key_word);}
    let unique11 = key_word;
    if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().minimum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().minimum)) {
        this.decoded_abap_doc.get().minimum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().maximum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().maximum)) {
        this.decoded_abap_doc.get().maximum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_minimum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().exclusive_minimum)) {
        this.decoded_abap_doc.get().exclusive_minimum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().exclusive_maximum)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().exclusive_maximum)) {
        this.decoded_abap_doc.get().exclusive_maximum.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().multiple_of)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().multiple_of)) {
        this.decoded_abap_doc.get().multiple_of.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().min_length)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().min_length)) {
        this.decoded_abap_doc.get().min_length.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    } else if (abap.compare.eq(unique11, zcl_aff_abap_doc_parser.abap_doc_annotation.get().max_length)) {
      if (abap.compare.initial(this.decoded_abap_doc.get().max_length)) {
        this.decoded_abap_doc.get().max_length.set((await this.get_number_annotation({annotation_name: key_word})));
      }
    }
  }
  async get_number_annotation(INPUT) {
    let number = new abap.types.String({qualifiedName: "STRING"});
    let annotation_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.annotation_name) {annotation_name.set(INPUT.annotation_name);}
    let abap_doc = new abap.types.String({qualifiedName: "STRING"});
    let dummy_annotation = new abap.types.String({qualifiedName: "STRING"});
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let temp10 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let annotation_length = new abap.types.Integer({qualifiedName: "I"});
    let regex_of_number_expressions = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX"});
    let warning_written = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    let offset_found = new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"});
    let length_found = new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"});
    let begin_of_number = new abap.types.Integer({qualifiedName: "I"});
    let length_of_number = new abap.types.Integer({qualifiedName: "I"});
    let number_candidate = new abap.types.String({qualifiedName: "STRING"});
    let matcher = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_MATCHER"});
    let match = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let temp11 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    abap_doc.set(this.abap_doc_string);
    dummy_annotation.set(new abap.types.String().set(`$dummyannotation`));
    abap.statements.replace({target:abap_doc, all:true, with: dummy_annotation,of: annotation_name});
    abap.statements.replace({target:abap_doc, all:true, with: new abap.types.String().set(`\\$dummyannotation`),regex: new abap.types.String().set(`\\$dummyannotation[\\s]*(:[\\s]*)?`)});
    abap.statements.find(abap_doc, {regex: new abap.types.String().set(`\\$dummyannotation[^\\s]+`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), constant_0)) {
      temp10.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().values);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_109, msgv1: temp10})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return number;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: annotation_name});
    annotation_length.set(abap.builtin.strlen({val: dummy_annotation}));
    regex_of_number_expressions.set(await (new abap.Classes['CL_ABAP_REGEX']()).constructor_({pattern: new abap.types.String().set(`(\\+|-)?[0-9]+(.[0-9]+)?(e(\\+|-)?[0-9]+)?`), ignore_case: abap.builtin.abap_true}));
    warning_written.set(abap.builtin.abap_false);
    for await (const unique12 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique12);
      offset_found.set(fs_entry_.get().offset);
      length_found.set(fs_entry_.get().length);
      begin_of_number.set(abap.operators.add(offset_found,annotation_length));
      length_of_number.set(abap.operators.minus(length_found,annotation_length));
      number_candidate.set(abap_doc.getOffset({offset: begin_of_number, length: length_of_number}));
      await this.remove_leading_trailing_spaces({string_to_work_on: number_candidate});
      matcher.set((await regex_of_number_expressions.get().create_matcher({text: number_candidate})));
      match.set((await matcher.get().match()));
      await this.check_next_word({offset: abap.operators.add(offset_found,length_found), text_to_check: abap_doc});
      if (abap.compare.eq(match, abap.builtin.abap_true) && abap.compare.initial(number)) {
        number.set(number_candidate);
      } else if (abap.compare.eq(match, abap.builtin.abap_false) && abap.compare.eq(warning_written, abap.builtin.abap_false)) {
        temp11.set(annotation_name);
        msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_110, msgv1: temp11})));
        await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
        warning_written.set(abap.builtin.abap_true);
      }
    }
    return number;
  }
  async parse_enum_value() {
    let string_to_parse = new abap.types.String({qualifiedName: "STRING"});
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    let temp12 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    let offset_found = new abap.types.Integer({qualifiedName: "I"});
    let temp6 = new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let temp7 = new abap.types.Integer();
    let length_found = new abap.types.Integer({qualifiedName: "I"});
    let temp8 = new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let temp9 = new abap.types.Integer();
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"));
    if (abap.compare.initial(this.decoded_abap_doc.get().enum_value) === false) {
      return;
    }
    string_to_parse.set(this.abap_doc_string);
    abap.statements.replace({target:string_to_parse, all:true, with: new abap.types.String().set(`\\$enumValue'`),regex: new abap.types.String().set(`\\$enumValue[\\s]*(:[\\s]*)?'`)});
    abap.statements.find(string_to_parse, {regex: new abap.types.String().set(`\\$enumValue'[^']*'`), first: false, results: result_table});
    if (abap.compare.eq(abap.builtin.lines({val: result_table}), constant_0)) {
      temp12.set(zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_109, msgv1: temp12})));
      await this.parser_log.get().zif_aff_log$add_warning({message_text: msg, component_name: this.component_name});
      return;
    }
    await this.write_log_for_multiple_entries({result_table: result_table, annotaion: zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value});
    temp7.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: constant_1,into: temp6});
    abap.builtin.sy.get().tabix.set(temp7);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    offset_found.set(temp6.get().offset);
    temp9.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(result_table,{index: constant_1,into: temp8});
    abap.builtin.sy.get().tabix.set(temp9);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    length_found.set(temp8.get().length);
    this.decoded_abap_doc.get().enum_value.set((await this.get_annotation_value({length: abap.operators.minus(length_found,constant_1), offset: offset_found, to_decode: string_to_parse, length_of_annotation: constant_11, remove_whitespaces: abap.builtin.abap_true})));
    for await (const unique13 of abap.statements.loop(result_table)) {
      fs_entry_.assign(unique13);
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
    let offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.offset) {offset.set(INPUT.offset);}
    let text_to_check = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.text_to_check) {text_to_check.set(INPUT.text_to_check);}
    let current_offset = new abap.types.Integer({qualifiedName: "I"});
    let next_word = new abap.types.String({qualifiedName: "STRING"});
    let next_char = new abap.types.Character();
    let regex_of_letter = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX"});
    if (abap.compare.eq(this.description_warning_is_needed, abap.builtin.abap_true)) {
      return;
    }
    current_offset.set(offset);
    while (abap.compare.eq(next_char, abap.builtin.space) && abap.compare.lt(current_offset, abap.builtin.strlen({val: text_to_check}))) {
      next_char.set(text_to_check.getOffset({offset: current_offset, length: 1}));
      current_offset.set(abap.operators.add(current_offset,constant_1));
    }
    next_word.set(next_char);
    if (abap.compare.ge(current_offset, abap.builtin.strlen({val: text_to_check}))) {
      return;
    }
    regex_of_letter.set(await (new abap.Classes['CL_ABAP_REGEX']()).constructor_({pattern: new abap.types.String().set(`[a-zA-Z]`), ignore_case: abap.builtin.abap_false}));
    let unique14 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique14++);
      next_char.set(text_to_check.getOffset({offset: current_offset, length: 1}));
      current_offset.set(abap.operators.add(current_offset,constant_1));
      next_word.set(abap.operators.concat(next_word,next_char));
      if (abap.compare.eq((await (await regex_of_letter.get().create_matcher({text: next_char})).get().match()), abap.builtin.abap_false) || abap.compare.ge(current_offset, abap.builtin.strlen({val: text_to_check}))) {
        break;
      }
    }
    await this.remove_leading_trailing_spaces({string_to_work_on: next_word});
    if (abap.compare.eq(abap.builtin.strlen({val: next_word}), constant_1) || abap.compare.ne(next_word.getOffset({offset: 0, length: 1}), new abap.types.String().set(`$`))) {
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
    let result_table = new abap.types.Table(new abap.types.Structure({line: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LINE"}), offset: new abap.types.Integer({qualifiedName: "MATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "MATCH_RESULT-LENGTH"}), submatches: new abap.types.Table(new abap.types.Structure({offset: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-OFFSET"}), length: new abap.types.Integer({qualifiedName: "SUBMATCH_RESULT-LENGTH"})}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    if (INPUT && INPUT.result_table) {result_table.set(INPUT.result_table);}
    let annotaion = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.annotaion) {annotaion.set(INPUT.annotaion);}
    let temp13 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.gt(abap.builtin.lines({val: result_table}), constant_1)) {
      temp13.set(annotaion);
      msg.set((await this.parser_log.get().zif_aff_log$get_message_text({msgno: constant_107, msgv1: temp13})));
      await this.parser_log.get().zif_aff_log$add_info({message_text: msg, component_name: this.component_name});
    }
  }
}
abap.Classes['ZCL_AFF_ABAP_DOC_PARSER'] = zcl_aff_abap_doc_parser;
zcl_aff_abap_doc_parser.abap_doc_annotation = new abap.types.Structure({callback_class: new abap.types.String({qualifiedName: "STRING"}), default_: new abap.types.String({qualifiedName: "STRING"}), values: new abap.types.String({qualifiedName: "STRING"}), required: new abap.types.String({qualifiedName: "STRING"}), show_always: new abap.types.String({qualifiedName: "STRING"}), minimum: new abap.types.String({qualifiedName: "STRING"}), maximum: new abap.types.String({qualifiedName: "STRING"}), exclusive_minimum: new abap.types.String({qualifiedName: "STRING"}), exclusive_maximum: new abap.types.String({qualifiedName: "STRING"}), max_length: new abap.types.String({qualifiedName: "STRING"}), min_length: new abap.types.String({qualifiedName: "STRING"}), multiple_of: new abap.types.String({qualifiedName: "STRING"}), enum_value: new abap.types.String({qualifiedName: "STRING"})});
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
zcl_aff_abap_doc_parser.abap_doc_annotation.get().enum_value.set(`$enumValue`);
zcl_aff_abap_doc_parser.co_shorttext_tag_open = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_abap_doc_parser.co_shorttext_tag_open.set(`[\\s]*<p\\sclass="shorttext">`);
export {zcl_aff_abap_doc_parser};
//# sourceMappingURL=zcl_aff_abap_doc_parser.clas.mjs.map