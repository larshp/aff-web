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
    BEGIN OF ty_abap_type,
      format_version  TYPE string,
      header          TYPE ty_header,
      other_component TYPE i,
    END OF ty_abap_type.
  TYPES:
    BEGIN OF ty_abap_type_no_header,
      format_version  TYPE string,
      other_component TYPE i,
    END OF ty_abap_type_no_header.
  TYPES:
    BEGIN OF ty_abap_type_no_format,
      header          TYPE ty_header,
      other_component TYPE i,
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
    DATA temp11 LIKE LINE OF output.
    temp11 = |{ repeat( val = ` ` occ = 4 * depth ) }{ element_name } : { element_description->type_kind }|.
    APPEND temp11 TO output.
  ENDMETHOD.

  METHOD close_structure.
    DATA temp12 LIKE LINE OF output.
    temp12 = |{ repeat( val = ` ` occ = 4 * ( depth - 1 ) ) }CLOSE_STRUCTURE { structure_name }|.
    APPEND temp12 TO output.
    depth = depth - 1.
  ENDMETHOD.

  METHOD close_table.
    DATA temp13 LIKE LINE OF output.
    temp13 = |{ repeat( val = ` ` occ = 4 * ( depth - 1 ) ) }CLOSE_TABLE { table_name }|.
    APPEND temp13 TO output.
    depth = depth - 1.
  ENDMETHOD.

  METHOD open_structure.
    DATA temp14 LIKE LINE OF output.
    temp14 = |{ repeat( val = ` ` occ = 4 * depth ) }OPEN_STRUCTURE { structure_name }|.
    APPEND temp14 TO output.
    depth = depth + 1.
  ENDMETHOD.

  METHOD open_table.
    DATA temp15 LIKE LINE OF output.
    temp15 = |{ repeat( val = ` ` occ = 4 * depth ) }OPEN_TABLE { table_name }|.
    APPEND temp15 TO output.
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
      cut        TYPE REF TO zcl_aff_generator,
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
      mandatory_fields FOR TESTING RAISING cx_static_check,
      no_header FOR TESTING RAISING cx_static_check,
      no_format_version FOR TESTING RAISING cx_static_check,
      no_structure FOR TESTING RAISING cx_static_check,
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
    DATA temp16 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp16.
    APPEND `ELEMENT : g` TO temp16.
    exp_result = temp16.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure.
    DATA test_data TYPE lif_test_types=>structure.
    DATA act_result TYPE string_table.
    DATA temp18 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp18.
    APPEND `OPEN_STRUCTURE STRUCTURE` TO temp18.
    APPEND `    ELEMENT_1 : I` TO temp18.
    APPEND `    ELEMENT_2 : g` TO temp18.
    APPEND `CLOSE_STRUCTURE STRUCTURE` TO temp18.
    exp_result = temp18.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include.
    DATA test_data TYPE lif_test_types=>structure_with_include.
    DATA act_result TYPE string_table.
    DATA temp23 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp23.
    APPEND `OPEN_STRUCTURE STRUCTURE_WITH_INCLUDE` TO temp23.
    APPEND `    INCLUDE_ELEMENT_1 : g` TO temp23.
    APPEND `    INCLUDE_ELEMENT_2 : I` TO temp23.
    APPEND `    ELEMENT_1 : I` TO temp23.
    APPEND `    ELEMENT_2 : g` TO temp23.
    APPEND `CLOSE_STRUCTURE STRUCTURE_WITH_INCLUDE` TO temp23.
    exp_result = temp23.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include_in_include.
    DATA test_data TYPE lif_test_types=>structure_include_in_include.
    DATA act_result TYPE string_table.
    DATA temp30 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp30.
    APPEND `OPEN_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE` TO temp30.
    APPEND `    INCLUDE_ELEMENT_1 : g` TO temp30.
    APPEND `    INCLUDE_ELEMENT_2 : I` TO temp30.
    APPEND `    ELEMENT : g` TO temp30.
    APPEND `CLOSE_STRUCTURE STRUCTURE_INCLUDE_IN_INCLUDE` TO temp30.
    exp_result = temp30.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure_in_structure.
    DATA test_data TYPE lif_test_types=>structure_in_structure.
    DATA act_result TYPE string_table.
    DATA temp36 TYPE string_table.
    act_result = cut->generate_type( test_data ).


    CLEAR temp36.
    APPEND `OPEN_STRUCTURE STRUCTURE_IN_STRUCTURE` TO temp36.
    APPEND `    OPEN_STRUCTURE STRUCTURE` TO temp36.
    APPEND `        ELEMENT_1 : I` TO temp36.
    APPEND `        ELEMENT_2 : g` TO temp36.
    APPEND `    CLOSE_STRUCTURE STRUCTURE` TO temp36.
    APPEND `    ELEMENT : g` TO temp36.
    APPEND `CLOSE_STRUCTURE STRUCTURE_IN_STRUCTURE` TO temp36.
    exp_result = temp36.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_build_in_type.
    DATA table_build_in_type TYPE lif_test_types=>table_build_in_type.

    DATA act_result TYPE string_table.
    DATA temp44 TYPE string_table.
    act_result = cut->generate_type( table_build_in_type ).


    CLEAR temp44.
    APPEND `OPEN_TABLE TABLE_BUILD_IN_TYPE` TO temp44.
    APPEND `    STRING : g` TO temp44.
    APPEND `CLOSE_TABLE TABLE_BUILD_IN_TYPE` TO temp44.
    exp_result = temp44.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_structure.
    DATA table_structure TYPE lif_test_types=>table_structure.
    DATA act_result TYPE string_table.
    DATA temp48 TYPE string_table.
    act_result = cut->generate_type( table_structure ).


    CLEAR temp48.
    APPEND `OPEN_TABLE TABLE_STRUCTURE` TO temp48.
    APPEND `    OPEN_STRUCTURE STRUCTURE` TO temp48.
    APPEND `        ELEMENT_1 : I` TO temp48.
    APPEND `        ELEMENT_2 : g` TO temp48.
    APPEND `    CLOSE_STRUCTURE STRUCTURE` TO temp48.
    APPEND `CLOSE_TABLE TABLE_STRUCTURE` TO temp48.
    exp_result = temp48.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD structure_with_table.
    DATA structure_with_table TYPE lif_test_types=>structure_with_table.
    DATA act_result TYPE string_table.
    DATA temp55 TYPE string_table.
    act_result = cut->generate_type( structure_with_table ).


    CLEAR temp55.
    APPEND `OPEN_STRUCTURE STRUCTURE_WITH_TABLE` TO temp55.
    APPEND `    OPEN_TABLE TABLE` TO temp55.
    APPEND `        OPEN_STRUCTURE STRUCTURE` TO temp55.
    APPEND `            ELEMENT_1 : I` TO temp55.
    APPEND `            ELEMENT_2 : g` TO temp55.
    APPEND `        CLOSE_STRUCTURE STRUCTURE` TO temp55.
    APPEND `    CLOSE_TABLE TABLE` TO temp55.
    APPEND `CLOSE_STRUCTURE STRUCTURE_WITH_TABLE` TO temp55.
    exp_result = temp55.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD include_table.
    DATA include_table TYPE lif_test_types=>include_table.
    DATA act_result TYPE string_table.
    DATA temp64 TYPE string_table.
    act_result = cut->generate_type( include_table ).


    CLEAR temp64.
    APPEND `OPEN_STRUCTURE INCLUDE_TABLE` TO temp64.
    APPEND `    OPEN_TABLE TABLE` TO temp64.
    APPEND `        OPEN_STRUCTURE STRUCTURE` TO temp64.
    APPEND `            ELEMENT_1 : I` TO temp64.
    APPEND `            ELEMENT_2 : g` TO temp64.
    APPEND `        CLOSE_STRUCTURE STRUCTURE` TO temp64.
    APPEND `    CLOSE_TABLE TABLE` TO temp64.
    APPEND `    INCLUDE_ELEMENT_1 : I` TO temp64.
    APPEND `CLOSE_STRUCTURE INCLUDE_TABLE` TO temp64.
    exp_result = temp64.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD table_in_table.
    DATA table_in_table TYPE lif_test_types=>table_in_table.
    DATA act_result TYPE string_table.
    DATA temp74 TYPE string_table.
    act_result = cut->generate_type( table_in_table ).


    CLEAR temp74.
    APPEND `OPEN_TABLE TABLE_IN_TABLE` TO temp74.
    APPEND `    OPEN_TABLE TABLE_BUILD_IN_TYPE` TO temp74.
    APPEND `        STRING : g` TO temp74.
    APPEND `    CLOSE_TABLE TABLE_BUILD_IN_TYPE` TO temp74.
    APPEND `CLOSE_TABLE TABLE_IN_TABLE` TO temp74.
    exp_result = temp74.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD struc_tab_struc_tab.
    DATA struc_tab_struc_tab TYPE lif_test_types=>struc_tab_struc_tab.
    DATA act_result TYPE string_table.
    DATA temp80 TYPE string_table.
    act_result = cut->generate_type( struc_tab_struc_tab ).


    CLEAR temp80.
    APPEND `OPEN_STRUCTURE STRUC_TAB_STRUC_TAB` TO temp80.
    APPEND `    OPEN_TABLE FIRST_TABLE` TO temp80.
    APPEND `        OPEN_STRUCTURE NESTED_TABLE` TO temp80.
    APPEND `            OPEN_TABLE SECOND_TABLE` TO temp80.
    APPEND `                STRING : g` TO temp80.
    APPEND `            CLOSE_TABLE SECOND_TABLE` TO temp80.
    APPEND `        CLOSE_STRUCTURE NESTED_TABLE` TO temp80.
    APPEND `    CLOSE_TABLE FIRST_TABLE` TO temp80.
    APPEND `CLOSE_STRUCTURE STRUC_TAB_STRUC_TAB` TO temp80.
    exp_result = temp80.
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
    DATA temp90 TYPE string_table.
    act_result = cut->generate_type( aff_class ).


    CLEAR temp90.
    APPEND `OPEN_STRUCTURE TY_CLASS_PROPERTIES` TO temp90.
    APPEND `    FORMAT_VERSION : g` TO temp90.
    APPEND `    OPEN_STRUCTURE HEADER` TO temp90.
    APPEND `        DESCRIPTION : C` TO temp90.
    APPEND `    CLOSE_STRUCTURE HEADER` TO temp90.
    APPEND `    CATEGORY : N` TO temp90.
    APPEND `    FIXPT : C` TO temp90.
    APPEND `    MSG_ID : C` TO temp90.
    APPEND `    OPEN_TABLE ATTRIBUTES` TO temp90.
    APPEND `        OPEN_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `            NAME : C` TO temp90.
    APPEND `            DESCRIPTION : C` TO temp90.
    APPEND `        CLOSE_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `    CLOSE_TABLE ATTRIBUTES` TO temp90.
    APPEND `    OPEN_TABLE METHODS` TO temp90.
    APPEND `        OPEN_STRUCTURE TY_METHOD` TO temp90.
    APPEND `            NAME : C` TO temp90.
    APPEND `            DESCRIPTION : C` TO temp90.
    APPEND `            OPEN_TABLE PARAMETERS` TO temp90.
    APPEND `                OPEN_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `                    NAME : C` TO temp90.
    APPEND `                    DESCRIPTION : C` TO temp90.
    APPEND `                CLOSE_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `            CLOSE_TABLE PARAMETERS` TO temp90.
    APPEND `            OPEN_TABLE EXCEPTIONS` TO temp90.
    APPEND `                OPEN_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `                    NAME : C` TO temp90.
    APPEND `                    DESCRIPTION : C` TO temp90.
    APPEND `                CLOSE_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `            CLOSE_TABLE EXCEPTIONS` TO temp90.
    APPEND `        CLOSE_STRUCTURE TY_METHOD` TO temp90.
    APPEND `    CLOSE_TABLE METHODS` TO temp90.
    APPEND `    OPEN_TABLE EVENTS` TO temp90.
    APPEND `        OPEN_STRUCTURE TY_EVENT` TO temp90.
    APPEND `            NAME : C` TO temp90.
    APPEND `            DESCRIPTION : C` TO temp90.
    APPEND `            OPEN_TABLE PARAMETERS` TO temp90.
    APPEND `                OPEN_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `                    NAME : C` TO temp90.
    APPEND `                    DESCRIPTION : C` TO temp90.
    APPEND `                CLOSE_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `            CLOSE_TABLE PARAMETERS` TO temp90.
    APPEND `        CLOSE_STRUCTURE TY_EVENT` TO temp90.
    APPEND `    CLOSE_TABLE EVENTS` TO temp90.
    APPEND `    OPEN_TABLE TYPES` TO temp90.
    APPEND `        OPEN_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `            NAME : C` TO temp90.
    APPEND `            DESCRIPTION : C` TO temp90.
    APPEND `        CLOSE_STRUCTURE TY_COMPONENT` TO temp90.
    APPEND `    CLOSE_TABLE TYPES` TO temp90.
    APPEND `CLOSE_STRUCTURE TY_CLASS_PROPERTIES` TO temp90.
    exp_result = temp90.
    assert_output_equals( exp = exp_result act = act_result ).
  ENDMETHOD.

  METHOD mandatory_fields.
    DATA abap_type TYPE lif_test_types=>ty_abap_type.
    DATA log TYPE REF TO zif_aff_log.
    cut->generate_type( abap_type ).

    log = cut->get_log( ).
    zcl_aff_tools_unit_test_helper=>assert_log_has_no_message( log ).
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
