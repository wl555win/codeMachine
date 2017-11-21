# 代码生成

### 读取配置的接口json文件，根据模板生成java代码，自动生成注释和java代码等内容
### 运行codeMachine.coffee 文件来生成代码
### 按照业务修改配置文件， 执行 npm run index（ 依赖coffeescript ）

###
- 生成对应的CMD DOMAIN SERVICE代码，默认按照查询的逻辑来实现，用一个参数来控制具体的DOMAIN逻辑，是单查询，先删后插或者其它
- 生成默认的sqlMap，但是并不会生成SQL代码
- 由于是接口文件的代码机，所以并不生成对应的jsp代码

## 使用说明

### 定制接口的json文件 放在node_modules interfaceDef目录下，可以根据配置文件决定是直接生成所有的代码还是生成指定接口名称的代码
### 定制生成文件的路径，修改配置文件 codeMachine\src\node_modules\config.coffee

### 接口文件示例
	{
		interfaceName: '零售户数据查询'
		interfaceUrl: '/imm/cust.cmd?method=custList'
		desc: '查询登陆用户'
		method: 'GET'
		author: 'XXX'
		date: '2017-9-21'
		params: {
			COM_ID: '公司编码',
			LANTITUDE: '经纬度'
		}
		result: {
			ok: true
			msg: '异常消息'
			data:[
				{
					CUST_CODE: '零售户编码'
					CUST_NAME: '零售户名称'
				}
			]
		}
	}
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

### 生成代码示例Cmd
	@MethodDesc(
		name = "零售户数据查询",
		author = "XXX", 
		createDate = "2017-9-21", 
		inputJson = "{'COM_ID':'公司编码','LANTITUDE':'经纬度'}", 
		method = "GET", 
		outputJson = "{'ok':true,'msg':'异常消息','data':[{'CUST_CODE':'零售户编码','CUST_NAME':'零售户名称'}]}", 
		path = "/imm/cust.cmd?method=custList",
		desc="查询登陆用户",
		version="1.0"
	)
	public void custList(HttpServletRequest req, HttpServletResponse rep,
			IErrorHandler errorHandler, IMessageHandler messageHandler,	ViewHelper viewHelper) {

		if (log.isInfoEnabled()) {
			log.info("[XXX] CustCmd.custList--begin");
		}

		Map rltMap = new HashMap();
		try{
			Map paraMap = new HashMap();
			paraMap.put( "COM_ID", req.getParameter( "COM_ID" ) );
			paraMap.put( "LANTITUDE", req.getParameter( "LANTITUDE" ) );

			Map data = getCustService().custList( beanMap );
			rltMap.put( "data", data );
			rltMap.put( "ok", "true" );
		}catch( Exception e ){
			if( log.isErrorEnabled() ){
				log.error( "custList Exception = ", e );
			}
			rltMap.put( "ok", false );
			rltMap.put( "msg", e.toString() );
		}finally{
			RepSendJson.sendJson(rltMap, rep);
		}

		if (log.isInfoEnabled()) {
			log.info("[XXX] CustCmd.custList--end");
		}

	}


	@MethodDesc(
		name = "增加重点户",
		author = "YYY", 
		createDate = "2017-9-21", 
		inputJson = "[{'name':'COM_ID','desc':'公司编码','validate':'不能为空，最长30位字符'},{'name':'CUST_CODE','desc':'零售户编码','validate':'不能为空，最长30位字符'}]", 
		method = "POST", 
		outputJson = "[{'name':'ok','desc':'成功返回true 失败返回False'},{'name':'msg','desc':'异常信息'}]", 
		path = "/imm/cust.cmd?method=addCust",
		desc="增加重点户",
		version="1.0"
	)
	public void addCust(HttpServletRequest req, HttpServletResponse rep,
			IErrorHandler errorHandler, IMessageHandler messageHandler,	ViewHelper viewHelper) {

		if (log.isInfoEnabled()) {
			log.info("[YYY] CustCmd.addCust--begin");
		}

		Map rltMap = new HashMap();
		try{
			String dataInfo = XsmTool.getBodyString( req );
			Map paramMap = JsonUtils.readToObject( dataInfo, Map.class );
			if ( paramMap == null ) {
				throw new RuntimeException( "参数为空！" );
			}
			Map data = getCustService().addCust( beanMap );
			rltMap.put( "data", data );
			rltMap.put( "ok", "true" );
		}catch( Exception e ){
			if( log.isErrorEnabled() ){
				log.error( "addCust Exception = ", e );
			}
			rltMap.put( "ok", false );
			rltMap.put( "msg", e.toString() );
		}finally{
			RepSendJson.sendJson(rltMap, rep);
		}

		if (log.isInfoEnabled()) {
			log.info("[YYY] CustCmd.addCust--end");
		}

	}

### 生成代码示例IService

	/**
	* 零售户数据查询
	* @autor XXX
	* @desc 查询登陆用户
	*/
	public Map custList( Map beanMap );



	/**
	* 增加重点户
	* @autor YYY
	* @desc 增加重点户
	*/
	public Map addCust( Map beanMap );

### 生成代码示例IDomain
	/**
	* 零售户数据查询
	* @autor XXX
	* @desc 查询登陆用户
	*/
	public Map custList( Map beanMap );



	/**
	* 增加重点户
	* @autor YYY
	* @desc 增加重点户
	*/
	public Map addCust( Map beanMap );

### 生成代码示例Service
	/**
	* 零售户数据查询
	* @autor XXX
	* @desc 查询登陆用户
	*/
	public Map custList( Map beanMap ){
		getCustDomain().custList( beanMap );
	}


	/**
	* 增加重点户
	* @autor YYY
	* @desc 增加重点户
	*/
	public Map addCust( Map beanMap ){
		getTransactionTemplate().execute( new TransactionCallbackWithoutResult() {
			protected void doInTransactionWithoutResult( TransactionStatus arg0 ) {
				getCustDomain().addCust( beanMap );
			}
		} );
	}

### 生成代码示例Domain
	/**
	* 零售户数据查询
	* @autor XXX
	* @desc 查询登陆用户
	*/
	public Map custList( Map beanMap ){
		return V6SqlSessionUtil.getSqlSession().selectOne( "custDomain.custList", beanMap );
	}



	/**
	* 增加重点户
	* @autor YYY
	* @desc 增加重点户
	*/
	public Map addCust( Map beanMap ){
		return V6SqlSessionUtil.getSqlSession().selectOne( "custDomain.addCust", beanMap );
	}

