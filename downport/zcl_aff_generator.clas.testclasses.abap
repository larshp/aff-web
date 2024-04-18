INTERFACE lif_test_types.
  TYPES:
    element TYPE string.

  TYPES:
    BEGIN OF structure,
      element_1 TYPE i,
      element_2 TYPE element,
    END OF structure.

  TYPES:
    BEGIN OF include,
      include_element_1 TYPE string,
      include_element_2 TYPE i,
    END OF include.

  TYPES:
    BEGIN OF structure_with_include.
      INCLUDE TYPE include.
  TYPES element_1 TYPE i.
  TYPES element_2 TYPE element.
  TYPES END OF structure_with_include.

  TYPES:
    BEGIN OF include_in_include.
      INCLUDE TYPE include.
  TYPES END OF include_in_include.

  TYPES:
    BEGIN OF structure_include_in_include.
      INCLUDE TYPE include_in_include.
  TYPES element TYPE string.
  TYPES END OF structure_include_in_include.

  TYPES:
    BEGIN OF structure_in_structure,
      structure TYPE structure,
      element   TYPE element,
    END OF structure_in_structure.

  TYPES:
    table_structure TYPE STANDARD TABLE OF structure WITH DEFAULT KEY.

  TYPES:
    table_build_in_type TYPE STANDARD TABLE OF string WITH DEFAULT KEY.

  TYPES:
    BEGIN OF structure_with_table,
      table TYPE table_structure,
    END OF structure_with_table.

  TYPES:
    BEGIN OF include_table.
      INCLUDE TYPE structure_with_table.
  TYPES include_element_1 TYPE i.
  TYPES END OF include_table.

  TYPES:
    table_in_table TYPE STANDARD TABLE OF table_build_in_type WITH DEFAULT KEY.

  TYPES:
    BEGIN OF nested_table,
      second_table TYPE table_build_in_type,
    END OF nested_table,
    first_table_type TYPE STANDARD TABLE OF nested_table WITH DEFAULT KEY,
    BEGIN OF struc_tab_struc_tab,
      first_table TYPE first_table_type,
    END OF struc_tab_struc_tab.

  TYPES:
    BEGIN OF ty_component,
      name        TYPE c LENGTH 30,
      description TYPE c LENGTH 60,
    END OF ty_component,
    ty_components    TYPE SORTED TABLE OF ty_component WITH UNIQUE KEY name,
    ty_subcomponents TYPE SORTED TABLE OF ty_component WITH UNIQUE KEY name,
    BEGIN OF ty_method,
      name        TYPE c LENGTH 30,
      description TYPE c LENGTH 60,
      parameters  TYPE ty_subcomponents,
      exceptions  TYPE ty_subcomponents,
    END OF ty_method,
    ty_methods TYPE SORTED TABLE OF ty_method WITH UNIQUE KEY name,
    BEGIN OF ty_event,
      name        TYPE c LENGTH 30,
      description TYPE c LENGTH 60,
      parameters  TYPE ty_subcomponents,
    END OF ty_event,
    ty_events TYPE SORTED TABLE OF ty_event WITH UNIQUE KEY name,
    BEGIN OF ty_clif_properties,
      attributes TYPE ty_components,
      methods    TYPE ty_methods,
      events     TYPE ty_events,
      types      TYPE ty_components,
    END OF ty_clif_properties.

  TYPES:
    BEGIN OF ty_header,
      description TYPE c LENGTH 30,
    END OF ty_header.

  TYPES:
    BEGIN OF ty_class_properties,
      format_version TYPE string,
      header         TYPE ty_header,
      category       TYPE n LENGTH 2,
      fixpt          TYPE c LENGTH 1,
      msg_id         TYPE c LENGTH 20.
      INCLUDE TYPE ty_clif_properties.
  TYPES END OF ty_class_properties.

  TYPES:
    BEGIN OF ty_abap_type_structure,
      format_version  TYPE string,
      header          TYPE ty_header,
      other_component TYPE ty_component,
    END OF ty_abap_type_structure.
  TYPES:
    BEGIN OF ty_abap_type_table,
      format_version  TYPE string,
      header          TYPE ty_header,
      other_component TYPE table_structure,
    END OF ty_abap_type_table.
  TYPES:
    BEGIN OF ty_simple_component,
      format_version   TYPE string,
      header           TYPE ty_header,
      simple_component TYPE i,
      struc_component  TYPE ty_component,
      tabl_component   TYPE table_structure,
    END OF ty_simple_component.
  TYPES:
    BEGIN OF ty_abap_type_no_header,
      format_version  TYPE string,
      other_component TYPE ty_component,
    END OF ty_abap_type_no_header.
  TYPES:
    BEGIN OF ty_abap_type_no_format,
      header          TYPE ty_header,
      other_component TYPE ty_component,
    END OF ty_abap_type_no_format.

