// zif_aff_log.intf.abap
class zif_aff_log {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"C_MESSAGE_TYPE": {"type": () => {return new abap.types.Structure({"error": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "warning": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "info": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG106": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG113": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG114": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG115": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG116": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG123": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG124": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG126": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG127": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG128": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG129": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG132": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "CO_MSG133": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"ADD_INFO": {"visibility": "U", "parameters": {"MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ADD_WARNING": {"visibility": "U", "parameters": {"MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "ADD_ERROR": {"visibility": "U", "parameters": {"MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_MESSAGE_TEXT": {"visibility": "U", "parameters": {"MESSAGE_TEXT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MSGNO": {"type": () => {return new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"});}, "is_optional": " "}, "MSGV1": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": " "}, "MSGV2": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": " "}, "MSGV3": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": " "}, "MSGV4": {"type": () => {return new abap.types.Character(50, {"qualifiedName":"SYMSGV","ddicName":"SYMSGV"});}, "is_optional": " "}}},
  "ADD_EXCEPTION": {"visibility": "U", "parameters": {"EXCEPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CX_ROOT", RTTIName: "\\CLASS=CX_ROOT"});}, "is_optional": " "}, "MESSAGE_TYPE": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}, "COMPONENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_MESSAGES": {"visibility": "U", "parameters": {"MESSAGES": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");}, "is_optional": " "}}},
  "JOIN": {"visibility": "U", "parameters": {"LOG_TO_JOIN": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}}},
  "CLEAR": {"visibility": "U", "parameters": {}},
  "GET_MAX_SEVERITY": {"visibility": "U", "parameters": {"MAX_SEVERITY": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"});}, "is_optional": " "}}},
  "HAS_MESSAGES": {"visibility": "U", "parameters": {"HAS_MESSAGES": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}}}};
}
abap.Classes['ZIF_AFF_LOG'] = zif_aff_log;
zif_aff_log.zif_aff_log$c_message_type = new abap.types.Structure({"error": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "warning": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "info": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"})}, undefined, undefined, {}, {});
zif_aff_log.zif_aff_log$c_message_type.get().error.set('E');
zif_aff_log.zif_aff_log$c_message_type.get().warning.set('W');
zif_aff_log.zif_aff_log$c_message_type.get().info.set('I');
zif_aff_log.zif_aff_log$co_msg106 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg106.set(`Callback class is invalid`);
zif_aff_log.zif_aff_log$co_msg113 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg113.set(`Title is at wrong position`);
zif_aff_log.zif_aff_log$co_msg114 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg114.set(`Default argument is invalid`);
zif_aff_log.zif_aff_log$co_msg115 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg115.set(`Description is at wrong position`);
zif_aff_log.zif_aff_log$co_msg116 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg116.set(`Text between annotations will not be parsed`);
zif_aff_log.zif_aff_log$co_msg123 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg123.set(`No structure was provided for type generator`);
zif_aff_log.zif_aff_log$co_msg124 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg124.set(`Given structure must have mandatory fields format_version and header`);
zif_aff_log.zif_aff_log$co_msg126 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg126.set(`For required fields, a default handling is not possible`);
zif_aff_log.zif_aff_log$co_msg127 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg127.set(`Elements of type enum should be required or have a default`);
zif_aff_log.zif_aff_log$co_msg128 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg128.set(`Components on top level (except format_version) should be structures or tables`);
zif_aff_log.zif_aff_log$co_msg129 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg129.set(`Fields of a different type than integer should not use the annototation $multipleOf`);
zif_aff_log.zif_aff_log$co_msg132 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg132.set(`Only elements of character-like type can have annotation $contentEncoding or $contentMediaType`);
zif_aff_log.zif_aff_log$co_msg133 = new abap.types.String({qualifiedName: "STRING"});
zif_aff_log.zif_aff_log$co_msg133.set(`The content encoding is unknown`);
zif_aff_log.ty_log_out = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {});
zif_aff_log.tt_log_out = abap.types.TableFactory.construct(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY","ddicName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG", "SYMSG", {}, {})}, "zif_aff_log=>ty_log_out", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
export {zif_aff_log};
//# sourceMappingURL=zif_aff_log.intf.mjs.map