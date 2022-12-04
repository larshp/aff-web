const {cx_root} = await import("./cx_root.clas.mjs");
// cl_apc_wsp_ext_stateless_base.clas.abap
class cl_apc_wsp_ext_stateless_base {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_APC_WSP_EXTENSION"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_apc_wsp_extension$on_start(INPUT) {
    let i_context = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_SERVER_CONTEXT"});
    if (INPUT && INPUT.i_context) {i_context.set(INPUT.i_context);}
    let i_message_manager = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE_MANAGER"});
    if (INPUT && INPUT.i_message_manager) {i_message_manager.set(INPUT.i_message_manager);}
    return;
  }
  async if_apc_wsp_extension$on_message(INPUT) {
    let i_message = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE"});
    if (INPUT && INPUT.i_message) {i_message.set(INPUT.i_message);}
    let i_message_manager = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE_MANAGER"});
    if (INPUT && INPUT.i_message_manager) {i_message_manager.set(INPUT.i_message_manager);}
    let i_context = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_SERVER_CONTEXT"});
    if (INPUT && INPUT.i_context) {i_context.set(INPUT.i_context);}
    return;
  }
}
abap.Classes['CL_APC_WSP_EXT_STATELESS_BASE'] = cl_apc_wsp_ext_stateless_base;
export {cl_apc_wsp_ext_stateless_base};
//# sourceMappingURL=cl_apc_wsp_ext_stateless_base.clas.mjs.map