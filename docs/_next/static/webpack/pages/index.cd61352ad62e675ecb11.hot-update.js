webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/styles/Dropdown.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Dropdown_main__2j4U4 {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  -webkit-transition: top ease-in-out 0.4s;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n          box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n}\\n.Dropdown_main__2j4U4.Dropdown_open__NOjbT {\\n  top: 0%;\\n}\\n@media screen and (min-width: 700px) {\\n  .Dropdown_main__2j4U4 {\\n    display: none;\\n  }\\n}\\n.Dropdown_main__2j4U4 h1 {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  font-size: 50px;\\n  font-weight: bolder;\\n  line-height: 0.95;\\n  z-index: 100;\\n}\\n.Dropdown_main__2j4U4 a {\\n  color: #0088ff;\\n  font-size: 30px;\\n  font-weight: 100;\\n  display: grid;\\n  padding-right: 0;\\n  margin-right: auto;\\n  padding: 0;\\n  margin: 0;\\n  margin-bottom: 45px;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  text-decoration: none;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5 {\\n  display: inline-block;\\n  font-weight: 900;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5::after {\\n  content: \\\"a\\\";\\n  width: 30px;\\n  background-color: #0088ff;\\n  display: inline;\\n}\\n\\n.Dropdown_linkcontainer__JJUnF {\\n  width: 100%;\\n  margin-top: 68px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Components/styles/Dropdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,wCAAA;EAAA,gCAAA;EACA,mBAAA;EACA,sDAAA;UAAA,8CAAA;AACF;AACE;EACE,OAAA;AACJ;AAEE;EAnBF;IAoBI,aAAA;EACF;AACF;AACE;EACE,UAAA;EACA,SAAA;EACA,2DAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AACJ;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,mBAAA;EACA,2DAAA;EACA,qBAAA;AAAJ;AAEE;EAQI,qBAAA;EACF,gBAAA;AAPJ;AADI;EACE,YAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;AAGN;;AAKA;EACE,WAAA;EACA,gBAAA;AAFF\",\"sourcesContent\":[\".main {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n\\n  &.open {\\n    top: 0%;\\n  }\\n\\n  @media screen and (min-width: 700px) {\\n    display: none;\\n  }\\n\\n  h1 {\\n    padding: 0;\\n    margin: 0;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    font-size: 50px;\\n    font-weight: bolder;\\n    line-height: 0.95;\\n    z-index: 100;\\n  }  \\n\\n  a {\\n    color: #0088ff;\\n    font-size: 30px;\\n    font-weight: 100;\\n    display: grid;\\n    padding-right: 0;\\n    margin-right: auto;\\n    padding: 0;\\n    margin: 0;\\n    margin-bottom: 45px;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    text-decoration: none;\\n  }\\n  .selected {\\n    &::after{\\n      content: \\\"a\\\";\\n      width: 30px;\\n      background-color: #0088ff;\\n      display: inline;\\n      // display: inline-block;\\n    }\\n      display: inline-block;\\n    font-weight: 900;\\n  }\\n}\\n\\n.linkcontainer {\\n  width: 100%;\\n  margin-top: 68px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Dropdown_main__2j4U4\",\n\t\"open\": \"Dropdown_open__NOjbT\",\n\t\"selected\": \"Dropdown_selected__3SWe5\",\n\t\"linkcontainer\": \"Dropdown_linkcontainer__JJUnF\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3M/OGI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMEJBQTBCLDJCQUEyQixpQkFBaUIsb0JBQW9CLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDZDQUE2QyxxQ0FBcUMsd0JBQXdCLDJEQUEyRCwyREFBMkQsR0FBRyw4Q0FBOEMsWUFBWSxHQUFHLHdDQUF3QywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRyw0QkFBNEIsZUFBZSxjQUFjLGdFQUFnRSxvQkFBb0Isd0JBQXdCLHNCQUFzQixpQkFBaUIsR0FBRywyQkFBMkIsbUJBQW1CLG9CQUFvQixxQkFBcUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsZUFBZSxjQUFjLHdCQUF3QixnRUFBZ0UsMEJBQTBCLEdBQUcsbURBQW1ELDBCQUEwQixxQkFBcUIsR0FBRywwREFBMEQsbUJBQW1CLGdCQUFnQiw4QkFBOEIsb0JBQW9CLEdBQUcsb0NBQW9DLGdCQUFnQixxQkFBcUIsR0FBRyxPQUFPLHVHQUF1RyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsZ0NBQWdDLDJCQUEyQixpQkFBaUIsb0JBQW9CLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHFDQUFxQyx3QkFBd0IsbURBQW1ELGNBQWMsY0FBYyxLQUFLLDRDQUE0QyxvQkFBb0IsS0FBSyxVQUFVLGlCQUFpQixnQkFBZ0Isa0VBQWtFLHNCQUFzQiwwQkFBMEIsd0JBQXdCLG1CQUFtQixLQUFLLFdBQVcscUJBQXFCLHNCQUFzQix1QkFBdUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsa0VBQWtFLDRCQUE0QixLQUFLLGVBQWUsZUFBZSx1QkFBdUIsb0JBQW9CLGtDQUFrQyx3QkFBd0IsaUNBQWlDLE9BQU8sOEJBQThCLHVCQUF1QixLQUFLLEdBQUcsb0JBQW9CLGdCQUFnQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDM3lHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL0NvbXBvbmVudHMvc3R5bGVzL0Ryb3Bkb3duLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkRyb3Bkb3duX21haW5fXzJqNFU0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiAxMDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IC0xMDAlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA5MHZ3O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogdG9wIGVhc2UtaW4tb3V0IDAuNHM7XFxuICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5Ecm9wZG93bl9tYWluX18yajRVNC5Ecm9wZG93bl9vcGVuX19OT2piVCB7XFxuICB0b3A6IDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgLkRyb3Bkb3duX21haW5fXzJqNFU0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuLkRyb3Bkb3duX21haW5fXzJqNFU0IGgxIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBsaW5lLWhlaWdodDogMC45NTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuLkRyb3Bkb3duX21haW5fXzJqNFU0IGEge1xcbiAgY29sb3I6ICMwMDg4ZmY7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgLkRyb3Bkb3duX3NlbGVjdGVkX18zU1dlNSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgLkRyb3Bkb3duX3NlbGVjdGVkX18zU1dlNTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcImFcXFwiO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4uRHJvcGRvd25fbGlua2NvbnRhaW5lcl9fSkpVbkYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA2OHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFDRjtBQUNFO0VBQ0UsT0FBQTtBQUNKO0FBRUU7RUFuQkY7SUFvQkksYUFBQTtFQUNGO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVFO0VBUUkscUJBQUE7RUFDRixnQkFBQTtBQVBKO0FBREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBRkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogdG9wIGVhc2UtaW4tb3V0IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXG4gICYub3BlbiB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk1O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICB9ICBcXG5cXG4gIGEge1xcbiAgICBjb2xvcjogIzAwODhmZjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG4gIC5zZWxlY3RlZCB7XFxuICAgICY6OmFmdGVye1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJhXFxcIjtcXG4gICAgICB3aWR0aDogMzBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcXG4gICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICB9XFxufVxcblxcbi5saW5rY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogNjhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibWFpblwiOiBcIkRyb3Bkb3duX21haW5fXzJqNFU0XCIsXG5cdFwib3BlblwiOiBcIkRyb3Bkb3duX29wZW5fX05PamJUXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJEcm9wZG93bl9zZWxlY3RlZF9fM1NXZTVcIixcblx0XCJsaW5rY29udGFpbmVyXCI6IFwiRHJvcGRvd25fbGlua2NvbnRhaW5lcl9fSkpVbkZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss\n");

/***/ })

})