webpackHotUpdate_N_E("pages/projects",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/styles/Dropdown.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@charset \\\"UTF-8\\\";\\n.Dropdown_main__2j4U4 {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  -webkit-transition: top ease-in-out 0.4s;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  -webkit-box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n          box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n}\\n.Dropdown_main__2j4U4.Dropdown_open__NOjbT {\\n  top: 0%;\\n}\\n@media screen and (min-width: 700px) {\\n  .Dropdown_main__2j4U4 {\\n    display: none;\\n  }\\n}\\n.Dropdown_main__2j4U4 h1 {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  font-size: 50px;\\n  font-weight: bolder;\\n  line-height: 0.95;\\n  z-index: 100;\\n}\\n.Dropdown_main__2j4U4 a {\\n  color: #0088ff;\\n  font-size: 30px;\\n  font-weight: 100;\\n  display: grid;\\n  padding-right: 0;\\n  margin-right: auto;\\n  padding: 0;\\n  margin: 0;\\n  margin-bottom: 45px;\\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n  text-decoration: none;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5 {\\n  display: inline-block;\\n  font-weight: 900;\\n}\\n.Dropdown_main__2j4U4 .Dropdown_selected__3SWe5::after {\\n  content: \\\"    ●\\\";\\n  display: inline-block;\\n}\\n\\n.Dropdown_linkcontainer__JJUnF {\\n  width: 100%;\\n  margin-top: 68px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Components/styles/Dropdown.module.scss\"],\"names\":[],\"mappings\":\"AAAA,gBAAgB;AAAhB;EACE,sBAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,wCAAA;EAAA,gCAAA;EACA,mBAAA;EACA,sDAAA;UAAA,8CAAA;AAEF;AAAE;EACE,OAAA;AAEJ;AACE;EAnBF;IAoBI,aAAA;EAEF;AACF;AAAE;EACE,UAAA;EACA,SAAA;EACA,2DAAA;EACA,eAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AAEJ;AACE;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,mBAAA;EACA,2DAAA;EACA,qBAAA;AACJ;AACE;EAKI,qBAAA;EACF,gBAAA;AAHJ;AAFI;EACE,gBAAA;EACA,qBAAA;AAIN;;AAGA;EACE,WAAA;EACA,gBAAA;AAAF\",\"sourcesContent\":[\".main {\\n  background-color: #fff;\\n  z-index: 100;\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n  width: 90vw;\\n  height: auto;\\n  padding-top: 100px;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  transition: top ease-in-out 0.4s;\\n  border-radius: 20px;\\n  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.5);\\n\\n  &.open {\\n    top: 0%;\\n  }\\n\\n  @media screen and (min-width: 700px) {\\n    display: none;\\n  }\\n\\n  h1 {\\n    padding: 0;\\n    margin: 0;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    font-size: 50px;\\n    font-weight: bolder;\\n    line-height: 0.95;\\n    z-index: 100;\\n  }  \\n\\n  a {\\n    color: #0088ff;\\n    font-size: 30px;\\n    font-weight: 100;\\n    display: grid;\\n    padding-right: 0;\\n    margin-right: auto;\\n    padding: 0;\\n    margin: 0;\\n    margin-bottom: 45px;\\n    font-family: Verdana, Geneva, Tahoma, sans-serif !important;\\n    text-decoration: none;\\n  }\\n  .selected {\\n    &::after{\\n      content: \\\"    ●\\\";\\n      display: inline-block;\\n    }\\n      display: inline-block;\\n    font-weight: 900;\\n  }\\n}\\n\\n.linkcontainer {\\n  width: 100%;\\n  margin-top: 68px;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Dropdown_main__2j4U4\",\n\t\"open\": \"Dropdown_open__NOjbT\",\n\t\"selected\": \"Dropdown_selected__3SWe5\",\n\t\"linkcontainer\": \"Dropdown_linkcontainer__JJUnF\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9zdHlsZXMvRHJvcGRvd24ubW9kdWxlLnNjc3M/OGI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsOEJBQThCLFFBQVMsc0JBQXNCLHlCQUF5QiwyQkFBMkIsaUJBQWlCLG9CQUFvQixlQUFlLFlBQVksZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHdCQUF3Qiw2Q0FBNkMscUNBQXFDLHdCQUF3QiwyREFBMkQsMkRBQTJELEdBQUcsOENBQThDLFlBQVksR0FBRyx3Q0FBd0MsMkJBQTJCLG9CQUFvQixLQUFLLEdBQUcsNEJBQTRCLGVBQWUsY0FBYyxnRUFBZ0Usb0JBQW9CLHdCQUF3QixzQkFBc0IsaUJBQWlCLEdBQUcsMkJBQTJCLG1CQUFtQixvQkFBb0IscUJBQXFCLGtCQUFrQixxQkFBcUIsdUJBQXVCLGVBQWUsY0FBYyx3QkFBd0IsZ0VBQWdFLDBCQUEwQixHQUFHLG1EQUFtRCwwQkFBMEIscUJBQXFCLEdBQUcsMERBQTBELHVCQUF1QiwwQkFBMEIsR0FBRyxvQ0FBb0MsZ0JBQWdCLHFCQUFxQixHQUFHLE9BQU8sOEdBQThHLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsZ0NBQWdDLDJCQUEyQixpQkFBaUIsb0JBQW9CLGVBQWUsWUFBWSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHFDQUFxQyx3QkFBd0IsbURBQW1ELGNBQWMsY0FBYyxLQUFLLDRDQUE0QyxvQkFBb0IsS0FBSyxVQUFVLGlCQUFpQixnQkFBZ0Isa0VBQWtFLHNCQUFzQiwwQkFBMEIsd0JBQXdCLG1CQUFtQixLQUFLLFdBQVcscUJBQXFCLHNCQUFzQix1QkFBdUIsb0JBQW9CLHVCQUF1Qix5QkFBeUIsaUJBQWlCLGdCQUFnQiwwQkFBMEIsa0VBQWtFLDRCQUE0QixLQUFLLGVBQWUsZUFBZSwyQkFBMkIsOEJBQThCLE9BQU8sOEJBQThCLHVCQUF1QixLQUFLLEdBQUcsb0JBQW9CLGdCQUFnQixxQkFBcUIsR0FBRyxtQkFBbUI7QUFDenNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL0NvbXBvbmVudHMvc3R5bGVzL0Ryb3Bkb3duLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDkwdnc7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMC40cztcXG4gIHRyYW5zaXRpb246IHRvcCBlYXNlLWluLW91dCAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuLkRyb3Bkb3duX21haW5fXzJqNFU0LkRyb3Bkb3duX29wZW5fX05PamJUIHtcXG4gIHRvcDogMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAuRHJvcGRvd25fbWFpbl9fMmo0VTQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgaDEge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAwLjk1O1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG4uRHJvcGRvd25fbWFpbl9fMmo0VTQgYSB7XFxuICBjb2xvcjogIzAwODhmZjtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5Ecm9wZG93bl9tYWluX18yajRVNCAuRHJvcGRvd25fc2VsZWN0ZWRfXzNTV2U1IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcbi5Ecm9wZG93bl9tYWluX18yajRVNCAuRHJvcGRvd25fc2VsZWN0ZWRfXzNTV2U1OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiICAgIOKXj1xcXCI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5Ecm9wZG93bl9saW5rY29udGFpbmVyX19KSlVuRiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDY4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Db21wb25lbnRzL3N0eWxlcy9Ecm9wZG93bi5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO1VBQUEsOENBQUE7QUFFRjtBQUFFO0VBQ0UsT0FBQTtBQUVKO0FBQ0U7RUFuQkY7SUFvQkksYUFBQTtFQUVGO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDJEQUFBO0VBQ0EscUJBQUE7QUFDSjtBQUNFO0VBS0kscUJBQUE7RUFDRixnQkFBQTtBQUhKO0FBRkk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBSU47O0FBR0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFBRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogMTAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAtMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogOTB2dztcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiB0b3AgZWFzZS1pbi1vdXQgMC40cztcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggMTAwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcblxcbiAgJi5vcGVuIHtcXG4gICAgdG9wOiAwJTtcXG4gIH1cXG5cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoMSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDAuOTU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gIH0gIFxcblxcbiAgYSB7XFxuICAgIGNvbG9yOiAjMDA4OGZmO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbiAgLnNlbGVjdGVkIHtcXG4gICAgJjo6YWZ0ZXJ7XFxuICAgICAgY29udGVudDogXFxcIiAgICDil49cXFwiO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIH1cXG59XFxuXFxuLmxpbmtjb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA2OHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiRHJvcGRvd25fbWFpbl9fMmo0VTRcIixcblx0XCJvcGVuXCI6IFwiRHJvcGRvd25fb3Blbl9fTk9qYlRcIixcblx0XCJzZWxlY3RlZFwiOiBcIkRyb3Bkb3duX3NlbGVjdGVkX18zU1dlNVwiLFxuXHRcImxpbmtjb250YWluZXJcIjogXCJEcm9wZG93bl9saW5rY29udGFpbmVyX19KSlVuRlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/styles/Dropdown.module.scss\n");

/***/ })

})