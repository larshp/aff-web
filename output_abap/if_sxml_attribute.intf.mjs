// if_sxml_attribute.intf.abap
class if_sxml_attribute {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_SXML_ATTRIBUTE'] = if_sxml_attribute;
if_sxml_attribute.attributes = new abap.types.Table(new abap.types.ABAPObject({qualifiedName: "IF_SXML_ATTRIBUTE"}), {"withHeader":false,"primaryKey":{"name":"primary_key","type":"STANDARD","isUnique":false,"keyFields":[]},"secondary":[]}, "if_sxml_attribute=>attributes");
export {if_sxml_attribute};
//# sourceMappingURL=if_sxml_attribute.intf.mjs.map