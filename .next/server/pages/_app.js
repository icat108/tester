/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CircularProgress */ \"@mui/material/CircularProgress\");\n/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ \"./context/user.js\");\n/* harmony import */ var _services_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/firebase */ \"./services/firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n_services_firebase__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst AuthStateChangeProvider = ({ children  })=>{\n    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const user1 = (0,_user__WEBPACK_IMPORTED_MODULE_3__.useUser)();\n    const { SetUser  } = user1;\n    const InitiateAuthStateChange = ()=>{\n        (0,_services_firebase__WEBPACK_IMPORTED_MODULE_4__.Authentication)().onAuthStateChanged((user)=>{\n            if (user) {\n                console.log(\"User is Authentication\");\n                SetUser({\n                    email: user.email,\n                    uid: user.uid\n                });\n            } else {\n                console.log(\"user is Not Authentication\");\n                SetUser(_user__WEBPACK_IMPORTED_MODULE_3__.InitialUserState);\n            }\n            setIsLoading(false);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        InitiateAuthStateChange();\n    }, []);\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\context\\\\auth.js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, undefined);\n    }\n    return children;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthStateChangeProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDa0I7QUFDWDtBQUNHO0FBR3RELE1BQU1NLHVCQUF1QixHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDaEQsTUFBTSxFQVBSLEdBT1NDLFNBQVMsR0FQbEIsR0FPb0JDLFlBQVksTUFBSVIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDaEQsTUFBTVMsS0FBSSxHQUFHTiw4Q0FBTyxFQUFFO0lBQ3RCLE1BQU0sRUFBRU8sT0FBTyxHQUFFLEdBQUdELEtBQUk7SUFFeEIsTUFBTUUsdUJBQXVCLEdBQUcsSUFBTTtRQUNwQ1Asa0VBQWMsRUFBRSxDQUFDUSxrQkFBa0IsQ0FBQyxDQUFDSCxJQUFJLEdBQUs7WUFDNUMsSUFBSUEsSUFBSSxFQUFFO2dCQUNSSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUN0Q0osT0FBTyxDQUFDO29CQUFFSyxLQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FBSztvQkFBRUMsR0FBRyxFQUFFUCxJQUFJLENBQUNPLEdBQUc7aUJBQUUsQ0FBQyxDQUFDO2FBQy9DLE1BQU07Z0JBQ0xILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzFDSixPQUFPLENBQUNSLG1EQUFnQixDQUFDLENBQUM7YUFDM0I7WUFDRE0sWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCLENBQUMsQ0FBQztLQUNKO0lBRURULGdEQUFTLENBQUMsSUFBTTtRQUNkWSx1QkFBdUIsRUFBRSxDQUFDO0tBQzNCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxJQUFJSixTQUFTLEVBQUU7UUFDYixxQkFBTyw4REFBQ04sdUVBQWdCOzs7O3FCQUFHLENBQUM7S0FDN0I7SUFFRCxPQUFPSyxRQUFRLENBQUM7Q0FDakI7QUFFRCxpRUFBZUQsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLy4vY29udGV4dC9hdXRoLmpzPzgxNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tIFwiQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzXCI7XHJcbmltcG9ydCB7IEluaXRpYWxVc2VyU3RhdGUsIHVzZVVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZpcmViYXNlXCI7XHJcblxyXG5cclxuY29uc3QgQXV0aFN0YXRlQ2hhbmdlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBTZXRVc2VyIH0gPSB1c2VyO1xyXG5cclxuICBjb25zdCBJbml0aWF0ZUF1dGhTdGF0ZUNoYW5nZSA9ICgpID0+IHtcclxuICAgIEF1dGhlbnRpY2F0aW9uKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVc2VyIGlzIEF1dGhlbnRpY2F0aW9uXCIpO1xyXG4gICAgICAgIFNldFVzZXIoeyBlbWFpbDogdXNlci5lbWFpbCwgdWlkOiB1c2VyLnVpZCB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIgaXMgTm90IEF1dGhlbnRpY2F0aW9uXCIpO1xyXG4gICAgICAgIFNldFVzZXIoSW5pdGlhbFVzZXJTdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBJbml0aWF0ZUF1dGhTdGF0ZUNoYW5nZSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIDxDaXJjdWxhclByb2dyZXNzIC8+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aFN0YXRlQ2hhbmdlUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJJbml0aWFsVXNlclN0YXRlIiwidXNlVXNlciIsIkF1dGhlbnRpY2F0aW9uIiwiQXV0aFN0YXRlQ2hhbmdlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZXIiLCJTZXRVc2VyIiwiSW5pdGlhdGVBdXRoU3RhdGVDaGFuZ2UiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJ1aWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/auth.js\n");

