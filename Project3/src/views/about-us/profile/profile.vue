<template>
  <div class="profile">
    <div><header1></header1></div>
    <div class="profile-top">
      <el-row>
        <el-col :span="23" class="profile-top0">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item
              >
              <el-breadcrumb-item>公司简介</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="24" class="profile-top1">
          <el-col
            :span="12"
            class="profile-top-left"
            :style="{ height: protop1H + 'px' }"
          >
            <el-col
              :xl="4"
              :lg="4"
              :md="1"
              :sm="1"
              :xs="1"
              class="top-left-left"
              >1</el-col
            >
            <el-col
              :xl="16"
              :lg="16"
              :md="20"
              :sm="20"
              :xs="20"
              class="top-left-right"
            >
              <h1>公司介绍</h1>
              <div class="xian"></div>
              <div class="profile-title" v-html="settingIntroduce"></div>
            </el-col>
          </el-col>
          <el-col
            :span="12"
            class="profile-top-right"
            :style="{ height: protop1H + 'px' }"
          >
            <el-image :src="profileimg" lazy></el-image>
          </el-col>
        </el-col>
        <el-col :span="20" class="theaccordion" :offset="2">
        <div class="the-title">
        <h1>企业优势</h1>
        <div class="xian"></div>
        </div>
        <el-col :span="24" class="accordion" :style="{height:accH+'px'}">
          <div class="adiv" :style="{width:accW*3+'px'}" v-for="(item,id) in acclist" :key="id" onmouseover="this.style.cursor='pointer';" 
            onmouseout="this.style.cursor='normal'">
          <el-image :src="item.acimg1" :style="{width:accW*3+'px'}" lazy></el-image>
          <div class="accordion-title" v-show="flag">
          <div class="accordion-k-title">
          <h2>{{item.tit}}</h2>
          <p>线材组装、连接器、电源线、天线、 裸线、极细同轴线、软排线、 软性电路板、精密五金/塑胶零组件、声学组件以及智能穿戴设备等。f</p>
          </div>
          <div class="mb"></div>
          </div>
          <div class="accordion-tit" v-show="!flag">{{item.tit}}</div>
          </div>
        </el-col>
        </el-col>
        <el-col :span="20" :offset="2" class="branch-office">
        <div class="office-title">
        <h1>旗下公司</h1>
        <div class="xian"></div>
        </div>
        <el-col :span="24" class="office-bottom">
        <el-col :span="12" :style="{height:accW*7/2*0.5+'px'}" class="office-left">
        <div class="bottom-left-top">
        <h4>分公司地址</h4>
        <div class="left-top-scroll">
        <div class="scroll-list" v-for="(item,id) in 8" :key="id">
        <span>东莞讯滔电子有限公司</span>
        <p>地址：广东省东莞市清溪镇青皇村青皇工业区</p>
        </div>
        </div>
        </div>
        </el-col>
        <el-col :span="12" :style="{height:accW*7/2*0.5+'px'}" class="office-right"><el-image src="https://www.luxshare-ict.com/Upload/image/20180115/20180115162220_1771.jpg"></el-image></el-col>
        </el-col>
        </el-col>
      </el-row>
    </div>
    <div><themap></themap></div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../../header/header1.vue";
