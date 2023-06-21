<template>
  <h1>EX3. 데이터 가져오기</h1>
  <h3>가져온 데이터</h3>
  <p>{{ dataArr }}</p>
  <hr />
  <h4>얼마이상의 물품을 출력할까요?: <input type="text" v-model="inUser" /></h4>
  <table>
    <tr>
      <th>카테고리</th>
      <th>품명</th>
      <th>가격</th>
      <th>배송료</th>
    </tr>
    <template v-for="item in dataArr" :key="item">
      <tr v-if="item.price > inUser">
        <td>{{ item.category }}</td>
        <td>{{ item.product_name }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.delivery_price }}</td>
      </tr>
    </template>
  </table>
</template>
<script>
import data from '../assets/productData.js'
export default {
  name: 'app',
  data() {
    return {
      dataArr: data,
      inUser: 0
    }
  }
}
</script>
<style>
table {
  text-align: center;
  margin: auto;
  border-collapse: collapse;
  width: 60%;
  height: 300px;
}
td:hover {
  background-color: black;
  color: yellow;
}
tr:first-child {
  background-color: beige;
}
th,
td {
  border: 1px solid rgb(29, 153, 147);
}
</style>
