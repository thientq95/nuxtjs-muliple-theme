<template>
  <default-template v-slot:content>
    <div class="slide-show">
      <div class="slider-content">
        <div class="item">
          <img src="/TH1025/images/slide.png" />
        </div>
        <div class="item">
          <img src="/TH1025/images/slide.png" />
        </div>
      </div>
    </div>

    <div class="tuyensinh">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <category-template></category-template>
          </div>
          <div class="col-md-9">
            <div class="box-news tin-tuyensinh">
              <div class="title-danhmuc">
                <h3 class="title">
                  Tin tuyển sinh
                  <a href="#" class="view-all">
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                  </a>
                </h3>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="item">
                    <div class="img-news">
                      <img src="/TH1025/images/new.png" alt />
                    </div>
                    <h3>
                      <a href class="title-link"
                        >Đại học Mỹ Tuyển Sinh Đại Học Mỹ Mùa Xuân 2019</a
                      >
                    </h3>
                    <span class="date">22 tháng 3</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <div class="img-news">
                      <img src="/TH1025/images/new.png" alt />
                    </div>
                    <h3>
                      <a href class="title-link"
                        >Đại học Mỹ Tuyển Sinh Đại Học Mỹ Mùa Xuân 2019</a
                      >
                    </h3>
                    <span class="date">22 tháng 3</span>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="item">
                    <div class="img-news">
                      <img src="/TH1025/images/new.png" alt />
                    </div>
                    <h3>
                      <a href class="title-link"
                        >Đại học Mỹ Tuyển Sinh Đại Học Mỹ Mùa Xuân 2019</a
                      >
                    </h3>
                    <span class="date">22 tháng 3</span>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  <a href class="title-link"
                    >Đại học MỹTuyển Sinh Đại Học Mỹ Mùa Xuân 2019</a
                  >
                </li>
                <li>
                  <a href class="title-link"
                    >Tuyển Sinh Mùa Xuân 2019 : Khởi Đầu Du Học Mỹ Tại
                    SaigonTech</a
                  >
                </li>
                <li>
                  <a href class="title-link"
                    >Đại học MỹTuyển Sinh Đại Học Mỹ Mùa Xuân 2019</a
                  >
                </li>
                <li>
                  <a href class="title-link"
                    >Tuyển Sinh Mùa Xuân 2019 : Khởi Đầu Du Học Mỹ Tại
                    SaigonTech</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import CategoriesTemplate from "../layouts/menu-categories-template.vue";
import DefaultTemplate from "../layouts/default-template.vue";
import FakeAPI from "../../../api/fake-api";

const api = new FakeAPI();
export default {
  components: {
    "default-template": DefaultTemplate,
    "category-template": CategoriesTemplate
  },
  head: {
    title: 'Trang chủ 🚀',
    meta: [
      { hid: 'description', name: 'description', content: 'Trang chủ' }
    ],
  },
  data() {
    console.log(api.getCodeWeb());
    api.getTodo().then(res => {
      this.todos = res.data;
    });

    api.getUser().then(res => {
      this.users = res.data;
    });

    return {
      todos: [],
      users: []
    };
  },
  mounted() {
    // $(".slide-show .slider-content").bxSlider({
    //   wrapperClass: false,
    //   controls: false,
    //   pager: false
    // });
  },
  asyncData() {},
  fetch() {},

  methods: {}
};
</script>
