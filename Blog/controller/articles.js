var articles= [];

module.exports.create= (req,res)=>{
    articles.push(req.body);
    res.redirect('/articles');
}

module.exports.index= (req,res)=>{
    res.json(articles);
}

//rendering an html form to let user create post

module.exports.new= (req,res)=>{
    res.send("<form method='post' action='/articles'>\
     <input type='text' placeholder='title' name='title'/><br>\
     <input type='text' placeholder='author' name='author'/><br>\
     <textarea placeholder='post' rows='4' cols='50' name='body'></textarea>   \
     <button type='submit'>Post</button>\
      </form>")
}