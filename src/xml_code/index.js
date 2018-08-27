let sqlRender = require( './sqlRender' ).sqlRender
let parseXml = require( './parseXml' ).parseXml

parseXml( __dirname + '/V6_schema_IMM.xml', ( rlt )=>{
	console.log( sqlRender( rlt ) )
})