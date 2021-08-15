const express = require('express');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./ui'));

app.get('/',(req,res)=>{
    res.render('ide');
})

app.listen(8000);