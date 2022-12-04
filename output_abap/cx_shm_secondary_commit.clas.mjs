const {cx_shm_detach_error} = await import("./cx_shm_detach_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_secondary_commit.clas.abap
class cx_shm_secondary_commit extends cx_shm_detach_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_SECONDARY_COMMIT'] = cx_shm_secondary_commit;
export {cx_shm_secondary_commit};
//# sourceMappingURL=cx_shm_secondary_commit.clas.mjs.map