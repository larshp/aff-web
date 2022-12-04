const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gdt_conversion.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
const constant_100 = new abap.types.Integer().set(100);
class cl_gdt_conversion {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async amount_outbound(INPUT) {
    return cl_gdt_conversion.amount_outbound(INPUT);
  }
  static async amount_outbound(INPUT) {
    let im_value = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.im_value) {im_value.set(INPUT.im_value);}
    let im_currency_code = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.im_currency_code) {im_currency_code.set(INPUT.im_currency_code);}
    let ex_value = new abap.types.Packed({length: 1, decimals: 0});
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    let unique79 = im_currency_code;
    if (abap.compare.eq(unique79, new abap.types.Character({length: 3}).set('DKK')) || abap.compare.eq(unique79, new abap.types.Character({length: 3}).set('EUR')) || abap.compare.eq(unique79, new abap.types.Character({length: 3}).set('USD'))) {
      ex_value.set(im_value);
    } else if (abap.compare.eq(unique79, new abap.types.Character({length: 3}).set('VND'))) {
      ex_value.set(abap.operators.multiply(im_value,constant_100));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    }
  }
  async language_code_inbound(INPUT) {
    return cl_gdt_conversion.language_code_inbound(INPUT);
  }
  static async language_code_inbound(INPUT) {
    let im_value = new abap.types.Character();
    if (INPUT && INPUT.im_value) {im_value = INPUT.im_value;}
    let ex_value = new abap.types.Character({qualifiedName: "SPRAS"});
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async unit_code_outbound(INPUT) {
    return cl_gdt_conversion.unit_code_outbound(INPUT);
  }
  static async unit_code_outbound(INPUT) {
    let im_value = new abap.types.Character({length: 3, qualifiedName: "MSEHI"});
    if (INPUT && INPUT.im_value) {im_value.set(INPUT.im_value);}
    let ex_value = new abap.types.Character();
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async country_code_outbound(INPUT) {
    return cl_gdt_conversion.country_code_outbound(INPUT);
  }
  static async country_code_outbound(INPUT) {
    let im_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.im_value) {im_value.set(INPUT.im_value);}
    let ex_value = new abap.types.Character();
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
  }
  async date_time_inbound(INPUT) {
    return cl_gdt_conversion.date_time_inbound(INPUT);
  }
  static async date_time_inbound(INPUT) {
    let im_value = new abap.types.Character();
    if (INPUT && INPUT.im_value) {im_value = INPUT.im_value;}
    let ex_value_short = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    if (INPUT && INPUT.ex_value_short) {ex_value_short = INPUT.ex_value_short;}
    let lv_str = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.np(im_value, new abap.types.Character({length: 2}).set('*Z'))) {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 30}).set('todo, only handles UTC for now')));
    }
    lv_str.set(im_value);
    abap.statements.replace({target:lv_str, all:true, with: new abap.types.Character({length: 0}).set(''),of: new abap.types.Character({length: 1}).set('-')});
    abap.statements.replace({target:lv_str, all:true, with: new abap.types.Character({length: 0}).set(''),of: new abap.types.Character({length: 1}).set(':')});
    abap.statements.replace({target:lv_str, all:true, with: new abap.types.Character({length: 0}).set(''),of: new abap.types.Character({length: 1}).set('T')});
    abap.statements.replace({target:lv_str, all:true, with: new abap.types.Character({length: 0}).set(''),of: new abap.types.Character({length: 1}).set('Z')});
    ex_value_short.set(lv_str);
  }
  async unit_code_inbound(INPUT) {
    return cl_gdt_conversion.unit_code_inbound(INPUT);
  }
  static async unit_code_inbound(INPUT) {
    let im_value = new abap.types.Character();
    if (INPUT && INPUT.im_value) {im_value = INPUT.im_value;}
    let ex_value = new abap.types.Character({length: 3, qualifiedName: "MSEHI"});
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    let unique80 = im_value;
    if (abap.compare.eq(unique80, new abap.types.Character({length: 3}).set('MTR'))) {
      ex_value.set(new abap.types.Character({length: 1}).set('M'));
    } else if (abap.compare.eq(unique80, new abap.types.Character({length: 3}).set('PCE'))) {
      ex_value.set(new abap.types.Character({length: 2}).set('PC'));
    } else if (abap.compare.eq(unique80, new abap.types.Character({length: 3}).set('KGM'))) {
      ex_value.set(new abap.types.Character({length: 2}).set('KG'));
    } else if (abap.compare.eq(unique80, new abap.types.Character({length: 3}).set('LTR'))) {
      ex_value.set(new abap.types.Character({length: 1}).set('L'));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    }
  }
  async language_code_outbound(INPUT) {
    return cl_gdt_conversion.language_code_outbound(INPUT);
  }
  static async language_code_outbound(INPUT) {
    let im_value = new abap.types.Character({qualifiedName: "SPRAS"});
    if (INPUT && INPUT.im_value) {im_value = INPUT.im_value;}
    let ex_value = new abap.types.Character({length: 2, qualifiedName: "LAISO"});
    if (INPUT && INPUT.ex_value) {ex_value = INPUT.ex_value;}
    let unique81 = im_value;
    if (abap.compare.eq(unique81, new abap.types.Character({length: 1}).set('E'))) {
      ex_value.set(new abap.types.Character({length: 2}).set('en'));
    } else if (abap.compare.eq(unique81, new abap.types.Character({length: 1}).set('K'))) {
      ex_value.set(new abap.types.Character({length: 2}).set('da'));
    } else if (abap.compare.eq(unique81, new abap.types.Character({length: 1}).set('D'))) {
      ex_value.set(new abap.types.Character({length: 2}).set('de'));
    } else {
      abap.statements.assert(abap.compare.eq(constant_0, constant_1));
    }
  }
}
abap.Classes['CL_GDT_CONVERSION'] = cl_gdt_conversion;
export {cl_gdt_conversion};
//# sourceMappingURL=cl_gdt_conversion.clas.mjs.map