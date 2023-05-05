const express = require('express');
const morgan  = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/BlogRoutes');

// express app
const app = express();

//connect to MongoDB

const dbUI = 'mongodb+srv://newUser1:test123@practiseblogapp.el4zfci.mongodb.net/PractiseBlogApp?retryWrites=true&w=majority'
mongoose.connect(dbUI , {useNewUrlParser: true , useUnifiedTopology : true})
.then((result)=> app.listen(3000)) // listen for requests

.catch((err)=> console.log(err))




// register view engine
app.set('view engine', 'ejs');


//middleware and static files

app.use(express.static('public'));
app.use(express.urlencoded({extended : true } ));
app.use(morgan('dev'));


app.get('/', (req, res) => {

    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use('/blogs', blogRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});