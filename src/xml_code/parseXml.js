let fs = require( 'fs' )
var parseString = require('xml2js').parseString
var _ = require( 'lodash' )

var parseXml = ( xmlPath, cb )=>{
	xmlPath = xmlPath ? xmlPath : ( __dirname + '/V6_schema_IMM.xml' )
	fs.readFile( xmlPath, (err, data)=>{
			console.log( data )
			parseString( data, ( err, result )=>{
					if( err ){
						console.log( err )
					}else{
						// 想要的数据应该是 { id: '', name : '', column: [ { id: '', name : '' } ... ]}
						let rlt = {}
						rlt = _.merge( rlt, result.table['$'] )
						let column = result.table.column
						let columnRlt = []
						_.forEach( column, d => {
							columnRlt.push( d['$'] )
						});
						rlt.column = columnRlt
						console.log( rlt )
						if( !!cb ){
							cb( rlt )
						}
					}
				}
			)
		}
	)
}

exports.parseXml = parseXml