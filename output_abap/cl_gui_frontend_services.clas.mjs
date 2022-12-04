const {cx_root} = await import("./cx_root.clas.mjs");
// cl_gui_frontend_services.clas.abap
class cl_gui_frontend_services {
  static INTERNAL_TYPE = 'CLAS';
  static IMPLEMENTED_INTERFACES = [];
  async constructor_(INPUT) {
    this.me = new abap.types.ABAPObject();
    this.me.set(this);
    this.filetype_all = cl_gui_frontend_services.filetype_all;
    this.action_cancel = cl_gui_frontend_services.action_cancel;
    this.action_ok = cl_gui_frontend_services.action_ok;
    this.platform_nt351 = cl_gui_frontend_services.platform_nt351;
    this.platform_nt40 = cl_gui_frontend_services.platform_nt40;
    this.platform_nt50 = cl_gui_frontend_services.platform_nt50;
    this.platform_windows95 = cl_gui_frontend_services.platform_windows95;
    this.platform_windows98 = cl_gui_frontend_services.platform_windows98;
    this.platform_windowsxp = cl_gui_frontend_services.platform_windowsxp;
    return this;
  }
  async directory_exist(INPUT) {
    return cl_gui_frontend_services.directory_exist(INPUT);
  }
  static async directory_exist(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(29).set('directory_exist not supported')));
    return result;
  }
  async get_sapgui_workdir(INPUT) {
    return cl_gui_frontend_services.get_sapgui_workdir(INPUT);
  }
  static async get_sapgui_workdir(INPUT) {
    let sapworkdir = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.sapworkdir) {sapworkdir = INPUT.sapworkdir;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(32).set('get_sapgui_workdir not supported')));
  }
  async file_exist(INPUT) {
    return cl_gui_frontend_services.file_exist(INPUT);
  }
  static async file_exist(INPUT) {
    let result = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    let file = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file) {file.set(INPUT.file);}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(24).set('file_exist not supported')));
    return result;
  }
  async file_delete(INPUT) {
    return cl_gui_frontend_services.file_delete(INPUT);
  }
  static async file_delete(INPUT) {
    let filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filename) {filename.set(INPUT.filename);}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(25).set('file_delete not supported')));
  }
  async clipboard_import(INPUT) {
    return cl_gui_frontend_services.clipboard_import(INPUT);
  }
  static async clipboard_import(INPUT) {
    let data = new abap.types.Table(new abap.types.Character(4), {"withHeader":false});
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let length = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.length) {length = INPUT.length;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('clipboard_import not supported')));
  }
  async directory_list_files(INPUT) {
    return cl_gui_frontend_services.directory_list_files(INPUT);
  }
  static async directory_list_files(INPUT) {
    let directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}
    let file_table = new abap.types.Character(4);
    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}
    let count = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.count) {count = INPUT.count;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(34).set('directory_list_files not supported')));
  }
  async directory_create(INPUT) {
    return cl_gui_frontend_services.directory_create(INPUT);
  }
  static async directory_create(INPUT) {
    let directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.directory) {directory.set(INPUT.directory);}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('directory_create not supported')));
  }
  async gui_download(INPUT) {
    return cl_gui_frontend_services.gui_download(INPUT);
  }
  static async gui_download(INPUT) {
    let bin_filesize = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.bin_filesize) {bin_filesize.set(INPUT.bin_filesize);}
    let filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filename) {filename.set(INPUT.filename);}
    let filetype = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}
    let write_lf = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.write_lf) {write_lf = INPUT.write_lf;}
    let write_field_separator = new abap.types.Character(1, {"qualifiedName":"CHAR1"});
    if (INPUT && INPUT.write_field_separator) {write_field_separator = INPUT.write_field_separator;}
    let data_tab = new abap.types.Character(4);
    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(26).set('gui_download not supported')));
  }
  async get_file_separator(INPUT) {
    return cl_gui_frontend_services.get_file_separator(INPUT);
  }
  static async get_file_separator(INPUT) {
    let file_separator = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_separator) {file_separator = INPUT.file_separator;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(32).set('get_file_separator not supported')));
  }
  async execute(INPUT) {
    return cl_gui_frontend_services.execute(INPUT);
  }
  static async execute(INPUT) {
    let document = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.document) {document.set(INPUT.document);}
    let application = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.application) {application.set(INPUT.application);}
    let parameter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.parameter) {parameter.set(INPUT.parameter);}
    let default_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_directory) {default_directory.set(INPUT.default_directory);}
    let maximized = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.maximized) {maximized.set(INPUT.maximized);}
    let minimized = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.minimized) {minimized.set(INPUT.minimized);}
    let synchronous = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.synchronous) {synchronous.set(INPUT.synchronous);}
    let operation = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.operation) {operation.set(INPUT.operation);}
    if (INPUT === undefined || INPUT.operation === undefined) {operation = new abap.types.Character(4).set('OPEN');}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(21).set('execute not supported')));
  }
  async directory_browse(INPUT) {
    return cl_gui_frontend_services.directory_browse(INPUT);
  }
  static async directory_browse(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let initial_folder = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.initial_folder) {initial_folder.set(INPUT.initial_folder);}
    let selected_folder = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.selected_folder) {selected_folder = INPUT.selected_folder;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('directory_browse not supported')));
  }
  async gui_upload(INPUT) {
    return cl_gui_frontend_services.gui_upload(INPUT);
  }
  static async gui_upload(INPUT) {
    let filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filename) {filename.set(INPUT.filename);}
    let filetype = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filetype) {filetype.set(INPUT.filetype);}
    let filelength = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.filelength) {filelength = INPUT.filelength;}
    let data_tab = new abap.types.Character(4);
    if (INPUT && INPUT.data_tab) {data_tab = INPUT.data_tab;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(24).set('gui_upload not supported')));
  }
  async file_open_dialog(INPUT) {
    return cl_gui_frontend_services.file_open_dialog(INPUT);
  }
  static async file_open_dialog(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let default_filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_filename) {default_filename.set(INPUT.default_filename);}
    let multiselection = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.multiselection) {multiselection = INPUT.multiselection;}
    let file_filter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}
    let file_table = new abap.types.Table(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE"), {"withHeader":false}, "FILETABLE");
    if (INPUT && INPUT.file_table) {file_table = INPUT.file_table;}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    let user_action = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('file_open_dialog not supported')));
  }
  async file_save_dialog(INPUT) {
    return cl_gui_frontend_services.file_save_dialog(INPUT);
  }
  static async file_save_dialog(INPUT) {
    let window_title = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.window_title) {window_title.set(INPUT.window_title);}
    let default_extension = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_extension) {default_extension.set(INPUT.default_extension);}
    let default_file_name = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.default_file_name) {default_file_name.set(INPUT.default_file_name);}
    let file_filter = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.file_filter) {file_filter.set(INPUT.file_filter);}
    let filename = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.filename) {filename = INPUT.filename;}
    let path = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.path) {path = INPUT.path;}
    let fullpath = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.fullpath) {fullpath = INPUT.fullpath;}
    let user_action = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.user_action) {user_action = INPUT.user_action;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('file_save_dialog not supported')));
  }
  async get_platform() {
    return cl_gui_frontend_services.get_platform();
  }
  static async get_platform() {
    let platform = new abap.types.Integer({qualifiedName: "I"});
    platform.set(cl_gui_frontend_services.platform_windowsxp);
    return platform;
  }
  async clipboard_export(INPUT) {
    return cl_gui_frontend_services.clipboard_export(INPUT);
  }
  static async clipboard_export(INPUT) {
    let no_auth_check = new abap.types.Character(1, {"qualifiedName":"ABAP_BOOL","ddicName":"ABAP_BOOL"});
    if (INPUT && INPUT.no_auth_check) {no_auth_check = INPUT.no_auth_check;}
    let data = new abap.types.Character(4);
    if (INPUT && INPUT.data) {data = INPUT.data;}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(30).set('clipboard_export not supported')));
  }
  async get_system_directory(INPUT) {
    return cl_gui_frontend_services.get_system_directory(INPUT);
  }
  static async get_system_directory(INPUT) {
    let system_directory = new abap.types.String({qualifiedName: "STRING"});
    if (INPUT && INPUT.system_directory) {system_directory = INPUT.system_directory;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(34).set('get_system_directory not supported')));
  }
  async get_gui_version(INPUT) {
    return cl_gui_frontend_services.get_gui_version(INPUT);
  }
  static async get_gui_version(INPUT) {
    let version_table = new abap.types.Table(new abap.types.Structure({"filename": new abap.types.Character(1024, {})}, "FILE_TABLE"), {"withHeader":false}, "FILETABLE");
    if (INPUT && INPUT.version_table) {version_table = INPUT.version_table;}
    let rc = new abap.types.Integer({qualifiedName: "I"});
    if (INPUT && INPUT.rc) {rc = INPUT.rc;}
    abap.statements.assert(abap.compare.eq(new abap.types.Integer().set(1), new abap.types.Character(29).set('get_gui_verison not supported')));
  }
}
abap.Classes['CL_GUI_FRONTEND_SERVICES'] = cl_gui_frontend_services;
cl_gui_frontend_services.filetype_all = new abap.types.String({qualifiedName: "STRING"});
cl_gui_frontend_services.filetype_all.set('abc');
cl_gui_frontend_services.action_cancel = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.action_cancel.set(1);
cl_gui_frontend_services.action_ok = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.action_ok.set(1);
cl_gui_frontend_services.platform_nt351 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt351.set(1);
cl_gui_frontend_services.platform_nt40 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt40.set(2);
cl_gui_frontend_services.platform_nt50 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_nt50.set(3);
cl_gui_frontend_services.platform_windows95 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windows95.set(4);
cl_gui_frontend_services.platform_windows98 = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windows98.set(5);
cl_gui_frontend_services.platform_windowsxp = new abap.types.Integer({qualifiedName: "I"});
cl_gui_frontend_services.platform_windowsxp.set(6);
export {cl_gui_frontend_services};
//# sourceMappingURL=cl_gui_frontend_services.clas.mjs.map