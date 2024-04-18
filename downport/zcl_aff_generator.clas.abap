CLASS zcl_aff_generator DEFINITION
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

    READ TABLE components WITH KEY name = 'HEADER' TRANSPORTING NO FIELDS.
    temp2 = sy-subrc.

    READ TABLE components WITH KEY name = 'FORMAT_VERSION' TRANSPORTING NO FIELDS.
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
      IF <component>-name <> 'FORMAT_VERSION' AND <component>-type->kind <> cl_abap_typedescr=>kind_struct AND <component>-type->kind <> cl_abap_typedescr=>kind_table.
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
