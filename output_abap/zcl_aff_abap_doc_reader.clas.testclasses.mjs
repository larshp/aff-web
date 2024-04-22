const {zcl_aff_abap_doc_reader} = await import("./zcl_aff_abap_doc_reader.clas.mjs");
await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {lcl_section_source_comments} = await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_reader.clas.testclasses.abap
class ltcl_abap_doc_reader {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_ABAP_DOC_READER-LTCL_ABAP_DOC_READER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"TEST_OBJ": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"SETUP": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_4_ELEMENT_TYPES": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_4_ELEMENT_DATA": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_4_SUB_ELEM_TYPES": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_4_WRONG_ELEM_NAME": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_4_ELEM_WO_ADOC": {"visibility": "I", "parameters": {}},
  "GET_SIMPLE": {"visibility": "I", "parameters": {}},
  "GET_STRUCTURE": {"visibility": "I", "parameters": {}},
  "GET_STRUCTURE_TYPES": {"visibility": "I", "parameters": {}},
  "STRUCTURE_AND_FIELDS": {"visibility": "I", "parameters": {}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.test_obj = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async setup() {
    let lt_clif_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp8 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp3 = new abap.types.String({qualifiedName: "STRING"});
    let temp4 = new abap.types.String({qualifiedName: "STRING"});
    let temp5 = new abap.types.String({qualifiedName: "STRING"});
    let temp6 = new abap.types.String({qualifiedName: "STRING"});
    let temp7 = new abap.types.String({qualifiedName: "STRING"});
    let temp9 = new abap.types.String({qualifiedName: "STRING"});
    let temp10 = new abap.types.String({qualifiedName: "STRING"});
    let temp11 = new abap.types.String({qualifiedName: "STRING"});
    let temp12 = new abap.types.String({qualifiedName: "STRING"});
    let temp13 = new abap.types.String({qualifiedName: "STRING"});
    let temp14 = new abap.types.String({qualifiedName: "STRING"});
    let temp15 = new abap.types.String({qualifiedName: "STRING"});
    let temp16 = new abap.types.String({qualifiedName: "STRING"});
    let temp17 = new abap.types.String({qualifiedName: "STRING"});
    let temp18 = new abap.types.String({qualifiedName: "STRING"});
    let temp19 = new abap.types.String({qualifiedName: "STRING"});
    let temp20 = new abap.types.String({qualifiedName: "STRING"});
    let temp21 = new abap.types.String({qualifiedName: "STRING"});
    let temp22 = new abap.types.String({qualifiedName: "STRING"});
    let temp23 = new abap.types.String({qualifiedName: "STRING"});
    let temp24 = new abap.types.String({qualifiedName: "STRING"});
    let temp25 = new abap.types.String({qualifiedName: "STRING"});
    let temp26 = new abap.types.String({qualifiedName: "STRING"});
    let temp27 = new abap.types.String({qualifiedName: "STRING"});
    let temp28 = new abap.types.String({qualifiedName: "STRING"});
    let temp29 = new abap.types.String({qualifiedName: "STRING"});
    let temp30 = new abap.types.String({qualifiedName: "STRING"});
    let temp31 = new abap.types.String({qualifiedName: "STRING"});
    let temp32 = new abap.types.String({qualifiedName: "STRING"});
    let temp33 = new abap.types.String({qualifiedName: "STRING"});
    let temp34 = new abap.types.String({qualifiedName: "STRING"});
    let temp35 = new abap.types.String({qualifiedName: "STRING"});
    let temp36 = new abap.types.String({qualifiedName: "STRING"});
    let temp37 = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp8);
    temp3.set(new abap.types.String().set(`class CL_EC_WITH_COMMENTED_TYPES definition`));
    abap.statements.insertInternal({data: temp3, table: temp8});
    temp4.set(new abap.types.String().set(` public`));
    abap.statements.insertInternal({data: temp4, table: temp8});
    temp5.set(new abap.types.String().set(`  final`));
    abap.statements.insertInternal({data: temp5, table: temp8});
    temp6.set(new abap.types.String().set(`  create public .`));
    abap.statements.insertInternal({data: temp6, table: temp8});
    temp7.set(new abap.types.String().set(``));
    abap.statements.insertInternal({data: temp7, table: temp8});
    temp9.set(new abap.types.String().set(` public section.`));
    abap.statements.insertInternal({data: temp9, table: temp8});
    temp10.set(new abap.types.String().set(``));
    abap.statements.insertInternal({data: temp10, table: temp8});
    temp11.set(new abap.types.String().set(`    types:`));
    abap.statements.insertInternal({data: temp11, table: temp8});
    temp12.set(new abap.types.String().set(`      "! abap doc comment begin of ty_pub_structure`));
    abap.statements.insertInternal({data: temp12, table: temp8});
    temp13.set(new abap.types.String().set(`      begin " inline comment`));
    abap.statements.insertInternal({data: temp13, table: temp8});
    temp14.set(new abap.types.String().set(`       of  " inline comment`));
    abap.statements.insertInternal({data: temp14, table: temp8});
    temp15.set(new abap.types.String().set(`        ty_pub_structure, " inline comment ty_pub_structure`));
    abap.statements.insertInternal({data: temp15, table: temp8});
    temp16.set(new abap.types.String().set(`          "! ABAP Doc This is field A of the structure`));
    abap.statements.insertInternal({data: temp16, table: temp8});
    temp17.set(new abap.types.String().set(`          field_a type i, " inline comment field_a`));
    abap.statements.insertInternal({data: temp17, table: temp8});
    temp18.set(new abap.types.String().set(`          "! ABAP Doc This is field B of the structure`));
    abap.statements.insertInternal({data: temp18, table: temp8});
    temp19.set(new abap.types.String().set(`          field_b type string,`));
    abap.statements.insertInternal({data: temp19, table: temp8});
    temp20.set(new abap.types.String().set(`      end of ty_pub_structure .`));
    abap.statements.insertInternal({data: temp20, table: temp8});
    temp21.set(new abap.types.String().set(`    types:`));
    abap.statements.insertInternal({data: temp21, table: temp8});
    temp22.set(new abap.types.String().set(`      "! abap doc ty_tab_of_structure`));
    abap.statements.insertInternal({data: temp22, table: temp8});
    temp23.set(new abap.types.String().set(`      ty_tab_of_pub_structure " inline comment ty_tab_of_structure (type table of )`));
    abap.statements.insertInternal({data: temp23, table: temp8});
    temp24.set(new abap.types.String().set(`     " pure inline comment line 1`));
    abap.statements.insertInternal({data: temp24, table: temp8});
    temp25.set(new abap.types.String().set(`       type  " inline`));
    abap.statements.insertInternal({data: temp25, table: temp8});
    temp26.set(new abap.types.String().set(`         table of ty_pub_structure with default key .`));
    abap.statements.insertInternal({data: temp26, table: temp8});
    temp27.set(new abap.types.String().set(` `));
    abap.statements.insertInternal({data: temp27, table: temp8});
    temp28.set(new abap.types.String().set(`     data SUBRC type SY-SUBRC read-only .`));
    abap.statements.insertInternal({data: temp28, table: temp8});
    temp29.set(new abap.types.String().set(` protected section.`));
    abap.statements.insertInternal({data: temp29, table: temp8});
    temp30.set(new abap.types.String().set(` private section.`));
    abap.statements.insertInternal({data: temp30, table: temp8});
    temp31.set(new abap.types.String().set(`  "! Just simple data`));
    abap.statements.insertInternal({data: temp31, table: temp8});
    temp32.set(new abap.types.String().set(`  data abc type i.`));
    abap.statements.insertInternal({data: temp32, table: temp8});
    temp33.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.insertInternal({data: temp33, table: temp8});
    temp34.set(new abap.types.String().set(``));
    abap.statements.insertInternal({data: temp34, table: temp8});
    temp35.set(new abap.types.String().set(``));
    abap.statements.insertInternal({data: temp35, table: temp8});
    temp36.set(new abap.types.String().set(`CLASS CL_EC_WITH_COMMENTED_TYPES IMPLEMENTATION.`));
    abap.statements.insertInternal({data: temp36, table: temp8});
    temp37.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.insertInternal({data: temp37, table: temp8});
    lt_clif_source.set(temp8);
    this.test_obj.set((await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: lt_clif_source})));
  }
  async get_abap_doc_4_element_types() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character(16).set('ty_pub_structure')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(42).set('abap doc comment begin of ty_pub_structure'), act: result});
  }
  async get_abap_doc_4_element_data() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character(3).set('ABC')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(16).set('Just simple data'), act: result});
  }
  async get_abap_doc_4_sub_elem_types() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character(24).set('ty_pub_structure-field_a')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(41).set('ABAP Doc This is field A of the structure'), act: result});
  }
  async get_abap_doc_4_wrong_elem_name() {
    try {
      await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character(18).set('ty_nicht_vorhanden')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(62).set('Expected exception reporting wrong element name was not raised')});
    } catch (e) {
      if ((abap.Classes['ZCX_AFF_TOOLS'] && e instanceof abap.Classes['ZCX_AFF_TOOLS'])) {
        return;
      } else if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(36).set('Unexpected exception type was raised')});
      } else {
        throw e;
      }
    }
  }
  async get_abap_doc_4_elem_wo_adoc() {
    try {
      await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character(5).set('SUBRC')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(62).set('Expected exception reporting wrong element name was not raised')});
    } catch (e) {
      if ((abap.Classes['ZCX_AFF_TOOLS'] && e instanceof abap.Classes['ZCX_AFF_TOOLS'])) {
        return;
      } else if ((abap.Classes['CX_ROOT'] && e instanceof abap.Classes['CX_ROOT'])) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character(36).set('Unexpected exception type was raised')});
      } else {
        throw e;
      }
    }
  }
  async get_simple() {
    let temp10 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp38 = new abap.types.String({qualifiedName: "STRING"});
    let temp39 = new abap.types.String({qualifiedName: "STRING"});
    let temp40 = new abap.types.String({qualifiedName: "STRING"});
    let temp41 = new abap.types.String({qualifiedName: "STRING"});
    let temp42 = new abap.types.String({qualifiedName: "STRING"});
    let temp43 = new abap.types.String({qualifiedName: "STRING"});
    let source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp10);
    temp38.set(new abap.types.String().set(`CLASS zcl_aff_test_types DEFINITION PUBLIC FINAL CREATE PUBLIC.`));
    abap.statements.insertInternal({data: temp38, table: temp10});
    temp39.set(new abap.types.String().set(`PUBLIC SECTION.`));
    abap.statements.insertInternal({data: temp39, table: temp10});
    temp40.set(new abap.types.String().set(`  TYPES:`));
    abap.statements.insertInternal({data: temp40, table: temp10});
    temp41.set(new abap.types.String().set(`    "! $hiddenabc`));
    abap.statements.insertInternal({data: temp41, table: temp10});
    temp42.set(new abap.types.String().set(`    unknown_annotation TYPE string.`));
    abap.statements.insertInternal({data: temp42, table: temp10});
    temp43.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.insertInternal({data: temp43, table: temp10});
    source.set(temp10);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(18).set('UNKNOWN_ANNOTATION')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(10).set('$hiddenabc'), act: result});
  }
  async get_structure() {
    let temp12 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp44 = new abap.types.String({qualifiedName: "STRING"});
    let temp45 = new abap.types.String({qualifiedName: "STRING"});
    let temp46 = new abap.types.String({qualifiedName: "STRING"});
    let temp47 = new abap.types.String({qualifiedName: "STRING"});
    let temp48 = new abap.types.String({qualifiedName: "STRING"});
    let temp49 = new abap.types.String({qualifiedName: "STRING"});
    let temp50 = new abap.types.String({qualifiedName: "STRING"});
    let temp51 = new abap.types.String({qualifiedName: "STRING"});
    let temp52 = new abap.types.String({qualifiedName: "STRING"});
    let temp53 = new abap.types.String({qualifiedName: "STRING"});
    let temp54 = new abap.types.String({qualifiedName: "STRING"});
    let temp55 = new abap.types.String({qualifiedName: "STRING"});
    let temp56 = new abap.types.String({qualifiedName: "STRING"});
    let source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp12);
    temp44.set(new abap.types.String().set(`* simple structure`));
    abap.statements.insertInternal({data: temp44, table: temp12});
    temp45.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.insertInternal({data: temp45, table: temp12});
    temp46.set(new abap.types.String().set(`      "! foo`));
    abap.statements.insertInternal({data: temp46, table: temp12});
    temp47.set(new abap.types.String().set(`      "! bar`));
    abap.statements.insertInternal({data: temp47, table: temp12});
    temp48.set(new abap.types.String().set(`      BEGIN OF my_structure,`));
    abap.statements.insertInternal({data: temp48, table: temp12});
    temp49.set(new abap.types.String().set(`        "! l1`));
    abap.statements.insertInternal({data: temp49, table: temp12});
    temp50.set(new abap.types.String().set(`        "! l2`));
    abap.statements.insertInternal({data: temp50, table: temp12});
    temp51.set(new abap.types.String().set(`        "! l3`));
    abap.statements.insertInternal({data: temp51, table: temp12});
    temp52.set(new abap.types.String().set(`        my_first_element  TYPE mystring,`));
    abap.statements.insertInternal({data: temp52, table: temp12});
    temp53.set(new abap.types.String().set(`        "! l4`));
    abap.statements.insertInternal({data: temp53, table: temp12});
    temp54.set(new abap.types.String().set(`        "! l5`));
    abap.statements.insertInternal({data: temp54, table: temp12});
    temp55.set(new abap.types.String().set(`        my_second_element TYPE i,`));
    abap.statements.insertInternal({data: temp55, table: temp12});
    temp56.set(new abap.types.String().set(`      END OF my_structure.`));
    abap.statements.insertInternal({data: temp56, table: temp12});
    source.set(temp12);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(12).set('MY_STRUCTURE')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(7).set('foo bar'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(29).set('MY_STRUCTURE-MY_FIRST_ELEMENT')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(8).set('l1 l2 l3'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(30).set('MY_STRUCTURE-MY_SECOND_ELEMENT')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(5).set('l4 l5'), act: result});
  }
  async structure_and_fields() {
    let temp14 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp57 = new abap.types.String({qualifiedName: "STRING"});
    let temp58 = new abap.types.String({qualifiedName: "STRING"});
    let temp59 = new abap.types.String({qualifiedName: "STRING"});
    let temp60 = new abap.types.String({qualifiedName: "STRING"});
    let temp61 = new abap.types.String({qualifiedName: "STRING"});
    let temp62 = new abap.types.String({qualifiedName: "STRING"});
    let temp63 = new abap.types.String({qualifiedName: "STRING"});
    let temp64 = new abap.types.String({qualifiedName: "STRING"});
    let temp65 = new abap.types.String({qualifiedName: "STRING"});
    let temp66 = new abap.types.String({qualifiedName: "STRING"});
    let source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp14);
    temp57.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.insertInternal({data: temp57, table: temp14});
    temp58.set(new abap.types.String().set(`      BEGIN OF structure1,`));
    abap.statements.insertInternal({data: temp58, table: temp14});
    temp59.set(new abap.types.String().set(`        "! text1`));
    abap.statements.insertInternal({data: temp59, table: temp14});
    temp60.set(new abap.types.String().set(`        same_name TYPE i,`));
    abap.statements.insertInternal({data: temp60, table: temp14});
    temp61.set(new abap.types.String().set(`      END OF structure1.`));
    abap.statements.insertInternal({data: temp61, table: temp14});
    temp62.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.insertInternal({data: temp62, table: temp14});
    temp63.set(new abap.types.String().set(`      BEGIN OF structure2,`));
    abap.statements.insertInternal({data: temp63, table: temp14});
    temp64.set(new abap.types.String().set(`        "! text2`));
    abap.statements.insertInternal({data: temp64, table: temp14});
    temp65.set(new abap.types.String().set(`        same_name TYPE i,`));
    abap.statements.insertInternal({data: temp65, table: temp14});
    temp66.set(new abap.types.String().set(`      END OF structure2.`));
    abap.statements.insertInternal({data: temp66, table: temp14});
    source.set(temp14);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(20).set('STRUCTURE1-SAME_NAME')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(5).set('text1'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(20).set('STRUCTURE2-SAME_NAME')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(5).set('text2'), act: result});
  }
  async get_structure_types() {
    let temp16 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp67 = new abap.types.String({qualifiedName: "STRING"});
    let temp68 = new abap.types.String({qualifiedName: "STRING"});
    let temp69 = new abap.types.String({qualifiedName: "STRING"});
    let temp70 = new abap.types.String({qualifiedName: "STRING"});
    let temp71 = new abap.types.String({qualifiedName: "STRING"});
    let source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp16);
    temp67.set(new abap.types.String().set(`  TYPES:`));
    abap.statements.insertInternal({data: temp67, table: temp16});
    temp68.set(new abap.types.String().set(`    BEGIN OF ty_descriptions,`));
    abap.statements.insertInternal({data: temp68, table: temp16});
    temp69.set(new abap.types.String().set(`      "! hello`));
    abap.statements.insertInternal({data: temp69, table: temp16});
    temp70.set(new abap.types.String().set(`      types      TYPE string,`));
    abap.statements.insertInternal({data: temp70, table: temp16});
    temp71.set(new abap.types.String().set(`    END OF ty_descriptions.`));
    abap.statements.insertInternal({data: temp71, table: temp16});
    source.set(temp16);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character(21).set('TY_DESCRIPTIONS-TYPES')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(5).set('hello'), act: result});
  }
}
abap.Classes['CLAS-ZCL_AFF_ABAP_DOC_READER-LTCL_ABAP_DOC_READER'] = ltcl_abap_doc_reader;
export {ltcl_abap_doc_reader};
//# sourceMappingURL=zcl_aff_abap_doc_reader.clas.testclasses.mjs.map