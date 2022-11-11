const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const db = require('../../config/mongoose')
const Expense = require('../expenses')
const User = require('../user')

const seedUser = [
  {
    name: '廣志',
    email: 'user1@example.com',
    password: '12345678',
    expenseIndex: [0, 1, 2, 4]
  },
  {
    name: '小新',
    email: 'user2@example.com',
    password: '12345678',
    expenseIndex: [3]
  }
]
const seedExpense = [
  {
    name: '摩斯漢堡',
    date: '2022-4-23',
    categoryId: 4,
    amount: 289
  },
  {
    name: '藏壽司',
    date: '2022-4-23',
    categoryId: 4,
    amount: 600
  },
  {
    name: '淡海輕軌來回',
    date: '2022-4-24',
    categoryId: 2,
    amount: 120
  },
  {
    name: '舊金山大橋腳踏車',
    date: '2022-4-23',
    categoryId: 3,
    amount: 2200
  },
  {
    name: '萬年房貸QQ',
    date: '2022-4-1',
    categoryId: 1,
    amount: 18000
  }
]

db.once('open', () => {
  return Promise.all(
    seedUser.map((user) => {
      const { name, email, password, expenseIndex } = user
      return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      }).then((user) => {
        const expenses = expenseIndex.map((index) => {
          const expense = seedExpense[index]
          expense.userId = user._id
          return expense
        })
        return Expense.create(expenses)
      })
    })
  )
    .then(() => {
      console.log('Expense seeder has established successfully')
      process.exit()
    })
    .catch((error) => console.log(error))
})
