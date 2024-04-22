const {cx_root} = await import("./cx_root.clas.mjs");
// cl_run.clas.abap
class cl_run {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'CL_RUN';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {};
  static METHODS = {"RUN": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "MAIN_OBJECT_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "SUB_OBJECT_TYPE": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "FORMAT_VERSION": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async run(INPUT) {
    return cl_run.run(INPUT);
  }
  static async run(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let main_object_type = INPUT?.main_object_type;
    if (main_object_type?.getQualifiedName === undefined || main_object_type.getQualifiedName() !== "STRING") { main_object_type = undefined; }
    if (main_object_type === undefined) { main_object_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.main_object_type); }
    let sub_object_type = INPUT?.sub_object_type;
    if (sub_object_type?.getQualifiedName === undefined || sub_object_type.getQualifiedName() !== "STRING") { sub_object_type = undefined; }
    if (sub_object_type === undefined) { sub_object_type = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.sub_object_type); }
    let format_version = INPUT?.format_version;
    if (format_version?.getQualifiedName === undefined || format_version.getQualifiedName() !== "STRING") { format_version = undefined; }
    if (format_version === undefined) { format_version = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.format_version); }
    let writer = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA", RTTIName: "\\CLASS=ZCL_AFF_WRITER_JSON_SCHEMA"});
    let generator = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_GENERATOR", RTTIName: "\\CLASS=ZCL_AFF_GENERATOR"});
    let string_tab = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    let schema_id = new abap.types.String({qualifiedName: "STRING"});
    let ref = new abap.types.DataReference(new abap.types.Character(4));
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.String({qualifiedName: "STRING"}));
    schema_id.set(new abap.types.String().set(`https://github.com/SAP/abap-file-formats/blob/main/file-formats/${abap.templateFormatting(abap.builtin.to_lower({val: main_object_type}))}/${abap.templateFormatting(abap.builtin.to_lower({val: sub_object_type}))}-v${abap.templateFormatting(format_version)}.json`));
    type_name.set(abap.builtin.to_upper({val: new abap.types.String().set(`ZIF_AFF_${abap.templateFormatting(sub_object_type)}_V${abap.templateFormatting(format_version)}=>TY_MAIN`)}));
    abap.statements.createData(ref,{"name": type_name.get()});
    writer.set(await (new abap.Classes['ZCL_AFF_WRITER_JSON_SCHEMA']()).constructor_({schema_id: schema_id, format_version: format_version}));
    generator.set(await (new abap.Classes['ZCL_AFF_GENERATOR']()).constructor_({writer: writer}));
    string_tab.set((await generator.get().zif_aff_generator$generate_type({data: (ref).dereference()})));
    for await (const unique1 of abap.statements.loop(string_tab)) {
      fs_row_.assign(unique1);
      if (abap.compare.cp(abap.builtin.condense({val: fs_row_}), new abap.types.Character(13).set('"interface_"*'))) {
        abap.statements.replace({target: fs_row_, all: false, with: new abap.types.Character(11).set('"interface"'), of: new abap.types.Character(12).set('"interface_"')});
      }
    }
    return result;
  }
}
abap.Classes['CL_RUN'] = cl_run;
export {cl_run};
//# sourceMappingURL=cl_run.clas.mjs.map