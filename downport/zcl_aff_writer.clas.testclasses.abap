CLASS ltcl_type_writer DEFINITION DEFERRED.

CLASS ltcl_writer_testable DEFINITION FINAL FOR TESTING
  DURATION SHORT RISK LEVEL HARMLESS
  INHERITING FROM zcl_aff_writer
  FRIENDS ltcl_type_writer.
  PROTECTED SECTION.
    METHODS:
      write_element REDEFINITION,
      open_structure REDEFINITION,
      close_structure REDEFINITION,
      open_table REDEFINITION,
      write_tag REDEFINITION,
      close_table REDEFINITION.
ENDCLASS.

CLASS ltcl_writer_testable IMPLEMENTATION.
  METHOD write_element ##NEEDED.
  ENDMETHOD.
  METHOD close_structure ##NEEDED.
  ENDMETHOD.
  METHOD close_table ##NEEDED.
  ENDMETHOD.
  METHOD open_structure ##NEEDED.
  ENDMETHOD.
  METHOD open_table ##NEEDED.
  ENDMETHOD.
  METHOD write_tag.
    DATA temp40 LIKE LINE OF content.
    temp40 = |{ repeat( val = ` ` occ = indent_level * c_indent_number_characters ) }{ line }|.
    APPEND temp40 TO content.
  ENDMETHOD.

ENDCLASS.

CLASS ltcl_type_writer DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA:
      cut TYPE REF TO ltcl_writer_testable.

    METHODS: camel_case FOR TESTING RAISING cx_static_check,
      get_output FOR TESTING RAISING cx_static_check,
      get_type_info_string_like FOR TESTING RAISING cx_static_check,
      get_type_info_string_like_enum FOR TESTING RAISING cx_static_check,
      get_type_info_boolean1 FOR TESTING RAISING cx_static_check,
      get_type_info_boolean2 FOR TESTING RAISING cx_static_check,
      get_type_info_boolean3 FOR TESTING RAISING cx_static_check,
      get_type_info_numeric FOR TESTING RAISING cx_static_check,
      get_type_info_date_time FOR TESTING RAISING cx_static_check,
      stack_stores_operations FOR TESTING RAISING cx_static_check,
      append_to_previous_line FOR TESTING RAISING cx_static_check,
      call_reader_and_decode1 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode2 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode3 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode4 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode5 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode6 FOR TESTING RAISING cx_static_check,
      call_reader_and_decode7 FOR TESTING RAISING cx_static_check,
      delete_first_of_struc_stack FOR TESTING RAISING cx_static_check,
      get_all_path_information FOR TESTING RAISING cx_static_check,
      get_abap_doc_for_absolute_name FOR TESTING RAISING cx_static_check,
      compare_abap_doc FOR TESTING RAISING cx_static_check,
      callback_class_is_valid FOR TESTING RAISING cx_static_check,
      callback_class_is_invalid FOR TESTING RAISING cx_static_check,
      validate_default FOR TESTING RAISING cx_static_check,
      validate_source FOR TESTING RAISING cx_static_check,
      get_struc_of_enum_values_cl FOR TESTING RAISING cx_static_check,
      handle_include FOR TESTING RAISING cx_static_check,
      setup.

    METHODS: get_element_description
      IMPORTING data          TYPE data
      RETURNING VALUE(result) TYPE REF TO cl_abap_elemdescr.
ENDCLASS.


