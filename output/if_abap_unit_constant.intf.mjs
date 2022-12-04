// if_abap_unit_constant.intf.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_5 = new abap.types.Integer().set(5);
class if_abap_unit_constant {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_ABAP_UNIT_CONSTANT'] = if_abap_unit_constant;
if_abap_unit_constant.if_abap_unit_constant$severity = new abap.types.Structure({low: new abap.types.Integer({qualifiedName: "INT1"}), medium: new abap.types.Integer({qualifiedName: "INT1"}), high: new abap.types.Integer({qualifiedName: "INT1"})});
if_abap_unit_constant.if_abap_unit_constant$severity.get().low.set(0);
if_abap_unit_constant.if_abap_unit_constant$severity.get().medium.set(1);
if_abap_unit_constant.if_abap_unit_constant$severity.get().high.set(2);
if_abap_unit_constant.if_abap_unit_constant$quit = new abap.types.Structure({test: new abap.types.Integer({qualifiedName: "INT1"}), no: new abap.types.Integer({qualifiedName: "INT1"})});
if_abap_unit_constant.if_abap_unit_constant$quit.get().test.set(1);
if_abap_unit_constant.if_abap_unit_constant$quit.get().no.set(5);
export {if_abap_unit_constant};
//# sourceMappingURL=if_abap_unit_constant.intf.mjs.map