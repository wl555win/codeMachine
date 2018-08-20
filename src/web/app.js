var TemplatesUtils = require( 'templates/index.coffee' )
// import './index.scss';
import './index.css';

var App = Vue.extend({
	template: `
		<div id="app">
			<div class="input">
				<textarea rows="20" cols="150" v-model="inputJson"></textarea>
			</div>
			<div id="trans" @click="trans">生成代码</div>
			<div class="output">
				<div class="navbar">
					<div class="navitem" @click="nav( '1' )" :class="[tabSel=='1' ? 'seled' : '']">CMD</div>
					<div class="navitem" @click="nav( '2' )" :class="[tabSel=='2' ? 'seled' : '']">IService</div>
					<div class="navitem" @click="nav( '3' )" :class="[tabSel=='3' ? 'seled' : '']">Service</div>
					<div class="navitem" @click="nav( '4' )" :class="[tabSel=='4' ? 'seled' : '']">IDomain</div>
					<div class="navitem" @click="nav( '5' )" :class="[tabSel=='5' ? 'seled' : '']">Domain</div>
				</div>
				<div class="content">
					<textarea v-show="tabSel=='1'" rows="20" cols="150">{{cmdRlt}}</textarea>
					<textarea v-show="tabSel=='2'" rows="20" cols="150">{{iServiceRlt}}</textarea>
					<textarea v-show="tabSel=='3'" rows="20" cols="150">{{serviceRlt}}</textarea>
					<textarea v-show="tabSel=='4'" rows="20" cols="150">{{idomainRlt}}</textarea>
					<textarea v-show="tabSel=='5'" rows="20" cols="150">{{domainRlt}}</textarea>
				</div>
			</div>
		</div>
	`,
	data(){
		return{
			inputJson: 
`{
	"interfaceName": "重点终端质量分析数据获取",
	"interfaceUrl": "/imm/job_evaluation.cmd?method=getQulityEvaluationData",
	"desc": "区域查询条件没啥用，只按人查",
	"method": "GET",
	"author": "zhangwj",
	"date": "2018-3-13",
	"params": {
		"empSearch": "客户经理，以逗号分隔"
	},
	"result": {
		"ok": true,
		"msg": "异常消息",
		"data":[
			{
				"POSITION_CODE": "POSITION_CODE"
			}
		]
	}
}`
			, //输入的接口json串
			tabSel: '1', // 1:cmd 2:iService 3:Service 4:iDomain 5: Domain
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
			let interDefTmp = JSON.parse( this.inputJson )
			let reg = /(.*\/)(.*)(\.cmd)/
			let rlt = reg.exec( interDefTmp.interfaceUrl )
			let cmdName = rlt[2]
			let writeEnum = [
				{ name: 'cmdRlt', template: 'renderMethod' },
				{ name: 'iServiceRlt', template: 'renderIDomain' },
				{ name: 'serviceRlt', template: 'renderIService' },
				{ name: 'idomainRlt', template: 'renderDomain' },
				{ name: 'domainRlt', template: 'renderService' }
			]
			writeEnum.map( ( d )=>{
				self[d.name] = TemplatesUtils[d.template]( interDefTmp )
			} )
			this.$forceUpdate()
		},
		nav( item ){
			this.tabSel = item
		},
		trans(){
			try{
				console.log( this.inputJson )
				JSON.parse( this.inputJson ) //如果符合JSON格式
				this.reduceOutPut()
			}catch( e ){
				console.log(e)
			}
		}
	},
	mounted() {
		this.reduceOutPut()
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