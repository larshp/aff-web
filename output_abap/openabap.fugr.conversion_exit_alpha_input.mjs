const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_alpha_input.abap
async function conversion_exit_alpha_input(INPUT) {
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
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    }
    abap.FunctionModules['CONVERSION_EXIT_ALPHA_INPUT'] = conversion_exit_alpha_input;
//# sourceMappingURL=openabap.fugr.conversion_exit_alpha_input.mjs.map