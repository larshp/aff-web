// if_salv_c_selection_mode.intf.abap
class if_salv_c_selection_mode {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_SALV_C_SELECTION_MODE'] = if_salv_c_selection_mode;
if_salv_c_selection_mode.if_salv_c_selection_mode$cell = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_selection_mode.if_salv_c_selection_mode$cell.set(1);
if_salv_c_selection_mode.if_salv_c_selection_mode$multiple = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_selection_mode.if_salv_c_selection_mode$multiple.set(2);
if_salv_c_selection_mode.if_salv_c_selection_mode$none = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_selection_mode.if_salv_c_selection_mode$none.set(3);
if_salv_c_selection_mode.if_salv_c_selection_mode$row_column = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_selection_mode.if_salv_c_selection_mode$row_column.set(4);
if_salv_c_selection_mode.if_salv_c_selection_mode$single = new abap.types.Integer({qualifiedName: "I"});
if_salv_c_selection_mode.if_salv_c_selection_mode$single.set(5);
export {if_salv_c_selection_mode};
//# sourceMappingURL=if_salv_c_selection_mode.intf.mjs.map