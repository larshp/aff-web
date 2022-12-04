const {cl_abap_typedescr} = await import("./cl_abap_typedescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_objectdescr.clas.abap
class cl_abap_objectdescr extends cl_abap_typedescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.attributes = new abap.types.Table(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "name": new abap.types.Character(61, {"qualifiedName":"abap_attrname"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_constant": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_virtual": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_read_only": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_attrname"})}, "abap_attrdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_attrdescr_tab");
    this.methods = new abap.types.Table(new abap.types.Structure({"parameters": new abap.types.Table(new abap.types.Structure({"length": new abap.types.Integer({qualifiedName: "LENGTH"}), "decimals": new abap.types.Integer({qualifiedName: "DECIMALS"}), "type_kind": new abap.types.Character(1, {"qualifiedName":"abap_typekind"}), "name": new abap.types.Character(30, {"qualifiedName":"abap_parmname"}), "parm_kind": new abap.types.Character(1, {"qualifiedName":"abap_parmkind"}), "by_value": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_optional": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "abap_parmdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_parmdescr_tab"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"abap_excpname"}), "is_resumable": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "abap_excpdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_excpdescr_tab"), "name": new abap.types.Character(61, {"qualifiedName":"abap_methname"}), "for_event": new abap.types.Character(61, {"qualifiedName":"abap_evntname"}), "of_class": new abap.types.Character(30, {"qualifiedName":"abap_classname"}), "visibility": new abap.types.Character(1, {"qualifiedName":"abap_visibility"}), "is_interface": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_redefined": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_abstract": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_final": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "is_class": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "alias_for": new abap.types.Character(61, {"qualifiedName":"abap_methname"}), "is_raising_excps": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "abap_methdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_methdescr_tab");
    this.interfaces = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"abap_intfname"}), "is_inherited": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"})}, "abap_intfdescr"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":["NAME"]},"secondary":[]}, "abap_intfdescr_tab");
    this.mv_object_name = new abap.types.String({qualifiedName: "STRING"});
    this.mv_object_type = new abap.types.String({qualifiedName: "STRING"});
    this.changing = cl_abap_objectdescr.changing;
    this.exporting = cl_abap_objectdescr.exporting;
    this.importing = cl_abap_objectdescr.importing;
    this.receiving = cl_abap_objectdescr.receiving;
    this.returning = cl_abap_objectdescr.returning;
    this.private_ = cl_abap_objectdescr.private_;
    this.protected = cl_abap_objectdescr.protected;
    this.public_ = cl_abap_objectdescr.public_;
    return this;
  }
  async get_method_parameter_type(INPUT) {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    let p_method_name = new abap.types.Character(4);
    if (INPUT && INPUT.p_method_name) {p_method_name = INPUT.p_method_name;}
    let p_parameter_name = new abap.types.Character(4);
    if (INPUT && INPUT.p_parameter_name) {p_parameter_name = INPUT.p_parameter_name;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return p_descr_ref;
  }
  async get_interface_type(INPUT) {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_INTFDESCR"});
    let p_name = new abap.types.Character(4);
    if (INPUT && INPUT.p_name) {p_name = INPUT.p_name;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return p_descr_ref;
  }
  async get_attribute_type(INPUT) {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    let p_name = new abap.types.Character(4);
    if (INPUT && INPUT.p_name) {p_name = INPUT.p_name;}
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let l_sub = new abap.types.String({qualifiedName: "STRING"});
    let l_any = new abap.types.String({qualifiedName: "STRING"});
    lv_name.set(p_name);
    let foo = abap.Classes[this.mv_object_name.get()];
    abap.statements.concatenate({source: [this.mv_object_name, new abap.types.Character(1).set('$'), lv_name], target: l_sub});
    l_sub.set(abap.builtin.to_lower({val: l_sub}));
    l_any = foo[l_sub.get()];
    await abap.statements.cast(p_descr_ref, (await this.describe_by_data({p_data: l_any})));
    return p_descr_ref;
  }
}
abap.Classes['CL_ABAP_OBJECTDESCR'] = cl_abap_objectdescr;
cl_abap_objectdescr.changing = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
cl_abap_objectdescr.changing.set('C');
cl_abap_objectdescr.exporting = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
cl_abap_objectdescr.exporting.set('E');
cl_abap_objectdescr.importing = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
cl_abap_objectdescr.importing.set('I');
cl_abap_objectdescr.receiving = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
cl_abap_objectdescr.receiving.set('R');
cl_abap_objectdescr.returning = new abap.types.Character(1, {"qualifiedName":"abap_parmkind"});
cl_abap_objectdescr.returning.set('R');
cl_abap_objectdescr.private_ = new abap.types.Character(1, {"qualifiedName":"abap_visibility"});
cl_abap_objectdescr.private_.set('I');
cl_abap_objectdescr.protected = new abap.types.Character(1, {"qualifiedName":"abap_visibility"});
cl_abap_objectdescr.protected.set('O');
cl_abap_objectdescr.public_ = new abap.types.Character(1, {"qualifiedName":"abap_visibility"});
cl_abap_objectdescr.public_.set('U');
export {cl_abap_objectdescr};
//# sourceMappingURL=cl_abap_objectdescr.clas.mjs.map