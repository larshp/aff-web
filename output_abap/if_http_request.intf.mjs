// if_http_request.intf.abap
class if_http_request {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = ["IF_HTTP_ENTITY"];
}
abap.Classes['IF_HTTP_REQUEST'] = if_http_request;
if_http_request.if_http_request$co_protocol_version_1_1 = new abap.types.String({qualifiedName: "STRING"});
if_http_request.if_http_request$co_protocol_version_1_1.set('VER11');
if_http_request.if_http_request$co_protocol_version_1_0 = new abap.types.String({qualifiedName: "STRING"});
if_http_request.if_http_request$co_protocol_version_1_0.set('VER10');
if_http_request.if_http_request$co_request_method_get = new abap.types.String({qualifiedName: "STRING"});
if_http_request.if_http_request$co_request_method_get.set('GET');
if_http_request.if_http_request$co_request_method_post = new abap.types.String({qualifiedName: "STRING"});
if_http_request.if_http_request$co_request_method_post.set('POST');
export {if_http_request};
//# sourceMappingURL=if_http_request.intf.mjs.map