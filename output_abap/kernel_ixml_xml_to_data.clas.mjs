const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_ixml_xml_to_data.clas.abap
const constant_0 = new abap.types.Integer().set(0);
class kernel_ixml_xml_to_data {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async build(INPUT) {
    return kernel_ixml_xml_to_data.build(INPUT);
  }
  static async build(INPUT) {
    let iv_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_name) {iv_name.set(INPUT.iv_name);}
    let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
    let ii_doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    if (INPUT && INPUT.ii_doc) {ii_doc.set(INPUT.ii_doc);}
    let li_first = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let li_iterator = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE_ITERATOR"});
    await abap.statements.cast(li_first, (await (await ii_doc.get().if_ixml_document$get_root()).get().if_ixml_node$get_first_child()));
    li_node.set((await li_first.get().if_ixml_element$find_from_name_ns({name: iv_name, depth: constant_0, namespace: new abap.types.Character({length: 0}).set('')})));
    if (abap.compare.initial(li_node) === false) {
      await this.traverse({ii_node: li_node, iv_ref: iv_ref});
    }
  }
  async traverse(INPUT) {
    return kernel_ixml_xml_to_data.traverse(INPUT);
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
    let unique123 = lo_type.get().kind;
    if (abap.compare.eq(unique123, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});
      li_iterator.set((await (await ii_node.get().if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
      let unique124 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique124++);
        li_child.set((await li_iterator.get().if_ixml_node_iterator$get_next()));
        if (abap.compare.initial(li_child)) {
          break;
        }
        lv_name.set((await li_child.get().if_ixml_node$get_name()));
        abap.statements.assign({component: lv_name, target: fs_field_, source: fs_any_});
        if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
          lv_ref.assign(fs_field_.getPointer());
          await this.traverse({ii_node: li_child, iv_ref: lv_ref});
        }
      }
    } else if (abap.compare.eq(unique123, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      li_child.set((await ii_node.get().if_ixml_node$get_first_child()));
      abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});
      fs_any_.set((await li_child.get().if_ixml_node$get_value()));
    } else if (abap.compare.eq(unique123, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      abap.statements.assign({target: fs_tab_, source: (iv_ref).getPointer()});
      li_iterator.set((await (await ii_node.get().if_ixml_node$get_children()).get().if_ixml_node_list$create_iterator()));
      let unique125 = 1;
      while (true) {
        abap.builtin.sy.get().index.set(unique125++);
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
abap.Classes['KERNEL_IXML_XML_TO_DATA'] = kernel_ixml_xml_to_data;
export {kernel_ixml_xml_to_data};
//# sourceMappingURL=kernel_ixml_xml_to_data.clas.mjs.map