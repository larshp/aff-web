const {cx_root} = await import("./cx_root.clas.mjs");
// cl_http_server.clas.abap
class cl_http_server {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_location(INPUT) {
    return cl_http_server.get_location(INPUT);
  }
  static async get_location(INPUT) {
    let host = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.host) {host = INPUT.host;}
    host.set(new abap.types.Character(13).set('open-abap.org'));
  }
}
abap.Classes['CL_HTTP_SERVER'] = cl_http_server;
export {cl_http_server};
//# sourceMappingURL=cl_http_server.clas.mjs.map