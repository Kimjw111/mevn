<template>
  <div>
    <h1>6. 바인드리스트 예제</h1>
    <select name="" id="" v-model="selData">
      <option v-for="city in Object.keys(obj)" :key="city" :value="obj[city]">
        {{ city }}
      </option></select
    ><br />
    <span>선택하신 배송지역은: {{ selData }}</span
    ><br />
    <span id="vspan" v-if="selData === '제주'" style="display: block"
      >{{ selData }}는 5000원 추가됩니다.</span
    >
    <br />
    <table>
      <tr>
        <th>No.</th>
        <th>카테고리</th>
        <th>품명</th>
        <th>가격</th>
        <th>배송료</th>
        <th>수량</th>
        <th>합계</th>
      </tr>
      <template v-if="selData === '제주'">
        <tr v-for="(item, i) in dataArr" :key="item">
          <td>{{ i + 1 }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.product_name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.delivery_price + 5000 }}</td>
          <td>
            <input type="number" placeholder="0" min="0" v-model="value[i]" />
          </td>
          <td v-if="value[i] === 0">0</td>
          <td v-else>
            {{
              (total[i] = item.price * value[i] + item.delivery_price + 5000)
            }}
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item, i) in dataArr" :key="item">
          <td>{{ i + 1 }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.product_name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.delivery_price }}</td>
          <td>
            <input type="number" placeholder="0" min="0" v-model="value[i]" />
          </td>
          <td v-if="value[i] === 0">0</td>
          <td v-else>
            {{ (total[i] = item.price * value[i] + item.delivery_price) }}
          </td>
        </tr>
      </template>
      <!-- <td>{{ selData==='제주'?item.delivery_price + 5000:item.delivery_price }}</td> 내용에 삼항연산자로 쓸수도 있음 -->
      <!-- value[i]>0?(true):(false) -->
      <tr>
        <td colspan="6" id="sum">총합</td>
        <td>{{ total.reduce((a, c) => a + c, 0) }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import data from '../assets/productData.js'
export default {
  data() {
    return {
      value: [0, 0, 0, 0, 0],
      dataArr: data,
      total: [],
      selData: '',
      obj: {
        부산: '부산',
        서울: '서울',
        제주: '제주',
        창원: '창원',
        대구: '대구'
      }
    }
  }
}
</script>
<style scoped>
#vspan {
  display: none;
}
table {
  text-align: center;
  margin: auto;
  border-collapse: collapse;
  width: 70%;
  height: 300px;
}
tr:first-child {
  background-color: rgb(126, 224, 248);
}
th,
td {
  border: 1px solid black;
  width: 10%;
}
td > input {
  border: none;
}
#sum {
  background-color: rgb(250, 214, 55);
}
</style>
