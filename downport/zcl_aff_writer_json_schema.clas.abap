"! Writer for a JSON schema. This is just a utility class helping to create a JSON schema.
"! The generated schema must be reviewed and adapted!
CLASS zcl_aff_writer_json_schema DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC
  INHERITING FROM zcl_aff_writer.

  PUBLIC SECTION.

    CONSTANTS:
      c_schema_specification TYPE string VALUE 'https://json-schema.org/draft/2020-12/schema' ##NO_TEXT,
      c_link_to_repository   TYPE string VALUE 'https://github.com/SAP/abap-file-formats' ##NO_TEXT.

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
      c_format_version            TYPE string VALUE 'FORMAT_VERSION',
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
        write_closing_tag( `}` ).
      ENDIF.
      CLEAR ignore_til_indent_level.
      RETURN.
    ENDIF.


    IF last_operation( ) = zif_aff_writer=>operation-initial.
      open_json_schema_for_element( ).
    ELSEIF last_operation( ) <> zif_aff_writer=>operation-open_table.
      write_open_tag( |"{ formatted_name }": \{| ).
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
      write_tag( `"type": "string",` ).
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

      IF abap_doc-default IS NOT INITIAL.
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
      write_closing_tag( `}` ).
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
    IF content_encoding = '7bit' OR
      content_encoding = '8bit' OR
      content_encoding = 'binary' OR
      content_encoding = 'quoted-printable' OR
      content_encoding = 'base16' OR
      content_encoding = 'base32' OR
      content_encoding = 'base64'.
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
    write_tag( `"enum": [` ).


    LOOP AT enum_properties-values ASSIGNING <enum_value>.
      IF <enum_value>-overwritten_value IS INITIAL.
        INSERT <enum_value>-value INTO TABLE enum_values.
      ELSE.
        INSERT <enum_value>-overwritten_value INTO TABLE enum_values.
      ENDIF.
    ENDLOOP.
    write_enum_properties( enum_values ).

    IF enum_properties-titles IS NOT INITIAL.
      write_tag( `"enumTitles": [` ).
      write_enum_properties( enum_properties-titles ).
    ENDIF.


    enum_descr = get_enum_descriptions( element_description = element_description enum_properties = enum_properties ).

    lt_copy = enum_descr.
    DELETE lt_copy WHERE table_line = ''.
    IF lines( lt_copy ) > 0.
      write_tag( `"enumDescriptions": [` ).
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
    write_tag( `],` ).
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
        write_tag( `"pattern": "^[0-9]+$",` ).
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
    DATA default LIKE abap_doc-default.
    FIELD-SYMBOLS <entry> TYPE zcl_aff_writer_json_schema=>ty_enum_value.
    default = abap_doc-default.
    IF abap_doc-default CS '@link'.
      default = get_default_from_link( link = abap_doc-default fullname_of_type = fullname_of_type element_type = element_description->type_kind ).
      IF default IS INITIAL.
        RETURN.
      ENDIF.

      READ TABLE enum_properties-values WITH KEY value = default ASSIGNING <entry>.
      IF sy-subrc = 0 AND <entry>-overwritten_value IS NOT INITIAL.
        default = <entry>-overwritten_value.
      ENDIF.

      default = |"{ default }"|.
    ELSEIF is_default_value_valid( element_description = element_description default_value = default fullname_of_type = fullname_of_type ) IS NOT INITIAL.
      IF json_type = zif_aff_writer=>type_info-numeric OR json_type = zif_aff_writer=>type_info-boolean.
        REPLACE ALL OCCURRENCES OF `"` IN default WITH ``.
      ELSEIF json_type = zif_aff_writer=>type_info-date_time.
        default = `"` && date_time_from_abap_to_json( date_time_abap = default element_description = element_description ) && `"`.
      ENDIF.
      IF json_type = zif_aff_writer=>type_info-numeric.
        REPLACE `E` IN default WITH `e`.
      ENDIF.
      IF json_type = zif_aff_writer=>type_info-boolean.
        IF default = 'X' OR default = 'abap_true'.
          default = 'true' ##NO_TEXT.
        ELSE.
          default = 'false' ##NO_TEXT.
        ENDIF.
      ENDIF.
    ELSE.
      RETURN.
    ENDIF.

    write_tag( |"default": { default },| ).
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
      write_open_tag( |"{ formatted_name }": \{| ).

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
    write_tag( `"type": "object",` ).
    write_open_tag( `"properties": {` ).
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
      write_closing_tag( `}` ).


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
      write_open_tag( |"{ formatted_name }": \{| ).

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

    write_tag( `"type": "array",` ).

    temp20 ?= table_description.
    IF temp20->has_unique_key = abap_true.
      write_tag( `"uniqueItems": true,` ).
    ENDIF.
    write_open_tag( `"items": {` ).
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
      write_closing_tag( `}` ).
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
      append_to_previous_line( `,` ).
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

    IF source_type = 'CLASS' OR source_type = 'INTERFACE'.
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


  METHOD get_json_schema_type.
    IF json_type = zif_aff_writer=>type_info-numeric.
      result = 'number' ##NO_TEXT.
      IF type_is_integer( element_description ) = abap_true.
        result = 'integer'  ##NO_TEXT.
      ENDIF.
    ELSEIF json_type = zif_aff_writer=>type_info-date_time.
      result = 'string' ##NO_TEXT.
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
    IF source_type = 'CLASS' OR source_type = 'INTERFACE'.



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
    write_open_tag( '{' ).
    write_tag( |"$comment": "This file is autogenerated, do not edit manually, see { c_link_to_repository } for more information.",| ) ##NO_TEXT.
    write_tag( |"$schema": "{ c_schema_specification }",| ).
    write_tag( |"$id": "{ me->schema_id }",| ).

    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = structure_name ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.

    write_title_and_description( structure_description ).

    write_tag( '"type": "object",' ).
    write_open_tag( '"properties": {' ).
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
    IF source_type = 'CLASS' OR source_type = 'INTERFACE'.



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
    write_open_tag( '{' ).
    write_tag( |"$comment": "This file is autogenerated, do not edit manually, see { c_link_to_repository } for more information.",| ) ##NO_TEXT.
    write_tag( |"$schema": "{ c_schema_specification }",| ).
    write_tag( |"$id": "{ me->schema_id }",| ).


    callback_class = to_upper( abap_doc-callback_class ).
    IF callback_class IS NOT INITIAL AND is_callback_class_valid( class_name = callback_class component_name = table_name ) IS NOT INITIAL.
      write_subschema( callback_class = callback_class ).
    ENDIF.

    write_title_and_description( table_description ).

    write_tag( '"type": "array",' ).
    IF table_description->has_unique_key = abap_true.
      write_tag( '"uniqueItems": true,' ).
    ENDIF.
    write_open_tag( '"items": {' ).
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
    write_open_tag( '{' ).
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
          p_langu    = 'E'
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
        REPLACE ALL OCCURRENCES OF PCRE '\s' IN text WITH '_'.

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


        fullname_of_value = name_of_constant && '-' && <component>-name.

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
      IF abap_doc-required = abap_false AND abap_doc-default IS INITIAL.
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
      <temp34> = temp22 && `,`.
      write_tag( `"additionalProperties": false` ).


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
        <temp38> = temp24 && `,`.
        write_tag( `"required": [` ).
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
        write_tag( `]` ).
      ENDIF.
    ENDIF.
    delete_first_tab_of_req_stack( ).
  ENDMETHOD.


  METHOD get_format.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_date OR
    element_description->type_kind = cl_abap_typedescr=>typekind_time OR
    element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
      result = `date-time` ##NO_TEXT.
    ENDIF.
  ENDMETHOD.


  METHOD write_tag.
    DATA temp42 LIKE LINE OF content.
    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level > indent_level.

      temp42 = |{ repeat( val = ` ` occ = indent_level * c_indent_number_characters ) }{ line }|.
      APPEND temp42 TO content.
    ENDIF.
  ENDMETHOD.


  METHOD date_time_from_abap_to_json.
    DATA abap_date LIKE date_time_abap.
    DATA difference TYPE i.
    abap_date = date_time_abap.
    REPLACE ALL OCCURRENCES OF `"` IN abap_date WITH ``.
    IF element_description->type_kind = cl_abap_typedescr=>typekind_date.
      IF strlen( abap_date ) = 8.
        date_time_json = abap_date+0(4) && `-` && abap_date+4(2) && `-` && abap_date+6(2).
      ELSEIF strlen( abap_date ) = 6.
        date_time_json = abap_date+0(4) && `-` && abap_date+4(2).
      ELSE.
        date_time_json = abap_date.
      ENDIF.
    ELSEIF element_description->type_kind = cl_abap_typedescr=>typekind_utclong.
      date_time_json = abap_date+0(19) && `+00:00`.
    ELSEIF element_description->type_kind = cl_abap_typedescr=>typekind_time.

      difference = 6 - strlen( abap_date ).
      IF difference > 0.
        abap_date = abap_date && repeat( val = '0' occ = difference ).
      ENDIF.
      date_time_json = abap_date+0(2) && `:` && abap_date+2(2) && `:` && abap_date+4(2).
    ENDIF.
  ENDMETHOD.


  METHOD reset_indent_level_tag.
    IF ignore_til_indent_level = indent_level.
      CLEAR ignore_til_indent_level.
    ENDIF.
  ENDMETHOD.


  METHOD append_after_output.
    APPEND `` TO output.
  ENDMETHOD.


  METHOD check_title_and_description.
    DATA msg TYPE string.
    DATA temp43 TYPE symsgv.

    IF ignore_til_indent_level IS INITIAL OR ignore_til_indent_level > indent_level. "Only write message if no callback class provided
      IF abap_doc_to_check-title IS INITIAL.
        msg = log->get_message_text( msgno = 119 msgv1 = `Title` ) ##NO_TEXT.
        log->add_info( message_text = msg component_name = fullname_of_checked_type ).
      ENDIF.

      IF abap_doc_to_check-description IS INITIAL.
        msg = log->get_message_text( msgno = 119 msgv1 = `Description` ) ##NO_TEXT.
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
        log->add_exception( exception = exception component_name = `` ).
        RETURN.
    ENDTRY.
    result = abap_true.
  ENDMETHOD.


  METHOD handle_language_field.
    write_tag( `"minLength": 2,` ).
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
      REPLACE ALL OCCURRENCES OF 'E' IN max WITH 'e'.
      REPLACE ALL OCCURRENCES OF '+' IN max WITH ''.
      remove_leading_trailing_spaces( CHANGING string_to_work_on = max ).
    ENDIF.

    IF element_description->type_kind = cl_abap_typedescr=>typekind_decfloat OR
          element_description->type_kind = cl_abap_typedescr=>typekind_decfloat16 OR
          element_description->type_kind = cl_abap_typedescr=>typekind_decfloat34.
      IF <max> IS ASSIGNED.
        min = '-' && max.
      ENDIF.
    ELSE.

      min_val = cl_abap_exceptional_values=>get_min_value( <field> ).

      ASSIGN min_val->* TO <min>.
      IF <min> IS ASSIGNED.

        min_str = <min>.

        length = strlen( min_str ) - 1.

        front = substring( val = min_str off = 0 len = length ).

        back = substring( val = min_str off = length len = 1 ).
        IF back = '-'.
          min = back && front.
        ELSE.
          min = min_str.
        ENDIF.
        REPLACE ALL OCCURRENCES OF 'E' IN min WITH 'e'.
        REPLACE ALL OCCURRENCES OF '+' IN min WITH ''.
        remove_leading_trailing_spaces( CHANGING string_to_work_on = min ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
