webpackJsonp([4],{"9RlR":function(e,t){},WECm:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=[{title:"分类",dataIndex:"type_name",key:"type_name",scopedSlots:{customRender:"type_name"}},{title:"Key",dataIndex:"key",key:"key",scopedSlots:{customRender:"key"}},{title:"Value",dataIndex:"value",key:"value",scopedSlots:{customRender:"value"}},{title:"备注",dataIndex:"remarks",key:"remarks",scopedSlots:{customRender:"remarks"}},{title:"更新时间",key:"update_time",dataIndex:"update_time",scopedSlots:{customRender:"update_time"}},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:60}],n={name:"variableHome",data:function(){return{columns:s,loading:!1,data:[],type_data:[],formAdd:this.$form.createForm(this),visible_add:!1,formUpdate:this.$form.createForm(this),visible_edit:!1,key:0,loadingUpdate:!1,loadingAdd:!1,so_text:"",select_type:0}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.loading=!0,this.$http.post("/api/v1/w5/get/variablen/list",{type:a,keywords:t}).then(function(t){0==t.code?(e.data=t.data,e.onSelectType(),e.loading=!1):(e.$message.error(t.msg),e.loading=!1)})},onSelectType:function(){var e=this;this.$http.post("/api/v1/w5/get/type/list",{type:2}).then(function(t){0==t.code?e.type_data=t.data:e.$message.error(t.msg)})},del:function(e){var t=this;this.$http.post("/api/v1/w5/post/variablen/del",{id:e}).then(function(e){0==e.code?(t.$message.success("删除成功"),t.onLoad()):t.$message.error(e.msg)})},onAdd:function(e){var t=this;e.preventDefault(),this.formAdd.validateFields(function(e,a){e||(t.loadingAdd=!0,t.$http.post("/api/v1/w5/post/variablen/add",{type_id:a.type,key:a.keys,value:a.values,remarks:a.remarks}).then(function(e){0==e.code?(t.$message.success("添加成功"),t.loadingAdd=!1,t.onCloseAdd(),t.onLoad()):(t.$message.error(e.msg),t.loadingAdd=!1)}))})},onUpdate:function(e){var t=this;e.preventDefault(),this.formUpdate.validateFields(function(e,a){e||(t.loadingUpdate=!0,t.$http.post("/api/v1/w5/post/variablen/update",{id:t.key,type_id:a.type,key:a.keys,value:a.values,remarks:a.remarks}).then(function(e){0==e.code?(t.$message.success("更新成功"),t.loadingUpdate=!1,t.onCloseEdit(),t.onLoad()):(t.$message.error(e.msg),t.loadingUpdate=!1)}))})},showEdit:function(e,t,a,s,n){var r=this;setTimeout(function(){r.formUpdate.setFieldsValue({type:String(t),keys:a,values:s,remarks:n})},100),this.key=e,this.visible_edit=!0},onCloseEdit:function(){this.visible_edit=!1},showAdd:function(){var e=this;setTimeout(function(){e.formAdd.setFieldsValue({keys:"",values:"",remarks:""})},100),this.visible_add=!0},onCloseAdd:function(){this.visible_add=!1},onSearch:function(e){this.so_text=e,this.onLoad(this.so_text,this.select_type)},onSelect:function(e){this.select_type=e,this.onLoad(this.so_text,this.select_type)},onSwitch:function(e,t){var a=this,s=1;e&&(s=0),this.$http.post("/api/v1/w5/post/variablen/status",{id:t,status:s}).then(function(e){0==e.code?(a.$message.success("操作成功"),a.onLoad()):a.$message.error(e.msg)})},onFilterOption:function(e,t){return t.componentOptions.children[0].text.toLowerCase().indexOf(e.toLowerCase())>=0}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-layout-content",[a("div",{staticClass:"header_div"},[a("a-select",{staticClass:"align",staticStyle:{width:"120px"},attrs:{"show-search":"","filter-option":e.onFilterOption,"default-value":"0"},on:{change:e.onSelect}},[a("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),e._v(" "),e._l(e.type_data,function(t,s){return a("a-select-option",{key:s,attrs:{value:t.id}},[e._v(e._s(t.name))])})],2),e._v(" "),a("a-input-search",{staticClass:"align",staticStyle:{width:"200px"},attrs:{placeholder:"请输入名称"},on:{search:e.onSearch}}),e._v(" "),a("a-button",{staticClass:"align btn_add",attrs:{type:"primary",icon:"plus-circle"},on:{click:e.showAdd}},[e._v("\n            添加\n        ")])],1),e._v(" "),a("a-table",{attrs:{rowKey:"id",columns:e.columns,"data-source":e.data,loading:e.loading},scopedSlots:e._u([{key:"key",fn:function(t){return a("span",{},[a("b",[e._v(e._s(t))])])}},{key:"type_name",fn:function(t){return a("a-tag",{attrs:{color:"#7d838c"}},[e._v("\n            "+e._s(t)+"\n        ")])}},{key:"update_time",fn:function(t){return a("span",{},[e._v("\n            "+e._s(e.Dayjs(t).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"create_time",fn:function(t){return a("span",{},[e._v("\n            "+e._s(e.Dayjs(t).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"remarks",fn:function(t){return a("span",{},[e._v("\n            "+e._s(t)+"\n        ")])}},{key:"status",fn:function(t,s){return a("div",{},[a("a-switch",0===t?{attrs:{"default-checked":""},on:{click:function(t){return e.onSwitch(t,s.id)}}}:{on:{click:function(t){return e.onSwitch(t,s.id)}}},[a("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),e._v(" "),a("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1)],1)}},{key:"action",fn:function(t,s){return a("span",{},[a("a-space",{attrs:{size:"small"}},[a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[a("span",[e._v("删除")])]),e._v(" "),a("a-popconfirm",{attrs:{title:"是否要删除该变量?","ok-text":"是","cancel-text":"否"},on:{confirm:function(t){return e.del(s.id)}}},[a("a-icon",{staticClass:"pointer",attrs:{type:"delete"}})],1)],2),e._v(" "),a("span",[e._v("|")]),e._v(" "),a("a-tooltip",{attrs:{placement:"bottom"}},[a("template",{slot:"title"},[a("span",[e._v("编辑")])]),e._v(" "),a("a-icon",{staticClass:"pointer",attrs:{type:"form"},on:{click:function(t){return e.showEdit(s.id,s.type_id,s.key,s.value,s.remarks)}}})],2)],1)],1)}}])}),e._v(" "),a("a-drawer",{attrs:{title:"添加新变量",width:300,visible:e.visible_add,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseAdd}},[a("a-form",{attrs:{form:e.formAdd,layout:"vertical"},on:{submit:e.onAdd}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"分类"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择分类"}]}],expression:"[\n                  'type',\n                  {\n                    rules: [{ required: true, message: '请选择分类' }],\n                  },\n                ]"}],attrs:{"show-search":"","filter-option":e.onFilterOption,placeholder:"请选择分类"}},e._l(e.type_data,function(t,s){return a("a-select-option",{key:s,attrs:{value:t.id}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Key"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["keys",{rules:[{required:!0,message:"请输入变量 Key"},{max:20,message:"Key 长度不能超过20位"}]}],expression:"[\n                  'keys',\n                  {\n                    rules: [\n                      { required: true, message: '请输入变量 Key' },\n                      { max: 20, message: 'Key 长度不能超过20位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入变量 Key"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Value"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["values",{rules:[{required:!0,message:"请输入变量 Value"},{max:255,message:"Value 长度不能超过255位"}]}],expression:"[\n                  'values',\n                  {\n                    rules: [\n                      { required: true, message: '请输入变量 Value' },\n                      { max: 255, message: 'Value 长度不能超过255位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入变量 Value"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{rules:[{required:!1,message:"请输入备注"},{max:255,message:"备注长度不能超过255位"}]}],expression:"[\n                  'remarks',\n                  {\n                    rules: [\n                      { required: false, message: '请输入备注' },\n                      { max: 255, message: '备注长度不能超过255位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入备注",rows:4}})],1)],1)],1),e._v(" "),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onCloseAdd}},[e._v("关闭")]),e._v(" "),a("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loadingAdd}},[e._v("\n                    添加\n                ")])],1)],1)],1),e._v(" "),a("a-drawer",{attrs:{title:"更新变量信息",width:300,visible:e.visible_edit,"body-style":{paddingBottom:"80px"}},on:{close:e.onCloseEdit}},[a("a-form",{attrs:{form:e.formUpdate,layout:"vertical"},on:{submit:e.onUpdate}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"分类"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请选择分类"}]}],expression:"[\n                  'type',\n                  {\n                    rules: [{ required: true, message: '请选择分类' }],\n                  },\n                ]"}],attrs:{"show-search":"","filter-option":e.onFilterOption,placeholder:"请选择分类"}},e._l(e.type_data,function(t,s){return a("a-select-option",{key:s,attrs:{value:String(t.id)}},[e._v(e._s(t.name))])}),1)],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Key"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["keys",{rules:[{required:!0,message:"请输入变量 Key"},{max:20,message:"Key 长度不能超过20位"}]}],expression:"[\n                  'keys',\n                  {\n                    rules: [\n                      { required: true, message: '请输入变量 Key' },\n                      { max: 20, message: 'Key 长度不能超过20位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入分类名称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"Value"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["values",{rules:[{required:!0,message:"请输入变量 Value"},{max:255,message:"Value 长度不能超过255位"}]}],expression:"[\n                  'values',\n                  {\n                    rules: [\n                      { required: true, message: '请输入变量 Value' },\n                      { max: 255, message: 'Value 长度不能超过255位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入分类名称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",{attrs:{label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remarks",{rules:[{required:!1,message:"请输入备注"},{max:255,message:"备注长度不能超过255位"}]}],expression:"[\n                  'remarks',\n                  {\n                    rules: [\n                      { required: false, message: '请输入备注' },\n                      { max: 255, message: '备注长度不能超过255位' },\n                    ],\n                  },\n                ]"}],attrs:{placeholder:"请输入备注",rows:4}})],1)],1)],1),e._v(" "),a("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},[a("a-button",{style:{marginRight:"8px"},on:{click:e.onCloseEdit}},[e._v("关闭")]),e._v(" "),a("a-button",{attrs:{type:"primary","html-type":"submit",loading:e.loadingUpdate}},[e._v("\n                    更新\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,r,!1,function(e){a("9RlR")},"data-v-d18ebc6e",null);t.default=o.exports}});