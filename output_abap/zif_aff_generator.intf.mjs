// zif_aff_generator.intf.abap
class zif_aff_generator {
  static INTERNAL_TYPE = 'INTF';
  static ATTRIBUTES = {};
  static METHODS = {"GENERATE_TYPE": {"visibility": "U", "parameters": {"RESULT": {"type": () => {return abap.types.TableFactory.construct(new abap.types.String({qualifiedName: "STRING"}), {"withHeader":false,"keyType":"DEFAULT","primaryKey":{"isUnique":false,"type":"STANDARD","keyFields":[],"name":"primary_key"},"secondary":[]}, "STRING_TABLE");}, "is_optional": " "}, "DATA": {"type": () => {return new abap.types.Character(4);}, "is_optional": " "}}},
  "GET_LOG": {"visibility": "U", "parameters": {"LOG": {"type": () => {return new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG", RTTIName: "\\INTERFACE=ZIF_AFF_LOG"});}, "is_optional": " "}}}};
}
abap.Classes['ZIF_AFF_GENERATOR'] = zif_aff_generator;
export {zif_aff_generator};
//# sourceMappingURL=zif_aff_generator.intf.mjs.map