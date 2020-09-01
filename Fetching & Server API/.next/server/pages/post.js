module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/yunshine/Code/yunshine/Next-101/Fetching & Server API/pages/post.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst Post = props => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }\n}, __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, \"Post Page. These are the comments for post #\", props.id), props.comments.map(comment => // <p>{comment.email}</p>\n__jsx(Comment, _extends({}, comment, {\n  key: comment.id,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 7\n  }\n}))));\n\nconst Comment = ({\n  email,\n  body\n}) => __jsx(\"div\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 3\n  }\n}, __jsx(\"h5\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }\n}, email), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }\n}, body), __jsx(\"br\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }\n}));\n\nPost.getInitialProps = async ({\n  query\n}) => {\n  const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);\n  const {\n    data\n  } = res;\n  console.log(data[0]);\n  return _objectSpread(_objectSpread({}, query), {}, {\n    comments: data\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); //   const Post = withRouter((props) => (\n//     <h1>Post Page. You are looking at post #{props.router.query.id}</h1>\n//   ));\n// export default withRouter(Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzPzEyMTIiXSwibmFtZXMiOlsiUG9zdCIsInByb3BzIiwiaWQiLCJjb21tZW50cyIsIm1hcCIsImNvbW1lbnQiLCJDb21tZW50IiwiZW1haWwiLCJib2R5IiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiLCJyZXMiLCJheGlvcyIsImdldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFBaURBLEtBQUssQ0FBQ0MsRUFBdkQsQ0FERixFQUVHRCxLQUFLLENBQUNFLFFBQU4sQ0FBZUMsR0FBZixDQUFvQkMsT0FBRCxJQUNsQjtBQUNBLE1BQUMsT0FBRCxlQUFhQSxPQUFiO0FBQXNCLEtBQUcsRUFBRUEsT0FBTyxDQUFDSCxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBRkQsQ0FGSCxDQURGOztBQVVBLE1BQU1JLE9BQU8sR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQ2Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBS0QsS0FBTCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFJQyxJQUFKLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSEYsQ0FERjs7QUFRQVIsSUFBSSxDQUFDUyxlQUFMLEdBQXVCLE9BQU87QUFBRUM7QUFBRixDQUFQLEtBQXFCO0FBQzFDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ2Ysd0RBQXVESCxLQUFLLENBQUNSLEVBQUcsRUFEakQsQ0FBbEI7QUFHQSxRQUFNO0FBQUVZO0FBQUYsTUFBV0gsR0FBakI7QUFDQUksU0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQyxDQUFELENBQWhCO0FBQ0EseUNBQVlKLEtBQVo7QUFBbUJQLFlBQVEsRUFBRVc7QUFBN0I7QUFDRCxDQVBEOztBQVNlZCxtRUFBZixFLENBRUE7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aDE+UG9zdCBQYWdlLiBUaGVzZSBhcmUgdGhlIGNvbW1lbnRzIGZvciBwb3N0ICN7cHJvcHMuaWR9PC9oMT5cbiAgICB7cHJvcHMuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAvLyA8cD57Y29tbWVudC5lbWFpbH08L3A+XG4gICAgICA8Q29tbWVudCB7Li4uY29tbWVudH0ga2V5PXtjb21tZW50LmlkfSAvPlxuICAgICkpfVxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBlbWFpbCwgYm9keSB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPGg1PntlbWFpbH08L2g1PlxuICAgIDxwPntib2R5fTwvcD5cbiAgICA8YnI+PC9icj5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgIGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7cXVlcnkuaWR9YFxuICApO1xuICBjb25zdCB7IGRhdGEgfSA9IHJlcztcbiAgY29uc29sZS5sb2coZGF0YVswXSk7XG4gIHJldHVybiB7IC4uLnF1ZXJ5LCBjb21tZW50czogZGF0YSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcblxuLy8gICBjb25zdCBQb3N0ID0gd2l0aFJvdXRlcigocHJvcHMpID0+IChcbi8vICAgICA8aDE+UG9zdCBQYWdlLiBZb3UgYXJlIGxvb2tpbmcgYXQgcG9zdCAje3Byb3BzLnJvdXRlci5xdWVyeS5pZH08L2gxPlxuLy8gICApKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQb3N0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });