const {cx_root} = await import("./cx_root.clas.mjs");
// cl_system_uuid.clas.abap
const constant_4 = new abap.types.Integer().set(4);
class cl_system_uuid {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SYSTEM_UUID_RFC4122_STATIC","IF_SYSTEM_UUID_STATIC"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_system_uuid_static$create_uuid_x16() {
    return cl_system_uuid.if_system_uuid_static$create_uuid_x16();
  }
  static async if_system_uuid_static$create_uuid_x16() {
    let uuid = new abap.types.Hex({length: 16});
    const crypto = await import("crypto");
    uuid.set(crypto.randomBytes(16).toString("hex").toUpperCase());
    return uuid;
  }
  async if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT) {
    return cl_system_uuid.if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT);
  }
  static async if_system_uuid_rfc4122_static$create_uuid_c36_by_version(INPUT) {
    let uuid = new abap.types.Character({length: 36, qualifiedName: "SYSUUID_C36"});
    let version = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.version) {version.set(INPUT.version);}
    abap.statements.assert(abap.compare.eq(version, constant_4));
    const crypto = await import("crypto");
    uuid.set(crypto.randomUUID());
    return uuid;
  }
}
abap.Classes['CL_SYSTEM_UUID'] = cl_system_uuid;
export {cl_system_uuid};
//# sourceMappingURL=cl_system_uuid.clas.mjs.map