/***/ }),

/***/ "./context/user.js":
/*!*************************!*\
  !*** ./context/user.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitialUserState\": () => (/* binding */ InitialUserState),\n/* harmony export */   \"useUser\": () => (/* binding */ useUser),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst InitialUserState = {\n    email: null,\n    uid: null\n};\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useUser = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n};\nconst UserProvider = (props)=>{\n    const { 0: userState , 1: setUserState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(InitialUserState);\n    const SetUser = (userCredential)=>{\n        setUserState({\n            ...userCredential\n        });\n    };\n    const ResetUser = ()=>{\n        setUserState(InitialUserState);\n    };\n    const value = {\n        ...userState,\n        SetUser,\n        ResetUser\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: value,\n        ...props\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\context\\\\user.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTREO0FBRXJELE1BQU1HLGdCQUFnQixHQUFHO0lBQzlCQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxHQUFHLEVBQUUsSUFBSTtDQUNWLENBQUM7QUFFRixNQUFNQyxXQUFXLGlCQUFHTixvREFBYSxFQUFFO0FBRTVCLE1BQU1PLE9BQU8sR0FBRyxJQUFNO0lBQzNCLE9BQU9OLGlEQUFVLENBQUNLLFdBQVcsQ0FBQyxDQUFDO0NBQ2hDLENBQUM7QUFFSyxNQUFNRSxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3JDLE1BQU0sRUFkUixHQWNTQyxTQUFTLEdBZGxCLEdBY29CQyxZQUFZLE1BQUlULCtDQUFRLENBQUNDLGdCQUFnQixDQUFDO0lBRTVELE1BQU1TLE9BQU8sR0FBRyxDQUFDQyxjQUFjLEdBQUs7UUFDbENGLFlBQVksQ0FBQztZQUFFLEdBQUdFLGNBQWM7U0FBRSxDQUFDLENBQUM7S0FDckM7SUFFRCxNQUFNQyxTQUFTLEdBQUcsSUFBTTtRQUN0QkgsWUFBWSxDQUFDUixnQkFBZ0IsQ0FBQyxDQUFDO0tBQ2hDO0lBRUQsTUFBTVksS0FBSyxHQUFHO1FBQUUsR0FBR0wsU0FBUztRQUFFRSxPQUFPO1FBQUVFLFNBQVM7S0FBRTtJQUNsRCxxQkFBTyw4REFBQ1IsV0FBVyxDQUFDVSxRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztRQUFHLEdBQUdOLEtBQUs7Ozs7O2lCQUFJLENBQUM7Q0FDMUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXIvLi9jb250ZXh0L3VzZXIuanM/ZjYwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluaXRpYWxVc2VyU3RhdGUgPSB7XHJcbiAgZW1haWw6IG51bGwsXHJcbiAgdWlkOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXNlciA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJTdGF0ZSwgc2V0VXNlclN0YXRlXSA9IHVzZVN0YXRlKEluaXRpYWxVc2VyU3RhdGUpOyAgXHJcblxyXG4gIGNvbnN0IFNldFVzZXIgPSAodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgIHNldFVzZXJTdGF0ZSh7IC4uLnVzZXJDcmVkZW50aWFsIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFJlc2V0VXNlciA9ICgpID0+IHtcclxuICAgIHNldFVzZXJTdGF0ZShJbml0aWFsVXNlclN0YXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHsgLi4udXNlclN0YXRlLCBTZXRVc2VyLCBSZXNldFVzZXIgfTtcclxuICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0gey4uLnByb3BzfSAvPjtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJJbml0aWFsVXNlclN0YXRlIiwiZW1haWwiLCJ1aWQiLCJVc2VyQ29udGV4dCIsInVzZVVzZXIiLCJVc2VyUHJvdmlkZXIiLCJwcm9wcyIsInVzZXJTdGF0ZSIsInNldFVzZXJTdGF0ZSIsIlNldFVzZXIiLCJ1c2VyQ3JlZGVudGlhbCIsIlJlc2V0VXNlciIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/user.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/theme */ \"./utils/theme.js\");\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n/* harmony import */ var _utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/createEmotionCache */ \"./utils/createEmotionCache.js\");\n/* harmony import */ var _context_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/user */ \"./context/user.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_auth__WEBPACK_IMPORTED_MODULE_6__]);\n_context_auth__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_utils_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nfunction MyApp(props) {\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Netflix - Design By Ricad\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n                theme: _utils_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_user__WEBPACK_IMPORTED_MODULE_8__.UserProvider, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_auth__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ASUS\\\\Desktop\\\\tester\\\\pages\\\\_app.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDd0I7QUFDRDtBQUNMO0FBQ1o7QUFDbUI7QUFDTztBQUNkO0FBRWhCO0FBRTlCLE1BQU1RLHNCQUFzQixHQUFHRixxRUFBa0IsRUFBRTtBQUVuRCxTQUFTRyxLQUFLLENBQUNDLEtBQUssRUFBRTtJQUNwQixNQUFNLEVBQUVDLFNBQVMsR0FBRUMsWUFBWSxFQUFHSixzQkFBc0IsR0FBRUssU0FBUyxHQUFFLEdBQUdILEtBQUs7SUFDN0UscUJBQ0UsOERBQUNQLHlEQUFhO1FBQUNXLEtBQUssRUFBRUYsWUFBWTs7MEJBQ2hDLDhEQUFDWixrREFBSTs7a0NBQ0gsOERBQUNlLE9BQUs7a0NBQUMsMkJBQXlCOzs7Ozs0QkFBUTtrQ0FDeEMsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxPQUFPLEVBQUMscUNBQXFDOzs7Ozs0QkFBRzs7Ozs7O29CQUNqRTswQkFDUCw4REFBQ2pCLCtEQUFhO2dCQUFDRyxLQUFLLEVBQUVBLG9EQUFLOztrQ0FDekIsOERBQUNGLGtFQUFXOzs7OzRCQUFHO2tDQUNmLDhEQUFDSyx1REFBWTtrQ0FDYiw0RUFBQ0YscURBQXVCO3NDQUN4Qiw0RUFBQ00sU0FBUztnQ0FBRSxHQUFHRSxTQUFTOzs7OztvQ0FBSTs7Ozs7Z0NBQ0Y7Ozs7OzRCQUNYOzs7Ozs7b0JBQ0Q7Ozs7OztZQUNGLENBQ2pCO0NBQ0Y7QUFFRCxpRUFBZUosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJ1xyXG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi91dGlscy90aGVtZSdcclxuaW1wb3J0IEF1dGhTdGF0ZUNoYW5nZVByb3ZpZGVyIGZyb20gJy4uL2NvbnRleHQvYXV0aCdcclxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICcuLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUnXHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvdXNlcidcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuY29uc3QgY2xpZW50U2lkZUVtb3Rpb25DYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZSwgcGFnZVByb3BzIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5ldGZsaXggLSBEZXNpZ24gQnkgUmljYWQ8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8VXNlclByb3ZpZGVyPlxyXG4gICAgICAgIDxBdXRoU3RhdGVDaGFuZ2VQcm92aWRlcj5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BdXRoU3RhdGVDaGFuZ2VQcm92aWRlcj5cclxuICAgICAgICA8L1VzZXJQcm92aWRlcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgPC9DYWNoZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiQ2FjaGVQcm92aWRlciIsInRoZW1lIiwiQXV0aFN0YXRlQ2hhbmdlUHJvdmlkZXIiLCJjcmVhdGVFbW90aW9uQ2FjaGUiLCJVc2VyUHJvdmlkZXIiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsImVtb3Rpb25DYWNoZSIsInBhZ2VQcm9wcyIsInZhbHVlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./services/firebase.js":
