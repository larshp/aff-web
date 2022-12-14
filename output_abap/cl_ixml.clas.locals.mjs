const {cx_root} = await import("./cx_root.clas.mjs");
// cl_ixml.clas.locals_imp.abap
class lcl_escape {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async unescape_value(INPUT) {
    return lcl_escape.unescape_value(INPUT);
  }
  static async unescape_value(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}
    rv_value.set(iv_value);
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(1).set('&'), of: new abap.types.Character(5).set('&amp;')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(1).set('<'), of: new abap.types.Character(4).set('&lt;')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(1).set('>'), of: new abap.types.Character(4).set('&gt;')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(1).set('"'), of: new abap.types.Character(6).set('&quot;')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.String().set(`'`), of: new abap.types.Character(6).set('&apos;')});
    return rv_value;
  }
  async escape_value(INPUT) {
    return lcl_escape.escape_value(INPUT);
  }
  static async escape_value(INPUT) {
    let rv_value = new abap.types.String({qualifiedName: "STRING"});
    let iv_value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_value) {iv_value.set(INPUT.iv_value);}
    rv_value.set(iv_value);
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(5).set('&amp;'), of: new abap.types.Character(1).set('&')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(4).set('&lt;'), of: new abap.types.Character(1).set('<')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(4).set('&gt;'), of: new abap.types.Character(1).set('>')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(6).set('&quot;'), of: new abap.types.Character(1).set('"')});
    abap.statements.replace({target: rv_value, all: true, with: new abap.types.Character(6).set('&apos;'), of: new abap.types.String().set(`'`)});
    return rv_value;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'] = lcl_escape;
