const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_input.abap
const constant_1 = new abap.types.Integer().set(1);
async function conversion_exit_alpha_input(INPUT) {
  // importing INPUT CLIKE
  let input = INPUT.exporting.input;
  // exporting OUTPUT CLIKE
  let output = INPUT.importing.output;
  abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
}
abap.FunctionModules['CONVERSION_EXIT_ALPHA_INPUT'] = conversion_exit_alpha_input;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_input.mjs.map