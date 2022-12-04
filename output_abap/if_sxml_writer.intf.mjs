// if_sxml_writer.intf.abap
class if_sxml_writer {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_SXML_WRITER'] = if_sxml_writer;
if_sxml_writer.if_sxml_writer$co_opt_normalizing = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_normalizing.set(1);
if_sxml_writer.if_sxml_writer$co_opt_no_empty = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_no_empty.set(2);
if_sxml_writer.if_sxml_writer$co_opt_ignore_conv_errros = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_ignore_conv_errros.set(3);
if_sxml_writer.if_sxml_writer$co_opt_linebreaks = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_linebreaks.set(4);
if_sxml_writer.if_sxml_writer$co_opt_indent = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_indent.set(5);
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_reject = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_reject.set(6);
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_replace = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_replace.set(7);
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_replace_by = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_illegal_char_replace_by.set(8);
if_sxml_writer.if_sxml_writer$co_opt_base64_no_lf = new abap.types.Integer({qualifiedName: "I"});
if_sxml_writer.if_sxml_writer$co_opt_base64_no_lf.set(9);
export {if_sxml_writer};
//# sourceMappingURL=if_sxml_writer.intf.mjs.map