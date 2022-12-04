const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_ixml_json_to_data.clas.abap
const constant_0 = new abap.types.Integer().set(0);
class kernel_ixml_json_to_data {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async get_field_name(INPUT) {
    return kernel_ixml_json_to_data.get_field_name(INPUT);
  }
  static async get_field_name(INPUT) {
    let rv_name = new abap.types.String({qualifiedName: "STRING"});
    let ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_node) {ii_node.set(INPUT.ii_node);}
    let li_aiterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let li_anode = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let attr = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    attr.set((await ii_node.get().if_ixml_node$get_attributes()));
    if (abap.compare.initial(attr) === false) {
      li_aiterator.set((await attr.get().if_ixml_named_node_map$create_iterator()));
      let unique118 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique118++);
        li_anode.set((await li_aiterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_anode)) {
          break;
        }
        rv_name.set((await li_anode.get().if_ixml_node$get_value()));
        return rv_name;
      }
    }
    return rv_name;
  }
  async build(INPUT) {
    return kernel_ixml_json_to_data.build(INPUT);
  }
  static async build(INPUT) {
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
    let ii_doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.ii_doc) {ii_doc.set(INPUT.ii_doc);}
    let li_first = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    li_first.set((await (await ii_doc.get().if_ixml_document$get_root()).get().if_ixml_node$get_first_child()));
    abap.statements.assert(abap.compare.eq((await li_first.get().if_ixml_node$get_name()), new abap.types.Character({length: 6}).set('object')));
    li_iterator.set((await (await li_first.get().if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
    let unique119 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique119++);
      li_node.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
      if (abap.compare.initial(li_node)) {
        break;
      }
      lv_name.set((await this.get_field_name({ii_node: li_node})));
      if (abap.compare.eq(lv_name, iv_name)) {
        await this.traverse({iv_ref: iv_ref, ii_node: li_node});
        return;
      }
    }
  }
  async traverse(INPUT) {
    return kernel_ixml_json_to_data.traverse(INPUT);
  }
  static async traverse(INPUT) {
    let ii_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    if (INPUT && INPUT.ii_node) {ii_node.set(INPUT.ii_node);}
    let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
    let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let li_child = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    let lv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    let fs_tab_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {"withHeader":false}));
    lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).getPointer()})));
    let unique120 = lo_type.get().kind;
    if (abap.compare.eq(unique120, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      abap.statements.assert(abap.compare.eq((await ii_node.get().if_ixml_node$get_name()), new abap.types.Character({length: 6}).set('object')));
      abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});
      li_iterator.set((await (await ii_node.get().if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
      let unique121 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique121++);
        li_child.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_child)) {
          break;
        }
        lv_name.set((await this.get_field_name({ii_node: li_child})));
        abap.statements.assign({component: lv_name, target: fs_field_, source: fs_any_});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
          lv_ref.assign(fs_field_.getPointer());
          await this.traverse({ii_node: li_child, iv_ref: lv_ref});
        }
      }
    } else if (abap.compare.eq(unique120, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      li_child.set((await ii_node.get().if_ixml_node$get_first_child()));
      abap.statements.assert(abap.compare.eq((await li_child.get().if_ixml_node$get_name()), new abap.types.Character({length: 5}).set('#text')));
      abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});
      fs_any_.set((await li_child.get().if_ixml_node$get_value()));
    } else if (abap.compare.eq(unique120, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      abap.statements.assert(abap.compare.eq((await ii_node.get().if_ixml_node$get_name()), new abap.types.Character({length: 5}).set('array')));
      abap.statements.assign({target: fs_tab_, source: (iv_ref).getPointer()});
      li_iterator.set((await (await ii_node.get().if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
      let unique122 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique122++);
        li_child.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_child)) {
          break;
        }
        abap.statements.createData(lv_ref,{"likeLineOf": fs_tab_});
        abap.statements.assign({target: fs_any_, source: (lv_ref).getPointer()});
        await this.traverse({ii_node: li_child, iv_ref: lv_ref});
        abap.statements.insertInternal({data: fs_any_, table: fs_tab_});
      }
    } else {
      console.dir(lo_type.get().kind.get());
    }
  }
}
abap.Classes['KERNEL_IXML_JSON_TO_DATA'] = kernel_ixml_json_to_data;
export {kernel_ixml_json_to_data};
//# sourceMappingURL=kernel_ixml_json_to_data.clas.mjs.map