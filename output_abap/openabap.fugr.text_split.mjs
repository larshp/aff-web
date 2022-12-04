const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.text_split.abap
const constant_50 = new abap.types.Integer().set(50);
async function text_split(INPUT) {
  // importing LENGTH undefined
  let length = INPUT.exporting.length;
  // importing TEXT undefined
  let text = INPUT.exporting.text;
  // exporting LINE undefined
  let line = INPUT.importing.line;
  // exporting REST undefined
  let rest = INPUT.importing.rest;
  if (abap.compare.lt(abap.builtin.strlen({val: text}), constant_50)) {
    line.set(text);
    rest.set(new abap.types.Character({length: 0}).set(''));
  } else {
    line.set(text.getOffset({length: 50}));
    rest.set(text.getOffset({offset: 50}));
  }
}
abap.FunctionModules['TEXT_SPLIT'] = text_split;
//# sourceMappingURL=openabap.fugr.text_split.mjs.map