// if_aunit_constants.intf.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
class if_aunit_constants {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_AUNIT_CONSTANTS'] = if_aunit_constants;
if_aunit_constants.if_aunit_constants$no = new abap.types.Integer({qualifiedName: "I"});
if_aunit_constants.if_aunit_constants$no.set(0);
if_aunit_constants.if_aunit_constants$critical = new abap.types.Integer({qualifiedName: "I"});
if_aunit_constants.if_aunit_constants$critical.set(1);
if_aunit_constants.if_aunit_constants$fatal = new abap.types.Integer({qualifiedName: "I"});
if_aunit_constants.if_aunit_constants$fatal.set(1);
if_aunit_constants.if_aunit_constants$tolerable = new abap.types.Integer({qualifiedName: "I"});
if_aunit_constants.if_aunit_constants$tolerable.set(1);
if_aunit_constants.if_aunit_constants$method = new abap.types.Integer({qualifiedName: "I"});
if_aunit_constants.if_aunit_constants$method.set(1);
if_aunit_constants.if_aunit_constants$severity = new abap.types.Structure({low: new abap.types.Integer({qualifiedName: "INT1"}), medium: new abap.types.Integer({qualifiedName: "INT1"}), high: new abap.types.Integer({qualifiedName: "INT1"})});
if_aunit_constants.if_aunit_constants$severity.get().low.set(0);
if_aunit_constants.if_aunit_constants$severity.get().medium.set(1);
if_aunit_constants.if_aunit_constants$severity.get().high.set(2);
if_aunit_constants.if_aunit_constants$quit = new abap.types.Structure({no: new abap.types.Integer({qualifiedName: "INT1"}), test: new abap.types.Integer({qualifiedName: "INT1"})});
if_aunit_constants.if_aunit_constants$quit.get().no.set(0);
if_aunit_constants.if_aunit_constants$quit.get().test.set(1);
export {if_aunit_constants};
//# sourceMappingURL=if_aunit_constants.intf.mjs.map