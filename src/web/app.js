var TemplatesUtils = require( 'templates' )

var App = Vue.extend({
	template: `
		<div class="input">
			<textarea rows="8" cols="50" v-module="inputJson"></textarea>
		</div>
		<div class="output">
			<div class="navbar">
				<div class="navitem" :class="[tabSel=='1' ? 'seled' : '']">CMD</div>
				<div class="navitem" :class="[tabSel=='2' ? 'seled' : '']">IService</div>
				<div class="navitem" :class="[tabSel=='3' ? 'seled' : '']">Service</div>
				<div class="navitem" :class="[tabSel=='4' ? 'seled' : '']">IDomain</div>
				<div class="navitem" :class="[tabSel=='5' ? 'seled' : '']">Domain</div>
			</div>
			<div class="content">
				<textarea v-show="tabSel=='1'" rows="12" cols="50">{{cmdRlt}}</textarea>
				<textarea v-show="tabSel=='2'" rows="12" cols="50">{{iServiceRlt}}</textarea>
				<textarea v-show="tabSel=='3'" rows="12" cols="50">{{serviceRlt}}</textarea>
				<textarea v-show="tabSel=='4'" rows="12" cols="50">{{idomainRlt}}</textarea>
				<textarea v-show="tabSel=='5'" rows="12" cols="50">{{domainRlt}}</textarea>
			</div>
		</div>
	`,
	data(){
		return{
			inputJson: '', //输入的接口json串
			tabSel: '', // 1:cmd 2:iService 3:Service 4:iDomain 5: Domain
			cmdRlt: '',
			iServiceRlt: '',
			serviceRlt: '',
			idomainRlt: '',
			domainRlt: ''
		}
	},
	methods:{
		reduceOutPut(){
			let self = this
			let interDefTmp = JSON.parse( inputJson )
			let reg = /(.*\/)(.*)(\.cmd)/
			let rlt = reg.exec( interDefTmp.interfaceUrl )
			let cmdName = rlt[2]
			let writeEnum = [
				{ name: 'cmdRlt', template: 'renderMethod' }
				{ name: 'iServiceRlt', template: 'renderIDomain' }
				{ name: 'serviceRlt', template: 'renderIService' }
				{ name: 'idomainRlt', template: 'renderDomain' }
				{ name: 'domainRlt', template: 'renderService' }
			]
			writeEnum.map( ( d )=>{
				self[name] = TemplatesUtils[writeConf.template]( interDefTmp )
			} )
		}
	},
	watch:{
		inputJson( val, oldVal ){
			try{
				JSON.parse( val ) //如果符合JSON格式
				this.reduceOutPut()
			}catch( e ){
				console.log(e)
			}
		}
	}
})

$(function(){
	new App().$mount( '#app' )
})