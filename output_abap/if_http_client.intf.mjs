// if_http_client.intf.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class if_http_client {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_HTTP_CLIENT'] = if_http_client;
if_http_client.if_http_client$co_disabled = new abap.types.Integer({qualifiedName: "I"});
if_http_client.if_http_client$co_disabled.set(0);
if_http_client.if_http_client$co_enabled = new abap.types.Integer({qualifiedName: "I"});
if_http_client.if_http_client$co_enabled.set(1);
export {if_http_client};
//# sourceMappingURL=if_http_client.intf.mjs.map