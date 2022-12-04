const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.conversion_exit_isola_input.abap
const constant_1 = new abap.types.Integer().set(1);
async function conversion_exit_isola_input(INPUT) {
  // importing INPUT undefined
  let input = INPUT.exporting.input;
  // exporting OUTPUT undefined
  let output = INPUT.importing.output;
  output.set((await abap.Classes['CL_I18N_LANGUAGES'].sap2_to_sap1({im_lang_sap2: input})));
  if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_1)) {
    throw new abap.ClassicError({classic: "unknown_language"});
  }
}
abap.FunctionModules['CONVERSION_EXIT_ISOLA_INPUT'] = conversion_exit_isola_input;
//# sourceMappingURL=openabap.fugr.conversion_exit_isola_input.mjs.map