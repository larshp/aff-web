const {zcl_aff_test_types} = await import("./zcl_aff_test_types.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_test_types.clas.testclasses.abap
class ltcl_sanity {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async test1() {
    let foo = new abap.types.Structure({numerical_text1: new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), numerical_text2: new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), numerical_text3: new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"}), numerical_text4: new abap.types.Numc({length: 4, qualifiedName: "zcl_aff_test_types=>num_text"})}, "zcl_aff_test_types=>struc_with_num_text");
    let temp1 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let field = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    await abap.statements.cast(temp1, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: foo})));
    descr.set(temp1);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await descr.get().get_relative_name()), exp: new abap.types.Character({length: 19}).set('STRUC_WITH_NUM_TEXT')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: descr.get().absolute_name, exp: new abap.types.Character({length: 50}).set('\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=STRUC_WITH_NUM_TEXT')});
    field.set((await descr.get().get_component_type({p_name: new abap.types.Character({length: 15}).set('NUMERICAL_TEXT1')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: (await field.get().get_relative_name()), exp: new abap.types.Character({length: 8}).set('NUM_TEXT')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: field.get().absolute_name, exp: new abap.types.Character({length: 39}).set('\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=NUM_TEXT')});
  }
}
abap.Classes['CLAS-ZCL_AFF_TEST_TYPES-LTCL_SANITY'] = ltcl_sanity;
export {ltcl_sanity};
//# sourceMappingURL=zcl_aff_test_types.clas.testclasses.mjs.map