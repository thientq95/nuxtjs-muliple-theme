<template>
  <default-template v-slot:content>
    <div class="tuyensinh">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <category-template></category-template>
            <div class="thongbao">
              <div class="title-danhmuc">
                <h3 class="title">Thông báo</h3>
              </div>
              <ul>
                <li>
                  <span class="date">22 tháng 3</span>
                  <a href="" class="title-link"
                    >Thông báo về ngày, giờ thi liên thông đại học khóa 08 hệ
                    chính quy, hệ VLVH năm 2019 đợt 2
                  </a>
                </li>
                <li>
                  <span class="date">22 tháng 3</span>
                  <a href="" class="title-link"
                    >Thông báo về ngày, giờ thi liên thông đại học khóa 08 hệ
                    chính quy, hệ VLVH năm 2019 đợt 2
                  </a>
                </li>
                <li>
                  <span class="date">22 tháng 3</span>
                  <a href="" class="title-link"
                    >Thông báo về ngày, giờ thi liên thông đại học khóa 08 hệ
                    chính quy, hệ VLVH năm 2019 đợt 2
                  </a>
                </li>
                <li>
                  <span class="date">22 tháng 3</span>
                  <a href="" class="title-link"
                    >Thông báo về ngày, giờ thi liên thông đại học khóa 08 hệ
                    chính quy, hệ VLVH năm 2019 đợt 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <div class="box">
              <div class="title-danhmuc">
                <h3 class="title">Gửi liên hệ</h3>
              </div>
              <div class="info">
                <p>
                  Liên hệ Viện Đào tạo Quốc tế: Phòng 1409 tầng 14 tòa nhà A1
                  Đại học Kinh tế
                </p>
                <p>Email: vu.oanh@isneu.org</p>
                <p>
                  Vui lòng để lại câu hỏi của bạn cho NHÀ TRƯỜNG hoặc Chương
                  trình mà bạn quan tâm
                </p>
              </div>
              <div class="form-contact">
                <form class="form-horizontal" action="" method="">
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="fullname"
                      >Họ và tên:</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="fullname"
                        placeholder="Họ và tên"
                        name="fullname"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="email"
                      >Email:</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="phone"
                      >Số điện thoại:</label
                    >
                    <div class="col-sm-9">
                      <input
                        type="number"
                        class="form-control"
                        id="phone"
                        placeholder="Số điện thoại"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for=""
                      >Phòng ban:</label
                    >
                    <div class="col-sm-9">
                      <select class="form-control" id="" name="phone">
                        <option>Phòng ban</option>
                        <option>Phòng ban 1</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label col-sm-3" for="pwd"
                      >Nội dung:</label
                    >
                    <div class="col-sm-9">
                      <textarea
                        rows="5"
                        class="form-control"
                        placeholder="Nội dung"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group text-right">
                    <div class="col-sm-offset-3 col-sm-9">
                      <button
                        type="button"
                        @click="submit()"
                        class="btn btn-submit"
                      >
                        Gửi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="maps">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.140942296037!2d106.64949611435067!3d10.800515492305147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294830fe4875%3A0x81bf77e5a4916737!2zMjEgTMOqIFRydW5nIE5naMSpYSwgUGjGsOG7nW5nIDEyLCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1496712669251"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style="border:0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="link-brand">
      <div class="container">
        <div class="slider-content">
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072704.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072720.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072736.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/Hska_logo.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072704.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072720.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/1523072736.png" alt="" />
            </a>
          </div>
          <div class="item">
            <a href="" title="">
              <img src="/TH1025/images/Hska_logo.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from "../../layouts/default-template.vue";
import CategoriesTemplate from "../../layouts/menu-categories-template.vue";
import FakeAPI from "../../../../api/fake-api";
const api = new FakeAPI();
export default {
  components: {
    "default-template": DefaultTemplate,
    "category-template": CategoriesTemplate
  },
  head: {
    title: 'Liên hệ',
    meta: [
      { hid: 'description', name: 'description', content: 'Liên hệ' }
    ],
  },
  data() {
    const { user } = api.getUserDirect();
    console.log(user);
    return {
      users: []
    };
  },
  mounted() {
    $(".link-brand .slider-content").bxSlider({
      wrapperClass: false,
      controls: false,
      pager: false,
      maxSlides: 6,
      moveSlides: 6,
      moveSlides: 4,
      slideWidth: 180,
      slideMargin: 5
    });
  },
  methods: {
    submit() {
      api.getTodo().then(res => {
        console.log(res.data);
      });
    }
  }
};
</script>