/*!******************************!*\
  !*** ./services/firebase.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FirebaseAuth\": () => (/* binding */ FirebaseAuth),\n/* harmony export */   \"Authentication\": () => (/* binding */ Authentication),\n/* harmony export */   \"SignUp\": () => (/* binding */ SignUp),\n/* harmony export */   \"SignIn\": () => (/* binding */ SignIn),\n/* harmony export */   \"SignOut\": () => (/* binding */ SignOut),\n/* harmony export */   \"GetSignInErrorMessage\": () => (/* binding */ GetSignInErrorMessage),\n/* harmony export */   \"GetSignUpErrorMessage\": () => (/* binding */ GetSignUpErrorMessage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyAcOy1C7QF92j_MCErQSy1z2-fzvZLToA4\",\n    authDomain: \"nextjs-auth-6dee3.firebaseapp.com\",\n    projectId: \"nextjs-auth-6dee3\",\n    storageBucket: \"nextjs-auth-6dee3.appspot.com\",\n    messagingSenderId: \"1050370615227\",\n    appId: \"1:1050370615227:web:1b11bc32e8428d31e1069e\"\n};\n// const app = initializeApp(firebaseConfig);\nif (!(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length) {\n    (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n}\nconst FirebaseAuth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst Authentication = ()=>{\n    return FirebaseAuth;\n};\nconst SignUp = async (email, password)=>{\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(FirebaseAuth, email, password);\n};\nconst SignIn = async (email, password)=>{\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(FirebaseAuth, email, password);\n};\nconst SignOut = async ()=>{\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(FirebaseAuth);\n};\nconst GetSignInErrorMessage = (code)=>{\n    switch(code){\n        case \"auth/user-not-found\":\n            return \"Email tidak terdaftar\";\n        case \"auth/wrong-password\":\n        default:\n            return \"Email atau Password salah\";\n    }\n};\nconst GetSignUpErrorMessage = (code)=>{\n    switch(code){\n        case \"auth/email-already-in-use\":\n            return \"Email telah terdaftar\";\n        default:\n            return \"Terjadi Kesalahan Saat Proses SignUp\";\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFNL0I7QUFFdkIsTUFBTU0sY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUVDLHlDQUErQjtJQUN2Q0csVUFBVSxFQUFFSCxtQ0FBbUM7SUFDL0NLLFNBQVMsRUFBRUwsbUJBQWtDO0lBQzdDTyxhQUFhLEVBQUVQLCtCQUFzQztJQUNyRFMsaUJBQWlCLEVBQUVULGVBQTJDO0lBQzlEVyxLQUFLLEVBQUVYLDRDQUE4QjtDQUN0QztBQUVELDZDQUE2QztBQUM3QyxJQUFJLENBQUNQLHFEQUFPLEVBQUUsQ0FBQ29CLE1BQU0sRUFBRTtJQUNyQnJCLDJEQUFhLENBQUNNLGNBQWMsQ0FBQyxDQUFDO0NBQy9CO0FBRU0sTUFBTWdCLFlBQVksR0FBR3BCLHNEQUFPLEVBQUUsQ0FBQztBQUUvQixNQUFNcUIsY0FBYyxHQUFHLElBQU07SUFDaEMsT0FBT0QsWUFBWTtDQUN0QjtBQUVNLE1BQU1FLE1BQU0sR0FBRyxPQUFPQyxLQUFLLEVBQUVDLFFBQVEsR0FBSztJQUMvQyxNQUFNdkIsNkVBQThCLENBQUNtQixZQUFZLEVBQUVHLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Q0FDckUsQ0FBQztBQUVLLE1BQU1DLE1BQU0sR0FBRyxPQUFPRixLQUFLLEVBQUVDLFFBQVEsR0FBSztJQUMvQyxNQUFNdEIseUVBQTBCLENBQUNrQixZQUFZLEVBQUVHLEtBQUssRUFBRUMsUUFBUSxDQUFDLENBQUM7Q0FDakUsQ0FBQztBQUVLLE1BQU1FLE9BQU8sR0FBRyxVQUFZO0lBQ2pDLE1BQU12QixzREFBTyxDQUFDaUIsWUFBWSxDQUFDLENBQUM7Q0FDN0IsQ0FBQztBQUVLLE1BQU1PLHFCQUFxQixHQUFHLENBQUNDLElBQUksR0FBSztJQUM3QyxPQUFRQSxJQUFJO1FBQ1YsS0FBSyxxQkFBcUI7WUFDeEIsT0FBTyx1QkFBdUIsQ0FBQztRQUNqQyxLQUFLLHFCQUFxQixDQUFDO1FBQzNCO1lBQ0UsT0FBTywyQkFBMkIsQ0FBQztLQUN0QztDQUNGLENBQUM7QUFFSyxNQUFNQyxxQkFBcUIsR0FBRyxDQUFDRCxJQUFJLEdBQUs7SUFDN0MsT0FBUUEsSUFBSTtRQUNWLEtBQUssMkJBQTJCO1lBQzlCLE9BQU8sdUJBQXVCLENBQUM7UUFDakM7WUFDRSxPQUFPLHNDQUFzQyxDQUFDO0tBQ2pEO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0YXJ0ZXIvLi9zZXJ2aWNlcy9maXJlYmFzZS5qcz9iZTc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAsIGdldEFwcHMgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbk91dCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0lELFxyXG59O1xyXG5cclxuLy8gY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmlmICghZ2V0QXBwcygpLmxlbmd0aCkge1xyXG4gIGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmlyZWJhc2VBdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIEZpcmViYXNlQXV0aFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2lnblVwID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChGaXJlYmFzZUF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU2lnbkluID0gYXN5bmMgKGVtYWlsLCBwYXNzd29yZCkgPT4ge1xyXG4gIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKEZpcmViYXNlQXV0aCwgZW1haWwsIHBhc3N3b3JkKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTaWduT3V0ID0gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHNpZ25PdXQoRmlyZWJhc2VBdXRoKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHZXRTaWduSW5FcnJvck1lc3NhZ2UgPSAoY29kZSkgPT4ge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSBcImF1dGgvdXNlci1ub3QtZm91bmRcIjpcclxuICAgICAgcmV0dXJuIFwiRW1haWwgdGlkYWsgdGVyZGFmdGFyXCI7XHJcbiAgICBjYXNlIFwiYXV0aC93cm9uZy1wYXNzd29yZFwiOlxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIFwiRW1haWwgYXRhdSBQYXNzd29yZCBzYWxhaFwiO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBHZXRTaWduVXBFcnJvck1lc3NhZ2UgPSAoY29kZSkgPT4ge1xyXG4gIHN3aXRjaCAoY29kZSkge1xyXG4gICAgY2FzZSBcImF1dGgvZW1haWwtYWxyZWFkeS1pbi11c2VcIjpcclxuICAgICAgcmV0dXJuIFwiRW1haWwgdGVsYWggdGVyZGFmdGFyXCI7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gXCJUZXJqYWRpIEtlc2FsYWhhbiBTYWF0IFByb3NlcyBTaWduVXBcIjtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEF1dGgiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25PdXQiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfQVBQX0lEIiwibGVuZ3RoIiwiRmlyZWJhc2VBdXRoIiwiQXV0aGVudGljYXRpb24iLCJTaWduVXAiLCJlbWFpbCIsInBhc3N3b3JkIiwiU2lnbkluIiwiU2lnbk91dCIsIkdldFNpZ25JbkVycm9yTWVzc2FnZSIsImNvZGUiLCJHZXRTaWduVXBFcnJvck1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/firebase.js\n");

