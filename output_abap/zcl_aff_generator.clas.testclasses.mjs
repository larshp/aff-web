const {zcl_aff_generator} = await import("./zcl_aff_generator.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
// zcl_aff_generator.clas.testclasses.abap
class lif_test_types {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LIF_TEST_TYPES'] = lif_test_types;lif_test_types.element = new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"});
lif_test_types.structure = new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure");
lif_test_types.include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"})}, "lif_test_types=>include");
lif_test_types.structure_with_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_WITH_INCLUDE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_with_include");
lif_test_types.include_in_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"})}, "lif_test_types=>include_in_include");
lif_test_types.structure_include_in_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_INCLUDE_IN_INCLUDE-ELEMENT"})}, "lif_test_types=>structure_include_in_include");
lif_test_types.structure_in_structure = new abap.types.Structure({"structure": new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_in_structure");
lif_test_types.table_structure = new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure");
lif_test_types.table_build_in_type = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type");
lif_test_types.structure_with_table = new abap.types.Structure({"table": new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>structure_with_table");
lif_test_types.include_table = new abap.types.Structure({"table": new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure"), "include_element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE_TABLE-INCLUDE_ELEMENT_1"})}, "lif_test_types=>include_table");
lif_test_types.table_in_table = new abap.types.Table(new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
lif_test_types.nested_table = new abap.types.Structure({"second_table": new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table");
lif_test_types.first_table_type = new abap.types.Table(new abap.types.Structure({"second_table": new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type");
lif_test_types.struc_tab_struc_tab = new abap.types.Structure({"first_table": new abap.types.Table(new abap.types.Structure({"second_table": new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type")}, "lif_test_types=>struc_tab_struc_tab");
lif_test_types.ty_component = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component");
lif_test_types.ty_components = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components");
lif_test_types.ty_subcomponents = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents");
lif_test_types.ty_method = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method");
lif_test_types.ty_methods = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods");
lif_test_types.ty_event = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event");
lif_test_types.ty_events = new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events");
lif_test_types.ty_clif_properties = new abap.types.Structure({"attributes": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_clif_properties");
lif_test_types.ty_header = new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header");
lif_test_types.ty_class_properties = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_CLASS_PROPERTIES-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "category": new abap.types.Numc({length: 2, qualifiedName: "lif_test_types=>ty_class_properties-category"}), "fixpt": new abap.types.Character(1, {"qualifiedName":"lif_test_types=>ty_class_properties-fixpt"}), "msg_id": new abap.types.Character(20, {"qualifiedName":"lif_test_types=>ty_class_properties-msg_id"}), "attributes": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_class_properties");
lif_test_types.ty_abap_type = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type");
lif_test_types.ty_abap_type_no_header = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-FORMAT_VERSION"}), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type_no_header");
lif_test_types.ty_abap_type_no_format = new abap.types.Structure({"header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_FORMAT-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type_no_format");
class ltcl_unit_test_writer extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.depth = new abap.types.Integer({qualifiedName: "I"});
    this.depth.set(0);
    return this;
  }
  async write_element(INPUT) {
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    if (INPUT && INPUT.element_description) {element_description.set(INPUT.element_description);}
    let temp11 = new abap.types.String();
    temp11.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(new abap.types.Integer().set(4),this.depth)}))}${abap.templateFormatting(element_name)} : ${abap.templateFormatting(element_description.get().type_kind)}`));
    abap.statements.append({source: temp11, target: this.output});
  }
  async close_structure(INPUT) {
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let temp12 = new abap.types.String();
    temp12.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(new abap.types.Integer().set(4),abap.operators.minus(this.depth,new abap.types.Integer().set(1)))}))}CLOSE_STRUCTURE ${abap.templateFormatting(structure_name)}`));
    abap.statements.append({source: temp12, target: this.output});
    this.depth.set(abap.operators.minus(this.depth,new abap.types.Integer().set(1)));
  }
  async close_table(INPUT) {
    let table_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.table_name) {table_name.set(INPUT.table_name);}
    let table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.table_description) {table_description.set(INPUT.table_description);}
    let temp13 = new abap.types.String();
    temp13.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(new abap.types.Integer().set(4),abap.operators.minus(this.depth,new abap.types.Integer().set(1)))}))}CLOSE_TABLE ${abap.templateFormatting(table_name)}`));
    abap.statements.append({source: temp13, target: this.output});
    this.depth.set(abap.operators.minus(this.depth,new abap.types.Integer().set(1)));
  }
  async open_structure(INPUT) {
    let structure_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.structure_name) {structure_name.set(INPUT.structure_name);}
    let structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.structure_description) {structure_description.set(INPUT.structure_description);}
    let temp14 = new abap.types.String();
    temp14.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(new abap.types.Integer().set(4),this.depth)}))}OPEN_STRUCTURE ${abap.templateFormatting(structure_name)}`));
    abap.statements.append({source: temp14, target: this.output});
    this.depth.set(abap.operators.add(this.depth,new abap.types.Integer().set(1)));
  }
  async open_table(INPUT) {
    let table_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.table_name) {table_name.set(INPUT.table_name);}
    let table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    if (INPUT && INPUT.table_description) {table_description.set(INPUT.table_description);}
    let temp15 = new abap.types.String();
    temp15.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(new abap.types.Integer().set(4),this.depth)}))}OPEN_TABLE ${abap.templateFormatting(table_name)}`));
    abap.statements.append({source: temp15, target: this.output});
    this.depth.set(abap.operators.add(this.depth,new abap.types.Integer().set(1)));
  }
  async write_tag(INPUT) {
    let line = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.line) {line.set(INPUT.line);}
  }
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_UNIT_TEST_WRITER'] = ltcl_unit_test_writer;

class ltcl_type_generator {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["LIF_TEST_TYPES"];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.cut = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_GENERATOR"});
    this.exp_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    return this;
  }
  async setup() {
    let temp2 = new abap.types.ABAPObject({qualifiedName: "LTCL_UNIT_TEST_WRITER"});
    temp2.set(await (new abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_UNIT_TEST_WRITER']()).constructor_());
    this.cut.set(await (new abap.Classes['ZCL_AFF_GENERATOR']()).constructor_({writer: temp2}));
  }
  async element() {
    let test_data = new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"});
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp16 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: test_data})));
    abap.statements.clear(temp16);
    abap.statements.append({source: new abap.types.String().set(`ELEMENT : g`), target: temp16});
    this.exp_result.set(temp16);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure() {
    let test_data = new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp18 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: test_data})));
    abap.statements.clear(temp18);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE`), target: temp18});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT_1 : I`), target: temp18});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT_2 : g`), target: temp18});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE`), target: temp18});
    this.exp_result.set(temp18);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include() {
    let test_data = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_WITH_INCLUDE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_with_include");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp23 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: test_data})));
    abap.statements.clear(temp23);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_WITH_INCLUDE`), target: temp23});
    abap.statements.append({source: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : g`), target: temp23});
    abap.statements.append({source: new abap.types.String().set(`    INCLUDE_ELEMENT_2 : I`), target: temp23});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT_1 : I`), target: temp23});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT_2 : g`), target: temp23});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_WITH_INCLUDE`), target: temp23});
    this.exp_result.set(temp23);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include_in_include() {
    let test_data = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_INCLUDE_IN_INCLUDE-ELEMENT"})}, "lif_test_types=>structure_include_in_include");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp30 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: test_data})));
    abap.statements.clear(temp30);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE`), target: temp30});
    abap.statements.append({source: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : g`), target: temp30});
    abap.statements.append({source: new abap.types.String().set(`    INCLUDE_ELEMENT_2 : I`), target: temp30});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT : g`), target: temp30});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE`), target: temp30});
    this.exp_result.set(temp30);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure_in_structure() {
    let test_data = new abap.types.Structure({"structure": new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_in_structure");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp36 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: test_data})));
    abap.statements.clear(temp36);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_IN_STRUCTURE`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_STRUCTURE STRUCTURE`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`        ELEMENT_1 : I`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`        ELEMENT_2 : g`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_STRUCTURE STRUCTURE`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`    ELEMENT : g`), target: temp36});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_IN_STRUCTURE`), target: temp36});
    this.exp_result.set(temp36);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_build_in_type() {
    let table_build_in_type = new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp44 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: table_build_in_type})));
    abap.statements.clear(temp44);
    abap.statements.append({source: new abap.types.String().set(`OPEN_TABLE TABLE_BUILD_IN_TYPE`), target: temp44});
    abap.statements.append({source: new abap.types.String().set(`    STRING : g`), target: temp44});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_TABLE TABLE_BUILD_IN_TYPE`), target: temp44});
    this.exp_result.set(temp44);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_structure() {
    let table_structure = new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp48 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: table_structure})));
    abap.statements.clear(temp48);
    abap.statements.append({source: new abap.types.String().set(`OPEN_TABLE TABLE_STRUCTURE`), target: temp48});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_STRUCTURE STRUCTURE`), target: temp48});
    abap.statements.append({source: new abap.types.String().set(`        ELEMENT_1 : I`), target: temp48});
    abap.statements.append({source: new abap.types.String().set(`        ELEMENT_2 : g`), target: temp48});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_STRUCTURE STRUCTURE`), target: temp48});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_TABLE TABLE_STRUCTURE`), target: temp48});
    this.exp_result.set(temp48);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure_with_table() {
    let structure_with_table = new abap.types.Structure({"table": new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>structure_with_table");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp55 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: structure_with_table})));
    abap.statements.clear(temp55);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_WITH_TABLE`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE TABLE`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE STRUCTURE`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`            ELEMENT_1 : I`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`            ELEMENT_2 : g`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE STRUCTURE`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE TABLE`), target: temp55});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_WITH_TABLE`), target: temp55});
    this.exp_result.set(temp55);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include_table() {
    let include_table = new abap.types.Structure({"table": new abap.types.Table(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure"), "include_element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE_TABLE-INCLUDE_ELEMENT_1"})}, "lif_test_types=>include_table");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp64 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: include_table})));
    abap.statements.clear(temp64);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE INCLUDE_TABLE`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE TABLE`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE STRUCTURE`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`            ELEMENT_1 : I`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`            ELEMENT_2 : g`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE STRUCTURE`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE TABLE`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : I`), target: temp64});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE INCLUDE_TABLE`), target: temp64});
    this.exp_result.set(temp64);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_in_table() {
    let table_in_table = new abap.types.Table(new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp74 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: table_in_table})));
    abap.statements.clear(temp74);
    abap.statements.append({source: new abap.types.String().set(`OPEN_TABLE TABLE_IN_TABLE`), target: temp74});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE TABLE_BUILD_IN_TYPE`), target: temp74});
    abap.statements.append({source: new abap.types.String().set(`        STRING : g`), target: temp74});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE TABLE_BUILD_IN_TYPE`), target: temp74});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_TABLE TABLE_IN_TABLE`), target: temp74});
    this.exp_result.set(temp74);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async struc_tab_struc_tab() {
    let struc_tab_struc_tab = new abap.types.Structure({"first_table": new abap.types.Table(new abap.types.Structure({"second_table": new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type")}, "lif_test_types=>struc_tab_struc_tab");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp80 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: struc_tab_struc_tab})));
    abap.statements.clear(temp80);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE STRUC_TAB_STRUC_TAB`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE FIRST_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE NESTED_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`            OPEN_TABLE SECOND_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`                STRING : g`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`            CLOSE_TABLE SECOND_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE NESTED_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE FIRST_TABLE`), target: temp80});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE STRUC_TAB_STRUC_TAB`), target: temp80});
    this.exp_result.set(temp80);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async unsupported_type() {
    let class_reference = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_GENERATOR"});
    try {
      await this.cut.get().generate_type({data: class_reference});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(18).set('Exception expected')});
    } catch (e) {
      if (e instanceof abap.Classes['ZCX_AFF_TOOLS']) {
      } else {
        throw e;
      }
    }
  }
  async complex_structure_aff_class() {
    let aff_class = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_CLASS_PROPERTIES-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "category": new abap.types.Numc({length: 2, qualifiedName: "lif_test_types=>ty_class_properties-category"}), "fixpt": new abap.types.Character(1, {"qualifiedName":"lif_test_types=>ty_class_properties-fixpt"}), "msg_id": new abap.types.Character(20, {"qualifiedName":"lif_test_types=>ty_class_properties-msg_id"}), "attributes": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": new abap.types.Table(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_class_properties");
    let act_result = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp90 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    act_result.set((await this.cut.get().generate_type({data: aff_class})));
    abap.statements.clear(temp90);
    abap.statements.append({source: new abap.types.String().set(`OPEN_STRUCTURE TY_CLASS_PROPERTIES`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    FORMAT_VERSION : g`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_STRUCTURE HEADER`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_STRUCTURE HEADER`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CATEGORY : N`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    FIXPT : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    MSG_ID : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE ATTRIBUTES`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE ATTRIBUTES`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE METHODS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE TY_METHOD`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            OPEN_TABLE PARAMETERS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            CLOSE_TABLE PARAMETERS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            OPEN_TABLE EXCEPTIONS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            CLOSE_TABLE EXCEPTIONS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE TY_METHOD`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE METHODS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE EVENTS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE TY_EVENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            OPEN_TABLE PARAMETERS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                    DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            CLOSE_TABLE PARAMETERS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE TY_EVENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE EVENTS`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    OPEN_TABLE TYPES`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        OPEN_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            NAME : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`            DESCRIPTION : C`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`        CLOSE_STRUCTURE TY_COMPONENT`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`    CLOSE_TABLE TYPES`), target: temp90});
    abap.statements.append({source: new abap.types.String().set(`CLOSE_STRUCTURE TY_CLASS_PROPERTIES`), target: temp90});
    this.exp_result.set(temp90);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async mandatory_fields() {
    let abap_type = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type");
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    await this.cut.get().generate_type({data: abap_type});
    log.set((await this.cut.get().get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_has_no_message({log: log});
  }
  async no_header() {
    let no_header = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-FORMAT_VERSION"}), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type_no_header");
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    await this.cut.get().generate_type({data: no_header});
    log.set((await this.cut.get().get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, exp_component_name: new abap.types.String().set(`TY_ABAP_TYPE_NO_HEADER`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async no_format_version() {
    let no_format_version = new abap.types.Structure({"header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header"), "other_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_FORMAT-OTHER_COMPONENT"})}, "lif_test_types=>ty_abap_type_no_format");
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    await this.cut.get().generate_type({data: no_format_version});
    log.set((await this.cut.get().get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, exp_component_name: new abap.types.String().set(`TY_ABAP_TYPE_NO_FORMAT`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async no_structure() {
    let no_structure = new abap.types.Table(new abap.types.Table(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    await this.cut.get().generate_type({data: no_structure});
    log.set((await this.cut.get().get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg123, exp_component_name: new abap.types.String().set(`TABLE_IN_TABLE`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async assert_output_equals(INPUT) {
    let act = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.act) {act.set(INPUT.act);}
    let exp = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.exp) {exp.set(INPUT.exp);}
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String());
    let act_line = new abap.types.String();
    let temp3 = new abap.types.String();
    let temp4 = new abap.types.Integer();
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.lines({val: exp}), act: abap.builtin.lines({val: act}), msg: new abap.types.String().set(`Number of entries doesn't match expectation`)});
    for await (const unique39 of abap.statements.loop(exp)) {
      fs_exp_line_.assign(unique39);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(act,{index: abap.builtin.sy.get().tabix,into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      act_line.set(temp3);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: fs_exp_line_, act: act_line, msg: new abap.types.String().set(`line ${abap.templateFormatting(abap.builtin.sy.get().tabix)} doesn't match expectation`), quit: abap.Classes['IF_ABAP_UNIT_CONSTANT'].if_abap_unit_constant$quit.get().no});
    }
  }
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_TYPE_GENERATOR'] = ltcl_type_generator;
export {ltcl_unit_test_writer, ltcl_type_generator, lif_test_types};
//# sourceMappingURL=zcl_aff_generator.clas.testclasses.mjs.map