await import("./cl_apc_tcp_client_manager.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_apc_tcp_client_manager.clas.abap
class cl_apc_tcp_client_manager {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create(INPUT) {
    return cl_apc_tcp_client_manager.create(INPUT);
  }
  static async create(INPUT) {
    let ri_client = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_CLIENT"});
    let i_host = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_host) {i_host.set(INPUT.i_host);}
    let i_port = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.i_port) {i_port.set(INPUT.i_port);}
    let i_frame = new abap.types.Structure({"frame_type": new abap.types.Integer({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-FRAME_TYPE"}), "fixed_length": new abap.types.Integer({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-FIXED_LENGTH"}), "terminator": new abap.types.String({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-TERMINATOR"}), "length_field_length": new abap.types.Integer({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-LENGTH_FIELD_LENGTH"}), "length_field_offset": new abap.types.Integer({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-LENGTH_FIELD_OFFSET"}), "length_field_header": new abap.types.Integer({qualifiedName: "IF_ABAP_CHANNEL_TYPES=>TY_APC_TCP_FRAME-LENGTH_FIELD_HEADER"})}, "if_abap_channel_types=>ty_apc_tcp_frame");
    if (INPUT && INPUT.i_frame) {i_frame.set(INPUT.i_frame);}
    let i_event_handler = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER"});
    if (INPUT && INPUT.i_event_handler) {i_event_handler.set(INPUT.i_event_handler);}
    ri_client.set(await (new abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT']()).constructor_({iv_host: i_host, iv_port: i_port, io_handler: i_event_handler}));
    return ri_client;
  }
}
abap.Classes['CL_APC_TCP_CLIENT_MANAGER'] = cl_apc_tcp_client_manager;
export {cl_apc_tcp_client_manager};
//# sourceMappingURL=cl_apc_tcp_client_manager.clas.mjs.map