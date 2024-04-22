const {cx_root} = await import("./cx_root.clas.mjs");
const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
// zcl_aff_generator.clas.abap
class zcl_aff_generator {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_GENERATOR';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_GENERATOR"];
  static ATTRIBUTES = {"WRITER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER", RTTIName: "\\INTERFACE=ZIF_AFF_WRITER"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CHECK_INPUT": {"visibility": "I", "parameters": {"TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}}},
  "PROCESS_TYPE_DESCRIPTION": {"visibility": "I", "parameters": {"TYPE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});}, "is_optional": " "}, "TYPE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PROCESS_ELEMENT": {"visibility": "I", "parameters": {"ELEMENT_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PROCESS_STRUCTURE": {"visibility": "I", "parameters": {"STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}, "STRUCTURE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PROCESS_TABLE": {"visibility": "I", "parameters": {"TABLE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});}, "is_optional": " "}, "TABLE_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "PROCESS_INCLUDE": {"visibility": "I", "parameters": {"STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}}},
  "PROCESS_COMPONENTS": {"visibility": "I", "parameters": {"COMPONENTS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");}, "is_optional": " "}}},
  "CHECK_MANDATORY_FIELDS": {"visibility": "I", "parameters": {"STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}}},
  "CHECK_TOP_LEVEL_FIELDS": {"visibility": "I", "parameters": {"STRUCTURE_DESCRIPTION": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});}, "is_optional": " "}}},
  "CONSTRUCTOR": {"visibility": "U", "parameters": {"WRITER": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER", RTTIName: "\\INTERFACE=ZIF_AFF_WRITER"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.writer = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER", RTTIName: "\\INTERFACE=ZIF_AFF_WRITER"});
    this.log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
  }
  async constructor_(INPUT) {
    let writer = INPUT?.writer;
    if (writer?.getQualifiedName === undefined || writer.getQualifiedName() !== "ZIF_AFF_WRITER") { writer = undefined; }
    if (writer === undefined) { writer = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_WRITER", RTTIName: "\\INTERFACE=ZIF_AFF_WRITER"}).set(INPUT.writer); }
    this.me.get().writer.set(writer);
    this.log.set(await (new abap.Classes['ZCL_AFF_LOG']()).constructor_());
    return this;
  }
  async zif_aff_generator$generate_type(INPUT) {
    let result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let data = INPUT?.data;
    let type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"});
    type_description.set((await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: data})));
    await this.check_input({type_description: type_description});
    await this.process_type_description({type_description: type_description});
    result.set((await this.writer.get().zif_aff_writer$get_output()));
    await this.log.get().zif_aff_log$join({log_to_join: (await this.writer.get().zif_aff_writer$get_log())});
    return result;
  }
  async check_input(INPUT) {
    let type_description = INPUT?.type_description;
    if (type_description?.getQualifiedName === undefined || type_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { type_description = undefined; }
    if (type_description === undefined) { type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.type_description); }
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    try {
      await abap.statements.cast(temp1, type_description);
      structure_description.set(temp1);
      await this.check_mandatory_fields({structure_description: structure_description});
      await this.check_top_level_fields({structure_description: structure_description});
    } catch (e) {
      if ((abap.Classes['CX_SY_MOVE_CAST_ERROR'] && e instanceof abap.Classes['CX_SY_MOVE_CAST_ERROR'])) {
        await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg123, component_name: (await type_description.get().get_relative_name())});
      } else {
        throw e;
      }
    }
  }
  async check_mandatory_fields(INPUT) {
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.structure_description); }
    let components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let temp2 = new abap.types.Integer({qualifiedName: "I"});
    let temp1 = new abap.types.Integer({qualifiedName: "I"});
    components.set((await structure_description.get().get_components()));
    abap.statements.readTable(components,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.Character(6).set('HEADER'));},
      withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.Character(6).set('HEADER')}],
      usesTableLine: false,
      withKeySimple: {"name": new abap.types.Character(6).set('HEADER')}});
    temp2.set(abap.builtin.sy.get().subrc);
    abap.statements.readTable(components,{withKey: (i) => {return abap.compare.eq(i.name, new abap.types.Character(14).set('FORMAT_VERSION'));},
      withKeyValue: [{key: (i) => {return i.name}, value: new abap.types.Character(14).set('FORMAT_VERSION')}],
      usesTableLine: false,
      withKeySimple: {"name": new abap.types.Character(14).set('FORMAT_VERSION')}});
    temp1.set(abap.builtin.sy.get().subrc);
    if (!(abap.compare.eq(temp2, abap.IntegerFactory.get(0)) && abap.compare.eq(temp1, abap.IntegerFactory.get(0)))) {
      await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, component_name: (await structure_description.get().get_relative_name())});
    }
  }
  async check_top_level_fields(INPUT) {
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.structure_description); }
    let temp3 = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    temp3.set((await structure_description.get().get_components()));
    for await (const unique48 of abap.statements.loop(temp3)) {
      fs_component_.assign(unique48);
      if (abap.compare.ne(fs_component_.get().name, new abap.types.Character(14).set('FORMAT_VERSION')) && abap.compare.ne(fs_component_.get().type.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct) && abap.compare.ne(fs_component_.get().type.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
        await this.log.get().zif_aff_log$add_warning({message_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg128, component_name: (await structure_description.get().get_relative_name())});
        break;
      }
    }
  }
  async process_type_description(INPUT) {
    let type_description = INPUT?.type_description;
    if (type_description?.getQualifiedName === undefined || type_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { type_description = undefined; }
    if (type_description === undefined) { type_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.type_description); }
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.type_name) {type_name.set(INPUT.type_name);}
    let temp4 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp5 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let temp6 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"});
    let temp7 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    let unique49 = type_description.get().kind;
    if (abap.compare.eq(unique49, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
      await abap.statements.cast(temp4, type_description);
      await this.process_element({element_name: type_name, element_description: temp4});
    } else if (abap.compare.eq(unique49, abap.Classes['CL_ABAP_TYPEDESCR'].kind_struct)) {
      await abap.statements.cast(temp5, type_description);
      await this.process_structure({structure_name: type_name, structure_description: temp5});
    } else if (abap.compare.eq(unique49, abap.Classes['CL_ABAP_TYPEDESCR'].kind_table)) {
      await abap.statements.cast(temp6, type_description);
      await this.process_table({table_name: type_name, table_description: temp6});
    } else {
      temp7.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_());
      throw temp7.get();
    }
  }
  async process_element(INPUT) {
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let temp8 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (abap.compare.initial(element_name) === false) {
      temp8.set(element_name);
    } else {
      temp8.set((await element_description.get().get_relative_name()));
    }
    name.set(temp8);
    await this.writer.get().zif_aff_writer$write_element({element_name: name, element_description: element_description});
  }
  async process_structure(INPUT) {
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.structure_description); }
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    let components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    if (abap.compare.initial(structure_name) === false) {
      temp9.set(structure_name);
    } else {
      temp9.set((await structure_description.get().get_relative_name()));
    }
    name.set(temp9);
    await this.writer.get().zif_aff_writer$open_node({node_name: name, node_description: structure_description});
    components.set((await structure_description.get().get_components()));
    await this.process_components({components: components});
    await this.writer.get().zif_aff_writer$close_node({node_name: name, node_description: structure_description});
  }
  async process_include(INPUT) {
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_STRUCTDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"}).set(INPUT.structure_description); }
    let components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab");
    components.set((await structure_description.get().get_components()));
    await this.writer.get().zif_aff_writer$open_include({include_description: structure_description});
    await this.process_components({components: components});
    await this.writer.get().zif_aff_writer$close_include();
  }
  async process_components(INPUT) {
    let components = INPUT?.components;
    if (components?.getQualifiedName === undefined || components.getQualifiedName() !== "ABAP_COMPONENT_TAB") { components = undefined; }
    if (components === undefined) { components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "abap_component_tab").set(INPUT.components); }
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "NAME"}), "type": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"}), "as_include": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "suffix": new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr", undefined, {}, {}));
    let temp10 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    for await (const unique50 of abap.statements.loop(components)) {
      fs_component_.assign(unique50);
      if (abap.compare.eq(fs_component_.get().as_include, abap.builtin.abap_true)) {
        await abap.statements.cast(temp10, fs_component_.get().type);
        await this.process_include({structure_description: temp10});
      } else {
        await this.process_type_description({type_name: fs_component_.get().name, type_description: fs_component_.get().type});
      }
    }
  }
  async process_table(INPUT) {
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TABLEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TABLEDESCR", RTTIName: "\\CLASS=CL_ABAP_TABLEDESCR"}).set(INPUT.table_description); }
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let name = new abap.types.String({qualifiedName: "STRING"});
    let line_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR", RTTIName: "\\CLASS=CL_ABAP_DATADESCR"});
    if (abap.compare.initial(table_name) === false) {
      temp11.set(table_name);
    } else {
      temp11.set((await table_description.get().get_relative_name()));
    }
    name.set(temp11);
    await this.writer.get().zif_aff_writer$open_node({node_name: name, node_description: table_description});
    line_description.set((await table_description.get().get_table_line_type()));
    await this.process_type_description({type_description: line_description});
    await this.writer.get().zif_aff_writer$close_node({node_name: name, node_description: table_description});
  }
  async zif_aff_generator$get_log() {
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    log.set(this.me.get().log);
    return log;
  }
}
abap.Classes['ZCL_AFF_GENERATOR'] = zcl_aff_generator;
export {zcl_aff_generator};
//# sourceMappingURL=zcl_aff_generator.clas.mjs.map