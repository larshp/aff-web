const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_unit_runner.clas.abap
const constant_30 = new abap.types.Integer().set(30);
class kernel_unit_runner {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.gc_status = kernel_unit_runner.gc_status;
    return this;
  }
  async get_location(INPUT) {
    return kernel_unit_runner.get_location(INPUT);
  }
  static async get_location(INPUT) {
    let rv_location = new abap.types.String({qualifiedName: "STRING"});
    let ix_error = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.ix_error) {ix_error.set(INPUT.ix_error);}
    let lv_stack = new abap.types.String({qualifiedName: "STRING"});
    let lt_lines = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    let lv_found = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    lv_stack.set(INPUT.ix_error.get().stack);
    abap.statements.split({source: lv_stack, at: new abap.types.String().set(`\n`), table: lt_lines});
    for await (const unique159 of abap.statements.loop(lt_lines)) {
      lv_stack.set(unique159);
      if (abap.compare.cp(lv_stack, new abap.types.Character({length: 21}).set('*cl_abap_unit_assert*'))) {
        lv_found.set(abap.builtin.abap_true);
        continue;
      } else if (abap.compare.eq(lv_found, abap.builtin.abap_true)) {
        abap.statements.replace({target:lv_stack, all:false, with: new abap.types.Character({length: 0}).set(''),of: new abap.types.String().set(`at `)});
        rv_location.set(abap.builtin.condense({val: lv_stack}));
        break;
      }
    }
    return rv_location;
  }
  async to_json(INPUT) {
    return kernel_unit_runner.to_json(INPUT);
  }
  static async to_json(INPUT) {
    let rv_json = new abap.types.String({qualifiedName: "STRING"});
    let it_list = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"}), expected: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-EXPECTED"}), actual: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-ACTUAL"}), status: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), runtime: new abap.types.Integer({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-RUNTIME"}), message: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-MESSAGE"}), js_location: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-JS_LOCATION"})}, "kernel_unit_runner=>ty_result_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_result-list");
    if (INPUT && INPUT.it_list) {it_list.set(INPUT.it_list);}
    let ls_list = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"}), expected: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-EXPECTED"}), actual: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-ACTUAL"}), status: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), runtime: new abap.types.Integer({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-RUNTIME"}), message: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-MESSAGE"}), js_location: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-JS_LOCATION"})}, "kernel_unit_runner=>ty_result_item");
    let lt_strings = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    let lv_string = new abap.types.String({qualifiedName: "STRING"});
    let lv_message = new abap.types.String({qualifiedName: "STRING"});
    for await (const unique160 of abap.statements.loop(it_list)) {
      ls_list.set(unique160);
      lv_message.set(ls_list.get().message);
      abap.statements.replace({target:lv_message, all:true, with: new abap.types.String().set(`\"`),of: new abap.types.String().set(`"`)});
      abap.statements.replace({target:lv_message, all:true, with: new abap.types.String().set(`\\n`),of: new abap.types.String().set(`\n`)});
      abap.statements.replace({target:ls_list.get().expected, all:true, with: new abap.types.String().set(`\"`),of: new abap.types.String().set(`"`)});
      abap.statements.replace({target:ls_list.get().expected, all:true, with: new abap.types.String().set(`\\n`),of: new abap.types.String().set(`\n`)});
      abap.statements.replace({target:ls_list.get().actual, all:true, with: new abap.types.String().set(`\"`),of: new abap.types.String().set(`"`)});
      abap.statements.replace({target:ls_list.get().actual, all:true, with: new abap.types.String().set(`\\n`),of: new abap.types.String().set(`\n`)});
      lv_string.set(new abap.types.String().set(`\{"class_name": "${abap.templateFormatting(ls_list.get().class_name)}","testclass_name": "${abap.templateFormatting(ls_list.get().testclass_name)}","method_name": "${abap.templateFormatting(ls_list.get().method_name)}","expected": "${abap.templateFormatting(ls_list.get().expected)}","actual": "${abap.templateFormatting(ls_list.get().actual)}","status": "${abap.templateFormatting(ls_list.get().status)}","runtime": ${abap.templateFormatting(ls_list.get().runtime)},"message": "${abap.templateFormatting(lv_message)}","js_location": "${abap.templateFormatting(ls_list.get().js_location)}"\}`));
      abap.statements.append({source: lv_string, target: lt_strings});
    }
    abap.statements.concatenate({source: [lt_strings], target: rv_json, separatedBy: new abap.types.Character({length: 1}).set(','), lines: true});
    rv_json.set(abap.operators.concat(new abap.types.Character({length: 1}).set('['),abap.operators.concat(rv_json,new abap.types.Character({length: 1}).set(']'))));
    return rv_json;
  }
  async unique_classes(INPUT) {
    return kernel_unit_runner.unique_classes(INPUT);
  }
  static async unique_classes(INPUT) {
    let rt_classes = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-testclass_name"})}, "kernel_unit_runner=>ty_class_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_classes");
    let it_input = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"})}, "kernel_unit_runner=>ty_input_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_input");
    if (INPUT && INPUT.it_input) {it_input.set(INPUT.it_input);}
    let ls_input = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"})}, "kernel_unit_runner=>ty_input_item");
    let ls_class = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-testclass_name"})}, "kernel_unit_runner=>ty_class_item");
    for await (const unique161 of abap.statements.loop(it_input)) {
      ls_input.set(unique161);
      abap.statements.moveCorresponding(ls_input, ls_class);
      abap.statements.insertInternal({data: ls_class, table: rt_classes});
    }
    abap.statements.sort(rt_classes,{});
    await abap.statements.deleteInternal(rt_classes,{adjacent: true});
    return rt_classes;
  }
  async run(INPUT) {
    return kernel_unit_runner.run(INPUT);
  }
  static async run(INPUT) {
    let rs_result = new abap.types.Structure({list: new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"}), expected: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-EXPECTED"}), actual: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-ACTUAL"}), status: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), runtime: new abap.types.Integer({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-RUNTIME"}), message: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-MESSAGE"}), js_location: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-JS_LOCATION"})}, "kernel_unit_runner=>ty_result_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_result-list"), json: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT-JSON"})}, "kernel_unit_runner=>ty_result");
    let it_input = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"})}, "kernel_unit_runner=>ty_input_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_input");
    if (INPUT && INPUT.it_input) {it_input.set(INPUT.it_input);}
    let ls_input = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"})}, "kernel_unit_runner=>ty_input_item");
    let lv_time = new abap.types.Integer({qualifiedName: "I"});
    let lo_obj = new abap.types.ABAPObject();
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lt_classes = new abap.types.Table(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-testclass_name"})}, "kernel_unit_runner=>ty_class_item"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "kernel_unit_runner=>ty_classes");
    let ls_class = new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_class_item-testclass_name"})}, "kernel_unit_runner=>ty_class_item");
    let lx_root = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    let lx_assert = new abap.types.ABAPObject({qualifiedName: "KERNEL_CX_ASSERT"});
    let fs_ls_result_ = new abap.types.FieldSymbol(new abap.types.Structure({class_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-class_name"}), testclass_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-testclass_name"}), method_name: new abap.types.Character({length: 30, qualifiedName: "kernel_unit_runner=>ty_input_item-method_name"}), expected: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-EXPECTED"}), actual: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-ACTUAL"}), status: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), runtime: new abap.types.Integer({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-RUNTIME"}), message: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-MESSAGE"}), js_location: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_RESULT_ITEM-JS_LOCATION"})}, "kernel_unit_runner=>ty_result_item"));
    lt_classes.set((await this.unique_classes({it_input: it_input})));
    for await (const unique162 of abap.statements.loop(lt_classes)) {
      ls_class.set(unique162);
      lv_name.set(new abap.types.String().set(`CLAS-${abap.templateFormatting(ls_class.get().class_name)}-${abap.templateFormatting(ls_class.get().testclass_name)}`));
      if (abap.Classes[lv_name.get()] === undefined) { throw new abap.Classes['CX_SY_CREATE_OBJECT_ERROR']; }
      lo_obj.set(await (new abap.Classes[lv_name.get()]()).constructor_());
      try {
        if (lo_obj.get().class_setup === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (lo_obj.get().class_setup === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }
        await lo_obj.get().class_setup();
      } catch (e) {
        if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD']) {
        } else {
          throw e;
        }
      }
      for await (const unique163 of abap.statements.loop(it_input,{where: async (i) => {return abap.compare.eq(i.class_name, ls_class.get().class_name) && abap.compare.eq(i.testclass_name, ls_class.get().testclass_name);}})) {
        ls_input.set(unique163);
        fs_ls_result_.assign(rs_result.get().list.appendInitial());
        abap.statements.moveCorresponding(ls_input, fs_ls_result_);
        try {
          if (lo_obj.get().setup === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (lo_obj.get().setup === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }
          await lo_obj.get().setup();
        } catch (e) {
          if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD']) {
          } else {
            throw e;
          }
        }
        abap.statements.getRunTime(lv_time);
        try {
          if (lo_obj.get()[ls_input.get().method_name.get().toLowerCase()] === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (lo_obj.get()[ls_input.get().method_name.get().toLowerCase()] === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }
          await lo_obj.get()[ls_input.get().method_name.get().toLowerCase()]();
          fs_ls_result_.get().status.set(kernel_unit_runner.gc_status.get().success);
        } catch (e) {
          if (e instanceof abap.Classes['KERNEL_CX_ASSERT']) {
            lx_assert.set(e);
            fs_ls_result_.get().status.set(kernel_unit_runner.gc_status.get().failed);
            fs_ls_result_.get().actual.set(lx_assert.get().actual);
            fs_ls_result_.get().expected.set(lx_assert.get().expected);
            fs_ls_result_.get().message.set(lx_assert.get().msg);
            fs_ls_result_.get().js_location.set((await this.get_location({ix_error: lx_assert})));
          } else if (e instanceof abap.Classes['CX_ROOT']) {
            lx_root.set(e);
            fs_ls_result_.get().status.set(kernel_unit_runner.gc_status.get().failed);
            fs_ls_result_.get().message.set(new abap.types.String().set(`Some exception raised`));
            fs_ls_result_.get().js_location.set((await this.get_location({ix_error: lx_root})));
          } else {
            throw e;
          }
        }
        abap.statements.getRunTime(lv_time);
        fs_ls_result_.get().runtime.set(lv_time);
        try {
          if (lo_obj.get().teardown === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
          if (lo_obj.get().teardown === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }
          await lo_obj.get().teardown();
        } catch (e) {
          if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD']) {
          } else {
            throw e;
          }
        }
      }
      try {
        if (lo_obj.get().class_teardown === undefined && abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'] === undefined) { throw "CX_SY_DYN_CALL_ILLEGAL_METHOD not found"; }
        if (lo_obj.get().class_teardown === undefined) { throw new abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD'](); }
        await lo_obj.get().class_teardown();
      } catch (e) {
        if (e instanceof abap.Classes['CX_SY_DYN_CALL_ILLEGAL_METHOD']) {
        } else {
          throw e;
        }
      }
    }
    rs_result.get().json.set((await this.to_json({it_list: rs_result.get().list})));
    return rs_result;
  }
}
abap.Classes['KERNEL_UNIT_RUNNER'] = kernel_unit_runner;
kernel_unit_runner.gc_status = new abap.types.Structure({success: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), failed: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"}), skipped: new abap.types.String({qualifiedName: "KERNEL_UNIT_RUNNER=>TY_STATUS"})});
kernel_unit_runner.gc_status.get().success.set('SUCCESS');
kernel_unit_runner.gc_status.get().failed.set('FAILED');
kernel_unit_runner.gc_status.get().skipped.set('SKIPPED');
export {kernel_unit_runner};
//# sourceMappingURL=kernel_unit_runner.clas.mjs.map