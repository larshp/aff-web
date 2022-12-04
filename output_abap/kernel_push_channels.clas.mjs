const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_push_channels.clas.abap
class kernel_push_channels {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async wait() {
    return kernel_push_channels.wait();
  }
  static async wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
}
abap.Classes['KERNEL_PUSH_CHANNELS'] = kernel_push_channels;
export {kernel_push_channels};
//# sourceMappingURL=kernel_push_channels.clas.mjs.map