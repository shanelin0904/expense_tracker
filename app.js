// 載入專案需要用到的框架和工具包(Packages)
const express = require('express')
const session = require('express-session')

const usePassport = require('./config/passport')

const app = express()
const PORT = process.env.PORT || 3000
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const flash = require('connect-flash')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const bodyParser = require('body-parser')
// 引用路由器
const routes = require('./routes')
require('./config/mongoose')



// 設定樣板引擎
app.engine('handlebars', engine({
  defaultLayout: 'main', helpers: {
    showIcon: function (categoryId) {
      const category_icon = [
        '<i class="fa-solid fa-house" ></i>',
         '<i class="fa-solid fa-van-shuttle"></i>',
         '<i class="fa-solid fa-face-grin-beam"></i>',
        '<i class="fa-solid fa-utensils"></i>',
         '<i class="fa-sharp fa-solid fa-pen-to-square"></i>',
         '<i class="fa-sharp fa-solid fa-list"></i>'
      ]
      
      return category_icon[categoryId-1]
    } }}))
app.set('view engine', 'handlebars')

//設定靜態檔案
app.use(express.static('public'))


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
// 呼叫 Passport 函式並傳入 app，這條要寫在路由之前
usePassport(app)

app.use(flash())  // 掛載套件

app.use((req, res, next) => {
  // 你可以在這裡 console.log(req.user) 等資訊來觀察
  console.log(req.user)
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg')  // 設定 warning_msg 訊息
  next()
})

app.use(routes)

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Express is listening on localhost:${PORT}`)
})

