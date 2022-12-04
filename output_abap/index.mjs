/* eslint-disable curly */
import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import {initializeABAP} from "./init.mjs";
import runtime from "@abaplint/runtime";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  await initializeABAP();
  const unit = new runtime.UnitTestResult();
  let clas;
  let locl;
  let meth;
  try {
// --------------------------------------------
    clas = unit.addObject("CL_O2_API_XSLTDESC");
// --------------------------------------------
    clas = unit.addObject("CL_OO_CLASSNAME_SERVICE");
// --------------------------------------------
    clas = unit.addObject("CL_RUN");
// --------------------------------------------
    clas = unit.addObject("CX_O2_XSLT_ERROR");
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_ABAP_DOC_PARSER");
    {
      const {ltcl_aff_abap_doc_parser} = await import("./zcl_aff_abap_doc_parser.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_aff_abap_doc_parser");
      if (ltcl_aff_abap_doc_parser.class_setup) await ltcl_aff_abap_doc_parser.class_setup();
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->title_and_description");
        meth = locl.addMethod("title_and_description");
        await test.title_and_description();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->default_minimum");
        meth = locl.addMethod("default_minimum");
        await test.default_minimum();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->required_max_exclmin");
        meth = locl.addMethod("required_max_exclmin");
        await test.required_max_exclmin();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->showalways_exclmax_multipleof");
        meth = locl.addMethod("showalways_exclmax_multipleof");
        await test.showalways_exclmax_multipleof();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->enum_values");
        meth = locl.addMethod("enum_values");
        await test.enum_values();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->callback_class");
        meth = locl.addMethod("callback_class");
        await test.callback_class();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->default_with_link");
        meth = locl.addMethod("default_with_link");
        await test.default_with_link();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_titles_and_showalways");
        meth = locl.addMethod("too_many_titles_and_showalways");
        await test.too_many_titles_and_showalways();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_number_annotations");
        meth = locl.addMethod("too_many_number_annotations");
        await test.too_many_number_annotations();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_default_mixed");
        meth = locl.addMethod("too_many_default_mixed");
        await test.too_many_default_mixed();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_default_link");
        meth = locl.addMethod("too_many_default_link");
        await test.too_many_default_link();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_default_value");
        meth = locl.addMethod("too_many_default_value");
        await test.too_many_default_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_value_links");
        meth = locl.addMethod("too_many_value_links");
        await test.too_many_value_links();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_callbackclasses");
        meth = locl.addMethod("too_many_callbackclasses");
        await test.too_many_callbackclasses();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_required_annotations");
        meth = locl.addMethod("too_many_required_annotations");
        await test.too_many_required_annotations();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->unknown_annotation");
        meth = locl.addMethod("unknown_annotation");
        await test.unknown_annotation();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->wrong_usage_callback_class");
        meth = locl.addMethod("wrong_usage_callback_class");
        await test.wrong_usage_callback_class();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->wrong_usage_default");
        meth = locl.addMethod("wrong_usage_default");
        await test.wrong_usage_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->wrong_usage_enum_values");
        meth = locl.addMethod("wrong_usage_enum_values");
        await test.wrong_usage_enum_values();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->wrong_value_number_annotation");
        meth = locl.addMethod("wrong_value_number_annotation");
        await test.wrong_value_number_annotation();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->wrong_links");
        meth = locl.addMethod("wrong_links");
        await test.wrong_links();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->description_at_false_position");
        meth = locl.addMethod("description_at_false_position");
        await test.description_at_false_position();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->text_between_annotations");
        meth = locl.addMethod("text_between_annotations");
        await test.text_between_annotations();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->title_at_wrong_position");
        meth = locl.addMethod("title_at_wrong_position");
        await test.title_at_wrong_position();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->overwriting_enum_value");
        meth = locl.addMethod("overwriting_enum_value");
        await test.overwriting_enum_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_aff_abap_doc_parser()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_PARSER: running ltcl_aff_abap_doc_parser->too_many_enum_values");
        meth = locl.addMethod("too_many_enum_values");
        await test.too_many_enum_values();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_aff_abap_doc_parser.class_teardown) await ltcl_aff_abap_doc_parser.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_ABAP_DOC_READER");
    {
      const {ltcl_abap_doc_reader} = await import("./zcl_aff_abap_doc_reader.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_abap_doc_reader");
      if (ltcl_abap_doc_reader.class_setup) await ltcl_abap_doc_reader.class_setup();
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_abap_doc_4_element_types");
        meth = locl.addMethod("get_abap_doc_4_element_types");
        await test.get_abap_doc_4_element_types();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_abap_doc_4_element_data");
        meth = locl.addMethod("get_abap_doc_4_element_data");
        await test.get_abap_doc_4_element_data();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_abap_doc_4_sub_elem_types");
        meth = locl.addMethod("get_abap_doc_4_sub_elem_types");
        await test.get_abap_doc_4_sub_elem_types();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_abap_doc_4_wrong_elem_name");
        meth = locl.addMethod("get_abap_doc_4_wrong_elem_name");
        await test.get_abap_doc_4_wrong_elem_name();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_abap_doc_4_elem_wo_adoc");
        meth = locl.addMethod("get_abap_doc_4_elem_wo_adoc");
        await test.get_abap_doc_4_elem_wo_adoc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_simple");
        meth = locl.addMethod("get_simple");
        await test.get_simple();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_structure");
        meth = locl.addMethod("get_structure");
        await test.get_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->get_structure_types");
        meth = locl.addMethod("get_structure_types");
        await test.get_structure_types();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_abap_doc_reader()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_ABAP_DOC_READER: running ltcl_abap_doc_reader->structure_and_fields");
        meth = locl.addMethod("structure_and_fields");
        await test.structure_and_fields();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_abap_doc_reader.class_teardown) await ltcl_abap_doc_reader.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_GENERATOR");
    {
      const {ltcl_unit_test_writer} = await import("./zcl_aff_generator.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_unit_test_writer");
      if (ltcl_unit_test_writer.class_setup) await ltcl_unit_test_writer.class_setup();
      if (ltcl_unit_test_writer.class_teardown) await ltcl_unit_test_writer.class_teardown();
    }
    {
      const {ltcl_type_generator} = await import("./zcl_aff_generator.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_type_generator");
      if (ltcl_type_generator.class_setup) await ltcl_type_generator.class_setup();
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->element");
        meth = locl.addMethod("element");
        await test.element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->structure");
        meth = locl.addMethod("structure");
        await test.structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->include");
        meth = locl.addMethod("include");
        await test.include();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->table_build_in_type");
        meth = locl.addMethod("table_build_in_type");
        await test.table_build_in_type();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->include_in_include");
        meth = locl.addMethod("include_in_include");
        await test.include_in_include();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->structure_in_structure");
        meth = locl.addMethod("structure_in_structure");
        await test.structure_in_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->table_structure");
        meth = locl.addMethod("table_structure");
        await test.table_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->structure_with_table");
        meth = locl.addMethod("structure_with_table");
        await test.structure_with_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->include_table");
        meth = locl.addMethod("include_table");
        await test.include_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->table_in_table");
        meth = locl.addMethod("table_in_table");
        await test.table_in_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->struc_tab_struc_tab");
        meth = locl.addMethod("struc_tab_struc_tab");
        await test.struc_tab_struc_tab();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->unsupported_type");
        meth = locl.addMethod("unsupported_type");
        await test.unsupported_type();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->complex_structure_aff_class");
        meth = locl.addMethod("complex_structure_aff_class");
        await test.complex_structure_aff_class();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->mandatory_fields");
        meth = locl.addMethod("mandatory_fields");
        await test.mandatory_fields();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->no_header");
        meth = locl.addMethod("no_header");
        await test.no_header();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->no_format_version");
        meth = locl.addMethod("no_format_version");
        await test.no_format_version();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_generator()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_GENERATOR: running ltcl_type_generator->no_structure");
        meth = locl.addMethod("no_structure");
        await test.no_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_type_generator.class_teardown) await ltcl_type_generator.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_LOG");
    {
      const {ltcl_log_unit_test} = await import("./zcl_aff_log.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_log_unit_test");
      if (ltcl_log_unit_test.class_setup) await ltcl_log_unit_test.class_setup();
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_info");
        meth = locl.addMethod("add_info");
        await test.add_info();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_warning");
        meth = locl.addMethod("add_warning");
        await test.add_warning();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_error");
        meth = locl.addMethod("add_error");
        await test.add_error();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_exception");
        meth = locl.addMethod("add_exception");
        await test.add_exception();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->joins_log");
        meth = locl.addMethod("joins_log");
        await test.joins_log();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->clears_log");
        meth = locl.addMethod("clears_log");
        await test.clears_log();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->get_max_severity");
        meth = locl.addMethod("get_max_severity");
        await test.get_max_severity();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->has_messages");
        meth = locl.addMethod("has_messages");
        await test.has_messages();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->two_messages_for_one_object");
        meth = locl.addMethod("two_messages_for_one_object");
        await test.two_messages_for_one_object();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_catched_exception");
        meth = locl.addMethod("add_catched_exception");
        await test.add_catched_exception();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_classic_exception");
        meth = locl.addMethod("add_classic_exception");
        await test.add_classic_exception();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->add_exception_as_info");
        meth = locl.addMethod("add_exception_as_info");
        await test.add_exception_as_info();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_log_unit_test()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_LOG: running ltcl_log_unit_test->get_message_text");
        meth = locl.addMethod("get_message_text");
        await test.get_message_text();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_log_unit_test.class_teardown) await ltcl_log_unit_test.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_TEST_TYPES");
    {
      const {ltcl_sanity} = await import("./zcl_aff_test_types.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_sanity");
      if (ltcl_sanity.class_setup) await ltcl_sanity.class_setup();
      {
        const test = await (new ltcl_sanity()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_TEST_TYPES: running ltcl_sanity->test1");
        meth = locl.addMethod("test1");
        await test.test1();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_sanity.class_teardown) await ltcl_sanity.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_TOOLS_UNIT_TEST_HELPER");
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_WRITER");
    {
      const {ltcl_writer_testable} = await import("./zcl_aff_writer.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_writer_testable");
      if (ltcl_writer_testable.class_setup) await ltcl_writer_testable.class_setup();
      if (ltcl_writer_testable.class_teardown) await ltcl_writer_testable.class_teardown();
    }
    {
      const {ltcl_type_writer} = await import("./zcl_aff_writer.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_type_writer");
      if (ltcl_type_writer.class_setup) await ltcl_type_writer.class_setup();
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->camel_case");
        meth = locl.addMethod("camel_case");
        await test.camel_case();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_output");
        meth = locl.addMethod("get_output");
        await test.get_output();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_string_like");
        meth = locl.addMethod("get_type_info_string_like");
        await test.get_type_info_string_like();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_string_like_enum");
        meth = locl.addMethod("get_type_info_string_like_enum");
        await test.get_type_info_string_like_enum();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_boolean1");
        meth = locl.addMethod("get_type_info_boolean1");
        await test.get_type_info_boolean1();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_boolean2");
        meth = locl.addMethod("get_type_info_boolean2");
        await test.get_type_info_boolean2();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_boolean3");
        meth = locl.addMethod("get_type_info_boolean3");
        await test.get_type_info_boolean3();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_numeric");
        meth = locl.addMethod("get_type_info_numeric");
        await test.get_type_info_numeric();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_type_info_date_time");
        meth = locl.addMethod("get_type_info_date_time");
        await test.get_type_info_date_time();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->stack_stores_operations");
        meth = locl.addMethod("stack_stores_operations");
        await test.stack_stores_operations();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->append_to_previous_line");
        meth = locl.addMethod("append_to_previous_line");
        await test.append_to_previous_line();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode1");
        meth = locl.addMethod("call_reader_and_decode1");
        await test.call_reader_and_decode1();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode2");
        meth = locl.addMethod("call_reader_and_decode2");
        await test.call_reader_and_decode2();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode3");
        meth = locl.addMethod("call_reader_and_decode3");
        await test.call_reader_and_decode3();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode4");
        meth = locl.addMethod("call_reader_and_decode4");
        await test.call_reader_and_decode4();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode5");
        meth = locl.addMethod("call_reader_and_decode5");
        await test.call_reader_and_decode5();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode6");
        meth = locl.addMethod("call_reader_and_decode6");
        await test.call_reader_and_decode6();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->call_reader_and_decode7");
        meth = locl.addMethod("call_reader_and_decode7");
        await test.call_reader_and_decode7();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->delete_first_of_struc_stack");
        meth = locl.addMethod("delete_first_of_struc_stack");
        await test.delete_first_of_struc_stack();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_all_path_information");
        meth = locl.addMethod("get_all_path_information");
        await test.get_all_path_information();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_abap_doc_for_absolute_name");
        meth = locl.addMethod("get_abap_doc_for_absolute_name");
        await test.get_abap_doc_for_absolute_name();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->compare_abap_doc");
        meth = locl.addMethod("compare_abap_doc");
        await test.compare_abap_doc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->callback_class_is_valid");
        meth = locl.addMethod("callback_class_is_valid");
        await test.callback_class_is_valid();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->callback_class_is_invalid");
        meth = locl.addMethod("callback_class_is_invalid");
        await test.callback_class_is_invalid();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->validate_default");
        meth = locl.addMethod("validate_default");
        await test.validate_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->validate_source");
        meth = locl.addMethod("validate_source");
        await test.validate_source();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->get_struc_of_enum_values_cl");
        meth = locl.addMethod("get_struc_of_enum_values_cl");
        await test.get_struc_of_enum_values_cl();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_type_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER: running ltcl_type_writer->handle_include");
        meth = locl.addMethod("handle_include");
        await test.handle_include();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_type_writer.class_teardown) await ltcl_type_writer.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_WRITER_JSON_SCHEMA");
    {
      const {ltcl_json_writer} = await import("./zcl_aff_writer_json_schema.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_json_writer");
      if (ltcl_json_writer.class_setup) await ltcl_json_writer.class_setup();
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->use_ddic_info_for_element");
        meth = locl.addMethod("use_ddic_info_for_element");
        await test.use_ddic_info_for_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->date_time_element");
        meth = locl.addMethod("date_time_element");
        await test.date_time_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->structure_in_table");
        meth = locl.addMethod("structure_in_table");
        await test.structure_in_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->nested_table");
        meth = locl.addMethod("nested_table");
        await test.nested_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->use_ddic_info_for_max_length");
        meth = locl.addMethod("use_ddic_info_for_max_length");
        await test.use_ddic_info_for_max_length();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->max_length");
        meth = locl.addMethod("max_length");
        await test.max_length();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->number_max_value");
        meth = locl.addMethod("number_max_value");
        await test.number_max_value();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->enum_element");
        meth = locl.addMethod("enum_element");
        await test.enum_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->date_time_from_abap_to_json");
        meth = locl.addMethod("date_time_from_abap_to_json");
        await test.date_time_from_abap_to_json();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->validate_invalid_json_schema");
        meth = locl.addMethod("validate_invalid_json_schema");
        await test.validate_invalid_json_schema();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->validate_valid_json_schema");
        meth = locl.addMethod("validate_valid_json_schema");
        await test.validate_valid_json_schema();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer->nested_boolean");
        meth = locl.addMethod("nested_boolean");
        await test.nested_boolean();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_json_writer.class_teardown) await ltcl_json_writer.class_teardown();
    }
    {
      const {ltcl_json_writer_abap_doc} = await import("./zcl_aff_writer_json_schema.clas.testclasses.mjs");
      locl = clas.addTestClass("ltcl_json_writer_abap_doc");
      if (ltcl_json_writer_abap_doc.class_setup) await ltcl_json_writer_abap_doc.class_setup();
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_different_enum");
        meth = locl.addMethod("structure_with_different_enum");
        await test.structure_with_different_enum();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->standard_table");
        meth = locl.addMethod("standard_table");
        await test.standard_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->nested_structure");
        meth = locl.addMethod("nested_structure");
        await test.nested_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->simple_structure");
        meth = locl.addMethod("simple_structure");
        await test.simple_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->simple_structure_single_field");
        meth = locl.addMethod("simple_structure_single_field");
        await test.simple_structure_single_field();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->simple_structure_two_fields");
        meth = locl.addMethod("simple_structure_two_fields");
        await test.simple_structure_two_fields();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->string_element");
        meth = locl.addMethod("string_element");
        await test.string_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->simple_structure_dollar");
        meth = locl.addMethod("simple_structure_dollar");
        await test.simple_structure_dollar();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->complex_type_with_enum");
        meth = locl.addMethod("complex_type_with_enum");
        await test.complex_type_with_enum();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->number_element");
        meth = locl.addMethod("number_element");
        await test.number_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->date_time_element");
        meth = locl.addMethod("date_time_element");
        await test.date_time_element();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->nested_nested_structure");
        meth = locl.addMethod("nested_nested_structure");
        await test.nested_nested_structure();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->table_in_nested_stru_with_ad");
        meth = locl.addMethod("table_in_nested_stru_with_ad");
        await test.table_in_nested_stru_with_ad();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->nestes_table_with_ad");
        meth = locl.addMethod("nestes_table_with_ad");
        await test.nestes_table_with_ad();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->format_version");
        meth = locl.addMethod("format_version");
        await test.format_version();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_table");
        meth = locl.addMethod("structure_with_table");
        await test.structure_with_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->numerical_text_field");
        meth = locl.addMethod("numerical_text_field");
        await test.numerical_text_field();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_numbers");
        meth = locl.addMethod("structure_with_numbers");
        await test.structure_with_numbers();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_different_default");
        meth = locl.addMethod("structure_different_default");
        await test.structure_different_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->nested_struc_with_default");
        meth = locl.addMethod("nested_struc_with_default");
        await test.nested_struc_with_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->simple_table_with_callbackclas");
        meth = locl.addMethod("simple_table_with_callbackclas");
        await test.simple_table_with_callbackclas();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->struct_with_table_callback");
        meth = locl.addMethod("struct_with_table_callback");
        await test.struct_with_table_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->element_with_callbackclas");
        meth = locl.addMethod("element_with_callbackclas");
        await test.element_with_callbackclas();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->element_in_structure_callback");
        meth = locl.addMethod("element_in_structure_callback");
        await test.element_in_structure_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->table_of_struc_with_callback");
        meth = locl.addMethod("table_of_struc_with_callback");
        await test.table_of_struc_with_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->table_with_call_of_struc");
        meth = locl.addMethod("table_with_call_of_struc");
        await test.table_with_call_of_struc();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->nested_table_with_callback");
        meth = locl.addMethod("nested_table_with_callback");
        await test.nested_table_with_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->struc_with_struc_callback");
        meth = locl.addMethod("struc_with_struc_callback");
        await test.struc_with_struc_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_wrong_enum_link");
        meth = locl.addMethod("structure_with_wrong_enum_link");
        await test.structure_with_wrong_enum_link();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_wrong_default");
        meth = locl.addMethod("structure_with_wrong_default");
        await test.structure_with_wrong_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_wrong_callback");
        meth = locl.addMethod("structure_with_wrong_callback");
        await test.structure_with_wrong_callback();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->hashed_table");
        meth = locl.addMethod("hashed_table");
        await test.hashed_table();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_tables");
        meth = locl.addMethod("structure_with_tables");
        await test.structure_with_tables();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_no_title_descr");
        meth = locl.addMethod("structure_no_title_descr");
        await test.structure_no_title_descr();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->element_no_title_descr");
        meth = locl.addMethod("element_no_title_descr");
        await test.element_no_title_descr();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->table_no_title_descr");
        meth = locl.addMethod("table_no_title_descr");
        await test.table_no_title_descr();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->title_and_desc_escaped");
        meth = locl.addMethod("title_and_desc_escaped");
        await test.title_and_desc_escaped();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->number_element_default");
        meth = locl.addMethod("number_element_default");
        await test.number_element_default();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->unknown_annotation");
        meth = locl.addMethod("unknown_annotation");
        await test.unknown_annotation();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->unknown_abap_doc_tag");
        meth = locl.addMethod("unknown_abap_doc_tag");
        await test.unknown_abap_doc_tag();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->type_of_enumtype_and_co_differ");
        meth = locl.addMethod("type_of_enumtype_and_co_differ");
        await test.type_of_enumtype_and_co_differ();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_include");
        meth = locl.addMethod("structure_with_include");
        await test.structure_with_include();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->description_too_long");
        meth = locl.addMethod("description_too_long");
        await test.description_too_long();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->structure_with_default_problem");
        meth = locl.addMethod("structure_with_default_problem");
        await test.structure_with_default_problem();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->get_extrema_integer");
        meth = locl.addMethod("get_extrema_integer");
        await test.get_extrema_integer();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->get_extrema_decfloat16");
        meth = locl.addMethod("get_extrema_decfloat16");
        await test.get_extrema_decfloat16();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->get_extrema_ftype");
        meth = locl.addMethod("get_extrema_ftype");
        await test.get_extrema_ftype();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->get_extrema_packed");
        meth = locl.addMethod("get_extrema_packed");
        await test.get_extrema_packed();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->get_extrema_integer1");
        meth = locl.addMethod("get_extrema_integer1");
        await test.get_extrema_integer1();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->calculate_max_length");
        meth = locl.addMethod("calculate_max_length");
        await test.calculate_max_length();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->original_description");
        meth = locl.addMethod("original_description");
        await test.original_description();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      {
        const test = await (new ltcl_json_writer_abap_doc()).constructor_();
        if (test.setup) await test.setup();
        console.log("ZCL_AFF_WRITER_JSON_SCHEMA: running ltcl_json_writer_abap_doc->struc_with_own_enum_values");
        meth = locl.addMethod("struc_with_own_enum_values");
        await test.struc_with_own_enum_values();
        meth.pass();
        if (test.teardown) await test.teardown();
      }
      if (ltcl_json_writer_abap_doc.class_teardown) await ltcl_json_writer_abap_doc.class_teardown();
    }
// --------------------------------------------
    clas = unit.addObject("ZCL_AFF_WRITER_XSLT");
// --------------------------------------------
    clas = unit.addObject("ZCX_AFF_TOOLS");
// -------------------END-------------------
    console.log(abap.console.get());
    fs.writeFileSync(__dirname + path.sep + "_output.xml", unit.xUnitXML());
  } catch (e) {
    if (meth) {
      meth.fail();
    }
    console.log(abap.console.get());
    fs.writeFileSync(__dirname + path.sep + "_output.xml", unit.xUnitXML());
    throw e;
  }
}

run().then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});