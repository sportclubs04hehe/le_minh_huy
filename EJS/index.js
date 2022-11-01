var express= require('express'),
    app= express();

    app.set('view engine','ejs');

    var posts= [
        {name:'foo bar'},
        {name:'baz'}
    ]

    app.get('/posts',(req,res)=>{
        res.render('posts',{posts:posts})
    })


    app.listen(8080);