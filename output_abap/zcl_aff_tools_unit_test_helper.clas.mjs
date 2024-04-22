const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_tools_unit_test_helper.clas.abap
class zcl_aff_tools_unit_test_helper {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_TOOLS_UNIT_TEST_HELPER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"ASSERT_LOG_CONTAINS_MSG": {"visibility": "U", "parameters": {"LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}, "EXP_MESSAGE": {"type": () => {return new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {});}, "is_optional": " "}, "EXP_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}, "EXP_COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ASSERT_LOG_CONTAINS_TEXT": {"visibility": "U", "parameters": {"LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}, "EXP_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "EXP_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}, "EXP_COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ASSERT_EQUALS_IGNORE_SPACES": {"visibility": "U", "parameters": {"ACT_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "EXP_DATA": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "ASSERT_LOG_HAS_NO_MESSAGE": {"visibility": "U", "parameters": {"LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}, "MESSAGE_SEVERITY_THRESHOLD": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}}},
  "ASSERT_STRING_TABS": {"visibility": "U", "parameters": {"EXP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "ACT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "IGNORE_CASE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IGNORE_SPACES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "IGNORE_LINEBREAKS": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async assert_log_contains_msg(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_contains_msg(INPUT);
  }
  static async assert_log_contains_msg(INPUT) {
    let log = INPUT?.log;
    if (log?.getQualifiedName === undefined || log.getQualifiedName() !== "ZIF_AFF_LOG") { log = undefined; }
    if (log === undefined) { log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log); }
    let exp_message = INPUT?.exp_message;
    if (exp_message?.getQualifiedName === undefined || exp_message.getQualifiedName() !== "SCX_T100KEY") { exp_message = undefined; }
    if (exp_message === undefined) { exp_message = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY", "SCX_T100KEY", {}, {}).set(INPUT.exp_message); }
    let exp_type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    if (INPUT && INPUT.exp_type) {exp_type.set(INPUT.exp_type);}
    if (INPUT === undefined || INPUT.exp_type === undefined) {exp_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let exp_component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_component_name) {exp_component_name.set(INPUT.exp_component_name);}
    let act_messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp1 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    let msg = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    let temp3 = new abap.types.Integer({qualifiedName: "I"});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    act_messages.set((await log.get().zif_aff_log$get_messages()));
    abap.statements.clear(temp1);
    temp1.get().msgid.set(exp_message.get().msgid);
    temp1.get().msgno.set(exp_message.get().msgno);
    temp1.get().msgty.set(exp_type);
    temp1.get().msgv1.set(exp_message.get().attr1);
    temp1.get().msgv2.set(exp_message.get().attr2);
    temp1.get().msgv3.set(exp_message.get().attr3);
    temp1.get().msgv4.set(exp_message.get().attr4);
    msg.set(temp1);
    abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message, msg);},
      withKeyValue: [{key: (i) => {return i.type}, value: exp_type},{key: (i) => {return i.message}, value: msg}],
      usesTableLine: false,
      withKeySimple: {"type": exp_type,"message": msg}});
    temp3.set(abap.builtin.sy.get().subrc);
    if (INPUT && INPUT.exp_component_name) {
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message, msg) && abap.compare.eq(i.component_name, exp_component_name);},
        withKeyValue: [{key: (i) => {return i.type}, value: exp_type},{key: (i) => {return i.message}, value: msg},{key: (i) => {return i.component_name}, value: exp_component_name}],
        usesTableLine: false,
        withKeySimple: {"type": exp_type,"message": msg,"component_name": exp_component_name}});
      temp2.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp2, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
      }
    } else if (!abap.compare.eq(temp3, abap.IntegerFactory.get(0))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
    }
  }
  async assert_log_contains_text(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_contains_text(INPUT);
  }
  static async assert_log_contains_text(INPUT) {
    let log = INPUT?.log;
    if (log?.getQualifiedName === undefined || log.getQualifiedName() !== "ZIF_AFF_LOG") { log = undefined; }
    if (log === undefined) { log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log); }
    let exp_text = INPUT?.exp_text;
    if (exp_text?.getQualifiedName === undefined || exp_text.getQualifiedName() !== "STRING") { exp_text = undefined; }
    if (exp_text === undefined) { exp_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.exp_text); }
    let exp_type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    if (INPUT && INPUT.exp_type) {exp_type.set(INPUT.exp_type);}
    if (INPUT === undefined || INPUT.exp_type === undefined) {exp_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let exp_component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_component_name) {exp_component_name.set(INPUT.exp_component_name);}
    let act_messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp5 = new abap.types.Integer({qualifiedName: "I"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    act_messages.set((await log.get().zif_aff_log$get_messages()));
    abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message_text, exp_text);},
      withKeyValue: [{key: (i) => {return i.type}, value: exp_type},{key: (i) => {return i.message_text}, value: exp_text}],
      usesTableLine: false,
      withKeySimple: {"type": exp_type,"message_text": exp_text}});
    temp5.set(abap.builtin.sy.get().subrc);
    if (INPUT && INPUT.exp_component_name) {
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message_text, exp_text) && abap.compare.eq(i.component_name, exp_component_name);},
        withKeyValue: [{key: (i) => {return i.type}, value: exp_type},{key: (i) => {return i.message_text}, value: exp_text},{key: (i) => {return i.component_name}, value: exp_component_name}],
        usesTableLine: false,
        withKeySimple: {"type": exp_type,"message_text": exp_text,"component_name": exp_component_name}});
      temp4.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp4, abap.IntegerFactory.get(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
      }
    } else if (!abap.compare.eq(temp5, abap.IntegerFactory.get(0))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
    }
  }
  async assert_log_has_no_message(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_has_no_message(INPUT);
  }
  static async assert_log_has_no_message(INPUT) {
    let log = INPUT?.log;
    if (log?.getQualifiedName === undefined || log.getQualifiedName() !== "ZIF_AFF_LOG") { log = undefined; }
    if (log === undefined) { log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log); }
    let message_severity_threshold = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    if (INPUT && INPUT.message_severity_threshold) {message_severity_threshold.set(INPUT.message_severity_threshold);}
    if (INPUT === undefined || INPUT.message_severity_threshold === undefined) {message_severity_threshold = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning;}
    let types_to_report = abap.types.TableFactory.construct(new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp6 = abap.types.TableFactory.construct(new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp8 = abap.types.TableFactory.construct(new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp10 = abap.types.TableFactory.construct(new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp12 = abap.types.TableFactory.construct(new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let max_severity = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    let temp14 = new abap.types.Integer({qualifiedName: "I"});
    let detail = new abap.types.String({qualifiedName: "STRING"});
    let temp15 = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let fs_message_ = new abap.types.FieldSymbol(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}));
    let temp16 = new abap.types.Integer({qualifiedName: "I"});
    let unique66 = message_severity_threshold;
    if (abap.compare.eq(unique66, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info)) {
      abap.statements.clear(temp6);
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, table: temp6});
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, table: temp6});
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, table: temp6});
      types_to_report.set(temp6);
    } else if (abap.compare.eq(unique66, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning)) {
      abap.statements.clear(temp8);
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, table: temp8});
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, table: temp8});
      types_to_report.set(temp8);
    } else if (abap.compare.eq(unique66, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
      abap.statements.clear(temp10);
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, table: temp10});
      types_to_report.set(temp10);
    } else {
      abap.statements.clear(temp12);
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, table: temp12});
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, table: temp12});
      abap.statements.insertInternal({data: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, table: temp12});
      types_to_report.set(temp12);
    }
    max_severity.set((await log.get().zif_aff_log$get_max_severity()));
    abap.statements.readTable(types_to_report,{withKey: (i) => {return abap.compare.eq(i.table_line, max_severity);},
      withKeyValue: [{key: (i) => {return i.table_line}, value: max_severity}],
      usesTableLine: true,
      withKeySimple: {"table_line": max_severity}});
    temp14.set(abap.builtin.sy.get().subrc);
    if (abap.compare.eq(temp14, abap.IntegerFactory.get(0))) {
      temp15.set((await log.get().zif_aff_log$get_messages()));
      for await (const unique67 of abap.statements.loop(temp15)) {
        fs_message_.assign(unique67);
        abap.statements.readTable(types_to_report,{withKey: (i) => {return abap.compare.eq(i.table_line, fs_message_.get().type);},
          withKeyValue: [{key: (i) => {return i.table_line}, value: fs_message_.get().type}],
          usesTableLine: true,
          withKeySimple: {"table_line": fs_message_.get().type}});
        temp16.set(abap.builtin.sy.get().subrc);
        if (abap.compare.eq(temp16, abap.IntegerFactory.get(0))) {
          detail.set(abap.operators.concat(detail,abap.operators.concat(fs_message_.get().message_text,abap.Classes['CL_ABAP_CHAR_UTILITIES'].newline)));
        }
      }
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.String().set(`Log contains messages with severity >= ${abap.templateFormatting(message_severity_threshold)}`), detail: detail});
    }
  }
  async assert_equals_ignore_spaces(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_equals_ignore_spaces(INPUT);
  }
  static async assert_equals_ignore_spaces(INPUT) {
    let act_data = INPUT?.act_data;
    if (act_data?.getQualifiedName === undefined || act_data.getQualifiedName() !== "STRING_TABLE") { act_data = undefined; }
    if (act_data === undefined) { act_data = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.act_data); }
    let exp_data = INPUT?.exp_data;
    if (exp_data?.getQualifiedName === undefined || exp_data.getQualifiedName() !== "STRING_TABLE") { exp_data = undefined; }
    if (exp_data === undefined) { exp_data = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.exp_data); }
    let exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let act = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let fs_act_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    exp.set(exp_data);
    act.set(act_data);
    for await (const unique68 of abap.statements.loop(exp)) {
      fs_exp_line_.assign(unique68);
      abap.statements.condense(fs_exp_line_, {nogaps: true});
    }
    for await (const unique69 of abap.statements.loop(act)) {
      fs_act_line_.assign(unique69);
      abap.statements.condense(fs_act_line_, {nogaps: true});
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp, act: act});
  }
  async assert_string_tabs(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_string_tabs(INPUT);
  }
  static async assert_string_tabs(INPUT) {
    let exp = INPUT?.exp;
    if (exp?.getQualifiedName === undefined || exp.getQualifiedName() !== "STRING_TABLE") { exp = undefined; }
    if (exp === undefined) { exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.exp); }
    let act = INPUT?.act;
    if (act?.getQualifiedName === undefined || act.getQualifiedName() !== "STRING_TABLE") { act = undefined; }
    if (act === undefined) { act = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.act); }
    let ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_case) {ignore_case.set(INPUT.ignore_case);}
    if (INPUT === undefined || INPUT.ignore_case === undefined) {ignore_case = abap.builtin.abap_false;}
    let ignore_spaces = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_spaces) {ignore_spaces.set(INPUT.ignore_spaces);}
    if (INPUT === undefined || INPUT.ignore_spaces === undefined) {ignore_spaces = abap.builtin.abap_false;}
    let ignore_linebreaks = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_linebreaks) {ignore_linebreaks.set(INPUT.ignore_linebreaks);}
    if (INPUT === undefined || INPUT.ignore_linebreaks === undefined) {ignore_linebreaks = abap.builtin.abap_false;}
    let exp_work_copy = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let act_work_copy = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let fs_act_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let exp_string = new abap.types.String({qualifiedName: "STRING"});
    let act_string = new abap.types.String({qualifiedName: "STRING"});
    exp_work_copy.set(exp);
    act_work_copy.set(act);
    if (abap.compare.eq(ignore_spaces, abap.builtin.abap_true)) {
      for await (const unique70 of abap.statements.loop(exp_work_copy)) {
        fs_exp_line_.assign(unique70);
        abap.statements.condense(fs_exp_line_, {nogaps: true});
      }
      for await (const unique71 of abap.statements.loop(act_work_copy)) {
        fs_act_line_.assign(unique71);
        abap.statements.condense(fs_act_line_, {nogaps: true});
      }
    }
    if (abap.compare.eq(ignore_case, abap.builtin.abap_true)) {
      for await (const unique72 of abap.statements.loop(exp_work_copy)) {
        fs_exp_line_.assign(unique72);
        fs_exp_line_.set(abap.builtin.to_lower({val: fs_exp_line_}));
      }
      for await (const unique73 of abap.statements.loop(act_work_copy)) {
        fs_act_line_.assign(unique73);
        fs_act_line_.set(abap.builtin.to_lower({val: fs_act_line_}));
      }
    }
    if (abap.compare.eq(ignore_linebreaks, abap.builtin.abap_true)) {
      abap.statements.concatenate({source: [exp_work_copy], target: exp_string, lines: true});
      abap.statements.concatenate({source: [act_work_copy], target: act_string, lines: true});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_string, act: act_string, msg: new abap.types.Character(46).set('Expected and actual abap source does not match')});
      return;
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_work_copy, act: act_work_copy, msg: new abap.types.Character(46).set('Expected and actual abap source does not match')});
  }
}
abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'] = zcl_aff_tools_unit_test_helper;
export {zcl_aff_tools_unit_test_helper};
//# sourceMappingURL=zcl_aff_tools_unit_test_helper.clas.mjs.map