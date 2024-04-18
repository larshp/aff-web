CLASS zcl_aff_abap_doc_parser DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.

  PUBLIC SECTION.
    CONSTANTS: BEGIN OF abap_doc_annotation,
                 callback_class     TYPE string VALUE `$callbackClass`,
                 default            TYPE string VALUE `$default`,
                 values             TYPE string VALUE `$values`,
                 required           TYPE string VALUE `$required`,
                 show_always        TYPE string VALUE `$showAlways`,
                 minimum            TYPE string VALUE `$minimum`,
                 maximum            TYPE string VALUE `$maximum`,
                 exclusive_minimum  TYPE string VALUE `$exclusiveMinimum`,
                 exclusive_maximum  TYPE string VALUE `$exclusiveMaximum`,
                 max_length         TYPE string VALUE `$maxLength`,
                 min_length         TYPE string VALUE `$minLength`,
                 multiple_of        TYPE string VALUE `$multipleOf`,
                 content_media_type TYPE string VALUE `$contentMediaType`,
                 content_encoding   TYPE string VALUE `$contentEncoding`,
                 enum_value         TYPE string VALUE `$enumValue`,
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
        default            TYPE string,
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

    CONSTANTS co_shorttext_tag_open TYPE string VALUE `[\s]*<p\sclass="shorttext">` ##NO_TEXT.

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
    REPLACE ALL OCCURRENCES OF PCRE `[\s]*(<p[\s]+class="shorttext([\s]+synchronized)?"([\s]+lang="[a-zA-Z]{2}")?[\s]*>)[\s]*`
        IN abap_doc_string WITH `<p class="shorttext">` ##NO_TEXT.
    decoded_abap_doc-title = substring_after( val = abap_doc_string pcre = co_shorttext_tag_open ).
    IF ( decoded_abap_doc-title IS NOT INITIAL ).
      decoded_abap_doc-title = substring_before( val = decoded_abap_doc-title sub = '</p>' ).
      remove_leading_trailing_spaces( CHANGING string_to_work_on = decoded_abap_doc-title ).
    ENDIF.
    check_title_positions( ).
    workaround_remove_titles( ).
  ENDMETHOD.


  METHOD check_title_positions.
    DATA msg TYPE string.
    IF ( count( val = abap_doc_string pcre = co_shorttext_tag_open ) > 1 ).

      msg = parser_log->get_message_text( msgno = 107 msgv1 = `'Title'` ).
      parser_log->add_info( message_text   = msg component_name = component_name ).
    ENDIF.
    IF ( find( val = abap_doc_string pcre = co_shorttext_tag_open ) > 0 ).
      parser_log->add_info( message_text   = zif_aff_log=>co_msg113 component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD workaround_remove_titles.
    DATA start_offset TYPE i.
    WHILE ( boolc( matches( val = abap_doc_string pcre = `.*[\s]*<p\sclass="shorttext">.*` ) ) = abap_true ).

      start_offset = find( val = abap_doc_string pcre = co_shorttext_tag_open occ = 1 ).
      abap_doc_string = abap_doc_string(start_offset) && substring_after( val = abap_doc_string+start_offset sub = `</p>` ).
    ENDWHILE.
  ENDMETHOD.

  METHOD parse_description.
    DATA offset TYPE i.
    DATA description TYPE string.
    FIND FIRST OCCURRENCE OF PCRE `(\$callbackClass|\$default|\$values|\$required|\$showAlways|\$minimum|\$maximum|\$exclusiveMinimum|\$exclusiveMaximum|\$multipleOf|\$maxLength|\$minLength|\$enumValue|\$contentMediaType|\$contentEncoding)`
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
    FIND ALL OCCURRENCES OF PCRE `\$[a-zA-Z]+` IN abap_doc_string RESULTS result_table ##NO_TEXT.

    modified_abap_doc_string = abap_doc_string.

    LOOP AT result_table ASSIGNING <entry>.

      offset = <entry>-offset.

      length = <entry>-length.

      key_word = abap_doc_string+offset(length).
      CASE key_word.
        WHEN abap_doc_annotation-callback_class.
          parse_callback_class( ).
        WHEN abap_doc_annotation-default.
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
          REPLACE key_word IN modified_abap_doc_string WITH ''.

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
    REPLACE ALL OCCURRENCES OF PCRE `\$callbackClass[\s]*(:[\s]*)?\{[\s]*@link` IN string_to_parse WITH `\$callbackClass\{@link`.

    FIND ALL OCCURRENCES OF PCRE `\$callbackClass\{@link[^\}]+\}` IN string_to_parse RESULTS result_table.
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
    IF decoded_abap_doc-default IS NOT INITIAL.
      RETURN.
    ENDIF.

    string_to_parse = abap_doc_string.
    REPLACE ALL OCCURRENCES OF PCRE `\$default[\s]*(:[\s]*)?'` IN string_to_parse WITH `\$default'`.
    REPLACE ALL OCCURRENCES OF PCRE `\$default[\s]*(:[\s]*)?\{[\s]*@link` IN string_to_parse WITH `\$default\{@link`.


    FIND ALL OCCURRENCES OF PCRE `\$default'[^']*'` IN string_to_parse RESULTS result_table_value.

    FIND ALL OCCURRENCES OF PCRE `\$default\{@link[^\}]+\}` IN string_to_parse RESULTS result_table_link.



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

      temp5 = abap_doc_annotation-default.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp5 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    IF lines( mixed_result_table ) > 1.

      temp6 = abap_doc_annotation-default.
      msg = parser_log->get_message_text( msgno = 107 msgv1 = temp6 ).
      parser_log->add_info( message_text = msg component_name = component_name ).
    ENDIF.

    warning_set = abap_false.

    LOOP AT mixed_result_table ASSIGNING <entry>.
      check_next_word( offset = <entry>-offset + <entry>-length text_to_check = string_to_parse ).
      IF <entry>-is_link = abap_false AND decoded_abap_doc-default IS INITIAL.
        decoded_abap_doc-default = `"` && get_annotation_value( length = <entry>-length - 1 offset = <entry>-offset to_decode = string_to_parse length_of_annotation = 9 remove_whitespaces = abap_false ) && `"`.
      ELSEIF <entry>-is_link = abap_true AND decoded_abap_doc-default IS INITIAL.

        link = get_annotation_value( length = <entry>-length - 1 offset = <entry>-offset to_decode = string_to_parse length_of_annotation = 9 remove_whitespaces = abap_true ).

        link_for_testing = link.
        REPLACE ALL OCCURRENCES OF PCRE `\s` IN link_for_testing WITH ``.
        REPLACE ALL OCCURRENCES OF PCRE `(@link|data:)` IN link_for_testing WITH ``.

        SPLIT link_for_testing AT '.' INTO TABLE splitted.
        IF lines( splitted ) = 3.
          decoded_abap_doc-default = link.
        ELSEIF warning_set = abap_false.

          temp7 = abap_doc_annotation-default.
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
    REPLACE ALL OCCURRENCES OF PCRE `\$values[\s]*(:[\s]*)?\{[\s]*@link` IN string_to_parse WITH `\$values\{@link`.

    FIND ALL OCCURRENCES OF PCRE `\$values\{@link([^\}]+)\}` IN string_to_parse RESULTS result_table.
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
      REPLACE ALL OCCURRENCES OF PCRE `\s` IN link_for_testing WITH ``.
      REPLACE ALL OCCURRENCES OF PCRE `data:` IN link_for_testing WITH ``.

      SPLIT link_for_testing AT '.' INTO TABLE splitted.
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

    REPLACE FIRST OCCURRENCE OF PCRE `\$contentEncoding[\s]*'` IN abap_doc WITH `\$contentEncoding'`.

    FIND FIRST OCCURRENCE OF PCRE `\$contentEncoding'([^']*)'` IN abap_doc RESULTS content_encoding_occurrences.

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

    REPLACE FIRST OCCURRENCE OF PCRE `\$contentMediaType[\s]*'` IN abap_doc WITH `\$contentMediaType'`.

    FIND FIRST OCCURRENCE OF PCRE `\$contentMediaType'([^']*)'` IN abap_doc RESULTS content_media_type_occurrences.

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

    dummy_annotation = `$dummyannotation`.
    REPLACE ALL OCCURRENCES OF annotation_name IN abap_doc WITH dummy_annotation.
    REPLACE ALL OCCURRENCES OF PCRE `\$dummyannotation[\s]*(:[\s]*)?` IN abap_doc WITH `\$dummyannotation`.

    FIND ALL OCCURRENCES OF PCRE `\$dummyannotation[^\s]+` IN abap_doc RESULTS result_table.
    IF lines( result_table ) = 0.

      temp12 = abap_doc_annotation-values.

      msg = parser_log->get_message_text( msgno = 109 msgv1 = temp12 ).
      parser_log->add_warning( message_text = msg component_name = component_name ).
      RETURN.
    ENDIF.
    write_log_for_multiple_entries( result_table = result_table annotaion = annotation_name ).

    annotation_length = strlen( dummy_annotation ).

    pcre_of_number_expressions = cl_abap_regex=>create_pcre( pattern     = `(\+|-)?[0-9]+(.[0-9]+)?(e(\+|-)?[0-9]+)?`
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
    REPLACE ALL OCCURRENCES OF PCRE `\$enumValue[\s]*(:[\s]*)?'` IN string_to_parse WITH `\$enumValue'`.

    FIND ALL OCCURRENCES OF PCRE `\$enumValue'[^']*'` IN string_to_parse RESULTS result_table.
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

    pcre_of_letter = cl_abap_regex=>create_pcre( pattern = `[a-zA-Z]` ) ##NO_TEXT.
    DO.
      next_char = text_to_check+current_offset(1).
      current_offset = current_offset + 1.
      next_word = next_word && next_char.
      IF pcre_of_letter->create_matcher( text = next_char )->match( ) = abap_false OR current_offset >= strlen( text_to_check ).
        EXIT.
      ENDIF.
    ENDDO.
    remove_leading_trailing_spaces( CHANGING string_to_work_on = next_word ).
    IF strlen( next_word ) = 1 OR next_word+0(1) <> `$`.
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
