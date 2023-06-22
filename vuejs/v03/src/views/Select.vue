<template>
  <div>
    <select name="" id="" v-model="selData">
      <option v-for="i in arr" :key="i" :value="i.code">{{ i.city }}</option>
    </select>
    <span>{{ selData }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selData: '고르세요.',
      arr: [
        { city: '부산', code: '051' },
        { city: '서울', code: '02' },
        { city: '제주', code: '064' },
        { city: '창원', code: '055' },
        { city: '대구', code: '053' }
      ]
    }
  }
}
</script>
<style></style>
