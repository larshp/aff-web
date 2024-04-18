"!@testing CL_AFF_ABAP_DOC_PARSER
CLASS ltcl_aff_abap_doc_parser DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.
  PRIVATE SECTION.
    DATA parser TYPE REF TO zcl_aff_abap_doc_parser.
    DATA log TYPE REF TO zif_aff_log.
    DATA exp_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    METHODS setup.
    METHODS title_and_description FOR TESTING RAISING cx_static_check.
    METHODS default_minimum FOR TESTING RAISING cx_static_check.
    METHODS required_max_exclmin FOR TESTING RAISING cx_static_check.
    METHODS showalways_exclmax_multipleof FOR TESTING RAISING cx_static_check.
    METHODS enum_values FOR TESTING RAISING cx_static_check.
    METHODS callback_class FOR TESTING RAISING cx_static_check.
    METHODS default_with_link FOR TESTING RAISING cx_static_check.
    METHODS too_many_titles_and_showalways FOR TESTING RAISING cx_static_check.
    METHODS too_many_number_annotations FOR TESTING RAISING cx_static_check.
    METHODS too_many_default_mixed FOR TESTING RAISING cx_static_check.
    METHODS too_many_default_link FOR TESTING RAISING cx_static_check.
    METHODS too_many_default_value FOR TESTING RAISING cx_static_check.
    METHODS too_many_value_links FOR TESTING RAISING cx_static_check.
    METHODS too_many_callbackclasses FOR TESTING RAISING cx_static_check.
    METHODS too_many_required_annotations FOR TESTING RAISING cx_static_check.
    METHODS unknown_annotation FOR TESTING RAISING cx_static_check.
    METHODS wrong_usage_callback_class FOR TESTING RAISING cx_static_check.
    METHODS wrong_usage_default FOR TESTING RAISING cx_static_check.
    METHODS wrong_usage_enum_values FOR TESTING RAISING cx_static_check.
    METHODS wrong_value_number_annotation FOR TESTING RAISING cx_static_check.
    METHODS wrong_links FOR TESTING RAISING cx_static_check.
    METHODS description_at_false_position FOR TESTING RAISING cx_static_check.
    METHODS text_between_annotations FOR TESTING RAISING cx_static_check.
    METHODS title_at_wrong_position FOR TESTING RAISING cx_static_check.
    METHODS overwriting_enum_value FOR TESTING RAISING cx_static_check.
    METHODS too_many_enum_values FOR TESTING RAISING cx_static_check.
    METHODS content_media_type FOR TESTING RAISING cx_static_check.
    METHODS content_encoding FOR TESTING RAISING cx_static_check.
    METHODS content_encod_multiple_entries FOR TESTING RAISING cx_static_check.
    METHODS content_media_multiple_entries FOR TESTING RAISING cx_static_check.
    METHODS content_media_type_used_wrong FOR TESTING RAISING cx_static_check.
    METHODS content_encoding_used_wrong FOR TESTING RAISING cx_static_check.


ENDCLASS.

