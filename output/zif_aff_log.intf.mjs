// zif_aff_log.intf.abap
class zif_aff_log {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['ZIF_AFF_LOG'] = zif_aff_log;
zif_aff_log.zif_aff_log$c_message_type = new abap.types.Structure({error: new abap.types.Character({qualifiedName: "SYMSGTY"}), warning: new abap.types.Character({qualifiedName: "SYMSGTY"}), info: new abap.types.Character({qualifiedName: "SYMSGTY"})});
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
export {zif_aff_log};
//# sourceMappingURL=zif_aff_log.intf.mjs.map