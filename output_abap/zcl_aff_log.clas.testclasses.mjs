const {zcl_aff_log} = await import("./zcl_aff_log.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_log.clas.testclasses.abap
class ltcl_log_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.test_component_name = new abap.types.String({qualifiedName: "STRING"});
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    this.message_text = new abap.types.String({qualifiedName: "STRING"});
    this.message_text_2 = new abap.types.String({qualifiedName: "STRING"});
    this.message = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    this.message_2 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    return this;
  }
  async setup() {
    this.test_component_name.set(new abap.types.Character(14).set('TEST_COMPONENT'));
    this.message_text.set(new abap.types.Character(45).set('If $required is set, $showAlways is redundant'));
    this.message_text_2.set(new abap.types.Character(37).set('No number was provided for annotation'));
    abap.statements.clear(this.message);
    this.message.get().msgty.set(new abap.types.Character(1).set('E'));
    this.message.get().msgv1.set(this.message_text);
    abap.statements.clear(this.message_2);
    this.message_2.get().msgty.set(new abap.types.Character(1).set('E'));
    this.message_2.get().msgv1.set(this.message_text_2);
    this.log.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
  }
  async add_info() {
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp20 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp21 = new abap.types.Integer();
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(1), act: abap.builtin.lines({val: messages})});
    temp21.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp20});
    abap.builtin.sy.get().tabix.set(temp21);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message({act_message: temp20, type: new abap.types.Character(1).set('I'), exp_message_text: this.message_text});
  }
  async add_warning() {
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp22 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp23 = new abap.types.Integer();
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(1), act: abap.builtin.lines({val: messages})});
    temp23.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp22});
    abap.builtin.sy.get().tabix.set(temp23);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message({act_message: temp22, type: new abap.types.Character(1).set('W'), exp_message_text: this.message_text});
  }
  async add_error() {
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp24 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp25 = new abap.types.Integer();
    await this.log.get().zif_aff_log$add_error({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(1), act: abap.builtin.lines({val: messages})});
    temp25.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp24});
    abap.builtin.sy.get().tabix.set(temp25);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message({act_message: temp24, type: new abap.types.Character(1).set('E'), exp_message_text: this.message_text});
  }
  async add_exception() {
    let previous = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp26 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp27 = new abap.types.Integer();
    let temp28 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp29 = new abap.types.Integer();
    previous.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text_2, previous: previous}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(2), act: abap.builtin.lines({val: messages})});
    temp27.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp26});
    abap.builtin.sy.get().tabix.set(temp27);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp26, type: new abap.types.Character(1).set('E'), exp_message: this.message_2});
    temp29.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(2),into: temp28});
    abap.builtin.sy.get().tabix.set(temp29);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp28, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_catched_exception() {
    let temp30 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp31 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp32 = new abap.types.Integer();
    try {
      temp30.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
      throw temp30.get();
    } catch (e) {
      if (e instanceof abap.Classes['ZCX_AFF_TOOLS']) {
        exception.set(e);
        await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
      } else {
        throw e;
      }
    }
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(1), act: abap.builtin.lines({val: messages})});
    temp32.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp31});
    abap.builtin.sy.get().tabix.set(temp32);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp31, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_classic_exception() {
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp33 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp34 = new abap.types.Integer();
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(1), act: abap.builtin.lines({val: messages})});
    temp34.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp33});
    abap.builtin.sy.get().tabix.set(temp34);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp33, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_exception_as_info() {
    let previous = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp35 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    let temp3 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp4 = new abap.types.Integer();
    let temp36 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    let temp5 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp6 = new abap.types.Integer();
    previous.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text_2, previous: previous}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, message_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(2), act: abap.builtin.lines({val: messages})});
    abap.statements.clear(temp35);
    temp35.get().msgty.set(new abap.types.Character(1).set('I'));
    temp35.get().msgv1.set(this.message_text_2);
    temp4.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp3});
    abap.builtin.sy.get().tabix.set(temp4);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp3, type: new abap.types.Character(1).set('I'), exp_message: temp35});
    abap.statements.clear(temp36);
    temp36.get().msgty.set(new abap.types.Character(1).set('I'));
    temp36.get().msgv1.set(this.message_text);
    temp6.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(2),into: temp5});
    abap.builtin.sy.get().tabix.set(temp6);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message_exception({act_message: temp5, type: new abap.types.Character(1).set('I'), exp_message: temp36});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('I'), act: (await this.log.get().zif_aff_log$get_max_severity())});
  }
  async joins_log() {
    let temp37 = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    let log2 = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    let test_element_name2 = new abap.types.String({qualifiedName: "STRING"});
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp38 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp39 = new abap.types.Integer();
    let temp40 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    let temp41 = new abap.types.Integer();
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    temp37.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    log2.set(temp37);
    test_element_name2.set(new abap.types.String().set(`TEST_COMPONENT2`));
    await log2.get().zif_aff_log$add_error({message_text: this.message_text_2, component_name: test_element_name2});
    await this.log.get().zif_aff_log$join({log_to_join: log2});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(2), act: abap.builtin.lines({val: messages})});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('E'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    temp39.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(1),into: temp38});
    abap.builtin.sy.get().tabix.set(temp39);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message({act_message: temp38, type: new abap.types.Character(1).set('W'), exp_message_text: this.message_text});
    temp41.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: new abap.types.Integer().set(2),into: temp40});
    abap.builtin.sy.get().tabix.set(temp41);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
    }
    await this.assert_message({act_message: temp40, type: new abap.types.Character(1).set('E'), exp_message_text: this.message_text_2, component_name: test_element_name2});
  }
  async clears_log() {
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    await this.log.get().zif_aff_log$add_error({message_text: this.message_text, component_name: this.test_component_name});
    await this.log.get().zif_aff_log$clear();
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(0), act: abap.builtin.lines({val: messages})});
  }
  async get_max_severity() {
    let temp42 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(0).set(''), act: (await this.log.get().zif_aff_log$get_max_severity())});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('I'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('W'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    await this.log.get().zif_aff_log$add_error({message_text: this.message_text, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('E'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    temp42.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
    await this.log.get().zif_aff_log$add_exception({exception: temp42, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('E'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('E'), act: (await this.log.get().zif_aff_log$get_max_severity())});
  }
  async has_messages() {
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_false({act: (await this.log.get().zif_aff_log$has_messages())});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_true({act: (await this.log.get().zif_aff_log$has_messages())});
  }
  async two_messages_for_one_object() {
    let messages = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text_2, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Integer().set(2), act: abap.builtin.lines({val: messages})});
  }
  async assert_message(INPUT) {
    let act_message = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    if (INPUT && INPUT.act_message) {act_message.set(INPUT.act_message);}
    let type = new abap.types.Character(1, {});
    if (INPUT && INPUT.type) {type = INPUT.type;}
    let exp_message_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.exp_message_text) {exp_message_text.set(INPUT.exp_message_text);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    if (INPUT && INPUT.component_name) {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: component_name, act: act_message.get().component_name});
    } else {
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: this.test_component_name, act: act_message.get().component_name});
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: type, act: act_message.get().type});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_message_text, act: act_message.get().message_text});
  }
  async assert_message_exception(INPUT) {
    let act_message = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    if (INPUT && INPUT.act_message) {act_message.set(INPUT.act_message);}
    let type = new abap.types.Character(1, {});
    if (INPUT && INPUT.type) {type = INPUT.type;}
    let exp_message = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG");
    if (INPUT && INPUT.exp_message) {exp_message.set(INPUT.exp_message);}
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: this.test_component_name, act: act_message.get().component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: type, act: act_message.get().type});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_message, act: act_message.get().message});
  }
  async get_message_text() {
    let temp43 = new abap.types.Character(50, {"qualifiedName":"SYMSGV"});
    let act_message = new abap.types.String({qualifiedName: "STRING"});
    let exp_message = new abap.types.String({qualifiedName: "STRING"});
    temp43.set(new abap.types.String().set(`$test`));
    act_message.set((await this.log.get().zif_aff_log$get_message_text({msgno: new abap.types.Integer().set(109), msgv1: temp43})));
    exp_message.set(new abap.types.String().set(`Annotation $test was used incorrectly`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_message, act: act_message});
  }
}
abap.Classes['CLAS-ZCL_AFF_LOG-LTCL_LOG_UNIT_TEST'] = ltcl_log_unit_test;
export {ltcl_log_unit_test};
//# sourceMappingURL=zcl_aff_log.clas.testclasses.mjs.map