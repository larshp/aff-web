const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_isola_output.abap
async function conversion_exit_isola_output(INPUT) {
  // importing INPUT undefined
  let input = INPUT.exporting.input;
  // exporting OUTPUT undefined
  let output = INPUT.importing.output;
  output.set((await abap.Classes['CL_I18N_LANGUAGES'].sap1_to_sap2({im_lang_sap1: input})));
}
abap.FunctionModules['CONVERSION_EXIT_ISOLA_OUTPUT'] = conversion_exit_isola_output;
//# sourceMappingURL=openabap.fugr.conversion_exit_isola_output.mjs.map