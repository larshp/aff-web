const {cx_root} = await import("./cx_root.clas.mjs");
// zcl_aff_log.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_102 = new abap.types.Integer().set(102);
const constant_103 = new abap.types.Integer().set(103);
const constant_104 = new abap.types.Integer().set(104);
const constant_105 = new abap.types.Integer().set(105);
const constant_107 = new abap.types.Integer().set(107);
const constant_108 = new abap.types.Integer().set(108);
const constant_109 = new abap.types.Integer().set(109);
const constant_110 = new abap.types.Integer().set(110);
const constant_111 = new abap.types.Integer().set(111);
const constant_112 = new abap.types.Integer().set(112);
const constant_117 = new abap.types.Integer().set(117);
const constant_119 = new abap.types.Integer().set(119);
const constant_122 = new abap.types.Integer().set(122);
const constant_125 = new abap.types.Integer().set(125);
const constant_50 = new abap.types.Integer().set(50);
class zcl_aff_log {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = ["ZIF_AFF_LOG"];
  async add_message(INPUT) {
    let type = new abap.types.Character({qualifiedName: "SYMSGTY"});
    if (INPUT && INPUT.type) {type = INPUT.type;}
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message_text) {message_text.set(INPUT.message_text);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    let temp1 = new abap.types.Structure({component_name: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), type: new abap.types.Character({qualifiedName: "SYMSGTY"}), message_text: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), message: new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    await this.set_max_severity({type: type});
    abap.statements.clear(temp1);
    temp1.get().component_name.set(component_name);
    temp1.get().type.set(type);
    temp1.get().message_text.set(message_text);
    abap.statements.append({source: temp1, target: this.me.get().messages});
  }
  async add_message_for_exception(INPUT) {
    let type = new abap.types.Character({qualifiedName: "SYMSGTY"});
    if (INPUT && INPUT.type) {type = INPUT.type;}
    let message = new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG");
    if (INPUT && INPUT.message) {message.set(INPUT.message);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    let text = new abap.types.String({qualifiedName: "STRING"});
    let temp2 = new abap.types.Structure({component_name: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), type: new abap.types.Character({qualifiedName: "SYMSGTY"}), message_text: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), message: new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG")}, "zif_aff_log=>ty_log_out");
    await abap.statements.message({into: text, id: message.get().msgid, type: type, number: message.get().msgno, with: [message.get().msgv1,message.get().msgv2,message.get().msgv3,message.get().msgv4]});
    abap.statements.clear(temp2);
    temp2.get().component_name.set(component_name);
    temp2.get().type.set(type);
    temp2.get().message_text.set(text);
    temp2.get().message.set((await this.get_sy_message()));
    abap.statements.append({source: temp2, target: this.me.get().messages});
  }
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.messages = new abap.types.Table(new abap.types.Structure({component_name: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), type: new abap.types.Character({qualifiedName: "SYMSGTY"}), message_text: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), message: new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zif_aff_log=>tt_log_out");
    this.message_table = new abap.types.Table(new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zcl_aff_log=>tt_msg");
    this.max_severity = new abap.types.Character({qualifiedName: "SYMSGTY"});
    let temp3 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp4 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp5 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp6 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp7 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp8 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp9 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp10 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp11 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp12 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp13 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp14 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp15 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp16 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp17 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    abap.statements.clear(temp3);
    temp3.get().msgno.set(constant_0);
    abap.statements.append({source: temp3, target: this.message_table});
    abap.statements.clear(temp4);
    temp4.get().msgno.set(constant_102);
    temp4.get().str1.set(new abap.types.String().set(`The JSON type`));
    temp4.get().str2.set(new abap.types.String().set(`is not supported by the XSLT writer`));
    abap.statements.append({source: temp4, target: this.message_table});
    abap.statements.clear(temp5);
    temp5.get().msgno.set(constant_103);
    temp5.get().str1.set(new abap.types.String().set(`Class/Interface type`));
    temp5.get().str2.set(new abap.types.String().set(`given in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp5, target: this.message_table});
    abap.statements.clear(temp6);
    temp6.get().msgno.set(constant_104);
    temp6.get().str1.set(new abap.types.String().set(`Constant`));
    temp6.get().str2.set(new abap.types.String().set(`given in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp6, target: this.message_table});
    abap.statements.clear(temp7);
    temp7.get().msgno.set(constant_105);
    temp7.get().str1.set(new abap.types.String().set(`Component`));
    temp7.get().str2.set(new abap.types.String().set(`of constant`));
    temp7.get().str3.set(new abap.types.String().set(`in ABAP Doc link doesn't exist`));
    abap.statements.append({source: temp7, target: this.message_table});
    abap.statements.clear(temp8);
    temp8.get().msgno.set(constant_107);
    temp8.get().str1.set(new abap.types.String().set(`There are several occurrences of annotation`));
    temp8.get().str2.set(new abap.types.String().set(`. First valid is used`));
    abap.statements.append({source: temp8, target: this.message_table});
    abap.statements.clear(temp9);
    temp9.get().msgno.set(constant_108);
    temp9.get().str1.set(new abap.types.String().set(`Annotation`));
    temp9.get().str2.set(new abap.types.String().set(`is unknown`));
    abap.statements.append({source: temp9, target: this.message_table});
    abap.statements.clear(temp10);
    temp10.get().msgno.set(constant_109);
    temp10.get().str1.set(new abap.types.String().set(`Annotation`));
    temp10.get().str2.set(new abap.types.String().set(`was used incorrectly`));
    abap.statements.append({source: temp10, target: this.message_table});
    abap.statements.clear(temp11);
    temp11.get().msgno.set(constant_110);
    temp11.get().str1.set(new abap.types.String().set(`No number was provided for annotation`));
    abap.statements.append({source: temp11, target: this.message_table});
    abap.statements.clear(temp12);
    temp12.get().msgno.set(constant_111);
    temp12.get().str1.set(new abap.types.String().set(`Link in annotation`));
    temp12.get().str2.set(new abap.types.String().set(`is incorrect`));
    abap.statements.append({source: temp12, target: this.message_table});
    abap.statements.clear(temp13);
    temp13.get().msgno.set(constant_112);
    temp13.get().str1.set(new abap.types.String().set(`If $required is set, $showAlways is redundant`));
    abap.statements.append({source: temp13, target: this.message_table});
    abap.statements.clear(temp14);
    temp14.get().msgno.set(constant_117);
    temp14.get().str1.set(new abap.types.String().set(`Annotation $default for type`));
    temp14.get().str2.set(new abap.types.String().set(`is not supported`));
    abap.statements.append({source: temp14, target: this.message_table});
    abap.statements.clear(temp15);
    temp15.get().msgno.set(constant_119);
    temp15.get().str1.set(new abap.types.String().set(``));
    temp15.get().str2.set(new abap.types.String().set(`is missing`));
    abap.statements.append({source: temp15, target: this.message_table});
    abap.statements.clear(temp16);
    temp16.get().msgno.set(constant_122);
    temp16.get().str1.set(new abap.types.String().set(`Type of constant`));
    temp16.get().str2.set(new abap.types.String().set(`does not match type of`));
    abap.statements.append({source: temp16, target: this.message_table});
    abap.statements.clear(temp17);
    temp17.get().msgno.set(constant_125);
    temp17.get().str1.set(new abap.types.String().set(`Description exceeds`));
    temp17.get().str2.set(new abap.types.String().set(`characters and might be too long`));
    abap.statements.append({source: temp17, target: this.message_table});
    return this;
  }
  async get_sy_message() {
    return zcl_aff_log.get_sy_message();
  }
  static async get_sy_message() {
    let result = new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG");
    abap.statements.clear(result);
    result.get().msgid.set(abap.builtin.sy.get().msgid);
    result.get().msgno.set(abap.builtin.sy.get().msgno);
    result.get().msgty.set(abap.builtin.sy.get().msgty);
    result.get().msgv1.set(abap.builtin.sy.get().msgv1);
    result.get().msgv2.set(abap.builtin.sy.get().msgv2);
    result.get().msgv3.set(abap.builtin.sy.get().msgv3);
    result.get().msgv4.set(abap.builtin.sy.get().msgv4);
    return result;
  }
  async set_max_severity(INPUT) {
    let type = new abap.types.Character({qualifiedName: "SYMSGTY"});
    if (INPUT && INPUT.type) {type = INPUT.type;}
    if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
      this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error);
    } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning)) {
      if (abap.compare.ne(this.max_severity, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error)) {
        this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning);
      }
    } else if (abap.compare.eq(type, abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info)) {
      if (abap.compare.initial(this.max_severity)) {
        this.max_severity.set(abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info);
      }
    }
  }
  async zif_aff_log$add_error(INPUT) {
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message_text) {message_text.set(INPUT.message_text);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$add_exception(INPUT) {
    let exception = new abap.types.ABAPObject({qualifiedName: "CX_ROOT"});
    if (INPUT && INPUT.exception) {exception.set(INPUT.exception);}
    let message_type = new abap.types.Character({qualifiedName: "SYMSGTY"});
    if (INPUT && INPUT.message_type) {message_type = INPUT.message_type;}
    if (INPUT === undefined || INPUT.message_type === undefined) {message_type = abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().error;}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    await this.set_max_severity({type: message_type});
    if (abap.compare.initial((await exception.get().if_message$get_text())) === false) {
      await abap.Classes['CL_MESSAGE_HELPER'].set_msg_vars_for_if_msg({text: exception});
      await this.add_message_for_exception({type: message_type, message: (await this.get_sy_message()), component_name: component_name});
    }
    if (abap.compare.initial(exception.get().previous) === false) {
      await this.zif_aff_log$add_exception({exception: exception.get().previous, message_type: message_type, component_name: component_name});
    }
  }
  async zif_aff_log$add_info(INPUT) {
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message_text) {message_text.set(INPUT.message_text);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().info, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$add_warning(INPUT) {
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.message_text) {message_text.set(INPUT.message_text);}
    let component_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.component_name) {component_name.set(INPUT.component_name);}
    await this.add_message({type: abap.Classes['ZIF_AFF_LOG'].zif_aff_log$c_message_type.get().warning, message_text: message_text, component_name: component_name});
  }
  async zif_aff_log$clear() {
    abap.statements.clear(this.me.get().messages);
  }
  async zif_aff_log$get_max_severity() {
    let max_severity = new abap.types.Character({qualifiedName: "SYMSGTY"});
    max_severity.set(this.me.get().max_severity);
    return max_severity;
  }
  async zif_aff_log$get_messages() {
    let messages = new abap.types.Table(new abap.types.Structure({component_name: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-COMPONENT_NAME"}), type: new abap.types.Character({qualifiedName: "SYMSGTY"}), message_text: new abap.types.String({qualifiedName: "ZIF_AFF_LOG=>TY_LOG_OUT-MESSAGE_TEXT"}), message: new abap.types.Structure({msgty: new abap.types.Character({qualifiedName: "SYMSG-MSGTY"}), msgid: new abap.types.Character({length: 20, qualifiedName: "SYMSG-MSGID"}), msgno: new abap.types.Numc({length: 3, qualifiedName: "SYMSG-MSGNO"}), msgv1: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV1"}), msgv2: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV2"}), msgv3: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV3"}), msgv4: new abap.types.Character({length: 50, qualifiedName: "SYMSG-MSGV4"})}, "SYMSG")}, "zif_aff_log=>ty_log_out"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "zif_aff_log=>tt_log_out");
    messages.set(this.me.get().messages);
    return messages;
  }
  async zif_aff_log$get_message_text(INPUT) {
    let message_text = new abap.types.String({qualifiedName: "STRING"});
    let msgno = new abap.types.Numc({length: 3, qualifiedName: "SYMSGNO"});
    if (INPUT && INPUT.msgno) {msgno.set(INPUT.msgno);}
    let msgv1 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (INPUT && INPUT.msgv1) {msgv1.set(INPUT.msgv1);}
    let msgv2 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (INPUT && INPUT.msgv2) {msgv2.set(INPUT.msgv2);}
    let msgv3 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (INPUT && INPUT.msgv3) {msgv3.set(INPUT.msgv3);}
    let msgv4 = new abap.types.Character({length: 50, qualifiedName: "SYMSGV"});
    if (INPUT && INPUT.msgv4) {msgv4.set(INPUT.msgv4);}
    let temp18 = new abap.types.Integer();
    let temp19 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp1 = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    let temp2 = new abap.types.Integer();
    let message_entry = new abap.types.Structure({msgno: new abap.types.Integer({qualifiedName: "ZCL_AFF_LOG=>TY_MSG-MSGNO"}), str1: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str1"}), str2: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str2"}), str3: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str3"}), str4: new abap.types.Character({length: 50, qualifiedName: "zcl_aff_log=>ty_msg-str4"})}, "zcl_aff_log=>ty_msg");
    abap.statements.readTable(this.message_table,{withKey: (i) => {return abap.compare.eq(i.msgno, msgno);}});
    temp18.set(abap.builtin.sy.get().subrc);
    if (abap.compare.eq(temp18, constant_0)) {
      abap.statements.clear(temp19);
      temp2.set(abap.builtin.sy.get().tabix);
      abap.statements.readTable(this.message_table,{into: temp1,withKey: (i) => {return abap.compare.eq(i.msgno, msgno);}});
      abap.builtin.sy.get().tabix.set(temp2);
      if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
        throw await (new abap.Classes['CX_SY_ITAB_LINE_NOT_FOUND']()).constructor_();
      }
      temp19.set(temp1);
      message_entry.set(temp19);
      message_text.set(abap.operators.concat(message_entry.get().str1,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv1,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str2,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv2,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str3,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(msgv3,abap.operators.concat(new abap.types.String().set(` `),abap.operators.concat(message_entry.get().str4,abap.operators.concat(new abap.types.String().set(` `),msgv4)))))))))))))));
      abap.statements.condense(message_text, {nogaps: false});
    }
    return message_text;
  }
  async zif_aff_log$has_messages() {
    let has_messages = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    has_messages.set(abap.builtin.boolc(abap.compare.initial(this.me.get().messages) === false));
    return has_messages;
  }
  async zif_aff_log$join(INPUT) {
    let log_to_join = new abap.types.ABAPObject({qualifiedName: "ZIF_AFF_LOG"});
    if (INPUT && INPUT.log_to_join) {log_to_join.set(INPUT.log_to_join);}
    abap.statements.append({source: (await log_to_join.get().zif_aff_log$get_messages()), lines: true, target: this.me.get().messages});
    await this.set_max_severity({type: (await log_to_join.get().zif_aff_log$get_max_severity())});
  }
}
abap.Classes['ZCL_AFF_LOG'] = zcl_aff_log;
export {zcl_aff_log};
//# sourceMappingURL=zcl_aff_log.clas.mjs.map