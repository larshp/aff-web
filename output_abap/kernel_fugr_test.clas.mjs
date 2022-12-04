const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_fugr_test.clas.abap
class kernel_fugr_test {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['KERNEL_FUGR_TEST'] = kernel_fugr_test;
export {kernel_fugr_test};
//# sourceMappingURL=kernel_fugr_test.clas.mjs.map