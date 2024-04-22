/* eslint-disable import/newline-after-import */
import runtime from "@abaplint/runtime";
globalThis.abap = new runtime.ABAP();
await import("./%23ui2%23cl_json.clas.mjs");
await import("./00.msag.mjs");
await import("./abap.type.mjs");
await import("./abap_boolean.dtel.mjs");
await import("./abap_callstack.ttyp.mjs");
await import("./abap_callstack_line.tabl.mjs");
await import("./abap_encod.dtel.mjs");
await import("./abap_language_version.dtel.mjs");
await import("./abap_sortorder.tabl.mjs");
await import("./abap_sortorder_tab.ttyp.mjs");
await import("./balmnr.dtel.mjs");
await import("./balognr.dtel.mjs");
await import("./bapi_fld.dtel.mjs");
await import("./bapi_line.dtel.mjs");
await import("./bapi_msg.dtel.mjs");
await import("./bapi_mtype.dtel.mjs");
await import("./bapi_param.dtel.mjs");
await import("./bapi_rcode.dtel.mjs");
await import("./bapilogsys.dtel.mjs");
await import("./bapioption.dtel.mjs");
await import("./bapiret2.tabl.mjs");
await import("./bapirettab.ttyp.mjs");
await import("./bapireturn.tabl.mjs");
await import("./bapisign.dtel.mjs");
await import("./boole_d.dtel.mjs");
await import("./boolean.dtel.mjs");
await import("./char1.dtel.mjs");
await import("./char10.dtel.mjs");
await import("./char120.dtel.mjs");
await import("./char15.dtel.mjs");
await import("./char2.dtel.mjs");
await import("./char20.dtel.mjs");
await import("./char25.dtel.mjs");
await import("./char255.dtel.mjs");
await import("./char3.dtel.mjs");
await import("./char30.dtel.mjs");
await import("./char32.dtel.mjs");
await import("./char4.dtel.mjs");
await import("./char6.dtel.mjs");
await import("./char70.dtel.mjs");
await import("./char8.dtel.mjs");
await import("./char80.dtel.mjs");
await import("./cl_abap_char_utilities.clas.mjs");
await import("./cl_abap_classdescr.clas.mjs");
await import("./cl_abap_codepage.clas.mjs");
await import("./cl_abap_complexdescr.clas.mjs");
await import("./cl_abap_conv_codepage.clas.mjs");
await import("./cl_abap_conv_in_ce.clas.mjs");
await import("./cl_abap_conv_out_ce.clas.mjs");
await import("./cl_abap_datadescr.clas.mjs");
await import("./cl_abap_datfm.clas.mjs");
await import("./cl_abap_dyn_prg.clas.mjs");
await import("./cl_abap_elemdescr.clas.mjs");
await import("./cl_abap_enumdescr.clas.mjs");
await import("./cl_abap_exceptional_values.clas.mjs");
await import("./cl_abap_format.clas.mjs");
await import("./cl_abap_gzip.clas.mjs");
await import("./cl_abap_hmac.clas.mjs");
await import("./cl_abap_intfdescr.clas.mjs");
await import("./cl_abap_matcher.clas.mjs");
await import("./cl_abap_math.clas.mjs");
await import("./cl_abap_message_digest.clas.mjs");
await import("./cl_abap_objectdescr.clas.mjs");
await import("./cl_abap_random.clas.mjs");
await import("./cl_abap_random_int.clas.mjs");
await import("./cl_abap_refdescr.clas.mjs");
await import("./cl_abap_regex.clas.mjs");
await import("./cl_abap_structdescr.clas.mjs");
await import("./cl_abap_tabledescr.clas.mjs");
await import("./cl_abap_timefm.clas.mjs");
await import("./cl_abap_tstmp.clas.mjs");
await import("./cl_abap_typedescr.clas.mjs");
await import("./cl_abap_unit_assert.clas.mjs");
await import("./cl_abap_weak_reference.clas.mjs");
await import("./cl_abap_zip.clas.mjs");
await import("./cl_apc_tcp_client_manager.clas.mjs");
await import("./cl_apc_wsp_ext_stateless_base.clas.mjs");
await import("./cl_bcs.clas.mjs");
await import("./cl_bcs_convert.clas.mjs");
await import("./cl_cam_address_bcs.clas.mjs");
await import("./cl_demo_output.clas.mjs");
await import("./cl_document_bcs.clas.mjs");
await import("./cl_function_test_environment.clas.mjs");
await import("./cl_gdt_conversion.clas.mjs");
await import("./cl_http_client.clas.mjs");
await import("./cl_http_entity.clas.mjs");
await import("./cl_http_server.clas.mjs");
await import("./cl_http_utility.clas.mjs");
await import("./cl_i18n_languages.clas.mjs");
await import("./cl_ixml.clas.mjs");
await import("./cl_message_helper.clas.mjs");
await import("./cl_mime_repository_api.clas.mjs");
await import("./cl_numberrange_runtime.clas.mjs");
await import("./cl_o2_api_xsltdesc.clas.mjs");
await import("./cl_oa2c_config_writer_api.clas.mjs");
await import("./cl_oauth2_client.clas.mjs");
await import("./cl_oo_classname_service.clas.mjs");
await import("./cl_oo_factory.clas.mjs");
await import("./cl_osql_test_environment.clas.mjs");
await import("./cl_run.clas.mjs");
await import("./cl_sec_sxml_writer.clas.mjs");
await import("./cl_shm_area.clas.mjs");
await import("./cl_shm_service.clas.mjs");
await import("./cl_sql_result_set.clas.mjs");
await import("./cl_sql_statement.clas.mjs");
await import("./cl_sxml_string_reader.clas.mjs");
await import("./cl_sxml_string_writer.clas.mjs");
await import("./cl_system_uuid.clas.mjs");
await import("./cl_web_http_utility.clas.mjs");
await import("./cx_abap_datfm.clas.mjs");
await import("./cx_abap_message_digest.clas.mjs");
await import("./cx_abap_not_a_table.clas.mjs");
await import("./cx_abap_not_in_package.clas.mjs");
await import("./cx_abap_not_in_whitelist.clas.mjs");
await import("./cx_abap_random.clas.mjs");
await import("./cx_abap_timefm_invalid.clas.mjs");
await import("./cx_apc_error.clas.mjs");
await import("./cx_bcs.clas.mjs");
await import("./cx_dynamic_check.clas.mjs");
await import("./cx_ftd_parameter_not_found.clas.mjs");
await import("./cx_gdt_conversion.clas.mjs");
await import("./cx_no_check.clas.mjs");
await import("./cx_o2_xslt_error.clas.mjs");
await import("./cx_oa2c.clas.mjs");
await import("./cx_oa2c_at_not_available.clas.mjs");
await import("./cx_oa2c_config_not_found.clas.mjs");
await import("./cx_oo_clif_not_exists.clas.mjs");
await import("./cx_parameter_invalid.clas.mjs");
await import("./cx_parameter_invalid_range.clas.mjs");
await import("./cx_parameter_invalid_type.clas.mjs");
await import("./cx_root.clas.mjs");
await import("./cx_shm_already_detached.clas.mjs");
await import("./cx_shm_attach_error.clas.mjs");
await import("./cx_shm_build_failed.clas.mjs");
await import("./cx_shm_change_lock_active.clas.mjs");
await import("./cx_shm_completion_error.clas.mjs");
await import("./cx_shm_detach_error.clas.mjs");
await import("./cx_shm_error.clas.mjs");
await import("./cx_shm_event_execution_failed.clas.mjs");
await import("./cx_shm_exclusive_lock_active.clas.mjs");
await import("./cx_shm_general_error.clas.mjs");
await import("./cx_shm_inconsistent.clas.mjs");
await import("./cx_shm_initial_reference.clas.mjs");
await import("./cx_shm_no_active_version.clas.mjs");
await import("./cx_shm_parameter_error.clas.mjs");
await import("./cx_shm_pending_lock_removed.clas.mjs");
await import("./cx_shm_read_lock_active.clas.mjs");
await import("./cx_shm_secondary_commit.clas.mjs");
await import("./cx_shm_version_limit_exceeded.clas.mjs");
await import("./cx_shm_wrong_handle.clas.mjs");
await import("./cx_shma_dynamic.clas.mjs");
await import("./cx_shma_inconsistent.clas.mjs");
await import("./cx_shma_not_configured.clas.mjs");
await import("./cx_sql_exception.clas.mjs");
await import("./cx_st_error.clas.mjs");
await import("./cx_static_check.clas.mjs");
await import("./cx_sxml_error.clas.mjs");
await import("./cx_sxml_illegal_argument_error.clas.mjs");
await import("./cx_sxml_name_error.clas.mjs");
await import("./cx_sxml_parse_error.clas.mjs");
await import("./cx_sxml_state_error.clas.mjs");
await import("./cx_sy_arithmetic_error.clas.mjs");
await import("./cx_sy_arithmetic_overflow.clas.mjs");
await import("./cx_sy_buffer_overflow.clas.mjs");
await import("./cx_sy_codepage_converter_init.clas.mjs");
await import("./cx_sy_compression_error.clas.mjs");
await import("./cx_sy_conversion_codepage.clas.mjs");
await import("./cx_sy_conversion_data_loss.clas.mjs");
await import("./cx_sy_conversion_error.clas.mjs");
await import("./cx_sy_conversion_no_number.clas.mjs");
await import("./cx_sy_conversion_overflow.clas.mjs");
await import("./cx_sy_create_data_error.clas.mjs");
await import("./cx_sy_create_object_error.clas.mjs");
await import("./cx_sy_data_access_error.clas.mjs");
await import("./cx_sy_duplicate_key.clas.mjs");
await import("./cx_sy_dyn_call_error.clas.mjs");
await import("./cx_sy_dyn_call_illegal_class.clas.mjs");
await import("./cx_sy_dyn_call_illegal_form.clas.mjs");
await import("./cx_sy_dyn_call_illegal_func.clas.mjs");
await import("./cx_sy_dyn_call_illegal_method.clas.mjs");
await import("./cx_sy_dyn_call_param_not_found.clas.mjs");
await import("./cx_sy_dyn_call_parameter_error.clas.mjs");
await import("./cx_sy_dynamic_osql_error.clas.mjs");
await import("./cx_sy_dynamic_osql_semantics.clas.mjs");
await import("./cx_sy_itab_duplicate_key.clas.mjs");
await import("./cx_sy_itab_error.clas.mjs");
await import("./cx_sy_itab_line_not_found.clas.mjs");
await import("./cx_sy_message_illegal_text.clas.mjs");
await import("./cx_sy_move_cast_error.clas.mjs");
await import("./cx_sy_open_sql_error.clas.mjs");
await import("./cx_sy_range_out_of_bounds.clas.mjs");
await import("./cx_sy_ref_is_initial.clas.mjs");
await import("./cx_sy_sql_error.clas.mjs");
await import("./cx_sy_strg_par_val.clas.mjs");
await import("./cx_sy_struct_attributes.clas.mjs");
await import("./cx_sy_struct_comp_name.clas.mjs");
await import("./cx_sy_struct_comp_type.clas.mjs");
await import("./cx_sy_struct_creation.clas.mjs");
await import("./cx_sy_type_creation.clas.mjs");
await import("./cx_sy_zerodivide.clas.mjs");
await import("./cx_transformation_error.clas.mjs");
await import("./cx_uuid_error.clas.mjs");
await import("./cx_xslt_exception.clas.mjs");
await import("./cx_xslt_format_error.clas.mjs");
await import("./cx_xslt_runtime_error.clas.mjs");
await import("./cx_xslt_serialization_error.clas.mjs");
await import("./cx_xslt_system_error.clas.mjs");
await import("./dats.dtel.mjs");
await import("./ddfields.ttyp.mjs");
await import("./ddoption.dtel.mjs");
await import("./ddsign.dtel.mjs");
await import("./devclass.dtel.mjs");
await import("./dfies.tabl.mjs");
await import("./doku_obj.dtel.mjs");
await import("./dynprofld.dtel.mjs");
await import("./flag.dtel.mjs");
await import("./funcname.dtel.mjs");
await import("./guid.dtel.mjs");
await import("./icon.type.mjs");
await import("./icon_d.dtel.mjs");
await import("./if_abap_channel_types.intf.mjs");
await import("./if_abap_conv_in.intf.mjs");
await import("./if_abap_conv_out.intf.mjs");
await import("./if_abap_unit_constant.intf.mjs");
await import("./if_amdp_marker_hdb.intf.mjs");
await import("./if_apc_tcp_frame_types.intf.mjs");
await import("./if_apc_wsp_binding_manager.intf.mjs");
await import("./if_apc_wsp_client.intf.mjs");
await import("./if_apc_wsp_event_handler.intf.mjs");
await import("./if_apc_wsp_extension.intf.mjs");
await import("./if_apc_wsp_initial_request.intf.mjs");
await import("./if_apc_wsp_message.intf.mjs");
await import("./if_apc_wsp_message_manager.intf.mjs");
await import("./if_apc_wsp_server_context.intf.mjs");
await import("./if_aunit_constants.intf.mjs");
await import("./if_document_bcs.intf.mjs");
await import("./if_ftd_input_arguments.intf.mjs");
await import("./if_ftd_input_config_setter.intf.mjs");
await import("./if_ftd_invocation_answer.intf.mjs");
await import("./if_ftd_invocation_result.intf.mjs");
await import("./if_ftd_output_config_setter.intf.mjs");
await import("./if_ftd_output_configuration.intf.mjs");
await import("./if_function_test_environment.intf.mjs");
await import("./if_function_testdouble.intf.mjs");
await import("./if_http_client.intf.mjs");
await import("./if_http_entity.intf.mjs");
await import("./if_http_extension.intf.mjs");
await import("./if_http_request.intf.mjs");
await import("./if_http_response.intf.mjs");
await import("./if_http_server.intf.mjs");
await import("./if_http_utility.intf.mjs");
await import("./if_ixml.intf.mjs");
await import("./if_ixml_attribute.intf.mjs");
await import("./if_ixml_document.intf.mjs");
await import("./if_ixml_element.intf.mjs");
await import("./if_ixml_encoding.intf.mjs");
await import("./if_ixml_istream.intf.mjs");
await import("./if_ixml_named_node_map.intf.mjs");
await import("./if_ixml_node.intf.mjs");
await import("./if_ixml_node_collection.intf.mjs");
await import("./if_ixml_node_filter.intf.mjs");
await import("./if_ixml_node_iterator.intf.mjs");
await import("./if_ixml_node_list.intf.mjs");
await import("./if_ixml_ostream.intf.mjs");
await import("./if_ixml_parse_error.intf.mjs");
await import("./if_ixml_parser.intf.mjs");
await import("./if_ixml_renderer.intf.mjs");
await import("./if_ixml_stream_factory.intf.mjs");
await import("./if_ixml_unknown.intf.mjs");
await import("./if_message.intf.mjs");
await import("./if_mr_api.intf.mjs");
await import("./if_oauth2_client.intf.mjs");
await import("./if_oo_adt_classrun.intf.mjs");
await import("./if_oo_adt_classrun_out.intf.mjs");
await import("./if_oo_clif_source.intf.mjs");
await import("./if_osql_test_environment.intf.mjs");
await import("./if_recipient_bcs.intf.mjs");
await import("./if_sender_bcs.intf.mjs");
await import("./if_serializable_object.intf.mjs");
await import("./if_shm_build_instance.intf.mjs");
await import("./if_shm_trace.intf.mjs");
await import("./if_sxml.intf.mjs");
await import("./if_sxml_attribute.intf.mjs");
await import("./if_sxml_close_element.intf.mjs");
await import("./if_sxml_named.intf.mjs");
await import("./if_sxml_node.intf.mjs");
await import("./if_sxml_open_element.intf.mjs");
await import("./if_sxml_reader.intf.mjs");
await import("./if_sxml_value.intf.mjs");
await import("./if_sxml_value_node.intf.mjs");
await import("./if_sxml_writer.intf.mjs");
await import("./if_sxmlp_factory.intf.mjs");
await import("./if_sxmlp_list.intf.mjs");
await import("./if_sxmlp_part.intf.mjs");
await import("./if_sxmlp_simple.intf.mjs");
await import("./if_system_uuid_rfc4122_static.intf.mjs");
await import("./if_system_uuid_static.intf.mjs");
await import("./if_t100_dyn_msg.intf.mjs");
await import("./if_t100_message.intf.mjs");
await import("./ihttpnvp.tabl.mjs");
await import("./int1.dtel.mjs");
await import("./int2.dtel.mjs");
await import("./int4.dtel.mjs");
await import("./kernel_authority_check.clas.mjs");
await import("./kernel_call.clas.mjs");
await import("./kernel_call_transformation.clas.mjs");
await import("./kernel_create_data_handle.clas.mjs");
await import("./kernel_cx_assert.clas.mjs");
await import("./kernel_fugr_test.clas.mjs");
await import("./kernel_internal_name.clas.mjs");
await import("./kernel_ixml_json_to_data.clas.mjs");
await import("./kernel_ixml_xml_to_data.clas.mjs");
await import("./kernel_json_to_ixml.clas.mjs");
await import("./kernel_lock.clas.mjs");
await import("./kernel_numberrange.clas.mjs");
await import("./kernel_push_channels.clas.mjs");
await import("./kernel_scan_abap_source.clas.mjs");
await import("./kernel_unit_runner.clas.mjs");
await import("./laiso.dtel.mjs");
await import("./land1.dtel.mjs");
await import("./langu.dtel.mjs");
await import("./mandt.dtel.mjs");
await import("./match_result.tabl.mjs");
await import("./match_result_tab.ttyp.mjs");
await import("./matnr.dtel.mjs");
await import("./meins.dtel.mjs");
await import("./menge_d.dtel.mjs");
await import("./msehi.dtel.mjs");
await import("./number_get_next.fugr.number_get_next.mjs");
await import("./numc4.dtel.mjs");
await import("./oa2c_configuration.dtel.mjs");
await import("./oa2c_granttype.dtel.mjs");
await import("./oa2c_profile.dtel.mjs");
await import("./openabap.fugr.call_v1_ping.mjs");
await import("./openabap.fugr.conversion_exit_alpha_input.mjs");
await import("./openabap.fugr.conversion_exit_alpha_output.mjs");
await import("./openabap.fugr.conversion_exit_isola_input.mjs");
await import("./openabap.fugr.conversion_exit_isola_output.mjs");
await import("./openabap.fugr.convert_itf_to_stream_text.mjs");
await import("./openabap.fugr.docu_get.mjs");
await import("./openabap.fugr.function_exists.mjs");
await import("./openabap.fugr.generate_sec_random.mjs");
await import("./openabap.fugr.get_system_timezone.mjs");
await import("./openabap.fugr.system_callstack.mjs");
await import("./openabap.fugr.system_installed_languages.mjs");
await import("./openabap.fugr.text_split.mjs");
await import("./openabap.fugr.unit_conversion_simple.mjs");
await import("./progname.dtel.mjs");
await import("./reposrc.tabl.mjs");
await import("./rfcdest.dtel.mjs");
await import("./scrtext_l.dtel.mjs");
await import("./scrtext_m.dtel.mjs");
await import("./scrtext_s.dtel.mjs");
await import("./scx_attrname.dtel.mjs");
await import("./scx_t100key.tabl.mjs");
await import("./sdok_class.dtel.mjs");
await import("./sdok_docid.dtel.mjs");
await import("./sdokobject.tabl.mjs");
await import("./seoclsname.dtel.mjs");
await import("./shm_affect_server.dtel.mjs");
await import("./shm_area_name.dtel.mjs");
await import("./shm_attach_mode.dtel.mjs");
await import("./shm_auto_build_class_name.dtel.mjs");
await import("./shm_client.dtel.mjs");
await import("./shm_constr_invocation_mode.dtel.mjs");
await import("./shm_inst_info.tabl.mjs");
await import("./shm_inst_infos.ttyp.mjs");
await import("./shm_inst_name.dtel.mjs");
await import("./shm_life_context.dtel.mjs");
await import("./shm_properties.tabl.mjs");
await import("./shm_rc.dtel.mjs");
await import("./shma_attributes.tabl.mjs");
await import("./shma_client.dtel.mjs");
await import("./shmm_trc_variant_name.dtel.mjs");
await import("./skwf_io.tabl.mjs");
await import("./skwf_ioty.dtel.mjs");
await import("./so_raw255.dtel.mjs");
await import("./so_text255.dtel.mjs");
await import("./soli.tabl.mjs");
await import("./soli_tab.ttyp.mjs");
await import("./solix.tabl.mjs");
await import("./solix_tab.ttyp.mjs");
await import("./sotr_conc.dtel.mjs");
await import("./spras.dtel.mjs");
await import("./ssfapplssl.dtel.mjs");
await import("./sstmnt.tabl.mjs");
await import("./sstmnt_tab.ttyp.mjs");
await import("./sstruc.tabl.mjs");
await import("./sstruc_tab.ttyp.mjs");
await import("./stokes.tabl.mjs");
await import("./stokes_tab.ttyp.mjs");
await import("./stokesx.tabl.mjs");
await import("./string_table.ttyp.mjs");
await import("./stringtab.ttyp.mjs");
await import("./submatch_result.tabl.mjs");
await import("./submatch_result_tab.ttyp.mjs");
await import("./sxco_fm_name.dtel.mjs");
await import("./sxco_transport.dtel.mjs");
await import("./sydate.dtel.mjs");
await import("./symsg.tabl.mjs");
await import("./symsgid.dtel.mjs");
await import("./symsgno.dtel.mjs");
await import("./symsgty.dtel.mjs");
await import("./symsgv.dtel.mjs");
await import("./syrepid.dtel.mjs");
await import("./syst_host.dtel.mjs");
await import("./sysubrc.dtel.mjs");
await import("./sysuuid_c22.dtel.mjs");
await import("./sysuuid_c32.dtel.mjs");
await import("./sysuuid_c36.dtel.mjs");
await import("./sysuuid_x16.dtel.mjs");
await import("./syuname.dtel.mjs");
await import("./t000.tabl.mjs");
await import("./t100.tabl.mjs");
await import("./tabfdpos.dtel.mjs");
await import("./tabname.dtel.mjs");
await import("./tadir.tabl.mjs");
await import("./tdevc.tabl.mjs");
await import("./tdline.dtel.mjs");
await import("./text20.dtel.mjs");
await import("./text200.dtel.mjs");
await import("./text255.dtel.mjs");
await import("./text30.dtel.mjs");
await import("./text80.dtel.mjs");
await import("./textpool.tabl.mjs");
await import("./tfdir.tabl.mjs");
await import("./tihttpnvp.ttyp.mjs");
await import("./timestamp.dtel.mjs");
await import("./timestampl.dtel.mjs");
await import("./timezone.dtel.mjs");
await import("./timn.dtel.mjs");
await import("./tline.tabl.mjs");
await import("./tline_tab.ttyp.mjs");
await import("./trfunction.dtel.mjs");
await import("./trkorr.dtel.mjs");
await import("./tzntstmpl.dtel.mjs");
await import("./tzntstmps.dtel.mjs");
await import("./uname.dtel.mjs");
await import("./usnam.dtel.mjs");
await import("./w3mime.tabl.mjs");
await import("./waers.dtel.mjs");
await import("./waers_curc.dtel.mjs");
await import("./wwwdatatab.tabl.mjs");
await import("./wwwparams.tabl.mjs");
await import("./xfeld.dtel.mjs");
await import("./xsdboolean.dtel.mjs");
await import("./xsddatetime_z.dtel.mjs");
await import("./xsdtime_t.dtel.mjs");
await import("./zcl_aff_abap_doc_parser.clas.mjs");
await import("./zcl_aff_abap_doc_reader.clas.mjs");
await import("./zcl_aff_generator.clas.mjs");
await import("./zcl_aff_log.clas.mjs");
await import("./zcl_aff_test_types.clas.mjs");
await import("./zcl_aff_tools_unit_test_helper.clas.mjs");
await import("./zcl_aff_writer.clas.mjs");
await import("./zcl_aff_writer_json_schema.clas.mjs");
await import("./zcl_aff_writer_xslt.clas.mjs");
await import("./zcx_aff_tools.clas.mjs");
await import("./zif_aff_generator.intf.mjs");
await import("./zif_aff_intf_v1.intf.mjs");
await import("./zif_aff_log.intf.mjs");
await import("./zif_aff_oo_types_v1.intf.mjs");
await import("./zif_aff_types_v1.intf.mjs");
await import("./zif_aff_writer.intf.mjs");
await import("./zw3mi.fugr.wwwdata_export.mjs");
await import("./zw3mi.fugr.wwwdata_import.mjs");
await import("./zw3mi.fugr.wwwparams_insert.mjs");
await import("./zw3mi.fugr.wwwparams_read.mjs");

export async function initializeABAP() {
  const sqlite = [];
  sqlite.push(`CREATE TABLE 't000' ('mandt' NCHAR(3) COLLATE RTRIM, 'cccategory' NCHAR(1) COLLATE RTRIM, 'ccnocliind' NCHAR(1) COLLATE RTRIM, 'mtext' NCHAR(25) COLLATE RTRIM, PRIMARY KEY('mandt'));`);
  sqlite.push(`CREATE TABLE 't100' ('sprsl' NCHAR(1) COLLATE RTRIM, 'arbgb' NCHAR(20) COLLATE RTRIM, 'msgnr' NCHAR(3) COLLATE RTRIM, 'text' NCHAR(73) COLLATE RTRIM, PRIMARY KEY('sprsl','arbgb','msgnr'));`);
  sqlite.push(`CREATE TABLE 'tadir' ('pgmid' NCHAR(4) COLLATE RTRIM, 'object' NCHAR(4) COLLATE RTRIM, 'obj_name' NCHAR(40) COLLATE RTRIM, 'devclass' NCHAR(30) COLLATE RTRIM, 'korrnum' NCHAR(10) COLLATE RTRIM, 'delflag' NCHAR(1) COLLATE RTRIM, 'genflag' NCHAR(1) COLLATE RTRIM, 'srcsystem' NCHAR(5) COLLATE RTRIM, 'edtflag' NCHAR(1) COLLATE RTRIM, 'masterlang' NCHAR(1) COLLATE RTRIM, PRIMARY KEY('pgmid','object','obj_name'));`);
  sqlite.push(`CREATE TABLE 'tdevc' ('devclass' NCHAR(30) COLLATE RTRIM, 'dlvunit' NCHAR(30) COLLATE RTRIM, 'component' NCHAR(20) COLLATE RTRIM, 'parentcl' NCHAR(30) COLLATE RTRIM, 'as4user' NCHAR(12) COLLATE RTRIM, 'created_by' NCHAR(12) COLLATE RTRIM, 'created_on' NCHAR(8), 'ctext' NCHAR(60) COLLATE RTRIM, 'changed_by' NCHAR(12) COLLATE RTRIM, 'changed_on' NCHAR(8), 'namespace' NCHAR(10) COLLATE RTRIM, PRIMARY KEY('devclass'));`);
  sqlite.push(`CREATE TABLE 'tfdir' ('funcname' NCHAR(30) COLLATE RTRIM, PRIMARY KEY('funcname'));`);
  sqlite.push(`CREATE TABLE 'reposrc' ('progname' NCHAR(40) COLLATE RTRIM, 'data' TEXT COLLATE RTRIM, 'unam' NCHAR(12) COLLATE RTRIM, 'udat' NCHAR(8), 'utime' NCHAR(6), PRIMARY KEY('progname'));`);
  const hdb = `todo`;
  const pg = [];
  pg.push(`CREATE TABLE "t000" ("mandt" NCHAR(3), "cccategory" NCHAR(1), "ccnocliind" NCHAR(1), "mtext" NCHAR(25), PRIMARY KEY("mandt"));`);
  pg.push(`CREATE TABLE "t100" ("sprsl" NCHAR(1), "arbgb" NCHAR(20), "msgnr" NCHAR(3), "text" NCHAR(73), PRIMARY KEY("sprsl","arbgb","msgnr"));`);
  pg.push(`CREATE TABLE "tadir" ("pgmid" NCHAR(4), "object" NCHAR(4), "obj_name" NCHAR(40), "devclass" NCHAR(30), "korrnum" NCHAR(10), "delflag" NCHAR(1), "genflag" NCHAR(1), "srcsystem" NCHAR(5), "edtflag" NCHAR(1), "masterlang" NCHAR(1), PRIMARY KEY("pgmid","object","obj_name"));`);
  pg.push(`CREATE TABLE "tdevc" ("devclass" NCHAR(30), "dlvunit" NCHAR(30), "component" NCHAR(20), "parentcl" NCHAR(30), "as4user" NCHAR(12), "created_by" NCHAR(12), "created_on" NCHAR(8), "ctext" NCHAR(60), "changed_by" NCHAR(12), "changed_on" NCHAR(8), "namespace" NCHAR(10), PRIMARY KEY("devclass"));`);
  pg.push(`CREATE TABLE "tfdir" ("funcname" NCHAR(30), PRIMARY KEY("funcname"));`);
  pg.push(`CREATE TABLE "reposrc" ("progname" NCHAR(40), "data" TEXT, "unam" NCHAR(12), "udat" NCHAR(8), "utime" NCHAR(6), PRIMARY KEY("progname"));`);
  const snowflake = [];
  snowflake.push(`CREATE TABLE "t000" ("mandt" NCHAR(3) COLLATE 'rtrim', "cccategory" NCHAR(1) COLLATE 'rtrim', "ccnocliind" NCHAR(1) COLLATE 'rtrim', "mtext" NCHAR(25) COLLATE 'rtrim', PRIMARY KEY("mandt"));`);
  snowflake.push(`CREATE TABLE "t100" ("sprsl" NCHAR(1) COLLATE 'rtrim', "arbgb" NCHAR(20) COLLATE 'rtrim', "msgnr" NCHAR(3) COLLATE 'rtrim', "text" NCHAR(73) COLLATE 'rtrim', PRIMARY KEY("sprsl","arbgb","msgnr"));`);
  snowflake.push(`CREATE TABLE "tadir" ("pgmid" NCHAR(4) COLLATE 'rtrim', "object" NCHAR(4) COLLATE 'rtrim', "obj_name" NCHAR(40) COLLATE 'rtrim', "devclass" NCHAR(30) COLLATE 'rtrim', "korrnum" NCHAR(10) COLLATE 'rtrim', "delflag" NCHAR(1) COLLATE 'rtrim', "genflag" NCHAR(1) COLLATE 'rtrim', "srcsystem" NCHAR(5) COLLATE 'rtrim', "edtflag" NCHAR(1) COLLATE 'rtrim', "masterlang" NCHAR(1) COLLATE 'rtrim', PRIMARY KEY("pgmid","object","obj_name"));`);
  snowflake.push(`CREATE TABLE "tdevc" ("devclass" NCHAR(30) COLLATE 'rtrim', "dlvunit" NCHAR(30) COLLATE 'rtrim', "component" NCHAR(20) COLLATE 'rtrim', "parentcl" NCHAR(30) COLLATE 'rtrim', "as4user" NCHAR(12) COLLATE 'rtrim', "created_by" NCHAR(12) COLLATE 'rtrim', "created_on" NCHAR(8), "ctext" NCHAR(60) COLLATE 'rtrim', "changed_by" NCHAR(12) COLLATE 'rtrim', "changed_on" NCHAR(8), "namespace" NCHAR(10) COLLATE 'rtrim', PRIMARY KEY("devclass"));`);
  snowflake.push(`CREATE TABLE "tfdir" ("funcname" NCHAR(30) COLLATE 'rtrim', PRIMARY KEY("funcname"));`);
  snowflake.push(`CREATE TABLE "reposrc" ("progname" NCHAR(40) COLLATE 'rtrim', "data" TEXT, "unam" NCHAR(12) COLLATE 'rtrim', "udat" NCHAR(8), "utime" NCHAR(6), PRIMARY KEY("progname"));`);
  const schemas = {sqlite, hdb, pg, snowflake};

  const insert = [];
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_O2_API_XSLTDESC                      ', 'CLASS cl_o2_api_xsltdesc DEFINITION PUBLIC.
  PUBLIC SECTION.
    TYPES: BEGIN OF ty_error,
             text TYPE string,
           END OF ty_error.
    TYPES ty_error_tab TYPE STANDARD TABLE OF ty_error WITH DEFAULT KEY.
    CLASS-METHODS check_transformation_source
      IMPORTING
        i_name       TYPE string
        i_source     TYPE o2pageline_table
      EXPORTING
        e_error_list TYPE ty_error_tab.
ENDCLASS.

CLASS cl_o2_api_xsltdesc IMPLEMENTATION.
  METHOD check_transformation_source.
    ASSERT 1 = ''todo''.
  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_OO_CLASSNAME_SERVICE                 ', 'CLASS cl_oo_classname_service DEFINITION PUBLIC.
  PUBLIC SECTION.
    TYPES: BEGIN OF ty_rowrow,
             clsname TYPE string,
             cpdname TYPE string,
           END OF ty_rowrow.
    TYPES: BEGIN OF ty_row,
             cpdkey TYPE ty_rowrow,
           END OF ty_row.
    TYPES ty_result TYPE STANDARD TABLE OF ty_row WITH DEFAULT KEY.
    CLASS-METHODS get_all_method_includes
      IMPORTING
        clsname       TYPE string
      RETURNING
        VALUE(result) TYPE ty_result.
ENDCLASS.

CLASS cl_oo_classname_service IMPLEMENTATION.
  METHOD get_all_method_includes.
    ASSERT 1 = ''todo''.
  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_RUN                                  ', 'CLASS cl_run DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS run
      IMPORTING
        main_object_type   TYPE string
        sub_object_type   TYPE string
        format_version TYPE string
      RETURNING
        VALUE(result) TYPE string.
ENDCLASS.

CLASS cl_run IMPLEMENTATION.

  METHOD run.
    DATA writer     TYPE REF TO zcl_aff_writer_json_schema.
    DATA generator  TYPE REF TO zcl_aff_generator.
    DATA string_tab TYPE string_table.
    DATA type_name  TYPE string.
    DATA schema_id  TYPE string.
    DATA ref        TYPE REF TO data.
    FIELD-SYMBOLS <row> LIKE LINE OF string_tab.

    schema_id = |https://github.com/SAP/abap-file-formats/blob/main/file-formats/{ to_lower( main_object_type ) }/{ to_lower( sub_object_type ) }-v{ format_version }.json|.
    type_name = to_upper( |ZIF_AFF_{ sub_object_type }_V{ format_version }=>TY_MAIN| ).

    CREATE DATA ref TYPE (type_name).

    CREATE OBJECT writer
      EXPORTING
        schema_id      = schema_id
        format_version = format_version.

    CREATE OBJECT generator
      EXPORTING
        writer = writer.

    string_tab = generator->zif_aff_generator~generate_type( ref->* ).

* workaround for transpiler/JS keywords
    LOOP AT string_tab ASSIGNING <row>.
      IF condense( <row> ) CP ''"interface_"*''.
        REPLACE FIRST OCCURRENCE OF ''"interface_"'' IN <row> WITH ''"interface"''.
      ENDIF.
    ENDLOOP.

    "CONCATENATE LINES OF string_tab INTO result SEPARATED BY |\\n|.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_O2_XSLT_ERROR                        ', 'CLASS cx_o2_xslt_error DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_o2_xslt_error IMPLEMENTATION.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_ABAP_DOC_PARSER                 ', 'CLASS zcl_aff_abap_doc_parser DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    CONSTANTS: BEGIN OF abap_doc_annotation,
                 callback_class     TYPE string VALUE \`$callbackClass\`,
                 default_            TYPE string VALUE \`$default\`,
                 values             TYPE string VALUE \`$values\`,
                 required           TYPE string VALUE \`$required\`,
                 show_always        TYPE string VALUE \`$showAlways\`,
                 minimum            TYPE string VALUE \`$minimum\`,
                 maximum            TYPE string VALUE \`$maximum\`,
                 exclusive_minimum  TYPE string VALUE \`$exclusiveMinimum\`,
                 exclusive_maximum  TYPE string VALUE \`$exclusiveMaximum\`,
                 max_length         TYPE string VALUE \`$maxLength\`,
                 min_length         TYPE string VALUE \`$minLength\`,
                 multiple_of        TYPE string VALUE \`$multipleOf\`,
                 content_media_type TYPE string VALUE \`$contentMediaType\`,
                 content_encoding   TYPE string VALUE \`$contentEncoding\`,
                 enum_value         TYPE string VALUE \`$enumValue\`,
               END OF abap_doc_annotation.

    TYPES:
      BEGIN OF abap_doc,
        required           TYPE abap_bool,
        showalways         TYPE abap_bool,
        title              TYPE string,
        description        TYPE string,
        enumvalues_link    TYPE string,
        minimum            TYPE string,
        maximum            TYPE string,
        exclusive_minimum  TYPE string,
        exclusive_maximum  TYPE string,
        multiple_of        TYPE string,
        default_            TYPE string,
        min_length         TYPE string,
        max_length         TYPE string,
        callback_class     TYPE string,
        content_media_type TYPE string,
        content_encoding   TYPE string,
        enum_value         TYPE string,
      END OF abap_doc.

    METHODS: parse
      IMPORTING
        component_name        TYPE string
        to_parse              TYPE string
      CHANGING
        log                   TYPE REF TO zif_aff_log
      RETURNING
        VALUE(found_abap_doc) TYPE abap_doc.

  PROTECTED SECTION.
  PRIVATE SECTION.
    TYPES:
      BEGIN OF ty_mixed_table_entry,
        offset  TYPE i,
        length  TYPE i,
        is_link TYPE abap_boolean,
      END OF ty_mixed_table_entry,
      tt_mixed_table_entry TYPE SORTED TABLE OF ty_mixed_table_entry WITH UNIQUE KEY offset.

    CONSTANTS co_shorttext_tag_open TYPE string VALUE \`[\\s]*<p\\sclass="shorttext">\` ##NO_TEXT.

    DATA abap_doc_string TYPE string.
    DATA parser_log TYPE REF TO zif_aff_log.
    DATA component_name TYPE string.
    DATA decoded_abap_doc TYPE abap_doc.
    DATA description_warning_is_needed TYPE abap_boolean.

    METHODS: parse_title,
      parse_description,
      remove_leading_trailing_spaces
        CHANGING string_to_work_on TYPE string,
      parse_annotations,
      parse_callback_class,
      get_annotation_value
        IMPORTING
          length                  TYPE i
          offset                  TYPE i
          to_decode               TYPE string
          length_of_annotation    TYPE i
          remove_whitespaces      TYPE abap_boolean
        RETURNING
          VALUE(annotation_value) TYPE string,
      parse_default,
      parse_enum_values,
      parse_required,
      parse_content_encoding,
      parse_content_media_type,
      parse_show_always,
      parse_number_annotations
        IMPORTING
          key_word TYPE string,
      get_number_annotation
        IMPORTING
          annotation_name TYPE string
        RETURNING
          VALUE(number)   TYPE string,
      check_next_word
        IMPORTING
          offset        TYPE i
          text_to_check TYPE string,
      write_description_message,
      workaround_remove_titles,
      check_title_positions,
      parse_enum_value,
      write_log_for_multiple_entries
        IMPORTING
          result_table TYPE match_result_tab
          annotaion    TYPE string.

ENDCLASS.


CLASS zcl_aff_abap_doc_parser IMPLEMENTATION.


  METHOD parse.
    CLEAR description_warning_is_needed.
    CLEAR decoded_abap_doc.
    abap_doc_string = to_parse.
    me->component_name = component_name.
    parser_log = log.
    parse_title( ).
    parse_annotations( ).
    parse_description( ).
    found_abap_doc = decoded_abap_doc.
    write_description_message( ).
  ENDMETHOD.


  METHOD parse_title.
    REPLACE ALL OCCURRENCES OF PCRE \`[\\s]*(<p[\\s]+class="shorttext([\\s]+synchronized)?"([\\s]+lang="[a-zA-Z]{2}")?[\\s]*>)[\\s]*\`
        IN abap_doc_string WITH \`<p class="shorttext">\` ##NO_TEXT.
    decoded_abap_doc-title = substring_after( val = abap_doc_string pcre = co_shorttext_tag_open ).
    IF ( decoded_abap_doc-title IS NOT INITIAL ).
      decoded_abap_doc-title = substring_before( val = decoded_abap_doc-title sub = ''</p>'' ).
      remove_leading_trailing_spaces( CHANGING string_to_work_on = decoded_abap_doc-title ).
    ENDIF.
    check_title_positions( ).
    workaround_remove_titles( ).
  ENDMETHOD.


  METHOD check_title_positions.
    DATA msg TYPE string.
    IF ( count( val = abap_doc_string pcre = co_shorttext_tag_open ) > 1 ).

      msg = parser_log->get_message_text( msgno = 107 msgv1 = \`''Title''\` ).
      parser_log->add_info( message_text   = msg component_name = component_name ).
    ENDIF.
    IF ( find( val = abap_doc_string pcre = co_shorttext_tag_open ) > 0 ).
      parser_log->add_info( message_text   = zif_aff_log=>co_msg113 component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD workaround_remove_titles.
    DATA start_offset TYPE i.
    WHILE ( boolc( matches( val = abap_doc_string pcre = \`.*[\\s]*<p\\sclass="shorttext">.*\` ) ) = abap_true ).

      start_offset = find( val = abap_doc_string pcre = co_shorttext_tag_open occ = 1 ).
      abap_doc_string = abap_doc_string(start_offset) && substring_after( val = abap_doc_string+start_offset sub = \`</p>\` ).
    ENDWHILE.
  ENDMETHOD.

  METHOD parse_description.
    DATA offset TYPE i.
    DATA description TYPE string.
    FIND FIRST OCCURRENCE OF PCRE \`(\\$callbackClass|\\$default|\\$values|\\$required|\\$showAlways|\\$minimum|\\$maximum|\\$exclusiveMinimum|\\$exclusiveMaximum|\\$multipleOf|\\$maxLength|\\$minLength|\\$enumValue|\\$contentMediaType|\\$contentEncoding)\`
      IN abap_doc_string MATCH OFFSET offset.
    IF sy-subrc = 0.

      description = abap_doc_string+0(offset).
      remove_leading_trailing_spaces( CHANGING string_to_work_on = description ).
      decoded_abap_doc-description = description.
    ELSE.
      remove_leading_trailing_spaces( CHANGING string_to_work_on = abap_doc_string ).
      decoded_abap_doc-description = abap_doc_string.
    ENDIF.
  ENDMETHOD.


  METHOD parse_annotations.
    DATA result_table TYPE match_result_tab.
    DATA modified_abap_doc_string LIKE abap_doc_string.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    DATA offset LIKE <entry>-offset.
    DATA length LIKE <entry>-length.
    DATA key_word TYPE string.
    DATA temp1 TYPE symsgv.
    DATA msg TYPE string.
    FIND ALL OCCURRENCES OF PCRE \`\\$[a-zA-Z]+\` IN abap_doc_string RESULTS result_table ##NO_TEXT.

    modified_abap_doc_string = abap_doc_string.

    LOOP AT result_table ASSIGNING <entry>.

      offset = <entry>-offset.

      length = <entry>-length.

      key_word = abap_doc_string+offset(length).
      CASE key_word.
        WHEN abap_doc_annotation-callback_class.
          parse_callback_class( ).
        WHEN abap_doc_annotation-default_.
          parse_default( ).
        WHEN abap_doc_annotation-values.
          parse_enum_values( ).
        WHEN abap_doc_annotation-required.
          parse_required( ).
        WHEN abap_doc_annotation-show_always.
          parse_show_always( ).
        WHEN abap_doc_annotation-minimum OR abap_doc_annotation-maximum OR abap_doc_annotation-exclusive_minimum OR abap_doc_annotation-exclusive_maximum
             OR abap_doc_annotation-max_length OR abap_doc_annotation-multiple_of OR abap_doc_annotation-min_length.
          parse_number_annotations( key_word = key_word ).
        WHEN abap_doc_annotation-enum_value.
          parse_enum_value( ).
        WHEN abap_doc_annotation-content_encoding.
          parse_content_encoding( ).
        WHEN abap_doc_annotation-content_media_type.
          parse_content_media_type( ).
        WHEN OTHERS.
          REPLACE key_word IN modified_abap_doc_string WITH ''''.

          temp1 = key_word.

          msg = parser_log->get_message_text( msgno = 108 msgv1 = temp1 ).
          parser_log->add_warning( message_text = msg component_name = component_name ).
      ENDCASE.
    ENDLOOP.
    abap_doc_string = modified_abap_doc_string.
  ENDMETHOD.

  METHOD parse_callback_class.
    DATA string_to_parse LIKE abap_doc_string.
    DATA result_table TYPE match_result_tab.
    DATA temp2 TYPE symsgv.
    DATA msg TYPE string.
    DATA offset_found TYPE i.
    DATA temp1 LIKE LINE OF result_table.
    DATA temp3 LIKE sy-tabix.
    DATA length_found TYPE i.
    DATA temp4 LIKE LINE OF result_table.
    DATA temp5 LIKE sy-tabix.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    IF decoded_abap_doc-callback_class IS NOT INITIAL.
      RETURN.
    ENDIF.

    string_to_parse = abap_doc_string.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$callbackClass[\\s]*(:[\\s]*)?\\{[\\s]*@link\` IN string_to_parse WITH \`\\$callbackClass\\{@link\`.

    FIND ALL OCCURRENCES OF PCRE \`\\$callbackClass\\{@link[^\\}]+\\}\` IN string_to_parse RESULTS result_table.
    IF lines( result_table ) = 0.

      temp2 = abap_doc_annotation-callback_class.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp2 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-callback_class ).



    temp3 = sy-tabix.
    READ TABLE result_table INDEX 1 INTO temp1.
    sy-tabix = temp3.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    offset_found = temp1-offset.



    temp5 = sy-tabix.
    READ TABLE result_table INDEX 1 INTO temp4.
    sy-tabix = temp5.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    length_found = temp4-length.
    decoded_abap_doc-callback_class = get_annotation_value( length = length_found - 1 offset = offset_found to_decode = string_to_parse length_of_annotation = 20 remove_whitespaces = abap_true ).

    LOOP AT result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = string_to_parse ).
    ENDLOOP.
  ENDMETHOD.

  METHOD get_annotation_value.
    DATA step TYPE i.
    DATA length_of_annotation_value TYPE i.
    DATA value TYPE string.
    step = offset + length_of_annotation.

    length_of_annotation_value = length - length_of_annotation.

    value = to_decode+step(length_of_annotation_value).
    IF remove_whitespaces = abap_true.
      remove_leading_trailing_spaces( CHANGING string_to_work_on = value ).
    ENDIF.
    annotation_value = value.
  ENDMETHOD.


  METHOD parse_default.
    DATA string_to_parse LIKE abap_doc_string.
    DATA result_table_value TYPE match_result_tab.
    DATA result_table_link TYPE match_result_tab.
    DATA mixed_result_table TYPE tt_mixed_table_entry.
    FIELD-SYMBOLS <default_value> LIKE LINE OF result_table_value.
    DATA temp3 TYPE zcl_aff_abap_doc_parser=>ty_mixed_table_entry.
    FIELD-SYMBOLS <default_link> LIKE LINE OF result_table_link.
    DATA temp4 TYPE zcl_aff_abap_doc_parser=>ty_mixed_table_entry.
    DATA temp5 TYPE symsgv.
    DATA msg TYPE string.
    DATA temp6 TYPE symsgv.
    DATA warning_set LIKE abap_false.
    FIELD-SYMBOLS <entry> LIKE LINE OF mixed_result_table.
    DATA link TYPE string.
    DATA link_for_testing LIKE link.
    DATA splitted TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA temp7 TYPE symsgv.
    IF decoded_abap_doc-default_ IS NOT INITIAL.
      RETURN.
    ENDIF.

    string_to_parse = abap_doc_string.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$default[\\s]*(:[\\s]*)?''\` IN string_to_parse WITH \`\\$default''\`.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$default[\\s]*(:[\\s]*)?\\{[\\s]*@link\` IN string_to_parse WITH \`\\$default\\{@link\`.


    FIND ALL OCCURRENCES OF PCRE \`\\$default''[^'']*''\` IN string_to_parse RESULTS result_table_value.

    FIND ALL OCCURRENCES OF PCRE \`\\$default\\{@link[^\\}]+\\}\` IN string_to_parse RESULTS result_table_link.



    LOOP AT result_table_value ASSIGNING <default_value>.

      CLEAR temp3.
      temp3-offset = <default_value>-offset.
      temp3-length = <default_value>-length.
      temp3-is_link = abap_false.
      INSERT temp3 INTO TABLE mixed_result_table.
    ENDLOOP.

    LOOP AT result_table_link ASSIGNING <default_link>.

      CLEAR temp4.
      temp4-offset = <default_link>-offset.
      temp4-length = <default_link>-length.
      temp4-is_link = abap_true.
      INSERT temp4 INTO TABLE mixed_result_table.
    ENDLOOP.

    IF lines( mixed_result_table ) = 0.

      temp5 = abap_doc_annotation-default_.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp5 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    IF lines( mixed_result_table ) > 1.

      temp6 = abap_doc_annotation-default_.
      msg = parser_log->get_message_text( msgno = 107 msgv1 = temp6 ).
      parser_log->add_info( message_text = msg component_name = component_name ).
    ENDIF.

    warning_set = abap_false.

    LOOP AT mixed_result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = string_to_parse ).
      IF <entry>-is_link = abap_false AND decoded_abap_doc-default_ IS INITIAL.
        decoded_abap_doc-default_ = \`"\` && get_annotation_value( length = <entry>-length - 1 offset = <entry>-offset to_decode = string_to_parse length_of_annotation = 9 remove_whitespaces = abap_false ) && \`"\`.
      ELSEIF <entry>-is_link = abap_true AND decoded_abap_doc-default_ IS INITIAL.

        link = get_annotation_value( length = <entry>-length - 1 offset = <entry>-offset to_decode = string_to_parse length_of_annotation = 9 remove_whitespaces = abap_true ).

        link_for_testing = link.
        REPLACE ALL OCCURRENCES OF PCRE \`\\s\` IN link_for_testing WITH \`\`.
        REPLACE ALL OCCURRENCES OF PCRE \`(@link|data:)\` IN link_for_testing WITH \`\`.

        SPLIT link_for_testing AT ''.'' INTO TABLE splitted.
        IF lines( splitted ) = 3.
          decoded_abap_doc-default_ = link.
        ELSEIF warning_set = abap_false.

          temp7 = abap_doc_annotation-default_.
          msg = parser_log->get_message_text( msgno = 111 msgv1 = temp7 ).
          parser_log->add_warning( message_text = msg component_name = component_name ).
          warning_set = abap_true.
        ENDIF.
      ENDIF.
    ENDLOOP.

  ENDMETHOD.


  METHOD parse_enum_values.
    DATA string_to_parse LIKE abap_doc_string.
    DATA result_table TYPE match_result_tab.
    DATA temp8 TYPE symsgv.
    DATA msg TYPE string.
    DATA warning_written LIKE abap_false.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    DATA offset_found LIKE <entry>-offset.
    DATA length_found LIKE <entry>-length.
    DATA link TYPE string.
    DATA link_for_testing LIKE link.
    DATA splitted TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA temp9 TYPE symsgv.
    IF decoded_abap_doc-enumvalues_link IS NOT INITIAL.
      RETURN.
    ENDIF.

    string_to_parse = abap_doc_string.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$values[\\s]*(:[\\s]*)?\\{[\\s]*@link\` IN string_to_parse WITH \`\\$values\\{@link\`.

    FIND ALL OCCURRENCES OF PCRE \`\\$values\\{@link([^\\}]+)\\}\` IN string_to_parse RESULTS result_table.
    IF lines( result_table ) = 0.

      temp8 = abap_doc_annotation-values.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp8 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-values ).

    warning_written = abap_false.

    LOOP AT result_table ASSIGNING <entry>.

      offset_found = <entry>-offset.

      length_found = <entry>-length.

      link = get_annotation_value( length = length_found - 1 offset = offset_found to_decode = string_to_parse length_of_annotation = 13 remove_whitespaces = abap_true ).
      check_next_word( offset = offset_found + length_found text_to_check = string_to_parse ).

      link_for_testing = link.
      REPLACE ALL OCCURRENCES OF PCRE \`\\s\` IN link_for_testing WITH \`\`.
      REPLACE ALL OCCURRENCES OF PCRE \`data:\` IN link_for_testing WITH \`\`.

      SPLIT link_for_testing AT ''.'' INTO TABLE splitted.
      IF lines( splitted ) = 2 AND decoded_abap_doc-enumvalues_link IS INITIAL.
        decoded_abap_doc-enumvalues_link = link.
      ELSEIF lines( splitted ) <> 2 AND warning_written = abap_false.

        temp9 = abap_doc_annotation-values.
        msg = parser_log->get_message_text( msgno = 111 msgv1 = temp9 ).
        parser_log->add_warning( message_text = msg component_name = component_name ).
        warning_written = abap_true.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.


  METHOD parse_required.
    DATA result_table TYPE match_result_tab.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    IF decoded_abap_doc-required IS NOT INITIAL.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF abap_doc_annotation-required IN abap_doc_string RESULTS result_table.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-required ).
    decoded_abap_doc-required = abap_true.

    LOOP AT result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = abap_doc_string ).
    ENDLOOP.
  ENDMETHOD.


  METHOD parse_content_encoding.
    DATA abap_doc LIKE abap_doc_string.
    DATA result_table TYPE match_result_tab.
    DATA content_encoding_occurrences TYPE match_result.
    DATA match LIKE content_encoding_occurrences-submatches.
    DATA first_match LIKE LINE OF match.
    DATA temp6 LIKE LINE OF match.
    DATA temp7 LIKE sy-tabix.
    DATA temp10 TYPE symsgv.
    DATA msg TYPE string.
    abap_doc = abap_doc_string.
    IF decoded_abap_doc-content_encoding IS NOT INITIAL.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF abap_doc_annotation-content_encoding IN abap_doc_string RESULTS result_table.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-content_encoding ).

    REPLACE FIRST OCCURRENCE OF PCRE \`\\$contentEncoding[\\s]*''\` IN abap_doc WITH \`\\$contentEncoding''\`.

    FIND FIRST OCCURRENCE OF PCRE \`\\$contentEncoding''([^'']*)''\` IN abap_doc RESULTS content_encoding_occurrences.

    match = content_encoding_occurrences-submatches.
    IF lines( match ) >= 1.



      temp7 = sy-tabix.
      READ TABLE match INDEX 1 INTO temp6.
      sy-tabix = temp7.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      first_match = temp6.
      decoded_abap_doc-content_encoding = abap_doc+first_match-offset(first_match-length).
    ELSE.

      temp10 = abap_doc_annotation-content_encoding.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp10 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD parse_content_media_type.
    DATA abap_doc LIKE abap_doc_string.
    DATA result_table TYPE match_result_tab.
    DATA content_media_type_occurrences TYPE match_result.
    DATA match LIKE content_media_type_occurrences-submatches.
    DATA first_match LIKE LINE OF match.
    DATA temp8 LIKE LINE OF match.
    DATA temp9 LIKE sy-tabix.
    DATA temp11 TYPE symsgv.
    DATA msg TYPE string.
    abap_doc = abap_doc_string.
    IF decoded_abap_doc-content_media_type IS NOT INITIAL.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF abap_doc_annotation-content_media_type IN abap_doc RESULTS result_table.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-content_media_type ).

    REPLACE FIRST OCCURRENCE OF PCRE \`\\$contentMediaType[\\s]*''\` IN abap_doc WITH \`\\$contentMediaType''\`.

    FIND FIRST OCCURRENCE OF PCRE \`\\$contentMediaType''([^'']*)''\` IN abap_doc RESULTS content_media_type_occurrences.

    match = content_media_type_occurrences-submatches.
    IF lines( match ) >= 1.



      temp9 = sy-tabix.
      READ TABLE match INDEX 1 INTO temp8.
      sy-tabix = temp9.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      first_match = temp8.
      decoded_abap_doc-content_media_type = abap_doc+first_match-offset(first_match-length).
    ELSE.

      temp11 = abap_doc_annotation-content_media_type.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp11 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD parse_show_always.
    DATA result_table TYPE match_result_tab.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    IF decoded_abap_doc-showalways IS NOT INITIAL.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF abap_doc_annotation-show_always IN abap_doc_string RESULTS result_table.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-show_always ).
    decoded_abap_doc-showalways = abap_true.

    LOOP AT result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = abap_doc_string ).
    ENDLOOP.
  ENDMETHOD.


  METHOD parse_number_annotations.
    CASE key_word.
      WHEN abap_doc_annotation-minimum.
        IF decoded_abap_doc-minimum IS INITIAL.
          decoded_abap_doc-minimum = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-maximum.
        IF decoded_abap_doc-maximum IS INITIAL.
          decoded_abap_doc-maximum = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-exclusive_minimum.
        IF decoded_abap_doc-exclusive_minimum IS INITIAL.
          decoded_abap_doc-exclusive_minimum = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-exclusive_maximum.
        IF decoded_abap_doc-exclusive_maximum IS INITIAL.
          decoded_abap_doc-exclusive_maximum = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-multiple_of.
        IF decoded_abap_doc-multiple_of IS INITIAL.
          decoded_abap_doc-multiple_of = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-min_length.
        IF decoded_abap_doc-min_length IS INITIAL.
          decoded_abap_doc-min_length = get_number_annotation( annotation_name = key_word ).
        ENDIF.
      WHEN abap_doc_annotation-max_length.
        IF decoded_abap_doc-max_length IS INITIAL.
          decoded_abap_doc-max_length = get_number_annotation( annotation_name = key_word ).
        ENDIF.
    ENDCASE.
  ENDMETHOD.


  METHOD get_number_annotation.
    DATA abap_doc LIKE abap_doc_string.
    DATA dummy_annotation TYPE string.
    DATA result_table TYPE match_result_tab.
    DATA temp12 TYPE symsgv.
    DATA msg TYPE string.
    DATA annotation_length TYPE i.
    DATA pcre_of_number_expressions TYPE REF TO cl_abap_regex.
    DATA warning_written LIKE abap_false.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    DATA offset_found LIKE <entry>-offset.
    DATA length_found LIKE <entry>-length.
    DATA begin_of_number TYPE i.
    DATA length_of_number TYPE i.
    DATA number_candidate TYPE string.
    DATA matcher TYPE REF TO cl_abap_matcher.
    DATA match TYPE abap_bool.
    DATA temp13 TYPE symsgv.
    abap_doc = abap_doc_string.

    dummy_annotation = \`$dummyannotation\`.
    REPLACE ALL OCCURRENCES OF annotation_name IN abap_doc WITH dummy_annotation.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$dummyannotation[\\s]*(:[\\s]*)?\` IN abap_doc WITH \`\\$dummyannotation\`.

    FIND ALL OCCURRENCES OF PCRE \`\\$dummyannotation[^\\s]+\` IN abap_doc RESULTS result_table.
    IF lines( result_table ) = 0.

      temp12 = abap_doc_annotation-values.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp12 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    write_log_for_multiple_entries( result_table = result_table annotaion = annotation_name ).

    annotation_length = strlen( dummy_annotation ).

    pcre_of_number_expressions = cl_abap_regex=>create_pcre( pattern     = \`(\\+|-)?[0-9]+(.[0-9]+)?(e(\\+|-)?[0-9]+)?\`
                                                                    ignore_case = abap_true ).

    warning_written = abap_false.

    LOOP AT result_table ASSIGNING <entry>.

      offset_found = <entry>-offset.

      length_found = <entry>-length.

      begin_of_number = offset_found + annotation_length.

      length_of_number = length_found - annotation_length.

      number_candidate = abap_doc+begin_of_number(length_of_number).
      remove_leading_trailing_spaces( CHANGING string_to_work_on = number_candidate ).

      matcher = pcre_of_number_expressions->create_matcher( text = number_candidate ).

      match = matcher->match( ).
      check_next_word( offset = offset_found + length_found text_to_check = abap_doc ).
      IF match = abap_true AND number IS INITIAL.
        number = number_candidate.
      ELSEIF match = abap_false AND warning_written = abap_false.

        temp13 = annotation_name.
        msg = parser_log->get_message_text( msgno = 110 msgv1 = temp13 ).
        parser_log->add_warning( message_text = msg component_name = component_name ).
        warning_written = abap_true.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD parse_enum_value.
    DATA string_to_parse LIKE abap_doc_string.
    DATA result_table TYPE match_result_tab.
    DATA temp14 TYPE symsgv.
    DATA msg TYPE string.
    DATA offset_found TYPE i.
    DATA temp10 LIKE LINE OF result_table.
    DATA temp11 LIKE sy-tabix.
    DATA length_found TYPE i.
    DATA temp12 LIKE LINE OF result_table.
    DATA temp13 LIKE sy-tabix.
    FIELD-SYMBOLS <entry> LIKE LINE OF result_table.
    IF decoded_abap_doc-enum_value IS NOT INITIAL.
      RETURN.
    ENDIF.

    string_to_parse = abap_doc_string.
    REPLACE ALL OCCURRENCES OF PCRE \`\\$enumValue[\\s]*(:[\\s]*)?''\` IN string_to_parse WITH \`\\$enumValue''\`.

    FIND ALL OCCURRENCES OF PCRE \`\\$enumValue''[^'']*''\` IN string_to_parse RESULTS result_table.
    IF lines( result_table ) = 0.

      temp14 = abap_doc_annotation-enum_value.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp14 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    write_log_for_multiple_entries( result_table = result_table annotaion = abap_doc_annotation-enum_value ).



    temp11 = sy-tabix.
    READ TABLE result_table INDEX 1 INTO temp10.
    sy-tabix = temp11.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    offset_found = temp10-offset.



    temp13 = sy-tabix.
    READ TABLE result_table INDEX 1 INTO temp12.
    sy-tabix = temp13.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    length_found = temp12-length.
    decoded_abap_doc-enum_value = get_annotation_value( length = length_found - 1 offset = offset_found to_decode = string_to_parse length_of_annotation = 11 remove_whitespaces = abap_true ).

    LOOP AT result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = string_to_parse ).
    ENDLOOP.
  ENDMETHOD.

  METHOD remove_leading_trailing_spaces.
    SHIFT string_to_work_on RIGHT DELETING TRAILING space.
    SHIFT string_to_work_on LEFT DELETING LEADING space.
  ENDMETHOD.


  METHOD check_next_word.
    DATA current_offset LIKE offset.
    DATA next_word TYPE string.
    DATA next_char TYPE c.
    DATA pcre_of_letter TYPE REF TO cl_abap_regex.
    IF description_warning_is_needed = abap_true.
      RETURN.
    ENDIF.

    current_offset = offset.



    WHILE next_char = space AND current_offset < strlen( text_to_check ).
      next_char = text_to_check+current_offset(1).
      current_offset = current_offset + 1.
    ENDWHILE.
    next_word = next_char.
    IF current_offset >= strlen( text_to_check ).
      RETURN.
    ENDIF.

    pcre_of_letter = cl_abap_regex=>create_pcre( pattern = \`[a-zA-Z]\` ) ##NO_TEXT.
    DO.
      next_char = text_to_check+current_offset(1).
      current_offset = current_offset + 1.
      next_word = next_word && next_char.
      IF pcre_of_letter->create_matcher( text = next_char )->match( ) = abap_false OR current_offset >= strlen( text_to_check ).
        EXIT.
      ENDIF.
    ENDDO.
    remove_leading_trailing_spaces( CHANGING string_to_work_on = next_word ).
    IF strlen( next_word ) = 1 OR next_word+0(1) <> \`$\`.
      description_warning_is_needed = abap_true.
    ENDIF.
  ENDMETHOD.


  METHOD write_description_message.
    IF description_warning_is_needed = abap_true AND decoded_abap_doc-description IS INITIAL.
      parser_log->add_warning( message_text = zif_aff_log=>co_msg115 component_name = component_name ).
    ELSEIF description_warning_is_needed = abap_true AND decoded_abap_doc-description IS NOT INITIAL.
      parser_log->add_info( message_text = zif_aff_log=>co_msg116 component_name = component_name ).
    ENDIF.
  ENDMETHOD.

  METHOD write_log_for_multiple_entries.
    DATA temp15 TYPE symsgv.
    DATA msg TYPE string.
    IF lines( result_table ) > 1.

      temp15 = annotaion.

      msg = parser_log->get_message_text( msgno = 107 msgv1 = temp15 ).
      parser_log->add_info( message_text = msg component_name = component_name ).
    ENDIF.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_ABAP_DOC_READER                 ', 'CLASS zcl_aff_abap_doc_reader DEFINITION
  PUBLIC
  FINAL
  CREATE PRIVATE .

  PUBLIC SECTION.

    CLASS-METHODS create_instance
      IMPORTING
        !source       TYPE string_table
        !name         TYPE string OPTIONAL
      RETURNING
        VALUE(result) TYPE REF TO zcl_aff_abap_doc_reader .
    METHODS get_abap_doc_for_element
      IMPORTING
        element_name  TYPE string
      RETURNING
        VALUE(result) TYPE string
      RAISING
        cx_static_check.
  PROTECTED SECTION.
    TYPES: BEGIN OF ty_cache,
             name     TYPE string,
             instance TYPE REF TO zcl_aff_abap_doc_reader,
           END OF ty_cache.

    CLASS-DATA cache TYPE HASHED TABLE OF ty_cache WITH UNIQUE KEY name.

    DATA source TYPE string_table.
    DATA blocks TYPE ty_comment_blocks.

    METHODS parse.

  PRIVATE SECTION.
ENDCLASS.



CLASS ZCL_AFF_ABAP_DOC_READER IMPLEMENTATION.


  METHOD create_instance.
    DATA row TYPE zcl_aff_abap_doc_reader=>ty_cache.
    DATA temp1 TYPE zcl_aff_abap_doc_reader=>ty_cache.

    IF name IS NOT INITIAL.

      READ TABLE cache INTO row WITH KEY name = name.
      IF sy-subrc = 0.
        result = row-instance.
        RETURN.
      ENDIF.
    ENDIF.

    CREATE OBJECT result.
    result->source = source.

    IF name IS NOT INITIAL.

      CLEAR temp1.
      temp1-name = name.
      temp1-instance = result.
      INSERT temp1 INTO TABLE cache.
    ENDIF.

  ENDMETHOD.


  METHOD get_abap_doc_for_element.

    DATA l_element_name      TYPE string.
    DATA l_scanned_elem_name TYPE string.
    DATA element_was_found   TYPE abap_bool.
    FIELD-SYMBOLS <fs_abap_doc_block> LIKE LINE OF blocks.
    DATA adoc_line LIKE LINE OF <fs_abap_doc_block>-tab_comments.
    DATA temp2 TYPE REF TO zcx_aff_tools.

    l_element_name = element_name.
    TRANSLATE l_element_name TO UPPER CASE.
    CONDENSE l_element_name.

    IF lines( blocks ) = 0.
      parse( ).
    ENDIF.


    LOOP AT blocks ASSIGNING <fs_abap_doc_block>.

      IF <fs_abap_doc_block>-hook_relevant_tok_name-str = ''BEGIN''.
        l_scanned_elem_name = <fs_abap_doc_block>-hook_relevant_tok_name_add-str.
      ELSE.
        l_scanned_elem_name = <fs_abap_doc_block>-hook_relevant_tok_name-str.
      ENDIF.

      IF l_scanned_elem_name = l_element_name.

        " prepare the result for required element

        LOOP AT <fs_abap_doc_block>-tab_comments INTO adoc_line.
          CONDENSE adoc_line.         " remove leading spaces
          adoc_line = adoc_line+2.  " remove "!
          CONDENSE adoc_line.         " remove again leading spaces
          IF sy-tabix = 1.
            result = adoc_line.
          ELSE.
            CONCATENATE result adoc_line INTO result SEPARATED BY space.
          ENDIF.
        ENDLOOP.
        element_was_found = abap_true.
        EXIT.
      ENDIF.
    ENDLOOP.

    IF element_was_found = abap_false.

      CREATE OBJECT temp2 TYPE zcx_aff_tools EXPORTING message = l_element_name.
      RAISE EXCEPTION temp2.
    ENDIF.
  ENDMETHOD.


  METHOD parse.

    DATA section_source TYPE string_table.

    DATA scan_util TYPE REF TO lcl_section_source_comments.
    DATA scan_statements TYPE lcl_section_source_comments=>ty_sstmnt.
    DATA scan_tokens TYPE lcl_section_source_comments=>ty_stokesx.
    CREATE OBJECT scan_util TYPE lcl_section_source_comments.

    section_source[] = me->source[].



    scan_util->scan_code( EXPORTING source_to_be_scanned = section_source
                          IMPORTING tab_statements       = scan_statements
                                    tab_tokens           = scan_tokens ).

    blocks = scan_util->identify_abap_doc_blocks_all(
      tab_statements = scan_statements
      tab_tokens     = scan_tokens
      tab_source     = section_source ).

  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_GENERATOR                       ', 'CLASS zcl_aff_generator DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES zif_aff_generator.
    METHODS constructor
      IMPORTING
        writer TYPE REF TO zif_aff_writer.

  PRIVATE SECTION.
    DATA:
      writer TYPE REF TO zif_aff_writer,
      log    TYPE REF TO zif_aff_log.

    METHODS:
      check_input
        IMPORTING
          type_description TYPE REF TO cl_abap_typedescr,
      process_type_description
        IMPORTING
          type_description TYPE REF TO cl_abap_typedescr
          type_name        TYPE string OPTIONAL
        RAISING
          zcx_aff_tools,
      process_element
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          element_name        TYPE string OPTIONAL
        RAISING
          zcx_aff_tools,
      process_structure
        IMPORTING
          structure_description TYPE REF TO cl_abap_structdescr
          structure_name        TYPE string
        RAISING
          zcx_aff_tools,
      process_table
        IMPORTING
          table_description TYPE REF TO cl_abap_tabledescr
          table_name        TYPE string
        RAISING
          zcx_aff_tools,
      process_include
        IMPORTING
          structure_description TYPE REF TO cl_abap_structdescr
        RAISING
          zcx_aff_tools,
      process_components
        IMPORTING
          components TYPE cl_abap_structdescr=>component_table
        RAISING
          zcx_aff_tools,
      check_mandatory_fields
        IMPORTING
          structure_description TYPE REF TO cl_abap_structdescr,
      check_top_level_fields
        IMPORTING
          structure_description TYPE REF TO cl_abap_structdescr.

ENDCLASS.


CLASS zcl_aff_generator IMPLEMENTATION.

  METHOD constructor.
    me->writer = writer.
    CREATE OBJECT log TYPE zcl_aff_log.
  ENDMETHOD.

  METHOD zif_aff_generator~generate_type.
    DATA type_description TYPE REF TO cl_abap_typedescr.
    type_description = cl_abap_typedescr=>describe_by_data( data ).
    check_input( type_description ).
    process_type_description( type_description ).
    result = writer->get_output( ).
    log->join( log_to_join = writer->get_log( ) ).
  ENDMETHOD.

  METHOD check_input.
    DATA temp1 TYPE REF TO cl_abap_structdescr.
    DATA structure_description LIKE temp1.
    TRY.

        temp1 ?= type_description.

        structure_description = temp1.
        check_mandatory_fields( structure_description ).
        check_top_level_fields( structure_description ).
      CATCH cx_sy_move_cast_error.
        log->add_warning( message_text = zif_aff_log=>co_msg123 component_name = type_description->get_relative_name( ) ).
    ENDTRY.

  ENDMETHOD.

  METHOD check_mandatory_fields.
    DATA components TYPE abap_component_tab.
    DATA temp2 LIKE sy-subrc.
    DATA temp1 LIKE sy-subrc.
    components = structure_description->get_components( ).

    READ TABLE components WITH KEY name = ''HEADER'' TRANSPORTING NO FIELDS.
    temp2 = sy-subrc.

    READ TABLE components WITH KEY name = ''FORMAT_VERSION'' TRANSPORTING NO FIELDS.
    temp1 = sy-subrc.
    IF NOT ( temp2 = 0 AND temp1 = 0 ).
      log->add_warning( message_text = zif_aff_log=>co_msg124 component_name = structure_description->get_relative_name( ) ).
    ENDIF.
  ENDMETHOD.

  METHOD check_top_level_fields.
    DATA temp3 TYPE abap_component_tab.
    FIELD-SYMBOLS <component> LIKE LINE OF temp3.
    temp3 = structure_description->get_components( ).

    LOOP AT temp3 ASSIGNING <component>.
      IF <component>-name <> ''FORMAT_VERSION'' AND <component>-type->kind <> cl_abap_typedescr=>kind_struct AND <component>-type->kind <> cl_abap_typedescr=>kind_table.
        log->add_warning( message_text = zif_aff_log=>co_msg128 component_name = structure_description->get_relative_name( ) ).
        EXIT.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD process_type_description.
    DATA temp4 TYPE REF TO cl_abap_elemdescr.
    DATA temp5 TYPE REF TO cl_abap_structdescr.
    DATA temp6 TYPE REF TO cl_abap_tabledescr.
    DATA temp7 TYPE REF TO zcx_aff_tools.
    CASE type_description->kind.
      WHEN cl_abap_typedescr=>kind_elem.

        temp4 ?= type_description.
        process_element(
          element_name        = type_name
          element_description = temp4 ).
      WHEN cl_abap_typedescr=>kind_struct.

        temp5 ?= type_description.
        process_structure(
          structure_name        = type_name
          structure_description = temp5 ).
      WHEN cl_abap_typedescr=>kind_table.

        temp6 ?= type_description.
        process_table(
          table_name        = type_name
          table_description = temp6 ).
      WHEN OTHERS.

        CREATE OBJECT temp7 TYPE zcx_aff_tools.
        RAISE EXCEPTION temp7.
    ENDCASE.
  ENDMETHOD.

  METHOD process_element.
    DATA temp8 TYPE string.
    DATA name LIKE temp8.
    IF element_name IS NOT INITIAL.
      temp8 = element_name.
    ELSE.
      temp8 = element_description->get_relative_name( ).
    ENDIF.

    name = temp8.
    writer->write_element(
      element_name        = name
      element_description = element_description ).
  ENDMETHOD.

  METHOD process_structure.
    DATA temp9 TYPE string.
    DATA name LIKE temp9.
    DATA components TYPE abap_component_tab.
    IF structure_name IS NOT INITIAL.
      temp9 = structure_name.
    ELSE.
      temp9 = structure_description->get_relative_name( ).
    ENDIF.

    name = temp9.
    writer->open_node(
      node_name        = name
      node_description = structure_description ).

    components = structure_description->get_components( ).
    process_components( components ).
    writer->close_node(
      node_name        = name
      node_description = structure_description ).
  ENDMETHOD.

  METHOD process_include.
    DATA components TYPE abap_component_tab.
    components = structure_description->get_components( ).
    writer->open_include( structure_description ).
    process_components( components ).
    writer->close_include( ).
  ENDMETHOD.

  METHOD process_components.
    FIELD-SYMBOLS <component> LIKE LINE OF components.
    DATA temp10 TYPE REF TO cl_abap_structdescr.
    LOOP AT components ASSIGNING <component>.
      IF <component>-as_include = abap_true.

        temp10 ?= <component>-type.
        process_include( temp10 ).
      ELSE.
        process_type_description(
          type_name        = <component>-name
          type_description = <component>-type ).
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD process_table.
    DATA temp11 TYPE string.
    DATA name LIKE temp11.
    DATA line_description TYPE REF TO cl_abap_datadescr.
    IF table_name IS NOT INITIAL.
      temp11 = table_name.
    ELSE.
      temp11 = table_description->get_relative_name( ).
    ENDIF.

    name = temp11.
    writer->open_node(
      node_name        = name
      node_description = table_description ).

    line_description = table_description->get_table_line_type( ).
    process_type_description( line_description ).
    writer->close_node(
      node_name        = name
      node_description = table_description ).
  ENDMETHOD.

  METHOD zif_aff_generator~get_log.
    log = me->log.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_LOG                             ', 'CLASS zcl_aff_log DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.


  PUBLIC SECTION.
    INTERFACES zif_aff_log.

    CLASS-METHODS:
      "! Writes the actual system message fields into the returned structure
      "!
      "! @parameter result | The actual system message
      get_sy_message
        RETURNING VALUE(result) TYPE symsg.

    METHODS:
      constructor.
  PROTECTED SECTION.

  PRIVATE SECTION.
    TYPES: BEGIN OF ty_msg,
             msgno TYPE i,
             str1  TYPE c LENGTH 50,
             str2  TYPE c LENGTH 50,
             str3  TYPE c LENGTH 50,
             str4  TYPE c LENGTH 50,
           END OF ty_msg.

    TYPES: tt_msg TYPE STANDARD TABLE OF ty_msg WITH DEFAULT KEY.

    DATA:
      messages      TYPE zif_aff_log=>tt_log_out,
      message_table TYPE tt_msg,
      max_severity  TYPE symsgty.


    METHODS:
      add_message_for_exception
        IMPORTING
          type           TYPE symsgty
          message        TYPE symsg
          component_name TYPE string,
      add_message
        IMPORTING
          type           TYPE symsgty
          message_text   TYPE string
          component_name TYPE string,
      set_max_severity
        IMPORTING
          type TYPE symsgty.
ENDCLASS.



CLASS ZCL_AFF_LOG IMPLEMENTATION.


  METHOD add_message.
    DATA temp1 TYPE zif_aff_log=>ty_log_out.
    set_max_severity( type ).

    CLEAR temp1.
    temp1-component_name = component_name.
    temp1-type = type.
    temp1-message_text = message_text.
    APPEND temp1 TO me->messages.
  ENDMETHOD.


  METHOD add_message_for_exception.

    DATA text TYPE string.
    DATA temp2 TYPE zif_aff_log=>ty_log_out.
    MESSAGE
      ID message-msgid
      TYPE type
      NUMBER message-msgno
      WITH message-msgv1 message-msgv2 message-msgv3 message-msgv4
      INTO text.


    CLEAR temp2.
    temp2-component_name = component_name.
    temp2-type = type.
    temp2-message_text = text.
    temp2-message = get_sy_message( ).
    APPEND temp2 TO me->messages.
  ENDMETHOD.


  METHOD constructor.
    DATA temp3 TYPE zcl_aff_log=>ty_msg.
    DATA temp4 TYPE zcl_aff_log=>ty_msg.
    DATA temp5 TYPE zcl_aff_log=>ty_msg.
    DATA temp6 TYPE zcl_aff_log=>ty_msg.
    DATA temp7 TYPE zcl_aff_log=>ty_msg.
    DATA temp8 TYPE zcl_aff_log=>ty_msg.
    DATA temp9 TYPE zcl_aff_log=>ty_msg.
    DATA temp10 TYPE zcl_aff_log=>ty_msg.
    DATA temp11 TYPE zcl_aff_log=>ty_msg.
    DATA temp12 TYPE zcl_aff_log=>ty_msg.
    DATA temp13 TYPE zcl_aff_log=>ty_msg.
    DATA temp14 TYPE zcl_aff_log=>ty_msg.
    DATA temp15 TYPE zcl_aff_log=>ty_msg.
    DATA temp16 TYPE zcl_aff_log=>ty_msg.
    DATA temp17 TYPE zcl_aff_log=>ty_msg.
    CLEAR temp3.
    temp3-msgno = 0.
    APPEND temp3 TO message_table.

    CLEAR temp4.
    temp4-msgno = 102.
    temp4-str1 = \`The JSON type\`.
    temp4-str2 = \`is not supported by the XSLT writer\`.
    APPEND temp4 TO message_table ##NO_TEXT.

    CLEAR temp5.
    temp5-msgno = 103.
    temp5-str1 = \`Class/Interface type\`.
    temp5-str2 = \`given in ABAP Doc link doesn''t exist\`.
    APPEND temp5 TO message_table ##NO_TEXT.

    CLEAR temp6.
    temp6-msgno = 104.
    temp6-str1 = \`Constant\`.
    temp6-str2 = \`given in ABAP Doc link doesn''t exist\`.
    APPEND temp6 TO message_table ##NO_TEXT.

    CLEAR temp7.
    temp7-msgno = 105.
    temp7-str1 = \`Component\`.
    temp7-str2 = \`of constant\`.
    temp7-str3 = \`in ABAP Doc link doesn''t exist\`.
    APPEND temp7 TO message_table ##NO_TEXT.

    CLEAR temp8.
    temp8-msgno = 107.
    temp8-str1 = \`There are several occurrences of annotation\`.
    temp8-str2 = \`. First valid is used\`.
    APPEND temp8 TO message_table ##NO_TEXT.

    CLEAR temp9.
    temp9-msgno = 108.
    temp9-str1 = \`Annotation\`.
    temp9-str2 = \`is unknown\`.
    APPEND temp9 TO message_table ##NO_TEXT.

    CLEAR temp10.
    temp10-msgno = 109.
    temp10-str1 = \`Annotation\`.
    temp10-str2 = \`was used incorrectly\`.
    APPEND temp10 TO message_table ##NO_TEXT.

    CLEAR temp11.
    temp11-msgno = 110.
    temp11-str1 = \`No number was provided for annotation\`.
    APPEND temp11 TO message_table ##NO_TEXT.

    CLEAR temp12.
    temp12-msgno = 111.
    temp12-str1 = \`Link in annotation\`.
    temp12-str2 = \`is incorrect\`.
    APPEND temp12 TO message_table ##NO_TEXT.

    CLEAR temp13.
    temp13-msgno = 112.
    temp13-str1 = \`If $required is set, $showAlways is redundant\`.
    APPEND temp13 TO message_table ##NO_TEXT.

    CLEAR temp14.
    temp14-msgno = 117.
    temp14-str1 = \`Annotation $default for type\`.
    temp14-str2 = \`is not supported\`.
    APPEND temp14 TO message_table ##NO_TEXT.

    CLEAR temp15.
    temp15-msgno = 119.
    temp15-str1 = \`\`.
    temp15-str2 = \`is missing\`.
    APPEND temp15 TO message_table ##NO_TEXT.

    CLEAR temp16.
    temp16-msgno = 122.
    temp16-str1 = \`Type of constant\`.
    temp16-str2 = \`does not match type of\`.
    APPEND temp16 TO message_table ##NO_TEXT.

    CLEAR temp17.
    temp17-msgno = 125.
    temp17-str1 = \`Description exceeds\`.
    temp17-str2 = \`characters and might be too long\`.
    APPEND temp17 TO message_table ##NO_TEXT.
  ENDMETHOD.


  METHOD get_sy_message.
    CLEAR result.
    result-msgid = sy-msgid.
    result-msgno = sy-msgno.
    result-msgty = sy-msgty.
    result-msgv1 = sy-msgv1.
    result-msgv2 = sy-msgv2.
    result-msgv3 = sy-msgv3.
    result-msgv4 = sy-msgv4.
  ENDMETHOD.


  METHOD set_max_severity.
    IF type = zif_aff_log=>c_message_type-error.
      max_severity = zif_aff_log=>c_message_type-error.
    ELSEIF type = zif_aff_log=>c_message_type-warning.
      IF max_severity <> zif_aff_log=>c_message_type-error.
        max_severity = zif_aff_log=>c_message_type-warning.
      ENDIF.
    ELSEIF type = zif_aff_log=>c_message_type-info.
      IF max_severity IS INITIAL.
        max_severity = zif_aff_log=>c_message_type-info.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~add_error.
    add_message( type = zif_aff_log=>c_message_type-error message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~add_exception.
    set_max_severity( message_type ).

    IF exception->get_text( ) IS NOT INITIAL.
      cl_message_helper=>set_msg_vars_for_if_msg( exception ).
      add_message_for_exception( type = message_type message = get_sy_message( ) component_name = component_name ).
    ENDIF.

    IF exception->previous IS BOUND.
      zif_aff_log~add_exception( exception = exception->previous message_type = message_type component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~add_info.
    add_message( type = zif_aff_log=>c_message_type-info message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~add_warning.
    add_message( type = zif_aff_log=>c_message_type-warning message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~clear.
    CLEAR me->messages.
  ENDMETHOD.


  METHOD zif_aff_log~get_max_severity.
    max_severity = me->max_severity.
  ENDMETHOD.


  METHOD zif_aff_log~get_messages.
    messages = me->messages.
  ENDMETHOD.


  METHOD zif_aff_log~get_message_text.
    DATA temp18 LIKE sy-subrc.
    DATA temp19 TYPE zcl_aff_log=>ty_msg.
    DATA temp1 LIKE LINE OF message_table.
    DATA temp2 LIKE sy-tabix.
    DATA message_entry LIKE temp19.
    READ TABLE message_table WITH KEY msgno = msgno TRANSPORTING NO FIELDS.
    temp18 = sy-subrc.
    IF temp18 = 0.

      CLEAR temp19.


      temp2 = sy-tabix.
      READ TABLE message_table WITH KEY msgno = msgno INTO temp1.
      sy-tabix = temp2.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      temp19 = temp1.

      message_entry = temp19.
      message_text = message_entry-str1 && \` \` && msgv1 && \` \` &&
                message_entry-str2 && \` \` && msgv2 && \` \` &&
                message_entry-str3 && \` \` && msgv3 && \` \` &&
                message_entry-str4 && \` \` && msgv4.
      CONDENSE message_text.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~has_messages.
    DATA temp1 TYPE xsdboolean.
    temp1 = boolc( me->messages IS NOT INITIAL ).
    has_messages = temp1.
  ENDMETHOD.


  METHOD zif_aff_log~join.
    APPEND LINES OF log_to_join->get_messages( ) TO me->messages.
    set_max_severity( log_to_join->get_max_severity( ) ).
  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_TEST_TYPES                      ', 'CLASS zcl_aff_test_types DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.

    TYPES:
      "! $hiddenabc
      unknown_annotation TYPE string.

    TYPES:
      "! $contentEncoding ''base64''
      content_encoded_string TYPE string.

    TYPES:
      "! $contentEncoding ''unknown''
      unknown_content_encoded_string TYPE string.

    TYPES:
      "! $contentEncoding ''base64''
      content_encoded_integer TYPE i.

    TYPES:
      "! $contentMediaType ''text/html''
      content_media_type_string TYPE string.

    TYPES:
      "! $contentMediaType ''text/html''
      content_media_type_integer TYPE i.

    TYPES:
       "! $contentMediaType ''text/html''
       "! $contentEncoding ''base64''
      media_type_content_ecoding TYPE string.

    TYPES:
      BEGIN OF struc_with_type_encoding,
        component TYPE media_type_content_ecoding,
      END OF struc_with_type_encoding.

    TYPES:
      "! <p class="shorttext">title</p>
      "! description
      "! <p class="shorttext2">Title</p>
      description_not_found TYPE string.

    TYPES:
      "! <p class="shorttext">Type With Long Description</p>
      "! This is a type with a very very long description.
      "! To ensure that the generated schema can be inserted into an include without loss of information,
      "! the length of the description should not be longer then 253 characters.
      "! So please shorten your description. Description should not replace a lexicon.
      type_with_long_description TYPE i.

    TYPES:
      "! Default type does not match constant type
      "! $default {@link zcl_aff_test_types.data:co_test.test}
      default_link TYPE i.
    CONSTANTS:
      BEGIN OF co_test,
        test TYPE string VALUE '' '',
      END OF co_test.

    TYPES:
      BEGIN OF struc_link_wrong_type,
        default_link TYPE default_link,
      END OF struc_link_wrong_type.


    TYPES:
      "! in ST val(I()) only allow integers
      "! $values {@link zcl_aff_test_types.data:co_enum}
      enum TYPE i.

    CONSTANTS:
      BEGIN OF co_enum,
        test  TYPE string VALUE '' '',
        test2 TYPE string VALUE ''A'',
      END OF co_enum.

*  type to test name mapping from format_version to formatVersion
    TYPES:
      "! <p class="shorttext">Constant With Field Format Version</p>
      "! Constant with field format_version
      BEGIN OF ty_format_version,
        "! <p class="shorttext">ABAP File Format Version</p>
        "! The ABAP file format version
        format_version TYPE string,
        "! <p class="shorttext">Other Field</p>
        "! Other field
        field1         TYPE i,
      END OF ty_format_version.

*  numerical text field
    TYPES:
      "! <p   class="shorttext">Numerical Text Field</p>
      "! A numerical text field of length 4
      num_text TYPE n LENGTH 4.

    TYPES:
      "! <p   class="shorttext">Structure With Numerical Text Field</p>
      "! Structure with a numerical text field of length 4
      BEGIN OF struc_with_num_text,
        numerical_text1 TYPE num_text,
        numerical_text2 TYPE num_text,
        "! $showAlways
        numerical_text3 TYPE num_text,
        numerical_text4 TYPE num_text,
      END OF struc_with_num_text.


*  numerical text field with title and description which need to be escaped in the json schema
*    " needs to be escaped (/")
*    \\ needs to be escaped (\\\\)
    TYPES:
      "! <p   class="shorttext" lang="en"   >Test title "\\</p>
      "! Test description "\\
      num_text1 TYPE n LENGTH 4.


* integer
    TYPES:
      "! <p   class="shorttext" lang="en"   >myInteger</p>
      "! A simple Integer
      integer TYPE i.


* string
    TYPES:
      "! <p class="shorttext">myStringName</p>
      "! This is a string
      "! $maxLength 3
      mystring TYPE string.


* date
    TYPES:
      "! <p   class="shorttext">Date</p>
      "! This is a date
      my_date TYPE d.


* simple structure
    TYPES:
      "! <p class="shorttext synchronized" >mySimpleStructure</p>
      "! This is a simple structure
      BEGIN OF my_structure,
        "! <p class="shorttext">First Element</p>
        "! This is the first element
        "! $minLength 4
        my_first_element  TYPE mystring,
        "! <p class="shorttext">Second Element</p>
        "! This is the second element
        my_second_element TYPE i,
      END OF my_structure.

* simple structure, single field
    TYPES:
      "! <p class="shorttext synchronized" >mySimpleStructure</p>
      "! This is a simple structure
      BEGIN OF my_structure_single,
        "! <p class="shorttext">Foo Element</p>
        "! This is the first element
        "! $minLength 4
        foo_element TYPE mystring,
      END OF my_structure_single.

* simple structure, two fields
    TYPES:
      "! This is a two field structure
      BEGIN OF my_structure_two,
        "! foo1 element
        foo1 TYPE i,
        "! foo2 element
        foo2 TYPE i,
      END OF my_structure_two.

* simple table:
    TYPES:
    "! <p class="shorttext">A Standard Table</p>
    "! A standard table of myString
    my_standard_table TYPE STANDARD TABLE OF mystring WITH DEFAULT KEY.

    TYPES:
    "! <p class="shorttext">A Hashed Table</p>
    "! A hashed table of my_structure
    my_hashed_table TYPE HASHED TABLE OF my_structure WITH UNIQUE KEY my_first_element.

* structure with different table types
    TYPES:
    "! <p class="shorttext">A Sorted Table</p>
    "! A sorted table of my_structure with unique key
    my_sorted_table_unique TYPE SORTED TABLE OF my_structure WITH UNIQUE KEY my_second_element.

    TYPES:
    "! <p class="shorttext">A Sorted Table</p>
    "! A sorted table of my_structure with non unique key
    my_sorted_table_n_unique TYPE SORTED TABLE OF my_structure WITH NON-UNIQUE KEY my_second_element.

    TYPES:
      "! <p class="shorttext">A Structure With Tables</p>
      "! A structure with different table types
      BEGIN OF my_structure_with_tables,
        "! <p class="shorttext">First Table</p>
        "! First table
        first_table  TYPE my_sorted_table_unique,
        "! <p class="shorttext">Second Table</p>
        "! Second table
        second_table TYPE my_sorted_table_n_unique,
      END OF my_structure_with_tables.


* simple structure
    TYPES:
      "! <p class="shorttext synchronized" >mySimpleStructure</p>
      "! This is a $ simple st$ructure
      BEGIN OF my_structure2,
        "! <p class="shorttext">First Element</p>
        "! This is the first element
        "! $required
        my_first_element  TYPE mystring,
        "! <p class="shorttext">Second Element</p>
        "! This is the second element
        my_second_element TYPE i,
      END OF my_structure2.


* nested Structure
    TYPES:
      "! <p class="shorttext">Nested Structure</p>
      "! This is a nested structure
      BEGIN OF my_nested_structure,
        "! <p class="shorttext synchronized" >myElementComponente </p>
        "! This is a string element
        my_element TYPE string,
      END OF my_nested_structure,
      "! <p class="shorttext">myStructure</p>
      "! This is a complex structure
      BEGIN OF my_structure3,
        "! <p class="shorttext">nestedStruc</p>
        "! This is the nested structure
        nested_struc TYPE my_nested_structure,
        "! <p class="shorttext">My Element</p>
        "! This is my element
        "! $required
        my_element   TYPE string,
      END OF my_structure3.


* type with enum values:
    TYPES:
     "! <p class="shorttext"> myCategory </p>
     "! This is an enum
     "! $values    {    @link    zcl_aff_test_types.data:enum_values    }
     category TYPE n LENGTH 2.

    CONSTANTS:
      "! <p class="shorttext">Interface Category</p>
      "! Interface category
      BEGIN OF enum_values ##NEEDED,
        "! <p class="shorttext">generalCategory</p>
        "! General interface
        general      TYPE category VALUE ''00'',
        "! Interface definition of a classic BAdI
        classic_badi TYPE category VALUE ''01'',
      END OF enum_values.

* type with enum values without initial:
    TYPES:
     "! <p class="shorttext">Enum </p>
     "! This is an enum
     "! $values    {    @link    zcl_aff_test_types.data:enum_values_no_initial    }
     category_no_initial TYPE n LENGTH 2.

    CONSTANTS:
      "! <p class="shorttext">Interface Category</p>
      "! Interface category
      BEGIN OF enum_values_no_initial ##NEEDED,
        "! <p class="shorttext">Component 1</p>
        "! Component 1
        component_1 TYPE category_no_initial VALUE ''01'',
        "! <p class="shorttext">Component 2</p>
        "! Component 2
        component_2 TYPE category_no_initial VALUE ''02'',
      END OF enum_values_no_initial.

    TYPES:
      "! <p class="shorttext">Structure with Different Enum Types</p>
      "! Structure with different enum types
      BEGIN OF structure_with_different_enum,
        enum_without_all   TYPE category_no_initial,
        "! $default {@link zcl_aff_test_types.data:enum_values_no_initial.component_2 }
        enum_with_default  TYPE category_no_initial,
        "! $required
        enum_with_required TYPE category_no_initial,
      END OF structure_with_different_enum.

    "! <p class="shorttext"> ABAP Language Version </p>
    "! ABAP language version
    "! $values {@link zcl_aff_test_types.data:co_abap_language_version}
    "! $default {@link zcl_aff_test_types.data:co_abap_language_version.standard}
    TYPES language_version TYPE c LENGTH 1.

    CONSTANTS:
      "! <p class="shorttext"> ABAP Language Version </p>
      "! ABAP language version
      BEGIN OF co_abap_language_version,
        "! <p class="shorttext">Standard</p>
        "! Standard
        standard          TYPE language_version VALUE '' '',
        "! <p class="shorttext">ABAP Cloud Development</p>
        "! ABAP cloud development
        cloud_development TYPE language_version VALUE ''5'',
      END OF co_abap_language_version.

    TYPES:
      "! <p class="shorttext"> Header </p>
      "! The header for an ABAP main object
      BEGIN OF header,
        "! <p class="shorttext"> Description</p>
        "! Description of the ABAP object
        description           TYPE string,
        "! <p class="shorttext"> Original Language</p>
        "! Original language of the ABAP object
        original_language     TYPE sy-langu,
        "! <p class="shorttext"> ABAP Language Version</p>
        "! ABAP language version
        abap_language_version TYPE language_version,
      END OF header.

* complex structure with enum_values
    TYPES:
      "! <p class="shorttext"> Class Properties </p>
      "! Class properties
      BEGIN OF ty_class_properties,
        header         TYPE header,
        "! <p class="shorttext"> Class Category </p>
        "! Class category
        "! $values {@link zcl_aff_test_types.data:co_class_category}
        "! $default {@link zcl_aff_test_types.data:co_class_category.general}
        class_category TYPE n LENGTH 2,
      END OF ty_class_properties.

    CONSTANTS:
      "! <p class="shorttext">Class Category</p>
      "! Class category
      BEGIN OF co_class_category,
        "! <p class="shorttext">General</p>
        "! General
        general    TYPE n LENGTH 2 VALUE ''00'',
        "! <p class="shorttext">Exit Class</p>
        "! Exit class
        exit_class TYPE n LENGTH 2 VALUE ''01'',
      END OF co_class_category.


* deep nested structure
    TYPES:
      "! <p class="shorttext">outerStructure</p>
      "! ABAP Doc Comment TYPES list first level
      BEGIN OF list,
        "! <p class="shorttext">Outer Element 1</p>
        "! ABAP Doc field1
        "! $showAlways
        field1 TYPE i,
        "! <p class="shorttext">Outer Element 2</p>
        "! ABAP Doc field2
        "! $required
        field2 TYPE c LENGTH 2,
        "! <p class="shorttext">middleStructure</p>
        "! ABAP Doc list second level
        "! $required
        BEGIN OF list1,
          "! <p class="shorttext">Middle Element</p>
          "! ABAP Doc second level
          "! $required
          element_of_list1 TYPE i,
          "! <p class="shorttext">innerStructure</p>
          "! ABAP Doc third level
          BEGIN OF list2,
            "! <p class="shorttext">Inner Element</p>
            "! ABAP Doc third level
            "! $required
            element_of_list2 TYPE string,
          END OF list2,
        END OF list1,
        "! <p class="shorttext">Outer Element 3</p>
        "! ABAP Doc field3
        "! $required
        field3 TYPE c LENGTH 2,
      END OF list.

* deep nested structure, simple
    TYPES:
      BEGIN OF nsimple,
        BEGIN OF list1,
          "! <p class="shorttext">Inner Element</p>
          "! sdfsdf
          "! $required
          element TYPE string,
        END OF list1,
      END OF nsimple.

* nested structure with table
    TYPES:
      "! <p class="shorttext">outerStructure</p>
      "! ABAP Doc Comment TYPES list first level
      BEGIN OF outer_struc,
        "! <p class="shorttext">Outer Element 1</p>
        "! ABAP Doc field1 first level
        field1 TYPE i,
        "! <p class="shorttext">Inner Structure 1</p>
        "! Inner structure
        BEGIN OF inner_struc,
          "! <p class="shorttext">Inner Element</p>
          "! ABAP Doc element second level
          "! $required
          element_of_inner_struc TYPE i,
          "! <p class="shorttext">inner Table</p>
          "! ABAP Doc element second level
          "! $required
          inner_table_var        TYPE STANDARD TABLE OF string WITH NON-UNIQUE DEFAULT KEY,
        END OF inner_struc,
        "! <p class="shorttext">Outer Element 2</p>
        "! ABAP Doc field2 first level
        "! $required
        field2 TYPE c LENGTH 2,
      END OF outer_struc.


* nested structure with table and enum value
    TYPES:
      "! <p class="shorttext">Title of aff_test_type</p>
      "! Description of aff_test_type
      BEGIN OF aff_test_type,
        "! <p class="shorttext">Title of Field1</p>
        "! Description of field1
        field1            TYPE i,
        "! <p class="shorttext">Title of inner_struc</p>
        "! Description of inner_struc
        "! $showAlways
        BEGIN OF inner_struc,
          "! <p class="shorttext">Title of inner_element</p>
          "! Description of inner_element
          "! $required
          inner_element TYPE i,
          "! <p class="shorttext">Title of inner_table</p>
          "! Description of inner_table
          inner_table   TYPE STANDARD TABLE OF string WITH NON-UNIQUE DEFAULT KEY,
        END OF inner_struc,
        "! <p class="shorttext">Title of field2</p>
        "! Description of field2
        "! $required
        field2            TYPE c LENGTH 2,
      END OF aff_test_type.


* nested table
    TYPES:
      "! <p class="shorttext">Inner Table</p>
      "! This is the inner Table
      nested_table TYPE STANDARD TABLE OF string WITH DEFAULT KEY,
      "! <p class="shorttext">Outer Table</p>
      "! This is the outer table
      first_table  TYPE STANDARD TABLE OF nested_table WITH DEFAULT KEY.


* type with enum values, but wrong link:
    TYPES:
     "! <p class="shorttext"> myCategory </p>
     "! This is an enum
     "! $values    {    @link    zcl_aff_test_types.data:enum_values_wrong    }
     category_wrong TYPE n LENGTH 2.

*  structure with component to wrong enum_values link
    TYPES:
      "! <p class="shorttext"> Structure with Wrong Link </p>
      "! This is a structure with wrong enum_values link
      BEGIN OF structure_with_wrong_link,
        "! <p class="shorttext"> First Element </p>
        "! First element
        element_one TYPE string,
        "! <p class="shorttext"> Second Element </p>
        "! Second element
        element_two TYPE category_wrong,
      END OF structure_with_wrong_link.

* structure with enum value whose link can be found outside

    TYPES:
      "! <p class="shorttext"> String Table</p>
      "! Abap Doc of the table
      string_table TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    TYPES:
      "! <p class="shorttext"> Inner Structure</p>
      "! Abap Doc of the structure
      BEGIN OF inner_struc,
        "! <p class="shorttext">Field</p>
        "! Field
        field TYPE i,
      END OF inner_struc.
    TYPES:
      "! <p class="shorttext"> Structure With ABAP Doc Outside</p>
      "! Structure with ABAP Doc outside
      BEGIN OF structure_with_doc_outside,
        "! <p class="shorttext">Table1</p>
        "! Table1
        "! $required
        table1    TYPE string_table,
        "! <p class="shorttext">Structure</p>
        "! Structure
        structure TYPE inner_struc,
        "! <p class="shorttext">Table2</p>
        "! Table2
        table2    TYPE string_table,
      END OF structure_with_doc_outside.


* Types for number annotations

    TYPES:
      "! <p class="shorttext">Integer Outside</p>
      "! Integer outside
      "! $minimum: -25
      integer_outside TYPE i.


    TYPES:
      "! <p class="shorttext">Structure With Number Types </p>
      "! This is a structure with different number types
      BEGIN OF structure_with_numbers,
        "! <p class="shorttext">Integer With Maximum </p>
        "! Integer with maximum
        "! $maximum: 10
        integer                 TYPE i,
        "! <p class="shorttext">Float With Minimum And Exclusive Maximum </p>
        "! Float with minimum and exclusive maximum
        "! $exclusiveMaximum:100.9
        "! $minimum: -0.42
        float                   TYPE decfloat16,
        "! <p class="shorttext">Integer With Given Multiple</p>
        "! Integer with given multiple
        "! $exclusiveMinimum: 0
        "! $maximum: 99999
        "! $multipleOf: 1
        integer_with_multiple    TYPE i,
        "! <p class="shorttext">Packed Number With No Given Multiple</p>
        "! Packed number with no given multiple
        "! $exclusiveMinimum: 0
        packed_without_multiple TYPE p LENGTH 4 DECIMALS 1,
        "! <p class="shorttext">Integer Defined Outside</p>
        "! Integer defined outside and ABAP Doc number annotation outside
        integer_out             TYPE integer_outside,
        "! <p class="shorttext">Integer Defined Outside</p>
        "! Integer defined outside but with ABAP Doc number annotation here
        "! $maximum: 42
        integer_out_with_doc    TYPE integer_outside,
      END OF structure_with_numbers.


    TYPES:
      "! <p class="shorttext">Structure With Multiple Of Warning</p>
      "! This is a structure with not allowed multiple of value
      BEGIN OF structure_multiple_of_warning,
        "! <p class="shorttext">Integer With Maximum </p>
        "! Integer with maximum
        "! $maximum: 10
        integer                 TYPE i,
        "! <p class="shorttext">Integer With Given Multiple</p>
        "! Integer with given multiple
        "! $exclusiveMinimum: 0
        "! $maximum: 99999
        "! $multipleOf: 1
        integer_with_multiple    TYPE i,
        "! <p class="shorttext">Packed Number With Multiple</p>
        "! Packed number with given multiple
        "! $exclusiveMinimum: 0
        "! $multipleOf: 0.1
        packed_with_multiple TYPE p LENGTH 4 DECIMALS 1,
      END OF structure_multiple_of_warning.


* Types for default annotations

    TYPES:
      "! <p class="shorttext">Structure With Default</p>
      "! Structure to test default checks in simple transformation
      BEGIN OF structure_different_default,
        "! <p class="shorttext">Four Byte Integer</p>
        "! Four byte integer
        "! $default ''5''
        four_byte_int    TYPE i,
        "! <p class="shorttext">Eight Byte Integer</p>
        "! Eight byte integer
        "! $default ''55''
        eight_byte_int   TYPE int8,
        "! <p class="shorttext">Binary Floating Point Number</p>
        "! Binary floating point number
        "! $default ''4.3''
        bin_float        TYPE f,
        "! <p class="shorttext">Byte Like</p>
        "! Byte like
        "! $default ''FFFF''
        byte_like        TYPE x LENGTH 2,
        "! <p class="shorttext">Byte Like2</p>
        "! Byte like2
        "! $default ''FF00FF''
        byte_like2       TYPE xstring,
        "! <p class="shorttext">Decimal Floating Point Number</p>
        "! Decimal floating point number with 16 places
        "! $default ''25.26''
        decimal_float_16 TYPE decfloat16,
        "! <p class="shorttext">Decimal Floating Point Number</p>
        "! Decimal floating point number with 34 places
        "! $default ''123.05''
        decimal_float_34 TYPE decfloat34,
        "! <p class="shorttext">Packed Number</p>
        "! Packed number
        "! $default ''123.45''
        packed_number    TYPE p LENGTH 3 DECIMALS 2,
        "! <p class="shorttext">Numeric Text Field</p>
        "! Numeric text field
        "! $default ''1067''
        numeric_text     TYPE n LENGTH 4,
        "! <p class="shorttext">Character Text</p>
        "! Character text
        "! $default ''abcde''
        character_text   TYPE c LENGTH 5,
        "! <p class="shorttext">String Text</p>
        "! String text
        "! $default ''Default text''
        string_text      TYPE string,
        "! <p class="shorttext">Date</p>
        "! Date
        "! $default ''19720401''
        date_field       TYPE d,
        "! <p class="shorttext">Time</p>
        "! Time
        "! $default ''201500''
        time_field       TYPE t,
        "!  <p class="shorttext">Date Time</p>
        "! Date time: No support
        "! $default ''9999-12-31T23:59:59.9999999''
        date_time_field  TYPE utclong,
        "! <p class="shorttext">Boolean</p>
        "! Boolean with default abap_true
        "! $default ''abap_true''
        bool_true        TYPE abap_bool,
        "! <p class="shorttext">Boolean</p>
        "! Boolean with default abap_false
        "! $default ''abap_false''
        bool_false       TYPE abap_bool,
        "! <p class="shorttext">Enum Type</p>
        "! Enum type
        "! $default {@link zcl_aff_test_types.data:co_class_category.exit_class }
        "! $values  {@link zcl_aff_test_types.data:co_class_category }
        enum_type        TYPE n LENGTH 2,
      END OF structure_different_default.

    TYPES:
      "! <p class="shorttext">Structure With Default</p>
      "! Structure with default
      BEGIN OF structure_with_default_problem,
        "! <p class="shorttext">Integer</p>
        "! Integer
        "! $default: ''5''
        "! $required
        integer          TYPE i,
        "! <p class="shorttext">String Element</p>
        "! String element with default value
        "! $default: ''DefaultString''
        "! $showAlways
        string_element   TYPE string,
        "! <p class="shorttext">Enum Value</p>
        "! Enum value with default
        "! $default {@link zcl_aff_test_types.data:co_class_category.exit_class }
        "! $values  {@link zcl_aff_test_types.data:co_class_category }
        "! $required
        enum_required    TYPE n LENGTH 2,
        "! <p class="shorttext">Enum Value</p>
        "! Enum value with default
        "! $default {@link zcl_aff_test_types.data:co_class_category.exit_class }
        "! $values  {@link zcl_aff_test_types.data:co_class_category }
        "! $showAlways
        enum_show_always TYPE n LENGTH 2,
      END OF structure_with_default_problem.

    "! <p class="shorttext">Original Language</p>
    "! Original language of the ABAP object
    TYPES ty_original_language TYPE sy-langu.
    TYPES: BEGIN OF ty_header_60_src,
             original_language TYPE ty_original_language,
           END OF ty_header_60_src.

    TYPES:
      "! <p class="shorttext">Inner Structure</p>
      "! Inner structure
      BEGIN OF inner_struc_with_default,
        "! <p class="shorttext">Inner Component</p>
        "! Inner component
        "! $default ''Default Value''
        inner_component TYPE string,
      END OF inner_struc_with_default,

      "! <p class="shorttext">Middle Structure</p>
      "! Middle structure
      BEGIN OF middle_struc_with_default,
        "! <p class="shorttext">Middle Component</p>
        "! Middle component
        "! $default ''abcd''
        middle_component TYPE c LENGTH 4,
        "! <p class="shorttext">Inner Structure</p>
        "! Inner structure
        inner_struc      TYPE inner_struc_with_default,
      END OF middle_struc_with_default,

      "! <p class="shorttext">Nested Structure</p>
      "! Nested structure
      BEGIN OF nested_struc_with_default,
        "! <p class="shorttext">Outer Component</p>
        "! Outer component
        "! $default ''10''
        outer_component TYPE i,
        "! <p class="shorttext">Middle Structure</p>
        "! Middle structure
        middle_struc    TYPE middle_struc_with_default,
      END OF nested_struc_with_default.

*  component with wrong default links
    TYPES:
      "! <p class="shorttext">Structure With Wrong Default</p>
      "! Structure with wrong default
      BEGIN OF structure_with_wrong_default,
        "! <p class="shorttext">First Element</p>
        "! First element
        "! $default {@link zcl_aff_test_types.data:enum_values.wrong_component }
        element_one TYPE category,
        "! <p class="shorttext">Second Element</p>
        "! Second element
        "! $default {@link wrong_link }
        element_two TYPE category,
      END OF structure_with_wrong_default.


* Types for callbackClass annotation

* string with callbackClass
    TYPES:
      "! <p class="shorttext">String With Callback</p>
      "! This is a String with a CallbackClass
      "! $maxLength 3
      "! $callbackClass {     @link    zcl_aff_test_types    }
    simple_callback TYPE string.


* table with callback, components are strings
    TYPES:
      "! <p class="shorttext">my_table</p>
      "! A standard table of strings with CallbackClass
      "! $callbackClass {     @link    zcl_aff_test_types    }
      "! $required
      table_callback TYPE STANDARD TABLE OF mystring WITH DEFAULT KEY.


* table with callback, components are tables
    TYPES:
      "! <p class="shorttext">my_table_of_table</p>
      "! A standard table of my_table
      "! $callbackClass {     @link    zcl_aff_test_types   }
      table_call_of_table TYPE STANDARD TABLE OF my_standard_table WITH DEFAULT KEY.


* simple structure with callback
    TYPES:
      "! <p class="shorttext">Structure With Callback</p>
      "! Structure with callback
      "! $callbackClass {     @link    zcl_aff_test_types    }
      BEGIN OF structure_callback,
        "! <p class="shorttext">First Element</p>
        "! This is the first element
        element_name TYPE i,
      END OF structure_callback.



* table of my_structure_with_callback
    TYPES:
      "! <p class="shorttext">my_table</p>
      "! A standard table of my_structure_with_callback
      table_of_struc_with_callback TYPE STANDARD TABLE OF structure_callback WITH DEFAULT KEY.


* simple structure with component my_table_with_callback
    TYPES:
      "! <p class="shorttext synchronized" >mySimpleStructure</p>
      "! This is a simple structure
      BEGIN OF struc_of_table_with_callback,
        "! <p class="shorttext synchronized" >First Element</p>
        "! This is the first element
        "! $required
        element_table_callback TYPE table_callback,
        "! <p class="shorttext synchronized" >Second Element</p>
        "! This is the second element
        my_second_element      TYPE i,
      END OF struc_of_table_with_callback.

* simple structure with component my_structure_with_callback
    TYPES:
      "! <p class="shorttext synchronized" >mySimpleStructure</p>
      "! This is a simple structure
      BEGIN OF struc_in_struc_with_callback,
        "! <p class="shorttext synchronized" >First Element</p>
        "! This is the first element
        my_first_element           TYPE string,
        "! <p class="shorttext synchronized" >Second Element</p>
        "! This is the second element
        "! $required
        element_structure_callback TYPE structure_callback,
        "! <p class="shorttext synchronized" >Third Element</p>
        "! This is the third element
        my_third_element           TYPE i,
      END OF struc_in_struc_with_callback.

*  simple structure with component callback
    TYPES:
      "! <p class="shorttext synchronized" >Simple Structure</p>
      "! This is a  simple structure
      BEGIN OF structure_with_elem_callback,
        "! <p class="shorttext synchronized" >First Element</p>
        "! This is the first element
        "! $minLength 2
        "! $required
        "! $callbackClass {     @link    zcl_aff_test_types    }
        element_callback  TYPE mystring,
        "! <p class="shorttext synchronized" >Second Element</p>
        "! This is the second element
        my_second_element TYPE i,
      END OF structure_with_elem_callback.

*      simple structure with wrong callbackclass link
    TYPES:
      "! <p class="shorttext synchronized" >Structure With Wrong Callback</p>
      "! Structure with wrong callback
      BEGIN OF structure_with_wrong_callback,
        "! <p class="shorttext synchronized" >First Element</p>
        "! This is the first element
        "! $minLength 2
        "! $callbackClass {     @link    cl_aff_notest_types_for_writer    }
        "! $required
        my_first_element  TYPE mystring,
        "! <p class="shorttext synchronized" >Second Element</p>
        "! This is the second element
        "! $callbackClass {   wrong_link    }
        "! $maximum 4
        my_second_element TYPE i,
      END OF structure_with_wrong_callback.

*      Types with missing titles and description
    TYPES:
      element_no_title_descr TYPE string.

    TYPES:
      BEGIN OF inner_struc_no_title_descr,
        "! <p class="shorttext" >Inner Field</p>
        "! Inner field
        inner_field TYPE i,
      END OF inner_struc_no_title_descr.

    TYPES:
      table_no_title_descr TYPE STANDARD TABLE OF string WITH DEFAULT KEY.

    TYPES:
      BEGIN OF structure_no_title_descr,
        "! Only description
        field1      TYPE string,
        "! <p class="shorttext synchronized" >Only Title</p>
        inner_struc TYPE inner_struc_no_title_descr,
        inner_table TYPE table_no_title_descr,
      END OF structure_no_title_descr.


    TYPES:
      BEGIN OF ty_include_type,
        "! <p class="shorttext">First Element In Include</p>
        "! $required
        first_element  TYPE string,
        second_element TYPE my_structure,
        "! <p class="shorttext">Third Element In Include</p>
        "! Third element in include
        "! $default ''10''
        third_element  TYPE i,
      END OF ty_include_type.

    TYPES:
      "! <p class="shorttext">Structure With Include</p>
      "! Structure with include
      BEGIN OF structure_with_include.
        INCLUDE TYPE ty_include_type.
    TYPES:
      "! Other element
      "! $required
        other_element   TYPE i,
        "! <p class="shorttext">Other structure</p>
        "! Other Structure
        other_structure TYPE my_structure,
      END OF structure_with_include.

    CONSTANTS:
      BEGIN OF co_overwritten_values,
        "! <p class="shorttext">Option 1</p>
        "! Option 1
        "! $enumValue ''AAAA''
        first_value  TYPE c LENGTH 2 VALUE ''AA'',
        "! <p class="shorttext">Option 2</p>
        "! Option 2
        "! $enumValue ''BBBB''
        second_value TYPE c LENGTH 2 VALUE ''BB'',
      END OF co_overwritten_values.

    TYPES:
      "! <p class="shorttext">Structure With Overwritten Enum Values</p>
      "! Structure with overwritten enum values
      BEGIN OF struc_with_own_enum_values,
        "! <p class="shorttext">Enum Component</p>
        "! Enum component
        "! $values  {@link zcl_aff_test_types.data:co_overwritten_values }
        "! $default {@link zcl_aff_test_types.data:co_overwritten_values.first_value }
        enum_component TYPE c LENGTH 2,
      END OF struc_with_own_enum_values.

    CLASS-DATA subschema TYPE string_table.

    CLASS-DATA expected_var TYPE REF TO data.

    CLASS-METHODS get_subschema
      RETURNING VALUE(subschema) TYPE string_table.

    CLASS-METHODS serialize
      IMPORTING
        writer                     TYPE REF TO if_sxml_writer
        simple_callback            TYPE simple_callback OPTIONAL
        structure_callback         TYPE structure_callback OPTIONAL
        table_callback             TYPE table_callback OPTIONAL
        element_callback           TYPE string OPTIONAL
        element_structure_callback TYPE structure_callback OPTIONAL
        element_table_callback     TYPE table_callback OPTIONAL.

    CLASS-METHODS deserialize
      IMPORTING
        reader                     TYPE REF TO if_sxml_reader
      EXPORTING
        simple_callback            TYPE simple_callback
        structure_callback         TYPE structure_callback
        table_callback             TYPE table_callback
        element_callback           TYPE string
        element_structure_callback TYPE structure_callback
        element_table_callback     TYPE table_callback
      RAISING
        cx_sxml_error.

    CLASS-METHODS set_expected
      IMPORTING
        expected_variable TYPE any.

  PROTECTED SECTION.
  PRIVATE SECTION.
    CLASS-METHODS jump_to_end
      IMPORTING
        reader TYPE REF TO if_sxml_reader
      RAISING
        cx_sxml_parse_error.
ENDCLASS.



CLASS zcl_aff_test_types IMPLEMENTATION.


  METHOD get_subschema.
    subschema = zcl_aff_test_types=>subschema.
  ENDMETHOD.


  METHOD serialize.
    IF ( simple_callback IS SUPPLIED ).
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
    ELSEIF ( structure_callback IS SUPPLIED ).
      writer->open_element( name   = ''str'' ).
      writer->write_attribute( name = ''name'' value = ''elementName'' ) ##NO_TEXT.
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
      writer->close_element( ).
    ELSEIF ( table_callback IS SUPPLIED ).
      writer->open_element( name   = ''str'' ).
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
      writer->close_element( ).
    ELSEIF ( element_callback IS SUPPLIED ).
      writer->write_attribute( name = ''name'' value = ''elementCallback'' ) ##NO_TEXT.
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
    ELSEIF ( element_structure_callback IS SUPPLIED ).
      writer->write_attribute( name = ''name'' value = ''elementStructureCallback'' ) ##NO_TEXT.
      writer->open_element( name = ''str'' ).
      writer->write_attribute( name = ''name'' value = ''elementName'' ).
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
      writer->close_element( ).
    ELSEIF ( element_table_callback IS SUPPLIED ).
      writer->write_attribute( name = ''name'' value = ''elementTableCallback'' ) ##NO_TEXT.
      writer->open_element( name   = ''str'' ).
      writer->write_value( ''callbackClass was called'' ) ##NO_TEXT.
      writer->close_element( ).
    ENDIF.
  ENDMETHOD.


  METHOD deserialize.
    FIELD-SYMBOLS:
        <attr>    TYPE data.

    reader->next_node( ).

    ASSIGN expected_var->* TO <attr>.
    IF ( simple_callback IS SUPPLIED ).
      simple_callback = <attr>.
    ELSEIF ( structure_callback IS SUPPLIED ).
      structure_callback = <attr>.
      jump_to_end( reader ).
    ELSEIF ( table_callback IS SUPPLIED ).
      table_callback = <attr>.
      jump_to_end( reader ).
    ELSEIF ( element_callback IS SUPPLIED ).
      element_callback = <attr>.
    ELSEIF ( element_structure_callback IS SUPPLIED ).
      element_structure_callback = <attr>.
      jump_to_end( reader ).
    ELSEIF ( element_table_callback IS SUPPLIED ).
      element_table_callback = <attr>.
      jump_to_end( reader ).
    ENDIF.
  ENDMETHOD.


  METHOD jump_to_end.
    DATA type_start LIKE reader->name.
    DATA exit TYPE abap_boolean VALUE abap_false.
    type_start = reader->name.

    IF reader->node_type = if_sxml_node=>co_nt_element_close.
      exit = abap_true.
    ENDIF.
    WHILE exit = abap_false.
      reader->next_node( ).
      IF reader->node_type = if_sxml_node=>co_nt_element_close AND reader->name = type_start.
        exit = abap_true.
      ENDIF.
    ENDWHILE.
  ENDMETHOD.


  METHOD set_expected.
    GET REFERENCE OF expected_variable INTO expected_var.
  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_TOOLS_UNIT_TEST_HELPER          ', 'CLASS zcl_aff_tools_unit_test_helper DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS
  PUBLIC.

  PUBLIC SECTION.

    CLASS-METHODS:
      "! Checks whether the message is contained in the log.
      assert_log_contains_msg
        IMPORTING
          log                TYPE REF TO zif_aff_log
          exp_message        TYPE scx_t100key
          exp_type           TYPE symsgty DEFAULT zif_aff_log=>c_message_type-error
          exp_component_name TYPE string OPTIONAL,

      "! Checks whether the text string is contained in the log.
      assert_log_contains_text
        IMPORTING
          log                TYPE REF TO zif_aff_log
          exp_text           TYPE string
          exp_type           TYPE symsgty DEFAULT zif_aff_log=>c_message_type-error
          exp_component_name TYPE string OPTIONAL,

      "! Asserts that both string tables are equal, ignoring all spaces.
      assert_equals_ignore_spaces
        IMPORTING
          act_data TYPE string_table
          exp_data TYPE string_table,

      "! Asserts that no message with a severity higher or equal than the threshold is contained in the log.
      "! If a corresponding message is contained, a critical assertion is thrown and the messages are displayed in the details
      "!
      "! @parameter log | The log
      "! @parameter message_severity_threshold | Severity threshold. All messages with higher or equal severity are reported
      assert_log_has_no_message
        IMPORTING
          log                        TYPE REF TO zif_aff_log
          message_severity_threshold TYPE symsgty DEFAULT zif_aff_log=>c_message_type-warning,

      "! Asserts that string tables are equal.
      assert_string_tabs
        IMPORTING
          exp               TYPE string_table
          act               TYPE string_table
          ignore_case       TYPE abap_bool DEFAULT abap_false
          ignore_spaces     TYPE abap_bool DEFAULT abap_false
          ignore_linebreaks TYPE abap_bool DEFAULT abap_false.

  PROTECTED SECTION.
  PRIVATE SECTION.


ENDCLASS.



CLASS zcl_aff_tools_unit_test_helper IMPLEMENTATION.

  METHOD assert_log_contains_msg.
    DATA act_messages TYPE zif_aff_log=>tt_log_out.
    DATA temp1 TYPE symsg.
    DATA msg LIKE temp1.
    DATA temp3 LIKE sy-subrc.
    DATA temp2 LIKE sy-subrc.
    act_messages = log->get_messages( ).

    CLEAR temp1.
    temp1-msgid = exp_message-msgid.
    temp1-msgno = exp_message-msgno.
    temp1-msgty = exp_type.
    temp1-msgv1 = exp_message-attr1.
    temp1-msgv2 = exp_message-attr2.
    temp1-msgv3 = exp_message-attr3.
    temp1-msgv4 = exp_message-attr4.

    msg = temp1.

    READ TABLE act_messages WITH KEY type = exp_type message = msg TRANSPORTING NO FIELDS.
    temp3 = sy-subrc.
    IF exp_component_name IS SUPPLIED.

      READ TABLE act_messages WITH KEY type = exp_type message = msg component_name = exp_component_name TRANSPORTING NO FIELDS.
      temp2 = sy-subrc.
      IF NOT temp2 = 0.
        cl_abap_unit_assert=>fail( msg = ''The expected message is not contained in the log'' ).
      ENDIF.
    ELSEIF NOT temp3 = 0.
      cl_abap_unit_assert=>fail( msg = ''The expected message is not contained in the log'' ).
    ENDIF.
  ENDMETHOD.


  METHOD assert_log_contains_text.
    DATA act_messages TYPE zif_aff_log=>tt_log_out.
    DATA temp5 LIKE sy-subrc.
    DATA temp4 LIKE sy-subrc.
    act_messages = log->get_messages( ).

    READ TABLE act_messages WITH KEY type = exp_type message_text = exp_text TRANSPORTING NO FIELDS.
    temp5 = sy-subrc.
    IF exp_component_name IS SUPPLIED.

      READ TABLE act_messages WITH KEY type = exp_type message_text = exp_text component_name = exp_component_name TRANSPORTING NO FIELDS.
      temp4 = sy-subrc.
      IF NOT temp4 = 0.
        cl_abap_unit_assert=>fail( msg = ''The expected message is not contained in the log'' ).
      ENDIF.
    ELSEIF NOT temp5 = 0.
      cl_abap_unit_assert=>fail( msg = ''The expected message is not contained in the log'' ).
    ENDIF.

  ENDMETHOD.

  METHOD assert_log_has_no_message.
    DATA types_to_report TYPE STANDARD TABLE OF symsgty.
    DATA temp6 LIKE types_to_report.
    DATA temp8 LIKE types_to_report.
    DATA temp10 LIKE types_to_report.
    DATA temp12 LIKE types_to_report.
    DATA max_severity TYPE symsgty.
    DATA temp14 LIKE sy-subrc.
    DATA detail TYPE string.
    DATA temp15 TYPE zif_aff_log=>tt_log_out.
    FIELD-SYMBOLS <message> LIKE LINE OF temp15.
    DATA temp16 LIKE sy-subrc.

    CASE message_severity_threshold.
      WHEN zif_aff_log=>c_message_type-info.

        CLEAR temp6.
        INSERT zif_aff_log=>c_message_type-info INTO TABLE temp6.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp6.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp6.
        types_to_report = temp6.
      WHEN zif_aff_log=>c_message_type-warning.

        CLEAR temp8.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp8.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp8.
        types_to_report = temp8.
      WHEN zif_aff_log=>c_message_type-error.

        CLEAR temp10.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp10.
        types_to_report = temp10.
      WHEN OTHERS.

        CLEAR temp12.
        INSERT zif_aff_log=>c_message_type-info INTO TABLE temp12.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp12.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp12.
        types_to_report = temp12.
    ENDCASE.


    max_severity = log->get_max_severity( ).

    READ TABLE types_to_report WITH KEY table_line = max_severity TRANSPORTING NO FIELDS.
    temp14 = sy-subrc.
    IF temp14 = 0.


      temp15 = log->get_messages( ).

      LOOP AT temp15 ASSIGNING <message>.

        READ TABLE types_to_report WITH KEY table_line = <message>-type TRANSPORTING NO FIELDS.
        temp16 = sy-subrc.
        IF temp16 = 0.
          detail = detail && <message>-message_text && cl_abap_char_utilities=>newline.
        ENDIF.
      ENDLOOP.
      cl_abap_unit_assert=>fail( msg = |Log contains messages with severity >= { message_severity_threshold }| detail = detail ).
    ENDIF.
  ENDMETHOD.


  METHOD assert_equals_ignore_spaces.
    DATA exp LIKE exp_data.
    DATA act LIKE act_data.
    FIELD-SYMBOLS <exp_line> LIKE LINE OF exp.
    FIELD-SYMBOLS <act_line> LIKE LINE OF act.
    exp = exp_data.

    act = act_data.

    LOOP AT exp ASSIGNING <exp_line>.
      CONDENSE <exp_line> NO-GAPS.
    ENDLOOP.

    LOOP AT act ASSIGNING <act_line>.
      CONDENSE <act_line> NO-GAPS.
    ENDLOOP.
    cl_abap_unit_assert=>assert_equals( exp = exp act = act ).
  ENDMETHOD.


  METHOD assert_string_tabs.
    DATA exp_work_copy LIKE exp.
    DATA act_work_copy LIKE act.
    FIELD-SYMBOLS <exp_line> LIKE LINE OF exp_work_copy.
    FIELD-SYMBOLS <act_line> LIKE LINE OF act_work_copy.
    DATA exp_string TYPE string.
    DATA act_string TYPE string.
    exp_work_copy = exp.

    act_work_copy = act.

    IF ignore_spaces = abap_true.

      LOOP AT exp_work_copy ASSIGNING <exp_line>.
        CONDENSE <exp_line> NO-GAPS.
      ENDLOOP.

      LOOP AT act_work_copy ASSIGNING <act_line>.
        CONDENSE <act_line> NO-GAPS.
      ENDLOOP.
    ENDIF.

    IF ignore_case = abap_true.
      LOOP AT exp_work_copy ASSIGNING <exp_line>.
        <exp_line> = to_lower( <exp_line> ).
      ENDLOOP.
      LOOP AT act_work_copy ASSIGNING <act_line>.
        <act_line> = to_lower( <act_line> ).
      ENDLOOP.
    ENDIF.

    IF ignore_linebreaks = abap_true.

      CONCATENATE LINES OF exp_work_copy INTO exp_string.

      CONCATENATE LINES OF act_work_copy INTO act_string.
      cl_abap_unit_assert=>assert_equals( exp = exp_string act = act_string msg = ''Expected and actual abap source does not match'' ).
      RETURN.
    ENDIF.

    cl_abap_unit_assert=>assert_equals( exp = exp_work_copy act = act_work_copy msg = ''Expected and actual abap source does not match'' ).
  ENDMETHOD.


ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_WRITER                          ', 'CLASS zcl_aff_writer DEFINITION
  PUBLIC
  ABSTRACT
  CREATE PUBLIC .

  PUBLIC SECTION.
    INTERFACES zif_aff_writer
      FINAL METHODS open_node close_node write_element get_output.

    METHODS constructor.

  PROTECTED SECTION.
    TYPES:
      BEGIN OF ty_stack_entry,
        operation TYPE string,
        name      TYPE string,
      END OF ty_stack_entry.

    TYPES:
      BEGIN OF ty_structure_stack,
        name          TYPE string,
        absolute_name TYPE abap_abstypename,
      END OF ty_structure_stack,
      tt_structure_stack TYPE STANDARD TABLE OF ty_structure_stack.

    CONSTANTS:
      c_indent_number_characters TYPE i VALUE 2.

    TYPES temp1_f81e03d158 TYPE STANDARD TABLE OF ty_stack_entry.
    DATA:
      output                  TYPE string_table,
      content                 TYPE string_table,
      stack_of_structure      TYPE tt_structure_stack,
      stack                   TYPE temp1_f81e03d158,
      indent_level            TYPE i VALUE 0,
      log                     TYPE REF TO zif_aff_log,
      abap_doc_parser         TYPE REF TO zcl_aff_abap_doc_parser,
      ignore_til_indent_level TYPE i,
      abap_doc                TYPE zcl_aff_abap_doc_parser=>abap_doc,
      fullname_of_type        TYPE string.

    METHODS: format_name
      IMPORTING name          TYPE string
      RETURNING VALUE(result) TYPE string,
      get_json_type_from_description
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
        RETURNING VALUE(result)       TYPE string
        RAISING   zcx_aff_tools,

      write_open_tag FINAL
        IMPORTING
          line TYPE string,
      write_closing_tag FINAL
        IMPORTING
          line TYPE string,
      add_to_stack FINAL
        IMPORTING
          entry TYPE ty_stack_entry,
      last_operation FINAL
        RETURNING VALUE(result) TYPE string,
      append_to_previous_line FINAL
        IMPORTING
          string TYPE string,
      append_before_output,
      append_after_output,

      write_tag ABSTRACT
        IMPORTING
          line TYPE string,

      write_element ABSTRACT
        IMPORTING
                  element_name        TYPE string
                  element_description TYPE REF TO cl_abap_elemdescr
        RAISING   zcx_aff_tools,

      open_structure ABSTRACT
        IMPORTING
                  structure_name        TYPE string
                  structure_description TYPE REF TO cl_abap_typedescr
        RAISING   zcx_aff_tools,

      close_structure ABSTRACT
        IMPORTING
                  structure_name        TYPE string
                  structure_description TYPE REF TO cl_abap_typedescr
        RAISING   zcx_aff_tools,

      open_table ABSTRACT
        IMPORTING
                  table_name        TYPE string
                  table_description TYPE REF TO cl_abap_typedescr
        RAISING   zcx_aff_tools ##NEEDED,

      close_table ABSTRACT
        IMPORTING
                  table_name        TYPE string
                  table_description TYPE REF TO cl_abap_typedescr
        RAISING   zcx_aff_tools ##NEEDED,

      format_to_camel_case
        IMPORTING name          TYPE string
        RETURNING VALUE(result) TYPE string,

      call_reader_and_decode
        IMPORTING
          name_of_source       TYPE string
          element_name         TYPE string
        RETURNING
          VALUE(read_abap_doc) TYPE zcl_aff_abap_doc_parser=>abap_doc,

      delete_first_of_struc_stack,

      get_all_path_information
        IMPORTING
          name                    TYPE string
        EXPORTING
          VALUE(source_type)      TYPE string
          VALUE(source)           TYPE string
          VALUE(fullname_of_type) TYPE string,

      get_structure_of_enum_values
        IMPORTING
          link_to_values             TYPE string
          fullname_of_type           TYPE string
        EXPORTING
          VALUE(structure_of_values) TYPE REF TO cl_abap_structdescr
          VALUE(name_of_source)      TYPE string
          VALUE(name_of_constant)    TYPE string,


      get_abap_doc_for_absolute_name
        IMPORTING
          absolute_name   TYPE abap_abstypename
        RETURNING
          VALUE(abap_doc) TYPE zcl_aff_abap_doc_parser=>abap_doc,

      compare_abap_doc
        IMPORTING
          abap_doc_additional TYPE zcl_aff_abap_doc_parser=>abap_doc
        CHANGING
          abap_doc_base       TYPE zcl_aff_abap_doc_parser=>abap_doc,

      get_splitted_absolute_name
        IMPORTING
          absolute_name TYPE abap_abstypename
        RETURNING
          VALUE(result) TYPE string_table,

      get_default_from_link
        IMPORTING
          link                 TYPE string
          fullname_of_type     TYPE string
          element_type         TYPE abap_typekind
        RETURNING
          VALUE(default_value) TYPE string,

      remove_leading_trailing_spaces
        CHANGING
          string_to_work_on TYPE string,

      is_callback_class_valid
        IMPORTING
          class_name      TYPE string
          component_name  TYPE string
        RETURNING
          VALUE(is_valid) TYPE abap_boolean,

      is_default_value_valid
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
                  default_value       TYPE string
                  fullname_of_type    TYPE string
        RETURNING VALUE(is_valid)     TYPE abap_boolean
        RAISING   zcx_aff_tools,

      is_sy_langu
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE abap_bool,

      clear_type_specifics,

      check_redundant_annotations.

  PRIVATE SECTION.
    CONSTANTS:
      BEGIN OF c_abap_types,
        boolean   TYPE string VALUE \`ABAP_BOOLEAN;ABAP_BOOL;BOOLEAN;BOOLE_D;XFELD;XSDBOOLEAN;FLAG\`,
        timestamp TYPE string VALUE \`TIMESTAMP;TIMESTAMPL\`,
      END OF c_abap_types.


    METHODS: is_type_timestamp
      IMPORTING element_description TYPE REF TO cl_abap_elemdescr
      RETURNING VALUE(result)       TYPE abap_boolean,

      is_type_boolean
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
        RETURNING VALUE(result)       TYPE abap_boolean,

      get_constant_as_struc
        IMPORTING
          name_of_source           TYPE string
          name_of_constant         TYPE string
          fullname_of_type         TYPE string
        RETURNING
          VALUE(constant_as_struc) TYPE REF TO cl_abap_structdescr,

      get_infos_of_values_link
        IMPORTING
          values_link             TYPE string
        EXPORTING
          VALUE(name_of_source)   TYPE string
          VALUE(name_of_constant) TYPE string,

      validate_default_link
        IMPORTING
          splitted_link    TYPE string_table
          fullname_of_type TYPE string
          element_type     TYPE abap_typekind
        RETURNING
          VALUE(is_valid)  TYPE abap_boolean.



ENDCLASS.

CLASS zcl_aff_writer IMPLEMENTATION.

  METHOD constructor.
    CREATE OBJECT log TYPE zcl_aff_log.
    CREATE OBJECT abap_doc_parser TYPE zcl_aff_abap_doc_parser.
  ENDMETHOD.


  METHOD format_name.
    result = me->format_to_camel_case( name ).
  ENDMETHOD.


  METHOD format_to_camel_case.
    DATA lower_name TYPE string.
    lower_name = to_lower( name ).
    result = to_mixed( lower_name ).
  ENDMETHOD.


  METHOD get_json_type_from_description.
    DATA temp1 TYPE string.
    DATA temp2 TYPE string.
    DATA temp3 TYPE REF TO zcx_aff_tools.
    CASE element_description->type_kind.
      WHEN cl_abap_typedescr=>typekind_string OR cl_abap_typedescr=>typekind_csequence OR
           cl_abap_typedescr=>typekind_clike OR cl_abap_typedescr=>typekind_char OR
           cl_abap_typedescr=>typekind_w OR cl_abap_typedescr=>typekind_xstring OR
           cl_abap_typedescr=>typekind_hex OR cl_abap_typedescr=>typekind_num OR cl_abap_typedescr=>typekind_enum.

        IF is_type_boolean( element_description ) IS NOT INITIAL.
          temp1 = zif_aff_writer=>type_info-boolean.
        ELSE.
          temp1 = zif_aff_writer=>type_info-string.
        ENDIF.
        result = temp1.
      WHEN cl_abap_typedescr=>typekind_float OR cl_abap_typedescr=>typekind_int OR
           cl_abap_typedescr=>typekind_int1 OR cl_abap_typedescr=>typekind_int2 OR
           cl_abap_typedescr=>typekind_int8 OR cl_abap_typedescr=>typekind_decfloat OR
           cl_abap_typedescr=>typekind_decfloat16 OR cl_abap_typedescr=>typekind_decfloat34  OR cl_abap_typedescr=>typekind_numeric.
        result = zif_aff_writer=>type_info-numeric.
      WHEN cl_abap_typedescr=>typekind_packed.

        IF is_type_timestamp( element_description ) IS NOT INITIAL.
          temp2 = zif_aff_writer=>type_info-date_time.
        ELSE.
          temp2 = zif_aff_writer=>type_info-numeric.
        ENDIF.
        result = temp2.
      WHEN cl_abap_typedescr=>typekind_date OR cl_abap_typedescr=>typekind_time OR
           cl_abap_typedescr=>typekind_utclong.
        result = zif_aff_writer=>type_info-date_time.
      WHEN OTHERS.

        CREATE OBJECT temp3 TYPE zcx_aff_tools.
        RAISE EXCEPTION temp3.
    ENDCASE.
  ENDMETHOD.


  METHOD is_type_boolean.
    DATA type_name TYPE string.
    DATA temp1 TYPE xsdboolean.
    type_name = element_description->get_relative_name( ).

    temp1 = boolc( element_description->output_length = 1 AND ( type_name IS NOT INITIAL AND c_abap_types-boolean CS type_name ) ).
    result = temp1.
  ENDMETHOD.


  METHOD is_type_timestamp.
    DATA type_name TYPE string.
    DATA temp2 TYPE xsdboolean.
    type_name = element_description->get_relative_name( ).

    temp2 = boolc( type_name IS NOT INITIAL AND c_abap_types-timestamp CS type_name ).
    result = temp2.
  ENDMETHOD.


  METHOD zif_aff_writer~write_element.
    DATA temp4 TYPE zcl_aff_writer=>ty_stack_entry.
    write_element( element_name = element_name element_description = element_description ).

    CLEAR temp4.
    temp4-operation = zif_aff_writer=>operation-write_element.
    temp4-name = element_name.
    add_to_stack( temp4 ).
  ENDMETHOD.


  METHOD zif_aff_writer~open_node.
    DATA temp5 TYPE zcl_aff_writer=>ty_stack_entry.
    DATA temp6 TYPE zcl_aff_writer=>ty_stack_entry.
    DATA temp7 TYPE REF TO zcx_aff_tools.
    CASE node_description->kind.
      WHEN cl_abap_typedescr=>kind_struct.
        open_structure( structure_name = node_name structure_description = node_description ).

        CLEAR temp5.
        temp5-operation = zif_aff_writer=>operation-open_structure.
        temp5-name = node_name.
        add_to_stack( temp5 ).

      WHEN cl_abap_typedescr=>kind_table.
        open_table( table_name = node_name table_description = node_description ).

        CLEAR temp6.
        temp6-operation = zif_aff_writer=>operation-open_table.
        temp6-name = node_name.
        add_to_stack( temp6 ).
      WHEN OTHERS.

        CREATE OBJECT temp7 TYPE zcx_aff_tools.
        RAISE EXCEPTION temp7.
    ENDCASE.
  ENDMETHOD.


  METHOD zif_aff_writer~close_node.
    DATA temp8 TYPE zcl_aff_writer=>ty_stack_entry.
    DATA temp9 TYPE zcl_aff_writer=>ty_stack_entry.
    DATA temp10 TYPE REF TO zcx_aff_tools.
    CASE node_description->kind.
      WHEN cl_abap_typedescr=>kind_struct.
        close_structure( structure_name = node_name structure_description = node_description ).

        CLEAR temp8.
        temp8-operation = zif_aff_writer=>operation-close_structure.
        temp8-name = node_name.
        add_to_stack( temp8 ).

      WHEN cl_abap_typedescr=>kind_table.
        close_table( table_name = node_name table_description = node_description ).

        CLEAR temp9.
        temp9-operation = zif_aff_writer=>operation-close_table.
        temp9-name = node_name.
        add_to_stack( temp9 ).

      WHEN OTHERS.

        CREATE OBJECT temp10 TYPE zcx_aff_tools.
        RAISE EXCEPTION temp10.
    ENDCASE.
  ENDMETHOD.


  METHOD zif_aff_writer~get_output.
    append_before_output( ).
    APPEND LINES OF content TO output.
    append_after_output( ).
    result = output.
  ENDMETHOD.


  METHOD write_open_tag.
    write_tag( line ).
    indent_level = indent_level + 1.
  ENDMETHOD.


  METHOD write_closing_tag.
    indent_level = indent_level - 1.
    write_tag( line ).
  ENDMETHOD.


  METHOD add_to_stack.
    INSERT entry INTO stack INDEX 1.
  ENDMETHOD.


  METHOD last_operation.
    DATA temp11 TYPE string.
    DATA temp12 TYPE zcl_aff_writer=>ty_stack_entry.
    IF stack IS NOT INITIAL.

      CLEAR temp11.

      READ TABLE stack INTO temp12 INDEX 1.
      IF sy-subrc = 0.
        temp11 = temp12-operation.
      ENDIF.
      result = temp11.
    ELSE.
      result = zif_aff_writer=>operation-initial.
    ENDIF.
  ENDMETHOD.


  METHOD append_to_previous_line.
    DATA index TYPE i.
    FIELD-SYMBOLS <temp13> LIKE LINE OF me->content.
    DATA temp14 LIKE sy-tabix.
    DATA temp1 LIKE LINE OF me->content.
    DATA temp2 LIKE sy-tabix.
    index = lines( me->content ).
    IF index > 0.


      temp14 = sy-tabix.
      READ TABLE me->content INDEX index ASSIGNING <temp13>.
      sy-tabix = temp14.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.


      temp2 = sy-tabix.
      READ TABLE me->content INDEX index INTO temp1.
      sy-tabix = temp2.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      <temp13> = temp1 && string.
    ELSE.
      INSERT string INTO TABLE me->content.
    ENDIF.
  ENDMETHOD.


  METHOD append_after_output ##NEEDED.

  ENDMETHOD.


  METHOD append_before_output ##NEEDED.

  ENDMETHOD.


  METHOD call_reader_and_decode.
    DATA ref TYPE REF TO if_oo_clif_source.
    DATA source TYPE string_table.
    DATA reader TYPE REF TO zcl_aff_abap_doc_reader.
    DATA result TYPE string.
    ref = cl_oo_factory=>create_instance( )->create_clif_source( name_of_source ).

    ref->get_source( IMPORTING source = source ).

    reader = zcl_aff_abap_doc_reader=>create_instance(
      name   = name_of_source
      source = source ).
    TRY.

        result = reader->get_abap_doc_for_element( element_name ).

        read_abap_doc = abap_doc_parser->parse(
          EXPORTING
            component_name = element_name
            to_parse       = result
          CHANGING
            log            = log ).
      CATCH cx_root ##NO_HANDLER ##CATCH_ALL.
    ENDTRY.
  ENDMETHOD.


  METHOD remove_leading_trailing_spaces.
    SHIFT string_to_work_on RIGHT DELETING TRAILING space.
    SHIFT string_to_work_on LEFT DELETING LEADING space.
  ENDMETHOD.


  METHOD delete_first_of_struc_stack.
    IF stack_of_structure IS NOT INITIAL.
      DELETE stack_of_structure INDEX 1.
    ENDIF.
  ENDMETHOD.


  METHOD get_all_path_information.
    DATA previous_absolute_name TYPE abap_abstypename.
    DATA splitted_prev_name TYPE string_table.
    DATA index TYPE i.
    DATA temp15 LIKE LINE OF stack_of_structure.
    DATA temp16 LIKE sy-tabix.
    DATA name_of_prev LIKE LINE OF splitted_prev_name.
    DATA temp3 LIKE LINE OF splitted_prev_name.
    DATA temp4 LIKE sy-tabix.
    DATA temp17 LIKE LINE OF splitted_prev_name.
    DATA temp18 LIKE sy-tabix.
    DATA temp19 LIKE LINE OF splitted_prev_name.
    DATA temp20 LIKE sy-tabix.
    DATA temp21 LIKE LINE OF stack_of_structure.
    DATA temp22 LIKE sy-tabix.
    index = 0.
    WHILE lines( splitted_prev_name ) <= 2.
      IF index >= lines( stack_of_structure ).
        RETURN.
      ENDIF.
      index = index + 1.


      temp16 = sy-tabix.
      READ TABLE stack_of_structure INDEX index INTO temp15.
      sy-tabix = temp16.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      previous_absolute_name = temp15-absolute_name.
      splitted_prev_name = get_splitted_absolute_name( previous_absolute_name ).
    ENDWHILE.



    temp4 = sy-tabix.
    READ TABLE splitted_prev_name INDEX lines( splitted_prev_name ) INTO temp3.
    sy-tabix = temp4.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    name_of_prev = temp3.


    temp18 = sy-tabix.
    READ TABLE splitted_prev_name INDEX 1 INTO temp17.
    sy-tabix = temp18.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    source_type = temp17.


    temp20 = sy-tabix.
    READ TABLE splitted_prev_name INDEX 2 INTO temp19.
    sy-tabix = temp20.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    source = temp19.
    fullname_of_type = name_of_prev && ''-''.
    index = index - 1.
    WHILE index > 0.


      temp22 = sy-tabix.
      READ TABLE stack_of_structure INDEX index INTO temp21.
      sy-tabix = temp22.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      fullname_of_type = fullname_of_type  && temp21-name && ''-''.
      index = index - 1.
    ENDWHILE.
    fullname_of_type = fullname_of_type && name.
  ENDMETHOD.


  METHOD get_splitted_absolute_name.
    DATA place_of_type LIKE absolute_name.
    TYPES temp2 TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA splitted_in_componets TYPE temp2.
    FIELD-SYMBOLS <component> LIKE LINE OF splitted_in_componets.
    TYPES temp3 TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA splitted_in_details TYPE temp3.
    place_of_type = absolute_name.


    SPLIT place_of_type AT ''\\'' INTO TABLE splitted_in_componets.

    LOOP AT splitted_in_componets ASSIGNING <component>.
      IF <component> IS NOT INITIAL.


        SPLIT <component> AT ''='' INTO TABLE splitted_in_details.
        APPEND LINES OF splitted_in_details TO result.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_structure_of_enum_values.
    get_infos_of_values_link(
      EXPORTING
        values_link      = link_to_values
      IMPORTING
        name_of_source   = name_of_source
        name_of_constant = name_of_constant ).

    structure_of_values = get_constant_as_struc(
      name_of_source   = name_of_source
      name_of_constant = name_of_constant
      fullname_of_type = fullname_of_type ).
  ENDMETHOD.

  METHOD get_constant_as_struc.
    DATA constant TYPE REF TO cl_abap_datadescr.
    DATA msg TYPE string.

    DATA constant_descr TYPE REF TO cl_abap_typedescr.
    DATA temp23 TYPE symsgv.
    DATA temp24 TYPE REF TO cl_abap_intfdescr.
    DATA constant_descr_intf LIKE temp24.
    DATA temp25 TYPE symsgv.
    DATA temp26 TYPE REF TO cl_abap_classdescr.
    DATA constant_descr_clas LIKE temp26.
    DATA temp27 TYPE symsgv.
    DATA temp28 TYPE REF TO cl_abap_structdescr.
    cl_abap_typedescr=>describe_by_name(
      EXPORTING
        p_name         = name_of_source
      RECEIVING
        p_descr_ref    = constant_descr
      EXCEPTIONS
        type_not_found = 1
        OTHERS         = 2 ).

    IF sy-subrc <> 0.
*    class or interface doesn''t exist

      temp23 = name_of_source.
      msg = log->get_message_text( msgno = 103 msgv1 = temp23 ).
      log->add_warning( message_text = msg component_name = fullname_of_type ).
    ELSE.
      IF constant_descr->kind = cl_abap_typedescr=>kind_intf.

        temp24 ?= constant_descr.

        constant_descr_intf = temp24.
        constant_descr_intf->get_attribute_type(
          EXPORTING
            p_name              = name_of_constant
          RECEIVING
            p_descr_ref         = constant
          EXCEPTIONS
            attribute_not_found = 1
            OTHERS              = 2 ).
        IF sy-subrc <> 0.
*      constant in interface does not exist

          temp25 = name_of_source && ''=>'' && name_of_constant.
          msg = log->get_message_text( msgno = 104 msgv1 = temp25 ).
          log->add_warning( message_text = msg component_name = fullname_of_type ).
        ENDIF.
      ELSEIF constant_descr->kind = cl_abap_typedescr=>kind_class.

        temp26 ?= constant_descr.

        constant_descr_clas = temp26.
        constant_descr_clas->get_attribute_type(
          EXPORTING
            p_name              = name_of_constant
          RECEIVING
            p_descr_ref         = constant
          EXCEPTIONS
            attribute_not_found = 1
            OTHERS              = 2 ).
        IF sy-subrc <> 0.
*      constant in class does not exits

          temp27 = name_of_source && ''=>'' && name_of_constant.
          msg = log->get_message_text( msgno = 104 msgv1 = temp27 ).
          log->add_warning( message_text = msg component_name = fullname_of_type ).
        ENDIF.
      ENDIF.

      temp28 ?= constant.
      constant_as_struc = temp28.
    ENDIF.
  ENDMETHOD.


  METHOD get_infos_of_values_link.
    DATA link LIKE values_link.
    TYPES temp4 TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA split_at_point TYPE temp4.
    DATA temp29 LIKE LINE OF split_at_point.
    DATA temp30 LIKE sy-tabix.
    DATA temp31 LIKE LINE OF split_at_point.
    DATA temp32 LIKE sy-tabix.
    link = values_link.
    REPLACE ALL OCCURRENCES OF PCRE \`[\\s]\` IN link WITH \`\`.
    REPLACE ALL OCCURRENCES OF \`data:\` IN link WITH \`\`.


    SPLIT link AT ''.'' INTO TABLE split_at_point.
    IF lines( split_at_point ) = 2.


      temp30 = sy-tabix.
      READ TABLE split_at_point INDEX 1 INTO temp29.
      sy-tabix = temp30.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      name_of_source = to_upper( temp29 ).


      temp32 = sy-tabix.
      READ TABLE split_at_point INDEX 2 INTO temp31.
      sy-tabix = temp32.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      name_of_constant = to_upper( temp31 ).
    ENDIF.
  ENDMETHOD.


  METHOD get_abap_doc_for_absolute_name.
    DATA splitted_prev_name TYPE string_table.
    DATA source_type LIKE LINE OF splitted_prev_name.
    DATA temp5 LIKE LINE OF splitted_prev_name.
    DATA temp6 LIKE sy-tabix.
    DATA source LIKE LINE OF splitted_prev_name.
    DATA temp7 LIKE LINE OF splitted_prev_name.
    DATA temp8 LIKE sy-tabix.
    DATA fullname_of_type LIKE LINE OF splitted_prev_name.
    DATA temp9 LIKE LINE OF splitted_prev_name.
    DATA temp10 LIKE sy-tabix.
    splitted_prev_name = get_splitted_absolute_name( absolute_name ).
    IF lines( splitted_prev_name ) >= 4.



      temp6 = sy-tabix.
      READ TABLE splitted_prev_name INDEX 1 INTO temp5.
      sy-tabix = temp6.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source_type = temp5.



      temp8 = sy-tabix.
      READ TABLE splitted_prev_name INDEX 2 INTO temp7.
      sy-tabix = temp8.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp7.



      temp10 = sy-tabix.
      READ TABLE splitted_prev_name INDEX 4 INTO temp9.
      sy-tabix = temp10.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      fullname_of_type = temp9.
      IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.
        abap_doc = call_reader_and_decode( name_of_source = source element_name = fullname_of_type ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD compare_abap_doc.
    IF abap_doc_base-enumvalues_link IS INITIAL.
      abap_doc_base-enumvalues_link = abap_doc_additional-enumvalues_link.
    ENDIF.
    IF abap_doc_base-title IS INITIAL AND abap_doc_base-description IS INITIAL.
      abap_doc_base-title = abap_doc_additional-title.
      abap_doc_base-description = abap_doc_additional-description.
    ENDIF.
    IF abap_doc_base-minimum IS INITIAL AND abap_doc_base-maximum IS INITIAL AND abap_doc_base-exclusive_maximum IS INITIAL AND abap_doc_base-exclusive_minimum IS INITIAL.
      abap_doc_base-minimum = abap_doc_additional-minimum.
      abap_doc_base-maximum = abap_doc_additional-maximum.
      abap_doc_base-exclusive_minimum = abap_doc_additional-exclusive_minimum.
      abap_doc_base-exclusive_maximum = abap_doc_additional-exclusive_maximum.
    ENDIF.
    IF abap_doc_base-multiple_of IS INITIAL.
      abap_doc_base-multiple_of = abap_doc_additional-multiple_of.
    ENDIF.
    IF abap_doc_base-max_length IS INITIAL AND abap_doc_base-min_length IS INITIAL.
      abap_doc_base-min_length = abap_doc_additional-min_length.
      abap_doc_base-max_length = abap_doc_additional-max_length.
    ENDIF.
    IF abap_doc_base-default_ IS INITIAL.
      abap_doc_base-default_ = abap_doc_additional-default_.
    ENDIF.
    IF abap_doc_base-callback_class IS INITIAL.
      abap_doc_base-callback_class = abap_doc_additional-callback_class.
    ENDIF.
    IF abap_doc_base-content_encoding IS INITIAL.
      abap_doc_base-content_encoding = abap_doc_additional-content_encoding.
    ENDIF.
    IF abap_doc_base-content_media_type IS INITIAL.
      abap_doc_base-content_media_type = abap_doc_additional-content_media_type.
    ENDIF.
  ENDMETHOD.


  METHOD get_default_from_link.
    DATA link_to_work_on LIKE link.
    TYPES temp5 TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA splitted TYPE temp5.
    DATA default_abap LIKE LINE OF splitted.
    DATA temp11 LIKE LINE OF splitted.
    DATA temp12 LIKE sy-tabix.
    link_to_work_on = link.
    REPLACE ALL OCCURRENCES OF PCRE \`(@link|data:)\` IN link_to_work_on WITH \`\`.
    REPLACE ALL OCCURRENCES OF PCRE \`[\\s]\` IN link_to_work_on WITH \`\`.


    SPLIT link_to_work_on AT ''.'' INTO TABLE splitted.
    IF validate_default_link( splitted_link = splitted fullname_of_type = fullname_of_type element_type = element_type ) = abap_true.



      temp12 = sy-tabix.
      READ TABLE splitted INDEX lines( splitted ) INTO temp11.
      sy-tabix = temp12.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      default_abap = temp11.
      default_value = format_to_camel_case( default_abap ).
    ENDIF.
  ENDMETHOD.

  METHOD zif_aff_writer~get_log.
    log = me->log.
  ENDMETHOD.

  METHOD is_callback_class_valid.
    DATA name_of_callback_class TYPE string.
    DATA temp33 TYPE string.
    DATA result TYPE cl_oo_classname_service=>ty_result.
    DATA has_method_get_subschema TYPE abap_bool.
    DATA temp13 LIKE sy-subrc.
    DATA temp1 TYPE cl_oo_classname_service=>ty_rowrow.
    DATA temp4 TYPE xsdboolean.
    DATA has_method_serialize TYPE abap_bool.
    DATA temp14 LIKE sy-subrc.
    DATA temp2 TYPE cl_oo_classname_service=>ty_rowrow.
    DATA temp5 TYPE xsdboolean.
    DATA has_method_deserialize TYPE abap_bool.
    DATA temp15 LIKE sy-subrc.
    DATA temp3 TYPE cl_oo_classname_service=>ty_rowrow.
    DATA temp6 TYPE xsdboolean.
    DATA temp7 TYPE xsdboolean.
    name_of_callback_class = to_upper( class_name ).

    temp33 = name_of_callback_class.

    cl_oo_classname_service=>get_all_method_includes(
      EXPORTING
        clsname            = temp33
      RECEIVING
        result             = result
      EXCEPTIONS
        class_not_existing = 1 ).
    IF sy-subrc = 0.



      CLEAR temp1.
      temp1-clsname = name_of_callback_class.
      temp1-cpdname = ''GET_SUBSCHEMA''.
      READ TABLE result WITH KEY cpdkey = temp1 TRANSPORTING NO FIELDS.
      temp13 = sy-subrc.

      temp4 = boolc( temp13 = 0 ).
      has_method_get_subschema = temp4.



      CLEAR temp2.
      temp2-clsname = name_of_callback_class.
      temp2-cpdname = ''SERIALIZE''.
      READ TABLE result WITH KEY cpdkey = temp2 TRANSPORTING NO FIELDS.
      temp14 = sy-subrc.

      temp5 = boolc( temp14 = 0 ).
      has_method_serialize = temp5.



      CLEAR temp3.
      temp3-clsname = name_of_callback_class.
      temp3-cpdname = ''DESERIALIZE''.
      READ TABLE result WITH KEY cpdkey = temp3 TRANSPORTING NO FIELDS.
      temp15 = sy-subrc.

      temp6 = boolc( temp15 = 0 ).
      has_method_deserialize = temp6.

      temp7 = boolc( has_method_get_subschema = abap_true AND has_method_serialize = abap_true AND has_method_deserialize = abap_true ).
      is_valid = temp7.
    ENDIF.
    IF is_valid = abap_false.
      log->add_warning( message_text = zif_aff_log=>co_msg106 component_name = component_name ).
    ENDIF.
  ENDMETHOD.

  METHOD validate_default_link.
    DATA msg TYPE string.
    DATA source_name TYPE string.
    DATA temp16 LIKE LINE OF splitted_link.
    DATA temp17 LIKE sy-tabix.
    DATA constant_name TYPE string.
    DATA temp18 LIKE LINE OF splitted_link.
    DATA temp19 LIKE sy-tabix.
    DATA component_name TYPE string.
    DATA temp20 LIKE LINE OF splitted_link.
    DATA temp21 LIKE sy-tabix.
    DATA constant_description TYPE REF TO cl_abap_structdescr.
    DATA components TYPE abap_component_tab.
    DATA temp34 TYPE abap_componentdescr.
    DATA temp35 TYPE abap_componentdescr.
    DATA row LIKE temp34.
    DATA temp36 TYPE symsgv.
    DATA temp22 TYPE symsgv.
    DATA temp37 TYPE symsgv.
    DATA temp23 TYPE symsgv.
    IF lines( splitted_link ) = 3.



      temp17 = sy-tabix.
      READ TABLE splitted_link INDEX 1 INTO temp16.
      sy-tabix = temp17.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source_name = to_upper( temp16 ).



      temp19 = sy-tabix.
      READ TABLE splitted_link INDEX 2 INTO temp18.
      sy-tabix = temp19.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      constant_name = to_upper( temp18 ).



      temp21 = sy-tabix.
      READ TABLE splitted_link INDEX 3 INTO temp20.
      sy-tabix = temp21.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      component_name = to_upper( temp20 ).

      constant_description = get_constant_as_struc(
        name_of_source   = source_name
        name_of_constant = constant_name
        fullname_of_type = fullname_of_type ).
      IF constant_description IS NOT INITIAL.

        components = constant_description->get_components( ).

        CLEAR temp34.

        READ TABLE components INTO temp35 WITH KEY name = component_name.
        IF sy-subrc = 0.
          temp34 = temp35.
        ENDIF.

        row = temp34.
        IF row IS NOT INITIAL.
          IF row-type->type_kind = element_type.
            is_valid = abap_true.
          ELSE.

            temp36 = constant_name.

            temp22 = fullname_of_type.
            msg = log->get_message_text( msgno = 122 msgv1 = temp36 msgv2 = temp22 ).
            log->add_warning( message_text = msg component_name = fullname_of_type ).
          ENDIF.
        ELSE.

          temp37 = component_name.

          temp23 = constant_name.
          msg = log->get_message_text( msgno = 105 msgv1 = temp37 msgv2 = temp23 ).
          log->add_warning( message_text = msg component_name = fullname_of_type ).
        ENDIF.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD is_default_value_valid.
    DATA default_ LIKE default_value.
    DATA type TYPE string.
    DATA r_field TYPE REF TO data.
    FIELD-SYMBOLS <field> TYPE any.
    DATA message_text TYPE string.
    DATA string TYPE string.
    default_ = default_value.
    REPLACE ALL OCCURRENCES OF \`"\` IN default_ WITH \`\`.

    type = get_json_type_from_description( element_description ).


    CREATE DATA r_field TYPE HANDLE element_description.
    ASSIGN r_field->* TO <field>.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
*      No support for default with utclong

      message_text = log->get_message_text( msgno = 117 msgv1 = \`UTCLONG\` ).
      log->add_warning( message_text = message_text component_name = fullname_of_type ).
      is_valid = abap_false.
      RETURN.
    ELSEIF type = zif_aff_writer=>type_info-boolean.
      default_ = to_lower( default_ ).
      IF default_ = ''abap_true'' OR default_ = ''x'' OR default_ = ''abap_false'' OR default_ = ''''.
        is_valid = abap_true.
      ENDIF.
    ELSEIF type = zif_aff_writer=>type_info-string OR type = zif_aff_writer=>type_info-date_time.

      TRY.
          <field> = default_.
          string = <field>.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_num OR element_description->type_kind = cl_abap_typedescr=>typekind_numeric.
            SHIFT string LEFT DELETING LEADING ''0''.
          ENDIF.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_time.
            default_ = default_ && repeat( val = ''0'' occ = 6 - strlen( default_ ) ).
          ENDIF.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
            REPLACE PCRE \`T|t\` IN default_ WITH \` \`.
          ENDIF.
          remove_leading_trailing_spaces( CHANGING string_to_work_on = string ).
          remove_leading_trailing_spaces( CHANGING string_to_work_on = default_ ).
          IF string = default_.
            is_valid = abap_true.
          ELSE.
            is_valid = abap_false.
          ENDIF.
        CATCH cx_root.
          is_valid = abap_false.
      ENDTRY.
    ELSEIF type = zif_aff_writer=>type_info-numeric.
      TRY.
          <field> = default_.
          IF <field> - default_ = 0.
            is_valid = abap_true.
          ELSE.
            is_valid = abap_false.
          ENDIF.
        CATCH cx_root.
          is_valid = abap_false.
      ENDTRY.
    ENDIF.
    IF is_valid = abap_false.
      log->add_warning( message_text = zif_aff_log=>co_msg114 component_name = fullname_of_type ).
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_writer~validate.
    result = abap_true.
  ENDMETHOD.


  METHOD zif_aff_writer~close_include.
    delete_first_of_struc_stack( ).
  ENDMETHOD.


  METHOD zif_aff_writer~open_include.
    DATA temp38 TYPE zcl_aff_writer=>ty_structure_stack.
    CLEAR temp38.
    temp38-absolute_name = include_description->absolute_name.
    INSERT temp38 INTO me->stack_of_structure INDEX 1.
  ENDMETHOD.


  METHOD is_sy_langu.
    DATA temp39 TYPE sy-langu.
    DATA temp24 TYPE REF TO cl_abap_elemdescr.
    DATA sy_langu_description LIKE temp24.
    DATA temp8 TYPE xsdboolean.
    CLEAR temp39.

    temp24 ?= cl_abap_typedescr=>describe_by_data( temp39 ).

    sy_langu_description = temp24.

    temp8 = boolc( sy_langu_description->edit_mask = element_description->edit_mask ).
    result = temp8.
  ENDMETHOD.

  METHOD clear_type_specifics.
    CLEAR abap_doc.
    CLEAR fullname_of_type.
  ENDMETHOD.

  METHOD check_redundant_annotations.
    DATA msg TYPE string.
    IF abap_doc-showalways = abap_true AND abap_doc-required = abap_true.

      msg = log->get_message_text( msgno = 112 ).
      log->add_info( message_text = msg component_name = fullname_of_type ).
    ENDIF.

    IF abap_doc-enumvalues_link IS INITIAL AND abap_doc-required = abap_true AND abap_doc-default_ IS NOT INITIAL.
      log->add_warning( message_text = zif_aff_log=>co_msg126 component_name = fullname_of_type ).
    ENDIF.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_WRITER_JSON_SCHEMA              ', '"! Writer for a JSON schema. This is just a utility class helping to create a JSON schema.
"! The generated schema must be reviewed and adapted!
CLASS zcl_aff_writer_json_schema DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC
  INHERITING FROM zcl_aff_writer.

  PUBLIC SECTION.

    CONSTANTS:
      c_schema_specification TYPE string VALUE ''https://json-schema.org/draft/2020-12/schema'' ##NO_TEXT,
      c_link_to_repository   TYPE string VALUE ''https://github.com/SAP/abap-file-formats'' ##NO_TEXT.

    METHODS:
      "! Creates a JSON schema writer<br><br>
      "! Example for schema_id: http://sap.com/schema/nrob.json
      "!
      "! @parameter schema_id | The schema that should be written in the $id field of the schema
      "! @parameter format_version | The version of the ABAP file format as integer
      constructor
        IMPORTING schema_id      TYPE string
                  format_version TYPE i DEFAULT 1,

      zif_aff_writer~validate REDEFINITION.

  PROTECTED SECTION.
    METHODS:
      write_element REDEFINITION,
      open_structure REDEFINITION,
      close_structure REDEFINITION,
      open_table REDEFINITION,
      write_tag REDEFINITION,
      close_table REDEFINITION,
      append_after_output REDEFINITION.


  PRIVATE SECTION.

    TYPES:
      BEGIN OF ty_buffer,
        name            TYPE string,
        number_brackets TYPE i,
      END OF ty_buffer,
      tt_buffer TYPE STANDARD TABLE OF ty_buffer.

    TYPES:
      BEGIN OF ty_enum_value,
        value             TYPE string,
        overwritten_value TYPE string,
      END OF ty_enum_value.

    TYPES:
      BEGIN OF ty_enum_properties,
        values       TYPE STANDARD TABLE OF ty_enum_value WITH DEFAULT KEY,
        titles       TYPE string_table,
        descriptions TYPE string_table,
      END OF ty_enum_properties.


    CONSTANTS:
      c_format_version            TYPE string VALUE ''FORMAT_VERSION'',
      c_max_length_of_description TYPE i VALUE 253.

    TYPES temp1_44ba95addc TYPE STANDARD TABLE OF string_table.
    DATA:
      schema_id              TYPE string,
      structure_buffer       TYPE tt_buffer,
      table_buffer           TYPE tt_buffer,
      ignore_next_elements   TYPE abap_boolean,
      stack_of_required_tabs TYPE temp1_44ba95addc,
      format_version         TYPE i.

    METHODS: append_comma_to_prev_line,

      get_json_schema_type
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
                  json_type           TYPE string
        RETURNING VALUE(result)       TYPE string
        RAISING   zcx_aff_tools,

      open_json_schema_for_structure
        IMPORTING structure_name        TYPE string
                  structure_description TYPE REF TO cl_abap_typedescr
        RAISING   zcx_aff_tools,

      open_json_schema_for_table
        IMPORTING table_name        TYPE string
                  table_description TYPE REF TO cl_abap_tabledescr
        RAISING   zcx_aff_tools,

      open_json_schema_for_element,

      get_description
        IMPORTING type_description TYPE REF TO cl_abap_typedescr OPTIONAL
        RETURNING VALUE(result)    TYPE string,

      get_enum_properties
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
        RETURNING VALUE(result)       TYPE ty_enum_properties
        RAISING
                  zcx_aff_tools,

      get_enum_descriptions
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
                  enum_properties     TYPE ty_enum_properties
        RETURNING VALUE(result)       TYPE string_table,

      type_is_integer
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE abap_bool,

      get_properties_from_structure
        IMPORTING
                  enum_type     TYPE abap_typekind
        RETURNING VALUE(result) TYPE ty_enum_properties
        RAISING
                  zcx_aff_tools,

      add_required_table_to_stack,

      delete_first_tab_of_req_stack,

      write_req_and_add_props,

      get_format
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE string,

      date_time_from_abap_to_json
        IMPORTING
          date_time_abap        TYPE string
          element_description   TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(date_time_json) TYPE string,

      handle_default
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          json_type           TYPE string
          enum_properties     TYPE ty_enum_properties
        RAISING
          zcx_aff_tools,

      handle_extrema
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr,

      handle_string
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr,

      handle_language_field,

      handle_enums
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          enum_properties     TYPE ty_enum_properties,

      write_subschema
        IMPORTING
          callback_class TYPE string,

      reset_indent_level_tag,

      write_enum_properties
        IMPORTING
          property_table TYPE string_table,

      check_title_and_description
        IMPORTING abap_doc_to_check        TYPE zcl_aff_abap_doc_parser=>abap_doc
                  fullname_of_checked_type TYPE string,

      write_title_and_description
        IMPORTING
          type_description TYPE REF TO cl_abap_typedescr
          check_not_needed TYPE abap_boolean DEFAULT abap_false,

      set_abapdoc_fullname_element
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          element_name        TYPE string
          splitted_prev_name  TYPE string_table,

      set_abapdoc_fullname_struc_tab
        IMPORTING
          type_description TYPE REF TO cl_abap_typedescr
          type_name        TYPE string,

      get_max_length
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
        RETURNING VALUE(result)       TYPE string,

      get_extrema
        IMPORTING element_description TYPE REF TO cl_abap_elemdescr
        EXPORTING VALUE(max)          TYPE string
                  VALUE(min)          TYPE string,

      is_content_encoding_valid
        IMPORTING content_encoding TYPE string
        RETURNING VALUE(result)    TYPE abap_boolean,

      write_content_encoding
        IMPORTING json_type TYPE string,

      write_content_media_type
        IMPORTING json_type TYPE string,
      is_element_descr_kind_int
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE abap_bool.
ENDCLASS.


CLASS zcl_aff_writer_json_schema IMPLEMENTATION.


  METHOD constructor.
    super->constructor( ).
    me->schema_id = schema_id.
    me->format_version = format_version.
  ENDMETHOD.


  METHOD write_element.
    DATA json_type TYPE string.
    DATA formatted_name TYPE string.
    DATA splitted_prev_name TYPE string_table.
    FIELD-SYMBOLS <table1> TYPE string_table.
    DATA callback_class TYPE string.
    DATA enum_properties TYPE zcl_aff_writer_json_schema=>ty_enum_properties.
    DATA check_not_needed LIKE abap_false.
    DATA temp1 LIKE LINE OF splitted_prev_name.
    DATA temp2 LIKE sy-tabix.
    DATA format TYPE string.
    DATA last_line LIKE LINE OF content.
    DATA temp3 LIKE LINE OF content.
    DATA temp5 LIKE sy-tabix.
    FIELD-SYMBOLS <temp3> LIKE LINE OF content.
    DATA temp4 LIKE sy-tabix.
    IF ignore_next_elements = abap_true.
      RETURN.
    ENDIF.

    clear_type_specifics( ).

    append_comma_to_prev_line( ).

    json_type = get_json_type_from_description( element_description ).

    formatted_name = format_name( element_name ).


    splitted_prev_name = get_splitted_absolute_name( element_description->absolute_name ).
    set_abapdoc_fullname_element( element_description = element_description element_name = element_name splitted_prev_name = splitted_prev_name ).

    IF abap_doc-required = abap_true AND lines( stack_of_required_tabs ) >= 1.

      READ TABLE stack_of_required_tabs INDEX 1 ASSIGNING <table1>.
      APPEND formatted_name TO <table1>.
    ENDIF.


    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      IF last_operation( ) = zif_aff_writer=>operation-initial.
        open_json_schema_for_element( ).
      ENDIF.
      write_subschema( callback_class = callback_class ).
      IF last_operation( ) = zif_aff_writer=>operation-initial.
        write_closing_tag( \`}\` ).
      ENDIF.
      CLEAR ignore_til_indent_level.
      RETURN.
    ENDIF.


    IF last_operation( ) = zif_aff_writer=>operation-initial.
      open_json_schema_for_element( ).
    ELSEIF last_operation( ) <> zif_aff_writer=>operation-open_table.
      write_open_tag( |"{ formatted_name }": \\{| ).
    ENDIF.


    enum_properties = get_enum_properties( element_description ).
    IF enum_properties IS NOT INITIAL.
      json_type = zif_aff_writer=>type_info-string.
    ENDIF.


    check_not_needed = abap_false.



    temp2 = sy-tabix.
    READ TABLE splitted_prev_name INDEX 2 INTO temp1.
    sy-tabix = temp2.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    IF last_operation( ) = zif_aff_writer=>operation-open_table AND lines( splitted_prev_name ) = 2 AND temp1 = element_name.
      check_not_needed = abap_true.
    ENDIF.

    write_title_and_description( type_description = element_description check_not_needed = check_not_needed ).

    IF element_name = c_format_version.
      write_tag( \`"type": "string",\` ).
      write_tag( |"const": "{ format_version }",| ).
    ELSE.
      write_tag( |"type": "{ get_json_schema_type( element_description = element_description json_type = json_type ) }",| ).

      format = get_format( element_description ).
      IF format IS NOT INITIAL.
        write_tag( |"format": "{ format }",| ).
      ENDIF.

      IF enum_properties IS NOT INITIAL.
        handle_enums( element_description = element_description enum_properties = enum_properties ).
      ELSE. "non- enum

        write_content_encoding( json_type ).
        write_content_media_type( json_type ).

        IF json_type = zif_aff_writer=>type_info-numeric.
          handle_extrema( element_description ).
        ELSEIF json_type = zif_aff_writer=>type_info-string AND NOT ( element_description->type_kind = cl_abap_typedescr=>typekind_date OR element_description->type_kind = cl_abap_typedescr=>typekind_time OR
             element_description->type_kind = cl_abap_typedescr=>typekind_utclong ).
          IF is_sy_langu( element_description ) IS NOT INITIAL.
            handle_language_field( ).
          ELSE.
            handle_string( element_description = element_description ).
          ENDIF.
        ENDIF.
      ENDIF.

      IF abap_doc-default_ IS NOT INITIAL.
        handle_default( element_description = element_description json_type = json_type enum_properties = enum_properties ).
      ENDIF.
    ENDIF.

*    remove "," in last line
    IF ignore_til_indent_level > indent_level OR ignore_til_indent_level IS INITIAL.



      temp5 = sy-tabix.
      READ TABLE content INDEX lines( content ) INTO temp3.
      sy-tabix = temp5.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      last_line = temp3.


      temp4 = sy-tabix.
      READ TABLE content INDEX lines( content ) ASSIGNING <temp3>.
      sy-tabix = temp4.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      <temp3> = substring( val = last_line off = 0 len = strlen( last_line ) - 1 ).
    ENDIF.

    IF last_operation( ) <> zif_aff_writer=>operation-open_table.
      write_closing_tag( \`}\` ).
    ENDIF.
  ENDMETHOD.

  METHOD write_content_encoding.
    IF abap_doc-content_encoding IS INITIAL.
      RETURN.
    ENDIF.

    IF json_type <> zif_aff_writer=>type_info-string.
      log->add_warning( message_text = zif_aff_log=>co_msg132 component_name = fullname_of_type ).
      RETURN.
    ENDIF.

    IF NOT is_content_encoding_valid( abap_doc-content_encoding ) IS NOT INITIAL.
      log->add_warning( message_text = zif_aff_log=>co_msg133 component_name = fullname_of_type ).
      RETURN.
    ENDIF.

    write_tag( |"contentEncoding": "{ abap_doc-content_encoding }",| ).
  ENDMETHOD.

  METHOD write_content_media_type.
    IF abap_doc-content_media_type IS INITIAL.
      RETURN.
    ENDIF.

    IF json_type <> zif_aff_writer=>type_info-string.
      log->add_warning( message_text = zif_aff_log=>co_msg132 component_name = fullname_of_type ).
      RETURN.
    ENDIF.

    write_tag( |"contentMediaType": "{ abap_doc-content_media_type }",| ).
  ENDMETHOD.

  METHOD is_content_encoding_valid.
    IF content_encoding = ''7bit'' OR
      content_encoding = ''8bit'' OR
      content_encoding = ''binary'' OR
      content_encoding = ''quoted-printable'' OR
      content_encoding = ''base16'' OR
      content_encoding = ''base32'' OR
      content_encoding = ''base64''.
      result = abap_true.
    ENDIF.
  ENDMETHOD.


  METHOD write_title_and_description.
    DATA title TYPE string.
    DATA description TYPE string.
    IF check_not_needed = abap_false.
      check_title_and_description( abap_doc_to_check = abap_doc fullname_of_checked_type = fullname_of_type ).
    ENDIF.

    title = escape( val = abap_doc-title format = cl_abap_format=>e_json_string ).

    description = escape( val = get_description( type_description = type_description ) format = cl_abap_format=>e_json_string ).
    IF title IS NOT INITIAL.
      write_tag( |"title": "{ title }",| ).
    ENDIF.
    IF description IS NOT INITIAL.
      write_tag( |"description": "{ description }",| ).
    ENDIF.
  ENDMETHOD.


  METHOD handle_enums.
    DATA enum_values TYPE string_table.
    FIELD-SYMBOLS <enum_value> LIKE LINE OF enum_properties-values.
    DATA enum_descr TYPE string_table.
    DATA lt_copy LIKE enum_descr.
    write_tag( \`"enum": [\` ).


    LOOP AT enum_properties-values ASSIGNING <enum_value>.
      IF <enum_value>-overwritten_value IS INITIAL.
        INSERT <enum_value>-value INTO TABLE enum_values.
      ELSE.
        INSERT <enum_value>-overwritten_value INTO TABLE enum_values.
      ENDIF.
    ENDLOOP.
    write_enum_properties( enum_values ).

    IF enum_properties-titles IS NOT INITIAL.
      write_tag( \`"enumTitles": [\` ).
      write_enum_properties( enum_properties-titles ).
    ENDIF.


    enum_descr = get_enum_descriptions( element_description = element_description enum_properties = enum_properties ).

    lt_copy = enum_descr.
    DELETE lt_copy WHERE table_line = ''''.
    IF lines( lt_copy ) > 0.
      write_tag( \`"enumDescriptions": [\` ).
      write_enum_properties( enum_descr ).
    ENDIF.
  ENDMETHOD.


  METHOD write_enum_properties.
    FIELD-SYMBOLS <value> LIKE LINE OF property_table.
    indent_level = indent_level + 1.

    LOOP AT property_table ASSIGNING <value>.
      IF sy-tabix < lines( property_table ).
        write_tag( |"{ <value> }",| ).
      ELSE.
        write_tag( |"{ <value> }"| ).
      ENDIF.
    ENDLOOP.
    indent_level = indent_level - 1.
    write_tag( \`],\` ).
  ENDMETHOD.


  METHOD handle_string.
    DATA max_length LIKE abap_doc-max_length.
    IF abap_doc-max_length IS NOT INITIAL.

      max_length = abap_doc-max_length.
    ELSE.
      max_length = get_max_length( element_description ).
    ENDIF.
    IF abap_doc-min_length IS NOT INITIAL.
      write_tag( |"minLength": { abap_doc-min_length },| ).
    ENDIF.
    IF max_length IS NOT INITIAL.
      write_tag( |"maxLength": { max_length },| ).
      IF element_description->type_kind = cl_abap_typedescr=>typekind_num.
        write_tag( \`"pattern": "^[0-9]+$",\` ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD handle_extrema.
    DATA max_value TYPE string.
    DATA min_value TYPE string.
    DATA multiple_of LIKE abap_doc-multiple_of.
    DATA exclusive_minimum LIKE abap_doc-exclusive_minimum.
    DATA exclusive_maximum LIKE abap_doc-exclusive_maximum.
    get_extrema(
      EXPORTING
        element_description = element_description
      IMPORTING
        max                 = max_value
        min                 = min_value ).

    multiple_of = abap_doc-multiple_of.

    IF multiple_of IS NOT INITIAL AND is_element_descr_kind_int( element_description ) = abap_false.
      log->add_warning( message_text = zif_aff_log=>co_msg129 component_name = fullname_of_type ).
    ENDIF.


    exclusive_minimum = abap_doc-exclusive_minimum.

    exclusive_maximum = abap_doc-exclusive_maximum.

    IF exclusive_minimum IS NOT INITIAL.
      CLEAR min_value.
    ELSEIF abap_doc-minimum IS NOT INITIAL.
      min_value = abap_doc-minimum.
    ENDIF.

    IF exclusive_maximum IS NOT INITIAL.
      CLEAR max_value.
    ELSEIF abap_doc-maximum IS NOT INITIAL.
      max_value = abap_doc-maximum.
    ENDIF.

    IF min_value IS NOT INITIAL.
      write_tag( |"minimum": { min_value },| ).
    ENDIF.
    IF exclusive_minimum IS NOT INITIAL.
      write_tag( |"exclusiveMinimum": { exclusive_minimum },| ).
    ENDIF.
    IF max_value IS NOT INITIAL.
      write_tag( |"maximum": { max_value },| ).
    ENDIF.
    IF exclusive_maximum IS NOT INITIAL.
      write_tag( |"exclusiveMaximum": { exclusive_maximum },| ).
    ENDIF.

    IF multiple_of IS NOT INITIAL AND is_element_descr_kind_int( element_description ) = abap_true.
      write_tag( |"multipleOf": { multiple_of },| ).
    ENDIF.
  ENDMETHOD.

  METHOD is_element_descr_kind_int.
    DATA temp1 TYPE xsdboolean.
    temp1 = boolc( element_description->type_kind = cl_abap_typedescr=>typekind_int OR element_description->type_kind = cl_abap_typedescr=>typekind_int1 OR element_description->type_kind = cl_abap_typedescr=>typekind_int2 OR element_description->type_kind = cl_abap_typedescr=>typekind_int8 ).
    result = temp1.
  ENDMETHOD.

  METHOD handle_default.
    DATA default_ LIKE abap_doc-default_.
    FIELD-SYMBOLS <entry> TYPE zcl_aff_writer_json_schema=>ty_enum_value.
    default_ = abap_doc-default_.
    IF abap_doc-default_ CS ''@link''.
      default_ = get_default_from_link( link = abap_doc-default_ fullname_of_type = fullname_of_type element_type = element_description->type_kind ).
      IF default_ IS INITIAL.
        RETURN.
      ENDIF.

      READ TABLE enum_properties-values WITH KEY value = default_ ASSIGNING <entry>.
      IF sy-subrc = 0 AND <entry>-overwritten_value IS NOT INITIAL.
        default_ = <entry>-overwritten_value.
      ENDIF.

      default_ = |"{ default_ }"|.
    ELSEIF is_default_value_valid( element_description = element_description default_value = default_ fullname_of_type = fullname_of_type ) IS NOT INITIAL.
      IF json_type = zif_aff_writer=>type_info-numeric OR json_type = zif_aff_writer=>type_info-boolean.
        REPLACE ALL OCCURRENCES OF \`"\` IN default_ WITH \`\`.
      ELSEIF json_type = zif_aff_writer=>type_info-date_time.
        default_ = \`"\` && date_time_from_abap_to_json( date_time_abap = default_ element_description = element_description ) && \`"\`.
      ENDIF.
      IF json_type = zif_aff_writer=>type_info-numeric.
        REPLACE \`E\` IN default_ WITH \`e\`.
      ENDIF.
      IF json_type = zif_aff_writer=>type_info-boolean.
        IF default_ = ''X'' OR default_ = ''abap_true''.
          default_ = ''true'' ##NO_TEXT.
        ELSE.
          default_ = ''false'' ##NO_TEXT.
        ENDIF.
      ENDIF.
    ELSE.
      RETURN.
    ENDIF.

    write_tag( |"default": { default_ },| ).
  ENDMETHOD.


  METHOD open_structure.
    DATA temp5 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA temp6 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    DATA formatted_name TYPE string.
    DATA callback_class TYPE string.
    DATA temp7 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA temp8 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    DATA temp9 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    FIELD-SYMBOLS <table1> TYPE string_table.
    clear_type_specifics( ).
*  add a new empty required_table to the stack
    IF last_operation( ) = zif_aff_writer=>operation-initial.

      CLEAR temp5.
      temp5-name = structure_name.
      temp5-absolute_name = structure_description->absolute_name.
      INSERT temp5 INTO me->stack_of_structure INDEX 1.
      add_required_table_to_stack( ).
      open_json_schema_for_structure( structure_name = structure_name structure_description = structure_description ).

      CLEAR temp6.
      temp6-name = structure_name.
      temp6-number_brackets = 2.
      INSERT temp6 INTO me->structure_buffer INDEX 1.
      RETURN.
    ENDIF.

    append_comma_to_prev_line( ).


    formatted_name = format_name( structure_name ).

    set_abapdoc_fullname_struc_tab( type_description = structure_description type_name = structure_name ).


    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.


    CLEAR temp7.
    temp7-name = structure_name.
    temp7-absolute_name = structure_description->absolute_name.
    INSERT temp7 INTO me->stack_of_structure INDEX 1.

    IF last_operation( ) <> zif_aff_writer=>operation-open_table.
      write_open_tag( |"{ formatted_name }": \\{| ).

      CLEAR temp8.
      temp8-name = structure_name.
      temp8-number_brackets = 2.
      INSERT temp8 INTO me->structure_buffer INDEX 1.
    ELSE.

      CLEAR temp9.
      temp9-name = structure_name.
      temp9-number_brackets = 1.
      INSERT temp9 INTO me->structure_buffer INDEX 1.
    ENDIF.

    write_title_and_description( structure_description ).

    IF abap_doc-required = abap_true.

      READ TABLE stack_of_required_tabs INDEX 1 ASSIGNING <table1>.
      APPEND formatted_name TO <table1>.
    ENDIF.
    write_tag( \`"type": "object",\` ).
    write_open_tag( \`"properties": {\` ).
    add_required_table_to_stack( ).
  ENDMETHOD.


  METHOD close_structure.
    DATA temp10 LIKE LINE OF me->structure_buffer.
    DATA temp11 LIKE sy-tabix.
    DATA temp12 LIKE LINE OF me->structure_buffer.
    DATA temp13 LIKE sy-tabix.
    DATA temp14 LIKE LINE OF me->structure_buffer.
    DATA temp15 LIKE sy-tabix.
    delete_first_of_struc_stack( ).


    temp11 = sy-tabix.
    READ TABLE me->structure_buffer INDEX 1 INTO temp10.
    sy-tabix = temp11.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    DO temp10-number_brackets TIMES.


      temp13 = sy-tabix.
      READ TABLE me->structure_buffer INDEX 1 INTO temp12.
      sy-tabix = temp13.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      IF temp12-number_brackets = 2 AND sy-index = 2.
        write_req_and_add_props( ).
      ENDIF.
      write_closing_tag( \`}\` ).


      temp15 = sy-tabix.
      READ TABLE me->structure_buffer INDEX 1 INTO temp14.
      sy-tabix = temp15.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      IF temp14-number_brackets = 1.
        write_req_and_add_props( ).
      ENDIF.
    ENDDO.
    DELETE me->structure_buffer INDEX 1.
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD open_table.
    DATA temp16 TYPE REF TO cl_abap_tabledescr.
    DATA temp17 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    DATA formatted_name TYPE string.
    FIELD-SYMBOLS <table1> TYPE string_table.
    DATA callback_class TYPE string.
    DATA temp18 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    DATA temp19 TYPE zcl_aff_writer_json_schema=>ty_buffer.
    DATA temp20 TYPE REF TO cl_abap_tabledescr.
    clear_type_specifics( ).
    IF last_operation( ) = zif_aff_writer=>operation-initial.

      temp16 ?= table_description.
      open_json_schema_for_table( table_name = table_name  table_description = temp16 ).

      CLEAR temp17.
      temp17-name = table_name.
      temp17-number_brackets = 2.
      INSERT temp17 INTO TABLE me->table_buffer.
      RETURN.
    ENDIF.
    append_comma_to_prev_line( ).

    formatted_name = format_name( table_name ).

    set_abapdoc_fullname_struc_tab( type_description = table_description type_name = table_name ).

    IF abap_doc-required = abap_true AND lines( stack_of_required_tabs ) >= 1.

      READ TABLE stack_of_required_tabs INDEX 1 ASSIGNING <table1>.
      APPEND formatted_name TO <table1>.
    ENDIF.


    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.

    IF last_operation( ) <> zif_aff_writer=>operation-open_table.
      write_open_tag( |"{ formatted_name }": \\{| ).

      CLEAR temp18.
      temp18-name = table_name.
      temp18-number_brackets = 2.
      INSERT temp18 INTO me->table_buffer INDEX 1.
    ELSE.

      CLEAR temp19.
      temp19-name = table_name.
      temp19-number_brackets = 1.
      INSERT temp19 INTO me->table_buffer INDEX 1.
    ENDIF.

    write_title_and_description( table_description ).

    write_tag( \`"type": "array",\` ).

    temp20 ?= table_description.
    IF temp20->has_unique_key = abap_true.
      write_tag( \`"uniqueItems": true,\` ).
    ENDIF.
    write_open_tag( \`"items": {\` ).
  ENDMETHOD.


  METHOD close_table.
    DATA temp21 LIKE LINE OF me->table_buffer.
    DATA temp22 LIKE sy-tabix.
    DATA temp23 LIKE sy-subrc.
    temp22 = sy-tabix.
    READ TABLE me->table_buffer WITH KEY name = table_name INTO temp21.
    sy-tabix = temp22.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    DO temp21-number_brackets TIMES.
      write_closing_tag( \`}\` ).
    ENDDO.

    READ TABLE me->table_buffer WITH KEY name = table_name TRANSPORTING NO FIELDS.
    temp23 = sy-tabix.
    DELETE me->table_buffer INDEX temp23.
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD append_comma_to_prev_line.
    IF ( last_operation( ) = zif_aff_writer=>operation-write_element OR
       last_operation( ) = zif_aff_writer=>operation-close_structure OR
       last_operation( ) = zif_aff_writer=>operation-close_table ) AND ( ignore_til_indent_level > indent_level OR ignore_til_indent_level IS INITIAL ).
      append_to_previous_line( \`,\` ).
    ENDIF.
  ENDMETHOD.

  METHOD set_abapdoc_fullname_struc_tab.
    DATA absolute_name LIKE type_description->absolute_name.
    DATA splitted_absolute_name TYPE string_table.
    DATA source_type LIKE LINE OF splitted_absolute_name.
    DATA temp6 LIKE LINE OF splitted_absolute_name.
    DATA temp7 LIKE sy-tabix.
    DATA source LIKE LINE OF splitted_absolute_name.
    DATA temp8 LIKE LINE OF splitted_absolute_name.
    DATA temp9 LIKE sy-tabix.
    DATA already_found LIKE abap_true.
    DATA abap_doc_second TYPE zcl_aff_abap_doc_parser=>abap_doc.
    IF last_operation( ) = zif_aff_writer=>operation-open_table.

      absolute_name = type_description->absolute_name.

      splitted_absolute_name = get_splitted_absolute_name( absolute_name ).



      temp7 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 1 INTO temp6.
      sy-tabix = temp7.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source_type = temp6.



      temp9 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 2 INTO temp8.
      sy-tabix = temp9.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp8.
      fullname_of_type = type_name.

      already_found = abap_true.
    ELSE.
      get_all_path_information(
        EXPORTING
          name             = type_name
        IMPORTING
          source_type      = source_type
          source           = source
          fullname_of_type = fullname_of_type ).
    ENDIF.

    IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.
      abap_doc = call_reader_and_decode( name_of_source = source element_name = fullname_of_type ).
    ENDIF.
    IF already_found = abap_false.

      abap_doc_second = get_abap_doc_for_absolute_name( type_description->absolute_name ).
      compare_abap_doc(
        EXPORTING
          abap_doc_additional = abap_doc_second
        CHANGING
          abap_doc_base       = abap_doc ).
    ENDIF.
    check_redundant_annotations( ).
  ENDMETHOD.


  METHOD set_abapdoc_fullname_element.
    DATA source_type TYPE string.
    DATA source TYPE string.
    DATA temp24 LIKE LINE OF splitted_prev_name.
    DATA temp25 LIKE sy-tabix.
    DATA temp26 LIKE LINE OF splitted_prev_name.
    DATA temp27 LIKE sy-tabix.
    DATA already_searched LIKE abap_true.
    DATA abap_doc_second TYPE zcl_aff_abap_doc_parser=>abap_doc.
* Simple Component of a structure, defined in the structure definition
    IF lines( stack_of_structure ) > 0.


      get_all_path_information(
        EXPORTING
          name             = element_name
        IMPORTING
          source_type      = source_type
          source           = source
          fullname_of_type = fullname_of_type ).

* Element which is in no structure
    ELSEIF lines( stack_of_structure ) = 0.
      fullname_of_type = element_name.


      temp25 = sy-tabix.
      READ TABLE splitted_prev_name INDEX 1 INTO temp24.
      sy-tabix = temp25.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source_type = temp24.


      temp27 = sy-tabix.
      READ TABLE splitted_prev_name INDEX 2 INTO temp26.
      sy-tabix = temp27.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp26.

      already_searched = abap_true.
    ENDIF.

    IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.
      abap_doc = call_reader_and_decode( name_of_source = source element_name = fullname_of_type ).
    ENDIF.

    IF already_searched = abap_false.

      abap_doc_second = get_abap_doc_for_absolute_name( absolute_name = element_description->absolute_name ).
      compare_abap_doc(
        EXPORTING
          abap_doc_additional = abap_doc_second
        CHANGING
          abap_doc_base       = abap_doc ).
    ENDIF.
    check_redundant_annotations( ).
  ENDMETHOD.


  METHOD get_json_schema_type.
    IF json_type = zif_aff_writer=>type_info-numeric.
      result = ''number'' ##NO_TEXT.
      IF type_is_integer( element_description ) = abap_true.
        result = ''integer''  ##NO_TEXT.
      ENDIF.
    ELSEIF json_type = zif_aff_writer=>type_info-date_time.
      result = ''string'' ##NO_TEXT.
    ELSE.
      result = to_lower( json_type ).
    ENDIF.
  ENDMETHOD.


  METHOD open_json_schema_for_structure.
    DATA absolute_name TYPE abap_abstypename.
    DATA temp10 LIKE LINE OF stack_of_structure.
    DATA temp11 LIKE sy-tabix.
    DATA splitted_absolute_name TYPE string_table.
    DATA source_type LIKE LINE OF splitted_absolute_name.
    DATA temp12 LIKE LINE OF splitted_absolute_name.
    DATA temp13 LIKE sy-tabix.
    DATA source LIKE LINE OF splitted_absolute_name.
    DATA temp14 LIKE LINE OF splitted_absolute_name.
    DATA temp15 LIKE sy-tabix.
    DATA callback_class TYPE string.
    temp11 = sy-tabix.
    READ TABLE stack_of_structure INDEX 1 INTO temp10.
    sy-tabix = temp11.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    absolute_name = temp10-absolute_name.

    splitted_absolute_name = get_splitted_absolute_name( absolute_name ).



    temp13 = sy-tabix.
    READ TABLE splitted_absolute_name INDEX 1 INTO temp12.
    sy-tabix = temp13.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    source_type = temp12.
    IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.



      temp15 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 2 INTO temp14.
      sy-tabix = temp15.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp14.
      abap_doc = call_reader_and_decode( name_of_source = source element_name = structure_name ).
    ENDIF.
    fullname_of_type = structure_name.
    check_redundant_annotations( ).
    write_open_tag( ''{'' ).
    write_tag( |"$comment": "This file is autogenerated, do not edit manually, see { c_link_to_repository } for more information.",| ) ##NO_TEXT.
    write_tag( |"$schema": "{ c_schema_specification }",| ).
    write_tag( |"$id": "{ me->schema_id }",| ).

    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = structure_name ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.

    write_title_and_description( structure_description ).

    write_tag( ''"type": "object",'' ).
    write_open_tag( ''"properties": {'' ).
  ENDMETHOD.


  METHOD open_json_schema_for_table.
    DATA absolute_name LIKE table_description->absolute_name.
    DATA splitted_absolute_name TYPE string_table.
    DATA source_type LIKE LINE OF splitted_absolute_name.
    DATA temp16 LIKE LINE OF splitted_absolute_name.
    DATA temp17 LIKE sy-tabix.
    DATA source LIKE LINE OF splitted_absolute_name.
    DATA temp18 LIKE LINE OF splitted_absolute_name.
    DATA temp19 LIKE sy-tabix.
    DATA callback_class TYPE string.
    absolute_name = table_description->absolute_name.

    splitted_absolute_name = get_splitted_absolute_name( absolute_name ).



    temp17 = sy-tabix.
    READ TABLE splitted_absolute_name INDEX 1 INTO temp16.
    sy-tabix = temp17.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    source_type = temp16.
    IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.



      temp19 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 2 INTO temp18.
      sy-tabix = temp19.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp18.
      abap_doc = call_reader_and_decode( name_of_source = source element_name = table_name ).
    ENDIF.
    fullname_of_type = table_name.
    check_redundant_annotations( ).
    write_open_tag( ''{'' ).
    write_tag( |"$comment": "This file is autogenerated, do not edit manually, see { c_link_to_repository } for more information.",| ) ##NO_TEXT.
    write_tag( |"$schema": "{ c_schema_specification }",| ).
    write_tag( |"$id": "{ me->schema_id }",| ).


    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = table_name ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.

    write_title_and_description( table_description ).

    write_tag( ''"type": "array",'' ).
    IF table_description->has_unique_key = abap_true.
      write_tag( ''"uniqueItems": true,'' ).
    ENDIF.
    write_open_tag( ''"items": {'' ).
  ENDMETHOD.


  METHOD write_subschema.
    DATA subschema TYPE string_table.
    FIELD-SYMBOLS <line> LIKE LINE OF subschema.
    TRY.

        CALL METHOD (callback_class)=>get_subschema
          RECEIVING
            subschema = subschema.

        LOOP AT subschema ASSIGNING <line>.
          write_tag( <line> ).
        ENDLOOP.
        ignore_til_indent_level = indent_level.
      CATCH cx_sy_dyn_call_error ##NO_HANDLER.
    ENDTRY.
  ENDMETHOD.


  METHOD open_json_schema_for_element.
    write_open_tag( ''{'' ).
    write_tag( |"$comment": "This file is autogenerated, do not edit manually, see { c_link_to_repository } for more information.",| ) ##NO_TEXT.
    write_tag( |"$schema": "{ c_schema_specification }",| ).
    write_tag( |"$id": "{ me->schema_id }",| ).
  ENDMETHOD.


  METHOD get_description.
    DATA element_description TYPE REF TO cl_abap_elemdescr.
    DATA temp28 TYPE REF TO cl_abap_elemdescr.
    DATA ddic_field TYPE dfies.
    IF abap_doc-description IS NOT INITIAL.
      result = abap_doc-description.
    ELSEIF type_description IS SUPPLIED.

      TRY.

          temp28 ?= type_description.
          element_description = temp28.
        CATCH cx_sy_move_cast_error.
          RETURN.
      ENDTRY.

      element_description->get_ddic_field(
        EXPORTING
          p_langu    = ''E''
        RECEIVING
          p_flddescr = ddic_field
        EXCEPTIONS
          OTHERS     = 1 ) ##SUBRC_OK.
      IF ddic_field IS NOT INITIAL AND ddic_field-fieldtext IS NOT INITIAL.
        result = ddic_field-fieldtext.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD get_enum_properties.
    DATA ddic_fixed_values TYPE cl_abap_elemdescr=>fixvalues.
    FIELD-SYMBOLS <value> LIKE LINE OF ddic_fixed_values.
    DATA text TYPE string.
    DATA temp29 TYPE zcl_aff_writer_json_schema=>ty_enum_value.
    IF abap_doc-enumvalues_link IS NOT INITIAL.
      result = get_properties_from_structure( element_description->type_kind ).
    ELSE.
      IF get_json_type_from_description( element_description ) = zif_aff_writer=>type_info-boolean.
        RETURN.
      ENDIF.

      element_description->get_ddic_fixed_values(
        RECEIVING
          p_fixed_values = ddic_fixed_values
        EXCEPTIONS
          OTHERS         = 1 ) ##SUBRC_OK.
      IF ddic_fixed_values IS INITIAL.
        RETURN.
      ENDIF.

      LOOP AT ddic_fixed_values ASSIGNING <value>.

        text = <value>-ddtext.
        REPLACE ALL OCCURRENCES OF PCRE ''\\s'' IN text WITH ''_''.

        CLEAR temp29.
        temp29-value = format_to_camel_case( text ).
        INSERT temp29 INTO TABLE result-values.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.


  METHOD get_enum_descriptions.
    DATA ddic_fixed_values TYPE cl_abap_elemdescr=>fixvalues.
    FIELD-SYMBOLS <value> LIKE LINE OF ddic_fixed_values.
    IF abap_doc-enumvalues_link IS NOT INITIAL.
      result = enum_properties-descriptions.
    ELSE.

      element_description->get_ddic_fixed_values(
        RECEIVING
          p_fixed_values = ddic_fixed_values
        EXCEPTIONS
          OTHERS         = 1 ) ##SUBRC_OK.
      IF ddic_fixed_values IS NOT INITIAL.

        LOOP AT ddic_fixed_values ASSIGNING <value>.
          APPEND <value>-ddtext TO result.
        ENDLOOP.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD type_is_integer.
    result = abap_false.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_int OR
       element_description->type_kind = cl_abap_typedescr=>typekind_int1 OR
       element_description->type_kind = cl_abap_typedescr=>typekind_int2 OR
       element_description->type_kind = cl_abap_typedescr=>typekind_int8.
      result = abap_true.
    ENDIF.
  ENDMETHOD.


  METHOD get_properties_from_structure.
    DATA structure_of_values TYPE REF TO cl_abap_structdescr.
    DATA name_of_source TYPE string.
    DATA name_of_constant TYPE string.
    FIELD-SYMBOLS <component> LIKE LINE OF structure_of_values->components.
    DATA temp30 TYPE symsgv.
    DATA temp20 TYPE symsgv.
    DATA msg TYPE string.
    DATA temp31 TYPE REF TO zcx_aff_tools.
    DATA fullname_of_value TYPE string.
    DATA abap_doc_of_component TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA temp32 TYPE ty_enum_value.
    DATA temp21 TYPE string.
    get_structure_of_enum_values(
      EXPORTING
        link_to_values      = abap_doc-enumvalues_link
        fullname_of_type    = fullname_of_type
      IMPORTING
        structure_of_values = structure_of_values
        name_of_source      = name_of_source
        name_of_constant    = name_of_constant ).

    IF structure_of_values IS NOT INITIAL.

      LOOP AT structure_of_values->components ASSIGNING <component>.
        IF <component>-type_kind <> enum_type.

          temp30 = name_of_constant.

          temp20 = fullname_of_type.

          msg = log->get_message_text( msgno = 122 msgv1 = temp30 msgv2 = temp20 ).

          CREATE OBJECT temp31 TYPE zcx_aff_tools EXPORTING message = msg.
          RAISE EXCEPTION temp31.
        ENDIF.


        fullname_of_value = name_of_constant && ''-'' && <component>-name.

        abap_doc_of_component = call_reader_and_decode( name_of_source = name_of_source element_name = fullname_of_value ).


        CLEAR temp32.

        temp21 = <component>-name.
        temp32-value = format_to_camel_case( temp21 ).
        temp32-overwritten_value = abap_doc_of_component-enum_value.
        APPEND temp32 TO result-values.
        APPEND abap_doc_of_component-description TO result-descriptions.
        APPEND abap_doc_of_component-title TO result-titles.

        check_title_and_description( abap_doc_to_check = abap_doc_of_component fullname_of_checked_type = fullname_of_value ).
      ENDLOOP.
      IF abap_doc-required = abap_false AND abap_doc-default_ IS INITIAL.
        log->add_warning( message_text = zif_aff_log=>co_msg127 component_name = fullname_of_type ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD add_required_table_to_stack.
    DATA temp33 TYPE string_table.
    CLEAR temp33.
    INSERT temp33 INTO stack_of_required_tabs INDEX 1.
  ENDMETHOD.


  METHOD delete_first_tab_of_req_stack.
    IF stack_of_required_tabs IS NOT INITIAL.
      DELETE stack_of_required_tabs INDEX 1.
    ENDIF.
  ENDMETHOD.


  METHOD write_req_and_add_props.
    FIELD-SYMBOLS <temp34> LIKE LINE OF content.
    DATA temp35 LIKE sy-tabix.
    DATA temp22 LIKE LINE OF content.
    DATA temp23 LIKE sy-tabix.
    DATA temp36 LIKE LINE OF stack_of_required_tabs.
    DATA temp37 LIKE sy-tabix.
    FIELD-SYMBOLS <temp38> LIKE LINE OF content.
    DATA temp39 LIKE sy-tabix.
    DATA temp24 LIKE LINE OF content.
    DATA temp25 LIKE sy-tabix.
    DATA temp26 LIKE LINE OF stack_of_required_tabs.
    DATA temp27 LIKE sy-tabix.
    FIELD-SYMBOLS <required_comp> LIKE LINE OF temp26.
    DATA temp28 LIKE LINE OF stack_of_required_tabs.
    DATA temp29 LIKE sy-tabix.
    DATA temp40 LIKE LINE OF stack_of_required_tabs.
    DATA temp41 LIKE sy-tabix.
    IF ignore_til_indent_level > indent_level OR ignore_til_indent_level IS INITIAL.


      temp35 = sy-tabix.
      READ TABLE content INDEX lines( content ) ASSIGNING <temp34>.
      sy-tabix = temp35.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.


      temp23 = sy-tabix.
      READ TABLE content INDEX lines( content ) INTO temp22.
      sy-tabix = temp23.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      <temp34> = temp22 && \`,\`.
      write_tag( \`"additionalProperties": false\` ).


      temp37 = sy-tabix.
      READ TABLE stack_of_required_tabs INDEX 1 INTO temp36.
      sy-tabix = temp37.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      IF temp36 IS NOT INITIAL.


        temp39 = sy-tabix.
        READ TABLE content INDEX lines( content ) ASSIGNING <temp38>.
        sy-tabix = temp39.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.


        temp25 = sy-tabix.
        READ TABLE content INDEX lines( content ) INTO temp24.
        sy-tabix = temp25.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.
        <temp38> = temp24 && \`,\`.
        write_tag( \`"required": [\` ).
        indent_level = indent_level + 1.


        temp27 = sy-tabix.
        READ TABLE stack_of_required_tabs INDEX 1 INTO temp26.
        sy-tabix = temp27.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.



        temp29 = sy-tabix.
        READ TABLE stack_of_required_tabs INDEX 1 INTO temp28.
        sy-tabix = temp29.
        IF sy-subrc <> 0.
          RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
        ENDIF.
        LOOP AT temp28 ASSIGNING <required_comp>.


          temp41 = sy-tabix.
          READ TABLE stack_of_required_tabs INDEX 1 INTO temp40.
          sy-tabix = temp41.
          IF sy-subrc <> 0.
            RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
          ENDIF.
          IF sy-tabix < lines( temp40 ).
            write_tag( |"{ <required_comp> }",| ).
          ELSE.
            write_tag( |"{ <required_comp> }"| ).
          ENDIF.
        ENDLOOP.
        indent_level = indent_level - 1.
        write_tag( \`]\` ).
      ENDIF.
    ENDIF.
    delete_first_tab_of_req_stack( ).
  ENDMETHOD.


  METHOD get_format.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_date OR
    element_description->type_kind = cl_abap_typedescr=>typekind_time OR
    element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
      result = \`date-time\` ##NO_TEXT.
    ENDIF.
  ENDMETHOD.


  METHOD write_tag.
    DATA temp42 LIKE LINE OF content.
    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level > indent_level.

      temp42 = |{ repeat( val = \` \` occ = indent_level * c_indent_number_characters ) }{ line }|.
      APPEND temp42 TO content.
    ENDIF.
  ENDMETHOD.


  METHOD date_time_from_abap_to_json.
    DATA abap_date LIKE date_time_abap.
    DATA difference TYPE i.
    abap_date = date_time_abap.
    REPLACE ALL OCCURRENCES OF \`"\` IN abap_date WITH \`\`.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_date.
      IF strlen( abap_date ) = 8.
        date_time_json = abap_date+0(4) && \`-\` && abap_date+4(2) && \`-\` && abap_date+6(2).
      ELSEIF strlen( abap_date ) = 6.
        date_time_json = abap_date+0(4) && \`-\` && abap_date+4(2).
      ELSE.
        date_time_json = abap_date.
      ENDIF.
    ELSEIF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
      date_time_json = abap_date+0(19) && \`+00:00\`.
    ELSEIF element_description->type_kind = cl_abap_typedescr=>typekind_time.

      difference = 6 - strlen( abap_date ).
      IF difference > 0.
        abap_date = abap_date && repeat( val = ''0'' occ = difference ).
      ENDIF.
      date_time_json = abap_date+0(2) && \`:\` && abap_date+2(2) && \`:\` && abap_date+4(2).
    ENDIF.
  ENDMETHOD.


  METHOD reset_indent_level_tag.
    IF ignore_til_indent_level = indent_level.
      CLEAR ignore_til_indent_level.
    ENDIF.
  ENDMETHOD.


  METHOD append_after_output.
    APPEND \`\` TO output.
  ENDMETHOD.


  METHOD check_title_and_description.
    DATA msg TYPE string.
    DATA temp43 TYPE symsgv.

    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level > indent_level. "Only write message if no callback class provided
      IF abap_doc_to_check-title IS INITIAL.
        msg = log->get_message_text( msgno = 119 msgv1 = \`Title\` ) ##NO_TEXT.
        log->add_info( message_text = msg component_name = fullname_of_checked_type ).
      ENDIF.

      IF abap_doc_to_check-description IS INITIAL.
        msg = log->get_message_text( msgno = 119 msgv1 = \`Description\` ) ##NO_TEXT.
        log->add_info( message_text = msg component_name = fullname_of_checked_type ).
      ELSEIF strlen( abap_doc_to_check-description ) > c_max_length_of_description.

        temp43 = c_max_length_of_description.
        msg = log->get_message_text( msgno = 125 msgv1 = temp43 ).
        log->add_warning( message_text = msg component_name = fullname_of_checked_type ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_writer~validate.
    DATA string TYPE string.
    DATA json_as_xstring TYPE xstring.
    DATA json_reader TYPE REF TO if_sxml_reader.
    DATA exception TYPE REF TO cx_sxml_parse_error.
    TRY.

        string = concat_lines_of( table = source sep = cl_abap_char_utilities=>newline ).

        json_as_xstring = cl_abap_codepage=>convert_to( string ).

        json_reader = cl_sxml_string_reader=>create( json_as_xstring ).
        json_reader->next_node( ).
        json_reader->skip_node( ).

      CATCH cx_sxml_parse_error INTO exception.
        log->add_exception( exception = exception component_name = \`\` ).
        RETURN.
    ENDTRY.
    result = abap_true.
  ENDMETHOD.


  METHOD handle_language_field.
    write_tag( \`"minLength": 2,\` ).
  ENDMETHOD.


  METHOD get_max_length.
    DATA temp44 TYPE i.
    DATA length LIKE temp44.
    DATA length_as_string TYPE string.
    IF element_description->output_length > 0.

      IF ( element_description->length / cl_abap_char_utilities=>charsize ) > element_description->output_length.
        temp44 = element_description->length / cl_abap_char_utilities=>charsize.
      ELSE.
        temp44 = element_description->output_length.
      ENDIF.

      length = temp44.

      length_as_string = length.
      remove_leading_trailing_spaces( CHANGING string_to_work_on = length_as_string ).
      result = length_as_string.
    ENDIF.
  ENDMETHOD.


  METHOD get_extrema.
    DATA r_field TYPE REF TO data.
    FIELD-SYMBOLS <field> TYPE any.
    DATA max_val TYPE REF TO data.
    FIELD-SYMBOLS <max> TYPE data.
    DATA min_val TYPE REF TO data.
    FIELD-SYMBOLS <min> TYPE data.
    DATA min_str TYPE string.
    DATA length TYPE i.
    DATA front TYPE string.
    DATA back TYPE string.
    CREATE DATA r_field TYPE HANDLE element_description.
    ASSIGN r_field->* TO <field>.


    max_val = cl_abap_exceptional_values=>get_max_value( <field> ).

    ASSIGN max_val->* TO <max>.
    IF <max> IS ASSIGNED.
      max = <max>.
      REPLACE ALL OCCURRENCES OF ''E'' IN max WITH ''e''.
      REPLACE ALL OCCURRENCES OF ''+'' IN max WITH ''''.
      remove_leading_trailing_spaces( CHANGING string_to_work_on = max ).
    ENDIF.

    IF element_description->type_kind = cl_abap_typedescr=>typekind_decfloat OR
          element_description->type_kind = cl_abap_typedescr=>typekind_decfloat16 OR
          element_description->type_kind = cl_abap_typedescr=>typekind_decfloat34.
      IF <max> IS ASSIGNED.
        min = ''-'' && max.
      ENDIF.
    ELSE.

      min_val = cl_abap_exceptional_values=>get_min_value( <field> ).

      ASSIGN min_val->* TO <min>.
      IF <min> IS ASSIGNED.

        min_str = <min>.

        length = strlen( min_str ) - 1.

        front = substring( val = min_str off = 0 len = length ).

        back = substring( val = min_str off = length len = 1 ).
        IF back = ''-''.
          min = back && front.
        ELSE.
          min = min_str.
        ENDIF.
        REPLACE ALL OCCURRENCES OF ''E'' IN min WITH ''e''.
        REPLACE ALL OCCURRENCES OF ''+'' IN min WITH ''''.
        remove_leading_trailing_spaces( CHANGING string_to_work_on = min ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCL_AFF_WRITER_XSLT                     ', 'CLASS zcl_aff_writer_xslt DEFINITION
  PUBLIC
  INHERITING FROM zcl_aff_writer
  CREATE PUBLIC.

  PUBLIC SECTION.

    METHODS:
      constructor
        IMPORTING
          st_root_name TYPE csequence DEFAULT ''root'' ##NO_TEXT,

      zif_aff_writer~validate REDEFINITION.

  PROTECTED SECTION.

    METHODS:
      write_open_structure
        IMPORTING
          structure_name        TYPE string
          structure_description TYPE REF TO cl_abap_typedescr
        RAISING
          zcx_aff_tools,
      append_after_output REDEFINITION,
      append_before_output REDEFINITION,
      write_element REDEFINITION,
      open_structure REDEFINITION,
      open_table REDEFINITION,
      close_structure REDEFINITION,
      write_tag REDEFINITION,
      close_table REDEFINITION,
      write_callback
        IMPORTING
          name_of_callback_class TYPE string
          parameter_name         TYPE string
          ref_name               TYPE string.

  PRIVATE SECTION.

    TYPES:
      BEGIN OF ty_variable_default_pair,
        var_name      TYPE string,
        default_value TYPE string,
      END OF ty_variable_default_pair,
      tt_variable_default_pair TYPE STANDARD TABLE OF ty_variable_default_pair WITH DEFAULT KEY.

    TYPES:
      BEGIN OF ty_components_with_default,
        line_to_insert    TYPE i,
        table_of_defaults TYPE tt_variable_default_pair,
      END OF ty_components_with_default,

      tt_components_with_default TYPE STANDARD TABLE OF ty_components_with_default.

    TYPES:
      BEGIN OF ty_enum_value,
        abap_value             TYPE string,
        json_value             TYPE string,
        overwritten_json_value TYPE string,
      END OF ty_enum_value.

    TYPES: tt_enum_values TYPE STANDARD TABLE OF ty_enum_value WITH DEFAULT KEY.


    DATA:
      st_root_name                  TYPE string,
      st_template_imports           TYPE string_table,
      next_tag_without_name_and_ref TYPE abap_boolean,
      stack_default_comp_of_struc   TYPE tt_components_with_default,
      ignore_next_elements          TYPE abap_boolean.

    METHODS: get_tag_from_type
      IMPORTING
        json_type     TYPE string
      RETURNING
        VALUE(result) TYPE string
      RAISING
        zcx_aff_tools,

      get_option
        IMPORTING
          json_type           TYPE string
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE string
        RAISING
          zcx_aff_tools,

      write_enum_value_mappings
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          element_name        TYPE string
          enum_values         TYPE tt_enum_values
        RAISING
          zcx_aff_tools,

      get_abap_value
        IMPORTING
          abap_value          TYPE string
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE string,
      get_name
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string,

      get_ref
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string,

      get_ref_for_structure
        IMPORTING
          name          TYPE string
        RETURNING
          VALUE(result) TYPE string,

      get_condition_tab_or_struc
        IMPORTING
          type_name        TYPE string
        RETURNING
          VALUE(condition) TYPE string
        RAISING
          zcx_aff_tools,

      get_condition_for_element
        IMPORTING
          element_name        TYPE string
          element_description TYPE REF TO cl_abap_elemdescr
          type                TYPE string
          enum_values         TYPE tt_enum_values
        RETURNING
          VALUE(condition)    TYPE string
        RAISING
          zcx_aff_tools,

      get_enum_values
        IMPORTING
          enum_type     TYPE abap_typekind
        RETURNING
          VALUE(result) TYPE tt_enum_values
        RAISING
          zcx_aff_tools,


      get_default_value_from_default
        IMPORTING
          enum_values         TYPE tt_enum_values
          type                TYPE string
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(default_)      TYPE string
        RAISING
          zcx_aff_tools,

      get_prefixed_default
        IMPORTING
          value               TYPE string
          element_description TYPE REF TO cl_abap_elemdescr
        RETURNING
          VALUE(result)       TYPE string
        RAISING
          zcx_aff_tools,

      write_callback_template
        IMPORTING
          element_name TYPE string
          description  TYPE REF TO cl_abap_typedescr
          tag          TYPE string OPTIONAL
        RAISING
          zcx_aff_tools,
      reset_indent_level_tag,
      write_defaults,
      write_iso_language_callback
        IMPORTING
          element_name TYPE string,
      enable_extension
        IMPORTING
          structure_description TYPE REF TO cl_abap_structdescr,
      get_default
        IMPORTING
          structure_name      TYPE string
          enum_values         TYPE tt_enum_values
          element_description TYPE REF TO cl_abap_elemdescr
          type                TYPE string
        RETURNING
          VALUE(default_)      TYPE string
        RAISING
          zcx_aff_tools,
      set_abapdoc_fullname_tab_struc
        IMPORTING
          type_description TYPE REF TO cl_abap_typedescr
          type_name        TYPE string,
      set_abapdoc_fullname_element
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          element_name        TYPE string,
      write_enum_map_ext_compatible
        IMPORTING
          element_description TYPE REF TO cl_abap_elemdescr
          element_name        TYPE string
          enum_values         TYPE zcl_aff_writer_xslt=>tt_enum_values,
      get_to_ref
        IMPORTING
                  name          TYPE string
        RETURNING VALUE(result) TYPE string.


ENDCLASS.


CLASS zcl_aff_writer_xslt IMPLEMENTATION.


  METHOD constructor.
    super->constructor( ).
    me->st_root_name = st_root_name.
    next_tag_without_name_and_ref = abap_true.
  ENDMETHOD.


  METHOD open_structure.
    DATA temp1 TYPE zcl_aff_writer=>ty_structure_stack.
    write_open_structure( structure_name = structure_name structure_description = structure_description ).

    CLEAR temp1.
    temp1-name = structure_name.
    temp1-absolute_name = structure_description->absolute_name.
    INSERT temp1 INTO me->stack_of_structure INDEX 1.
  ENDMETHOD.


  METHOD write_open_structure.
    DATA temp2 TYPE zcl_aff_writer_xslt=>ty_components_with_default.
    clear_type_specifics( ).
    set_abapdoc_fullname_tab_struc( type_description = structure_description type_name = structure_name ).

    IF abap_doc-callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = abap_doc-callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      write_callback_template( element_name = structure_name description = structure_description ).
    ENDIF.
    write_open_tag( |<tt:cond{ get_condition_tab_or_struc( structure_name ) }>| ).
    write_open_tag( |<object{ get_name( name = structure_name ) }{ get_ref_for_structure( structure_name ) }>| ).

    CLEAR temp2.
    temp2-line_to_insert = lines( content ).
    INSERT temp2 INTO me->stack_default_comp_of_struc INDEX 1.
    write_open_tag( \`<tt:group>\` ).
    next_tag_without_name_and_ref = abap_false.
  ENDMETHOD.

  METHOD open_table.
    clear_type_specifics( ).
    set_abapdoc_fullname_tab_struc( type_description = table_description type_name = table_name ).

    IF abap_doc-callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = abap_doc-callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      write_callback_template( element_name = table_name description = table_description ).
    ENDIF.

    write_open_tag( |<tt:cond{ get_condition_tab_or_struc( table_name ) }>| ).
    write_open_tag( |<array{ get_name( name = table_name ) }>| ).
    write_open_tag( |<tt:loop{ get_ref( table_name ) }>| ).
    write_open_tag( \`<tt:group>\` ).
    next_tag_without_name_and_ref = abap_true.
  ENDMETHOD.


  METHOD close_structure.
    DATA temp3 TYPE REF TO cl_abap_structdescr.
    delete_first_of_struc_stack( ).
    write_defaults( ).

    temp3 ?= structure_description.
    enable_extension( temp3 ).
    write_closing_tag( \`</tt:group>\` ).
    write_closing_tag( \`</object>\` ).
    write_closing_tag( \`</tt:cond>\` ).
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD close_table.
    write_closing_tag( \`</tt:group>\` ).
    write_closing_tag( \`</tt:loop>\` ).
    write_closing_tag( \`</array>\` ).
    write_closing_tag( \`</tt:cond>\` ).
    next_tag_without_name_and_ref = abap_false.
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD append_before_output.
    DATA temp4 LIKE LINE OF output.
    DATA temp5 LIKE LINE OF output.
    DATA temp6 LIKE LINE OF output.
    APPEND \`<?sap.transform simple?>\` TO output.
    APPEND \`<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">\` TO output.
    APPEND LINES OF st_template_imports TO output.

    temp4 = |<tt:root name="{ st_root_name }"/>|.
    APPEND temp4 TO output.

    temp5 = |<tt:variable name="VARIABLE"/>|.
    APPEND temp5 TO output.
    APPEND \`<tt:template>\` TO output.

    temp6 = |<tt:ref name="{ st_root_name }">|.
    APPEND temp6 TO output.
  ENDMETHOD.


  METHOD append_after_output.
    APPEND \`</tt:ref>\` TO output.
    APPEND \`</tt:template>\` TO output.
    APPEND \`</tt:transform>\` TO output.
  ENDMETHOD.


  METHOD write_element.
    DATA enum_values TYPE zcl_aff_writer_xslt=>tt_enum_values.
    DATA temp7 TYPE string.
    DATA type LIKE temp7.
    DATA tag TYPE string.
    CHECK ignore_next_elements = abap_false.

    clear_type_specifics( ).
    set_abapdoc_fullname_element( element_description = element_description element_name = element_name ).

    IF abap_doc-enumvalues_link IS NOT INITIAL.

      enum_values = get_enum_values( element_description->type_kind ).
    ENDIF.

    IF enum_values IS NOT INITIAL.
      temp7 = zif_aff_writer=>type_info-string.
    ELSE.
      temp7 = get_json_type_from_description( element_description ).
    ENDIF.

    type = temp7.


    tag = get_tag_from_type( type ).

    IF abap_doc-callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = abap_doc-callback_class component_name = fullname_of_type ) IS NOT INITIAL.
      write_callback_template( element_name = element_name description = element_description tag = tag ).
    ENDIF.
    write_open_tag( |<tt:cond{ get_condition_for_element( element_name = element_name element_description = element_description enum_values = enum_values type = type ) }>| ).
    write_open_tag( |<{ tag }{ get_name( name = element_name ) }>| ).
    IF ( is_sy_langu( element_description = element_description ) IS NOT INITIAL ).
      write_iso_language_callback( element_name = element_name ).
    ELSEIF enum_values IS INITIAL.
      write_tag( |<tt:value{ get_ref( element_name ) }{ get_option( json_type = type element_description = element_description ) }/>| ).
    ELSEIF abap_doc-default_ IS NOT INITIAL.
      write_open_tag( line = |<tt:deserialize>| ).
      write_enum_map_ext_compatible(
        element_description = element_description
        element_name        = element_name
        enum_values         = enum_values ).
      write_closing_tag( \`</tt:deserialize>\` ).
      write_open_tag( |<tt:serialize>| ).
      write_enum_value_mappings( element_description = element_description element_name = element_name enum_values = enum_values ).
      write_closing_tag( \`</tt:serialize>\` ).
    ELSE.
      write_enum_value_mappings( element_description = element_description element_name = element_name enum_values = enum_values ).
    ENDIF.

    write_closing_tag( |</{ tag }>| ).
    write_closing_tag( \`</tt:cond>\` ).
    reset_indent_level_tag( ).
  ENDMETHOD.

  METHOD set_abapdoc_fullname_element.
    DATA splitted_absolute_name TYPE string_table.
    DATA source_type LIKE LINE OF splitted_absolute_name.
    DATA temp1 LIKE LINE OF splitted_absolute_name.
    DATA temp2 LIKE sy-tabix.
    DATA source LIKE LINE OF splitted_absolute_name.
    DATA temp3 LIKE LINE OF splitted_absolute_name.
    DATA temp4 LIKE sy-tabix.
    DATA already_searched LIKE abap_true.
    DATA abap_doc_second TYPE zcl_aff_abap_doc_parser=>abap_doc.
    IF next_tag_without_name_and_ref = abap_true.

      splitted_absolute_name = get_splitted_absolute_name( element_description->absolute_name ).



      temp2 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 1 INTO temp1.
      sy-tabix = temp2.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source_type = temp1.



      temp4 = sy-tabix.
      READ TABLE splitted_absolute_name INDEX 2 INTO temp3.
      sy-tabix = temp4.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      source = temp3.
      fullname_of_type = element_name.

      already_searched = abap_true.
    ELSE.
      get_all_path_information(
        EXPORTING
          name             = element_name
        IMPORTING
          source_type      = source_type
          source           = source
          fullname_of_type = fullname_of_type ).
    ENDIF.
    IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.
      abap_doc = call_reader_and_decode( name_of_source = source element_name = fullname_of_type ).
    ENDIF.
    IF already_searched = abap_false.

      abap_doc_second = get_abap_doc_for_absolute_name( absolute_name = element_description->absolute_name ).
      compare_abap_doc(
        EXPORTING
          abap_doc_additional = abap_doc_second
        CHANGING
          abap_doc_base       = abap_doc ).
    ENDIF.
    check_redundant_annotations( ).
  ENDMETHOD.


  METHOD set_abapdoc_fullname_tab_struc.
    DATA source_type TYPE string.
    DATA source TYPE string.
    DATA abap_doc_second TYPE zcl_aff_abap_doc_parser=>abap_doc.
    IF next_tag_without_name_and_ref = abap_false.


      get_all_path_information(
        EXPORTING
          name             = type_name
        IMPORTING
          source_type      = source_type
          source           = source
          fullname_of_type = fullname_of_type ).
      IF source_type = ''CLASS'' OR source_type = ''INTERFACE''.
        abap_doc = call_reader_and_decode( name_of_source = source element_name = fullname_of_type ).
      ENDIF.

      abap_doc_second = get_abap_doc_for_absolute_name( absolute_name = type_description->absolute_name ).
      compare_abap_doc(
        EXPORTING
          abap_doc_additional = abap_doc_second
        CHANGING
          abap_doc_base       = abap_doc ).
    ELSE.
      abap_doc = get_abap_doc_for_absolute_name( absolute_name = type_description->absolute_name ).
      fullname_of_type = type_name.
    ENDIF.
    check_redundant_annotations( ).
  ENDMETHOD.


  METHOD get_tag_from_type.
    DATA temp8 TYPE symsgv.
    DATA msg TYPE string.
    DATA temp9 TYPE REF TO zcx_aff_tools.
    CASE json_type.
      WHEN zif_aff_writer=>type_info-string OR zif_aff_writer=>type_info-date_time.
        result = \`str\`.
      WHEN zif_aff_writer=>type_info-boolean.
        result = \`bool\` ##NO_TEXT.
      WHEN zif_aff_writer=>type_info-numeric.
        result = \`num\`.
      WHEN OTHERS.

        temp8 = json_type.

        msg = log->get_message_text( msgno = 102 msgv1 = temp8 ).

        CREATE OBJECT temp9 TYPE zcx_aff_tools EXPORTING message = msg.
        RAISE EXCEPTION temp9.
    ENDCASE.
  ENDMETHOD.


  METHOD get_option.
    DATA temp10 TYPE symsgv.
    DATA msg TYPE string.
    DATA temp11 TYPE REF TO zcx_aff_tools.
    IF is_sy_langu( element_description ) = abap_true.
      result = \` option="format(language)"\` ##NO_TEXT.
    ELSE.
      CASE json_type.
        WHEN zif_aff_writer=>type_info-string.
          result = space.
        WHEN zif_aff_writer=>type_info-date_time.
          result = \` option="format(dateTimeOffset)"\`.
        WHEN zif_aff_writer=>type_info-boolean.
          result = \` option="format(boolean)"\` ##NO_TEXT.
        WHEN zif_aff_writer=>type_info-numeric.
          result = \` option="format(alpha)"\` ##NO_TEXT.
        WHEN OTHERS.

          temp10 = json_type.

          msg = log->get_message_text( msgno = 102 msgv1 = temp10 ).

          CREATE OBJECT temp11 TYPE zcx_aff_tools EXPORTING message = msg.
          RAISE EXCEPTION temp11.
      ENDCASE.
    ENDIF.
  ENDMETHOD.


  METHOD write_enum_value_mappings.
    DATA index TYPE i.
    FIELD-SYMBOLS <enum_value> LIKE LINE OF enum_values.
    DATA abap_value TYPE string.
    DATA xml_value LIKE <enum_value>-json_value.
    IF lines( enum_values ) = 0.
      RETURN.
    ENDIF.
    write_tag( |<tt:value{ get_ref( element_name ) } map="| ) ##NO_TEXT.


    index = 1.

    LOOP AT enum_values ASSIGNING <enum_value>.

      abap_value = get_abap_value( abap_value = <enum_value>-abap_value element_description = element_description ).
      IF <enum_value>-overwritten_json_value IS INITIAL.

        xml_value = <enum_value>-json_value.
      ELSE.
        xml_value = <enum_value>-overwritten_json_value.
      ENDIF.
      IF index < lines( enum_values ).
        write_tag( |  val({ abap_value })=xml(''{ xml_value }''),| ) ##NO_TEXT.
      ELSE.
        write_tag( |  val({ abap_value })=xml(''{ xml_value }'')"| ) ##NO_TEXT.
        write_tag( \`/>\` ).
      ENDIF.
      index = index + 1.
    ENDLOOP.
  ENDMETHOD.


  METHOD get_abap_value.
    DATA abap_value_copy TYPE string.
    CASE element_description->type_kind.
      WHEN cl_abap_typedescr=>typekind_int OR cl_abap_typedescr=>typekind_int1 OR
           cl_abap_typedescr=>typekind_int2 OR cl_abap_typedescr=>typekind_int8.
        abap_value_copy = abap_value.
        CONDENSE abap_value_copy.
        result = |I({ abap_value_copy })|.
      WHEN cl_abap_typedescr=>typekind_num.
        result = |N(''{ abap_value }'')|.
      WHEN OTHERS.
        result = |''{ abap_value }''|.
    ENDCASE.
  ENDMETHOD.


  METHOD get_name.
    IF next_tag_without_name_and_ref = abap_false.
      result = | name="{ format_name( name ) }"| ##NO_TEXT.
    ENDIF.
  ENDMETHOD.


  METHOD get_ref.
    IF next_tag_without_name_and_ref = abap_false.
      result = | ref="{ name }"| ##NO_TEXT.
    ENDIF.
  ENDMETHOD.

  METHOD get_to_ref.
    IF next_tag_without_name_and_ref = abap_false.
      result = | to-ref="{ name }"| ##NO_TEXT.
    ENDIF.
  ENDMETHOD.


  METHOD get_ref_for_structure.
    IF next_tag_without_name_and_ref = abap_false.
      result = | tt:ref="{ name }"| ##NO_TEXT.
    ENDIF.
  ENDMETHOD.


  METHOD get_condition_tab_or_struc.
    IF next_tag_without_name_and_ref = abap_true.
      RETURN.
    ENDIF.
    IF abap_doc-required = abap_false AND abap_doc-showalways = abap_false.
      condition = | s-check="not-initial({ type_name })"| ##NO_TEXT.
    ENDIF.
    condition = |{ condition } frq="?"| ##NO_TEXT.
  ENDMETHOD.

  METHOD get_condition_for_element.
    DATA default_ TYPE string.
    IF next_tag_without_name_and_ref = abap_true.
      RETURN.
    ENDIF.

    IF abap_doc-default_ IS NOT INITIAL AND ( abap_doc-required = abap_false OR abap_doc-enumvalues_link IS NOT INITIAL ).

      default_ = get_default( enum_values = enum_values structure_name = element_name element_description = element_description type = type ).
    ENDIF.

    IF abap_doc-required = abap_false AND abap_doc-showalways = abap_false.
      IF default_ IS NOT INITIAL.
        condition = | s-check="{ element_name }!={ default_ }"| ##NO_TEXT.
      ELSE.
        condition = | s-check="not-initial({ element_name })"| ##NO_TEXT.
      ENDIF.
    ENDIF.

    condition = |{ condition } frq="?"| ##NO_TEXT.
  ENDMETHOD.

  METHOD get_default.
    DATA table TYPE zcl_aff_writer_xslt=>tt_variable_default_pair.
    DATA temp5 LIKE LINE OF stack_default_comp_of_struc.
    DATA temp6 LIKE sy-tabix.
    DATA temp12 TYPE zcl_aff_writer_xslt=>ty_variable_default_pair.
    FIELD-SYMBOLS <temp13> LIKE LINE OF stack_default_comp_of_struc.
    DATA temp14 LIKE sy-tabix.
    default_ = get_default_value_from_default(
      enum_values         = enum_values
      element_description = element_description
      type                = type ).
    IF default_ IS NOT INITIAL.



      temp6 = sy-tabix.
      READ TABLE stack_default_comp_of_struc INDEX 1 INTO temp5.
      sy-tabix = temp6.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      table = temp5-table_of_defaults.

      CLEAR temp12.
      temp12-var_name = structure_name.
      temp12-default_value = default_.
      APPEND temp12 TO table.


      temp14 = sy-tabix.
      READ TABLE stack_default_comp_of_struc INDEX 1 ASSIGNING <temp13>.
      sy-tabix = temp14.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      <temp13>-table_of_defaults = table.
    ENDIF.
  ENDMETHOD.


  METHOD get_enum_values.
    DATA structure_of_values TYPE REF TO cl_abap_structdescr.
    DATA name_of_source TYPE string.
    DATA name_of_constant TYPE string.
    FIELD-SYMBOLS <attr> TYPE data.
    FIELD-SYMBOLS <fs_data> TYPE any.
    FIELD-SYMBOLS <component> LIKE LINE OF structure_of_values->components.
    DATA fullname_of_component TYPE string.
    DATA abap_doc_of_component TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA temp15 TYPE symsgv.
    DATA temp7 TYPE symsgv.
    DATA msg TYPE string.
    DATA temp16 TYPE REF TO zcx_aff_tools.
    DATA temp17 TYPE zcl_aff_writer_xslt=>ty_enum_value.
    DATA temp8 TYPE string.
    get_structure_of_enum_values(
      EXPORTING
        link_to_values      = abap_doc-enumvalues_link
        fullname_of_type    = fullname_of_type
      IMPORTING
        structure_of_values = structure_of_values
        name_of_source      = name_of_source
        name_of_constant    = name_of_constant ).

    IF structure_of_values IS NOT INITIAL.

      ASSIGN (name_of_source)=>(name_of_constant) TO <attr>.

      LOOP AT structure_of_values->components ASSIGNING <component>.

        fullname_of_component = name_of_constant && ''-'' && <component>-name.

        abap_doc_of_component = call_reader_and_decode( name_of_source = name_of_source element_name = fullname_of_component ).
        IF <component>-type_kind <> enum_type.

          temp15 = name_of_constant.

          temp7 = fullname_of_type.

          msg = log->get_message_text( msgno = 122 msgv1 = temp15 msgv2 = temp7 ).

          CREATE OBJECT temp16 TYPE zcx_aff_tools EXPORTING message = msg.
          RAISE EXCEPTION temp16.
        ENDIF.
        ASSIGN COMPONENT <component>-name OF STRUCTURE <attr> TO <fs_data>.

        CLEAR temp17.
        temp17-abap_value = <fs_data>.

        temp8 = <component>-name.
        temp17-json_value = format_name( temp8 ).
        temp17-overwritten_json_value = abap_doc_of_component-enum_value.
        INSERT temp17 INTO TABLE result.
      ENDLOOP.
      IF abap_doc-required = abap_false AND abap_doc-default_ IS INITIAL.
        log->add_warning( message_text = zif_aff_log=>co_msg127 component_name = fullname_of_type ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD write_tag.
    DATA temp18 LIKE LINE OF content.
    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level - 1 > indent_level.

      temp18 = |{ repeat( val = \` \` occ = indent_level * c_indent_number_characters ) }{ line }|.
      APPEND temp18 TO content.
    ENDIF.
  ENDMETHOD.


  METHOD get_default_value_from_default.
    DATA message TYPE string.
    DATA default_json TYPE string.
    DATA mapping_for_given_default TYPE zcl_aff_writer_xslt=>ty_enum_value.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.

      message = log->get_message_text( msgno = 117 msgv1 = \`UTCLONG\` ).
      log->add_warning( message_text = message component_name = fullname_of_type ).
      RETURN.
    ENDIF.

    default_ = abap_doc-default_.
    REPLACE ALL OCCURRENCES OF \`"\` IN default_ WITH \`\`.
    IF default_ CS ''@link''.

      default_json = get_default_from_link( link = default_ fullname_of_type = fullname_of_type element_type = element_description->type_kind ).
      IF default_json IS INITIAL.
        CLEAR default_.
        RETURN.
      ENDIF.

      READ TABLE enum_values INTO mapping_for_given_default WITH KEY json_value = default_json.
      IF sy-subrc = 0.
        default_ = get_prefixed_default(
          value               = mapping_for_given_default-abap_value
          element_description = element_description ).
      ELSE.
        CLEAR default_.
        RETURN.
      ENDIF.
    ELSE.
      IF NOT is_default_value_valid( element_description = element_description default_value = default_ fullname_of_type = fullname_of_type ) IS NOT INITIAL.
        CLEAR default_.
        RETURN.
      ENDIF.

      IF type <> zif_aff_writer=>type_info-boolean.
        default_ = get_prefixed_default(
          value               = default_
          element_description = element_description ).
      ELSEIF default_ = \`abap_true\` OR default_ = \`X\`.
        default_ = \`C(''X'')\`.
      ELSE.
        default_ = \`C('''')\`.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD get_prefixed_default.
    DATA value_copy TYPE string.
    DATA message TYPE string.
    DATA temp19 TYPE REF TO zcx_aff_tools.
    DATA temp20 TYPE REF TO zcx_aff_tools.
    CASE element_description->type_kind.
      WHEN cl_abap_typedescr=>typekind_int OR cl_abap_typedescr=>typekind_int1 OR cl_abap_typedescr=>typekind_int2.
        value_copy = value.
        CONDENSE value_copy.
        result = |I({ value_copy })|.
      WHEN cl_abap_typedescr=>typekind_int8.
        result = |INT8({ value })|.
      WHEN cl_abap_typedescr=>typekind_float.
        result = |F(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_xstring OR cl_abap_typedescr=>typekind_hex.
        result = |X(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_decfloat16.
        result = |DECFLOAT16(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_decfloat34.
        result = |DECFLOAT34(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_packed.
        result = |P({ value })|.
      WHEN cl_abap_typedescr=>typekind_num.
        result = |N(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_char OR cl_abap_typedescr=>typekind_string.
        result = |C(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_date.
        result = |D(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_time.
        result = |T(''{ value }'')|.
      WHEN cl_abap_typedescr=>typekind_utclong.

        message = log->get_message_text( msgno = 117 msgv1 = \`UTCLONG\` ).

        CREATE OBJECT temp19 TYPE zcx_aff_tools EXPORTING message = message.
        RAISE EXCEPTION temp19.
      WHEN OTHERS.

        CREATE OBJECT temp20 TYPE zcx_aff_tools.
        RAISE EXCEPTION temp20.
    ENDCASE.
  ENDMETHOD.


  METHOD write_defaults.
    DATA actual_entry TYPE zcl_aff_writer_xslt=>ty_components_with_default.
    DATA temp9 LIKE LINE OF me->stack_default_comp_of_struc.
    DATA temp10 LIKE sy-tabix.
    DATA list_of_applies LIKE content.
    FIELD-SYMBOLS <default> LIKE LINE OF actual_entry-table_of_defaults.
    DATA temp21 LIKE LINE OF list_of_applies.
    temp10 = sy-tabix.
    READ TABLE me->stack_default_comp_of_struc INDEX 1 INTO temp9.
    sy-tabix = temp10.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    actual_entry = temp9.


    LOOP AT actual_entry-table_of_defaults ASSIGNING <default>.

      temp21 = |{ repeat( val = \` \` occ = ( indent_level * c_indent_number_characters ) - c_indent_number_characters ) }<tt:assign to-ref="{ <default>-var_name }" val="{ <default>-default_value }"/>|.
      APPEND temp21 TO list_of_applies.
    ENDLOOP.
    INSERT LINES OF list_of_applies INTO content INDEX actual_entry-line_to_insert + 1.
    DELETE me->stack_default_comp_of_struc INDEX 1.
  ENDMETHOD.


  METHOD write_callback_template.
    DATA ref_name LIKE element_name.
    DATA calculated_tag LIKE tag.
    DATA temp22 TYPE REF TO cl_abap_elemdescr.
    DATA component_start TYPE string.
    DATA component_end TYPE string.
    IF indent_level > 0.
      write_open_tag( line = ''<tt:cond>'' ).
      IF last_operation( ) <> zif_aff_writer=>operation-open_table.

        ref_name = element_name.
      ELSE.
        ref_name = ''$ref''.
      ENDIF.
    ELSE.
      ref_name = |.{ st_root_name  }|.
    ENDIF.
    CASE description->kind.
      WHEN cl_abap_typedescr=>kind_elem.
        IF tag IS NOT INITIAL.

          calculated_tag = tag.
        ELSE.

          temp22 ?= description.
          calculated_tag = get_tag_from_type( get_json_type_from_description( temp22 ) ).
        ENDIF.

        component_start = |<{ calculated_tag }>|.

        component_end = |</{ calculated_tag }>|.
      WHEN cl_abap_typedescr=>kind_struct.
        component_start = \`<object>\`.
        component_end = \`</object>\`.
      WHEN cl_abap_typedescr=>kind_table.
        component_start = \`<array>\`.
        component_end = \`</array>\`.
    ENDCASE.

    write_open_tag( line = |{ component_start } | ).
    write_callback( name_of_callback_class = abap_doc-callback_class parameter_name = element_name ref_name = ref_name ).
    write_closing_tag( line = |  { component_end } | ).
    IF indent_level > 0.
      write_closing_tag( ''</tt:cond>'' ).
    ENDIF.
    ignore_til_indent_level = indent_level + 1.
  ENDMETHOD.


  METHOD write_callback.
    DATA parameter_name_to_lower TYPE string.
    write_open_tag( line = |<tt:call-method class="{ name_of_callback_class }" d-name="deserialize" reader="reader" s-name="serialize" writer="writer">| ).

    parameter_name_to_lower = to_lower( parameter_name ).
    write_tag( line = |<tt:with-parameter name="{ parameter_name_to_lower }" ref="{ ref_name }"/>| ).
    write_closing_tag( ''</tt:call-method>'' ).
  ENDMETHOD.


  METHOD reset_indent_level_tag.
    IF ignore_til_indent_level - 1 = indent_level.
      CLEAR ignore_til_indent_level.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_writer~validate.
    DATA tsource TYPE o2pageline_table.
    DATA errors TYPE cl_o2_api_xsltdesc=>ty_error_tab.
    DATA exception TYPE REF TO cx_o2_xslt_error.
    FIELD-SYMBOLS <error> LIKE LINE OF errors.
    DATA msg TYPE string.
    DATA temp23 TYPE string.
    APPEND LINES OF source TO tsource.
    TRY.

        cl_o2_api_xsltdesc=>check_transformation_source(
          EXPORTING
            i_name       = ''GENERATED_AFF''
            i_source     = tsource
          IMPORTING
            e_error_list = errors ).

      CATCH cx_o2_xslt_error INTO exception.
    ENDTRY.
    IF lines( errors ) > 0 OR exception IS BOUND.

      LOOP AT errors ASSIGNING <error>.
        cl_message_helper=>set_msg_vars_for_clike( <error>-text ).

        msg = log->get_message_text( msgno = 0 msgv1 = sy-msgv1 msgv2 = sy-msgv2 msgv3 = sy-msgv3 msgv4 = sy-msgv4 ).

        CLEAR temp23.
        log->add_error( message_text = msg component_name = temp23 ).
      ENDLOOP.
      RETURN.
    ENDIF.
    result = abap_true.
  ENDMETHOD.

  METHOD write_iso_language_callback.
    write_callback( name_of_callback_class = ''cl_aff_xslt_callback_language'' parameter_name = ''language'' ref_name = element_name ).
  ENDMETHOD.

  METHOD enable_extension.
    DATA components TYPE abap_component_tab.
    DATA str_comp TYPE string.
    DATA component LIKE LINE OF components.
    DATA formatted_name TYPE string.
    DATA tag TYPE string.
    DATA temp24 LIKE LINE OF content.

    write_open_tag( \`<tt:d-cond frq="*">\` ).
    write_open_tag( \` <_ tt:lax="on">\` ).
    write_open_tag( \`<tt:call-method class="CL_AFF_XSLT_CALLBACK_TYPE" name="RAISE_DIFFERENT_TYPE_EXCEPTION" reader="IO_READER">\` ).


    components = structure_description->get_components( ).


    LOOP AT components INTO component.

      formatted_name = format_name( name = component-name ).
      IF component-as_include IS NOT INITIAL.
        CONTINUE.
      ENDIF.
      IF sy-tabix = 1.
        str_comp = |{ formatted_name };|.
        CONTINUE.
      ENDIF.
      str_comp = |{ str_comp }{ formatted_name };|.
    ENDLOOP.

    tag = |{ repeat( val = \` \`  occ = indent_level * c_indent_number_characters ) }<tt:with-parameter name="MEMBERS" val="''{ str_comp }''"/>|.
    IF strlen( tag ) > 255.
      write_tag( \`<tt:with-parameter name="MEMBERS"\` ).
      IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level - 1 > indent_level.

        temp24 = |val="''{ str_comp }''"/>|.
        APPEND temp24 TO content.
      ENDIF.
    ELSE.
      write_tag( |<tt:with-parameter name="MEMBERS" val="''{ str_comp }''"/>| ).
    ENDIF.
    write_closing_tag( \`</tt:call-method>\` ).
    write_tag( \`<tt:skip/>\` ).
    write_closing_tag( \`</_>\` ).
    write_closing_tag( \`</tt:d-cond>\` ).
    write_open_tag( \`<tt:d-cond frq="?">\` ).
    write_tag( \`<__/>\` ).
    write_closing_tag( \`</tt:d-cond>\` ).

  ENDMETHOD.


  METHOD write_enum_map_ext_compatible.
    FIELD-SYMBOLS <enum_value> LIKE LINE OF enum_values.
    DATA abap_value TYPE string.
    DATA xml_value LIKE <enum_value>-json_value.
    write_tag( line = |<tt:read type="C" var="VARIABLE"/>| ).

    LOOP AT enum_values ASSIGNING <enum_value>.

      abap_value = get_abap_value( abap_value = <enum_value>-abap_value element_description = element_description ).
      IF <enum_value>-overwritten_json_value IS INITIAL.

        xml_value = <enum_value>-json_value.
      ELSE.
        xml_value = <enum_value>-overwritten_json_value.
      ENDIF.
      write_open_tag( |<tt:cond-var check="VARIABLE=''{ xml_value }''">| ).
      write_tag( |<tt:assign { get_to_ref( element_name ) } val="{ abap_value }"/>| ).
      write_closing_tag( \`</tt:cond-var>\` ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZCX_AFF_TOOLS                           ', 'CLASS zcx_aff_tools DEFINITION
  PUBLIC
  INHERITING FROM cx_static_check
  CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES if_t100_dyn_msg .
    INTERFACES if_t100_message .

    METHODS constructor
      IMPORTING
        message   TYPE string OPTIONAL
        !textid   LIKE if_t100_message=>t100key OPTIONAL
        !previous LIKE previous OPTIONAL.

  PROTECTED SECTION.
  PRIVATE SECTION.

ENDCLASS.

CLASS zcx_aff_tools IMPLEMENTATION.

  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    " trigger task
    CALL METHOD super->constructor
      EXPORTING
        previous = previous.
    CLEAR me->textid.
    IF message IS NOT INITIAL.
      cl_message_helper=>set_msg_vars_for_clike( message ).
      CLEAR if_t100_message~t100key.
      if_t100_message~t100key-attr1 = ''IF_T100_DYN_MSG~MSGV1''.
      if_t100_message~t100key-attr2 = ''IF_T100_DYN_MSG~MSGV2''.
      if_t100_message~t100key-attr3 = ''IF_T100_DYN_MSG~MSGV3''.
      if_t100_message~t100key-attr4 = ''IF_T100_DYN_MSG~MSGV4''.
      if_t100_dyn_msg~msgty = ''E''.
      if_t100_dyn_msg~msgv1 = sy-msgv1.
      if_t100_dyn_msg~msgv2 = sy-msgv2.
      if_t100_dyn_msg~msgv3 = sy-msgv3.
      if_t100_dyn_msg~msgv4 = sy-msgv4.
    ELSE.
      if_t100_message~t100key = textid.
    ENDIF.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_GENERATOR                       ', 'INTERFACE zif_aff_generator
  PUBLIC.
  METHODS: generate_type
    IMPORTING
      data          TYPE data
    RETURNING
      VALUE(result) TYPE string_table
    RAISING
      zcx_aff_tools,

    get_log
      RETURNING
        VALUE(log) TYPE REF TO zif_aff_log.

ENDINTERFACE.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_INTF_V1                         ', 'INTERFACE zif_aff_intf_v1 PUBLIC.

  "! <p class="shorttext">Interface Category</p>
  "! Interface category
  "! $values {@link zif_aff_intf_v1.data:co_category}
  TYPES ty_category TYPE n LENGTH 2.

  CONSTANTS:
    "! <p class="shorttext">Interface Category</p>
    "! Interface category
    BEGIN OF co_category,
      "! <p class="shorttext">General</p>
      "! General interface
      general                      TYPE ty_category VALUE ''00'',
      "! <p class="shorttext">Classic BAdI</p>
      "! Interface definition of a classic BAdI
      classic_badi                 TYPE ty_category VALUE ''01'',
      "! <p class="shorttext">Business (Static Components)</p>
      "! Business interface for static components
      business_static_components   TYPE ty_category VALUE ''51'',
      "! <p class="shorttext">Business (Instance-dep. components)</p>
      "! Business interface for instance-dependent components
      business_instance_components TYPE ty_category VALUE ''52'',
      "! <p class="shorttext">DB Procedure Proxy</p>
      "! Generated interface of a database procedure proxy
      db_procedure_proxy           TYPE ty_category VALUE ''65'',
      "! <p class="shorttext">Web Dynpro Runtime</p>
      "! Web Dynpro runtime interface
      web_dynpro_runtime           TYPE ty_category VALUE ''80'',
      "! <p class="shorttext">Enterprise Services</p>
      "! Generated interface of enterprise services
      enterprise_service           TYPE ty_category VALUE ''90'',
    END OF co_category.

  TYPES:
    "! <p class="shorttext">Interface Properties</p>
    "! Interface properties
    BEGIN OF ty_main,
      "! $required
      format_version TYPE zif_aff_types_v1=>ty_format_version,
      "! <p class="shorttext">Header</p>
      "! Header
      "! $required
      header         TYPE zif_aff_types_v1=>ty_header_60_src,
      "! <p class="shorttext">Interface Category</p>
      "! Interface category
      category       TYPE ty_category,
      "! <p class="shorttext">Proxy Interface</p>
      "! Interface is a proxy interface
      proxy          TYPE abap_bool,
      "! <p class="shorttext">Descriptions</p>
      "! Descriptions maintained in SE80
      descriptions   TYPE zif_aff_oo_types_v1=>ty_descriptions,
    END OF ty_main.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_LOG                             ', '"! Log for the Schema/Simple Transformation writers.
INTERFACE zif_aff_log
  PUBLIC.

  CONSTANTS:
    BEGIN OF c_message_type,
      error   TYPE symsgty VALUE ''E'',
      warning TYPE symsgty VALUE ''W'',
      info    TYPE symsgty VALUE ''I'',
    END OF c_message_type.
  CONSTANTS:
    co_msg106 TYPE string VALUE \`Callback class is invalid\` ##NO_TEXT,
    co_msg113 TYPE string VALUE \`Title is at wrong position\` ##NO_TEXT,
    co_msg114 TYPE string VALUE \`Default argument is invalid\` ##NO_TEXT,
    co_msg115 TYPE string VALUE \`Description is at wrong position\` ##NO_TEXT,
    co_msg116 TYPE string VALUE \`Text between annotations will not be parsed\` ##NO_TEXT,
    co_msg123 TYPE string VALUE \`No structure was provided for type generator\` ##NO_TEXT,
    co_msg124 TYPE string VALUE \`Given structure must have mandatory fields format_version and header\` ##NO_TEXT,
    co_msg126 TYPE string VALUE \`For required fields, a default handling is not possible\` ##NO_TEXT,
    co_msg127 TYPE string VALUE \`Elements of type enum should be required or have a default\` ##NO_TEXT,
    co_msg128 TYPE string VALUE \`Components on top level (except format_version) should be structures or tables\` ##NO_TEXT,
    co_msg129 TYPE string VALUE \`Fields of a different type than integer should not use the annototation $multipleOf\` ##NO_TEXT,
    co_msg132 TYPE string VALUE \`Only elements of character-like type can have annotation $contentEncoding or $contentMediaType\` ##NO_TEXT,
    co_msg133 TYPE string VALUE \`The content encoding is unknown\` ##NO_TEXT.

  TYPES:
    "! A single message entry in the log
    BEGIN OF ty_log_out,
      "! The name of the component for which the message was logged
      component_name TYPE string,
      "! The type of the message
      type           TYPE symsgty,
      "! The text of the message
      message_text   TYPE string,
      "! The message
      message        TYPE symsg,
    END OF ty_log_out,
    tt_log_out TYPE STANDARD TABLE OF ty_log_out WITH NON-UNIQUE DEFAULT KEY.

  METHODS:
    "! Adds an info message (type I) to the log.
    "!
    "! @parameter  message_text  | the text of the message
    "! @parameter component_name | the name of the element for which the log entry is created
    add_info
      IMPORTING message_text   TYPE string
                component_name TYPE string,

    "! Adds a warning message (type W) to the log.
    "!
    "! @parameter message_text   | the text of the message
    "! @parameter component_name | the name of the element for which the log entry is created
    add_warning
      IMPORTING message_text   TYPE string
                component_name TYPE string,

    "! Adds an error message (type E) to the log.
    "!
    "! @parameter message_text   | the text of the message
    "! @parameter component_name | the name of the element for which the log entry is created
    add_error
      IMPORTING message_text   TYPE string
                component_name TYPE string,

    "! Returns message for a given msg number
    "! This emulates the behaviour of the object type message classes
    "!
    "! @parameter msgno | the message number
    get_message_text
      IMPORTING
                msgno               TYPE symsgno
                msgv1               TYPE symsgv OPTIONAL
                msgv2               TYPE symsgv OPTIONAL
                msgv3               TYPE symsgv OPTIONAL
                msgv4               TYPE symsgv OPTIONAL
      RETURNING VALUE(message_text) TYPE string,



    "! Adds an exception to the log. Actually not the exception is added
    "! but the message of the exception. The message type can be submitted.
    "!
    "! @parameter exception | the exception containing the message
    "! @parameter message_type | the type of the message
    "! @parameter component_name | the name of the element for which the log entry is created
    add_exception
      IMPORTING exception      TYPE REF TO cx_root
                message_type   TYPE symsgty DEFAULT c_message_type-error
                component_name TYPE string,

    "! Returns the logged messages. The log is NOT cleared afterwards.
    "! The caller has to {@link METH.clear} it in case it should be reused.
    "!
    "! @parameter messages | the logged messages
    get_messages
      RETURNING VALUE(messages) TYPE tt_log_out,

    "! Join the messages of another log with this log. Afterwards this log contains
    "! the messages of the other log.
    "!
    "! @parameter log_to_join | the other log
    join
      IMPORTING log_to_join TYPE REF TO zif_aff_log,

    "! Clears all messages of this log.
    "!
    clear,

    "! Calculates the maximum severity of the logged messages.
    "! This is (in order):
    "! E - Error
    "! W - Warning
    "! I - Information
    "!
    "! @parameter max_severity | the maximum severity of the logged messages
    get_max_severity
      RETURNING VALUE(max_severity) TYPE symsgty,

    "! Returns true if the log contains messages, false otherwise.
    "!
    "! @parameter has_messages | true or false
    has_messages
      RETURNING VALUE(has_messages) TYPE abap_bool.

ENDINTERFACE.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_OO_TYPES_V1                     ', '"! <p class="shorttext synchronized" lang="en">Common types for classes and interfaces</p>
"! Types which can be reused for Class and Interface AFF Types
INTERFACE zif_aff_oo_types_v1
  PUBLIC.

  TYPES:
    "! <p class="shorttext">Name and Description</p>
    "! Name and description
    BEGIN OF ty_component_description,
      "! <p class="shorttext">Name</p>
      "! Name
      "! $required
      name        TYPE zif_aff_types_v1=>ty_object_name_30,
      "! <p class="shorttext">Description</p>
      "! Description
      "! $required
      description TYPE zif_aff_types_v1=>ty_description_60,
    END OF ty_component_description,

    "! <p class="shorttext">Component Descriptions</p>
    "! Class component descriptions
    ty_component_descriptions TYPE SORTED TABLE OF ty_component_description WITH UNIQUE KEY name.


  TYPES:
    "! <p class="shorttext">Method Description</p>
    "! Method description
    BEGIN OF ty_method,
      "! <p class="shorttext">Method Name</p>
      "! Name of the method
      "! $required
      name        TYPE zif_aff_types_v1=>ty_object_name_30,
      "! <p class="shorttext">Method Description</p>
      "! Description of the method
      "! $required
      description TYPE zif_aff_types_v1=>ty_description_60,
      "! <p class="shorttext">Parameter Descriptions</p>
      "! Parameter descriptions
      parameters  TYPE ty_component_descriptions,
      "! <p class="shorttext">Exception Descriptions</p>
      "! Exception descriptions
      exceptions  TYPE ty_component_descriptions,
    END OF ty_method,
    "! <p class="shorttext">Method Descriptions</p>
    "! Method descriptions
    ty_methods TYPE SORTED TABLE OF ty_method WITH UNIQUE KEY name.

  TYPES:
    "! <p class="shorttext">Event Description</p>
    "! Event description
    BEGIN OF ty_event,
      "! <p class="shorttext">Event Name</p>
      "! Name of the event
      "! $required
      name        TYPE zif_aff_types_v1=>ty_object_name_30,
      "! <p class="shorttext">Event Description</p>
      "! Description of the event
      "! $required
      description TYPE zif_aff_types_v1=>ty_description_60,
      "! <p class="shorttext">Parameter Descriptions</p>
      "! Parameter descriptions
      parameters  TYPE ty_component_descriptions,
    END OF ty_event,
    "! <p class="shorttext">Event Descriptions</p>
    "! Event descriptions
    ty_events TYPE SORTED TABLE OF ty_event WITH UNIQUE KEY name.

  TYPES:
    "! <p class="shorttext">Descriptions</p>
    "! Descriptions maintained in SE80
    BEGIN OF ty_descriptions,
      "! <p class="shorttext">Type Descriptions</p>
      "! Type descriptions
      types      TYPE ty_component_descriptions,
      "! <p class="shorttext">Attribute Descriptions</p>
      "! Attribute descriptions
      attributes TYPE ty_component_descriptions,
      "! <p class="shorttext">Event Descriptions</p>
      "! Event descriptions
      events     TYPE ty_events,
      "! <p class="shorttext">Method Descriptions</p>
      "! Method descriptions
      methods    TYPE ty_methods,
    END OF ty_descriptions.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_TYPES_V1                        ', '"! <p class="shorttext synchronized" lang="en">General types reusable in AFF</p>
"! Types which can be reused in all AFF object types
INTERFACE zif_aff_types_v1 PUBLIC.

  "! <p class="shorttext">ABAP File Format Version</p>
  "! The ABAP file format version
  TYPES ty_format_version TYPE string.

  "! <p class="shorttext">ABAP Language Version</p>
  "! ABAP language version
  "! $values {@link zif_aff_types_v1.data:co_abap_language_version}
  "! $default {@link zif_aff_types_v1.data:co_abap_language_version.standard}
  TYPES ty_abap_language_version TYPE c LENGTH 1.

  "! <p class="shorttext">ABAP Language Version</p>
  "! ABAP language version
  "! $values {@link zif_aff_types_v1.data:co_abap_language_version_cloud}
  "! $default {@link zif_aff_types_v1.data:co_abap_language_version_cloud.standard}
  TYPES ty_abap_language_version_cloud TYPE c LENGTH 1.

  "! <p class="shorttext">ABAP Language Version</p>
  "! ABAP language version
  "! $values {@link zif_aff_types_v1.data:co_abap_language_version_src}
  "! $default {@link zif_aff_types_v1.data:co_abap_language_version_src.standard}
  TYPES ty_abap_language_version_src TYPE c LENGTH 1.

  CONSTANTS:
    "! <p class="shorttext">ABAP Language Version (Source Code Objects)</p>
    "! ABAP language version for source code objects like CLAS, INTF, FUGR or PROG.
    BEGIN OF co_abap_language_version_src,
      "! <p class="shorttext">Standard</p>
      "! Standard
      standard          TYPE ty_abap_language_version_src VALUE ''X'',
      "! <p class="shorttext">ABAP for Key Users</p>
      "! ABAP for key user extensibility
      key_user          TYPE ty_abap_language_version_src VALUE ''2'',
      "! <p class="shorttext">ABAP Cloud Development</p>
      "! ABAP cloud development
      cloud_development TYPE ty_abap_language_version_src VALUE ''5'',
    END OF co_abap_language_version_src.

  CONSTANTS:
    "! <p class="shorttext">ABAP Language Version (Non-Source Code Objects)</p>
    "! ABAP language version for non-source code objects
    BEGIN OF co_abap_language_version,
      "! <p class="shorttext">Standard</p>
      "! Standard
      standard          TYPE ty_abap_language_version VALUE space,
      "! <p class="shorttext">ABAP for Key Users</p>
      "! ABAP for key user extensibility
      key_user          TYPE ty_abap_language_version VALUE ''2'',
      "! <p class="shorttext">ABAP Cloud Development</p>
      "! ABAP cloud development
      cloud_development TYPE ty_abap_language_version VALUE ''5'',
    END OF co_abap_language_version.

  CONSTANTS:
    "! <p class="shorttext">ABAP Language Version</p>
    "! ABAP language version for objects which only exist for standard and cloud development (no key user extensibility)
    BEGIN OF co_abap_language_version_cloud,
      "! <p class="shorttext">Standard</p>
      "! Standard
      standard          TYPE ty_abap_language_version_cloud VALUE space,
      "! <p class="shorttext">ABAP Cloud Development</p>
      "! ABAP cloud development
      cloud_development TYPE ty_abap_language_version_cloud VALUE ''5'',
    END OF co_abap_language_version_cloud.

  "! <p class="shorttext">Description</p>
  "! Description of the ABAP object
  TYPES ty_description_60 TYPE c LENGTH 60.
  "! <p class="shorttext">Description</p>
  "! Description of the ABAP object
  TYPES ty_description_100 TYPE c LENGTH 100.

  "! <p class="shorttext">Object Name</p>
  "! Object name with max. length 30
  TYPES ty_object_name_30 TYPE c LENGTH 30.

  "! <p class="shorttext">Original Language</p>
  "! Original language of the ABAP object
  TYPES ty_original_language TYPE sy-langu.

  TYPES:
    "! <p class="shorttext">Header for Source Code Objects</p>
    "! The header for an ABAP main object (with source code) with a description of 60 characters
    BEGIN OF ty_header_60_src,
      "! $required
      description           TYPE ty_description_60,
      "! $required
      original_language     TYPE ty_original_language,
      abap_language_version TYPE ty_abap_language_version_src,
    END OF ty_header_60_src.

  TYPES:
    "! <p class="shorttext">Header for Non-Source Code Objects (no key user)</p>
    "! The header for an ABAP main object (without source code) with a description of 60 characters (no key user)
    BEGIN OF ty_header_60_cloud,
      "! $required
      description           TYPE ty_description_60,
      "! $required
      original_language     TYPE ty_original_language,
      abap_language_version TYPE ty_abap_language_version_cloud,
    END OF ty_header_60_cloud.

  TYPES:
    "! <p class="shorttext">Header for Non-Source Code Objects</p>
    "! The header for an ABAP main object (without source code) with a description of 60 characters
    BEGIN OF ty_header_60,
      "! $required
      description           TYPE ty_description_60,
      "! $required
      original_language     TYPE ty_original_language,
      abap_language_version TYPE ty_abap_language_version,
    END OF ty_header_60.

  TYPES:
    "! <p class="shorttext">Header</p>
    "! The header for an ABAP main object (without source code; without ABAP language version)
    "! with a description of 60 characters
    BEGIN OF ty_header_60_no_abap_lv,
      "! $required
      description           TYPE ty_description_60,
      "! $required
      original_language     TYPE ty_original_language,
    END OF ty_header_60_no_abap_lv.

  TYPES:
    "! <p class="shorttext">Header for Non-Source Code Objects</p>
    "! The header for an ABAP main object (without source code) with a description of 100 characters
    BEGIN OF ty_header_100,
      "! $required
      description           TYPE ty_description_100,
      "! $required
      original_language     TYPE ty_original_language,
      abap_language_version TYPE ty_abap_language_version,
    END OF ty_header_100.

  TYPES:
    "! <p class="shorttext">Header for Subobjects</p>
    "! The header for an ABAP  subobject with a description of 60 characters
    BEGIN OF ty_header_only_description,
      "! $required
      description TYPE ty_description_60,
    END OF ty_header_only_description.

  "! <p class="shorttext">Option</p>
  "! Option
  "! $values {@link zif_aff_types_v1.data:co_option}
  TYPES ty_option TYPE c LENGTH 2.

  CONSTANTS:
    "! <p class="shorttext">Option</p>
    "! Option
    BEGIN OF co_option,
      "! <p class="shorttext">Equals</p>
      "! Equals
      equals               TYPE ty_option VALUE ''EQ'',
      "! <p class="shorttext">Between</p>
      "! Between
      between              TYPE ty_option VALUE ''BT'',
      "! <p class="shorttext">Greater Than</p>
      "! Greater than
      greater_than         TYPE ty_option VALUE ''GT'',
      "! <p class="shorttext">Contains Pattern</p>
      "! Contains pattern
      contains_pattern     TYPE ty_option VALUE ''CP'',
      "! <p class="shorttext">Not Equal</p>
      "! Not equal
      not_equal            TYPE ty_option VALUE ''NE'',
      "! <p class="shorttext">Not Between</p>
      "! Not between
      not_between          TYPE ty_option VALUE ''NB'',
      "! <p class="shorttext">Not Contains Pattern</p>
      "! Not contains pattern
      not_contains_pattern TYPE ty_option VALUE ''NP'',
      "! <p class="shorttext">Greater Equal</p>
      "! Greater equal
      greater_equal        TYPE ty_option VALUE ''GE'',
      "! <p class="shorttext">Less Than</p>
      "! Less than
      less_than            TYPE ty_option VALUE ''LT'',
      "! <p class="shorttext">Less Equal</p>
      "! Less equal
      less_equal           TYPE ty_option VALUE ''LE'',
    END OF co_option.

  "! <p class="shorttext">Sign</p>
  "! Sign
  "! $values {@link zif_aff_types_v1.data:co_sign}
  TYPES ty_sign TYPE c LENGTH 1.

  CONSTANTS:
    "! <p class="shorttext">Sign</p>
    "! Sign
    BEGIN OF co_sign,
      "! <p class="shorttext">Include</p>
      "! Include
      include TYPE ty_sign VALUE ''I'',
      "! <p class="shorttext">Exclude</p>
      "! Exclude
      exclude TYPE ty_sign VALUE ''E'',
    END OF co_sign.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('ZIF_AFF_WRITER                          ', 'INTERFACE zif_aff_writer
  PUBLIC.

  CONSTANTS: BEGIN OF  type_info,
               string    TYPE string VALUE ''string'',
               numeric   TYPE string VALUE ''numeric'',
               boolean   TYPE string VALUE ''boolean'',
               date_time TYPE string VALUE ''date_time'',
             END OF type_info.

  CONSTANTS: BEGIN OF operation,
               initial         TYPE string VALUE ''initial'',
               write_element   TYPE string VALUE ''write_element'',
               open_structure  TYPE string VALUE ''open_structure'',
               close_structure TYPE string VALUE ''close_structure'',
               open_table      TYPE string VALUE ''open_table'',
               close_table     TYPE string VALUE ''close_table'',
             END OF operation.


  METHODS:

    write_element
      IMPORTING
        element_name        TYPE string
        element_description TYPE REF TO cl_abap_elemdescr
      RAISING
        zcx_aff_tools,

    "! open node. for example table or object
    "! @parameter node_description | description for node
    open_node
      IMPORTING
        node_description TYPE REF TO cl_abap_typedescr
        node_name        TYPE string
      RAISING
        zcx_aff_tools,

    "! close node. for example table or object
    "! @parameter node_description | description for node
    close_node
      IMPORTING
        node_description TYPE REF TO cl_abap_typedescr
        node_name        TYPE string
      RAISING
        zcx_aff_tools,

    get_output
      RETURNING VALUE(result) TYPE string_table,

    get_log
      RETURNING VALUE(log) TYPE REF TO zif_aff_log,

    "! Validate the given source and writes messages into the log
    "!
    "! @parameter source | Source to validate
    "! @parameter log | log to write messages
    "! @parameter result | true, if the source is valid, false if not
    validate
      IMPORTING source        TYPE string_table
                log           TYPE REF TO zif_aff_log
      RETURNING VALUE(result) TYPE abap_bool,

    open_include
      IMPORTING
        include_description TYPE REF TO cl_abap_structdescr,

    close_include.

ENDINTERFACE.
');`);
  insert.push(`INSERT INTO "t100" ("sprsl", "arbgb", "msgnr", "text") VALUES ('E', '00                  ', '001', '&1&2&3&4                                                                 ');`);
  insert.push(`INSERT INTO "t100" ("sprsl", "arbgb", "msgnr", "text") VALUES ('E', '00                  ', '002', 'needed by abapGit unit test                                              ');`);
  insert.push(`INSERT INTO "t100" ("sprsl", "arbgb", "msgnr", "text") VALUES ('E', '00                  ', '003', 'needed by abapGit unit test                                              ');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CHAR_UTILITIES                  ', 'CLASS cl_abap_char_utilities DEFINITION PUBLIC.
  PUBLIC SECTION.
* https://en.wikipedia.org/wiki/Byte_order_mark, 0xEF,0xBB,0xBF
    CONSTANTS byte_order_mark_utf8   TYPE x LENGTH 3 VALUE ''EFBBBF''.
    CONSTANTS byte_order_mark_big    TYPE x LENGTH 2 VALUE ''FEFF''.
    CONSTANTS byte_order_mark_little TYPE x LENGTH 2 VALUE ''FFFE''.
    CONSTANTS charsize               TYPE i VALUE 2.
* open-abap is little endian
    CONSTANTS endian                 TYPE abap_endian VALUE ''L''.

    CONSTANTS backspace      TYPE abap_char1 VALUE %_backspace.
    CONSTANTS cr_lf          TYPE abap_cr_lf VALUE %_cr_lf.
    CONSTANTS form_feed      TYPE abap_char1 VALUE %_formfeed.
    CONSTANTS horizontal_tab TYPE abap_char1 VALUE %_horizontal_tab.
    CONSTANTS newline        TYPE abap_char1 VALUE %_newline.
    CONSTANTS vertical_tab   TYPE abap_char1 VALUE %_vertical_tab.

    CONSTANTS maxchar        TYPE abap_char1 VALUE ''_''.
    CONSTANTS minchar        TYPE abap_char1 VALUE ''_''.

    CLASS-METHODS class_constructor.

    CLASS-METHODS get_simple_spaces_for_cur_cp
      RETURNING
        VALUE(s_str) TYPE string.
ENDCLASS.

CLASS cl_abap_char_utilities IMPLEMENTATION.

  METHOD class_constructor.
    WRITE ''@KERNEL cl_abap_char_utilities.maxchar.set(Buffer.from("FDFF", "hex").toString());''.
    WRITE ''@KERNEL cl_abap_char_utilities.minchar.set(Buffer.from("0000", "hex").toString());''.
  ENDMETHOD.

  METHOD get_simple_spaces_for_cur_cp.
    CONCATENATE \` \` horizontal_tab vertical_tab newline cr_lf(1) form_feed INTO s_str.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_EXCEPTIONAL_VALUES              ', 'CLASS cl_abap_exceptional_values DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS get_max_value
      IMPORTING
        in_ TYPE any
      RETURNING
        VALUE(out) TYPE REF TO data.

    CLASS-METHODS get_min_value
      IMPORTING
        in_ TYPE any
      RETURNING
        VALUE(out) TYPE REF TO data.
ENDCLASS.

CLASS cl_abap_exceptional_values IMPLEMENTATION.

  METHOD get_max_value.
    DATA lv_type     TYPE c LENGTH 1.
    DATA lv_length   TYPE i.
    DATA lv_decimals TYPE i.
    FIELD-SYMBOLS <out> TYPE any.

    DESCRIBE FIELD in_ TYPE lv_type.

    CASE lv_type.
      WHEN cl_abap_typedescr=>typekind_int.
        GET REFERENCE OF cl_abap_math=>max_int4 INTO out.
      WHEN cl_abap_typedescr=>typekind_packed.
        DESCRIBE FIELD in_ LENGTH lv_length IN BYTE MODE DECIMALS lv_decimals.

        CREATE DATA out TYPE p LENGTH lv_length DECIMALS lv_decimals.
        ASSIGN out->* TO <out>.

        IF lv_length = 3 AND lv_decimals = 1.
          <out> = ''9999.9''.
        ELSEIF lv_length = 4 AND lv_decimals = 1.
          <out> = ''999999.9''.
        ELSEIF lv_length = 7 AND lv_decimals = 3.
          <out> = ''9999999999.999''.
        ELSE.
          ASSERT 1 = ''todo''.
        ENDIF.
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(INPUT);''.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

  METHOD get_min_value.
    DATA lv_type TYPE c LENGTH 1.
    FIELD-SYMBOLS <out> TYPE any.

    DESCRIBE FIELD in_ TYPE lv_type.

    CASE lv_type.
      WHEN cl_abap_typedescr=>typekind_int.
        GET REFERENCE OF cl_abap_math=>min_int4 INTO out.
      WHEN cl_abap_typedescr=>typekind_packed.
        out = get_max_value( in_ ).
        ASSIGN out->* TO <out>.
        <out> = <out> * -1.
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(INPUT);''.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_FORMAT                          ', 'CLASS cl_abap_format DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS e_html_attr    TYPE i VALUE 5.
    CONSTANTS e_html_js      TYPE i VALUE 8.
    CONSTANTS e_html_js_html TYPE i VALUE 10.
    CONSTANTS e_html_text    TYPE i VALUE 4.
    CONSTANTS e_json_string  TYPE i VALUE 24.
    CONSTANTS e_url          TYPE i VALUE 12.
    CONSTANTS e_xml_attr     TYPE i VALUE 1.
    CONSTANTS e_xss_ml       TYPE i VALUE 26.
ENDCLASS.

CLASS cl_abap_format IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_GZIP                            ', 'CLASS cl_abap_gzip DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS decompress_binary
      IMPORTING
        gzip_in     TYPE xstring
      EXPORTING
        raw_out     TYPE xstring
        raw_out_len TYPE i.

    CLASS-METHODS compress_binary
      IMPORTING
        compress_level TYPE i OPTIONAL
        raw_in         TYPE xstring
      EXPORTING
        gzip_out       TYPE xstring
        gzip_out_len   TYPE i.

    CLASS-METHODS decompress_text
      IMPORTING
        gzip_in     TYPE xsequence
        gzip_in_len TYPE i DEFAULT -1
        conversion  TYPE abap_encod DEFAULT ''DEFAULT''
      EXPORTING
        text_out     TYPE csequence
        text_out_len TYPE i
      RAISING
        cx_parameter_invalid_range
        cx_sy_buffer_overflow
        cx_sy_conversion_codepage
        cx_sy_compression_error.

    CLASS-METHODS compress_text
      IMPORTING
        text_in        TYPE csequence
        text_in_len    TYPE i DEFAULT -1
        compress_level TYPE i DEFAULT 6
        conversion     TYPE abap_encod DEFAULT ''DEFAULT''
      EXPORTING
        gzip_out TYPE xsequence
        gzip_out_len TYPE i
      RAISING
        cx_parameter_invalid_range
        cx_sy_buffer_overflow
        cx_sy_conversion_codepage
        cx_sy_compression_error.

    CLASS-METHODS decompress_binary_with_header
      IMPORTING
        gzip_in TYPE xstring
      EXPORTING
        raw_out TYPE xstring
      RAISING
        cx_parameter_invalid
        cx_sy_buffer_overflow
        cx_sy_compression_error.
ENDCLASS.

CLASS cl_abap_gzip IMPLEMENTATION.
  METHOD decompress_binary_with_header.
* with gzip RFC 1952 header
    WRITE ''@KERNEL const zlib = await import("zlib");''.
    WRITE ''@KERNEL const buf = Buffer.from(gzip_in.get(), "hex");''.
    WRITE ''@KERNEL const decompress = zlib.gunzipSync(buf).toString("hex").toUpperCase();''.

    WRITE ''@KERNEL raw_out.set(decompress);''.
  ENDMETHOD.

  METHOD decompress_text.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD compress_text.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD decompress_binary.
    WRITE ''@KERNEL const zlib = await import("zlib");''.
    WRITE ''@KERNEL const buf = Buffer.from(gzip_in.get(), "hex");''.
    WRITE ''@KERNEL const decompress = zlib.inflateRawSync(buf, {finishFlush: zlib.constants.Z_SYNC_FLUSH}).toString("hex").toUpperCase();''.

    WRITE ''@KERNEL raw_out.set(decompress);''.
    raw_out_len = xstrlen( raw_out ).
  ENDMETHOD.

  METHOD compress_binary.
* todo, input parameter COMPRESS_LEVEL corresponds to "level" in "options" for Node?
    WRITE ''@KERNEL const zlib = await import("zlib");''.
    WRITE ''@KERNEL const buf = Buffer.from(raw_in.get(), "hex");''.
    WRITE ''@KERNEL const gzi = zlib.deflateRawSync(buf).toString("hex").toUpperCase();''.

    WRITE ''@KERNEL gzip_out.set(gzi);''.
    gzip_out_len = xstrlen( gzip_out ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_WEAK_REFERENCE                  ', 'CLASS cl_abap_weak_reference DEFINITION PUBLIC.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        oref TYPE REF TO object.

    METHODS get
      RETURNING
        VALUE(oref) TYPE REF TO object.
  PRIVATE SECTION.
    DATA mv_ref TYPE x LENGTH 1.
ENDCLASS.

CLASS cl_abap_weak_reference IMPLEMENTATION.
  METHOD constructor.
    ASSERT oref IS NOT INITIAL.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef
    WRITE ''@KERNEL this.mv_ref = new WeakRef(oref);''.
  ENDMETHOD.

  METHOD get.
    WRITE ''@KERNEL oref.set(this.mv_ref.deref());''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_ZIP                             ', 'CLASS cl_abap_zip DEFINITION PUBLIC.

  PUBLIC SECTION.
    METHODS add
      IMPORTING
        name TYPE string
        content TYPE xstring.

    METHODS save
      RETURNING
        VALUE(val) TYPE xstring.

    METHODS load
      IMPORTING
        zip TYPE xstring.

    METHODS get
      IMPORTING
        name    TYPE string OPTIONAL
        index   TYPE i OPTIONAL
      EXPORTING
        content TYPE xstring.

    METHODS delete
      IMPORTING
        name  TYPE string OPTIONAL
        index TYPE i DEFAULT 0
      EXCEPTIONS
        zip_index_error.

    CLASS-METHODS crc32
      IMPORTING content TYPE xstring
      RETURNING VALUE(crc) TYPE i.

    TYPES: BEGIN OF t_file,
             name TYPE string,
             size TYPE i,
           END OF t_file.
    TYPES t_files TYPE STANDARD TABLE OF t_file WITH DEFAULT KEY.
    DATA files TYPE t_files.

  PRIVATE SECTION.
    TYPES: BEGIN OF ty_contents,
             name          TYPE string,
* todo, optimize memory usage, dont store both compressed and original,
             content       TYPE xstring,
             compressed    TYPE xstring,
           END OF ty_contents.
    DATA mt_contents TYPE STANDARD TABLE OF ty_contents WITH DEFAULT KEY.

ENDCLASS.

CLASS cl_abap_zip IMPLEMENTATION.

  METHOD crc32.
    DATA lo_stream TYPE REF TO lcl_stream.
    CREATE OBJECT lo_stream.
    crc = lo_stream->append_crc(
      iv_little_endian = abap_false
      iv_xstring       = content ).
  ENDMETHOD.

  METHOD delete.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get.
    DATA ls_length   TYPE i.
    DATA ls_contents LIKE LINE OF mt_contents.

    ASSERT name IS NOT INITIAL.
    ASSERT index IS INITIAL.

    READ TABLE mt_contents WITH KEY name = name INTO ls_contents.
    cl_abap_gzip=>decompress_binary(
      EXPORTING
        gzip_in     = ls_contents-compressed
      IMPORTING
        raw_out     = content
        raw_out_len = ls_length ).
  ENDMETHOD.

  METHOD add.
    DATA ls_contents LIKE LINE OF mt_contents.

    ls_contents-name = name.
    ls_contents-content = content.
    cl_abap_gzip=>compress_binary(
      EXPORTING
        raw_in   = content
      IMPORTING
        gzip_out = ls_contents-compressed ).
    INSERT ls_contents INTO TABLE mt_contents.
  ENDMETHOD.

  METHOD load.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD save.
* https://en.wikipedia.org/wiki/ZIP_(file_format)
* https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT

    DATA lo_total    TYPE REF TO lcl_stream.
    DATA lo_file     TYPE REF TO lcl_stream.
    DATA lo_central  TYPE REF TO lcl_stream.
    DATA ls_contents LIKE LINE OF mt_contents.
    DATA lv_buffer   TYPE xstring.
    DATA lv_tmp      TYPE xstring.
    DATA lv_start    TYPE i.
    DATA lo_conv     TYPE REF TO cl_abap_conv_out_ce.

    CREATE OBJECT lo_central.
    CREATE OBJECT lo_total.
    lo_conv = cl_abap_conv_out_ce=>create( ).

    LOOP AT mt_contents INTO ls_contents.
      lo_conv->convert( EXPORTING data = ls_contents-name
                        IMPORTING buffer = lv_buffer ).

****************************************
* LOCAL FILE RECORD
      CREATE OBJECT lo_file.
* 0, 4, Local file header signature
      lo_file->append( ''504B0304'' ).
* 4, 2, Version needed to extract (minimum)
      lo_file->append( ''1400'' ).
* 6, 2, General purpose bit flag
      lo_file->append( ''0000'' ).
* 8, 2, Compression method; e.g. none = 0, DEFLATE = 8 (or "0x08 0x00")
      lo_file->append( ''0800'' ).
* 10, 2, File last modification time
      lo_file->append( ''0699'' ). "lo_stream->append_time( sy-uzeit ).
* 12, 2, File last modification date
      lo_file->append( ''F856'' ). "lo_stream->append_date( sy-datum ).
* 14, 4, CRC-32 of uncompressed data
      lo_file->append_crc(
        iv_little_endian = abap_true
        iv_xstring       = ls_contents-content ).
* 18, 4, Compressed size (or 0xffffffff for ZIP64)
      lo_file->append_int4( xstrlen( ls_contents-compressed ) ).
* 22, 4, Uncompressed size (or 0xffffffff for ZIP64)
      lo_file->append_int4( xstrlen( ls_contents-content ) ).
* 26, 2, File name length (n)
      lo_file->append_int2( xstrlen( lv_buffer ) ).
* 28, 2, Extra field length (m)
      lo_file->append( ''0000'' ).
* 30, n, File name
      lo_file->append( lv_buffer ).
* 30+n, m, Extra field
* empty
* compressed data,
      lo_file->append( ls_contents-compressed ).

****************************************
* CENTRAL DIRECTORY FILE RECORD
* 0, 4, Central directory file header signature = 0x02014b50
      lo_central->append( ''504B0102'' ).
* 4, 2, Version made by
      lo_central->append( ''1400'' ).

* 6, 2, Version needed to extract (minimum)
* 8, 2, General purpose bit flag
* 10, 2, Compression method
* 12, 2, File last modification time
* 14, 2, File last modification date
* 16, 4, CRC-32 of uncompressed data
* 20, 4, Compressed size (or 0xffffffff for ZIP64)
* 24, 4, Uncompressed size (or 0xffffffff for ZIP64)
* 28, 2, File name length (n)
* 30, 2, Extra field length (m)
      lv_tmp = lo_file->get( ).
      lo_central->append( lv_tmp+4(26) ).

* 32, 2, File comment length (k)
      lo_central->append_int2( 0 ).
* 34, 2, Disk number where file starts (or 0xffff for ZIP64)
      lo_central->append_int2( 0 ).
* 36, 2, Internal file attributes
      lo_central->append_int2( 0 ).
* 38, 4, External file attributes
      lo_central->append_int4( 0 ).
* 42, 4, Relative offset of local file header (or 0xffffffff for ZIP64). This is the number of bytes between the start of the first disk on which the file occurs, and the start of the local file header. This allows software reading the central directory to locate the position of the file inside the ZIP file.
      lo_central->append_int4( xstrlen( lo_total->get( ) ) ).
* 46, n, File name
      lo_central->append( lv_buffer ).

      lo_total->append( lo_file->get( ) ).
    ENDLOOP.

    lv_start = xstrlen( lo_total->get( ) ).
    lo_total->append( lo_central->get( ) ).

****************************************
* END OF CENTRAL DIRECTORY
* 0, 4, End of central directory signature = 0x06054b50
    lo_total->append( ''504B0506'' ).
* 4, 2, Number of this disk (or 0xffff for ZIP64)
    lo_total->append_int2( 0 ).
* 6, 2, Disk where central directory starts (or 0xffff for ZIP64)
    lo_total->append_int2( 0 ).
* 8, 2, Number of central directory records on this disk (or 0xffff for ZIP64)
    lo_total->append_int2( lines( mt_contents ) ).
* 10, 2, Total number of central directory records (or 0xffff for ZIP64)
    lo_total->append_int2( lines( mt_contents ) ).
* 12, 4, Size of central directory (bytes) (or 0xffffffff for ZIP64)
    lo_total->append_int4( xstrlen( lo_central->get( ) ) ).
* 16, 4, Offset of start of central directory, relative to start of archive (or 0xffffffff for ZIP64)
    lo_total->append_int4( lv_start ).
* 20, 2, Comment length (n)
    lo_total->append_int2( 0 ).
* 22, n, Comment
* empty

    val = lo_total->get( ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_DYN_PRG                         ', 'CLASS cl_abap_dyn_prg DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS check_table_name_str
      IMPORTING
        val            TYPE csequence
        packages       TYPE csequence
      RETURNING
        VALUE(val_str) TYPE string
      RAISING
        cx_abap_not_a_table
        cx_abap_not_in_package.

    CLASS-METHODS check_whitelist_str
      IMPORTING
        val            TYPE csequence
        whitelist      TYPE csequence
      RETURNING
        VALUE(val_str) TYPE string
      RAISING
        cx_abap_not_in_whitelist.

    CLASS-METHODS quote
      IMPORTING
        val        TYPE csequence
      RETURNING
        VALUE(out) TYPE string.

    CLASS-METHODS escape_quotes
      IMPORTING
        val        TYPE csequence
      RETURNING
        VALUE(out) TYPE string.

    CLASS-METHODS escape_xss_xml_html
      IMPORTING
        val        TYPE csequence
      RETURNING
        VALUE(out) TYPE string.

    CLASS-METHODS escape_xss_url
      IMPORTING
        val        TYPE csequence
      RETURNING
        VALUE(out) TYPE string.
ENDCLASS.

CLASS cl_abap_dyn_prg IMPLEMENTATION.

  METHOD check_table_name_str.
* allow everything
    val_str = val.
  ENDMETHOD.

  METHOD check_whitelist_str.
* allow everything
    val_str = val.
  ENDMETHOD.

  METHOD quote.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD escape_xss_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD escape_quotes.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD escape_xss_xml_html.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_NOT_A_TABLE                     ', 'CLASS cx_abap_not_a_table DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_not_a_table IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_NOT_IN_PACKAGE                  ', 'CLASS cx_abap_not_in_package DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_not_in_package IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_NOT_IN_WHITELIST                ', 'CLASS cx_abap_not_in_whitelist DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_not_in_whitelist IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_HMAC                            ', 'CLASS cl_abap_hmac DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS calculate_hmac_for_raw
      IMPORTING
        if_algorithm   TYPE string DEFAULT ''SHA1''
        if_key         TYPE xstring
        if_data        TYPE xstring
        if_length      TYPE i OPTIONAL
      EXPORTING
        ef_hmacstring     TYPE string
        ef_hmacxstring    TYPE xstring
        ef_hmacb64string  TYPE string
      RAISING
        cx_abap_message_digest.

    CLASS-METHODS calculate_hmac_for_char
      IMPORTING
        if_algorithm     TYPE string DEFAULT ''SHA1''
        if_key           TYPE xstring
        if_data          TYPE string
      EXPORTING
        ef_hmacstring    TYPE string
        ef_hmacxstring   TYPE xstring
        ef_hmacb64string TYPE string
      RAISING
        cx_abap_message_digest.

    CLASS-METHODS string_to_xstring
      IMPORTING
        if_input TYPE string
      RETURNING
        VALUE(er_output) TYPE xstring
      RAISING
        cx_abap_message_digest.
ENDCLASS.

CLASS cl_abap_hmac IMPLEMENTATION.
  METHOD calculate_hmac_for_raw.

    DATA lv_algorithm TYPE string.

    CLEAR ef_hmacstring.
    CLEAR ef_hmacxstring.

    " todo,
    ASSERT if_length = 0.

    lv_algorithm = to_lower( if_algorithm ).
    ASSERT lv_algorithm = ''sha1'' OR lv_algorithm = ''md5'' OR lv_algorithm = ''sha256''.

* todo, this doesnt work in browser?
    WRITE ''@KERNEL const crypto = await import("crypto");''.
    IF if_key IS INITIAL.
      WRITE ''@KERNEL var shasum = crypto.createHash(lv_algorithm.get());''.
      WRITE ''@KERNEL shasum.update(if_data.get(), "hex");''.
      WRITE ''@KERNEL ef_hmacstring.set(shasum.digest("hex").toUpperCase());''.
    ELSE.
      WRITE ''@KERNEL let hmac = crypto.createHmac(lv_algorithm.get(), Buffer.from(if_key.get(), "hex")).update(if_data.get(), "hex").digest("hex").toUpperCase();''.
      WRITE ''@KERNEL ef_hmacstring.set(hmac);''.
    ENDIF.

    WRITE ''@KERNEL ef_hmacb64string.set(Buffer.from(ef_hmacstring.get(), "hex").toString("base64"));''.

    ef_hmacxstring = ef_hmacstring.

  ENDMETHOD.

  METHOD calculate_hmac_for_char.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD string_to_xstring.
    ASSERT 1 = ''todo''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_MESSAGE_DIGEST                  ', 'CLASS cl_abap_message_digest DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS calculate_hash_for_raw
      IMPORTING
        if_algorithm   TYPE string DEFAULT ''SHA1''
        if_data        TYPE xstring
      EXPORTING
        ef_hashxstring TYPE xstring
      RAISING
        cx_abap_message_digest.

    CLASS-METHODS calculate_hash_for_char
      IMPORTING
        if_algorithm     TYPE string DEFAULT ''SHA1''
        if_data          TYPE string
      EXPORTING
        ef_hashxstring   TYPE xstring
        ef_hashstring    TYPE string
        ef_hashb64string TYPE string
      RAISING
        cx_abap_message_digest.
ENDCLASS.

CLASS cl_abap_message_digest IMPLEMENTATION.
  METHOD calculate_hash_for_raw.

    DATA lv_algorithm TYPE string.

    lv_algorithm = to_lower( if_algorithm ).
    ASSERT lv_algorithm = ''sha1'' OR lv_algorithm = ''md5'' OR lv_algorithm = ''sha256''.

* todo, this doesnt work in browser?
    WRITE ''@KERNEL const crypto = await import("crypto");''.
    WRITE ''@KERNEL var shasum = crypto.createHash(lv_algorithm.get());''.
    WRITE ''@KERNEL shasum.update(if_data.get(), "hex");''.
    WRITE ''@KERNEL ef_hashxstring.set(shasum.digest("hex").toUpperCase());''.

  ENDMETHOD.

  METHOD calculate_hash_for_char.

    DATA lv_algorithm TYPE string.

    lv_algorithm = to_lower( if_algorithm ).
    ASSERT lv_algorithm = ''sha1'' OR lv_algorithm = ''md5'' OR lv_algorithm = ''sha256''.

* todo, this doesnt work in browser?
    WRITE ''@KERNEL const crypto = await import("crypto");''.
    WRITE ''@KERNEL var shasum = crypto.createHash(lv_algorithm.get());''.
    WRITE ''@KERNEL shasum.update(if_data.get());''.
    WRITE ''@KERNEL ef_hashxstring.set(shasum.digest("hex").toUpperCase());''.
    WRITE ''@KERNEL ef_hashb64string.set(Buffer.from(ef_hashxstring.get(), "hex").toString("base64"));''.

    ef_hashstring = ef_hashxstring.

  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_MESSAGE_DIGEST                  ', 'CLASS cx_abap_message_digest DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_message_digest IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_MATH                            ', 'CLASS cl_abap_math DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS min_int4 TYPE i VALUE -2147483648.
    CONSTANTS max_int4 TYPE i VALUE 2147483647.

    CONSTANTS max_int8 TYPE int8 VALUE 9223372036854775807.
    CONSTANTS min_int8 TYPE int8 VALUE -9223372036854775808.

    CONSTANTS round_ceiling   TYPE i VALUE 0.
    CONSTANTS round_up        TYPE i VALUE 1.
    CONSTANTS round_half_up   TYPE i VALUE 2.
    CONSTANTS round_half_even TYPE i VALUE 3.
    CONSTANTS round_half_down TYPE i VALUE 4.
    CONSTANTS round_down      TYPE i VALUE 5.
    CONSTANTS round_floor     TYPE i VALUE 6.
ENDCLASS.

CLASS cl_abap_math IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_RANDOM                          ', 'CLASS cl_abap_random DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS create
      IMPORTING
        seed             TYPE i OPTIONAL
      RETURNING
        VALUE(ro_random) TYPE REF TO cl_abap_random.

    METHODS int
      RETURNING
        VALUE(rv_integer) TYPE i.

    METHODS intinrange
      IMPORTING
        low               TYPE i
        high              TYPE i
      RETURNING
        VALUE(rv_integer) TYPE i.

    CLASS-METHODS seed
      RETURNING
        VALUE(rv_seed) TYPE i.
* todo, use "crypto." instead for generating random numbers? see cl_abap_hmac which also uses crypto
ENDCLASS.

CLASS cl_abap_random IMPLEMENTATION.
  METHOD create.
    CREATE OBJECT ro_random.
  ENDMETHOD.

  METHOD int.
* todo, currently only positive integers are returned
    WRITE ''@KERNEL rv_integer.set(Math.floor(Math.random() * 2147483647));''.
  ENDMETHOD.

  METHOD seed.
    WRITE ''@KERNEL rv_seed.set(Math.floor(Math.random() * 2147483647));''.
  ENDMETHOD.

  METHOD intinrange.
* including "low" and "high" numbers
    DATA lv_interval TYPE i.

    ASSERT high > low.
    ASSERT low >= 0.
    lv_interval = high - low + 1.
    rv_integer = abs( int( ) ).
    rv_integer = rv_integer MOD lv_interval.
    rv_integer = rv_integer + low.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_RANDOM_INT                      ', 'CLASS cl_abap_random_int DEFINITION PUBLIC FINAL CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-METHODS create
      IMPORTING
        seed TYPE i OPTIONAL
        min  TYPE i DEFAULT -2147483648
        max  TYPE i DEFAULT 2147483647
        PREFERRED PARAMETER seed
      RETURNING
        VALUE(prng) TYPE REF TO cl_abap_random_int
      RAISING
        cx_abap_random.

    METHODS get_next
      RETURNING
        VALUE(value) TYPE i.

  PRIVATE SECTION.
    DATA mv_min TYPE i.
    DATA mv_max TYPE i.
ENDCLASS.

CLASS cl_abap_random_int IMPLEMENTATION.
  METHOD create.
    CREATE OBJECT prng.
    prng->mv_min = min.
    prng->mv_max = max.
  ENDMETHOD.

  METHOD get_next.
    value = cl_abap_random=>create( )->intinrange(
      low  = mv_min
      high = mv_max ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_RANDOM                          ', 'CLASS cx_abap_random DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_abap_random IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_MATCHER                         ', 'CLASS cl_abap_matcher DEFINITION PUBLIC.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        pattern TYPE clike
        ignore_case TYPE abap_bool
        text TYPE clike.

    METHODS find_all
      RETURNING
        VALUE(rt_matches) TYPE match_result_tab.

    METHODS find_next
      RETURNING
        VALUE(found) TYPE abap_bool.

    METHODS get_submatch
      IMPORTING
        index TYPE i
      RETURNING
        VALUE(match) TYPE string.

    METHODS get_offset
      RETURNING
        VALUE(offset) TYPE i.

    METHODS match
      RETURNING
        VALUE(success) TYPE abap_bool.

    METHODS get_length
      RETURNING
        VALUE(length) TYPE i.

  PRIVATE SECTION.
    DATA mt_matches TYPE match_result_tab.
    DATA mv_index TYPE i.
    DATA mv_text TYPE string.
    DATA mv_pattern TYPE string.

ENDCLASS.

CLASS cl_abap_matcher IMPLEMENTATION.

  METHOD constructor.
    IF ignore_case = abap_true.
      FIND ALL OCCURRENCES OF REGEX pattern IN text RESULTS mt_matches IGNORING CASE.
    ELSE.
      FIND ALL OCCURRENCES OF REGEX pattern IN text RESULTS mt_matches.
    ENDIF.
    mv_pattern = pattern.
    mv_text = text.
  ENDMETHOD.

  METHOD match.
    FIND ALL OCCURRENCES OF REGEX |^{ mv_pattern }$| IN mv_text.
    success = boolc( sy-subrc = 0 ).
  ENDMETHOD.

  METHOD find_all.
    rt_matches = mt_matches.
  ENDMETHOD.

  METHOD find_next.
    mv_index = mv_index + 1.
    READ TABLE mt_matches INDEX mv_index TRANSPORTING NO FIELDS.
    found = boolc( sy-subrc = 0 ).
  ENDMETHOD.

  METHOD get_submatch.
    DATA ls_match LIKE LINE OF mt_matches.
    DATA ls_submatch LIKE LINE OF ls_match-submatches.
    READ TABLE mt_matches INDEX mv_index INTO ls_match.
    READ TABLE ls_match-submatches INDEX index INTO ls_submatch.
    IF sy-subrc = 0.
      match = mv_text+ls_submatch-offset(ls_submatch-length).
    ENDIF.
  ENDMETHOD.

  METHOD get_offset.
    DATA ls_match LIKE LINE OF mt_matches.
    READ TABLE mt_matches INDEX mv_index INTO ls_match.
    offset = ls_match-offset.
  ENDMETHOD.

  METHOD get_length.
    DATA ls_match LIKE LINE OF mt_matches.
    READ TABLE mt_matches INDEX mv_index INTO ls_match.
    length = ls_match-length.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_REGEX                           ', 'CLASS cl_abap_regex DEFINITION PUBLIC.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        pattern     TYPE clike
        ignore_case TYPE abap_bool DEFAULT abap_false.

    METHODS create_matcher
      IMPORTING
        text              TYPE clike
      RETURNING
        VALUE(ro_matcher) TYPE REF TO cl_abap_matcher.

    CLASS-METHODS create_pcre
      IMPORTING
        pattern      TYPE clike
        ignore_case  TYPE abap_bool DEFAULT abap_false
      RETURNING
        VALUE(regex) TYPE REF TO cl_abap_regex.

  PRIVATE SECTION.
    DATA mv_pattern     TYPE string.
    DATA mv_ignore_case TYPE abap_bool.

ENDCLASS.

CLASS cl_abap_regex IMPLEMENTATION.

  METHOD constructor.
    mv_pattern = pattern.
    mv_ignore_case = ignore_case.
  ENDMETHOD.

  METHOD create_pcre.
    CREATE OBJECT regex
      EXPORTING
        pattern     = pattern
        ignore_case = ignore_case.
  ENDMETHOD.

  METHOD create_matcher.
    CREATE OBJECT ro_matcher
      EXPORTING
        pattern     = mv_pattern
        ignore_case = mv_ignore_case
        text        = text.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SQL_RESULT_SET                       ', 'CLASS cl_sql_result_set DEFINITION PUBLIC.
  PUBLIC SECTION.
    METHODS set_param
      IMPORTING
        data_ref TYPE REF TO data
      RAISING
        cx_parameter_invalid.

    METHODS set_param_table
      IMPORTING
        itab_ref TYPE REF TO data
      RAISING
        cx_parameter_invalid.

    METHODS next
      RETURNING
        VALUE(rows_ret) TYPE i
      RAISING
        cx_sql_exception.

    METHODS close.

    METHODS next_package
      RAISING
        cx_sql_exception
        cx_parameter_invalid_type.
  PRIVATE SECTION.
    DATA mv_magic TYPE x LENGTH 1.
    DATA mv_index TYPE i.
    DATA mv_ref   TYPE REF TO data.
ENDCLASS.

CLASS cl_sql_result_set IMPLEMENTATION.

  METHOD set_param.
    mv_ref = data_ref.
  ENDMETHOD.

  METHOD next.
* todo, more work needed here

    DATA lv_total TYPE i.
    DATA lv_value TYPE string.

    WRITE ''@KERNEL lv_total.set(this.mv_magic.length);''.
*    WRITE ''@KERNEL console.dir(this.mv_magic);''.
    WRITE ''@KERNEL const current = this.mv_magic[this.mv_index.get()];''.
    WRITE ''@KERNEL lv_value.set(Object.values(current)[0]);''.

    mv_ref->* = lv_value.

    mv_index = mv_index + 1.
    rows_ret = lv_total - mv_index.
  ENDMETHOD.

  METHOD close.
* nothing here,
    RETURN.
  ENDMETHOD.

  METHOD set_param_table.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD next_package.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SQL_STATEMENT                        ', 'CLASS cl_sql_statement DEFINITION PUBLIC.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING con_ref TYPE REF TO object OPTIONAL.

    METHODS execute_update
      IMPORTING
        statement TYPE string
      RAISING
        cx_sql_exception.

    METHODS execute_query
      IMPORTING
        statement         TYPE string
      RETURNING
        VALUE(result_set) TYPE REF TO cl_sql_result_set
      RAISING
        cx_sql_exception.

    METHODS execute_ddl
      IMPORTING
        statement TYPE string
      RAISING
        cx_sql_exception.
ENDCLASS.

CLASS cl_sql_statement IMPLEMENTATION.

  METHOD constructor.
* todo,
    ASSERT con_ref IS INITIAL.
  ENDMETHOD.

  METHOD execute_ddl.
    ASSERT 1 = ''not supported''.
  ENDMETHOD.

  METHOD execute_update.

    DATA lv_sql_message TYPE string.

    ASSERT statement IS NOT INITIAL.

    WRITE ''@KERNEL if (abap.context.databaseConnections["DEFAULT"] === undefined) {''.
    lv_sql_message = ''not connected to db''.
    WRITE ''@KERNEL }''.
    IF lv_sql_message IS NOT INITIAL.
      RAISE EXCEPTION TYPE cx_sql_exception.
    ENDIF.

    WRITE ''@KERNEL try {''.
    WRITE ''@KERNEL   await abap.context.databaseConnections["DEFAULT"].execute(statement.get());''.
    WRITE ''@KERNEL } catch(e) {''.
    WRITE ''@KERNEL   lv_sql_message.set(e + "");''.
    WRITE ''@KERNEL }''.
    IF lv_sql_message IS NOT INITIAL.
      RAISE EXCEPTION TYPE cx_sql_exception.
    ENDIF.

  ENDMETHOD.

  METHOD execute_query.
    DATA lv_sql_message TYPE string.

    ASSERT statement IS NOT INITIAL.

    WRITE ''@KERNEL if (abap.context.databaseConnections["DEFAULT"] === undefined) {''.
    lv_sql_message = ''not connected to db''.
    WRITE ''@KERNEL }''.
    IF lv_sql_message IS NOT INITIAL.
      RAISE EXCEPTION TYPE cx_sql_exception.
    ENDIF.

    CREATE OBJECT result_set.

    WRITE ''@KERNEL try {''.
    WRITE ''@KERNEL   const res = await abap.context.databaseConnections["DEFAULT"].select({select: statement.get()});''.
*    WRITE ''@KERNEL   console.dir(res.rows);''.
    WRITE ''@KERNEL   result_set.get().mv_magic = res.rows;''.
    WRITE ''@KERNEL } catch(e) {''.
    WRITE ''@KERNEL   lv_sql_message.set(e + "");''.
    WRITE ''@KERNEL }''.
    IF lv_sql_message IS NOT INITIAL.
      RAISE EXCEPTION TYPE cx_sql_exception.
    ENDIF.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SQL_EXCEPTION                        ', 'CLASS cx_sql_exception DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_sql_exception IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_BCS                                  ', 'CLASS cl_bcs DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS create_persistent
      RETURNING
        VALUE(result) TYPE REF TO cl_bcs
      RAISING
        cx_bcs.

    METHODS add_recipient
      IMPORTING
        i_recipient  TYPE REF TO if_recipient_bcs
        i_express    TYPE abap_bool OPTIONAL
        i_copy       TYPE abap_bool OPTIONAL
        i_blind_copy TYPE abap_bool OPTIONAL
        i_no_forward TYPE abap_bool OPTIONAL
      RAISING
        cx_bcs.

    METHODS set_sender
      IMPORTING
        i_sender TYPE REF TO if_sender_bcs
      RAISING
        cx_bcs.

    METHODS set_status_attributes
      IMPORTING
        i_requested_status TYPE any.

    METHODS set_document
      IMPORTING
        i_document TYPE REF TO if_document_bcs
      RAISING
        cx_bcs.

    METHODS set_message_subject
      IMPORTING
        ip_subject TYPE string
      RAISING
        cx_bcs.

    METHODS send
      IMPORTING
        i_with_error_screen TYPE abap_bool DEFAULT abap_false
      RETURNING
        VALUE(result) TYPE abap_bool
      RAISING
        cx_bcs.

    METHODS set_send_immediately
      IMPORTING
        i_send_immediately TYPE abap_bool
      RAISING
        cx_bcs.
ENDCLASS.

CLASS cl_bcs IMPLEMENTATION.

  METHOD set_document.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD set_status_attributes.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD set_send_immediately.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD set_message_subject.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD set_sender.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD send.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD create_persistent.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD add_recipient.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_BCS_CONVERT                          ', 'CLASS cl_bcs_convert DEFINITION PUBLIC.
  PUBLIC SECTION.

    CLASS-METHODS string_to_soli
      IMPORTING
        iv_string      TYPE string
      RETURNING
        VALUE(et_soli) TYPE soli_tab.

    CLASS-METHODS xstring_to_solix
      IMPORTING
        iv_xstring      TYPE xstring
      RETURNING
        VALUE(et_solix) TYPE solix_tab.

    CLASS-METHODS raw_to_string
      IMPORTING
        it_soli          TYPE soli_tab
      RETURNING
        VALUE(ev_string) TYPE string
      RAISING
        cx_bcs.

    CLASS-METHODS solix_to_xstring
      IMPORTING
        it_solix TYPE solix_tab
        iv_size TYPE i OPTIONAL
      RETURNING
        VALUE(ev_xstring) TYPE xstring.

ENDCLASS.

CLASS cl_bcs_convert IMPLEMENTATION.

  METHOD string_to_soli.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD solix_to_xstring.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD xstring_to_solix.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD raw_to_string.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_CAM_ADDRESS_BCS                      ', 'CLASS cl_cam_address_bcs DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_recipient_bcs.
    INTERFACES if_sender_bcs.

    CLASS-METHODS create_internet_address
      IMPORTING
        i_address_string TYPE clike
        i_address_name   TYPE clike OPTIONAL
        i_incl_sapuser   TYPE abap_bool OPTIONAL
      RETURNING
        VALUE(result)    TYPE REF TO cl_cam_address_bcs
      RAISING
        cx_bcs.

ENDCLASS.

CLASS cl_cam_address_bcs IMPLEMENTATION.

  METHOD create_internet_address.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_DOCUMENT_BCS                         ', 'CLASS cl_document_bcs DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_document_bcs.

    CLASS-METHODS create_document
      IMPORTING
        i_type    TYPE clike
        i_subject TYPE clike
        i_text    TYPE any OPTIONAL
        i_length  TYPE i OPTIONAL
      RETURNING
        VALUE(result) TYPE REF TO cl_document_bcs
      RAISING
        cx_bcs.

    METHODS add_attachment
      IMPORTING
        i_attachment_type    TYPE clike
        i_attachment_subject TYPE clike
        i_attachment_size    TYPE i OPTIONAL
        i_att_content_text   TYPE any OPTIONAL
        i_att_content_hex    TYPE any OPTIONAL
        i_attachment_header  TYPE soli_tab OPTIONAL
      RAISING
        cx_bcs.

ENDCLASS.

CLASS cl_document_bcs IMPLEMENTATION.

  METHOD create_document.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD add_attachment.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_BCS                                  ', 'CLASS cx_bcs DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_bcs IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_DOCUMENT_BCS                         ', 'INTERFACE if_document_bcs PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_RECIPIENT_BCS                        ', 'INTERFACE if_recipient_bcs PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SENDER_BCS                           ', 'INTERFACE if_sender_bcs PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_DEMO_OUTPUT                          ', 'CLASS cl_demo_output DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS write
      IMPORTING
        data TYPE any
        name TYPE string OPTIONAL.

    CLASS-METHODS clear.

    CLASS-METHODS display
      IMPORTING
      data TYPE any OPTIONAL
      name TYPE string OPTIONAL PREFERRED PARAMETER data.
ENDCLASS.

CLASS cl_demo_output IMPLEMENTATION.
  METHOD write.
    ASSERT 1 = ''not supported''.
  ENDMETHOD.

  METHOD clear.
    ASSERT 1 = ''not supported''.
  ENDMETHOD.

  METHOD display.
    ASSERT 1 = ''not supported''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_I18N_LANGUAGES                       ', 'CLASS cl_i18n_languages DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS sap1_to_sap2
      IMPORTING
        im_lang_sap1        TYPE sy-langu
      RETURNING
        VALUE(re_lang_sap2) TYPE string
      EXCEPTIONS
        no_assignment.

    CLASS-METHODS sap2_to_sap1
      IMPORTING
        im_lang_sap2 TYPE laiso
      RETURNING
        VALUE(re_lang_sap1) TYPE sy-langu
      EXCEPTIONS
        no_assignment.

    CLASS-METHODS sap2_to_iso639_1
      IMPORTING
        im_lang_sap2   TYPE laiso
      EXPORTING
        ex_lang_iso639 TYPE string
        ex_country     TYPE land1
      EXCEPTIONS
        no_assignment.
ENDCLASS.

CLASS cl_i18n_languages IMPLEMENTATION.
  METHOD sap2_to_sap1.
    CASE to_upper( im_lang_sap2 ).
      WHEN ''SR''.
        re_lang_sap1 = ''0''.
      WHEN ''ZH''.
        re_lang_sap1 = ''1''.
      WHEN ''TH''.
        re_lang_sap1 = ''2''.
      WHEN ''KO''.
        re_lang_sap1 = ''3''.
      WHEN ''RO''.
        re_lang_sap1 = ''4''.
      WHEN ''SL''.
        re_lang_sap1 = ''5''.
      WHEN ''HR''.
        re_lang_sap1 = ''6''.
      WHEN ''MS''.
        re_lang_sap1 = ''7''.
      WHEN ''UK''.
        re_lang_sap1 = ''8''.
      WHEN ''ET''.
        re_lang_sap1 = ''9''.
      WHEN ''AR''.
        re_lang_sap1 = ''A''.
      WHEN ''HE''.
        re_lang_sap1 = ''B''.
      WHEN ''CS''.
        re_lang_sap1 = ''C''.
      WHEN ''DE''.
        re_lang_sap1 = ''D''.
      WHEN ''EN''.
        re_lang_sap1 = ''E''.
      WHEN ''FR''.
        re_lang_sap1 = ''F''.
      WHEN ''EL''.
        re_lang_sap1 = ''G''.
      WHEN ''HU''.
        re_lang_sap1 = ''H''.
      WHEN ''IT''.
        re_lang_sap1 = ''I''.
      WHEN ''JA''.
        re_lang_sap1 = ''J''.
      WHEN ''DA''.
        re_lang_sap1 = ''K''.
      WHEN ''PL''.
        re_lang_sap1 = ''L''.
      WHEN ''ZF''.
        re_lang_sap1 = ''M''.
      WHEN ''NL''.
        re_lang_sap1 = ''N''.
      WHEN ''NO''.
        re_lang_sap1 = ''O''.
      WHEN ''PT''.
        re_lang_sap1 = ''P''.
      WHEN ''SK''.
        re_lang_sap1 = ''Q''.
      WHEN ''RU''.
        re_lang_sap1 = ''R''.
      WHEN ''ES''.
        re_lang_sap1 = ''S''.
      WHEN ''TR''.
        re_lang_sap1 = ''T''.
      WHEN ''FI''.
        re_lang_sap1 = ''U''.
      WHEN ''SV''.
        re_lang_sap1 = ''V''.
      WHEN ''BG''.
        re_lang_sap1 = ''W''.
      WHEN ''LT''.
        re_lang_sap1 = ''X''.
      WHEN ''LV''.
        re_lang_sap1 = ''Y''.
      WHEN ''Z1''.
        re_lang_sap1 = ''Z''.
      WHEN ''AF''.
        re_lang_sap1 = ''a''.
      WHEN ''IS''.
        re_lang_sap1 = ''b''.
      WHEN ''CA''.
        re_lang_sap1 = ''c''.
      WHEN ''SH''.
        re_lang_sap1 = ''d''.
      WHEN ''ID''.
        re_lang_sap1 = ''i''.
      WHEN ''1Q''.
        re_lang_sap1 = ''''.
      WHEN OTHERS.
        RAISE no_assignment.
    ENDCASE.
  ENDMETHOD.

  METHOD sap1_to_sap2.
* todo, ideally this should look up in a database table first
* if there is no database attached, fallback to the CASE below
    CASE im_lang_sap1.
      WHEN ''0''.
        re_lang_sap2 = ''SR''.
      WHEN ''1''.
        re_lang_sap2 = ''ZH''.
      WHEN ''2''.
        re_lang_sap2 = ''TH''.
      WHEN ''3''.
        re_lang_sap2 = ''KO''.
      WHEN ''4''.
        re_lang_sap2 = ''RO''.
      WHEN ''5''.
        re_lang_sap2 = ''SL''.
      WHEN ''6''.
        re_lang_sap2 = ''HR''.
      WHEN ''7''.
        re_lang_sap2 = ''MS''.
      WHEN ''8''.
        re_lang_sap2 = ''UK''.
      WHEN ''9''.
        re_lang_sap2 = ''ET''.
      WHEN ''A''.
        re_lang_sap2 = ''AR''.
      WHEN ''B''.
        re_lang_sap2 = ''HE''.
      WHEN ''C''.
        re_lang_sap2 = ''CS''.
      WHEN ''D''.
        re_lang_sap2 = ''DE''.
      WHEN ''E''.
        re_lang_sap2 = ''EN''.
      WHEN ''F''.
        re_lang_sap2 = ''FR''.
      WHEN ''G''.
        re_lang_sap2 = ''EL''.
      WHEN ''H''.
        re_lang_sap2 = ''HU''.
      WHEN ''I''.
        re_lang_sap2 = ''IT''.
      WHEN ''J''.
        re_lang_sap2 = ''JA''.
      WHEN ''K''.
        re_lang_sap2 = ''DA''.
      WHEN ''L''.
        re_lang_sap2 = ''PL''.
      WHEN ''M''.
        re_lang_sap2 = ''ZF''.
      WHEN ''N''.
        re_lang_sap2 = ''NL''.
      WHEN ''O''.
        re_lang_sap2 = ''NO''.
      WHEN ''P''.
        re_lang_sap2 = ''PT''.
      WHEN ''Q''.
        re_lang_sap2 = ''SK''.
      WHEN ''R''.
        re_lang_sap2 = ''RU''.
      WHEN ''S''.
        re_lang_sap2 = ''ES''.
      WHEN ''T''.
        re_lang_sap2 = ''TR''.
      WHEN ''U''.
        re_lang_sap2 = ''FI''.
      WHEN ''V''.
        re_lang_sap2 = ''SV''.
      WHEN ''W''.
        re_lang_sap2 = ''BG''.
      WHEN ''X''.
        re_lang_sap2 = ''LT''.
      WHEN ''Y''.
        re_lang_sap2 = ''LV''.
      WHEN ''Z''.
        re_lang_sap2 = ''Z1''.
      WHEN ''a''.
        re_lang_sap2 = ''AF''.
      WHEN ''b''.
        re_lang_sap2 = ''IS''.
      WHEN ''c''.
        re_lang_sap2 = ''CA''.
      WHEN ''d''.
        re_lang_sap2 = ''SH''.
      WHEN ''i''.
        re_lang_sap2 = ''ID''.
      WHEN OTHERS.
        RAISE no_assignment.
    ENDCASE.
  ENDMETHOD.

  METHOD sap2_to_iso639_1.
    CASE im_lang_sap2.
      WHEN ''SR''.
        ex_lang_iso639 = ''sr''.
      WHEN ''ZH''.
        ex_lang_iso639 = ''zh''.
        ex_country = ''CN''.
      WHEN ''TH''.
        ex_lang_iso639 = ''th''.
      WHEN ''KO''.
        ex_lang_iso639 = ''ko''.
        ex_country = ''KR''.
      WHEN ''RO''.
        ex_lang_iso639 = ''ro''.
        ex_country = ''RO''.
      WHEN ''SL''.
        ex_lang_iso639 = ''sl''.
      WHEN ''HR''.
        ex_lang_iso639 = ''hr''.
      WHEN ''MS''.
        ex_lang_iso639 = ''ms''.
        ex_country = ''MY''.
      WHEN ''UK''.
        ex_lang_iso639 = ''uk''.
      WHEN ''ET''.
        ex_lang_iso639 = ''et''.
      WHEN ''AR''.
        ex_lang_iso639 = ''ar''.
        ex_country = ''SA''.
      WHEN ''HE''.
        ex_lang_iso639 = ''he''.
      WHEN ''CS''.
        ex_lang_iso639 = ''cs''.
      WHEN ''DE''.
        ex_lang_iso639 = ''de''.
        ex_country = ''DE''.
      WHEN ''EN''.
        ex_lang_iso639 = ''en''.
        ex_country = ''US''.
      WHEN ''FR''.
        ex_lang_iso639 = ''fr''.
        ex_country = ''FR''.
      WHEN ''EL''.
        ex_lang_iso639 = ''el''.
      WHEN ''HU''.
        ex_lang_iso639 = ''hu''.
      WHEN ''IT''.
        ex_lang_iso639 = ''it''.
        ex_country = ''IT''.
      WHEN ''JA''.
        ex_lang_iso639 = ''ja''.
      WHEN ''DA''.
        ex_lang_iso639 = ''da''.
      WHEN ''PL''.
        ex_lang_iso639 = ''pl''.
      WHEN ''ZF''.
        ex_lang_iso639 = ''zh''.
        ex_country = ''TW''.
      WHEN ''NL''.
        ex_lang_iso639 = ''nl''.
        ex_country = ''NL''.
      WHEN ''NO''.
        ex_lang_iso639 = ''no''.
      WHEN ''PT''.
        ex_lang_iso639 = ''pt''.
        ex_country = ''BR''.
      WHEN ''SK''.
        ex_lang_iso639 = ''sk''.
      WHEN ''RU''.
        ex_lang_iso639 = ''ru''.
        ex_country = ''RU''.
      WHEN ''ES''.
        ex_lang_iso639 = ''es''.
        ex_country = ''ES''.
      WHEN ''TR''.
        ex_lang_iso639 = ''tr''.
      WHEN ''FI''.
        ex_lang_iso639 = ''fi''.
      WHEN ''SV''.
        ex_lang_iso639 = ''sv''.
      WHEN ''BG''.
        ex_lang_iso639 = ''bg''.
      WHEN ''LT''.
        ex_lang_iso639 = ''lt''.
      WHEN ''LV''.
        ex_lang_iso639 = ''lv''.
      WHEN ''AF''.
        ex_lang_iso639 = ''af''.
      WHEN ''IS''.
        ex_lang_iso639 = ''is''.
      WHEN ''CA''.
        ex_lang_iso639 = ''ca''.
      WHEN ''SH''.
        ex_lang_iso639 = ''sr''.
      WHEN ''ID''.
        ex_lang_iso639 = ''id''.
      WHEN OTHERS.
        RAISE no_assignment.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_MESSAGE_HELPER                       ', 'CLASS cl_message_helper DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS set_msg_vars_for_if_msg
      IMPORTING
        text TYPE REF TO if_message
      EXPORTING
        VALUE(string) TYPE string.

    CLASS-METHODS set_msg_vars_for_clike
      IMPORTING
        text TYPE clike.

    CLASS-METHODS get_text_for_message
      IMPORTING
        text TYPE REF TO if_message
      RETURNING
        VALUE(result) TYPE string.

    CLASS-METHODS check_msg_kind
      IMPORTING
        msg     TYPE REF TO object
      EXPORTING
        t100key TYPE scx_t100key
        textid  TYPE sotr_conc.

    CLASS-METHODS get_otr_text_raw
      IMPORTING
        textid TYPE sotr_conc
      EXPORTING
        result TYPE string.

    CLASS-METHODS replace_text_params
      IMPORTING
        obj    TYPE REF TO object
      CHANGING
        result TYPE string.
  PRIVATE SECTION.
    CONSTANTS gc_fallback TYPE string VALUE ''An exception was raised.''.
ENDCLASS.

CLASS cl_message_helper IMPLEMENTATION.

  METHOD get_otr_text_raw.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD replace_text_params.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_text_for_message.

    DATA lv_msgid LIKE sy-msgid.
    DATA lv_msgno LIKE sy-msgno.
    DATA lv_msgv1 LIKE sy-msgv1.
    DATA lv_msgv2 LIKE sy-msgv2.
    DATA lv_msgv3 LIKE sy-msgv3.
    DATA lv_msgv4 LIKE sy-msgv4.

* when the transpiler can do more, the below can be implemented in ABAP instead of using KERNEL,
    WRITE ''@KERNEL if (text.get()?.if_t100_message$t100key === undefined) { result.set(this.gc_fallback); return result; };''.

    WRITE ''@KERNEL lv_msgid.set(text.get().if_t100_message$t100key.get().msgid);''.
    WRITE ''@KERNEL lv_msgno.set(text.get().if_t100_message$t100key.get().msgno);''.
    WRITE ''@KERNEL lv_msgv1.set(text.get()[text.get().if_t100_message$t100key.get().attr1.get().toLowerCase().replace("~", "$").trimEnd()] ? text.get()[text.get().if_t100_message$t100key.get().attr1.get().toLowerCase().replace("~", "$").trimEnd()].get() : "");''.
    WRITE ''@KERNEL lv_msgv2.set(text.get()[text.get().if_t100_message$t100key.get().attr2.get().toLowerCase().replace("~", "$").trimEnd()] ? text.get()[text.get().if_t100_message$t100key.get().attr2.get().toLowerCase().replace("~", "$").trimEnd()].get() : "");''.
    WRITE ''@KERNEL lv_msgv3.set(text.get()[text.get().if_t100_message$t100key.get().attr3.get().toLowerCase().replace("~", "$").trimEnd()] ? text.get()[text.get().if_t100_message$t100key.get().attr3.get().toLowerCase().replace("~", "$").trimEnd()].get() : "");''.
    WRITE ''@KERNEL lv_msgv4.set(text.get()[text.get().if_t100_message$t100key.get().attr4.get().toLowerCase().replace("~", "$").trimEnd()] ? text.get()[text.get().if_t100_message$t100key.get().attr4.get().toLowerCase().replace("~", "$").trimEnd()].get() : "");''.

    MESSAGE ID lv_msgid TYPE ''I'' NUMBER lv_msgno WITH lv_msgv1 lv_msgv2 lv_msgv3 lv_msgv4 INTO result.

  ENDMETHOD.

  METHOD set_msg_vars_for_if_msg.
    IF text IS INITIAL.
      RAISE EXCEPTION TYPE cx_sy_message_illegal_text.
    ENDIF.

* first try if_t100_message
    string = get_text_for_message( text ).
    IF string <> gc_fallback.
      CLEAR sy-msgty.
      RETURN.
    ENDIF.

    string = text->get_text( ).
    IF string IS INITIAL.
      ASSERT 1 = ''todo''.
    ENDIF.

    set_msg_vars_for_clike( string ).
  ENDMETHOD.

  METHOD set_msg_vars_for_clike.

    DATA lv_char200 TYPE c LENGTH 200.

    " move to char200 to avoid checking out of bound
    lv_char200 = text.

    sy-msgid = ''00''.
    sy-msgno = ''001''.

    sy-msgv1 = lv_char200.
    IF lv_char200+49(1) = space.
      lv_char200 = lv_char200+49.
    ELSE.
      lv_char200 = text+50.
    ENDIF.

    sy-msgv2 = lv_char200.
    IF lv_char200+49(1) = space.
      lv_char200 = lv_char200+49.
    ELSE.
      lv_char200 = lv_char200+50.
    ENDIF.

    sy-msgv3 = lv_char200.
    IF lv_char200+49(1) = space.
      lv_char200 = lv_char200+49.
    ELSE.
      lv_char200 = lv_char200+50.
    ENDIF.

    sy-msgv4 = lv_char200.

  ENDMETHOD.

  METHOD check_msg_kind.

    DATA li_t100_message TYPE REF TO if_t100_message.

    TRY.
        li_t100_message ?= msg.
        t100key = li_t100_message->t100key.
      CATCH cx_sy_move_cast_error.
        ASSERT 1 = ''todo''.
    ENDTRY.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_OO_ADT_CLASSRUN                      ', 'INTERFACE if_oo_adt_classrun PUBLIC.
  METHODS main IMPORTING out TYPE REF TO if_oo_adt_classrun_out.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_OO_ADT_CLASSRUN_OUT                  ', 'INTERFACE if_oo_adt_classrun_out PUBLIC.

  METHODS write
    IMPORTING
      data TYPE any
      name TYPE string OPTIONAL
    RETURNING
      VALUE(output) TYPE REF TO if_oo_adt_classrun_out.

  METHODS get
    IMPORTING
      data TYPE any OPTIONAL
      name TYPE string OPTIONAL PREFERRED PARAMETER data
    RETURNING
      VALUE(output) TYPE string.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CODEPAGE                        ', 'CLASS cl_abap_codepage DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS convert_to
      IMPORTING
        codepage      TYPE string OPTIONAL
        source        TYPE string
      RETURNING
        VALUE(output) TYPE xstring.

    CLASS-METHODS convert_from
      IMPORTING
        codepage      TYPE string OPTIONAL
        source        TYPE xstring
      RETURNING
        VALUE(output) TYPE string.

    CLASS-METHODS sap_codepage
      IMPORTING
        encoding TYPE string
      RETURNING
        VALUE(codepage) TYPE abap_encoding.
ENDCLASS.

CLASS cl_abap_codepage IMPLEMENTATION.
  METHOD convert_to.
    DATA conv TYPE REF TO cl_abap_conv_out_ce.
    conv = cl_abap_conv_out_ce=>create( encoding = ''UTF-8'' ).
    conv->convert( EXPORTING data   = source
                   IMPORTING buffer = output ).
  ENDMETHOD.

  METHOD convert_from.
    DATA conv TYPE REF TO cl_abap_conv_in_ce.
    DATA data TYPE string.
    conv = cl_abap_conv_in_ce=>create( encoding = ''UTF-8'' ).
    conv->convert(
      EXPORTING input = source
      IMPORTING data = output ).
  ENDMETHOD.

  METHOD sap_codepage.
    ASSERT encoding = ''UTF-16LE''.
    codepage = ''4103''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CONV_CODEPAGE                   ', 'CLASS cl_abap_conv_codepage DEFINITION PUBLIC FINAL CREATE PRIVATE.

  PUBLIC SECTION.

    CLASS-METHODS create_in
      RETURNING
        VALUE(instance) TYPE REF TO if_abap_conv_in
      RAISING
        cx_parameter_invalid_range.

    CLASS-METHODS create_out
      RETURNING
        VALUE(instance) TYPE REF TO if_abap_conv_out
      RAISING
        cx_parameter_invalid_range.

ENDCLASS.

CLASS cl_abap_conv_codepage IMPLEMENTATION.

  METHOD create_in.
    CREATE OBJECT instance TYPE lcl_in.
  ENDMETHOD.

  METHOD create_out.
    CREATE OBJECT instance TYPE lcl_out.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CONV_IN_CE                      ', 'CLASS cl_abap_conv_in_ce DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS
      create
        IMPORTING
          encoding    TYPE abap_encoding DEFAULT ''UTF-8''
          input       TYPE xstring OPTIONAL
          replacement TYPE char1 DEFAULT ''#''
          ignore_cerr TYPE abap_bool DEFAULT abap_false
          endian      TYPE char1 OPTIONAL
        RETURNING
          VALUE(ret)  TYPE REF TO cl_abap_conv_in_ce.

    CLASS-METHODS
      uccpi
        IMPORTING
          value TYPE i
        RETURNING
          VALUE(ret) TYPE string.

    TYPES ty_char2 TYPE c LENGTH 2.
    CLASS-METHODS uccp
      IMPORTING
        uccp        TYPE simple
      RETURNING
        VALUE(char) TYPE ty_char2.

    METHODS convert
      IMPORTING
        input TYPE xsequence
        n     TYPE i OPTIONAL
      EXPORTING
        data  TYPE string.

    METHODS read
      IMPORTING
        n     TYPE i OPTIONAL
      EXPORTING
        data  TYPE string.
  PRIVATE SECTION.
    DATA mv_input TYPE xstring.
    DATA mv_js_encoding TYPE string.
    DATA mv_ignore_cerr TYPE abap_bool.
ENDCLASS.

CLASS cl_abap_conv_in_ce IMPLEMENTATION.
  METHOD create.
    ASSERT replacement = ''#''. " todo
    ASSERT endian IS INITIAL. " todo

    CREATE OBJECT ret.

    CASE encoding.
      WHEN ''UTF-8''.
        ret->mv_js_encoding = ''utf8''.
      WHEN ''4103''.
        ret->mv_js_encoding = ''utf-16le''.
      WHEN OTHERS.
        ASSERT 1 = ''not supported''.
    ENDCASE.

    ret->mv_input = input.
    ret->mv_ignore_cerr = ignore_cerr.
  ENDMETHOD.

  METHOD uccp.
    DATA int TYPE i.
    DATA hex TYPE x LENGTH 2.
    hex = uccp.
    int = hex.
    TRY.
        char = uccpi( int ).
      CATCH cx_sy_conversion_codepage.
* todo, hmm
    ENDTRY.
  ENDMETHOD.

  METHOD uccpi.
    DATA lv_hex TYPE x LENGTH 2.
    DATA lo_in  TYPE REF TO cl_abap_conv_in_ce.

    lv_hex = value.
    " switch to little endian
    CONCATENATE lv_hex+1(1) lv_hex(1) INTO lv_hex IN BYTE MODE.

    lo_in = create( encoding = ''4103'' ).

    lo_in->convert(
      EXPORTING
        input = lv_hex
      IMPORTING
        data  = ret ).
  ENDMETHOD.

  METHOD convert.
    DATA lv_error TYPE abap_bool.

    ASSERT mv_js_encoding IS NOT INITIAL.
    WRITE ''@KERNEL let buf = Buffer.from(input.get(), "hex");''.

    " Try TextDecoder first, if it runs in browser,
    WRITE ''@KERNEL const decoder = TextDecoder || await import("util").TextDecoder;''.
    WRITE ''@KERNEL const td = new decoder(this.mv_js_encoding.get(), {fatal: this.mv_ignore_cerr.get() !== "X"});''.
    WRITE ''@KERNEL try {''.
    WRITE ''@KERNEL   data.set(td.decode(buf));''.
    WRITE ''@KERNEL } catch {''.
    lv_error = abap_true.
    WRITE ''@KERNEL }''.

    IF lv_error = abap_true.
      RAISE EXCEPTION TYPE cx_sy_conversion_codepage.
    ENDIF.

* old    WRITE ''@KERNEL let result = buf.toString(this.mv_js_encoding.get());''.
* old    WRITE ''@KERNEL data.set(result);''.
  ENDMETHOD.

  METHOD read.
    convert(
      EXPORTING
        input = mv_input
        n     = n
      IMPORTING
        data  = data ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CONV_OUT_CE                     ', 'CLASS cl_abap_conv_out_ce DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS
      create
        IMPORTING
          encoding    TYPE abap_encoding OPTIONAL
          ignore_cerr TYPE abap_bool DEFAULT abap_false
          endian      TYPE string OPTIONAL
          replacement TYPE string OPTIONAL
        RETURNING
          VALUE(ret)  TYPE REF TO cl_abap_conv_out_ce.

    CLASS-METHODS
      uccpi
        IMPORTING
          char       TYPE clike
        RETURNING
          VALUE(ret) TYPE i.

    TYPES hex02 TYPE x LENGTH 2.
    CLASS-METHODS uccp
      IMPORTING
        char        TYPE clike
      RETURNING
        VALUE(uccp) TYPE hex02
      RAISING
        cx_sy_conversion_codepage
        cx_sy_codepage_converter_init
        cx_parameter_invalid_range.

    METHODS
      convert
        IMPORTING
          data   TYPE simple
          n      TYPE i OPTIONAL
        EXPORTING
          buffer TYPE xstring.

    METHODS write
      IMPORTING
        data TYPE any.

    METHODS get_buffer
      RETURNING
        VALUE(buffer) TYPE xstring.

    METHODS reset.
  PRIVATE SECTION.
    DATA mv_js_encoding TYPE string.
    DATA mv_buffer TYPE xstring.
ENDCLASS.

CLASS cl_abap_conv_out_ce IMPLEMENTATION.
  METHOD create.
    CREATE OBJECT ret.
    CASE encoding.
      WHEN ''UTF-8'' OR ''''.
        ret->mv_js_encoding = ''utf8''.
      WHEN ''4103''.
        ret->mv_js_encoding = ''utf16le''.
      WHEN OTHERS.
        ASSERT 1 = ''not supported''.
    ENDCASE.
  ENDMETHOD.

  METHOD uccpi.
    DATA lo_out TYPE REF TO cl_abap_conv_out_ce.
    DATA lv_hex TYPE xstring.

    lo_out = create( encoding = ''4103'' ).
    lo_out->convert(
      EXPORTING
        data   = char
      IMPORTING
        buffer = lv_hex ).
    ASSERT xstrlen( lv_hex ) = 2.
    ret = lv_hex(1).
    ret = ret + lv_hex+1(1) * 255.
  ENDMETHOD.

  METHOD write.
    DATA res TYPE xstring.
    convert( EXPORTING data = data
             IMPORTING buffer = res ).
    CONCATENATE mv_buffer res INTO mv_buffer IN BYTE MODE.
  ENDMETHOD.

  METHOD get_buffer.
    buffer = mv_buffer.
  ENDMETHOD.

  METHOD uccp.
    DATA lv_char TYPE c LENGTH 1.
    DATA lo_obj  TYPE REF TO cl_abap_conv_out_ce.

    lv_char = char(1).
    lo_obj = create( encoding = ''4103'' ).

    lo_obj->convert( EXPORTING data = lv_char
                     IMPORTING buffer = uccp ).

    SHIFT uccp LEFT CIRCULAR IN BYTE MODE.
  ENDMETHOD.

  METHOD reset.
    CLEAR mv_buffer.
  ENDMETHOD.

  METHOD convert.
    DATA lv_str TYPE string.

    WRITE ''@KERNEL let result = "";''.
*    WRITE ''@KERNEL console.dir(n);''.
    IF n IS SUPPLIED.
      lv_str = data.
      lv_str = lv_str(n).
      WRITE ''@KERNEL result = Buffer.from(lv_str.get(), this.mv_js_encoding.get()).toString("hex");''.
    ELSE.
      WRITE ''@KERNEL result = Buffer.from(data.get(), this.mv_js_encoding.get()).toString("hex");''.
    ENDIF.
    WRITE ''@KERNEL buffer.set(result.toUpperCase());''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_GDT_CONVERSION                       ', 'CLASS cl_gdt_conversion DEFINITION PUBLIC.

  PUBLIC SECTION.
    CLASS-METHODS language_code_outbound
      IMPORTING
        im_value TYPE spras
      EXPORTING
        ex_value TYPE laiso.

    CLASS-METHODS language_code_inbound
      IMPORTING
        im_value TYPE csequence
      EXPORTING
        ex_value TYPE spras
      RAISING
        cx_gdt_conversion.

    CLASS-METHODS amount_outbound
      IMPORTING
        im_value         TYPE p
        im_currency_code TYPE clike
      EXPORTING
        ex_value         TYPE p
      RAISING
        cx_gdt_conversion.

    CLASS-METHODS country_code_outbound
      IMPORTING
        im_value TYPE land1
      EXPORTING
        ex_value TYPE csequence
      RAISING
        cx_gdt_conversion.

    CLASS-METHODS date_time_inbound
      IMPORTING
        im_value       TYPE csequence
      EXPORTING
        ex_value_short TYPE timestamp
      RAISING
        cx_gdt_conversion.

    CLASS-METHODS unit_code_inbound
      IMPORTING
        im_value TYPE csequence
      EXPORTING
        ex_value TYPE msehi
      RAISING
        cx_gdt_conversion.

    CLASS-METHODS unit_code_outbound
      IMPORTING
        im_value TYPE msehi
      EXPORTING
        ex_value TYPE csequence
      RAISING
        cx_gdt_conversion.

ENDCLASS.

CLASS cl_gdt_conversion IMPLEMENTATION.

  METHOD amount_outbound.
    CASE im_currency_code.
      WHEN ''DKK'' OR ''EUR'' OR ''USD''.
        ex_value = im_value.
      WHEN ''VND''.
        ex_value = im_value * 100.
      WHEN OTHERS.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

  METHOD language_code_inbound.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD unit_code_outbound.
    CASE im_value.
      WHEN ''''.
        RAISE EXCEPTION TYPE cx_gdt_conversion.
      WHEN ''ST''.
        ex_value = ''PCE''.
      WHEN ''KG''.
        ex_value = ''KGM''.
      WHEN ''CDM''.
        ex_value = ''DMQ''.
      WHEN OTHERS.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

  METHOD country_code_outbound.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD date_time_inbound.
    DATA lv_str TYPE string.

    IF im_value NP ''*Z''.
      ASSERT 1 = ''todo, only handles UTC for now''.
    ENDIF.

    lv_str = im_value.
    REPLACE ALL OCCURRENCES OF ''-'' IN lv_str WITH ''''.
    REPLACE ALL OCCURRENCES OF '':'' IN lv_str WITH ''''.
    REPLACE ALL OCCURRENCES OF ''T'' IN lv_str WITH ''''.
    REPLACE ALL OCCURRENCES OF ''Z'' IN lv_str WITH ''''.
    ex_value_short = lv_str.
  ENDMETHOD.

  METHOD unit_code_inbound.

* todo, first look up in database, if there is no database connected, fallback to below

    CASE im_value.
      WHEN ''MTR''.
        ex_value = ''M''.
      WHEN ''PCE''.
        ex_value = ''PC''.
      WHEN ''KGM''.
        ex_value = ''KG''.
      WHEN ''LTR''.
        ex_value = ''L''.
      WHEN OTHERS.
        ASSERT 1 = ''todo''.
    ENDCASE.

  ENDMETHOD.

  METHOD language_code_outbound.

    cl_i18n_languages=>sap1_to_sap2(
      EXPORTING
        im_lang_sap1  = im_value
      RECEIVING
        re_lang_sap2  = ex_value
      EXCEPTIONS
        no_assignment = 1
        OTHERS        = 2 ).
    TRANSLATE ex_value TO LOWER CASE.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_gdt_conversion.
    ENDIF.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_GDT_CONVERSION                       ', 'CLASS cx_gdt_conversion DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_gdt_conversion IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_ABAP_CONV_IN                         ', 'INTERFACE if_abap_conv_in PUBLIC.

  METHODS convert
    IMPORTING
      source TYPE xstring
    RETURNING
      VALUE(result) TYPE string
    RAISING
      cx_sy_conversion_codepage.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_ABAP_CONV_OUT                        ', 'INTERFACE if_abap_conv_out PUBLIC.

  METHODS convert
    IMPORTING
      source TYPE string
    RETURNING
      VALUE(result) TYPE xstring
    RAISING
      cx_sy_conversion_codepage.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_DATFM                           ', 'CLASS cl_abap_datfm DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS conv_date_ext_to_int
      IMPORTING
        im_datext    TYPE csequence
        im_datfmdes  TYPE char1 OPTIONAL
      EXPORTING
        ex_datint    TYPE d
        ex_datfmused TYPE char1
      RAISING
        cx_abap_datfm.

    CLASS-METHODS get_date_format_des
      IMPORTING
        im_datfm      TYPE char1 OPTIONAL
        im_langu      TYPE spras DEFAULT sy-langu
        im_plain      TYPE abap_bool DEFAULT abap_false
        im_long       TYPE abap_bool DEFAULT abap_false
      EXPORTING
        ex_dateformat TYPE csequence
      RAISING
        cx_abap_datfm.

    CLASS-METHODS conv_period_ext_to_int
      IMPORTING
        im_periodext TYPE csequence
      EXPORTING
        ex_periodint TYPE csequence
      RAISING
        cx_abap_datfm.

  PRIVATE SECTION.
    CONSTANTS ddmmyyyy_dot_seperated TYPE c VALUE ''1''.
    CONSTANTS yyyymmdd_dot_seperated TYPE c VALUE ''4''.
ENDCLASS.

CLASS cl_abap_datfm IMPLEMENTATION.

  METHOD conv_period_ext_to_int.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD conv_date_ext_to_int.
    DATA regex_ddmmyyyy_dot_seperated TYPE string VALUE ''^(0[0-9]|[12][0-9]|3[01])[- \\..](0[0-9]|1[012])[- \\..]\\d\\d\\d\\d$''.
    DATA regex_yyyymmdd_dot_seperated TYPE string VALUE ''^\\d\\d\\d\\d[- \\..](0[0-9]|1[012])[- \\..](0[0-9]|[12][0-9]|3[01])$''.
    DATA regex_yyyymmdd_no_dot TYPE string VALUE ''^(\\d{4})(0[0-9]|1[012])(0[0-9]|[12][0-9]|3[01])$''.

    IF im_datfmdes <> ddmmyyyy_dot_seperated
        AND im_datfmdes <> yyyymmdd_dot_seperated.
      RAISE EXCEPTION TYPE cx_abap_datfm.
    ENDIF.

    FIND ALL OCCURRENCES OF REGEX regex_ddmmyyyy_dot_seperated IN im_datext.
    IF sy-subrc = 0.
      ex_datint = im_datext+6(4) && im_datext+3(2) && im_datext(2).
      ex_datfmused = ddmmyyyy_dot_seperated.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF REGEX regex_yyyymmdd_dot_seperated IN im_datext.
    IF sy-subrc = 0.
      ex_datint = im_datext(4) && im_datext+5(2) && im_datext+8(2).
      ex_datfmused = yyyymmdd_dot_seperated.
      RETURN.
    ENDIF.

    FIND ALL OCCURRENCES OF REGEX regex_yyyymmdd_no_dot IN im_datext.
    IF sy-subrc = 0.
      ex_datint = im_datext.
      ex_datfmused = yyyymmdd_dot_seperated.
      RETURN.
    ENDIF.

    RAISE EXCEPTION TYPE cx_abap_datfm.
  ENDMETHOD.

  METHOD get_date_format_des.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_TIMEFM                          ', 'CLASS cl_abap_timefm DEFINITION PUBLIC.
  PUBLIC SECTION.
    TYPES ty_format TYPE i.
    TYPES ty_timefm TYPE c LENGTH 1.

    CLASS-METHODS conv_time_ext_to_int
      IMPORTING
        time_ext        TYPE csequence
        is_24_allowed   TYPE abap_bool DEFAULT abap_false
      EXPORTING
        time_int        TYPE t
      RAISING
        cx_abap_timefm_invalid.

    CLASS-METHODS conv_time_int_to_ext
      IMPORTING
        time_int TYPE t
      EXPORTING
        time_ext TYPE string
      RAISING
        cx_parameter_invalid_range.

    CLASS-METHODS get_environment_timefm
      RETURNING
        VALUE(timefm) TYPE ty_timefm.
ENDCLASS.

CLASS cl_abap_timefm IMPLEMENTATION.

  METHOD conv_time_ext_to_int.
    DATA lv_text TYPE string.

* todo,
    ASSERT is_24_allowed = abap_true.

    FIND REGEX ''^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$'' IN time_ext.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_abap_timefm_invalid.
    ENDIF.

    lv_text = time_ext.
    REPLACE ALL OCCURRENCES OF '':'' IN lv_text WITH ''''.
    time_int = lv_text.
  ENDMETHOD.

  METHOD conv_time_int_to_ext.
    time_ext = |{ time_int TIME = ISO }|.
  ENDMETHOD.

  METHOD get_environment_timefm.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_TSTMP                           ', 'CLASS cl_abap_tstmp DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS subtract
      IMPORTING
        tstmp1        TYPE p
        tstmp2        TYPE p
      RETURNING
        VALUE(r_secs) TYPE i.

    CLASS-METHODS add
      IMPORTING
        tstmp       TYPE p
        secs        TYPE numeric
      RETURNING
        VALUE(time) TYPE timestamp.

    CLASS-METHODS subtractsecs
      IMPORTING
        tstmp       TYPE p
        secs        TYPE numeric
      RETURNING
        VALUE(time) TYPE timestamp.

    CLASS-METHODS td_add
      IMPORTING
        date     TYPE d
        time     TYPE t
        secs     TYPE numeric
      EXPORTING
        res_date TYPE d
        res_time TYPE t.

    CLASS-METHODS move
      IMPORTING
        tstmp_src TYPE p
      EXPORTING
        tstmp_tgt TYPE p.

    CLASS-METHODS systemtstmp_syst2utc
      IMPORTING
        syst_date TYPE d
        syst_time TYPE t
      EXPORTING
        utc_tstmp TYPE p
      RAISING
        cx_parameter_invalid_range.

    CLASS-METHODS move_to_short
      IMPORTING
        tstmp_src        TYPE tzntstmpl
      RETURNING
        VALUE(tstmp_out) TYPE tzntstmps
      RAISING
        cx_parameter_invalid_type
        cx_parameter_invalid_range.

    CLASS-METHODS td_subtract
      IMPORTING
        date1 TYPE d
        time1 TYPE t
        date2 TYPE d
        time2 TYPE t
      EXPORTING
        res_secs TYPE numeric
      RAISING
        cx_parameter_invalid_type
        cx_parameter_invalid_range.

    CLASS-METHODS systemtstmp_utc2syst
      IMPORTING
        utc_tstmp TYPE timestamp
      EXPORTING
        syst_date TYPE d
        syst_time TYPE t
      RAISING
        cx_parameter_invalid_range.
ENDCLASS.

CLASS cl_abap_tstmp IMPLEMENTATION.

  METHOD td_add.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD systemtstmp_utc2syst.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD move.
* todo, this is most likely wrong, but will also work in some cases
* todo, input is generic packed? which is unknown to abaplint
    tstmp_tgt = tstmp_src.
  ENDMETHOD.

  METHOD systemtstmp_syst2utc.
* system timezone is always UTC for open-abap, so no conversion needed
    IF syst_date IS INITIAL.
      RAISE EXCEPTION TYPE cx_parameter_invalid_range.
    ENDIF.

    utc_tstmp = |{ syst_date }{ syst_time }|.
  ENDMETHOD.

  METHOD subtract.
    DATA str      TYPE string.
    DATA lv_dummy TYPE string.
    str = |{ tstmp1 TIMESTAMP = ISO }|.
    IF str CA '',''.
      SPLIT str AT '','' INTO str lv_dummy.
    ENDIF.
    WRITE ''@KERNEL let t1 = Date.parse(str.get());''.
    str = |{ tstmp2 TIMESTAMP = ISO }|.
    IF str CA '',''.
      SPLIT str AT '','' INTO str lv_dummy.
    ENDIF.
    WRITE ''@KERNEL let t2 = Date.parse(str.get());''.
    WRITE ''@KERNEL r_secs.set((t1 - t2)/1000);''.
  ENDMETHOD.

  METHOD add.
    DATA str      TYPE string.
    DATA lv_dummy TYPE string.
    str = |{ tstmp TIMESTAMP = ISO }|.
    IF str CA '',''.
      SPLIT str AT '','' INTO str lv_dummy.
    ENDIF.
    WRITE ''@KERNEL let t1 = new Date(Date.parse(str.get() + "Z"));''.
    WRITE ''@KERNEL t1.setSeconds( t1.getSeconds() + secs.get() );''.
    WRITE ''@KERNEL time.set(t1.toISOString().slice(0, 19).replace(/-/g, "").replace(/:/g, "").replace("T", ""));''.
  ENDMETHOD.

  METHOD subtractsecs.
    DATA lv_secs TYPE i.
    lv_secs = secs * -1.
    time = add(
      tstmp = tstmp
      secs  = lv_secs ).
  ENDMETHOD.

  METHOD move_to_short.
    move(
      EXPORTING
        tstmp_src = tstmp_src
      IMPORTING
        tstmp_tgt = tstmp_out ).
  ENDMETHOD.

  METHOD td_subtract.
    DATA lv_stamp1 TYPE timestamp.
    DATA lv_stamp2 TYPE timestamp.

    CONVERT DATE date1 TIME time1 INTO TIME STAMP lv_stamp1.
    CONVERT DATE date2 TIME time2 INTO TIME STAMP lv_stamp2.

    res_secs = subtract(
      tstmp1 = lv_stamp1
      tstmp2 = lv_stamp2 ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_DATFM                           ', 'CLASS cx_abap_datfm DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_datfm IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ABAP_TIMEFM_INVALID                  ', 'CLASS cx_abap_timefm_invalid DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_abap_timefm_invalid IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_DYNAMIC_CHECK                        ', 'CLASS cx_dynamic_check DEFINITION ABSTRACT PUBLIC INHERITING FROM cx_root.

ENDCLASS.

CLASS cx_dynamic_check IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_NO_CHECK                             ', 'CLASS cx_no_check DEFINITION PUBLIC INHERITING FROM cx_root.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid   LIKE textid OPTIONAL
        previous TYPE REF TO cx_root OPTIONAL.

ENDCLASS.

CLASS cx_no_check IMPLEMENTATION.

  METHOD constructor.
    super->constructor(
      previous = previous
      textid   = textid ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_PARAMETER_INVALID                    ', 'CLASS cx_parameter_invalid DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid    LIKE textid OPTIONAL
        previous  LIKE previous OPTIONAL
        parameter TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_parameter_invalid IMPLEMENTATION.
  METHOD constructor.
    super->constructor(
      textid   = textid
      previous = previous ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_PARAMETER_INVALID_RANGE              ', 'CLASS cx_parameter_invalid_range DEFINITION PUBLIC INHERITING FROM cx_parameter_invalid.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid    LIKE textid OPTIONAL
        previous  LIKE previous OPTIONAL
        parameter TYPE string OPTIONAL
        value     TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_parameter_invalid_range IMPLEMENTATION.
  METHOD constructor.
    super->constructor(
      textid    = textid
      previous  = previous
      parameter = parameter ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_PARAMETER_INVALID_TYPE               ', 'CLASS cx_parameter_invalid_type DEFINITION PUBLIC INHERITING FROM cx_parameter_invalid.

ENDCLASS.

CLASS cx_parameter_invalid_type IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ROOT                                 ', 'CLASS cx_root DEFINITION ABSTRACT PUBLIC.
  PUBLIC SECTION.
    DATA previous TYPE REF TO cx_root.
    DATA textid   TYPE c LENGTH 32.

    METHODS constructor
      IMPORTING
        textid   LIKE textid OPTIONAL
        previous TYPE REF TO cx_root OPTIONAL.

    METHODS get_source_position
      EXPORTING
        program_name TYPE string
        include_name TYPE string
        source_line  TYPE i.

    INTERFACES if_message.
    ALIASES get_longtext FOR if_message~get_longtext.
    ALIASES get_text FOR if_message~get_text.

ENDCLASS.

CLASS cx_root IMPLEMENTATION.

  METHOD constructor.
    me->previous = previous.
    me->textid = textid.
  ENDMETHOD.

  METHOD get_source_position.
    CLEAR program_name.
    CLEAR include_name.
    CLEAR source_line.

    WRITE ''@KERNEL source_line.set(this.EXTRA_CX.INTERNAL_LINE || 1);''.
    WRITE ''@KERNEL program_name.set(this.EXTRA_CX.INTERNAL_FILENAME || "error");''.
  ENDMETHOD.

  METHOD if_message~get_longtext.
    result = ''OpenAbapGetLongtextDummyValue''.
  ENDMETHOD.

  METHOD if_message~get_text.
    result = cl_message_helper=>get_text_for_message( me ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_ST_ERROR                             ', 'CLASS cx_st_error DEFINITION PUBLIC INHERITING FROM cx_transformation_error.

ENDCLASS.

CLASS cx_st_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_STATIC_CHECK                         ', 'CLASS cx_static_check DEFINITION PUBLIC INHERITING FROM cx_root.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid   LIKE textid OPTIONAL
        previous TYPE REF TO cx_root OPTIONAL.
ENDCLASS.

CLASS cx_static_check IMPLEMENTATION.

  METHOD constructor.
    super->constructor(
      textid   = textid
      previous = previous ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ARITHMETIC_ERROR                  ', 'CLASS cx_sy_arithmetic_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_arithmetic_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ARITHMETIC_OVERFLOW               ', 'CLASS cx_sy_arithmetic_overflow DEFINITION PUBLIC INHERITING FROM cx_sy_arithmetic_error.

  PUBLIC SECTION.
    METHODS if_message~get_text REDEFINITION.

ENDCLASS.

CLASS cx_sy_arithmetic_overflow IMPLEMENTATION.

  METHOD if_message~get_text.
    result = ''Arithmetic overflow''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_BUFFER_OVERFLOW                   ', 'CLASS cx_sy_buffer_overflow DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_buffer_overflow IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CODEPAGE_CONVERTER_INIT           ', 'CLASS cx_sy_codepage_converter_init DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_codepage_converter_init IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_COMPRESSION_ERROR                 ', 'CLASS cx_sy_compression_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_compression_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CONVERSION_CODEPAGE               ', 'CLASS cx_sy_conversion_codepage DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
    DATA source_extract TYPE xstring.
ENDCLASS.

CLASS cx_sy_conversion_codepage IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CONVERSION_DATA_LOSS              ', 'CLASS cx_sy_conversion_data_loss DEFINITION PUBLIC INHERITING FROM cx_sy_conversion_error.

ENDCLASS.

CLASS cx_sy_conversion_data_loss IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CONVERSION_ERROR                  ', 'CLASS cx_sy_conversion_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_conversion_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CONVERSION_NO_NUMBER              ', 'CLASS cx_sy_conversion_no_number DEFINITION PUBLIC INHERITING FROM cx_sy_conversion_error.

  PUBLIC SECTION.
    METHODS if_message~get_text REDEFINITION.

ENDCLASS.

CLASS cx_sy_conversion_no_number IMPLEMENTATION.

  METHOD if_message~get_text.
    result = ''Conversion no number''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CONVERSION_OVERFLOW               ', 'CLASS cx_sy_conversion_overflow DEFINITION PUBLIC INHERITING FROM cx_sy_conversion_error.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid   LIKE textid OPTIONAL
        previous LIKE previous OPTIONAL
        value    TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_sy_conversion_overflow IMPLEMENTATION.
  METHOD constructor.
    super->constructor(
      textid   = textid
      previous = previous ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CREATE_DATA_ERROR                 ', 'CLASS cx_sy_create_data_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_create_data_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_CREATE_OBJECT_ERROR               ', 'CLASS cx_sy_create_object_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid    LIKE textid OPTIONAL
        previous  LIKE previous OPTIONAL
        classname TYPE string OPTIONAL.

    METHODS if_message~get_text REDEFINITION.

    DATA classname TYPE string READ-ONLY.
ENDCLASS.

CLASS cx_sy_create_object_error IMPLEMENTATION.

  METHOD constructor.
    super->constructor(
      textid   = textid
      previous = previous ).
    me->classname = classname.
  ENDMETHOD.

  METHOD if_message~get_text.
    result = ''The object could not be created: The class ??? does not exist.''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DATA_ACCESS_ERROR                 ', 'CLASS cx_sy_data_access_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_data_access_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DUPLICATE_KEY                     ', 'CLASS cx_sy_duplicate_key DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_duplicate_key IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_ERROR                    ', 'CLASS cx_sy_dyn_call_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_dyn_call_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_ILLEGAL_CLASS            ', 'CLASS cx_sy_dyn_call_illegal_class DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_error.

ENDCLASS.

CLASS cx_sy_dyn_call_illegal_class IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_ILLEGAL_FORM             ', 'CLASS cx_sy_dyn_call_illegal_form DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_error.

ENDCLASS.

CLASS cx_sy_dyn_call_illegal_form IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_ILLEGAL_FUNC             ', 'CLASS cx_sy_dyn_call_illegal_func DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_error.

ENDCLASS.

CLASS cx_sy_dyn_call_illegal_func IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_ILLEGAL_METHOD           ', 'CLASS cx_sy_dyn_call_illegal_method DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_error.

  PUBLIC SECTION.
    CONSTANTS private_method TYPE sotr_conc VALUE ''11111111111111111111111111111111''.

    METHODS constructor
      IMPORTING
        textid     LIKE textid OPTIONAL
        previous   LIKE previous OPTIONAL
        classname  TYPE string OPTIONAL
        methodname TYPE string OPTIONAL.

ENDCLASS.

CLASS cx_sy_dyn_call_illegal_method IMPLEMENTATION.

  METHOD constructor.
    super->constructor( previous = previous ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_PARAM_NOT_FOUND          ', 'CLASS cx_sy_dyn_call_param_not_found DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_parameter_error.

ENDCLASS.

CLASS cx_sy_dyn_call_param_not_found IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYN_CALL_PARAMETER_ERROR          ', 'CLASS cx_sy_dyn_call_parameter_error DEFINITION PUBLIC INHERITING FROM cx_sy_dyn_call_error.
  PUBLIC SECTION.
    DATA parameter TYPE string.
ENDCLASS.

CLASS cx_sy_dyn_call_parameter_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYNAMIC_OSQL_ERROR                ', 'CLASS cx_sy_dynamic_osql_error DEFINITION PUBLIC INHERITING FROM cx_sy_open_sql_error.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        sqlmsg TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_sy_dynamic_osql_error IMPLEMENTATION.
  METHOD constructor.
    super->constructor( sqlmsg = sqlmsg ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_DYNAMIC_OSQL_SEMANTICS            ', 'CLASS cx_sy_dynamic_osql_semantics DEFINITION PUBLIC INHERITING FROM cx_sy_dynamic_osql_error.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        sqlmsg TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_sy_dynamic_osql_semantics IMPLEMENTATION.
  METHOD constructor.
    super->constructor( sqlmsg = sqlmsg ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ITAB_DUPLICATE_KEY                ', 'CLASS cx_sy_itab_duplicate_key DEFINITION PUBLIC INHERITING FROM cx_sy_itab_error.

ENDCLASS.

CLASS cx_sy_itab_duplicate_key IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ITAB_ERROR                        ', 'CLASS cx_sy_itab_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_itab_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ITAB_LINE_NOT_FOUND               ', 'CLASS cx_sy_itab_line_not_found DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_itab_line_not_found IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_MESSAGE_ILLEGAL_TEXT              ', 'CLASS cx_sy_message_illegal_text DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_sy_message_illegal_text IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_MOVE_CAST_ERROR                   ', 'CLASS cx_sy_move_cast_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

  PUBLIC SECTION.
    METHODS if_message~get_text REDEFINITION.

ENDCLASS.

CLASS cx_sy_move_cast_error IMPLEMENTATION.

  METHOD if_message~get_text.
    result = ''Casting failed, types not compatible''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_OPEN_SQL_ERROR                    ', 'CLASS cx_sy_open_sql_error DEFINITION PUBLIC INHERITING FROM cx_sy_sql_error.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        sqlmsg TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_sy_open_sql_error IMPLEMENTATION.
  METHOD constructor.
    super->constructor( sqlmsg = sqlmsg ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_RANGE_OUT_OF_BOUNDS               ', 'CLASS cx_sy_range_out_of_bounds DEFINITION PUBLIC INHERITING FROM cx_sy_data_access_error.

  PUBLIC SECTION.
    METHODS if_message~get_text REDEFINITION.

ENDCLASS.

CLASS cx_sy_range_out_of_bounds IMPLEMENTATION.

  METHOD if_message~get_text.
    result = ''Range out of bounds''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_REF_IS_INITIAL                    ', 'CLASS cx_sy_ref_is_initial DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_ref_is_initial IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_SQL_ERROR                         ', 'CLASS cx_sy_sql_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
    DATA sqlmsg TYPE string.

    METHODS constructor
      IMPORTING
        sqlmsg TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_sy_sql_error IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    me->sqlmsg = sqlmsg.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_STRG_PAR_VAL                      ', 'CLASS cx_sy_strg_par_val DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_sy_strg_par_val IMPLEMENTATION.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_STRUCT_ATTRIBUTES                 ', 'CLASS cx_sy_struct_attributes DEFINITION PUBLIC INHERITING FROM cx_sy_struct_creation.

ENDCLASS.

CLASS cx_sy_struct_attributes IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_STRUCT_COMP_NAME                  ', 'CLASS cx_sy_struct_comp_name DEFINITION PUBLIC INHERITING FROM cx_sy_struct_creation.

ENDCLASS.

CLASS cx_sy_struct_comp_name IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_STRUCT_COMP_TYPE                  ', 'CLASS cx_sy_struct_comp_type DEFINITION PUBLIC INHERITING FROM cx_sy_struct_creation.

ENDCLASS.

CLASS cx_sy_struct_comp_type IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_STRUCT_CREATION                   ', 'CLASS cx_sy_struct_creation DEFINITION PUBLIC INHERITING FROM cx_sy_type_creation.

ENDCLASS.

CLASS cx_sy_struct_creation IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_TYPE_CREATION                     ', 'CLASS cx_sy_type_creation DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sy_type_creation IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SY_ZERODIVIDE                        ', 'CLASS cx_sy_zerodivide DEFINITION PUBLIC INHERITING FROM cx_sy_arithmetic_error.
  PUBLIC SECTION.
    METHODS if_message~get_text REDEFINITION.
ENDCLASS.

CLASS cx_sy_zerodivide IMPLEMENTATION.

  METHOD if_message~get_text.
    result = ''Division by zero.''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_TRANSFORMATION_ERROR                 ', 'CLASS cx_transformation_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_transformation_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_XSLT_EXCEPTION                       ', 'CLASS cx_xslt_exception DEFINITION PUBLIC INHERITING FROM cx_transformation_error.

ENDCLASS.

CLASS cx_xslt_exception IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_XSLT_FORMAT_ERROR                    ', 'CLASS cx_xslt_format_error DEFINITION PUBLIC INHERITING FROM cx_xslt_system_error.

ENDCLASS.

CLASS cx_xslt_format_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_XSLT_RUNTIME_ERROR                   ', 'CLASS cx_xslt_runtime_error DEFINITION PUBLIC INHERITING FROM cx_transformation_error.

ENDCLASS.

CLASS cx_xslt_runtime_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_XSLT_SERIALIZATION_ERROR             ', 'CLASS cx_xslt_serialization_error DEFINITION PUBLIC INHERITING FROM cx_xslt_system_error.

ENDCLASS.

CLASS cx_xslt_serialization_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_XSLT_SYSTEM_ERROR                    ', 'CLASS cx_xslt_system_error DEFINITION PUBLIC INHERITING FROM cx_xslt_exception.

ENDCLASS.

CLASS cx_xslt_system_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_MESSAGE                              ', 'INTERFACE if_message PUBLIC.

  METHODS get_text RETURNING VALUE(result) TYPE string.

  METHODS get_longtext
    IMPORTING preserve_newlines TYPE abap_bool OPTIONAL
    RETURNING VALUE(result) TYPE string.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_T100_DYN_MSG                         ', 'INTERFACE if_t100_dyn_msg PUBLIC.

  DATA msgty TYPE symsgty.

  DATA msgv1 TYPE symsgv.
  DATA msgv2 TYPE symsgv.
  DATA msgv3 TYPE symsgv.
  DATA msgv4 TYPE symsgv.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_T100_MESSAGE                         ', 'INTERFACE if_t100_message PUBLIC.

  DATA t100key TYPE scx_t100key.

  CONSTANTS:
    BEGIN OF default_textid,
      msgid TYPE symsgid VALUE ''AB'',
      msgno TYPE symsgno VALUE ''123'',
      attr1 TYPE scx_attrname VALUE '''',
      attr2 TYPE scx_attrname VALUE '''',
      attr3 TYPE scx_attrname VALUE '''',
      attr4 TYPE scx_attrname VALUE '''',
    END OF default_textid.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_FUGR_TEST                        ', 'CLASS kernel_fugr_test DEFINITION PUBLIC.
  PUBLIC SECTION.
ENDCLASS.

CLASS kernel_fugr_test IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_HTTP_CLIENT                          ', 'CLASS cl_http_client DEFINITION PUBLIC CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if_http_client.

    CLASS-METHODS create_by_url
      IMPORTING
        url           TYPE string
        ssl_id        TYPE ssfapplssl OPTIONAL
        proxy_host    TYPE string OPTIONAL
        proxy_service TYPE string OPTIONAL
      EXPORTING
        VALUE(client) TYPE REF TO if_http_client.
* todo, add classic exceptions

    CLASS-METHODS create_by_destination
      IMPORTING
        destination   TYPE clike
      EXPORTING
        VALUE(client) TYPE REF TO if_http_client.
* todo, add classic exceptions

    CLASS-METHODS create_internal
      EXPORTING
        client TYPE REF TO if_http_client
      EXCEPTIONS
        plugin_not_active
        internal_error.

    METHODS constructor
      IMPORTING
        url TYPE string.

  PRIVATE SECTION.
    DATA mv_host TYPE string.

ENDCLASS.

CLASS cl_http_client IMPLEMENTATION.

  METHOD constructor.
* SSL_ID and proxies are currently ignored

    DATA lv_uri TYPE string.
    DATA lv_query TYPE string.

    CREATE OBJECT if_http_client~response TYPE cl_http_entity.

    FIND REGEX ''\\w(\\/[\\w\\d\\.\\-\\/]+)'' IN url SUBMATCHES lv_uri.
    mv_host = url.
*    WRITE ''@KERNEL console.dir(this.mv_host.get());''.
*    WRITE ''@KERNEL console.dir(lv_uri.get());''.
    REPLACE FIRST OCCURRENCE OF lv_uri IN mv_host WITH ''''.

    CREATE OBJECT if_http_client~request TYPE cl_http_entity.
    if_http_client~request->set_header_field(
      name = ''~request_uri''
      value = lv_uri ).

    FIND REGEX ''\\?(.*)'' IN url SUBMATCHES lv_query.
    IF sy-subrc = 0.
      cl_http_utility=>set_query(
        request = if_http_client~request
        query   = lv_query ).
    ENDIF.

  ENDMETHOD.

  METHOD if_http_client~escape_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD create_by_url.
    CREATE OBJECT client TYPE cl_http_client
      EXPORTING
        url = url.
    sy-subrc = 0. " todo
  ENDMETHOD.

  METHOD if_http_client~authenticate.
    DATA lv_base64 TYPE string.
    lv_base64 = cl_http_utility=>encode_base64( |{ username }:{ password }| ).
    if_http_client~request->set_header_field(
      name = ''authorization''
      value = |Basic { lv_base64 }| ).
  ENDMETHOD.

  METHOD if_http_client~close.
* todo
    RETURN.
  ENDMETHOD.

  METHOD create_by_destination.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD create_internal.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_client~create_abs_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_client~send.
    DATA lv_method        TYPE string.
    DATA lv_url           TYPE string.
    DATA lv_body          TYPE string.
    DATA lv_name          TYPE string.
    DATA lv_value         TYPE string.
    DATA lv_content_type  TYPE string.
    DATA lv_xstr          TYPE xstring.
    DATA lt_form_fields   TYPE tihttpnvp.
    DATA lt_header_fields TYPE tihttpnvp.
    DATA ls_field         LIKE LINE OF lt_header_fields.

    lv_method = if_http_client~request->get_method( ).
    IF lv_method IS INITIAL.
      lv_method = ''GET''.
    ENDIF.

* default user-agent if not set
    IF if_http_client~request->get_header_field( ''user-agent'' ) IS INITIAL.
      if_http_client~request->set_header_field(
        name  = ''user-agent''
        value = ''open-abap-http'' ).
    ENDIF.

* building URL
    lv_url = if_http_client~request->get_header_field( ''~request_uri'' ).
    REPLACE FIRST OCCURRENCE OF mv_host IN lv_url WITH ''''.
    lv_url = mv_host && lv_url.
    if_http_client~request->get_form_fields( CHANGING fields = lt_form_fields ).
    IF lines( lt_form_fields ) > 0.
      CASE lv_method.
        WHEN ''GET''.
          lv_url = lv_url && ''?'' && cl_http_utility=>fields_to_string( lt_form_fields ).
        WHEN ''POST''.
          if_http_client~request->set_cdata( cl_http_utility=>fields_to_string( lt_form_fields ) ).
      ENDCASE.
    ENDIF.
*    WRITE ''@KERNEL console.dir(lv_url.get());''.

* building headers
    if_http_client~request->get_header_fields( CHANGING fields = lt_header_fields ).
    WRITE ''@KERNEL let headers = {};''.
    LOOP AT lt_header_fields INTO ls_field WHERE name <> ''~request_uri''.
      WRITE ''@KERNEL headers[ls_field.get().name.get()] = ls_field.get().value.get();''.
    ENDLOOP.

    lv_content_type = if_http_client~request->get_content_type( ).
    IF lv_content_type IS NOT INITIAL.
      WRITE ''@KERNEL headers["content-type"] = lv_content_type.get();''.
    ENDIF.
    WRITE ''@KERNEL headers["accept-encoding"] = "gzip";''.

*    WRITE ''@KERNEL console.dir(headers);''.

    lv_body = if_http_client~request->get_cdata( ).
*    WRITE ''@KERNEL console.dir(lv_body);''.
    IF strlen( lv_body ) > 0.
      WRITE ''@KERNEL headers["content-length"] = lv_body.get().length;''.
    ENDIF.

    WRITE ''@KERNEL const https = await import("https");''.
    WRITE ''@KERNEL const http = await import("http");''.
    WRITE ''@KERNEL function postData(url, options, requestBody) {''.
    WRITE ''@KERNEL   return new Promise((resolve, reject) => {''.
    WRITE ''@KERNEL     const prot = url.startsWith("http://") ? http : https;''.
    WRITE ''@KERNEL     const req = prot.request(url, options,''.
    WRITE ''@KERNEL       (res) => {''.
    WRITE ''@KERNEL         let chunks = [];''.
    WRITE ''@KERNEL         res.on("data", (chunk) => {chunks.push(chunk);});''.
    WRITE ''@KERNEL         res.on("error", reject);''.
    WRITE ''@KERNEL         res.on("end", () => {''.
*    WRITE ''@KERNEL           console.dir(res.statusCode + " " + JSON.stringify(res.headers));''.
*    WRITE ''@KERNEL           if (res.statusCode >= 200 && res.statusCode <= 299) {''.
    WRITE ''@KERNEL             resolve({statusCode: res.statusCode, headers: res.headers, body: Buffer.concat(chunks)});''.
*    WRITE ''@KERNEL           } else {''.
*    WRITE ''@KERNEL             reject("Request failed. status: " + res.statusCode + ", body: " + Buffer.concat(chunks).toString());''.
*    WRITE ''@KERNEL           }''.
    WRITE ''@KERNEL         });''.
    WRITE ''@KERNEL       });''.
    WRITE ''@KERNEL     req.on("error", reject);''.
    WRITE ''@KERNEL     req.write(requestBody, "binary");''.
    WRITE ''@KERNEL     req.end();''.
    WRITE ''@KERNEL   });''.
    WRITE ''@KERNEL }''.

    WRITE ''@KERNEL const prot = lv_url.get().startsWith("http://") ? http : https;''.
    WRITE ''@KERNEL if (this.agent === undefined) {this.agent = new prot.Agent({keepAlive: true, maxSockets: 1});}''.
    WRITE ''@KERNEL let response = await postData(lv_url.get(), {method: lv_method.get(), headers: headers, agent: this.agent}, lv_body.get());''.

    " WRITE ''@KERNEL console.dir(response);''.
    " WRITE ''@KERNEL console.dir(response.headers);''.

    WRITE ''@KERNEL for (const h in response.headers) {''.
    WRITE ''@KERNEL   lv_name.set(h);''.
    WRITE ''@KERNEL   if (Array.isArray(response.headers[h])) continue;''.
    WRITE ''@KERNEL   lv_value.set(response.headers[h]);''.
    if_http_client~response->set_header_field(
      name  = lv_name
      value = lv_value ).
    WRITE ''@KERNEL }''.


    WRITE ''@KERNEL this.if_http_client$response.get().mv_content_type.set(response.headers["content-type"] || "");''.
    WRITE ''@KERNEL this.if_http_client$response.get().mv_status.set(response.statusCode);''.
    WRITE ''@KERNEL this.if_http_client$response.get().mv_data.set(response.body.toString("hex").toUpperCase());''.
*    WRITE ''@KERNEL console.dir(this.if_http_client$response.get().mv_data);''.

    lv_value = if_http_client~response->get_header_field( ''content-encoding'' ).
    IF lv_value = ''gzip''.
      cl_abap_gzip=>decompress_binary_with_header(
        EXPORTING
          gzip_in = if_http_client~response->get_data( )
        IMPORTING
          raw_out = lv_xstr ).
      if_http_client~response->set_data( lv_xstr ).
    ENDIF.

* workaround for classic exceptions, this should work sometime in the transpiler instead
    sy-subrc = 0.

  ENDMETHOD.

  METHOD if_http_client~receive.
* handled in send()

* workaround for classic exceptions, this should work sometime in the transpiler instead
    sy-subrc = 0.

  ENDMETHOD.

  METHOD if_http_client~get_last_error.
    if_http_client~response->get_status( IMPORTING code = code ).
    message = ''todo_open_abap''. " get from one of the response headers?
  ENDMETHOD.

  METHOD if_http_client~send_sap_logon_ticket.
* do nothing,
    RETURN.
  ENDMETHOD.

  METHOD if_http_client~refresh_request.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_HTTP_ENTITY                          ', 'CLASS cl_http_entity DEFINITION PUBLIC CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if_http_response.
    INTERFACES if_http_request.

    ALIASES set_header_field FOR if_http_entity~set_header_field.
    ALIASES append_cdata FOR if_http_entity~append_cdata.
  PROTECTED SECTION.
    DATA m_last_error TYPE i.
  PRIVATE SECTION.
    DATA mv_status       TYPE i.
    DATA mv_reason       TYPE string.
    DATA mv_content_type TYPE string.
    DATA mv_method       TYPE string.
    DATA mv_data         TYPE xstring.
    DATA mt_headers      TYPE tihttpnvp.
    DATA mt_form_fields  TYPE tihttpnvp.
ENDCLASS.

CLASS cl_http_entity IMPLEMENTATION.

  METHOD if_http_response~server_cache_expire_rel.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~server_cache_expire_default.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~server_cache_expire_abs.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~server_cache_browser_dependent.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~get_raw_message.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~copy.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~get_user_agent.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~get_uri_parameter.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~get_raw_message.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~get_form_data.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~get_authorization.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~copy.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_request~set_authorization.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~add_multipart.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_cookie_field.
* todo
    CLEAR field_value.
  ENDMETHOD.

  METHOD if_http_entity~set_compression.
* todo
  ENDMETHOD.

  METHOD if_http_entity~append_cdata.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~append_cdata2.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~add_cookie_field.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~append_data.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~to_xstring.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~delete_cookie_secure.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_cookies.
* todo
    CLEAR cookies.
  ENDMETHOD.

  METHOD if_http_entity~delete_form_field.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~delete_form_field_secure.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_cookie.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_data_length.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~from_xstring.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_form_field_cs.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_last_error.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~delete_header_field.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~delete_header_field_secure.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~delete_cookie.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~set_header_fields.
* todo, does this method clear the existing fields?
    DATA ls_field LIKE LINE OF fields.
    LOOP AT fields INTO ls_field.
      if_http_entity~set_header_field(
        name  = ls_field-name
        value = ls_field-value ).
    ENDLOOP.
  ENDMETHOD.

  METHOD if_http_entity~suppress_content_type.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~set_formfield_encoding.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~set_cookie.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_version.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_serialized_message_length.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_header_field.
    DATA ls_header LIKE LINE OF mt_headers.
    READ TABLE mt_headers WITH KEY name = to_lower( name ) INTO ls_header.
    IF sy-subrc = 0.
      value = ls_header-value.
    ENDIF.
  ENDMETHOD.

  METHOD if_http_entity~get_header_fields.
    fields = mt_headers.
  ENDMETHOD.

  METHOD if_http_response~get_status.
    code = mv_status.
    reason = mv_reason.
  ENDMETHOD.

  METHOD if_http_entity~get_cdata.
    cl_abap_conv_in_ce=>create( encoding = ''UTF-8'' )->convert(
      EXPORTING input = mv_data
      IMPORTING data = data ).
  ENDMETHOD.

  METHOD if_http_response~set_status.
    mv_status = code.
    mv_reason = reason.
  ENDMETHOD.

  METHOD if_http_entity~set_cdata.
    cl_abap_conv_out_ce=>create( encoding = ''UTF-8'' )->convert(
      EXPORTING data = data
      IMPORTING buffer = mv_data ).
  ENDMETHOD.

  METHOD if_http_entity~get_content_type.
    content_type = if_http_entity~get_header_field( ''content-type'' ).
  ENDMETHOD.

  METHOD if_http_entity~set_content_type.
    if_http_entity~set_header_field(
      name  = ''content-type''
      value = content_type ).
  ENDMETHOD.

  METHOD if_http_entity~get_data.
    data = mv_data.
  ENDMETHOD.

  METHOD if_http_entity~set_data.
    mv_data = data.
  ENDMETHOD.

  METHOD if_http_response~delete_cookie_at_client.
    ASSERT 2 = ''todo''.
  ENDMETHOD.

  METHOD if_http_response~redirect.
    ASSERT 2 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~num_multiparts.
* todo
    num = 0.
  ENDMETHOD.

  METHOD if_http_entity~get_multipart.
    ASSERT 2 = ''todo''.
  ENDMETHOD.

  METHOD if_http_entity~get_form_fields_cs.
    fields = mt_form_fields.
  ENDMETHOD.

  METHOD if_http_entity~set_form_fields.
    mt_form_fields = fields.
  ENDMETHOD.

  METHOD if_http_entity~get_form_fields.
    DATA ls_field LIKE LINE OF mt_form_fields.
    LOOP AT mt_form_fields INTO ls_field.
      TRANSLATE ls_field-name TO LOWER CASE.
      APPEND ls_field TO fields.
    ENDLOOP.
  ENDMETHOD.

  METHOD if_http_entity~get_form_field.
    DATA ls_field LIKE LINE OF mt_form_fields.
    READ TABLE mt_form_fields INTO ls_field WITH KEY name = to_lower( name ).
    IF sy-subrc = 0.
      value = ls_field-value.
    ENDIF.
  ENDMETHOD.

  METHOD if_http_entity~set_header_field.
    DATA ls_header LIKE LINE OF mt_headers.
    FIELD-SYMBOLS <ls_header> LIKE LINE OF mt_headers.
    READ TABLE mt_headers WITH KEY name = to_lower( name ) ASSIGNING <ls_header>.
    IF sy-subrc = 0.
      <ls_header>-value = value.
    ELSE.
      ls_header-name = to_lower( name ).
      ls_header-value = value.
      APPEND ls_header TO mt_headers.
    ENDIF.
    IF name = ''~request_method''.
      if_http_request~set_method( value ).
    ENDIF.
  ENDMETHOD.

  METHOD if_http_request~set_method.
    mv_method = method.
  ENDMETHOD.

  METHOD if_http_request~get_method.
    meth = mv_method.
  ENDMETHOD.

  METHOD if_http_request~set_version.
* todo,
    RETURN.
  ENDMETHOD.

  METHOD if_http_entity~set_form_field.
    DATA ls_field LIKE LINE OF mt_form_fields.
    ls_field-name = name.
    ls_field-value = value.
    APPEND ls_field TO mt_form_fields.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_HTTP_SERVER                          ', 'CLASS cl_http_server DEFINITION PUBLIC CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if_http_server.

    ALIASES co_enabled FOR if_http_server~co_enabled.
    ALIASES append_field_url FOR if_http_server~append_field_url.

    CLASS-DATA c_compression_supported TYPE i.
    DATA m_protocol_version TYPE string READ-ONLY.

    CLASS-METHODS get_location
      IMPORTING
        application TYPE csequence OPTIONAL
      EXPORTING
        port         TYPE string
        out_protocol TYPE string
        host         TYPE string.

ENDCLASS.

CLASS cl_http_server IMPLEMENTATION.
  METHOD if_http_server~logoff.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~set_session_stateful.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~append_field_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~create_abs_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~create_rel_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~decode_base64.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~enable_foreign_session_access.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~encode_base64.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~escape_html.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~escape_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_extension_info.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_extension_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_last_error.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_location.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_location_exception.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~get_xsrf_token.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~send_page.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~set_compression.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~set_page.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~set_session_stateful_via_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~unescape_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_server~validate_xsrf_token.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_location.
    host = ''open-abap.org''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_HTTP_UTILITY                         ', 'CLASS cl_http_utility DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_http_utility.

    ALIASES decode_base64 FOR if_http_utility~decode_base64.
    ALIASES encode_base64 FOR if_http_utility~encode_base64.
    ALIASES escape_url FOR if_http_utility~escape_url.
    ALIASES fields_to_string FOR if_http_utility~fields_to_string.
    ALIASES get_last_error FOR if_http_utility~get_last_error.
    ALIASES string_to_fields FOR if_http_utility~string_to_fields.
    ALIASES unescape_url FOR if_http_utility~unescape_url.
    ALIASES normalize_url FOR if_http_utility~normalize_url.

    CLASS-METHODS decode_x_base64
      IMPORTING
        encoded TYPE string
      RETURNING
        VALUE(decoded) TYPE xstring.

    CLASS-METHODS encode_x_base64
      IMPORTING
        unencoded      TYPE xstring
      RETURNING
        VALUE(encoded) TYPE string.

    CLASS-METHODS set_query
      IMPORTING
        request TYPE REF TO if_http_request
        query   TYPE string.

    CLASS-METHODS set_request_uri
      IMPORTING
        request TYPE REF TO if_http_request
        uri     TYPE string.

    CLASS-METHODS escape_xml_attr_value
      IMPORTING
        unescaped      TYPE csequence
      RETURNING
        VALUE(escaped) TYPE string.

    CLASS-METHODS escape_html
      IMPORTING
        unescaped         TYPE string
        keep_num_char_ref TYPE abap_bool DEFAULT abap_undefined
      RETURNING
        VALUE(escaped)    TYPE string.

    CLASS-METHODS escape_javascript
      IMPORTING
        unescaped      TYPE string
        inside_html    TYPE abap_bool DEFAULT abap_false
      RETURNING
        VALUE(escaped) TYPE string.

ENDCLASS.

CLASS cl_http_utility IMPLEMENTATION.

  METHOD set_request_uri.
    request->set_header_field(
      name = ''~request_uri''
      value = uri ).
  ENDMETHOD.

  METHOD escape_html.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD escape_javascript.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD escape_xml_attr_value.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_utility~get_last_error.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_utility~string_to_fields.
    DATA tab TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA str LIKE LINE OF tab.
    DATA ls_field LIKE LINE OF fields.

    ASSERT ignore_parenthesis = 0.

    SPLIT string AT ''&'' INTO TABLE tab.
    LOOP AT tab INTO str.
      SPLIT str AT ''='' INTO ls_field-name ls_field-value.
      APPEND ls_field TO fields.
    ENDLOOP.
  ENDMETHOD.

  METHOD set_query.
    request->set_form_fields( string_to_fields( query ) ).
  ENDMETHOD.

  METHOD if_http_utility~normalize_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_http_utility~fields_to_string.
    DATA tab TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA str TYPE string.
    DATA ls_field LIKE LINE OF fields.

    LOOP AT fields INTO ls_field.
      ls_field-value = if_http_utility~escape_url( ls_field-value ).
      str = ls_field-name && ''='' && ls_field-value.
      APPEND str TO tab.
    ENDLOOP.
    string = concat_lines_of( table = tab sep = ''&'' ).
  ENDMETHOD.

  METHOD encode_x_base64.
    WRITE ''@KERNEL let buffer = Buffer.from(unencoded.get(), "hex");''.
    WRITE ''@KERNEL encoded.set(buffer.toString("base64"));''.
  ENDMETHOD.

  METHOD decode_x_base64.
    WRITE ''@KERNEL let buffer = Buffer.from(encoded.get(), "base64");''.
    WRITE ''@KERNEL decoded.set(buffer.toString("hex").toUpperCase());''.
  ENDMETHOD.

  METHOD if_http_utility~unescape_url.
    WRITE ''@KERNEL let foo = escaped.get();''.
    WRITE ''@KERNEL unescaped.set(decodeURIComponent(foo));''.
  ENDMETHOD.

  METHOD if_http_utility~escape_url.
    DATA lv_index TYPE i.
    DATA lv_char  TYPE string.

    DO strlen( unescaped ) TIMES.
      lv_index = sy-index - 1.
      lv_char = unescaped+lv_index(1).
      IF to_upper( lv_char ) CA sy-abcde OR lv_char CA ''0123456789.-()''.
        escaped = escaped && lv_char.
      ELSE.
        escaped = escaped && ''%'' && to_lower( cl_abap_codepage=>convert_to( lv_char ) ).
      ENDIF.
    ENDDO.
  ENDMETHOD.

  METHOD if_http_utility~encode_base64.
    WRITE ''@KERNEL let buffer = Buffer.from(unencoded.get());''.
    WRITE ''@KERNEL encoded.set(buffer.toString("base64"));''.
  ENDMETHOD.

  METHOD if_http_utility~decode_base64.
    WRITE ''@KERNEL let buffer = Buffer.from(encoded.get(), "base64");''.
    WRITE ''@KERNEL decoded.set(buffer.toString());''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_WEB_HTTP_UTILITY                     ', 'CLASS cl_web_http_utility DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS unescape_url
      IMPORTING
        escaped          TYPE string
        options          TYPE i OPTIONAL
      RETURNING
        VALUE(unescaped) TYPE string.

    CLASS-METHODS decode_x_base64
      IMPORTING
        encoded        TYPE string
      RETURNING
        VALUE(decoded) TYPE xstring.

    CLASS-METHODS encode_x_base64
      IMPORTING
        unencoded      TYPE xstring
      RETURNING
        VALUE(encoded) TYPE string.
ENDCLASS.

CLASS cl_web_http_utility IMPLEMENTATION.
  METHOD unescape_url.
    unescaped = cl_http_utility=>unescape_url(
      escaped = escaped
      options = options ).
  ENDMETHOD.

  METHOD decode_x_base64.
    decoded = cl_http_utility=>decode_x_base64( encoded ).
  ENDMETHOD.

  METHOD encode_x_base64.
    encoded = cl_http_utility=>encode_x_base64( unencoded ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_CLIENT                          ', 'INTERFACE if_http_client PUBLIC.
  DATA request  TYPE REF TO if_http_request.
  DATA response TYPE REF TO if_http_response.

  DATA propertytype_logon_popup   TYPE i.
  DATA propertytype_accept_cookie TYPE i.
  DATA propertytype_redirect      TYPE i.

  CONSTANTS co_disabled TYPE i VALUE 0.
  CONSTANTS co_enabled  TYPE i VALUE 1.

  CONSTANTS co_timeout_default TYPE i VALUE 60.

  METHODS authenticate
    IMPORTING
      proxy_authentication TYPE abap_bool OPTIONAL
      username             TYPE string
      password             TYPE string.

  METHODS close.

  METHODS send
    IMPORTING
      timeout TYPE i DEFAULT 0
    EXCEPTIONS
      http_communication_failure
      http_invalid_state
      http_processing_failed
      http_invalid_timeout.

  METHODS receive
    EXCEPTIONS
      http_communication_failure
      http_invalid_state
      http_processing_failed.

  METHODS send_sap_logon_ticket.

  METHODS get_last_error
    EXPORTING
      code    TYPE i
      message TYPE string.

  METHODS refresh_request.

  METHODS create_abs_url
    IMPORTING
      path       TYPE string OPTIONAL
    RETURNING
      VALUE(url) TYPE string.

  CLASS-METHODS escape_url
    IMPORTING
      unescaped      TYPE string
    RETURNING
      VALUE(escaped) TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_ENTITY                          ', 'INTERFACE if_http_entity PUBLIC.

  CONSTANTS co_request_method_get TYPE string VALUE ''GET''.
  CONSTANTS co_request_method_post TYPE string VALUE ''POST''.
  CONSTANTS co_body_before_query_string TYPE i VALUE 3.
  CONSTANTS co_protocol_version_1_0 TYPE i VALUE 1000.
  CONSTANTS co_protocol_version_1_1 TYPE i VALUE 1001.
  CONSTANTS co_compress_based_on_mime_type TYPE i VALUE 2.

  METHODS set_cdata
    IMPORTING
      data   TYPE string
      offset TYPE i OPTIONAL
      length TYPE i OPTIONAL.

  METHODS set_data
    IMPORTING
      data TYPE xstring.

  METHODS get_header_field
    IMPORTING
      name TYPE string
    RETURNING
      VALUE(value) TYPE string.

  METHODS set_header_field
    IMPORTING
      name  TYPE string
      value TYPE string.

  METHODS get_form_fields
    CHANGING
      fields TYPE tihttpnvp.

  METHODS set_compression
    IMPORTING
      disable_extended_checks TYPE abap_bool DEFAULT abap_false
      options                 TYPE i DEFAULT co_compress_based_on_mime_type
      PREFERRED PARAMETER options.

  METHODS add_multipart
    IMPORTING
      suppress_content_length TYPE abap_bool DEFAULT abap_false
    RETURNING
      VALUE(entity) TYPE REF TO if_http_entity.

  METHODS append_cdata IMPORTING data TYPE clike.

  METHODS get_form_field IMPORTING name TYPE string RETURNING VALUE(value) TYPE string.

  METHODS get_cdata RETURNING VALUE(data) TYPE string.

  METHODS get_content_type
    RETURNING
      VALUE(content_type) TYPE string.

  METHODS get_serialized_message_length
    EXPORTING
      VALUE(body_length) TYPE i
      VALUE(header_length) TYPE i.

  METHODS set_content_type
    IMPORTING
      content_type TYPE string.

  METHODS get_data
    RETURNING
      VALUE(data) TYPE xstring.

  METHODS get_header_fields
    CHANGING
      fields TYPE tihttpnvp.

  METHODS to_xstring
    RETURNING
      VALUE(data) TYPE xstring.

  METHODS get_cookies
    CHANGING
      cookies TYPE any.

  METHODS add_cookie_field
    IMPORTING
      cookie_name TYPE string
      cookie_path TYPE string OPTIONAL
      field_name  TYPE string
      field_value TYPE string
      base64      TYPE i DEFAULT 1.

  METHODS append_cdata2
    IMPORTING
      data     TYPE string
      encoding TYPE i OPTIONAL
      offset   TYPE i OPTIONAL
      length   TYPE i OPTIONAL.

  METHODS append_data
    IMPORTING
      data   TYPE xstring
      offset TYPE i OPTIONAL
      length TYPE i OPTIONAL.

  METHODS delete_cookie_secure
    IMPORTING
      name TYPE string
      path TYPE string DEFAULT \`\`.

  METHODS delete_form_field
    IMPORTING
      name TYPE string.

  METHODS delete_form_field_secure
    IMPORTING
      name TYPE string.

  METHODS from_xstring
    IMPORTING
      data TYPE xstring.

  METHODS get_cookie
    IMPORTING
      name TYPE string
      path TYPE string DEFAULT \`\`
    EXPORTING
      value   TYPE string
      domain  TYPE string
      expires TYPE string
      secure  TYPE i.

  METHODS get_cookie_field
    IMPORTING
      cookie_name TYPE string
      cookie_path TYPE string OPTIONAL
      field_name  TYPE string
      base64      TYPE i DEFAULT 1
    RETURNING
      VALUE(field_value) TYPE string.

  METHODS get_data_length
    EXPORTING
      VALUE(data_length) TYPE i.

  METHODS get_form_fields_cs
    IMPORTING
      formfield_encoding TYPE i OPTIONAL
      search_option      TYPE i DEFAULT co_body_before_query_string
    CHANGING
      fields             TYPE tihttpnvp.

  METHODS get_form_field_cs
    IMPORTING
      name               TYPE string
      formfield_encoding TYPE i OPTIONAL
      search_option      TYPE i DEFAULT co_body_before_query_string
    RETURNING
      VALUE(value)       TYPE string.

  METHODS get_last_error
    RETURNING
      VALUE(rc) TYPE i.

  METHODS get_multipart
    IMPORTING
      index TYPE i
    RETURNING
      VALUE(entity) TYPE REF TO if_http_entity.

  METHODS get_version
    RETURNING
      VALUE(version) TYPE i.

  METHODS num_multiparts
    RETURNING
      VALUE(num) TYPE i.

  METHODS set_cookie
    IMPORTING
      name    TYPE string
      path    TYPE string OPTIONAL
      value   TYPE string
      domain  TYPE string OPTIONAL
      expires TYPE string OPTIONAL
      secure  TYPE i OPTIONAL.

  METHODS set_formfield_encoding
    IMPORTING
      formfield_encoding TYPE i.

  METHODS set_form_field
    IMPORTING
      name  TYPE string
      value TYPE string.

  METHODS set_form_fields
    IMPORTING
      fields     TYPE tihttpnvp
      multivalue TYPE int4 OPTIONAL.

  METHODS set_header_fields
    IMPORTING
      fields TYPE tihttpnvp.

  METHODS suppress_content_type
    IMPORTING
      suppress TYPE abap_bool DEFAULT abap_true.

  METHODS delete_cookie
    IMPORTING
      name TYPE string
      path TYPE string OPTIONAL.

  METHODS delete_header_field
    IMPORTING
      name TYPE string.

  METHODS delete_header_field_secure
    IMPORTING
      name TYPE string.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_EXTENSION                       ', 'INTERFACE if_http_extension PUBLIC.

  DATA flow_rc TYPE i.

  CONSTANTS co_flow_ok             TYPE i VALUE 0.
  CONSTANTS co_flow_ok_others_mand TYPE i VALUE 2.

  METHODS handle_request IMPORTING server TYPE REF TO if_http_server.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_REQUEST                         ', 'INTERFACE if_http_request PUBLIC.

  INTERFACES if_http_entity.

  ALIASES add_multipart FOR if_http_entity~add_multipart.
  ALIASES append_cdata FOR if_http_entity~append_cdata.
  ALIASES append_cdata2 FOR if_http_entity~append_cdata2.
  ALIASES append_data FOR if_http_entity~append_data.
  ALIASES co_protocol_version_1_0 FOR if_http_entity~co_protocol_version_1_0.
  ALIASES co_protocol_version_1_1 FOR if_http_entity~co_protocol_version_1_1.
  ALIASES co_request_method_get FOR if_http_entity~co_request_method_get.
  ALIASES co_request_method_post FOR if_http_entity~co_request_method_post.
  ALIASES get_cdata FOR if_http_entity~get_cdata.
  ALIASES get_content_type FOR if_http_entity~get_content_type.
  ALIASES get_cookie_field FOR if_http_entity~get_cookie_field.
  ALIASES get_cookies FOR if_http_entity~get_cookies.
  ALIASES get_data FOR if_http_entity~get_data.
  ALIASES get_form_field FOR if_http_entity~get_form_field.
  ALIASES get_form_fields FOR if_http_entity~get_form_fields.
  ALIASES get_form_fields_cs FOR if_http_entity~get_form_fields_cs.
  ALIASES get_header_field FOR if_http_entity~get_header_field.
  ALIASES get_header_fields FOR if_http_entity~get_header_fields.
  ALIASES get_last_error FOR if_http_entity~get_last_error.
  ALIASES get_multipart FOR if_http_entity~get_multipart.
  ALIASES num_multiparts FOR if_http_entity~num_multiparts.
  ALIASES set_cdata FOR if_http_entity~set_cdata.
  ALIASES set_compression FOR if_http_entity~set_compression.
  ALIASES set_content_type FOR if_http_entity~set_content_type.
  ALIASES set_cookie FOR if_http_entity~set_cookie.
  ALIASES set_data FOR if_http_entity~set_data.
  ALIASES set_form_field FOR if_http_entity~set_form_field.
  ALIASES set_form_fields FOR if_http_entity~set_form_fields.
  ALIASES set_header_field FOR if_http_entity~set_header_field.
  ALIASES set_header_fields FOR if_http_entity~set_header_fields.

  METHODS set_method
    IMPORTING
      method TYPE string.

  METHODS get_method
    RETURNING
      VALUE(meth) TYPE string.

  METHODS set_version
    IMPORTING
      version TYPE i.

  METHODS set_authorization
    IMPORTING
      auth_type TYPE i DEFAULT 1
      username  TYPE string
      password  TYPE string.

  METHODS copy
    RETURNING
      VALUE(request) TYPE REF TO if_http_request.

  METHODS get_authorization
    EXPORTING
      auth_type TYPE i
      username  TYPE string
      password  TYPE string.

  METHODS get_form_data
    IMPORTING
      name TYPE string
    CHANGING
      data TYPE data.

  METHODS get_raw_message
    RETURNING
      VALUE(data) TYPE xstring.

  METHODS get_uri_parameter
    IMPORTING
      name         TYPE string
    RETURNING
      VALUE(value) TYPE string.

  METHODS get_user_agent
    EXPORTING
      user_agent_type    TYPE i
      user_agent_version TYPE i.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_RESPONSE                        ', 'INTERFACE if_http_response PUBLIC.

  INTERFACES if_http_entity.

  ALIASES get_header_field FOR if_http_entity~get_header_field.
  ALIASES get_cdata FOR if_http_entity~get_cdata.
  ALIASES get_content_type FOR if_http_entity~get_content_type.
  ALIASES set_content_type FOR if_http_entity~set_content_type.
  ALIASES get_data FOR if_http_entity~get_data.
  ALIASES set_data FOR if_http_entity~set_data.
  ALIASES get_header_fields FOR if_http_entity~get_header_fields.
  ALIASES set_header_field FOR if_http_entity~set_header_field.
  ALIASES set_cdata FOR if_http_entity~set_cdata.
  ALIASES append_cdata FOR if_http_entity~append_cdata.
  ALIASES set_cookie FOR if_http_entity~set_cookie.
  ALIASES delete_header_field FOR if_http_entity~delete_header_field.
  ALIASES set_compression FOR if_http_entity~set_compression.
  ALIASES get_cookies FOR if_http_entity~get_cookies.

  METHODS get_status
    EXPORTING
      code   TYPE i
      reason TYPE string.

  METHODS set_status
    IMPORTING
      code   TYPE i
      reason TYPE string.

  METHODS delete_cookie_at_client
    IMPORTING
      name   TYPE string
      path   TYPE string OPTIONAL
      domain TYPE string OPTIONAL.

  METHODS redirect
    IMPORTING
      url                TYPE string
      permanently        TYPE i OPTIONAL
      explanation        TYPE string OPTIONAL
      protocol_dependent TYPE i OPTIONAL.

  METHODS copy
    RETURNING
      VALUE(response) TYPE REF TO if_http_response.

  METHODS get_raw_message
    RETURNING
      VALUE(data) TYPE xstring.

  METHODS server_cache_browser_dependent
    IMPORTING
      dependent TYPE boolean DEFAULT abap_true.

  METHODS server_cache_expire_abs
    IMPORTING
      expires_abs_date  TYPE d OPTIONAL
      expires_abs_time  TYPE t OPTIONAL
      etag              TYPE char32 OPTIONAL
      browser_dependent TYPE boolean DEFAULT abap_false
      no_ufo_cache      TYPE boolean DEFAULT abap_false.

  METHODS server_cache_expire_default
    IMPORTING
      etag              TYPE char32 OPTIONAL
      browser_dependent TYPE boolean DEFAULT abap_false
      no_ufo_cache      TYPE boolean DEFAULT abap_false.

  METHODS server_cache_expire_rel
    IMPORTING
      expires_rel       TYPE i
      etag              TYPE char32 OPTIONAL
      browser_dependent TYPE boolean DEFAULT abap_false
      no_ufo_cache      TYPE boolean DEFAULT abap_false.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_SERVER                          ', 'INTERFACE if_http_server PUBLIC.

  DATA response TYPE REF TO if_http_response.
  DATA request TYPE REF TO if_http_request.

  CONSTANTS authmethod_service             TYPE i VALUE 4.
  CONSTANTS co_compress_based_on_mime_type TYPE i VALUE 2.
  CONSTANTS co_disabled                    TYPE i VALUE 0.
  CONSTANTS co_enabled                     TYPE i VALUE 1.
  CONSTANTS co_page_error_type             TYPE c LENGTH 1 VALUE ''1''.
  CONSTANTS co_response_page_option        TYPE c LENGTH 1 VALUE '' ''.

  CLASS-DATA session_id TYPE string READ-ONLY.
  CLASS-DATA authentication_method TYPE i READ-ONLY.
  CLASS-DATA authenticated TYPE i READ-ONLY.

  METHODS logoff
    IMPORTING
      delete_mysapsso2_cookie TYPE abap_bool OPTIONAL
      propagate_logoff        TYPE abap_bool OPTIONAL
      redirect_url            TYPE string OPTIONAL.

  METHODS set_session_stateful
    IMPORTING
      stateful TYPE i DEFAULT co_enabled
      path     TYPE string OPTIONAL.

  CLASS-METHODS append_field_url
    IMPORTING
      name  TYPE string
      value TYPE string
    CHANGING
      url   TYPE string.

  METHODS create_abs_url
    IMPORTING
      protocol    TYPE string OPTIONAL
      post        TYPE string OPTIONAL
      port        TYPE string OPTIONAL
      path        TYPE string OPTIONAL
      querystring TYPE string OPTIONAL
    RETURNING
      VALUE(url) TYPE string.

  METHODS create_rel_url
    IMPORTING
      path        TYPE string OPTIONAL
      querystring TYPE string OPTIONAL
    RETURNING
      VALUE(url)  TYPE string.

  CLASS-METHODS decode_base64
    IMPORTING
      encoded        TYPE string
    RETURNING
      VALUE(decoded) TYPE string.

  METHODS enable_foreign_session_access
    IMPORTING
      url_path              TYPE string
      user_id               TYPE syuname OPTIONAL
      one_time_access_token TYPE abap_bool DEFAULT abap_true
    EXPORTING
      session_access_token  TYPE string
    EXCEPTIONS
      url_path_is_not_supported
      user_unknown
      session_is_not_stateful
      internal_error.

  CLASS-METHODS encode_base64
    IMPORTING
      unencoded TYPE string
    RETURNING
      VALUE(encoded) TYPE string.

  CLASS-METHODS escape_html
    IMPORTING
      unescaped TYPE string
    RETURNING
      VALUE(escaped) TYPE string.

  CLASS-METHODS escape_url
    IMPORTING
      unescaped TYPE string
    RETURNING
      VALUE(escaped) TYPE string.

  CLASS-METHODS get_extension_info
    IMPORTING
      extension_class TYPE string OPTIONAL
    EXPORTING
      urls TYPE string_table.

  CLASS-METHODS get_extension_url
    IMPORTING
      extension_class TYPE string
    EXPORTING
      urls TYPE string_table.

  METHODS get_last_error
    RETURNING
      VALUE(rc) TYPE i.

  CLASS-METHODS get_location
    IMPORTING
      protocol            TYPE csequence OPTIONAL
      application         TYPE csequence OPTIONAL
      for_domain          TYPE csequence OPTIONAL
      server              TYPE REF TO if_http_server OPTIONAL
      use_ticket_protocol TYPE abap_bool DEFAULT abap_true
    EXPORTING
      host TYPE string
      port TYPE string
      out_protocol TYPE string
      vh_switch TYPE abap_bool
    RETURNING
      VALUE(url_part) TYPE string.

  CLASS-METHODS get_location_exception
    IMPORTING
      protocol            TYPE csequence OPTIONAL
      application         TYPE csequence OPTIONAL
      for_domain          TYPE csequence OPTIONAL
      server              TYPE REF TO if_http_server OPTIONAL
      use_ticket_protocol TYPE abap_bool DEFAULT abap_true
    EXPORTING
      host                TYPE string
      port                TYPE string
      out_protocol        TYPE string
      vh_switch           TYPE abap_bool
    RETURNING
      VALUE(url_part)     TYPE string.

  METHODS get_xsrf_token
    EXPORTING
      token TYPE string
    EXCEPTIONS
      internal_error
      called_by_public_service.

  METHODS send_page.

  METHODS set_compression
    IMPORTING
      options TYPE i DEFAULT co_compress_based_on_mime_type
    EXCEPTIONS
      compression_not_possible.

  METHODS set_page
    IMPORTING
      response_page_type           TYPE char1 DEFAULT co_page_error_type
      response_option              TYPE char1 DEFAULT co_response_page_option
      response_option_page         TYPE any OPTIONAL
      response_option_redirect_url TYPE any OPTIONAL
    EXCEPTIONS
      invalid_parameter
      document_not_found.

  METHODS set_session_stateful_via_url
    IMPORTING
      stateful    TYPE i DEFAULT co_enabled
    CHANGING
      rewrite_url TYPE string OPTIONAL.

  CLASS-METHODS unescape_url
    IMPORTING
      escaped          TYPE string
    RETURNING
      VALUE(unescaped) TYPE string.

  METHODS validate_xsrf_token
    IMPORTING
      token      TYPE string OPTIONAL
    EXPORTING
      successful TYPE abap_bool
    EXCEPTIONS
      token_not_found
      cookie_not_found
      internal_error
      called_by_public_service.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_HTTP_UTILITY                         ', 'INTERFACE if_http_utility PUBLIC.

  CLASS-METHODS string_to_fields
    IMPORTING
      string             TYPE string
      ignore_parenthesis TYPE i DEFAULT 0
    RETURNING
      VALUE(fields)      TYPE tihttpnvp.

  CLASS-METHODS get_last_error
    RETURNING
      VALUE(rc) TYPE i.

  CLASS-METHODS unescape_url
    IMPORTING
      escaped          TYPE string
      options          TYPE i OPTIONAL
    RETURNING
      VALUE(unescaped) TYPE string.

  CLASS-METHODS escape_url
    IMPORTING
      unescaped      TYPE string
    RETURNING
      VALUE(escaped) TYPE string.

  CLASS-METHODS encode_base64
    IMPORTING
      unencoded TYPE string
    RETURNING
      VALUE(encoded) TYPE string.

  CLASS-METHODS fields_to_string
    IMPORTING
      fields TYPE tihttpnvp
    RETURNING
      VALUE(string) TYPE string.

  CLASS-METHODS decode_base64
    IMPORTING
      encoded        TYPE string
    RETURNING
      VALUE(decoded) TYPE string.

  CLASS-METHODS normalize_url
    IMPORTING
      unnormalized      TYPE string
    RETURNING
      VALUE(normalized) TYPE string.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_AMDP_MARKER_HDB                      ', 'INTERFACE if_amdp_marker_hdb PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SERIALIZABLE_OBJECT                  ', 'INTERFACE if_serializable_object PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_IXML                                 ', 'CLASS cl_ixml DEFINITION PUBLIC CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if_ixml.
    CLASS-METHODS
      create
        RETURNING
          VALUE(xml) TYPE REF TO if_ixml.
ENDCLASS.

CLASS cl_ixml IMPLEMENTATION.
  METHOD create.
    CREATE OBJECT xml TYPE cl_ixml.
  ENDMETHOD.

  METHOD if_ixml~create_encoding.
    CREATE OBJECT rval TYPE lcl_encoding.
  ENDMETHOD.

  METHOD if_ixml~create_document.
    CREATE OBJECT doc TYPE lcl_document.
  ENDMETHOD.

  METHOD if_ixml~create_stream_factory.
    CREATE OBJECT stream TYPE lcl_stream_factory.
  ENDMETHOD.

  METHOD if_ixml~create_renderer.
    CREATE OBJECT renderer TYPE lcl_renderer
      EXPORTING
        ostream  = ostream
        document = document.
  ENDMETHOD.

  METHOD if_ixml~create_parser.
    CREATE OBJECT parser TYPE lcl_parser
      EXPORTING
        istream  = istream
        document = document.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML                                 ', 'INTERFACE if_ixml PUBLIC.
  METHODS create_document
    RETURNING
      VALUE(doc) TYPE REF TO if_ixml_document.
  METHODS create_stream_factory
    RETURNING
      VALUE(stream) TYPE REF TO if_ixml_stream_factory.
  METHODS create_renderer
    IMPORTING
      ostream  TYPE REF TO if_ixml_ostream
      document TYPE REF TO if_ixml_document
    RETURNING
      VALUE(renderer) TYPE REF TO if_ixml_renderer.
  METHODS create_parser
    IMPORTING
      stream_factory  TYPE REF TO if_ixml_stream_factory
      istream  TYPE REF TO if_ixml_istream
      document TYPE REF TO if_ixml_document
    RETURNING
      VALUE(parser) TYPE REF TO if_ixml_parser.
  METHODS create_encoding
    IMPORTING
      byte_order    TYPE i
      character_set TYPE string
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_encoding.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_ATTRIBUTE                       ', 'INTERFACE if_ixml_attribute PUBLIC.
  INTERFACES if_ixml_node.
  METHODS get_value RETURNING VALUE(val) TYPE string.
  METHODS set_value IMPORTING value TYPE string.
  METHODS get_name RETURNING VALUE(val) TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_DOCUMENT                        ', 'INTERFACE if_ixml_document PUBLIC.
  INTERFACES if_ixml_node.

  ALIASES create_filter_name_ns FOR if_ixml_node~create_filter_name_ns.

  METHODS:
    set_encoding
      IMPORTING
        encoding TYPE REF TO object,
    set_standalone
      IMPORTING
        standalone TYPE abap_bool,
    get_standalone
      RETURNING
        VALUE(rval) TYPE abap_bool,
    set_namespace_prefix
      IMPORTING
        prefix TYPE string,
    append_child
      IMPORTING
        new_child TYPE REF TO if_ixml_node,
    get_first_child
      RETURNING
        VALUE(child) TYPE REF TO if_ixml_node,
    create_attribute_ns
      IMPORTING
        name TYPE string
        prefix TYPE string OPTIONAL
      RETURNING
        VALUE(element) TYPE REF TO if_ixml_attribute,
    create_element_ns
      IMPORTING
        name   TYPE string
        prefix TYPE string OPTIONAL
        uri    TYPE string OPTIONAL
      RETURNING
        VALUE(element) TYPE REF TO if_ixml_element,
    create_element
      IMPORTING
        name TYPE string
      RETURNING
        VALUE(element) TYPE REF TO if_ixml_element,
    create_iterator_filtered
      IMPORTING filter TYPE any
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_iterator,
    create_filter_and
      IMPORTING
        filter1 TYPE any
        filter2 TYPE any
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node_filter,
    create_iterator
      RETURNING VALUE(rval) TYPE REF TO if_ixml_node_iterator,
    create_filter_node_type
      IMPORTING node_types TYPE i
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_filter,
    create_simple_element_ns
      IMPORTING
        name       TYPE string
        parent     TYPE REF TO if_ixml_node
        prefix     TYPE string OPTIONAL
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_element,
    create_filter_attribute
      IMPORTING
        name       TYPE string
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node_filter,
    create_simple_element
      IMPORTING
        name       TYPE string
        parent     TYPE REF TO if_ixml_node
        value      TYPE string OPTIONAL
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_element,
    find_from_name
      IMPORTING
        name      TYPE string
        depth     TYPE i OPTIONAL
        namespace TYPE string OPTIONAL
      RETURNING
        VALUE(element) TYPE REF TO if_ixml_element,
    find_from_name_ns
      IMPORTING
        depth TYPE i OPTIONAL
        uri   TYPE string OPTIONAL
        name  TYPE string
      RETURNING
        VALUE(element) TYPE REF TO if_ixml_element,
    find_from_path
      IMPORTING
        path TYPE string
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_element,
    get_elements_by_tag_name_ns
      IMPORTING
        name TYPE string
        namespace TYPE string OPTIONAL
        uri TYPE string OPTIONAL
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_collection,
    get_elements_by_tag_name
      IMPORTING
        depth     TYPE i OPTIONAL
        name      TYPE string
        namespace TYPE string OPTIONAL
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_collection,
    get_root RETURNING VALUE(node) TYPE REF TO if_ixml_node,
    get_root_element RETURNING VALUE(root) TYPE REF TO if_ixml_element.

  METHODS set_declaration
    IMPORTING
      declaration TYPE abap_bool.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_ELEMENT                         ', 'INTERFACE if_ixml_element PUBLIC.
  INTERFACES if_ixml_node.

  METHODS:
    remove_attribute_ns
      IMPORTING foo TYPE string,
    get_attributes
      RETURNING VALUE(attr) TYPE REF TO if_ixml_named_node_map,
    get_next
      RETURNING VALUE(next) TYPE REF TO if_ixml_element,
    get_name
      RETURNING VALUE(name) TYPE string,
    append_child
      IMPORTING
        new_child TYPE REF TO if_ixml_node
      RETURNING
        VALUE(rc) TYPE i,
    clone
      RETURNING VALUE(val) TYPE REF TO if_ixml_node,
    create_filter_node_type
      IMPORTING node_types TYPE i
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_filter,
    create_iterator
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_iterator,
    find_from_name_ns
      IMPORTING
        name      TYPE string
        namespace TYPE string OPTIONAL
        uri       TYPE string OPTIONAL
        depth     TYPE i OPTIONAL
      RETURNING VALUE(val) TYPE REF TO if_ixml_element,
    find_from_name
      IMPORTING
        name      TYPE string
        namespace TYPE string OPTIONAL
        depth     TYPE i OPTIONAL
      RETURNING VALUE(val) TYPE REF TO if_ixml_element,
    get_attribute_node
      IMPORTING name TYPE string
      RETURNING VALUE(val) TYPE REF TO if_ixml_attribute,
    get_attribute_ns
      IMPORTING
        name TYPE string
        uri TYPE string OPTIONAL
      RETURNING
        VALUE(val) TYPE string,
    get_attribute
      IMPORTING
        name TYPE string
        namespace TYPE string OPTIONAL
      RETURNING VALUE(val) TYPE string,
    get_children
      RETURNING VALUE(val) TYPE REF TO if_ixml_node_list,
    get_elements_by_tag_name
      IMPORTING
        name TYPE string
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node_collection,
    get_elements_by_tag_name_ns
      IMPORTING
        name TYPE string
        uri  TYPE string OPTIONAL
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node_collection,
    get_attribute_node_ns
        IMPORTING
        name TYPE string
        uri  TYPE string OPTIONAL
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_attribute,
    get_first_child
      RETURNING VALUE(val) TYPE REF TO if_ixml_node,
    get_value
      RETURNING VALUE(val) TYPE string,
    remove_attribute
      IMPORTING name TYPE string,
    remove_node,
    render
      IMPORTING
        ostream TYPE REF TO if_ixml_ostream,
    set_attribute_node_ns
      IMPORTING
        attr TYPE any,
    set_attribute
      IMPORTING
        name        TYPE string
        namespace   TYPE string OPTIONAL
        value       TYPE string OPTIONAL
      RETURNING
        VALUE(rval) TYPE i,
    set_attribute_ns
      IMPORTING
        name   TYPE string
        prefix TYPE string OPTIONAL
        value  TYPE string OPTIONAL,
    set_value
      IMPORTING
        value TYPE string
      RETURNING
        VALUE(rc) TYPE i.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_ENCODING                        ', 'INTERFACE if_ixml_encoding PUBLIC.
  CONSTANTS co_none            TYPE i VALUE 0.
  CONSTANTS co_big_endian      TYPE i VALUE 1.
  CONSTANTS co_platform_endian TYPE i VALUE 4.

  METHODS get_byte_order
    RETURNING
      VALUE(rval) TYPE i.

  METHODS get_character_set
    RETURNING
      VALUE(rval) TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_ISTREAM                         ', 'INTERFACE if_ixml_istream PUBLIC.
  CONSTANTS dtd_allowed    TYPE i VALUE 0.
  CONSTANTS dtd_restricted TYPE i VALUE 1.
  CONSTANTS dtd_prohibited TYPE i VALUE 2.

  METHODS close.

  METHODS get_dtd_restriction
    RETURNING
      VALUE(rval) TYPE i.

  METHODS set_dtd_restriction
    IMPORTING
      level TYPE i DEFAULT dtd_restricted.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NAMED_NODE_MAP                  ', 'INTERFACE if_ixml_named_node_map PUBLIC.
  METHODS:
    create_iterator
      RETURNING VALUE(iterator) TYPE REF TO if_ixml_node_iterator,
    get_length
      RETURNING VALUE(val) TYPE i,
    get_named_item_ns
      IMPORTING name TYPE string
      RETURNING VALUE(val) TYPE REF TO if_ixml_node,
    get_named_item
      IMPORTING name TYPE string
      RETURNING VALUE(val) TYPE REF TO if_ixml_node,
    set_named_item_ns
      IMPORTING node TYPE REF TO if_ixml_node,
    remove_named_item
      IMPORTING name TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NODE                            ', 'INTERFACE if_ixml_node PUBLIC.
  CONSTANTS:
    co_node_document      TYPE i VALUE 1,
    co_node_element       TYPE i VALUE 4,
    co_node_text          TYPE i VALUE 16,
    co_node_cdata_section TYPE i VALUE 32.

  METHODS:
    append_child IMPORTING new_child TYPE REF TO if_ixml_node,
    get_attributes RETURNING VALUE(map) TYPE REF TO if_ixml_named_node_map,
    get_first_child RETURNING VALUE(node) TYPE REF TO if_ixml_node,
    get_children RETURNING VALUE(val) TYPE REF TO if_ixml_node_list,
    query_interface
      IMPORTING iid         TYPE i
      RETURNING VALUE(rval) TYPE REF TO if_ixml_unknown,
    remove_node,
    get_parent RETURNING VALUE(val) TYPE REF TO if_ixml_node,
    replace_child IMPORTING
      new_child TYPE string
      old_child TYPE string,
    get_name RETURNING VALUE(val) TYPE string,
    get_depth RETURNING VALUE(val) TYPE i,
    is_leaf RETURNING VALUE(val) TYPE abap_bool,
    get_namespace RETURNING VALUE(val) TYPE string,
    get_value RETURNING VALUE(val) TYPE string,
    get_type RETURNING VALUE(val) TYPE string,
    set_name IMPORTING name TYPE string,
    set_namespace_prefix IMPORTING val TYPE string,
    remove_child IMPORTING child TYPE REF TO if_ixml_node,
    set_value IMPORTING value TYPE string.

  METHODS get_gid
    RETURNING
      VALUE(rval) TYPE i.

  METHODS insert_child
    IMPORTING
      new_child   TYPE REF TO if_ixml_node
      ref_child   TYPE REF TO if_ixml_node
    RETURNING
      VALUE(rval) TYPE i.

  METHODS get_next
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node.

  METHODS get_namespace_prefix
    RETURNING
      VALUE(rv_prefix) TYPE string.

  METHODS get_namespace_uri
    RETURNING
      VALUE(rval) TYPE string.

  METHODS get_height
    RETURNING
      VALUE(rval) TYPE i.

  METHODS create_filter_name_ns
    IMPORTING
      name        TYPE string
      namespace   TYPE string OPTIONAL
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node_filter.

  METHODS get_column
    RETURNING
      VALUE(rval) TYPE i.

  METHODS create_iterator_filtered
    IMPORTING
      filter      TYPE REF TO if_ixml_node_filter
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node_iterator.

  METHODS clone
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NODE_COLLECTION                 ', 'INTERFACE if_ixml_node_collection PUBLIC.
  METHODS create_iterator
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node_iterator.

  METHODS get_length
    RETURNING
      VALUE(rval) TYPE i.

  METHODS get_item
    IMPORTING
      index       TYPE i
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NODE_FILTER                     ', 'INTERFACE if_ixml_node_filter PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NODE_ITERATOR                   ', 'INTERFACE if_ixml_node_iterator PUBLIC.

  METHODS reset.

  METHODS get_next
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_node.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_NODE_LIST                       ', 'INTERFACE if_ixml_node_list PUBLIC.

  METHODS:
    get_length
      RETURNING
        VALUE(length) TYPE i,
    create_iterator
      RETURNING VALUE(rval) TYPE REF TO if_ixml_node_iterator,
    get_item
      IMPORTING
        index TYPE i
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node,
    create_rev_iterator_filtered
      IMPORTING
        filter TYPE any
      RETURNING
        VALUE(val) TYPE REF TO if_ixml_node_iterator.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_OSTREAM                         ', 'INTERFACE if_ixml_ostream PUBLIC.
  METHODS write_string
    IMPORTING
      string      TYPE string
    RETURNING
      VALUE(rval) TYPE i.

  METHODS get_num_written_raw
    RETURNING
      VALUE(rval) TYPE i.

  METHODS set_encoding
    IMPORTING
      encoding    TYPE REF TO if_ixml_encoding
    RETURNING
      VALUE(rval) TYPE boolean.

  METHODS set_pretty_print
    IMPORTING
      pretty_print TYPE abap_bool DEFAULT abap_true.

  METHODS get_pretty_print
    RETURNING
      VALUE(rval) TYPE boolean.

  METHODS get_indent
    RETURNING
      VALUE(rval) TYPE i.

  METHODS set_indent
    IMPORTING
      indent TYPE i.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_PARSE_ERROR                     ', 'INTERFACE if_ixml_parse_error PUBLIC.
  METHODS get_reason
    RETURNING
      VALUE(reason) TYPE string.
  METHODS get_line
    RETURNING
      VALUE(line) TYPE i.
  METHODS get_column
    RETURNING
      VALUE(column) TYPE i.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_PARSER                          ', 'INTERFACE if_ixml_parser PUBLIC.
  CONSTANTS co_no_validation   TYPE i VALUE 0.
  CONSTANTS co_validate_if_dtd TYPE i VALUE 2.

  METHODS parse
    RETURNING
      VALUE(subrc) TYPE i.
  METHODS set_normalizing
    IMPORTING
      normal TYPE abap_bool.
  METHODS num_errors
    RETURNING
      VALUE(errors) TYPE i.
  METHODS add_strip_space_element.
  METHODS get_error
    IMPORTING
      index TYPE i
    RETURNING
      VALUE(error) TYPE REF TO if_ixml_parse_error.
  METHODS set_validating
    IMPORTING
      mode TYPE i OPTIONAL
    RETURNING
      VALUE(rval) TYPE abap_bool.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_RENDERER                        ', 'INTERFACE if_ixml_renderer PUBLIC.
  METHODS render RETURNING VALUE(rval) TYPE i.
  METHODS set_normalizing IMPORTING normal TYPE abap_bool.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_STREAM_FACTORY                  ', 'INTERFACE if_ixml_stream_factory PUBLIC.
  METHODS create_ostream_cstring
    IMPORTING
      string        TYPE string
    RETURNING
      VALUE(stream) TYPE REF TO if_ixml_ostream.

  METHODS create_ostream_xstring
    IMPORTING
      string        TYPE xstring
    RETURNING
      VALUE(stream) TYPE REF TO if_ixml_ostream.

  METHODS create_istream_string
    IMPORTING
      string        TYPE string
    RETURNING
      VALUE(stream) TYPE REF TO if_ixml_istream.

  METHODS create_istream_xstring
    IMPORTING
      string        TYPE xstring
    RETURNING
      VALUE(stream) TYPE REF TO if_ixml_istream.

  METHODS create_ostream_itable
    IMPORTING
      table       TYPE table
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_ostream.

  METHODS create_istream_cstring
    IMPORTING
      string TYPE string
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_istream.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_IXML_UNKNOWN                         ', 'INTERFACE if_ixml_unknown PUBLIC.
  METHODS query_interface
    IMPORTING
      iid         TYPE i
    RETURNING
      VALUE(rval) TYPE REF TO if_ixml_unknown.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('/UI2/CL_JSON                            ', 'CLASS /ui2/cl_json DEFINITION PUBLIC.
  PUBLIC SECTION.

    TYPES pretty_name_mode TYPE string.

    CONSTANTS: BEGIN OF pretty_mode,
                 none       TYPE string VALUE '''',
                 low_case   TYPE string VALUE ''low_case'',
                 camel_case TYPE string VALUE ''camel_case'',
               END OF pretty_mode.

    TYPES tribool TYPE c LENGTH 1.

    CLASS-METHODS deserialize
      IMPORTING
        json             TYPE string OPTIONAL
        jsonx            TYPE xstring OPTIONAL
        pretty_name      TYPE string OPTIONAL
        assoc_arrays     TYPE abap_bool OPTIONAL
        assoc_arrays_opt TYPE abap_bool OPTIONAL
      CHANGING
        data             TYPE data.

    CLASS-METHODS serialize
      IMPORTING
        data          TYPE data
        compress      TYPE abap_bool OPTIONAL
        pretty_name   TYPE string OPTIONAL
        assoc_arrays  TYPE abap_bool OPTIONAL
        ts_as_iso8601 TYPE abap_bool OPTIONAL
        type_descr    TYPE REF TO cl_abap_typedescr OPTIONAL
        format_output TYPE abap_bool OPTIONAL
      RETURNING
        VALUE(r_json) TYPE string.

    CLASS-METHODS generate
      IMPORTING
        json        TYPE string
        pretty_name TYPE string OPTIONAL
      RETURNING
        VALUE(rr_data) TYPE REF TO data.

    METHODS serialize_int
      IMPORTING
        data          TYPE data
        type_descr    TYPE REF TO cl_abap_typedescr OPTIONAL
      RETURNING
        VALUE(r_json) TYPE string.

    METHODS constructor
      IMPORTING
        compress TYPE abap_bool DEFAULT abap_false
        pretty_name TYPE pretty_name_mode DEFAULT pretty_mode-none
        assoc_arrays TYPE abap_bool DEFAULT abap_false
        ts_as_iso8601 TYPE abap_bool DEFAULT abap_false.

  PROTECTED SECTION.

    DATA mv_compress TYPE abap_bool.
    DATA mv_pretty_name TYPE string.
    DATA mv_assoc_arrays TYPE abap_bool.
    DATA mv_ts_as_iso8601 TYPE abap_bool.
    DATA mv_extended TYPE abap_bool.

    METHODS is_compressable
      IMPORTING
        type_descr TYPE REF TO cl_abap_typedescr
        name       TYPE string
      RETURNING
      VALUE(rv_compress) TYPE abap_bool.

  PRIVATE SECTION.
    CLASS-DATA mo_parsed TYPE REF TO lcl_parser.
    CLASS-METHODS _deserialize
      IMPORTING
        VALUE(prefix) TYPE string
        pretty_name   TYPE string OPTIONAL
        io_type       TYPE REF TO cl_abap_typedescr
      CHANGING
        data          TYPE data.
ENDCLASS.

CLASS /ui2/cl_json IMPLEMENTATION.

  METHOD serialize_int.

    DATA lo_type       TYPE REF TO cl_abap_typedescr.
    DATA lo_struct     TYPE REF TO cl_abap_structdescr.
    DATA lo_table      TYPE REF TO cl_abap_tabledescr.
    DATA lt_components TYPE cl_abap_structdescr=>component_table.
    DATA ref           TYPE REF TO data.
    DATA lv_index      TYPE i.

    FIELD-SYMBOLS <ls_component> LIKE LINE OF lt_components.
    FIELD-SYMBOLS <any> TYPE any.
    FIELD-SYMBOLS <tab> TYPE ANY TABLE.

    IF type_descr IS INITIAL.
      lo_type = cl_abap_typedescr=>describe_by_data( data ).
    ELSE.
      lo_type = type_descr.
    ENDIF.

    CASE lo_type->kind.
      WHEN cl_abap_typedescr=>kind_elem.
*        WRITE ''@KERNEL console.dir(lo_type);''.
        CASE lo_type->type_kind.
          WHEN cl_abap_typedescr=>typekind_char.
            IF lo_type->absolute_name = \`\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL\`.
              IF data = abap_true.
                r_json = ''true''.
              ELSE.
                r_json = ''false''.
              ENDIF.
            ELSEIF data IS INITIAL.
              r_json = ''""''.
            ELSE.
              r_json = ''"'' && escape( val = |{ data }| format = cl_abap_format=>e_json_string )  && ''"''.
            ENDIF.
          WHEN cl_abap_typedescr=>typekind_string.
            r_json = ''"'' && escape( val = data format = cl_abap_format=>e_json_string ) && ''"''.
          WHEN cl_abap_typedescr=>typekind_int.
            r_json = |{ data }|.
          WHEN cl_abap_typedescr=>typekind_num.
            IF data = 0.
              r_json = |0|.
            ELSE.
              r_json = |{ data }|.
              SHIFT r_json LEFT DELETING LEADING ''0''.
            ENDIF.
          WHEN cl_abap_typedescr=>typekind_packed.
            IF mv_ts_as_iso8601 = abap_true
                AND ( lo_type->absolute_name = \`\\TYPE=TIMESTAMP\`
                OR lo_type->absolute_name = \`\\TYPE=TIMESTAMPL\` ).
              IF data IS INITIAL.
                r_json = |""|.
              ELSE.
                r_json = |"{ data TIMESTAMP = ISO }.0000000Z"|.
              ENDIF.
            ELSE.
              r_json = |{ data }|.
            ENDIF.
          WHEN cl_abap_typedescr=>typekind_date.
            r_json = |"{ data DATE = ISO }"|.
          WHEN cl_abap_typedescr=>typekind_time.
            r_json = |"{ data TIME = ISO }"|.
          WHEN OTHERS.
            r_json = data.
        ENDCASE.
      WHEN cl_abap_typedescr=>kind_table.
        r_json = ''[''.
        ASSIGN data TO <tab>.
        lo_table ?= lo_type.
        LOOP AT <tab> ASSIGNING <any>.
          lv_index = sy-tabix.
          r_json = r_json && serialize_int(
            data       = <any>
            type_descr = lo_table->get_table_line_type( ) ).

          IF lines( <tab> ) <> lv_index.
            r_json = r_json && '',''.
          ENDIF.
        ENDLOOP.
        r_json = r_json && '']''.
      WHEN cl_abap_typedescr=>kind_struct.
        lo_struct ?= lo_type.
        lt_components = lo_struct->get_components( ).
        r_json = ''{''.
        LOOP AT lt_components ASSIGNING <ls_component>.
          ASSIGN COMPONENT <ls_component>-name OF STRUCTURE data TO <any>.
          ASSERT sy-subrc = 0.
          IF mv_compress = abap_true AND <any> IS INITIAL.
            CONTINUE.
          ENDIF.
          IF mv_pretty_name = pretty_mode-camel_case.
            r_json = r_json && |"{ to_mixed( to_lower( <ls_component>-name ) ) }":|.
          ELSEIF mv_pretty_name = pretty_mode-low_case.
            r_json = r_json && |"{ to_lower( <ls_component>-name ) }":|.
          ELSE.
            r_json = r_json && |"{ <ls_component>-name }":|.
          ENDIF.
          r_json = r_json && serialize_int(
            data       = <any>
            type_descr = <ls_component>-type ).
          r_json = r_json && '',''.
        ENDLOOP.
        IF r_json CP ''*,''.
          r_json = substring( val = r_json off = 0 len = strlen( r_json ) - 1 ).
        ENDIF.
        r_json = r_json && ''}''.
      WHEN cl_abap_typedescr=>kind_ref.
        IF data IS INITIAL.
          r_json = ''null''.
          RETURN.
        ENDIF.
        ASSIGN data->* TO <any>.
        r_json = serialize_int( data = <any> ).
      WHEN OTHERS.
        ASSERT 1 = ''cl_json, unknown kind''.
    ENDCASE.
  ENDMETHOD.

  METHOD deserialize.

    DATA lo_type TYPE REF TO cl_abap_typedescr.

    CREATE OBJECT mo_parsed.

    IF jsonx IS NOT INITIAL.
      mo_parsed->parse( cl_abap_codepage=>convert_from( jsonx ) ).
    ELSEIF json IS INITIAL.
      RETURN.
    ELSE.
      mo_parsed->parse( json ).
    ENDIF.

* todo, this should take the "pretty_name" into account
    mo_parsed->adjust_names( ).

    lo_type = cl_abap_typedescr=>describe_by_data( data ).

    _deserialize(
      EXPORTING
        prefix      = ''''
        pretty_name = pretty_name
        io_type     = lo_type
      CHANGING
        data        = data ).

  ENDMETHOD.

  METHOD constructor.

    DATA rtti TYPE REF TO cl_abap_classdescr.

    mv_compress       = compress.
    mv_pretty_name    = pretty_name.
    mv_assoc_arrays   = assoc_arrays.
    mv_ts_as_iso8601  = ts_as_iso8601.

*  rtti ?= cl_abap_classdescr=>describe_by_object_ref( me ).
*  IF rtti->absolute_name NE mc_me_type.
*    mv_extended = abap_true.
*  ENDIF.

  ENDMETHOD.

  METHOD is_compressable.
    rv_compress = abap_true.
  ENDMETHOD.

  METHOD generate.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD serialize.

    DATA lo_json  TYPE REF TO /ui2/cl_json.

    ASSERT format_output IS INITIAL.

    CREATE OBJECT lo_json
      EXPORTING
        compress      = compress
        pretty_name   = pretty_name
        assoc_arrays  = assoc_arrays
        ts_as_iso8601 = ts_as_iso8601.

    r_json = lo_json->serialize_int(
      data       = data
      type_descr = type_descr ).

  ENDMETHOD.

  METHOD _deserialize.
    DATA lo_struct     TYPE REF TO cl_abap_structdescr.
    DATA lo_table      TYPE REF TO cl_abap_tabledescr.
    DATA lo_refdescr   TYPE REF TO cl_abap_refdescr.
    DATA lt_components TYPE cl_abap_structdescr=>component_table.
    DATA ls_component  LIKE LINE OF lt_components.
    DATA lt_members    TYPE string_table.
    DATA ref           TYPE REF TO data.
    DATA lv_name       TYPE string.
    DATA lv_type       TYPE string.
    DATA lv_value      TYPE string.
    DATA lv_member     LIKE LINE OF lt_members.

    FIELD-SYMBOLS <any> TYPE any.
    FIELD-SYMBOLS <at> TYPE ANY TABLE.
    FIELD-SYMBOLS <ls_component> LIKE LINE OF lt_components.

    prefix = mo_parsed->find_ignore_case( prefix ).

*    WRITE ''@KERNEL console.dir(lo_type.get());''.
    CASE io_type->kind.
      WHEN cl_abap_typedescr=>kind_elem.
*        WRITE ''@KERNEL console.dir(lo_type.get().absolute_name);''.
        IF io_type->absolute_name = ''\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL''
            OR io_type->absolute_name = ''\\TYPE=ABAP_BOOLEAN''
            OR io_type->absolute_name = ''\\TYPE=FLAG''.
          data = boolc( mo_parsed->value_string( prefix ) = ''true'' ).
        ELSEIF io_type->absolute_name = \`\\TYPE=TIMESTAMP\`
            OR io_type->absolute_name = \`\\TYPE=TIMESTAMPL\`.
          lv_value = mo_parsed->value_string( prefix ).
          REPLACE ALL OCCURRENCES OF ''-'' IN lv_value WITH ''''.
          REPLACE ALL OCCURRENCES OF ''T'' IN lv_value WITH ''''.
          REPLACE ALL OCCURRENCES OF '':'' IN lv_value WITH ''''.
          REPLACE ALL OCCURRENCES OF ''Z'' IN lv_value WITH ''''.
          data = lv_value.
        ELSEIF io_type->type_kind = cl_abap_typedescr=>typekind_date.
          lv_value = mo_parsed->value_string( prefix ).
          REPLACE ALL OCCURRENCES OF ''-'' IN lv_value WITH ''''.
          IF lv_value CO space.
            CLEAR data.
          ELSE.
            data = lv_value.
          ENDIF.
        ELSEIF io_type->type_kind = cl_abap_typedescr=>typekind_time.
          lv_value = mo_parsed->value_string( prefix ).
          REPLACE ALL OCCURRENCES OF '':'' IN lv_value WITH ''''.
          IF lv_value CO space.
            CLEAR data.
          ELSE.
            data = lv_value.
          ENDIF.
        ELSE.
          data = mo_parsed->value_string( prefix ).
        ENDIF.
      WHEN cl_abap_typedescr=>kind_table.
        lo_table ?= io_type.
        lt_members = mo_parsed->members( prefix && ''/'' ).
        ASSIGN data TO <at>.
        LOOP AT lt_members INTO lv_member.
*          WRITE ''@KERNEL console.dir(lv_member.get());''.
          CREATE DATA ref LIKE LINE OF data.
          ASSIGN ref->* TO <any>.
          _deserialize(
            EXPORTING
              prefix      = prefix && ''/'' && lv_member
              pretty_name = pretty_name
              io_type     = lo_table->get_table_line_type( )
            CHANGING
              data        = <any> ).
*          WRITE ''@KERNEL console.dir(fs_row_);''.
          INSERT <any> INTO TABLE <at>.
        ENDLOOP.
      WHEN cl_abap_typedescr=>kind_struct.
        lo_struct ?= io_type.
        lt_components = lo_struct->get_components( ).
        LOOP AT lt_components ASSIGNING <ls_component>.
          ASSIGN COMPONENT <ls_component>-name OF STRUCTURE data TO <any>.
          ASSERT sy-subrc = 0.
          CASE pretty_name.
            WHEN pretty_mode-camel_case.
              lv_name = to_mixed( to_lower( <ls_component>-name ) ).
            WHEN OTHERS.
              lv_name = to_lower( <ls_component>-name ).
          ENDCASE.
          " WRITE ''@KERNEL console.dir("structure: " + lv_name.get());''.
          _deserialize(
            EXPORTING
              prefix      = prefix && ''/'' && lv_name
              pretty_name = pretty_name
              io_type     = <ls_component>-type
            CHANGING
              data        = <any> ).
        ENDLOOP.
      WHEN cl_abap_typedescr=>kind_ref.
        lo_refdescr ?= io_type.
        IF data IS INITIAL.
          lt_members = mo_parsed->members( prefix && ''/'' ).

*          WRITE ''@KERNEL console.dir(prefix.get());''.
          IF lines( lt_members ) = 0 AND prefix = ''''.
            RETURN.
          ENDIF.

          lv_type = mo_parsed->get_type( prefix && ''/'' ).
          IF lv_type IS INITIAL.
            lv_type = mo_parsed->get_type( prefix ).
          ENDIF.
*          WRITE ''@KERNEL console.dir("type: " + lv_type.get());''.

          IF lines( lt_members ) > 0 AND lv_type = ''object''.
            CLEAR lt_components.
            LOOP AT lt_members INTO lv_member.
*              WRITE ''@KERNEL console.dir("component: " + lv_member.get());''.
              CLEAR ls_component.
              ls_component-name = to_upper( lv_member ).
              TRANSLATE ls_component-name USING ''-_''.
              ls_component-type = cl_abap_refdescr=>get_ref_to_data( ).
              ASSERT ls_component-name IS NOT INITIAL.
              APPEND ls_component TO lt_components.
            ENDLOOP.
            lo_struct = cl_abap_structdescr=>create( lt_components ).
            CREATE DATA data TYPE HANDLE lo_struct.
          ELSEIF lv_type = ''array''.
            lo_table = cl_abap_tabledescr=>create( cl_abap_refdescr=>get_ref_to_data( ) ).
            CREATE DATA data TYPE HANDLE lo_table.
          ELSE.
            CASE lv_type.
              WHEN ''num''.
                lv_value = mo_parsed->value_string( prefix ).
                IF lv_value CO ''-0123456789''.
                  CREATE DATA data TYPE i.
                ELSEIF lv_value CO ''-0123456789.''.
                  CREATE DATA data TYPE f.
                ELSE.
                  ASSERT 1 = ''todo''.
                ENDIF.
              WHEN ''bool''.
                CREATE DATA data TYPE HANDLE cl_abap_typedescr=>describe_by_name( ''ABAP_BOOL'' ).
              WHEN ''str''.
                CREATE DATA data TYPE HANDLE cl_abap_elemdescr=>get_string( ).
              " WHEN OTHERS.
              "   ASSERT 1 = ''todo''.
            ENDCASE.
          ENDIF.
        ENDIF.
        ASSIGN data->* TO <any>.
* todo: optimize, it should not be nessesary to call cl_abap_typedescr
        _deserialize(
          EXPORTING
            prefix      = prefix
            pretty_name = pretty_name
            io_type     = cl_abap_typedescr=>describe_by_data( <any> )
          CHANGING
            data        = <any> ).
      WHEN OTHERS.
        ASSERT 1 = ''cl_json, unknown kind''.
    ENDCASE.
  ENDMETHOD.

ENDCLASS.
');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_CALL_TRANSFORMATION              ', 'CLASS kernel_call_transformation DEFINITION PUBLIC.
* handling of ABAP statement CALL TRANSFORMATION
  PUBLIC SECTION.
    TYPES: BEGIN OF ty_options,
             initial_components TYPE string,
           END OF ty_options.

    CONSTANTS: BEGIN OF gc_options,
                 suppress TYPE string VALUE ''suppress'',
               END OF gc_options.

    CLASS-METHODS call
      IMPORTING
        name    TYPE any
        options TYPE any.
  PRIVATE SECTION.
    CLASS-DATA mi_doc     TYPE REF TO if_ixml_document.
    CLASS-DATA ms_options TYPE ty_options.

    CLASS-METHODS parse_xml
      IMPORTING
        iv_xml TYPE string.

    CLASS-METHODS parse_options
      IMPORTING options TYPE any.
ENDCLASS.

CLASS kernel_call_transformation IMPLEMENTATION.

  METHOD call.
* first convert SOURCE to internal format stored in "MI_DOC"?
* then output to RESULT

    DATA lv_name   TYPE string.
    DATA lv_source TYPE string.
    DATA lv_result TYPE string.
    DATA result    TYPE REF TO data.
    DATA lt_rtab   TYPE abap_trans_resbind_tab.
    DATA ls_rtab   LIKE LINE OF lt_rtab.
    DATA lv_type   TYPE string.
    DATA lv_dummy  TYPE string.
    DATA li_writer TYPE REF TO if_sxml_writer.
    DATA li_doc    TYPE REF TO if_ixml_document.


    CLEAR mi_doc.

*    WRITE ''@KERNEL console.dir(INPUT);''.

* only the ID transformation is implemented
    WRITE ''@KERNEL lv_name.set(INPUT.name.toUpperCase());''.
    ASSERT lv_name = ''ID''.

    parse_options( options ).

* Handle input SOURCE
    WRITE ''@KERNEL if (INPUT.sourceXML?.constructor.name === "ABAPObject") this.mi_doc.set(INPUT.sourceXML);''.
    WRITE ''@KERNEL if (INPUT.sourceXML?.constructor.name === "String") lv_source.set(INPUT.sourceXML);''.
    IF lv_source IS NOT INITIAL.
      IF lv_source(1) = ''<''.
        lv_type = ''XML''.
        parse_xml( lv_source ).
      ELSEIF lv_source(1) = ''{'' OR lv_source(1) = ''[''.
        lv_type = ''JSON''.
        mi_doc = kernel_json_to_ixml=>build( lv_source ).
      ELSE.
        RAISE EXCEPTION TYPE cx_xslt_format_error.
      ENDIF.
    ENDIF.

* input = object, output = ixml_document
    WRITE ''@KERNEL if (typeof INPUT.source === "object"''.
    WRITE ''@KERNEL     && INPUT.resultXML?.constructor.name === "ABAPObject"''.
    WRITE ''@KERNEL     && INPUT.resultXML?.qualifiedName === "IF_IXML_DOCUMENT") {''.
    WRITE ''@KERNEL   li_doc.set(INPUT.resultXML);''.
    WRITE ''@KERNEL   lv_dummy = INPUT.source;''.
    WRITE ''@KERNEL }''.
    IF li_doc IS NOT INITIAL.
      lcl_object_to_ixml=>run(
        ii_doc = li_doc
        source = lv_dummy ).
      RETURN.
    ENDIF.

* input = object, output = sxml_writer
    WRITE ''@KERNEL if (typeof INPUT.source === "object"''.
    WRITE ''@KERNEL     && INPUT.resultXML?.constructor.name === "ABAPObject") {''.
    WRITE ''@KERNEL   li_writer.set(INPUT.resultXML);''.
    WRITE ''@KERNEL   lv_dummy = INPUT.source;''.
    WRITE ''@KERNEL }''.
    IF li_writer IS NOT INITIAL.
      lcl_object_to_sxml=>run(
        ii_writer = li_writer
        source    = lv_dummy ).
      RETURN.
    ENDIF.

* input = object, output = string
    WRITE ''@KERNEL if (INPUT.resultXML && INPUT.resultXML.constructor.name === "String") {''.
    WRITE ''@KERNEL   lv_result.set("X");''.
    WRITE ''@KERNEL   lv_dummy = INPUT.source;''.
    WRITE ''@KERNEL }''.
    IF lv_result = abap_true.
      lv_result = lcl_object_to_string=>run(
        is_options = ms_options
        source     = lv_dummy ).
      WRITE ''@KERNEL   INPUT.resultXML.set(lv_result);''.
      RETURN.
    ENDIF.

    IF lv_source IS INITIAL AND mi_doc IS INITIAL.
      RAISE EXCEPTION TYPE cx_xslt_runtime_error.
    ENDIF.

* output = is an ABAP internal table, dynamic result parameter
    WRITE ''@KERNEL if (INPUT.result.constructor.name === "Table") {''.
    WRITE ''@KERNEL lt_rtab = INPUT.result;''.
    LOOP AT lt_rtab INTO ls_rtab.
      kernel_ixml_xml_to_data=>build(
        iv_name = ls_rtab-name
        iv_ref  = ls_rtab-value
        ii_doc  = mi_doc ).
    ENDLOOP.
    WRITE ''@KERNEL } else {''.
* INPUT.result is a javascript structure
    WRITE ''@KERNEL for (const name in INPUT.result) {''.
    WRITE ''@KERNEL   lv_name.set(name.toUpperCase());''.
    WRITE ''@KERNEL   if (INPUT.result[name].constructor.name === "FieldSymbol") {''.
    WRITE ''@KERNEL     result.assign(INPUT.result[name].getPointer());''.
    WRITE ''@KERNEL   } else {''.
    WRITE ''@KERNEL     result.assign(INPUT.result[name]);''.
    WRITE ''@KERNEL   }''.
    IF lv_type = ''JSON''.
      kernel_ixml_json_to_data=>build(
        iv_name = lv_name
        iv_ref  = result
        ii_doc  = mi_doc ).
    ELSE.
      kernel_ixml_xml_to_data=>build(
        iv_name = lv_name
        iv_ref  = result
        ii_doc  = mi_doc ).
    ENDIF.
    WRITE ''@KERNEL }''.
    WRITE ''@KERNEL }''.

  ENDMETHOD.

  METHOD parse_options.
* https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm

    DATA lv_name  TYPE string.
    DATA lv_value TYPE string.

    FIELD-SYMBOLS <lv_field> TYPE string.


    WRITE ''@KERNEL for (const name in INPUT.options || {}) {''.
    WRITE ''@KERNEL   lv_name.set(name);''.
    WRITE ''@KERNEL   lv_value.set(INPUT.options[name]);''.
    ASSIGN COMPONENT lv_name OF STRUCTURE ms_options TO <lv_field>.
    IF sy-subrc = 0.
      <lv_field> = lv_value.
    ENDIF.
    WRITE ''@KERNEL }''.

  ENDMETHOD.


  METHOD parse_xml.

    DATA li_factory TYPE REF TO if_ixml_stream_factory.
    DATA li_istream TYPE REF TO if_ixml_istream.
    DATA li_parser  TYPE REF TO if_ixml_parser.
    DATA li_ixml    TYPE REF TO if_ixml.
    DATA lv_subrc   TYPE i.

    li_ixml = cl_ixml=>create( ).
    mi_doc  = li_ixml->create_document( ).

    li_factory = li_ixml->create_stream_factory( ).
    li_istream = li_factory->create_istream_string( iv_xml ).
    li_parser = li_ixml->create_parser( stream_factory = li_factory
                                        istream        = li_istream
                                        document       = mi_doc ).
    li_parser->add_strip_space_element( ).
    lv_subrc = li_parser->parse( ).
    li_istream->close( ).

    ASSERT lv_subrc = 0.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_IXML_JSON_TO_DATA                ', 'CLASS kernel_ixml_json_to_data DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS build
      IMPORTING
        iv_name TYPE string
        iv_ref  TYPE REF TO data
        ii_doc  TYPE REF TO if_ixml_document.
  PRIVATE SECTION.
    CLASS-METHODS get_field_name
      IMPORTING ii_node TYPE REF TO if_ixml_node
      RETURNING VALUE(rv_name) TYPE string.
    CLASS-METHODS traverse
      IMPORTING
        ii_node TYPE REF TO if_ixml_node
        iv_ref  TYPE REF TO data.
ENDCLASS.

CLASS kernel_ixml_json_to_data IMPLEMENTATION.

  METHOD get_field_name.
    DATA li_aiterator TYPE REF TO if_ixml_node_iterator.
    DATA li_anode TYPE REF TO if_ixml_node.
    DATA attr TYPE REF TO if_ixml_named_node_map.

    attr = ii_node->get_attributes( ).
    IF attr IS NOT INITIAL.
      li_aiterator = attr->create_iterator( ).
      DO.
        li_anode = li_aiterator->get_next( ).
        IF li_anode IS INITIAL.
          EXIT. " current loop
        ENDIF.
* assume its the name,
        rv_name = li_anode->get_value( ).
        RETURN.
      ENDDO.
    ENDIF.
  ENDMETHOD.

  METHOD build.
* assumptions: the top level element is an object containing iv_name
    DATA li_first    TYPE REF TO if_ixml_node.
    DATA li_node     TYPE REF TO if_ixml_node.
    DATA lv_name     TYPE string.
    DATA li_iterator TYPE REF TO if_ixml_node_iterator.

    li_first = ii_doc->get_root( )->get_first_child( ).
    ASSERT li_first->get_name( ) = ''object''.

    li_iterator = li_first->get_children( )->create_iterator( ).
    DO.
      li_node = li_iterator->get_next( ).
      IF li_node IS INITIAL.
        EXIT. " current loop
      ENDIF.

      lv_name = get_field_name( li_node ).
      IF lv_name = iv_name.
*        WRITE ''@KERNEL console.dir("found");''.
        traverse(
          iv_ref  = iv_ref
          ii_node = li_node ).
        RETURN.
      ENDIF.
    ENDDO.
  ENDMETHOD.

  METHOD traverse.

    DATA lo_type     TYPE REF TO cl_abap_typedescr.
    DATA li_child    TYPE REF TO if_ixml_node.
    DATA lv_name     TYPE string.
    DATA li_iterator TYPE REF TO if_ixml_node_iterator.
    DATA lv_ref      TYPE REF TO data.

    FIELD-SYMBOLS <any>   TYPE any.
    FIELD-SYMBOLS <field> TYPE any.
    FIELD-SYMBOLS <tab>   TYPE ANY TABLE.

    lo_type = cl_abap_typedescr=>describe_by_data( iv_ref->* ).
    CASE lo_type->kind.
      WHEN cl_abap_typedescr=>kind_struct.
        ASSERT ii_node->get_name( ) = ''object''.
        ASSIGN iv_ref->* TO <any>.
        li_iterator = ii_node->get_children( )->create_iterator( ).
        DO.
          li_child = li_iterator->get_next( ).
          IF li_child IS INITIAL.
            EXIT. " current loop
          ENDIF.
          lv_name = get_field_name( li_child ).
          ASSIGN COMPONENT lv_name OF STRUCTURE <any> TO <field>.
          IF sy-subrc = 0.
            GET REFERENCE OF <field> INTO lv_ref.
            traverse( ii_node = li_child
                      iv_ref  = lv_ref ).
          ENDIF.
        ENDDO.
      WHEN cl_abap_typedescr=>kind_elem.
        li_child = ii_node->get_first_child( ).
        ASSERT li_child->get_name( ) = ''#text''.
        ASSIGN iv_ref->* TO <any>.
        <any> = li_child->get_value( ).

        IF lo_type->type_kind = cl_abap_typedescr=>typekind_char
            OR lo_type->type_kind = cl_abap_typedescr=>typekind_clike
            OR lo_type->type_kind = cl_abap_typedescr=>typekind_string.
          REPLACE ALL OCCURRENCES OF ''\\"'' IN <any> WITH ''"''.
        ENDIF.
      WHEN cl_abap_typedescr=>kind_table.
        ASSERT ii_node->get_name( ) = ''array''.
        ASSIGN iv_ref->* TO <tab>.
        li_iterator = ii_node->get_children( )->create_iterator( ).
        DO.
          li_child = li_iterator->get_next( ).
          IF li_child IS INITIAL.
            EXIT. " current loop
          ENDIF.
          CREATE DATA lv_ref LIKE LINE OF <tab>.
          ASSIGN lv_ref->* TO <any>.
          traverse( ii_node = li_child
                  iv_ref  = lv_ref ).
          INSERT <any> INTO TABLE <tab>.
        ENDDO.
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(lo_type.get().kind.get());''.
        ASSERT 1 = ''todo''.
    ENDCASE.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_IXML_XML_TO_DATA                 ', 'CLASS kernel_ixml_xml_to_data DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS build
      IMPORTING
        iv_name TYPE string
        iv_ref  TYPE REF TO data
        ii_doc  TYPE REF TO if_ixml_document.
  PRIVATE SECTION.
    CLASS-DATA mi_heap TYPE REF TO if_ixml_element.

    CLASS-METHODS traverse
      IMPORTING
        ii_node TYPE REF TO if_ixml_node
        iv_ref  TYPE REF TO data.

    CLASS-METHODS find_href_in_heap
      IMPORTING
        VALUE(iv_href) TYPE string
      RETURNING
        VALUE(ri_node) TYPE REF TO if_ixml_node.
ENDCLASS.

CLASS kernel_ixml_xml_to_data IMPLEMENTATION.

  METHOD build.

    DATA li_first    TYPE REF TO if_ixml_element.
    DATA li_node     TYPE REF TO if_ixml_node.
    DATA lv_name     TYPE string.
    DATA li_iterator TYPE REF TO if_ixml_node_iterator.

    mi_heap = ii_doc->find_from_name_ns( ''heap'' ).
*    WRITE ''@KERNEL console.dir(this.mi_heap);''.

    li_first ?= ii_doc->get_root( )->get_first_child( ).

    li_node = li_first->find_from_name_ns(
      name      = iv_name
      depth     = 0
      namespace = '''' ).
    IF li_node IS NOT INITIAL.
      traverse( ii_node = li_node
                iv_ref  = iv_ref ).
    ENDIF.
  ENDMETHOD.

  METHOD find_href_in_heap.

    DATA li_iterator TYPE REF TO if_ixml_node_iterator.
    DATA li_child    TYPE REF TO if_ixml_node.
    DATA lv_id       TYPE string.

    REPLACE FIRST OCCURRENCE OF ''#'' IN iv_href WITH ''''.
    ASSERT mi_heap IS NOT INITIAL.
    ASSERT iv_href IS NOT INITIAL.

    li_iterator = mi_heap->get_children( )->create_iterator( ).

    DO.
      li_child = li_iterator->get_next( ).
      IF li_child IS INITIAL.
        EXIT. " current loop
      ENDIF.
      lv_id = li_child->get_attributes( )->get_named_item_ns( ''id'' )->get_value( ).
      IF lv_id = iv_href.
        ri_node = li_child.
        RETURN.
      ENDIF.
    ENDDO.

    ASSERT 1 = ''not found in heap''.

  ENDMETHOD.

  METHOD traverse.

    DATA lo_type     TYPE REF TO cl_abap_typedescr.
    DATA li_child    TYPE REF TO if_ixml_node.
    DATA li_heap     TYPE REF TO if_ixml_node.
    DATA li_iname    TYPE REF TO if_ixml_node.
    DATA lv_name     TYPE string.
    DATA li_iterator TYPE REF TO if_ixml_node_iterator.
    DATA lv_ref      TYPE REF TO data.
    DATA lv_value    TYPE string.
    DATA li_href     TYPE REF TO if_ixml_node.

    FIELD-SYMBOLS <any>   TYPE any.
    FIELD-SYMBOLS <field> TYPE any.
    FIELD-SYMBOLS <tab>   TYPE ANY TABLE.

    lo_type = cl_abap_typedescr=>describe_by_data( iv_ref->* ).
    CASE lo_type->kind.
      WHEN cl_abap_typedescr=>kind_struct.
        ASSIGN iv_ref->* TO <any>.
        li_iterator = ii_node->get_children( )->create_iterator( ).
        DO.
          li_child = li_iterator->get_next( ).
          IF li_child IS INITIAL.
            EXIT. " current loop
          ENDIF.
          lv_name = li_child->get_name( ).
          ASSIGN COMPONENT lv_name OF STRUCTURE <any> TO <field>.
          IF sy-subrc = 0.
            GET REFERENCE OF <field> INTO lv_ref.
            traverse( ii_node = li_child
                      iv_ref  = lv_ref ).
          ENDIF.
        ENDDO.
      WHEN cl_abap_typedescr=>kind_elem.
        li_child = ii_node->get_first_child( ).
        IF li_child IS NOT INITIAL.
          ASSIGN iv_ref->* TO <any>.
          <any> = li_child->get_value( ).
        ENDIF.
      WHEN cl_abap_typedescr=>kind_table.
        ASSIGN iv_ref->* TO <tab>.
        li_iterator = ii_node->get_children( )->create_iterator( ).
        DO.
          li_child = li_iterator->get_next( ).
          IF li_child IS INITIAL.
            EXIT. " current loop
          ENDIF.
          CREATE DATA lv_ref LIKE LINE OF <tab>.
          ASSIGN lv_ref->* TO <any>.
          traverse( ii_node = li_child
                    iv_ref  = lv_ref ).
          INSERT <any> INTO TABLE <tab>.
        ENDDO.
      WHEN cl_abap_typedescr=>kind_ref.
        ASSIGN iv_ref->* TO <any>.
        IF <any> IS INITIAL.
          " WRITE ''@KERNEL lv_rtti_name.set(fs_any_.getPointer().RTTIName);''.
          " lv_internal = kernel_internal_name=>rtti_to_internal( lv_rtti_name ).
          " WRITE ''@KERNEL fs_any_.pointer.value = new abap.Classes[lv_internal.get()]();''.

          li_href = ii_node->get_attributes( )->get_named_item_ns( ''href'' ).
          IF li_href IS INITIAL.
            RETURN.
          ENDIF.
          lv_value = li_href->get_value( ).
          ASSERT lv_value IS NOT INITIAL.
          li_heap = find_href_in_heap( lv_value ).

          li_iname = li_heap->get_attributes( )->get_named_item_ns( ''internalName'' ).
          IF li_iname IS INITIAL AND lv_value(2) = ''#o''.
* then its a non serializable object, not to be instantiated
            RETURN.
          ENDIF.

          IF lv_value(2) = ''#o''.
            lv_value = li_iname->get_value( ).
            ASSERT lv_value IS NOT INITIAL.
*          WRITE ''@KERNEL console.dir(lv_value);''.
            WRITE ''@KERNEL fs_any_.pointer.value = new abap.Classes[lv_value.get()]();''.

          " li_child = ii_node->get_attributes( )->get_named_item_ns( ''href'' ).
          " WRITE ''@KERNEL console.dir(ii_node.get());''.

            li_iterator = li_heap->get_first_child( )->get_children( )->create_iterator( ).
            DO.
              li_child = li_iterator->get_next( ).
              IF li_child IS INITIAL.
                EXIT. " current loop
              ENDIF.
              lv_name = li_child->get_name( ).
              REPLACE FIRST OCCURRENCE OF ''.'' IN lv_name WITH ''~''.

              ASSIGN <any>->(lv_name) TO <field>.
              IF sy-subrc = 0.
                GET REFERENCE OF <field> INTO lv_ref.
                traverse( ii_node = li_child
                          iv_ref  = lv_ref ).
              ENDIF.
            ENDDO.
          ELSE.
* its a data reference
            " WRITE / lv_value.
            " WRITE ''@KERNEL console.dir(fs_any_);''.
            CREATE DATA <any>.
            " WRITE ''@KERNEL console.dir(fs_any_);''.

            li_child = li_heap->get_first_child( ).
            GET REFERENCE OF <any> INTO lv_ref.

            " WRITE ''@KERNEL console.dir(lv_ref);''.
            traverse( ii_node = li_child
                      iv_ref  = lv_ref->* ).
          ENDIF.
        ELSE.
          ASSERT 1 = ''todo_ref2''.
        ENDIF.
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(lo_type.get().kind.get());''.
        ASSERT 1 = ''todo''.
    ENDCASE.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_JSON_TO_IXML                     ', 'CLASS kernel_json_to_ixml DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS build
      IMPORTING iv_json TYPE string
      RETURNING VALUE(ri_doc) TYPE REF TO if_ixml_document.
ENDCLASS.

CLASS kernel_json_to_ixml IMPLEMENTATION.

  METHOD build.
* build IXML by calling SXML json parser and then converting :)

    DATA li_reader TYPE REF TO if_sxml_reader.
    DATA li_node TYPE REF TO if_sxml_node.
    DATA li_close TYPE REF TO if_sxml_close_element.
    DATA li_open TYPE REF TO if_sxml_open_element.
    DATA li_value TYPE REF TO if_sxml_value_node.
    DATA lt_attributes TYPE if_sxml_attribute=>attributes.
    DATA li_attribute TYPE REF TO if_sxml_attribute.
    DATA li_current TYPE REF TO if_ixml_node.
    DATA lv_name TYPE string.
    DATA li_map TYPE REF TO if_ixml_named_node_map.
    DATA li_new TYPE REF TO if_ixml_node.
    DATA li_element TYPE REF TO if_ixml_element.

    li_reader = cl_sxml_string_reader=>create( cl_abap_codepage=>convert_to( iv_json ) ).

    ri_doc = cl_ixml=>create( )->create_document( ).
    li_current = ri_doc->get_root( ).

    DO.
      li_node = li_reader->read_next_node( ).
      IF li_node IS INITIAL.
        EXIT.
      ENDIF.

      CASE li_node->type.
        WHEN if_sxml_node=>co_nt_element_open.
          li_open ?= li_node.
*          WRITE: / ''open: '', li_open->qname-name.

          CLEAR lv_name.
          lt_attributes = li_open->get_attributes( ).
          LOOP AT lt_attributes INTO li_attribute.
*            WRITE / li_attribute->get_value( ).
            lv_name = li_attribute->get_value( ).
          ENDLOOP.

          li_element = ri_doc->create_element_ns( li_open->qname-name ).
          li_new ?= li_element.
          li_current->append_child( li_new ).
          li_current = li_new.
*            WRITE ''@KERNEL console.dir(li_element);''.

          IF lv_name IS NOT INITIAL.
            li_element = ri_doc->create_element_ns( ''name'' ).
            li_new ?= li_element.
            li_new->set_value( lv_name ).

            li_map = li_current->get_attributes( ).
            li_map->set_named_item_ns( li_new ).
          ENDIF.

        WHEN if_sxml_node=>co_nt_element_close.
          li_close ?= li_node.
*          WRITE: / ''close: '', li_close->qname-name.
*          IF li_close->qname-name = ''object'' OR li_close->qname-name = ''array''.
          li_current = li_current->get_parent( ).
*          ENDIF.
        WHEN if_sxml_node=>co_nt_value.
          li_value ?= li_node.
*          WRITE / li_value->get_value( ).
*          li_current->set_value( li_value->get_value( ) ).

          li_element = ri_doc->create_element_ns( ''#text'' ).
          li_element->set_value( li_value->get_value( ) ).
          li_new ?= li_element.
          li_current->append_child( li_new ).

      ENDCASE.
    ENDDO.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_AUTHORITY_CHECK                  ', 'CLASS kernel_authority_check DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS call.
  PRIVATE SECTION.
ENDCLASS.

CLASS kernel_authority_check IMPLEMENTATION.

  METHOD call.
* add custom implementation here if needed
    sy-subrc = 0.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_CALL                             ', 'CLASS kernel_call DEFINITION PUBLIC.
* handling of ABAP statement CALL
  PUBLIC SECTION.
    CLASS-METHODS call
      IMPORTING
        input TYPE any.
  PRIVATE SECTION.
ENDCLASS.

CLASS kernel_call IMPLEMENTATION.

  METHOD call.

    DATA uuid TYPE sysuuid_x16.
    DATA name TYPE string.

    WRITE ''@KERNEL name.set(INPUT.name);''.

    IF name = ''RFCControl''.
      uuid = cl_system_uuid=>if_system_uuid_static~create_uuid_x16( ).
      WRITE ''@KERNEL INPUT.uuid.set(uuid);''.
    ENDIF.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_CREATE_DATA_HANDLE               ', 'CLASS kernel_create_data_handle DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS call
      IMPORTING
        handle TYPE REF TO cl_abap_datadescr
      CHANGING
        dref   TYPE REF TO any.
  PRIVATE SECTION.
    CLASS-METHODS elem
      IMPORTING
        handle TYPE REF TO cl_abap_datadescr
      CHANGING
        dref   TYPE REF TO any.
    CLASS-METHODS struct
      IMPORTING
        handle TYPE REF TO cl_abap_datadescr
      CHANGING
        dref   TYPE REF TO any.
    CLASS-METHODS table
      IMPORTING
        handle TYPE REF TO cl_abap_datadescr
      CHANGING
        dref   TYPE REF TO any.
    CLASS-METHODS ref
      IMPORTING
        handle TYPE REF TO cl_abap_datadescr
      CHANGING
        dref   TYPE REF TO any.
ENDCLASS.

CLASS kernel_create_data_handle IMPLEMENTATION.

  METHOD call.
    ASSERT handle IS BOUND.

    WRITE ''@KERNEL if (dref.constructor.name === "FieldSymbol") {''.
    WRITE ''@KERNEL   dref = dref.getPointer();''.
    WRITE ''@KERNEL }''.

    CASE handle->kind.
      WHEN cl_abap_typedescr=>kind_elem.
        elem( EXPORTING handle = handle
              CHANGING dref = dref ).
      WHEN cl_abap_typedescr=>kind_struct.
        struct( EXPORTING handle = handle
                CHANGING dref = dref ).
      WHEN cl_abap_typedescr=>kind_table.
        table( EXPORTING handle = handle
               CHANGING dref = dref ).
      WHEN cl_abap_typedescr=>kind_ref.
        ref( EXPORTING handle = handle
             CHANGING dref = dref ).
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(handle);''.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

  METHOD ref.
    DATA lo_ref  TYPE REF TO cl_abap_refdescr.
    DATA lo_data TYPE REF TO cl_abap_datadescr.
    DATA field   TYPE REF TO data.

    lo_ref ?= handle.
    lo_data ?= lo_ref->get_referenced_type( ).
    call(
      EXPORTING
        handle = lo_data
      CHANGING
        dref   = field ).

    WRITE ''@KERNEL dref.assign(new abap.types.DataReference(field.getPointer()));''.
  ENDMETHOD.

  METHOD struct.
    DATA lo_struct     TYPE REF TO cl_abap_structdescr.
    DATA lt_components TYPE cl_abap_structdescr=>component_table.
    DATA field         TYPE REF TO data.
    DATA lv_name       TYPE string.

    FIELD-SYMBOLS <ls_component> LIKE LINE OF lt_components.

    lo_struct ?= handle.
    lt_components = lo_struct->get_components( ).
    WRITE ''@KERNEL let obj = {};''.
    LOOP AT lt_components ASSIGNING <ls_component>.
*      WRITE ''@KERNEL console.dir(ls_component.get().name);''.
      call(
        EXPORTING
          handle = lo_struct->get_component_type( <ls_component>-name )
        CHANGING
          dref   = field ).
      lv_name = to_lower( <ls_component>-name ).
      WRITE ''@KERNEL obj[lv_name.get()] = field.getPointer();''.
    ENDLOOP.
    WRITE ''@KERNEL dref.assign(new abap.types.Structure(obj));''.
  ENDMETHOD.

  METHOD table.
    DATA lo_table     TYPE REF TO cl_abap_tabledescr.
    DATA lt_keys      TYPE abap_table_keydescr_tab.
    DATA lv_component TYPE string.
    DATA field        TYPE REF TO data.

    FIELD-SYMBOLS <ls_key> LIKE LINE OF lt_keys.

    lo_table ?= handle.

    call(
      EXPORTING
        handle = lo_table->get_table_line_type( )
      CHANGING
        dref   = field ).

    WRITE ''@KERNEL let options = {primaryKey: undefined, keyType: "DEFAULT", withHeader: false};''.
    WRITE ''@KERNEL options.primaryKey = {name: "primary_key", type: "STANDARD", keyFields: [], isUnique: false};''.

* todo, handle secondary keys,
    lt_keys = lo_table->get_keys( ).
    LOOP AT lt_keys ASSIGNING <ls_key> WHERE is_primary = abap_true.
      IF <ls_key>-access_kind = cl_abap_tabledescr=>tablekind_sorted.
        WRITE ''@KERNEL options.primaryKey.type = "SORTED";''.
      ELSEIF <ls_key>-access_kind = cl_abap_tabledescr=>tablekind_hashed.
        WRITE ''@KERNEL options.primaryKey.type = "HASHED";''.
      ENDIF.
      IF <ls_key>-is_unique = abap_true.
        WRITE ''@KERNEL options.primaryKey.isUnique = true;''.
      ENDIF.
      LOOP AT <ls_key>-components INTO lv_component.
        WRITE ''@KERNEL options.primaryKey.keyFields.push(lv_component.get().toLowerCase());''.
      ENDLOOP.
    ENDLOOP.

    WRITE ''@KERNEL dref.assign(abap.types.TableFactory.construct(field.getPointer(), options));''.
  ENDMETHOD.

  METHOD elem.
    DATA lv_half TYPE i.
    CASE handle->type_kind.
      WHEN cl_abap_typedescr=>typekind_float.
        CREATE DATA dref TYPE f.
      WHEN cl_abap_typedescr=>typekind_string.
        CREATE DATA dref TYPE string.
      WHEN cl_abap_typedescr=>typekind_xstring.
        CREATE DATA dref TYPE xstring.
      WHEN cl_abap_typedescr=>typekind_int.
        CREATE DATA dref TYPE i.
      WHEN cl_abap_typedescr=>typekind_date.
        CREATE DATA dref TYPE d.
      WHEN cl_abap_typedescr=>typekind_hex.
        CREATE DATA dref TYPE x LENGTH handle->length.
      WHEN cl_abap_typedescr=>typekind_packed.
        CREATE DATA dref TYPE p LENGTH handle->length DECIMALS handle->decimals.
      WHEN cl_abap_typedescr=>typekind_char.
        lv_half = handle->length / 2.
        CREATE DATA dref TYPE c LENGTH lv_half.
* todo, this needs some redesign to work properly,
        WRITE ''@KERNEL dref.getPointer().extra = {"qualifiedName": handle.get().relative_name};''.
      WHEN cl_abap_typedescr=>typekind_num.
        lv_half = handle->length / 2.
        CREATE DATA dref TYPE n LENGTH lv_half.
      WHEN cl_abap_typedescr=>typekind_time.
        CREATE DATA dref TYPE t.
      WHEN cl_abap_typedescr=>typekind_int8.
        CREATE DATA dref TYPE int8.
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(handle);''.
        ASSERT 1 = ''todo''.
    ENDCASE.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_INTERNAL_NAME                    ', 'CLASS kernel_internal_name DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS internal_to_rtti
      IMPORTING
        iv_internal TYPE string
      RETURNING
        VALUE(rv_rtti) TYPE string.

    CLASS-METHODS rtti_to_internal
      IMPORTING
        iv_rtti TYPE string
      RETURNING
        VALUE(rv_internal) TYPE string.
ENDCLASS.

CLASS kernel_internal_name IMPLEMENTATION.

  METHOD internal_to_rtti.
    rv_rtti = iv_internal.
    IF rv_rtti CP ''*CLAS-*''.
      REPLACE FIRST OCCURRENCE OF ''CLAS-'' IN rv_rtti WITH ''\\CLASS#POOL=''.
      REPLACE FIRST OCCURRENCE OF ''-'' IN rv_rtti WITH ''\\CLASS=''.
      REPLACE FIRST OCCURRENCE OF ''#'' IN rv_rtti WITH ''-''.
    ELSE.
      rv_rtti = ''\\CLASS='' && rv_rtti.
    ENDIF.
  ENDMETHOD.

  METHOD rtti_to_internal.
    rv_internal = iv_rtti.
    IF rv_internal CP ''\\CLASS=*''.
      REPLACE FIRST OCCURRENCE OF ''\\CLASS='' IN rv_internal WITH ''''.
    ELSEIF rv_internal CP ''\\CLASS-POOL=*''.
      REPLACE FIRST OCCURRENCE OF ''\\CLASS-POOL='' IN rv_internal WITH ''CLAS-''.
      REPLACE FIRST OCCURRENCE OF ''\\CLASS='' IN rv_internal WITH ''-''.
      REPLACE FIRST OCCURRENCE OF ''\\INTERFACE='' IN rv_internal WITH ''-''.
    ENDIF.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_LOCK                             ', 'CLASS kernel_lock DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS enqueue
      IMPORTING
        input TYPE any
      EXCEPTIONS
        foreign_lock
        system_failure.
    CLASS-METHODS dequeue
      IMPORTING
        input TYPE any.
  PRIVATE SECTION.
ENDCLASS.

CLASS kernel_lock IMPLEMENTATION.

  METHOD enqueue.
* add custom implementation here if needed
    sy-subrc = 0.
  ENDMETHOD.

  METHOD dequeue.
* add custom implementation here if needed
    sy-subrc = 0.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_PUSH_CHANNELS                    ', 'CLASS kernel_push_channels DEFINITION PUBLIC.
* handling of ABAP statement WAIT FOR PUSH CHANNELS
  PUBLIC SECTION.
    CLASS-METHODS wait
      IMPORTING
        seconds TYPE i
        cond    TYPE any.
  PRIVATE SECTION.
ENDCLASS.

CLASS kernel_push_channels IMPLEMENTATION.

  METHOD wait.
    DATA lv_seconds   TYPE i.
    DATA lv_condition TYPE abap_bool.

    lv_seconds = seconds * 1000.
    ASSERT lv_seconds > 0.

    WHILE lv_seconds > 0.
      WRITE ''@KERNEL await new Promise(resolve => setTimeout(resolve, 100));''.
      WRITE ''@KERNEL lv_condition = cond() ? "X" : " ";''.
      IF lv_condition = abap_true.
        sy-subrc = 0.
        RETURN.
      ENDIF.
      lv_seconds = lv_seconds - 100.
    ENDWHILE.

    sy-subrc = 4.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_SCAN_ABAP_SOURCE                 ', 'CLASS kernel_scan_abap_source DEFINITION PUBLIC.
* handling of ABAP statement SCAN ABAP-SOURCE
  PUBLIC SECTION.
    CLASS-METHODS call IMPORTING input TYPE any.
  PRIVATE SECTION.
    TYPES ty_stokesx TYPE STANDARD TABLE OF stokesx WITH DEFAULT KEY.
    TYPES ty_sstmnt TYPE STANDARD TABLE OF sstmnt WITH DEFAULT KEY.

    CLASS-METHODS call_internal
      IMPORTING
        source     TYPE string
      EXPORTING
        et_stokesx TYPE ty_stokesx
        et_sstmnt  TYPE ty_sstmnt.

    CONSTANTS: BEGIN OF gc_token,
                 comment    TYPE c LENGTH 1 VALUE ''C'',
                 identifier TYPE c LENGTH 1 VALUE ''I'',
                 list       TYPE c LENGTH 1 VALUE ''L'',
                 literal    TYPE c LENGTH 1 VALUE ''S'',
                 pragma     TYPE c LENGTH 1 VALUE ''P'',
               END OF gc_token.

    CONSTANTS: BEGIN OF gc_statement,
                 comment          TYPE c LENGTH 1 VALUE ''P'',
                 comment_in_stmnt TYPE c LENGTH 1 VALUE ''S'',
                 compute_direct   TYPE c LENGTH 1 VALUE ''C'',
                 empty            TYPE c LENGTH 1 VALUE ''N'',
                 macro_call       TYPE c LENGTH 1 VALUE ''D'',
                 macro_definition TYPE c LENGTH 1 VALUE ''M'',
                 method_direct    TYPE c LENGTH 1 VALUE ''A'',
                 native_sql       TYPE c LENGTH 1 VALUE ''E'',
                 pragma           TYPE c LENGTH 1 VALUE ''G'',
                 standard         TYPE c LENGTH 1 VALUE ''K'',
               END OF gc_statement.

    CLASS-METHODS pass1
      IMPORTING
        source        TYPE string
      EXPORTING
        et_tokens     TYPE ty_stokesx
        et_statements TYPE ty_sstmnt.

    CLASS-METHODS pass2
      CHANGING
        ct_tokens     TYPE ty_stokesx
        ct_statements TYPE ty_sstmnt.
ENDCLASS.

CLASS kernel_scan_abap_source IMPLEMENTATION.

  METHOD call.

* non-goal: good performance

    DATA lt_sstmnt  TYPE ty_sstmnt.
    DATA lt_stokes  TYPE stokes_tab.
    DATA ls_stokes  LIKE LINE OF lt_stokes.
    DATA lt_stokesx TYPE ty_stokesx.
    DATA ls_stokesx LIKE LINE OF lt_stokesx.
    DATA lv_source  TYPE string.

    WRITE ''@KERNEL lv_source.set(INPUT.scan_abap_source.array ? INPUT.scan_abap_source.array().map(e => e.get()).join("\\n") : INPUT.scan_abap_source.get());''.

    call_internal(
      EXPORTING
        source     = lv_source
      IMPORTING
        et_stokesx = lt_stokesx
        et_sstmnt  = lt_sstmnt ).

    LOOP AT lt_stokesx INTO ls_stokesx.
      CLEAR ls_stokes.
      MOVE-CORRESPONDING ls_stokesx TO ls_stokes.
      APPEND ls_stokes TO lt_stokes.
    ENDLOOP.

    WRITE ''@KERNEL const len = Object.keys(INPUT.tokens_into.getRowType().get()).length;''.
    WRITE ''@KERNEL INPUT.tokens_into.set(len == 4 ? lt_stokes : lt_stokesx);''.

    WRITE ''@KERNEL INPUT.statements_into.set(lt_sstmnt);''.

  ENDMETHOD.

  METHOD call_internal.

* build tokens in sequence of occurence in the source
* take care of chained statements
    pass1(
      EXPORTING
        source        = source
      IMPORTING
        et_tokens     = et_stokesx
        et_statements = et_sstmnt ).

* move comment tokens and add/change statements to comment type
    pass2(
      CHANGING
        ct_tokens     = et_stokesx
        ct_statements = et_sstmnt ).

  ENDMETHOD.

  METHOD pass1.
    CONSTANTS: BEGIN OF c_mode,
                 normal  TYPE i VALUE 1,
                 comment TYPE i VALUE 2,
               END OF c_mode.

    DATA character    TYPE c LENGTH 1.
    DATA row          TYPE i VALUE 1.
    DATA column       TYPE i.
    DATA index        TYPE i.
    DATA sfrom        TYPE i VALUE 1.
    DATA mode         TYPE i.
    DATA chain_tokens TYPE ty_stokesx.

    FIELD-SYMBOLS <trow> LIKE LINE OF et_tokens.
    FIELD-SYMBOLS <srow> LIKE LINE OF et_statements.

    mode = c_mode-normal.
    WHILE source IS NOT INITIAL.
      character = source(1).
      source = source+1.

      IF <trow> IS NOT ASSIGNED AND character <> '''' AND character <> |\\n|.
        APPEND INITIAL LINE TO et_tokens ASSIGNING <trow>.
        <trow>-row = row.
        <trow>-col = column.
        <trow>-type = gc_token-identifier.
      ELSEIF mode = c_mode-normal AND ( character = '''' OR character CA |.,| ).
        UNASSIGN <trow>.
"         IF character = '',''.
" *          WRITE ''@KERNEL console.dir("before");''.
"           APPEND LINES OF chain_tokens TO et_tokens.
" *          WRITE ''@KERNEL console.dir("after");''.
" *          WRITE lines( <tokens> ).
"         ENDIF.
      ELSEIF mode = c_mode-normal AND character = '':''.
        CLEAR chain_tokens.
        APPEND LINES OF et_tokens FROM sfrom TO chain_tokens.
        DELETE chain_tokens WHERE type = gc_token-comment.
*        WRITE ''@KERNEL console.dir(chain_tokens);''.
      ENDIF.

      IF ( mode = c_mode-normal AND character CA |.,| )
          OR source = ''''.
        APPEND INITIAL LINE TO et_statements ASSIGNING <srow>.
        <srow>-terminator = character.
        <srow>-from = sfrom.
        <srow>-to = lines( et_tokens ).
        sfrom = <srow>-to + 1.

        IF character = '',''.
*          WRITE ''@KERNEL console.dir("before");''.
          APPEND LINES OF chain_tokens TO et_tokens.
*          WRITE ''@KERNEL console.dir("after");''.
*          WRITE lines( <tokens> ).
        ENDIF.
      ENDIF.

      IF character = |\\n|.
        mode = c_mode-normal.
        UNASSIGN <trow>.
        row = row + 1.
        column = 0.
      ELSE.
        IF <trow> IS ASSIGNED.
          IF ( character = ''*'' AND column = 0 ) OR character = ''"''.
            mode = c_mode-comment.
            <trow>-type = gc_token-comment.
          ENDIF.
          IF mode = c_mode-comment.
            <trow>-type = gc_token-comment.
            CONCATENATE <trow>-str character INTO <trow>-str RESPECTING BLANKS.
          ELSEIF character <> '':''.
            <trow>-str = <trow>-str && to_upper( |{ character }| ).
          ENDIF.
        ENDIF.
        column = column + 1.
      ENDIF.

    ENDWHILE.

  ENDMETHOD.

  METHOD pass2.
    FIELD-SYMBOLS <ls_statement> LIKE LINE OF ct_statements.
    DATA ls_statement       LIKE LINE OF ct_statements.
    DATA ls_token           LIKE LINE OF ct_tokens.
    DATA contains_comment   TYPE abap_bool.
    DATA contains_normal    TYPE abap_bool.
    DATA lv_count           TYPE i.
    DATA lv_statement_index TYPE i.
    DATA lt_insert          LIKE ct_tokens.
    DATA lt_delete          TYPE STANDARD TABLE OF i WITH DEFAULT KEY.
    DATA lv_index           LIKE LINE OF lt_delete.

    LOOP AT ct_statements ASSIGNING <ls_statement>.
      lv_statement_index = sy-tabix.

*      WRITE ''@KERNEL console.dir("statement");''.
      contains_comment = abap_false.
      contains_normal = abap_false.
      LOOP AT ct_tokens INTO ls_token FROM <ls_statement>-from TO <ls_statement>-to.
        IF ls_token-type = gc_token-comment.
          contains_comment = abap_true.
        ELSE.
          contains_normal = abap_true.
        ENDIF.
*        WRITE ''@KERNEL console.dir(ls_token.get().str.get());''.
      ENDLOOP.

      IF contains_comment = abap_true AND contains_normal = abap_true.
* its a mix, move comments to the front as separate statement
*        WRITE ''@KERNEL console.dir("from: " + fs_ls_statement_.get().from.get());''.
*        WRITE ''@KERNEL console.dir("to: " + fs_ls_statement_.get().to.get());''.
        lv_count = 0.
        CLEAR lt_insert.
        CLEAR lt_delete.
        LOOP AT ct_tokens INTO ls_token FROM <ls_statement>-from TO <ls_statement>-to.
*          WRITE ''@KERNEL console.dir("token: " + ls_token.get().str.get() + " " + abap.builtin.sy.get().tabix.get());''.
          IF ls_token-type = gc_token-comment.
            INSERT sy-tabix INTO lt_delete INDEX 1.
            INSERT ls_token INTO lt_insert INDEX 1.
            lv_count = lv_count + 1.
          ENDIF.
        ENDLOOP.
        LOOP AT lt_delete INTO lv_index.
          DELETE ct_tokens INDEX lv_index.
        ENDLOOP.
        LOOP AT lt_insert INTO ls_token.
          INSERT ls_token INTO ct_tokens INDEX <ls_statement>-from.
        ENDLOOP.

        CLEAR ls_statement.
        ls_statement-from = <ls_statement>-from.
        ls_statement-to = <ls_statement>-from + lv_count - 1.
        ls_statement-type = gc_statement-comment.

        <ls_statement>-from = <ls_statement>-from + lv_count.

        INSERT ls_statement INTO ct_statements INDEX lv_statement_index.
      ELSEIF contains_comment = abap_true.
        <ls_statement>-type = gc_statement-comment.
      ELSE.
        <ls_statement>-type = gc_statement-standard.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_NUMBERRANGE_RUNTIME                  ', 'CLASS cl_numberrange_runtime DEFINITION PUBLIC.
  PUBLIC SECTION.

    TYPES nr_interval TYPE c LENGTH 2.
    TYPES nr_object   TYPE c LENGTH 10.
    TYPES nr_number   TYPE n LENGTH 20.

    CLASS-METHODS number_get
      IMPORTING
        nr_range_nr TYPE nr_interval
        object      TYPE nr_object
      EXPORTING
        number      TYPE nr_number
      RAISING
        cx_static_check.
ENDCLASS.

CLASS cl_numberrange_runtime IMPLEMENTATION.

  METHOD number_get.

    CALL FUNCTION ''NUMBER_GET_NEXT''
      EXPORTING
        nr_range_nr             = nr_range_nr
        object                  = object
      IMPORTING
        number                  = number
      EXCEPTIONS
        interval_not_found      = 1
        number_range_not_intern = 2
        object_not_found        = 3
        quantity_is_0           = 4
        quantity_is_not_1       = 5
        interval_overflow       = 6
        buffer_overflow         = 7
        OTHERS                  = 8.
    IF sy-subrc <> 0.
      RETURN. " todo
    ENDIF.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_NUMBERRANGE                      ', 'CLASS kernel_numberrange DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS number_get
      IMPORTING
        nr_range_nr TYPE cl_numberrange_runtime=>nr_interval
        object      TYPE cl_numberrange_runtime=>nr_object
      EXPORTING
        number      TYPE cl_numberrange_runtime=>nr_number
      RAISING
        cx_static_check.
  PRIVATE SECTION.
    TYPES: BEGIN OF ty_status,
             nr_range_nr TYPE cl_numberrange_runtime=>nr_interval,
             object      TYPE cl_numberrange_runtime=>nr_object,
             number      TYPE cl_numberrange_runtime=>nr_number,
           END OF ty_status.
    CLASS-DATA status TYPE STANDARD TABLE OF ty_status WITH DEFAULT KEY.
ENDCLASS.

CLASS kernel_numberrange IMPLEMENTATION.

  METHOD number_get.
* for now, only in memory for the current session
    FIELD-SYMBOLS <row> LIKE LINE OF status.
    READ TABLE status WITH KEY nr_range_nr = nr_range_nr object = object ASSIGNING <row>.
    IF sy-subrc = 0.
      <row>-number = <row>-number + 1.
    ELSE.
      APPEND INITIAL LINE TO status ASSIGNING <row>.
      <row>-nr_range_nr = nr_range_nr.
      <row>-object = object.
      <row>-number = 1.
    ENDIF.
    number = <row>-number.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_OA2C_CONFIG_WRITER_API               ', 'CLASS cl_oa2c_config_writer_api DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS c_granttype_cc TYPE oa2c_granttype VALUE 4.

    CLASS-METHODS create
      IMPORTING
        i_profile                   TYPE oa2c_profile
        i_configuration             TYPE oa2c_configuration OPTIONAL
        i_client_id                 TYPE string
        i_client_secret             TYPE string
        i_authorization_endpoint    TYPE string OPTIONAL
        i_token_endpoint            TYPE string OPTIONAL
        i_target_path               TYPE string OPTIONAL
        i_configured_granttype      TYPE oa2c_granttype DEFAULT 0
      RETURNING
        VALUE(ro_config_writer_api) TYPE REF TO cl_oa2c_config_writer_api
      RAISING
        cx_oa2c.

    CLASS-METHODS load
      IMPORTING
        i_configuration             TYPE oa2c_configuration OPTIONAL
      RETURNING
        VALUE(ro_config_writer_api) TYPE REF TO cl_oa2c_config_writer_api
      RAISING
        cx_oa2c.

    METHODS save
      RAISING
        cx_oa2c.

    METHODS read
      EXPORTING
        e_client_id              TYPE string
        e_authorization_endpoint TYPE string
        e_token_endpoint         TYPE string
        e_target_path            TYPE string
        e_configured_granttype   TYPE oa2c_granttype.

  PRIVATE SECTION.
    TYPES: BEGIN OF ty_config,
             configuration          TYPE oa2c_configuration,
             client_id              TYPE string,
             client_secret          TYPE string,
             authorization_endpoint TYPE string,
             token_endpoint         TYPE string,
             target_path            TYPE string,
             granttype              TYPE oa2c_granttype,
           END OF ty_config.

* this class currently only saves to memory for testing purposes
    CLASS-DATA mt_saved_configs TYPE SORTED TABLE OF ty_config WITH UNIQUE KEY configuration.

    DATA ms_config TYPE ty_config.
ENDCLASS.

CLASS cl_oa2c_config_writer_api IMPLEMENTATION.

  METHOD create.
    ASSERT i_configured_granttype = c_granttype_cc.

    CREATE OBJECT ro_config_writer_api.
    ro_config_writer_api->ms_config-configuration = i_configuration.
    ro_config_writer_api->ms_config-client_id = i_client_id.
    ro_config_writer_api->ms_config-client_secret = i_client_secret.
    ro_config_writer_api->ms_config-authorization_endpoint = i_authorization_endpoint.
    ro_config_writer_api->ms_config-token_endpoint = i_token_endpoint.
    ro_config_writer_api->ms_config-target_path = i_target_path.
    ro_config_writer_api->ms_config-granttype = i_configured_granttype.
  ENDMETHOD.

  METHOD save.

    INSERT ms_config INTO TABLE mt_saved_configs.
    ASSERT sy-subrc = 0.

  ENDMETHOD.

  METHOD load.

    DATA ls_config TYPE ty_config.

    READ TABLE mt_saved_configs INTO ls_config WITH KEY configuration = i_configuration.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_oa2c_config_not_found.
    ENDIF.

    CREATE OBJECT ro_config_writer_api.
    ro_config_writer_api->ms_config = ls_config.

  ENDMETHOD.

  METHOD read.

    e_client_id = ms_config-client_id.
    e_authorization_endpoint = ms_config-authorization_endpoint.
    e_token_endpoint = ms_config-token_endpoint.
    e_target_path = ms_config-target_path.
    e_configured_granttype = ms_config-granttype.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_OAUTH2_CLIENT                        ', 'CLASS cl_oauth2_client DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_oauth2_client.

    CLASS-METHODS create
      IMPORTING
        i_profile               TYPE oa2c_profile
        i_configuration         TYPE oa2c_configuration OPTIONAL
      RETURNING
        VALUE(ro_oauth2_client) TYPE REF TO if_oauth2_client
      RAISING
        cx_oa2c.

  PRIVATE SECTION.
    DATA mo_config_writer_api TYPE REF TO cl_oa2c_config_writer_api.
    DATA mv_token             TYPE string.
    DATA mv_scope             TYPE string.
ENDCLASS.

CLASS cl_oauth2_client IMPLEMENTATION.

  METHOD create.

    DATA lo_client TYPE REF TO cl_oauth2_client.
    DATA lv_scope  TYPE string.

    WRITE ''@KERNEL const scopes = abap.OA2P[i_profile.get().toUpperCase().trimEnd()].scopes;''.
    WRITE ''@KERNEL lv_scope.set(scopes[0]);''.

    CREATE OBJECT lo_client.
    lo_client->mo_config_writer_api = cl_oa2c_config_writer_api=>load( i_configuration ).
    lo_client->mv_scope = lv_scope.

    ro_oauth2_client ?= lo_client.

  ENDMETHOD.

  METHOD if_oauth2_client~execute_cc_flow.

    DATA lv_text          TYPE string.
    DATA lv_code          TYPE i.
    DATA lv_message       TYPE string.
    DATA lv_cdata         TYPE string.
    DATA lv_client_id     TYPE string.
    DATA lv_client_secret TYPE string.
    DATA lv_endpoint      TYPE string.
    DATA lv_path          TYPE string.
    DATA li_http_client   TYPE REF TO if_http_client.


    mo_config_writer_api->read(
      IMPORTING
        e_client_id      = lv_client_id
        e_token_endpoint = lv_endpoint
        e_target_path    = lv_path ).

    WRITE ''@KERNEL lv_client_secret.set(this.mo_config_writer_api.get().ms_config.get().client_secret);''.

    cl_http_client=>create_by_url(
      EXPORTING
        url                = lv_endpoint && lv_path
      IMPORTING
        client             = li_http_client
      EXCEPTIONS
        argument_not_found = 1
        plugin_not_active  = 2
        internal_error     = 3
        OTHERS             = 4 ).
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_oa2c.
    ENDIF.

    li_http_client->propertytype_logon_popup = if_http_client=>co_disabled.

    li_http_client->request->set_method( ''POST'' ).

    li_http_client->request->set_form_field(
      name  = ''grant_type''
      value = ''client_credentials'' ).
    li_http_client->request->set_form_field(
      name  = ''client_id''
      value = lv_client_id ).
    li_http_client->request->set_form_field(
      name  = ''scope''
      value = mv_scope ).
    li_http_client->request->set_form_field(
      name  = ''client_secret''
      value = lv_client_secret ).
    li_http_client->request->set_content_type( ''application/x-www-form-urlencoded'' ).

    li_http_client->send(
      EXCEPTIONS
        http_communication_failure = 1
        http_invalid_state         = 2
        http_processing_failed     = 3
        http_invalid_timeout       = 4
        OTHERS                     = 5 ).
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_oa2c.
    ENDIF.

    li_http_client->receive(
      EXCEPTIONS
        http_communication_failure = 1
        http_invalid_state         = 2
        http_processing_failed     = 3
        OTHERS                     = 4 ).
    IF sy-subrc <> 0.
      li_http_client->get_last_error(
        IMPORTING
          code    = lv_code
          message = lv_message ).
      RAISE EXCEPTION TYPE cx_oa2c.
    ENDIF.

    li_http_client->response->get_status( IMPORTING code = lv_code ).
    lv_cdata = li_http_client->response->get_cdata( ).
    li_http_client->close( ).

    IF lv_code <> 200.
      RAISE EXCEPTION TYPE cx_oa2c.
    ENDIF.

    FIND REGEX |"access_token":"([\\\\w\\\\.-]+)"| IN lv_cdata SUBMATCHES mv_token.
    ASSERT sy-subrc = 0.

  ENDMETHOD.

  METHOD if_oauth2_client~set_token.
    IF mv_token IS INITIAL.
      RAISE EXCEPTION TYPE cx_oa2c_at_not_available.
    ENDIF.

    io_http_client->request->set_header_field(
      name  = ''Authorization''
      value = |Bearer { mv_token }| ).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_OA2C                                 ', 'CLASS cx_oa2c DEFINITION PUBLIC INHERITING FROM cx_static_check.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_oa2c IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_OA2C_AT_NOT_AVAILABLE                ', 'CLASS cx_oa2c_at_not_available DEFINITION PUBLIC INHERITING FROM cx_oa2c.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_oa2c_at_not_available IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_OA2C_CONFIG_NOT_FOUND                ', 'CLASS cx_oa2c_config_not_found DEFINITION PUBLIC INHERITING FROM cx_oa2c.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_oa2c_config_not_found IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_OAUTH2_CLIENT                        ', 'INTERFACE if_oauth2_client PUBLIC.

  CONSTANTS c_param_kind_header_field TYPE string VALUE ''H''.
  CONSTANTS c_param_kind_form_field   TYPE string VALUE ''F''.

  METHODS execute_cc_flow
    RAISING
      cx_oa2c.

  METHODS set_token
    IMPORTING
      io_http_client TYPE REF TO if_http_client
      i_param_kind   TYPE string OPTIONAL
    RAISING
      cx_oa2c.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_OO_FACTORY                           ', 'CLASS cl_oo_factory DEFINITION PUBLIC CREATE PRIVATE.
  PUBLIC SECTION.
    INTERFACES if_oo_clif_source.

    CLASS-METHODS create_instance
      RETURNING
        VALUE(result) TYPE REF TO cl_oo_factory.

    METHODS create_clif_source
      IMPORTING
        clif_name     TYPE csequence
      RETURNING
        VALUE(result) TYPE REF TO if_oo_clif_source
      RAISING
        cx_oo_clif_not_exists.

  PRIVATE SECTION.
    DATA mv_name TYPE string.
ENDCLASS.

CLASS cl_oo_factory IMPLEMENTATION.
  METHOD create_instance.
    CREATE OBJECT result.
  ENDMETHOD.

  METHOD create_clif_source.
* todo, this not correct, should return a new instance, but will work for now
    result = me.
    mv_name = to_upper( clif_name ).
  ENDMETHOD.

  METHOD if_oo_clif_source~get_source.
    DATA ls_data TYPE reposrc.
    SELECT SINGLE * FROM reposrc INTO ls_data WHERE progname = mv_name.
    SPLIT ls_data-data AT |\\n| INTO TABLE source.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_OO_CLIF_NOT_EXISTS                   ', 'CLASS cx_oo_clif_not_exists DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_oo_clif_not_exists IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_OO_CLIF_SOURCE                       ', 'INTERFACE if_oo_clif_source PUBLIC.
  METHODS get_source
    EXPORTING
      source TYPE string_table.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_CLASSDESCR                      ', 'CLASS cl_abap_classdescr DEFINITION PUBLIC INHERITING FROM cl_abap_objectdescr.
  PUBLIC SECTION.
    CLASS-METHODS get_class_name
      IMPORTING
        p_object TYPE REF TO object
      RETURNING
        VALUE(p_name) TYPE abap_abstypename.

    METHODS get_super_class_type
      RETURNING
        VALUE(p_descr_ref) TYPE REF TO cl_abap_classdescr
      EXCEPTIONS
        super_class_not_found.

    METHODS constructor
      IMPORTING
        p_object TYPE any OPTIONAL.
ENDCLASS.

CLASS cl_abap_classdescr IMPLEMENTATION.
  METHOD constructor.
    super->constructor( p_object ).
  ENDMETHOD.

  METHOD get_class_name.
    DATA lv_name TYPE string.
    WRITE ''@KERNEL lv_name.set(p_object.get().constructor.INTERNAL_NAME);''.
    p_name = kernel_internal_name=>internal_to_rtti( lv_name ).
  ENDMETHOD.

  METHOD get_super_class_type.
    ASSERT 1 = ''todo''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_COMPLEXDESCR                    ', 'CLASS cl_abap_complexdescr DEFINITION PUBLIC INHERITING FROM cl_abap_datadescr.
  PUBLIC SECTION.
ENDCLASS.

CLASS cl_abap_complexdescr IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_DATADESCR                       ', 'CLASS cl_abap_datadescr DEFINITION PUBLIC INHERITING FROM cl_abap_typedescr.
  PUBLIC SECTION.
    CLASS-METHODS get_data_type_kind
      IMPORTING
        p_data             TYPE data
      RETURNING
        VALUE(p_type_kind) TYPE abap_typekind.

    METHODS applies_to_data
      IMPORTING
        p_data TYPE data
      RETURNING
        VALUE(p_flag) TYPE abap_bool.
ENDCLASS.

CLASS cl_abap_datadescr IMPLEMENTATION.

  METHOD get_data_type_kind.
    DATA descr TYPE REF TO cl_abap_typedescr.
    descr = cl_abap_typedescr=>describe_by_data( p_data ).
    p_type_kind = descr->type_kind.
  ENDMETHOD.

  METHOD applies_to_data.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_ELEMDESCR                       ', 'CLASS cl_abap_elemdescr DEFINITION PUBLIC INHERITING FROM cl_abap_datadescr.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF fixvalue,
        low        TYPE c LENGTH 10,
        high       TYPE c LENGTH 10,
        option     TYPE c LENGTH 2,
        ddlanguage TYPE c,
        ddtext     TYPE c LENGTH 60,
      END OF fixvalue.
    TYPES fixvalues TYPE STANDARD TABLE OF fixvalue WITH DEFAULT KEY.

    DATA output_length TYPE i READ-ONLY.
    DATA edit_mask TYPE abap_editmask READ-ONLY.
    DATA help_id TYPE abap_helpid READ-ONLY.

    METHODS get_ddic_fixed_values
      RETURNING
        VALUE(p_fixed_values) TYPE fixvalues.

    METHODS get_ddic_field
      IMPORTING
        p_langu TYPE sy-langu DEFAULT sy-langu
      RETURNING
        VALUE(p_flddescr) TYPE dfies
      EXCEPTIONS
        not_found
        no_ddic_type.

    CLASS-METHODS get_i RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_int8 RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_f RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_d RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_t RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_decfloat16 RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_decfloat34 RETURNING VALUE(r_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_string RETURNING VALUE(p_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_c
      IMPORTING
        p_length TYPE i
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_p
      IMPORTING
        p_length   TYPE i
        p_decimals TYPE i
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_n
      IMPORTING
        p_length TYPE i
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_x
      IMPORTING
        p_length TYPE i
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_elemdescr.
    CLASS-METHODS get_xstring
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_elemdescr.

ENDCLASS.

CLASS cl_abap_elemdescr IMPLEMENTATION.

  METHOD get_p.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_decfloat16.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_decfloat34.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_n.
    DATA foo TYPE REF TO data.
    CREATE DATA foo TYPE n LENGTH p_length.
    p_result ?= cl_abap_typedescr=>describe_by_data_ref( foo ).
  ENDMETHOD.

  METHOD get_x.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_xstring.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_ddic_field.
    p_flddescr-tabname  = absolute_name.
    p_flddescr-inttype  = type_kind.
    p_flddescr-langu    = sy-langu.
    p_flddescr-position = 1.
    p_flddescr-leng     = length.
    p_flddescr-decimals = decimals.

    WRITE ''@KERNEL p_flddescr.get().domname.set(abap.DDIC[this.relative_name.get()]?.domain || "");''.

* todo, dfies-convexit
  ENDMETHOD.

  METHOD get_i.
    DATA foo TYPE i.
    r_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_int8.
    DATA foo TYPE int8.
    r_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_string.
    DATA foo TYPE string.
    p_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_f.
    DATA foo TYPE f.
    r_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_d.
    DATA foo TYPE d.
    r_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_t.
    DATA foo TYPE t.
    r_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.

  METHOD get_c.
    DATA foo TYPE REF TO data.
    CREATE DATA foo TYPE c LENGTH p_length.
    p_result ?= cl_abap_typedescr=>describe_by_data_ref( foo ).
  ENDMETHOD.

  METHOD get_ddic_fixed_values.

    DATA lv_dummy TYPE string.
    DATA lv_name  TYPE string.
    DATA ls_row   LIKE LINE OF p_fixed_values.

    SPLIT absolute_name AT ''='' INTO lv_dummy lv_name.

    WRITE ''@KERNEL for (const f of abap.DDIC[lv_name.get()]?.fixedValues || []) {''.
    CLEAR ls_row.
    WRITE ''@KERNEL   ls_row.get().low.set(f.low || "");''.
    WRITE ''@KERNEL   ls_row.get().high.set(f.high || "");''.
    WRITE ''@KERNEL   ls_row.get().option.set(f.option || "");''.
    WRITE ''@KERNEL   ls_row.get().ddlanguage.set(f.ddlanguage || "");''.
    WRITE ''@KERNEL   ls_row.get().ddtext.set(f.ddtext || "");''.
    APPEND ls_row TO p_fixed_values.
    WRITE ''@KERNEL }''.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_ENUMDESCR                       ', 'CLASS cl_abap_enumdescr DEFINITION PUBLIC INHERITING FROM cl_abap_elemdescr.
  PUBLIC SECTION.
    TYPES: BEGIN OF member,
             name  TYPE c LENGTH 30,
             value TYPE string,
           END OF member.
    TYPES member_table TYPE STANDARD TABLE OF member WITH KEY name.
    DATA members TYPE member_table READ-ONLY.
ENDCLASS.

CLASS cl_abap_enumdescr IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_INTFDESCR                       ', 'CLASS cl_abap_intfdescr DEFINITION PUBLIC INHERITING FROM cl_abap_objectdescr.
  PUBLIC SECTION.
ENDCLASS.

CLASS cl_abap_intfdescr IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_OBJECTDESCR                     ', 'CLASS cl_abap_objectdescr DEFINITION PUBLIC INHERITING FROM cl_abap_typedescr.
  PUBLIC SECTION.
    CONSTANTS changing  TYPE abap_parmkind VALUE ''C''.
    CONSTANTS exporting TYPE abap_parmkind VALUE ''E''.
    CONSTANTS importing TYPE abap_parmkind VALUE ''I''.
    CONSTANTS receiving TYPE abap_parmkind VALUE ''R''.
    CONSTANTS returning TYPE abap_parmkind VALUE ''R''.

    CONSTANTS private   TYPE abap_visibility VALUE ''I''.
    CONSTANTS protected TYPE abap_visibility VALUE ''O''.
    CONSTANTS public    TYPE abap_visibility VALUE ''U''.

    DATA attributes TYPE abap_attrdescr_tab READ-ONLY.
    DATA methods    TYPE abap_methdescr_tab READ-ONLY.
    DATA interfaces TYPE abap_intfdescr_tab READ-ONLY.

    METHODS constructor
      IMPORTING
        p_object TYPE any OPTIONAL.

    METHODS get_attribute_type
      IMPORTING
        p_name             TYPE any
      RETURNING
        VALUE(p_descr_ref) TYPE REF TO cl_abap_datadescr
      EXCEPTIONS
        attribute_not_found.

    METHODS get_method_parameter_type
      IMPORTING
        p_method_name      TYPE any
        p_parameter_name   TYPE any
      RETURNING
        VALUE(p_descr_ref) TYPE REF TO cl_abap_datadescr
      EXCEPTIONS
        parameter_not_found
        method_not_found.

    METHODS get_interface_type
      IMPORTING
        p_name             TYPE any
      RETURNING
        VALUE(p_descr_ref) TYPE REF TO cl_abap_intfdescr
      EXCEPTIONS
        interface_not_found.

  PROTECTED SECTION.
    DATA mv_object_name TYPE string.
    DATA mv_object_type TYPE string.

    TYPES: BEGIN OF ty_attribute_types,
             name TYPE abap_attrname,
             type TYPE REF TO cl_abap_datadescr,
           END OF ty_attribute_types.
    DATA mt_attribute_types TYPE STANDARD TABLE OF ty_attribute_types WITH DEFAULT KEY.

    TYPES: BEGIN OF ty_parameter_types,
             method    TYPE string,
             parameter TYPE string,
             type      TYPE REF TO data,
           END OF ty_parameter_types.
    DATA mt_parameter_types TYPE STANDARD TABLE OF ty_parameter_types WITH DEFAULT KEY.
ENDCLASS.

CLASS cl_abap_objectdescr IMPLEMENTATION.

  METHOD constructor.
    DATA lv_name  TYPE abap_attrname.
    DATA lv_char1 TYPE c LENGTH 1.
    DATA lv_any   TYPE string.

    FIELD-SYMBOLS <attr>      TYPE abap_attrdescr.
    FIELD-SYMBOLS <intf>      TYPE abap_intfdescr.
    FIELD-SYMBOLS <method>    TYPE abap_methdescr.
    FIELD-SYMBOLS <parameter> TYPE abap_parmdescr.
    FIELD-SYMBOLS <atype>     LIKE LINE OF mt_attribute_types.
    FIELD-SYMBOLS <ptype>     LIKE LINE OF mt_parameter_types.

* set attributes
    WRITE ''@KERNEL for (const a in p_object?.ATTRIBUTES || []) {''.
    WRITE ''@KERNEL   lv_name.set(a);''.
    APPEND INITIAL LINE TO attributes ASSIGNING <attr>.
    APPEND INITIAL LINE TO mt_attribute_types ASSIGNING <atype>.
    <attr>-name = lv_name.
    <atype>-name = lv_name.
    <attr>-is_interface = boolc( lv_name CA ''~'' ).
    WRITE ''@KERNEL   lv_char1.set(p_object.ATTRIBUTES[a].is_constant);''.
    <attr>-is_constant = lv_char1.
    WRITE ''@KERNEL   lv_char1.set(p_object.ATTRIBUTES[a].is_class || "");''.
    <attr>-is_class = lv_char1.
    WRITE ''@KERNEL   lv_char1.set(p_object.ATTRIBUTES[a].visibility);''.
    <attr>-visibility = lv_char1.
    WRITE ''@KERNEL   lv_any = p_object.ATTRIBUTES[a].type();''.
    <atype>-type ?= describe_by_data( lv_any ).
    <attr>-type_kind = <atype>-type->type_kind.
    <attr>-length = <atype>-type->length.
    <attr>-decimals = <atype>-type->decimals.
    WRITE ''@KERNEL }''.
    SORT attributes BY is_interface DESCENDING name ASCENDING.

* set interfaces
    WRITE ''@KERNEL for (const a of p_object?.IMPLEMENTED_INTERFACES || []) {''.
    WRITE ''@KERNEL   lv_name.set(a);''.
    APPEND INITIAL LINE TO interfaces ASSIGNING <intf>.
    <intf>-name = lv_name.
    WRITE ''@KERNEL }''.
    SORT interfaces BY name ASCENDING.

* set methods
    WRITE ''@KERNEL for (const a in p_object?.METHODS || []) {''.
    WRITE ''@KERNEL   lv_name.set(a);''.
    APPEND INITIAL LINE TO methods ASSIGNING <method>.
    <method>-name = lv_name.
    WRITE ''@KERNEL   lv_char1.set(p_object.METHODS[a].visibility);''.
    <method>-visibility = lv_char1.
* set parameters of methods
    WRITE ''@KERNEL for (const p in p_object.METHODS[a].parameters || []) {''.
    APPEND INITIAL LINE TO mt_parameter_types ASSIGNING <ptype>.
    APPEND INITIAL LINE TO <method>-parameters ASSIGNING <parameter>.
    <ptype>-method = <method>-name.
    WRITE ''@KERNEL   lv_name.set(p);''.
    <parameter>-name = lv_name.
    <ptype>-parameter = lv_name.
    WRITE ''@KERNEL   lv_any = p_object.METHODS[a].parameters[p].type();''.
* hmm, cannot call describe_by_data() here, as it can cause inifnite recursion
    GET REFERENCE OF lv_any INTO <ptype>-type.
"     <parameter>-type_kind = <ptype>-type->type_kind.
"     <parameter>-length = <ptype>-type->length.
"     <parameter>-decimals = <ptype>-type->decimals.
" * todo, set PARAM_KIND
    WRITE ''@KERNEL }''.
    WRITE ''@KERNEL }''.
    SORT methods BY name ASCENDING.

    super->constructor( ).
  ENDMETHOD.

  METHOD get_method_parameter_type.
    DATA ls_row LIKE LINE OF mt_parameter_types.
*    WRITE ''@KERNEL   this.mt_parameter_types.array().map(e => console.dir(e.get()));''.
    READ TABLE mt_parameter_types INTO ls_row WITH KEY method = p_method_name parameter = p_parameter_name.
    IF sy-subrc = 0.
      p_descr_ref ?= describe_by_data( ls_row-type->* ).
    ELSE.
      RAISE parameter_not_found.
    ENDIF.
  ENDMETHOD.

  METHOD get_interface_type.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_attribute_type.
    DATA lv_name TYPE abap_attrname.
    DATA ls_type LIKE LINE OF mt_attribute_types.

    lv_name = to_upper( p_name ).
    READ TABLE mt_attribute_types INTO ls_type WITH KEY name = lv_name.
    IF sy-subrc <> 0.
      RAISE attribute_not_found.
    ENDIF.
    p_descr_ref = ls_type-type.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_REFDESCR                        ', 'CLASS cl_abap_refdescr DEFINITION PUBLIC INHERITING FROM cl_abap_datadescr.
  PUBLIC SECTION.
    METHODS get_referenced_type
      RETURNING VALUE(type) TYPE REF TO cl_abap_typedescr.

    CLASS-METHODS get_ref_to_data
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_refdescr.

  PRIVATE SECTION.
    DATA referenced TYPE REF TO cl_abap_typedescr.
ENDCLASS.

CLASS cl_abap_refdescr IMPLEMENTATION.
  METHOD get_referenced_type.
    type = referenced.
  ENDMETHOD.

  METHOD get_ref_to_data.
    DATA foo TYPE REF TO data.
    p_result ?= cl_abap_typedescr=>describe_by_data( foo ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_STRUCTDESCR                     ', 'CLASS cl_abap_structdescr DEFINITION PUBLIC INHERITING FROM cl_abap_complexdescr.
  PUBLIC SECTION.
    CLASS-METHODS
      construct_from_data
        IMPORTING data TYPE any
        RETURNING VALUE(descr) TYPE REF TO cl_abap_structdescr.

    TYPES component       TYPE abap_componentdescr.
    TYPES component_table TYPE abap_component_tab.
    TYPES included_view   TYPE abap_component_view_tab.
    TYPES symbol_table    TYPE abap_component_symbol_tab.

    METHODS
      get_components
        RETURNING
          VALUE(rt_components) TYPE component_table.

    METHODS
      get_ddic_field_list
        IMPORTING
          p_langu                  TYPE syst-langu DEFAULT sy-langu
          p_including_substructres TYPE abap_bool DEFAULT abap_false
        RETURNING
          VALUE(rt_components)     TYPE ddfields
        EXCEPTIONS
          not_found
          no_ddic_type.

    METHODS get_component_type
      IMPORTING
        p_name             TYPE any
      RETURNING
        VALUE(p_descr_ref) TYPE REF TO cl_abap_datadescr
      EXCEPTIONS
        component_not_found
        unsupported_input_type.

    METHODS get_included_view
      IMPORTING
        p_level         TYPE i OPTIONAL
      RETURNING
        VALUE(p_result) TYPE included_view.

    CLASS-METHODS get
      IMPORTING
        p_components    TYPE component_table
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_structdescr
      RAISING
        cx_sy_struct_creation.

    CLASS-METHODS create
      IMPORTING
        p_components TYPE component_table
        p_strict     TYPE abap_bool OPTIONAL
      RETURNING
        VALUE(ref)   TYPE REF TO cl_abap_structdescr.

    METHODS get_symbols
      RETURNING
        VALUE(p_result) TYPE symbol_table.

    DATA components  TYPE abap_compdescr_tab.
    DATA struct_kind TYPE abap_structkind READ-ONLY.

  PRIVATE SECTION.
    METHODS update_components.

    DATA mt_refs TYPE component_table.
ENDCLASS.

CLASS cl_abap_structdescr IMPLEMENTATION.

  METHOD get_symbols.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD create.
    DATA ls_component LIKE LINE OF p_components.
    DATA ls_ref       LIKE LINE OF mt_refs.

    IF lines( p_components ) = 0.
      RAISE EXCEPTION TYPE cx_sy_struct_attributes.
    ENDIF.

    LOOP AT p_components INTO ls_component.
      IF ls_component-name IS INITIAL.
        RAISE EXCEPTION TYPE cx_sy_struct_comp_name.
      ELSEIF ls_component-type IS INITIAL.
        RAISE EXCEPTION TYPE cx_sy_struct_comp_type.
      ELSEIF strlen( ls_component-name ) > 30. " todo, use abap_max_comp_name_ln
        RAISE EXCEPTION TYPE cx_sy_struct_comp_name.
      ENDIF.
    ENDLOOP.

    CREATE OBJECT ref.
    LOOP AT p_components INTO ls_component.
      CLEAR ls_ref.
      ls_ref-name = ls_component-name.
      ls_ref-type = ls_component-type.
      APPEND ls_ref TO ref->mt_refs.
    ENDLOOP.
    ref->update_components( ).

    ref->type_kind = typekind_struct2.
    ref->kind = kind_struct.
  ENDMETHOD.

  METHOD get_included_view.
    DATA ls_component LIKE LINE OF components.
    DATA ls_view      LIKE LINE OF p_result.
    DATA ls_ref       LIKE LINE OF mt_refs.

    LOOP AT components INTO ls_component.
      CLEAR ls_view.

      ls_view-name = ls_component-name.
      READ TABLE mt_refs WITH KEY name = ls_component-name INTO ls_ref.
      IF sy-subrc = 0.
        ls_view-type = ls_ref-type.
      ENDIF.
      IF ls_ref-as_include = abap_true.
        CONTINUE.
      ENDIF.

      INSERT ls_view INTO TABLE p_result.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_ddic_field_list.

    DATA lt_components TYPE component_table.
    DATA ls_component  LIKE LINE OF lt_components.
    DATA ls_return     LIKE LINE OF rt_components.
    DATA lv_name       TYPE string.
    DATA lv_keyfield   TYPE string.
    DATA lo_elemdescr  TYPE REF TO cl_abap_elemdescr.
    FIELD-SYMBOLS <component> LIKE LINE OF rt_components.

    lt_components = get_components( ).

    ASSERT absolute_name CP ''+TYPE=*''.
    lv_name = absolute_name+6.

    LOOP AT lt_components INTO ls_component.
      CLEAR ls_return.
      ls_return-tabname = lv_name.
      ls_return-fieldname = ls_component-name.
      IF ls_component-type->kind = cl_abap_typedescr=>kind_elem.
        lo_elemdescr ?= ls_component-type.
        ls_return-leng = lo_elemdescr->output_length.
      ENDIF.
* todo, fill more fields in ls_return
      APPEND ls_return TO rt_components.
    ENDLOOP.

*    WRITE ''@KERNEL console.dir(abap.DDIC[lv_name.get()]?.keyFields);''.
    WRITE ''@KERNEL for (const keyfield of abap.DDIC[lv_name.get()]?.keyFields || [] ) {''.
    WRITE ''@KERNEL lv_keyfield.set(keyfield);''.
*    WRITE ''@KERNEL console.dir(rt_components.array()[0].get());''.
    READ TABLE rt_components ASSIGNING <component> WITH KEY fieldname = lv_keyfield.
    ASSERT sy-subrc = 0.
    <component>-keyflag = abap_true.
    WRITE ''@KERNEL }''.

  ENDMETHOD.

  METHOD construct_from_data.
* todo, this method should be private
    DATA lv_name       TYPE string.
    DATA ls_ref        LIKE LINE OF mt_refs.
    DATA lv_suffix     TYPE string.
    DATA lv_as_include TYPE abap_bool.
    DATA lo_datadescr  TYPE REF TO cl_abap_datadescr.

    FIELD-SYMBOLS <fs> TYPE any.

    CREATE OBJECT descr.

* todo, fail if input is not a structure?
    WRITE ''@KERNEL for (const name of Object.keys(INPUT.data.value)) {''.
    WRITE ''@KERNEL   lv_name.set(name.toUpperCase());''.
    ASSIGN COMPONENT lv_name OF STRUCTURE data TO <fs>.
    lo_datadescr ?= cl_abap_typedescr=>describe_by_data( <fs> ).
    ls_ref-name = lv_name.
    ls_ref-type = lo_datadescr.

    WRITE ''@KERNEL if (INPUT.data?.getAsInclude) {''.
    WRITE ''@KERNEL   lv_as_include.set(INPUT.data?.getAsInclude()?.[name.toLowerCase()] ? "X" : " ");''.
    WRITE ''@KERNEL }''.
    ls_ref-as_include = lv_as_include.

    WRITE ''@KERNEL if (INPUT.data?.getSuffix) {''.
    WRITE ''@KERNEL   lv_as_include.set(INPUT.data?.getSuffix()?.[name.toLowerCase()] || "");''.
    WRITE ''@KERNEL }''.
    ls_ref-suffix = lv_suffix.

    APPEND ls_ref TO descr->mt_refs.
    WRITE ''@KERNEL }''.

    descr->update_components( ).
  ENDMETHOD.

  METHOD update_components.
    DATA ls_component LIKE LINE OF components.
    FIELD-SYMBOLS <ls_ref> LIKE LINE OF mt_refs.

    CLEAR components.
    LOOP AT mt_refs ASSIGNING <ls_ref>.
      ls_component-name = <ls_ref>-name.
      ls_component-type_kind = <ls_ref>-type->type_kind.
      ls_component-length = <ls_ref>-type->length.
      ls_component-decimals = <ls_ref>-type->decimals.
      APPEND ls_component TO components.
    ENDLOOP.
  ENDMETHOD.

  METHOD get_components.
    rt_components = mt_refs.
  ENDMETHOD.

  METHOD get_component_type.
    FIELD-SYMBOLS <line> LIKE LINE OF mt_refs.
    READ TABLE mt_refs ASSIGNING <line> WITH KEY name = p_name.
    IF sy-subrc <> 0.
      RAISE component_not_found.
    ELSE.
      p_descr_ref = <line>-type.
    ENDIF.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_TABLEDESCR                      ', 'CLASS cl_abap_tabledescr DEFINITION PUBLIC INHERITING FROM cl_abap_datadescr.
  PUBLIC SECTION.
    DATA has_unique_key TYPE abap_bool READ-ONLY.
    DATA key            TYPE abap_keydescr_tab READ-ONLY.
    DATA key_defkind    TYPE abap_keydefkind READ-ONLY.
    DATA table_kind     TYPE abap_tablekind.

    CONSTANTS tablekind_any TYPE c LENGTH 1 VALUE ''A''.
    CONSTANTS tablekind_std TYPE c LENGTH 1 VALUE ''S''.
    CONSTANTS tablekind_index TYPE c LENGTH 1 VALUE ''I''.
    CONSTANTS tablekind_hashed TYPE c LENGTH 1 VALUE ''H''.
    CONSTANTS tablekind_sorted TYPE c LENGTH 1 VALUE ''O''.

    CONSTANTS keydefkind_default TYPE c LENGTH 1 VALUE ''D''.
    CONSTANTS keydefkind_tableline TYPE c LENGTH 1 VALUE ''L''.
    CONSTANTS keydefkind_user TYPE c LENGTH 1 VALUE ''U''.
    CONSTANTS keydefkind_empty TYPE c LENGTH 1 VALUE ''E''.

    CLASS-METHODS
      construct_from_data
        IMPORTING data TYPE any
        RETURNING VALUE(descr) TYPE REF TO cl_abap_tabledescr.

    METHODS get_table_line_type
      RETURNING
        VALUE(type) TYPE REF TO cl_abap_datadescr.

    CLASS-METHODS get
      IMPORTING type TYPE REF TO cl_abap_typedescr
      RETURNING VALUE(val) TYPE REF TO cl_abap_tabledescr.

    CLASS-METHODS get_with_keys
      IMPORTING
        p_line_type     TYPE REF TO cl_abap_datadescr
        p_keys          TYPE abap_table_keydescr_tab
      RETURNING
        VALUE(p_result) TYPE REF TO cl_abap_tabledescr.

    CLASS-METHODS create
      IMPORTING
        p_line_type  TYPE REF TO cl_abap_typedescr
        p_table_kind TYPE abap_tablekind DEFAULT tablekind_std
        p_unique     TYPE abap_bool DEFAULT abap_false
        p_key        TYPE abap_keydescr_tab OPTIONAL
        p_key_kind   TYPE abap_keydefkind DEFAULT keydefkind_default
      RETURNING
        VALUE(ref) TYPE REF TO cl_abap_tabledescr.

    METHODS get_keys
      RETURNING
        VALUE(p_keys) TYPE abap_table_keydescr_tab.

  PRIVATE SECTION.
    DATA mo_line_type TYPE REF TO cl_abap_typedescr.
    DATA mt_keys      TYPE abap_table_keydescr_tab.
ENDCLASS.

CLASS cl_abap_tabledescr IMPLEMENTATION.

  METHOD create.

    CREATE OBJECT ref.
    ref->has_unique_key = p_unique.
    ref->mo_line_type   = p_line_type.
    ref->key            = p_key.
    ref->key_defkind    = p_key_kind.
    ref->table_kind     = p_table_kind.

    " cl_abap_typedescr
    ref->type_kind      = typekind_table.
    ref->kind           = kind_table.

  ENDMETHOD.

  METHOD get_keys.
    p_keys = mt_keys.
  ENDMETHOD.

  METHOD get_with_keys.

    DATA ls_key LIKE LINE OF p_keys.

    IF lines( p_keys ) <> 1.
      ASSERT 1 = ''todo''.
    ENDIF.
    READ TABLE p_keys INDEX 1 INTO ls_key.
    ASSERT sy-subrc = 0.

    CREATE OBJECT p_result.
    p_result->has_unique_key = ls_key-is_unique.
    p_result->mo_line_type   = p_line_type.
    p_result->key_defkind    = ls_key-key_kind.
    p_result->table_kind     = ls_key-access_kind.
    p_result->mt_keys        = p_keys.

    " cl_abap_typedescr
    p_result->type_kind      = typekind_table.
    p_result->kind           = kind_table.

  ENDMETHOD.

  METHOD get.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD construct_from_data.
* todo, this method should be private
    DATA lv_dummy      TYPE i.
    DATA lv_flag       TYPE abap_bool.
    DATA lv_str        TYPE string.
    DATA lv_type       TYPE string.
    DATA lo_struct     TYPE REF TO cl_abap_structdescr.
    DATA lt_components TYPE cl_abap_structdescr=>component_table.
    DATA ls_component  LIKE LINE OF lt_components.
    DATA ls_key        TYPE LINE OF abap_keydescr_tab.

    CREATE OBJECT descr.

    WRITE ''@KERNEL lv_flag.set(data.getOptions()?.primaryKey?.isUnique === true ? "X" : "");''.
    descr->has_unique_key = lv_flag.

    WRITE ''@KERNEL lv_type.set(data.getOptions()?.primaryKey?.type || "");''.
    CASE lv_type.
      WHEN ''STANDARD''.
        descr->table_kind = tablekind_std.
      WHEN ''SORTED''.
        descr->table_kind = tablekind_sorted.
      WHEN ''HASHED''.
        descr->table_kind = tablekind_hashed.
      WHEN OTHERS.
        descr->table_kind = tablekind_std.
    ENDCASE.

    WRITE ''@KERNEL lv_dummy = data.getRowType();''.
    descr->mo_line_type = cl_abap_typedescr=>describe_by_data( lv_dummy ).

    WRITE ''@KERNEL lv_flag.set(data.getOptions()?.primaryKey?.keyFields.length > 0 ? "X" : "");''.
    IF lv_flag = abap_true.
      descr->key_defkind = keydefkind_user.

      WRITE ''@KERNEL for (const k of data.getOptions()?.primaryKey?.keyFields) {''.
      WRITE ''@KERNEL lv_str.set(k);''.
      ls_key-name = lv_str.
      APPEND ls_key TO descr->key.
      WRITE ''@KERNEL }''.

      IF lines( descr->key ) = 1 AND ls_key-name = ''TABLE_LINE''.
        descr->key_defkind = keydefkind_tableline.
      ENDIF.
    ELSE.
* EMPTY KEY currently not supported in open-abap
      descr->key_defkind = keydefkind_default.
      IF descr->mo_line_type->kind = kind_struct.
        lo_struct ?= descr->mo_line_type.
        lt_components = lo_struct->get_components( ).
        LOOP AT lt_components INTO ls_component.
          ls_key-name = ls_component-name.
          APPEND ls_key TO descr->key.
        ENDLOOP.
      ENDIF.
    ENDIF.

  ENDMETHOD.

  METHOD get_table_line_type.
    type ?= mo_line_type.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_TYPEDESCR                       ', 'CLASS cl_abap_typedescr DEFINITION PUBLIC.
* todo, this class should be ABSTRACT
  PUBLIC SECTION.
    CLASS-METHODS
      describe_by_data
        IMPORTING p_data TYPE any
        RETURNING VALUE(type) TYPE REF TO cl_abap_typedescr.

    CLASS-METHODS
      describe_by_name
        IMPORTING
          p_name TYPE clike
        RETURNING
          VALUE(type) TYPE REF TO cl_abap_typedescr
        EXCEPTIONS
          type_not_found.

    CLASS-METHODS
      describe_by_data_ref
        IMPORTING p_data_ref TYPE REF TO data
        RETURNING VALUE(type) TYPE REF TO cl_abap_typedescr.

    CLASS-METHODS
      describe_by_object_ref
        IMPORTING
          p_object_ref TYPE REF TO object
        RETURNING
          VALUE(p_descr_ref) TYPE REF TO cl_abap_typedescr
        EXCEPTIONS
          reference_is_initial.

    METHODS get_ddic_header
      RETURNING
        VALUE(p_header) TYPE abap_bool. " hmm, todo

    METHODS
      get_relative_name
        RETURNING
          VALUE(name) TYPE string.

    METHODS
      is_ddic_type
        RETURNING
          VALUE(p_abap_bool) TYPE abap_bool.

    METHODS is_instantiatable
      RETURNING
        VALUE(p_result) TYPE abap_bool.

    METHODS get_ddic_object
      RETURNING
        VALUE(p_object) TYPE string_table
      EXCEPTIONS
        not_found
        no_ddic_type.

    DATA type_kind     TYPE abap_typekind.
    DATA kind          TYPE c LENGTH 1.
    DATA ddic          TYPE abap_bool.
    DATA length        TYPE i.
    DATA decimals      TYPE i.
    DATA absolute_name TYPE abap_abstypename.
    DATA relative_name TYPE string.

    CONSTANTS typekind_any TYPE abap_typekind VALUE ''~''.
    CONSTANTS typekind_char TYPE abap_typekind VALUE ''C''.
    CONSTANTS typekind_class TYPE abap_typekind VALUE ''*''.
    CONSTANTS typekind_clike TYPE abap_typekind VALUE ''&''.
    CONSTANTS typekind_csequence TYPE abap_typekind VALUE ''?''.
    CONSTANTS typekind_data TYPE abap_typekind VALUE ''#''.
    CONSTANTS typekind_date TYPE abap_typekind VALUE ''D''.
    CONSTANTS typekind_decfloat TYPE abap_typekind VALUE ''/''.
    CONSTANTS typekind_decfloat16 TYPE abap_typekind VALUE ''a''.
    CONSTANTS typekind_decfloat34 TYPE abap_typekind VALUE ''e''.
    CONSTANTS typekind_dref TYPE abap_typekind VALUE ''l''.
    CONSTANTS typekind_enum TYPE abap_typekind VALUE ''k''.
    CONSTANTS typekind_float TYPE abap_typekind VALUE ''F''.
    CONSTANTS typekind_hex TYPE abap_typekind VALUE ''X''.
    CONSTANTS typekind_int TYPE abap_typekind VALUE ''I''.
    CONSTANTS typekind_int1 TYPE abap_typekind VALUE ''b''.
    CONSTANTS typekind_int2 TYPE abap_typekind VALUE ''s''.
    CONSTANTS typekind_int8 TYPE abap_typekind VALUE ''8''.
    CONSTANTS typekind_intf TYPE abap_typekind VALUE ''+''.
    CONSTANTS typekind_iref TYPE abap_typekind VALUE ''m''.
    CONSTANTS typekind_num TYPE abap_typekind VALUE ''N''.
    CONSTANTS typekind_numeric TYPE abap_typekind VALUE ''%''.
    CONSTANTS typekind_oref TYPE abap_typekind VALUE ''r''.
    CONSTANTS typekind_packed TYPE abap_typekind VALUE ''P''.
    CONSTANTS typekind_simple TYPE abap_typekind VALUE ''$''.
    CONSTANTS typekind_string TYPE abap_typekind VALUE ''g''.
    CONSTANTS typekind_struct1 TYPE abap_typekind VALUE ''u''.
    CONSTANTS typekind_struct2 TYPE abap_typekind VALUE ''v''.
    CONSTANTS typekind_table TYPE abap_typekind VALUE ''h''.
    CONSTANTS typekind_time TYPE abap_typekind VALUE ''T''.
    CONSTANTS typekind_utclong TYPE abap_typekind VALUE ''p''.
    CONSTANTS typekind_w TYPE abap_typekind VALUE ''w''.
    CONSTANTS typekind_xstring TYPE abap_typekind VALUE ''y''.

    CONSTANTS kind_elem   TYPE c LENGTH 1 VALUE ''E''.
    CONSTANTS kind_struct TYPE c LENGTH 1 VALUE ''S''.
    CONSTANTS kind_table  TYPE c LENGTH 1 VALUE ''T''.
    CONSTANTS kind_ref    TYPE c LENGTH 1 VALUE ''R''.
    CONSTANTS kind_class  TYPE c LENGTH 1 VALUE ''C''.
    CONSTANTS kind_intf   TYPE c LENGTH 1 VALUE ''I''.

  PRIVATE SECTION.
    CLASS-DATA gv_counter TYPE n LENGTH 10.

    CLASS-METHODS describe_by_dashes
      IMPORTING p_name TYPE clike
      RETURNING VALUE(type) TYPE REF TO cl_abap_typedescr.

    CLASS-METHODS is_deep
      IMPORTING  io_struct TYPE REF TO cl_abap_structdescr
      RETURNING VALUE(rv_deep) TYPE abap_bool.
ENDCLASS.

CLASS cl_abap_typedescr IMPLEMENTATION.

  METHOD get_ddic_object.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD is_instantiatable.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD describe_by_dashes.
    DATA lt_parts   TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA lv_part    LIKE LINE OF lt_parts.
    DATA lo_current TYPE REF TO cl_abap_typedescr.
    DATA lo_struct  TYPE REF TO cl_abap_structdescr.

    SPLIT p_name AT ''-'' INTO TABLE lt_parts.

    LOOP AT lt_parts INTO lv_part.
      IF lo_current IS INITIAL.
        lo_current = describe_by_name( lv_part ).
      ELSEIF lo_current->kind = kind_struct.
        lo_struct ?= lo_current.
        lo_current = lo_struct->get_component_type( lv_part ).
      ENDIF.
    ENDLOOP.

    type = lo_current.
  ENDMETHOD.

  METHOD describe_by_name.
    DATA ref         TYPE REF TO data.
    DATA objectdescr TYPE REF TO cl_abap_objectdescr.
    DATA oo_type     TYPE string.
    DATA lv_any      TYPE string.

* note, p_name might be internal name, so check and skip these,
    IF p_name CA ''-'' AND p_name NP ''CLAS-*'' AND p_name NP ''PROG-*''.
      type = describe_by_dashes( p_name ).
      RETURN.
    ENDIF.

    WRITE ''@KERNEL oo_type.set(abap.Classes[p_name.get().toUpperCase().trimEnd()]?.INTERNAL_TYPE || "");''.
    WRITE ''@KERNEL lv_any = abap.Classes[p_name.get().toUpperCase().trimEnd()];''.

    CASE oo_type.
      WHEN ''INTF''.
        CREATE OBJECT type TYPE cl_abap_intfdescr
          EXPORTING
            p_object = lv_any.
        type->type_kind = typekind_intf.
        type->kind = kind_intf.
        type->relative_name = to_upper( p_name ).
        type->absolute_name = ''\\CLASS='' && to_upper( p_name ).
        objectdescr ?= type.
        objectdescr->mv_object_name = to_upper( p_name ). " todo, this should give syntax error, as they are not friends
        objectdescr->mv_object_type = oo_type. " todo, this should give syntax error, as they are not friends
      WHEN ''CLAS''.
        CREATE OBJECT type TYPE cl_abap_classdescr.
        type->type_kind = typekind_class.
        type->kind = kind_class.
        type->relative_name = to_upper( p_name ).
        IF p_name CP ''CLAS-*''.
          type->absolute_name = kernel_internal_name=>internal_to_rtti( p_name ).
        ELSE.
          type->absolute_name = ''\\CLASS='' && to_upper( p_name ).
        ENDIF.
        objectdescr ?= type.
        objectdescr->mv_object_name = to_upper( p_name ). " todo, this should give syntax error, as they are not friends
        objectdescr->mv_object_type = oo_type. " todo, this should give syntax error, as they are not friends
      WHEN OTHERS.
        TRY.
            CREATE DATA ref TYPE (p_name).
          CATCH cx_sy_create_data_error.
            RAISE type_not_found.
        ENDTRY.
        type = describe_by_data_ref( ref ).
    ENDCASE.
  ENDMETHOD.

  METHOD get_relative_name.
    name = relative_name.
  ENDMETHOD.

  METHOD get_ddic_header.
    ASSERT 1 = 2.
  ENDMETHOD.

  METHOD is_ddic_type.
    p_abap_bool = ddic.
  ENDMETHOD.

  METHOD describe_by_data_ref.
    FIELD-SYMBOLS <ref> TYPE any.
    ASSIGN p_data_ref->* TO <ref>.
    type = describe_by_data( <ref> ).
  ENDMETHOD.

  METHOD describe_by_object_ref.
    DATA lv_name   TYPE string.
    DATA lo_cdescr TYPE REF TO cl_abap_classdescr.
    DATA lv_any    TYPE string.

    IF p_object_ref IS INITIAL.
      RAISE reference_is_initial.
    ENDIF.

    WRITE ''@KERNEL lv_any = p_object_ref.get().constructor;''.

    CREATE OBJECT lo_cdescr TYPE cl_abap_classdescr
      EXPORTING
        p_object = lv_any.
    lo_cdescr->type_kind = typekind_class.
    lo_cdescr->kind = kind_class.

    WRITE ''@KERNEL lv_name.set(p_object_ref.get().constructor.name.toUpperCase());''.

    lo_cdescr->relative_name = lv_name.
    lo_cdescr->absolute_name = ''\\CLASS='' && lv_name.

    p_descr_ref = lo_cdescr.
  ENDMETHOD.

  METHOD is_deep.

    DATA lt_components TYPE cl_abap_structdescr=>component_table.
    FIELD-SYMBOLS <ls_component> LIKE LINE OF lt_components.

    lt_components = io_struct->get_components( ).
    rv_deep = abap_false.

    LOOP AT lt_components ASSIGNING <ls_component>.
      IF <ls_component>-type->kind = kind_struct
          OR <ls_component>-type->type_kind = typekind_string
          OR <ls_component>-type->type_kind = typekind_xstring
          OR <ls_component>-type->kind = kind_table.
        rv_deep = abap_true.
        RETURN.
      ENDIF.
    ENDLOOP.

  ENDMETHOD.

  METHOD describe_by_data.

    DATA lo_elem      TYPE REF TO cl_abap_elemdescr.
    DATA lo_ref       TYPE REF TO cl_abap_refdescr.
    DATA lo_struct    TYPE REF TO cl_abap_structdescr.
    DATA lv_any       TYPE string.
    DATA lv_convexit  TYPE string.
    DATA lv_ddicname  TYPE string.
    DATA lv_decimals  TYPE i.
    DATA lv_length    TYPE i.
    DATA lv_name      TYPE string.
    DATA lv_prefix    TYPE string.
    DATA lv_qualified TYPE string.
    DATA lv_rtti_name TYPE string.

    WRITE ''@KERNEL lv_name.set(p_data.constructor.name);''.
    WRITE ''@KERNEL lv_length.set(p_data.getLength ? p_data.getLength() : 0);''.
    WRITE ''@KERNEL lv_decimals.set(p_data.getDecimals ? p_data.getDecimals() : 0);''.

* These are the constructor names from the js runtime
    CASE lv_name.
      WHEN ''Integer''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_int.
        type->kind = kind_elem.
        type->length = 4.
        lo_elem ?= type.
        lo_elem->output_length = 11.
        type->absolute_name = ''I''.
      WHEN ''Integer8''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_int8.
        type->kind = kind_elem.
        type->length = 8.
        lo_elem ?= type.
        lo_elem->output_length = 20.
        type->absolute_name = ''INT8''.
      WHEN ''Numc''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_num.
        type->kind = kind_elem.
        type->length = lv_length * 2.
        lo_elem ?= type.
        lo_elem->output_length = lv_length.
      WHEN ''Hex'' OR ''HexUInt8''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_hex.
        type->kind = kind_elem.
        type->length = lv_length.
        lo_elem ?= type.
        lo_elem->output_length = lv_length * 2.
      WHEN ''Date''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_date.
        type->kind = kind_elem.
        type->length = 16.
        lo_elem ?= type.
        lo_elem->output_length = 8.
        type->absolute_name = ''D''.
      WHEN ''Packed''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_packed.
        type->kind = kind_elem.
        type->length = lv_length.
        type->decimals = lv_decimals.
      WHEN ''Time''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_time.
        type->kind = kind_elem.
        type->length = 12.
        lo_elem ?= type.
        lo_elem->output_length = 6.
        type->absolute_name = ''T''.
      WHEN ''Float''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_float.
        type->kind = kind_elem.
        type->absolute_name = ''F''.
      WHEN ''DecFloat34''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_decfloat34.
        type->kind = kind_elem.
      WHEN ''Structure''.
        lo_struct = cl_abap_structdescr=>construct_from_data( p_data ).
        type ?= lo_struct.
        IF is_deep( lo_struct ) = abap_true.
          type->type_kind = typekind_struct2.
        ELSE.
          type->type_kind = typekind_struct1.
        ENDIF.
        type->kind = kind_struct.
      WHEN ''Table'' OR ''HashedTable''.
        type ?= cl_abap_tabledescr=>construct_from_data( p_data ).
        type->type_kind = typekind_table.
        type->kind = kind_table.
        type->length = 8. " yea, well, because it is. Pointer size?
      WHEN ''XString''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_xstring.
        type->kind = kind_elem.
        type->length = 8.
        type->absolute_name = ''XSTRING''.
      WHEN ''String''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_string.
        type->kind = kind_elem.
        type->length = 8.
        type->absolute_name = ''STRING''.
      WHEN ''Character''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_char.
        type->kind = kind_elem.
        type->length = lv_length * 2.
        lo_elem ?= type.
        lo_elem->output_length = lv_length.
      WHEN ''FieldSymbol''.
        WRITE ''@KERNEL lv_name = p_data.getPointer();''.
        type = describe_by_data( lv_name ).
        RETURN.
      WHEN ''ABAPObject''.
        CREATE OBJECT type TYPE cl_abap_refdescr.
        type->type_kind = typekind_oref.
        type->kind = kind_ref.

        lo_ref ?= type.
        IF p_data IS INITIAL.
* note: using the name doesnt work for local classes
          WRITE ''@KERNEL lv_rtti_name.set(p_data.RTTIName || "");''.
          IF lv_rtti_name CP ''\\CLASS-POOL=*''.
* convert to internal name,
            lv_rtti_name = kernel_internal_name=>rtti_to_internal( lv_rtti_name ).
            lo_ref->referenced = describe_by_name( lv_rtti_name ).
          ELSE.
            WRITE ''@KERNEL lv_name.set(p_data.qualifiedName || "");''.
            lo_ref->referenced = describe_by_name( lv_name ).
          ENDIF.
        ELSE.
          lo_ref->referenced = describe_by_object_ref( p_data ).
        ENDIF.
      WHEN ''UTCLong''.
        CREATE OBJECT type TYPE cl_abap_elemdescr.
        type->type_kind = typekind_utclong.
        type->kind = kind_elem.
      WHEN ''DataReference''.
        CREATE OBJECT type TYPE cl_abap_refdescr.
        type->type_kind = typekind_dref.
        type->kind = kind_ref.

        lo_ref ?= type.
        WRITE ''@KERNEL lv_any = p_data.type;''.
        lo_ref->referenced = describe_by_data( lv_any ).
      WHEN OTHERS.
        WRITE / lv_name.
        ASSERT 1 = ''todo_cl_abap_typedescr''.
    ENDCASE.

*    WRITE ''@KERNEL console.dir(p_data);''.

    WRITE ''@KERNEL lv_ddicname.set(p_data.getDDICName ? p_data.getDDICName() || "" : "");''.
    WRITE ''@KERNEL lv_convexit.set(p_data.getConversionExit ? p_data.getConversionExit() || "" : "");''.
    WRITE ''@KERNEL lv_qualified.set(p_data.getQualifiedName ? p_data.getQualifiedName() || "" : "");''.

    IF lv_qualified NA ''-''.
      type->absolute_name = lv_qualified.
    ELSEIF lv_ddicname <> ''''.
      type->absolute_name = lv_ddicname.
    ENDIF.

* this is not completely correct, local type names and ddic names might overlap, but will work for now,
* todo: use/check getDDICName() in the future,
    WRITE ''@KERNEL if(abap.DDIC[type.get().absolute_name.get().toUpperCase().trimEnd()]) { type.get().ddic.set("X"); }''.

    TRANSLATE type->absolute_name TO UPPER CASE.
    TRANSLATE type->relative_name TO UPPER CASE.

    IF type->absolute_name = ''ABAP_BOOL''.
      type->relative_name = ''ABAP_BOOL''.
      type->absolute_name = ''\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL''.
    ELSEIF type->absolute_name IS INITIAL.
      gv_counter = gv_counter + 1.
      type->absolute_name = ''\\TYPE=%_T000000000000000'' && gv_counter.
    ELSEIF type->absolute_name CS ''=>''.
      SPLIT type->absolute_name AT ''=>'' INTO lv_prefix type->absolute_name.
      type->relative_name = type->absolute_name.
      type->absolute_name = ''\\CLASS='' && lv_prefix && ''\\TYPE='' && type->absolute_name.
    ELSEIF type->type_kind = typekind_oref.
      type->relative_name = type->absolute_name.
      type->absolute_name = ''\\CLASS='' && type->absolute_name.
    ELSE.
      type->relative_name = type->absolute_name.
      type->absolute_name = ''\\TYPE='' && type->absolute_name.
    ENDIF.

    IF lv_convexit <> ''''.
      lo_elem->edit_mask = ''=='' && lv_convexit.
    ENDIF.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SHM_AREA                             ', 'CLASS cl_shm_area DEFINITION PUBLIC INHERITING FROM cx_shm_general_error ABSTRACT.
  PUBLIC SECTION.
    CONSTANTS default_instance TYPE shm_inst_name VALUE ''$DEFAULT_INSTANCE$''.
    CONSTANTS invocation_mode_explicit TYPE shm_constr_invocation_mode VALUE 319200300.
    CONSTANTS life_context_appserver TYPE shm_life_context VALUE 109200001.
    CONSTANTS attach_mode_default TYPE shm_attach_mode VALUE 1302197000.
    CONSTANTS attach_mode_wait TYPE shm_attach_mode VALUE 1302197002.
    CONSTANTS affect_local_server TYPE shm_affect_server VALUE 281119720.

    DATA properties TYPE shm_properties READ-ONLY.
    DATA inst_name  TYPE shm_inst_name READ-ONLY.
    DATA client     TYPE mandt READ-ONLY.

    METHODS detach_commit
      RAISING
        cx_shm_wrong_handle
        cx_shm_already_detached
        cx_shm_secondary_commit
        cx_shm_event_execution_failed
        cx_shm_completion_error.

    METHODS detach
      RAISING
        cx_shm_wrong_handle
        cx_shm_already_detached.

    METHODS get_root ABSTRACT
      RETURNING
        VALUE(root) TYPE REF TO object
      RAISING
        cx_shm_already_detached.

    METHODS is_valid
      RETURNING
        VALUE(valid) TYPE abap_bool.

  PROTECTED SECTION.
    DATA inst_trace_active TYPE abap_bool VALUE abap_false.
    DATA inst_trace_service TYPE REF TO if_shm_trace.
    DATA _lock TYPE %_c_pointer.
    CONSTANTS attach_mode_wait_2nd_try TYPE shm_attach_mode VALUE 1302197003.

    METHODS _attach_read71
      IMPORTING
        sneak_mode   TYPE abap_bool DEFAULT abap_false
        area_name    TYPE shm_area_name
        life_context TYPE shm_life_context
      EXPORTING
        root         TYPE REF TO object
      RAISING
        cx_shm_inconsistent
        cx_shm_no_active_version
        cx_shm_read_lock_active
        cx_shm_exclusive_lock_active
        cx_shm_parameter_error
        cx_shm_change_lock_active.

    METHODS _attach_update70
      IMPORTING
        area_name TYPE shm_area_name
        mode      TYPE shm_attach_mode
      EXPORTING
        root      TYPE REF TO object
      CHANGING
        wait_time TYPE i OPTIONAL
      RAISING
        cx_shm_inconsistent
        cx_shm_exclusive_lock_active
        cx_shm_change_lock_active
        cx_shm_version_limit_exceeded
        cx_shm_no_active_version
        cx_shm_parameter_error
        cx_shm_pending_lock_removed.

    METHODS _attach_write70
      IMPORTING
        area_name TYPE shm_area_name
        mode      TYPE shm_attach_mode
      EXPORTING
        root      TYPE REF TO object
      CHANGING
        wait_time TYPE i OPTIONAL
      RAISING
        cx_shm_version_limit_exceeded
        cx_shm_exclusive_lock_active
        cx_shm_change_lock_active
        cx_shm_parameter_error
        cx_shm_pending_lock_removed.

    CLASS-METHODS _invalidate_area71
      IMPORTING
        area_name TYPE shm_area_name
        client TYPE shm_client
        client_supplied TYPE abap_bool DEFAULT abap_false
        transactional TYPE abap_bool DEFAULT abap_false
        client_dependent TYPE abap_bool DEFAULT abap_false
        terminate_changer TYPE abap_bool
        affect_server TYPE shm_affect_server
        life_context TYPE shm_life_context DEFAULT life_context_appserver
      RETURNING
        VALUE(rc) TYPE shm_rc
      RAISING
        cx_shm_parameter_error.

    CLASS-METHODS _invalidate_instance71
      IMPORTING
        area_name TYPE shm_area_name
        inst_name TYPE shm_inst_name
        client TYPE shm_client
        client_supplied TYPE abap_bool DEFAULT abap_false
        transactional TYPE abap_bool DEFAULT abap_false
        client_dependent TYPE abap_bool DEFAULT abap_false
        terminate_changer TYPE abap_bool
        affect_server TYPE shm_affect_server
        life_context TYPE shm_life_context DEFAULT life_context_appserver
      RETURNING
        VALUE(rc) TYPE shm_rc
      RAISING
        cx_shm_parameter_error.

    METHODS _set_root
      IMPORTING
        root TYPE REF TO object
      RAISING
        cx_shm_wrong_handle
        cx_shm_initial_reference.

    CLASS-METHODS _detach_area71
      IMPORTING
        area_name        TYPE shm_area_name
        client           TYPE shm_client
        client_supplied  TYPE abap_bool
        client_dependent TYPE abap_bool DEFAULT abap_false
        life_context     TYPE shm_life_context
      RETURNING
        VALUE(rc)        TYPE shm_rc.

    CLASS-METHODS _free_area71
      IMPORTING
        area_name TYPE shm_area_name
        client TYPE shm_client
        client_supplied TYPE abap_bool DEFAULT abap_false
        transactional TYPE abap_bool DEFAULT abap_false
        client_dependent TYPE abap_bool DEFAULT abap_false
        terminate_changer TYPE abap_bool
        affect_server TYPE shm_affect_server
        life_context TYPE shm_life_context DEFAULT life_context_appserver
      RETURNING
        VALUE(rc) TYPE shm_rc
      RAISING
        cx_shm_parameter_error.

    CLASS-METHODS _get_instance_infos71
      IMPORTING
        area_name        TYPE shm_area_name
        client           TYPE shm_client
        client_supplied  TYPE abap_bool DEFAULT abap_false
        client_dependent TYPE abap_bool DEFAULT abap_false
        life_context     TYPE shm_life_context
      RETURNING
        VALUE(infos)     TYPE shm_inst_infos.

    CLASS-METHODS _free_instance71
      IMPORTING
        area_name         TYPE shm_area_name
        inst_name         TYPE shm_inst_name
        client            TYPE shm_client
        client_supplied   TYPE abap_bool DEFAULT abap_false
        transactional     TYPE abap_bool DEFAULT abap_false
        client_dependent  TYPE abap_bool DEFAULT abap_false
        terminate_changer TYPE abap_bool
        affect_server     TYPE shm_affect_server
        life_context      TYPE shm_life_context DEFAULT life_context_appserver
      RETURNING
        VALUE(rc)         TYPE shm_rc
      RAISING
        cx_shm_parameter_error.
  PRIVATE SECTION.
    CLASS-DATA mo_root TYPE REF TO object.
ENDCLASS.

CLASS cl_shm_area IMPLEMENTATION.

  METHOD is_valid.
    valid = abap_true.
  ENDMETHOD.

  METHOD _free_instance71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD detach_commit.
    RETURN.
  ENDMETHOD.

  METHOD detach.
    RETURN.
  ENDMETHOD.

  METHOD _attach_read71.
    DATA created TYPE REF TO object.
    DATA lv_name TYPE string.

    IF sneak_mode = abap_false AND mo_root IS INITIAL.
      lv_name = area_name.
* todo, this is an evil workaround
      REPLACE FIRST OCCURRENCE OF ''_AREA'' IN lv_name WITH ''_ROOT''.
      CREATE OBJECT created TYPE (lv_name).

      _set_root( created ).
    ENDIF.

    root = mo_root.
  ENDMETHOD.

  METHOD _get_instance_infos71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD _detach_area71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD _free_area71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD _set_root.
    mo_root = root.
  ENDMETHOD.

  METHOD _invalidate_instance71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD _invalidate_area71.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD _attach_update70.
    DATA created TYPE REF TO object.
    DATA lv_name TYPE string.

    IF mo_root IS INITIAL.
* todo, this should respect the auto build flag configuration from the SHMA area
* todo, this is an evil workaround
      REPLACE FIRST OCCURRENCE OF ''_AREA'' IN lv_name WITH ''_ROOT''.
      CREATE OBJECT created TYPE (lv_name).

      _set_root( created ).
    ENDIF.
* open-abap is currently single threaded, so no lock conflicts
    root = mo_root.
  ENDMETHOD.

  METHOD _attach_write70.
* open-abap is currently single threaded, so no lock conflicts
    RETURN.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SHM_SERVICE                          ', 'CLASS cl_shm_service DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS initialize
      IMPORTING
        area_name  TYPE shm_area_name
        client     TYPE shma_client OPTIONAL
      EXPORTING
        attributes TYPE shma_attributes.

    CLASS-METHODS get_auto_build_class_name
      IMPORTING
        area_name TYPE shm_area_name
      RETURNING
        VALUE(auto_build_class_name) TYPE shm_auto_build_class_name
      RAISING
        cx_shma_not_configured
        cx_shma_inconsistent.

    CLASS-METHODS trace_get_service
      IMPORTING
        !area_name TYPE shm_area_name OPTIONAL
      RETURNING
        VALUE(trace_service) TYPE REF TO if_shm_trace.

    CLASS-METHODS trace_is_variant_active
      IMPORTING
        service_name     TYPE shmm_trc_variant_name
      RETURNING
        VALUE(is_active) TYPE abap_bool.

ENDCLASS.

CLASS cl_shm_service IMPLEMENTATION.

  METHOD initialize.
    RETURN.
  ENDMETHOD.

  METHOD get_auto_build_class_name.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD trace_get_service.
* dont dump, this method is called from area CLASS_CONSTRUCTORs
    RETURN.
  ENDMETHOD.

  METHOD trace_is_variant_active.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_ALREADY_DETACHED                 ', 'CLASS cx_shm_already_detached DEFINITION PUBLIC INHERITING FROM cx_shm_general_error.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        textid    LIKE textid OPTIONAL
        previous  LIKE previous OPTIONAL
        area_name TYPE string OPTIONAL
        inst_name TYPE string OPTIONAL
        client    TYPE string OPTIONAL.
ENDCLASS.

CLASS cx_shm_already_detached IMPLEMENTATION.

  METHOD constructor.
    RETURN.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_ATTACH_ERROR                     ', 'CLASS cx_shm_attach_error DEFINITION PUBLIC INHERITING FROM cx_shm_error.

ENDCLASS.

CLASS cx_shm_attach_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_BUILD_FAILED                     ', 'CLASS cx_shm_build_failed DEFINITION PUBLIC INHERITING FROM cx_shm_general_error.

ENDCLASS.

CLASS cx_shm_build_failed IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_CHANGE_LOCK_ACTIVE               ', 'CLASS cx_shm_change_lock_active DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_change_lock_active IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_COMPLETION_ERROR                 ', 'CLASS cx_shm_completion_error DEFINITION PUBLIC INHERITING FROM cx_shm_detach_error.

ENDCLASS.

CLASS cx_shm_completion_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_DETACH_ERROR                     ', 'CLASS cx_shm_detach_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_shm_detach_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_ERROR                            ', 'CLASS cx_shm_error DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_shm_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_EVENT_EXECUTION_FAILED           ', 'CLASS cx_shm_event_execution_failed DEFINITION PUBLIC INHERITING FROM cx_shm_completion_error.

ENDCLASS.

CLASS cx_shm_event_execution_failed IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_EXCLUSIVE_LOCK_ACTIVE            ', 'CLASS cx_shm_exclusive_lock_active DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_exclusive_lock_active IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_GENERAL_ERROR                    ', 'CLASS cx_shm_general_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_shm_general_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_INCONSISTENT                     ', 'CLASS cx_shm_inconsistent DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_inconsistent IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_INITIAL_REFERENCE                ', 'CLASS cx_shm_initial_reference DEFINITION PUBLIC INHERITING FROM cx_shm_general_error.

ENDCLASS.

CLASS cx_shm_initial_reference IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_NO_ACTIVE_VERSION                ', 'CLASS cx_shm_no_active_version DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_no_active_version IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_PARAMETER_ERROR                  ', 'CLASS cx_shm_parameter_error DEFINITION PUBLIC INHERITING FROM cx_shm_general_error.

ENDCLASS.

CLASS cx_shm_parameter_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_PENDING_LOCK_REMOVED             ', 'CLASS cx_shm_pending_lock_removed DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_pending_lock_removed IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_READ_LOCK_ACTIVE                 ', 'CLASS cx_shm_read_lock_active DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_read_lock_active IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_SECONDARY_COMMIT                 ', 'CLASS cx_shm_secondary_commit DEFINITION PUBLIC INHERITING FROM cx_shm_detach_error.

ENDCLASS.

CLASS cx_shm_secondary_commit IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_VERSION_LIMIT_EXCEEDED           ', 'CLASS cx_shm_version_limit_exceeded DEFINITION PUBLIC INHERITING FROM cx_shm_attach_error.

ENDCLASS.

CLASS cx_shm_version_limit_exceeded IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHM_WRONG_HANDLE                     ', 'CLASS cx_shm_wrong_handle DEFINITION PUBLIC INHERITING FROM cx_shm_general_error.

ENDCLASS.

CLASS cx_shm_wrong_handle IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHMA_DYNAMIC                         ', 'CLASS cx_shma_dynamic DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_shma_dynamic IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHMA_INCONSISTENT                    ', 'CLASS cx_shma_inconsistent DEFINITION PUBLIC INHERITING FROM cx_shma_dynamic.

ENDCLASS.

CLASS cx_shma_inconsistent IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SHMA_NOT_CONFIGURED                  ', 'CLASS cx_shma_not_configured DEFINITION PUBLIC INHERITING FROM cx_shma_dynamic.

ENDCLASS.

CLASS cx_shma_not_configured IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SHM_BUILD_INSTANCE                   ', 'INTERFACE if_shm_build_instance PUBLIC.
  CLASS-METHODS build
    IMPORTING
      inst_name       TYPE shm_inst_name              DEFAULT cl_shm_area=>default_instance
      invocation_mode TYPE shm_constr_invocation_mode DEFAULT cl_shm_area=>invocation_mode_explicit
    RAISING
      cx_shm_build_failed.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SHM_TRACE                            ', 'INTERFACE if_shm_trace PUBLIC.

  DATA: BEGIN OF variant,
          def_name         TYPE shmm_trc_variant_name,
          attach_for_upd   TYPE abap_bool,
          attach_for_read  TYPE abap_bool,
          free_area        TYPE abap_bool,
          detach_area      TYPE abap_bool,
          set_root         TYPE abap_bool,
          invalidate_inst  TYPE abap_bool,
          get_instance_inf TYPE abap_bool,
          free_instance    TYPE abap_bool,
          invalidate_area  TYPE abap_bool,
          build            TYPE abap_bool,
          attach_for_write TYPE abap_bool,
          get_root         TYPE abap_bool,
        END OF variant.

  METHODS trin_attach_for_write
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt
      mode      TYPE shm_attach_mode DEFAULT cl_shm_area=>attach_mode_default
      wait_time TYPE i DEFAULT 0.

  METHODS trcx_attach_for_write
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt
      mode      TYPE shm_attach_mode DEFAULT cl_shm_area=>attach_mode_default
      wait_time TYPE i DEFAULT 0
      cx        TYPE REF TO cx_root.

  METHODS trin_attach_for_update
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt
      mode      TYPE shm_attach_mode DEFAULT cl_shm_area=>attach_mode_default
      wait_time TYPE i DEFAULT 0.

  METHODS trcx_attach_for_update
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt
      mode      TYPE shm_attach_mode DEFAULT cl_shm_area=>attach_mode_default
      wait_time TYPE i DEFAULT 0
      cx        TYPE REF TO cx_root.

  METHODS trin_attach_for_read
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt.

  METHODS trcx_attach_for_read
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client    TYPE shm_client DEFAULT sy-mandt
      cx        TYPE REF TO cx_root.

  METHODS trin_build
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance.

  METHODS trcx_build
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      cx TYPE REF TO cx_root.

  METHODS trin_set_root
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name
      root TYPE REF TO object.

  METHODS trcx_set_root
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name
      root TYPE REF TO object
      cx TYPE REF TO cx_root.

  METHODS trin_detach_area
    IMPORTING
      area_name TYPE shm_area_name
      client TYPE shm_client DEFAULT sy-mandt
      rc TYPE shm_rc.

  METHODS trin_free_area
    IMPORTING
      area_name         TYPE shm_area_name
      client            TYPE shm_client DEFAULT sy-mandt
      terminate_changer TYPE abap_bool DEFAULT abap_true
      affect_server     TYPE shm_affect_server OPTIONAL
      rc                TYPE shm_rc.

  METHODS trin_free_instance
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client TYPE shm_client DEFAULT sy-mandt
      terminate_changer TYPE abap_bool DEFAULT abap_true
      affect_server TYPE shm_affect_server OPTIONAL
      rc TYPE shm_rc.

  METHODS trin_get_instance_infos
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name OPTIONAL
      client TYPE shm_client DEFAULT sy-mandt
      infos TYPE shm_inst_infos.

  METHODS trin_invalidate_area
    IMPORTING
      area_name TYPE shm_area_name
      client TYPE shm_client DEFAULT sy-mandt
      rc TYPE shm_rc
      affect_server TYPE shm_affect_server OPTIONAL
      terminate_changer TYPE abap_bool DEFAULT abap_true.

  METHODS trin_invalidate_instance
    IMPORTING
      area_name TYPE shm_area_name
      inst_name TYPE shm_inst_name DEFAULT cl_shm_area=>default_instance
      client TYPE shm_client DEFAULT sy-mandt
      terminate_changer TYPE abap_bool DEFAULT abap_true
      affect_server TYPE shm_affect_server OPTIONAL
      rc TYPE shm_rc.

  METHODS trin_get_root
    IMPORTING
      area_name TYPE shm_area_name.

  METHODS trcx_get_root
    IMPORTING
      area_name TYPE shm_area_name
      cx        TYPE REF TO cx_root.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_MIME_REPOSITORY_API                  ', 'CLASS cl_mime_repository_api DEFINITION PUBLIC FINAL CREATE PRIVATE.

  PUBLIC SECTION.
    INTERFACES if_mr_api.
    ALIASES get_api FOR if_mr_api~get_api.
ENDCLASS.

CLASS cl_mime_repository_api IMPLEMENTATION.
  METHOD if_mr_api~get_api.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~get.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~create_folder.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~put.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~delete.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~file_list.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~properties.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_mr_api~get_io_for_url.
    ASSERT 1 = ''todo''.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_MR_API                               ', 'INTERFACE if_mr_api PUBLIC.

  CLASS-METHODS get_api
    IMPORTING
      i_prefix        TYPE csequence DEFAULT space
    RETURNING
      VALUE(r_mr_api) TYPE REF TO if_mr_api.

  METHODS get
    IMPORTING
      i_url             TYPE csequence
      i_check_authority TYPE abap_bool DEFAULT abap_true
    EXPORTING
      e_is_folder       TYPE abap_bool
      e_content         TYPE xstring
      e_mime_type       TYPE csequence
      e_loio            TYPE skwf_io
    CHANGING
      c_language        TYPE langu OPTIONAL
    EXCEPTIONS
      parameter_missing
      error_occured
      not_found
      permission_failure.

  METHODS create_folder
    IMPORTING
      i_url                     TYPE csequence
      i_language                TYPE langu DEFAULT sy-langu
      i_description             TYPE csequence OPTIONAL
      i_check_authority         TYPE abap_bool DEFAULT abap_true
      i_suppress_package_dialog TYPE abap_bool DEFAULT space
      i_dev_package             TYPE devclass OPTIONAL
      i_genflag                 TYPE abap_bool DEFAULT abap_false
      i_corr_number             TYPE trkorr OPTIONAL
      i_folder_loio             TYPE skwf_io OPTIONAL
      i_suppress_dialogs        TYPE abap_bool OPTIONAL
    EXPORTING
      e_folder_io               TYPE skwf_io
    EXCEPTIONS
      parameter_missing
      error_occured
      cancelled
      permission_failure
      folder_exists.

  METHODS put
    IMPORTING
      i_url                     TYPE csequence
      i_content                 TYPE xstring
      i_language                TYPE langu DEFAULT sy-langu
      i_description             TYPE csequence OPTIONAL
      i_check_authority         TYPE abap_bool DEFAULT abap_true
      i_suppress_package_dialog TYPE abap_bool DEFAULT space
      i_dev_package             TYPE devclass OPTIONAL
      i_genflag                 TYPE abap_bool DEFAULT abap_false
      i_corr_number             TYPE trkorr OPTIONAL
      i_new_loio                TYPE skwf_io OPTIONAL
      i_suppress_dialogs        TYPE abap_bool OPTIONAL
    EXCEPTIONS
      parameter_missing
      error_occured
      cancelled
      permission_failure
      data_inconsistency
      new_loio_already_exists
      is_folder.

  METHODS delete
    IMPORTING
      i_url              TYPE csequence
      i_delete_children  TYPE abap_bool DEFAULT abap_false
      i_check_authority  TYPE abap_bool DEFAULT abap_true
      i_corr_number      TYPE trkorr OPTIONAL
      i_suppress_dialogs TYPE abap_bool OPTIONAL
    EXCEPTIONS
      parameter_missing
      error_occured
      cancelled
      permission_failure
      not_found.

  METHODS file_list
    IMPORTING
      i_url             TYPE csequence
      i_recursive_call  TYPE abap_bool DEFAULT abap_false
      i_check_authority TYPE abap_bool DEFAULT abap_true
    EXPORTING
      e_files           TYPE string_table
    EXCEPTIONS
      parameter_missing
      error_occured
      not_found
      permission_failure
      is_not_folder.

  METHODS properties
    IMPORTING
      i_url               TYPE csequence
      i_check_authority   TYPE abap_bool DEFAULT abap_true
    EXPORTING
      e_is_folder         TYPE abap_bool
      e_mime_type         TYPE csequence
      e_name              TYPE string
      e_size              TYPE i
      e_bin_data          TYPE abap_bool
      e_loio              TYPE skwf_io
      e_phio              TYPE skwf_io
      e_language          TYPE langu
      e_phio_last_changed TYPE string " wrong, delete parameter?
    EXCEPTIONS
      parameter_missing
      error_occured
      not_found
      permission_failure.

  METHODS get_io_for_url
    IMPORTING
      i_url       TYPE csequence
    EXPORTING
      e_is_folder TYPE abap_bool
      e_loio      TYPE skwf_io
    EXCEPTIONS
      parameter_missing
      error_occured
      not_found.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SEC_SXML_WRITER                      ', 'CLASS cl_sec_sxml_writer DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS co_aes128_algorithm TYPE string VALUE ''http://www.w3.org/2001/04/xmlenc#aes128-cbc'' ##NO_TEXT.
    CONSTANTS co_aes192_algorithm TYPE string VALUE ''http://www.w3.org/2001/04/xmlenc#aes192-cbc'' ##NO_TEXT.
    CONSTANTS co_aes256_algorithm TYPE string VALUE ''http://www.w3.org/2001/04/xmlenc#aes256-cbc'' ##NO_TEXT.

    CLASS-METHODS crypt_aes_ctr
      IMPORTING
        input     TYPE xstring
        key       TYPE xstring
        iv        TYPE xstring
        algorithm TYPE string DEFAULT co_aes128_algorithm
      EXPORTING
        result    TYPE xstring.
ENDCLASS.

CLASS cl_sec_sxml_writer IMPLEMENTATION.

  METHOD crypt_aes_ctr.
    DATA lv_algo TYPE string.

    CASE algorithm.
      WHEN co_aes128_algorithm.
        lv_algo = ''aes-128-ctr''.
      WHEN co_aes256_algorithm.
        lv_algo = ''aes-256-ctr''.
      WHEN OTHERS.
        ASSERT 1 = ''todo''.
    ENDCASE.

    WRITE ''@KERNEL const crypto = await import("crypto");''.

    WRITE ''@KERNEL const js_key = Buffer.from(key.get(), "hex");''.
    WRITE ''@KERNEL const js_iv = Buffer.from(iv.get(), "hex");''.
    WRITE ''@KERNEL const js_input = Buffer.from(input.get(), "hex");''.

    WRITE ''@KERNEL const cipher = crypto.createDecipheriv(lv_algo.get(), js_key, js_iv);''.
    WRITE ''@KERNEL const encrypted = cipher.update(js_input);''.

    WRITE ''@KERNEL result.set(encrypted.toString("hex").toUpperCase());''.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SXML_STRING_READER                   ', 'CLASS cl_sxml_string_reader DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS create
      IMPORTING
        input         TYPE xstring
      RETURNING
        VALUE(reader) TYPE REF TO if_sxml_reader.
ENDCLASS.

CLASS cl_sxml_string_reader IMPLEMENTATION.
  METHOD create.
    CREATE OBJECT reader TYPE lcl_reader
      EXPORTING
        iv_json = cl_abap_codepage=>convert_from( input ).
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SXML_STRING_WRITER                   ', 'CLASS cl_sxml_string_writer DEFINITION PUBLIC FINAL CREATE PRIVATE.

  PUBLIC SECTION.
    INTERFACES if_sxml_writer.

    METHODS constructor
      IMPORTING
        type TYPE if_sxml=>xml_stream_type.

    METHODS get_output
      RETURNING
        VALUE(output) TYPE xstring.

    CLASS-METHODS create
      IMPORTING
        type                     TYPE if_sxml=>xml_stream_type DEFAULT if_sxml=>co_xt_xml10
        ignore_conversion_errors TYPE abap_bool DEFAULT abap_false
        normalizing              TYPE abap_bool DEFAULT abap_false
        no_empty_elements        TYPE abap_bool DEFAULT abap_false
        encoding                 TYPE string DEFAULT ''UTF-8''
        PREFERRED PARAMETER type
      RETURNING
        VALUE(writer)            TYPE REF TO cl_sxml_string_writer
      RAISING
        cx_sxml_illegal_argument_error.

  PRIVATE SECTION.
    DATA mv_output TYPE xstring.
    DATA mv_type TYPE if_sxml=>xml_stream_type.
    DATA mt_stack TYPE STANDARD TABLE OF string WITH DEFAULT KEY.

    METHODS append_text IMPORTING text TYPE string.
    METHODS get_text RETURNING VALUE(text) TYPE string.

* stack operations
    METHODS peek RETURNING VALUE(rv_name) TYPE string.
    METHODS remove RETURNING VALUE(rv_name) TYPE string.
ENDCLASS.

CLASS cl_sxml_string_writer IMPLEMENTATION.

  METHOD constructor.
    mv_type = type.
  ENDMETHOD.

  METHOD if_sxml_writer~new_close_element.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~write_attribute_raw.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~new_value.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~new_open_element.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~write_value_raw.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~write_namespace_declaration.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD if_sxml_writer~write_node.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD create.
    CREATE OBJECT writer
      EXPORTING
        type = type.
  ENDMETHOD.

  METHOD if_sxml_writer~set_option.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD get_output.
    output = mv_output.
  ENDMETHOD.

  METHOD append_text.
    DATA append TYPE xstring.
    append = cl_abap_conv_codepage=>create_out( )->convert( text ).
    CONCATENATE mv_output append INTO mv_output IN BYTE MODE.
  ENDMETHOD.

  METHOD get_text.
    text = cl_abap_conv_codepage=>create_in( )->convert( mv_output ).
  ENDMETHOD.

  METHOD if_sxml_writer~open_element.
    DATA parent TYPE string.
    parent = peek( ).

    IF parent = ''array'' AND get_text( ) NP ''*[''.
      append_text( '','' ).
    ENDIF.
    IF parent = ''object'' AND get_text( ) NP ''*{''.
      append_text( '','' ).
    ENDIF.

    APPEND name TO mt_stack.
    CASE name.
      WHEN ''object''.
        append_text( ''{'' ).
      WHEN ''array''.
        append_text( ''['' ).
    ENDCASE.
  ENDMETHOD.

  METHOD remove.
    DATA index TYPE i.
    index = lines( mt_stack ).
    READ TABLE mt_stack INDEX index INTO rv_name.
    DELETE mt_stack INDEX index.
  ENDMETHOD.

  METHOD if_sxml_writer~close_element.
    DATA name TYPE string.
    name = remove( ).
    CASE name.
      WHEN ''object''.
        append_text( ''}'' ).
      WHEN ''array''.
        append_text( '']'' ).
    ENDCASE.
  ENDMETHOD.

  METHOD if_sxml_writer~write_attribute.
    append_text( ''"'' ).
    append_text( value ).
    append_text( ''":'' ).
  ENDMETHOD.

  METHOD peek.
    DATA index TYPE i.
    index = lines( mt_stack ).
    READ TABLE mt_stack INDEX index INTO rv_name.
  ENDMETHOD.

  METHOD if_sxml_writer~write_value.
    DATA name TYPE string.
    name = peek( ).
    CASE name.
      WHEN ''str''.
        append_text( ''"'' ).
        append_text( condense( value ) ).
        append_text( ''"'' ).
      WHEN ''num''.
        append_text( condense( value ) ).
      WHEN OTHERS.
        WRITE ''@KERNEL console.dir(name);''.
        ASSERT 1 = ''todo_if_sxml_writer_write_value''.
    ENDCASE.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SXML_ERROR                           ', 'CLASS cx_sxml_error DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.

ENDCLASS.

CLASS cx_sxml_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SXML_ILLEGAL_ARGUMENT_ERROR          ', 'CLASS cx_sxml_illegal_argument_error DEFINITION PUBLIC INHERITING FROM cx_sxml_error.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_sxml_illegal_argument_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SXML_NAME_ERROR                      ', 'CLASS cx_sxml_name_error DEFINITION PUBLIC INHERITING FROM cx_sxml_error.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_sxml_name_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SXML_PARSE_ERROR                     ', 'CLASS cx_sxml_parse_error DEFINITION PUBLIC INHERITING FROM cx_sxml_error.
  PUBLIC SECTION.
    METHODS constructor IMPORTING xml_offset TYPE i.
    CONSTANTS kernel_parser TYPE sotr_conc VALUE ''00000000000000000000000000000000''.

    DATA error_text TYPE string.
    DATA rawstring  TYPE string.
    DATA xml_offset TYPE i.
    DATA rc         TYPE i.
ENDCLASS.

CLASS cx_sxml_parse_error IMPLEMENTATION.
  METHOD constructor.
    super->constructor( ).
    me->xml_offset = xml_offset.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_SXML_STATE_ERROR                     ', 'CLASS cx_sxml_state_error DEFINITION PUBLIC INHERITING FROM cx_sxml_error.
  PUBLIC SECTION.
ENDCLASS.

CLASS cx_sxml_state_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML                                 ', 'INTERFACE if_sxml PUBLIC.

  TYPES xml_stream_type TYPE i.

  CONSTANTS co_xt_xml10 TYPE xml_stream_type VALUE 1.
  CONSTANTS co_xt_binary TYPE xml_stream_type VALUE 2.
  CONSTANTS co_xt_xop TYPE xml_stream_type VALUE 3.
  CONSTANTS co_xt_json TYPE xml_stream_type VALUE 4.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_ATTRIBUTE                       ', 'INTERFACE if_sxml_attribute PUBLIC.
  TYPES attributes TYPE STANDARD TABLE OF REF TO if_sxml_attribute WITH DEFAULT KEY.
  DATA: BEGIN OF qname,
          name      TYPE string,
          namespace TYPE string,
        END OF qname.
  DATA prefix TYPE string READ-ONLY.
  DATA value_type TYPE if_sxml_value=>value_type.
  METHODS get_value RETURNING VALUE(value) TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_CLOSE_ELEMENT                   ', 'INTERFACE if_sxml_close_element PUBLIC.
  INTERFACES if_sxml_node.

  DATA: BEGIN OF qname,
          name      TYPE string,
          namespace TYPE string,
        END OF qname.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_NAMED                           ', 'INTERFACE if_sxml_named PUBLIC.

  TYPES: BEGIN OF pathnode,
           BEGIN OF qname,
             name      TYPE string,
             namespace TYPE string,
           END OF qname,
           prefix         TYPE string,
           child_position TYPE i,
         END OF pathnode.
  TYPES path TYPE STANDARD TABLE OF pathnode WITH DEFAULT KEY.

  TYPES: BEGIN OF nsbinding,
           prefix TYPE string,
           nsuri  TYPE string,
         END OF nsbinding.
  TYPES nsbindings TYPE HASHED TABLE OF nsbinding WITH UNIQUE KEY prefix.

  CONSTANTS co_use_default_xmlns TYPE string VALUE '':''.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_NODE                            ', 'INTERFACE if_sxml_node PUBLIC.
  TYPES node_type TYPE i.
  DATA type TYPE node_type READ-ONLY.

  CONSTANTS co_nt_initial TYPE node_type VALUE 0.
  CONSTANTS co_nt_element_open TYPE node_type VALUE 1.
  CONSTANTS co_nt_element_close TYPE node_type VALUE 2.
  CONSTANTS co_nt_value TYPE node_type VALUE 4.
  CONSTANTS co_nt_attribute TYPE node_type VALUE 32.
  CONSTANTS co_nt_final TYPE node_type VALUE 128.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_OPEN_ELEMENT                    ', 'INTERFACE if_sxml_open_element PUBLIC.
  INTERFACES if_sxml_node.

  DATA: BEGIN OF qname,
          name      TYPE string,
          namespace TYPE string,
        END OF qname.

  DATA prefix TYPE string READ-ONLY.

  METHODS get_attributes
    RETURNING
      VALUE(attr) TYPE if_sxml_attribute=>attributes.

  METHODS set_attribute
    IMPORTING
      name   TYPE string
      nsuri  TYPE string OPTIONAL
      prefix TYPE string OPTIONAL
      value  TYPE string OPTIONAL
    RETURNING
      VALUE(attribute) TYPE REF TO if_sxml_attribute
    RAISING
      cx_sxml_name_error.

  METHODS set_attributes
    IMPORTING
      attributes TYPE if_sxml_attribute=>attributes
    RAISING
      cx_sxml_name_error.

  METHODS set_prefix
    IMPORTING
      prefix TYPE string OPTIONAL.

  METHODS get_attribute_value
    IMPORTING
      !name TYPE string
      !nsuri TYPE string OPTIONAL
    RETURNING
      VALUE(value) TYPE REF TO if_sxml_value.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_READER                          ', 'INTERFACE if_sxml_reader PUBLIC.

  DATA node_type  TYPE if_sxml_node=>node_type READ-ONLY.
  DATA name       TYPE string READ-ONLY.
  DATA value_type TYPE if_sxml_value=>value_type READ-ONLY.
  DATA value      TYPE string READ-ONLY.
  DATA value_raw  TYPE xstring READ-ONLY.

  CONSTANTS co_opt_normalizing TYPE i VALUE 1.
  CONSTANTS co_opt_keep_whitespace TYPE i VALUE 2.
  CONSTANTS co_opt_asxml TYPE i VALUE 3.
  CONSTANTS co_opt_sep_member TYPE i VALUE 4.

  METHODS
    read_next_node
      RETURNING VALUE(node) TYPE REF TO if_sxml_node.

  METHODS next_node
    IMPORTING
      value_type TYPE if_sxml_value=>value_type DEFAULT if_sxml_value=>co_vt_text
    RAISING
      cx_sxml_parse_error.

  METHODS next_attribute
    IMPORTING
      value_type TYPE if_sxml_value=>value_type OPTIONAL.

  METHODS skip_node
    IMPORTING
      writer TYPE REF TO if_sxml_writer OPTIONAL
    RAISING
      cx_sxml_parse_error.

  METHODS set_option
    IMPORTING
      option TYPE i
      value  TYPE abap_bool DEFAULT abap_true.

  METHODS get_nsuri_by_prefix
    IMPORTING
      !prefix TYPE string
    RETURNING
      VALUE(nsuri) TYPE string.

  METHODS get_prefix_by_nsuri
    IMPORTING
      !nsuri TYPE string
    RETURNING
      VALUE(prefix) TYPE string.

  METHODS get_nsbindings
    RETURNING
      VALUE(nsbindings) TYPE if_sxml_named=>nsbindings.

  METHODS get_path
    RETURNING
      VALUE(path) TYPE if_sxml_named=>path.

  METHODS current_node.

  METHODS read_current_node
    RETURNING
      VALUE(node) TYPE REF TO if_sxml_node.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_VALUE                           ', 'INTERFACE if_sxml_value PUBLIC.

  TYPES value_type TYPE i.
  DATA type TYPE value_type.
  CONSTANTS co_vt_text TYPE value_type VALUE 2.

  METHODS get_value
    RETURNING
      VALUE(value) TYPE string.
  METHODS get_value_raw
    RETURNING
      VALUE(value) TYPE xstring.
  METHODS set_value
    IMPORTING
      value TYPE string.
  METHODS set_value_raw
    IMPORTING
      value TYPE xstring.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_VALUE_NODE                      ', 'INTERFACE if_sxml_value_node PUBLIC.
  INTERFACES if_sxml_node.

  METHODS get_value
    RETURNING
      VALUE(value) TYPE string.

  METHODS get_value_raw
    RETURNING
      VALUE(value) TYPE xstring.

  METHODS set_value
    IMPORTING
      value TYPE string.

  METHODS set_value_raw
    IMPORTING
      value TYPE xstring.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXML_WRITER                          ', 'INTERFACE if_sxml_writer PUBLIC.

  CONSTANTS co_opt_normalizing TYPE i VALUE 1.
  CONSTANTS co_opt_no_empty TYPE i VALUE 2.
  CONSTANTS co_opt_ignore_conv_errros TYPE i VALUE 3.
  CONSTANTS co_opt_linebreaks TYPE i VALUE 4.
  CONSTANTS co_opt_indent TYPE i VALUE 5.
  CONSTANTS co_opt_illegal_char_reject TYPE i VALUE 6.
  CONSTANTS co_opt_illegal_char_replace TYPE i VALUE 7.
  CONSTANTS co_opt_illegal_char_replace_by TYPE i VALUE 8.
  CONSTANTS co_opt_base64_no_lf TYPE i VALUE 9.

  METHODS open_element
    IMPORTING
      name   TYPE string
      nsuri  TYPE string OPTIONAL
      prefix TYPE string OPTIONAL
    RAISING
      cx_sxml_state_error
      cx_sxml_name_error.

  METHODS close_element
    RAISING
      cx_sxml_state_error.

  CLASS-METHODS new_close_element
    RETURNING
      VALUE(element) TYPE REF TO if_sxml_close_element.

  METHODS write_attribute
    IMPORTING
      name   TYPE string
      nsuri  TYPE string OPTIONAL
      prefix TYPE string OPTIONAL
      value  TYPE string OPTIONAL
    RAISING
      cx_sxml_state_error
      cx_sxml_name_error.

  METHODS write_attribute_raw
    IMPORTING
      name   TYPE string
      nsuri  TYPE string OPTIONAL
      prefix TYPE string OPTIONAL
      value  TYPE xstring OPTIONAL
    RAISING
      cx_sxml_state_error
      cx_sxml_name_error.

  METHODS write_value
    IMPORTING
      value TYPE string
    RAISING
      cx_sxml_state_error.

  METHODS set_option
    IMPORTING
      option TYPE i
      value  TYPE abap_bool DEFAULT abap_true.

  CLASS-METHODS new_open_element
    IMPORTING
      name   TYPE string
      nsuri  TYPE string OPTIONAL
      prefix TYPE string OPTIONAL
    RETURNING
      VALUE(element) TYPE REF TO if_sxml_open_element
    RAISING
      cx_sxml_name_error.

  CLASS-METHODS new_value
    RETURNING
      VALUE(value) TYPE REF TO if_sxml_value_node.

  METHODS write_namespace_declaration
    IMPORTING
      nsuri  TYPE string
      prefix TYPE string OPTIONAL
    RAISING
      cx_sxml_name_error.

  METHODS write_node
    IMPORTING
      node TYPE REF TO if_sxml_node
    RAISING
      cx_sxml_state_error.

  METHODS write_value_raw
    IMPORTING
      value TYPE xstring
    RAISING
      cx_sxml_state_error.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXMLP_FACTORY                        ', 'INTERFACE if_sxmlp_factory PUBLIC.
  CLASS-METHODS create_list
    IMPORTING
      name        TYPE string
      nsuri       TYPE string OPTIONAL
      prefix      TYPE string OPTIONAL
    RETURNING
      VALUE(rval) TYPE REF TO if_sxmlp_list.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXMLP_LIST                           ', 'INTERFACE if_sxmlp_list PUBLIC.
  INTERFACES if_sxmlp_part.

  METHODS add_part
    IMPORTING
      part TYPE REF TO if_sxmlp_part.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXMLP_PART                           ', 'INTERFACE if_sxmlp_part PUBLIC.
  METHODS serialize IMPORTING writer TYPE REF TO if_sxml_writer.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SXMLP_SIMPLE                         ', 'INTERFACE if_sxmlp_simple PUBLIC.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_APC_TCP_CLIENT_MANAGER               ', 'CLASS cl_apc_tcp_client_manager DEFINITION PUBLIC.
  PUBLIC SECTION.
    CONSTANTS co_protocol_type_tcp  TYPE i VALUE 1.
    CONSTANTS co_protocol_type_tcps TYPE i VALUE 2.

    CLASS-METHODS create
      IMPORTING
        i_host          TYPE string
        i_port          TYPE string
        i_frame         TYPE if_abap_channel_types=>ty_apc_tcp_frame
        i_event_handler TYPE REF TO if_apc_wsp_event_handler
        i_protocol      TYPE i DEFAULT co_protocol_type_tcp
        i_ssl_id        TYPE ssfapplssl OPTIONAL
      RETURNING
        VALUE(ri_client) TYPE REF TO if_apc_wsp_client
      RAISING
        cx_apc_error.
ENDCLASS.

CLASS cl_apc_tcp_client_manager IMPLEMENTATION.
  METHOD create.
    DATA lv_port TYPE i.
    lv_port = i_port.
    CREATE OBJECT ri_client TYPE lcl_client
      EXPORTING
        iv_host     = i_host
        iv_port     = lv_port
        io_handler  = i_event_handler
        iv_protocol = i_protocol.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_APC_WSP_EXT_STATELESS_BASE           ', 'CLASS cl_apc_wsp_ext_stateless_base DEFINITION PUBLIC ABSTRACT.
  PUBLIC SECTION.
    INTERFACES if_apc_wsp_extension.
ENDCLASS.

CLASS cl_apc_wsp_ext_stateless_base IMPLEMENTATION.
  METHOD if_apc_wsp_extension~on_start.
    RETURN.
  ENDMETHOD.

  METHOD if_apc_wsp_extension~on_message.
    RETURN.
  ENDMETHOD.
ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_APC_ERROR                            ', 'CLASS cx_apc_error DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_apc_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_ABAP_CHANNEL_TYPES                   ', 'INTERFACE if_abap_channel_types PUBLIC.
  TYPES: BEGIN OF ty_apc_tcp_frame,
           frame_type          TYPE i,
           fixed_length        TYPE i,
           terminator          TYPE string,
           length_field_length TYPE i,
           length_field_offset TYPE i,
           length_field_header TYPE i,
         END OF ty_apc_tcp_frame.

  TYPES ty_tihttpnvp TYPE tihttpnvp.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_TCP_FRAME_TYPES                  ', 'INTERFACE if_apc_tcp_frame_types PUBLIC.
  CONSTANTS co_frame_type_fixed_length TYPE i VALUE 1.
  CONSTANTS co_frame_type_terminator   TYPE i VALUE 2.
  CONSTANTS co_frame_type_length_field TYPE i VALUE 3.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_BINDING_MANAGER              ', 'INTERFACE if_apc_wsp_binding_manager PUBLIC.
  METHODS bind_amc_message_consumer
    IMPORTING
      i_application_id TYPE clike
      i_channel_id     TYPE clike
    RAISING
      cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_CLIENT                       ', 'INTERFACE if_apc_wsp_client PUBLIC.
  METHODS connect
    RAISING
      cx_apc_error.

  METHODS close
    RAISING
      cx_apc_error.

  METHODS get_message_manager
    RETURNING
      VALUE(ri_manager) TYPE REF TO if_apc_wsp_message_manager
    RAISING
      cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_EVENT_HANDLER                ', 'INTERFACE if_apc_wsp_event_handler PUBLIC.
  METHODS on_open.

  METHODS on_message
    IMPORTING i_message TYPE REF TO if_apc_wsp_message.

  METHODS on_close.

  METHODS on_error
    IMPORTING
      i_reason TYPE string.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_EXTENSION                    ', 'INTERFACE if_apc_wsp_extension PUBLIC.
  METHODS on_start
    IMPORTING
      i_context         TYPE REF TO if_apc_wsp_server_context
      i_message_manager TYPE REF TO if_apc_wsp_message_manager.

  METHODS on_message
    IMPORTING
      i_message         TYPE REF TO if_apc_wsp_message
      i_message_manager TYPE REF TO if_apc_wsp_message_manager
      i_context         TYPE REF TO if_apc_wsp_server_context.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_INITIAL_REQUEST              ', 'INTERFACE if_apc_wsp_initial_request PUBLIC.
  METHODS get_form_fields
    IMPORTING
      i_formfield_encoding TYPE i DEFAULT 0
    CHANGING
      c_fields             TYPE if_abap_channel_types=>ty_tihttpnvp
    RAISING
      cx_apc_error.

  METHODS get_header_fields
    CHANGING
      c_fields TYPE if_abap_channel_types=>ty_tihttpnvp
    RAISING
      cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_MESSAGE                      ', 'INTERFACE if_apc_wsp_message PUBLIC.
  METHODS get_binary
    RETURNING VALUE(rv_binary) TYPE xstring
    RAISING cx_apc_error.

  METHODS set_binary
    IMPORTING iv_binary TYPE xsequence
    RAISING cx_apc_error.

  METHODS get_text
    RETURNING VALUE(r_message) TYPE string
    RAISING cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_MESSAGE_MANAGER              ', 'INTERFACE if_apc_wsp_message_manager PUBLIC.
  METHODS create_message
    RETURNING
      VALUE(ri_message) TYPE REF TO if_apc_wsp_message
    RAISING
      cx_apc_error.

  METHODS send
    IMPORTING
      ii_message TYPE REF TO if_apc_wsp_message
    RAISING
      cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_APC_WSP_SERVER_CONTEXT               ', 'INTERFACE if_apc_wsp_server_context PUBLIC.
  METHODS get_initial_request
    RETURNING VALUE(r_initial_request) TYPE REF TO if_apc_wsp_initial_request
    RAISING cx_apc_error.
  METHODS get_binding_manager
    RETURNING VALUE(r_binding_manager) TYPE REF TO if_apc_wsp_binding_manager
    RAISING cx_apc_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_ABAP_UNIT_ASSERT                     ', 'CLASS cl_abap_unit_assert DEFINITION PUBLIC.
  PUBLIC SECTION.
    CLASS-METHODS
      assert_equals
        IMPORTING
          act   TYPE any
          exp   TYPE any
          msg   TYPE csequence OPTIONAL
          tol   TYPE f OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS abort
      IMPORTING
        msg    TYPE csequence OPTIONAL
        detail TYPE csequence OPTIONAL
        quit   TYPE int1 DEFAULT 2 PREFERRED PARAMETER msg.

    CLASS-METHODS
      assert_differs
        IMPORTING
          act   TYPE simple
          exp   TYPE simple
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_number_between
        IMPORTING
          lower  TYPE i
          upper  TYPE i
          number TYPE i
          msg    TYPE csequence OPTIONAL
          quit   TYPE i OPTIONAL
          level  TYPE i OPTIONAL.

    CLASS-METHODS
      assert_not_initial
        IMPORTING
          act   TYPE any
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_initial
        IMPORTING
          act   TYPE any
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      skip
        IMPORTING
          msg    TYPE csequence
          detail TYPE csequence OPTIONAL.

    CLASS-METHODS
      fail
        IMPORTING
          msg    TYPE csequence OPTIONAL
          quit   TYPE i OPTIONAL
          level  TYPE i OPTIONAL
          detail TYPE csequence OPTIONAL
        PREFERRED PARAMETER msg.

    CLASS-METHODS
      assert_subrc
        IMPORTING
          exp   TYPE i DEFAULT 0
          act   TYPE i DEFAULT sy-subrc
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL
        PREFERRED PARAMETER act.

    CLASS-METHODS
      assert_true
        IMPORTING
          act   TYPE abap_bool
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_false
        IMPORTING
          act TYPE abap_bool
          msg TYPE csequence OPTIONAL
          quit TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_char_cp
        IMPORTING
          act   TYPE clike
          exp   TYPE clike
          msg   TYPE string OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_char_np
        IMPORTING
          act   TYPE clike
          exp   TYPE clike
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_bound
        IMPORTING
          act   TYPE any
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_not_bound
        IMPORTING
          act   TYPE any
          msg   TYPE csequence OPTIONAL
          quit  TYPE i OPTIONAL
          level TYPE i OPTIONAL.

    CLASS-METHODS
      assert_text_matches
        IMPORTING
          pattern TYPE csequence
          text    TYPE csequence
          msg     TYPE csequence OPTIONAL
          quit    TYPE i OPTIONAL
          level   TYPE i OPTIONAL.

  PRIVATE SECTION.
    CLASS-METHODS
      compare_tables
        IMPORTING
          act TYPE any
          exp TYPE any.

ENDCLASS.

CLASS cl_abap_unit_assert IMPLEMENTATION.

  METHOD compare_tables.

    DATA index    TYPE i.
    DATA type1    TYPE REF TO cl_abap_tabledescr.
    DATA type2    TYPE REF TO cl_abap_tabledescr.
    DATA lv_match TYPE abap_bool.

    FIELD-SYMBOLS <tab1> TYPE INDEX TABLE.
    FIELD-SYMBOLS <row1> TYPE any.
    FIELD-SYMBOLS <tab2> TYPE INDEX TABLE.
    FIELD-SYMBOLS <row2> TYPE any.

    IF lines( act ) <> lines( exp ).
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Expected table to contain { lines( exp ) } rows, got { lines( act ) }|.
    ENDIF.

    ASSIGN act TO <tab1>.
    ASSIGN exp TO <tab2>.

    type1 ?= cl_abap_typedescr=>describe_by_data( act ).
    type2 ?= cl_abap_typedescr=>describe_by_data( exp ).
*    WRITE ''@KERNEL console.dir(type1);''.
    IF type1->table_kind = cl_abap_tabledescr=>tablekind_hashed
        OR type2->table_kind = cl_abap_tabledescr=>tablekind_hashed.
      LOOP AT <tab1> ASSIGNING <row1>.
        lv_match = abap_false.
        LOOP AT <tab2> ASSIGNING <row2>.
          TRY.
              assert_equals(
                act = <row1>
                exp = <row2> ).
              lv_match = abap_true.
              EXIT. " current loop
            CATCH kernel_cx_assert.
          ENDTRY.
        ENDLOOP.
        IF lv_match = abap_false.
          RAISE EXCEPTION TYPE kernel_cx_assert
            EXPORTING
              msg = |Hashed table contents differs|.
        ENDIF.
      ENDLOOP.
    ELSE.
      DO lines( act ) TIMES.
        index = sy-index.
        READ TABLE <tab1> INDEX index ASSIGNING <row1>.
        assert_subrc( ).
        READ TABLE <tab2> INDEX index ASSIGNING <row2>.
        assert_subrc( ).
        assert_equals(
          act = <row1>
          exp = <row2> ).
      ENDDO.
    ENDIF.

  ENDMETHOD.

  METHOD assert_text_matches.
    DATA lv_match TYPE abap_bool.
    lv_match = boolc( contains(
      val   = text
      regex = pattern ) ).
    IF lv_match = abap_false.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          expected = pattern
          actual   = text
          msg      = msg.
    ENDIF.
  ENDMETHOD.

  METHOD abort.
    ASSERT 1 = ''todo''.
  ENDMETHOD.

  METHOD assert_bound.
    IF act IS NOT BOUND.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Expected value to be bound|.
    ENDIF.
  ENDMETHOD.

  METHOD assert_not_bound.
    IF act IS BOUND.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Expected value to not be bound|.
    ENDIF.
  ENDMETHOD.

  METHOD assert_char_cp.
    IF act NP exp.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          expected = exp
          actual   = act
          msg      = msg.
    ENDIF.
  ENDMETHOD.

  METHOD assert_char_np.
    IF act CP exp.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Actual: { act }|.
    ENDIF.
  ENDMETHOD.

  METHOD fail.
    RAISE EXCEPTION TYPE kernel_cx_assert
      EXPORTING
        msg = msg.
  ENDMETHOD.

  METHOD skip.
    RETURN.
  ENDMETHOD.

  METHOD assert_differs.
    TRY.
        assert_equals(
          act = act
          exp = exp ).
        RAISE EXCEPTION TYPE kernel_cx_assert
          EXPORTING
            msg      = |Expected different values|
            actual   = act
            expected = exp.
      CATCH kernel_cx_assert.
        RETURN.
    ENDTRY.
  ENDMETHOD.

  METHOD assert_true.
    IF act <> abap_true.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Expected abap_true|.
    ENDIF.
  ENDMETHOD.

  METHOD assert_false.
    IF act <> abap_false.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = |Expected abap_false|.
    ENDIF.
  ENDMETHOD.

  METHOD assert_equals.
    DATA type1  TYPE c LENGTH 1.
    DATA type2  TYPE c LENGTH 1.
    DATA diff   TYPE f.
    DATA lv_exp TYPE string.
    DATA lv_act TYPE string.
    DATA lv_msg TYPE string.

    DESCRIBE FIELD act TYPE type1.
    DESCRIBE FIELD exp TYPE type2.
    " WRITE ''@KERNEL console.dir(type1.get());''.
    " WRITE ''@KERNEL console.dir(type2.get());''.
    IF type1 CA ''CgyIFPDTXN8''. " basic types
      IF type2 IS NOT INITIAL.
        IF type2 NA ''CgyIFPDTXN8''.
          RAISE EXCEPTION TYPE kernel_cx_assert
            EXPORTING
              msg = |Unexpected types|.
        ENDIF.
      ENDIF.
    ELSEIF type1 IS NOT INITIAL AND type2 IS NOT INITIAL.
* else check the types are identical
      IF type1 <> type2.
        RAISE EXCEPTION TYPE kernel_cx_assert
          EXPORTING
            msg = |Unexpected types|.
      ENDIF.
    ENDIF.

    IF type1 = ''h''.
      compare_tables(
        act = act
        exp = exp ).
    ELSEIF tol IS SUPPLIED.
      diff = exp - act.
*      WRITE ''@KERNEL console.dir(tol);''.
*      WRITE ''@KERNEL console.dir(diff);''.
      IF diff >= tol.
        RAISE EXCEPTION TYPE kernel_cx_assert.
      ENDIF.
    ELSEIF type1 = ''l''.
      assert_equals(
        act = act->*
        exp = exp->* ).
    ELSEIF act <> exp.
      lv_act = lcl_dump=>to_string( act ).
      lv_exp = lcl_dump=>to_string( exp ).
      IF msg <> ''''.
        lv_msg = msg.
      ELSE.
        lv_msg = |Expected ''{ lv_exp }'', got ''{ lv_act }''|.
      ENDIF.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg      = lv_msg
          actual   = lv_act
          expected = lv_exp.
    ENDIF.
  ENDMETHOD.

  METHOD assert_not_initial.
    DATA lv_msg TYPE string.
    IF act IS INITIAL.
      lv_msg = msg.
      IF lv_msg IS INITIAL.
        lv_msg = |Expected non initial value|.
      ENDIF.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = lv_msg.
    ENDIF.
  ENDMETHOD.

  METHOD assert_initial.
    DATA lv_msg TYPE string.
    IF act IS NOT INITIAL.
      lv_msg = msg.
      IF lv_msg IS INITIAL.
        lv_msg = |Expected initial value|.
      ENDIF.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = lv_msg.
    ENDIF.
  ENDMETHOD.

  METHOD assert_subrc.
    DATA lv_msg TYPE string.
    IF act <> exp.
      lv_msg = msg.
      IF lv_msg IS INITIAL.
        lv_msg = |Expected sy-subrc to equal { exp }, got { act }|.
      ENDIF.
      RAISE EXCEPTION TYPE kernel_cx_assert
        EXPORTING
          msg = lv_msg.
    ENDIF.
  ENDMETHOD.

  METHOD assert_number_between.
    IF number < lower OR number > upper.
      RAISE EXCEPTION TYPE kernel_cx_assert.
    ENDIF.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_FUNCTION_TEST_ENVIRONMENT            ', 'CLASS cl_function_test_environment DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_function_test_environment.

    "! Note: open-abap function module test doubles allows creating doubles for non-existing
    "! function modules
    CLASS-METHODS create
      IMPORTING
        function_modules                 TYPE if_function_test_environment=>tt_function_dependencies
      RETURNING
        VALUE(function_test_environment) TYPE REF TO if_function_test_environment.
  PRIVATE SECTION.
    TYPES: BEGIN OF ty_backup,
             name   TYPE sxco_fm_name,
             backup TYPE i,
             double TYPE REF TO if_function_testdouble,
           END OF ty_backup.
    CLASS-DATA gt_backup TYPE SORTED TABLE OF ty_backup WITH UNIQUE KEY name.
ENDCLASS.

CLASS cl_function_test_environment IMPLEMENTATION.

  METHOD create.
    DATA lv_module LIKE LINE OF function_modules.
    DATA ls_row    LIKE LINE OF gt_backup.

    ASSERT lines( function_modules ) > 0.

    LOOP AT function_modules INTO lv_module.
      ls_row-name = lv_module.
      CREATE OBJECT ls_row-double TYPE lcl_double
        EXPORTING
          iv_name = lv_module.
      WRITE ''@KERNEL ls_row.get().backup = abap.FunctionModules[lv_module.get().trimEnd()];''.
      INSERT ls_row INTO gt_backup.
    ENDLOOP.

    CREATE OBJECT function_test_environment TYPE cl_function_test_environment.
  ENDMETHOD.

  METHOD if_function_test_environment~get_double.
    FIELD-SYMBOLS <ls_row> LIKE LINE OF gt_backup.

    READ TABLE gt_backup ASSIGNING <ls_row> WITH KEY name = function_name.
    ASSERT sy-subrc = 0.

    result = <ls_row>-double.
  ENDMETHOD.

  METHOD if_function_test_environment~clear_doubles.
    FIELD-SYMBOLS <ls_row> LIKE LINE OF gt_backup.

    LOOP AT gt_backup ASSIGNING <ls_row>.
      WRITE ''@KERNEL abap.FunctionModules[fs_ls_row_.get().name.get().trimEnd()] = fs_ls_row_.get().backup;''.
    ENDLOOP.
    CLEAR gt_backup.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_FTD_PARAMETER_NOT_FOUND              ', 'CLASS cx_ftd_parameter_not_found DEFINITION PUBLIC FINAL CREATE PUBLIC INHERITING FROM cx_no_check.

ENDCLASS.

CLASS cx_ftd_parameter_not_found IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_INPUT_ARGUMENTS                  ', 'INTERFACE if_ftd_input_arguments PUBLIC.

  METHODS get_importing_parameter
    IMPORTING
      name          TYPE abap_parmname
    RETURNING
      VALUE(result) TYPE REF TO data
    RAISING
      cx_ftd_parameter_not_found.

  METHODS get_table_parameter
    IMPORTING
      name          TYPE abap_parmname
    RETURNING
      VALUE(result) TYPE REF TO data
    RAISING
      cx_ftd_parameter_not_found.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_INPUT_CONFIG_SETTER              ', 'INTERFACE if_ftd_input_config_setter PUBLIC.

  METHODS ignore_all_parameters
    RETURNING
      VALUE(output_configuration_setter) TYPE REF TO if_ftd_output_config_setter.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_INVOCATION_ANSWER                ', 'INTERFACE if_ftd_invocation_answer PUBLIC.

  METHODS answer
    IMPORTING
      arguments TYPE REF TO if_ftd_input_arguments
    CHANGING
      result    TYPE REF TO if_ftd_invocation_result.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_INVOCATION_RESULT                ', 'INTERFACE if_ftd_invocation_result PUBLIC.

  METHODS get_output_configuration
    RETURNING
      VALUE(result) TYPE REF TO if_ftd_output_configuration.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_OUTPUT_CONFIG_SETTER             ', 'INTERFACE if_ftd_output_config_setter PUBLIC.

  METHODS then_answer
    IMPORTING
      answer      TYPE REF TO if_ftd_invocation_answer
    RETURNING
      VALUE(self) TYPE REF TO if_ftd_output_config_setter.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FTD_OUTPUT_CONFIGURATION             ', 'INTERFACE if_ftd_output_configuration PUBLIC.

  METHODS set_exporting_parameter
    IMPORTING
      name        TYPE abap_parmname
      value       TYPE any
    RETURNING
      VALUE(self) TYPE REF TO if_ftd_output_configuration
    RAISING
      cx_ftd_parameter_not_found.

  METHODS set_table_parameter
    IMPORTING
      name  TYPE abap_parmname
      value TYPE any
    RETURNING
      VALUE(self) TYPE REF TO if_ftd_output_configuration
    RAISING
      cx_ftd_parameter_not_found.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FUNCTION_TEST_ENVIRONMENT            ', 'INTERFACE if_function_test_environment PUBLIC.

  TYPES tt_function_dependencies TYPE STANDARD TABLE OF sxco_fm_name WITH KEY table_line.

  METHODS get_double
    IMPORTING
      function_name TYPE sxco_fm_name
    RETURNING
      VALUE(result) TYPE REF TO if_function_testdouble.

  METHODS clear_doubles.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_FUNCTION_TESTDOUBLE                  ', 'INTERFACE if_function_testdouble PUBLIC.

  METHODS configure_call
    RETURNING
      VALUE(input_configuration_setter) TYPE REF TO if_ftd_input_config_setter.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_ABAP_UNIT_CONSTANT                   ', 'INTERFACE if_abap_unit_constant PUBLIC.
  CONSTANTS:
    BEGIN OF severity,
      low               TYPE int1 VALUE 0,
      medium            TYPE int1 VALUE 1,
      high              TYPE int1 VALUE 2,
    END OF severity.
  CONSTANTS:
    BEGIN OF quit,
      test   TYPE int1 VALUE 1,
      no     TYPE int1 VALUE 5,
    END OF quit.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_AUNIT_CONSTANTS                      ', 'INTERFACE if_aunit_constants PUBLIC.
  CONSTANTS no        TYPE int1 VALUE 0.
  CONSTANTS critical  TYPE int1 VALUE 1.
  CONSTANTS fatal     TYPE int1 VALUE 1.
  CONSTANTS tolerable TYPE int1 VALUE 1.
  CONSTANTS method    TYPE int1 VALUE 1.
  CONSTANTS class     TYPE int1 VALUE 2.

  CONSTANTS: BEGIN OF severity,
               low    TYPE int1 VALUE 0,
               medium TYPE int1 VALUE 1,
               high   TYPE int1 VALUE 2,
             END OF severity.

  CONSTANTS: BEGIN OF quit,
               no   TYPE int1 VALUE 0,
               test TYPE int1 VALUE 1,
             END OF quit.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_CX_ASSERT                        ', 'CLASS kernel_cx_assert DEFINITION PUBLIC INHERITING FROM cx_dynamic_check.
  PUBLIC SECTION.
    DATA actual TYPE string.
    DATA expected TYPE string.
    DATA msg TYPE string.

    METHODS constructor
      IMPORTING
        msg      TYPE string
        previous LIKE previous OPTIONAL
        expected LIKE expected OPTIONAL
        actual   LIKE actual OPTIONAL.
ENDCLASS.

CLASS kernel_cx_assert IMPLEMENTATION.

  METHOD constructor.
    super->constructor( previous = previous ).
    me->expected = expected.
    me->actual = actual.
    me->msg = msg.
    IF me->msg IS INITIAL.
      me->msg = |Unit test assertion failed|.
    ENDIF.
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('KERNEL_UNIT_RUNNER                      ', 'CLASS kernel_unit_runner DEFINITION PUBLIC.
  PUBLIC SECTION.
* as of now, only global classes with local testclasses are supported
    TYPES: BEGIN OF ty_input_item,
             class_name     TYPE c LENGTH 30,
             testclass_name TYPE c LENGTH 30,
             method_name    TYPE c LENGTH 30,
           END OF ty_input_item.
    TYPES ty_input TYPE STANDARD TABLE OF ty_input_item WITH DEFAULT KEY.

    TYPES ty_status TYPE string.
    CONSTANTS: BEGIN OF gc_status,
                success TYPE ty_status VALUE ''SUCCESS'',
                failed  TYPE ty_status VALUE ''FAILED'',
                skipped TYPE ty_status VALUE ''SKIPPED'',
               END OF gc_status.

    TYPES BEGIN OF ty_result_item.
    INCLUDE TYPE ty_input_item.
    TYPES: expected    TYPE string,
             actual      TYPE string,
             status      TYPE ty_status,
             runtime     TYPE i,
             message     TYPE string,
             js_location TYPE string,
             console     TYPE string,
           END OF ty_result_item.
    TYPES: BEGIN OF ty_result,
             list TYPE STANDARD TABLE OF ty_result_item WITH DEFAULT KEY,
             json TYPE string,
           END OF ty_result.

    CLASS-DATA mv_console TYPE string.

    CLASS-METHODS run
      IMPORTING
        it_input TYPE ty_input
      RETURNING
        VALUE(rs_result) TYPE ty_result.
  PRIVATE SECTION.
    TYPES: BEGIN OF ty_class_item,
             class_name     TYPE c LENGTH 30,
             testclass_name TYPE c LENGTH 30,
           END OF ty_class_item.
    TYPES ty_classes TYPE STANDARD TABLE OF ty_class_item WITH DEFAULT KEY.

    CLASS-METHODS unique_classes
      IMPORTING
       it_input TYPE ty_input
      RETURNING
        VALUE(rt_classes) TYPE ty_classes.

    CLASS-METHODS to_json
      IMPORTING it_list TYPE ty_result-list
      RETURNING VALUE(rv_json) TYPE string.

    CLASS-METHODS get_location
      IMPORTING ix_error TYPE REF TO cx_root
      RETURNING VALUE(rv_location) TYPE string.
ENDCLASS.

CLASS kernel_unit_runner IMPLEMENTATION.

  METHOD get_location.
    DATA lv_stack TYPE string.
    DATA lt_lines TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA lv_found TYPE abap_bool.
    WRITE ''@KERNEL lv_stack.set(INPUT.ix_error.get().stack);''.
    SPLIT lv_stack AT |\\n| INTO TABLE lt_lines.
* find whatever comes after "cl_abap_unit_assert"
    LOOP AT lt_lines INTO lv_stack.
      IF lv_stack CP ''*cl_abap_unit_assert*''.
        lv_found = abap_true.
        CONTINUE.
      ELSEIF lv_found = abap_true.
        REPLACE FIRST OCCURRENCE OF |at | IN lv_stack WITH ''''.
        rv_location = condense( lv_stack ).
        EXIT.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD to_json.
* would like to keep the dependencies of this class minimal,
* so not using CALL TRANSFORMATION or any other ABAP classes

    DATA ls_list    LIKE LINE OF it_list.
    DATA lt_strings TYPE STANDARD TABLE OF string WITH DEFAULT KEY.
    DATA lv_string  LIKE LINE OF lt_strings.
    DATA lv_message TYPE string.


    LOOP AT it_list INTO ls_list.
      lv_message = ls_list-message.
      REPLACE ALL OCCURRENCES OF |"| IN lv_message WITH |\\"|.
      REPLACE ALL OCCURRENCES OF |\\n| IN lv_message WITH |\\\\n|.

      REPLACE ALL OCCURRENCES OF |"| IN ls_list-expected WITH |\\"|.
      REPLACE ALL OCCURRENCES OF |\\n| IN ls_list-expected WITH |\\\\n|.

      REPLACE ALL OCCURRENCES OF |"| IN ls_list-actual WITH |\\"|.
      REPLACE ALL OCCURRENCES OF |\\n| IN ls_list-actual WITH |\\\\n|.

      REPLACE ALL OCCURRENCES OF |"| IN ls_list-console WITH |\\"|.
      REPLACE ALL OCCURRENCES OF |\\n| IN ls_list-console WITH |\\\\n|.

      lv_string = |\\{"class_name": "{ ls_list-class_name
        }","testclass_name": "{ ls_list-testclass_name
        }","method_name": "{ ls_list-method_name
        }","expected": "{ ls_list-expected
        }","actual": "{ ls_list-actual
        }","status": "{ ls_list-status
        }","runtime": { ls_list-runtime
        },"console": "{ ls_list-console
        }","message": "{ lv_message
        }","js_location": "{ ls_list-js_location }"\\}|.
      APPEND lv_string TO lt_strings.
    ENDLOOP.
    CONCATENATE LINES OF lt_strings INTO rv_json SEPARATED BY '',''.
    rv_json = ''['' && rv_json && '']''.
  ENDMETHOD.

  METHOD unique_classes.
    DATA ls_input LIKE LINE OF it_input.
    DATA ls_class LIKE LINE OF rt_classes.
    LOOP AT it_input INTO ls_input.
      MOVE-CORRESPONDING ls_input TO ls_class.
      INSERT ls_class INTO TABLE rt_classes.
    ENDLOOP.
    SORT rt_classes.
    DELETE ADJACENT DUPLICATES FROM rt_classes.
  ENDMETHOD.

  METHOD run.

    DATA ls_input   LIKE LINE OF it_input.
    DATA lv_time    TYPE i.
    DATA lo_obj     TYPE REF TO object.
    DATA lv_name    TYPE string.
    DATA lt_classes TYPE ty_classes.
    DATA ls_class   LIKE LINE OF lt_classes.
    DATA lx_root    TYPE REF TO cx_root.
    DATA lx_assert  TYPE REF TO kernel_cx_assert.
    FIELD-SYMBOLS <ls_result> LIKE LINE OF rs_result-list.

* todo, respect quit level, default = method?

    lt_classes = unique_classes( it_input ).

    LOOP AT lt_classes INTO ls_class.
* this is special, and must match the runtime:
      lv_name = |CLAS-{ ls_class-class_name }-{ ls_class-testclass_name }|.
      CREATE OBJECT lo_obj TYPE (lv_name).

      TRY.
          CALL METHOD lo_obj->(''CLASS_SETUP'').
        CATCH cx_sy_dyn_call_illegal_method.
      ENDTRY.

      LOOP AT it_input INTO ls_input WHERE class_name = ls_class-class_name AND testclass_name = ls_class-testclass_name.
        APPEND INITIAL LINE TO rs_result-list ASSIGNING <ls_result>.
        MOVE-CORRESPONDING ls_input TO <ls_result>.

        TRY.
            CALL METHOD lo_obj->(''SETUP'').
          CATCH cx_sy_dyn_call_illegal_method.
        ENDTRY.

        GET RUN TIME FIELD lv_time.
        CLEAR mv_console.
        TRY.
            CALL METHOD lo_obj->(ls_input-method_name).
            <ls_result>-status  = gc_status-success.
            <ls_result>-console = mv_console.
          CATCH kernel_cx_assert INTO lx_assert.
            <ls_result>-status      = gc_status-failed.
            <ls_result>-actual      = lx_assert->actual.
            <ls_result>-expected    = lx_assert->expected.
            <ls_result>-message     = lx_assert->msg.
            <ls_result>-js_location = get_location( lx_assert ).
            <ls_result>-console     = mv_console.
          CATCH cx_root INTO lx_root.
            <ls_result>-status      = gc_status-failed.
            <ls_result>-message     = |Some exception raised|. " todo, use RTTI to find the class name?
            <ls_result>-js_location = get_location( lx_root ).
            <ls_result>-console     = mv_console.
        ENDTRY.
        GET RUN TIME FIELD lv_time.
        <ls_result>-runtime = lv_time.

        TRY.
            CALL METHOD lo_obj->(''TEARDOWN'').
          CATCH cx_sy_dyn_call_illegal_method.
        ENDTRY.
      ENDLOOP.

      TRY.
          CALL METHOD lo_obj->(''CLASS_TEARDOWN'').
        CATCH cx_sy_dyn_call_illegal_method.
      ENDTRY.

    ENDLOOP.

    rs_result-json = to_json( rs_result-list ).

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_OSQL_TEST_ENVIRONMENT                ', 'CLASS cl_osql_test_environment DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_osql_test_environment.

    CLASS-METHODS create
      IMPORTING
        i_dependency_list TYPE if_osql_test_environment=>ty_t_sobjnames
      RETURNING
        VALUE(r_result)   TYPE REF TO if_osql_test_environment.

  PRIVATE SECTION.
    CONSTANTS mv_schema TYPE string VALUE ''double''.

    DATA mt_tables TYPE if_osql_test_environment=>ty_t_sobjnames.
    DATA mo_sql    TYPE REF TO cl_sql_statement.

    METHODS initialize.
    METHODS validate.
    METHODS set_runtime_prefix.
ENDCLASS.

CLASS cl_osql_test_environment IMPLEMENTATION.

  METHOD create.
    DATA lo_env TYPE REF TO cl_osql_test_environment.

    ASSERT sy-dbsys = ''sqlite''.

    CREATE OBJECT lo_env.
    lo_env->mt_tables = i_dependency_list.
    CREATE OBJECT lo_env->mo_sql.
    lo_env->initialize( ).

    r_result = lo_env.

  ENDMETHOD.

  METHOD validate.

    DATA ref           TYPE REF TO data.
    DATA lv_table      LIKE LINE OF mt_tables.
    FIELD-SYMBOLS <fs> TYPE any.

    LOOP AT mt_tables INTO lv_table.
      TRY.
          CREATE DATA ref TYPE (lv_table).
          ASSIGN ref->* TO <fs>.
          SELECT SINGLE * FROM (lv_table) INTO <fs>.
        CATCH cx_sy_create_data_error cx_sy_dynamic_osql_semantics.
          WRITE ''@KERNEL throw new Error(\`table \${lv_table.get().trimEnd()} invalid or does not exist\`);''.
      ENDTRY.
    ENDLOOP.
  ENDMETHOD.

  METHOD initialize.

    DATA lv_table  LIKE LINE OF mt_tables.
    DATA lv_sql    TYPE string.
    DATA lo_result TYPE REF TO cl_sql_result_set.
    DATA lr_ref    TYPE REF TO data.

    WRITE ''@KERNEL if (abap.dbo.schemaPrefix !== "") throw new Error("already prefixed");''.

* validate that the tables to be doubled exists
    validate( ).

* https://www.sqlite.org/lang_attach.html
    mo_sql->execute_update( |ATTACH DATABASE '':memory:'' AS { mv_schema };| ).

    LOOP AT mt_tables INTO lv_table.
      lv_table = to_lower( lv_table ).

      lo_result = mo_sql->execute_query( |SELECT sql FROM main.sqlite_master WHERE type=''table'' AND name=''{ lv_table }'';| ).
      GET REFERENCE OF lv_sql INTO lr_ref.
      lo_result->set_param( lr_ref ).
      lo_result->next( ).
      lo_result->close( ).

      REPLACE FIRST OCCURRENCE OF lv_table IN lv_sql WITH |{ mv_schema }''.''{ lv_table }|.
      ASSERT sy-subrc = 0.

      mo_sql->execute_update( lv_sql ).
    ENDLOOP.

    set_runtime_prefix( ).

  ENDMETHOD.

  METHOD set_runtime_prefix.

    WRITE ''@KERNEL abap.dbo.schemaPrefix = this.mv_schema.get();''.

  ENDMETHOD.

  METHOD if_osql_test_environment~clear_doubles.
    DATA lv_table LIKE LINE OF mt_tables.

    LOOP AT mt_tables INTO lv_table.
      lv_table = to_lower( lv_table ).
      mo_sql->execute_update( |DELETE FROM { mv_schema }."{ lv_table }";| ).
    ENDLOOP.
  ENDMETHOD.

  METHOD if_osql_test_environment~destroy.

* https://www.sqlite.org/lang_detach.html
    mo_sql->execute_update( |DETACH DATABASE { mv_schema };| ).

    WRITE ''@KERNEL abap.dbo.schemaPrefix = "";''.

  ENDMETHOD.

  METHOD if_osql_test_environment~insert_test_data.
    DATA lo_table_descr  TYPE REF TO cl_abap_tabledescr.
    DATA lo_struct_descr TYPE REF TO cl_abap_structdescr.
    DATA lv_table        TYPE string.

    lo_table_descr ?= cl_abap_typedescr=>describe_by_data( i_data ).
    lo_struct_descr ?= lo_table_descr->get_table_line_type( ).
    lv_table = lo_struct_descr->get_relative_name( ).

* sanity checks,
    ASSERT lv_table IS NOT INITIAL.
    READ TABLE mt_tables WITH KEY table_line = lv_table TRANSPORTING NO FIELDS.
    ASSERT sy-subrc = 0.

    INSERT (lv_table) FROM TABLE i_data.
    ASSERT sy-subrc = 0.

  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_OSQL_TEST_ENVIRONMENT                ', 'INTERFACE if_osql_test_environment PUBLIC.

  TYPES ty_s_sobjname  TYPE abap_compname.
  TYPES ty_t_sobjnames TYPE STANDARD TABLE OF ty_s_sobjname WITH DEFAULT KEY.

  METHODS clear_doubles.
  METHODS destroy.

  METHODS insert_test_data
    IMPORTING
      i_data TYPE ANY TABLE.

ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CL_SYSTEM_UUID                          ', 'CLASS cl_system_uuid DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_system_uuid_rfc4122_static.
    INTERFACES if_system_uuid_static.

    ALIASES create_uuid_c32_static FOR if_system_uuid_static~create_uuid_c32.
    ALIASES create_uuid_x16_static FOR if_system_uuid_static~create_uuid_x16.
  PRIVATE SECTION.
    CLASS-METHODS random RETURNING VALUE(rv_str) TYPE string.
ENDCLASS.

CLASS cl_system_uuid IMPLEMENTATION.

  METHOD random.
    " browser and node
    WRITE ''@KERNEL if (cl_system_uuid.CRYPTO === undefined) cl_system_uuid.CRYPTO = await import("crypto");''.
    WRITE ''@KERNEL if (cl_system_uuid.CRYPTO.randomUUID) {''.
    WRITE ''@KERNEL   rv_str.set(cl_system_uuid.CRYPTO.randomUUID());''.
    WRITE ''@KERNEL } else {''.
    WRITE ''@KERNEL   rv_str = window.crypto.randomUUID();''.
    WRITE ''@KERNEL }''.
  ENDMETHOD.

  METHOD if_system_uuid_static~create_uuid_x16.
    DATA lv_str TYPE string.
    lv_str = random( ).
    REPLACE ALL OCCURRENCES OF ''-'' IN lv_str WITH ''''.
    TRANSLATE lv_str TO UPPER CASE.
    uuid = lv_str(32).
  ENDMETHOD.

  METHOD if_system_uuid_static~create_uuid_c32.
    DATA lv_str TYPE string.
    lv_str = random( ).
    REPLACE ALL OCCURRENCES OF ''-'' IN lv_str WITH ''''.
    uuid = lv_str(32).
    TRANSLATE uuid TO UPPER CASE.
  ENDMETHOD.

  METHOD if_system_uuid_rfc4122_static~create_uuid_c36_by_version.
    ASSERT version = 4.
    uuid = random( ).
  ENDMETHOD.

  METHOD if_system_uuid_static~create_uuid_c22.
    DATA lv_str TYPE string.
    lv_str = random( ).
    REPLACE ALL OCCURRENCES OF ''-'' IN lv_str WITH ''''.
    uuid = lv_str(22).
  ENDMETHOD.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('CX_UUID_ERROR                           ', 'CLASS cx_uuid_error DEFINITION PUBLIC INHERITING FROM cx_static_check.

ENDCLASS.

CLASS cx_uuid_error IMPLEMENTATION.

ENDCLASS.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SYSTEM_UUID_RFC4122_STATIC           ', 'INTERFACE if_system_uuid_rfc4122_static PUBLIC.
  CLASS-METHODS create_uuid_c36_by_version
    IMPORTING
      version TYPE i
    RETURNING
      VALUE(uuid) TYPE sysuuid_c36
    RAISING
      cx_uuid_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO reposrc ('PROGNAME', 'DATA') VALUES ('IF_SYSTEM_UUID_STATIC                   ', 'INTERFACE if_system_uuid_static PUBLIC.
  CLASS-METHODS create_uuid_x16
    RETURNING
      VALUE(uuid) TYPE sysuuid_x16
    RAISING
      cx_uuid_error.

  CLASS-METHODS create_uuid_c32
    RETURNING
      VALUE(uuid) TYPE sysuuid_c32
    RAISING
      cx_uuid_error.

  CLASS-METHODS create_uuid_c22
    RETURNING
      VALUE(uuid) TYPE sysuuid_c22
    RAISING
      cx_uuid_error.
ENDINTERFACE.');`);
  insert.push(`INSERT INTO t000 ('mandt', 'cccategory', 'ccnocliind') VALUES ('123', '', '');`);

  const {setup} = await import("../setup.mjs");
  await setup(globalThis.abap, schemas, insert);
}