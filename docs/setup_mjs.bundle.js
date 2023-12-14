"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkaff_web"] = self["webpackChunkaff_web"] || []).push([["setup_mjs"],{

/***/ "./node_modules/@abaplint/database-sqlite/build/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@abaplint/database-sqlite/build/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SQLiteDatabaseClient = void 0;\r\nconst sql_js_1 = __webpack_require__(/*! sql.js */ \"./node_modules/sql.js/dist/sql-wasm.js\");\r\nclass SQLiteDatabaseClient {\r\n    constructor() {\r\n        this.name = \"sqlite\";\r\n        this.sqlite = undefined;\r\n    }\r\n    async connect() {\r\n        const SQL = await (0, sql_js_1.default)();\r\n        this.sqlite = new SQL.Database();\r\n    }\r\n    async disconnect() {\r\n        this.sqlite.close();\r\n        this.sqlite = undefined;\r\n    }\r\n    async execute(sql) {\r\n        if (typeof sql === \"string\") {\r\n            if (sql === \"\") {\r\n                return;\r\n            }\r\n            this.sqlite.run(sql);\r\n        }\r\n        else {\r\n            for (const s of sql) {\r\n                await this.execute(s);\r\n            }\r\n        }\r\n    }\r\n    async beginTransaction() {\r\n        return; // todo\r\n    }\r\n    async commit() {\r\n        return; // todo\r\n    }\r\n    async rollback() {\r\n        return; // todo\r\n    }\r\n    async delete(options) {\r\n        const sql = `DELETE FROM ${options.table} WHERE ${options.where}`;\r\n        let subrc = 0;\r\n        let dbcnt = 0;\r\n        try {\r\n            this.sqlite.exec(sql);\r\n            // https://www.sqlite.org/c3ref/changes.html\r\n            const chg = this.sqlite.exec(\"SELECT changes()\");\r\n            dbcnt = chg[0][\"values\"][0][0];\r\n            if (dbcnt === 0) {\r\n                subrc = 4;\r\n            }\r\n        }\r\n        catch (error) {\r\n            subrc = 4;\r\n        }\r\n        return { subrc, dbcnt };\r\n    }\r\n    async update(options) {\r\n        const sql = `UPDATE ${options.table} SET ${options.set.join(\", \")} WHERE ${options.where}`;\r\n        let subrc = 0;\r\n        let dbcnt = 0;\r\n        try {\r\n            const res = this.sqlite.exec(sql);\r\n            dbcnt = res.length;\r\n        }\r\n        catch (error) {\r\n            subrc = 4;\r\n        }\r\n        return { subrc, dbcnt };\r\n    }\r\n    async insert(options) {\r\n        const sql = `INSERT INTO ${options.table} (${options.columns.join(\",\")}) VALUES (${options.values.join(\",\")})`;\r\n        let subrc = 0;\r\n        let dbcnt = 0;\r\n        try {\r\n            const res = this.sqlite.exec(sql);\r\n            dbcnt = res.length;\r\n        }\r\n        catch (error) {\r\n            // eg \"UNIQUE constraint failed\" errors\r\n            subrc = 4;\r\n        }\r\n        return { subrc, dbcnt };\r\n    }\r\n    // // https://www.sqlite.org/lang_select.html\r\n    async select(options) {\r\n        let res = undefined;\r\n        try {\r\n            options.select = options.select.replace(/ UP TO (\\d+) ROWS(.*)/i, \"$2 LIMIT $1\");\r\n            // workaround to escape namespaces, this will need more work\r\n            options.select = options.select.replace(/ FROM (\\/\\w+\\/\\w+)/i, \" FROM '$1' \");\r\n            if (options.primaryKey) {\r\n                options.select = options.select.replace(/ ORDER BY PRIMARY KEY/i, \" ORDER BY \" + options.primaryKey.join(\", \"));\r\n            }\r\n            else {\r\n                options.select = options.select.replace(/ ORDER BY PRIMARY KEY/i, \"\");\r\n            }\r\n            options.select = options.select.replace(/~/g, \".\");\r\n            //      console.dir(options.select);\r\n            res = this.sqlite.exec(options.select);\r\n        }\r\n        catch (error) {\r\n            // @ts-ignore\r\n            if (abap.Classes[\"CX_SY_DYNAMIC_OSQL_SEMANTICS\"] !== undefined) {\r\n                // @ts-ignore\r\n                throw await new abap.Classes[\"CX_SY_DYNAMIC_OSQL_SEMANTICS\"]().constructor_({ sqlmsg: error.message || \"\" });\r\n            }\r\n            throw error;\r\n        }\r\n        const rows = this.convert(res);\r\n        return { rows: rows };\r\n    }\r\n    convert(res) {\r\n        if (res === undefined || res.length === 0) {\r\n            return [];\r\n        }\r\n        const rows = [];\r\n        for (const sqliteRow of res[0].values) {\r\n            const row = {};\r\n            let i = 0;\r\n            for (const columnName of res[0].columns) {\r\n                row[columnName] = sqliteRow[i];\r\n                i++;\r\n            }\r\n            rows.push(row);\r\n        }\r\n        return rows;\r\n    }\r\n}\r\nexports.SQLiteDatabaseClient = SQLiteDatabaseClient;\r\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://aff-web/./node_modules/@abaplint/database-sqlite/build/index.js?");

/***/ }),

/***/ "./setup.mjs":
/*!*******************!*\
  !*** ./setup.mjs ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setup\": () => (/* binding */ setup)\n/* harmony export */ });\n/* harmony import */ var _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @abaplint/database-sqlite */ \"./node_modules/@abaplint/database-sqlite/build/index.js\");\n\r\n\r\nasync function setup(abap, schemas, insert) {\r\n  abap.context.databaseConnections[\"DEFAULT\"] = new _abaplint_database_sqlite__WEBPACK_IMPORTED_MODULE_0__.SQLiteDatabaseClient();\r\n  await abap.context.databaseConnections[\"DEFAULT\"].connect();\r\n  await abap.context.databaseConnections[\"DEFAULT\"].execute(schemas.sqlite);\r\n  await abap.context.databaseConnections[\"DEFAULT\"].execute(insert);\r\n}\r\n\n\n//# sourceURL=webpack://aff-web/./setup.mjs?");

/***/ })

}]);