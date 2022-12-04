const {cx_root} = await import("./cx_root.clas.mjs");
// cl_run.clas.abap
class cl_run {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async run(INPUT) {
    return cl_run.run(INPUT);
  }
  static async run(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let object_type = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.object_type) {object_type.set(INPUT.object_type);}
    let writer = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_WRITER_JSON_SCHEMA"});
    let generator = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_GENERATOR"});
    let string_tab = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let type_name = new abap.types.String({qualifiedName: "STRING"});
    let schema_id = new abap.types.String({qualifiedName: "STRING"});
    let ref = new abap.types.DataReference(new abap.types.Character({length: 4}));
    let fs_row_ = new abap.types.FieldSymbol(new abap.types.String());
    schema_id.set(new abap.types.String().set(`https://github.com/SAP/abap-file-formats/blob/main/file-formats/${abap.templateFormatting(abap.builtin.to_lower({val: object_type}))}/${abap.templateFormatting(abap.builtin.to_lower({val: object_type}))}-v1.json`));
    type_name.set(abap.builtin.to_upper({val: new abap.types.String().set(`ZIF_AFF_${abap.templateFormatting(object_type)}_V1=>TY_MAIN`)}));
    abap.statements.createData(ref,{"name": type_name.get()});
    writer.set(await (new abap.Classes['ZCL_AFF_WRITER_JSON_SCHEMA']()).constructor_({schema_id: schema_id}));
    generator.set(await (new abap.Classes['ZCL_AFF_GENERATOR']()).constructor_({writer: writer}));
    string_tab.set((await generator.get().generate_type({data: (ref).getPointer()})));
    for await (const unique1 of abap.statements.loop(string_tab)) {
      fs_row_.assign(unique1);
      if (abap.compare.cp(abap.builtin.condense({val: fs_row_}), new abap.types.Character({length: 13}).set('"interface_"*'))) {
        abap.statements.replace({target:fs_row_, all:false, with: new abap.types.Character({length: 11}).set('"interface"'),of: new abap.types.Character({length: 12}).set('"interface_"')});
      }
    }
    abap.statements.concatenate({source: [string_tab], target: result, separatedBy: new abap.types.String().set(`\n`), lines: true});
    return result;
  }
}
abap.Classes['CL_RUN'] = cl_run;
export {cl_run};
//# sourceMappingURL=cl_run.clas.mjs.map