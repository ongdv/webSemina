module.exports =(app, con) => {
    app.post('/todo',(req, res) => {
        var post = req.body;
        var result = {};
        if(post['item'].length != 0){
            var sql = "INSERT INTO todo_list (item, complete) VALUES ('"+post['item']+"', '')";
            con.query(sql, (err, row) => {
                if(err){
                    result['success'] = 0;
                    result['err'] = 'DB Error';
                    console.log(err);
                    res.send(result);
                    return;
                }else{
                    result['success'] = 1;
                    console.log(row);
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
}