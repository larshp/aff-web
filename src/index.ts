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
import {ABAP} from "@abaplint/runtime";
import * as abaplint from "@abaplint/core";
import * as abapMonaco from "@abaplint/monaco";
import Split from "split-grid";
import * as init from "../output_abap/_init.mjs";
console.dir(init);
//initializeABAP().then(() => console.dir("initialized"));

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
reg.addFile(new abaplint.MemoryFile(filename, ""));


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

/*
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
*/
// see https://github.com/SimulatedGREG/electron-vue/issues/777
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
//const AsyncFunction = new Function(`return Object.getPrototypeOf(async function(){}).constructor`)();

async function jsChanged() {
/*
  const makeGlobal = "abap = abapLocal;\n";
  const js = makeGlobal + editor2.getValue();
  try {
    abap.console.clear();
    try {
      const f = new AsyncFunction("abapLocal", js);
      await f(abap);
    } catch(e) {
      // write all errors to runtime result
      editor2.setValue("An error was thrown: " + e.toString());
    }
  } catch (error) {
    editor2.setValue(error.message);
    console.dir(error);
  }
  */
}

async function abapChanged() {
  /*
  try {
    const contents = editor1.getValue();
    const file = new abaplint.MemoryFile(filename, contents);
    reg.updateFile(file);
    reg.parse();
    abapMonaco.updateMarkers(reg, model1);

    const res = await new Transpiler().runRaw([{filename, contents}]);
    editor2.setValue(res.objects[0].chunk.getCode() || "");
  } catch (error) {
    editor2.setValue(error.message);
    console.dir(error);
  }
  */
}

editor1.onDidChangeModelContent(abapChanged);
abapChanged();
editor1.focus();
const abap = new ABAP();
