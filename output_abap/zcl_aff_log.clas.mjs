const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_log.clas.abap
class zcl_aff_log {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_LOG';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_LOG"];
  static ATTRIBUTES = {"MESSAGES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MESSAGE_TABLE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_log=>tt_msg");}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "MAX_SEVERITY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "ZIF_AFF_LOG~C_MESSAGE_TYPE": {"type": () => {return new abap.types.Structure({"error": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "warning": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "info": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG106": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG113": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG114": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG115": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG116": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG123": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG124": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG126": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG127": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG128": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG129": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG132": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "ZIF_AFF_LOG~CO_MSG133": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ADD_MESSAGE_FOR_EXCEPTION": {"visibility": "I", "parameters": {"TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}, "MESSAGE": {"type": () => {return new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ADD_MESSAGE": {"visibility": "I", "parameters": {"TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}, "MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "SET_MAX_SEVERITY": {"visibility": "I", "parameters": {"TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}}},
  "GET_SY_MESSAGE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    this.message_table = abap.types.TableFactory.construct(new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_log=>tt_msg");
    this.max_severity = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    this.zif_aff_log$c_message_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type;
    this.zif_aff_log$co_msg106 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg106;
    this.zif_aff_log$co_msg113 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg113;
    this.zif_aff_log$co_msg114 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg114;
    this.zif_aff_log$co_msg115 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg115;
    this.zif_aff_log$co_msg116 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg116;
    this.zif_aff_log$co_msg123 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg123;
    this.zif_aff_log$co_msg124 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124;
    this.zif_aff_log$co_msg126 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg126;
    this.zif_aff_log$co_msg127 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg127;
    this.zif_aff_log$co_msg128 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg128;
    this.zif_aff_log$co_msg129 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg129;
    this.zif_aff_log$co_msg132 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg132;
    this.zif_aff_log$co_msg133 = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg133;
  }
  async add_message(INPUT) {
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "SYMSGTY") { type = undefined; }
    if (type === undefined) { type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}).set(INPUT.type); }
    let message_text = INPUT?.message_text;
    if (message_text?.getQualifiedName === undefined || message_text.getQualifiedName() !== "STRING") { message_text = undefined; }
    if (message_text === undefined) { message_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.message_text); }
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    let temp1 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    await this.set_max_severity({type: type});
    abap.statements.clear(temp1);
    temp1.get().component_name.set(component_name);
    temp1.get().type.set(type);
    temp1.get().message_text.set(message_text);
    abap.statements.append({source: temp1, target: this.me.get().messages});
  }
  async add_message_for_exception(INPUT) {
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "SYMSGTY") { type = undefined; }
    if (type === undefined) { type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}).set(INPUT.type); }
    let message = INPUT?.message;
    if (message?.getQualifiedName === undefined || message.getQualifiedName() !== "SYMSG") { message = undefined; }
    if (message === undefined) { message = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {}).set(INPUT.message); }
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    let text = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
    await abap.statements.message({into: text, id: message.get().msgid, type: type, number: message.get().msgno, with: [message.get().msgv1,message.get().msgv2,message.get().msgv3,message.get().msgv4]});
    abap.statements.clear(temp2);
    temp2.get().component_name.set(component_name);
    temp2.get().type.set(type);
    temp2.get().message_text.set(text);
    temp2.get().message.set((await this.get_sy_message()));
    abap.statements.append({source: temp2, target: this.me.get().messages});
  }
  async constructor_(INPUT) {
    let temp3 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp4 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp5 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp6 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp7 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp8 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp9 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp10 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp11 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp12 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp13 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp14 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp15 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp16 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp17 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    abap.statements.clear(temp3);
    temp3.get().msgno.set(abap.IntegerFactory.get(0));
    abap.statements.append({source: temp3, target: this.message_table});
    abap.statements.clear(temp4);
    temp4.get().msgno.set(abap.IntegerFactory.get(102));
    temp4.get().str1.set(new abap.types.String().set(`The JSON type`));
    temp4.get().str2.set(new abap.types.String().set(`is not supported by the XSLT writer`));
    abap.statements.append({source: temp4, target: this.message_table});
    abap.statements.clear(temp5);
    temp5.get().msgno.set(abap.IntegerFactory.get(103));
    temp5.get().str1.set(new abap.types.String().set(`Class/Interface type`));
    temp5.get().str2.set(new abap.types.String().set(`given in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp5, target: this.message_table});
    abap.statements.clear(temp6);
    temp6.get().msgno.set(abap.IntegerFactory.get(104));
    temp6.get().str1.set(new abap.types.String().set(`Constant`));
    temp6.get().str2.set(new abap.types.String().set(`given in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp6, target: this.message_table});
    abap.statements.clear(temp7);
    temp7.get().msgno.set(abap.IntegerFactory.get(105));
    temp7.get().str1.set(new abap.types.String().set(`Component`));
    temp7.get().str2.set(new abap.types.String().set(`of constant`));
    temp7.get().str3.set(new abap.types.String().set(`in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp7, target: this.message_table});
    abap.statements.clear(temp8);
    temp8.get().msgno.set(abap.IntegerFactory.get(107));
    temp8.get().str1.set(new abap.types.String().set(`There are several occurrences of annotation`));
    temp8.get().str2.set(new abap.types.String().set(`. First valid is used`));
    abap.statements.append({source: temp8, target: this.message_table});
    abap.statements.clear(temp9);
    temp9.get().msgno.set(abap.IntegerFactory.get(108));
    temp9.get().str1.set(new abap.types.String().set(`Annotation`));
    temp9.get().str2.set(new abap.types.String().set(`is unknown`));
    abap.statements.append({source: temp9, target: this.message_table});
    abap.statements.clear(temp10);
    temp10.get().msgno.set(abap.IntegerFactory.get(109));
    temp10.get().str1.set(new abap.types.String().set(`Annotation`));
    temp10.get().str2.set(new abap.types.String().set(`was used incorrectly`));
    abap.statements.append({source: temp10, target: this.message_table});
    abap.statements.clear(temp11);
    temp11.get().msgno.set(abap.IntegerFactory.get(110));
    temp11.get().str1.set(new abap.types.String().set(`No number was provided for annotation`));
    abap.statements.append({source: temp11, target: this.message_table});
    abap.statements.clear(temp12);
    temp12.get().msgno.set(abap.IntegerFactory.get(111));
    temp12.get().str1.set(new abap.types.String().set(`Link in annotation`));
    temp12.get().str2.set(new abap.types.String().set(`is incorrect`));
    abap.statements.append({source: temp12, target: this.message_table});
    abap.statements.clear(temp13);
    temp13.get().msgno.set(abap.IntegerFactory.get(112));
    temp13.get().str1.set(new abap.types.String().set(`If $required is set, $showAlways is redundant`));
    abap.statements.append({source: temp13, target: this.message_table});
    abap.statements.clear(temp14);
    temp14.get().msgno.set(abap.IntegerFactory.get(117));
    temp14.get().str1.set(new abap.types.String().set(`Annotation $default for type`));
    temp14.get().str2.set(new abap.types.String().set(`is not supported`));
    abap.statements.append({source: temp14, target: this.message_table});
    abap.statements.clear(temp15);
    temp15.get().msgno.set(abap.IntegerFactory.get(119));
    temp15.get().str1.set(new abap.types.String().set(``));
    temp15.get().str2.set(new abap.types.String().set(`is missing`));
    abap.statements.append({source: temp15, target: this.message_table});
    abap.statements.clear(temp16);
    temp16.get().msgno.set(abap.IntegerFactory.get(122));
    temp16.get().str1.set(new abap.types.String().set(`Type of constant`));
    temp16.get().str2.set(new abap.types.String().set(`does not match type of`));
    abap.statements.append({source: temp16, target: this.message_table});
    abap.statements.clear(temp17);
    temp17.get().msgno.set(abap.IntegerFactory.get(125));
    temp17.get().str1.set(new abap.types.String().set(`Description exceeds`));
    temp17.get().str2.set(new abap.types.String().set(`characters and might be too long`));
    abap.statements.append({source: temp17, target: this.message_table});
    return this;
  }
  async get_sy_message() {
    return zcl_aff_log.get_sy_message();
  }
  static async get_sy_message() {
    let result = new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {});
    abap.statements.clear(result);
    result.get().msgid.set(abap.builtin.sy.get().msgid);
    result.get().msgno.set(abap.builtin.sy.get().msgno);
    result.get().msgty.set(abap.builtin.sy.get().msgty);
    result.get().msgv1.set(abap.builtin.sy.get().msgv1);
    result.get().msgv2.set(abap.builtin.sy.get().msgv2);
    result.get().msgv3.set(abap.builtin.sy.get().msgv3);
    result.get().msgv4.set(abap.builtin.sy.get().msgv4);
    return result;
  }
  async set_max_severity(INPUT) {
    let type = INPUT?.type;
    if (type?.getQualifiedName === undefined || type.getQualifiedName() !== "SYMSGTY") { type = undefined; }
    if (type === undefined) { type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}).set(INPUT.type); }
    if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
      this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error);
    } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning)) {
      if (abap.compare.ne(this.max_severity, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
        this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning);
      }
    } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info)) {
      if (abap.compare.initial(this.max_severity)) {
        this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info);
      }
    }
  }
  async zif_aff_log$add_error(INPUT) {
    let message_text = INPUT?.message_text;
    if (message_text?.getQualifiedName === undefined || message_text.getQualifiedName() !== "STRING") { message_text = undefined; }
    if (message_text === undefined) { message_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.message_text); }
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$add_exception(INPUT) {
    let exception = INPUT?.exception;
    if (exception?.getQualifiedName === undefined || exception.getQualifiedName() !== "CX_ROOT") { exception = undefined; }
    if (exception === undefined) { exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"}).set(INPUT.exception); }
    let message_type = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    if (INPUT && INPUT.message_type) {message_type.set(INPUT.message_type);}
    if (INPUT === undefined || INPUT.message_type === undefined) {message_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    await this.set_max_severity({type: message_type});
    if (abap.compare.initial((await exception.get().if_message$get_text())) === false) {
      await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_if_msg({text: exception});
      await this.add_message_for_exception({type: message_type, message: (await this.get_sy_message()), component_name: component_name});
    }
    if (abap.compare.initial(exception.get().previous) === false) {
      await this.zif_aff_log$add_exception({exception: exception.get().previous, message_type: message_type, component_name: component_name});
    }
  }
  async zif_aff_log$add_info(INPUT) {
    let message_text = INPUT?.message_text;
    if (message_text?.getQualifiedName === undefined || message_text.getQualifiedName() !== "STRING") { message_text = undefined; }
    if (message_text === undefined) { message_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.message_text); }
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$add_warning(INPUT) {
    let message_text = INPUT?.message_text;
    if (message_text?.getQualifiedName === undefined || message_text.getQualifiedName() !== "STRING") { message_text = undefined; }
    if (message_text === undefined) { message_text = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.message_text); }
    let component_name = INPUT?.component_name;
    if (component_name?.getQualifiedName === undefined || component_name.getQualifiedName() !== "STRING") { component_name = undefined; }
    if (component_name === undefined) { component_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.component_name); }
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$clear() {
    abap.statements.clear(this.me.get().messages);
  }
  async zif_aff_log$get_max_severity() {
    let max_severity = new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});
    max_severity.set(this.me.get().max_severity);
    return max_severity;
  }
  async zif_aff_log$get_messages() {
    let messages = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
    messages.set(this.me.get().messages);
    return messages;
  }
  async zif_aff_log$get_message_text(INPUT) {
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    let msgno = INPUT?.msgno;
    if (msgno?.getQualifiedName === undefined || msgno.getQualifiedName() !== "SYMSGNO") { msgno = undefined; }
    if (msgno === undefined) { msgno = new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"}).set(INPUT.msgno); }
    let msgv1 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.msgv1) {msgv1.set(INPUT.msgv1);}
    let msgv2 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.msgv2) {msgv2.set(INPUT.msgv2);}
    let msgv3 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.msgv3) {msgv3.set(INPUT.msgv3);}
    let msgv4 = new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});
    if (INPUT && INPUT.msgv4) {msgv4.set(INPUT.msgv4);}
    let temp18 = new abap.types.Integer({qualifiedName: "I"});
    let temp19 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp1 = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let message_entry = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
    abap.statements.readTable(this.message_table,{withKey: (i) => {return abap.compare.eq(i.msgno, msgno);},
      withKeyValue: [{key: (i) => {return i.msgno}, value: msgno}],
      usesTableLine: false,
      withKeySimple: {"msgno": msgno}});
    temp18.set(abap.builtin.sy.get().subrc);
    if (abap.compare.eq(temp18, abap.IntegerFactory.get(0))) {
      abap.statements.clear(temp19);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.message_table,{into: temp1,
        withKey: (i) => {return abap.compare.eq(i.msgno, msgno);},
        withKeyValue: [{key: (i) => {return i.msgno}, value: msgno}],
        usesTableLine: false,
        withKeySimple: {"msgno": msgno}});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique53 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique53.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_log.clas.abap","INTERNAL_LINE": 285};
        throw unique53;
      }
      temp19.set(temp1);
      message_entry.set(temp19);
      message_text.set(abap.operators.concat(message_entry.get().str1,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv1,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str2,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv2,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str3,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv3,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str4,abap.operators.concat(new abap.types.String().set(` `),msgv4)))))))))))))));
      abap.statements.condense(message_text, {nogaps: false});
    }
    return message_text;
  }
  async zif_aff_log$has_messages() {
    let has_messages = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let temp1 = new abap.types.Character(1, {"qualifiedName":"XSDBOOLEAN","ddicName":"XSDBOOLEAN"});
    temp1.set(abap.builtin.boolc(abap.compare.initial(this.me.get().messages) === false));
    has_messages.set(temp1);
    return has_messages;
  }
  async zif_aff_log$join(INPUT) {
    let log_to_join = INPUT?.log_to_join;
    if (log_to_join?.getQualifiedName === undefined || log_to_join.getQualifiedName() !== "ZIF_AFF_LOG") { log_to_join = undefined; }
    if (log_to_join === undefined) { log_to_join = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"}).set(INPUT.log_to_join); }
    abap.statements.append({source: (await log_to_join.get().zif_aff_log$get_messages()), lines: true, target: this.me.get().messages});
    await this.set_max_severity({type: (await log_to_join.get().zif_aff_log$get_max_severity())});
  }
}
abap.Classes['ZCL_AFF_LOG'] = zcl_aff_log;
zcl_aff_log.zif_aff_log$c_message_type = new abap.types.Structure({"error": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "warning": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "info": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"})}, undefined, undefined, {}, {});
zcl_aff_log.zif_aff_log$c_message_type.get().error.set('E');
zcl_aff_log.zif_aff_log$c_message_type.get().warning.set('W');
zcl_aff_log.zif_aff_log$c_message_type.get().info.set('I');
zcl_aff_log.zif_aff_log$co_msg106 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg106.set(`Callback class is invalid`);
zcl_aff_log.zif_aff_log$co_msg113 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg113.set(`Title is at wrong position`);
zcl_aff_log.zif_aff_log$co_msg114 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg114.set(`Default argument is invalid`);
zcl_aff_log.zif_aff_log$co_msg115 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg115.set(`Description is at wrong position`);
zcl_aff_log.zif_aff_log$co_msg116 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg116.set(`Text between annotations will not be parsed`);
zcl_aff_log.zif_aff_log$co_msg123 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg123.set(`No structure was provided for type generator`);
zcl_aff_log.zif_aff_log$co_msg124 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg124.set(`Given structure must have mandatory fields format_version and header`);
zcl_aff_log.zif_aff_log$co_msg126 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg126.set(`For required fields, a default handling is not possible`);
zcl_aff_log.zif_aff_log$co_msg127 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg127.set(`Elements of type enum should be required or have a default`);
zcl_aff_log.zif_aff_log$co_msg128 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg128.set(`Components on top level (except format_version) should be structures or tables`);
zcl_aff_log.zif_aff_log$co_msg129 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg129.set(`Fields of a different type than integer should not use the annototation $multipleOf`);
zcl_aff_log.zif_aff_log$co_msg132 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg132.set(`Only elements of character-like type can have annotation $contentEncoding or $contentMediaType`);
zcl_aff_log.zif_aff_log$co_msg133 = new abap.types.String({qualifiedName: "STRING"});
zcl_aff_log.zif_aff_log$co_msg133.set(`The content encoding is unknown`);
zcl_aff_log.ty_msg = new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {});
zcl_aff_log.tt_msg = abap.types.TableFactory.construct(new abap.types.Structure({"msgno": new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), "str1": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str1"}), "str2": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str2"}), "str3": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str3"}), "str4": new abap.types.Character(50, {"qualifiedName":"zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_log=>tt_msg");
export {zcl_aff_log};
//# sourceMappingURL=zcl_aff_log.clas.mjs.map