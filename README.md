# 代码生成

### 读取配置的接口json文件，根据模板生成java代码，自动生成注释和java代码等内容
### 运行codeMachine.coffee 文件来生成代码

###
- 生成对应的CMD DOMAIN SERVICE代码，默认按照查询的逻辑来实现，用一个参数来控制具体的DOMAIN逻辑，是单查询，先删后插或者其它
- 生成默认的sqlMap，但是并不会生成SQL代码
- 由于是接口文件的代码机，所以并不生成对应的jsp代码

## 使用说明

### 接口文件示例
	{
		interfaceName: '增加重点户'
		interfaceUrl: '/imm/cust.cmd?method=addCust'
		desc: '增加重点户，用于增加重点户'
		method: 'POST'
		author: 'YYY'
		date: '2017-9-21'
		params: [
			{
				name: 'COM_ID'
				desc: '公司编码',
				nullAble: false, #不能为空，如果为空，返回的msg消息为 '公司编码不能为空！'
				maxLength: 30 #最大长度，如果超长，返回的msg消息为 '公司编码超过最大长度30！'
			}
			{
				name: 'CUST_CODE'
				desc: '零售户编码',
				nullAble: false, #不能为空，如果为空，返回的msg消息为 '零售户编码不能为空！'
				maxLength: 30 #最大长度，如果超长，返回的msg消息为 '零售户编码超过最大长度30！'
			}
		]
		result: {
			ok: true #成功返回true失败返回false
			msg: '' # 异常消息
		}
	}

### 定制接口的json文件 放在node_modules interfaceDef目录下，可以根据配置文件决定是直接生成所有的代码还是生成指定接口名称的代码