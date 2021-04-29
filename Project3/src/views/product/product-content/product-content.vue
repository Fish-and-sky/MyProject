<template>
    <div class="product-content">
    <div><header1></header1></div>
    <div class="content-top">
      <el-row>
        <el-col :span="20">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>产品</el-breadcrumb-item>
              <el-breadcrumb-item>{{Subhead1}}</el-breadcrumb-item>
              <el-breadcrumb-item>{{Subhead2}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="20" class="content-center">
        <el-col class="content-center-left" :style="{height:theleftH+'px'}">
        <el-image :src="contentimg" style="width:100%"></el-image>
        </el-col>
        <el-col class="content-center-right" :style="{height:theleftH+'px'}">
        <div class="content-right-container">
        <div class="container-top">
        <h1>{{productName}}</h1>
        <h3 style="margin-top:20px;">{{productTitle}}</h3>
        <div class="xian"></div>
        <div class="content-details" v-html="content">
        </div>
        </div>
        <div class="container-bottom">
        <el-button type="success" style="width:100%;" @click="down">下载：产品图纸</el-button>
        <a :href="productDownload" target="_blank">
        <el-button style="width:100%;margin-left:0px;margin-top:10px;">预览：3D PDF</el-button>
        </a>
        </div>
        </div>
        </el-col>
        </el-col>
        <el-col :span="20">
        <div class="product-pagechange">
        <div><span>上一个产品：</span><span @click="findproduct(0)" onmouseover="this.style.cursor='pointer';"
              onmouseout="this.style.cursor='normal'">{{prevproduct}}</span></div>
        <div><span>下一个产品：</span><span @click="findproduct(1)" onmouseover="this.style.cursor='pointer';"
              onmouseout="this.style.cursor='normal'">{{nextproduct}}</span></div>
        </div>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top:-50px;"><bottom :screenWidth="screenWidth"></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header/header1.vue'
import bottom from '../../bottom/bottom.vue'
import axios from "axios"
import marked from 'marked'
import '../../../assets/css/markdown.css'
import download from "downloadjs"
export default {
  inject: ['reload'],
    data() {
    return {
      screenWidth: document.body.clientWidth,
      productName:'',
      productTitle:'',
      Subhead2:'',
      Subhead1:'',
      theleftH:660,
      contentimg:'',
      prevproduct:'',
      nextproduct:'',
      prevproductid:null,
      nextproductid:null,
      http:{},
      content:'',
      productDownload:'http://192.168.2.121:8002/file/%E6%96%87%E6%A1%A3/1.18%E8%AE%BE%E8%AE%A1%E7%A8%BFLucy%20%20%E5%A4%A9%E7%BA%BFAntennas+210.210%E6%AF%AB%E7%B1%B3%E7%AB%96%E7%89%88+30P-2021030503075739.pdf',
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
            that.theleftH = (that.screenWidth/24)*20*0.5;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  methods:{
    findproduct(val){
      if(val==0){
        if(this.prevproductid==null){}else{
          sessionStorage.setItem("productId",this.prevproductid);
          this.http();
          this.reload();
        }
      }else if(val==1){
        if(this.nextproductid==null){}else{
          sessionStorage.setItem("productId",this.nextproductid);
          this.http();
          this.reload();
        }
      }
    },
    down() {
    /*我们只是需要这个地址放到这个里面就可以了 pdf文件地址*/
      download(
        this.productDownload
      );
    }
  },
  mounted() {
const that=this;
  that.http=function(){ axios.get('/portalProducts/getById',{params:{
      id:sessionStorage.getItem("productId"),
    }}).then(res=>{
      this.Subhead1=res.data.content.productTypes[0].productCategoryName;
      this.contentimg=res.data.content.productThumbnail;
      this.productName=res.data.content.productName;
      this.Subhead2=res.data.content.productName;
      this.productTitle=res.data.content.productTitle;
      this.productDownload=res.data.content.productDownload;
      this.content=marked(res.data.content.productParameter)
      if(res.data.data[0].name==undefined){
        this.prevproduct='没有上一个产品了';
      }else{
        this.prevproduct=res.data.data[0].name;
        this.prevproductid=res.data.data[0].id;
      }
      if(res.data.data[1].name==undefined){
        this.nextproduct='没有下一个产品了';
      }else{
        this.nextproduct=res.data.data[1].name;
        this.nextproductid=res.data.data[1].id;
      }

    }).catch(err=>{
      console.log(err)
    })
  }
  that.http();
    this.$nextTick(() => {
      const that = this;
      that.theleftH = (that.screenWidth/24)*20*0.5;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    });
  },
    components:{header1 , bottom }
}
</script>
<style scoped>
.product-content h1{
  font-size: 30px;
  line-height: 40px;
  color: rgb(147, 201, 66);
}
.product-content h3{
  font-size: 20px;
  color: rgb(34, 37, 180);
}
.product-content h4{
  font-size: 16px;
}
.product-content span{
  font-size: 16px;
  line-height: 30px;
  color: rgb(165, 165, 165);
}
.content-top {
  margin-top: 20px;
}
.content-top .el-row {
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
.content-center{
  display: flex;
  padding-bottom: 40px;
  border-bottom:1px solid rgb(158, 158, 158);
}
.content-center-left{
  border: 1px solid rgb(131, 131, 131);
  overflow: hidden;
  display: flex;
}
.content-center-right{
  display: flex;
  flex-direction: row-reverse;
}
.content-right-container{
  position: relative;
  width: 90%;
}
.container-top{
  overflow-y: scroll;
  margin-top: 40px;
  height: 60%;
  padding-right: 2%;
}
.container-top::-webkit-scrollbar {
width: 2px;
}
.container-top::-webkit-scrollbar-thumb{
  background-color: rgb(218, 218, 218);
}
.container-top::-webkit-scrollbar-track{
  background-color: rgb(146, 146, 146);
}
.container-top .xian{
  margin-top: 20px;
  margin-bottom: 20px;
  width: 60px;
  height: 1px;
  background-color: rgb(145, 189, 45);
}
.container-top .spec{
  margin-top: 40px;
}
.container-top .features{
  margin-top: 40px;
}
.container-bottom{
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
}
.product-pagechange{
  margin-top: 20px;
}
</style>