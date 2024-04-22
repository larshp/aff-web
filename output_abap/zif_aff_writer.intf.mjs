// zif_aff_writer.intf.abap
class zif_aff_writer {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {"TYPE_INFO": {"type": () => {return new abap.types.Structure({"string": new abap.types.String({qualifiedName: "STRING"}), "numeric": new abap.types.String({qualifiedName: "STRING"}), "boolean": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"},
  "OPERATION": {"type": () => {return new abap.types.Structure({"initial": new abap.types.String({qualifiedName: "STRING"}), "write_element": new abap.types.String({qualifiedName: "STRING"}), "open_structure": new abap.types.String({qualifiedName: "STRING"}), "close_structure": new abap.types.String({qualifiedName: "STRING"}), "open_table": new abap.types.String({qualifiedName: "STRING"}), "close_table": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});}, "visibility": "U", "is_constant": "X", "is_class": "X"}};
  static METHODS = {"WRITE_ELEMENT": {"visibility": "U", "parameters": {"ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}}},
  "OPEN_NODE": {"visibility": "U", "parameters": {"NODE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "NODE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "CLOSE_NODE": {"visibility": "U", "parameters": {"NODE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "NODE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_OUTPUT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}},
  "GET_LOG": {"visibility": "U", "parameters": {"LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}}},
  "VALIDATE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});}, "is_optional": " "}, "SOURCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}}},
  "OPEN_INCLUDE": {"visibility": "U", "parameters": {"INCLUDE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}}},
  "CLOSE_INCLUDE": {"visibility": "U", "parameters": {}}};
}
abap.Classes['ZIF_AFF_WRITER'] = zif_aff_writer;
zif_aff_writer.zif_aff_writer$type_info = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "STRING"}), "numeric": new abap.types.String({qualifiedName: "STRING"}), "boolean": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
zif_aff_writer.zif_aff_writer$type_info.get().string.set('string');
zif_aff_writer.zif_aff_writer$type_info.get().numeric.set('numeric');
zif_aff_writer.zif_aff_writer$type_info.get().boolean.set('boolean');
zif_aff_writer.zif_aff_writer$type_info.get().date_time.set('date_time');
zif_aff_writer.zif_aff_writer$operation = new abap.types.Structure({"initial": new abap.types.String({qualifiedName: "STRING"}), "write_element": new abap.types.String({qualifiedName: "STRING"}), "open_structure": new abap.types.String({qualifiedName: "STRING"}), "close_structure": new abap.types.String({qualifiedName: "STRING"}), "open_table": new abap.types.String({qualifiedName: "STRING"}), "close_table": new abap.types.String({qualifiedName: "STRING"})}, undefined, undefined, {}, {});
zif_aff_writer.zif_aff_writer$operation.get().initial.set('initial');
zif_aff_writer.zif_aff_writer$operation.get().write_element.set('write_element');
zif_aff_writer.zif_aff_writer$operation.get().open_structure.set('open_structure');
zif_aff_writer.zif_aff_writer$operation.get().close_structure.set('close_structure');
zif_aff_writer.zif_aff_writer$operation.get().open_table.set('open_table');
zif_aff_writer.zif_aff_writer$operation.get().close_table.set('close_table');
export {zif_aff_writer};
//# sourceMappingURL=zif_aff_writer.intf.mjs.map