// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
// 引用 Expense model
const Expense = require('../../models/expenses')
// 瀏覽全部花費項目
router.get('/', (req, res) => {
  const categoryId = 6
  const typeObject = {
    isOne: categoryId === 1,
    isTwo: categoryId === 2,
    isThree: categoryId === 3,
    isFour: categoryId === 4,
    isFive: categoryId === 5,
    isSix: categoryId === 6
  }

  const userId = req.user._id // 變數設定
  Expense.find({ userId }) // 取出 Expense model 裡的該user的資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ _id: 'asc' })
    .then(expensesData => {
      let total = 0
      // expensesData.forEach(expensesData =>{ total += expenseData.amount})
      for (let i = 0; i < expensesData.length; i++) {
        total += expensesData[i].amount
      }
      res.render('index', { expensesData, totalAmount: total, typeObject })
    }) // 將資料傳給 index 樣板
    .catch(error => console.log(error)) // 錯誤處理
})

// 匯出路由模組
module.exports = router
