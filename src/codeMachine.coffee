fs = require 'fs'
Utils = require 'utils'
TemplatesUtils = require 'templates'
InterfaceDefs = require 'interfaceDef/data' #接口定义的json文件
Config = require 'config'

# 代码路径,将会按照V6工程的路径，自动生成文件夹及文件
CODE_PATH = Config.codePath

exists = fs.existsSync( CODE_PATH )

if not exists
	Utils.mkdirsSync( CODE_PATH )

#过滤出接口的定义
interFaceRlt = []
if Config.createAll
	interFaceRlt = InterfaceDefs
else
	interfaceNames.map ( d )->
		InterfaceDefs.map ( defTmp )->
			if defTmp.interfaceName is d
				interFaceRlt.push defTmp

reg = /(.*\/)(.*)(\.cmd)/

# 开始写东西了
interFaceRlt.map ( interDefTmp )->
	rlt = reg.exec( interDefTmp.interfaceUrl )
	cmdName = rlt[2]
	fs.writeFile( CODE_PATH + cmdName + '.java', TemplatesUtils.renderMethod( interDefTmp ) ,(err)->console.log('has finished') )