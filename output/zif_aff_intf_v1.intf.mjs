// zif_aff_intf_v1.intf.abap
const constant_2 = new abap.types.Integer().set(2);
class zif_aff_intf_v1 {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['ZIF_AFF_INTF_V1'] = zif_aff_intf_v1;
zif_aff_intf_v1.zif_aff_intf_v1$co_category = new abap.types.Structure({general: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), classic_badi: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), business_static_components: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), business_instance_components: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), db_procedure_proxy: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), web_dynpro_runtime: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"}), enterprise_service: new abap.types.Numc({length: 2, qualifiedName: "zif_aff_intf_v1=>ty_category"})});
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().general.set('00');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().classic_badi.set('01');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().business_static_components.set('51');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().business_instance_components.set('52');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().db_procedure_proxy.set('65');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().web_dynpro_runtime.set('80');
zif_aff_intf_v1.zif_aff_intf_v1$co_category.get().enterprise_service.set('90');
export {zif_aff_intf_v1};
//# sourceMappingURL=zif_aff_intf_v1.intf.mjs.map