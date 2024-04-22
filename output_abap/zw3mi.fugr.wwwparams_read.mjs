const {cx_root} = await import("./cx_root.clas.mjs");
// zw3mi.fugr.wwwparams_read.abap
async function wwwparams_read(INPUT) {
  // importing RELID WWWPARAMS-RELID
  let relid = INPUT.exporting?.relid;
  if (relid === undefined) {
                relid = new abap.types.Character(2, {});
              }
    // importing OBJID WWWPARAMS-OBJID
    let objid = INPUT.exporting?.objid;
    if (objid === undefined) {
                  objid = new abap.types.Character(40, {});
                }
      // importing NAME C
      let name = INPUT.exporting?.name;
      if (name === undefined) {
                    name = new abap.types.Character(1, {});
                  }
        // exporting VALUE C
        let value = INPUT.importing?.value;
        if (value === undefined) {
                      value = new abap.types.Character(1, {});
                    }
          abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
        }
        abap.FunctionModules['WWWPARAMS_READ'] = wwwparams_read;
//# sourceMappingURL=zw3mi.fugr.wwwparams_read.mjs.map