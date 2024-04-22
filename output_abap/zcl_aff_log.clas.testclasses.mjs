const {zcl_aff_log} = await import("./zcl_aff_log.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_log.clas.testclasses.abap
class ltcl_log_unit_test {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_LOG-LTCL_LOG_UNIT_TEST';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"TEST_COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MESSAGE_TEXT_2": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MESSAGE": {"type": () => {return new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MESSAGE_2": {"type": () => {return new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"SETUP": {"visibility": "I", "parameters": {}},
  "ADD_INFO": {"visibility": "I", "parameters": {}},
  "ADD_WARNING": {"visibility": "I", "parameters": {}},
  "ADD_ERROR": {"visibility": "I", "parameters": {}},
  "ADD_EXCEPTION": {"visibility": "I", "parameters": {}},
  "JOINS_LOG": {"visibility": "I", "parameters": {}},
  "CLEARS_LOG": {"visibility": "I", "parameters": {}},
  "GET_MAX_SEVERITY": {"visibility": "I", "parameters": {}},
  "HAS_MESSAGES": {"visibility": "I", "parameters": {}},
  "TWO_MESSAGES_FOR_ONE_OBJECT": {"visibility": "I", "parameters": {}},
  "ADD_CATCHED_EXCEPTION": {"visibility": "I", "parameters": {}},
  "ADD_CLASSIC_EXCEPTION": {"visibility": "I", "parameters": {}},
  "ADD_EXCEPTION_AS_INFO": {"visibility": "I", "parameters": {}},
  "GET_MESSAGE_TEXT": {"visibility": "I", "parameters": {}},
  "ASSERT_MESSAGE": {"visibility": "I", "parameters": {"ACT_MESSAGE": {"type": () => {return new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "EXP_MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ASSERT_MESSAGE_EXCEPTION": {"visibility": "I", "parameters": {"ACT_MESSAGE": {"type": () => {return new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});}, "is_optional": " "}, "TYPE": {"type": () => {return new abap.types.Character();}, "is_optional": " "}, "EXP_MESSAGE": {"type": () => {return new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.test_component_name = new abap.types.String({qualifiedName: "STRING"});
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    this.message_text = new abap.types.String({qualifiedName: "STRING"});
    this.message_text_2 = new abap.types.String({qualifiedName: "STRING"});
    this.message = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    this.message_2 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
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
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp20 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp21 = new abap.types.Integer({qualifiedName: "I"});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: messages})});
    temp21.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp20});
    abap.builtin.sy.get().tabix.set(temp21);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique54 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique54.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 74};
      throw unique54;
    }
    await this.assert_message({act_message: temp20, type: new abap.types.Character(1).set('I'), exp_message_text: this.message_text});
  }
  async add_warning() {
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp22 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp23 = new abap.types.Integer({qualifiedName: "I"});
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: messages})});
    temp23.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp22});
    abap.builtin.sy.get().tabix.set(temp23);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique55 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique55.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 95};
      throw unique55;
    }
    await this.assert_message({act_message: temp22, type: new abap.types.Character(1).set('W'), exp_message_text: this.message_text});
  }
  async add_error() {
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp24 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp25 = new abap.types.Integer({qualifiedName: "I"});
    await this.log.get().zif_aff_log$add_error({message_text: this.message_text, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: messages})});
    temp25.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp24});
    abap.builtin.sy.get().tabix.set(temp25);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique56 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique56.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 115};
      throw unique56;
    }
    await this.assert_message({act_message: temp24, type: new abap.types.Character(1).set('E'), exp_message_text: this.message_text});
  }
  async add_exception() {
    let previous = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp26 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp27 = new abap.types.Integer({qualifiedName: "I"});
    let temp28 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp29 = new abap.types.Integer({qualifiedName: "I"});
    previous.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text_2, previous: previous}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(2), act: abap.builtin.lines({val: messages})});
    temp27.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp26});
    abap.builtin.sy.get().tabix.set(temp27);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique57 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique57.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 143};
      throw unique57;
    }
    await this.assert_message_exception({act_message: temp26, type: new abap.types.Character(1).set('E'), exp_message: this.message_2});
    temp29.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(2),
      into: temp28});
    abap.builtin.sy.get().tabix.set(temp29);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique58 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique58.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 152};
      throw unique58;
    }
    await this.assert_message_exception({act_message: temp28, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_catched_exception() {
    let temp30 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp31 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp32 = new abap.types.Integer({qualifiedName: "I"});
    try {
      temp30.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
      throw temp30.get();
    } catch (e) {
      if ((abap.Classes['ZCX_AFF_TOOLS'] && e instanceof abap.Classes['ZCX_AFF_TOOLS'])) {
        exception.set(e);
        await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
      } else {
        throw e;
      }
    }
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: messages})});
    temp32.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp31});
    abap.builtin.sy.get().tabix.set(temp32);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique59 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique59.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 182};
      throw unique59;
    }
    await this.assert_message_exception({act_message: temp31, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_classic_exception() {
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp33 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp34 = new abap.types.Integer({qualifiedName: "I"});
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: messages})});
    temp34.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp33});
    abap.builtin.sy.get().tabix.set(temp34);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique60 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique60.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 207};
      throw unique60;
    }
    await this.assert_message_exception({act_message: temp33, type: new abap.types.Character(1).set('E'), exp_message: this.message});
  }
  async add_exception_as_info() {
    let previous = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let exception = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp35 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    let temp3 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    let temp36 = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    let temp5 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp6 = new abap.types.Integer({qualifiedName: "I"});
    previous.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text}));
    exception.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: this.message_text_2, previous: previous}));
    await this.log.get().zif_aff_log$add_exception({exception: exception, message_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(2), act: abap.builtin.lines({val: messages})});
    abap.statements.clear(temp35);
    temp35.get().msgty.set(new abap.types.Character(1).set('I'));
    temp35.get().msgv1.set(this.message_text_2);
    temp4.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp3});
    abap.builtin.sy.get().tabix.set(temp4);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique61 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique61.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 243};
      throw unique61;
    }
    await this.assert_message_exception({act_message: temp3, type: new abap.types.Character(1).set('I'), exp_message: temp35});
    abap.statements.clear(temp36);
    temp36.get().msgty.set(new abap.types.Character(1).set('I'));
    temp36.get().msgv1.set(this.message_text);
    temp6.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(2),
      into: temp5});
    abap.builtin.sy.get().tabix.set(temp6);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique62 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique62.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 256};
      throw unique62;
    }
    await this.assert_message_exception({act_message: temp5, type: new abap.types.Character(1).set('I'), exp_message: temp36});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('I'), act: (await this.log.get().zif_aff_log$get_max_severity())});
  }
  async joins_log() {
    let temp37 = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    let log2 = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    let test_element_name2 = new abap.types.String({qualifiedName: "STRING"});
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    let temp38 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp39 = new abap.types.Integer({qualifiedName: "I"});
    let temp40 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    let temp41 = new abap.types.Integer({qualifiedName: "I"});
    await this.log.get().zif_aff_log$add_warning({message_text: this.message_text, component_name: this.test_component_name});
    temp37.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    log2.set(temp37);
    test_element_name2.set(new abap.types.String().set(`TEST_COMPONENT2`));
    await log2.get().zif_aff_log$add_error({message_text: this.message_text_2, component_name: test_element_name2});
    await this.log.get().zif_aff_log$join({log_to_join: log2});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(2), act: abap.builtin.lines({val: messages})});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set('E'), act: (await this.log.get().zif_aff_log$get_max_severity())});
    temp39.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(1),
      into: temp38});
    abap.builtin.sy.get().tabix.set(temp39);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique63 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique63.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 292};
      throw unique63;
    }
    await this.assert_message({act_message: temp38, type: new abap.types.Character(1).set('W'), exp_message_text: this.message_text});
    temp41.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(messages,{index: abap.IntegerFactory.get(2),
      into: temp40});
    abap.builtin.sy.get().tabix.set(temp41);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique64 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique64.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.testclasses.abap","INTERNAL_LINE": 301};
      throw unique64;
    }
    await this.assert_message({act_message: temp40, type: new abap.types.Character(1).set('E'), exp_message_text: this.message_text_2, component_name: test_element_name2});
  }
  async clears_log() {
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    await this.log.get().zif_aff_log$add_error({message_text: this.message_text, component_name: this.test_component_name});
    await this.log.get().zif_aff_log$clear();
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(0), act: abap.builtin.lines({val: messages})});
  }
  async get_max_severity() {
    let temp42 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(1).set(''), act: (await this.log.get().zif_aff_log$get_max_severity())});
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
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text, component_name: this.test_component_name});
    await this.log.get().zif_aff_log$add_info({message_text: this.message_text_2, component_name: this.test_component_name});
    messages.set((await this.log.get().zif_aff_log$get_messages()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(2), act: abap.builtin.lines({val: messages})});
  }
  async assert_message(INPUT) {
    let act_message = INPUT?.act_message;
    if (act_message?.getQualifiedName === undefined || act_message.getQualifiedName() !== "ZIF_AFF_LOG=>TY_LOG_OUT") { act_message = undefined; }
    if (act_message === undefined) { act_message = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}).set(INPUT.act_message); }
    let type = INPUT?.type;
    let exp_message_text = INPUT?.exp_message_text;
    if (exp_message_text?.getQualifiedName === undefined || exp_message_text.getQualifiedName() !== "STRING") { exp_message_text = undefined; }
    if (exp_message_text === undefined) { exp_message_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.exp_message_text); }
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
    let act_message = INPUT?.act_message;
    if (act_message?.getQualifiedName === undefined || act_message.getQualifiedName() !== "ZIF_AFF_LOG=>TY_LOG_OUT") { act_message = undefined; }
    if (act_message === undefined) { act_message = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}).set(INPUT.act_message); }
    let type = INPUT?.type;
    let exp_message = INPUT?.exp_message;
    if (exp_message?.getQualifiedName === undefined || exp_message.getQualifiedName() !== "SYMSG") { exp_message = undefined; }
    if (exp_message === undefined) { exp_message = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {}).set(INPUT.exp_message); }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: this.test_component_name, act: act_message.get().component_name});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: type, act: act_message.get().type});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_message, act: act_message.get().message});
  }
  async get_message_text() {
    let temp43 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    let act_message = new abap.types.String({qualifiedName: "STRING"});
    let exp_message = new abap.types.String({qualifiedName: "STRING"});
    temp43.set(new abap.types.String().set(`$test`));
    act_message.set((await this.log.get().zif_aff_log$get_message_text({msgno: abap.IntegerFactory.get(109), msgv1: temp43})));
    exp_message.set(new abap.types.String().set(`Annotation $test was used incorrectly`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_message, act: act_message});
  }
}
abap.Classes['CLAS-ZCL_AFF_LOG-LTCL_LOG_UNIT_TEST'] = ltcl_log_unit_test;
export {ltcl_log_unit_test};
//# sourceMappingURL=zcl_aff_log.clas.testclasses.mjs.map