CLASS zcl_aff_tools_unit_test_helper DEFINITION FINAL FOR TESTING
  DURATION SHORT
  RISK LEVEL HARMLESS
  PUBLIC.

  PUBLIC SECTION.

    CLASS-METHODS:
      "! Checks whether the message is contained in the log.
      assert_log_contains_msg
        IMPORTING
          log                TYPE REF TO zif_aff_log
          exp_message        TYPE scx_t100key
          exp_type           TYPE symsgty DEFAULT zif_aff_log=>c_message_type-error
          exp_component_name TYPE string OPTIONAL,

      "! Checks whether the text string is contained in the log.
      assert_log_contains_text
        IMPORTING
          log                TYPE REF TO zif_aff_log
          exp_text           TYPE string
          exp_type           TYPE symsgty DEFAULT zif_aff_log=>c_message_type-error
          exp_component_name TYPE string OPTIONAL,

      "! Asserts that both string tables are equal, ignoring all spaces.
      assert_equals_ignore_spaces
        IMPORTING
          act_data TYPE string_table
          exp_data TYPE string_table,

      "! Asserts that no message with a severity higher or equal than the threshold is contained in the log.
      "! If a corresponding message is contained, a critical assertion is thrown and the messages are displayed in the details
      "!
      "! @parameter log | The log
      "! @parameter message_severity_threshold | Severity threshold. All messages with higher or equal severity are reported
      assert_log_has_no_message
        IMPORTING
          log                        TYPE REF TO zif_aff_log
          message_severity_threshold TYPE symsgty DEFAULT zif_aff_log=>c_message_type-warning,

      "! Asserts that string tables are equal.
      assert_string_tabs
        IMPORTING
          exp               TYPE string_table
          act               TYPE string_table
          ignore_case       TYPE abap_bool DEFAULT abap_false
          ignore_spaces     TYPE abap_bool DEFAULT abap_false
          ignore_linebreaks TYPE abap_bool DEFAULT abap_false.

  PROTECTED SECTION.
  PRIVATE SECTION.


ENDCLASS.



