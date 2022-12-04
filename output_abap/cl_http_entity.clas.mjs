const {cx_root} = await import("./cx_root.clas.mjs");
// cl_http_entity.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
class cl_http_entity {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_HTTP_RESPONSE","IF_HTTP_REQUEST"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_status = new abap.types.Integer({qualifiedName: "I"});
    this.mv_reason = new abap.types.String({qualifiedName: "STRING"});
    this.mv_content_type = new abap.types.String({qualifiedName: "STRING"});
    this.mv_method = new abap.types.String({qualifiedName: "STRING"});
    this.mv_data = new abap.types.XString({qualifiedName: "XSTRING"});
    this.mt_headers = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    this.mt_form_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    return this;
  }
  async if_http_response$server_cache_expire_rel(INPUT) {
    let expires_rel = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.expires_rel) {expires_rel.set(INPUT.expires_rel);}
    let etag = new abap.types.Character({length: 32, qualifiedName: "CHAR32"});
    if (INPUT && INPUT.etag) {etag.set(INPUT.etag);}
    let browser_dependent = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.browser_dependent) {browser_dependent = INPUT.browser_dependent;}
    if (INPUT === undefined || INPUT.browser_dependent === undefined) {browser_dependent = new abap.types.Character({length: 1}).set(' ');}
    let no_ufo_cache = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.no_ufo_cache) {no_ufo_cache = INPUT.no_ufo_cache;}
    if (INPUT === undefined || INPUT.no_ufo_cache === undefined) {no_ufo_cache = new abap.types.Character({length: 1}).set(' ');}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_response$server_cache_expire_default(INPUT) {
    let etag = new abap.types.Character({length: 32, qualifiedName: "CHAR32"});
    if (INPUT && INPUT.etag) {etag.set(INPUT.etag);}
    let browser_dependent = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.browser_dependent) {browser_dependent = INPUT.browser_dependent;}
    if (INPUT === undefined || INPUT.browser_dependent === undefined) {browser_dependent = new abap.types.Character({length: 1}).set(' ');}
    let no_ufo_cache = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.no_ufo_cache) {no_ufo_cache = INPUT.no_ufo_cache;}
    if (INPUT === undefined || INPUT.no_ufo_cache === undefined) {no_ufo_cache = new abap.types.Character({length: 1}).set(' ');}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_response$server_cache_expire_abs(INPUT) {
    let expires_abs_date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.expires_abs_date) {expires_abs_date.set(INPUT.expires_abs_date);}
    let expires_abs_time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.expires_abs_time) {expires_abs_time.set(INPUT.expires_abs_time);}
    let etag = new abap.types.Character({length: 32, qualifiedName: "CHAR32"});
    if (INPUT && INPUT.etag) {etag.set(INPUT.etag);}
    let browser_dependent = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.browser_dependent) {browser_dependent = INPUT.browser_dependent;}
    if (INPUT === undefined || INPUT.browser_dependent === undefined) {browser_dependent = new abap.types.Character({length: 1}).set(' ');}
    let no_ufo_cache = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.no_ufo_cache) {no_ufo_cache = INPUT.no_ufo_cache;}
    if (INPUT === undefined || INPUT.no_ufo_cache === undefined) {no_ufo_cache = new abap.types.Character({length: 1}).set(' ');}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_response$server_cache_browser_dependent(INPUT) {
    let dependent = new abap.types.Character({qualifiedName: "BOOLEAN"});
    if (INPUT && INPUT.dependent) {dependent = INPUT.dependent;}
    if (INPUT === undefined || INPUT.dependent === undefined) {dependent = new abap.types.Character({length: 1}).set('X');}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_response$get_raw_message() {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return data;
  }
  async if_http_response$copy() {
    let response = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_RESPONSE"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return response;
  }
  async if_http_request$get_user_agent(INPUT) {
    let user_agent_type = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_agent_type) {user_agent_type = INPUT.user_agent_type;}
    let user_agent_version = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_agent_version) {user_agent_version = INPUT.user_agent_version;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_request$get_uri_parameter(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return value;
  }
  async if_http_request$get_raw_message() {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return data;
  }
  async if_http_request$get_form_data(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_request$get_authorization(INPUT) {
    let auth_type = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.auth_type) {auth_type = INPUT.auth_type;}
    let username = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.username) {username = INPUT.username;}
    let password = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.password) {password = INPUT.password;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_request$copy() {
    let request = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_REQUEST"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return request;
  }
  async if_http_request$set_authorization(INPUT) {
    let auth_type = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.auth_type) {auth_type.set(INPUT.auth_type);}
    if (INPUT === undefined || INPUT.auth_type === undefined) {auth_type = constant_1;}
    let username = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.username) {username.set(INPUT.username);}
    let password = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.password) {password.set(INPUT.password);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$add_multipart(INPUT) {
    let entity = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_ENTITY"});
    let suppress_content_length = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.suppress_content_length) {suppress_content_length = INPUT.suppress_content_length;}
    if (INPUT === undefined || INPUT.suppress_content_length === undefined) {suppress_content_length = abap.builtin.abap_false;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return entity;
  }
  async if_http_entity$get_cookie_field(INPUT) {
    let field_value = new abap.types.String({qualifiedName: "STRING"});
    let cookie_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.cookie_name) {cookie_name.set(INPUT.cookie_name);}
    let cookie_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.cookie_path) {cookie_path.set(INPUT.cookie_path);}
    let field_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.field_name) {field_name.set(INPUT.field_name);}
    let base64 = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.base64) {base64.set(INPUT.base64);}
    if (INPUT === undefined || INPUT.base64 === undefined) {base64 = constant_1;}
    abap.statements.clear(field_value);
    return field_value;
  }
  async if_http_entity$set_compression() {
  }
  async if_http_entity$append_cdata(INPUT) {
    let data = new abap.types.Character();
    if (INPUT && INPUT.data) {data = INPUT.data;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$append_cdata2(INPUT) {
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let encoding = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}
    let offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.offset) {offset.set(INPUT.offset);}
    let length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length) {length.set(INPUT.length);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$add_cookie_field(INPUT) {
    let cookie_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.cookie_name) {cookie_name.set(INPUT.cookie_name);}
    let cookie_path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.cookie_path) {cookie_path.set(INPUT.cookie_path);}
    let field_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.field_name) {field_name.set(INPUT.field_name);}
    let field_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.field_value) {field_value.set(INPUT.field_value);}
    let base64 = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.base64) {base64.set(INPUT.base64);}
    if (INPUT === undefined || INPUT.base64 === undefined) {base64 = constant_1;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$append_data(INPUT) {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.offset) {offset.set(INPUT.offset);}
    let length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length) {length.set(INPUT.length);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$to_xstring() {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return data;
  }
  async if_http_entity$delete_cookie_secure(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    if (INPUT === undefined || INPUT.path === undefined) {path = new abap.types.String().set(``);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_cookies(INPUT) {
    let cookies = new abap.types.Character({length: 4});
    if (INPUT && INPUT.cookies) {cookies = INPUT.cookies;}
    abap.statements.clear(cookies);
  }
  async if_http_entity$delete_form_field(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$delete_form_field_secure(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_cookie(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    if (INPUT === undefined || INPUT.path === undefined) {path = new abap.types.String().set(``);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value = INPUT.value;}
    let domain = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.domain) {domain = INPUT.domain;}
    let expires = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.expires) {expires = INPUT.expires;}
    let secure = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.secure) {secure = INPUT.secure;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_data_length(INPUT) {
    let data_length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.data_length) {data_length = INPUT.data_length;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$from_xstring(INPUT) {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_form_field_cs(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let formfield_encoding = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.formfield_encoding) {formfield_encoding.set(INPUT.formfield_encoding);}
    let search_option = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.search_option) {search_option.set(INPUT.search_option);}
    if (INPUT === undefined || INPUT.search_option === undefined) {search_option = abap.Classes['IF_HTTP_ENTITY'].if_http_entity$co_body_before_query_string;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return value;
  }
  async if_http_entity$get_last_error() {
    let rc = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return rc;
  }
  async if_http_entity$delete_header_field(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$delete_header_field_secure(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$delete_cookie(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$set_header_fields(INPUT) {
    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    if (INPUT && INPUT.fields) {fields.set(INPUT.fields);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$suppress_content_type(INPUT) {
    let suppress = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.suppress) {suppress = INPUT.suppress;}
    if (INPUT === undefined || INPUT.suppress === undefined) {suppress = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$set_formfield_encoding(INPUT) {
    let formfield_encoding = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.formfield_encoding) {formfield_encoding.set(INPUT.formfield_encoding);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$set_cookie(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let domain = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.domain) {domain.set(INPUT.domain);}
    let expires = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.expires) {expires.set(INPUT.expires);}
    let secure = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.secure) {secure.set(INPUT.secure);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_version() {
    let version = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return version;
  }
  async if_http_entity$get_serialized_message_length(INPUT) {
    let body_length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.body_length) {body_length = INPUT.body_length;}
    let header_length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.header_length) {header_length = INPUT.header_length;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$get_header_field(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let ls_header = new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP");
    abap.statements.readTable(this.mt_headers,{into: ls_header,withKey: (i) => {return abap.compare.eq(i.name, abap.builtin.to_lower({val: name}));}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      value.set(ls_header.get().value);
    }
    return value;
  }
  async if_http_entity$get_header_fields(INPUT) {
    let fields = new abap.types.Character({length: 4});
    if (INPUT && INPUT.fields) {fields = INPUT.fields;}
    fields.set(this.mt_headers);
  }
  async if_http_response$get_status(INPUT) {
    let code = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.code) {code = INPUT.code;}
    let reason = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.reason) {reason = INPUT.reason;}
    code.set(this.mv_status);
    reason.set(this.mv_reason);
  }
  async if_http_entity$get_cdata() {
    let data = new abap.types.String({qualifiedName: "STRING"});
    await (await abap.Classes['CL_ABAP_CONV_IN_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})).get().convert({input: this.mv_data, data: data});
    return data;
  }
  async if_http_response$set_status(INPUT) {
    let code = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.code) {code.set(INPUT.code);}
    let reason = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.reason) {reason.set(INPUT.reason);}
    this.mv_status.set(code);
    this.mv_reason.set(reason);
  }
  async if_http_entity$set_cdata(INPUT) {
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let offset = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.offset) {offset.set(INPUT.offset);}
    let length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length) {length.set(INPUT.length);}
    await (await abap.Classes['CL_ABAP_CONV_OUT_CE'].create({encoding: new abap.types.Character({length: 5}).set('UTF-8')})).get().convert({data: data, buffer: this.mv_data});
  }
  async if_http_entity$get_content_type() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.mv_content_type);
    return val;
  }
  async if_http_entity$set_content_type(INPUT) {
    let content_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.content_type) {content_type.set(INPUT.content_type);}
    this.mv_content_type.set(content_type);
  }
  async if_http_entity$get_data() {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    data.set(this.mv_data);
    return data;
  }
  async if_http_entity$set_data(INPUT) {
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    this.mv_data.set(data);
  }
  async if_http_response$delete_cookie_at_client(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    let domain = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.domain) {domain.set(INPUT.domain);}
    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_response$redirect(INPUT) {
    let url = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.url) {url.set(INPUT.url);}
    let permanently = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.permanently) {permanently.set(INPUT.permanently);}
    let protocol_dependent = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.protocol_dependent) {protocol_dependent.set(INPUT.protocol_dependent);}
    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$num_multiparts() {
    let num = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));
    return num;
  }
  async if_http_entity$get_multipart(INPUT) {
    let entity = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_ENTITY"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.index) {index.set(INPUT.index);}
    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));
    return entity;
  }
  async if_http_entity$get_form_fields_cs(INPUT) {
    let formfield_encoding = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.formfield_encoding) {formfield_encoding.set(INPUT.formfield_encoding);}
    let search_option = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.search_option) {search_option.set(INPUT.search_option);}
    if (INPUT === undefined || INPUT.search_option === undefined) {search_option = abap.Classes['IF_HTTP_ENTITY'].if_http_entity$co_body_before_query_string;}
    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    if (INPUT && INPUT.fields) {fields = INPUT.fields;}
    fields.set(this.mt_form_fields);
  }
  async if_http_entity$set_form_fields(INPUT) {
    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    if (INPUT && INPUT.fields) {fields.set(INPUT.fields);}
    let multivalue = new abap.types.Integer({qualifiedName: "INT4"});
    if (INPUT && INPUT.multivalue) {multivalue.set(INPUT.multivalue);}
    this.mt_form_fields.set(fields);
  }
  async if_http_entity$get_form_fields(INPUT) {
    let fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    if (INPUT && INPUT.fields) {fields = INPUT.fields;}
    fields.set(this.mt_form_fields);
  }
  async if_http_entity$get_form_field(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let ls_field = new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP");
    abap.statements.readTable(this.mt_form_fields,{into: ls_field,withKey: (i) => {return abap.compare.eq(i.name, abap.builtin.to_lower({val: name}));}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      value.set(ls_field.get().value);
    }
    return value;
  }
  async if_http_entity$set_header_field(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let ls_header = new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP");
    let fs_ls_header_ = new abap.types.FieldSymbol(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"));
    abap.statements.readTable(this.mt_headers,{assigning: fs_ls_header_,withKey: (i) => {return abap.compare.eq(i.name, abap.builtin.to_lower({val: name}));}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      fs_ls_header_.get().value.set(value);
    } else {
      ls_header.get().name.set(abap.builtin.to_lower({val: name}));
      ls_header.get().value.set(value);
      abap.statements.append({source: ls_header, target: this.mt_headers});
    }
    if (abap.compare.eq(name, new abap.types.Character({length: 15}).set('~request_method'))) {
      await this.if_http_request$set_method({method: value});
    }
  }
  async if_http_request$set_method(INPUT) {
    let method = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.method) {method.set(INPUT.method);}
    this.mv_method.set(method);
  }
  async if_http_request$get_method() {
    let meth = new abap.types.String({qualifiedName: "STRING"});
    meth.set(this.mv_method);
    return meth;
  }
  async if_http_request$set_version(INPUT) {
    let version = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.version) {version.set(INPUT.version);}
    abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_entity$set_form_field(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let ls_field = new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP");
    ls_field.get().name.set(name);
    ls_field.get().value.set(value);
    abap.statements.append({source: ls_field, target: this.mt_form_fields});
  }
}
abap.Classes['CL_HTTP_ENTITY'] = cl_http_entity;
export {cl_http_entity};
//# sourceMappingURL=cl_http_entity.clas.mjs.map