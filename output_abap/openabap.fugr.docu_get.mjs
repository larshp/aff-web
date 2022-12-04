const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.docu_get.abap
async function docu_get(INPUT) {
  // importing ID undefined
  let id = INPUT.exporting?.id;
  if (id === undefined) {
                id = new abap.types.Character(4);
              }
    // importing LANGU undefined
    let langu = INPUT.exporting?.langu;
    if (langu === undefined) {
                  langu = new abap.types.Character(4);
                }
      // importing OBJECT undefined
      let object = INPUT.exporting?.object;
      if (object === undefined) {
                    object = new abap.types.Character(4);
                  }
        // importing TYP undefined
        let typ = INPUT.exporting?.typ;
        if (typ === undefined) {
                      typ = new abap.types.Character(4);
                    }
          // tables LINE TLINE
          let line = INPUT.tables?.line;
          abap.statements.assert(abap.compare.eq(new abap.types.Character(4).set('todo'), new abap.types.Integer().set(1)));
        }
        abap.FunctionModules['DOCU_GET'] = docu_get;
//# sourceMappingURL=openabap.fugr.docu_get.mjs.map