const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.convert_itf_to_stream_text.abap
const constant_1 = new abap.types.Integer().set(1);
async function convert_itf_to_stream_text(INPUT) {
  // importing LF undefined
  let lf = INPUT.exporting.lf;
  // exporting STREAM_LINES STRING_TABLE
  let stream_lines = INPUT.importing.stream_lines;
  // tables ITF_TEXT TLINE
  let itf_text = INPUT.tables.itf_text;
  // tables TEXT_STREAM undefined
  let text_stream = INPUT.tables.text_stream;
  abap.statements.assert(abap.compare.eq(new abap.types.Character({length: 4}).set('todo'), constant_1));
}
abap.FunctionModules['CONVERT_ITF_TO_STREAM_TEXT'] = convert_itf_to_stream_text;
//# sourceMappingURL=openabap.fugr.convert_itf_to_stream_text.mjs.map