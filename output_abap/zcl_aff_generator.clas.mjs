const {cx_root} = await import("./cx_root.clas.mjs");
const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
// zcl_aff_generator.clas.abap
const constant_0 = new abap.types.Integer().set(0);
class zcl_aff_generator {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.writer = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER"});
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    let writer = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER"});
    if (INPUT && INPUT.writer) {writer.set(INPUT.writer);}
    this.me.get().writer.set(writer);
    this.log.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    return this;
  }
  async generate_type(INPUT) {
    let result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    type_description.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: data})));
    await this.check_input({type_description: type_description});
    await this.process_type_description({type_description: type_description});
    result.set((await this.writer.get().zif_aff_writer$get_output()));
    await this.log.get().zif_aff_log$join({log_to_join: (await this.writer.get().zif_aff_writer$get_log())});
    return result;
  }
  async check_input(INPUT) {
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.type_description) {type_description.set(INPUT.type_description);}
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    try {
      await abap.statements.cast(temp1, type_description);
      structure_description.set(temp1);
      await this.check_mandatory_fields({structure_description: structure_description});
    } catch (e) {
      if (e instanceof abap.Classes['CX_SY_MOVE_CAST_ERROR']) {
        await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg123, component_name: (await type_description.get().get_relative_name())});
      } else {
        throw e;
      }
    }
  }
  async check_mandatory_fields(INPUT) {
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let temp2 = new abap.types.Integer();
    let temp1 = new abap.types.Integer();
    components.set((await structure_description.get().get_components()));
    abap.statements.readTable(components,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.Character({length: 6}).set('HEADER'));}});
    temp2.set(abap.builtin.sy.get().subrc);
    abap.statements.readTable(components,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.Character({length: 14}).set('FORMAT_VERSION'));}});
    temp1.set(abap.builtin.sy.get().subrc);
    if (!(abap.compare.eq(temp2, constant_0) && abap.compare.eq(temp1, constant_0))) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, component_name: (await structure_description.get().get_relative_name())});
    }
  }
  async process_type_description(INPUT) {
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.type_description) {type_description.set(INPUT.type_description);}
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type_name) {type_name.set(INPUT.type_name);}
    let temp3 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    let temp4 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    let temp6 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    let unique33 = type_description.get().kind;
    if (abap.compare.eq(unique33, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      await abap.statements.cast(temp3, type_description);
      await this.process_element({element_name: type_name, element_description: temp3});
    } else if (abap.compare.eq(unique33, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await abap.statements.cast(temp4, type_description);
      await this.process_structure({structure_name: type_name, structure_description: temp4});
    } else if (abap.compare.eq(unique33, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      await abap.statements.cast(temp5, type_description);
      await this.process_table({table_name: type_name, table_description: temp5});
    } else {
      temp6.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp6.get();
    }
  }
  async process_element(INPUT) {
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial(element_name) === false) {
      temp7.set(element_name);
    } else {
      temp7.set((await element_description.get().get_relative_name()));
    }
    name.set(temp7);
    await this.writer.get().zif_aff_writer$write_element({element_name: name, element_description: element_description});
  }
  async process_structure(INPUT) {
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    if (abap.compare.initial(structure_name) === false) {
      temp8.set(structure_name);
    } else {
      temp8.set((await structure_description.get().get_relative_name()));
    }
    name.set(temp8);
    await this.writer.get().zif_aff_writer$open_node({node_name: name, node_description: structure_description});
    components.set((await structure_description.get().get_components()));
    await this.process_components({components: components});
    await this.writer.get().zif_aff_writer$close_node({node_name: name, node_description: structure_description});
  }
  async process_include(INPUT) {
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    components.set((await structure_description.get().get_components()));
    await this.writer.get().zif_aff_writer$open_include({include_description: structure_description});
    await this.process_components({components: components});
    await this.writer.get().zif_aff_writer$close_include();
  }
  async process_components(INPUT) {
    let components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    if (INPUT && INPUT.components) {components.set(INPUT.components);}
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"));
    let temp9 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    for await (const unique34 of abap.statements.loop(components)) {
      fs_component_.assign(unique34);
      if (abap.compare.eq(fs_component_.get().as_include, abap.builtin.abap_true)) {
        await abap.statements.cast(temp9, fs_component_.get().type);
        await this.process_include({structure_description: temp9});
      } else {
        await this.process_type_description({type_name: fs_component_.get().name, type_description: fs_component_.get().type});
      }
    }
  }
  async process_table(INPUT) {
    let table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR"});
    if (INPUT && INPUT.table_description) {table_description.set(INPUT.table_description);}
    let table_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.table_name) {table_name.set(INPUT.table_name);}
    let temp10 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    let line_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    if (abap.compare.initial(table_name) === false) {
      temp10.set(table_name);
    } else {
      temp10.set((await table_description.get().get_relative_name()));
    }
    name.set(temp10);
    await this.writer.get().zif_aff_writer$open_node({node_name: name, node_description: table_description});
    line_description.set((await table_description.get().get_table_line_type()));
    await this.process_type_description({type_description: line_description});
    await this.writer.get().zif_aff_writer$close_node({node_name: name, node_description: table_description});
  }
  async get_log() {
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    log.set(this.me.get().log);
    return log;
  }
}
abap.Classes['ZCL_AFF_GENERATOR'] = zcl_aff_generator;
export {zcl_aff_generator};
//# sourceMappingURL=zcl_aff_generator.clas.mjs.map