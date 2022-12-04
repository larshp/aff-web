const {cx_root} = await import("./cx_root.clas.mjs");
// cl_salv_events_table.clas.abap
class cl_salv_events_table {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CL_SALV_EVENTS_TABLE'] = cl_salv_events_table;
export {cl_salv_events_table};
//# sourceMappingURL=cl_salv_events_table.clas.mjs.map