CLASS ltcl_type_writer IMPLEMENTATION.

  METHOD setup.
    CREATE OBJECT cut TYPE ltcl_writer_testable.
  ENDMETHOD.


  METHOD get_output.
    DATA temp41 TYPE string_table.
    DATA exp_output LIKE temp41.
    DATA act_output TYPE string_table.
    CLEAR temp41.
    INSERT `line1` INTO TABLE temp41.
    INSERT `line2` INTO TABLE temp41.

    exp_output = temp41.
    cut->output = exp_output.


    act_output = cut->zif_aff_writer~get_output( ).

    cl_abap_unit_assert=>assert_equals( exp = exp_output act = act_output ).
  ENDMETHOD.

  METHOD camel_case.
    DATA act_name TYPE string.
    act_name = cut->format_name( 'MY_TEst_nAmE' ).

    cl_abap_unit_assert=>assert_equals( act = act_name exp = 'myTestName' msg = |Actual was { act_name }, but expected is 'myTestName'| ).
  ENDMETHOD.


  METHOD get_type_info_string_like_enum.
    TYPES my_enum TYPE string.
    CONSTANTS: BEGIN OF undefined,
             option1 TYPE my_enum VALUE '1',
             option2 TYPE my_enum VALUE '2',
           END OF undefined.

    DATA temp43 TYPE my_enum.
    CLEAR temp43.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( temp43 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_string_like.
    DATA char TYPE c LENGTH 1.
    DATA temp44 TYPE string.
    DATA temp45 TYPE char1.
    DATA temp46 TYPE xstring.
    DATA temp47 TYPE numc4.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( char ) ) ).

    CLEAR temp44.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( temp44 ) ) ).

    CLEAR temp45.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( temp45 ) ) ).

    CLEAR temp46.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( temp46 ) ) ).

    CLEAR temp47.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-string act = cut->get_json_type_from_description( get_element_description( temp47 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_boolean1.
    DATA temp48 TYPE abap_boolean.
    CLEAR temp48.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-boolean act = cut->get_json_type_from_description( get_element_description( temp48 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_boolean2.
    DATA temp49 TYPE abap_bool.
    CLEAR temp49.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-boolean act = cut->get_json_type_from_description( get_element_description( temp49 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_boolean3.
    DATA temp50 TYPE flag.
    CLEAR temp50.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-boolean act = cut->get_json_type_from_description( get_element_description( temp50 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_numeric.
    DATA packed TYPE p.
    DATA temp51 TYPE f.
    DATA temp52 TYPE int1.
    DATA temp53 TYPE int2.
    DATA temp54 TYPE int8.
    DATA temp55 TYPE decfloat16.
    DATA temp56 TYPE decfloat34.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( packed ) ) ).

    CLEAR temp51.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp51 ) ) ).

    CLEAR temp52.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp52 ) ) ).

    CLEAR temp53.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp53 ) ) ).

    CLEAR temp54.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp54 ) ) ).

    CLEAR temp55.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp55 ) ) ).

    CLEAR temp56.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-numeric act = cut->get_json_type_from_description( get_element_description( temp56 ) ) ).
  ENDMETHOD.

  METHOD get_type_info_date_time.
    DATA temp57 TYPE d.
    DATA temp58 TYPE t.
    DATA temp59 TYPE timestamp.
    DATA temp60 TYPE timestampl.
    DATA temp61 TYPE utclong.
    CLEAR temp57.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-date_time act = cut->get_json_type_from_description( get_element_description( temp57 ) ) ).

    CLEAR temp58.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-date_time act = cut->get_json_type_from_description( get_element_description( temp58 ) ) ).

    CLEAR temp59.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-date_time act = cut->get_json_type_from_description( get_element_description( temp59 ) ) ).

    CLEAR temp60.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-date_time act = cut->get_json_type_from_description( get_element_description( temp60 ) ) ).

    CLEAR temp61.
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>type_info-date_time act = cut->get_json_type_from_description( get_element_description( temp61 ) ) ).
  ENDMETHOD.

  METHOD stack_stores_operations.
    DATA table TYPE STANDARD TABLE OF tadir.
    DATA temp62 TYPE REF TO cl_abap_elemdescr.
    DATA temp63 TYPE tadir.
    DATA temp64 TYPE tadir.

    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-initial act = cut->last_operation( ) ).


    CLEAR temp62.
    cut->zif_aff_writer~write_element( element_name = 'write_element' element_description = temp62 ).
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-write_element act = cut->last_operation( ) ).


    CLEAR temp63.
    cut->zif_aff_writer~open_node( node_name = 'open_structure' node_description = cl_abap_typedescr=>describe_by_data( temp63 ) ).
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-open_structure act = cut->last_operation( ) ).


    CLEAR temp64.
    cut->zif_aff_writer~close_node( node_name = 'close_structure' node_description = cl_abap_typedescr=>describe_by_data( temp64 ) ).
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-close_structure act = cut->last_operation( ) ).

    cut->zif_aff_writer~open_node( node_name = 'open_table' node_description = cl_abap_typedescr=>describe_by_data( table ) ).
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-open_table act = cut->last_operation( ) ).

    cut->zif_aff_writer~close_node( node_name = 'close_table' node_description = cl_abap_typedescr=>describe_by_data( table ) ).
    cl_abap_unit_assert=>assert_equals( exp = zif_aff_writer=>operation-close_table act = cut->last_operation( ) ).
  ENDMETHOD.

  METHOD get_element_description.
    DATA temp65 TYPE REF TO cl_abap_elemdescr.
    temp65 ?= cl_abap_typedescr=>describe_by_data( data ).
    result = temp65.
  ENDMETHOD.

  METHOD append_to_previous_line.
    DATA temp66 LIKE LINE OF cut->content.
    DATA temp67 LIKE sy-tabix.
    DATA temp68 LIKE LINE OF cut->content.
    DATA temp69 LIKE sy-tabix.
    cut->append_to_previous_line( '1+2' ).
    cut->append_to_previous_line( '=' ).
    cut->append_to_previous_line( '2+1' ).

    cut->write_tag( 'new line' ).
    cut->append_to_previous_line( ';' ).

    cl_abap_unit_assert=>assert_equals( exp = 2 act = lines( cut->content ) ).


    temp67 = sy-tabix.
    READ TABLE cut->content INDEX 1 INTO temp66.
    sy-tabix = temp67.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    cl_abap_unit_assert=>assert_equals( exp = '1+2=2+1' act = temp66 ).


    temp69 = sy-tabix.
    READ TABLE cut->content INDEX 2 INTO temp68.
    sy-tabix = temp69.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    cl_abap_unit_assert=>assert_equals( exp = 'new line;' act = temp68 ).
  ENDMETHOD.

  METHOD call_reader_and_decode1.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `CATEGORY`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-description = `This is an enum`.
    abap_doc_exp-title = `myCategory`.
    abap_doc_exp-enumvalues_link = `zcl_aff_test_types.data:enum_values`.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode2.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `AFF_TEST_TYPE-INNER_STRUC`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-title = 'Title of inner_struc'.
    abap_doc_exp-description = 'Description of inner_struc'.
    abap_doc_exp-showalways = abap_true.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode3.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `AFF_TEST_TYPE-INNER_STRUC-INNER_ELEMENT`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-required = abap_true.
    abap_doc_exp-title = `Title of inner_element`.
    abap_doc_exp-description = `Description of inner_element`.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode4.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `STRUCTURE_WITH_NUMBERS-INTEGER_WITH_MULTIPLE`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-title = 'Integer With Given Multiple'.
    abap_doc_exp-description = `Integer with given multiple`.
    abap_doc_exp-exclusive_minimum = `0`.
    abap_doc_exp-maximum = `99999`.
    abap_doc_exp-multiple_of = `1`.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode5.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `STRUCTURE_DIFFERENT_DEFAULT-FOUR_BYTE_INT`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-title = 'Four Byte Integer'.
    abap_doc_exp-description = 'Four byte integer'.
    abap_doc_exp-default = '"5"'.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode6.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_exp TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `STRUCTURE_DIFFERENT_DEFAULT-ENUM_TYPE`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).

    CLEAR abap_doc_exp.
    abap_doc_exp-title = 'Enum Type'.
    abap_doc_exp-description = 'Enum type'.
    abap_doc_exp-enumvalues_link = 'zcl_aff_test_types.data:co_class_category'.
    abap_doc_exp-default = '@link zcl_aff_test_types.data:co_class_category.exit_class'.
    cl_abap_unit_assert=>assert_equals( exp = abap_doc_exp act = abap_doc_act ).
  ENDMETHOD.

  METHOD call_reader_and_decode7.
    DATA name_of_source TYPE string.
    DATA element_name TYPE string.
    DATA abap_doc_act TYPE zcl_aff_abap_doc_parser=>abap_doc.
    name_of_source = `ZCL_AFF_TEST_TYPES`.

    element_name = `MY_STRUCTURE-MY_FIRST_ELEMENT`.

    abap_doc_act = cut->call_reader_and_decode( name_of_source = name_of_source element_name = element_name ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'First Element'
      act = abap_doc_act-title ).
  ENDMETHOD.

  METHOD delete_first_of_struc_stack.
    DATA exp_table LIKE cut->stack_of_structure.
    DATA temp70 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA temp71 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA temp72 TYPE zcl_aff_writer=>ty_structure_stack.
    CLEAR temp70.
    temp70-name = `MY_STRUCTURE3`.
    temp70-absolute_name = `\CLASS=ZCL_AFF_TEST_TYPES\TYPE=MY_STRUCTURE3`.
    INSERT temp70 INTO cut->stack_of_structure INDEX 1.

    CLEAR temp71.
    temp71-name = `MY_STRUCTURE3`.
    temp71-absolute_name = `\CLASS=ZCL_AFF_TEST_TYPES\TYPE=MY_STRUCTURE3`.
    INSERT temp71 INTO exp_table INDEX 1.

    CLEAR temp72.
    temp72-name = `MY_NESTED_STRUCTURE`.
    temp72-absolute_name = `\CLASS=ZCL_AFF_TEST_TYPES\TYPE=MY_NESTED_STRUCTURE`.
    INSERT temp72 INTO cut->stack_of_structure INDEX 1.
    cut->delete_first_of_struc_stack( ).
    cl_abap_unit_assert=>assert_equals( exp = exp_table act = cut->stack_of_structure ).
  ENDMETHOD.

  METHOD get_all_path_information.
    DATA temp73 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA temp74 TYPE zcl_aff_writer=>ty_structure_stack.
    DATA source_type_act TYPE string.
    DATA source_act TYPE string.
    DATA full_name_of_type_act TYPE string.
    DATA source_type_exp TYPE string.
    DATA source_exp TYPE string.
    DATA full_name_of_type_exp TYPE string.
    CLEAR temp73.
    temp73-name = `LIST`.
    temp73-absolute_name = `\CLASS=ZCL_AFF_TEST_TYPES\TYPE=LIST`.
    INSERT temp73 INTO cut->stack_of_structure INDEX 1.

    CLEAR temp74.
    temp74-name = `LIST1`.
    temp74-absolute_name = `\TYPE=%_T00004S00000109O0000013408`.
    INSERT temp74 INTO cut->stack_of_structure INDEX 1.



    cut->get_all_path_information(
      EXPORTING
        name             = `ELEMENT_OF_LIST1`
      IMPORTING
        source_type      = source_type_act
        source           = source_act
        fullname_of_type = full_name_of_type_act ).

    source_type_exp = `CLASS`.

    source_exp = `ZCL_AFF_TEST_TYPES`.

    full_name_of_type_exp = `LIST-LIST1-ELEMENT_OF_LIST1`.
    cl_abap_unit_assert=>assert_equals( exp = source_type_exp act = source_type_act ).
    cl_abap_unit_assert=>assert_equals( exp = source_exp act = source_act ).
    cl_abap_unit_assert=>assert_equals( exp = full_name_of_type_exp act = full_name_of_type_act ).
  ENDMETHOD.

  METHOD get_abap_doc_for_absolute_name.
    DATA absolute_name TYPE string.
    DATA temp75 TYPE abap_abstypename.
    DATA act_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA exp_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.
    absolute_name = `\CLASS=ZCL_AFF_TEST_TYPES\TYPE=MY_STRUCTURE`.

    temp75 = absolute_name.

    act_abap_doc = cut->get_abap_doc_for_absolute_name( absolute_name = temp75 ).

    CLEAR exp_abap_doc.
    exp_abap_doc-title = `mySimpleStructure`.
    exp_abap_doc-description = `This is a simple structure`.
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = act_abap_doc ).
  ENDMETHOD.

  METHOD compare_abap_doc.
    DATA abap_doc_base TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA abap_doc_additional TYPE zcl_aff_abap_doc_parser=>abap_doc.
    DATA exp_abap_doc TYPE zcl_aff_abap_doc_parser=>abap_doc.

    CLEAR abap_doc_base.
    abap_doc_base-title = `This is the title`.
    abap_doc_base-required = abap_true.
    CLEAR abap_doc_additional.
    abap_doc_additional-description = `This should not be written`.
    abap_doc_additional-enumvalues_link = `This link should be written`.
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `This is the title`.
    exp_abap_doc-required = abap_true.
    exp_abap_doc-enumvalues_link = `This link should be written`.
    cut->compare_abap_doc(
      EXPORTING
        abap_doc_additional = abap_doc_additional
      CHANGING
        abap_doc_base       = abap_doc_base ).
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = abap_doc_base ).

    CLEAR abap_doc_base.
    abap_doc_base-enumvalues_link = 'This is a link'.
    CLEAR abap_doc_additional.
    abap_doc_additional-title = `This is the new found title`.
    abap_doc_additional-description = `This is the new found description`.
    abap_doc_additional-enumvalues_link = `This link should not be written`.
    CLEAR exp_abap_doc.
    exp_abap_doc-title = `This is the new found title`.
    exp_abap_doc-description = `This is the new found description`.
    exp_abap_doc-enumvalues_link = `This is a link`.

    cut->compare_abap_doc(
      EXPORTING
        abap_doc_additional = abap_doc_additional
      CHANGING
        abap_doc_base       = abap_doc_base ).
    cl_abap_unit_assert=>assert_equals( exp = exp_abap_doc act = abap_doc_base ).

  ENDMETHOD.

  METHOD get_struc_of_enum_values_cl.
    DATA enumvalues_link TYPE string.
    DATA act_structure_of_values TYPE REF TO cl_abap_structdescr.
    DATA act_name_of_source TYPE string.
    DATA act_name_of_constant TYPE string.
    DATA exp_name_of_source TYPE string.
    DATA exp_name_of_constant TYPE string.
    DATA exp_structure TYPE REF TO cl_abap_structdescr.
    DATA ref LIKE zcl_aff_test_types=>enum_values.
    DATA temp76 TYPE REF TO cl_abap_structdescr.
    enumvalues_link = `zcl_aff_test_types.data:enum_values`.



    cut->get_structure_of_enum_values(
      EXPORTING
        link_to_values      = enumvalues_link
        fullname_of_type    = ``
      IMPORTING
        structure_of_values = act_structure_of_values
        name_of_source      = act_name_of_source
        name_of_constant    = act_name_of_constant ).

    exp_name_of_source = `ZCL_AFF_TEST_TYPES`.

    exp_name_of_constant = `ENUM_VALUES`.
    cl_abap_unit_assert=>assert_equals( exp = exp_name_of_constant act = act_name_of_constant ).
    cl_abap_unit_assert=>assert_equals( exp = exp_name_of_source act = act_name_of_source ).



    ref = zcl_aff_test_types=>enum_values.

    temp76 ?= cl_abap_structdescr=>describe_by_data( ref ).
    exp_structure = temp76.
    cl_abap_unit_assert=>assert_equals( exp = exp_structure->get_components( ) act = act_structure_of_values->get_components( ) ).
    cl_abap_unit_assert=>assert_equals( exp = exp_structure->kind act = act_structure_of_values->kind ).
    cl_abap_unit_assert=>assert_equals( exp = exp_structure->type_kind act = act_structure_of_values->type_kind ).
    cl_abap_unit_assert=>assert_equals( exp = exp_structure->struct_kind act = act_structure_of_values->struct_kind ).
  ENDMETHOD.


  METHOD callback_class_is_valid.
    DATA class_name TYPE string.
    DATA is_valid TYPE abap_boolean.
    DATA log TYPE REF TO zif_aff_log.
    class_name = `ZCL_AFF_TEST_TYPES`.

    is_valid = cut->is_callback_class_valid( class_name = class_name component_name = 'Component Name' ).

    log = cut->zif_aff_writer~get_log( ).
    cl_abap_unit_assert=>assert_equals( exp = abap_true act = is_valid ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log = log message_severity_threshold = zif_aff_log=>c_message_type-info ).
  ENDMETHOD.


  METHOD callback_class_is_invalid.
    DATA class_name TYPE string.
    DATA is_valid TYPE abap_boolean.
    DATA log TYPE REF TO zif_aff_log.
    class_name = `ZCL_AFF_WRITER`.

    is_valid = cut->is_callback_class_valid( class_name = class_name component_name = 'Component Name' ).

    log = cut->zif_aff_writer~get_log( ).
    cl_abap_unit_assert=>assert_equals( exp = abap_false act = is_valid ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg106
                                                              exp_component_name = `Component Name`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.

  METHOD validate_default.
    TYPES:
      BEGIN OF descr_default_valid_tuple,
        element_description TYPE REF TO cl_abap_elemdescr,
        default             TYPE string,
        is_valid            TYPE abap_boolean,
      END OF descr_default_valid_tuple.
    DATA table_of_tuples TYPE STANDARD TABLE OF descr_default_valid_tuple WITH DEFAULT KEY.

    DATA date_time TYPE utclong.
    DATA temp77 TYPE descr_default_valid_tuple.
    DATA temp25 TYPE REF TO cl_abap_elemdescr.
    DATA time TYPE t.
    DATA temp78 TYPE descr_default_valid_tuple.
    DATA temp26 TYPE REF TO cl_abap_elemdescr.
    DATA temp79 TYPE descr_default_valid_tuple.
    DATA temp27 TYPE REF TO cl_abap_elemdescr.
    DATA temp80 TYPE descr_default_valid_tuple.
    DATA temp28 TYPE REF TO cl_abap_elemdescr.
    DATA date TYPE d.
    DATA temp81 TYPE descr_default_valid_tuple.
    DATA temp29 TYPE REF TO cl_abap_elemdescr.
    DATA temp82 TYPE descr_default_valid_tuple.
    DATA temp30 TYPE REF TO cl_abap_elemdescr.
    DATA temp83 TYPE descr_default_valid_tuple.
    DATA temp31 TYPE REF TO cl_abap_elemdescr.
    DATA numeric TYPE n LENGTH 3.
    DATA temp84 TYPE descr_default_valid_tuple.
    DATA temp32 TYPE REF TO cl_abap_elemdescr.
    DATA temp85 TYPE descr_default_valid_tuple.
    DATA temp33 TYPE REF TO cl_abap_elemdescr.
    DATA temp86 TYPE descr_default_valid_tuple.
    DATA temp34 TYPE REF TO cl_abap_elemdescr.
    DATA float TYPE f.
    DATA temp87 TYPE descr_default_valid_tuple.
    DATA temp35 TYPE REF TO cl_abap_elemdescr.
    DATA temp88 TYPE descr_default_valid_tuple.
    DATA temp36 TYPE REF TO cl_abap_elemdescr.
    DATA decfloat TYPE decfloat16.
    DATA temp89 TYPE descr_default_valid_tuple.
    DATA temp37 TYPE REF TO cl_abap_elemdescr.
    DATA temp90 TYPE descr_default_valid_tuple.
    DATA temp38 TYPE REF TO cl_abap_elemdescr.
    DATA packed TYPE p LENGTH 3 DECIMALS 2.
    DATA temp91 TYPE descr_default_valid_tuple.
    DATA temp39 TYPE REF TO cl_abap_elemdescr.
    DATA temp92 TYPE descr_default_valid_tuple.
    DATA temp40 TYPE REF TO cl_abap_elemdescr.
    DATA temp93 TYPE descr_default_valid_tuple.
    DATA temp41 TYPE REF TO cl_abap_elemdescr.
    DATA char TYPE c LENGTH 4.
    DATA temp94 TYPE descr_default_valid_tuple.
    DATA temp42 TYPE REF TO cl_abap_elemdescr.
    DATA temp95 TYPE descr_default_valid_tuple.
    DATA temp43 TYPE REF TO cl_abap_elemdescr.
    DATA boolean TYPE abap_boolean.
    DATA temp96 TYPE descr_default_valid_tuple.
    DATA temp44 TYPE REF TO cl_abap_elemdescr.
    DATA temp97 TYPE descr_default_valid_tuple.
    DATA temp45 TYPE REF TO cl_abap_elemdescr.
    DATA temp98 TYPE descr_default_valid_tuple.
    DATA temp46 TYPE REF TO cl_abap_elemdescr.
    DATA temp99 TYPE descr_default_valid_tuple.
    DATA temp47 TYPE REF TO cl_abap_elemdescr.
    DATA integer1 TYPE int1.
    DATA temp100 TYPE descr_default_valid_tuple.
    DATA temp48 TYPE REF TO cl_abap_elemdescr.
    DATA temp101 TYPE descr_default_valid_tuple.
    DATA temp49 TYPE REF TO cl_abap_elemdescr.
    DATA integer TYPE i.
    DATA temp102 TYPE descr_default_valid_tuple.
    DATA temp50 TYPE REF TO cl_abap_elemdescr.
    FIELD-SYMBOLS <entry> LIKE LINE OF table_of_tuples.
    DATA is_valid TYPE abap_boolean.
    CLEAR temp77.

    temp25 ?= cl_abap_elemdescr=>describe_by_data( date_time ).
    temp77-element_description = temp25.
    temp77-default = '9999-12-31T23:59:59.9999999'.
    temp77-is_valid = abap_false.
    INSERT temp77 INTO TABLE table_of_tuples.



    CLEAR temp78.

    temp26 ?= cl_abap_elemdescr=>describe_by_data( time ).
    temp78-element_description = temp26.
    temp78-default = '20'.
    temp78-is_valid = abap_true.
    INSERT temp78 INTO TABLE table_of_tuples.

    CLEAR temp79.

    temp27 ?= cl_abap_elemdescr=>describe_by_data( time ).
    temp79-element_description = temp27.
    temp79-default = '201500'.
    temp79-is_valid = abap_true.
    INSERT temp79 INTO TABLE table_of_tuples.

    CLEAR temp80.

    temp28 ?= cl_abap_elemdescr=>describe_by_data( time ).
    temp80-element_description = temp28.
    temp80-default = '20150045'.
    temp80-is_valid = abap_false.
    INSERT temp80 INTO TABLE table_of_tuples.



    CLEAR temp81.

    temp29 ?= cl_abap_elemdescr=>describe_by_data( date ).
    temp81-element_description = temp29.
    temp81-default = '20121201'.
    temp81-is_valid = abap_true.
    INSERT temp81 INTO TABLE table_of_tuples.

    CLEAR temp82.

    temp30 ?= cl_abap_elemdescr=>describe_by_data( date ).
    temp82-element_description = temp30.
    temp82-default = '201212214'.
    temp82-is_valid = abap_false.
    INSERT temp82 INTO TABLE table_of_tuples.

    CLEAR temp83.

    temp31 ?= cl_abap_elemdescr=>describe_by_data( date ).
    temp83-element_description = temp31.
    temp83-default = '201212'.
    temp83-is_valid = abap_true.
    INSERT temp83 INTO TABLE table_of_tuples.


    numeric = '20'.

    CLEAR temp84.

    temp32 ?= cl_abap_elemdescr=>describe_by_data( numeric ).
    temp84-element_description = temp32.
    temp84-default = '201'.
    temp84-is_valid = abap_true.
    INSERT temp84 INTO TABLE table_of_tuples.

    CLEAR temp85.

    temp33 ?= cl_abap_elemdescr=>describe_by_data( numeric ).
    temp85-element_description = temp33.
    temp85-default = '20'.
    temp85-is_valid = abap_true.
    INSERT temp85 INTO TABLE table_of_tuples.

    CLEAR temp86.

    temp34 ?= cl_abap_elemdescr=>describe_by_data( numeric ).
    temp86-element_description = temp34.
    temp86-default = '2021'.
    temp86-is_valid = abap_false.
    INSERT temp86 INTO TABLE table_of_tuples.



    CLEAR temp87.

    temp35 ?= cl_abap_elemdescr=>describe_by_data( float ).
    temp87-element_description = temp35.
    temp87-default = '14.5e12'.
    temp87-is_valid = abap_true.
    INSERT temp87 INTO TABLE table_of_tuples.

    CLEAR temp88.

    temp36 ?= cl_abap_elemdescr=>describe_by_data( float ).
    temp88-element_description = temp36.
    temp88-default = 'no float'.
    temp88-is_valid = abap_false.
    INSERT temp88 INTO TABLE table_of_tuples.



    CLEAR temp89.

    temp37 ?= cl_abap_elemdescr=>describe_by_data( decfloat ).
    temp89-element_description = temp37.
    temp89-default = '14.5e12'.
    temp89-is_valid = abap_true.
    INSERT temp89 INTO TABLE table_of_tuples.

    CLEAR temp90.

    temp38 ?= cl_abap_elemdescr=>describe_by_data( decfloat ).
    temp90-element_description = temp38.
    temp90-default = 'no_float'.
    temp90-is_valid = abap_false.
    INSERT temp90 INTO TABLE table_of_tuples.



    CLEAR temp91.

    temp39 ?= cl_abap_elemdescr=>describe_by_data( packed ).
    temp91-element_description = temp39.
    temp91-default = 'a'.
    temp91-is_valid = abap_false.
    INSERT temp91 INTO TABLE table_of_tuples.

    CLEAR temp92.

    temp40 ?= cl_abap_elemdescr=>describe_by_data( packed ).
    temp92-element_description = temp40.
    temp92-default = '4.534'.
    temp92-is_valid = abap_false.
    INSERT temp92 INTO TABLE table_of_tuples.

    CLEAR temp93.

    temp41 ?= cl_abap_elemdescr=>describe_by_data( packed ).
    temp93-element_description = temp41.
    temp93-default = '3.25'.
    temp93-is_valid = abap_true.
    INSERT temp93 INTO TABLE table_of_tuples.



    CLEAR temp94.

    temp42 ?= cl_abap_elemdescr=>describe_by_data( char ).
    temp94-element_description = temp42.
    temp94-default = 'a5b'.
    temp94-is_valid = abap_true.
    INSERT temp94 INTO TABLE table_of_tuples.

    CLEAR temp95.

    temp43 ?= cl_abap_elemdescr=>describe_by_data( char ).
    temp95-element_description = temp43.
    temp95-default = 'a5bca'.
    temp95-is_valid = abap_false.
    INSERT temp95 INTO TABLE table_of_tuples.



    CLEAR temp96.

    temp44 ?= cl_abap_elemdescr=>describe_by_data( boolean ).
    temp96-element_description = temp44.
    temp96-default = 'abap_true'.
    temp96-is_valid = abap_true.
    INSERT temp96 INTO TABLE table_of_tuples.

    CLEAR temp97.

    temp45 ?= cl_abap_elemdescr=>describe_by_data( boolean ).
    temp97-element_description = temp45.
    temp97-default = 'abap_false'.
    temp97-is_valid = abap_true.
    INSERT temp97 INTO TABLE table_of_tuples.

    CLEAR temp98.

    temp46 ?= cl_abap_elemdescr=>describe_by_data( boolean ).
    temp98-element_description = temp46.
    temp98-default = ''.
    temp98-is_valid = abap_true.
    INSERT temp98 INTO TABLE table_of_tuples.

    CLEAR temp99.

    temp47 ?= cl_abap_elemdescr=>describe_by_data( boolean ).
    temp99-element_description = temp47.
    temp99-default = 'a'.
    temp99-is_valid = abap_false.
    INSERT temp99 INTO TABLE table_of_tuples.



    CLEAR temp100.

    temp48 ?= cl_abap_elemdescr=>describe_by_data( integer1 ).
    temp100-element_description = temp48.
    temp100-default = '-5'.
    temp100-is_valid = abap_false.
    INSERT temp100 INTO TABLE table_of_tuples.

    CLEAR temp101.

    temp49 ?= cl_abap_elemdescr=>describe_by_data( integer1 ).
    temp101-element_description = temp49.
    temp101-default = '10'.
    temp101-is_valid = abap_true.
    INSERT temp101 INTO TABLE table_of_tuples.



    CLEAR temp102.

    temp50 ?= cl_abap_elemdescr=>describe_by_data( integer ).
    temp102-element_description = temp50.
    temp102-default = '-5'.
    temp102-is_valid = abap_true.
    INSERT temp102 INTO TABLE table_of_tuples.


    LOOP AT table_of_tuples ASSIGNING <entry>.

      is_valid = cut->is_default_value_valid( element_description = <entry>-element_description
                                                    default_value       = <entry>-default
                                                    fullname_of_type    = `TEST_VALUE` ).
      cl_abap_unit_assert=>assert_equals( exp = <entry>-is_valid act = is_valid ).
    ENDLOOP.
  ENDMETHOD.

  METHOD validate_source.
    DATA temp103 TYPE string_table.
    DATA temp51 TYPE REF TO zif_aff_log.
    CLEAR temp103.

    CLEAR temp51.
    cl_abap_unit_assert=>assert_true( cut->zif_aff_writer~validate( source = temp103 log = temp51 ) ).
  ENDMETHOD.

  METHOD handle_include.
    DATA data TYPE zcl_aff_test_types=>ty_include_type.
    DATA temp104 TYPE REF TO cl_abap_structdescr.
    temp104 ?= cl_abap_structdescr=>describe_by_data( data ).
    cut->zif_aff_writer~open_include( temp104 ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( cut->stack_of_structure ) ).
    cut->zif_aff_writer~close_include( ).
    cl_abap_unit_assert=>assert_equals( exp = 0 act = lines( cut->stack_of_structure ) ).
  ENDMETHOD.


ENDCLASS.
