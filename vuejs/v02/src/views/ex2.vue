<template>
  <div>
    <h1>EX2. 데이터 양뱡향/단뱡향 바인딩</h1>
    <h2>1. v-model을 사용하여 양뱡향을 구현</h2>
    <span>v-model:</span> <input type="text" v-model="inData" />
    <h3>{{ inData }}</h3>
    <br />
    <button @click="saveData">저장하기</button>
    <button @click="inData = outData">꺼내오기:{{ outData }}</button>
    <hr />
    <h2>2. v-bind와 v-on을 사용하여 단뱡향(2가지로 양뱡향)을 구현</h2>
    <span>v-bind / v-on:</span>
    <input
      type="text"
      v-bind:value="inValue"
      v-on:input="(e) => (inValue = e.target.value)"
    />
    <h3>{{ inValue }}</h3>
    <br />
    <button @click="setData()">데이터 저장</button>
    <button @click="getData()">데이터 출력</button>
  </div>
</template>
<script>
export default {
  name: 'ex2',
  data() {
    return {
      inData: undefined,
      inValue: '읽기만 함',
      outData: JSON.parse(localStorage.getItem('data')) ?? [],
      temp: null,
      arr2: []
    }
  },
  methods: {
    // upValue: function (e) {
    //   this.inValue = e.target.value
    // }
    saveData: function () {
      this.outData.push(this.inData)
      this.inData = ''
      localStorage.setItem('data', JSON.stringify(this.outData))
    },
    setData: function () {
      alert('v-bind 된 값 :' + this.inValue + ' 를 저장함')
      this.temp = this.inValue
      this.inValue = ''
      this.arr2.push(this.temp)
      localStorage.setItem('input', JSON.stringify(this.arr2))
    },
    getData: function () {
      alert(
        'v-on 으로 저장된 값 불러오기 :' +
          JSON.parse(localStorage.getItem('input'))
      )
      this.inValue = JSON.parse(localStorage.getItem('input'))
    }
  }
}
</script>
<style></style>
