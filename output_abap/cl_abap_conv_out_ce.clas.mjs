const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_conv_out_ce.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_255 = new abap.types.Integer().set(255);
class cl_abap_conv_out_ce {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_js_encoding = new abap.types.String({qualifiedName: "STRING"});
    this.mv_buffer = new abap.types.XString({qualifiedName: "XSTRING"});
    return this;
  }
  async create(INPUT) {
    return cl_abap_conv_out_ce.create(INPUT);
  }
  static async create(INPUT) {
    let ret = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    let encoding = new abap.types.Character({length: 20, qualifiedName: "abap_encoding"});
    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}
    let ignore_cerr = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.ignore_cerr) {ignore_cerr = INPUT.ignore_cerr;}
    if (INPUT === undefined || INPUT.ignore_cerr === undefined) {ignore_cerr = abap.builtin.abap_false;}
    let endian = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.endian) {endian.set(INPUT.endian);}
    let replacement = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.replacement) {replacement.set(INPUT.replacement);}
    ret.set(await (new abap.Classes['CL_ABAP_CONV_OUT_CE']()).constructor_());
    let unique87 = encoding;
    if (abap.compare.eq(unique87, new abap.types.Character({length: 5}).set('UTF-8')) || abap.compare.eq(unique87, new abap.types.Character({length: 0}).set(''))) {
      ret.get().mv_js_encoding.set(new abap.types.Character({length: 4}).set('utf8'));
    } else if (abap.compare.eq(unique87, new abap.types.Character({length: 4}).set('4103'))) {
      ret.get().mv_js_encoding.set(new abap.types.Character({length: 7}).set('utf16le'));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));
    }
    return ret;
  }
  async uccpi(INPUT) {
    return cl_abap_conv_out_ce.uccpi(INPUT);
  }
  static async uccpi(INPUT) {
    let ret = new abap.types.Integer({qualifiedName: "I"});
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let lo_out = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    let lv_hex = new abap.types.XString({qualifiedName: "XSTRING"});
    lo_out.set((await this.create({encoding: new abap.types.Character({length: 4}).set('4103')})));
    await lo_out.get().convert({data: value, buffer: lv_hex});
    abap.statements.assert(abap.compare.eq(abap.builtin.xstrlen({val: lv_hex}), constant_2));
    ret.set(lv_hex.getOffset({length: 1}));
    ret.set(abap.operators.add(ret,abap.operators.multiply(lv_hex.getOffset({offset: 1, length: 1}),constant_255)));
    return ret;
  }
  async write(INPUT) {
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let res = new abap.types.XString({qualifiedName: "XSTRING"});
    await this.convert({data: data, buffer: res});
    abap.statements.concatenate({source: [this.mv_buffer, res], target: this.mv_buffer});
  }
  async get_buffer() {
    let buffer = new abap.types.XString({qualifiedName: "XSTRING"});
    buffer.set(this.mv_buffer);
    return buffer;
  }
  async reset() {
    abap.statements.clear(this.mv_buffer);
  }
  async convert(INPUT) {
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data.set(INPUT.data);}
    let n = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.n) {n.set(INPUT.n);}
    let buffer = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.buffer) {buffer = INPUT.buffer;}
    let result = Buffer.from(data.get(), this.mv_js_encoding.get()).toString("hex");
    buffer.set(result.toUpperCase());
  }
}
abap.Classes['CL_ABAP_CONV_OUT_CE'] = cl_abap_conv_out_ce;
export {cl_abap_conv_out_ce};
//# sourceMappingURL=cl_abap_conv_out_ce.clas.mjs.map