const {cx_root} = await import("./cx_root.clas.mjs");
// cl_http_client.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
class cl_http_client {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_HTTP_CLIENT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_host = new abap.types.String({qualifiedName: "STRING"});
    this.if_http_client$request = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_REQUEST"});
    this.if_http_client$response = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_RESPONSE"});
    this.if_http_client$propertytype_logon_popup = new abap.types.Integer({qualifiedName: "I"});
    this.if_http_client$propertytype_accept_cookie = new abap.types.Integer({qualifiedName: "I"});
    let url = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.url) {url.set(INPUT.url);}
    let lv_uri = new abap.types.String({qualifiedName: "STRING"});
    let lv_query = new abap.types.String({qualifiedName: "STRING"});
    this.if_http_client$response.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());
    abap.statements.find(url, {regex: new abap.types.Character({length: 19}).set('\\w(\\/[\\w\\d\\.\\-\\/]+)'), submatches: [lv_uri]});
    this.mv_host.set(url);
    abap.statements.replace({target:this.mv_host, all:false, with: new abap.types.Character({length: 0}).set(''),of: lv_uri});
    this.if_http_client$request.set(await (new abap.Classes['CL_HTTP_ENTITY']()).constructor_());
    await this.if_http_client$request.get().if_http_entity$set_header_field({name: new abap.types.Character({length: 12}).set('~request_uri'), value: lv_uri});
    abap.statements.find(url, {regex: new abap.types.Character({length: 6}).set('\\?(.*)'), submatches: [lv_query]});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
      await abap.Classes['CL_HTTP_UTILITY'].set_query({request: this.if_http_client$request, query: lv_query});
    }
    return this;
  }
  async create_by_url(INPUT) {
    return cl_http_client.create_by_url(INPUT);
  }
  static async create_by_url(INPUT) {
    let url = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.url) {url.set(INPUT.url);}
    let ssl_id = new abap.types.Character({length: 6, qualifiedName: "SSFAPPLSSL"});
    if (INPUT && INPUT.ssl_id) {ssl_id.set(INPUT.ssl_id);}
    let proxy_host = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.proxy_host) {proxy_host.set(INPUT.proxy_host);}
    let proxy_service = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.proxy_service) {proxy_service.set(INPUT.proxy_service);}
    let client = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_CLIENT"});
    if (INPUT && INPUT.client) {client = INPUT.client;}
    client.set(await (new abap.Classes['CL_HTTP_CLIENT']()).constructor_({url: url}));
    abap.builtin.sy.get().subrc.set(constant_0);
  }
  async if_http_client$authenticate(INPUT) {
    let proxy_authentication = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.proxy_authentication) {proxy_authentication = INPUT.proxy_authentication;}
    let username = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.username) {username.set(INPUT.username);}
    let password = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.password) {password.set(INPUT.password);}
    let lv_base64 = new abap.types.String({qualifiedName: "STRING"});
    lv_base64.set((await abap.Classes['CL_HTTP_UTILITY'].if_http_utility$encode_base64({unencoded: new abap.types.String().set(`${abap.templateFormatting(username)}:${abap.templateFormatting(password)}`)})));
    await this.if_http_client$request.get().if_http_entity$set_header_field({name: new abap.types.Character({length: 13}).set('authorization'), value: new abap.types.String().set(`Basic ${abap.templateFormatting(lv_base64)}`)});
  }
  async if_http_client$close() {
    return;
  }
  async create_by_destination(INPUT) {
    return cl_http_client.create_by_destination(INPUT);
  }
  static async create_by_destination(INPUT) {
    let destination = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.destination) {destination.set(INPUT.destination);}
    let client = new abap.types.ABAPObject({qualifiedName: "IF_HTTP_CLIENT"});
    if (INPUT && INPUT.client) {client = INPUT.client;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async if_http_client$send() {
    let lv_method = new abap.types.String({qualifiedName: "STRING"});
    let lv_url = new abap.types.String({qualifiedName: "STRING"});
    let lv_body = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lt_form_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    let lt_header_fields = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP"), {"withHeader":false}, "TIHTTPNVP");
    let ls_field = new abap.types.Structure({name: new abap.types.String({qualifiedName: "IHTTPNVP-NAME"}), value: new abap.types.String({qualifiedName: "IHTTPNVP-VALUE"})}, "IHTTPNVP");
    lv_method.set((await this.if_http_client$request.get().if_http_request$get_method()));
    if (abap.compare.initial(lv_method)) {
      lv_method.set(new abap.types.Character({length: 3}).set('GET'));
    }
    if (abap.compare.initial((await this.if_http_client$request.get().if_http_entity$get_header_field({name: new abap.types.Character({length: 10}).set('user-agent')})))) {
      await this.if_http_client$request.get().if_http_entity$set_header_field({name: new abap.types.Character({length: 10}).set('user-agent'), value: new abap.types.Character({length: 14}).set('open-abap-http')});
    }
    lv_url.set((await this.if_http_client$request.get().if_http_entity$get_header_field({name: new abap.types.Character({length: 12}).set('~request_uri')})));
    abap.statements.replace({target:lv_url, all:false, with: new abap.types.Character({length: 0}).set(''),of: this.mv_host});
    lv_url.set(abap.operators.concat(this.mv_host,lv_url));
    await this.if_http_client$request.get().if_http_entity$get_form_fields({fields: lt_form_fields});
    if (abap.compare.gt(abap.builtin.lines({val: lt_form_fields}), constant_0)) {
      lv_url.set(abap.operators.concat(lv_url,abap.operators.concat(new abap.types.Character({length: 1}).set('?'),(await abap.Classes['CL_HTTP_UTILITY'].fields_to_string({fields: lt_form_fields})))));
    }
    await this.if_http_client$request.get().if_http_entity$get_header_fields({fields: lt_header_fields});
    let headers = {};
    for await (const unique88 of abap.statements.loop(lt_header_fields,{where: async (i) => {return abap.compare.ne(i.name, new abap.types.Character({length: 12}).set('~request_uri'));}})) {
      ls_field.set(unique88);
      headers[ls_field.get().name.get()] = ls_field.get().value.get();
    }
    lv_body.set((await this.if_http_client$request.get().if_http_entity$get_cdata()));
    const https = await import("https");
    const http = await import("http");
    function postData(url, options, requestBody) {
        return new Promise((resolve, reject) => {
            const prot = url.startsWith("http://") ? http : https;
            const req = prot.request(url, options,
              (res) => {
                  let chunks = [];
                  res.on("data", (chunk) => {chunks.push(chunk);});
                  res.on("error", reject);
                  res.on("end", () => {
                      if (res.statusCode >= 200 && res.statusCode <= 299) {
                          resolve({statusCode: res.statusCode, headers: res.headers, body: Buffer.concat(chunks)});
                        } else {
                            reject("Request failed. status: " + res.statusCode + ", body: " + Buffer.concat(chunks).toString());
                          }
                        });
                      });
                    req.on("error", reject);
                    req.write(requestBody, "binary");
                    req.end();
                  });
              }
              const prot = lv_url.get().startsWith("http://") ? http : https;
              if (this.agent === undefined) {this.agent = new prot.Agent({keepAlive: true, maxSockets: 1});}
              let response = await postData(lv_url.get(), {method: lv_method.get(), headers: headers, agent: this.agent}, lv_body.get());
              for (const h in response.headers) {
                  lv_name.set(h);
                  lv_value.set(response.headers[h]);
                await this.if_http_client$response.get().if_http_entity$set_header_field({name: lv_name, value: lv_value});
              }
              this.if_http_client$response.get().mv_content_type.set(response.headers["content-type"] || "");
              this.if_http_client$response.get().mv_status.set(response.statusCode);
              this.if_http_client$response.get().mv_data.set(response.body.toString("hex").toUpperCase());
              abap.builtin.sy.get().subrc.set(constant_0);
            }
            async if_http_client$receive() {
              abap.builtin.sy.get().subrc.set(constant_0);
            }
            async if_http_client$get_last_error(INPUT) {
              let code = new abap.types.Integer({qualifiedName: "I"});
              if (INPUT && INPUT.code) {code = INPUT.code;}
              let message = new abap.types.String({qualifiedName: "STRING"});
              if (INPUT && INPUT.message) {message = INPUT.message;}
              await this.if_http_client$response.get().if_http_response$get_status({code: code});
              message.set(new abap.types.Character({length: 14}).set('todo_open_abap'));
            }
            async if_http_client$send_sap_logon_ticket() {
              abap.statements.assert(abap.compare.eq(constant_2, new abap.types.Character({length: 13}).set('not supported')));
            }
          }
          abap.Classes['CL_HTTP_CLIENT'] = cl_http_client;
export {cl_http_client};
//# sourceMappingURL=cl_http_client.clas.mjs.map