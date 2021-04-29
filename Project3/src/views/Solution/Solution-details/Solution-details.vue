<template>
    <div class="Solution-details">
    <div><header1></header1></div>
    <div class="sdetails-top">
    <el-row>
        <el-col :span="20">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path:'/solution'}">解决方案</el-breadcrumb-item>
              <el-breadcrumb-item>正文</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="20" class="details-title">
        <h1>{{titleda}}</h1>
        <div class="xian"></div>
        <p>{{titlesmall}}</p>
        <el-image :src="sdetailsimg" style="margin-top:60px;"></el-image>
        <div class="thetitle">
        <h3>立讯互联解决方案</h3>
        <p>为了满足当今日益精密复杂的消费类设备的需要，立讯具制造突破性制造技术优势，可以快速适应电子产品“高速、微型、整合”等技术产业发展趋势，立讯提供电脑（台式机和笔记本电脑），消费性电子产品（电视和智能手机），企业（服务器和电信设备），汽车和医疗，穿戴设备(智能手表)等互联解决方案。</p>
        </div>
        </el-col>
        <el-col :span="20" class="annimg"></el-col>
      </el-row>
    </div>
    <div><thesoluimg :list="detailimglist" :screenWidth="screenWidth"></thesoluimg></div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
    </div>
</template>
<script>
import header1 from "../../header/header1.vue"
import bottom from "../../bottom/bottom.vue"
import thesoluimg from "./soluimg/soluimg.vue"
import axios from "axios"
export default {
    data(){
        return{
          screenWidth: document.body.clientWidth,
          titleda:"智能手机连接方案",
          titlesmall:"智能电子产品在轻薄短小及行动化的潮流趋势下，薄型化、构装密集化、高速化、高导热、触控及节能已成产品的需求，立讯提供高品质高质量，智能手机连接方案。了解更多",
          sdetailsimg:'https://www.luxshare-ict.com/Upload/image/20180206/20180206101841_7872.jpg',
          detailimglist:[],
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
          that.screenWidth=val;
          that.timer = false;
        }, 400);
      }
    },
    deep: true,
    immediate: true,
  },
    components:{header1 , bottom ,thesoluimg},
      mounted() {
       var id= sessionStorage.getItem('solutiondetailid');
      axios.get("/portalSolution/getById",{params:{
        id:id
      }}).then(res=>{
        sessionStorage.setItem('solutionName',res.data.solutionName);
        this.detailimglist=res.data.solutionSupplement2;
      }).catch(err=>{
        console.log(err)
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
}
</script>
<style scoped>
.Solution-details h1{
  font-size: 30px;
}
.Solution-details .xian{
  width: 60px;
  height: 1px;
  background-color: rgb(125, 192, 24);
  margin: 20px 0px;
}
.Solution-details p{
  font-size: 16px;
  line-height: 26px;
  color: rgb(156, 156, 156);
}
.sdetails-top {
  margin-top: 20px;
}
.sdetails-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pagehead{
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.details-title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.thetitle{
  width: 84%;
  margin-top: 40px;
}
.thetitle h3{
  font-size: 20px;
  margin-bottom: 20px;
}
</style>