ENDINTERFACE.

CLASS ltcl_unit_test_writer DEFINITION CREATE PUBLIC FOR TESTING INHERITING FROM zcl_aff_writer FINAL.

  PUBLIC SECTION.
  PROTECTED SECTION.
    METHODS:
      write_element REDEFINITION,
      open_structure REDEFINITION,
      close_structure REDEFINITION,
      open_table REDEFINITION,
      write_tag REDEFINITION,
      close_table REDEFINITION.

  PRIVATE SECTION.
    DATA:
      depth          TYPE i VALUE 0.

ENDCLASS.

CLASS ltcl_unit_test_writer IMPLEMENTATION.

  METHOD write_element.
    DATA temp12 LIKE LINE OF output.
    temp12 = |{ repeat( val = ` ` occ = 4 * depth ) }{ element_name } : { element_description->type_kind }|.
    APPEND temp12 TO output.
  ENDMETHOD.

  METHOD close_structure.
    DATA temp13 LIKE LINE OF output.
    temp13 = |{ repeat( val = ` ` occ = 4 * ( depth - 1 ) ) }CLOSE_STRUCTURE { structure_name }|.
    APPEND temp13 TO output.
    depth = depth - 1.
  ENDMETHOD.

  METHOD close_table.
    DATA temp14 LIKE LINE OF output.
    temp14 = |{ repeat( val = ` ` occ = 4 * ( depth - 1 ) ) }CLOSE_TABLE { table_name }|.
    APPEND temp14 TO output.
    depth = depth - 1.
  ENDMETHOD.

  METHOD open_structure.
    DATA temp15 LIKE LINE OF output.
    temp15 = |{ repeat( val = ` ` occ = 4 * depth ) }OPEN_STRUCTURE { structure_name }|.
    APPEND temp15 TO output.
    depth = depth + 1.
  ENDMETHOD.

  METHOD open_table.
    DATA temp16 LIKE LINE OF output.
    temp16 = |{ repeat( val = ` ` occ = 4 * depth ) }OPEN_TABLE { table_name }|.
    APPEND temp16 TO output.
    depth = depth + 1.
  ENDMETHOD.

  METHOD write_tag ##NEEDED.
  ENDMETHOD.


ENDCLASS.

CLASS ltcl_type_generator DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PUBLIC SECTION.
    INTERFACES lif_test_types.

  PRIVATE SECTION.
    DATA:
      cut        TYPE REF TO zif_aff_generator,
      exp_result TYPE string_table.

    METHODS:
      element FOR TESTING RAISING cx_static_check,
      structure FOR TESTING RAISING cx_static_check,
      include FOR TESTING RAISING cx_static_check,
      table_build_in_type FOR TESTING RAISING cx_static_check,
      include_in_include FOR TESTING RAISING cx_static_check,
      structure_in_structure FOR TESTING RAISING cx_static_check,
      table_structure FOR TESTING RAISING cx_static_check,
      structure_with_table FOR TESTING RAISING cx_static_check,
      include_table FOR TESTING RAISING cx_static_check,
      table_in_table FOR TESTING RAISING cx_static_check,
      struc_tab_struc_tab FOR TESTING RAISING cx_static_check,
      unsupported_type FOR TESTING RAISING cx_static_check,
      complex_structure_aff_class FOR TESTING RAISING cx_static_check,
      simple_component_on_top_level FOR TESTING RAISING cx_static_check,
      no_header FOR TESTING RAISING cx_static_check,
      no_format_version FOR TESTING RAISING cx_static_check,
      no_structure FOR TESTING RAISING cx_static_check,
      structure_on_top_level FOR TESTING RAISING cx_static_check,
      table_on_top_level FOR TESTING RAISING cx_static_check,
      setup,
      assert_output_equals
        IMPORTING
          act TYPE string_table
          exp TYPE string_table.
