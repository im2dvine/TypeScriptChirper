/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirpstore_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './utils/chirpstore'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar router = express.Router();\nrouter.get('/:id?', function (req, res) {\n    var id = req.params.id;\n    if (id) {\n        res.json(chirpstore_1.GetChirp(id));\n    }\n    else {\n        var chirps_1 = chirpstore_1.GetChirps();\n        var chirpArr_1 = [];\n        Object.keys(chirps_1).map(function (key) { return chirpArr_1.push({\n            id: key,\n            name: chirps_1[key].name,\n            message: chirps_1[key].message\n        }); });\n        chirpArr_1.pop(); // eliminate nextid property \n        res.json(chirpArr_1);\n    }\n});\nrouter.post('/', function (req, res) {\n    var chirpObj = req.body;\n    chirpstore_1.CreateChirp(chirpObj);\n    res.send(\"success\");\n});\n//mandatory id param to tell the server which chirp to update\nrouter.put('/:id', function (req, res) {\n    var id = req.params.id;\n    var chirpObj = req.body;\n    chirpstore_1.UpdateChirp(id, chirpObj);\n    res.send(\"edited successfully\");\n});\nrouter.delete('/:id', function (req, res) {\n    var id = req.params.id;\n    chirpstore_1.DeleteChirp(id);\n    res.send(\"deleted successfully\");\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\nvar router = express.Router();\n//app.use will not work - throws \"cannot GET error\"\nrouter.use('/chirps', chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n// //require express to run our server/send data\n// //------similar to imports in React\n// import * as express from 'express';\n// import apiRouter from \"./routes\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// const app = express();\n// // parses incoming requests to json\n// app.use(express.json());\n// //since server.ts is entry point, this line tells the computer\n// //that we want to use functionality in the \"index.js\" of the routes\n// //folder when user goes to 'localhost:3000/api'\n// app.use('/api', apiRouter);\n// app.listen(3000, () => console.log('App listening on port 3000'));\n/*****/\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\napp.use(\"/api\", routes_1.default);\napp.use(express.static(\"public\"));\napp.use(\"*\", function (req, res) { return res.sendFile(path.join(__dirname, \"../public/index.html\")); });\napp.listen(3000);\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;