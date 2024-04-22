const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_tools_unit_test_helper.clas.abap
class zcl_aff_tools_unit_test_helper {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async assert_log_contains_msg(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_contains_msg(INPUT);
  }
  static async assert_log_contains_msg(INPUT) {
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    if (INPUT && INPUT.log) {log.set(INPUT.log);}
    let exp_message = new abap.types.Structure({"msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "attr1": new abap.types.Character(255, {}), "attr2": new abap.types.Character(255, {}), "attr3": new abap.types.Character(255, {}), "attr4": new abap.types.Character(255, {})}, "SCX_T100KEY");
    if (INPUT && INPUT.exp_message) {exp_message.set(INPUT.exp_message);}
    let exp_type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY"});
    if (INPUT && INPUT.exp_type) {exp_type = INPUT.exp_type;}
    if (INPUT === undefined || INPUT.exp_type === undefined) {exp_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let exp_component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_component_name) {exp_component_name.set(INPUT.exp_component_name);}
    let act_messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp1 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    let msg = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    let temp2 = new abap.types.Integer();
    let temp3 = new abap.types.Integer();
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
    if (INPUT && INPUT.exp_component_name) {
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message, msg) && abap.compare.eq(i.component_name, exp_component_name);}});
      temp2.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp2, new abap.types.Integer().set(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
      }
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message, msg);}});
      temp3.set(abap.builtin.sy.get().subrc);
    } else if (!abap.compare.eq(temp3, new abap.types.Integer().set(0))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
    }
  }
  async assert_log_contains_text(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_contains_text(INPUT);
  }
  static async assert_log_contains_text(INPUT) {
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    if (INPUT && INPUT.log) {log.set(INPUT.log);}
    let exp_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_text) {exp_text.set(INPUT.exp_text);}
    let exp_type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY"});
    if (INPUT && INPUT.exp_type) {exp_type = INPUT.exp_type;}
    if (INPUT === undefined || INPUT.exp_type === undefined) {exp_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let exp_component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_component_name) {exp_component_name.set(INPUT.exp_component_name);}
    let act_messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp4 = new abap.types.Integer();
    let temp5 = new abap.types.Integer();
    act_messages.set((await log.get().zif_aff_log$get_messages()));
    if (INPUT && INPUT.exp_component_name) {
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message_text, exp_text) && abap.compare.eq(i.component_name, exp_component_name);}});
      temp4.set(abap.builtin.sy.get().subrc);
      if (!abap.compare.eq(temp4, new abap.types.Integer().set(0))) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
      }
      abap.statements.readTable(act_messages,{withKey: (i) => {return abap.compare.eq(i.type, exp_type) && abap.compare.eq(i.message_text, exp_text);}});
      temp5.set(abap.builtin.sy.get().subrc);
    } else if (!abap.compare.eq(temp5, new abap.types.Integer().set(0))) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(48).set('The expected message is not contained in the log')});
    }
  }
  async assert_log_has_no_message(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_log_has_no_message(INPUT);
  }
  static async assert_log_has_no_message(INPUT) {
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    if (INPUT && INPUT.log) {log.set(INPUT.log);}
    let message_severity_threshold = new abap.types.Character(1, {"qualifiedName":"SYMSGTY"});
    if (INPUT && INPUT.message_severity_threshold) {message_severity_threshold = INPUT.message_severity_threshold;}
    if (INPUT === undefined || INPUT.message_severity_threshold === undefined) {message_severity_threshold = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning;}
    let types_to_report = new abap.types.Table(new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp6 = new abap.types.Table(new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp10 = new abap.types.Table(new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp13 = new abap.types.Table(new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp15 = new abap.types.Table(new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let max_severity = new abap.types.Character(1, {"qualifiedName":"SYMSGTY"});
    let temp19 = new abap.types.Integer();
    let detail = new abap.types.String({qualifiedName: "STRING"});
    let temp20 = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let fs_message_ = new abap.types.FieldSymbol(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"));
    let temp21 = new abap.types.Integer();
    let unique41 = message_severity_threshold;
    if (abap.compare.eq(unique41, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info)) {
      abap.statements.clear(temp6);
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, target: temp6});
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, target: temp6});
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, target: temp6});
      types_to_report.set(temp6);
    } else if (abap.compare.eq(unique41, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning)) {
      abap.statements.clear(temp10);
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, target: temp10});
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, target: temp10});
      types_to_report.set(temp10);
    } else if (abap.compare.eq(unique41, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
      abap.statements.clear(temp13);
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, target: temp13});
      types_to_report.set(temp13);
    } else {
      abap.statements.clear(temp15);
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, target: temp15});
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, target: temp15});
      abap.statements.append({source: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, target: temp15});
      types_to_report.set(temp15);
    }
    max_severity.set((await log.get().zif_aff_log$get_max_severity()));
    abap.statements.readTable(types_to_report,{withKey: (i) => {return abap.compare.eq(i.table_line, max_severity);}});
    temp19.set(abap.builtin.sy.get().subrc);
    if (abap.compare.eq(temp19, new abap.types.Integer().set(0))) {
      temp20.set((await log.get().zif_aff_log$get_messages()));
      for await (const unique42 of abap.statements.loop(temp20)) {
        fs_message_.assign(unique42);
        abap.statements.readTable(types_to_report,{withKey: (i) => {return abap.compare.eq(i.table_line, fs_message_.get().type);}});
        temp21.set(abap.builtin.sy.get().subrc);
        if (abap.compare.eq(temp21, new abap.types.Integer().set(0))) {
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
    let act_data = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.act_data) {act_data.set(INPUT.act_data);}
    let exp_data = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.exp_data) {exp_data.set(INPUT.exp_data);}
    let exp = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let act = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String());
    let fs_act_line_ = new abap.types.FieldSymbol(new abap.types.String());
    exp.set(exp_data);
    act.set(act_data);
    for await (const unique43 of abap.statements.loop(exp)) {
      fs_exp_line_.assign(unique43);
      abap.statements.condense(fs_exp_line_, {nogaps: true});
    }
    for await (const unique44 of abap.statements.loop(act)) {
      fs_act_line_.assign(unique44);
      abap.statements.condense(fs_act_line_, {nogaps: true});
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp, act: act});
  }
  async assert_string_tabs(INPUT) {
    return zcl_aff_tools_unit_test_helper.assert_string_tabs(INPUT);
  }
  static async assert_string_tabs(INPUT) {
    let exp = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.exp) {exp.set(INPUT.exp);}
    let act = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.act) {act.set(INPUT.act);}
    let ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}
    if (INPUT === undefined || INPUT.ignore_case === undefined) {ignore_case = abap.builtin.abap_false;}
    let ignore_spaces = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_spaces) {ignore_spaces = INPUT.ignore_spaces;}
    if (INPUT === undefined || INPUT.ignore_spaces === undefined) {ignore_spaces = abap.builtin.abap_false;}
    let ignore_linebreaks = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_linebreaks) {ignore_linebreaks = INPUT.ignore_linebreaks;}
    if (INPUT === undefined || INPUT.ignore_linebreaks === undefined) {ignore_linebreaks = abap.builtin.abap_false;}
    let exp_work_copy = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let act_work_copy = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String());
    let fs_act_line_ = new abap.types.FieldSymbol(new abap.types.String());
    let exp_string = new abap.types.String({qualifiedName: "STRING"});
    let act_string = new abap.types.String({qualifiedName: "STRING"});
    exp_work_copy.set(exp);
    act_work_copy.set(act);
    if (abap.compare.eq(ignore_spaces, abap.builtin.abap_true)) {
      for await (const unique45 of abap.statements.loop(exp_work_copy)) {
        fs_exp_line_.assign(unique45);
        abap.statements.condense(fs_exp_line_, {nogaps: true});
      }
      for await (const unique46 of abap.statements.loop(act_work_copy)) {
        fs_act_line_.assign(unique46);
        abap.statements.condense(fs_act_line_, {nogaps: true});
      }
    }
    if (abap.compare.eq(ignore_case, abap.builtin.abap_true)) {
      for await (const unique47 of abap.statements.loop(exp_work_copy)) {
        fs_exp_line_.assign(unique47);
        fs_exp_line_.set(abap.builtin.to_lower({val: fs_exp_line_}));
      }
      for await (const unique48 of abap.statements.loop(act_work_copy)) {
        fs_act_line_.assign(unique48);
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