<template>
  <div class="menu-categories">
    <ul>
      <li class="head-menu">
        <h3>Tuyển sinh</h3>
      </li>
      <li v-for="user in users" :key="user.id">
        <a @click="alertText(user.username)" title>{{ user.name }}</a>
      </li>
      <!-- <li>
        <a href title>Ngành đào tạo</a>
      </li>
      <li>
        <a href title>Học bổng</a>
      </li>
      <li>
        <a href title>Thông tin học phí</a>
      </li>
      <li>
        <a href title>Tư vấn trực tuyến</a>
      </li>
      <li>
        <a href title>Hỏi đáp</a>
      </li>
      <li>
        <a href title>Cẩm nang tuyển sinh</a>
      </li>
      <li>
        <a href title>Đề án tuyển sinh 2019</a>
      </li> -->
    </ul>
  </div>
</template>
<script>
import FakeAPI from "../../../api/fake-api";
const api = new FakeAPI();
export default {
  data() {
    api.getUser().then(res => {
      this.users = res.data;
    });

    return {
      users: []
    };
  },
  methods: {
    alertText(param) {
      alert(param);
    }
  }
};
</script>
