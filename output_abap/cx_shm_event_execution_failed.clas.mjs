const {cx_shm_completion_error} = await import("./cx_shm_completion_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cx_shm_event_execution_failed.clas.abap
class cx_shm_event_execution_failed extends cx_shm_completion_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CX_SHM_EVENT_EXECUTION_FAILED'] = cx_shm_event_execution_failed;
export {cx_shm_event_execution_failed};
//# sourceMappingURL=cx_shm_event_execution_failed.clas.mjs.map