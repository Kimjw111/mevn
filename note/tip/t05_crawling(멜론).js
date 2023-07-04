const axios = require('axios')
const cheerio = require('cheerio')

// Melon 차트 페이지 URL
const url = 'https://www.melon.com/chart/index.htm'

// Melon 차트 크롤링 함수
/*const crawlMelonChart = async () => {
  try {
    // Melon 차트 페이지 요청
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
  const year = $('.year').text()
  const hour = $('.hour').text()
    // 상위 20위 곡명 가져오기
    console.log('--- 상위 20위 곡명 ---')
    $('.lst50, .lst100').each((index, element) => {
      const rank = $(element).find('.rank').text().trim()
      const title = $(element).find('.ellipsis.rank01 a').text().trim()
      console.log(`${rank}. ${title}`+ '\n' + `현재 날짜: ${year}, 현재 시간: ${hour}`)
    })
  } catch (error) {
    console.error('크롤링 중 오류 발생:', error)
  }
}*/
axios.get(url).then((res) => {
  const $ = cheerio.load(res.data)
  const song = []
  const year = $('.year').text()
  const hour = $('.hour').text()
  console.log(`현재 날짜: ${year}, 현재 시간: ${hour}`)
  $('.ellipsis.rank01 a').each(function () {
    song.push($(this).text())
  })
  song.forEach((v, i) => {
    if (i + 1 <= 20) {
      console.log(`${i + 1}위 : ${v}`)
    }
  })
})
