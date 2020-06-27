<template>
  <div id="app">
    <header-template />
    <menu-template />
    <main>
      <slot name="content"></slot>
    </main>
    <footer-template />
  </div>
</template>

<script>
import HeaderTemplate from "./header-template";
import FooterTemplate from "./footer-template";
import MenuTemplate from "./menu-template";
export default {
  components: {
    "header-template": HeaderTemplate,
    "footer-template": FooterTemplate,
    "menu-template": MenuTemplate
  },
  head() {
    return {
      script: [
        { src: "/TH1024/js/jquery.min.js" },
        { src: "/TH1024/js/bootstrap.min.js" },
        { src: "/TH1024/js/jquery.bxslider.js" },
        { src: "/TH1024/js/jquery.fancybox.min.js" },
        { src: "/TH1024/js/lightgallery.min.js" },
        { src: "/TH1024/js/stellarnav.min.js" },
        { src: "/TH1024/js/swiper.min.js" },
        { src: "/TH1024/js/custom.js" }
      ],
      link: [
        { rel: "stylesheet", href: "/TH1024/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/TH1024/css/font-awesome.min.css" },
        { rel: "stylesheet", href: "/TH1024/css/jquery.bxslider.css" },
        { rel: "stylesheet", href: "/TH1024/css/jquery.fancybox.min.css" },
        { rel: "stylesheet", href: "/TH1024/css/lightgallery.min.css" },
        { rel: "stylesheet", href: "/TH1024/css/menu.css" },
        { rel: "stylesheet", href: "/TH1024/css/stellarnav.css" },
        { rel: "stylesheet", href: "/TH1024/css/swiper.min.css" },
        { rel: "stylesheet", href: "/TH1024/css/style.css" }
      ]
    };
  }
};
</script>
