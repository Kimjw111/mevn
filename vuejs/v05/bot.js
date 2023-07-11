require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk2
const bot = new TelegramBot(token, { polling: true })
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const Schema = mongoose.Schema

const conversationSchema = new Schema({
  chatId: Number,
  message: String,
  date: { type: Date, default: Date.now }
})

const Conversation = mongoose.model('Conversation', conversationSchema)

// 대화 데이터 mongodb로 crud
function getRecentConversations(limit) {
  return Conversation.find().sort({ date: -1 }).limit(limit).exec()
}
bot.on('message', async (msg) => {
  try {
    const chatId = msg.chat.id
    const message = msg.text

    const conversation = new Conversation({
      chatId: chatId,
      message: message
    })

    await conversation.save()
    console.log('대화 저장 성공')
  } catch (error) {
    console.log('대화 저장 실패:', error)
  }
})

bot.onText(/^최근대화 (.+)$/, (msg, match) => {
  const chatId = msg.chat.id
  const limit = parseInt(match[1]) // 가져올 대화 내역의 개수

  getRecentConversations(limit)
    .then((conversations) => {
      const messages = conversations.map((conversation) => conversation.message)
      const response = messages.join('\n')
      bot.sendMessage(chatId, response)
    })
    .catch((error) => {
      console.error('대화 내역 가져오기 오류:', error)
      bot.sendMessage(chatId, '대화 내역을 가져오지 못했습니다.')
    })
})

function updateConversationById(id, newMessage) {
  return Conversation.findByIdAndUpdate(
    id,
    { message: newMessage },
    { new: true }
  ).exec()
}

bot.onText(/^수정 (.+) (.+)$/, (msg, match) => {
  const chatId = msg.chat.id
  const id = match[1] // 수정할 대화 데이터의 _id
  const newMessage = match[2] // 새로운 메시지

  updateConversationById(id, newMessage)
    .then((updatedConversation) => {
      const response = `대화 데이터가 수정되었습니다. 새로운 메시지: ${updatedConversation.message}`
      bot.sendMessage(chatId, response)
    })
    .catch((error) => {
      console.error('대화 데이터 수정 오류:', error)
      bot.sendMessage(chatId, '대화 데이터를 수정하지 못했습니다.')
    })
})

// 대화 데이터 삭제
function deleteConversationById(id) {
  return Conversation.findByIdAndDelete(id).exec()
}

// 대화 데이터 삭제 명령어
bot.onText(/^삭제 (.+)$/, (msg, match) => {
  const chatId = msg.chat.id
  const id = match[1] // 삭제할 대화 데이터의 ID

  deleteConversationById(id)
    .then(() => {
      bot.sendMessage(chatId, '대화 데이터가 삭제되었습니다.')
    })
    .catch((error) => {
      console.error('대화 데이터 삭제 오류:', error)
      bot.sendMessage(chatId, '대화 데이터를 삭제하지 못했습니다.')
    })
})

// 모든 대화 데이터 삭제
function deleteAllConversations() {
  return Conversation.deleteMany({}).exec()
}

// 모든 대화 데이터 삭제 명령어
bot.onText(/^모두삭제$/, (msg) => {
  const chatId = msg.chat.id

  deleteAllConversations()
    .then(() => {
      bot.sendMessage(chatId, '모든 대화 데이터가 삭제되었습니다.')
    })
    .catch((error) => {
      console.error('대화 데이터 삭제 오류:', error)
      bot.sendMessage(chatId, '대화 데이터를 삭제하지 못했습니다.')
    })
})
// 사진 쿼리 형식으로
bot.onText(/^사진/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'AgACAgUAAxkBAANDZKZ6uojppozoU-8_u6IlfEgjHzcAAgS3MRuZRjhV8kuflVZsEgQBAAMCAAN5AAMvBA'
  bot.sendPhoto(chatId, resp)
})
// 대화 내역 콘솔
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(msg)
})
