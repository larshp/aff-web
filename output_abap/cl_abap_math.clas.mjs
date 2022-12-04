const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_math.clas.abap
class cl_abap_math {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.min_int4 = cl_abap_math.min_int4;
    this.max_int4 = cl_abap_math.max_int4;
    this.round_ceiling = cl_abap_math.round_ceiling;
    this.round_up = cl_abap_math.round_up;
    this.round_half_up = cl_abap_math.round_half_up;
    this.round_half_even = cl_abap_math.round_half_even;
    this.round_half_down = cl_abap_math.round_half_down;
    this.round_down = cl_abap_math.round_down;
    this.round_floor = cl_abap_math.round_floor;
    return this;
  }
}
abap.Classes['CL_ABAP_MATH'] = cl_abap_math;
cl_abap_math.min_int4 = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.min_int4.set(-2147483648);
cl_abap_math.max_int4 = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.max_int4.set(2147483647);
cl_abap_math.round_ceiling = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_ceiling.set(0);
cl_abap_math.round_up = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_up.set(1);
cl_abap_math.round_half_up = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_half_up.set(2);
cl_abap_math.round_half_even = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_half_even.set(3);
cl_abap_math.round_half_down = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_half_down.set(4);
cl_abap_math.round_down = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_down.set(5);
cl_abap_math.round_floor = new abap.types.Integer({qualifiedName: "I"});
cl_abap_math.round_floor.set(6);
export {cl_abap_math};
//# sourceMappingURL=cl_abap_math.clas.mjs.map