const express = require('express')
const morgan = require('morgan')
const DBConnect = require('./connections/DBConnect')
const methodOverride = require('method-override')
const userRoutes = require('./routes/userRoutes')
const userController = require('./controllers/userController')
const path = require('path');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(morgan('dev'))
// Middleware để xử lý dữ liệu từ form
app.use(express.urlencoded({ extended: false }));
// app.set('view', path.join(__dirname,'views'))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));

DBConnect
app.listen(3000 , () =>{
  console.log(`Server đang lắng nghe tại 3000`);
})

app.get('/', (req,res)=>{
  // res.render('home')
  res.redirect('/users')
})

app.use('/users', userRoutes)

app.use((req,res)=>{
  res.status(404).render('404', {title: '404'})
})