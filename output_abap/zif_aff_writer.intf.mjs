// zif_aff_writer.intf.abap
class zif_aff_writer {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['ZIF_AFF_WRITER'] = zif_aff_writer;
zif_aff_writer.zif_aff_writer$type_info = new abap.types.Structure({"string": new abap.types.String({qualifiedName: "STRING"}), "numeric": new abap.types.String({qualifiedName: "STRING"}), "boolean": new abap.types.String({qualifiedName: "STRING"}), "date_time": new abap.types.String({qualifiedName: "STRING"})});
zif_aff_writer.zif_aff_writer$type_info.get().string.set('string');
zif_aff_writer.zif_aff_writer$type_info.get().numeric.set('numeric');
zif_aff_writer.zif_aff_writer$type_info.get().boolean.set('boolean');
zif_aff_writer.zif_aff_writer$type_info.get().date_time.set('date_time');
zif_aff_writer.zif_aff_writer$operation = new abap.types.Structure({"initial": new abap.types.String({qualifiedName: "STRING"}), "write_element": new abap.types.String({qualifiedName: "STRING"}), "open_structure": new abap.types.String({qualifiedName: "STRING"}), "close_structure": new abap.types.String({qualifiedName: "STRING"}), "open_table": new abap.types.String({qualifiedName: "STRING"}), "close_table": new abap.types.String({qualifiedName: "STRING"})});
zif_aff_writer.zif_aff_writer$operation.get().initial.set('initial');
zif_aff_writer.zif_aff_writer$operation.get().write_element.set('write_element');
zif_aff_writer.zif_aff_writer$operation.get().open_structure.set('open_structure');
zif_aff_writer.zif_aff_writer$operation.get().close_structure.set('close_structure');
zif_aff_writer.zif_aff_writer$operation.get().open_table.set('open_table');
zif_aff_writer.zif_aff_writer$operation.get().close_table.set('close_table');
export {zif_aff_writer};
//# sourceMappingURL=zif_aff_writer.intf.mjs.map