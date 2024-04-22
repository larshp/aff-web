const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_typedescr.clas.abap
class cl_abap_typedescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.type_kind = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
    this.kind = new abap.types.Character(1, {});
    this.ddic = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    this.length = new abap.types.Integer({qualifiedName: "I"});
    this.decimals = new abap.types.Integer({qualifiedName: "I"});
    this.absolute_name = new abap.types.String({qualifiedName: "STRING"});
    this.relative_name = new abap.types.String({qualifiedName: "STRING"});
    this.typekind_any = cl_abap_typedescr.typekind_any;
    this.typekind_char = cl_abap_typedescr.typekind_char;
    this.typekind_class = cl_abap_typedescr.typekind_class;
    this.typekind_clike = cl_abap_typedescr.typekind_clike;
    this.typekind_csequence = cl_abap_typedescr.typekind_csequence;
    this.typekind_data = cl_abap_typedescr.typekind_data;
    this.typekind_date = cl_abap_typedescr.typekind_date;
    this.typekind_decfloat = cl_abap_typedescr.typekind_decfloat;
    this.typekind_decfloat16 = cl_abap_typedescr.typekind_decfloat16;
    this.typekind_decfloat34 = cl_abap_typedescr.typekind_decfloat34;
    this.typekind_dref = cl_abap_typedescr.typekind_dref;
    this.typekind_enum = cl_abap_typedescr.typekind_enum;
    this.typekind_float = cl_abap_typedescr.typekind_float;
    this.typekind_hex = cl_abap_typedescr.typekind_hex;
    this.typekind_int = cl_abap_typedescr.typekind_int;
    this.typekind_int1 = cl_abap_typedescr.typekind_int1;
    this.typekind_int2 = cl_abap_typedescr.typekind_int2;
    this.typekind_int8 = cl_abap_typedescr.typekind_int8;
    this.typekind_intf = cl_abap_typedescr.typekind_intf;
    this.typekind_num = cl_abap_typedescr.typekind_num;
    this.typekind_numeric = cl_abap_typedescr.typekind_numeric;
    this.typekind_oref = cl_abap_typedescr.typekind_oref;
    this.typekind_packed = cl_abap_typedescr.typekind_packed;
    this.typekind_simple = cl_abap_typedescr.typekind_simple;
    this.typekind_string = cl_abap_typedescr.typekind_string;
    this.typekind_struct1 = cl_abap_typedescr.typekind_struct1;
    this.typekind_struct2 = cl_abap_typedescr.typekind_struct2;
    this.typekind_table = cl_abap_typedescr.typekind_table;
    this.typekind_time = cl_abap_typedescr.typekind_time;
    this.typekind_utclong = cl_abap_typedescr.typekind_utclong;
    this.typekind_w = cl_abap_typedescr.typekind_w;
    this.typekind_xstring = cl_abap_typedescr.typekind_xstring;
    this.kind_elem = cl_abap_typedescr.kind_elem;
    this.kind_struct = cl_abap_typedescr.kind_struct;
    this.kind_table = cl_abap_typedescr.kind_table;
    this.kind_ref = cl_abap_typedescr.kind_ref;
    this.kind_class = cl_abap_typedescr.kind_class;
    this.kind_intf = cl_abap_typedescr.kind_intf;
    return this;
  }
  async get_ddic_object() {
    let p_object = new abap.types.Character(4);
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(4).set('todo')));
    return p_object;
  }
  async describe_by_name(INPUT) {
    return cl_abap_typedescr.describe_by_name(INPUT);
  }
  static async describe_by_name(INPUT) {
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let p_name = new abap.types.Character();
    if (INPUT && INPUT.p_name) {p_name = INPUT.p_name;}
    let ref = new abap.types.DataReference(new abap.types.Character(4));
    let objectdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_OBJECTDESCR"});
    let oo_type = new abap.types.String({qualifiedName: "STRING"});
    oo_type.set(abap.Classes[p_name.get().toUpperCase()]?.INTERNAL_TYPE || "");
    let unique151 = oo_type;
    if (abap.compare.eq(unique151, new abap.types.Character(4).set('INTF'))) {
      type.set(await (new abap.Classes['CL_ABAP_INTFDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_intf);
      type.get().kind.set(cl_abap_typedescr.kind_intf);
      await abap.statements.cast(objectdescr, type);
      objectdescr.get().mv_object_name.set(abap.builtin.to_upper({val: p_name}));
      objectdescr.get().mv_object_type.set(oo_type);
    } else if (abap.compare.eq(unique151, new abap.types.Character(4).set('CLAS'))) {
      type.set(await (new abap.Classes['CL_ABAP_CLASSDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_class);
      type.get().kind.set(cl_abap_typedescr.kind_class);
      await abap.statements.cast(objectdescr, type);
      objectdescr.get().mv_object_name.set(abap.builtin.to_upper({val: p_name}));
      objectdescr.get().mv_object_type.set(oo_type);
    } else {
      try {
        abap.statements.createData(ref,{"name": p_name.get()});
      } catch (e) {
        if (e instanceof abap.Classes['CX_SY_CREATE_DATA_ERROR']) {
          throw new abap.ClassicError({classic: "type_not_found"});
        } else {
          throw e;
        }
      }
      type.set((await this.describe_by_data_ref({p_data_ref: ref})));
    }
    return type;
  }
  async get_relative_name() {
    let name = new abap.types.String({qualifiedName: "STRING"});
    name.set(this.relative_name);
    return name;
  }
  async get_ddic_header() {
    let p_header = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Integer().set(2)));
    return p_header;
  }
  async is_ddic_type() {
    let p_abap_bool = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    p_abap_bool.set(this.ddic);
    return p_abap_bool;
  }
  async describe_by_data_ref(INPUT) {
    return cl_abap_typedescr.describe_by_data_ref(INPUT);
  }
  static async describe_by_data_ref(INPUT) {
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let p_data_ref = new abap.types.DataReference(new abap.types.Character(4));
    if (INPUT && INPUT.p_data_ref) {p_data_ref = INPUT.p_data_ref;}
    let fs_ref_ = new abap.types.FieldSymbol(new abap.types.Character(4));
    abap.statements.assign({target: fs_ref_, source: (p_data_ref).getPointer()});
    type.set((await this.describe_by_data({p_data: fs_ref_})));
    return type;
  }
  async describe_by_object_ref(INPUT) {
    return cl_abap_typedescr.describe_by_object_ref(INPUT);
  }
  static async describe_by_object_ref(INPUT) {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let p_object_ref = new abap.types.ABAPObject();
    if (INPUT && INPUT.p_object_ref) {p_object_ref = INPUT.p_object_ref;}
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    p_descr_ref.set(await (new abap.Classes['CL_ABAP_CLASSDESCR']()).constructor_());
    p_descr_ref.get().type_kind.set(cl_abap_typedescr.typekind_class);
    p_descr_ref.get().kind.set(cl_abap_typedescr.kind_class);
    lv_name.set(p_object_ref.get().constructor.name.toUpperCase());
    p_descr_ref.get().relative_name.set(lv_name);
    p_descr_ref.get().absolute_name.set(abap.operators.concat(new abap.types.Character(7).set('\\CLASS='),lv_name));
    return p_descr_ref;
  }
  async describe_by_data(INPUT) {
    return cl_abap_typedescr.describe_by_data(INPUT);
  }
  static async describe_by_data(INPUT) {
    let type = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_TYPEDESCR"});
    let p_data = new abap.types.Character(4);
    if (INPUT && INPUT.p_data) {p_data = INPUT.p_data;}
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_prefix = new abap.types.String({qualifiedName: "STRING"});
    let lv_convexit = new abap.types.String({qualifiedName: "STRING"});
    let lv_length = new abap.types.Integer({qualifiedName: "I"});
    let lv_decimals = new abap.types.Integer({qualifiedName: "I"});
    let lo_elem = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    lv_name.set(p_data.constructor.name);
    lv_length.set(p_data.getLength ? p_data.getLength() : 0);
    lv_decimals.set(p_data.getDecimals ? p_data.getDecimals() : 0);
    let unique152 = lv_name;
    if (abap.compare.eq(unique152, new abap.types.Character(7).set('Integer'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_int);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(new abap.types.Integer().set(4));
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(new abap.types.Integer().set(11));
    } else if (abap.compare.eq(unique152, new abap.types.Character(4).set('Numc'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_num);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(abap.operators.multiply(lv_length,new abap.types.Integer().set(2)));
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(lv_length);
    } else if (abap.compare.eq(unique152, new abap.types.Character(3).set('Hex'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_hex);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(lv_length);
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(abap.operators.multiply(lv_length,new abap.types.Integer().set(2)));
    } else if (abap.compare.eq(unique152, new abap.types.Character(4).set('Date'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_date);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(new abap.types.Integer().set(16));
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(new abap.types.Integer().set(8));
    } else if (abap.compare.eq(unique152, new abap.types.Character(6).set('Packed'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_packed);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(lv_length);
      type.get().decimals.set(lv_decimals);
    } else if (abap.compare.eq(unique152, new abap.types.Character(4).set('Time'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_time);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(new abap.types.Integer().set(12));
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(new abap.types.Integer().set(6));
    } else if (abap.compare.eq(unique152, new abap.types.Character(5).set('Float'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_float);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
    } else if (abap.compare.eq(unique152, new abap.types.Character(9).set('Structure'))) {
      await abap.statements.cast(type, (await abap.Classes['CL_ABAP_STRUCTDESCR'].construct_from_data({data: p_data})));
      type.get().type_kind.set(cl_abap_typedescr.typekind_struct2);
      type.get().kind.set(cl_abap_typedescr.kind_struct);
    } else if (abap.compare.eq(unique152, new abap.types.Character(5).set('Table'))) {
      await abap.statements.cast(type, (await abap.Classes['CL_ABAP_TABLEDESCR'].construct_from_data({data: p_data})));
      type.get().type_kind.set(cl_abap_typedescr.typekind_table);
      type.get().kind.set(cl_abap_typedescr.kind_table);
    } else if (abap.compare.eq(unique152, new abap.types.Character(7).set('XString'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_xstring);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(new abap.types.Integer().set(8));
    } else if (abap.compare.eq(unique152, new abap.types.Character(6).set('String'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_string);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(new abap.types.Integer().set(8));
    } else if (abap.compare.eq(unique152, new abap.types.Character(9).set('Character'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_char);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
      type.get().length.set(abap.operators.multiply(lv_length,new abap.types.Integer().set(2)));
      await abap.statements.cast(lo_elem, type);
      lo_elem.get().output_length.set(lv_length);
    } else if (abap.compare.eq(unique152, new abap.types.Character(11).set('FieldSymbol'))) {
      lv_name = p_data.getPointer();
      type.set((await this.describe_by_data({p_data: lv_name})));
      return type;
    } else if (abap.compare.eq(unique152, new abap.types.Character(10).set('ABAPObject'))) {
      type.set(await (new abap.Classes['CL_ABAP_REFDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_oref);
      type.get().kind.set(cl_abap_typedescr.kind_ref);
    } else if (abap.compare.eq(unique152, new abap.types.Character(7).set('UTCLong'))) {
      type.set(await (new abap.Classes['CL_ABAP_ELEMDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_utclong);
      type.get().kind.set(cl_abap_typedescr.kind_elem);
    } else if (abap.compare.eq(unique152, new abap.types.Character(13).set('DataReference'))) {
      type.set(await (new abap.Classes['CL_ABAP_REFDESCR']()).constructor_());
      type.get().type_kind.set(cl_abap_typedescr.typekind_dref);
      type.get().kind.set(cl_abap_typedescr.kind_ref);
    } else {
      abap.statements.write(lv_name,{newLine: true});
      abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(22).set('todo_cl_abap_typedescr')));
    }
    if (p_data.getQualifiedName && p_data.getQualifiedName() !== undefined) type.get().absolute_name.set(p_data.getQualifiedName());
    if (p_data.getDDICName && p_data.getDDICName() !== undefined) type.get().absolute_name.set(p_data.getDDICName());
    if (type.get().absolute_name.get() === "" && p_data.getType && p_data.getType().getQualifiedName() !== undefined) type.get().absolute_name.set(p_data.getType().getQualifiedName());
    if(abap.DDIC[type.get().absolute_name.get().toUpperCase()]) { type.get().ddic.set("X"); }
    abap.statements.translate(type.get().absolute_name, "UPPER");
    abap.statements.translate(type.get().relative_name, "UPPER");
    if (abap.compare.eq(type.get().absolute_name, new abap.types.Character(9).set('ABAP_BOOL'))) {
      type.get().relative_name.set(new abap.types.Character(9).set('ABAP_BOOL'));
      type.get().absolute_name.set(new abap.types.Character(30).set('\\TYPE-POOL=ABAP\\TYPE=ABAP_BOOL'));
    } else if (abap.compare.initial(type.get().absolute_name)) {
      type.get().absolute_name.set(new abap.types.Character(18).set('ABSOLUTE_NAME_TODO'));
    } else if (abap.compare.cs(type.get().absolute_name, new abap.types.Character(2).set('=>'))) {
      abap.statements.split({source: type.get().absolute_name, at: new abap.types.Character(2).set('=>'), targets: [lv_prefix,type.get().absolute_name]});
      type.get().relative_name.set(type.get().absolute_name);
      type.get().absolute_name.set(abap.operators.concat(new abap.types.Character(7).set('\\CLASS='),abap.operators.concat(lv_prefix,abap.operators.concat(new abap.types.Character(6).set('\\TYPE='),type.get().absolute_name))));
    } else if (abap.compare.eq(type.get().type_kind, cl_abap_typedescr.typekind_oref)) {
      type.get().relative_name.set(type.get().absolute_name);
      type.get().absolute_name.set(abap.operators.concat(new abap.types.Character(7).set('\\CLASS='),type.get().absolute_name));
    } else {
      type.get().relative_name.set(type.get().absolute_name);
      type.get().absolute_name.set(abap.operators.concat(new abap.types.Character(6).set('\\TYPE='),type.get().absolute_name));
    }
    if(p_data.getConversionExit && p_data.getConversionExit() !== undefined) lv_convexit.set(p_data.getConversionExit());
    if (abap.compare.ne(lv_convexit, new abap.types.Character(0).set(''))) {
      lo_elem.get().edit_mask.set(abap.operators.concat(new abap.types.Character(2).set('=='),lv_convexit));
    }
    return type;
  }
}
abap.Classes['CL_ABAP_TYPEDESCR'] = cl_abap_typedescr;
cl_abap_typedescr.typekind_any = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_any.set('~');
cl_abap_typedescr.typekind_char = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_char.set('C');
cl_abap_typedescr.typekind_class = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_class.set('*');
cl_abap_typedescr.typekind_clike = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_clike.set('&');
cl_abap_typedescr.typekind_csequence = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_csequence.set('?');
cl_abap_typedescr.typekind_data = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_data.set('#');
cl_abap_typedescr.typekind_date = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_date.set('D');
cl_abap_typedescr.typekind_decfloat = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_decfloat.set('/');
cl_abap_typedescr.typekind_decfloat16 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_decfloat16.set('a');
cl_abap_typedescr.typekind_decfloat34 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_decfloat34.set('e');
cl_abap_typedescr.typekind_dref = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_dref.set('l');
cl_abap_typedescr.typekind_enum = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_enum.set('k');
cl_abap_typedescr.typekind_float = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_float.set('F');
cl_abap_typedescr.typekind_hex = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_hex.set('X');
cl_abap_typedescr.typekind_int = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_int.set('I');
cl_abap_typedescr.typekind_int1 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_int1.set('b');
cl_abap_typedescr.typekind_int2 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_int2.set('s');
cl_abap_typedescr.typekind_int8 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_int8.set('8');
cl_abap_typedescr.typekind_intf = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_intf.set('+');
cl_abap_typedescr.typekind_num = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_num.set('N');
cl_abap_typedescr.typekind_numeric = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_numeric.set('%');
cl_abap_typedescr.typekind_oref = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_oref.set('r');
cl_abap_typedescr.typekind_packed = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_packed.set('P');
cl_abap_typedescr.typekind_simple = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_simple.set('$');
cl_abap_typedescr.typekind_string = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_string.set('g');
cl_abap_typedescr.typekind_struct1 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_struct1.set('u');
cl_abap_typedescr.typekind_struct2 = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_struct2.set('v');
cl_abap_typedescr.typekind_table = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_table.set('h');
cl_abap_typedescr.typekind_time = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_time.set('T');
cl_abap_typedescr.typekind_utclong = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_utclong.set('p');
cl_abap_typedescr.typekind_w = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_w.set('w');
cl_abap_typedescr.typekind_xstring = new abap.types.Character(1, {"qualifiedName":"abap_typekind"});
cl_abap_typedescr.typekind_xstring.set('y');
cl_abap_typedescr.kind_elem = new abap.types.Character(1, {});
cl_abap_typedescr.kind_elem.set('E');
cl_abap_typedescr.kind_struct = new abap.types.Character(1, {});
cl_abap_typedescr.kind_struct.set('S');
cl_abap_typedescr.kind_table = new abap.types.Character(1, {});
cl_abap_typedescr.kind_table.set('T');
cl_abap_typedescr.kind_ref = new abap.types.Character(1, {});
cl_abap_typedescr.kind_ref.set('R');
cl_abap_typedescr.kind_class = new abap.types.Character(1, {});
cl_abap_typedescr.kind_class.set('C');
cl_abap_typedescr.kind_intf = new abap.types.Character(1, {});
cl_abap_typedescr.kind_intf.set('I');
export {cl_abap_typedescr};
//# sourceMappingURL=cl_abap_typedescr.clas.mjs.map