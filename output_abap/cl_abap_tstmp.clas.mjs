const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_tstmp.clas.abap
class cl_abap_tstmp {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async td_add(INPUT) {
    return cl_abap_tstmp.td_add(INPUT);
  }
  static async td_add(INPUT) {
    let date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.date) {date.set(INPUT.date);}
    let time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.time) {time.set(INPUT.time);}
    let secs = new abap.types.Packed({length: 8, decimals: 0});
    if (INPUT && INPUT.secs) {secs = INPUT.secs;}
    let res_date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.res_date) {res_date = INPUT.res_date;}
    let res_time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.res_time) {res_time = INPUT.res_time;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async move(INPUT) {
    return cl_abap_tstmp.move(INPUT);
  }
  static async move(INPUT) {
    let tstmp_src = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp_src) {tstmp_src.set(INPUT.tstmp_src);}
    let tstmp_tgt = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp_tgt) {tstmp_tgt = INPUT.tstmp_tgt;}
    tstmp_tgt.set(tstmp_src);
  }
  async systemtstmp_syst2utc(INPUT) {
    return cl_abap_tstmp.systemtstmp_syst2utc(INPUT);
  }
  static async systemtstmp_syst2utc(INPUT) {
    let syst_date = new abap.types.Date({qualifiedName: "D"});
    if (INPUT && INPUT.syst_date) {syst_date.set(INPUT.syst_date);}
    let syst_time = new abap.types.Time({qualifiedName: "T"});
    if (INPUT && INPUT.syst_time) {syst_time.set(INPUT.syst_time);}
    let utc_tstmp = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.utc_tstmp) {utc_tstmp = INPUT.utc_tstmp;}
    utc_tstmp.set(new abap.types.String().set(`${abap.templateFormatting(syst_date)}${abap.templateFormatting(syst_time)}`));
  }
  async subtract(INPUT) {
    return cl_abap_tstmp.subtract(INPUT);
  }
  static async subtract(INPUT) {
    let r_secs = new abap.types.Integer({qualifiedName: "I"});
    let tstmp1 = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp1) {tstmp1.set(INPUT.tstmp1);}
    let tstmp2 = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp2) {tstmp2.set(INPUT.tstmp2);}
    let str = new abap.types.String({qualifiedName: "STRING"});
    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp1,{"timestamp":"iso"})}`));
    let t1 = Date.parse(str.get());
    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp2,{"timestamp":"iso"})}`));
    let t2 = Date.parse(str.get());
    r_secs.set((t1 - t2)/1000);
    return r_secs;
  }
  async add(INPUT) {
    return cl_abap_tstmp.add(INPUT);
  }
  static async add(INPUT) {
    let time = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    let tstmp = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp) {tstmp.set(INPUT.tstmp);}
    let secs = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.secs) {secs.set(INPUT.secs);}
    let str = new abap.types.String({qualifiedName: "STRING"});
    str.set(new abap.types.String().set(`${abap.templateFormatting(tstmp,{"timestamp":"iso"})}`));
    let t1 = new Date(Date.parse(str.get() + "Z"));
    t1.setSeconds( t1.getSeconds() + secs.get() );
    time.set(t1.toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", ""));
    return time;
  }
  async subtractsecs(INPUT) {
    return cl_abap_tstmp.subtractsecs(INPUT);
  }
  static async subtractsecs(INPUT) {
    let time = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    let tstmp = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.tstmp) {tstmp.set(INPUT.tstmp);}
    let secs = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.secs) {secs.set(INPUT.secs);}
    let lv_secs = new abap.types.Integer({qualifiedName: "I"});
    lv_secs.set(abap.operators.multiply(secs,new abap.types.Integer().set(-1)));
    time.set((await this.add({tstmp: tstmp, secs: lv_secs})));
    return time;
  }
}
abap.Classes['CL_ABAP_TSTMP'] = cl_abap_tstmp;
export {cl_abap_tstmp};
//# sourceMappingURL=cl_abap_tstmp.clas.mjs.map