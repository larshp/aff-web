const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_output.abap
async function conversion_exit_alpha_output(INPUT) {
  // importing INPUT CLIKE
  let input = INPUT.exporting?.input;
  if (input === undefined) {
                input = new abap.types.Character();
              }
    // exporting OUTPUT CLIKE
    let output = INPUT.importing?.output;
    if (output === undefined) {
                  output = new abap.types.Character();
                }
      output.set(input);
      abap.statements.shift(output, {direction: 'LEFT',deletingLeading: new abap.types.Character(1).set('0')});
    }
    abap.FunctionModules['CONVERSION_EXIT_ALPHA_OUTPUT'] = conversion_exit_alpha_output;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_output.mjs.map