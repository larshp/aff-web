CLASS zcl_aff_log DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC.


  PUBLIC SECTION.
    INTERFACES zif_aff_log.

    CLASS-METHODS:
      "! Writes the actual system message fields into the returned structure
      "!
      "! @parameter result | The actual system message
      get_sy_message
        RETURNING VALUE(result) TYPE symsg.

    METHODS:
      constructor.
  PROTECTED SECTION.

  PRIVATE SECTION.
    TYPES: BEGIN OF ty_msg,
             msgno TYPE i,
             str1  TYPE c LENGTH 50,
             str2  TYPE c LENGTH 50,
             str3  TYPE c LENGTH 50,
             str4  TYPE c LENGTH 50,
           END OF ty_msg.

    TYPES: tt_msg TYPE STANDARD TABLE OF ty_msg WITH DEFAULT KEY.

    DATA:
      messages      TYPE zif_aff_log=>tt_log_out,
      message_table TYPE tt_msg,
      max_severity  TYPE symsgty.


    METHODS:
      add_message_for_exception
        IMPORTING
          type           TYPE symsgty
          message        TYPE symsg
          component_name TYPE string,
      add_message
        IMPORTING
          type           TYPE symsgty
          message_text   TYPE string
          component_name TYPE string,
      set_max_severity
        IMPORTING
          type TYPE symsgty.
ENDCLASS.



