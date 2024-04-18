*"* use this source file for your ABAP unit test classes
CLASS ltcl_abap_doc_reader DEFINITION FINAL FOR TESTING
        DURATION SHORT
        RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA test_obj TYPE REF TO zcl_aff_abap_doc_reader.

    METHODS setup.
    METHODS get_abap_doc_4_element_types FOR TESTING RAISING cx_static_check.
    METHODS get_abap_doc_4_element_data FOR TESTING RAISING cx_static_check.
    METHODS get_abap_doc_4_sub_elem_types FOR TESTING RAISING cx_static_check.
    METHODS get_abap_doc_4_wrong_elem_name FOR TESTING.
    METHODS get_abap_doc_4_elem_wo_adoc FOR TESTING.
    METHODS get_simple FOR TESTING RAISING cx_static_check.
    METHODS get_structure FOR TESTING RAISING cx_static_check.
    METHODS get_structure_types FOR TESTING RAISING cx_static_check.
    METHODS structure_and_fields FOR TESTING RAISING cx_static_check.
ENDCLASS.

CLASS ltcl_abap_doc_reader IMPLEMENTATION.
  METHOD setup.
    DATA lt_clif_source TYPE string_table.

    DATA temp8 TYPE string_table.
    DATA temp3 LIKE LINE OF temp8.
    DATA temp4 LIKE LINE OF temp8.
    DATA temp5 LIKE LINE OF temp8.
    DATA temp6 LIKE LINE OF temp8.
    DATA temp7 LIKE LINE OF temp8.
    DATA temp9 LIKE LINE OF temp8.
    DATA temp10 LIKE LINE OF temp8.
    DATA temp11 LIKE LINE OF temp8.
    DATA temp12 LIKE LINE OF temp8.
    DATA temp13 LIKE LINE OF temp8.
    DATA temp14 LIKE LINE OF temp8.
    DATA temp15 LIKE LINE OF temp8.
    DATA temp16 LIKE LINE OF temp8.
    DATA temp17 LIKE LINE OF temp8.
    DATA temp18 LIKE LINE OF temp8.
    DATA temp19 LIKE LINE OF temp8.
    DATA temp20 LIKE LINE OF temp8.
    DATA temp21 LIKE LINE OF temp8.
    DATA temp22 LIKE LINE OF temp8.
    DATA temp23 LIKE LINE OF temp8.
    DATA temp24 LIKE LINE OF temp8.
    DATA temp25 LIKE LINE OF temp8.
    DATA temp26 LIKE LINE OF temp8.
    DATA temp27 LIKE LINE OF temp8.
    DATA temp28 LIKE LINE OF temp8.
    DATA temp29 LIKE LINE OF temp8.
    DATA temp30 LIKE LINE OF temp8.
    DATA temp31 LIKE LINE OF temp8.
    DATA temp32 LIKE LINE OF temp8.
    DATA temp33 LIKE LINE OF temp8.
    DATA temp34 LIKE LINE OF temp8.
    DATA temp35 LIKE LINE OF temp8.
    DATA temp36 LIKE LINE OF temp8.
    DATA temp37 LIKE LINE OF temp8.
    CLEAR temp8.

    temp3 = |class CL_EC_WITH_COMMENTED_TYPES definition|.
    INSERT temp3 INTO TABLE temp8.

    temp4 = | public|.
    INSERT temp4 INTO TABLE temp8.

    temp5 = |  final|.
    INSERT temp5 INTO TABLE temp8.

    temp6 = |  create public .|.
    INSERT temp6 INTO TABLE temp8.

    temp7 = ||.
    INSERT temp7 INTO TABLE temp8.

    temp9 = | public section.|.
    INSERT temp9 INTO TABLE temp8.

    temp10 = ||.
    INSERT temp10 INTO TABLE temp8.

    temp11 = |    types:|.
    INSERT temp11 INTO TABLE temp8.

    temp12 = |      "! abap doc comment begin of ty_pub_structure|.
    INSERT temp12 INTO TABLE temp8.

    temp13 = |      begin " inline comment|.
    INSERT temp13 INTO TABLE temp8.

    temp14 = |       of  " inline comment|.
    INSERT temp14 INTO TABLE temp8.

    temp15 = |        ty_pub_structure, " inline comment ty_pub_structure|.
    INSERT temp15 INTO TABLE temp8.

    temp16 = |          "! ABAP Doc This is field A of the structure|.
    INSERT temp16 INTO TABLE temp8.

    temp17 = |          field_a type i, " inline comment field_a|.
    INSERT temp17 INTO TABLE temp8.

    temp18 = |          "! ABAP Doc This is field B of the structure|.
    INSERT temp18 INTO TABLE temp8.

    temp19 = |          field_b type string,|.
    INSERT temp19 INTO TABLE temp8.

    temp20 = |      end of ty_pub_structure .|.
    INSERT temp20 INTO TABLE temp8.

    temp21 = |    types:|.
    INSERT temp21 INTO TABLE temp8.

    temp22 = |      "! abap doc ty_tab_of_structure|.
    INSERT temp22 INTO TABLE temp8.

    temp23 = |      ty_tab_of_pub_structure " inline comment ty_tab_of_structure (type table of )|.
    INSERT temp23 INTO TABLE temp8.

    temp24 = |     " pure inline comment line 1|.
    INSERT temp24 INTO TABLE temp8.

    temp25 = |       type  " inline|.
    INSERT temp25 INTO TABLE temp8.

    temp26 = |         table of ty_pub_structure with default key .|.
    INSERT temp26 INTO TABLE temp8.

    temp27 = | |.
    INSERT temp27 INTO TABLE temp8.

    temp28 = |     data SUBRC type SY-SUBRC read-only .|.
    INSERT temp28 INTO TABLE temp8.

    temp29 = | protected section.|.
    INSERT temp29 INTO TABLE temp8.

    temp30 = | private section.|.
    INSERT temp30 INTO TABLE temp8.

    temp31 = |  "! Just simple data|.
    INSERT temp31 INTO TABLE temp8.

    temp32 = |  data abc type i.|.
    INSERT temp32 INTO TABLE temp8.

    temp33 = |ENDCLASS.|.
    INSERT temp33 INTO TABLE temp8.

    temp34 = ||.
    INSERT temp34 INTO TABLE temp8.

    temp35 = ||.
    INSERT temp35 INTO TABLE temp8.

    temp36 = |CLASS CL_EC_WITH_COMMENTED_TYPES IMPLEMENTATION.|.
    INSERT temp36 INTO TABLE temp8.

    temp37 = |ENDCLASS.|.
    INSERT temp37 INTO TABLE temp8.
    lt_clif_source = temp8.

    test_obj = zcl_aff_abap_doc_reader=>create_instance( source = lt_clif_source ).

  ENDMETHOD.

  METHOD get_abap_doc_4_element_types.
    DATA result TYPE string.
    result = test_obj->get_abap_doc_for_element( element_name = 'ty_pub_structure' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'abap doc comment begin of ty_pub_structure'
      act = result ).
  ENDMETHOD.

  METHOD get_abap_doc_4_element_data.
    DATA result TYPE string.
    result = test_obj->get_abap_doc_for_element( element_name = 'ABC' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'Just simple data'
      act = result ).
  ENDMETHOD.

  METHOD get_abap_doc_4_sub_elem_types.
    DATA result TYPE string.
    result = test_obj->get_abap_doc_for_element( element_name = 'ty_pub_structure-field_a' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'ABAP Doc This is field A of the structure'
      act = result ).
  ENDMETHOD.

  METHOD get_abap_doc_4_wrong_elem_name.
    TRY.
        test_obj->get_abap_doc_for_element( element_name = 'ty_nicht_vorhanden' ).

        cl_abap_unit_assert=>fail( msg = 'Expected exception reporting wrong element name was not raised' ).
      CATCH zcx_aff_tools.
        RETURN.
      CATCH cx_root ##CATCH_ALL.
        cl_abap_unit_assert=>fail( msg = 'Unexpected exception type was raised' ).
    ENDTRY.

  ENDMETHOD.

  METHOD get_abap_doc_4_elem_wo_adoc.
    TRY.
        test_obj->get_abap_doc_for_element( element_name = 'SUBRC' ).

        cl_abap_unit_assert=>fail( msg = 'Expected exception reporting wrong element name was not raised' ).
      CATCH zcx_aff_tools.
        RETURN.
      CATCH cx_root ##CATCH_ALL.
        cl_abap_unit_assert=>fail( msg = 'Unexpected exception type was raised' ).
    ENDTRY.

  ENDMETHOD.

  METHOD get_simple.
    DATA temp10 TYPE string_table.
    DATA temp38 LIKE LINE OF temp10.
    DATA temp39 LIKE LINE OF temp10.
    DATA temp40 LIKE LINE OF temp10.
    DATA temp41 LIKE LINE OF temp10.
    DATA temp42 LIKE LINE OF temp10.
    DATA temp43 LIKE LINE OF temp10.
    DATA source LIKE temp10.
    DATA result TYPE string.
    CLEAR temp10.

    temp38 = |CLASS zcl_aff_test_types DEFINITION PUBLIC FINAL CREATE PUBLIC.|.
    INSERT temp38 INTO TABLE temp10.

    temp39 = |PUBLIC SECTION.|.
    INSERT temp39 INTO TABLE temp10.

    temp40 = |  TYPES:|.
    INSERT temp40 INTO TABLE temp10.

    temp41 = |    "! $hiddenabc|.
    INSERT temp41 INTO TABLE temp10.

    temp42 = |    unknown_annotation TYPE string.|.
    INSERT temp42 INTO TABLE temp10.

    temp43 = |ENDCLASS.|.
    INSERT temp43 INTO TABLE temp10.

    source = temp10.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'UNKNOWN_ANNOTATION' ).

    cl_abap_unit_assert=>assert_equals(
      exp = '$hiddenabc'
      act = result ).
  ENDMETHOD.

  METHOD get_structure.

    DATA temp12 TYPE string_table.
    DATA temp44 LIKE LINE OF temp12.
    DATA temp45 LIKE LINE OF temp12.
    DATA temp46 LIKE LINE OF temp12.
    DATA temp47 LIKE LINE OF temp12.
    DATA temp48 LIKE LINE OF temp12.
    DATA temp49 LIKE LINE OF temp12.
    DATA temp50 LIKE LINE OF temp12.
    DATA temp51 LIKE LINE OF temp12.
    DATA temp52 LIKE LINE OF temp12.
    DATA temp53 LIKE LINE OF temp12.
    DATA temp54 LIKE LINE OF temp12.
    DATA temp55 LIKE LINE OF temp12.
    DATA temp56 LIKE LINE OF temp12.
    DATA source LIKE temp12.
    DATA result TYPE string.
    CLEAR temp12.

    temp44 = |* simple structure|.
    INSERT temp44 INTO TABLE temp12.

    temp45 = |    TYPES:|.
    INSERT temp45 INTO TABLE temp12.

    temp46 = |      "! foo|.
    INSERT temp46 INTO TABLE temp12.

    temp47 = |      "! bar|.
    INSERT temp47 INTO TABLE temp12.

    temp48 = |      BEGIN OF my_structure,|.
    INSERT temp48 INTO TABLE temp12.

    temp49 = |        "! l1|.
    INSERT temp49 INTO TABLE temp12.

    temp50 = |        "! l2|.
    INSERT temp50 INTO TABLE temp12.

    temp51 = |        "! l3|.
    INSERT temp51 INTO TABLE temp12.

    temp52 = |        my_first_element  TYPE mystring,|.
    INSERT temp52 INTO TABLE temp12.

    temp53 = |        "! l4|.
    INSERT temp53 INTO TABLE temp12.

    temp54 = |        "! l5|.
    INSERT temp54 INTO TABLE temp12.

    temp55 = |        my_second_element TYPE i,|.
    INSERT temp55 INTO TABLE temp12.

    temp56 = |      END OF my_structure.|.
    INSERT temp56 INTO TABLE temp12.

    source = temp12.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'MY_STRUCTURE' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'foo bar'
      act = result ).

    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'MY_STRUCTURE-MY_FIRST_ELEMENT' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'l1 l2 l3'
      act = result ).

    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'MY_STRUCTURE-MY_SECOND_ELEMENT' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'l4 l5'
      act = result ).

  ENDMETHOD.

  METHOD structure_and_fields.

    DATA temp14 TYPE string_table.
    DATA temp57 LIKE LINE OF temp14.
    DATA temp58 LIKE LINE OF temp14.
    DATA temp59 LIKE LINE OF temp14.
    DATA temp60 LIKE LINE OF temp14.
    DATA temp61 LIKE LINE OF temp14.
    DATA temp62 LIKE LINE OF temp14.
    DATA temp63 LIKE LINE OF temp14.
    DATA temp64 LIKE LINE OF temp14.
    DATA temp65 LIKE LINE OF temp14.
    DATA temp66 LIKE LINE OF temp14.
    DATA source LIKE temp14.
    DATA result TYPE string.
    CLEAR temp14.

    temp57 = |    TYPES:|.
    INSERT temp57 INTO TABLE temp14.

    temp58 = |      BEGIN OF structure1,|.
    INSERT temp58 INTO TABLE temp14.

    temp59 = |        "! text1|.
    INSERT temp59 INTO TABLE temp14.

    temp60 = |        same_name TYPE i,|.
    INSERT temp60 INTO TABLE temp14.

    temp61 = |      END OF structure1.|.
    INSERT temp61 INTO TABLE temp14.

    temp62 = |    TYPES:|.
    INSERT temp62 INTO TABLE temp14.

    temp63 = |      BEGIN OF structure2,|.
    INSERT temp63 INTO TABLE temp14.

    temp64 = |        "! text2|.
    INSERT temp64 INTO TABLE temp14.

    temp65 = |        same_name TYPE i,|.
    INSERT temp65 INTO TABLE temp14.

    temp66 = |      END OF structure2.|.
    INSERT temp66 INTO TABLE temp14.

    source = temp14.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'STRUCTURE1-SAME_NAME' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'text1'
      act = result ).

    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'STRUCTURE2-SAME_NAME' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'text2'
      act = result ).

  ENDMETHOD.

  METHOD get_structure_types.

    DATA temp16 TYPE string_table.
    DATA temp67 LIKE LINE OF temp16.
    DATA temp68 LIKE LINE OF temp16.
    DATA temp69 LIKE LINE OF temp16.
    DATA temp70 LIKE LINE OF temp16.
    DATA temp71 LIKE LINE OF temp16.
    DATA source LIKE temp16.
    DATA result TYPE string.
    CLEAR temp16.

    temp67 = |  TYPES:|.
    INSERT temp67 INTO TABLE temp16.

    temp68 = |    BEGIN OF ty_descriptions,|.
    INSERT temp68 INTO TABLE temp16.

    temp69 = |      "! hello|.
    INSERT temp69 INTO TABLE temp16.

    temp70 = |      types      TYPE string,|.
    INSERT temp70 INTO TABLE temp16.

    temp71 = |    END OF ty_descriptions.|.
    INSERT temp71 INTO TABLE temp16.

    source = temp16.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'TY_DESCRIPTIONS-TYPES' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'hello'
      act = result ).

  ENDMETHOD.

ENDCLASS.
