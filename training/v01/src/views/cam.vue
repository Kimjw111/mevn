<template>
  <div>
    <div id="display"></div>
    <button @click="main">캠동작</button>
    <div>{{ result }}</div>
  </div>
</template>
<script>
const videoElements = document.createElement('video')
export default {
  name: 'cam',
  data() {
    return {
      result: '스샷을 찍어 이미지 분석을 시작하세요.'
    }
  },
  methods: {
    main: async function () {
      const tf = this.$tf
      const mobilenet = this.$mobilenet
      console.log(tf)
      console.log(mobilenet)
      this.result = '이미지 분석중....'
      const display = document.getElementById('display')
      display.append(videoElements)
      videoElements.width = 400
      videoElements.height = 400
      const cam = await tf.data.webcam(videoElements)
      const net = await mobilenet.load()
      const img = await cam.capture()
      const result = await net.classify(img)
      img.print()
      this.result = `분석결과 ${result[0].className} (${
        result[0].probability * (100).toFixed(2)
      })`
    },
    mounted() {
      this.main()
    }
  }
}
</script>
<style></style>
