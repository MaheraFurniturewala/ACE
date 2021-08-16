const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./ui'));


app.get('/',(req,res)=>{
    res.render('ide');
});

app.post('/',(req,res)=>{
   console.log("data of the body",req.body.code);
   
      
        var config = {
            method: 'post',
            url: 'https://codexweb.netlify.app/.netlify/functions/enforceCode',
            headers: { 
            'Content-Type': 'application/json'
            },
            data :{
                "code": req.body.code,
                "language": req.body.language,
                "input": req.body.input,
            },
            };
            
            axios(config)
            .then(function (response) {
            console.log("response.data",response.data);
            // $(".output").text(response.output.data);
            console.log("response.data.output",response.data.output);
            return res.status(200).json({
                data:{
                    data:response.data.output,
                },
                message:"Got output",
            })
            })
            .catch(function (error) {
            console.log(error);
            res.send("sorry bro");
            });
           
            
    
})

app.listen(8000);