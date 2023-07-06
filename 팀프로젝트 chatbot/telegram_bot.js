require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk2
const bot = new TelegramBot(token, { polling: true })
const axios = require('axios')
const cheerio = require('cheerio')

// 로또 당첨 번호 가져오기
function getLottoWinningNumbers() {
  const url =
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EB%A1%9C%EB%98%90+%EB%8B%B9%EC%B2%A8+%EB%B2%88%ED%98%B8'

  return axios
    .get(url)
    .then((res) => {
      const $ = cheerio.load(res.data)
      const winningNumbers = []

      $('.winning_number').each(function () {
        const number = $(this).text()
        console.log(number)
        winningNumbers.push(number)
      })
      return winningNumbers
    })
    .catch((error) => {
      console.log('로또 당첨번호 가져오기 오류:', error)
      return []
    })
}

// 로또 당첨번호 조회 기능
bot.onText(/^로또$/, (msg) => {
  const chatId = msg.chat.id

  getLottoWinningNumbers().then((winningNumbers) => {
    if (winningNumbers.length > 0) {
      const resp = '로또 당첨 번호: ' + winningNumbers.join(', ')
      console.log(resp)
      bot.sendMessage(chatId, resp)
    } else {
      const resp = '로또 당첨 번호를 가져오지 못했습니다.'
      console.log(resp)
      bot.sendMessage(chatId, resp)
    }
  })
})

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
bot.onText(/^영화/, (msg, match) => {
  const chatId = msg.chat.id
  const url =
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84'
  axios.get(url).then((res) => {
    const $ = cheerio.load(res.data)
    const movie = []
    $('.title_box').each(function () {
      movie.push($(this).text())
    })
    const resp = []
    movie.forEach((v, i) => {
      resp.push(`${i + 1}위 : ${v}`)
    })
    bot.sendMessage(chatId, JSON.stringify(resp))
  })
})
bot.onText(/^사진/, (msg, match) => {
  const chatId = msg.chat.id
  const resp =
    'AgACAgUAAxkBAANDZKZ6uojppozoU-8_u6IlfEgjHzcAAgS3MRuZRjhV8kuflVZsEgQBAAMCAAN5AAMvBA'
  bot.sendPhoto(chatId, resp)
})
bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log(msg)
})
