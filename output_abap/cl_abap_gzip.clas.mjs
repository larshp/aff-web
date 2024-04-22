const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_gzip.clas.abap
class cl_abap_gzip {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async decompress_binary(INPUT) {
    return cl_abap_gzip.decompress_binary(INPUT);
  }
  static async decompress_binary(INPUT) {
    let gzip_in = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.gzip_in) {gzip_in.set(INPUT.gzip_in);}
    let raw_out = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.raw_out) {raw_out = INPUT.raw_out;}
    let raw_out_len = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.raw_out_len) {raw_out_len = INPUT.raw_out_len;}
    const zlib = await import("zlib");
    const buf = Buffer.from(gzip_in.get(), "hex");
    const decompress = zlib.inflateRawSync(buf).toString("hex").toUpperCase();
    raw_out.set(decompress);
    raw_out_len.set(abap.builtin.xstrlen({val: raw_out}));
  }
  async compress_binary(INPUT) {
    return cl_abap_gzip.compress_binary(INPUT);
  }
  static async compress_binary(INPUT) {
    let compress_level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.compress_level) {compress_level.set(INPUT.compress_level);}
    let raw_in = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.raw_in) {raw_in.set(INPUT.raw_in);}
    let gzip_out = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.gzip_out) {gzip_out = INPUT.gzip_out;}
    let gzip_out_len = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.gzip_out_len) {gzip_out_len = INPUT.gzip_out_len;}
    const zlib = await import("zlib");
    const buf = Buffer.from(raw_in.get(), "hex");
    const gzi = zlib.deflateRawSync(buf).toString("hex").toUpperCase();
    gzip_out.set(gzi);
    gzip_out_len.set(abap.builtin.xstrlen({val: gzip_out}));
  }
}
abap.Classes['CL_ABAP_GZIP'] = cl_abap_gzip;
export {cl_abap_gzip};
//# sourceMappingURL=cl_abap_gzip.clas.mjs.map