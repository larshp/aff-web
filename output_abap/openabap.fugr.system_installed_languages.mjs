const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.system_installed_languages.abap
const constant_0 = new abap.types.Integer().set(0);
async function system_installed_languages(INPUT) {
  // exporting LANGUAGES undefined
  let languages = INPUT.importing.languages;
  languages.set(abap.builtin.sy.get().langu);
  abap.builtin.sy.get().subrc.set(constant_0);
}
abap.FunctionModules['SYSTEM_INSTALLED_LANGUAGES'] = system_installed_languages;
//# sourceMappingURL=openabap.fugr.system_installed_languages.mjs.map