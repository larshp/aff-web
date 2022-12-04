const {cl_abap_complexdescr} = await import("./cl_abap_complexdescr.clas.mjs");
const {cx_root} = await import("./cx_root.clas.mjs");
// cl_abap_structdescr.clas.abap
const constant_0 = new abap.types.Integer().set(0);
const constant_1 = new abap.types.Integer().set(1);
class cl_abap_structdescr extends cl_abap_complexdescr {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    await super.constructor_(INPUT);
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.components = new abap.types.Table(new abap.types.Structure({length: new abap.types.Integer({qualifiedName: "LENGTH"}), decimals: new abap.types.Integer({qualifiedName: "DECIMALS"}), type_kind: new abap.types.Character({qualifiedName: "abap_typekind"}), name: new abap.types.Character({length: 30, qualifiedName: "abap_compname"})}, "abap_compdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":["NAME"]}, "abap_compdescr_tab");
    this.struct_kind = new abap.types.Character({qualifiedName: "abap_structkind"});
    this.mt_refs = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "");
    return this;
  }
  async get_symbols() {
    let p_result = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "abap_simple_componentdescr"), {"withHeader":false,"type":"HASHED","isUnique":true,"keyFields":["NAME"]}, "abap_component_symbol_tab");
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return p_result;
  }
  async create(INPUT) {
    return cl_abap_structdescr.create(INPUT);
  }
  static async create(INPUT) {
    let ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let p_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    if (INPUT && INPUT.p_components) {p_components.set(INPUT.p_components);}
    let p_strict = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.p_strict) {p_strict = INPUT.p_strict;}
    let ls_component = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let ls_ref = new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs");
    if (abap.compare.eq(abap.builtin.lines({val: p_components}), constant_0)) {
      throw await (new abap.Classes['CX_SY_STRUCT_ATTRIBUTES']()).constructor_();
    }
    for await (const unique138 of abap.statements.loop(p_components)) {
      ls_component.set(unique138);
      if (abap.compare.initial(ls_component.get().name)) {
        throw await (new abap.Classes['CX_SY_STRUCT_COMP_NAME']()).constructor_();
      } else if (abap.compare.initial(ls_component.get().type)) {
        throw await (new abap.Classes['CX_SY_STRUCT_COMP_TYPE']()).constructor_();
      }
    }
    ref.set(await (new abap.Classes['CL_ABAP_STRUCTDESCR']()).constructor_());
    for await (const unique139 of abap.statements.loop(p_components)) {
      ls_component.set(unique139);
      abap.statements.clear(ls_ref);
      ls_ref.get().name.set(ls_component.get().name);
      ls_ref.get().ref.set(ls_component.get().type);
      abap.statements.append({source: ls_ref, target: ref.get().mt_refs});
    }
    await ref.get().update_components();
    ref.get().type_kind.set(cl_abap_structdescr.typekind_struct2);
    ref.get().kind.set(cl_abap_structdescr.kind_struct);
    return ref;
  }
  async get_included_view(INPUT) {
    let p_result = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "abap_simple_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":["NAME"]}, "abap_component_view_tab");
    let p_level = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.p_level) {p_level.set(INPUT.p_level);}
    abap.statements.assert(abap.compare.eq(constant_1, new abap.types.Character({length: 4}).set('todo')));
    return p_result;
  }
  async get_ddic_field_list(INPUT) {
    let rt_components = new abap.types.Table(new abap.types.Structure({tabname: new abap.types.Character({length: 30, qualifiedName: "DFIES-TABNAME"}), fieldname: new abap.types.Character({length: 30, qualifiedName: "DFIES-FIELDNAME"}), langu: new abap.types.Character({qualifiedName: "DFIES-LANGU"}), position: new abap.types.Numc({length: 4, qualifiedName: "DFIES-POSITION"}), offset: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OFFSET"}), domname: new abap.types.Character({length: 30, qualifiedName: "DFIES-DOMNAME"}), rollname: new abap.types.Character({length: 30, qualifiedName: "DFIES-ROLLNAME"}), checktable: new abap.types.Character({qualifiedName: "DFIES-CHECKTABLE"}), leng: new abap.types.Numc({length: 6, qualifiedName: "DFIES-LENG"}), intlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-INTLEN"}), outputlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OUTPUTLEN"}), decimals: new abap.types.Numc({length: 6, qualifiedName: "DFIES-DECIMALS"}), datatype: new abap.types.Character({qualifiedName: "DFIES-DATATYPE"}), inttype: new abap.types.Character({qualifiedName: "DFIES-INTTYPE"}), reftable: new abap.types.Character({qualifiedName: "DFIES-REFTABLE"}), reffield: new abap.types.Character({qualifiedName: "DFIES-REFFIELD"}), precfield: new abap.types.Character({qualifiedName: "DFIES-PRECFIELD"}), authorid: new abap.types.Character({qualifiedName: "DFIES-AUTHORID"}), memoryid: new abap.types.Character({qualifiedName: "DFIES-MEMORYID"}), logflag: new abap.types.Character({qualifiedName: "DFIES-LOGFLAG"}), mask: new abap.types.Character({qualifiedName: "DFIES-MASK"}), masklen: new abap.types.Character({qualifiedName: "DFIES-MASKLEN"}), convexit: new abap.types.Character({qualifiedName: "DFIES-CONVEXIT"}), headlen: new abap.types.Character({qualifiedName: "DFIES-HEADLEN"}), scrlen1: new abap.types.Character({qualifiedName: "DFIES-SCRLEN1"}), scrlen2: new abap.types.Character({qualifiedName: "DFIES-SCRLEN2"}), scrlen3: new abap.types.Character({qualifiedName: "DFIES-SCRLEN3"}), fieldtext: new abap.types.Character({qualifiedName: "DFIES-FIELDTEXT"}), reptext: new abap.types.Character({qualifiedName: "DFIES-REPTEXT"}), scrtext_s: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_S"}), scrtext_m: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_M"}), scrtext_l: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_L"}), keyflag: new abap.types.Character({qualifiedName: "DFIES-KEYFLAG"}), lowercase: new abap.types.Character({qualifiedName: "DFIES-LOWERCASE"}), mac: new abap.types.Character({qualifiedName: "DFIES-MAC"}), genkey: new abap.types.Character({qualifiedName: "DFIES-GENKEY"}), noforkey: new abap.types.Character({qualifiedName: "DFIES-NOFORKEY"}), valexi: new abap.types.Character({qualifiedName: "DFIES-VALEXI"}), noauthch: new abap.types.Character({qualifiedName: "DFIES-NOAUTHCH"}), sign: new abap.types.Character({qualifiedName: "DFIES-SIGN"}), dynpfld: new abap.types.Character({qualifiedName: "DFIES-DYNPFLD"}), f4availabl: new abap.types.Character({qualifiedName: "DFIES-F4AVAILABL"}), comptype: new abap.types.Character({qualifiedName: "DFIES-COMPTYPE"}), outputstyle: new abap.types.Character({qualifiedName: "DFIES-OUTPUTSTYLE"}), lfieldname: new abap.types.Character({length: 132, qualifiedName: "DFIES-LFIELDNAME"})}, "DFIES"), {"withHeader":false}, "DDFIELDS");
    let p_langu = new abap.types.Character({qualifiedName: "sy-langu"});
    if (INPUT && INPUT.p_langu) {p_langu = INPUT.p_langu;}
    if (INPUT === undefined || INPUT.p_langu === undefined) {p_langu = abap.builtin.sy.get().langu;}
    let p_including_substructres = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    if (INPUT && INPUT.p_including_substructres) {p_including_substructres = INPUT.p_including_substructres;}
    if (INPUT === undefined || INPUT.p_including_substructres === undefined) {p_including_substructres = abap.builtin.abap_false;}
    let lt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let ls_component = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let ls_return = new abap.types.Structure({tabname: new abap.types.Character({length: 30, qualifiedName: "DFIES-TABNAME"}), fieldname: new abap.types.Character({length: 30, qualifiedName: "DFIES-FIELDNAME"}), langu: new abap.types.Character({qualifiedName: "DFIES-LANGU"}), position: new abap.types.Numc({length: 4, qualifiedName: "DFIES-POSITION"}), offset: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OFFSET"}), domname: new abap.types.Character({length: 30, qualifiedName: "DFIES-DOMNAME"}), rollname: new abap.types.Character({length: 30, qualifiedName: "DFIES-ROLLNAME"}), checktable: new abap.types.Character({qualifiedName: "DFIES-CHECKTABLE"}), leng: new abap.types.Numc({length: 6, qualifiedName: "DFIES-LENG"}), intlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-INTLEN"}), outputlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OUTPUTLEN"}), decimals: new abap.types.Numc({length: 6, qualifiedName: "DFIES-DECIMALS"}), datatype: new abap.types.Character({qualifiedName: "DFIES-DATATYPE"}), inttype: new abap.types.Character({qualifiedName: "DFIES-INTTYPE"}), reftable: new abap.types.Character({qualifiedName: "DFIES-REFTABLE"}), reffield: new abap.types.Character({qualifiedName: "DFIES-REFFIELD"}), precfield: new abap.types.Character({qualifiedName: "DFIES-PRECFIELD"}), authorid: new abap.types.Character({qualifiedName: "DFIES-AUTHORID"}), memoryid: new abap.types.Character({qualifiedName: "DFIES-MEMORYID"}), logflag: new abap.types.Character({qualifiedName: "DFIES-LOGFLAG"}), mask: new abap.types.Character({qualifiedName: "DFIES-MASK"}), masklen: new abap.types.Character({qualifiedName: "DFIES-MASKLEN"}), convexit: new abap.types.Character({qualifiedName: "DFIES-CONVEXIT"}), headlen: new abap.types.Character({qualifiedName: "DFIES-HEADLEN"}), scrlen1: new abap.types.Character({qualifiedName: "DFIES-SCRLEN1"}), scrlen2: new abap.types.Character({qualifiedName: "DFIES-SCRLEN2"}), scrlen3: new abap.types.Character({qualifiedName: "DFIES-SCRLEN3"}), fieldtext: new abap.types.Character({qualifiedName: "DFIES-FIELDTEXT"}), reptext: new abap.types.Character({qualifiedName: "DFIES-REPTEXT"}), scrtext_s: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_S"}), scrtext_m: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_M"}), scrtext_l: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_L"}), keyflag: new abap.types.Character({qualifiedName: "DFIES-KEYFLAG"}), lowercase: new abap.types.Character({qualifiedName: "DFIES-LOWERCASE"}), mac: new abap.types.Character({qualifiedName: "DFIES-MAC"}), genkey: new abap.types.Character({qualifiedName: "DFIES-GENKEY"}), noforkey: new abap.types.Character({qualifiedName: "DFIES-NOFORKEY"}), valexi: new abap.types.Character({qualifiedName: "DFIES-VALEXI"}), noauthch: new abap.types.Character({qualifiedName: "DFIES-NOAUTHCH"}), sign: new abap.types.Character({qualifiedName: "DFIES-SIGN"}), dynpfld: new abap.types.Character({qualifiedName: "DFIES-DYNPFLD"}), f4availabl: new abap.types.Character({qualifiedName: "DFIES-F4AVAILABL"}), comptype: new abap.types.Character({qualifiedName: "DFIES-COMPTYPE"}), outputstyle: new abap.types.Character({qualifiedName: "DFIES-OUTPUTSTYLE"}), lfieldname: new abap.types.Character({length: 132, qualifiedName: "DFIES-LFIELDNAME"})}, "DFIES");
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let lv_keyfield = new abap.types.String({qualifiedName: "STRING"});
    let lo_elemdescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_ELEMDESCR"});
    let fs_component_ = new abap.types.FieldSymbol(new abap.types.Structure({tabname: new abap.types.Character({length: 30, qualifiedName: "DFIES-TABNAME"}), fieldname: new abap.types.Character({length: 30, qualifiedName: "DFIES-FIELDNAME"}), langu: new abap.types.Character({qualifiedName: "DFIES-LANGU"}), position: new abap.types.Numc({length: 4, qualifiedName: "DFIES-POSITION"}), offset: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OFFSET"}), domname: new abap.types.Character({length: 30, qualifiedName: "DFIES-DOMNAME"}), rollname: new abap.types.Character({length: 30, qualifiedName: "DFIES-ROLLNAME"}), checktable: new abap.types.Character({qualifiedName: "DFIES-CHECKTABLE"}), leng: new abap.types.Numc({length: 6, qualifiedName: "DFIES-LENG"}), intlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-INTLEN"}), outputlen: new abap.types.Numc({length: 6, qualifiedName: "DFIES-OUTPUTLEN"}), decimals: new abap.types.Numc({length: 6, qualifiedName: "DFIES-DECIMALS"}), datatype: new abap.types.Character({qualifiedName: "DFIES-DATATYPE"}), inttype: new abap.types.Character({qualifiedName: "DFIES-INTTYPE"}), reftable: new abap.types.Character({qualifiedName: "DFIES-REFTABLE"}), reffield: new abap.types.Character({qualifiedName: "DFIES-REFFIELD"}), precfield: new abap.types.Character({qualifiedName: "DFIES-PRECFIELD"}), authorid: new abap.types.Character({qualifiedName: "DFIES-AUTHORID"}), memoryid: new abap.types.Character({qualifiedName: "DFIES-MEMORYID"}), logflag: new abap.types.Character({qualifiedName: "DFIES-LOGFLAG"}), mask: new abap.types.Character({qualifiedName: "DFIES-MASK"}), masklen: new abap.types.Character({qualifiedName: "DFIES-MASKLEN"}), convexit: new abap.types.Character({qualifiedName: "DFIES-CONVEXIT"}), headlen: new abap.types.Character({qualifiedName: "DFIES-HEADLEN"}), scrlen1: new abap.types.Character({qualifiedName: "DFIES-SCRLEN1"}), scrlen2: new abap.types.Character({qualifiedName: "DFIES-SCRLEN2"}), scrlen3: new abap.types.Character({qualifiedName: "DFIES-SCRLEN3"}), fieldtext: new abap.types.Character({qualifiedName: "DFIES-FIELDTEXT"}), reptext: new abap.types.Character({qualifiedName: "DFIES-REPTEXT"}), scrtext_s: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_S"}), scrtext_m: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_M"}), scrtext_l: new abap.types.Character({qualifiedName: "DFIES-SCRTEXT_L"}), keyflag: new abap.types.Character({qualifiedName: "DFIES-KEYFLAG"}), lowercase: new abap.types.Character({qualifiedName: "DFIES-LOWERCASE"}), mac: new abap.types.Character({qualifiedName: "DFIES-MAC"}), genkey: new abap.types.Character({qualifiedName: "DFIES-GENKEY"}), noforkey: new abap.types.Character({qualifiedName: "DFIES-NOFORKEY"}), valexi: new abap.types.Character({qualifiedName: "DFIES-VALEXI"}), noauthch: new abap.types.Character({qualifiedName: "DFIES-NOAUTHCH"}), sign: new abap.types.Character({qualifiedName: "DFIES-SIGN"}), dynpfld: new abap.types.Character({qualifiedName: "DFIES-DYNPFLD"}), f4availabl: new abap.types.Character({qualifiedName: "DFIES-F4AVAILABL"}), comptype: new abap.types.Character({qualifiedName: "DFIES-COMPTYPE"}), outputstyle: new abap.types.Character({qualifiedName: "DFIES-OUTPUTSTYLE"}), lfieldname: new abap.types.Character({length: 132, qualifiedName: "DFIES-LFIELDNAME"})}, "DFIES"));
    lt_components.set((await this.get_components()));
    abap.statements.assert(abap.compare.cp(this.absolute_name, new abap.types.Character({length: 7}).set('+TYPE=*')));
    lv_name.set(this.absolute_name.getOffset({offset: 6}));
    for await (const unique140 of abap.statements.loop(lt_components)) {
      ls_component.set(unique140);
      abap.statements.clear(ls_return);
      ls_return.get().tabname.set(lv_name);
      ls_return.get().fieldname.set(ls_component.get().name);
      if (abap.compare.eq(ls_component.get().type.get().kind, abap.Classes['CL_ABAP_TYPEDESCR'].kind_elem)) {
        await abap.statements.cast(lo_elemdescr, ls_component.get().type);
        ls_return.get().leng.set(lo_elemdescr.get().output_length);
      }
      abap.statements.append({source: ls_return, target: rt_components});
    }
    for (const keyfield of abap.DDIC[lv_name.get()]?.keyFields || [] ) {
      lv_keyfield.set(keyfield);
      abap.statements.readTable(rt_components,{assigning: fs_component_,withKey: (i) => {return abap.compare.eq(i.fieldname, lv_keyfield);}});
      abap.statements.assert(abap.compare.eq(abap.builtin.sy.get().subrc, constant_0));
      fs_component_.get().keyflag.set(abap.builtin.abap_true);
    }
    return rt_components;
  }
  async is_ddic_type() {
    let bool = new abap.types.Character({qualifiedName: "ABAP_BOOL"});
    bool.set(this.ddic);
    return bool;
  }
  async construct_from_data(INPUT) {
    return cl_abap_structdescr.construct_from_data(INPUT);
  }
  static async construct_from_data(INPUT) {
    let descr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_STRUCTDESCR"});
    let data = new abap.types.Character({length: 4});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let lv_name = new abap.types.String({qualifiedName: "STRING"});
    let ls_ref = new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs");
    let lo_datadescr = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    let fs_fs_ = new abap.types.FieldSymbol(new abap.types.Character({length: 4}));
    descr.set(await (new abap.Classes['CL_ABAP_STRUCTDESCR']()).constructor_());
    for (const name of Object.keys(INPUT.data.value)) {
        lv_name.set(name.toUpperCase());
      abap.statements.assign({component: lv_name, target: fs_fs_, source: data});
      await abap.statements.cast(lo_datadescr, (await abap.Classes['CL_ABAP_TYPEDESCR'].describe_by_data({p_data: fs_fs_})));
      ls_ref.get().name.set(lv_name);
      ls_ref.get().ref.set(lo_datadescr);
      abap.statements.append({source: ls_ref, target: descr.get().mt_refs});
    }
    await descr.get().update_components();
    return descr;
  }
  async update_components() {
    let ls_component = new abap.types.Structure({length: new abap.types.Integer({qualifiedName: "LENGTH"}), decimals: new abap.types.Integer({qualifiedName: "DECIMALS"}), type_kind: new abap.types.Character({qualifiedName: "abap_typekind"}), name: new abap.types.Character({length: 30, qualifiedName: "abap_compname"})}, "abap_compdescr");
    let ls_ref = new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs");
    abap.statements.clear(this.components);
    for await (const unique141 of abap.statements.loop(this.mt_refs)) {
      ls_ref.set(unique141);
      abap.statements.clear(ls_component);
      ls_component.get().name.set(ls_ref.get().name);
      ls_component.get().type_kind.set(ls_ref.get().ref.get().type_kind);
      abap.statements.append({source: ls_component, target: this.components});
    }
  }
  async get_components() {
    let rt_components = new abap.types.Table(new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr"), {"withHeader":false,"type":"STANDARD","isUnique":false,"keyFields":[]}, "abap_component_tab");
    let ls_component = new abap.types.Structure({length: new abap.types.Integer({qualifiedName: "LENGTH"}), decimals: new abap.types.Integer({qualifiedName: "DECIMALS"}), type_kind: new abap.types.Character({qualifiedName: "abap_typekind"}), name: new abap.types.Character({length: 30, qualifiedName: "abap_compname"})}, "abap_compdescr");
    let ret = new abap.types.Structure({name: new abap.types.String({qualifiedName: "NAME"}), type: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"}), as_include: new abap.types.Character({qualifiedName: "ABAP_BOOL"}), suffix: new abap.types.String({qualifiedName: "SUFFIX"})}, "abap_componentdescr");
    let ls_ref = new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs");
    for await (const unique142 of abap.statements.loop(this.components)) {
      ls_component.set(unique142);
      abap.statements.clear(ret);
      ret.get().name.set(ls_component.get().name);
      abap.statements.readTable(this.mt_refs,{into: ls_ref,withKey: (i) => {return abap.compare.eq(i.name, ls_component.get().name);}});
      if (abap.compare.eq(abap.builtin.sy.get().subrc, constant_0)) {
        ret.get().type.set(ls_ref.get().ref);
      }
      abap.statements.append({source: ret, target: rt_components});
    }
    return rt_components;
  }
  async get_component_type(INPUT) {
    let p_descr_ref = new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"});
    let p_name = new abap.types.Character({length: 4});
    if (INPUT && INPUT.p_name) {p_name = INPUT.p_name;}
    let line = new abap.types.Structure({name: new abap.types.String({qualifiedName: "CL_ABAP_STRUCTDESCR=>TY_REFS-NAME"}), ref: new abap.types.ABAPObject({qualifiedName: "CL_ABAP_DATADESCR"})}, "cl_abap_structdescr=>ty_refs");
    abap.statements.readTable(this.mt_refs,{into: line,withKey: (i) => {return abap.compare.eq(i.name, p_name);}});
    if (abap.compare.ne(abap.builtin.sy.get().subrc, constant_0)) {
      throw new abap.ClassicError({classic: "component_not_found"});
    } else {
      p_descr_ref.set(line.get().ref);
    }
    return p_descr_ref;
  }
}
abap.Classes['CL_ABAP_STRUCTDESCR'] = cl_abap_structdescr;
export {cl_abap_structdescr};
//# sourceMappingURL=cl_abap_structdescr.clas.mjs.map