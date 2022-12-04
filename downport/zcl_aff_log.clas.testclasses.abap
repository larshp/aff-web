CLASS ltcl_log_unit_test DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS.

  PRIVATE SECTION.
    DATA:
      test_component_name TYPE string,
      log                 TYPE REF TO zif_aff_log,
      message_text        TYPE string,
      message_text_2      TYPE string,
      message             TYPE symsg,
      message_2           TYPE symsg.

    METHODS: setup,
      add_info FOR TESTING RAISING cx_static_check,
      add_warning FOR TESTING RAISING cx_static_check,
      add_error FOR TESTING RAISING cx_static_check,
      add_exception FOR TESTING RAISING cx_static_check,
      joins_log FOR TESTING RAISING cx_static_check,
      clears_log FOR TESTING RAISING cx_static_check,
      get_max_severity FOR TESTING RAISING cx_static_check,
      has_messages FOR TESTING RAISING cx_static_check,
      two_messages_for_one_object FOR TESTING RAISING cx_static_check,
      add_catched_exception FOR TESTING RAISING cx_static_check,
      add_classic_exception FOR TESTING RAISING cx_static_check,
      add_exception_as_info FOR TESTING RAISING cx_static_check,

      get_message_text FOR TESTING RAISING cx_static_check,
      assert_message
        IMPORTING
          act_message      TYPE zif_aff_log=>ty_log_out
          type             TYPE c
          exp_message_text TYPE string
          component_name   TYPE string OPTIONAL,
      assert_message_exception
        IMPORTING
          act_message TYPE zif_aff_log=>ty_log_out
          type        TYPE c
          exp_message TYPE symsg.
ENDCLASS.


