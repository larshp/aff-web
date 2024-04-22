const {cx_root} = await import("./cx_root.clas.mjs");
// cl_http_utility.clas.abap
class cl_http_utility {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_HTTP_UTILITY"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.string_to_fields = this.if_http_utility$string_to_fields;
    this.unescape_url = this.if_http_utility$unescape_url;
    this.escape_url = this.if_http_utility$escape_url;
    this.encode_base64 = this.if_http_utility$encode_base64;
    return this;
  }
  async set_request_uri(INPUT) {
    return cl_http_utility.set_request_uri(INPUT);
  }
  static async set_request_uri(INPUT) {
    let request = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_REQUEST"});
    if (INPUT && INPUT.request) {request.set(INPUT.request);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async escape_html(INPUT) {
    return cl_http_utility.escape_html(INPUT);
  }
  static async escape_html(INPUT) {
    let escaped = new abap.types.String({qualifiedName: "STRING"});
    let unescaped = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}
    let keep_num_char_ref = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.keep_num_char_ref) {keep_num_char_ref = INPUT.keep_num_char_ref;}
    if (INPUT === undefined || INPUT.keep_num_char_ref === undefined) {keep_num_char_ref = abap.builtin.abap_undefined;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return escaped;
  }
  async escape_javascript(INPUT) {
    return cl_http_utility.escape_javascript(INPUT);
  }
  static async escape_javascript(INPUT) {
    let escaped = new abap.types.String({qualifiedName: "STRING"});
    let unescaped = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}
    let inside_html = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.inside_html) {inside_html = INPUT.inside_html;}
    if (INPUT === undefined || INPUT.inside_html === undefined) {inside_html = abap.builtin.abap_false;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return escaped;
  }
  async escape_xml_attr_value(INPUT) {
    return cl_http_utility.escape_xml_attr_value(INPUT);
  }
  static async escape_xml_attr_value(INPUT) {
    let escaped = new abap.types.String({qualifiedName: "STRING"});
    let unescaped = new abap.types.Character();
    if (INPUT && INPUT.unescaped) {unescaped = INPUT.unescaped;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return escaped;
  }
  async if_http_utility$string_to_fields(INPUT) {
    return cl_http_utility.if_http_utility$string_to_fields(INPUT);
  }
  static async if_http_utility$string_to_fields(INPUT) {
    let fields = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String(), "value": new abap.types.String()}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    let string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string) {string.set(INPUT.string);}
    let tab = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let str = new abap.types.String({qualifiedName: "STRING"});
    let ls_field = new abap.types.Structure({"name": new abap.types.String(), "value": new abap.types.String()}, "IHTTPNVP");
    abap.statements.split({source: string, at: new abap.types.Character(1).set('&'), table: tab});
    for await (const unique95 of abap.statements.loop(tab)) {
      str.set(unique95);
      abap.statements.split({source: str, at: new abap.types.Character(1).set('='), targets: [ls_field.get().name,ls_field.get().value]});
      abap.statements.append({source: ls_field, target: fields});
    }
    return fields;
  }
  async set_query(INPUT) {
    return cl_http_utility.set_query(INPUT);
  }
  static async set_query(INPUT) {
    let request = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_REQUEST"});
    if (INPUT && INPUT.request) {request.set(INPUT.request);}
    let query = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.query) {query.set(INPUT.query);}
    await request.get().if_http_entity$set_form_fields({fields: (await this.if_http_utility$string_to_fields({string: query}))});
  }
  async fields_to_string(INPUT) {
    return cl_http_utility.fields_to_string(INPUT);
  }
  static async fields_to_string(INPUT) {
    let string = new abap.types.String({qualifiedName: "STRING"});
    let fields = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String(), "value": new abap.types.String()}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    if (INPUT && INPUT.fields) {fields.set(INPUT.fields);}
    let tab = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let str = new abap.types.String({qualifiedName: "STRING"});
    let ls_field = new abap.types.Structure({"name": new abap.types.String(), "value": new abap.types.String()}, "IHTTPNVP");
    for await (const unique96 of abap.statements.loop(fields)) {
      ls_field.set(unique96);
      str.set(abap.operators.concat(ls_field.get().name,abap.operators.concat(new abap.types.Character(1).set('='),ls_field.get().value)));
      abap.statements.append({source: str, target: tab});
    }
    string.set(abap.builtin.concat_lines_of({table: tab, sep: new abap.types.Character(1).set('&')}));
    return string;
  }
  async encode_x_base64(INPUT) {
    return cl_http_utility.encode_x_base64(INPUT);
  }
  static async encode_x_base64(INPUT) {
    let encoded = new abap.types.String({qualifiedName: "STRING"});
    let data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let buffer = Buffer.from(data.get(), "hex");
    encoded.set(buffer.toString("base64"));
    return encoded;
  }
  async decode_x_base64(INPUT) {
    return cl_http_utility.decode_x_base64(INPUT);
  }
  static async decode_x_base64(INPUT) {
    let decoded = new abap.types.XString({qualifiedName: "XSTRING"});
    let encoded = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.encoded) {encoded.set(INPUT.encoded);}
    let buffer = Buffer.from(encoded.get(), "base64");
    decoded.set(buffer.toString("hex").toUpperCase());
    return decoded;
  }
  async if_http_utility$unescape_url(INPUT) {
    return cl_http_utility.if_http_utility$unescape_url(INPUT);
  }
  static async if_http_utility$unescape_url(INPUT) {
    let unescaped = new abap.types.String({qualifiedName: "STRING"});
    let escaped = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.escaped) {escaped.set(INPUT.escaped);}
    let options = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.options) {options.set(INPUT.options);}
    let foo = escaped.get();
    unescaped.set(decodeURIComponent(foo));
    return unescaped;
  }
  async if_http_utility$escape_url(INPUT) {
    return cl_http_utility.if_http_utility$escape_url(INPUT);
  }
  static async if_http_utility$escape_url(INPUT) {
    let escaped = new abap.types.String({qualifiedName: "STRING"});
    let unescaped = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.unescaped) {unescaped.set(INPUT.unescaped);}
    escaped.set(encodeURIComponent(unescaped.get()));
    return escaped;
  }
  async if_http_utility$encode_base64(INPUT) {
    return cl_http_utility.if_http_utility$encode_base64(INPUT);
  }
  static async if_http_utility$encode_base64(INPUT) {
    let encoded = new abap.types.String({qualifiedName: "STRING"});
    let unencoded = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.unencoded) {unencoded.set(INPUT.unencoded);}
    let buffer = Buffer.from(unencoded.get());
    encoded.set(buffer.toString("base64"));
    return encoded;
  }
}
abap.Classes['CL_HTTP_UTILITY'] = cl_http_utility;
export {cl_http_utility};
//# sourceMappingURL=cl_http_utility.clas.mjs.map