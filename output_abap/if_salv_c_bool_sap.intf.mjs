// if_salv_c_bool_sap.intf.abap
class if_salv_c_bool_sap {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_SALV_C_BOOL_SAP'] = if_salv_c_bool_sap;
if_salv_c_bool_sap.if_salv_c_bool_sap$true_ = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
if_salv_c_bool_sap.if_salv_c_bool_sap$true_.set(abap.builtin.abap_true);
if_salv_c_bool_sap.if_salv_c_bool_sap$false_ = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
if_salv_c_bool_sap.if_salv_c_bool_sap$false_.set(abap.builtin.abap_false);
export {if_salv_c_bool_sap};
//# sourceMappingURL=if_salv_c_bool_sap.intf.mjs.map