class lcl_node_iterator {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NODE_ITERATOR"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_pointer = new abap.types.Integer({qualifiedName: "I"});
    this.mt_list = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
    let it_list = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
    if (INPUT && INPUT.it_list) {it_list.set(INPUT.it_list);}
    this.mt_list.set(it_list);
    this.mv_pointer.set(new abap.types.Integer().set(1));
    return this;
  }
  async if_ixml_node_iterator$reset() {
    this.mv_pointer.set(new abap.types.Integer().set(1));
  }
  async if_ixml_node_iterator$get_next() {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    abap.statements.readTable(this.mt_list,{index: this.mv_pointer,into: rval});
    this.mv_pointer.set(abap.operators.add(this.mv_pointer,new abap.types.Integer().set(1)));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR'] = lcl_node_iterator;
lcl_node_iterator.ty_list = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_node_iterator=>ty_list");
class lcl_encoding {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ENCODING"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ENCODING'] = lcl_encoding;
class lcl_named_node_map {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NAMED_NODE_MAP"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_list = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    return this;
  }
  async if_ixml_named_node_map$create_iterator() {
    let iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    iterator.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: this.mt_list}));
    return iterator;
  }
  async if_ixml_named_node_map$get_length() {
    let val = new abap.types.Integer({qualifiedName: "I"});
    val.set(abap.builtin.lines({val: this.mt_list}));
    return val;
  }
  async if_ixml_named_node_map$get_named_item_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    for await (const unique97 of abap.statements.loop(this.mt_list)) {
      li_node.set(unique97);
      if (abap.compare.eq((await li_node.get().if_ixml_node$get_name()), name)) {
        val.set(li_node);
        return val;
      }
    }
    return val;
  }
  async if_ixml_named_node_map$get_named_item(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_named_node_map$remove_named_item(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_named_node_map$set_named_item_ns(INPUT) {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.node) {node.set(INPUT.node);}
    abap.statements.append({source: node, target: this.mt_list});
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NAMED_NODE_MAP'] = lcl_named_node_map;
class lcl_node_list {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_NODE_LIST"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_list = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    return this;
  }
  async append(INPUT) {
    let ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_node) {ii_node.set(INPUT.ii_node);}
    abap.statements.assert(abap.compare.initial(ii_node) === false);
    abap.statements.append({source: ii_node, target: this.mt_list});
  }
  async remove(INPUT) {
    let ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_node) {ii_node.set(INPUT.ii_node);}
    abap.statements.readTable(this.mt_list,{withKey: (i) => {return abap.compare.eq(i.table_line, ii_node);}});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      await abap.statements.deleteInternal(this.mt_list,{index: abap.builtin.sy.get().tabix});
    }
  }
  async if_ixml_node_list$get_length() {
    let length = new abap.types.Integer({qualifiedName: "I"});
    length.set(abap.builtin.lines({val: this.mt_list}));
    return length;
  }
  async if_ixml_node_list$create_iterator() {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    rval.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_ITERATOR']()).constructor_({it_list: this.mt_list}));
    return rval;
  }
  async if_ixml_node_list$get_item(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.index) {index.set(INPUT.index);}
    abap.statements.readTable(this.mt_list,{index: index,into: val});
    return val;
  }
  async if_ixml_node_list$create_rev_iterator_filtered(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let filter = new abap.types.Character(4);
    if (INPUT && INPUT.filter) {filter = INPUT.filter;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST'] = lcl_node_list;
class lcl_node {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ELEMENT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_name = new abap.types.String({qualifiedName: "STRING"});
    this.mv_namespace = new abap.types.String({qualifiedName: "STRING"});
    this.mv_value = new abap.types.String({qualifiedName: "STRING"});
    this.mo_children = new abap.types.ABAPObject({qualifiedName: "LCL_NODE_LIST"});
    this.mi_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    this.mi_attributes = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    let ii_parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_parent) {ii_parent.set(INPUT.ii_parent);}
    this.mo_children.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE_LIST']()).constructor_());
    this.mi_attributes.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NAMED_NODE_MAP']()).constructor_());
    this.mi_parent.set(ii_parent);
    if (abap.compare.initial(this.mi_parent) === false) {
      await ii_parent.get().if_ixml_node$append_child({new_child: this.me});
    }
    return this;
  }
  async if_ixml_element$get_attribute_node_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_node$get_namespace_prefix() {
    let rv_prefix = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rv_prefix;
  }
  async if_ixml_node$get_namespace_uri() {
    let rval = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rval;
  }
  async if_ixml_element$get_attributes() {
    let attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return attr;
  }
  async if_ixml_element$get_next() {
    let next = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return next;
  }
  async if_ixml_element$get_name() {
    let name = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return name;
  }
  async if_ixml_element$append_child(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "I"});
    let new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    lo_node.get().mi_parent.set(this.me);
    await this.mo_children.get().append({ii_node: new_child});
    return rc;
  }
  async if_ixml_element$clone() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$create_filter_node_type(INPUT) {
    let val = new abap.types.DataReference(new abap.types.Character(4));
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$remove_attribute_ns(INPUT) {
    let foo = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.foo) {foo.set(INPUT.foo);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_element$create_iterator() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$find_from_name_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST"});
    let lt_nodes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let li_top = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    abap.statements.append({source: this.me, target: lt_nodes});
    for await (const unique98 of abap.statements.loop(lt_nodes)) {
      li_top.set(unique98);
      li_children.set((await li_top.get().if_ixml_node$get_children()));
      li_iterator.set((await li_children.get().if_ixml_node_list$create_iterator()));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique99 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique99++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_node)) {
          break;
        }
        if (abap.compare.eq((await li_node.get().if_ixml_node$get_name()), name)) {
          await abap.statements.cast(val, li_node);
          abap.builtin.sy.get().index.set(indexBackup1);
          return val;
        }
        abap.statements.append({source: li_node, target: lt_nodes});
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    }
    return val;
  }
  async if_ixml_element$find_from_name(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$get_attribute_node(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$get_attribute_ns(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    li_node.set((await (await this.if_ixml_node$get_attributes()).get().if_ixml_named_node_map$get_named_item_ns({name: name})));
    if (abap.compare.initial(li_node) === false) {
      val.set((await li_node.get().if_ixml_node$get_value()));
    }
    return val;
  }
  async if_ixml_element$get_attribute(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$get_children() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST"});
    val.set((await this.if_ixml_node$get_children()));
    return val;
  }
  async if_ixml_element$get_elements_by_tag_name(INPUT) {
    let val = new abap.types.Character(4);
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$get_elements_by_tag_name_ns(INPUT) {
    let val = new abap.types.Character(4);
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_element$get_first_child() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    val.set((await this.if_ixml_node$get_first_child()));
    return val;
  }
  async if_ixml_element$get_value() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.if_ixml_node$get_value()));
    return val;
  }
  async if_ixml_element$remove_attribute(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_element$remove_node() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_element$render(INPUT) {
    let ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    if (INPUT && INPUT.ostream) {ostream.set(INPUT.ostream);}
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let li_element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let lv_attributes = new abap.types.String({qualifiedName: "STRING"});
    let lv_ns = new abap.types.String({qualifiedName: "STRING"});
    li_iterator.set((await this.mi_attributes.get().if_ixml_named_node_map$create_iterator()));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique100 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique100++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
      if (abap.compare.initial(li_node)) {
        break;
      }
      lv_attributes.set(abap.operators.concat(lv_attributes,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat((await li_node.get().if_ixml_node$get_name()),abap.operators.concat(new abap.types.Character(2).set('="'),abap.operators.concat((await li_node.get().if_ixml_node$get_value()),new abap.types.Character(1).set('"')))))));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    if (abap.compare.initial(this.mv_namespace) === false) {
      lv_ns.set(abap.operators.concat(this.mv_namespace,new abap.types.Character(1).set(':')));
    }
    await ostream.get().if_ixml_ostream$write_string({string: abap.operators.concat(new abap.types.Character(1).set('<'),abap.operators.concat(lv_ns,abap.operators.concat(this.mv_name,lv_attributes)))});
    if (abap.compare.gt((await (await this.if_ixml_node$get_children()).get().if_ixml_node_list$get_length()), new abap.types.Integer().set(0)) || abap.compare.initial(this.mv_value) === false) {
      await ostream.get().if_ixml_ostream$write_string({string: new abap.types.Character(1).set('>')});
    }
    li_iterator.set((await (await this.if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
    const indexBackup2 = abap.builtin.sy.get().index.get();
    let unique101 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique101++);
      await abap.statements.cast(li_element, (await li_iterator.get().if_ixml_node_iterator$get_next()));
      if (abap.compare.initial(li_element)) {
        break;
      }
      await li_element.get().if_ixml_element$render({ostream: ostream});
    }
    abap.builtin.sy.get().index.set(indexBackup2);
    if (abap.compare.gt((await (await this.if_ixml_node$get_children()).get().if_ixml_node_list$get_length()), new abap.types.Integer().set(0)) || abap.compare.initial(this.mv_value) === false) {
      await ostream.get().if_ixml_ostream$write_string({string: abap.operators.concat((await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].escape_value({iv_value: this.mv_value})),abap.operators.concat(new abap.types.Character(2).set('</'),abap.operators.concat(lv_ns,abap.operators.concat(this.mv_name,new abap.types.Character(1).set('>')))))});
    } else {
      await ostream.get().if_ixml_ostream$write_string({string: new abap.types.Character(2).set('/>')});
    }
  }
  async if_ixml_element$set_attribute_node_ns(INPUT) {
    let attr = new abap.types.Character(4);
    if (INPUT && INPUT.attr) {attr = INPUT.attr;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_element$set_attribute(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    await this.if_ixml_element$set_attribute_ns({name: name, value: value});
  }
  async if_ixml_element$set_attribute_ns(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    let lo_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await lo_node.get().if_ixml_node$set_name({name: name});
    await lo_node.get().if_ixml_node$set_value({value: value});
    await this.mi_attributes.get().if_ixml_named_node_map$set_named_item_ns({node: lo_node});
  }
  async if_ixml_element$set_value(INPUT) {
    let rc = new abap.types.Integer({qualifiedName: "I"});
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    await this.if_ixml_node$set_value({value: value});
    return rc;
  }
  async if_ixml_node$set_namespace_prefix(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.val) {val.set(INPUT.val);}
    this.mv_namespace.set(val);
  }
  async if_ixml_node$append_child(INPUT) {
    let new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    lo_node.get().mi_parent.set(this.me);
    await this.mo_children.get().append({ii_node: new_child});
  }
  async if_ixml_node$get_attributes() {
    let map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    map.set(this.mi_attributes);
    return map;
  }
  async if_ixml_node$get_first_child() {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    node.set((await this.mo_children.get().if_ixml_node_list$get_item({index: new abap.types.Integer().set(1)})));
    return node;
  }
  async if_ixml_node$get_children() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST"});
    val.set(this.mo_children);
    return val;
  }
  async if_ixml_node$query_interface(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_UNKNOWN"});
    let foo = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.foo) {foo.set(INPUT.foo);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rval;
  }
  async if_ixml_node$remove_node() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_node$get_parent() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    val.set(this.mi_parent);
    return val;
  }
  async if_ixml_node$replace_child(INPUT) {
    let new_child = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    let old_child = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.old_child) {old_child.set(INPUT.old_child);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
  }
  async if_ixml_node$get_name() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.mv_name);
    return val;
  }
  async if_ixml_node$get_depth() {
    let val = new abap.types.Integer({qualifiedName: "I"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_max = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq((await this.mo_children.get().if_ixml_node_list$get_length()), new abap.types.Integer().set(0))) {
      val.set(new abap.types.Integer().set(0));
    } else {
      li_iterator.set((await this.mo_children.get().if_ixml_node_list$create_iterator()));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique102 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique102++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_node)) {
          break;
        }
        if (abap.compare.gt((await li_node.get().if_ixml_node$get_depth()), lv_max)) {
          lv_max.set((await li_node.get().if_ixml_node$get_depth()));
        }
      }
      abap.builtin.sy.get().index.set(indexBackup1);
      val.set(abap.operators.add(lv_max,new abap.types.Integer().set(1)));
    }
    return val;
  }
  async if_ixml_node$is_leaf() {
    let val = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    val.set(abap.builtin.boolc(abap.compare.eq((await this.mo_children.get().if_ixml_node_list$get_length()), new abap.types.Integer().set(0))));
    return val;
  }
  async if_ixml_node$get_namespace() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set(this.mv_namespace);
    return val;
  }
  async if_ixml_node$get_value() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_max = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq((await this.mo_children.get().if_ixml_node_list$get_length()), new abap.types.Integer().set(0))) {
      val.set(this.mv_value);
    } else {
      li_iterator.set((await this.mo_children.get().if_ixml_node_list$create_iterator()));
      const indexBackup1 = abap.builtin.sy.get().index.get();
      let unique103 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique103++);
        li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_node)) {
          break;
        }
        val.set(abap.operators.concat(val,(await li_node.get().if_ixml_node$get_value())));
      }
      abap.builtin.sy.get().index.set(indexBackup1);
    }
    return val;
  }
  async if_ixml_node$get_type() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_node$set_name(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    this.mv_name.set(name);
  }
  async if_ixml_node$remove_child(INPUT) {
    let child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.child) {child.set(INPUT.child);}
    await this.mo_children.get().remove({ii_node: child});
  }
  async if_ixml_node$set_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    this.mv_value.set(value);
  }
}
abap.Classes['CLAS-CL_IXML-LCL_NODE'] = lcl_node;
class lcl_document {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_DOCUMENT"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    this.mi_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await this.mi_node.get().if_ixml_node$set_name({name: new abap.types.Character(9).set('#document')});
    return this;
  }
  async if_ixml_node$get_namespace_prefix() {
    let rv_prefix = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rv_prefix;
  }
  async if_ixml_node$get_namespace_uri() {
    let rval = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rval;
  }
  async if_ixml_node$append_child(INPUT) {
    let new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    await abap.statements.cast(lo_node, new_child);
    lo_node.get().mi_parent.set(this.me);
    await this.mi_node.get().if_ixml_node$append_child({new_child: new_child});
  }
  async if_ixml_node$set_namespace_prefix(INPUT) {
    let val = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.val) {val.set(INPUT.val);}
    await this.mi_node.get().if_ixml_node$set_namespace_prefix({val: val});
  }
  async if_ixml_node$get_attributes() {
    let map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    map.set((await this.mi_node.get().if_ixml_node$get_attributes()));
    return map;
  }
  async if_ixml_node$get_first_child() {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    node.set((await this.mi_node.get().if_ixml_node$get_first_child()));
    return node;
  }
  async if_ixml_node$get_children() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST"});
    val.set((await this.mi_node.get().if_ixml_node$get_children()));
    return val;
  }
  async if_ixml_node$query_interface(INPUT) {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_UNKNOWN"});
    let foo = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.foo) {foo.set(INPUT.foo);}
    await this.mi_node.get().if_ixml_node$query_interface({foo: foo});
    return rval;
  }
  async if_ixml_node$remove_node() {
    await this.mi_node.get().if_ixml_node$remove_node();
  }
  async if_ixml_node$get_parent() {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    val.set((await this.mi_node.get().if_ixml_node$get_parent()));
    return val;
  }
  async if_ixml_node$replace_child(INPUT) {
    let new_child = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    let old_child = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.old_child) {old_child.set(INPUT.old_child);}
    await this.mi_node.get().if_ixml_node$replace_child({new_child: new_child, old_child: old_child});
  }
  async if_ixml_node$get_name() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.mi_node.get().if_ixml_node$get_name()));
    return val;
  }
  async if_ixml_node$get_depth() {
    let val = new abap.types.Integer({qualifiedName: "I"});
    val.set((await this.mi_node.get().if_ixml_node$get_depth()));
    return val;
  }
  async if_ixml_node$is_leaf() {
    let val = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    val.set((await this.mi_node.get().if_ixml_node$is_leaf()));
    return val;
  }
  async if_ixml_node$get_namespace() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.mi_node.get().if_ixml_node$get_namespace()));
    return val;
  }
  async if_ixml_node$get_value() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.mi_node.get().if_ixml_node$get_value()));
    return val;
  }
  async if_ixml_node$get_type() {
    let val = new abap.types.String({qualifiedName: "STRING"});
    val.set((await this.mi_node.get().if_ixml_node$get_type()));
    return val;
  }
  async if_ixml_node$set_name(INPUT) {
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    await this.mi_node.get().if_ixml_node$set_name({name: name});
  }
  async if_ixml_node$remove_child(INPUT) {
    let child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.child) {child.set(INPUT.child);}
    await this.mi_node.get().if_ixml_node$remove_child({child: child});
  }
  async if_ixml_node$set_value(INPUT) {
    let value = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.value) {value.set(INPUT.value);}
    await this.mi_node.get().if_ixml_node$set_value({value: value});
  }
  async if_ixml_document$set_encoding(INPUT) {
    let encoding = new abap.types.ABAPObject();
    if (INPUT && INPUT.encoding) {encoding = INPUT.encoding;}
    return;
  }
  async if_ixml_document$set_standalone(INPUT) {
    let standalone = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.standalone) {standalone = INPUT.standalone;}
    return;
  }
  async if_ixml_document$set_namespace_prefix(INPUT) {
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    return;
  }
  async if_ixml_document$append_child(INPUT) {
    let new_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.new_child) {new_child.set(INPUT.new_child);}
    await this.if_ixml_node$append_child({new_child: new_child});
  }
  async if_ixml_document$get_first_child() {
    let child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return child;
  }
  async if_ixml_document$create_attribute_ns(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ATTRIBUTE"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return element;
  }
  async if_ixml_document$create_element_ns(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    element.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await element.get().if_ixml_node$set_name({name: name});
    await element.get().if_ixml_node$set_namespace_prefix({val: prefix});
    return element;
  }
  async if_ixml_document$create_element(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    element.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
    await element.get().if_ixml_node$set_name({name: name});
    return element;
  }
  async if_ixml_document$create_iterator_filtered(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let input = new abap.types.Character(4);
    if (INPUT && INPUT.input) {input = INPUT.input;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$create_filter_and(INPUT) {
    let val = new abap.types.Character(4);
    let filter1 = new abap.types.Character(4);
    if (INPUT && INPUT.filter1) {filter1 = INPUT.filter1;}
    let filter2 = new abap.types.Character(4);
    if (INPUT && INPUT.filter2) {filter2 = INPUT.filter2;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$create_iterator() {
    let rval = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rval;
  }
  async if_ixml_document$create_filter_node_type(INPUT) {
    let val = new abap.types.Character(4);
    let typ = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.typ) {typ.set(INPUT.typ);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$create_simple_element_ns(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.parent) {parent.set(INPUT.parent);}
    let prefix = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.prefix) {prefix.set(INPUT.prefix);}
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    val.set((await this.if_ixml_document$create_simple_element({name: name, parent: parent})));
    await abap.statements.cast(li_node, val);
    await li_node.get().if_ixml_node$set_namespace_prefix({val: prefix});
    return val;
  }
  async if_ixml_document$create_filter_attribute(INPUT) {
    let val = new abap.types.Character(4);
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$create_simple_element(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let parent = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.parent) {parent.set(INPUT.parent);}
    val.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: parent}));
    await val.get().if_ixml_node$set_name({name: name});
    return val;
  }
  async if_ixml_document$find_from_name(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(35).set('todo, use find_from_name_ns instead')));
    return element;
  }
  async if_ixml_document$find_from_name_ns(INPUT) {
    let element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    element.set((await this.mi_node.get().if_ixml_element$find_from_name_ns({name: name, depth: depth, namespace: new abap.types.Character(0).set('')})));
    return element;
  }
  async if_ixml_document$find_from_path(INPUT) {
    let val = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path.set(INPUT.path);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$get_elements_by_tag_name_ns(INPUT) {
    let val = new abap.types.Character(4);
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    let uri = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.uri) {uri.set(INPUT.uri);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$get_elements_by_tag_name(INPUT) {
    let val = new abap.types.Character(4);
    let depth = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.depth) {depth.set(INPUT.depth);}
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let namespace = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.namespace) {namespace.set(INPUT.namespace);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return val;
  }
  async if_ixml_document$get_root() {
    let node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    node.set(this.mi_node);
    return node;
  }
  async if_ixml_document$get_root_element() {
    let root = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    root.set(this.mi_node);
    return root;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_DOCUMENT'] = lcl_document;
class lcl_renderer {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_RENDERER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    this.mi_document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    let ostream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    if (INPUT && INPUT.ostream) {ostream.set(INPUT.ostream);}
    let document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    this.mi_ostream.set(ostream);
    this.mi_document.set(document);
    return this;
  }
  async if_ixml_renderer$render() {
    let li_root = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let li_element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let li_children = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_LIST"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    li_root.set((await this.mi_document.get().if_ixml_document$get_root_element()));
    li_children.set((await li_root.get().if_ixml_element$get_children()));
    li_iterator.set((await li_children.get().if_ixml_node_list$create_iterator()));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique104 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique104++);
      await abap.statements.cast(li_element, (await li_iterator.get().if_ixml_node_iterator$get_next()));
      if (abap.compare.initial(li_element)) {
        break;
      }
      await li_element.get().if_ixml_element$render({ostream: this.mi_ostream});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_ixml_renderer$set_normalizing(INPUT) {
    let normal = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.normal) {normal = INPUT.normal;}
    return;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_RENDERER'] = lcl_renderer;
class lcl_ostream {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_OSTREAM"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_string = new abap.types.String({qualifiedName: "STRING"});
    return this;
  }
  async if_ixml_ostream$write_string(INPUT) {
    let rval = new abap.types.Integer({qualifiedName: "I"});
    let string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string) {string.set(INPUT.string);}
    this.mv_string.set(abap.operators.concat(this.mv_string,string));
    return rval;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_OSTREAM'] = lcl_ostream;
class lcl_istream {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_ISTREAM"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_xml = new abap.types.String({qualifiedName: "STRING"});
    let iv_xml = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_xml) {iv_xml.set(INPUT.iv_xml);}
    this.mv_xml.set(iv_xml);
    return this;
  }
  async if_ixml_istream$close() {
    return;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_ISTREAM'] = lcl_istream;
class lcl_stream_factory {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_STREAM_FACTORY"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async if_ixml_stream_factory$create_ostream_cstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    let string = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.string) {string.set(INPUT.string);}
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_OSTREAM']()).constructor_());
    stream.get().mv_string = INPUT.string;
    await stream.get().if_ixml_ostream$write_string({string: new abap.types.Character(39).set('<?xml version="1.0" encoding="utf-16"?>')});
    return stream;
  }
  async if_ixml_stream_factory$create_ostream_xstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_OSTREAM"});
    let string = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.string) {string.set(INPUT.string);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return stream;
  }
  async if_ixml_stream_factory$create_istream_xstring(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
    let xml = new abap.types.XString({qualifiedName: "XSTRING"});
    if (INPUT && INPUT.xml) {xml.set(INPUT.xml);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return stream;
  }
  async if_ixml_stream_factory$create_istream_string(INPUT) {
    let stream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
    let xml = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.xml) {xml.set(INPUT.xml);}
    stream.set(await (new abap.Classes['CLAS-CL_IXML-LCL_ISTREAM']()).constructor_({iv_xml: xml}));
    return stream;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_STREAM_FACTORY'] = lcl_stream_factory;
class lcl_parser {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["IF_IXML_PARSER"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mi_istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
    this.mi_document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    this.lc_regex_tag = lcl_parser.lc_regex_tag;
    this.lc_regex_attr = lcl_parser.lc_regex_attr;
    let istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
    if (INPUT && INPUT.istream) {istream.set(INPUT.istream);}
    let document = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    this.mi_istream.set(istream);
    this.mi_document.set(document);
    return this;
  }
  async if_ixml_parser$set_validating(INPUT) {
    let rval = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let mode = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.mode) {mode.set(INPUT.mode);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return rval;
  }
  async if_ixml_parser$parse() {
    let subrc = new abap.types.Integer({qualifiedName: "I"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_namespace = new abap.types.String({qualifiedName: "STRING"});
    let ls_match = new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let ls_submatch = new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT");
    let lo_parent = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    let lo_node = new abap.types.ABAPObject({qualifiedName: "LCL_NODE"});
    await abap.statements.cast(lo_parent, (await this.mi_document.get().if_ixml_document$get_root()));
    lv_xml.set(this.mi_istream.get().mv_xml);
    abap.statements.replace({target: lv_xml, all: true, with: new abap.types.String().set(``), of: new abap.types.String().set(`\n`)});
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique105 = 1;
    while (abap.compare.initial(lv_xml) === false) {
      abap.builtin.sy.get().index.set(unique105++);
      abap.statements.clear(lo_node);
      if (abap.compare.cp(lv_xml, new abap.types.Character(7).set('<?xml *'))) {
        abap.statements.find(lv_xml, {find: new abap.types.Character(2).set('?>'), first: true, offset: lv_offset});
        abap.statements.assert(abap.compare.gt(lv_offset, new abap.types.Integer().set(0)));
        lv_offset.set(abap.operators.add(lv_offset,new abap.types.Integer().set(2)));
      } else if (abap.compare.cp(lv_xml, new abap.types.Character(2).set('<*'))) {
        abap.statements.find(lv_xml, {regex: lcl_parser.lc_regex_tag, first: true, results: ls_match});
        abap.statements.assert(abap.compare.eq(ls_match.get().offset, new abap.types.Integer().set(0)));
        abap.statements.readTable(ls_match.get().submatches,{index: new abap.types.Integer().set(1),into: ls_submatch});
        abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0)));
        lv_name.set(lv_xml.getOffset({offset: ls_submatch.get().offset, length: ls_submatch.get().length}));
        if (abap.compare.cp(lv_xml, new abap.types.Character(3).set('</*'))) {
          await abap.statements.cast(lo_parent, (await lo_parent.get().if_ixml_node$get_parent()));
        } else {
          lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: lo_parent}));
          if (abap.compare.ca(lv_name, new abap.types.Character(1).set(':'))) {
            abap.statements.split({source: lv_name, at: new abap.types.Character(1).set(':'), targets: [lv_namespace,lv_name]});
            await lo_node.get().if_ixml_node$set_namespace_prefix({val: lv_namespace});
          }
          await lo_node.get().if_ixml_node$set_name({name: lv_name});
          lo_parent.set(lo_node);
        }
        await this.parse_attributes({ii_node: lo_node, iv_xml: lv_xml, is_match: ls_match});
        lv_offset.set(ls_match.get().length);
      } else {
        abap.statements.find(lv_xml, {find: new abap.types.Character(1).set('<'), first: true, offset: lv_offset});
        lv_value.set(lv_xml.getOffset({length: lv_offset}));
        lo_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_({ii_parent: lo_parent}));
        await lo_node.get().if_ixml_node$set_name({name: new abap.types.Character(5).set('#text')});
        await lo_node.get().if_ixml_node$set_value({value: (await abap.Classes['CLAS-CL_IXML-LCL_ESCAPE'].unescape_value({iv_value: lv_value}))});
      }
      lv_xml.set(lv_xml.getOffset({offset: lv_offset}));
      abap.statements.condense(lv_xml, {nogaps: false});
    }
    abap.builtin.sy.get().index.set(indexBackup1);
    return subrc;
  }
  async parse_attributes(INPUT) {
    let ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_node) {ii_node.set(INPUT.ii_node);}
    let iv_xml = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_xml) {iv_xml.set(INPUT.iv_xml);}
    let is_match = new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    if (INPUT && INPUT.is_match) {is_match.set(INPUT.is_match);}
    let ls_submatch = new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT");
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_value = new abap.types.String({qualifiedName: "STRING"});
    let lv_xml = new abap.types.String({qualifiedName: "STRING"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_offset = new abap.types.Integer({qualifiedName: "I"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    if (abap.compare.eq(abap.builtin.lines({val: is_match.get().submatches}), new abap.types.Integer().set(1))) {
      return;
    }
    lv_xml.set(iv_xml.getOffset({length: is_match.get().length}));
    const indexBackup1 = abap.builtin.sy.get().index.get();
    let unique106 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique106++);
      abap.statements.find(lv_xml, {regex: lcl_parser.lc_regex_attr, first: true, offset: lv_offset, length: lv_length, submatches: [lv_name,lv_value]});
      if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
        abap.builtin.sy.get().index.set(indexBackup1);
        return;
      }
      li_node.set(await (new abap.Classes['CLAS-CL_IXML-LCL_NODE']()).constructor_());
      await li_node.get().if_ixml_node$set_name({name: lv_name});
      await li_node.get().if_ixml_node$set_value({value: lv_value});
      await (await ii_node.get().if_ixml_node$get_attributes()).get().if_ixml_named_node_map$set_named_item_ns({node: li_node});
      lv_offset.set(abap.operators.add(lv_offset,lv_length));
      lv_xml.set(lv_xml.getOffset({offset: lv_offset}));
    }
    abap.builtin.sy.get().index.set(indexBackup1);
  }
  async if_ixml_parser$set_normalizing(INPUT) {
    let normal = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.normal) {normal = INPUT.normal;}
    return;
  }
  async if_ixml_parser$num_errors() {
    let errors = new abap.types.Integer({qualifiedName: "I"});
    return errors;
    return errors;
  }
  async if_ixml_parser$add_strip_space_element() {
    return;
  }
  async if_ixml_parser$get_error(INPUT) {
    let error = new abap.types.ABAPObject({qualifiedName: "IF_IXML_PARSE_ERROR"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.index) {index.set(INPUT.index);}
    return error;
    return error;
  }
}
abap.Classes['CLAS-CL_IXML-LCL_PARSER'] = lcl_parser;
lcl_parser.lc_regex_tag = new abap.types.String({qualifiedName: "STRING"});
lcl_parser.lc_regex_tag.set('<\\/?([\\w:]+)( [\\w:]+="[\\w\\.:\\/]+")*>');
lcl_parser.lc_regex_attr = new abap.types.String({qualifiedName: "STRING"});
lcl_parser.lc_regex_attr.set('([\\w:]+)="([\\w\\.:\\/]+)"');
export {lcl_escape, lcl_node_iterator, lcl_encoding, lcl_named_node_map, lcl_node_list, lcl_node, lcl_document, lcl_renderer, lcl_ostream, lcl_istream, lcl_stream_factory, lcl_parser};
//# sourceMappingURL=cl_ixml.clas.locals.mjs.map