const {cx_root} = await import("./cx_root.clas.mjs");
// kernel_call_transformation.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class kernel_call_transformation {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async call(INPUT) {
    return kernel_call_transformation.call(INPUT);
  }
  static async call(INPUT) {
    let input = new abap.types.Character({length: 4});
    if (INPUT && INPUT.input) {input = INPUT.input;}
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_source = new abap.types.String({qualifiedName: "STRING"});
    let result = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let lt_rtab = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), value: new abap.types.DataReference(new abap.types.Character({length: 4}))}, "abap_trans_srcbind"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_trans_srcbind_tab");
    let ls_rtab = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), value: new abap.types.DataReference(new abap.types.Character({length: 4}))}, "abap_trans_srcbind");
    let lv_type = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(kernel_call_transformation.mi_doc);
    abap.statements.clear(kernel_call_transformation.mi_writer);
    lv_name.set(INPUT.name.toUpperCase());
    abap.statements.assert(abap.compare.eq(lv_name, new abap.types.Character({length: 2}).set('ID')));
    if (INPUT.sourceXML?.constructor.name === "ABAPObject") this.mi_doc.set(INPUT.sourceXML);
    if (INPUT.sourceXML?.constructor.name === "String") lv_source.set(INPUT.sourceXML);
    if (abap.compare.initial(lv_source) === false) {
      if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('<'))) {
        lv_type.set(new abap.types.Character({length: 3}).set('XML'));
        await this.parse_xml({iv_xml: lv_source});
      } else if (abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('{')) || abap.compare.eq(lv_source.getOffset({length: 1}), new abap.types.Character({length: 1}).set('['))) {
        lv_type.set(new abap.types.Character({length: 4}).set('JSON'));
        kernel_call_transformation.mi_doc.set((await abap.Classes['KERNEL_JSON_TO_IXML'].build({iv_json: lv_source})));
      } else {
        throw await (new abap.Classes['CX_XSLT_FORMAT_ERROR']()).constructor_();
      }
    }
    if (typeof INPUT.source === "object" && INPUT.resultXML?.constructor.name === "ABAPObject") {
        this.mi_writer.set(INPUT.resultXML);
    }
    if (abap.compare.initial(kernel_call_transformation.mi_writer) === false) {
      await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 6}).set('object')});
      for (const name in INPUT.source) {
          lv_name.set(name);
          if (INPUT.source[name].constructor.name === "FieldSymbol") {
              result.assign(INPUT.source[name].getPointer());
            } else {
                result.assign(INPUT.source[name]);
              }
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 3}).set('str')});
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: abap.builtin.to_upper({val: lv_name})});
            await this.traverse_write({iv_ref: result});
            await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
          }
          await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
          return;
        }
        if (abap.compare.initial(lv_source) && abap.compare.initial(kernel_call_transformation.mi_doc)) {
          throw await (new abap.Classes['CX_XSLT_RUNTIME_ERROR']()).constructor_();
        }
        if (INPUT.result.constructor.name === "Table") {
          lt_rtab = INPUT.result;
          for await (const unique112 of abap.statements.loop(lt_rtab)) {
            ls_rtab.set(unique112);
            await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: ls_rtab.get().name, iv_ref: ls_rtab.get().value, ii_doc: kernel_call_transformation.mi_doc});
          }
        } else {
          for (const name in INPUT.result) {
              lv_name.set(name.toUpperCase());
              if (INPUT.result[name].constructor.name === "FieldSymbol") {
                  result.assign(INPUT.result[name].getPointer());
                } else {
                    result.assign(INPUT.result[name]);
                  }
                if (abap.compare.eq(lv_type, new abap.types.Character({length: 4}).set('JSON'))) {
                  await abap.Classes['KERNEL_IXML_JSON_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});
                } else {
                  await abap.Classes['KERNEL_IXML_XML_TO_DATA'].build({iv_name: lv_name, iv_ref: result, ii_doc: kernel_call_transformation.mi_doc});
                }
              }
            }
          }
          async traverse_write_type(INPUT) {
            return kernel_call_transformation.traverse_write_type(INPUT);
          }
          static async traverse_write_type(INPUT) {
            let rv_type = new abap.types.String({qualifiedName: "STRING"});
            let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
            if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
            let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
            lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).getPointer()})));
            let unique113 = lo_type.get().type_kind;
            if (abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int1) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int2) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_int8) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat16) || abap.compare.eq(unique113, abap.Classes['CL_ABAP_TYPEDESCR'].typekind_decfloat34)) {
              rv_type.set(new abap.types.Character({length: 3}).set('num'));
            } else {
              rv_type.set(new abap.types.Character({length: 3}).set('str'));
            }
            return rv_type;
          }
          async traverse_write(INPUT) {
            return kernel_call_transformation.traverse_write(INPUT);
          }
          static async traverse_write(INPUT) {
            let iv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
            if (INPUT && INPUT.iv_ref) {iv_ref = INPUT.iv_ref;}
            let lo_type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
            let lo_struc = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
            let lt_comps = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
            let li_element = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
            let li_sub = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ELEMENT"});
            let ls_compo = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
            let lv_ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
            let fs_any_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
            let fs_table_ = new abap.types.FieldSymbol(new abap.types.Table(new abap.types.Character({length: 4}), {"withHeader":false}));
            let fs_field_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
            lo_type.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (iv_ref).getPointer()})));
            let unique114 = lo_type.get().kind;
            if (abap.compare.eq(unique114, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
              await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 6}).set('object')});
              await abap.statements.cast(lo_struc, lo_type);
              lt_comps.set((await lo_struc.get().get_components()));
              abap.statements.assign({target: fs_any_, source: (iv_ref).getPointer()});
              for await (const unique115 of abap.statements.loop(lt_comps)) {
                ls_compo.set(unique115);
                abap.statements.assign({component: ls_compo.get().name, target: fs_field_, source: fs_any_});
                lv_ref.assign(fs_field_.getPointer());
                await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});
                await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_attribute({name: new abap.types.Character({length: 4}).set('name'), value: abap.builtin.to_upper({val: ls_compo.get().name})});
                await this.traverse_write({iv_ref: lv_ref});
                await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
              }
              await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
            } else if (abap.compare.eq(unique114, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
              await kernel_call_transformation.mi_writer.get().if_sxml_writer$write_value({value: (iv_ref).getPointer()});
            } else if (abap.compare.eq(unique114, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
              await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: new abap.types.Character({length: 5}).set('array')});
              abap.statements.assign({target: fs_table_, source: (iv_ref).getPointer()});
              for await (const unique116 of abap.statements.loop(fs_table_)) {
                fs_any_.assign(unique116);
                lv_ref.assign(fs_any_.getPointer());
                if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).getPointer()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
                  await kernel_call_transformation.mi_writer.get().if_sxml_writer$open_element({name: (await this.traverse_write_type({iv_ref: lv_ref}))});
                }
                await this.traverse_write({iv_ref: lv_ref});
                if (abap.compare.eq(((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: (lv_ref).getPointer()}))).get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
                  await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
                }
              }
              await kernel_call_transformation.mi_writer.get().if_sxml_writer$close_element();
            } else {
              abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 19}).set('todo_traverse_write')));
            }
          }
          async parse_xml(INPUT) {
            return kernel_call_transformation.parse_xml(INPUT);
          }
          static async parse_xml(INPUT) {
            let iv_xml = new abap.types.String({qualifiedName: "STRING"});
            if (INPUT && INPUT.iv_xml) {iv_xml.set(INPUT.iv_xml);}
            let li_factory = new abap.types.ABAPObject({qualifiedName: "IF_IXML_STREAM_FACTORY"});
            let li_istream = new abap.types.ABAPObject({qualifiedName: "IF_IXML_ISTREAM"});
            let li_parser = new abap.types.ABAPObject({qualifiedName: "IF_IXML_PARSER"});
            let li_ixml = new abap.types.ABAPObject({qualifiedName: "IF_IXML"});
            let lv_subrc = new abap.types.Integer({qualifiedName: "I"});
            li_ixml.set((await abap.Classes['CL_IXML'].create()));
            kernel_call_transformation.mi_doc.set((await li_ixml.get().if_ixml$create_document()));
            li_factory.set((await li_ixml.get().if_ixml$create_stream_factory()));
            li_istream.set((await li_factory.get().if_ixml_stream_factory$create_istream_string({xml: iv_xml})));
            li_parser.set((await li_ixml.get().if_ixml$create_parser({stream_factory: li_factory, istream: li_istream, document: kernel_call_transformation.mi_doc})));
            await li_parser.get().if_ixml_parser$add_strip_space_element();
            lv_subrc.set((await li_parser.get().if_ixml_parser$parse()));
            await li_istream.get().if_ixml_istream$close();
            abap.statements.assert(abap.compare.eq(lv_subrc, constant_0));
          }
        }
        abap.Classes['KERNEL_CALL_TRANSFORMATION'] = kernel_call_transformation;
        kernel_call_transformation.mi_doc = new abap.types.ABAPObject({qualifiedName: "IF_IXML_DOCUMENT"});
        kernel_call_transformation.mi_writer = new abap.types.ABAPObject({qualifiedName: "IF_SXML_WRITER"});
export {kernel_call_transformation};
//# sourceMappingURL=kernel_call_transformation.clas.mjs.map