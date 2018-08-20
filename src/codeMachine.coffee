fs = require 'fs'
Utils = require 'utils'
dirUtils = require 'utils/dirUtils'
TemplatesUtils = require 'templates'
InterfaceDefs = require 'interfaceDef/data' #接口定义的json文件
Config = require 'config'

# 代码路径,将会按照V6工程的路径，自动生成文件夹及文件
CODE_PATH = Config.codePath

exists = fs.existsSync( CODE_PATH )

if not exists
	dirUtils.mkdirsSync( CODE_PATH )

#过滤出接口的定义
interFaceRlt = []
if Config.createAll
	interFaceRlt = InterfaceDefs
else
	Config.interfaceNames.map ( d )->
		InterfaceDefs.map ( defTmp )->
			if defTmp.interfaceName is d
				interFaceRlt.push defTmp

reg = /(.*\/)(.*)(\.cmd)/

# 开始写东西了
interFaceRlt.map ( interDefTmp )->
	rlt = reg.exec( interDefTmp.interfaceUrl )
	cmdName = rlt[2]
	writeEnum = [
		{ name: CODE_PATH + cmdName + 'Cmd.java', template: 'renderMethod' }
		{ name: CODE_PATH + 'I' + cmdName + 'Domain.java', template: 'renderIDomain' }
		{ name: CODE_PATH + 'I' + cmdName + 'Service.java', template: 'renderIService' }
		{ name: CODE_PATH + cmdName + 'Domain.java', template: 'renderDomain' }
		{ name: CODE_PATH + cmdName + 'Service.java', template: 'renderService' }
	]
	for writeConf in writeEnum
		fs.writeFile( writeConf.name, TemplatesUtils[writeConf.template]( interDefTmp ) , 
			{ flag: 'a' }, (err)->console.log( """#{interDefTmp.interfaceName} has finished""" ) )