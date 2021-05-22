module.exports = {	
    getposts: function(connection, callback){	
        let sql = 'select * from apontamentos.bancodehoras';	
        connection.query(sql, callback);   
    }
} 