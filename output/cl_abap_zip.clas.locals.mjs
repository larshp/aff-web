const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_zip.clas.locals_imp.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_256 = new abap.types.Integer().set(256);
const constant_3 = new abap.types.Integer().set(3);
const constant_4 = new abap.types.Integer().set(4);
const constant_8 = new abap.types.Integer().set(8);
class lcl_stream {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    return this;
  }
  async append(INPUT) {
    let iv_xstr = new abap.types.Hex();
    if (INPUT && INPUT.iv_xstr) {iv_xstr = INPUT.iv_xstr;}
    abap.statements.concatenate({source: [this.mv_xstr, iv_xstr], target: this.mv_xstr});
  }
  async get() {
    let rv_xstr = new abap.types.XString({qualifiedName: "XSTRING"});
    rv_xstr.set(this.mv_xstr);
    return rv_xstr;
  }
  async append_date(INPUT) {
    let iv_date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.iv_date) {iv_date.set(INPUT.iv_date);}
  }
  async append_time(INPUT) {
    let iv_time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.iv_time) {iv_time.set(INPUT.iv_time);}
  }
  async append_int2(INPUT) {
    let iv_int = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}
    let lv_hex = new abap.types.Hex();
    lv_hex.set(iv_int);
    await this.append({iv_xstr: lv_hex});
  }
  async append_int4(INPUT) {
    let iv_int = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.iv_int) {iv_int.set(INPUT.iv_int);}
    let lv_hex = new abap.types.Hex({length: 2});
    lv_hex.set(iv_int);
    await this.append({iv_xstr: lv_hex});
  }
  async append_crc(INPUT) {
    let rv_crc = new abap.types.XString({qualifiedName: "XSTRING"});
    let iv_xstring = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.iv_xstring) {iv_xstring.set(INPUT.iv_xstring);}
    let magic_nr = new abap.types.Hex({length: 4});
    magic_nr.set('EDB88320');
    let mffffffff = new abap.types.Hex({length: 4});
    mffffffff.set('FFFFFFFF');
    let m7fffffff = new abap.types.Hex({length: 4});
    m7fffffff.set('7FFFFFFF');
    let m00ffffff = new abap.types.Hex({length: 4});
    m00ffffff.set('00FFFFFF');
    let m000000ff = new abap.types.Hex({length: 4});
    m000000ff.set('000000FF');
    let m000000 = new abap.types.Hex({length: 3});
    m000000.set('000000');
    let cindex = new abap.types.Hex({length: 4});
    let low_bit = new abap.types.Hex({length: 4});
    let len = new abap.types.Integer({qualifiedName: "I"});
    let nindex = new abap.types.Integer({qualifiedName: "I"});
    let crc = new abap.types.Hex({length: 4});
    crc.set(mffffffff);
    let x4 = new abap.types.Hex({length: 4});
    let idx = new abap.types.Hex({length: 4});
    if (abap.compare.eq(abap.builtin.xstrlen({val: lcl_stream.crc32_map}), constant_0)) {
      const unique72 = constant_256.get();
      for (let unique73 = 0; unique73 < unique72; unique73++) {
        abap.builtin.sy.get().index.set(unique73 + 1);
        cindex.set(abap.operators.minus(abap.builtin.sy.get().index,constant_1));
        const unique74 = constant_8.get();
        for (let unique75 = 0; unique75 < unique74; unique75++) {
          abap.builtin.sy.get().index.set(unique75 + 1);
          low_bit.set(new abap.types.Character({length: 8}).set('00000001'));
          low_bit.set(abap.operators.bitand(cindex,low_bit));
          cindex.set(abap.operators.div(cindex,constant_2));
          cindex.set(abap.operators.bitand(cindex,m7fffffff));
          if (abap.compare.initial(low_bit) === false) {
            cindex.set(abap.operators.bitxor(cindex,magic_nr));
          }
        }
        abap.statements.concatenate({source: [lcl_stream.crc32_map, cindex], target: lcl_stream.crc32_map});
      }
    }
    len.set(abap.builtin.xstrlen({val: iv_xstring}));
    const unique76 = len.get();
    for (let unique77 = 0; unique77 < unique76; unique77++) {
      abap.builtin.sy.get().index.set(unique77 + 1);
      nindex.set(abap.operators.minus(abap.builtin.sy.get().index,constant_1));
      abap.statements.concatenate({source: [m000000, iv_xstring.getOffset({offset: nindex, length: 1})], target: idx});
      idx.set(abap.operators.bitand(abap.operators.bitxor(crc,idx),m000000ff));
      idx.set(abap.operators.multiply(idx,constant_4));
      x4.set(lcl_stream.crc32_map.getOffset({offset: idx, length: 4}));
      crc.set(abap.operators.div(crc,constant_256));
      crc.set(abap.operators.bitand(crc,m00ffffff));
      crc.set(abap.operators.bitxor(x4,crc));
    }
    crc.set(abap.operators.bitxor(crc,mffffffff));
    rv_crc.set(crc);
    await this.append({iv_xstr: rv_crc});
    return rv_crc;
  }
}
abap.Classes['CLAS-CL_ABAP_ZIP-LCL_STREAM'] = lcl_stream;
lcl_stream.crc32_map = new abap.types.XString({qualifiedName: "XSTRING"});
export {lcl_stream};
//# sourceMappingURL=cl_abap_zip.clas.locals.mjs.map