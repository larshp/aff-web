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
    APPEND temp3 TO temp8.

    temp4 = | public|.
    APPEND temp4 TO temp8.

    temp5 = |  final|.
    APPEND temp5 TO temp8.

    temp6 = |  create public .|.
    APPEND temp6 TO temp8.

    temp7 = ||.
    APPEND temp7 TO temp8.

    temp9 = | public section.|.
    APPEND temp9 TO temp8.

    temp10 = ||.
    APPEND temp10 TO temp8.

    temp11 = |    types:|.
    APPEND temp11 TO temp8.

    temp12 = |      "! abap doc comment begin of ty_pub_structure|.
    APPEND temp12 TO temp8.

    temp13 = |      begin " inline comment|.
    APPEND temp13 TO temp8.

    temp14 = |       of  " inline comment|.
    APPEND temp14 TO temp8.

    temp15 = |        ty_pub_structure, " inline comment ty_pub_structure|.
    APPEND temp15 TO temp8.

    temp16 = |          "! ABAP Doc This is field A of the structure|.
    APPEND temp16 TO temp8.

    temp17 = |          field_a type i, " inline comment field_a|.
    APPEND temp17 TO temp8.

    temp18 = |          "! ABAP Doc This is field B of the structure|.
    APPEND temp18 TO temp8.

    temp19 = |          field_b type string,|.
    APPEND temp19 TO temp8.

    temp20 = |      end of ty_pub_structure .|.
    APPEND temp20 TO temp8.

    temp21 = |    types:|.
    APPEND temp21 TO temp8.

    temp22 = |      "! abap doc ty_tab_of_structure|.
    APPEND temp22 TO temp8.

    temp23 = |      ty_tab_of_pub_structure " inline comment ty_tab_of_structure (type table of )|.
    APPEND temp23 TO temp8.

    temp24 = |     " pure inline comment line 1|.
    APPEND temp24 TO temp8.

    temp25 = |       type  " inline|.
    APPEND temp25 TO temp8.

    temp26 = |         table of ty_pub_structure with default key .|.
    APPEND temp26 TO temp8.

    temp27 = | |.
    APPEND temp27 TO temp8.

    temp28 = |     data SUBRC type SY-SUBRC read-only .|.
    APPEND temp28 TO temp8.

    temp29 = | protected section.|.
    APPEND temp29 TO temp8.

    temp30 = | private section.|.
    APPEND temp30 TO temp8.

    temp31 = |  "! Just simple data|.
    APPEND temp31 TO temp8.

    temp32 = |  data abc type i.|.
    APPEND temp32 TO temp8.

    temp33 = |ENDCLASS.|.
    APPEND temp33 TO temp8.

    temp34 = ||.
    APPEND temp34 TO temp8.

    temp35 = ||.
    APPEND temp35 TO temp8.

    temp36 = |CLASS CL_EC_WITH_COMMENTED_TYPES IMPLEMENTATION.|.
    APPEND temp36 TO temp8.

    temp37 = |ENDCLASS.|.
    APPEND temp37 TO temp8.
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
    DATA temp43 TYPE string_table.
    DATA temp38 LIKE LINE OF temp43.
    DATA temp39 LIKE LINE OF temp43.
    DATA temp40 LIKE LINE OF temp43.
    DATA temp41 LIKE LINE OF temp43.
    DATA temp42 LIKE LINE OF temp43.
    DATA temp44 LIKE LINE OF temp43.
    DATA source LIKE temp43.
    DATA result TYPE string.
    CLEAR temp43.

    temp38 = |CLASS zcl_aff_test_types DEFINITION PUBLIC FINAL CREATE PUBLIC.|.
    APPEND temp38 TO temp43.

    temp39 = |PUBLIC SECTION.|.
    APPEND temp39 TO temp43.

    temp40 = |  TYPES:|.
    APPEND temp40 TO temp43.

    temp41 = |    "! $hiddenabc|.
    APPEND temp41 TO temp43.

    temp42 = |    unknown_annotation TYPE string.|.
    APPEND temp42 TO temp43.

    temp44 = |ENDCLASS.|.
    APPEND temp44 TO temp43.

    source = temp43.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'UNKNOWN_ANNOTATION' ).

    cl_abap_unit_assert=>assert_equals(
      exp = '$hiddenabc'
      act = result ).
  ENDMETHOD.

  METHOD get_structure.

    DATA temp50 TYPE string_table.
    DATA temp45 LIKE LINE OF temp50.
    DATA temp46 LIKE LINE OF temp50.
    DATA temp47 LIKE LINE OF temp50.
    DATA temp48 LIKE LINE OF temp50.
    DATA temp49 LIKE LINE OF temp50.
    DATA temp51 LIKE LINE OF temp50.
    DATA temp52 LIKE LINE OF temp50.
    DATA temp53 LIKE LINE OF temp50.
    DATA temp54 LIKE LINE OF temp50.
    DATA temp55 LIKE LINE OF temp50.
    DATA temp56 LIKE LINE OF temp50.
    DATA temp57 LIKE LINE OF temp50.
    DATA temp58 LIKE LINE OF temp50.
    DATA source LIKE temp50.
    DATA result TYPE string.
    CLEAR temp50.

    temp45 = |* simple structure|.
    APPEND temp45 TO temp50.

    temp46 = |    TYPES:|.
    APPEND temp46 TO temp50.

    temp47 = |      "! foo|.
    APPEND temp47 TO temp50.

    temp48 = |      "! bar|.
    APPEND temp48 TO temp50.

    temp49 = |      BEGIN OF my_structure,|.
    APPEND temp49 TO temp50.

    temp51 = |        "! l1|.
    APPEND temp51 TO temp50.

    temp52 = |        "! l2|.
    APPEND temp52 TO temp50.

    temp53 = |        "! l3|.
    APPEND temp53 TO temp50.

    temp54 = |        my_first_element  TYPE mystring,|.
    APPEND temp54 TO temp50.

    temp55 = |        "! l4|.
    APPEND temp55 TO temp50.

    temp56 = |        "! l5|.
    APPEND temp56 TO temp50.

    temp57 = |        my_second_element TYPE i,|.
    APPEND temp57 TO temp50.

    temp58 = |      END OF my_structure.|.
    APPEND temp58 TO temp50.

    source = temp50.


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

    DATA temp64 TYPE string_table.
    DATA temp59 LIKE LINE OF temp64.
    DATA temp60 LIKE LINE OF temp64.
    DATA temp61 LIKE LINE OF temp64.
    DATA temp62 LIKE LINE OF temp64.
    DATA temp63 LIKE LINE OF temp64.
    DATA temp65 LIKE LINE OF temp64.
    DATA temp66 LIKE LINE OF temp64.
    DATA temp67 LIKE LINE OF temp64.
    DATA temp68 LIKE LINE OF temp64.
    DATA temp69 LIKE LINE OF temp64.
    DATA source LIKE temp64.
    DATA result TYPE string.
    CLEAR temp64.

    temp59 = |    TYPES:|.
    APPEND temp59 TO temp64.

    temp60 = |      BEGIN OF structure1,|.
    APPEND temp60 TO temp64.

    temp61 = |        "! text1|.
    APPEND temp61 TO temp64.

    temp62 = |        same_name TYPE i,|.
    APPEND temp62 TO temp64.

    temp63 = |      END OF structure1.|.
    APPEND temp63 TO temp64.

    temp65 = |    TYPES:|.
    APPEND temp65 TO temp64.

    temp66 = |      BEGIN OF structure2,|.
    APPEND temp66 TO temp64.

    temp67 = |        "! text2|.
    APPEND temp67 TO temp64.

    temp68 = |        same_name TYPE i,|.
    APPEND temp68 TO temp64.

    temp69 = |      END OF structure2.|.
    APPEND temp69 TO temp64.

    source = temp64.


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

    DATA temp75 TYPE string_table.
    DATA temp70 LIKE LINE OF temp75.
    DATA temp71 LIKE LINE OF temp75.
    DATA temp72 LIKE LINE OF temp75.
    DATA temp73 LIKE LINE OF temp75.
    DATA temp74 LIKE LINE OF temp75.
    DATA source LIKE temp75.
    DATA result TYPE string.
    CLEAR temp75.

    temp70 = |  TYPES:|.
    APPEND temp70 TO temp75.

    temp71 = |    BEGIN OF ty_descriptions,|.
    APPEND temp71 TO temp75.

    temp72 = |      "! hello|.
    APPEND temp72 TO temp75.

    temp73 = |      types      TYPE string,|.
    APPEND temp73 TO temp75.

    temp74 = |    END OF ty_descriptions.|.
    APPEND temp74 TO temp75.

    source = temp75.


    result = zcl_aff_abap_doc_reader=>create_instance( source )->get_abap_doc_for_element( 'TY_DESCRIPTIONS-TYPES' ).
    cl_abap_unit_assert=>assert_equals(
      exp = 'hello'
      act = result ).

  ENDMETHOD.

ENDCLASS.
