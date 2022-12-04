const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_random_int.clas.abap
const constant_minus_2147483648 = new abap.types.Integer().set(-2147483648);
const constant_1 = new abap.types.Integer().set(1);
const constant_2147483647 = new abap.types.Integer().set(2147483647);
class cl_abap_random_int {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    return this;
  }
  async create(INPUT) {
    return cl_abap_random_int.create(INPUT);
  }
  static async create(INPUT) {
    let prng = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_RANDOM_INT"});
    let seed = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.seed) {seed.set(INPUT.seed);}
    let min = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.min) {min.set(INPUT.min);}
    if (INPUT === undefined || INPUT.min === undefined) {min = constant_minus_2147483648;}
    let max = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.max) {max.set(INPUT.max);}
    if (INPUT === undefined || INPUT.max === undefined) {max = constant_2147483647;}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return prng;
  }
  async get_next() {
    let value = new abap.types.Integer({qualifiedName: "I"});
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return value;
  }
}
abap.Classes['CL_ABAP_RANDOM_INT'] = cl_abap_random_int;
export {cl_abap_random_int};
//# sourceMappingURL=cl_abap_random_int.clas.mjs.map