const {zcl_aff_generator} = await import("./zcl_aff_generator.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
// zcl_aff_generator.clas.testclasses.abap
class lif_test_types {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {};
  static METHODS = {};
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LIF_TEST_TYPES'] = lif_test_types;lif_test_types.element = new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"});
lif_test_types.structure = new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {});
lif_test_types.include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"})}, "lif_test_types=>include", undefined, {}, {});
lif_test_types.structure_with_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_WITH_INCLUDE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_with_include", undefined, {}, {});
lif_test_types.include_in_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"})}, "lif_test_types=>include_in_include", undefined, {}, {});
lif_test_types.structure_include_in_include = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_INCLUDE_IN_INCLUDE-ELEMENT"})}, "lif_test_types=>structure_include_in_include", undefined, {}, {});
lif_test_types.structure_in_structure = new abap.types.Structure({"structure": new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_in_structure", undefined, {}, {});
lif_test_types.table_structure = abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure");
lif_test_types.table_build_in_type = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type");
lif_test_types.structure_with_table = new abap.types.Structure({"table": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>structure_with_table", undefined, {}, {});
lif_test_types.include_table = new abap.types.Structure({"table": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure"), "include_element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE_TABLE-INCLUDE_ELEMENT_1"})}, "lif_test_types=>include_table", undefined, {}, {});
lif_test_types.table_in_table = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
lif_test_types.nested_table = new abap.types.Structure({"second_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table", undefined, {}, {});
lif_test_types.first_table_type = abap.types.TableFactory.construct(new abap.types.Structure({"second_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type");
lif_test_types.struc_tab_struc_tab = new abap.types.Structure({"first_table": abap.types.TableFactory.construct(new abap.types.Structure({"second_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type")}, "lif_test_types=>struc_tab_struc_tab", undefined, {}, {});
lif_test_types.ty_component = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {});
lif_test_types.ty_components = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components");
lif_test_types.ty_subcomponents = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents");
lif_test_types.ty_method = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method", undefined, {}, {});
lif_test_types.ty_methods = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods");
lif_test_types.ty_event = new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event", undefined, {}, {});
lif_test_types.ty_events = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events");
lif_test_types.ty_clif_properties = new abap.types.Structure({"attributes": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_clif_properties", undefined, {}, {});
lif_test_types.ty_header = new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {});
lif_test_types.ty_class_properties = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_CLASS_PROPERTIES-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "category": new abap.types.Numc({length: 2, qualifiedName: "lif_test_types=>ty_class_properties-category"}), "fixpt": new abap.types.Character(1, {"qualifiedName":"lif_test_types=>ty_class_properties-fixpt"}), "msg_id": new abap.types.Character(20, {"qualifiedName":"lif_test_types=>ty_class_properties-msg_id"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_class_properties", undefined, {}, {});
lif_test_types.ty_abap_type_structure = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_STRUCTURE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_structure", undefined, {}, {});
lif_test_types.ty_abap_type_table = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_TABLE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>ty_abap_type_table", undefined, {}, {});
lif_test_types.ty_simple_component = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_SIMPLE_COMPONENT-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "simple_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_SIMPLE_COMPONENT-SIMPLE_COMPONENT"}), "struc_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), "tabl_component": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>ty_simple_component", undefined, {}, {});
lif_test_types.ty_abap_type_no_header = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-FORMAT_VERSION"}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_no_header", undefined, {}, {});
lif_test_types.ty_abap_type_no_format = new abap.types.Structure({"header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_no_format", undefined, {}, {});
class ltcl_unit_test_writer extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_GENERATOR-LTCL_UNIT_TEST_WRITER';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  static ATTRIBUTES = {"DEPTH": {"type": () => {return new abap.types.Integer({qualifiedName: "I"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"WRITE_ELEMENT": {"visibility": "O", "parameters": {}},
  "OPEN_STRUCTURE": {"visibility": "O", "parameters": {}},
  "CLOSE_STRUCTURE": {"visibility": "O", "parameters": {}},
  "OPEN_TABLE": {"visibility": "O", "parameters": {}},
  "WRITE_TAG": {"visibility": "O", "parameters": {}},
  "CLOSE_TABLE": {"visibility": "O", "parameters": {}}};
  constructor() {
    super();
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.depth = new abap.types.Integer({qualifiedName: "I"});
    this.depth.set(0);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async write_element(INPUT) {
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let element_description = INPUT?.element_description;
    if (element_description?.getQualifiedName === undefined || element_description.getQualifiedName() !== "CL_ABAP_ELEMDESCR") { element_description = undefined; }
    if (element_description === undefined) { element_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}).set(INPUT.element_description); }
    let temp12 = new abap.types.String({qualifiedName: "STRING"});
    temp12.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(abap.IntegerFactory.get(4),this.depth)}))}${abap.templateFormatting(element_name)} : ${abap.templateFormatting(element_description.get().type_kind)}`));
    abap.statements.append({source: temp12, target: this.output});
  }
  async close_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp13 = new abap.types.String({qualifiedName: "STRING"});
    temp13.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(abap.IntegerFactory.get(4),abap.operators.minus(this.depth,abap.IntegerFactory.get(1)))}))}CLOSE_STRUCTURE ${abap.templateFormatting(structure_name)}`));
    abap.statements.append({source: temp13, target: this.output});
    this.depth.set(abap.operators.minus(this.depth,abap.IntegerFactory.get(1)));
  }
  async close_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
    let temp14 = new abap.types.String({qualifiedName: "STRING"});
    temp14.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(abap.IntegerFactory.get(4),abap.operators.minus(this.depth,abap.IntegerFactory.get(1)))}))}CLOSE_TABLE ${abap.templateFormatting(table_name)}`));
    abap.statements.append({source: temp14, target: this.output});
    this.depth.set(abap.operators.minus(this.depth,abap.IntegerFactory.get(1)));
  }
  async open_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
    let temp15 = new abap.types.String({qualifiedName: "STRING"});
    temp15.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(abap.IntegerFactory.get(4),this.depth)}))}OPEN_STRUCTURE ${abap.templateFormatting(structure_name)}`));
    abap.statements.append({source: temp15, target: this.output});
    this.depth.set(abap.operators.add(this.depth,abap.IntegerFactory.get(1)));
  }
  async open_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
    let temp16 = new abap.types.String({qualifiedName: "STRING"});
    temp16.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(abap.IntegerFactory.get(4),this.depth)}))}OPEN_TABLE ${abap.templateFormatting(table_name)}`));
    abap.statements.append({source: temp16, target: this.output});
    this.depth.set(abap.operators.add(this.depth,abap.IntegerFactory.get(1)));
  }
  async write_tag(INPUT) {
    let line = INPUT?.line;
    if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
    if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
  }
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_UNIT_TEST_WRITER'] = ltcl_unit_test_writer;

class ltcl_type_generator {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_GENERATOR-LTCL_TYPE_GENERATOR';
  static IMPLEMENTED_INTERFACES = ["LIF_TEST_TYPES"];
  static ATTRIBUTES = {"CUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_GENERATOR", RTTIName: "\\INTERFACE=ZIF_AFF_GENERATOR"});}, "visibility": "I", "is_constant": " ", "is_class": " "},
  "EXP_RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"ELEMENT": {"visibility": "I", "parameters": {}},
  "STRUCTURE": {"visibility": "I", "parameters": {}},
  "INCLUDE": {"visibility": "I", "parameters": {}},
  "TABLE_BUILD_IN_TYPE": {"visibility": "I", "parameters": {}},
  "INCLUDE_IN_INCLUDE": {"visibility": "I", "parameters": {}},
  "STRUCTURE_IN_STRUCTURE": {"visibility": "I", "parameters": {}},
  "TABLE_STRUCTURE": {"visibility": "I", "parameters": {}},
  "STRUCTURE_WITH_TABLE": {"visibility": "I", "parameters": {}},
  "INCLUDE_TABLE": {"visibility": "I", "parameters": {}},
  "TABLE_IN_TABLE": {"visibility": "I", "parameters": {}},
  "STRUC_TAB_STRUC_TAB": {"visibility": "I", "parameters": {}},
  "UNSUPPORTED_TYPE": {"visibility": "I", "parameters": {}},
  "COMPLEX_STRUCTURE_AFF_CLASS": {"visibility": "I", "parameters": {}},
  "SIMPLE_COMPONENT_ON_TOP_LEVEL": {"visibility": "I", "parameters": {}},
  "NO_HEADER": {"visibility": "I", "parameters": {}},
  "NO_FORMAT_VERSION": {"visibility": "I", "parameters": {}},
  "NO_STRUCTURE": {"visibility": "I", "parameters": {}},
  "STRUCTURE_ON_TOP_LEVEL": {"visibility": "I", "parameters": {}},
  "TABLE_ON_TOP_LEVEL": {"visibility": "I", "parameters": {}},
  "SETUP": {"visibility": "I", "parameters": {}},
  "ASSERT_OUTPUT_EQUALS": {"visibility": "I", "parameters": {"ACT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "EXP": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.cut = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_GENERATOR", RTTIName: "\\INTERFACE=ZIF_AFF_GENERATOR"});
    this.exp_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async setup() {
    let temp2 = new abap.types.ABAPObject({qualifiedName: "LTCL_UNIT_TEST_WRITER", RTTIName: "\\CLASS-POOL=ZCL_AFF_GENERATOR\\CLASS=LTCL_UNIT_TEST_WRITER"});
    temp2.set(await (new abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_UNIT_TEST_WRITER']()).constructor_());
    this.cut.set(await (new abap.Classes['ZCL_AFF_GENERATOR']()).constructor_({writer: temp2}));
  }
  async element() {
    let test_data = new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp17 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: test_data})));
    abap.statements.clear(temp17);
    abap.statements.insertInternal({data: new abap.types.String().set(`ELEMENT : g`), table: temp17});
    this.exp_result.set(temp17);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure() {
    let test_data = new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp19 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: test_data})));
    abap.statements.clear(temp19);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE`), table: temp19});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT_1 : I`), table: temp19});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT_2 : g`), table: temp19});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE`), table: temp19});
    this.exp_result.set(temp19);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include() {
    let test_data = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_WITH_INCLUDE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_with_include", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp21 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: test_data})));
    abap.statements.clear(temp21);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_WITH_INCLUDE`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : g`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`    INCLUDE_ELEMENT_2 : I`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT_1 : I`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT_2 : g`), table: temp21});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_WITH_INCLUDE`), table: temp21});
    this.exp_result.set(temp21);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include_in_include() {
    let test_data = new abap.types.Structure({"include_element_1": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_1"}), "include_element_2": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE-INCLUDE_ELEMENT_2"}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE_INCLUDE_IN_INCLUDE-ELEMENT"})}, "lif_test_types=>structure_include_in_include", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp23 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: test_data})));
    abap.statements.clear(temp23);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE`), table: temp23});
    abap.statements.insertInternal({data: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : g`), table: temp23});
    abap.statements.insertInternal({data: new abap.types.String().set(`    INCLUDE_ELEMENT_2 : I`), table: temp23});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT : g`), table: temp23});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE`), table: temp23});
    this.exp_result.set(temp23);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure_in_structure() {
    let test_data = new abap.types.Structure({"structure": new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), "element": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure_in_structure", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp25 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: test_data})));
    abap.statements.clear(temp25);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_IN_STRUCTURE`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_STRUCTURE STRUCTURE`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`        ELEMENT_1 : I`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`        ELEMENT_2 : g`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_STRUCTURE STRUCTURE`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`    ELEMENT : g`), table: temp25});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_IN_STRUCTURE`), table: temp25});
    this.exp_result.set(temp25);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_build_in_type() {
    let table_build_in_type = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type");
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp27 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: table_build_in_type})));
    abap.statements.clear(temp27);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_TABLE TABLE_BUILD_IN_TYPE`), table: temp27});
    abap.statements.insertInternal({data: new abap.types.String().set(`    STRING : g`), table: temp27});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_TABLE TABLE_BUILD_IN_TYPE`), table: temp27});
    this.exp_result.set(temp27);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_structure() {
    let table_structure = abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure");
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp29 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: table_structure})));
    abap.statements.clear(temp29);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_TABLE TABLE_STRUCTURE`), table: temp29});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_STRUCTURE STRUCTURE`), table: temp29});
    abap.statements.insertInternal({data: new abap.types.String().set(`        ELEMENT_1 : I`), table: temp29});
    abap.statements.insertInternal({data: new abap.types.String().set(`        ELEMENT_2 : g`), table: temp29});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_STRUCTURE STRUCTURE`), table: temp29});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_TABLE TABLE_STRUCTURE`), table: temp29});
    this.exp_result.set(temp29);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure_with_table() {
    let structure_with_table = new abap.types.Structure({"table": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>structure_with_table", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp31 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: structure_with_table})));
    abap.statements.clear(temp31);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUCTURE_WITH_TABLE`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE TABLE`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE STRUCTURE`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`            ELEMENT_1 : I`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`            ELEMENT_2 : g`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE STRUCTURE`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE TABLE`), table: temp31});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUCTURE_WITH_TABLE`), table: temp31});
    this.exp_result.set(temp31);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async include_table() {
    let include_table = new abap.types.Structure({"table": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure"), "include_element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>INCLUDE_TABLE-INCLUDE_ELEMENT_1"})}, "lif_test_types=>include_table", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp33 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: include_table})));
    abap.statements.clear(temp33);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE INCLUDE_TABLE`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE TABLE`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE STRUCTURE`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`            ELEMENT_1 : I`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`            ELEMENT_2 : g`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE STRUCTURE`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE TABLE`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`    INCLUDE_ELEMENT_1 : I`), table: temp33});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE INCLUDE_TABLE`), table: temp33});
    this.exp_result.set(temp33);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async table_in_table() {
    let table_in_table = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp35 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: table_in_table})));
    abap.statements.clear(temp35);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_TABLE TABLE_IN_TABLE`), table: temp35});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE TABLE_BUILD_IN_TYPE`), table: temp35});
    abap.statements.insertInternal({data: new abap.types.String().set(`        STRING : g`), table: temp35});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE TABLE_BUILD_IN_TYPE`), table: temp35});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_TABLE TABLE_IN_TABLE`), table: temp35});
    this.exp_result.set(temp35);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async struc_tab_struc_tab() {
    let struc_tab_struc_tab = new abap.types.Structure({"first_table": abap.types.TableFactory.construct(new abap.types.Structure({"second_table": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type")}, "lif_test_types=>nested_table", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>first_table_type")}, "lif_test_types=>struc_tab_struc_tab", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp37 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: struc_tab_struc_tab})));
    abap.statements.clear(temp37);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE STRUC_TAB_STRUC_TAB`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE FIRST_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE NESTED_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`            OPEN_TABLE SECOND_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`                STRING : g`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`            CLOSE_TABLE SECOND_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE NESTED_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE FIRST_TABLE`), table: temp37});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE STRUC_TAB_STRUC_TAB`), table: temp37});
    this.exp_result.set(temp37);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async unsupported_type() {
    let class_reference = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_GENERATOR", RTTIName: "\\CLASS=ZCL_AFF_GENERATOR"});
    try {
      await this.cut.get().zif_aff_generator$generate_type({data: class_reference});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(18).set('Exception expected')});
    } catch (e) {
      if ((abap.Classes['ZCX_AFF_TOOLS'] && e instanceof abap.Classes['ZCX_AFF_TOOLS'])) {
      } else {
        throw e;
      }
    }
  }
  async complex_structure_aff_class() {
    let aff_class = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_CLASS_PROPERTIES-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "category": new abap.types.Numc({length: 2, qualifiedName: "lif_test_types=>ty_class_properties-category"}), "fixpt": new abap.types.Character(1, {"qualifiedName":"lif_test_types=>ty_class_properties-fixpt"}), "msg_id": new abap.types.Character(20, {"qualifiedName":"lif_test_types=>ty_class_properties-msg_id"}), "attributes": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components"), "methods": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_method-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_method-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents"), "exceptions": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_method", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_methods"), "events": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_event-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_event-description"}), "parameters": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_subcomponents")}, "lif_test_types=>ty_event", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_events"), "types": abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"SORTED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "lif_test_types=>ty_components")}, "lif_test_types=>ty_class_properties", undefined, {}, {});
    let act_result = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp39 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    act_result.set((await this.cut.get().zif_aff_generator$generate_type({data: aff_class})));
    abap.statements.clear(temp39);
    abap.statements.insertInternal({data: new abap.types.String().set(`OPEN_STRUCTURE TY_CLASS_PROPERTIES`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    FORMAT_VERSION : g`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_STRUCTURE HEADER`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_STRUCTURE HEADER`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CATEGORY : N`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    FIXPT : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    MSG_ID : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE ATTRIBUTES`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE ATTRIBUTES`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE METHODS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE TY_METHOD`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            OPEN_TABLE PARAMETERS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            CLOSE_TABLE PARAMETERS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            OPEN_TABLE EXCEPTIONS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            CLOSE_TABLE EXCEPTIONS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE TY_METHOD`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE METHODS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE EVENTS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE TY_EVENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            OPEN_TABLE PARAMETERS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                OPEN_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                    DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`                CLOSE_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            CLOSE_TABLE PARAMETERS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE TY_EVENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE EVENTS`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    OPEN_TABLE TYPES`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        OPEN_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            NAME : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`            DESCRIPTION : C`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`        CLOSE_STRUCTURE TY_COMPONENT`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`    CLOSE_TABLE TYPES`), table: temp39});
    abap.statements.insertInternal({data: new abap.types.String().set(`CLOSE_STRUCTURE TY_CLASS_PROPERTIES`), table: temp39});
    this.exp_result.set(temp39);
    await this.assert_output_equals({exp: this.exp_result, act: act_result});
  }
  async structure_on_top_level() {
    let abap_type = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_STRUCTURE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_structure", undefined, {}, {});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: abap_type});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_has_no_message({log: log});
  }
  async table_on_top_level() {
    let abap_type = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_TABLE-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>ty_abap_type_table", undefined, {}, {});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: abap_type});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_has_no_message({log: log});
  }
  async simple_component_on_top_level() {
    let abap_type = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_SIMPLE_COMPONENT-FORMAT_VERSION"}), "header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "simple_component": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>TY_SIMPLE_COMPONENT-SIMPLE_COMPONENT"}), "struc_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {}), "tabl_component": abap.types.TableFactory.construct(new abap.types.Structure({"element_1": new abap.types.Integer({qualifiedName: "LIF_TEST_TYPES=>STRUCTURE-ELEMENT_1"}), "element_2": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>ELEMENT"})}, "lif_test_types=>structure", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_structure")}, "lif_test_types=>ty_simple_component", undefined, {}, {});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: abap_type});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg128, exp_component_name: new abap.types.String().set(`TY_SIMPLE_COMPONENT`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async no_header() {
    let no_header = new abap.types.Structure({"format_version": new abap.types.String({qualifiedName: "LIF_TEST_TYPES=>TY_ABAP_TYPE_NO_HEADER-FORMAT_VERSION"}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_no_header", undefined, {}, {});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: no_header});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, exp_component_name: new abap.types.String().set(`TY_ABAP_TYPE_NO_HEADER`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async no_format_version() {
    let no_format_version = new abap.types.Structure({"header": new abap.types.Structure({"description": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_header-description"})}, "lif_test_types=>ty_header", undefined, {}, {}), "other_component": new abap.types.Structure({"name": new abap.types.Character(30, {"qualifiedName":"lif_test_types=>ty_component-name"}), "description": new abap.types.Character(60, {"qualifiedName":"lif_test_types=>ty_component-description"})}, "lif_test_types=>ty_component", undefined, {}, {})}, "lif_test_types=>ty_abap_type_no_format", undefined, {}, {});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: no_format_version});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg124, exp_component_name: new abap.types.String().set(`TY_ABAP_TYPE_NO_FORMAT`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async no_structure() {
    let no_structure = abap.types.TableFactory.construct(abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_build_in_type"), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lif_test_types=>table_in_table");
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    await this.cut.get().zif_aff_generator$generate_type({data: no_structure});
    log.set((await this.cut.get().zif_aff_generator$get_log()));
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg123, exp_component_name: new abap.types.String().set(`TABLE_IN_TABLE`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async assert_output_equals(INPUT) {
    let act = INPUT?.act;
    if (act?.getQualifiedName === undefined || act.getQualifiedName() !== "STRING_TABLE") { act = undefined; }
    if (act === undefined) { act = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.act); }
    let exp = INPUT?.exp;
    if (exp?.getQualifiedName === undefined || exp.getQualifiedName() !== "STRING_TABLE") { exp = undefined; }
    if (exp === undefined) { exp = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.exp); }
    let fs_exp_line_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    let act_line = new abap.types.String({qualifiedName: "STRING"});
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.Integer({qualifiedName: "I"});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.lines({val: exp}), act: abap.builtin.lines({val: act}), msg: new abap.types.String().set(`Number of entries doesn't match expectation`)});
    for await (const unique51 of abap.statements.loop(exp)) {
      fs_exp_line_.assign(unique51);
      temp4.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(act,{index: abap.builtin.sy.get().tabix,
        into: temp3});
      abap.builtin.sy.get().tabix.set(temp4);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        const unique52 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
        unique52.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_generator.clas.testclasses.abap","INTERNAL_LINE": 605};
        throw unique52;
      }
      act_line.set(temp3);
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: fs_exp_line_, act: act_line, msg: new abap.types.String().set(`line ${abap.templateFormatting(abap.builtin.sy.get().tabix)} doesn't match expectation`), quit: abap.Classes['IF_ABAP_UNIT_CONSTANT'].if_abap_unit_constant$quit.get().no});
    }
  }
}
abap.Classes['CLAS-ZCL_AFF_GENERATOR-LTCL_TYPE_GENERATOR'] = ltcl_type_generator;
export {ltcl_unit_test_writer, ltcl_type_generator, lif_test_types};
//# sourceMappingURL=zcl_aff_generator.clas.testclasses.mjs.map