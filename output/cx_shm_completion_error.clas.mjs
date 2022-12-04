const {cx_shm_detach_error} = await import("./cx_shm_detach_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_completion_error.clas.abap
class cx_shm_completion_error extends cx_shm_detach_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_COMPLETION_ERROR'] = cx_shm_completion_error;
export {cx_shm_completion_error};
//# sourceMappingURL=cx_shm_completion_error.clas.mjs.map