<template>
    <div class="newdetails">
    <div><header1></header1></div>
    <el-row class="newdetails-k">
    <el-col :span="20" :offset="2">
        <div class="newsdetails" v-html="newsdetails"></div>
    </el-col>
    </el-row>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
    </div>
</template>
<script>
import header1 from '../header/header1.vue'
import bottom from '../bottom/bottom.vue'
import axios from 'axios'
import marked from 'marked'
export default {
    data(){
        return{
            screenWidth: document.body.clientWidth,
            newsdetails:''
        }
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
            // that.proimgH = ((that.screenWidth / 24) * 20 * 0.5) / 6;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted(){
      this.newsdetails=sessionStorage.getItem('newsdetails')
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
    components:{header1 , bottom ,}
}
</script>
<style scoped>
.newdetails-k{
    margin-top: 60px;
}
</style>