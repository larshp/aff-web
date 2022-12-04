const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.convert_itf_to_stream_text.abap
async function convert_itf_to_stream_text(INPUT) {
  // importing LF undefined
  let lf = INPUT.exporting?.lf;
  if (lf === undefined) {
                lf = new abap.types.Character(4);
              }
    // exporting STREAM_LINES STRING_TABLE
    let stream_lines = INPUT.importing?.stream_lines;
    if (stream_lines === undefined) {
                  stream_lines = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
                }
      // tables ITF_TEXT TLINE
      let itf_text = INPUT.tables?.itf_text;
      // tables TEXT_STREAM undefined
      let text_stream = INPUT.tables?.text_stream;
      abap.statements.assert(abap.compare.eq(new abap.types.Character(4).set('todo'), new abap.types.Integer().set(1)));
    }
    abap.FunctionModules['CONVERT_ITF_TO_STREAM_TEXT'] = convert_itf_to_stream_text;
//# sourceMappingURL=openabap.fugr.convert_itf_to_stream_text.mjs.map