CLASS ltcl_aff_abap_doc_parser IMPLEMENTATION.

  METHOD setup.
    CREATE OBJECT parser TYPE zcl_aff_abap_doc_parser.
    CREATE OBJECT log TYPE zcl_aff_log.
  ENDMETHOD.

  METHOD title_and_description.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title  </p> This is the description.`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-title = `Title`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD default_minimum.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $minimum 12 $default '20'`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-minimum = `12`.
    exp_abap_doc-default = `"20"`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD required_max_exclmin.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $exclusiveMinimum 12 $maximum 20 $required`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-exclusive_minimum = `12`.
    exp_abap_doc-maximum = `20`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD showalways_exclmax_multipleof.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $exclusiveMaximum 12 $multipleOf 2 $showAlways `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-exclusive_maximum = `12`.
    exp_abap_doc-multiple_of = `2`.
    exp_abap_doc-showalways = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD enum_values.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $values    {    @link    cl_aff_test_types_for_writer.data:enum_values    }`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-enumvalues_link = `cl_aff_test_types_for_writer.data:enum_values`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD callback_class.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $callbackClass {     @link    cl_aff_test_types_for_writer    } `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-callback_class = `cl_aff_test_types_for_writer`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD content_media_type.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description.$contentMediaType     'text/html' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-content_media_type = `text/html`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD content_media_multiple_entries.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $contentMediaType     'text/html' $contentMediaType     'text/html123' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-content_media_type = `text/html`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-content_media_type } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD content_media_type_used_wrong.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $contentMediaType  text/html `. " opening and closing "'" are missing

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = `Annotation $contentMediaType was used incorrectly`
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.


  METHOD content_encoding.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $contentEncoding     'base64' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-content_encoding = `base64`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD content_encod_multiple_entries.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $contentEncoding     'base64' $contentEncoding     'base42' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-content_encoding = `base64`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-content_encoding } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD content_encoding_used_wrong.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $contentEncoding     base64 `. " opening and closing "'" are missing

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = `Annotation $contentEncoding was used incorrectly`
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.


  METHOD default_with_link.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> This is the description. $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi } `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description.`.
    exp_abap_doc-default = `@link cl_aff_test_types_for_writer.data:enum_values.classic_badi`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD too_many_titles_and_showalways.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> <p class="shorttext">Title2</p> This is the description $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi }  $showAlways $minimum 2 $showAlways`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-description = `This is the description`.
    exp_abap_doc-showalways = abap_true.
    exp_abap_doc-minimum = `2`.
    exp_abap_doc-default = `@link cl_aff_test_types_for_writer.data:enum_values.classic_badi`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = `There are several occurrences of annotation 'Title' . First valid is used`
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).

    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-show_always } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_number_annotations.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many number annotations $minimum 4 $maximum 9 $maximum 19 $minimum 3 `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many number annotations`.
    exp_abap_doc-minimum = '4'.
    exp_abap_doc-maximum = '9'.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-minimum } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-maximum } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_default_mixed.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many defaults  $required $default '10' $minimum 4 $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi } $default '11'`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many defaults`.
    exp_abap_doc-minimum = '4'.
    exp_abap_doc-default = `"10"`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-default } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_default_link.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many defaults  $required $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi } $minimum 4 $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi } `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many defaults`.
    exp_abap_doc-minimum = '4'.
    exp_abap_doc-default = `@link cl_aff_test_types_for_writer.data:enum_values.classic_badi`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-default } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_default_value.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many defaults  $required $default '10' $minimum 4 $default '19' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many defaults`.
    exp_abap_doc-minimum = '4'.
    exp_abap_doc-default = `"10"`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-default } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_value_links.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are two many value links. $values { @link    cl_aff_test_types_for_writer.data:enum_values    } $values { @link    cl_aff_test_types_for_writer.data:enum_values } $required`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are two many value links.`.
    exp_abap_doc-enumvalues_link = `cl_aff_test_types_for_writer.data:enum_values`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-values } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_callbackclasses.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many callbackclass links. $callbackClass { @link cl_aff_test_types_for_writer } $minimum 4 $callbackClass {  @link  cl_aff_test_types_for_writer  }`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many callbackclass links.`.
    exp_abap_doc-callback_class = `cl_aff_test_types_for_writer`.
    exp_abap_doc-minimum = '4'.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-callback_class } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD too_many_required_annotations.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here are too many required annotations. $required $minLength 5 $required $maxLength 10`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here are too many required annotations.`.
    exp_abap_doc-required = abap_true.
    exp_abap_doc-min_length = '5'.
    exp_abap_doc-max_length = '10'.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-required } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD unknown_annotation.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Here is a unknown annoataion. $required $unknown`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here is a unknown annoataion.`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text(
      log                = log
      exp_text           = `Annotation $unknown is unknown`
      exp_type           = zif_aff_log=>c_message_type-warning
      exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD wrong_usage_callback_class.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Wrong usage of callbackClass annotation. $callbackClass { cl_aff_test_types_for_writer } $default '4' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong usage of callbackClass annotation.`.
    exp_abap_doc-default = '"4"'.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text(
      log                = log
      exp_text           = `Annotation $callbackClass was used incorrectly`
      exp_type           = zif_aff_log=>c_message_type-warning
      exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD wrong_usage_default.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Wrong usage of default  $required $default 10 `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name1`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong usage of default`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).

    abap_doc_to_parse = `Wrong usage of default  $required $default {cl_aff_test_types_for_writer.data:enum_values.classic_badi } `.
    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name2`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong usage of default`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).

    zcl_aff_tools_unit_test_helper=>assert_log_contains_text(
      log                = log
      exp_text           = `Annotation $default was used incorrectly`
      exp_type           = zif_aff_log=>c_message_type-warning
      exp_component_name = `Component Name1` ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text(
      log                = log
      exp_text           = `Annotation $default was used incorrectly`
      exp_type           = zif_aff_log=>c_message_type-warning
      exp_component_name = `Component Name2` ).
  ENDMETHOD.

  METHOD wrong_usage_enum_values.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Wrong usage of values. $values { cl_aff_test_types_for_writer.data:enum_values} $required`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong usage of values.`.
    exp_abap_doc-required = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text(
      log                = log
      exp_text           = `Annotation $values was used incorrectly`
      exp_type           = zif_aff_log=>c_message_type-warning
      exp_component_name = `Component Name` ).

  ENDMETHOD.

  METHOD wrong_value_number_annotation.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Wrong usage of minimum and maximum. $minimum '2' $maximum basjkasjdsa $default '3' `.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong usage of minimum and maximum.`.
    exp_abap_doc-default = '"3"'.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |No number was provided for annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-minimum }|
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |No number was provided for annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-maximum }|
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD wrong_links.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Wrong links for default and values. $values{@link cl_aff_test_types_for_writer.data:enum_values.component} $default{@link cl_aff_test_types_for_writer.data:enum_values}`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Wrong links for default and values.`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |Link in annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-values } is incorrect|
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |Link in annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-default } is incorrect|
                                                              exp_type           = zif_aff_log=>c_message_type-warning
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

  METHOD description_at_false_position.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> $minimum 12 This is the description at wrong position $default '20'`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-minimum = `12`.
    exp_abap_doc-default = `"20"`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg115
                                                              exp_component_name = `Component Name`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.

  METHOD text_between_annotations.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Title</p> Here is text between annotation $default {@link cl_aff_test_types_for_writer.data:enum_values.classic_badi} Some unused text $required`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Here is text between annotation`.
    exp_abap_doc-title = `Title`.
    exp_abap_doc-required = abap_true.
    exp_abap_doc-default = `@link cl_aff_test_types_for_writer.data:enum_values.classic_badi`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg116
                                                              exp_component_name = `Component Name`
                                                              exp_type           = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD title_at_wrong_position.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `Description first <p class="shorttext">This is the title at wrong position</p> $values{@link cl_aff_test_types_for_writer.data:enum_values} Unused Text`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Description first`.
    exp_abap_doc-title = `This is the title at wrong position`.
    exp_abap_doc-enumvalues_link = `cl_aff_test_types_for_writer.data:enum_values`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg116
                                                              exp_component_name = `Component Name`
                                                              exp_type           = zif_aff_log=>c_message_type-info ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg113
                                                              exp_component_name = `Component Name`
                                                              exp_type           = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD overwriting_enum_value.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Field With Overwritten Enum Value</p> Field with overwritten enum value $enumValue 'ownValue'`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Field with overwritten enum value`.
    exp_abap_doc-title = `Field With Overwritten Enum Value`.
    exp_abap_doc-enum_value = `ownValue`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.

  METHOD too_many_enum_values.
    DATA abap_doc_to_parse TYPE string.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    abap_doc_to_parse = `<p class="shorttext">Field With Overwritten Enum Value</p> Field with overwritten enum value $enumValue 'ownValue' blablabl $enumValue 'ownValue2'`.

    act_abap_doc = parser->parse(
      EXPORTING
        component_name = `Component Name`
        to_parse       = abap_doc_to_parse
      CHANGING
        log            = log ).
    CLEAR exp_abap_doc.
    exp_abap_doc-description = `Field with overwritten enum value`.
    exp_abap_doc-title = `Field With Overwritten Enum Value`.
    exp_abap_doc-enum_value = `ownValue`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = |There are several occurrences of annotation { zcl_aff_abap_doc_parser=>abap_doc_annotation-enum_value } . First valid is used|
                                                              exp_type           = zif_aff_log=>c_message_type-info
                                                              exp_component_name = `Component Name` ).
  ENDMETHOD.

ENDCLASS.
