// zif_aff_log.intf.abap
class zif_aff_log {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['ZIF_AFF_LOG'] = zif_aff_log;
zif_aff_log.zif_aff_log$c_message_type = new abap.types.Structure({"error": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "warning": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "info": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"})});
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
zif_aff_log.ty_log_out = new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
zif_aff_log.tt_log_out = new abap.types.Table(new abap.types.Structure({"component_name": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), "type": new abap.types.Character(1, {"qualifiedName":"SYMSGTY"}), "message_text": new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), "message": new abap.types.Structure({"msgty": new abap.types.Character(1, {}), "msgid": new abap.types.Character(20, {}), "msgno": new abap.types.Numc({length: 3}), "msgv1": new abap.types.Character(50, {}), "msgv2": new abap.types.Character(50, {}), "msgv3": new abap.types.Character(50, {}), "msgv4": new abap.types.Character(50, {})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zif_aff_log=>tt_log_out");
export {zif_aff_log};
//# sourceMappingURL=zif_aff_log.intf.mjs.map