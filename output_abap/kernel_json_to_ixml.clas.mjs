const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_json_to_ixml.clas.abap
class kernel_json_to_ixml {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async build(INPUT) {
    return kernel_json_to_ixml.build(INPUT);
  }
  static async build(INPUT) {
    let ri_doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
    let iv_json = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.iv_json) {iv_json.set(INPUT.iv_json);}
    let li_reader = new abap.types.ABAPObject({qualifiedName: "IF_SXML_READER"});
    let li_node = new abap.types.ABAPObject({qualifiedName: "IF_SXML_NODE"});
    let li_close = new abap.types.ABAPObject({qualifiedName: "IF_SXML_CLOSE_ELEMENT"});
    let li_open = new abap.types.ABAPObject({qualifiedName: "IF_SXML_OPEN_ELEMENT"});
    let li_value = new abap.types.ABAPObject({qualifiedName: "IF_SXML_VALUE_NODE"});
    let lt_attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "if_sxml_attribute=>attributes");
    let li_attribute = new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"});
    let li_current = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let li_map = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NAMED_NODE_MAP"});
    let li_new = new abap.types.ABAPObject({qualifiedName: "IF_IXML_NODE"});
    let li_element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
    li_reader.set((await abap.Classes['CL_SXML_STRING_READER'].create({data: (await abap.Classes['CL_ABAP_CODEPAGE'].convert_to({source: iv_json}))})));
    ri_doc.set((await (await abap.Classes['CL_IXML'].create()).get().if_ixml$create_document()));
    li_current.set((await ri_doc.get().if_ixml_document$get_root()));
    let unique126 = 1;
    while (true) {
      abap.builtin.sy.get().index.set(unique126++);
      li_node.set((await li_reader.get().if_sxml_reader$read_next_node()));
      if (abap.compare.initial(li_node)) {
        break;
      }
      let unique127 = li_node.get().if_sxml_node$type;
      if (abap.compare.eq(unique127, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_open)) {
        await abap.statements.cast(li_open, li_node);
        abap.statements.clear(lv_name);
        lt_attributes.set((await li_open.get().if_sxml_open_element$get_attributes()));
        for await (const unique128 of abap.statements.loop(lt_attributes)) {
          li_attribute.set(unique128);
          lv_name.set((await li_attribute.get().if_sxml_attribute$get_value()));
        }
        li_element.set((await ri_doc.get().if_ixml_document$create_element_ns({name: li_open.get().if_sxml_open_element$qname.get().name})));
        await abap.statements.cast(li_new, li_element);
        await li_current.get().if_ixml_node$append_child({new_child: li_new});
        li_current.set(li_new);
        if (abap.compare.initial(lv_name) === false) {
          li_element.set((await ri_doc.get().if_ixml_document$create_element_ns({name: new abap.types.Character({length: 4}).set('name')})));
          await abap.statements.cast(li_new, li_element);
          await li_new.get().if_ixml_node$set_value({value: lv_name});
          li_map.set((await li_current.get().if_ixml_node$get_attributes()));
          await li_map.get().if_ixml_named_node_map$set_named_item_ns({node: li_new});
        }
      } else if (abap.compare.eq(unique127, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_element_close)) {
        await abap.statements.cast(li_close, li_node);
        li_current.set((await li_current.get().if_ixml_node$get_parent()));
      } else if (abap.compare.eq(unique127, abap.Classes['IF_SXML_NODE'].if_sxml_node$co_nt_value)) {
        await abap.statements.cast(li_value, li_node);
        li_element.set((await ri_doc.get().if_ixml_document$create_element_ns({name: new abap.types.Character({length: 5}).set('#text')})));
        await li_element.get().if_ixml_element$set_value({value: (await li_value.get().if_sxml_value_node$get_value())});
        await abap.statements.cast(li_new, li_element);
        await li_current.get().if_ixml_node$append_child({new_child: li_new});
      }
    }
    return ri_doc;
  }
}
abap.Classes['KERNEL_JSON_TO_IXML'] = kernel_json_to_ixml;
export {kernel_json_to_ixml};
//# sourceMappingURL=kernel_json_to_ixml.clas.mjs.map