const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.get_system_timezone.abap
async function get_system_timezone(INPUT) {
  // exporting TIMEZONE TIMEZONE
  let timezone = INPUT.importing.timezone;
  timezone.set(new abap.types.Character({length: 3}).set('UTC'));
}
abap.FunctionModules['GET_SYSTEM_TIMEZONE'] = get_system_timezone;
//# sourceMappingURL=openabap.fugr.get_system_timezone.mjs.map