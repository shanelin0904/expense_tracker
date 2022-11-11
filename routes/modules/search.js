// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Expense model
const Expense = require('../../models/expenses')
// 搜尋餐廳
router.get('/', (req, res) => {
  const categoryId = req.query.categoryId
  const userId = req.user._id
  const typeObject = {
    isOne: categoryId === '1',
    isTwo: categoryId === '2',
    isThree: categoryId === '3',
    isFour: categoryId === '4',
    isFive: categoryId === '5',
    isSix: categoryId === '6'
  }
  if (categoryId === '6') {
    res.redirect('/')
  }
  Expense.find({ userId, categoryId: Number(categoryId) })
    .lean()
    .then((expensesData) => {
      let total = 0
      // expensesData.forEach(expensesData =>{ total += expenseData.amount})
      for (let i = 0; i < expensesData.length; i++) {
        total += expensesData[i].amount
      }
      res.render('index', { expensesData, totalAmount: total, typeObject })
    })

    .catch(err => console.log(err))
})
// 匯出路由模組
module.exports = router
