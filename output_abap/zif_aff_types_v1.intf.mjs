// zif_aff_types_v1.intf.abap
class zif_aff_types_v1 {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['ZIF_AFF_TYPES_V1'] = zif_aff_types_v1;
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_src = new abap.types.Structure({"standard": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_src"}), "key_user": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_src"}), "cloud_development": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_src"})});
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_src.get().standard.set('X');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_src.get().key_user.set('2');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_src.get().cloud_development.set('5');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version = new abap.types.Structure({"standard": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"}), "key_user": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"}), "cloud_development": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"})});
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version.get().standard.set(' ');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version.get().key_user.set('2');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version.get().cloud_development.set('5');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_cloud = new abap.types.Structure({"standard": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_cloud"}), "cloud_development": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_cloud"})});
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_cloud.get().standard.set(' ');
zif_aff_types_v1.zif_aff_types_v1$co_abap_language_version_cloud.get().cloud_development.set('5');
zif_aff_types_v1.zif_aff_types_v1$co_option = new abap.types.Structure({"equals": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "between": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "greater_than": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "contains_pattern": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "not_equal": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "not_between": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "not_contains_pattern": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "greater_equal": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "less_than": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"}), "less_equal": new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"})});
zif_aff_types_v1.zif_aff_types_v1$co_option.get().equals.set('EQ');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().between.set('BT');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().greater_than.set('GT');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().contains_pattern.set('CP');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().not_equal.set('NE');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().not_between.set('NB');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().not_contains_pattern.set('NP');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().greater_equal.set('GE');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().less_than.set('LT');
zif_aff_types_v1.zif_aff_types_v1$co_option.get().less_equal.set('LE');
zif_aff_types_v1.zif_aff_types_v1$co_sign = new abap.types.Structure({"include": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_sign"}), "exclude": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_sign"})});
zif_aff_types_v1.zif_aff_types_v1$co_sign.get().include.set('I');
zif_aff_types_v1.zif_aff_types_v1$co_sign.get().exclude.set('E');
zif_aff_types_v1.ty_format_version = new abap.types.String({qualifiedName: "ZIF_AFF_TYPES_V1=>TY_FORMAT_VERSION"});
zif_aff_types_v1.ty_abap_language_version = new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"});
zif_aff_types_v1.ty_abap_language_version_cloud = new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_cloud"});
zif_aff_types_v1.ty_abap_language_version_src = new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_src"});
zif_aff_types_v1.ty_description_60 = new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"});
zif_aff_types_v1.ty_description_100 = new abap.types.Character(100, {"qualifiedName":"zif_aff_types_v1=>ty_description_100"});
zif_aff_types_v1.ty_object_name_30 = new abap.types.Character(30, {"qualifiedName":"zif_aff_types_v1=>ty_object_name_30"});
zif_aff_types_v1.ty_original_language = new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"});
zif_aff_types_v1.ty_header_60_src = new abap.types.Structure({"description": new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"}), "original_language": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_src"})}, "zif_aff_types_v1=>ty_header_60_src");
zif_aff_types_v1.ty_header_60_cloud = new abap.types.Structure({"description": new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"}), "original_language": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version_cloud"})}, "zif_aff_types_v1=>ty_header_60_cloud");
zif_aff_types_v1.ty_header_60 = new abap.types.Structure({"description": new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"}), "original_language": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"})}, "zif_aff_types_v1=>ty_header_60");
zif_aff_types_v1.ty_header_60_no_abap_lv = new abap.types.Structure({"description": new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"}), "original_language": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"})}, "zif_aff_types_v1=>ty_header_60_no_abap_lv");
zif_aff_types_v1.ty_header_100 = new abap.types.Structure({"description": new abap.types.Character(100, {"qualifiedName":"zif_aff_types_v1=>ty_description_100"}), "original_language": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_original_language","conversionExit":"ISOLA"}), "abap_language_version": new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_abap_language_version"})}, "zif_aff_types_v1=>ty_header_100");
zif_aff_types_v1.ty_header_only_description = new abap.types.Structure({"description": new abap.types.Character(60, {"qualifiedName":"zif_aff_types_v1=>ty_description_60"})}, "zif_aff_types_v1=>ty_header_only_description");
zif_aff_types_v1.ty_option = new abap.types.Character(2, {"qualifiedName":"zif_aff_types_v1=>ty_option"});
zif_aff_types_v1.ty_sign = new abap.types.Character(1, {"qualifiedName":"zif_aff_types_v1=>ty_sign"});
export {zif_aff_types_v1};
//# sourceMappingURL=zif_aff_types_v1.intf.mjs.map