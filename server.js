const express = require('express');
const articleRouter = require('./routes/articleRoute');
const methodOverride = require("method-override");
const Article = require('C:/Users/Dell/Desktop/My node projects/MERN blog/models/articleModel.js')
const app = express();
//connecting to mongodb
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://engrnayab1890:EbLhPkgVWxgAp2VD@cluster0.qs6rk7i.mongodb.net/?retryWrites=true&w=majority");


//end mongodb collection  

app.use(express.json());

app.set("view engine" , 'ejs');

app.use(express.urlencoded({ extended:false}));
app.use(methodOverride("_method",))

app.use('/articles',articleRouter);

app.get('/' , async(req,res)=>
{
    const articles =await Article.find().sort({
        createdAt: 'desc'
    });
    res.render('articles/index' , {articles: articles})
})  


app.listen(3000, () => {
    console.log(`listening at port 3000`);
})