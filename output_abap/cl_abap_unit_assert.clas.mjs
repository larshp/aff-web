await import("./cl_abap_unit_assert.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_unit_assert.clas.abap
class cl_abap_unit_assert {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async abort(INPUT) {
    return cl_abap_unit_assert.abort(INPUT);
  }
  static async abort(INPUT) {
    let msg = new abap.types.Character();
    if (INPUT && INPUT.msg) {msg = INPUT.msg;}
    let detail = new abap.types.Character();
    if (INPUT && INPUT.detail) {detail = INPUT.detail;}
    let quit = new abap.types.Integer({qualifiedName: "INT1"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    if (INPUT === undefined || INPUT.quit === undefined) {quit = new abap.types.Integer().set(2);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async assert_bound(INPUT) {
    return cl_abap_unit_assert.assert_bound(INPUT);
  }
  static async assert_bound(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.initial(act)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected value to be bound`)});
    }
  }
  async assert_not_bound(INPUT) {
    return cl_abap_unit_assert.assert_not_bound(INPUT);
  }
  static async assert_not_bound(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.initial(act) === false) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected value to not be bound`)});
    }
  }
  async assert_char_cp(INPUT) {
    return cl_abap_unit_assert.assert_char_cp(INPUT);
  }
  static async assert_char_cp(INPUT) {
    let act = new abap.types.Character();
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let exp = new abap.types.Character();
    if (INPUT && INPUT.exp) {exp = INPUT.exp;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.np(act, exp)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({expected: exp, actual: act, msg: msg});
    }
  }
  async assert_char_np(INPUT) {
    return cl_abap_unit_assert.assert_char_np(INPUT);
  }
  static async assert_char_np(INPUT) {
    let act = new abap.types.Character();
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let exp = new abap.types.Character();
    if (INPUT && INPUT.exp) {exp = INPUT.exp;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.cp(act, exp)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Actual: ${abap.templateFormatting(act)}`)});
    }
  }
  async fail(INPUT) {
    return cl_abap_unit_assert.fail(INPUT);
  }
  static async fail(INPUT) {
    let msg = new abap.types.Character();
    if (INPUT && INPUT.msg) {msg = INPUT.msg;}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    let detail = new abap.types.Character();
    if (INPUT && INPUT.detail) {detail = INPUT.detail;}
    throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: msg});
  }
  async skip(INPUT) {
    return cl_abap_unit_assert.skip(INPUT);
  }
  static async skip(INPUT) {
    let msg = new abap.types.Character();
    if (INPUT && INPUT.msg) {msg = INPUT.msg;}
    let detail = new abap.types.Character();
    if (INPUT && INPUT.detail) {detail = INPUT.detail;}
    return;
  }
  async assert_differs(INPUT) {
    return cl_abap_unit_assert.assert_differs(INPUT);
  }
  static async assert_differs(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let exp = new abap.types.Character(4);
    if (INPUT && INPUT.exp) {exp = INPUT.exp;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    try {
      await this.assert_equals({act: act, exp: exp});
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected different values`), act: act, exp: exp});
    } catch (e) {
      if (e instanceof abap.Classes['KERNEL_CX_ASSERT']) {
        return;
      } else {
        throw e;
      }
    }
  }
  async assert_true(INPUT) {
    return cl_abap_unit_assert.assert_true(INPUT);
  }
  static async assert_true(INPUT) {
    let act = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.ne(act, abap.builtin.abap_true)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected abap_true`)});
    }
  }
  async assert_false(INPUT) {
    return cl_abap_unit_assert.assert_false(INPUT);
  }
  static async assert_false(INPUT) {
    let act = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.ne(act, abap.builtin.abap_false)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected abap_false`)});
    }
  }
  async assert_equals(INPUT) {
    return cl_abap_unit_assert.assert_equals(INPUT);
  }
  static async assert_equals(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let exp = new abap.types.Character(4);
    if (INPUT && INPUT.exp) {exp = INPUT.exp;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let tol = new abap.types.Float({qualifiedName: "F"});
    if (INPUT && INPUT.tol) {tol.set(INPUT.tol);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    let type1 = new abap.types.Character(1, {});
    let type2 = new abap.types.Character(1, {});
    let index = new abap.types.Integer({qualifiedName: "I"});
    let diff = new abap.types.Float({qualifiedName: "F"});
    let lv_exp = new abap.types.String({qualifiedName: "STRING"});
    let lv_act = new abap.types.String({qualifiedName: "STRING"});
    let lv_msg = new abap.types.String({qualifiedName: "STRING"});
    let fs_tab1_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character(4), {"withHeader":false}));
    let fs_row1_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    let fs_tab2_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character(4), {"withHeader":false}));
    let fs_row2_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.describe({field: act, type: type1});
    abap.statements.describe({field: exp, type: type2});
    if (abap.compare.ca(type1, new abap.types.Character(10).set('CgyIFPDTXN'))) {
      if (abap.compare.initial(type2) === false) {
        if (abap.compare.na(type2, new abap.types.Character(10).set('CgyIFPDTXN'))) {
          throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Unexpected types`)});
        }
      }
    } else if (abap.compare.initial(type1) === false && abap.compare.initial(type2) === false) {
      if (abap.compare.ne(type1, type2)) {
        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Unexpected types`)});
      }
    }
    if (abap.compare.eq(type1, new abap.types.Character(1).set('h'))) {
      if (abap.compare.ne(abap.builtin.lines({val: act}), abap.builtin.lines({val: exp}))) {
        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected table to contain ${abap.templateFormatting(abap.builtin.lines({val: exp}))} rows, got ${abap.templateFormatting(abap.builtin.lines({val: act}))}`)});
      }
      abap.statements.assign({target: fs_tab1_, source: act});
      abap.statements.assign({target: fs_tab2_, source: exp});
      const indexBackup1 = abap.builtin.sy.get().index.get();
      const unique166 = abap.builtin.lines({val: act}).get();
      for (let unique167 = 0; unique167 < unique166; unique167++) {
        abap.builtin.sy.get().index.set(unique167 + 1);
        index.set(abap.builtin.sy.get().index);
        abap.statements.readTable(fs_tab1_,{index: index,assigning: fs_row1_});
        await this.assert_subrc();
        abap.statements.readTable(fs_tab2_,{index: index,assigning: fs_row2_});
        await this.assert_subrc();
        await this.assert_equals({act: fs_row1_, exp: fs_row2_});
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    } else if (INPUT && INPUT.tol) {
      diff.set(abap.operators.minus(exp,act));
      if (abap.compare.ge(diff, tol)) {
        throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();
      }
    } else if (abap.compare.ne(act, exp)) {
      lv_act.set((await abap.Classes['CLAS-CL_ABAP_UNIT_ASSERT-LCL_DUMP'].to_string({iv_val: act})));
      lv_exp.set((await abap.Classes['CLAS-CL_ABAP_UNIT_ASSERT-LCL_DUMP'].to_string({iv_val: exp})));
      if (abap.compare.ne(msg, new abap.types.Character(0).set(''))) {
        lv_msg.set(msg);
      } else {
        lv_msg.set(new abap.types.String().set(`Expected '${abap.templateFormatting(lv_exp)}', got '${abap.templateFormatting(lv_act)}'`));
      }
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: lv_msg, actual: lv_act, expected: lv_exp});
    }
  }
  async assert_not_initial(INPUT) {
    return cl_abap_unit_assert.assert_not_initial(INPUT);
  }
  static async assert_not_initial(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.initial(act)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected non initial value`)});
    }
  }
  async assert_initial(INPUT) {
    return cl_abap_unit_assert.assert_initial(INPUT);
  }
  static async assert_initial(INPUT) {
    let act = new abap.types.Character(4);
    if (INPUT && INPUT.act) {act = INPUT.act;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.initial(act) === false) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected initial value`)});
    }
  }
  async assert_subrc(INPUT) {
    return cl_abap_unit_assert.assert_subrc(INPUT);
  }
  static async assert_subrc(INPUT) {
    let exp = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.exp) {exp.set(INPUT.exp);}
    if (INPUT === undefined || INPUT.exp === undefined) {exp = new abap.types.Integer().set(0);}
    let act = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.act) {act.set(INPUT.act);}
    if (INPUT === undefined || INPUT.act === undefined) {act = abap.builtin.sy.get().subrc;}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.ne(act, exp)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_({msg: new abap.types.String().set(`Expected sy-subrc to equal ${abap.templateFormatting(exp)}, got ${abap.templateFormatting(act)}`)});
    }
  }
  async assert_number_between(INPUT) {
    return cl_abap_unit_assert.assert_number_between(INPUT);
  }
  static async assert_number_between(INPUT) {
    let lower = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.lower) {lower.set(INPUT.lower);}
    let upper = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.upper) {upper.set(INPUT.upper);}
    let number = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.number) {number.set(INPUT.number);}
    let msg = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.msg) {msg.set(INPUT.msg);}
    let quit = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.quit) {quit.set(INPUT.quit);}
    let level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.level) {level.set(INPUT.level);}
    if (abap.compare.lt(number, lower) || abap.compare.gt(number, upper)) {
      throw await (new abap.Classes['KERNEL_CX_ASSERT']()).constructor_();
    }
  }
}
abap.Classes['CL_ABAP_UNIT_ASSERT'] = cl_abap_unit_assert;
export {cl_abap_unit_assert};
//# sourceMappingURL=cl_abap_unit_assert.clas.mjs.map