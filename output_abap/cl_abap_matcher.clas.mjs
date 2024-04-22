const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_matcher.clas.abap
class cl_abap_matcher {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.mt_matches = new abap.types.Table(new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    this.mv_index = new abap.types.Integer({qualifiedName: "I"});
    this.mv_text = new abap.types.String({qualifiedName: "STRING"});
    this.mv_pattern = new abap.types.String({qualifiedName: "STRING"});
    let pattern = new abap.types.Character();
    if (INPUT && INPUT.pattern) {pattern = INPUT.pattern;}
    let ignore_case = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.ignore_case) {ignore_case = INPUT.ignore_case;}
    let text = new abap.types.Character();
    if (INPUT && INPUT.text) {text = INPUT.text;}
    if (abap.compare.eq(ignore_case, abap.builtin.abap_true)) {
      abap.statements.find(text, {regex: pattern, first: false, ignoringCase: true, results: this.mt_matches});
    } else {
      abap.statements.find(text, {regex: pattern, first: false, results: this.mt_matches});
    }
    this.mv_pattern.set(pattern);
    this.mv_text.set(text);
    return this;
  }
  async match() {
    let success = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.find(this.mv_text, {regex: new abap.types.String().set(`^${abap.templateFormatting(this.mv_pattern)}$`), first: false});
    success.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))));
    return success;
  }
  async find_all() {
    let rt_matches = new abap.types.Table(new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT"), {"withHeader":false}, "MATCH_RESULT_TAB");
    rt_matches.set(this.mt_matches);
    return rt_matches;
  }
  async find_next() {
    let found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.mv_index.set(abap.operators.add(this.mv_index,new abap.types.Integer().set(1)));
    abap.statements.readTable(this.mt_matches,{index: this.mv_index});
    found.set(abap.builtin.boolc(abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))));
    return found;
  }
  async get_submatch(INPUT) {
    let match = new abap.types.String({qualifiedName: "STRING"});
    let index = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.index) {index.set(INPUT.index);}
    let ls_match = new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    let ls_submatch = new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT");
    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});
    abap.statements.readTable(ls_match.get().submatches,{index: index,into: ls_submatch});
    if (abap.compare.eq(abap.builtin.sy.get().subrc, new abap.types.Integer().set(0))) {
      match.set(this.mv_text.getOffset({offset: ls_submatch.get().offset, length: ls_submatch.get().length}));
    }
    return match;
  }
  async get_offset() {
    let offset = new abap.types.Integer({qualifiedName: "I"});
    let ls_match = new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});
    offset.set(ls_match.get().offset);
    return offset;
  }
  async get_length() {
    let length = new abap.types.Integer({qualifiedName: "I"});
    let ls_match = new abap.types.Structure({"line": new abap.types.Integer(), "offset": new abap.types.Integer(), "length": new abap.types.Integer(), "submatches": new abap.types.Table(new abap.types.Structure({"offset": new abap.types.Integer(), "length": new abap.types.Integer()}, "SUBMATCH_RESULT"), {"withHeader":false}, "SUBMATCH_RESULT_TAB")}, "MATCH_RESULT");
    abap.statements.readTable(this.mt_matches,{index: this.mv_index,into: ls_match});
    length.set(ls_match.get().length);
    return length;
  }
}
abap.Classes['CL_ABAP_MATCHER'] = cl_abap_matcher;
export {cl_abap_matcher};
//# sourceMappingURL=cl_abap_matcher.clas.mjs.map