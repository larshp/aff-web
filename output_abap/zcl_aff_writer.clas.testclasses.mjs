const {zcl_aff_writer} = await import("./zcl_aff_writer.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_writer.clas.testclasses.abap

class ltcl_writer_testable extends zcl_aff_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_WRITER-LTCL_WRITER_TESTABLE';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_WRITER"];
  static ATTRIBUTES = {};
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
  }
  async close_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
  }
  async close_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
  }
  async open_structure(INPUT) {
    let structure_name = INPUT?.structure_name;
    if (structure_name?.getQualifiedName === undefined || structure_name.getQualifiedName() !== "STRING") { structure_name = undefined; }
    if (structure_name === undefined) { structure_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.structure_name); }
    let structure_description = INPUT?.structure_description;
    if (structure_description?.getQualifiedName === undefined || structure_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { structure_description = undefined; }
    if (structure_description === undefined) { structure_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.structure_description); }
  }
  async open_table(INPUT) {
    let table_name = INPUT?.table_name;
    if (table_name?.getQualifiedName === undefined || table_name.getQualifiedName() !== "STRING") { table_name = undefined; }
    if (table_name === undefined) { table_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.table_name); }
    let table_description = INPUT?.table_description;
    if (table_description?.getQualifiedName === undefined || table_description.getQualifiedName() !== "CL_ABAP_TYPEDESCR") { table_description = undefined; }
    if (table_description === undefined) { table_description = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR", RTTIName: "\\CLASS=CL_ABAP_TYPEDESCR"}).set(INPUT.table_description); }
  }
  async write_tag(INPUT) {
    let line = INPUT?.line;
    if (line?.getQualifiedName === undefined || line.getQualifiedName() !== "STRING") { line = undefined; }
    if (line === undefined) { line = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.line); }
    let temp40 = new abap.types.String({qualifiedName: "STRING"});
    temp40.set(new abap.types.String().set(`${abap.templateFormatting(abap.builtin.repeat({val: new abap.types.String().set(` `), occ: abap.operators.multiply(this.indent_level,ltcl_writer_testable.c_indent_number_characters)}))}${abap.templateFormatting(line)}`));
    abap.statements.append({source: temp40, target: this.content});
  }
}
abap.Classes['CLAS-ZCL_AFF_WRITER-LTCL_WRITER_TESTABLE'] = ltcl_writer_testable;
class ltcl_type_writer {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CLAS-ZCL_AFF_WRITER-LTCL_TYPE_WRITER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"CUT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "LTCL_WRITER_TESTABLE", RTTIName: "\\CLASS-POOL=ZCL_AFF_WRITER\\CLASS=LTCL_WRITER_TESTABLE"});}, "visibility": "I", "is_constant": " ", "is_class": " "}};
  static METHODS = {"CAMEL_CASE": {"visibility": "I", "parameters": {}},
  "GET_OUTPUT": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_STRING_LIKE": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_STRING_LIKE_ENUM": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_BOOLEAN1": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_BOOLEAN2": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_BOOLEAN3": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_NUMERIC": {"visibility": "I", "parameters": {}},
  "GET_TYPE_INFO_DATE_TIME": {"visibility": "I", "parameters": {}},
  "STACK_STORES_OPERATIONS": {"visibility": "I", "parameters": {}},
  "APPEND_TO_PREVIOUS_LINE": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE1": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE2": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE3": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE4": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE5": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE6": {"visibility": "I", "parameters": {}},
  "CALL_READER_AND_DECODE7": {"visibility": "I", "parameters": {}},
  "DELETE_FIRST_OF_STRUC_STACK": {"visibility": "I", "parameters": {}},
  "GET_ALL_PATH_INFORMATION": {"visibility": "I", "parameters": {}},
  "GET_ABAP_DOC_FOR_ABSOLUTE_NAME": {"visibility": "I", "parameters": {}},
  "COMPARE_ABAP_DOC": {"visibility": "I", "parameters": {}},
  "CALLBACK_CLASS_IS_VALID": {"visibility": "I", "parameters": {}},
  "CALLBACK_CLASS_IS_INVALID": {"visibility": "I", "parameters": {}},
  "VALIDATE_DEFAULT": {"visibility": "I", "parameters": {}},
  "VALIDATE_SOURCE": {"visibility": "I", "parameters": {}},
  "GET_STRUC_OF_ENUM_VALUES_CL": {"visibility": "I", "parameters": {}},
  "HANDLE_INCLUDE": {"visibility": "I", "parameters": {}},
  "SETUP": {"visibility": "I", "parameters": {}},
  "GET_ELEMENT_DESCRIPTION": {"visibility": "I", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.cut = new abap.types.ABAPObject({qualifiedName: "LTCL_WRITER_TESTABLE", RTTIName: "\\CLASS-POOL=ZCL_AFF_WRITER\\CLASS=LTCL_WRITER_TESTABLE"});
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async setup() {
    this.cut.set(await (new abap.Classes['CLAS-ZCL_AFF_WRITER-LTCL_WRITER_TESTABLE']()).constructor_());
  }
  async get_output() {
    let temp41 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let exp_output = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let act_output = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    abap.statements.clear(temp41);
    abap.statements.insertInternal({data: new abap.types.String().set(`line1`), table: temp41});
    abap.statements.insertInternal({data: new abap.types.String().set(`line2`), table: temp41});
    exp_output.set(temp41);
    this.cut.get().output.set(exp_output);
    act_output.set((await this.cut.get().zif_aff_writer$get_output()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_output, act: act_output});
  }
  async camel_case() {
    let act_name = new abap.types.String({qualifiedName: "STRING"});
    act_name.set((await this.cut.get().format_name({name: new abap.types.Character(12).set('MY_TEst_nAmE')})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({act: act_name, exp: new abap.types.Character(10).set('myTestName'), msg: new abap.types.String().set(`Actual was ${abap.templateFormatting(act_name)}, but expected is 'myTestName'`)});
  }
  async get_type_info_string_like_enum() {
    
    let undefined = new abap.types.Structure({"option1": new abap.types.String({qualifiedName: "MY_ENUM"}), "option2": new abap.types.String({qualifiedName: "MY_ENUM"})}, undefined, undefined, {}, {});
    undefined.get().option1.set(new abap.types.Character(1).set('1'));
    undefined.get().option2.set(new abap.types.Character(1).set('2'));
    let temp43 = new abap.types.String({qualifiedName: "MY_ENUM"});
    abap.statements.clear(temp43);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp43}))}))});
  }
  async get_type_info_string_like() {
    let char = new abap.types.Character(1, {});
    let temp44 = new abap.types.String({qualifiedName: "STRING"});
    let temp45 = new abap.types.Character(1, {"qualifiedName":"CHAR1","ddicName":"CHAR1"});
    let temp46 = new abap.types.XString({qualifiedName: "XSTRING"});
    let temp47 = new abap.types.Numc({length: 4, qualifiedName: "NUMC4"});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: char}))}))});
    abap.statements.clear(temp44);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp44}))}))});
    abap.statements.clear(temp45);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp45}))}))});
    abap.statements.clear(temp46);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp46}))}))});
    abap.statements.clear(temp47);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().string, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp47}))}))});
  }
  async get_type_info_boolean1() {
    let temp48 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    abap.statements.clear(temp48);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp48}))}))});
  }
  async get_type_info_boolean2() {
    let temp49 = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.clear(temp49);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp49}))}))});
  }
  async get_type_info_boolean3() {
    let temp50 = new abap.types.Character(1, {"qualifiedName":"FLAG","ddicName":"FLAG"});
    abap.statements.clear(temp50);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().boolean, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp50}))}))});
  }
  async get_type_info_numeric() {
    let packed = new abap.types.Packed({length: 1, decimals: 0});
    let temp51 = new abap.types.Float({qualifiedName: "F"});
    let temp52 = new abap.types.Integer({qualifiedName: "INT1"});
    let temp53 = new abap.types.Integer({qualifiedName: "INT2"});
    let temp54 = new abap.types.Integer8({qualifiedName: "INT8"});
    let temp55 = new abap.types.typeTodoDecFloat16Type();
    let temp56 = new abap.types.DecFloat34();
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: packed}))}))});
    abap.statements.clear(temp51);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp51}))}))});
    abap.statements.clear(temp52);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp52}))}))});
    abap.statements.clear(temp53);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp53}))}))});
    abap.statements.clear(temp54);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp54}))}))});
    abap.statements.clear(temp55);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp55}))}))});
    abap.statements.clear(temp56);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().numeric, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp56}))}))});
  }
  async get_type_info_date_time() {
    let temp57 = new abap.types.Date({qualifiedName: "D"});
    let temp58 = new abap.types.Time({qualifiedName: "T"});
    let temp59 = new abap.types.Packed({length: 15, decimals: 0, qualifiedName: "TIMESTAMP"});
    let temp60 = new abap.types.Packed({length: 21, decimals: 7, qualifiedName: "TIMESTAMPL"});
    let temp61 = new abap.types.UTCLong();
    abap.statements.clear(temp57);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp57}))}))});
    abap.statements.clear(temp58);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp58}))}))});
    abap.statements.clear(temp59);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp59}))}))});
    abap.statements.clear(temp60);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp60}))}))});
    abap.statements.clear(temp61);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$type_info.get().date_time, act: (await this.cut.get().get_json_type_from_description({element_description: (await this.get_element_description({data: temp61}))}))});
  }
  async stack_stores_operations() {
    let table = abap.types.TableFactory.construct(new abap.types.Structure({"pgmid": new abap.types.Character(4, {}), "object": new abap.types.Character(4, {}), "obj_name": new abap.types.Character(40, {}), "devclass": new abap.types.Character(30, {"qualifiedName":"DEVCLASS","ddicName":"DEVCLASS"}), "korrnum": new abap.types.Character(10, {}), "delflag": new abap.types.Character(1, {}), "genflag": new abap.types.Character(1, {}), "srcsystem": new abap.types.Character(5, {}), "edtflag": new abap.types.Character(1, {}), "masterlang": new abap.types.Character(1, {})}, "TADIR", "TADIR", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let temp62 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp63 = new abap.types.Structure({"pgmid": new abap.types.Character(4, {}), "object": new abap.types.Character(4, {}), "obj_name": new abap.types.Character(40, {}), "devclass": new abap.types.Character(30, {"qualifiedName":"DEVCLASS","ddicName":"DEVCLASS"}), "korrnum": new abap.types.Character(10, {}), "delflag": new abap.types.Character(1, {}), "genflag": new abap.types.Character(1, {}), "srcsystem": new abap.types.Character(5, {}), "edtflag": new abap.types.Character(1, {}), "masterlang": new abap.types.Character(1, {})}, "TADIR", "TADIR", {}, {});
    let temp64 = new abap.types.Structure({"pgmid": new abap.types.Character(4, {}), "object": new abap.types.Character(4, {}), "obj_name": new abap.types.Character(40, {}), "devclass": new abap.types.Character(30, {"qualifiedName":"DEVCLASS","ddicName":"DEVCLASS"}), "korrnum": new abap.types.Character(10, {}), "delflag": new abap.types.Character(1, {}), "genflag": new abap.types.Character(1, {}), "srcsystem": new abap.types.Character(5, {}), "edtflag": new abap.types.Character(1, {}), "masterlang": new abap.types.Character(1, {})}, "TADIR", "TADIR", {}, {});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().initial, act: (await this.cut.get().last_operation())});
    abap.statements.clear(temp62);
    await this.cut.get().zif_aff_writer$write_element({element_name: new abap.types.Character(13).set('write_element'), element_description: temp62});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().write_element, act: (await this.cut.get().last_operation())});
    abap.statements.clear(temp63);
    await this.cut.get().zif_aff_writer$open_node({node_name: new abap.types.Character(14).set('open_structure'), node_description: (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: temp63}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_structure, act: (await this.cut.get().last_operation())});
    abap.statements.clear(temp64);
    await this.cut.get().zif_aff_writer$close_node({node_name: new abap.types.Character(15).set('close_structure'), node_description: (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: temp64}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_structure, act: (await this.cut.get().last_operation())});
    await this.cut.get().zif_aff_writer$open_node({node_name: new abap.types.Character(10).set('open_table'), node_description: (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: table}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().open_table, act: (await this.cut.get().last_operation())});
    await this.cut.get().zif_aff_writer$close_node({node_name: new abap.types.Character(11).set('close_table'), node_description: (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: table}))});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.Classes['ZIF_AFF_WRITER'].zif_aff_writer$operation.get().close_table, act: (await this.cut.get().last_operation())});
  }
  async get_element_description(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let data = INPUT?.data;
    let temp65 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    await abap.statements.cast(temp65, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: data})));
    result.set(temp65);
    return result;
  }
  async append_to_previous_line() {
    let temp66 = new abap.types.String({qualifiedName: "STRING"});
    let temp67 = new abap.types.Integer({qualifiedName: "I"});
    let temp68 = new abap.types.String({qualifiedName: "STRING"});
    let temp69 = new abap.types.Integer({qualifiedName: "I"});
    await this.cut.get().append_to_previous_line({string: new abap.types.Character(3).set('1+2')});
    await this.cut.get().append_to_previous_line({string: new abap.types.Character(1).set('=')});
    await this.cut.get().append_to_previous_line({string: new abap.types.Character(3).set('2+1')});
    await this.cut.get().write_tag({line: new abap.types.Character(8).set('new line')});
    await this.cut.get().append_to_previous_line({string: new abap.types.Character(1).set(';')});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(2), act: abap.builtin.lines({val: this.cut.get().content})});
    temp67.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.cut.get().content,{index: abap.IntegerFactory.get(1),
      into: temp66});
    abap.builtin.sy.get().tabix.set(temp67);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique96 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique96.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.testclasses.abap","INTERNAL_LINE": 269};
      throw unique96;
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(7).set('1+2=2+1'), act: temp66});
    temp69.set(abap.builtin.sy.get().tabix);
    abap.statements.readTable(this.cut.get().content,{index: abap.IntegerFactory.get(2),
      into: temp68});
    abap.builtin.sy.get().tabix.set(temp69);
    if (abap.compare.ne(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
      const unique97 = await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      unique97.EXTRA_CX = {"INTERNAL_FILENAME": "zcl_aff_writer.clas.testclasses.abap","INTERNAL_LINE": 278};
      throw unique97;
    }
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(9).set('new line;'), act: temp68});
  }
  async call_reader_and_decode1() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`CATEGORY`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().description.set(new abap.types.String().set(`This is an enum`));
    abap_doc_exp.get().title.set(new abap.types.String().set(`myCategory`));
    abap_doc_exp.get().enumvalues_link.set(new abap.types.String().set(`zcl_aff_test_types.data:enum_values`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode2() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`AFF_TEST_TYPE-INNER_STRUC`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().title.set(new abap.types.Character(20).set('Title of inner_struc'));
    abap_doc_exp.get().description.set(new abap.types.Character(26).set('Description of inner_struc'));
    abap_doc_exp.get().showalways.set(abap.builtin.abap_true);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode3() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`AFF_TEST_TYPE-INNER_STRUC-INNER_ELEMENT`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().required.set(abap.builtin.abap_true);
    abap_doc_exp.get().title.set(new abap.types.String().set(`Title of inner_element`));
    abap_doc_exp.get().description.set(new abap.types.String().set(`Description of inner_element`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode4() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`STRUCTURE_WITH_NUMBERS-INTEGER_WITH_MULTIPLE`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().title.set(new abap.types.Character(27).set('Integer With Given Multiple'));
    abap_doc_exp.get().description.set(new abap.types.String().set(`Integer with given multiple`));
    abap_doc_exp.get().exclusive_minimum.set(new abap.types.String().set(`0`));
    abap_doc_exp.get().maximum.set(new abap.types.String().set(`99999`));
    abap_doc_exp.get().multiple_of.set(new abap.types.String().set(`1`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode5() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`STRUCTURE_DIFFERENT_DEFAULT-FOUR_BYTE_INT`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().title.set(new abap.types.Character(17).set('Four Byte Integer'));
    abap_doc_exp.get().description.set(new abap.types.Character(17).set('Four byte integer'));
    abap_doc_exp.get().default_.set(new abap.types.Character(3).set('"5"'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode6() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_exp = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`STRUCTURE_DIFFERENT_DEFAULT-ENUM_TYPE`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    abap.statements.clear(abap_doc_exp);
    abap_doc_exp.get().title.set(new abap.types.Character(9).set('Enum Type'));
    abap_doc_exp.get().description.set(new abap.types.Character(9).set('Enum type'));
    abap_doc_exp.get().enumvalues_link.set(new abap.types.Character(41).set('zcl_aff_test_types.data:co_class_category'));
    abap_doc_exp.get().default_.set(new abap.types.Character(58).set('@link zcl_aff_test_types.data:co_class_category.exit_class'));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap_doc_exp, act: abap_doc_act});
  }
  async call_reader_and_decode7() {
    let name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    let abap_doc_act = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    element_name.set(new abap.types.String().set(`MY_STRUCTURE-MY_FIRST_ELEMENT`));
    abap_doc_act.set((await this.cut.get().call_reader_and_decode({name_of_source: name_of_source, element_name: element_name})));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: new abap.types.Character(13).set('First Element'), act: abap_doc_act.get().title});
  }
  async delete_first_of_struc_stack() {
    let exp_table = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "zcl_aff_writer=>tt_structure_stack");
    let temp70 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp71 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp72 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    abap.statements.clear(temp70);
    temp70.get().name.set(new abap.types.String().set(`MY_STRUCTURE3`));
    temp70.get().absolute_name.set(new abap.types.String().set(`\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=MY_STRUCTURE3`));
    abap.statements.insertInternal({data: temp70, index: abap.IntegerFactory.get(1), table: this.cut.get().stack_of_structure});
    abap.statements.clear(temp71);
    temp71.get().name.set(new abap.types.String().set(`MY_STRUCTURE3`));
    temp71.get().absolute_name.set(new abap.types.String().set(`\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=MY_STRUCTURE3`));
    abap.statements.insertInternal({data: temp71, index: abap.IntegerFactory.get(1), table: exp_table});
    abap.statements.clear(temp72);
    temp72.get().name.set(new abap.types.String().set(`MY_NESTED_STRUCTURE`));
    temp72.get().absolute_name.set(new abap.types.String().set(`\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=MY_NESTED_STRUCTURE`));
    abap.statements.insertInternal({data: temp72, index: abap.IntegerFactory.get(1), table: this.cut.get().stack_of_structure});
    await this.cut.get().delete_first_of_struc_stack();
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_table, act: this.cut.get().stack_of_structure});
  }
  async get_all_path_information() {
    let temp73 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let temp74 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_WRITER=>TY_STRUCTURE_STACK-NAME"}), "absolute_name": new abap.types.Character(200, {"qualifiedName":"abap_abstypename"})}, "zcl_aff_writer=>ty_structure_stack", undefined, {}, {});
    let source_type_act = new abap.types.String({qualifiedName: "STRING"});
    let source_act = new abap.types.String({qualifiedName: "STRING"});
    let full_name_of_type_act = new abap.types.String({qualifiedName: "STRING"});
    let source_type_exp = new abap.types.String({qualifiedName: "STRING"});
    let source_exp = new abap.types.String({qualifiedName: "STRING"});
    let full_name_of_type_exp = new abap.types.String({qualifiedName: "STRING"});
    abap.statements.clear(temp73);
    temp73.get().name.set(new abap.types.String().set(`LIST`));
    temp73.get().absolute_name.set(new abap.types.String().set(`\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=LIST`));
    abap.statements.insertInternal({data: temp73, index: abap.IntegerFactory.get(1), table: this.cut.get().stack_of_structure});
    abap.statements.clear(temp74);
    temp74.get().name.set(new abap.types.String().set(`LIST1`));
    temp74.get().absolute_name.set(new abap.types.String().set(`\\TYPE=%_T00004S00000109O0000013408`));
    abap.statements.insertInternal({data: temp74, index: abap.IntegerFactory.get(1), table: this.cut.get().stack_of_structure});
    await this.cut.get().get_all_path_information({name: new abap.types.String().set(`ELEMENT_OF_LIST1`), source_type: source_type_act, source: source_act, fullname_of_type: full_name_of_type_act});
    source_type_exp.set(new abap.types.String().set(`CLASS`));
    source_exp.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    full_name_of_type_exp.set(new abap.types.String().set(`LIST-LIST1-ELEMENT_OF_LIST1`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: source_type_exp, act: source_type_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: source_exp, act: source_act});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: full_name_of_type_exp, act: full_name_of_type_act});
  }
  async get_abap_doc_for_absolute_name() {
    let absolute_name = new abap.types.String({qualifiedName: "STRING"});
    let temp75 = new abap.types.Character(200, {"qualifiedName":"abap_abstypename"});
    let act_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let exp_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    absolute_name.set(new abap.types.String().set(`\\CLASS=ZCL_AFF_TEST_TYPES\\TYPE=MY_STRUCTURE`));
    temp75.set(absolute_name);
    act_abap_doc.set((await this.cut.get().get_abap_doc_for_absolute_name({absolute_name: temp75})));
    abap.statements.clear(exp_abap_doc);
    exp_abap_doc.get().title.set(new abap.types.String().set(`mySimpleStructure`));
    exp_abap_doc.get().description.set(new abap.types.String().set(`This is a simple structure`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_abap_doc, act: act_abap_doc});
  }
  async compare_abap_doc() {
    let abap_doc_base = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let abap_doc_additional = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    let exp_abap_doc = new abap.types.Structure({"required": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "showalways": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"}), "title": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-TITLE"}), "description": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DESCRIPTION"}), "enumvalues_link": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUMVALUES_LINK"}), "minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MINIMUM"}), "maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAXIMUM"}), "exclusive_minimum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MINIMUM"}), "exclusive_maximum": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-EXCLUSIVE_MAXIMUM"}), "multiple_of": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MULTIPLE_OF"}), "default_": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-DEFAULT_"}), "min_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MIN_LENGTH"}), "max_length": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-MAX_LENGTH"}), "callback_class": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CALLBACK_CLASS"}), "content_media_type": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_MEDIA_TYPE"}), "content_encoding": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-CONTENT_ENCODING"}), "enum_value": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_PARSER=>ABAP_DOC-ENUM_VALUE"})}, "zcl_aff_abap_doc_parser=>abap_doc", undefined, {}, {});
    abap.statements.clear(abap_doc_base);
    abap_doc_base.get().title.set(new abap.types.String().set(`This is the title`));
    abap_doc_base.get().required.set(abap.builtin.abap_true);
    abap.statements.clear(abap_doc_additional);
    abap_doc_additional.get().description.set(new abap.types.String().set(`This should not be written`));
    abap_doc_additional.get().enumvalues_link.set(new abap.types.String().set(`This link should be written`));
    abap.statements.clear(exp_abap_doc);
    exp_abap_doc.get().title.set(new abap.types.String().set(`This is the title`));
    exp_abap_doc.get().required.set(abap.builtin.abap_true);
    exp_abap_doc.get().enumvalues_link.set(new abap.types.String().set(`This link should be written`));
    await this.cut.get().compare_abap_doc({abap_doc_additional: abap_doc_additional, abap_doc_base: abap_doc_base});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_abap_doc, act: abap_doc_base});
    abap.statements.clear(abap_doc_base);
    abap_doc_base.get().enumvalues_link.set(new abap.types.Character(14).set('This is a link'));
    abap.statements.clear(abap_doc_additional);
    abap_doc_additional.get().title.set(new abap.types.String().set(`This is the new found title`));
    abap_doc_additional.get().description.set(new abap.types.String().set(`This is the new found description`));
    abap_doc_additional.get().enumvalues_link.set(new abap.types.String().set(`This link should not be written`));
    abap.statements.clear(exp_abap_doc);
    exp_abap_doc.get().title.set(new abap.types.String().set(`This is the new found title`));
    exp_abap_doc.get().description.set(new abap.types.String().set(`This is the new found description`));
    exp_abap_doc.get().enumvalues_link.set(new abap.types.String().set(`This is a link`));
    await this.cut.get().compare_abap_doc({abap_doc_additional: abap_doc_additional, abap_doc_base: abap_doc_base});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_abap_doc, act: abap_doc_base});
  }
  async get_struc_of_enum_values_cl() {
    let enumvalues_link = new abap.types.String({qualifiedName: "STRING"});
    let act_structure_of_values = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let act_name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let act_name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    let exp_name_of_source = new abap.types.String({qualifiedName: "STRING"});
    let exp_name_of_constant = new abap.types.String({qualifiedName: "STRING"});
    let exp_structure = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    let ref = new abap.types.Structure({"general": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"}), "classic_badi": new abap.types.Numc({length: 2, qualifiedName: "zcl_aff_test_types=>category"})}, undefined, undefined, {}, {});
    let temp76 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    enumvalues_link.set(new abap.types.String().set(`zcl_aff_test_types.data:enum_values`));
    await this.cut.get().get_structure_of_enum_values({link_to_values: enumvalues_link, fullname_of_type: new abap.types.String().set(``), structure_of_values: act_structure_of_values, name_of_source: act_name_of_source, name_of_constant: act_name_of_constant});
    exp_name_of_source.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    exp_name_of_constant.set(new abap.types.String().set(`ENUM_VALUES`));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_name_of_constant, act: act_name_of_constant});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_name_of_source, act: act_name_of_source});
    ref.set(abap.Classes['ZCL_AFF_TEST_TYPES'].enum_values);
    await abap.statements.cast(temp76, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_data({p_data: ref})));
    exp_structure.set(temp76);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: (await exp_structure.get().get_components()), act: (await act_structure_of_values.get().get_components())});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_structure.get().kind, act: act_structure_of_values.get().kind});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_structure.get().type_kind, act: act_structure_of_values.get().type_kind});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: exp_structure.get().struct_kind, act: act_structure_of_values.get().struct_kind});
  }
  async callback_class_is_valid() {
    let class_name = new abap.types.String({qualifiedName: "STRING"});
    let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    class_name.set(new abap.types.String().set(`ZCL_AFF_TEST_TYPES`));
    is_valid.set((await this.cut.get().is_callback_class_valid({class_name: class_name, component_name: new abap.types.Character(14).set('Component Name')})));
    log.set((await this.cut.get().zif_aff_writer$get_log()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.abap_true, act: is_valid});
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_has_no_message({log: log, message_severity_threshold: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info});
  }
  async callback_class_is_invalid() {
    let class_name = new abap.types.String({qualifiedName: "STRING"});
    let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let log = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    class_name.set(new abap.types.String().set(`ZCL_AFF_WRITER`));
    is_valid.set((await this.cut.get().is_callback_class_valid({class_name: class_name, component_name: new abap.types.Character(14).set('Component Name')})));
    log.set((await this.cut.get().zif_aff_writer$get_log()));
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.builtin.abap_false, act: is_valid});
    await abap.Classes['ZCL_AFF_TOOLS_UNIT_TEST_HELPER'].assert_log_contains_text({log: log, exp_text: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$co_msg106, exp_component_name: new abap.types.String().set(`Component Name`), exp_type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning});
  }
  async validate_default() {
    let table_of_tuples = abap.types.TableFactory.construct(new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "");
    let date_time = new abap.types.UTCLong();
    let temp77 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp25 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let time = new abap.types.Time({qualifiedName: "T"});
    let temp78 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp26 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp79 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp27 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp80 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp28 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let date = new abap.types.Date({qualifiedName: "D"});
    let temp81 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp29 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp82 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp30 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp83 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp31 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let numeric = new abap.types.Numc({length: 3});
    let temp84 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp32 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp85 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp33 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp86 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp34 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let float = new abap.types.Float({qualifiedName: "F"});
    let temp87 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp35 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp88 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp36 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let decfloat = new abap.types.typeTodoDecFloat16Type();
    let temp89 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp37 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp90 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp38 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let packed = new abap.types.Packed({length: 3, decimals: 2});
    let temp91 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp39 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp92 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp40 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp93 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp41 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let char = new abap.types.Character(4, {});
    let temp94 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp42 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp95 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp43 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let boolean = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    let temp96 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp44 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp97 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp45 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp98 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp46 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp99 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp47 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let integer1 = new abap.types.Integer({qualifiedName: "INT1"});
    let temp100 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp48 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let temp101 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp49 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let integer = new abap.types.Integer({qualifiedName: "I"});
    let temp102 = new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {});
    let temp50 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"});
    let fs_entry_ = new abap.types.FieldSymbol(new abap.types.Structure({"element_description": new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR", RTTIName: "\\CLASS=CL_ABAP_ELEMDESCR"}), "default_": new abap.types.String({qualifiedName: "DESCR_DEFAULT_VALID_TUPLE-DEFAULT_"}), "is_valid": new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"})}, "descr_default_valid_tuple", undefined, {}, {}));
    let is_valid = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOLEAN","ddicName":"ABAP_BOOLEAN"});
    abap.statements.clear(temp77);
    await abap.statements.cast(temp25, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: date_time})));
    temp77.get().element_description.set(temp25);
    temp77.get().default_.set(new abap.types.Character(27).set('9999-12-31T23:59:59.9999999'));
    temp77.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp77, table: table_of_tuples});
    abap.statements.clear(temp78);
    await abap.statements.cast(temp26, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: time})));
    temp78.get().element_description.set(temp26);
    temp78.get().default_.set(new abap.types.Character(2).set('20'));
    temp78.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp78, table: table_of_tuples});
    abap.statements.clear(temp79);
    await abap.statements.cast(temp27, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: time})));
    temp79.get().element_description.set(temp27);
    temp79.get().default_.set(new abap.types.Character(6).set('201500'));
    temp79.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp79, table: table_of_tuples});
    abap.statements.clear(temp80);
    await abap.statements.cast(temp28, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: time})));
    temp80.get().element_description.set(temp28);
    temp80.get().default_.set(new abap.types.Character(8).set('20150045'));
    temp80.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp80, table: table_of_tuples});
    abap.statements.clear(temp81);
    await abap.statements.cast(temp29, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: date})));
    temp81.get().element_description.set(temp29);
    temp81.get().default_.set(new abap.types.Character(8).set('20121201'));
    temp81.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp81, table: table_of_tuples});
    abap.statements.clear(temp82);
    await abap.statements.cast(temp30, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: date})));
    temp82.get().element_description.set(temp30);
    temp82.get().default_.set(new abap.types.Character(9).set('201212214'));
    temp82.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp82, table: table_of_tuples});
    abap.statements.clear(temp83);
    await abap.statements.cast(temp31, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: date})));
    temp83.get().element_description.set(temp31);
    temp83.get().default_.set(new abap.types.Character(6).set('201212'));
    temp83.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp83, table: table_of_tuples});
    numeric.set(new abap.types.Character(2).set('20'));
    abap.statements.clear(temp84);
    await abap.statements.cast(temp32, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: numeric})));
    temp84.get().element_description.set(temp32);
    temp84.get().default_.set(new abap.types.Character(3).set('201'));
    temp84.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp84, table: table_of_tuples});
    abap.statements.clear(temp85);
    await abap.statements.cast(temp33, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: numeric})));
    temp85.get().element_description.set(temp33);
    temp85.get().default_.set(new abap.types.Character(2).set('20'));
    temp85.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp85, table: table_of_tuples});
    abap.statements.clear(temp86);
    await abap.statements.cast(temp34, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: numeric})));
    temp86.get().element_description.set(temp34);
    temp86.get().default_.set(new abap.types.Character(4).set('2021'));
    temp86.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp86, table: table_of_tuples});
    abap.statements.clear(temp87);
    await abap.statements.cast(temp35, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: float})));
    temp87.get().element_description.set(temp35);
    temp87.get().default_.set(new abap.types.Character(7).set('14.5e12'));
    temp87.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp87, table: table_of_tuples});
    abap.statements.clear(temp88);
    await abap.statements.cast(temp36, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: float})));
    temp88.get().element_description.set(temp36);
    temp88.get().default_.set(new abap.types.Character(8).set('no float'));
    temp88.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp88, table: table_of_tuples});
    abap.statements.clear(temp89);
    await abap.statements.cast(temp37, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: decfloat})));
    temp89.get().element_description.set(temp37);
    temp89.get().default_.set(new abap.types.Character(7).set('14.5e12'));
    temp89.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp89, table: table_of_tuples});
    abap.statements.clear(temp90);
    await abap.statements.cast(temp38, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: decfloat})));
    temp90.get().element_description.set(temp38);
    temp90.get().default_.set(new abap.types.Character(8).set('no_float'));
    temp90.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp90, table: table_of_tuples});
    abap.statements.clear(temp91);
    await abap.statements.cast(temp39, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: packed})));
    temp91.get().element_description.set(temp39);
    temp91.get().default_.set(new abap.types.Character(1).set('a'));
    temp91.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp91, table: table_of_tuples});
    abap.statements.clear(temp92);
    await abap.statements.cast(temp40, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: packed})));
    temp92.get().element_description.set(temp40);
    temp92.get().default_.set(new abap.types.Character(5).set('4.534'));
    temp92.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp92, table: table_of_tuples});
    abap.statements.clear(temp93);
    await abap.statements.cast(temp41, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: packed})));
    temp93.get().element_description.set(temp41);
    temp93.get().default_.set(new abap.types.Character(4).set('3.25'));
    temp93.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp93, table: table_of_tuples});
    abap.statements.clear(temp94);
    await abap.statements.cast(temp42, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: char})));
    temp94.get().element_description.set(temp42);
    temp94.get().default_.set(new abap.types.Character(3).set('a5b'));
    temp94.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp94, table: table_of_tuples});
    abap.statements.clear(temp95);
    await abap.statements.cast(temp43, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: char})));
    temp95.get().element_description.set(temp43);
    temp95.get().default_.set(new abap.types.Character(5).set('a5bca'));
    temp95.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp95, table: table_of_tuples});
    abap.statements.clear(temp96);
    await abap.statements.cast(temp44, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: boolean})));
    temp96.get().element_description.set(temp44);
    temp96.get().default_.set(new abap.types.Character(9).set('abap_true'));
    temp96.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp96, table: table_of_tuples});
    abap.statements.clear(temp97);
    await abap.statements.cast(temp45, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: boolean})));
    temp97.get().element_description.set(temp45);
    temp97.get().default_.set(new abap.types.Character(10).set('abap_false'));
    temp97.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp97, table: table_of_tuples});
    abap.statements.clear(temp98);
    await abap.statements.cast(temp46, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: boolean})));
    temp98.get().element_description.set(temp46);
    temp98.get().default_.set(new abap.types.Character(1).set(''));
    temp98.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp98, table: table_of_tuples});
    abap.statements.clear(temp99);
    await abap.statements.cast(temp47, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: boolean})));
    temp99.get().element_description.set(temp47);
    temp99.get().default_.set(new abap.types.Character(1).set('a'));
    temp99.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp99, table: table_of_tuples});
    abap.statements.clear(temp100);
    await abap.statements.cast(temp48, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: integer1})));
    temp100.get().element_description.set(temp48);
    temp100.get().default_.set(new abap.types.Character(2).set('-5'));
    temp100.get().is_valid.set(abap.builtin.abap_false);
    abap.statements.insertInternal({data: temp100, table: table_of_tuples});
    abap.statements.clear(temp101);
    await abap.statements.cast(temp49, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: integer1})));
    temp101.get().element_description.set(temp49);
    temp101.get().default_.set(new abap.types.Character(2).set('10'));
    temp101.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp101, table: table_of_tuples});
    abap.statements.clear(temp102);
    await abap.statements.cast(temp50, (await abap.Classes['CL_ABAP_ELEMDESCR'].describe_by_data({p_data: integer})));
    temp102.get().element_description.set(temp50);
    temp102.get().default_.set(new abap.types.Character(2).set('-5'));
    temp102.get().is_valid.set(abap.builtin.abap_true);
    abap.statements.insertInternal({data: temp102, table: table_of_tuples});
    for await (const unique98 of abap.statements.loop(table_of_tuples)) {
      fs_entry_.assign(unique98);
      is_valid.set((await this.cut.get().is_default_value_valid({element_description: fs_entry_.get().element_description, default_value: fs_entry_.get().default_, fullname_of_type: new abap.types.String().set(`TEST_VALUE`)})));
      await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: fs_entry_.get().is_valid, act: is_valid});
    }
  }
  async validate_source() {
    let temp103 = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let temp51 = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});
    abap.statements.clear(temp103);
    abap.statements.clear(temp51);
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_true({act: (await this.cut.get().zif_aff_writer$validate({source: temp103, log: temp51}))});
  }
  async handle_include() {
    let data = new abap.types.Structure({"first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-FIRST_ELEMENT"}), "second_element": new abap.types.Structure({"my_first_element": new abap.types.String({qualifiedName: "ZCL_AFF_TEST_TYPES=>MYSTRING"}), "my_second_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>MY_STRUCTURE-MY_SECOND_ELEMENT"})}, "zcl_aff_test_types=>my_structure", undefined, {}, {}), "third_element": new abap.types.Integer({qualifiedName: "ZCL_AFF_TEST_TYPES=>TY_INCLUDE_TYPE-THIRD_ELEMENT"})}, "zcl_aff_test_types=>ty_include_type", undefined, {}, {});
    let temp104 = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR", RTTIName: "\\CLASS=CL_ABAP_STRUCTDESCR"});
    await abap.statements.cast(temp104, (await abap.Classes['CL_ABAP_STRUCTDESCR'].describe_by_data({p_data: data})));
    await this.cut.get().zif_aff_writer$open_include({include_description: temp104});
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(1), act: abap.builtin.lines({val: this.cut.get().stack_of_structure})});
    await this.cut.get().zif_aff_writer$close_include();
    await abap.Classes['CL_ABAP_UNIT_ASSERT'].assert_equals({exp: abap.IntegerFactory.get(0), act: abap.builtin.lines({val: this.cut.get().stack_of_structure})});
  }
}
abap.Classes['CLAS-ZCL_AFF_WRITER-LTCL_TYPE_WRITER'] = ltcl_type_writer;
export {ltcl_writer_testable, ltcl_type_writer};
//# sourceMappingURL=zcl_aff_writer.clas.testclasses.mjs.map