const {cx_dynamic_check} = await import("./cx_dynamic_check.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_cx_assert.clas.abap
class kernel_cx_assert extends cx_dynamic_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.actual = new abap.types.String({qualifiedName: "STRING"});
    this.expected = new abap.types.String({qualifiedName: "STRING"});
    this.msg = new abap.types.String({qualifiedName: "STRING"});
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let previous = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.previous) {previous.set(INPUT.previous);}
    let expected = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.expected) {expected.set(INPUT.expected);}
    let actual = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.actual) {actual.set(INPUT.actual);}
    await super.constructor_({previous: previous});
    this.me.get().expected.set(expected);
    this.me.get().actual.set(actual);
    this.me.get().msg.set(msg);
    if (abap.compare.initial(this.me.get().msg)) {
      this.me.get().msg.set(new abap.types.String().set(`Unit test assertion failed`));
    }
    return this;
  }
}
abap.Classes['KERNEL_CX_ASSERT'] = kernel_cx_assert;
export {kernel_cx_assert};
//# sourceMappingURL=kernel_cx_assert.clas.mjs.map