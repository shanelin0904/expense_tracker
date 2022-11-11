const mongoose = require('mongoose')
const Schema = mongoose.Schema
const expenseSchema = new Schema({
  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  date:{
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  categoryId: {
    type: Number, // 資料型別是數字
    required: true // 這是個必填欄位
  },
 
  amount: {
    type: Number, // 資料型別是數字
    required: true // 這是個必填欄位
  },

  userId: {  // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  }
})
module.exports = mongoose.model('Expense', expenseSchema)
