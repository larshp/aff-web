const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_regex.clas.abap
class cl_abap_regex {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mv_pattern = new abap.types.String({qualifiedName: "STRING"});
    this.mv_ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let pattern = new abap.types.Character();
    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}
    let ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}
    if (INPUT === undefined || INPUT.ignore_case === undefined) {ignore_case = abap.builtin.abap_false;}
    this.mv_pattern.set(pattern);
    this.mv_ignore_case.set(ignore_case);
    return this;
  }
  async create_pcre(INPUT) {
    return cl_abap_regex.create_pcre(INPUT);
  }
  static async create_pcre(INPUT) {
    let regex = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_REGEX"});
    let pattern = new abap.types.Character();
    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}
    let ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}
    if (INPUT === undefined || INPUT.ignore_case === undefined) {ignore_case = abap.builtin.abap_false;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return regex;
  }
  async create_matcher(INPUT) {
    let ro_matcher = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_MATCHER"});
    let text = new abap.types.Character();
    if (INPUT && INPUT.text) {text = INPUT.text;}
    ro_matcher.set(await (new abap.Classes['CL_ABAP_MATCHER']()).constructor_({pattern: this.mv_pattern, ignore_case: this.mv_ignore_case, text: text}));
    return ro_matcher;
  }
}
abap.Classes['CL_ABAP_REGEX'] = cl_abap_regex;
export {cl_abap_regex};
//# sourceMappingURL=cl_abap_regex.clas.mjs.map