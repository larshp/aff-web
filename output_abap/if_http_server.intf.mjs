// if_http_server.intf.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_4 = new abap.types.Integer().set(4);
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
if_http_server.if_http_server$co_page_error_type = new abap.types.Character();
if_http_server.if_http_server$co_page_error_type.set('1');
if_http_server.if_http_server$co_response_page_option = new abap.types.Character();
if_http_server.if_http_server$co_response_page_option.set(' ');
export {if_http_server};
//# sourceMappingURL=if_http_server.intf.mjs.map