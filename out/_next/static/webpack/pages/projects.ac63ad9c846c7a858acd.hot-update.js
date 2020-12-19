webpackHotUpdate_N_E("pages/projects",{

/***/ "./Layouts/Layout.jsx":
/*!****************************!*\
  !*** ./Layouts/Layout.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Components_DropdownLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/DropdownLogo */ \"./Components/DropdownLogo.jsx\");\n/* harmony import */ var _Components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Dropdown */ \"./Components/Dropdown.jsx\");\n/* harmony import */ var _Components_NavItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/NavItems */ \"./Components/NavItems.jsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/jujhaar/code/js/react/next/portfolio/Layouts/Layout.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__Container\",\n  componentId: \"sc-1sidfum-0\"\n})([\"top:0;left:0;position:fixed;width:100vw;height:57px;display:flex;flex-direction:row;justify-content:space-between;background-color:#0088ff;color:#fff;padding:0px 20px 0px 20px;font-family:'Verdana' !important;letter-spacing:-1.5px;z-index:101;\"]);\n_c = Container;\nvar BodyContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"Layout__BodyContainer\",\n  componentId: \"sc-1sidfum-1\"\n})([\"margin-top:30px;font-family:Verdana !important;@media screen and (min-width:700px){margin-top:30px;display:flex;flex-wrap:wrap;}\"]);\n_c2 = BodyContainer;\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"Layout__Logo\",\n  componentId: \"sc-1sidfum-2\"\n})([\"font-size:34px;font-weight:bold;margin:0;padding:0;margin-top:11px;font-stretch:condensed;\"]);\n_c3 = Logo;\nvar PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"Layout__PageTitle\",\n  componentId: \"sc-1sidfum-3\"\n})([\"font-size:50px;text-align:center;margin-top:110px;margin-bottom:70px;font-family:Verdana !important;@media screen and (min-width:700px){margin-top:80px;margin-bottom:0;}\"]);\n_c4 = PageTitle;\n\nvar Layout = function Layout(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isOpen = _useState[0],\n      setIsOpen = _useState[1];\n\n  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var dropdownLogoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n\n  var onDropdownLogoClick = function onDropdownLogoClick() {\n    setIsOpen(function (isOpen) {\n      return !isOpen;\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function handleClickOutside(event) {\n      if (!dropdownRef.current.contains(event.target) && !dropdownLogoRef.current.contains(event.target)) {\n        setIsOpen(false);\n      }\n    } // Bind the event listener\n\n\n    document.addEventListener('click', handleClickOutside);\n    return function () {\n      // Unbind the event listener on clean up\n      document.removeEventListener('click', handleClickOutside);\n    };\n  }, [dropdownRef]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }, __jsx(Logo, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, \"JS\"), __jsx(_Components_NavItems__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }), __jsx(_Components_DropdownLogo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    dropdownLogoRef: dropdownLogoRef,\n    clicked: onDropdownLogoClick,\n    isOpen: isOpen,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  })), __jsx(_Components_Dropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    dropdownRef: dropdownRef,\n    isOpen: isOpen,\n    clicked: onDropdownLogoClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }), __jsx(PageTitle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }\n  }, props.title), __jsx(BodyContainer, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, props.children));\n};\n\n_s(Layout, \"0rs2B+ADOFKUysLBzLQRW+RsO5c=\");\n\n_c5 = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"BodyContainer\");\n$RefreshReg$(_c3, \"Logo\");\n$RefreshReg$(_c4, \"PageTitle\");\n$RefreshReg$(_c5, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vTGF5b3V0cy9MYXlvdXQuanN4Pzk0ZWQiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQm9keUNvbnRhaW5lciIsIkxvZ28iLCJoMSIsIlBhZ2VUaXRsZSIsIkxheW91dCIsInByb3BzIiwidXNlU3RhdGUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJkcm9wZG93blJlZiIsInVzZVJlZiIsImRyb3Bkb3duTG9nb1JlZiIsIm9uRHJvcGRvd25Mb2dvQ2xpY2siLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0aXRsZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJQQUFmO0tBQU1GLFM7QUFpQk4sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdJQUFuQjtNQUFNQyxhO0FBVU4sSUFBTUMsSUFBSSxHQUFHSCx5REFBTSxDQUFDSSxFQUFWO0FBQUE7QUFBQTtBQUFBLGtHQUFWO01BQU1ELEk7QUFTTixJQUFNRSxTQUFTLEdBQUdMLHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsaUxBQWY7TUFBTUMsUzs7QUFZTixJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxLQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUV4QixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLEVBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRCxvREFBTSxFQUE5Qjs7QUFFQSxNQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDaENKLGFBQVMsQ0FBQyxVQUFDRCxNQUFEO0FBQUEsYUFBWSxDQUFDQSxNQUFiO0FBQUEsS0FBRCxDQUFUO0FBQ0QsR0FGRDs7QUFJQU0seURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQ2pDLFVBQ0UsQ0FBQ04sV0FBVyxDQUFDTyxPQUFaLENBQW9CQyxRQUFwQixDQUE2QkYsS0FBSyxDQUFDRyxNQUFuQyxDQUFELElBQ0EsQ0FBQ1AsZUFBZSxDQUFDSyxPQUFoQixDQUF3QkMsUUFBeEIsQ0FBaUNGLEtBQUssQ0FBQ0csTUFBdkMsQ0FGSCxFQUdFO0FBQ0FWLGlCQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixLQVJhLENBU2Q7OztBQUNBVyxZQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DTixrQkFBbkM7QUFDQSxXQUFPLFlBQU07QUFDWDtBQUNBSyxjQUFRLENBQUNFLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDUCxrQkFBdEM7QUFDRCxLQUhEO0FBSUQsR0FmUSxFQWVOLENBQUNMLFdBQUQsQ0FmTSxDQUFUO0FBaUJBLFNBQ0UsbUVBQ0UsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGLEVBRUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLGdFQUFEO0FBQ0UsbUJBQWUsRUFBRUUsZUFEbkI7QUFFRSxXQUFPLEVBQUVDLG1CQUZYO0FBR0UsVUFBTSxFQUFFTCxNQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLEVBVUUsTUFBQyw0REFBRDtBQUNFLGVBQVcsRUFBRUUsV0FEZjtBQUVFLFVBQU0sRUFBRUYsTUFGVjtBQUdFLFdBQU8sRUFBRUssbUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBZUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWVAsS0FBSyxDQUFDaUIsS0FBbEIsQ0FmRixFQWdCRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQmpCLEtBQUssQ0FBQ2tCLFFBQXRCLENBaEJGLENBREY7QUFvQkQsQ0E5Q0Q7O0dBQU1uQixNOztNQUFBQSxNO0FBZ0RTQSxxRUFBZiIsImZpbGUiOiIuL0xheW91dHMvTGF5b3V0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IERyb3Bkb3duTG9nbyBmcm9tICcuLi9Db21wb25lbnRzL0Ryb3Bkb3duTG9nbyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi4vQ29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgTmF2SXRlbXMgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZJdGVtcyc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnVmVyZGFuYScgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjVweDtcbiAgei1pbmRleDogMTAxO1xuYDtcblxuY29uc3QgQm9keUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hICFpbXBvcnRhbnQ7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuYDtcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBmb250LXN0cmV0Y2g6IGNvbmRlbnNlZDtcbmA7XG5cbmNvbnN0IFBhZ2VUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDExMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICBmb250LWZhbWlseTogVmVyZGFuYSAhaW1wb3J0YW50O1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuYDtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGRyb3Bkb3duTG9nb1JlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IG9uRHJvcGRvd25Mb2dvQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKChpc09wZW4pID0+ICFpc09wZW4pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgICFkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgICAgIWRyb3Bkb3duTG9nb1JlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBCaW5kIHRoZSBldmVudCBsaXN0ZW5lclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgLy8gVW5iaW5kIHRoZSBldmVudCBsaXN0ZW5lciBvbiBjbGVhbiB1cFxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH07XG4gIH0sIFtkcm9wZG93blJlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxMb2dvPkpTPC9Mb2dvPlxuICAgICAgICA8TmF2SXRlbXMgLz5cbiAgICAgICAgPERyb3Bkb3duTG9nb1xuICAgICAgICAgIGRyb3Bkb3duTG9nb1JlZj17ZHJvcGRvd25Mb2dvUmVmfVxuICAgICAgICAgIGNsaWNrZWQ9e29uRHJvcGRvd25Mb2dvQ2xpY2t9XG4gICAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxEcm9wZG93blxuICAgICAgICBkcm9wZG93blJlZj17ZHJvcGRvd25SZWZ9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBjbGlja2VkPXtvbkRyb3Bkb3duTG9nb0NsaWNrfVxuICAgICAgLz5cbiAgICAgIDxQYWdlVGl0bGU+e3Byb3BzLnRpdGxlfTwvUGFnZVRpdGxlPlxuICAgICAgPEJvZHlDb250YWluZXI+e3Byb3BzLmNoaWxkcmVufTwvQm9keUNvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Layouts/Layout.jsx\n");

/***/ })

})