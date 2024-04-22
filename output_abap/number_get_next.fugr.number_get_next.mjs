const {cx_root} = await import("./cx_root.clas.mjs");
// number_get_next.fugr.number_get_next.abap
async function number_get_next(INPUT) {
  // importing NR_RANGE_NR undefined
  let nr_range_nr = INPUT.exporting?.nr_range_nr;
  if (nr_range_nr === undefined) {
                nr_range_nr = new abap.types.Character(4);
              }
    // importing OBJECT undefined
    let object = INPUT.exporting?.object;
    if (object === undefined) {
                  object = new abap.types.Character(4);
                }
      // exporting NUMBER undefined
      let number = INPUT.importing?.number;
      if (number === undefined) {
                    number = new abap.types.Character(4);
                  }
        await abap.Classes['KERNEL_NUMBERRANGE'].number_get({nr_range_nr: nr_range_nr, object: object, number: number});
        abap.builtin.sy.get().subrc.set(new abap.types.Integer().set(0));
      }
      abap.FunctionModules['NUMBER_GET_NEXT'] = number_get_next;
//# sourceMappingURL=number_get_next.fugr.number_get_next.mjs.map