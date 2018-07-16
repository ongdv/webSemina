module.exports =(app, con) => {
    app.get('/list/:id',(req, res) => {
        var get = req.params.id;
        var result = {};
        console.log(get);
        var sql = `SELECT * FROM todo_list WHERE id='${get}'`;
        con.query(sql, (err, row) => {
            if(err){
                result['success'] = 0;
                result['err'] = 'DB error';
                console.log(err);
                res.send(result);
                return;
            }else{
                if(row.length !== 0){
                    result['success'] = 1;
                    result['row'] = row;
                    console.log(row);
                    res.send(row);
                    return;
                }else{
                    result['success'] = 0;
                    result['err'] = 'Empty';
                    res.send(result);
                    return;
                }
                
            }
        });
    });
}