module.exports =(app, con) => {
    app.get('/list',(req, res) => {
       console.log("todolist");
       res.send('1');
    });
}