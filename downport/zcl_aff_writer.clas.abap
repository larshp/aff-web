CLASS zcl_aff_writer DEFINITION
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
        boolean   TYPE string VALUE `ABAP_BOOLEAN;ABAP_BOOL;BOOLEAN;BOOLE_D;XFELD;XSDBOOLEAN;FLAG`,
        timestamp TYPE string VALUE `TIMESTAMP;TIMESTAMPL`,
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
    fullname_of_type = name_of_prev && '-'.
    index = index - 1.
    WHILE index > 0.


      temp22 = sy-tabix.
      READ TABLE stack_of_structure INDEX index INTO temp21.
      sy-tabix = temp22.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      fullname_of_type = fullname_of_type  && temp21-name && '-'.
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


    SPLIT place_of_type AT '\' INTO TABLE splitted_in_componets.

    LOOP AT splitted_in_componets ASSIGNING <component>.
      IF <component> IS NOT INITIAL.


        SPLIT <component> AT '=' INTO TABLE splitted_in_details.
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
*    class or interface doesn't exist

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

          temp25 = name_of_source && '=>' && name_of_constant.
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

          temp27 = name_of_source && '=>' && name_of_constant.
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
    REPLACE ALL OCCURRENCES OF PCRE `[\s]` IN link WITH ``.
    REPLACE ALL OCCURRENCES OF `data:` IN link WITH ``.


    SPLIT link AT '.' INTO TABLE split_at_point.
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
      IF source_type = 'CLASS' OR source_type = 'INTERFACE'.
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
    IF abap_doc_base-default IS INITIAL.
      abap_doc_base-default = abap_doc_additional-default.
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
    REPLACE ALL OCCURRENCES OF PCRE `(@link|data:)` IN link_to_work_on WITH ``.
    REPLACE ALL OCCURRENCES OF PCRE `[\s]` IN link_to_work_on WITH ``.


    SPLIT link_to_work_on AT '.' INTO TABLE splitted.
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
      temp1-cpdname = 'GET_SUBSCHEMA'.
      READ TABLE result WITH KEY cpdkey = temp1 TRANSPORTING NO FIELDS.
      temp13 = sy-subrc.

      temp4 = boolc( temp13 = 0 ).
      has_method_get_subschema = temp4.



      CLEAR temp2.
      temp2-clsname = name_of_callback_class.
      temp2-cpdname = 'SERIALIZE'.
      READ TABLE result WITH KEY cpdkey = temp2 TRANSPORTING NO FIELDS.
      temp14 = sy-subrc.

      temp5 = boolc( temp14 = 0 ).
      has_method_serialize = temp5.



      CLEAR temp3.
      temp3-clsname = name_of_callback_class.
      temp3-cpdname = 'DESERIALIZE'.
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
    DATA default LIKE default_value.
    DATA type TYPE string.
    DATA r_field TYPE REF TO data.
    FIELD-SYMBOLS <field> TYPE any.
    DATA message_text TYPE string.
    DATA string TYPE string.
    default = default_value.
    REPLACE ALL OCCURRENCES OF `"` IN default WITH ``.

    type = get_json_type_from_description( element_description ).


    CREATE DATA r_field TYPE HANDLE element_description.
    ASSIGN r_field->* TO <field>.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
*      No support for default with utclong

      message_text = log->get_message_text( msgno = 117 msgv1 = `UTCLONG` ).
      log->add_warning( message_text = message_text component_name = fullname_of_type ).
      is_valid = abap_false.
      RETURN.
    ELSEIF type = zif_aff_writer=>type_info-boolean.
      default = to_lower( default ).
      IF default = 'abap_true' OR default = 'x' OR default = 'abap_false' OR default = ''.
        is_valid = abap_true.
      ENDIF.
    ELSEIF type = zif_aff_writer=>type_info-string OR type = zif_aff_writer=>type_info-date_time.

      TRY.
          <field> = default.
          string = <field>.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_num OR element_description->type_kind = cl_abap_typedescr=>typekind_numeric.
            SHIFT string LEFT DELETING LEADING '0'.
          ENDIF.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_time.
            default = default && repeat( val = '0' occ = 6 - strlen( default ) ).
          ENDIF.
          IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
            REPLACE PCRE `T|t` IN default WITH ` `.
          ENDIF.
          remove_leading_trailing_spaces( CHANGING string_to_work_on = string ).
          remove_leading_trailing_spaces( CHANGING string_to_work_on = default ).
          IF string = default.
            is_valid = abap_true.
          ELSE.
            is_valid = abap_false.
          ENDIF.
        CATCH cx_root.
          is_valid = abap_false.
      ENDTRY.
    ELSEIF type = zif_aff_writer=>type_info-numeric.
      TRY.
          <field> = default.
          IF <field> - default = 0.
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

    IF abap_doc-enumvalues_link IS INITIAL AND abap_doc-required = abap_true AND abap_doc-default IS NOT INITIAL.
      log->add_warning( message_text = zif_aff_log=>co_msg126 component_name = fullname_of_type ).
    ENDIF.
  ENDMETHOD.

ENDCLASS.