CLASS ZCL_AFF_LOG IMPLEMENTATION.


  METHOD add_message.
    DATA temp1 TYPE zif_aff_log=>ty_log_out.
    set_max_severity( type ).

    CLEAR temp1.
    temp1-component_name = component_name.
    temp1-type = type.
    temp1-message_text = message_text.
    APPEND temp1 TO me->messages.
  ENDMETHOD.


  METHOD add_message_for_exception.

    DATA text TYPE string.
    DATA temp2 TYPE zif_aff_log=>ty_log_out.
    MESSAGE
      ID message-msgid
      TYPE type
      NUMBER message-msgno
      WITH message-msgv1 message-msgv2 message-msgv3 message-msgv4
      INTO text.


    CLEAR temp2.
    temp2-component_name = component_name.
    temp2-type = type.
    temp2-message_text = text.
    temp2-message = get_sy_message( ).
    APPEND temp2 TO me->messages.
  ENDMETHOD.


  METHOD constructor.
    DATA temp3 TYPE zcl_aff_log=>ty_msg.
    DATA temp4 TYPE zcl_aff_log=>ty_msg.
    DATA temp5 TYPE zcl_aff_log=>ty_msg.
    DATA temp6 TYPE zcl_aff_log=>ty_msg.
    DATA temp7 TYPE zcl_aff_log=>ty_msg.
    DATA temp8 TYPE zcl_aff_log=>ty_msg.
    DATA temp9 TYPE zcl_aff_log=>ty_msg.
    DATA temp10 TYPE zcl_aff_log=>ty_msg.
    DATA temp11 TYPE zcl_aff_log=>ty_msg.
    DATA temp12 TYPE zcl_aff_log=>ty_msg.
    DATA temp13 TYPE zcl_aff_log=>ty_msg.
    DATA temp14 TYPE zcl_aff_log=>ty_msg.
    DATA temp15 TYPE zcl_aff_log=>ty_msg.
    DATA temp16 TYPE zcl_aff_log=>ty_msg.
    DATA temp17 TYPE zcl_aff_log=>ty_msg.
    CLEAR temp3.
    temp3-msgno = 0.
    APPEND temp3 TO message_table.

    CLEAR temp4.
    temp4-msgno = 102.
    temp4-str1 = `The JSON type`.
    temp4-str2 = `is not supported by the XSLT writer`.
    APPEND temp4 TO message_table ##NO_TEXT.

    CLEAR temp5.
    temp5-msgno = 103.
    temp5-str1 = `Class/Interface type`.
    temp5-str2 = `given in ABAP Doc link doesn't exist`.
    APPEND temp5 TO message_table ##NO_TEXT.

    CLEAR temp6.
    temp6-msgno = 104.
    temp6-str1 = `Constant`.
    temp6-str2 = `given in ABAP Doc link doesn't exist`.
    APPEND temp6 TO message_table ##NO_TEXT.

    CLEAR temp7.
    temp7-msgno = 105.
    temp7-str1 = `Component`.
    temp7-str2 = `of constant`.
    temp7-str3 = `in ABAP Doc link doesn't exist`.
    APPEND temp7 TO message_table ##NO_TEXT.

    CLEAR temp8.
    temp8-msgno = 107.
    temp8-str1 = `There are several occurrences of annotation`.
    temp8-str2 = `. First valid is used`.
    APPEND temp8 TO message_table ##NO_TEXT.

    CLEAR temp9.
    temp9-msgno = 108.
    temp9-str1 = `Annotation`.
    temp9-str2 = `is unknown`.
    APPEND temp9 TO message_table ##NO_TEXT.

    CLEAR temp10.
    temp10-msgno = 109.
    temp10-str1 = `Annotation`.
    temp10-str2 = `was used incorrectly`.
    APPEND temp10 TO message_table ##NO_TEXT.

    CLEAR temp11.
    temp11-msgno = 110.
    temp11-str1 = `No number was provided for annotation`.
    APPEND temp11 TO message_table ##NO_TEXT.

    CLEAR temp12.
    temp12-msgno = 111.
    temp12-str1 = `Link in annotation`.
    temp12-str2 = `is incorrect`.
    APPEND temp12 TO message_table ##NO_TEXT.

    CLEAR temp13.
    temp13-msgno = 112.
    temp13-str1 = `If $required is set, $showAlways is redundant`.
    APPEND temp13 TO message_table ##NO_TEXT.

    CLEAR temp14.
    temp14-msgno = 117.
    temp14-str1 = `Annotation $default for type`.
    temp14-str2 = `is not supported`.
    APPEND temp14 TO message_table ##NO_TEXT.

    CLEAR temp15.
    temp15-msgno = 119.
    temp15-str1 = ``.
    temp15-str2 = `is missing`.
    APPEND temp15 TO message_table ##NO_TEXT.

    CLEAR temp16.
    temp16-msgno = 122.
    temp16-str1 = `Type of constant`.
    temp16-str2 = `does not match type of`.
    APPEND temp16 TO message_table ##NO_TEXT.

    CLEAR temp17.
    temp17-msgno = 125.
    temp17-str1 = `Description exceeds`.
    temp17-str2 = `characters and might be too long`.
    APPEND temp17 TO message_table ##NO_TEXT.
  ENDMETHOD.


  METHOD get_sy_message.
    CLEAR result.
    result-msgid = sy-msgid.
    result-msgno = sy-msgno.
    result-msgty = sy-msgty.
    result-msgv1 = sy-msgv1.
    result-msgv2 = sy-msgv2.
    result-msgv3 = sy-msgv3.
    result-msgv4 = sy-msgv4.
  ENDMETHOD.


  METHOD set_max_severity.
    IF type = zif_aff_log=>c_message_type-error.
      max_severity = zif_aff_log=>c_message_type-error.
    ELSEIF type = zif_aff_log=>c_message_type-warning.
      IF max_severity <> zif_aff_log=>c_message_type-error.
        max_severity = zif_aff_log=>c_message_type-warning.
      ENDIF.
    ELSEIF type = zif_aff_log=>c_message_type-info.
      IF max_severity IS INITIAL.
        max_severity = zif_aff_log=>c_message_type-info.
      ENDIF.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~add_error.
    add_message( type = zif_aff_log=>c_message_type-error message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~add_exception.
    set_max_severity( message_type ).

    IF exception->get_text( ) IS NOT INITIAL.
      cl_message_helper=>set_msg_vars_for_if_msg( exception ).
      add_message_for_exception( type = message_type message = get_sy_message( ) component_name = component_name ).
    ENDIF.

    IF exception->previous IS BOUND.
      zif_aff_log~add_exception( exception = exception->previous message_type = message_type component_name = component_name ).
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~add_info.
    add_message( type = zif_aff_log=>c_message_type-info message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~add_warning.
    add_message( type = zif_aff_log=>c_message_type-warning message_text = message_text component_name = component_name ).
  ENDMETHOD.


  METHOD zif_aff_log~clear.
    CLEAR me->messages.
  ENDMETHOD.


  METHOD zif_aff_log~get_max_severity.
    max_severity = me->max_severity.
  ENDMETHOD.


  METHOD zif_aff_log~get_messages.
    messages = me->messages.
  ENDMETHOD.


  METHOD zif_aff_log~get_message_text.
    DATA temp18 LIKE sy-subrc.
    DATA temp19 TYPE zcl_aff_log=>ty_msg.
    DATA temp1 LIKE LINE OF message_table.
    DATA temp2 LIKE sy-tabix.
    DATA message_entry LIKE temp19.
    READ TABLE message_table WITH KEY msgno = msgno TRANSPORTING NO FIELDS.
    temp18 = sy-subrc.
    IF temp18 = 0.

      CLEAR temp19.


      temp2 = sy-tabix.
      READ TABLE message_table WITH KEY msgno = msgno INTO temp1.
      sy-tabix = temp2.
      IF sy-subrc <> 0.
        RAISE EXCEPTION TYPE cx_sy_itab_line_not_found.
      ENDIF.
      temp19 = temp1.

      message_entry = temp19.
      message_text = message_entry-str1 && ` ` && msgv1 && ` ` &&
                message_entry-str2 && ` ` && msgv2 && ` ` &&
                message_entry-str3 && ` ` && msgv3 && ` ` &&
                message_entry-str4 && ` ` && msgv4.
      CONDENSE message_text.
    ENDIF.
  ENDMETHOD.


  METHOD zif_aff_log~has_messages.
    DATA temp1 TYPE xsdboolean.
    temp1 = boolc( me->messages IS NOT INITIAL ).
    has_messages = temp1.
  ENDMETHOD.


  METHOD zif_aff_log~join.
    APPEND LINES OF log_to_join->get_messages( ) TO me->messages.
    set_max_severity( log_to_join->get_max_severity( ) ).
  ENDMETHOD.
ENDCLASS.
