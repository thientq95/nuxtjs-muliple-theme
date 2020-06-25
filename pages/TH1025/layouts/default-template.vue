<template>
  <div id="app">
    <header-template />
    <main>
      <slot name="content"></slot>
    </main>
    <footer-template />
  </div>
</template>

<script>
import HeaderTemplate from "./header-template";
import FooterTemplate from "./footer-template";
// import MenuTemplate from "./menu-template";
export default {
  components: {
    "header-template": HeaderTemplate,
    "footer-template": FooterTemplate,
    // "menu-template": MenuTemplate
  },
  head () {
    return {
      script: [
        { src: '/TH1025/js/jquery.min.js' },
        { src: '/TH1025/js/bootstrap.min.js' },
        { src: '/TH1025/js/jquery.bxslider.js' },
        { src: '/TH1025/js/lightgallery.min.js' },
        { src: '/TH1025/js/custom.js' },
        { src: '/TH1025/js/script.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '/TH1025/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/TH1025/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: '/TH1025/css/jquery.bxslider.css' },
        { rel: 'stylesheet', href: '/TH1025/css/lightgallery.min.css' },
        { rel: 'stylesheet', href: '/TH1025/css/menu.css' },
        { rel: 'stylesheet', href: '/TH1025/css/style.css' }
      ]
    } 
  }
}
</script>