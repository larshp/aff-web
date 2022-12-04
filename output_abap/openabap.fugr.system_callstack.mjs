const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.system_callstack.abap
async function system_callstack(INPUT) {
  // exporting CALLSTACK ABAP_CALLSTACK
  let callstack = INPUT.importing?.callstack;
  if (callstack === undefined) {
                callstack = new abap.types.Table(new abap.types.Structure({"mainprogram": new abap.types.Character(40, {}), "include": new abap.types.Character(40, {}), "line": new abap.types.Integer(), "blockname": new abap.types.String()}, "ABAP_CALLSTACK_LINE"), {"withHeader":false}, "ABAP_CALLSTACK");
              }
    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Structure({"mainprogram": new abap.types.Character(40, {}), "include": new abap.types.Character(40, {}), "line": new abap.types.Integer(), "blockname": new abap.types.String()}, "ABAP_CALLSTACK_LINE"));
    fs_fs_.assign(callstack.appendInitial());
    fs_fs_.get().mainprogram.set(new abap.types.Character(5).set('ZTODO'));
    fs_fs_.get().include.set(new abap.types.Character(5).set('ZTODO'));
    fs_fs_.get().line.set(new abap.types.Character(3).set('123'));
  }
  abap.FunctionModules['SYSTEM_CALLSTACK'] = system_callstack;
//# sourceMappingURL=openabap.fugr.system_callstack.mjs.map