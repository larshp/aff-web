const {cx_root} = await import("./cx_root.clas.mjs");
// openabap.fugr.system_callstack.abap
async function system_callstack(INPUT) {
  // exporting CALLSTACK ABAP_CALLSTACK
  let callstack = INPUT.importing.callstack;
  let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Structure({mainprogram: new abap.types.Character({length: 40, qualifiedName: "ABAP_CALLSTACK_LINE-MAINPROGRAM"}), include: new abap.types.Character({length: 40, qualifiedName: "ABAP_CALLSTACK_LINE-INCLUDE"}), line: new abap.types.Integer({qualifiedName: "ABAP_CALLSTACK_LINE-LINE"}), blockname: new abap.types.String({qualifiedName: "ABAP_CALLSTACK_LINE-BLOCKNAME"})}, "ABAP_CALLSTACK_LINE"));
  fs_fs_.assign(callstack.appendInitial());
  fs_fs_.get().mainprogram.set(new abap.types.Character({length: 5}).set('ZTODO'));
  fs_fs_.get().include.set(new abap.types.Character({length: 5}).set('ZTODO'));
  fs_fs_.get().line.set(new abap.types.Character({length: 3}).set('123'));
}
abap.FunctionModules['SYSTEM_CALLSTACK'] = system_callstack;
//# sourceMappingURL=openabap.fugr.system_callstack.mjs.map