/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirpstore_1 = __webpack_require__(/*! ../utils/chirpstore */ \"./src/server/utils/chirpstore.js\");\nvar router = express.Router();\nrouter.get('/:id?', function (req, res) {\n    var id = req.params.id;\n    if (id) {\n        res.json(chirpstore_1.GetChirp(id));\n    }\n    else {\n        var chirps_1 = chirpstore_1.GetChirps();\n        var chirpArr_1 = [];\n        Object.keys(chirps_1).map(function (key) { return chirpArr_1.push({\n            id: key,\n            name: chirps_1[key].name,\n            message: chirps_1[key].message\n        }); });\n        chirpArr_1.pop(); // eliminate nextid property \n        res.json(chirpArr_1);\n    }\n});\nrouter.post('/', function (req, res) {\n    var chirpObj = req.body;\n    chirpstore_1.CreateChirp(chirpObj);\n    res.send(\"success\");\n});\n//mandatory id param to tell the server which chirp to update\nrouter.put('/:id', function (req, res) {\n    var id = req.params.id;\n    var chirpObj = req.body;\n    chirpstore_1.UpdateChirp(id, chirpObj);\n    res.send(\"edited successfully\");\n});\nrouter.delete('/:id', function (req, res) {\n    var id = req.params.id;\n    chirpstore_1.DeleteChirp(id);\n    res.send(\"deleted successfully\");\n});\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\nvar router = express.Router();\n//app.use will not work - throws \"cannot GET error\"\nrouter.use('/chirps', chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n// //require express to run our server/send data\n// //------similar to imports in React\n// import * as express from 'express';\n// import apiRouter from \"./routes\";\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// const app = express();\n// // parses incoming requests to json\n// app.use(express.json());\n// //since server.ts is entry point, this line tells the computer\n// //that we want to use functionality in the \"index.js\" of the routes\n// //folder when user goes to 'localhost:3000/api'\n// app.use('/api', apiRouter);\n// app.listen(3000, () => console.log('App listening on port 3000'));\n/*****/\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.json());\n// app.use(express.urlencoded({ extended: true }));\napp.use(\"/api\", routes_1.default);\napp.use(express.static(\"public\"));\n// app.use(\"*\", (req, res) => res.sendFile(path.join(__dirname, \"../public/index.html\")))\napp.listen(3000);\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/chirpstore.js":
/*!****************************************!*\
  !*** ./src/server/utils/chirpstore.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\nlet chirps = { nextid: 0 };\n\nif(fs.existsSync('chirps.json')) {\n    chirps = JSON.parse(fs.readFileSync('chirps.json'));\n}\n\nlet getChirps = () => {\n    return Object.assign({}, chirps); //create a copy and return it\n}\n\nlet getChirp = id => {\n    return Object.assign({}, chirps[id]); //create a copy and return it\n}\n\nlet createChirp = (chirp) => {\n    chirps[chirps.nextid++] = chirp;\n    writeChirps();\n};\n\nlet updateChirp = (id, chirp) => {\n    chirps[id] = chirp;\n    writeChirps();\n}\n\nlet deleteChirp = id => {\n    delete chirps[id];\n    writeChirps();\n}\n\nlet writeChirps = () => {\n    fs.writeFileSync('chirps.json', JSON.stringify(chirps));\n};\n\nmodule.exports = {\n    CreateChirp: createChirp,\n    DeleteChirp: deleteChirp,\n    GetChirps: getChirps,\n    GetChirp: getChirp,\n    UpdateChirp: updateChirp\n}\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/utils/chirpstore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

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