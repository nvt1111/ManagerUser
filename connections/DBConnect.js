const mongoose  = require('mongoose')

//1 Tạo url
const url = 'mongodb://localhost:27017/note-tuts';

// 2 
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{console.log('connect to DB success')})
    .catch((err)=>{console.log(err)})