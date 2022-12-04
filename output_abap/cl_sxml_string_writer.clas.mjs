const {cx_root} = await import("./cx_root.clas.mjs");
// cl_sxml_string_writer.clas.abap
class cl_sxml_string_writer {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_SXML_WRITER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_output = new abap.types.XString({qualifiedName: "XSTRING"});
    this.mv_type = new abap.types.Integer({qualifiedName: "IF_SXML=>XML_STREAM_TYPE"});
    this.mt_stack = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let type = new abap.types.Integer({qualifiedName: "IF_SXML=>XML_STREAM_TYPE"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    this.mv_type.set(type);
    return this;
  }
  async create(INPUT) {
    return cl_sxml_string_writer.create(INPUT);
  }
  static async create(INPUT) {
    let writer = new abap.types.ABAPObject({qualifiedName: "CL_SXML_STRING_WRITER"});
    let type = new abap.types.Integer({qualifiedName: "IF_SXML=>XML_STREAM_TYPE"});
    if (INPUT && INPUT.type) {type.set(INPUT.type);}
    if (INPUT === undefined || INPUT.type === undefined) {type = abap.Classes['IF_SXML'].if_sxml$co_xt_xml10;}
    let ignore_conversion_errors = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_conversion_errors) {ignore_conversion_errors = INPUT.ignore_conversion_errors;}
    if (INPUT === undefined || INPUT.ignore_conversion_errors === undefined) {ignore_conversion_errors = abap.builtin.abap_false;}
    let normalizing = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.normalizing) {normalizing = INPUT.normalizing;}
    if (INPUT === undefined || INPUT.normalizing === undefined) {normalizing = abap.builtin.abap_false;}
    let no_empty_elements = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.no_empty_elements) {no_empty_elements = INPUT.no_empty_elements;}
    if (INPUT === undefined || INPUT.no_empty_elements === undefined) {no_empty_elements = abap.builtin.abap_false;}
    let encoding = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.encoding) {encoding.set(INPUT.encoding);}
    if (INPUT === undefined || INPUT.encoding === undefined) {encoding = new abap.types.Character(5).set('UTF-8');}
    writer.set(await (new abap.Classes['CL_SXML_STRING_WRITER']()).constructor_({type: type}));
    return writer;
  }
  async if_sxml_writer$set_option(INPUT) {
    let option = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.option) {option.set(INPUT.option);}
    let value = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.value) {value = INPUT.value;}
    if (INPUT === undefined || INPUT.value === undefined) {value = abap.builtin.abap_true;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async get_output() {
    let output = new abap.types.XString({qualifiedName: "XSTRING"});
    output.set(this.mv_output);
    return output;
  }
  async append_text(INPUT) {
    let text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.text) {text.set(INPUT.text);}
    let append = new abap.types.XString({qualifiedName: "XSTRING"});
    append.set((await (await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_out()).get().if_abap_conv_out$convert({source: text})));
    abap.statements.concatenate({source: [this.mv_output, append], target: this.mv_output});
  }
  async get_text() {
    let text = new abap.types.String({qualifiedName: "STRING"});
    text.set((await (await abap.Classes['CL_ABAP_CONV_CODEPAGE'].create_in()).get().if_abap_conv_in$convert({source: this.mv_output})));
    return text;
  }
  async if_sxml_writer$open_element(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let parent = new abap.types.String({qualifiedName: "STRING"});
    parent.set((await this.peek()));
    if (abap.compare.eq(parent, new abap.types.Character(5).set('array')) && abap.compare.np((await this.get_text()), new abap.types.Character(2).set('*['))) {
      await this.append_text({text: new abap.types.Character(1).set(',')});
    }
    if (abap.compare.eq(parent, new abap.types.Character(6).set('object')) && abap.compare.np((await this.get_text()), new abap.types.Character(2).set('*{'))) {
      await this.append_text({text: new abap.types.Character(1).set(',')});
    }
    abap.statements.append({source: name, target: this.mt_stack});
    let unique161 = name;
    if (abap.compare.eq(unique161, new abap.types.Character(6).set('object'))) {
      await this.append_text({text: new abap.types.Character(1).set('{')});
    } else if (abap.compare.eq(unique161, new abap.types.Character(5).set('array'))) {
      await this.append_text({text: new abap.types.Character(1).set('[')});
    }
  }
  async remove() {
    let rv_name = new abap.types.String({qualifiedName: "STRING"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    index.set(abap.builtin.lines({val: this.mt_stack}));
    abap.statements.readTable(this.mt_stack,{index: index,into: rv_name});
    await abap.statements.deleteInternal(this.mt_stack,{index: index});
    return rv_name;
  }
  async if_sxml_writer$close_element() {
    let name = new abap.types.String({qualifiedName: "STRING"});
    name.set((await this.remove()));
    let unique162 = name;
    if (abap.compare.eq(unique162, new abap.types.Character(6).set('object'))) {
      await this.append_text({text: new abap.types.Character(1).set('}')});
    } else if (abap.compare.eq(unique162, new abap.types.Character(5).set('array'))) {
      await this.append_text({text: new abap.types.Character(1).set(']')});
    }
  }
  async if_sxml_writer$write_attribute(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let nsuri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.nsuri) {nsuri.set(INPUT.nsuri);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    await this.append_text({text: new abap.types.Character(1).set('"')});
    await this.append_text({text: value});
    await this.append_text({text: new abap.types.Character(2).set('":')});
  }
  async peek() {
    let rv_name = new abap.types.String({qualifiedName: "STRING"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    index.set(abap.builtin.lines({val: this.mt_stack}));
    abap.statements.readTable(this.mt_stack,{index: index,into: rv_name});
    return rv_name;
  }
  async if_sxml_writer$write_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let name = new abap.types.String({qualifiedName: "STRING"});
    name.set((await this.peek()));
    let unique163 = name;
    if (abap.compare.eq(unique163, new abap.types.Character(3).set('str'))) {
      await this.append_text({text: new abap.types.Character(1).set('"')});
      await this.append_text({text: abap.builtin.condense({val: value})});
      await this.append_text({text: new abap.types.Character(1).set('"')});
    } else if (abap.compare.eq(unique163, new abap.types.Character(3).set('num'))) {
      await this.append_text({text: abap.builtin.condense({val: value})});
    } else {
      console.dir(name);
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(31).set('todo_if_sxml_writer_write_value')));
    }
  }
}
abap.Classes['CL_SXML_STRING_WRITER'] = cl_sxml_string_writer;
export {cl_sxml_string_writer};
//# sourceMappingURL=cl_sxml_string_writer.clas.mjs.map