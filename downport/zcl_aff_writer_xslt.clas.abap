CLASS zcl_aff_writer_xslt DEFINITION
  PUBLIC
  INHERITING FROM zcl_aff_writer
  CREATE PUBLIC.

  PUBLIC SECTION.

    METHODS:
      constructor
        IMPORTING
          st_root_name TYPE csequence DEFAULT 'root' ##NO_TEXT,

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
          VALUE(default)      TYPE string
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
          VALUE(default)      TYPE string
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
    write_open_tag( `<tt:group>` ).
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
    write_open_tag( `<tt:group>` ).
    next_tag_without_name_and_ref = abap_true.
  ENDMETHOD.


  METHOD close_structure.
    DATA temp3 TYPE REF TO cl_abap_structdescr.
    delete_first_of_struc_stack( ).
    write_defaults( ).

    temp3 ?= structure_description.
    enable_extension( temp3 ).
    write_closing_tag( `</tt:group>` ).
    write_closing_tag( `</object>` ).
    write_closing_tag( `</tt:cond>` ).
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD close_table.
    write_closing_tag( `</tt:group>` ).
    write_closing_tag( `</tt:loop>` ).
    write_closing_tag( `</array>` ).
    write_closing_tag( `</tt:cond>` ).
    next_tag_without_name_and_ref = abap_false.
    reset_indent_level_tag( ).
  ENDMETHOD.


  METHOD append_before_output.
    DATA temp4 LIKE LINE OF output.
    DATA temp5 LIKE LINE OF output.
    DATA temp6 LIKE LINE OF output.
    APPEND `<?sap.transform simple?>` TO output.
    APPEND `<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">` TO output.
    APPEND LINES OF st_template_imports TO output.

    temp4 = |<tt:root name="{ st_root_name }"/>|.
    APPEND temp4 TO output.

    temp5 = |<tt:variable name="VARIABLE"/>|.
    APPEND temp5 TO output.
    APPEND `<tt:template>` TO output.

    temp6 = |<tt:ref name="{ st_root_name }">|.
    APPEND temp6 TO output.
  ENDMETHOD.


  METHOD append_after_output.
    APPEND `</tt:ref>` TO output.
    APPEND `</tt:template>` TO output.
    APPEND `</tt:transform>` TO output.
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
    ELSEIF abap_doc-default IS NOT INITIAL.
      write_open_tag( line = |<tt:deserialize>| ).
      write_enum_map_ext_compatible(
        element_description = element_description
        element_name        = element_name
        enum_values         = enum_values ).
      write_closing_tag( `</tt:deserialize>` ).
      write_open_tag( |<tt:serialize>| ).
      write_enum_value_mappings( element_description = element_description element_name = element_name enum_values = enum_values ).
      write_closing_tag( `</tt:serialize>` ).
    ELSE.
      write_enum_value_mappings( element_description = element_description element_name = element_name enum_values = enum_values ).
    ENDIF.

    write_closing_tag( |</{ tag }>| ).
    write_closing_tag( `</tt:cond>` ).
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
    IF source_type = 'CLASS' OR source_type = 'INTERFACE'.
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
      IF source_type = 'CLASS' OR source_type = 'INTERFACE'.
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
        result = `str`.
      WHEN zif_aff_writer=>type_info-boolean.
        result = `bool` ##NO_TEXT.
      WHEN zif_aff_writer=>type_info-numeric.
        result = `num`.
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
      result = ` option="format(language)"` ##NO_TEXT.
    ELSE.
      CASE json_type.
        WHEN zif_aff_writer=>type_info-string.
          result = space.
        WHEN zif_aff_writer=>type_info-date_time.
          result = ` option="format(dateTimeOffset)"`.
        WHEN zif_aff_writer=>type_info-boolean.
          result = ` option="format(boolean)"` ##NO_TEXT.
        WHEN zif_aff_writer=>type_info-numeric.
          result = ` option="format(alpha)"` ##NO_TEXT.
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
        write_tag( |  val({ abap_value })=xml('{ xml_value }'),| ) ##NO_TEXT.
      ELSE.
        write_tag( |  val({ abap_value })=xml('{ xml_value }')"| ) ##NO_TEXT.
        write_tag( `/>` ).
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
        result = |N('{ abap_value }')|.
      WHEN OTHERS.
        result = |'{ abap_value }'|.
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
    DATA default TYPE string.
    IF next_tag_without_name_and_ref = abap_true.
      RETURN.
    ENDIF.

    IF abap_doc-default IS NOT INITIAL AND ( abap_doc-required = abap_false OR abap_doc-enumvalues_link IS NOT INITIAL ).

      default = get_default( enum_values = enum_values structure_name = element_name element_description = element_description type = type ).
    ENDIF.

    IF abap_doc-required = abap_false AND abap_doc-showalways = abap_false.
      IF default IS NOT INITIAL.
        condition = | s-check="{ element_name }!={ default }"| ##NO_TEXT.
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
    default = get_default_value_from_default(
      enum_values         = enum_values
      element_description = element_description
      type                = type ).
    IF default IS NOT INITIAL.



      temp6 = sy-tabix.
      READ TABLE stack_default_comp_of_struc INDEX 1 INTO temp5.
      sy-tabix = temp6.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      table = temp5-table_of_defaults.

      CLEAR temp12.
      temp12-var_name = structure_name.
      temp12-default_value = default.
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

        fullname_of_component = name_of_constant && '-' && <component>-name.

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
      IF abap_doc-required = abap_false AND abap_doc-default IS INITIAL.
        log->add_warning( message_text = zif_aff_log=>co_msg127 component_name = fullname_of_type ).
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD write_tag.
    DATA temp18 LIKE LINE OF content.
    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level - 1 > indent_level.

      temp18 = |{ repeat( val = ` ` occ = indent_level * c_indent_number_characters ) }{ line }|.
      APPEND temp18 TO content.
    ENDIF.
  ENDMETHOD.


  METHOD get_default_value_from_default.
    DATA message TYPE string.
    DATA default_json TYPE string.
    DATA mapping_for_given_default TYPE zcl_aff_writer_xslt=>ty_enum_value.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.

      message = log->get_message_text( msgno = 117 msgv1 = `UTCLONG` ).
      log->add_warning( message_text = message component_name = fullname_of_type ).
      RETURN.
    ENDIF.

    default = abap_doc-default.
    REPLACE ALL OCCURRENCES OF `"` IN default WITH ``.
    IF default CS '@link'.

      default_json = get_default_from_link( link = default fullname_of_type = fullname_of_type element_type = element_description->type_kind ).
      IF default_json IS INITIAL.
        CLEAR default.
        RETURN.
      ENDIF.

      READ TABLE enum_values INTO mapping_for_given_default WITH KEY json_value = default_json.
      IF sy-subrc = 0.
        default = get_prefixed_default(
          value               = mapping_for_given_default-abap_value
          element_description = element_description ).
      ELSE.
        CLEAR default.
        RETURN.
      ENDIF.
    ELSE.
      IF NOT is_default_value_valid( element_description = element_description default_value = default fullname_of_type = fullname_of_type ) IS NOT INITIAL.
        CLEAR default.
        RETURN.
      ENDIF.

      IF type <> zif_aff_writer=>type_info-boolean.
        default = get_prefixed_default(
          value               = default
          element_description = element_description ).
      ELSEIF default = `abap_true` OR default = `X`.
        default = `C('X')`.
      ELSE.
        default = `C('')`.
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
        result = |F('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_xstring OR cl_abap_typedescr=>typekind_hex.
        result = |X('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_decfloat16.
        result = |DECFLOAT16('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_decfloat34.
        result = |DECFLOAT34('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_packed.
        result = |P({ value })|.
      WHEN cl_abap_typedescr=>typekind_num.
        result = |N('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_char OR cl_abap_typedescr=>typekind_string.
        result = |C('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_date.
        result = |D('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_time.
        result = |T('{ value }')|.
      WHEN cl_abap_typedescr=>typekind_utclong.

        message = log->get_message_text( msgno = 117 msgv1 = `UTCLONG` ).

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

      temp21 = |{ repeat( val = ` ` occ = ( indent_level * c_indent_number_characters ) - c_indent_number_characters ) }<tt:assign to-ref="{ <default>-var_name }" val="{ <default>-default_value }"/>|.
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
      write_open_tag( line = '<tt:cond>' ).
      IF last_operation( ) <> zif_aff_writer=>operation-open_table.

        ref_name = element_name.
      ELSE.
        ref_name = '$ref'.
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
        component_start = `<object>`.
        component_end = `</object>`.
      WHEN cl_abap_typedescr=>kind_table.
        component_start = `<array>`.
        component_end = `</array>`.
    ENDCASE.

    write_open_tag( line = |{ component_start } | ).
    write_callback( name_of_callback_class = abap_doc-callback_class parameter_name = element_name ref_name = ref_name ).
    write_closing_tag( line = |  { component_end } | ).
    IF indent_level > 0.
      write_closing_tag( '</tt:cond>' ).
    ENDIF.
    ignore_til_indent_level = indent_level + 1.
  ENDMETHOD.


  METHOD write_callback.
    DATA parameter_name_to_lower TYPE string.
    write_open_tag( line = |<tt:call-method class="{ name_of_callback_class }" d-name="deserialize" reader="reader" s-name="serialize" writer="writer">| ).

    parameter_name_to_lower = to_lower( parameter_name ).
    write_tag( line = |<tt:with-parameter name="{ parameter_name_to_lower }" ref="{ ref_name }"/>| ).
    write_closing_tag( '</tt:call-method>' ).
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
            i_name       = 'GENERATED_AFF'
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
    write_callback( name_of_callback_class = 'cl_aff_xslt_callback_language' parameter_name = 'language' ref_name = element_name ).
  ENDMETHOD.

  METHOD enable_extension.
    DATA components TYPE abap_component_tab.
    DATA str_comp TYPE string.
    DATA component LIKE LINE OF components.
    DATA formatted_name TYPE string.
    DATA tag TYPE string.
    DATA temp24 LIKE LINE OF content.

    write_open_tag( `<tt:d-cond frq="*">` ).
    write_open_tag( ` <_ tt:lax="on">` ).
    write_open_tag( `<tt:call-method class="CL_AFF_XSLT_CALLBACK_TYPE" name="RAISE_DIFFERENT_TYPE_EXCEPTION" reader="IO_READER">` ).


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

    tag = |{ repeat( val = ` `  occ = indent_level * c_indent_number_characters ) }<tt:with-parameter name="MEMBERS" val="'{ str_comp }'"/>|.
    IF strlen( tag ) > 255.
      write_tag( `<tt:with-parameter name="MEMBERS"` ).
      IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level - 1 > indent_level.

        temp24 = |val="'{ str_comp }'"/>|.
        APPEND temp24 TO content.
      ENDIF.
    ELSE.
      write_tag( |<tt:with-parameter name="MEMBERS" val="'{ str_comp }'"/>| ).
    ENDIF.
    write_closing_tag( `</tt:call-method>` ).
    write_tag( `<tt:skip/>` ).
    write_closing_tag( `</_>` ).
    write_closing_tag( `</tt:d-cond>` ).
    write_open_tag( `<tt:d-cond frq="?">` ).
    write_tag( `<__/>` ).
    write_closing_tag( `</tt:d-cond>` ).

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
      write_open_tag( |<tt:cond-var check="VARIABLE='{ xml_value }'">| ).
      write_tag( |<tt:assign { get_to_ref( element_name ) } val="{ abap_value }"/>| ).
      write_closing_tag( `</tt:cond-var>` ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
