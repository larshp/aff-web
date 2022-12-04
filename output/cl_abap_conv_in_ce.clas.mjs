const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_conv_in_ce.clas.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_255 = new abap.types.Integer().set(255);
class cl_abap_conv_in_ce {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_input = new abap.types.XString({qualifiedName: "XSTRING"});
    this.mv_js_encoding = new abap.types.String({qualifiedName: "STRING"});
    this.mv_ignore_cerr = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    return this;
  }
  async create(INPUT) {
    return cl_abap_conv_in_ce.create(INPUT);
  }
  static async create(INPUT) {
    let ret = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE"});
    let encoding = new abap.types.Character({length: 20, qualifiedName: "abap_encoding"});
    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}
    if (INPUT === undefined || INPUT.encoding === undefined) {encoding = new abap.types.Character({length: 5}).set('UTF-8');}
    let input = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.input) {input.set(INPUT.input);}
    let replacement = new abap.types.Character({qualifiedName: "CHAR1"});
    if (INPUT && INPUT.replacement) {replacement = INPUT.replacement;}
    if (INPUT === undefined || INPUT.replacement === undefined) {replacement = new abap.types.Character({length: 1}).set('#');}
    let ignore_cerr = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.ignore_cerr) {ignore_cerr = INPUT.ignore_cerr;}
    if (INPUT === undefined || INPUT.ignore_cerr === undefined) {ignore_cerr = abap.builtin.abap_false;}
    let endian = new abap.types.Character({qualifiedName: "CHAR1"});
    if (INPUT && INPUT.endian) {endian = INPUT.endian;}
    abap.statements.assert(abap.compare.eq(replacement, new abap.types.Character({length: 1}).set('#')));
    abap.statements.assert(abap.compare.initial(endian));
    ret.set(await (new abap.Classes['CL_ABAP_CONV_IN_CE']()).constructor_());
    let unique85 = encoding;
    if (abap.compare.eq(unique85, new abap.types.Character({length: 5}).set('UTF-8'))) {
      ret.get().mv_js_encoding.set(new abap.types.Character({length: 4}).set('utf8'));
    } else if (abap.compare.eq(unique85, new abap.types.Character({length: 4}).set('4103'))) {
      ret.get().mv_js_encoding.set(new abap.types.Character({length: 8}).set('utf-16le'));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 13}).set('not supported')));
    }
    ret.get().mv_input.set(input);
    ret.get().mv_ignore_cerr.set(ignore_cerr);
    return ret;
  }
  async uccp(INPUT) {
    return cl_abap_conv_in_ce.uccp(INPUT);
  }
  static async uccp(INPUT) {
    let char_ = new abap.types.Character({length: 2, qualifiedName: "cl_abap_conv_in_ce=>ty_char2"});
    let uccp = new abap.types.Character();
    if (INPUT && INPUT.uccp) {uccp = INPUT.uccp;}
    let int = new abap.types.Integer({qualifiedName: "I"});
    let hex = new abap.types.Hex({length: 2});
    hex.set(uccp);
    int.set(hex);
    try {
      char_.set((await this.uccpi({value: int})));
    } catch (e) {
      if (e instanceof abap.Classes['CX_SY_CONVERSION_CODEPAGE']) {
      } else {
        throw e;
      }
    }
    return char_;
  }
  async uccpi(INPUT) {
    return cl_abap_conv_in_ce.uccpi(INPUT);
  }
  static async uccpi(INPUT) {
    let ret = new abap.types.String({qualifiedName: "STRING"});
    let value = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let lv_hex = new abap.types.Hex({length: 2});
    let lo_in = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_IN_CE"});
    new abap.OffsetLength(lv_hex, {length: 1}).set(abap.operators.mod(value,constant_255));
    new abap.OffsetLength(lv_hex, {offset: 1, length: 1}).set(abap.operators.div(value,constant_255));
    lo_in.set((await this.create({encoding: new abap.types.Character({length: 4}).set('4103')})));
    await lo_in.get().convert({input: lv_hex, data: ret});
    return ret;
  }
  async convert(INPUT) {
    let input = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.input) {input.set(INPUT.input);}
    let n = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.n) {n.set(INPUT.n);}
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let lv_error = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (abap.compare.initial(input)) {
      return;
    }
    abap.statements.assert(abap.compare.initial(this.mv_js_encoding) === false);
    let buf = Buffer.from(input.get(), "hex");
    const util= await import("util");
    const td = new util.TextDecoder(this.mv_js_encoding.get(), {fatal: this.mv_ignore_cerr.get() !== "X"});
    try {
        data.set(td.decode(buf));
    } catch {
      lv_error.set(abap.builtin.abap_true);
    }
    if (abap.compare.eq(lv_error, abap.builtin.abap_true)) {
      throw await (new abap.Classes['CX_SY_CONVERSION_CODEPAGE']()).constructor_();
    }
  }
  async read(INPUT) {
    let n = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.n) {n.set(INPUT.n);}
    let data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    await this.convert({input: this.mv_input, n: n, data: data});
  }
}
abap.Classes['CL_ABAP_CONV_IN_CE'] = cl_abap_conv_in_ce;
export {cl_abap_conv_in_ce};
//# sourceMappingURL=cl_abap_conv_in_ce.clas.mjs.map