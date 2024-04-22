const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_call.clas.abap
class kernel_call {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async call(INPUT) {
    return kernel_call.call(INPUT);
  }
  static async call(INPUT) {
    let input = new abap.types.Character(4);
    if (INPUT && INPUT.input) {input = INPUT.input;}
    let uuid = new abap.types.Hex({length: 16});
    let name = new abap.types.String({qualifiedName: "STRING"});
    name.set(INPUT.name);
    if (abap.compare.eq(name, new abap.types.Character(10).set('RFCControl'))) {
      uuid.set((await abap.Classes['CL_SYSTEM_UUID'].if_system_uuid_static$create_uuid_x16()));
      INPUT.uuid.set(uuid);
    }
  }
}
abap.Classes['KERNEL_CALL'] = kernel_call;
export {kernel_call};
//# sourceMappingURL=kernel_call.clas.mjs.map