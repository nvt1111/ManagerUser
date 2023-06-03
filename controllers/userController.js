const User = require('../models/User')

const user_all = (req,res) =>{
    User.find()
    .then((result) =>{
        res.render('home',{user: result})
    })
    .catch((err)=>{
        console.log(err)
    })
}

const user_create_get = (req,res) =>{
    res.render('create')
}

const user_edit_get = (req,res) =>{
    const id = req.params.id;
    User.findById(id)
        .then((result)=>{
            res.render('edit', {user: result})
        })
        .catch((err)=>{
            console.log(err)
        })
    
}

const user_delete = (req,res) =>{
    const id = req.params.id;
    User.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect: '/users'}) 
        })
        .catch((err)=>{
            console.log(err)
        })
}

const user_create = (req,res) =>{
    const user = new User(req.body)
    console.log(user)
    user.save()
        .then((result)=>{
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err)
        })
}

const user_edit = (req,res) =>{
    const id = req.params.id;
    console.log(req.body, id, "híhshsshshshh")
    User.findByIdAndUpdate(id, req.body, { new: true })
        .then((result)=>{
            res.redirect('/users')  // đây là sau khi thành công thì nó nhảy về trang chủ
        })
        .catch((err)=>{
            console.log(err)
        })
}


module.exports = {
    user_all,
    user_create_get,
    user_create,
    user_delete,
    user_edit_get,
    user_edit
}