ENDCLASS.

CLASS zcl_aff_generator DEFINITION LOCAL FRIENDS ltcl_type_generator.

CLASS ltcl_type_generator IMPLEMENTATION.

  METHOD setup.
    DATA temp2 TYPE REF TO ltcl_unit_test_writer.
    CREATE OBJECT temp2 TYPE ltcl_unit_test_writer.
    CREATE OBJECT cut TYPE zcl_aff_generator EXPORTING WRITER = temp2.
  ENDMETHOD.

  METHOD element.
    DATA test_data TYPE lif_test_types=>element.
    DATA act_result TYPE string_table.
    DATA temp17 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp17.
    INSERT `ELEMENT : g` INTO TABLE temp17.
    exp_result = temp17.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure.
    DATA test_data TYPE lif_test_types=>structure.
    DATA act_result TYPE string_table.
    DATA temp19 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp19.
    INSERT `OPEN_STRUCTURE STRUCTURE` INTO TABLE temp19.
    INSERT `    ELEMENT_1 : I` INTO TABLE temp19.
    INSERT `    ELEMENT_2 : g` INTO TABLE temp19.
    INSERT `CLOSE_STRUCTURE STRUCTURE` INTO TABLE temp19.
    exp_result = temp19.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include.
    DATA test_data TYPE lif_test_types=>structure_with_include.
    DATA act_result TYPE string_table.
    DATA temp21 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp21.
    INSERT `OPEN_STRUCTURE STRUCTURE_WITH_INCLUDE` INTO TABLE temp21.
    INSERT `    INCLUDE_ELEMENT_1 : g` INTO TABLE temp21.
    INSERT `    INCLUDE_ELEMENT_2 : I` INTO TABLE temp21.
    INSERT `    ELEMENT_1 : I` INTO TABLE temp21.
    INSERT `    ELEMENT_2 : g` INTO TABLE temp21.
    INSERT `CLOSE_STRUCTURE STRUCTURE_WITH_INCLUDE` INTO TABLE temp21.
    exp_result = temp21.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include_in_include.
    DATA test_data TYPE lif_test_types=>structure_include_in_include.
    DATA act_result TYPE string_table.
    DATA temp23 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp23.
    INSERT `OPEN_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE` INTO TABLE temp23.
    INSERT `    INCLUDE_ELEMENT_1 : g` INTO TABLE temp23.
    INSERT `    INCLUDE_ELEMENT_2 : I` INTO TABLE temp23.
    INSERT `    ELEMENT : g` INTO TABLE temp23.
    INSERT `CLOSE_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE` INTO TABLE temp23.
    exp_result = temp23.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure_in_structure.
    DATA test_data TYPE lif_test_types=>structure_in_structure.
    DATA act_result TYPE string_table.
    DATA temp25 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp25.
    INSERT `OPEN_STRUCTURE STRUCTURE_IN_STRUCTURE` INTO TABLE temp25.
    INSERT `    OPEN_STRUCTURE STRUCTURE` INTO TABLE temp25.
    INSERT `        ELEMENT_1 : I` INTO TABLE temp25.
    INSERT `        ELEMENT_2 : g` INTO TABLE temp25.
    INSERT `    CLOSE_STRUCTURE STRUCTURE` INTO TABLE temp25.
    INSERT `    ELEMENT : g` INTO TABLE temp25.
    INSERT `CLOSE_STRUCTURE STRUCTURE_IN_STRUCTURE` INTO TABLE temp25.
    exp_result = temp25.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_build_in_type.
    DATA table_build_in_type TYPE lif_test_types=>table_build_in_type.

    DATA act_result TYPE string_table.
    DATA temp27 TYPE string_table.
    act_result = cut->generate_type( table_build_in_type ).


    CLEAR temp27.
    INSERT `OPEN_TABLE TABLE_BUILD_IN_TYPE` INTO TABLE temp27.
    INSERT `    STRING : g` INTO TABLE temp27.
    INSERT `CLOSE_TABLE TABLE_BUILD_IN_TYPE` INTO TABLE temp27.
    exp_result = temp27.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_structure.
    DATA table_structure TYPE lif_test_types=>table_structure.
    DATA act_result TYPE string_table.
    DATA temp29 TYPE string_table.
    act_result = cut->generate_type( table_structure ).


    CLEAR temp29.
    INSERT `OPEN_TABLE TABLE_STRUCTURE` INTO TABLE temp29.
    INSERT `    OPEN_STRUCTURE STRUCTURE` INTO TABLE temp29.
    INSERT `        ELEMENT_1 : I` INTO TABLE temp29.
    INSERT `        ELEMENT_2 : g` INTO TABLE temp29.
    INSERT `    CLOSE_STRUCTURE STRUCTURE` INTO TABLE temp29.
    INSERT `CLOSE_TABLE TABLE_STRUCTURE` INTO TABLE temp29.
    exp_result = temp29.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure_with_table.
    DATA structure_with_table TYPE lif_test_types=>structure_with_table.
    DATA act_result TYPE string_table.
    DATA temp31 TYPE string_table.
    act_result = cut->generate_type( structure_with_table ).


    CLEAR temp31.
    INSERT `OPEN_STRUCTURE STRUCTURE_WITH_TABLE` INTO TABLE temp31.
    INSERT `    OPEN_TABLE TABLE` INTO TABLE temp31.
    INSERT `        OPEN_STRUCTURE STRUCTURE` INTO TABLE temp31.
    INSERT `            ELEMENT_1 : I` INTO TABLE temp31.
    INSERT `            ELEMENT_2 : g` INTO TABLE temp31.
    INSERT `        CLOSE_STRUCTURE STRUCTURE` INTO TABLE temp31.
    INSERT `    CLOSE_TABLE TABLE` INTO TABLE temp31.
    INSERT `CLOSE_STRUCTURE STRUCTURE_WITH_TABLE` INTO TABLE temp31.
    exp_result = temp31.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include_table.
    DATA include_table TYPE lif_test_types=>include_table.
    DATA act_result TYPE string_table.
    DATA temp33 TYPE string_table.
    act_result = cut->generate_type( include_table ).


    CLEAR temp33.
    INSERT `OPEN_STRUCTURE INCLUDE_TABLE` INTO TABLE temp33.
    INSERT `    OPEN_TABLE TABLE` INTO TABLE temp33.
    INSERT `        OPEN_STRUCTURE STRUCTURE` INTO TABLE temp33.
    INSERT `            ELEMENT_1 : I` INTO TABLE temp33.
    INSERT `            ELEMENT_2 : g` INTO TABLE temp33.
    INSERT `        CLOSE_STRUCTURE STRUCTURE` INTO TABLE temp33.
    INSERT `    CLOSE_TABLE TABLE` INTO TABLE temp33.
    INSERT `    INCLUDE_ELEMENT_1 : I` INTO TABLE temp33.
    INSERT `CLOSE_STRUCTURE INCLUDE_TABLE` INTO TABLE temp33.
    exp_result = temp33.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_in_table.
    DATA table_in_table TYPE lif_test_types=>table_in_table.
    DATA act_result TYPE string_table.
    DATA temp35 TYPE string_table.
    act_result = cut->generate_type( table_in_table ).


    CLEAR temp35.
    INSERT `OPEN_TABLE TABLE_IN_TABLE` INTO TABLE temp35.
    INSERT `    OPEN_TABLE TABLE_BUILD_IN_TYPE` INTO TABLE temp35.
    INSERT `        STRING : g` INTO TABLE temp35.
    INSERT `    CLOSE_TABLE TABLE_BUILD_IN_TYPE` INTO TABLE temp35.
    INSERT `CLOSE_TABLE TABLE_IN_TABLE` INTO TABLE temp35.
    exp_result = temp35.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD struc_tab_struc_tab.
    DATA struc_tab_struc_tab TYPE lif_test_types=>struc_tab_struc_tab.
    DATA act_result TYPE string_table.
    DATA temp37 TYPE string_table.
    act_result = cut->generate_type( struc_tab_struc_tab ).


    CLEAR temp37.
    INSERT `OPEN_STRUCTURE STRUC_TAB_STRUC_TAB` INTO TABLE temp37.
    INSERT `    OPEN_TABLE FIRST_TABLE` INTO TABLE temp37.
    INSERT `        OPEN_STRUCTURE NESTED_TABLE` INTO TABLE temp37.
    INSERT `            OPEN_TABLE SECOND_TABLE` INTO TABLE temp37.
    INSERT `                STRING : g` INTO TABLE temp37.
    INSERT `            CLOSE_TABLE SECOND_TABLE` INTO TABLE temp37.
    INSERT `        CLOSE_STRUCTURE NESTED_TABLE` INTO TABLE temp37.
    INSERT `    CLOSE_TABLE FIRST_TABLE` INTO TABLE temp37.
    INSERT `CLOSE_STRUCTURE STRUC_TAB_STRUC_TAB` INTO TABLE temp37.
    exp_result = temp37.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD unsupported_type.
    DATA class_reference TYPE REF TO zcl_aff_generator ##NEEDED.
    TRY.
        cut->generate_type( class_reference ).
        cl_abap_unit_assert=>fail( msg = 'Exception expected' ).
      CATCH zcx_aff_tools ##NO_HANDLER.
    ENDTRY.
  ENDMETHOD.

  METHOD complex_structure_aff_class.
    DATA aff_class TYPE lif_test_types=>ty_class_properties.

    DATA act_result TYPE string_table.
    DATA temp39 TYPE string_table.
    act_result = cut->generate_type( aff_class ).


    CLEAR temp39.
    INSERT `OPEN_STRUCTURE TY_CLASS_PROPERTIES` INTO TABLE temp39.
    INSERT `    FORMAT_VERSION : g` INTO TABLE temp39.
    INSERT `    OPEN_STRUCTURE HEADER` INTO TABLE temp39.
    INSERT `        DESCRIPTION : C` INTO TABLE temp39.
    INSERT `    CLOSE_STRUCTURE HEADER` INTO TABLE temp39.
    INSERT `    CATEGORY : N` INTO TABLE temp39.
    INSERT `    FIXPT : C` INTO TABLE temp39.
    INSERT `    MSG_ID : C` INTO TABLE temp39.
    INSERT `    OPEN_TABLE ATTRIBUTES` INTO TABLE temp39.
    INSERT `        OPEN_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `            NAME : C` INTO TABLE temp39.
    INSERT `            DESCRIPTION : C` INTO TABLE temp39.
    INSERT `        CLOSE_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `    CLOSE_TABLE ATTRIBUTES` INTO TABLE temp39.
    INSERT `    OPEN_TABLE METHODS` INTO TABLE temp39.
    INSERT `        OPEN_STRUCTURE TY_METHOD` INTO TABLE temp39.
    INSERT `            NAME : C` INTO TABLE temp39.
    INSERT `            DESCRIPTION : C` INTO TABLE temp39.
    INSERT `            OPEN_TABLE PARAMETERS` INTO TABLE temp39.
    INSERT `                OPEN_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `                    NAME : C` INTO TABLE temp39.
    INSERT `                    DESCRIPTION : C` INTO TABLE temp39.
    INSERT `                CLOSE_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `            CLOSE_TABLE PARAMETERS` INTO TABLE temp39.
    INSERT `            OPEN_TABLE EXCEPTIONS` INTO TABLE temp39.
    INSERT `                OPEN_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `                    NAME : C` INTO TABLE temp39.
    INSERT `                    DESCRIPTION : C` INTO TABLE temp39.
    INSERT `                CLOSE_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `            CLOSE_TABLE EXCEPTIONS` INTO TABLE temp39.
    INSERT `        CLOSE_STRUCTURE TY_METHOD` INTO TABLE temp39.
    INSERT `    CLOSE_TABLE METHODS` INTO TABLE temp39.
    INSERT `    OPEN_TABLE EVENTS` INTO TABLE temp39.
    INSERT `        OPEN_STRUCTURE TY_EVENT` INTO TABLE temp39.
    INSERT `            NAME : C` INTO TABLE temp39.
    INSERT `            DESCRIPTION : C` INTO TABLE temp39.
    INSERT `            OPEN_TABLE PARAMETERS` INTO TABLE temp39.
    INSERT `                OPEN_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `                    NAME : C` INTO TABLE temp39.
    INSERT `                    DESCRIPTION : C` INTO TABLE temp39.
    INSERT `                CLOSE_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `            CLOSE_TABLE PARAMETERS` INTO TABLE temp39.
    INSERT `        CLOSE_STRUCTURE TY_EVENT` INTO TABLE temp39.
    INSERT `    CLOSE_TABLE EVENTS` INTO TABLE temp39.
    INSERT `    OPEN_TABLE TYPES` INTO TABLE temp39.
    INSERT `        OPEN_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `            NAME : C` INTO TABLE temp39.
    INSERT `            DESCRIPTION : C` INTO TABLE temp39.
    INSERT `        CLOSE_STRUCTURE TY_COMPONENT` INTO TABLE temp39.
    INSERT `    CLOSE_TABLE TYPES` INTO TABLE temp39.
    INSERT `CLOSE_STRUCTURE TY_CLASS_PROPERTIES` INTO TABLE temp39.
    exp_result = temp39.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure_on_top_level.
    DATA abap_type TYPE lif_test_types=>ty_abap_type_structure.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( abap_type ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log ).
  ENDMETHOD.

  METHOD table_on_top_level.
    DATA abap_type TYPE lif_test_types=>ty_abap_type_table.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( abap_type ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log ).
  ENDMETHOD.

  METHOD simple_component_on_top_level.
    DATA abap_type TYPE lif_test_types=>ty_simple_component.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( abap_type ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg128
                                                              exp_component_name = `TY_SIMPLE_COMPONENT`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.

  METHOD no_header.
    DATA no_header TYPE lif_test_types=>ty_abap_type_no_header.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( no_header ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg124
                                                              exp_component_name = `TY_ABAP_TYPE_NO_HEADER`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.

  METHOD no_format_version.
    DATA no_format_version TYPE lif_test_types=>ty_abap_type_no_format.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( no_format_version ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg124
                                                              exp_component_name = `TY_ABAP_TYPE_NO_FORMAT`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.

  METHOD no_structure.
    DATA no_structure TYPE lif_test_types=>table_in_table.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( no_structure ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_contains_text( log                = log
                                                              exp_text           = zif_aff_log=>co_msg123
                                                              exp_component_name = `TABLE_IN_TABLE`
                                                              exp_type           = zif_aff_log=>c_message_type-warning ).
  ENDMETHOD.


  METHOD assert_output_equals.
    FIELD-SYMBOLS <exp_line> LIKE LINE OF exp.
    DATA act_line LIKE LINE OF act.
    DATA temp3 LIKE LINE OF act.
    DATA temp4 LIKE sy-tabix.
    cl_abap_unit_assert=>assert_equals( exp = lines( exp ) act = lines( act ) msg = `Number of entries doesn't match expectation` ).

    LOOP AT exp ASSIGNING <exp_line>.



      temp4 = sy-tabix.
      READ TABLE act INDEX sy-tabix INTO temp3.
      sy-tabix = temp4.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      act_line = temp3.
      cl_abap_unit_assert=>assert_equals( exp = <exp_line> act = act_line msg = |line { sy-tabix } doesn't match expectation| quit = if_abap_unit_constant=>quit-no ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
