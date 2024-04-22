const {cx_root} = await import("./cx_root.clas.mjs");
// cl_shm_service.clas.abap
class cl_shm_service {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async initialize(INPUT) {
    return cl_shm_service.initialize(INPUT);
  }
  static async initialize(INPUT) {
    let area_name = new abap.types.Character(30, {"qualifiedName":"SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let client = new abap.types.Character(3, {"qualifiedName":"SHMA_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let attributes = new abap.types.Structure({"area_name": new abap.types.Character(30, {"qualifiedName":"SHM_AREA_NAME"}), "properties": new abap.types.Structure({"auto_build": new abap.types.Character(1, {}), "has_versions": new abap.types.Character(1, {})}, "SHM_PROPERTIES"), "auto_build": new abap.types.Character(1, {}), "has_versions": new abap.types.Character(1, {})}, "SHMA_ATTRIBUTES");
    if (INPUT && INPUT.attributes) {attributes = INPUT.attributes;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async get_auto_build_class_name(INPUT) {
    return cl_shm_service.get_auto_build_class_name(INPUT);
  }
  static async get_auto_build_class_name(INPUT) {
    let auto_build_class_name = new abap.types.Character(30, {"qualifiedName":"SHM_AUTO_BUILD_CLASS_NAME"});
    let area_name = new abap.types.Character(30, {"qualifiedName":"SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return auto_build_class_name;
  }
  async trace_get_service(INPUT) {
    return cl_shm_service.trace_get_service(INPUT);
  }
  static async trace_get_service(INPUT) {
    let trace_service = new abap.types.ABAPObject({qualifiedName: "IF_SHM_TRACE"});
    let area_name = new abap.types.Character(30, {"qualifiedName":"SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    return trace_service;
    return trace_service;
  }
  async trace_is_variant_active(INPUT) {
    return cl_shm_service.trace_is_variant_active(INPUT);
  }
  static async trace_is_variant_active(INPUT) {
    let is_active = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let service_name = new abap.types.Character(32, {"qualifiedName":"SHMM_TRC_VARIANT_NAME"});
    if (INPUT && INPUT.service_name) {service_name.set(INPUT.service_name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return is_active;
  }
}
abap.Classes['CL_SHM_SERVICE'] = cl_shm_service;
export {cl_shm_service};
//# sourceMappingURL=cl_shm_service.clas.mjs.map