import bottom from "../../bottom/bottom.vue";
import themap from "./map/map.vue"
import $ from "jquery"
import axios from 'axios'
import marked from 'marked'
import '../../../assets/css/markdown.css'
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      profileimg:
        "https://www.luxshare-ict.com/Upload/image/20200330/20200330094416_6261.jpg",
      protop1H: 445,
      activeName: "1",
      accH:422,
      accW:189,
      flag:false,
      acclist:[
      {acimg1:'https://www.luxshare-ict.com/Upload/image/20180116/20180116090545_9869.jpg',tit:'主要产品'},
      {acimg1:'https://www.luxshare-ict.com/Upload/image/20180116/20180116090605_5025.jpg',tit:'产品应用'},
      {acimg1:'https://www.luxshare-ict.com/Upload/image/20180116/20180116090646_5774.jpg',tit:'研发优势'},
      {acimg1:'https://www.luxshare-ict.com/Upload/image/20180116/20180116090655_6566.jpg',tit:'技术创新'},
      {acimg1:'https://www.luxshare-ict.com/Upload/image/20180116/20180116090704_0962.jpg',tit:'品质政策'},
      ],
      settingIntroduce:''
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
            that.protop1H = that.screenWidth * 0.5 * 0.56;
            that.accH = (that.screenWidth/24)*20*0.32;
            that.accW = that.screenWidth/24*20/7
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    axios.get('/portalSetting/getAll').then(res=>{
      console.log(res.data[0]);
      this.settingIntroduce=marked(res.data[0].settingIntroduce);
    }).catch(err=>{
      console.log(err);
    })
    this.$nextTick(() => {
      const that = this;
      that.protop1H = that.screenWidth * 0.5 * 0.56;
            that.accH = (that.screenWidth/24)*20*0.32;
            that.accW = that.screenWidth/24*20/7
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
      $(".adiv").click(function () {
      $(this).stop().animate({
        width:that.accW*3
      }).find(".accordion-title").css({
          display:'block'
        }).next().css({display:'none'}).parent().siblings().stop().animate({
        width:that.accW
      }).find(".accordion-title").css({
        display:'none'
      }).next().css({display:'block'})
      
    });
    });
  },
  components: { header1, bottom ,themap},
};
</script>
<style scoped>
.profile-top0 {
  margin-top: 20px;
}
.profile-top0 .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagehead {
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.profile h1 {
  font-size: 30px;
}
.profile .xian {
  width: 60px;
  height: 1px;
  background-color: rgb(145, 189, 45);
  margin: 30px 0px 20px 0px;
}
.profile-top-left {
  background-color: rgb(219, 219, 219);
}
.top-left-left {
  background-color: rgb(219, 219, 219);
  opacity: 0;
}
.top-left-right {
  overflow-y: scroll;
  margin-top: 5%;
  padding-right: 2%;
  height: 80%;
}
.top-left-right::-webkit-scrollbar {
  width: 4px;
}
.top-left-right::-webkit-scrollbar-track-piece{
  width: 5px;
  background-color: rgb(145, 189, 45);
}
.top-left-right::-webkit-scrollbar-thumb {
  width: 1px;
  background-color: rgb(122, 158, 38);
}
.profile-top-right {
  display: flex;
}
.theaccordion{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.theaccordion .the-title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.accordion{
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
.accordion .adiv{
  overflow: hidden;
  position: relative;
}
.accordion-title{
  position: absolute;
  bottom: 0;
}
.accordion-k-title{
  position: relative;
  width: 80%;
  margin: 0 auto;
  z-index: 2;
}
.accordion-tit{
  position: absolute;
  top: 4%;
  left: 2%;
  padding: 5px 10px 5px 10px;
  opacity: 0.6;
  background-color: black;
  text-align: center;
  color: white;
  line-height: 30px;
  font-weight: bold;
  font-size: 16px;
  overflow: hidden;
}
.accordion-title .mb{
  position: absolute;
  top: 0;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 1;
}
.accordion-title h2{
  margin-top: 4%;
  font-size: 24px;
  color: white;
}
.accordion-title p{
  margin-top: 4%;
  font-size: 14px;
  line-height: 22px;
  color: white;
  margin-bottom: 10px;
}
.branch-office{
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.office-title{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.office-bottom{
  margin-top: 20px;
}
.office-left{
  background-color: rgb(226, 225, 225);
}
.office-right{
  overflow: hidden;
}
.bottom-left-top{
  width: 80%;
  height: 80%;
  margin-left: 10%;
  margin-top: 5%;
}
.bottom-left-top h4{
  font-size: 18px;
  margin-bottom: 10px;
}
.left-top-scroll{
  overflow-y: scroll;
  height: 84%;
}
.left-top-scroll::-webkit-scrollbar {
  width: 3px;
}
.left-top-scroll::-webkit-scrollbar-track {
  background-color: rgba(187, 236, 95, 0.616);
}
.left-top-scroll::-webkit-scrollbar-thumb {
  width: 5px;
  background-color: rgb(90, 168, 11);
}
.scroll-list{
  width: 90%;
  margin-top: 10px;
  height: 60px;
  border-bottom:1px dashed black ;
}
.scroll-list span {
  font-size: 18px;
  font-weight: bold;
  color: rgb(73, 73, 230);
}
.scroll-list p{
  margin-top: 10px;
  font-size: 16px;
}
</style>