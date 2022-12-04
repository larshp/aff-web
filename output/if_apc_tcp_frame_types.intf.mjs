// if_apc_tcp_frame_types.intf.abap
const constant_1 = new abap.types.Integer().set(1);
const constant_2 = new abap.types.Integer().set(2);
const constant_3 = new abap.types.Integer().set(3);
class if_apc_tcp_frame_types {
  static INTERNAL_TYPE = 'INTF';
  static IMPLEMENTED_INTERFACES = [];
}
abap.Classes['IF_APC_TCP_FRAME_TYPES'] = if_apc_tcp_frame_types;
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_fixed_length = new abap.types.Integer({qualifiedName: "I"});
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_fixed_length.set(1);
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_terminator = new abap.types.Integer({qualifiedName: "I"});
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_terminator.set(2);
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_length_field = new abap.types.Integer({qualifiedName: "I"});
if_apc_tcp_frame_types.if_apc_tcp_frame_types$co_frame_type_length_field.set(3);
export {if_apc_tcp_frame_types};
//# sourceMappingURL=if_apc_tcp_frame_types.intf.mjs.map