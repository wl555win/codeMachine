var _ = require( 'lodash' )

const sqlRender = ( table )=>{
	let column = ''
	let columns = _.map( table.column, ( d )=>{
		column += `
			${d.id} ${d.type}(${d.size}) ${d.required ? 'NOT NULL' : ''},`
	})
	if( column.endsWith(',') ){
		column = column.substring( 0, column.length-1 )
	}
	let pricolumns = _.map( table.column, ( d )=>{
		if( d.primaryKey )
			return `"${d.id}"`
		else
			return null
	})
	let t = `
		CREATE TABLE ${table.id}(${column}
		)IN "TD_SALE" INDEX IN "TD_OTHER_IDX" ;
		ALTER TABLE  "${table.id}" 
			ADD CONSTRAINT "${table.id}_PK" PRIMARY KEY (${_.compact( pricolumns ).join( "," )});
	`
	return t
}

exports.sqlRender = sqlRender