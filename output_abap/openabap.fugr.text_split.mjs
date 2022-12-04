const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.text_split.abap
async function text_split(INPUT) {
  // importing LENGTH undefined
  let length = INPUT.exporting?.length;
  if (length === undefined) {
                length = new abap.types.Character(4);
              }
    // importing TEXT undefined
    let text = INPUT.exporting?.text;
    if (text === undefined) {
                  text = new abap.types.Character(4);
                }
      // exporting LINE undefined
      let line = INPUT.importing?.line;
      if (line === undefined) {
                    line = new abap.types.Character(4);
                  }
        // exporting REST undefined
        let rest = INPUT.importing?.rest;
        if (rest === undefined) {
                      rest = new abap.types.Character(4);
                    }
          if (abap.compare.lt(abap.builtin.strlen({val: text}), new abap.types.Integer().set(50))) {
            line.set(text);
            rest.set(new abap.types.Character(0).set(''));
          } else {
            line.set(text.getOffset({length: 50}));
            rest.set(text.getOffset({offset: 50}));
          }
        }
        abap.FunctionModules['TEXT_SPLIT'] = text_split;
//# sourceMappingURL=openabap.fugr.text_split.mjs.map