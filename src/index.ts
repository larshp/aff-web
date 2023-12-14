// @ts-ignore
global.MonacoEnvironment = {
  globalAPI: true,
  getWorkerUrl: function (_moduleId: any, label: any) {
    if (label === "json") {
      return "./json.worker.bundle.js";
    }
    if (label === "typescript" || label === "javascript") {
      return "./ts.worker.bundle.js";
    }
    return "./editor.worker.bundle.js";
  },
};

import "./index.css";
import * as monaco from "monaco-editor";
import * as abaplint from "@abaplint/core";
import * as abapMonaco from "@abaplint/monaco";
import Split from "split-grid";
import * as init from "../output_abap/_init.mjs";
import initSqlJs from "sql.js";

initSqlJs().then(() => {
  console.dir("sql inited");
  init.then((j) => j.initializeABAP().then(() => {
    console.dir("abap initialized");
    abapChanged();
  }));
});

const reg = new abaplint.Registry();
abapMonaco.registerABAP(reg);

const filename = "file:///zif_aff_intf_v1.intf.abap";
const model1 = monaco.editor.createModel(
  `INTERFACE zif_aff_intf_v1 PUBLIC.

  "! <p class="shorttext">Interface Category</p>
  "! Interface category
  "! $values {@link zif_aff_intf_v1.data:co_category}
  TYPES ty_category TYPE n LENGTH 2.

  CONSTANTS:
    "! <p class="shorttext">Interface Category</p>
    "! Interface category
    BEGIN OF co_category,
      "! <p class="shorttext">General</p>
      "! General interface
      general                      TYPE ty_category VALUE '00',
      "! <p class="shorttext">Classic BAdI</p>
      "! Interface definition of a classic BAdI
      classic_badi                 TYPE ty_category VALUE '01',
      "! <p class="shorttext">Business (Static Components)</p>
      "! Business interface for static components
      business_static_components   TYPE ty_category VALUE '51',
      "! <p class="shorttext">Business (Instance-dep. components)</p>
      "! Business interface for instance-dependent components
      business_instance_components TYPE ty_category VALUE '52',
      "! <p class="shorttext">DB Procedure Proxy</p>
      "! Generated interface of a database procedure proxy
      db_procedure_proxy           TYPE ty_category VALUE '65',
      "! <p class="shorttext">Web Dynpro Runtime</p>
      "! Web Dynpro runtime interface
      web_dynpro_runtime           TYPE ty_category VALUE '80',
      "! <p class="shorttext">Enterprise Services</p>
      "! Generated interface of enterprise services
      enterprise_service           TYPE ty_category VALUE '90',
    END OF co_category.

  TYPES:
    "! <p class="shorttext">Interface Properties</p>
    "! Interface properties
    BEGIN OF ty_main,
      "! $required
      format_version TYPE zif_aff_types_v1=>ty_format_version,
      "! <p class="shorttext">Header</p>
      "! Header
      "! $required
      header         TYPE zif_aff_types_v1=>ty_header_60_src,
      "! <p class="shorttext">Interface Category</p>
      "! Interface category
      category       TYPE ty_category,
      "! <p class="shorttext">Proxy Interface</p>
      "! Interface is a proxy interface
      proxy          TYPE abap_bool,
      "! <p class="shorttext">Descriptions</p>
      "! Descriptions maintained in SE80
      descriptions   TYPE zif_aff_oo_types_v1=>ty_descriptions,
    END OF ty_main.

ENDINTERFACE.`,
  "abap",
  monaco.Uri.parse(filename),
);
reg.addFile(new abaplint.MemoryFile(filename, model1.getValue() ));


Split({
  columnGutters: [{
      track: 1,
      element: document.querySelector('.gutter-col-1'),
  }],
})

const editor1 = monaco.editor.create(document.getElementById("container1"), {
  model: model1,
  theme: "vs-dark",
  minimap: {
    enabled: false,
  },
});

const editor2 = monaco.editor.create(document.getElementById("container2"), {
  value: `{"json": 1}`,
  theme: "vs-dark",
  minimap: {
    enabled: false,
  },
  language: "json",
});

function updateEditorLayouts() {
  editor1.layout();
  editor2.layout();
}

const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    if (mutation.attributeName === "style") {
      updateEditorLayouts();
    }
  }
});

observer.observe(document.getElementById("horizon"), {
  attributes: true,
  attributeFilter: [
    "style",
  ],
});

window.addEventListener("resize", updateEditorLayouts);

function escape(value: string): string {
  let ret = value.replace(/\'/g, "''");
  // statements are inside a javascript string stemplate
  ret = ret.replace(/\\/g, "\\\\");
  ret = ret.replace(/`/g, "\\`");
  ret = ret.replace(/\${/g, "\\${");
  return ret;
}

async function abapChanged() {
  console.dir("ABAP changed");
  const contents = editor1.getValue();

  // @ts-ignore
  console.dir(abap.Classes["ZCL_AFF_ABAP_DOC_READER"].cache);
  // @ts-ignore
  abap.Classes["ZCL_AFF_ABAP_DOC_READER"].cache.value = [];

  // @ts-ignore
  await abap.context.databaseConnections["DEFAULT"].execute(`UPDATE reposrc SET data = '${escape(contents)}' WHERE progname = 'ZIF_AFF_INTF_V1'`);
  console.dir("database updated changed");

  try {
    // @ts-ignore
    const result = await abap.Classes["CL_RUN"].run({object_type: new abap.types.String().set("INTF")});
    editor2.setValue(result.get() || "");
  } catch (error) {
    editor2.setValue(error.message);
    console.dir(error);
  }
}

editor1.onDidChangeModelContent(abapChanged);
editor1.focus();
