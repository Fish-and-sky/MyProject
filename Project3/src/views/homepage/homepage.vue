<template>
  <div class="homepage">
    <div><header1></header1></div>
    <div><rotation3 :screenWidth="screenWidth"></rotation3></div>
    <div><industry :screenWidth="screenWidth"></industry></div>
    <div><productList :proscreenWidth="screenWidth"></productList></div>
    <div><productMore :screenWidth="screenWidth"></productMore></div>
    <div><solu :screenWidth="screenWidth"></solu></div>
    <div><thevideo></thevideo></div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../header/header1.vue";
import rotation3 from "./rotation/rotation3.vue";
import industry from "./Industry/Industry.vue";
import productList from "./product-list/product-list.vue";
import productMore from "./product-more/product-more.vue"
import solu from "./solu/solu.vue"
import thevideo from "./thevideo/thevideo.vue"
import bottom from "../bottom/bottom.vue"
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          if (that.screenWidth >= 1000) {
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    });
  },
  components: { header1, rotation3, industry, productList ,productMore ,solu ,thevideo ,bottom},
};
</script>
<style scoped>
.homepage {
  position: relative;
}
</style>