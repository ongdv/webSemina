module.exports =(app, con) => {
    app.post('/todo',(req, res) => {
        var post = req.body;
        var result = {};
        if(post['item'] != ""){
            var sql = `INSERT INTO todo_list (item, complete, id) VALUES ('${post['item']}', '','${post['id']}')`;
            con.query(sql, (err, row) => {
                if(err){
                    result['success'] = 0;
                    result['err'] = 'DB Error';
                    console.log(err);
                    res.send(result);
                    return;
                }else{
                    result['success'] = 1;
                    res.send(result);
                    return;
                }
            });
        }else{
            result['success'] = 0;
            res.send(result);
            return;
        }
    });

    app.post('/delTodo', (req, res) => {
        var post = req.body;
        var result ={};
        console.log(post);
        var sql = "SELECT * FROM todo_list WHERE idx = " + post['idx'];
        con.query(sql, (err, row) => {
            if(err){
                console.log(err);
                result['success'] = 0;
                result['err'] = 'DB Error';
                res.send(result);
                return;
            }else{
                if(row.length ===0 ){
                    result['success']=0;
                    result['err'] = 'Invalid Index';
                    res.send(result);
                    console.log(result);
                    return;
                }else{
                    var sql = "DELETE FROM todo_list WHERE idx =" + post['idx'];
                    con.query(sql, (err, row) => {
                        if(err){
                            result['success'] = 0;
                            result['err'] = 'DB Error';
                            console.log(err);
                            res.send(result);
                            return;
                        }else{
                            if(row.length !== 0){
                                result['success'] = 1;
                                res.send(result);
                                return;
                            }
                        }
                        
                    });
                    
                }
            }
        });
    });
}