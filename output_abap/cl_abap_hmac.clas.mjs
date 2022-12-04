const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_hmac.clas.abap
class cl_abap_hmac {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async calculate_hmac_for_raw(INPUT) {
    return cl_abap_hmac.calculate_hmac_for_raw(INPUT);
  }
  static async calculate_hmac_for_raw(INPUT) {
    let if_algorithm = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.if_algorithm) {if_algorithm.set(INPUT.if_algorithm);}
    if (INPUT === undefined || INPUT.if_algorithm === undefined) {if_algorithm = new abap.types.Character(4).set('SHA1');}
    let if_key = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.if_key) {if_key.set(INPUT.if_key);}
    let if_data = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.if_data) {if_data.set(INPUT.if_data);}
    let ef_hmacstring = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.ef_hmacstring) {ef_hmacstring = INPUT.ef_hmacstring;}
    let ef_hmacxstring = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.ef_hmacxstring) {ef_hmacxstring = INPUT.ef_hmacxstring;}
    let lv_algorithm = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(ef_hmacstring);
    abap.statements.clear(ef_hmacxstring);
    lv_algorithm.set(abap.builtin.to_lower({val: if_algorithm}));
    abap.statements.assert(abap.compare.eq(lv_algorithm, new abap.types.Character(4).set('sha1')) || abap.compare.eq(lv_algorithm, new abap.types.Character(3).set('md5')) || abap.compare.eq(lv_algorithm, new abap.types.Character(6).set('sha256')));
    const crypto = await import("crypto");
    if (abap.compare.initial(if_key)) {
      var shasum = crypto.createHash(lv_algorithm.get());
      shasum.update(if_data.get(), "hex");
      ef_hmacstring.set(shasum.digest("hex").toUpperCase());
    } else {
      let hmac = crypto.createHmac(lv_algorithm.get(), Buffer.from(if_key.get(), "hex")).update(if_data.get(), "hex").digest("hex").toUpperCase();
      ef_hmacstring.set(hmac);
    }
    ef_hmacxstring.set(ef_hmacstring);
  }
  async calculate_hmac_for_char(INPUT) {
    return cl_abap_hmac.calculate_hmac_for_char(INPUT);
  }
  static async calculate_hmac_for_char(INPUT) {
    let if_algorithm = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.if_algorithm) {if_algorithm.set(INPUT.if_algorithm);}
    if (INPUT === undefined || INPUT.if_algorithm === undefined) {if_algorithm = new abap.types.Character(4).set('SHA1');}
    let if_key = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.if_key) {if_key.set(INPUT.if_key);}
    let if_data = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.if_data) {if_data.set(INPUT.if_data);}
    let ef_hmacstring = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.ef_hmacstring) {ef_hmacstring = INPUT.ef_hmacstring;}
    let ef_hmacxstring = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.ef_hmacxstring) {ef_hmacxstring = INPUT.ef_hmacxstring;}
    let ef_hmacb64string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.ef_hmacb64string) {ef_hmacb64string = INPUT.ef_hmacb64string;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
}
abap.Classes['CL_ABAP_HMAC'] = cl_abap_hmac;
export {cl_abap_hmac};
//# sourceMappingURL=cl_abap_hmac.clas.mjs.map