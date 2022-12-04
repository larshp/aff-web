// if_http_entity.intf.abap
class if_http_entity {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_HTTP_ENTITY'] = if_http_entity;
if_http_entity.if_http_entity$co_request_method_get = new abap.types.String({qualifiedName: "STRING"});
if_http_entity.if_http_entity$co_request_method_get.set('GET');
if_http_entity.if_http_entity$co_request_method_post = new abap.types.String({qualifiedName: "STRING"});
if_http_entity.if_http_entity$co_request_method_post.set('POST');
if_http_entity.if_http_entity$co_body_before_query_string = new abap.types.Integer({qualifiedName: "I"});
if_http_entity.if_http_entity$co_body_before_query_string.set(3);
export {if_http_entity};
//# sourceMappingURL=if_http_entity.intf.mjs.map