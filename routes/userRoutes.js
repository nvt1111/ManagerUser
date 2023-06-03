const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

// Render
router.get('/', userController.user_all)
router.get('/add', userController.user_create_get)
router.get('/edit/:id', userController.user_edit_get)
// API
router.post('/', userController.user_create)
router.delete('/:id', userController.user_delete)
router.put('/:id', userController.user_edit) 
// PUT bắt buộc có id
 // put lên link có id trước sau khi put thành công thì chuyển sang  trang chủ /users
 // delete và update bắt buộc có id

module.exports = router