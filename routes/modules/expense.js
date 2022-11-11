const CATEGORY = {
  家居物業: 'https://fontawesome.com/icons/home?style=solid',
  交通出行: 'https://fontawesome.com/icons/shuttle-van?style=solid',
  休閒娛樂: 'https://fontawesome.com/icons/grin-beam?style=solid',
  餐飲食品: 'https://fontawesome.com/icons/utensils?style=solid',
  其他: 'https://fontawesome.com/icons/pen?style=solid'
}

// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Expense model
const Expense = require('../../models/expenses')

// 進入「新增」費用頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增費用
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, date, categoryId, amount } = req.body
  Expense.create({ name, date, categoryId, amount, userId })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 進入「編輯」頁面
router.get('/:expenseId/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.expenseId
  Expense.findOne({ _id, userId })
    .lean()
    .then(expenseData => res.render('edit', { expenseData }))
    .catch(err => console.log(err))
})

// 編輯費用
router.put('/:expenseId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.expenseId
  const { name, date, categoryId, amount } = req.body
  return Expense.findOne({ _id, userId })
    .then(expenseData => {
      expenseData.name = name
      expenseData.date = date
      expenseData.categoryId = categoryId
      expenseData.amount = amount
      return expenseData.save()
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 刪除該筆費用
router.delete('/:expenseId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.expenseId
  Expense.findOne({ _id, userId })
    .then(expenseData => expenseData.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})
// 匯出
module.exports = router