/***/ }),

/***/ "./utils/createEmotionCache.js":
/*!*************************************!*\
  !*** ./utils/createEmotionCache.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction createEmotionCache() {\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"css\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jcmVhdGVFbW90aW9uQ2FjaGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRTFCLFNBQVNDLGtCQUFrQixHQUFHO0lBQzNDLE9BQU9ELHFEQUFXLENBQUM7UUFBRUUsR0FBRyxFQUFFLEtBQUs7S0FBRSxDQUFDLENBQUM7Q0FDcEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLy4vdXRpbHMvY3JlYXRlRW1vdGlvbkNhY2hlLmpzP2M4ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlIGZyb20gJ0BlbW90aW9uL2NhY2hlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtb3Rpb25DYWNoZSgpIHtcclxuICByZXR1cm4gY3JlYXRlQ2FjaGUoeyBrZXk6ICdjc3MnIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/createEmotionCache.js\n");

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst base = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#E50914\"\n        },\n        secondary: {\n            main: \"#FFFFFF\"\n        },\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red[400]\n        }\n    }\n});\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)(base);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy90aGVtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RTtBQUM3QjtBQUUxQyxNQUFNRyxJQUFJLEdBQUdILGlFQUFXLENBQUM7SUFDdkJJLE9BQU8sRUFBRTtRQUNQQyxPQUFPLEVBQUU7WUFDUEMsSUFBSSxFQUFFLFNBQVM7U0FDaEI7UUFDREMsU0FBUyxFQUFFO1lBQ1RELElBQUksRUFBRSxTQUFTO1NBQ2hCO1FBQ0RFLEtBQUssRUFBRTtZQUNMRixJQUFJLEVBQUVKLDBEQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNTyxLQUFLLEdBQUdSLHlFQUFtQixDQUFDRSxJQUFJLENBQUM7QUFFdkMsaUVBQWVNLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGVyLy4vdXRpbHMvdGhlbWUuanM/NGVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUaGVtZSwgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsL2NvbG9ycydcclxuXHJcbmNvbnN0IGJhc2UgPSBjcmVhdGVUaGVtZSh7XHJcbiAgcGFsZXR0ZToge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiAnI0U1MDkxNCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjRkZGRkZGJyxcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWRbNDAwXVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnN0IHRoZW1lID0gcmVzcG9uc2l2ZUZvbnRTaXplcyhiYXNlKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWVcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwicmVzcG9uc2l2ZUZvbnRTaXplcyIsInJlZCIsImJhc2UiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/theme.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material/CircularProgress":
/*!*************************************************!*\
  !*** external "@mui/material/CircularProgress" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CircularProgress");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();