const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_lock.clas.abap
class kernel_lock {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async enqueue(INPUT) {
    return kernel_lock.enqueue(INPUT);
  }
  static async enqueue(INPUT) {
    let input = new abap.types.Character(4);
    if (INPUT && INPUT.input) {input = INPUT.input;}
    abap.builtin.sy.get().subrc.set(new abap.types.Integer().set(0));
    abap.builtin.sy.get().subrc.set(0);
  }
  async dequeue(INPUT) {
    return kernel_lock.dequeue(INPUT);
  }
  static async dequeue(INPUT) {
    let input = new abap.types.Character(4);
    if (INPUT && INPUT.input) {input = INPUT.input;}
    abap.builtin.sy.get().subrc.set(new abap.types.Integer().set(0));
  }
}
abap.Classes['KERNEL_LOCK'] = kernel_lock;
export {kernel_lock};
//# sourceMappingURL=kernel_lock.clas.mjs.map