CLASS ltcl_log_unit_test IMPLEMENTATION.

  METHOD setup.
    test_component_name = 'TEST_COMPONENT'.
    message_text = 'If $required is set, $showAlways is redundant'.
    message_text_2 = 'No number was provided for annotation'.
    CLEAR message.
    message-msgty = 'E'.
    message-msgv1 = message_text.
    CLEAR message_2.
    message_2-msgty = 'E'.
    message_2-msgv1 = message_text_2.
    CREATE OBJECT log TYPE zcl_aff_log.
  ENDMETHOD.


  METHOD add_info.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp20 LIKE LINE OF messages.
    DATA temp21 LIKE sy-tabix.
    log->add_info( message_text = message_text component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( messages ) ).


    temp21 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp20.
    sy-tabix = temp21.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message( act_message = temp20 type = 'I' exp_message_text = message_text ).
  ENDMETHOD.


  METHOD add_warning.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp22 LIKE LINE OF messages.
    DATA temp23 LIKE sy-tabix.
    log->add_warning( message_text = message_text component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( messages ) ).


    temp23 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp22.
    sy-tabix = temp23.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message( act_message = temp22 type = 'W' exp_message_text = message_text ).
  ENDMETHOD.

  METHOD add_error.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp24 LIKE LINE OF messages.
    DATA temp25 LIKE sy-tabix.
    log->add_error( message_text = message_text component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( messages ) ).


    temp25 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp24.
    sy-tabix = temp25.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message( act_message = temp24 type = 'E' exp_message_text = message_text ).
  ENDMETHOD.

  METHOD add_exception.
    DATA previous TYPE REF TO zcx_aff_tools.
    DATA exception TYPE REF TO zcx_aff_tools.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp26 LIKE LINE OF messages.
    DATA temp27 LIKE sy-tabix.
    DATA temp28 LIKE LINE OF messages.
    DATA temp29 LIKE sy-tabix.
    CREATE OBJECT previous TYPE zcx_aff_tools EXPORTING message = message_text.

    CREATE OBJECT exception TYPE zcx_aff_tools EXPORTING message = message_text_2 previous = previous.

    log->add_exception( exception = exception component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 2 act = lines( messages ) ).


    temp27 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp26.
    sy-tabix = temp27.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp26 type = 'E' exp_message = message_2 ).


    temp29 = sy-tabix.
    READ TABLE messages INDEX 2 INTO temp28.
    sy-tabix = temp29.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp28 type = 'E' exp_message = message ).
  ENDMETHOD.


  METHOD add_catched_exception.
    DATA temp30 TYPE REF TO zcx_aff_tools.
    DATA exception TYPE REF TO zcx_aff_tools.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp31 LIKE LINE OF messages.
    DATA temp32 LIKE sy-tabix.
    TRY.

        CREATE OBJECT temp30 TYPE zcx_aff_tools EXPORTING message = message_text.
        RAISE EXCEPTION temp30.

      CATCH zcx_aff_tools INTO exception.
        log->add_exception( exception = exception component_name = test_component_name ).
    ENDTRY.


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( messages ) ).


    temp32 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp31.
    sy-tabix = temp32.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp31
                              type        = 'E'
                              exp_message = message ).
  ENDMETHOD.

  METHOD add_classic_exception.
    DATA exception TYPE REF TO zcx_aff_tools.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp33 LIKE LINE OF messages.
    DATA temp34 LIKE sy-tabix.
    CREATE OBJECT exception TYPE zcx_aff_tools EXPORTING message = message_text.

    log->add_exception( exception = exception component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 1 act = lines( messages ) ).


    temp34 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp33.
    sy-tabix = temp34.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp33
                              type        = 'E'
                              exp_message = message ).
  ENDMETHOD.

  METHOD add_exception_as_info.
    DATA previous TYPE REF TO zcx_aff_tools.
    DATA exception TYPE REF TO zcx_aff_tools.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp35 TYPE symsg.
    DATA temp3 LIKE LINE OF messages.
    DATA temp4 LIKE sy-tabix.
    DATA temp36 TYPE symsg.
    DATA temp5 LIKE LINE OF messages.
    DATA temp6 LIKE sy-tabix.
    CREATE OBJECT previous TYPE zcx_aff_tools EXPORTING message = message_text.

    CREATE OBJECT exception TYPE zcx_aff_tools EXPORTING message = message_text_2 previous = previous.

    log->add_exception( exception = exception message_type = zif_aff_log=>c_message_type-info component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 2 act = lines( messages ) ).

    CLEAR temp35.
    temp35-msgty = 'I'.
    temp35-msgv1 = message_text_2.


    temp4 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp3.
    sy-tabix = temp4.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp3 type = 'I' exp_message = temp35 ).

    CLEAR temp36.
    temp36-msgty = 'I'.
    temp36-msgv1 = message_text.


    temp6 = sy-tabix.
    READ TABLE messages INDEX 2 INTO temp5.
    sy-tabix = temp6.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message_exception( act_message = temp5 type = 'I' exp_message = temp36 ).
    cl_abap_unit_assert=>assert_equals( exp = 'I' act = log->get_max_severity( ) ).
  ENDMETHOD.

  METHOD joins_log.
    DATA temp37 TYPE REF TO zif_aff_log.
    DATA log2 LIKE temp37.
    DATA test_element_name2 TYPE string.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    DATA temp38 LIKE LINE OF messages.
    DATA temp39 LIKE sy-tabix.
    DATA temp40 LIKE LINE OF messages.
    DATA temp41 LIKE sy-tabix.
    log->add_warning( message_text = message_text component_name = test_component_name ).

    CREATE OBJECT temp37 TYPE zcl_aff_log.

    log2 = temp37.

    test_element_name2 = `TEST_COMPONENT2`.
    log2->add_error( message_text = message_text_2 component_name = test_element_name2 ).

    log->join( log2 ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 2 act = lines( messages ) ).
    cl_abap_unit_assert=>assert_equals( exp = 'E' act = log->get_max_severity( ) ).


    temp39 = sy-tabix.
    READ TABLE messages INDEX 1 INTO temp38.
    sy-tabix = temp39.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message( act_message = temp38 type = 'W' exp_message_text = message_text ).


    temp41 = sy-tabix.
    READ TABLE messages INDEX 2 INTO temp40.
    sy-tabix = temp41.
    IF sy-subrc <> 0.
      RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
    ENDIF.
    assert_message( act_message = temp40 type = 'E' exp_message_text = message_text_2 component_name = test_element_name2 ).
  ENDMETHOD.

  METHOD clears_log.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    log->add_error( message_text = message_text component_name = test_component_name ).
    log->clear( ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 0 act = lines( messages ) ).
  ENDMETHOD.

  METHOD get_max_severity.
    DATA temp42 TYPE REF TO zcx_aff_tools.
    cl_abap_unit_assert=>assert_equals( exp = '' act = log->get_max_severity( ) ).

    log->add_info( message_text = message_text component_name = test_component_name ).
    cl_abap_unit_assert=>assert_equals( exp = 'I' act = log->get_max_severity( ) ).

    log->add_warning( message_text = message_text component_name = test_component_name ).
    cl_abap_unit_assert=>assert_equals( exp = 'W' act = log->get_max_severity( ) ).

    log->add_error( message_text = message_text component_name = test_component_name ).
    cl_abap_unit_assert=>assert_equals( exp = 'E' act = log->get_max_severity( ) ).


    CREATE OBJECT temp42 TYPE zcx_aff_tools.
    log->add_exception( exception = temp42 component_name = test_component_name ).
    cl_abap_unit_assert=>assert_equals( exp = 'E' act = log->get_max_severity( ) ).

    log->add_info( message_text = message_text component_name = test_component_name ).
    log->add_warning( message_text = message_text component_name = test_component_name ).
    cl_abap_unit_assert=>assert_equals( exp = 'E' act = log->get_max_severity( ) ).
  ENDMETHOD.

  METHOD has_messages.
    cl_abap_unit_assert=>assert_false( log->has_messages( ) ).

    log->add_info( message_text = message_text component_name = test_component_name ).
    cl_abap_unit_assert=>assert_true( log->has_messages( ) ).
  ENDMETHOD.

  METHOD two_messages_for_one_object.
    DATA messages TYPE zif_aff_log=>tt_log_out.
    log->add_info( message_text = message_text component_name = test_component_name ).
    log->add_info( message_text = message_text_2 component_name = test_component_name ).


    messages = log->get_messages( ).
    cl_abap_unit_assert=>assert_equals( exp = 2 act = lines( messages ) ).
  ENDMETHOD.

  METHOD assert_message.
    IF component_name IS SUPPLIED.
      cl_abap_unit_assert=>assert_equals( exp = component_name act = act_message-component_name ).
    ELSE.
      cl_abap_unit_assert=>assert_equals( exp = test_component_name act = act_message-component_name ).
    ENDIF.
    cl_abap_unit_assert=>assert_equals( exp = type act = act_message-type ).
    cl_abap_unit_assert=>assert_equals( exp = exp_message_text act = act_message-message_text ).
  ENDMETHOD.

  METHOD assert_message_exception.
    cl_abap_unit_assert=>assert_equals( exp = test_component_name act = act_message-component_name ).
    cl_abap_unit_assert=>assert_equals( exp = type act = act_message-type ).
    cl_abap_unit_assert=>assert_equals( exp = exp_message act = act_message-message ).

  ENDMETHOD.

  METHOD get_message_text.
    DATA temp43 TYPE symsgv.
    DATA act_message TYPE string.
    DATA exp_message TYPE string.
    temp43 = `$test`.

    act_message = log->get_message_text( msgno = 109 msgv1 = temp43 ).

    exp_message = `Annotation $test was used incorrectly`.
    cl_abap_unit_assert=>assert_equals( exp = exp_message act = act_message ).
  ENDMETHOD.
ENDCLASS.
