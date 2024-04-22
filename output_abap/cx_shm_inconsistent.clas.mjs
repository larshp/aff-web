const {cx_shm_attach_error} = await import("./cx_shm_attach_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_inconsistent.clas.abap
class cx_shm_inconsistent extends cx_shm_attach_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_INCONSISTENT'] = cx_shm_inconsistent;
export {cx_shm_inconsistent};
//# sourceMappingURL=cx_shm_inconsistent.clas.mjs.map