<template>
  <div>
    <textarea v-model="inputText"></textarea>
    <button @click="translateText">번역하기</button>
    <p v-if="translatedText">{{ translatedText }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // eslint-disable-next-line
  data() {
    return {
      inputText: '',
      translatedText: ''
    }
  },
  methods: {
    // eslint-disable-next-line
    translateText() {
      const text = this.inputText
      const source = 'ko' // 번역할 원본 언어
      const target = 'en' // 번역할 대상 언어

      const data = {
        text,
        source,
        target
      }

      axios
        .post('/api/translate', data)
        .then((response) => {
          this.translatedText = response.data.translatedText
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
