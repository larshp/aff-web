await import("./zcl_aff_abap_doc_reader.clas.locals.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_abap_doc_reader.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class zcl_aff_abap_doc_reader {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    this.blocks = new abap.types.Table(new abap.types.Structure({tab_comments: new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE"), column_first_comment: new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), hook_relevant_tok_type: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name_add: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_type_stmnt: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name_stmnt: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX")}, "ty_comment_block"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "ty_comment_blocks");
    return this;
  }
  async create_instance(INPUT) {
    return zcl_aff_abap_doc_reader.create_instance(INPUT);
  }
  static async create_instance(INPUT) {
    let result = new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"});
    let source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    if (INPUT && INPUT.source) {source.set(INPUT.source);}
    let name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.name) {name.set(INPUT.name);}
    let row = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), instance: new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache");
    let temp1 = new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), instance: new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache");
    if (abap.compare.initial(name) === false) {
      abap.statements.readTable(zcl_aff_abap_doc_reader.cache,{into: row,withKey: (i) => {return abap.compare.eq(i.name, name);}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
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
    let element_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.element_name) {element_name.set(INPUT.element_name);}
    let l_element_name = new abap.types.String({qualifiedName: "STRING"});
    let l_scanned_elem_name = new abap.types.String({qualifiedName: "STRING"});
    let element_was_found = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    let fs_fs_abap_doc_block_ = new abap.types.FieldSymbol(new abap.types.Structure({tab_comments: new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE"), column_first_comment: new abap.types.Integer({qualifiedName: "TY_COMMENT_BLOCK-COLUMN_FIRST_COMMENT"}), hook_relevant_tok_type: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name_add: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_type_stmnt: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), hook_relevant_tok_name_stmnt: new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX")}, "ty_comment_block"));
    let adoc_line = new abap.types.String();
    let temp2 = new abap.types.ABAPObject({qualifiedName: "ZCX_AFF_TOOLS"});
    l_element_name.set(element_name);
    abap.statements.translate(l_element_name, "UPPER");
    abap.statements.condense(l_element_name, {nogaps: false});
    if (abap.compare.eq(abap.builtin.lines({val: this.blocks}), constant_0)) {
      await this.parse();
    }
    for await (const unique32 of abap.statements.loop(this.blocks)) {
      fs_fs_abap_doc_block_.assign(unique32);
      if (abap.compare.eq(fs_fs_abap_doc_block_.get().hook_relevant_tok_name.get().str, new abap.types.Character({length: 5}).set('BEGIN'))) {
        l_scanned_elem_name.set(fs_fs_abap_doc_block_.get().hook_relevant_tok_name_add.get().str);
      } else {
        l_scanned_elem_name.set(fs_fs_abap_doc_block_.get().hook_relevant_tok_name.get().str);
      }
      if (abap.compare.eq(l_scanned_elem_name, l_element_name)) {
        for await (const unique33 of abap.statements.loop(fs_fs_abap_doc_block_.get().tab_comments)) {
          adoc_line.set(unique33);
          abap.statements.condense(adoc_line, {nogaps: false});
          adoc_line.set(adoc_line.getOffset({offset: 2}));
          abap.statements.condense(adoc_line, {nogaps: false});
          if (abap.compare.eq(abap.builtin.sy.get().tabix, constant_1)) {
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
    let section_source = new abap.types.Table(new abap.types.String(), {"withHeader":false}, "STRING_TABLE");
    let scan_util = new abap.types.ABAPObject({qualifiedName: "LCL_SECTION_SOURCE_COMMENTS"});
    let scan_statements = new abap.types.Table(new abap.types.Structure({level: new abap.types.Integer({qualifiedName: "SSTMNT-LEVEL"}), struc: new abap.types.Integer({qualifiedName: "SSTMNT-STRUC"}), from: new abap.types.Integer({qualifiedName: "SSTMNT-FROM"}), to: new abap.types.Integer({qualifiedName: "SSTMNT-TO"}), number: new abap.types.Integer({qualifiedName: "SSTMNT-NUMBER"}), colonrow: new abap.types.Integer({qualifiedName: "SSTMNT-COLONROW"}), trow: new abap.types.Integer({qualifiedName: "SSTMNT-TROW"}), coloncol: new abap.types.Integer({qualifiedName: "SSTMNT-COLONCOL"}), tcol: new abap.types.Integer({qualifiedName: "SSTMNT-TCOL"}), prefixlen: new abap.types.Integer({qualifiedName: "SSTMNT-PREFIXLEN"}), type: new abap.types.Character({qualifiedName: "SSTMNT-TYPE"}), terminator: new abap.types.Character({qualifiedName: "SSTMNT-TERMINATOR"}), enhmt: new abap.types.Integer({qualifiedName: "SSTMNT-ENHMT"})}, "SSTMNT"), {"withHeader":false,"isUnique":false,"keyFields":[]}, "lcl_section_source_comments=>ty_sstmnt");
    let scan_tokens = new abap.types.Table(new abap.types.Structure({str: new abap.types.String({qualifiedName: "STOKESX-STR"}), row: new abap.types.Integer({qualifiedName: "STOKESX-ROW"}), off2: new abap.types.Integer({qualifiedName: "STOKESX-OFF2"}), off3: new abap.types.Integer({qualifiedName: "STOKESX-OFF3"}), col: new abap.types.Integer({qualifiedName: "STOKESX-COL"}), len1: new abap.types.Integer({qualifiedName: "STOKESX-LEN1"}), len2: new abap.types.Integer({qualifiedName: "STOKESX-LEN2"}), len3: new abap.types.Integer({qualifiedName: "STOKESX-LEN3"}), type: new abap.types.Character({qualifiedName: "STOKESX-TYPE"})}, "STOKESX"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "lcl_section_source_comments=>ty_stokesx");
    scan_util.set(await (new abap.Classes['CLAS-ZCL_AFF_ABAP_DOC_READER-LCL_SECTION_SOURCE_COMMENTS']()).constructor_());
    section_source.set(this.me.get().source);
    await scan_util.get().scan_code({source_to_be_scanned: section_source, tab_statements: scan_statements, tab_tokens: scan_tokens});
    this.blocks.set((await scan_util.get().identify_abap_doc_blocks_all({tab_statements: scan_statements, tab_tokens: scan_tokens, tab_source: section_source})));
  }
}
abap.Classes['ZCL_AFF_ABAP_DOC_READER'] = zcl_aff_abap_doc_reader;
zcl_aff_abap_doc_reader.cache = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "ZCL_AFF_ABAP_DOC_READER=>TY_CACHE-NAME"}), instance: new abap.types.ABAPObject({qualifiedName: "ZCL_AFF_ABAP_DOC_READER"})}, "zcl_aff_abap_doc_reader=>ty_cache"), {"withHeader":false,"type":"HASHED","isUnique":true,"keyFields":["NAME"]}, "");
export {zcl_aff_abap_doc_reader};
//# sourceMappingURL=zcl_aff_abap_doc_reader.clas.mjs.map