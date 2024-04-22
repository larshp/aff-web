const {cx_root} = await import("./cx_root.clas.mjs");
// cl_demo_output.clas.abap
class cl_demo_output {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async write(INPUT) {
    return cl_demo_output.write(INPUT);
  }
  static async write(INPUT) {
    let data = new abap.types.Character(4);
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(13).set('not supported')));
  }
  async clear() {
    return cl_demo_output.clear();
  }
  static async clear() {
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(13).set('not supported')));
  }
  async display(INPUT) {
    return cl_demo_output.display(INPUT);
  }
  static async display(INPUT) {
    let data = new abap.types.Character(4);
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(13).set('not supported')));
  }
}
abap.Classes['CL_DEMO_OUTPUT'] = cl_demo_output;
export {cl_demo_output};
//# sourceMappingURL=cl_demo_output.clas.mjs.map