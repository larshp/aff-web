const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.generate_sec_random.abap
const constant_0 = new abap.types.Integer().set(0);
async function generate_sec_random(INPUT) {
  // importing LENGTH I
  let length = INPUT.exporting.length;
  // exporting RANDOM XSTRING
  let random = INPUT.importing.random;
  abap.statements.assert(abap.compare.gt(length, constant_0));
  const crypto = await import("crypto");
  random.set(crypto.randomBytes(length.get()).toString("hex").toUpperCase());
}
abap.FunctionModules['GENERATE_SEC_RANDOM'] = generate_sec_random;
//# sourceMappingURL=openabap.fugr.generate_sec_random.mjs.map