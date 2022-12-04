const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_exceptional_values.clas.abap
const constant_minus_1 = new abap.types.Integer().set(-1);
const constant_1 = new abap.types.Integer().set(1);
const constant_3 = new abap.types.Integer().set(3);
class cl_abap_exceptional_values {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_max_value(INPUT) {
    return cl_abap_exceptional_values.get_max_value(INPUT);
  }
  static async get_max_value(INPUT) {
    let out = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let in_ = new abap.types.Character({length: 4});
    if (INPUT && INPUT.in_) {in_ = INPUT.in_;}
    let lv_type = new abap.types.Character();
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_decimals = new abap.types.Integer({qualifiedName: "I"});
    let fs_out_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    abap.statements.describe({field: in_, type: lv_type});
    let unique70 = lv_type;
    if (abap.compare.eq(unique70, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {
      out.assign(abap.Classes['CL_ABAP_MATH'].max_int4);
    } else if (abap.compare.eq(unique70, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      abap.statements.describe({field: in_, length: lv_length, mode: 'BYTE'});
      abap.statements.createData(out,{"typeName": "P","length": lv_length});
      abap.statements.assign({target: fs_out_, source: (out).getPointer()});
      if (abap.compare.eq(lv_length, constant_3) && abap.compare.eq(lv_decimals, constant_1)) {
        fs_out_.set(new abap.types.Character({length: 6}).set('9999.9'));
      } else {
        abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
      }
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    }
    return out;
  }
  async get_min_value(INPUT) {
    return cl_abap_exceptional_values.get_min_value(INPUT);
  }
  static async get_min_value(INPUT) {
    let out = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let in_ = new abap.types.Character({length: 4});
    if (INPUT && INPUT.in_) {in_ = INPUT.in_;}
    let lv_type = new abap.types.Character();
    let fs_out_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    abap.statements.describe({field: in_, type: lv_type});
    let unique71 = lv_type;
    if (abap.compare.eq(unique71, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int)) {
      out.assign(abap.Classes['CL_ABAP_MATH'].min_int4);
    } else if (abap.compare.eq(unique71, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_packed)) {
      out.set((await this.get_max_value({in_: in_})));
      abap.statements.assign({target: fs_out_, source: (out).getPointer()});
      fs_out_.set(abap.operators.multiply(fs_out_,constant_minus_1));
    } else {
      abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    }
    return out;
  }
}
abap.Classes['CL_ABAP_EXCEPTIONAL_VALUES'] = cl_abap_exceptional_values;
export {cl_abap_exceptional_values};
//# sourceMappingURL=cl_abap_exceptional_values.clas.mjs.map