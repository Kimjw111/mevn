const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express()
const papagoEndpoint = 'https://openapi.naver.com/v1/papago/n2mt'
const papagoClientId = process.env.nid
const papagoClientSecret = process.env.npw
app.use(express.json())

app.post('/api/translate', (req, res) => {
  const { text, source, target } = req.body

  const config = {
    headers: {
      'X-Naver-Client-Id': papagoClientId,
      'X-Naver-Client-Secret': papagoClientSecret
    }
  }

  const data = {
    source,
    target,
    text
  }

  axios
    .post(papagoEndpoint, data, config)
    .then((response) => {
      const translatedText = response.data.message.result.translatedText
      res.json({ translatedText })
    })
    .catch((error) => {
      console.error(error)
      res.status(500).json({ error: 'Failed to translate text' })
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
