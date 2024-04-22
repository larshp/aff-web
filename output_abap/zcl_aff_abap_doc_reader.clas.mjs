await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_reader.clas.abap
class zcl_aff_abap_doc_reader {
  static INTERNAL_TYPE = 'CLAS';
  static INTERNAL_NAME = 'ZCL_AFF_ABAP_DOC_READER';
  static IMPLEMENTED_INTERFACES = [];
  static ATTRIBUTES = {"CACHE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), "instance": new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "");}, "visibility": "O", "is_constant": " ", "is_class": "X"},
  "SOURCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "visibility": "O", "is_constant": " ", "is_class": " "},
  "BLOCKS": {"type": () => {return abap.types.TableFactory.construct(new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_comment_blocks");}, "visibility": "O", "is_constant": " ", "is_class": " "}};
  static METHODS = {"PARSE": {"visibility": "O", "parameters": {}},
  "CREATE_INSTANCE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"});}, "is_optional": " "}, "SOURCE": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}},
  "GET_ABAP_DOC_FOR_ELEMENT": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}, "ELEMENT_NAME": {"type": () => {return new abap.types.String({qualifiedName: "STRING"});}, "is_optional": " "}}}};
  constructor() {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.cache = zcl_aff_abap_doc_reader.cache;
    this.source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    this.blocks = abap.types.TableFactory.construct(new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "ty_comment_blocks");
  }
  async constructor_(INPUT) {
    if (super.constructor_) { await super.constructor_(INPUT); }
    return this;
  }
  async create_instance(INPUT) {
    return zcl_aff_abap_doc_reader.create_instance(INPUT);
  }
  static async create_instance(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"});
    let source = INPUT?.source;
    if (source?.getQualifiedName === undefined || source.getQualifiedName() !== "STRING_TABLE") { source = undefined; }
    if (source === undefined) { source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE").set(INPUT.source); }
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let row = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), "instance": new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache", undefined, {}, {});
    let temp1 = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), "instance": new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache", undefined, {}, {});
    if (abap.compare.initial(name) === false) {
      abap.statements.readTable(zcl_aff_abap_doc_reader.cache,{into: row,
        withKey: (i) => {return abap.compare.eq(i.name, name);},
        withKeyValue: [{key: (i) => {return i.name}, value: name}],
        usesTableLine: false,
        withKeySimple: {"name": name}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, abap.IntegerFactory.get(0))) {
        result.set(row.get().instance);
        return result;
      }
    }
    result.set(await (new abap.Classes['ZCL_AFF_ABAP_DOC_READER']()).constructor_());
    result.get().source.set(source);
    if (abap.compare.initial(name) === false) {
      abap.statements.clear(temp1);
      temp1.get().name.set(name);
      temp1.get().instance.set(result);
      abap.statements.insertInternal({data: temp1, table: zcl_aff_abap_doc_reader.cache});
    }
    return result;
  }
  async get_abap_doc_for_element(INPUT) {
    let result = new abap.types.String({qualifiedName: "STRING"});
    let element_name = INPUT?.element_name;
    if (element_name?.getQualifiedName === undefined || element_name.getQualifiedName() !== "STRING") { element_name = undefined; }
    if (element_name === undefined) { element_name = new abap.types.String({qualifiedName: "STRING"}).set(INPUT.element_name); }
    let l_element_name = new abap.types.String({qualifiedName: "STRING"});
    let l_scanned_elem_name = new abap.types.String({qualifiedName: "STRING"});
    let element_was_found = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let fs_fs_abap_doc_block_ = new abap.types.FieldSymbol(new abap.types.Structure({"tab_comments": abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE"), "column_first_comment": new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), "hook_relevant_tok_type": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_add": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_type_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), "hook_relevant_tok_name_stmnt": new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {})}, "ty_comment_block", undefined, {}, {}));
    let adoc_line = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS", RTTIName: "\\CLASS=ZCX_AFF_TOOLS"});
    l_element_name.set(element_name);
    abap.statements.translate(l_element_name, "UPPER");
    abap.statements.condense(l_element_name, {nogaps: false});
    if (abap.compare.eq(abap.builtin.lines({val: this.blocks}), abap.IntegerFactory.get(0))) {
      await this.parse();
    }
    for await (const unique46 of abap.statements.loop(this.blocks)) {
      fs_fs_abap_doc_block_.assign(unique46);
      if (abap.compare.eq(fs_fs_abap_doc_block_.get().hook_relevant_tok_name.get().str, new abap.types.Character(5).set('BEGIN'))) {
        l_scanned_elem_name.set(fs_fs_abap_doc_block_.get().hook_relevant_tok_name_add.get().str);
      } else {
        l_scanned_elem_name.set(fs_fs_abap_doc_block_.get().hook_relevant_tok_name.get().str);
      }
      if (abap.compare.eq(l_scanned_elem_name, l_element_name)) {
        for await (const unique47 of abap.statements.loop(fs_fs_abap_doc_block_.get().tab_comments)) {
          adoc_line.set(unique47);
          abap.statements.condense(adoc_line, {nogaps: false});
          adoc_line.set(adoc_line.getOffset({offset: 2}));
          abap.statements.condense(adoc_line, {nogaps: false});
          if (abap.compare.eq(abap.builtin.sy.get().tabix, abap.IntegerFactory.get(1))) {
            result.set(adoc_line);
          } else {
            abap.statements.concatenate({source: [result, adoc_line], target: result, separatedBy: abap.builtin.space});
          }
        }
        element_was_found.set(abap.builtin.abap_true);
        break;
      }
    }
    if (abap.compare.eq(element_was_found, abap.builtin.abap_false)) {
      temp2.set(await (new abap.Classes['ZCX_AFF_TOOLS']()).constructor_({message: l_element_name}));
      throw temp2.get();
    }
    return result;
  }
  async parse() {
    let section_source = abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");
    let scan_util = new abap.types.ABAPObject({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS", RTTIName: "\\CLASS-POOL=ZCL_AFF_ABAP_DOC_READER\\CLASS=LCL_SECTION_SOURCE_COMMENTS"});
    let scan_statements = abap.types.TableFactory.construct(new abap.types.Structure({"level": new abap.types.Integer({qualifiedName: "I"}), "struc": new abap.types.Integer({qualifiedName: "I"}), "from": new abap.types.Integer({qualifiedName: "I"}), "to": new abap.types.Integer({qualifiedName: "I"}), "number": new abap.types.Integer({qualifiedName: "I"}), "colonrow": new abap.types.Integer({qualifiedName: "I"}), "trow": new abap.types.Integer({qualifiedName: "I"}), "coloncol": new abap.types.Integer({qualifiedName: "I"}), "tcol": new abap.types.Integer({qualifiedName: "I"}), "prefixlen": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {}), "terminator": new abap.types.Character(1, {}), "enhmt": new abap.types.Integer({qualifiedName: "I"})}, "SSTMNT", "SSTMNT", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_sstmnt");
    let scan_tokens = abap.types.TableFactory.construct(new abap.types.Structure({"str": new abap.types.String({qualifiedName: "STRING"}), "row": new abap.types.Integer({qualifiedName: "I"}), "off2": new abap.types.Integer({qualifiedName: "I"}), "off3": new abap.types.Integer({qualifiedName: "I"}), "col": new abap.types.Integer({qualifiedName: "I"}), "len1": new abap.types.Integer({qualifiedName: "I"}), "len2": new abap.types.Integer({qualifiedName: "I"}), "len3": new abap.types.Integer({qualifiedName: "I"}), "type": new abap.types.Character(1, {})}, "STOKESX", "STOKESX", {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "lcl_section_source_comments=>ty_stokesx");
    scan_util.set(await (new abap.Classes['CLAS-ZCL_AFF_ABAP_DOC_READER-LCL_SECTION_SOURCE_COMMENTS']()).constructor_());
    section_source.set(this.me.get().source);
    await scan_util.get().scan_code({source_to_be_scanned: section_source, tab_statements: scan_statements, tab_tokens: scan_tokens});
    this.blocks.set((await scan_util.get().identify_abap_doc_blocks_all({tab_statements: scan_statements, tab_tokens: scan_tokens, tab_source: section_source})));
  }
}
abap.Classes['ZCL_AFF_ABAP_DOC_READER'] = zcl_aff_abap_doc_reader;
zcl_aff_abap_doc_reader.cache = abap.types.TableFactory.construct(new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), "instance": new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache", undefined, {}, {}), {"withHeader":false,"keyType":"USER","primaryKey":{"name":"primary_key","type":"HASHED","isUnique":true,"keyFields":["NAME"]},"secondary":[]}, "");
zcl_aff_abap_doc_reader.ty_cache = new abap.types.Structure({"name": new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), "instance": new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER", RTTIName: "\\CLASS=ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache", undefined, {}, {});
export {zcl_aff_abap_doc_reader};
//# sourceMappingURL=zcl_aff_abap_doc_reader.clas.mjs.map