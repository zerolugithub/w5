webpackJsonp([3],{T1vZ:function(e,t){},oBjx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=[{title:"账号",dataIndex:"account",key:"account",scopedSlots:{customRender:"account"}},{title:"昵称",dataIndex:"nick_name",key:"nick_name",scopedSlots:{customRender:"nick_name"}},{title:"E-Mail",dataIndex:"email",key:"email"},{title:"更新时间",key:"update_time",dataIndex:"update_time",scopedSlots:{customRender:"update_time"}},{title:"创建时间",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:60}],n={name:"userHome",data:function(){return{columns:s,loading:!1,data:[],formAdd:this.$form.createForm(this),visible_add:!1,formUpdate:this.$form.createForm(this),visible_edit:!1,key:0,loadingUpdate:!1,loadingAdd:!1}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.loading=!0,this.$http.post("/api/v1/w5/get/user/list",{keywords:t}).then(function(t){0==t.code?(e.data=t.data,e.loading=!1):(e.$message.error(t.msg),e.loading=!1)})},del:function(e){var t=this;this.$http.post("/api/v1/w5/post/user/del",{id:e}).then(function(e){0==e.code?(t.$message.success("删除成功"),t.onLoad()):t.$message.error(e.msg)})},onAdd:function(e){var t=this;e.preventDefault(),this.formAdd.validateFields(function(e,a){if(!e){if(t.loadingAdd=!0,a.passwd!==a.repasswd)return t.$message.warning("两次密码不相同"),t.loadingAdd=!1,!1;t.$http.post("/api/v1/w5/post/user/add",{account:a.account,passwd:a.passwd,nick_name:a.nick_name,email:a.email}).then(function(e){0==e.code?(t.$message.success("添加成功"),t.loadingAdd=!1,t.onCloseAdd(),t.onLoad()):(t.$message.error(e.msg),t.loadingAdd=!1)})}})},onUpdate:function(e){var t=this;e.preventDefault(),this.formUpdate.validateFields(function(e,a){if(!e){t.loadingUpdate=!0;var s="";if(a.passwd!==a.repasswd)return t.$message.warning("两次密码不相同"),t.loadingUpdate=!1,!1;void 0!==a.passwd&&(s=a.passwd),t.$http.post("/api/v1/w5/post/user/update",{id:t.key,nick_name:a.nick_name,email:a.email,passwd:s}).then(function(e){0==e.code?(t.$message.success("更新成功"),t.loadingUpdate=!1,t.onCloseEdit(),t.onLoad()):(t.$message.error(e.msg),t.loadingUpdate=!1)})}})},showEdit:function(e,t,a,s){var n=this;setTimeout(function(){n.formUpdate.setFieldsValue({account:t,nick_name:a,email:s})},100),this.key=e,this.visible_edit=!0},onCloseEdit:function(){this.visible_edit=!1},showAdd:function(){var e=this;setTimeout(function(){e.formAdd.setFieldsValue({account:"",nick_name:"",email:""})},100),this.visible_add=!0},onCloseAdd:function(){this.visible_add=!1},onSearch:function(e){this.onLoad(e)},onSwitch:function(e,t){var a=this,s=1;e&&(s=0),this.$http.post("/api/v1/w5/post/user/status",{id:t,status:s}).then(function(e){0==e.code?(a.$message.success("操作成功"),a.onLoad()):a.$message.error(e.msg)})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",[a("div",{staticClass:"header_div"},[a("a-input-search",{staticClass:"align",staticStyle:{width:"200px"},attrs:{placeholder:"请输入账号/昵称/邮箱"},on:{search:e.onSearch}}),e._v(" "),a("a-button",{staticClass:"align btn_add",attrs:{type:"primary",icon:"plus-circle"},on:{click:e.showAdd}},[e._v("\n            添加\n        ")])],1),e._v(" "),a("a-table",{attrs:{rowKey:"id",columns:e.columns,"data-source":e.data,loading:e.loading},scopedSlots:e._u([{key:"nick_name",fn:function(t){return a("span",{},[a("b",[e._v(e._s(t))])])}},{key:"account",fn:function(t){return a("a-tag",{attrs:{color:"#7d838c"}},[e._v("\n            "+e._s(t)+"\n        ")])}},{key:"update_time",fn:function(t){return a("span",{},[e._v("\n            "+e._s(e.Dayjs(t).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"create_time",fn:function(t){return a("span",{},[e._v("\n            "+e._s(e.Dayjs(t).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"status",fn:function(t,s){return a("div",{},[a("a-switch",0===t?{attrs:{"default-checked":""},on:{click:function(t){return e.onSwitch(t,s.id)}}}:{on:{click:function(t){return e.onSwitch(t,s.id)}}},[a("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),e._v(" "),a("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1)],1)}},{key:"action",fn:function(t,s){return a("span",{},[a("a-space",{attrs:{size:"small"}},[a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[a("span",[e._v("删除")])]),e._v(" "),a("a-popconfirm",{attrs:{title:"是否要删除该用户?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.del(s.id)}}},[a("a-icon",{staticClass:"pointer",attrs:{type:"delete"}})],1)],2),e._v(" "),a("span",[e._v("|")]),e._v(" "),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[a("span",[e._v("编辑")])]),e._v(" "),a("a-icon",{staticClass:"pointer",attrs:{type:"form"},on:{click:function(t){return e.showEdit(s.id,s.account,s.nick_name,s.email)}}})],2)],1)],1)}}])}),e._v(" "),a("a-drawer",{attrs:{title:"添加新用户",width:300,visible:e.visible_add,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseAdd}},[a("a-form",{attrs:{form:e.formAdd,layout:"vertical"},on:{submit:e.onAdd}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"账号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"请输入用户账号"},{min:2,message:"账号长度不能少于2位"},{max:20,message:"账号长度不能超过20位"}]}],expression:"[\n                  'account',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户账号' },\n                      { min: 2, message: '账号长度不能少于2位' },\n                      { max: 20, message: '账号长度不能超过20位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户账号"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"昵称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nick_name",{rules:[{required:!0,message:"请输入用户昵称"},{min:2,message:"昵称长度不能少于2位"},{max:20,message:"昵称长度不能超过20位"}]}],expression:"[\n                  'nick_name',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户昵称' },\n                      { min: 2, message: '昵称长度不能少于2位' },\n                      { max: 20, message: '昵称长度不能超过20位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户昵称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"E-Mail"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入用户 E-Mail"},{min:6,message:"邮箱长度不能少于6位"},{max:50,message:"邮箱长度不能超过50位"}]}],expression:"[\n                  'email',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户 E-Mail' },\n                      { min: 6, message: '邮箱长度不能少于6位' },\n                      { max: 50, message: '邮箱长度不能超过50位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户 E-Mail"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["passwd",{rules:[{required:!0,message:"请输入用户密码"},{min:8,message:"密码长度不能少于8位"},{max:16,message:"密码长度不能超过16位"}]}],expression:"[\n                  'passwd',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户密码' },\n                      { min: 8, message: '密码长度不能少于8位' },\n                      { max: 16, message: '密码长度不能超过16位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户密码",type:"password"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"确认密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["repasswd",{rules:[{required:!0,message:"请确认用户密码"},{min:8,message:"密码长度不能少于8位"},{max:16,message:"密码长度不能超过16位"}]}],expression:"[\n                  'repasswd',\n                  {\n                    rules: [\n                      { required: true, message: '请确认用户密码' },\n                      { min: 8, message: '密码长度不能少于8位' },\n                      { max: 16, message: '密码长度不能超过16位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请确认用户密码",type:"password"}})],1)],1)],1),e._v(" "),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onCloseAdd}},[e._v("关闭")]),e._v(" "),a("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loadingAdd}},[e._v("\n                    添加\n                ")])],1)],1)],1),e._v(" "),a("a-drawer",{attrs:{title:"更新用户信息",width:300,visible:e.visible_edit,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseEdit}},[a("a-form",{attrs:{form:e.formUpdate,layout:"vertical"},on:{submit:e.onUpdate}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"账号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["account",{rules:[{required:!0,message:"请输入用户账号"}]}],expression:"[\n                  'account',\n                  {\n                    rules: [{ required: true, message: '请输入用户账号' }],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户账号",disabled:!0}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"昵称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["nick_name",{rules:[{required:!0,message:"请输入用户昵称"},{min:2,message:"昵称长度不能少于2位"},{max:20,message:"昵称长度不能超过20位"}]}],expression:"[\n                  'nick_name',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户昵称' },\n                      { min: 2, message: '昵称长度不能少于2位' },\n                      { max: 20, message: '昵称长度不能超过20位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户昵称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"E-Mail"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,message:"请输入用户 E-Mail"},{min:6,message:"邮箱长度不能少于6位"},{max:50,message:"邮箱长度不能超过50位"}]}],expression:"[\n                  'email',\n                  {\n                    rules: [\n                      { required: true, message: '请输入用户 E-Mail' },\n                      { min: 6, message: '邮箱长度不能少于6位' },\n                      { max: 50, message: '邮箱长度不能超过50位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入用户 E-Mail"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["passwd"],expression:"['passwd']"}],attrs:{placeholder:"请输入用户密码",type:"password"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"确认密码"}},[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["repasswd"],expression:"['repasswd']"}],attrs:{placeholder:"请确认用户密码",type:"password"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("p",{staticClass:"center"},[e._v("提示：密码不填写，默认不修改密码")])])],1),e._v(" "),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onCloseEdit}},[e._v("关闭")]),e._v(" "),a("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loadingUpdate}},[e._v("\n                    更新\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(n,r,!1,function(e){a("T1vZ")},"data-v-e2b4ac6a",null);t.default=i.exports}});