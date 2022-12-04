
CLASS ltcl_sanity DEFINITION FOR TESTING DURATION SHORT RISK LEVEL HARMLESS FINAL.
  PRIVATE SECTION.
    METHODS test1 FOR TESTING RAISING cx_static_check.
ENDCLASS.


CLASS ltcl_sanity IMPLEMENTATION.

  METHOD test1.
    DATA foo TYPE zcl_aff_test_types=>struc_with_num_text.

    DATA temp1 TYPE REF TO cl_abap_structdescr.
    DATA descr LIKE temp1.
    DATA field TYPE REF TO cl_abap_datadescr.
    temp1 ?= cl_abap_typedescr=>describe_by_data( foo ).

    descr = temp1.

    cl_abap_unit_assert=>assert_equals(
      act = descr->get_relative_name( )
      exp = 'STRUC_WITH_NUM_TEXT' ).
    cl_abap_unit_assert=>assert_equals(
      act = descr->absolute_name
      exp = '\CLASS=ZCL_AFF_TEST_TYPES\TYPE=STRUC_WITH_NUM_TEXT' ).


    field = descr->get_component_type( 'NUMERICAL_TEXT1' ).
    cl_abap_unit_assert=>assert_equals(
      act = field->get_relative_name( )
      exp = 'NUM_TEXT' ).
    cl_abap_unit_assert=>assert_equals(
      act = field->absolute_name
      exp = '\CLASS=ZCL_AFF_TEST_TYPES\TYPE=NUM_TEXT' ).
  ENDMETHOD.

ENDCLASS.
