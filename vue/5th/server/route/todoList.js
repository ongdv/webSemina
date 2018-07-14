module.exports =(app, con) => {
    app.get('/list',(req, res) => {
        var result = {};
        var sql = "SELECT * FROM todo_list";
        con.query(sql, (err, data, row) => {
            if(err){
                console.log(err);
                result['success'] = 0;
                result['err'] = 'DB Error';
                console.log(result);
                res.send(result);
                return;
            }else{
                result['success'] = 1;
                result['data'] = data;
                res.send(result);
                return;
            }
        });
    });
}