CLASS zcl_aff_tools_unit_test_helper IMPLEMENTATION.

  METHOD assert_log_contains_msg.
    DATA act_messages TYPE zif_aff_log=>tt_log_out.
    DATA temp1 TYPE symsg.
    DATA msg LIKE temp1.
    DATA temp3 LIKE sy-subrc.
    DATA temp2 LIKE sy-subrc.
    act_messages = log->get_messages( ).

    CLEAR temp1.
    temp1-msgid = exp_message-msgid.
    temp1-msgno = exp_message-msgno.
    temp1-msgty = exp_type.
    temp1-msgv1 = exp_message-attr1.
    temp1-msgv2 = exp_message-attr2.
    temp1-msgv3 = exp_message-attr3.
    temp1-msgv4 = exp_message-attr4.

    msg = temp1.

    READ TABLE act_messages WITH KEY type = exp_type message = msg TRANSPORTING NO FIELDS.
    temp3 = sy-subrc.
    IF exp_component_name IS SUPPLIED.

      READ TABLE act_messages WITH KEY type = exp_type message = msg component_name = exp_component_name TRANSPORTING NO FIELDS.
      temp2 = sy-subrc.
      IF NOT temp2 = 0.
        cl_abap_unit_assert=>fail( msg = 'The expected message is not contained in the log' ).
      ENDIF.
    ELSEIF NOT temp3 = 0.
      cl_abap_unit_assert=>fail( msg = 'The expected message is not contained in the log' ).
    ENDIF.
  ENDMETHOD.


  METHOD assert_log_contains_text.
    DATA act_messages TYPE zif_aff_log=>tt_log_out.
    DATA temp5 LIKE sy-subrc.
    DATA temp4 LIKE sy-subrc.
    act_messages = log->get_messages( ).

    READ TABLE act_messages WITH KEY type = exp_type message_text = exp_text TRANSPORTING NO FIELDS.
    temp5 = sy-subrc.
    IF exp_component_name IS SUPPLIED.

      READ TABLE act_messages WITH KEY type = exp_type message_text = exp_text component_name = exp_component_name TRANSPORTING NO FIELDS.
      temp4 = sy-subrc.
      IF NOT temp4 = 0.
        cl_abap_unit_assert=>fail( msg = 'The expected message is not contained in the log' ).
      ENDIF.
    ELSEIF NOT temp5 = 0.
      cl_abap_unit_assert=>fail( msg = 'The expected message is not contained in the log' ).
    ENDIF.

  ENDMETHOD.

  METHOD assert_log_has_no_message.
    DATA types_to_report TYPE STANDARD TABLE OF symsgty.
    DATA temp6 LIKE types_to_report.
    DATA temp8 LIKE types_to_report.
    DATA temp10 LIKE types_to_report.
    DATA temp12 LIKE types_to_report.
    DATA max_severity TYPE symsgty.
    DATA temp14 LIKE sy-subrc.
    DATA detail TYPE string.
    DATA temp15 TYPE zif_aff_log=>tt_log_out.
    FIELD-SYMBOLS <message> LIKE LINE OF temp15.
    DATA temp16 LIKE sy-subrc.

    CASE message_severity_threshold.
      WHEN zif_aff_log=>c_message_type-info.

        CLEAR temp6.
        INSERT zif_aff_log=>c_message_type-info INTO TABLE temp6.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp6.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp6.
        types_to_report = temp6.
      WHEN zif_aff_log=>c_message_type-warning.

        CLEAR temp8.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp8.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp8.
        types_to_report = temp8.
      WHEN zif_aff_log=>c_message_type-error.

        CLEAR temp10.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp10.
        types_to_report = temp10.
      WHEN OTHERS.

        CLEAR temp12.
        INSERT zif_aff_log=>c_message_type-info INTO TABLE temp12.
        INSERT zif_aff_log=>c_message_type-warning INTO TABLE temp12.
        INSERT zif_aff_log=>c_message_type-error INTO TABLE temp12.
        types_to_report = temp12.
    ENDCASE.


    max_severity = log->get_max_severity( ).

    READ TABLE types_to_report WITH KEY table_line = max_severity TRANSPORTING NO FIELDS.
    temp14 = sy-subrc.
    IF temp14 = 0.


      temp15 = log->get_messages( ).

      LOOP AT temp15 ASSIGNING <message>.

        READ TABLE types_to_report WITH KEY table_line = <message>-type TRANSPORTING NO FIELDS.
        temp16 = sy-subrc.
        IF temp16 = 0.
          detail = detail && <message>-message_text && cl_abap_char_utilities=>newline.
        ENDIF.
      ENDLOOP.
      cl_abap_unit_assert=>fail( msg = |Log contains messages with severity >= { message_severity_threshold }| detail = detail ).
    ENDIF.
  ENDMETHOD.


  METHOD assert_equals_ignore_spaces.
    DATA exp LIKE exp_data.
    DATA act LIKE act_data.
    FIELD-SYMBOLS <exp_line> LIKE LINE OF exp.
    FIELD-SYMBOLS <act_line> LIKE LINE OF act.
    exp = exp_data.

    act = act_data.

    LOOP AT exp ASSIGNING <exp_line>.
      CONDENSE <exp_line> NO-GAPS.
    ENDLOOP.

    LOOP AT act ASSIGNING <act_line>.
      CONDENSE <act_line> NO-GAPS.
    ENDLOOP.
    cl_abap_unit_assert=>assert_equals( exp = exp act = act ).
  ENDMETHOD.


  METHOD assert_string_tabs.
    DATA exp_work_copy LIKE exp.
    DATA act_work_copy LIKE act.
    FIELD-SYMBOLS <exp_line> LIKE LINE OF exp_work_copy.
    FIELD-SYMBOLS <act_line> LIKE LINE OF act_work_copy.
    DATA exp_string TYPE string.
    DATA act_string TYPE string.
    exp_work_copy = exp.

    act_work_copy = act.

    IF ignore_spaces = abap_true.

      LOOP AT exp_work_copy ASSIGNING <exp_line>.
        CONDENSE <exp_line> NO-GAPS.
      ENDLOOP.

      LOOP AT act_work_copy ASSIGNING <act_line>.
        CONDENSE <act_line> NO-GAPS.
      ENDLOOP.
    ENDIF.

    IF ignore_case = abap_true.
      LOOP AT exp_work_copy ASSIGNING <exp_line>.
        <exp_line> = to_lower( <exp_line> ).
      ENDLOOP.
      LOOP AT act_work_copy ASSIGNING <act_line>.
        <act_line> = to_lower( <act_line> ).
      ENDLOOP.
    ENDIF.

    IF ignore_linebreaks = abap_true.

      CONCATENATE LINES OF exp_work_copy INTO exp_string.

      CONCATENATE LINES OF act_work_copy INTO act_string.
      cl_abap_unit_assert=>assert_equals( exp = exp_string act = act_string msg = 'Expected and actual abap source does not match' ).
      RETURN.
    ENDIF.

    cl_abap_unit_assert=>assert_equals( exp = exp_work_copy act = act_work_copy msg = 'Expected and actual abap source does not match' ).
  ENDMETHOD.


ENDCLASS.
