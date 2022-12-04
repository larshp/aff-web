await import("./cl_abap_zip.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_zip.clas.abap
class cl_abap_zip {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.files = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>T_FILE-NAME"})}, "cl_abap_zip=>t_file"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_abap_zip=>t_files");
    this.mt_contents = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-NAME"}), "original_size": new abap.types.Integer({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE"}), "content": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-CONTENT"}), "compressed": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED"})}, "cl_abap_zip=>ty_contents"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    return this;
  }
  async crc32(INPUT) {
    return cl_abap_zip.crc32(INPUT);
  }
  static async crc32(INPUT) {
    let crc = new abap.types.Integer({qualifiedName: "I"});
    let content = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.content) {content.set(INPUT.content);}
    let lo_stream = new abap.types.ABAPObject({qualifiedName: "LCL_STREAM"});
    lo_stream.set(await (new abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM']()).constructor_());
    crc.set((await lo_stream.get().append_crc({iv_xstring: content})));
    return crc;
  }
  async get(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let content = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.content) {content = INPUT.content;}
    let ls_length = new abap.types.Integer({qualifiedName: "I"});
    let ls_contents = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-NAME"}), "original_size": new abap.types.Integer({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE"}), "content": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-CONTENT"}), "compressed": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED"})}, "cl_abap_zip=>ty_contents");
    abap.statements.readTable(this.mt_contents,{into: ls_contents,withKey: (i) => {return abap.compare.eq(i.name, name);}});
    await abap.Classes['CL_ABAP_GZIP'].decompress_binary({gzip_in: ls_contents.get().compressed, raw_out: content, raw_out_len: ls_length});
  }
  async add(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let content = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.content) {content.set(INPUT.content);}
    let ls_contents = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-NAME"}), "original_size": new abap.types.Integer({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE"}), "content": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-CONTENT"}), "compressed": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED"})}, "cl_abap_zip=>ty_contents");
    ls_contents.get().name.set(name);
    ls_contents.get().original_size.set(abap.builtin.xstrlen({val: content}));
    ls_contents.get().content.set(content);
    await abap.Classes['CL_ABAP_GZIP'].compress_binary({raw_in: content, gzip_out: ls_contents.get().compressed});
    abap.statements.insertInternal({data: ls_contents, table: this.mt_contents});
  }
  async load(INPUT) {
    let zip = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.zip) {zip.set(INPUT.zip);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async save() {
    let val = new abap.types.XString({qualifiedName: "XSTRING"});
    let lo_stream = new abap.types.ABAPObject({qualifiedName: "LCL_STREAM"});
    let ls_contents = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-NAME"}), "original_size": new abap.types.Integer({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE"}), "content": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-CONTENT"}), "compressed": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED"})}, "cl_abap_zip=>ty_contents");
    let lv_buffer = new abap.types.XString({qualifiedName: "XSTRING"});
    let lo_conv = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_CONV_OUT_CE"});
    lo_stream.set(await (new abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM']()).constructor_());
    lo_conv.set((await abap.Classes['CL_ABAP_CONV_OUT_CE'].create()));
    for await (const unique85 of abap.statements.loop(this.mt_contents)) {
      ls_contents.set(unique85);
      await lo_stream.get().append({iv_xstr: new abap.types.Character(8).set('504B0304')});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('1400')});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('0000')});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('0800')});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('0000')});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('0000')});
      await lo_stream.get().append_crc({iv_xstring: ls_contents.get().content});
      await lo_stream.get().append_int4({iv_int: abap.builtin.xstrlen({val: ls_contents.get().compressed})});
      await lo_stream.get().append_int4({iv_int: abap.builtin.xstrlen({val: ls_contents.get().content})});
      await lo_stream.get().append_int2({iv_int: abap.builtin.strlen({val: ls_contents.get().name})});
      await lo_stream.get().append({iv_xstr: new abap.types.Character(4).set('0000')});
      await lo_conv.get().convert({data: ls_contents.get().name, buffer: lv_buffer});
      await lo_stream.get().append({iv_xstr: lv_buffer});
      await lo_stream.get().append({iv_xstr: ls_contents.get().compressed});
    }
    val.set((await lo_stream.get().get()));
    return val;
  }
}
abap.Classes['CL_ABAP_ZIP'] = cl_abap_zip;
cl_abap_zip.t_file = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>T_FILE-NAME"})}, "cl_abap_zip=>t_file");
cl_abap_zip.t_files = new abap.types.Table(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>T_FILE-NAME"})}, "cl_abap_zip=>t_file"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "cl_abap_zip=>t_files");
cl_abap_zip.ty_contents = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-NAME"}), "original_size": new abap.types.Integer({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-ORIGINAL_SIZE"}), "content": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-CONTENT"}), "compressed": new abap.types.XString({qualifiedName: "CL_ABAP_ZIP=>TY_CONTENTS-COMPRESSED"})}, "cl_abap_zip=>ty_contents");
export {cl_abap_zip};
//# sourceMappingURL=cl_abap_zip.clas.mjs.map