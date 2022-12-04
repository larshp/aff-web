const {cx_shm_general_error} = await import("./cx_shm_general_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_initial_reference.clas.abap
class cx_shm_initial_reference extends cx_shm_general_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_INITIAL_REFERENCE'] = cx_shm_initial_reference;
export {cx_shm_initial_reference};
//# sourceMappingURL=cx_shm_initial_reference.clas.mjs.map