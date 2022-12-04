const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_output.abap
async function conversion_exit_alpha_output(INPUT) {
  // importing INPUT CLIKE
  let input = INPUT.exporting.input;
  // exporting OUTPUT CLIKE
  let output = INPUT.importing.output;
  output.set(input);
  abap.statements.shift(output, {direction: 'LEFT',deletingLeading: new abap.types.Character({length: 1}).set('0')});
}
abap.FunctionModules['CONVERSION_EXIT_ALPHA_OUTPUT'] = conversion_exit_alpha_output;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_output.mjs.map