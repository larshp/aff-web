// if_http_server.intf.abap
class if_http_server {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_HTTP_SERVER'] = if_http_server;
if_http_server.if_http_server$authmethod_service = new abap.types.Integer({qualifiedName: "I"});
if_http_server.if_http_server$authmethod_service.set(4);
if_http_server.if_http_server$co_compress_based_on_mime_type = new abap.types.Integer({qualifiedName: "I"});
if_http_server.if_http_server$co_compress_based_on_mime_type.set(2);
if_http_server.if_http_server$co_disabled = new abap.types.Integer({qualifiedName: "I"});
if_http_server.if_http_server$co_disabled.set(0);
if_http_server.if_http_server$co_enabled = new abap.types.Integer({qualifiedName: "I"});
if_http_server.if_http_server$co_enabled.set(1);
if_http_server.if_http_server$co_page_error_type = new abap.types.Character(1, {});
if_http_server.if_http_server$co_page_error_type.set('1');
if_http_server.if_http_server$co_response_page_option = new abap.types.Character(1, {});
if_http_server.if_http_server$co_response_page_option.set(' ');
export {if_http_server};
//# sourceMappingURL=if_http_server.intf.mjs.map