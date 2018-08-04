var oracledb = require('oracledb');
var dbConfig = require('./config/OracleConfig');

oracledb.getConnection(
    {
        user: dbConfig.user,
        password: dbConfig.password,
        connectString: dbConfig.connectString
    },
    (err, con) => {
        if(err){
            console.log(err.message);
            return;
        }else{
            con.execute(
                
            )
        }
    }
)