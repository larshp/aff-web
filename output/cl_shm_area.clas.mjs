const {cx_shm_general_error} = await import("./cx_shm_general_error.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_shm_area.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_109200001 = new abap.types.Integer().set(109200001);
const constant_1302197000 = new abap.types.Integer().set(1302197000);
const constant_1302197002 = new abap.types.Integer().set(1302197002);
const constant_1302197003 = new abap.types.Integer().set(1302197003);
const constant_281119720 = new abap.types.Integer().set(281119720);
const constant_319200300 = new abap.types.Integer().set(319200300);
class cl_shm_area extends cx_shm_general_error {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.properties = new abap.types.Structure({auto_build: new abap.types.Character({qualifiedName: "SHM_PROPERTIES-AUTO_BUILD"}), has_versions: new abap.types.Character({qualifiedName: "SHM_PROPERTIES-HAS_VERSIONS"})}, "SHM_PROPERTIES");
    this.inst_name = new abap.types.Character({length: 80, qualifiedName: "SHM_INST_NAME"});
    this.client = new abap.types.Character({length: 3, qualifiedName: "MANDT"});
    this.inst_trace_active = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    this.inst_trace_service = new abap.types.ABAPObject({qualifiedName: "IF_SHM_TRACE"});
    this._lock = new abap.types.Hex({length: 8});
    this.default_instance = cl_shm_area.default_instance;
    this.invocation_mode_explicit = cl_shm_area.invocation_mode_explicit;
    this.life_context_appserver = cl_shm_area.life_context_appserver;
    this.attach_mode_default = cl_shm_area.attach_mode_default;
    this.attach_mode_wait = cl_shm_area.attach_mode_wait;
    this.affect_local_server = cl_shm_area.affect_local_server;
    this.attach_mode_wait_2nd_try = cl_shm_area.attach_mode_wait_2nd_try;
    return this;
  }
  async is_valid() {
    let valid = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return valid;
  }
  async _free_instance71(INPUT) {
    return cl_shm_area._free_instance71(INPUT);
  }
  static async _free_instance71(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "SHM_RC"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let inst_name = new abap.types.Character({length: 80, qualifiedName: "SHM_INST_NAME"});
    if (INPUT && INPUT.inst_name) {inst_name.set(INPUT.inst_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    if (INPUT === undefined || INPUT.client_supplied === undefined) {client_supplied = abap.builtin.abap_false;}
    let transactional = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.transactional) {transactional = INPUT.transactional;}
    if (INPUT === undefined || INPUT.transactional === undefined) {transactional = abap.builtin.abap_false;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let terminate_changer = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.terminate_changer) {terminate_changer = INPUT.terminate_changer;}
    let affect_server = new abap.types.Integer({qualifiedName: "SHM_AFFECT_SERVER"});
    if (INPUT && INPUT.affect_server) {affect_server.set(INPUT.affect_server);}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    if (INPUT === undefined || INPUT.life_context === undefined) {life_context = this.life_context_appserver;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async detach_commit() {
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async detach() {
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async _attach_read71(INPUT) {
    let sneak_mode = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.sneak_mode) {sneak_mode = INPUT.sneak_mode;}
    if (INPUT === undefined || INPUT.sneak_mode === undefined) {sneak_mode = abap.builtin.abap_false;}
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    let root = new abap.types.ABAPObject();
    if (INPUT && INPUT.root) {root = INPUT.root;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async _get_instance_infos71(INPUT) {
    return cl_shm_area._get_instance_infos71(INPUT);
  }
  static async _get_instance_infos71(INPUT) {
    let infos = new abap.types.Integer({qualifiedName: "SHM_INST_INFOS"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    if (INPUT === undefined || INPUT.client_supplied === undefined) {client_supplied = abap.builtin.abap_false;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return infos;
  }
  async _detach_area71(INPUT) {
    return cl_shm_area._detach_area71(INPUT);
  }
  static async _detach_area71(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "SHM_RC"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async _free_area71(INPUT) {
    return cl_shm_area._free_area71(INPUT);
  }
  static async _free_area71(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "SHM_RC"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    if (INPUT === undefined || INPUT.client_supplied === undefined) {client_supplied = abap.builtin.abap_false;}
    let transactional = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.transactional) {transactional = INPUT.transactional;}
    if (INPUT === undefined || INPUT.transactional === undefined) {transactional = abap.builtin.abap_false;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let terminate_changer = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.terminate_changer) {terminate_changer = INPUT.terminate_changer;}
    let affect_server = new abap.types.Integer({qualifiedName: "SHM_AFFECT_SERVER"});
    if (INPUT && INPUT.affect_server) {affect_server.set(INPUT.affect_server);}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    if (INPUT === undefined || INPUT.life_context === undefined) {life_context = this.life_context_appserver;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async _set_root(INPUT) {
    let root = new abap.types.ABAPObject();
    if (INPUT && INPUT.root) {root = INPUT.root;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async _invalidate_instance71(INPUT) {
    return cl_shm_area._invalidate_instance71(INPUT);
  }
  static async _invalidate_instance71(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "SHM_RC"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let inst_name = new abap.types.Character({length: 80, qualifiedName: "SHM_INST_NAME"});
    if (INPUT && INPUT.inst_name) {inst_name.set(INPUT.inst_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    if (INPUT === undefined || INPUT.client_supplied === undefined) {client_supplied = abap.builtin.abap_false;}
    let transactional = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.transactional) {transactional = INPUT.transactional;}
    if (INPUT === undefined || INPUT.transactional === undefined) {transactional = abap.builtin.abap_false;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let terminate_changer = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.terminate_changer) {terminate_changer = INPUT.terminate_changer;}
    let affect_server = new abap.types.Integer({qualifiedName: "SHM_AFFECT_SERVER"});
    if (INPUT && INPUT.affect_server) {affect_server.set(INPUT.affect_server);}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    if (INPUT === undefined || INPUT.life_context === undefined) {life_context = this.life_context_appserver;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async _invalidate_area71(INPUT) {
    return cl_shm_area._invalidate_area71(INPUT);
  }
  static async _invalidate_area71(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "SHM_RC"});
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let client = new abap.types.Character({length: 3, qualifiedName: "SHM_CLIENT"});
    if (INPUT && INPUT.client) {client.set(INPUT.client);}
    let client_supplied = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_supplied) {client_supplied = INPUT.client_supplied;}
    if (INPUT === undefined || INPUT.client_supplied === undefined) {client_supplied = abap.builtin.abap_false;}
    let transactional = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.transactional) {transactional = INPUT.transactional;}
    if (INPUT === undefined || INPUT.transactional === undefined) {transactional = abap.builtin.abap_false;}
    let client_dependent = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.client_dependent) {client_dependent = INPUT.client_dependent;}
    if (INPUT === undefined || INPUT.client_dependent === undefined) {client_dependent = abap.builtin.abap_false;}
    let terminate_changer = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.terminate_changer) {terminate_changer = INPUT.terminate_changer;}
    let affect_server = new abap.types.Integer({qualifiedName: "SHM_AFFECT_SERVER"});
    if (INPUT && INPUT.affect_server) {affect_server.set(INPUT.affect_server);}
    let life_context = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
    if (INPUT && INPUT.life_context) {life_context.set(INPUT.life_context);}
    if (INPUT === undefined || INPUT.life_context === undefined) {life_context = this.life_context_appserver;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async _attach_update70(INPUT) {
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let mode = new abap.types.Integer({qualifiedName: "SHM_ATTACH_MODE"});
    if (INPUT && INPUT.mode) {mode.set(INPUT.mode);}
    let root = new abap.types.ABAPObject();
    if (INPUT && INPUT.root) {root = INPUT.root;}
    let wait_time = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.wait_time) {wait_time = INPUT.wait_time;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async _attach_write70(INPUT) {
    let area_name = new abap.types.Character({length: 30, qualifiedName: "SHM_AREA_NAME"});
    if (INPUT && INPUT.area_name) {area_name.set(INPUT.area_name);}
    let mode = new abap.types.Integer({qualifiedName: "SHM_ATTACH_MODE"});
    if (INPUT && INPUT.mode) {mode.set(INPUT.mode);}
    let root = new abap.types.ABAPObject();
    if (INPUT && INPUT.root) {root = INPUT.root;}
    let wait_time = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.wait_time) {wait_time = INPUT.wait_time;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
}
abap.Classes['CL_SHM_AREA'] = cl_shm_area;
cl_shm_area.default_instance = new abap.types.Character({length: 80, qualifiedName: "SHM_INST_NAME"});
cl_shm_area.default_instance.set('$DEFAULT_INSTANCE$');
cl_shm_area.invocation_mode_explicit = new abap.types.Integer({qualifiedName: "SHM_CONSTR_INVOCATION_MODE"});
cl_shm_area.invocation_mode_explicit.set(319200300);
cl_shm_area.life_context_appserver = new abap.types.Integer({qualifiedName: "SHM_LIFE_CONTEXT"});
cl_shm_area.life_context_appserver.set(109200001);
cl_shm_area.attach_mode_default = new abap.types.Integer({qualifiedName: "SHM_ATTACH_MODE"});
cl_shm_area.attach_mode_default.set(1302197000);
cl_shm_area.attach_mode_wait = new abap.types.Integer({qualifiedName: "SHM_ATTACH_MODE"});
cl_shm_area.attach_mode_wait.set(1302197002);
cl_shm_area.affect_local_server = new abap.types.Integer({qualifiedName: "SHM_AFFECT_SERVER"});
cl_shm_area.affect_local_server.set(281119720);
cl_shm_area.attach_mode_wait_2nd_try = new abap.types.Integer({qualifiedName: "SHM_ATTACH_MODE"});
cl_shm_area.attach_mode_wait_2nd_try.set(1302197003);
export {cl_shm_area};
//# sourceMappingURL=cl_shm_area.clas.mjs.map