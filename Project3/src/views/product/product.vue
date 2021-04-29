<template>
  <div class="product">
    <div><header1></header1></div>
    <div class="product-top">
      <el-row>
        <el-col :span="20" class="product-top-img">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-image :src="proimg1" lazy></el-image>
        </el-col>
      </el-row>
    </div>
    <div class="product-center">
    <productmore :screenWidth="screenWidth"></productmore>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../header/header1.vue";
import productmore from './product-more/product-more.vue'
import bottom from "../bottom/bottom.vue";
import axios from 'axios'
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      proimg1:
        "",
        api:'/portalProductsCategory/getAll',
        productmorelist:[],
        id:null,
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
            // that.proimgH = ((that.screenWidth / 24) * 20 * 0.5) / 6;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    const that=this;
    that.api=sessionStorage.getItem('API').split(',')[0];
    that.id=sessionStorage.getItem('API').split(',')[1];
    axios.get('/portalProductsCategory/getAll',{params:{
      pid:that.id
    }}).then(res=>{
      that.productmorelist=res.data;
      that.proimg1=res.data.data.productCategoryImg;
    }).catch(err=>{
      console.log(err);
    })
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
  components: { header1, bottom ,productmore},
};
</script>
<style scoped>
.product-top {
  margin-top: 40px;
}
.product-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagehead{
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
</style>