CLASS zcl_aff_abap_doc_reader DEFINITION
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

      IF <fs_abap_doc_block>-hook_relevant_tok_name-str = 'BEGIN'.
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
