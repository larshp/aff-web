const {zcl_aff_abap_doc_reader} = await import("./zcl_aff_abap_doc_reader.clas.mjs");
await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {lcl_section_source_comments} = await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_reader.clas.testclasses.abap
class ltcl_abap_doc_reader {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.test_obj = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"});
    return this;
  }
  async setup() {
    let lt_clif_source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp8 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp3 = new abap.types.String();
    let temp4 = new abap.types.String();
    let temp5 = new abap.types.String();
    let temp6 = new abap.types.String();
    let temp7 = new abap.types.String();
    let temp9 = new abap.types.String();
    let temp10 = new abap.types.String();
    let temp11 = new abap.types.String();
    let temp12 = new abap.types.String();
    let temp13 = new abap.types.String();
    let temp14 = new abap.types.String();
    let temp15 = new abap.types.String();
    let temp16 = new abap.types.String();
    let temp17 = new abap.types.String();
    let temp18 = new abap.types.String();
    let temp19 = new abap.types.String();
    let temp20 = new abap.types.String();
    let temp21 = new abap.types.String();
    let temp22 = new abap.types.String();
    let temp23 = new abap.types.String();
    let temp24 = new abap.types.String();
    let temp25 = new abap.types.String();
    let temp26 = new abap.types.String();
    let temp27 = new abap.types.String();
    let temp28 = new abap.types.String();
    let temp29 = new abap.types.String();
    let temp30 = new abap.types.String();
    let temp31 = new abap.types.String();
    let temp32 = new abap.types.String();
    let temp33 = new abap.types.String();
    let temp34 = new abap.types.String();
    let temp35 = new abap.types.String();
    let temp36 = new abap.types.String();
    let temp37 = new abap.types.String();
    abap.statements.clear(temp8);
    temp3.set(new abap.types.String().set(`class CL_EC_WITH_COMMENTED_TYPES definition`));
    abap.statements.append({source: temp3, target: temp8});
    temp4.set(new abap.types.String().set(` public`));
    abap.statements.append({source: temp4, target: temp8});
    temp5.set(new abap.types.String().set(`  final`));
    abap.statements.append({source: temp5, target: temp8});
    temp6.set(new abap.types.String().set(`  create public .`));
    abap.statements.append({source: temp6, target: temp8});
    temp7.set(new abap.types.String().set(``));
    abap.statements.append({source: temp7, target: temp8});
    temp9.set(new abap.types.String().set(` public section.`));
    abap.statements.append({source: temp9, target: temp8});
    temp10.set(new abap.types.String().set(``));
    abap.statements.append({source: temp10, target: temp8});
    temp11.set(new abap.types.String().set(`    types:`));
    abap.statements.append({source: temp11, target: temp8});
    temp12.set(new abap.types.String().set(`      "! abap doc comment begin of ty_pub_structure`));
    abap.statements.append({source: temp12, target: temp8});
    temp13.set(new abap.types.String().set(`      begin " inline comment`));
    abap.statements.append({source: temp13, target: temp8});
    temp14.set(new abap.types.String().set(`       of  " inline comment`));
    abap.statements.append({source: temp14, target: temp8});
    temp15.set(new abap.types.String().set(`        ty_pub_structure, " inline comment ty_pub_structure`));
    abap.statements.append({source: temp15, target: temp8});
    temp16.set(new abap.types.String().set(`          "! ABAP Doc This is field A of the structure`));
    abap.statements.append({source: temp16, target: temp8});
    temp17.set(new abap.types.String().set(`          field_a type i, " inline comment field_a`));
    abap.statements.append({source: temp17, target: temp8});
    temp18.set(new abap.types.String().set(`          "! ABAP Doc This is field B of the structure`));
    abap.statements.append({source: temp18, target: temp8});
    temp19.set(new abap.types.String().set(`          field_b type string,`));
    abap.statements.append({source: temp19, target: temp8});
    temp20.set(new abap.types.String().set(`      end of ty_pub_structure .`));
    abap.statements.append({source: temp20, target: temp8});
    temp21.set(new abap.types.String().set(`    types:`));
    abap.statements.append({source: temp21, target: temp8});
    temp22.set(new abap.types.String().set(`      "! abap doc ty_tab_of_structure`));
    abap.statements.append({source: temp22, target: temp8});
    temp23.set(new abap.types.String().set(`      ty_tab_of_pub_structure " inline comment ty_tab_of_structure (type table of )`));
    abap.statements.append({source: temp23, target: temp8});
    temp24.set(new abap.types.String().set(`     " pure inline comment line 1`));
    abap.statements.append({source: temp24, target: temp8});
    temp25.set(new abap.types.String().set(`       type  " inline`));
    abap.statements.append({source: temp25, target: temp8});
    temp26.set(new abap.types.String().set(`         table of ty_pub_structure with default key .`));
    abap.statements.append({source: temp26, target: temp8});
    temp27.set(new abap.types.String().set(` `));
    abap.statements.append({source: temp27, target: temp8});
    temp28.set(new abap.types.String().set(`     data SUBRC type SY-SUBRC read-only .`));
    abap.statements.append({source: temp28, target: temp8});
    temp29.set(new abap.types.String().set(` protected section.`));
    abap.statements.append({source: temp29, target: temp8});
    temp30.set(new abap.types.String().set(` private section.`));
    abap.statements.append({source: temp30, target: temp8});
    temp31.set(new abap.types.String().set(`  "! Just simple data`));
    abap.statements.append({source: temp31, target: temp8});
    temp32.set(new abap.types.String().set(`  data abc type i.`));
    abap.statements.append({source: temp32, target: temp8});
    temp33.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.append({source: temp33, target: temp8});
    temp34.set(new abap.types.String().set(``));
    abap.statements.append({source: temp34, target: temp8});
    temp35.set(new abap.types.String().set(``));
    abap.statements.append({source: temp35, target: temp8});
    temp36.set(new abap.types.String().set(`CLASS CL_EC_WITH_COMMENTED_TYPES IMPLEMENTATION.`));
    abap.statements.append({source: temp36, target: temp8});
    temp37.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.append({source: temp37, target: temp8});
    lt_clif_source.set(temp8);
    this.test_obj.set((await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: lt_clif_source})));
  }
  async get_abap_doc_4_element_types() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 16}).set('ty_pub_structure')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 42}).set('abap doc comment begin of ty_pub_structure'), act: result});
  }
  async get_abap_doc_4_element_data() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 3}).set('ABC')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 16}).set('Just simple data'), act: result});
  }
  async get_abap_doc_4_sub_elem_types() {
    let result = new abap.types.String({qualifiedName: "STRING"});
    result.set((await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 24}).set('ty_pub_structure-field_a')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 41}).set('ABAP Doc This is field A of the structure'), act: result});
  }
  async get_abap_doc_4_wrong_elem_name() {
    try {
      await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 18}).set('ty_nicht_vorhanden')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character({length: 62}).set('Expected exception reporting wrong element name was not raised')});
    } catch (e) {
      if (e instanceof abap.Classes['ZCX_AFF_TOOLS']) {
        return;
      } else if (e instanceof abap.Classes['CX_ROOT']) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character({length: 36}).set('Unexpected exception type was raised')});
      } else {
        throw e;
      }
    }
  }
  async get_abap_doc_4_elem_wo_adoc() {
    try {
      await this.test_obj.get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 5}).set('SUBRC')});
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character({length: 62}).set('Expected exception reporting wrong element name was not raised')});
    } catch (e) {
      if (e instanceof abap.Classes['ZCX_AFF_TOOLS']) {
        return;
      } else if (e instanceof abap.Classes['CX_ROOT']) {
        await abap.Classes['CL_ABAP_UNIT_ASSERT'].fail({msg: new abap.types.Character({length: 36}).set('Unexpected exception type was raised')});
      } else {
        throw e;
      }
    }
  }
  async get_simple() {
    let temp43 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp38 = new abap.types.String();
    let temp39 = new abap.types.String();
    let temp40 = new abap.types.String();
    let temp41 = new abap.types.String();
    let temp42 = new abap.types.String();
    let temp44 = new abap.types.String();
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp43);
    temp38.set(new abap.types.String().set(`CLASS zcl_aff_test_types DEFINITION PUBLIC FINAL CREATE PUBLIC.`));
    abap.statements.append({source: temp38, target: temp43});
    temp39.set(new abap.types.String().set(`PUBLIC SECTION.`));
    abap.statements.append({source: temp39, target: temp43});
    temp40.set(new abap.types.String().set(`  TYPES:`));
    abap.statements.append({source: temp40, target: temp43});
    temp41.set(new abap.types.String().set(`    "! $hiddenabc`));
    abap.statements.append({source: temp41, target: temp43});
    temp42.set(new abap.types.String().set(`    unknown_annotation TYPE string.`));
    abap.statements.append({source: temp42, target: temp43});
    temp44.set(new abap.types.String().set(`ENDCLASS.`));
    abap.statements.append({source: temp44, target: temp43});
    source.set(temp43);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 18}).set('UNKNOWN_ANNOTATION')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 10}).set('$hiddenabc'), act: result});
  }
  async get_structure() {
    let temp50 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp45 = new abap.types.String();
    let temp46 = new abap.types.String();
    let temp47 = new abap.types.String();
    let temp48 = new abap.types.String();
    let temp49 = new abap.types.String();
    let temp51 = new abap.types.String();
    let temp52 = new abap.types.String();
    let temp53 = new abap.types.String();
    let temp54 = new abap.types.String();
    let temp55 = new abap.types.String();
    let temp56 = new abap.types.String();
    let temp57 = new abap.types.String();
    let temp58 = new abap.types.String();
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp50);
    temp45.set(new abap.types.String().set(`* simple structure`));
    abap.statements.append({source: temp45, target: temp50});
    temp46.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.append({source: temp46, target: temp50});
    temp47.set(new abap.types.String().set(`      "! foo`));
    abap.statements.append({source: temp47, target: temp50});
    temp48.set(new abap.types.String().set(`      "! bar`));
    abap.statements.append({source: temp48, target: temp50});
    temp49.set(new abap.types.String().set(`      BEGIN OF my_structure,`));
    abap.statements.append({source: temp49, target: temp50});
    temp51.set(new abap.types.String().set(`        "! l1`));
    abap.statements.append({source: temp51, target: temp50});
    temp52.set(new abap.types.String().set(`        "! l2`));
    abap.statements.append({source: temp52, target: temp50});
    temp53.set(new abap.types.String().set(`        "! l3`));
    abap.statements.append({source: temp53, target: temp50});
    temp54.set(new abap.types.String().set(`        my_first_element  TYPE mystring,`));
    abap.statements.append({source: temp54, target: temp50});
    temp55.set(new abap.types.String().set(`        "! l4`));
    abap.statements.append({source: temp55, target: temp50});
    temp56.set(new abap.types.String().set(`        "! l5`));
    abap.statements.append({source: temp56, target: temp50});
    temp57.set(new abap.types.String().set(`        my_second_element TYPE i,`));
    abap.statements.append({source: temp57, target: temp50});
    temp58.set(new abap.types.String().set(`      END OF my_structure.`));
    abap.statements.append({source: temp58, target: temp50});
    source.set(temp50);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 12}).set('MY_STRUCTURE')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 7}).set('foo bar'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 29}).set('MY_STRUCTURE-MY_FIRST_ELEMENT')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 8}).set('l1 l2 l3'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 30}).set('MY_STRUCTURE-MY_SECOND_ELEMENT')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 5}).set('l4 l5'), act: result});
  }
  async structure_and_fields() {
    let temp64 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp59 = new abap.types.String();
    let temp60 = new abap.types.String();
    let temp61 = new abap.types.String();
    let temp62 = new abap.types.String();
    let temp63 = new abap.types.String();
    let temp65 = new abap.types.String();
    let temp66 = new abap.types.String();
    let temp67 = new abap.types.String();
    let temp68 = new abap.types.String();
    let temp69 = new abap.types.String();
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp64);
    temp59.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.append({source: temp59, target: temp64});
    temp60.set(new abap.types.String().set(`      BEGIN OF structure1,`));
    abap.statements.append({source: temp60, target: temp64});
    temp61.set(new abap.types.String().set(`        "! text1`));
    abap.statements.append({source: temp61, target: temp64});
    temp62.set(new abap.types.String().set(`        same_name TYPE i,`));
    abap.statements.append({source: temp62, target: temp64});
    temp63.set(new abap.types.String().set(`      END OF structure1.`));
    abap.statements.append({source: temp63, target: temp64});
    temp65.set(new abap.types.String().set(`    TYPES:`));
    abap.statements.append({source: temp65, target: temp64});
    temp66.set(new abap.types.String().set(`      BEGIN OF structure2,`));
    abap.statements.append({source: temp66, target: temp64});
    temp67.set(new abap.types.String().set(`        "! text2`));
    abap.statements.append({source: temp67, target: temp64});
    temp68.set(new abap.types.String().set(`        same_name TYPE i,`));
    abap.statements.append({source: temp68, target: temp64});
    temp69.set(new abap.types.String().set(`      END OF structure2.`));
    abap.statements.append({source: temp69, target: temp64});
    source.set(temp64);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 20}).set('STRUCTURE1-SAME_NAME')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 5}).set('text1'), act: result});
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 20}).set('STRUCTURE2-SAME_NAME')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 5}).set('text2'), act: result});
  }
  async get_structure_types() {
    let temp75 = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let temp70 = new abap.types.String();
    let temp71 = new abap.types.String();
    let temp72 = new abap.types.String();
    let temp73 = new abap.types.String();
    let temp74 = new abap.types.String();
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let result = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp75);
    temp70.set(new abap.types.String().set(`  TYPES:`));
    abap.statements.append({source: temp70, target: temp75});
    temp71.set(new abap.types.String().set(`    BEGIN OF ty_descriptions,`));
    abap.statements.append({source: temp71, target: temp75});
    temp72.set(new abap.types.String().set(`      "! hello`));
    abap.statements.append({source: temp72, target: temp75});
    temp73.set(new abap.types.String().set(`      types      TYPE string,`));
    abap.statements.append({source: temp73, target: temp75});
    temp74.set(new abap.types.String().set(`    END OF ty_descriptions.`));
    abap.statements.append({source: temp74, target: temp75});
    source.set(temp75);
    result.set((await (await abap.Classes['ZCL_AFF_ABAP_DOC_READER'].create_instance({source: source})).get().get_abap_doc_for_element({element_name: new abap.types.Character({length: 21}).set('TY_DESCRIPTIONS-TYPES')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character({length: 5}).set('hello'), act: result});
  }
}
abap.Classes['CLAS-ZCL_AFF_ABAP_DOC_READER-LTCL_ABAP_DOC_READER'] = ltcl_abap_doc_reader;
export {ltcl_abap_doc_reader};
//# sourceMappingURL=zcl_aff_abap_doc_reader.clas.testclasses.mjs.map