const {cx_shm_general_error} = await import("./cx_shm_general_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_wrong_handle.clas.abap
class cx_shm_wrong_handle extends cx_shm_general_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_WRONG_HANDLE'] = cx_shm_wrong_handle;
export {cx_shm_wrong_handle};
//# sourceMappingURL=cx_shm_wrong_handle.clas.mjs.map