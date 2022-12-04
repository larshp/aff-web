const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_authority_check.clas.abap
class kernel_authority_check {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async call() {
    return kernel_authority_check.call();
  }
  static async call() {
    abap.builtin.sy.get().subrc.set(new abap.types.Integer().set(0));
  }
}
abap.Classes['KERNEL_AUTHORITY_CHECK'] = kernel_authority_check;
export {kernel_authority_check};
//# sourceMappingURL=kernel_authority_check.clas.mjs.map