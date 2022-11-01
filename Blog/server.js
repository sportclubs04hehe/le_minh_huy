var express = require('express');
var bodyParser = require('body-parser'),
    articles = require('./controller/articles');


console.log(bodyParser, 'bodyParser');


var app = express();
app.use(bodyParser());


//CREATE READ UPDATE DELETE

/*
    a post is going to look like this:
    {
        title:"",
        body:"",
        author:"",
        comment:[]
    }

    a comment would like
    {
        name: "foo",
        text: "textarea"
    }
 */


var notImplimented = (req, res) => {
    res.send(501);
}



// article
app.get('/articles', articles.index); //show them all blog posts
app.get('/articles/new', articles.new);
app.get('/articles/:articId', notImplimented); //reading one
app.post('/articles', articles.create); //making a new one
app.put('/article/:articleId', notImplimented); //updating one
app.del('/article/:articleId', notImplimented); //deleting one


//comment
app.post('articles/:articleId/comments', notImplimented);
app.del('articles/:articleId/comments/:commentId', notImplimented);
app.listen(8080);