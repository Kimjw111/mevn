require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk
const bot = new TelegramBot(token, { polling: true })
const axios = require('axios')
const cheerio = require('cheerio')

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match.input //메아리
  const resp = '반가워요~'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})
bot.onText(/^이름이뭐야/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match.input //메아리
  const resp = '저는 봇이에요'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})
bot.onText(/^잘가/, (msg, match) => {
  const chatId = msg.chat.id
  //   const resp = match.input //메아리
  const resp = '또 만나요~'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})
bot.onText(/^음악차트/, (msg, match) => {
  const chatId = msg.chat.id
  const url =
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'
  axios.get(url).then((res) => {
    const $ = cheerio.load(res.data)
    const song = []
    $('.tit_area').each(function () {
      song.push($(this).text())
    })
    const resp = []
    song.forEach((v, i) => {
      resp.push(`${i + 1}위 : ${v}`)
    })
    bot.sendMessage(chatId, JSON.stringify(resp))
  })
})
bot.onText(/^사진/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'AgACAgUAAx0Cc2n-ngADCGSjtXXK_Ivs6byrjqM47C2OqXQaAALivjEbqIcYVc2P4kr2EBpFAQADAgADbQADLwQ'
  bot.sendPhoto(chatId, resp)
})
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(msg)
})
