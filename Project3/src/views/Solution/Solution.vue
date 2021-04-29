<template>
  <div class="Solution">
    <div><header1></header1></div>
    <div class="Solution-top">
      <el-row>
        <el-col :span="20">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item
              >
              <el-breadcrumb-item>{{ $route.query.name }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="20" class="Solution-topimg">
          <el-image :src="solulist2.solutionTypeImg" lazy style="width: 100%"></el-image>
          <div class="topimg-title">
            <h1>{{solulist2.solutionTypeName}}</h1>
            <div class="xian"></div>
            <p id="text_desc_p">{{solulist2.solutionTypeTitle}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
      <div>
      <div v-for="(item,id) in solulist" :key="id">
        <solutionimg :screenWidth="screenWidth" :soluimglist="solulist[id]" v-if="id%2==0"></solutionimg>
        <solutionimg2 :screenWidth="screenWidth" :soluimglist="solulist[id]" v-if="id%2==1"></solutionimg2>
      </div>
      </div>
    <div class="theactive">
      <productmore :screenWidth="screenWidth"></productmore>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../header/header1.vue";
import bottom from "../bottom/bottom.vue";
import solutionimg from "./solution-img/solution-img.vue";
import solutionimg2 from "./solution-img/solution-img2.vue";
import productmore from "./product-more/product-more.vue";
import $ from "jquery";
import axios from 'axios'
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      Subhead: "解决方案",
      Solutionimg:
        "https://www.luxshare-ict.com/Upload/image/20180913/20180913153605_0668.jpg",
      api:'',
      id:1,
      solulist:{},
      solulist2:{},
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
        }, 600);
      }
    },
  },
  mounted() {
    this.api=sessionStorage.getItem('API').split(',')[0];
    this.id=sessionStorage.getItem('API').split(',')[1];
    axios.get(this.api,{params:{
      id:this.id
    }}).then(res=>{
      this.solulist2=res.data.data;
      this.solulist=res.data.content;
      console.log(this.solulist)
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
      setTimeout(function(){
        //在p标签内碰到。自动换行
        if(that.solulist2.solutionTypeTitle!=undefined || that.solulist2.solutionTypeTitle!=null){
          var break_line=document.getElementById("text_desc_p");
    var content=break_line.innerHTML;
    break_line.innerHTML=content.replace(/。/g,"。<br>");
        }
      },400)
      $(".topimg-title").stop().animate(
              {
                opacity: "1",
                top:'30%'
              },
              800
            );
    });
  },
  components: { header1, bottom, solutionimg, solutionimg2, productmore },
};
</script>
<style scoped>
.Solution h1 {
  font-size: 30px;
  color: #fff;
}
.Solution p {
  font-size: 16px;
  line-height: 26px;
  color: #fff;
}
.Solution-top {
  margin-top: 20px;
}
.Solution-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pagehead {
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.Solution-topimg {
  position: relative;
}
.Solution-topimg .xian {
  margin: 20px 0px;
  width: 60px;
  height: 1px;
  background-color: rgb(145, 189, 45);
}
.topimg-title {
  position: absolute;
  opacity: 0;
  left: 10%;
  top: 20%;
}
</style>