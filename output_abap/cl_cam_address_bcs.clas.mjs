const {cx_root} = await import("./cx_root.clas.mjs");
// cl_cam_address_bcs.clas.abap
class cl_cam_address_bcs {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_RECIPIENT_BCS","IF_SENDER_BCS"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create_internet_address(INPUT) {
    return cl_cam_address_bcs.create_internet_address(INPUT);
  }
  static async create_internet_address(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "CL_CAM_ADDRESS_BCS"});
    let i_address_string = new abap.types.Character();
    if (INPUT && INPUT.i_address_string) {i_address_string = INPUT.i_address_string;}
    let i_address_name = new abap.types.Character();
    if (INPUT && INPUT.i_address_name) {i_address_name = INPUT.i_address_name;}
    let i_incl_sapuser = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.i_incl_sapuser) {i_incl_sapuser = INPUT.i_incl_sapuser;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return result;
  }
}
abap.Classes['CL_CAM_ADDRESS_BCS'] = cl_cam_address_bcs;
export {cl_cam_address_bcs};
//# sourceMappingURL=cl_cam_address_bcs.clas.mjs.map