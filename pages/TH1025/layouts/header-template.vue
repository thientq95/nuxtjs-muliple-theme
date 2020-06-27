<template>
  <div class="header">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xs-6">
            <div class="time">HÔM NAY 22/05/2019 2:04:01 CHIỀU</div>
          </div>
          <div class="col-md-6 col-xs-6">
            <div class="language">
              <a href title="Tiếng việt">
                <img src="/TH1025/images/co-viet.png" alt />
              </a>
              <a href title="Tiếng anh">
                <img src="/TH1025/images/co-anh.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-mid">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="logo">
              <a href title="logo">
                <img src="/TH1025/images/logo.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="container">
        <nav id="cssmenu">
          <div id="head-mobile"></div>
          <div class="button"></div>
          <ul>
            <li class="active">
              <!-- <a href="/">Trang chủ</a> -->
               <nuxt-link to="/">Trang chủ</nuxt-link>
            </li>
            <li>
              <a href="#">Giới thiệu</a>
            </li>
            <li>
              <a href="#">Nghành đào tạo</a>
              <ul>
                <li>
                  <a href="#">Product 1</a>
                  <ul>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Product 2</a>
                  <ul>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Học bổng</a>
              <ul>
                <li>
                  <a href="#">Product 1</a>
                  <ul>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Product 2</a>
                  <ul>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                    <li>
                      <a href="#">Sub Product</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Tin hướng nghiệp</a>
            </li>
            <li>
              <nuxt-link to="/tin-tuc">Tinh tức</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/hinh-anh">Hình ảnh</nuxt-link>
            </li>
            <li>
              <a href="#">Câu hỏi thường gặp</a>
            </li>
            <li>
              <nuxt-link to="/lien-he">Liên hệ</nuxt-link>
            </li>
          </ul>
          <div class="search-main">
            <a href="javascript:void(0)" title="search" id="toggle-search">
              <img src="/TH1025/images/search.png" /> Tìm kiếm
            </a>
            <form method="post" action>
              <input
                type="text"
                name
                class="input-search"
                placeholder="Từ khóa tìm kiếm"
              />
              <button class="hidden">Tìm</button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
