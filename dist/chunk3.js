webpackJsonp([3],{177:function(e,t,n){function i(e){n(212)}var a=n(5)(n(222),n(203),i,null,null);e.exports=a.exports},185:function(e,t,n){"use strict";function i(e){return Object.keys(e).forEach(function(t){!1===e[t]||!0===e[t]?e[t]=!1:e[t]=""}),e}function a(e,t){var n=e.indexOf(t);e.splice(n,1)}t.a=i,t.b=a},191:function(e,t,n){t=e.exports=n(4)(),t.push([e.i,"",""])},203:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"topbar-wrapper"},[n("el-button",{attrs:{size:"small",type:"danger"},on:{click:e.add}},[e._v("新建角色\n        ")])],1),e._v(" "),n("div",{staticClass:"table-wrapper"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.rolesList,border:"",fit:"","highlight-current-row":""},on:{"selection-change":e.selectAll}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-icon",{attrs:{name:"time"}}),e._v(" "),n("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(e._f("timeConversion")(t.row.createdAt)))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"角色名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"角色描叙",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.row.edit,expression:"scope.row.edit"}],model:{value:t.row.remark,callback:function(e){t.row.remark=e},expression:"scope.row.remark"}}),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.row.edit,expression:"!scope.row.edit"}]},[e._v(e._s(t.row.remark))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{directives:[{name:"show",rawName:"v-show",value:!t.row.edit,expression:"!scope.row.edit"}],attrs:{type:"primary",size:"small",icon:"edit"},on:{click:function(n){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.row.edit,expression:"scope.row.edit"}],staticClass:"edit-btn",attrs:{type:"success",size:"small",icon:"check"},on:{click:function(n){e.handleEditSave(t.$index,t.row)}}},[e._v("完成")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),n("el-dialog",{attrs:{title:"新增角色",visible:e.isDialog},on:{"update:visible":function(t){e.isDialog=t}}},[n("el-form",{ref:"form",attrs:{model:e.addForm,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"角色名称"}},[n("el-input",{model:{value:e.addForm.name,callback:function(t){e.addForm.name=t},expression:"addForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"角色权限"}},[e._v("\n                读"),n("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.addForm.read,callback:function(t){e.addForm.read=t},expression:"addForm.read"}}),e._v("\n                写"),n("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:e.addForm.write,callback:function(t){e.addForm.write=t},expression:"addForm.write"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",slot:"footer"},[n("el-button",{on:{click:function(t){e.isDialog=!1}}},[e._v("取 消")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.saveAdd}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]}},212:function(e,t,n){var i=n(191);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(6)("3a7c07ee",i,!0)},222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(225),a=n(53),o=n(185);t.default={name:"roles",created:function(){this.getRolesList()},data:function(){return{rolesList:null,isDialog:!1,multipleSelection:[],addForm:{name:"",read:!1,write:!1}}},methods:{getRolesList:function(){var e=this;n.i(i.a)().then(function(t){e.rolesList=n.i(a.a)(t).map(function(e){return e.edit=!1,e})})},add:function(){n.i(o.a)(this.addForm),this.isDialog=!0},saveAdd:function(){var e=this;n.i(i.b)(this.addForm).then(function(){e.isDialog=!1,e.$message.success("新增成功"),e.getRolesList()}).catch(function(e){n.i(a.b)(e)})},selectAll:function(e){this.multipleSelection=e},handleEdit:function(e,t){t.edit=!0},handleEditSave:function(e,t){var a={remark:t.remark};n.i(i.c)(t.objectId,a).then(function(e){200==e.status&&(t.edit=!1)})},handleDelete:function(e,t){var r=this;n.i(a.c)("确定删除该角色吗？").then(function(){n.i(i.d)(t.objectId).then(function(e){n.i(o.b)(r.rolesList,t),r.$message.success("删除成功")})}).catch(function(e){n.i(a.b)(e)})}}}},225:function(e,t,n){"use strict";function i(e){var t=new l.a.ACL;return t.setPublicReadAccess(e.read),t.setPublicWriteAccess(e.write),t.setReadAccess(l.a.User.current(),!0),t.setWriteAccess(l.a.User.current(),!0),new l.a.Role(e.name,t).save()}function a(){return d.find()}function o(e){return n.i(c.a)({url:"roles/"+e,method:"DELETE"})}function r(e,t){return n.i(c.a)({url:"roles/"+e,method:"PUT",data:t})}t.b=i,t.a=a,t.d=o,t.c=r;var s=n(11),l=n.n(s),c=n(26),d=new l.a.Query("_Role")}});
//# sourceMappingURL=chunk3.js.map?9b60534671c4acf5dbbf