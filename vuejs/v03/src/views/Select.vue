<template>
  <div>
    <h1>3. 셀렉트 예제</h1>
    <select name="" id="" v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
        {{ city }}
      </option>
    </select>
    <span>{{ selData }}</span>
  </div>
  <div>
    <select name="" id="" v-model="selData2">
      <option v-for="city in arr" :key="city" :value="city.code">
        {{ city.name }}
      </option>
    </select>
    <span>{{ selData2 }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selData: '고르세요.',
      selData2: '고르세요222',
      obj: {
        부산: '051',
        서울: '02',
        제주: '064',
        창원: '055',
        대구: '053'
      },
      arr: [
        { name: '부산', code: '051' },
        { name: '서울', code: '02' },
        { name: '제주', code: '064' },
        { name: '창원', code: '055' },
        { name: '대구', code: '053' }
      ]
    }
  }
}
</script>
<style></style>
