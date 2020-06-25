<template>
  <default-template v-slot:content>
      
    <div class="breadcrumbs">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="#">Library</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
    </div>

    <section class="gallery page-gallery">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-1.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-2.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-3.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-5.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-6.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-6">
            <div class="item-gallery">
              <img src="/TH1024/images/gallery-7.png" />
              <div class="title">
                <a href="#">Lễ chào đón tân sinh viên</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "../../layouts/default-template";
export default {
  components: {
    "default-template": DefaultTemplate
  }
};
</script>