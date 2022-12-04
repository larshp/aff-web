const {cx_root} = await import("./cx_root.clas.mjs");
// cl_apc_tcp_client_manager.clas.locals_imp.abap
const constant_1 = new abap.types.Integer().set(1);
class lcl_message {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_APC_WSP_MESSAGE"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_data = new abap.types.XString({qualifiedName: "XSTRING"});
    return this;
  }
  async if_apc_wsp_message$get_binary() {
    let rv_binary = new abap.types.XString({qualifiedName: "XSTRING"});
    rv_binary.set(this.mv_data);
    return rv_binary;
  }
  async if_apc_wsp_message$get_text() {
    let r_message = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return r_message;
  }
  async if_apc_wsp_message$set_binary(INPUT) {
    let iv_binary = new abap.types.Hex();
    if (INPUT && INPUT.iv_binary) {iv_binary = INPUT.iv_binary;}
    this.mv_data.set(iv_binary);
  }
}
abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE'] = lcl_message;
class lcl_client {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_APC_WSP_CLIENT","IF_APC_WSP_MESSAGE_MANAGER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_host = new abap.types.String({qualifiedName: "STRING"});
    this.mv_port = new abap.types.Integer({qualifiedName: "I"});
    this.mo_handler = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER"});
    let iv_host = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_host) {iv_host.set(INPUT.iv_host);}
    let iv_port = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_port) {iv_port.set(INPUT.iv_port);}
    let io_handler = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_EVENT_HANDLER"});
    if (INPUT && INPUT.io_handler) {io_handler.set(INPUT.io_handler);}
    abap.statements.assert(abap.compare.initial(iv_host) === false);
    abap.statements.assert(abap.compare.initial(iv_port) === false);
    abap.statements.assert(abap.compare.initial(io_handler) === false);
    this.mv_host.set(iv_host);
    this.mv_port.set(iv_port);
    this.mo_handler.set(io_handler);
    return this;
  }
  async if_apc_wsp_client$connect() {
    const net = await import("net");
    this.client = net.createConnection({ port: this.mv_port.get(), host: this.mv_host.get()}, () => {this.mo_handler.get().if_apc_wsp_event_handler$on_open();});
    this.client.on("data", async (data) => {
        const msg = await (new lcl_message().constructor_());
        await msg.if_apc_wsp_message$set_binary({iv_binary: data.toString("hex").toUpperCase()});
        await this.mo_handler.get().if_apc_wsp_event_handler$on_message({i_message: msg});
    });
    this.client.on("end",   async () => {this.mo_handler.get().if_apc_wsp_event_handler$on_close();});
    this.client.on("error", async (e) => {this.mo_handler.get().if_apc_wsp_event_handler$on_error();});
    await new Promise(resolve => this.client.once("connect", resolve));
  }
  async if_apc_wsp_client$close() {
    this.client.destroy();
  }
  async if_apc_wsp_client$get_message_manager() {
    let ri_manager = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE_MANAGER"});
    ri_manager.set(this.me);
    return ri_manager;
  }
  async if_apc_wsp_message_manager$create_message() {
    let ri_message = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE"});
    ri_message.set(await (new abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_MESSAGE']()).constructor_());
    return ri_message;
  }
  async if_apc_wsp_message_manager$send(INPUT) {
    let ii_message = new abap.types.ABAPObject({qualifiedName: "IF_APC_WSP_MESSAGE"});
    if (INPUT && INPUT.ii_message) {ii_message.set(INPUT.ii_message);}
    const val = await ii_message.get().if_apc_wsp_message$get_binary();
    this.client.write(Buffer.from(val.get(), "hex"), "binary");
  }
}
abap.Classes['CLAS-CL_APC_TCP_CLIENT_MANAGER-LCL_CLIENT'] = lcl_client;
export {lcl_message, lcl_client};
//# sourceMappingURL=cl_apc_tcp_client_manager.clas.locals.mjs.map