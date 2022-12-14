// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth') // 掛載 middleware
// 準備引入路由模組
// 引入 home 模組程式碼
const home = require('./modules/home')
// 引入 expense 模組程式碼
const expense = require('./modules/expense')
// 引入search模組
const search = require('./modules/search')
// 引入 user模組
const users = require('./modules/users')

// 將網址結構符合 /expenses 字串開頭的 request 導向expense模組
router.use('/expenses', authenticator, expense)

// 將網址結構符合 /search 字串開頭的 request 導向search模組
router.use('/search', authenticator, search)

// 將網址結構符合 /users 字串開頭的 request 導向users模組
router.use('/users', users) // add this

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', authenticator, home)

// 匯出路由器
module.exports = router
