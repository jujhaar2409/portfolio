webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/styles/Dropdown.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Dropdown_main__2j4U4 {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  -webkit-transition: top ease-in-out 0.4s;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n          box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n}\\n.Dropdown_main__2j4U4.Dropdown_open__NOjbT {\\n  top: 0%;\\n}\\n@media screen and (min-width: 700px) {\\n  .Dropdown_main__2j4U4 {\\n    display: none;\\n  }\\n}\\n.Dropdown_main__2j4U4 h1 {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  font-size: 50px;\\n  font-weight: bolder;\\n  line-height: 0.95;\\n  z-index: 100;\\n}\\n.Dropdown_main__2j4U4 a {\\n  color: #0088ff;\\n  font-size: 30px;\\n  font-weight: 100;\\n  display: grid;\\n  padding-right: 0;\\n  margin-right: auto;\\n  padding: 0;\\n  margin: 0;\\n  margin-bottom: 45px;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  text-decoration: none;\\n  display: inline;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5 {\\n  font-weight: 900;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5::before {\\n  content: \\\"-\\\";\\n  display: inline-block;\\n}\\n\\n.Dropdown_linkcontainer__JJUnF {\\n  width: 100%;\\n  margin-top: 68px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Components/styles/Dropdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,wCAAA;EAAA,gCAAA;EACA,mBAAA;EACA,sDAAA;UAAA,8CAAA;AACF;AACE;EACE,OAAA;AACJ;AAEE;EAnBF;IAoBI,aAAA;EACF;AACF;AACE;EACE,UAAA;EACA,SAAA;EACA,2DAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AACJ;AAEE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,mBAAA;EACA,2DAAA;EACA,qBAAA;EACA,eAAA;AAAJ;AAEE;EAKE,gBAAA;AAJJ;AAAI;EACE,YAAA;EACA,qBAAA;AAEN;;AAIA;EACE,WAAA;EACA,gBAAA;AADF\",\"sourcesContent\":[\".main {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n\\n  &.open {\\n    top: 0%;\\n  }\\n\\n  @media screen and (min-width: 700px) {\\n    display: none;\\n  }\\n\\n  h1 {\\n    padding: 0;\\n    margin: 0;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    font-size: 50px;\\n    font-weight: bolder;\\n    line-height: 0.95;\\n    z-index: 100;\\n  }  \\n\\n  a {\\n    color: #0088ff;\\n    font-size: 30px;\\n    font-weight: 100;\\n    display: grid;\\n    padding-right: 0;\\n    margin-right: auto;\\n    padding: 0;\\n    margin: 0;\\n    margin-bottom: 45px;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    text-decoration: none;\\n    display: inline;\\n  }\\n  .selected {\\n    &::before{\\n      content: \\\"-\\\";\\n      display: inline-block;\\n    }\\n    font-weight: 900;\\n  }\\n}\\n\\n.linkcontainer {\\n  width: 100%;\\n  margin-top: 68px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Dropdown_main__2j4U4\",\n\t\"open\": \"Dropdown_open__NOjbT\",\n\t\"selected\": \"Dropdown_selected__3SWe5\",\n\t\"linkcontainer\": \"Dropdown_linkcontainer__JJUnF\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3M/OGI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsMEJBQTBCLDJCQUEyQixpQkFBaUIsb0JBQW9CLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDZDQUE2QyxxQ0FBcUMsd0JBQXdCLDJEQUEyRCwyREFBMkQsR0FBRyw4Q0FBOEMsWUFBWSxHQUFHLHdDQUF3QywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRyw0QkFBNEIsZUFBZSxjQUFjLGdFQUFnRSxvQkFBb0Isd0JBQXdCLHNCQUFzQixpQkFBaUIsR0FBRywyQkFBMkIsbUJBQW1CLG9CQUFvQixxQkFBcUIsa0JBQWtCLHFCQUFxQix1QkFBdUIsZUFBZSxjQUFjLHdCQUF3QixnRUFBZ0UsMEJBQTBCLG9CQUFvQixHQUFHLG1EQUFtRCxxQkFBcUIsR0FBRywyREFBMkQsbUJBQW1CLDBCQUEwQixHQUFHLG9DQUFvQyxnQkFBZ0IscUJBQXFCLEdBQUcsT0FBTyx1R0FBdUcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsZ0NBQWdDLDJCQUEyQixpQkFBaUIsb0JBQW9CLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHFDQUFxQyx3QkFBd0IsbURBQW1ELGNBQWMsY0FBYyxLQUFLLDRDQUE0QyxvQkFBb0IsS0FBSyxVQUFVLGlCQUFpQixnQkFBZ0Isa0VBQWtFLHNCQUFzQiwwQkFBMEIsd0JBQXdCLG1CQUFtQixLQUFLLFdBQVcscUJBQXFCLHNCQUFzQix1QkFBdUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsa0VBQWtFLDRCQUE0QixzQkFBc0IsS0FBSyxlQUFlLGdCQUFnQix1QkFBdUIsOEJBQThCLE9BQU8sdUJBQXVCLEtBQUssR0FBRyxvQkFBb0IsZ0JBQWdCLHFCQUFxQixHQUFHLG1CQUFtQjtBQUNqcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRHJvcGRvd25fbWFpbl9fMmo0VTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMC40cztcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLWluLW91dCAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLkRyb3Bkb3duX21haW5fXzJqNFU0LkRyb3Bkb3duX29wZW5fX05PamJUIHtcXG4gIHRvcDogMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAuRHJvcGRvd25fbWFpbl9fMmo0VTQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwLjk1O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgYSB7XFxuICBjb2xvcjogIzAwODhmZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5Ecm9wZG93bl9tYWluX18yajRVNCAuRHJvcGRvd25fc2VsZWN0ZWRfXzNTV2U1IHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5Ecm9wZG93bl9tYWluX18yajRVNCAuRHJvcGRvd25fc2VsZWN0ZWRfXzNTV2U1OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi1cXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uRHJvcGRvd25fbGlua2NvbnRhaW5lcl9fSkpVbkYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA2OHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFDRjtBQUNFO0VBQ0UsT0FBQTtBQUNKO0FBRUU7RUFuQkY7SUFvQkksYUFBQTtFQUNGO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBQUo7QUFFRTtFQUtFLGdCQUFBO0FBSko7QUFBSTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUVOOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogdG9wIGVhc2UtaW4tb3V0IDAuNHM7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG5cXG4gICYub3BlbiB7XFxuICAgIHRvcDogMCU7XFxuICB9XFxuXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDEge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk1O1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICB9ICBcXG5cXG4gIGEge1xcbiAgICBjb2xvcjogIzAwODhmZjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgfVxcbiAgLnNlbGVjdGVkIHtcXG4gICAgJjo6YmVmb3Jle1xcbiAgICAgIGNvbnRlbnQ6IFxcXCItXFxcIjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIH1cXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIH1cXG59XFxuXFxuLmxpbmtjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA2OHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiRHJvcGRvd25fbWFpbl9fMmo0VTRcIixcblx0XCJvcGVuXCI6IFwiRHJvcGRvd25fb3Blbl9fTk9qYlRcIixcblx0XCJzZWxlY3RlZFwiOiBcIkRyb3Bkb3duX3NlbGVjdGVkX18zU1dlNVwiLFxuXHRcImxpbmtjb250YWluZXJcIjogXCJEcm9wZG93bl9saW5rY29udGFpbmVyX19KSlVuRlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss\n");

/***/ })

})