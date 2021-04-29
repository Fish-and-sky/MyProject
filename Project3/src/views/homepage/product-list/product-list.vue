<template>
  <div class="product-list">
  <el-row type="flex" justify="center">
  <el-col :xl="20" :lg="20" :md="22" :sm="22" class="product-list-k">
  <el-col :span="12" class="product-list-left">
  <el-col :span="20" class="list-left-left" :style="{height:proimgH*6+'px'}">
  <div class="list-left-k">
  <h1>热点产品</h1>
  <div class="zican">
  <p style="font-size:32px;color:#b1cc1d;" onmouseover="this.style.cursor='pointer';"
   onmouseout="this.style.cursor='normal'" @click="toprocontent">{{productName}}</p>
  <p style="font-size:18px;margin-top:10px;color:#004e97;font-weight:bold;">{{productTitle}}</p>
  <div class="dazixian"></div>
  </div>
  <div class="canshu">
  <ul>
  <li v-html="content"></li>
  <li style="margin-top:10px">></li>
  </ul>
  </div>
  </div>
  </el-col>
  <el-col :span="4" class="list-left-right" :style="{height:proimgH*6+'px'}">
  <div class="list-left-right-k" :style="{height:proimgH+'px'}" v-for="(item,id) in prolist" :key="id" @click="changecolor(id)">
  <el-image :src="item.productThumbnail" lazy></el-image>
  <div :class="{'list-left-right-mb1':num==id}" class="list-left-right-mb"></div>
  </div>
  </el-col>
  </el-col>
  <el-col :span="12" class="product-list-right">
  <div><el-image :src="productThumbnail" lazy></el-image></div>
  </el-col>
  </el-col>
  </el-row>
  </div>
</template>
<script>
import axios from "axios"
import marked from 'marked'
import {get} from '../../../api/apis/allapi.js'
export default {
  data(){
    return{
      proimgH:111,
      num:0,
      content:'',
      prolist:[],
      productName:'',
      productTitle:'',
      productThumbnail:''
    }
  },
watch:{
    proscreenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的proscreenWidth值改变，就将其重新赋给data里的proscreenWidth
            this.proscreenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印proscreenWidth变化的值
                if(that.proscreenWidth>=1000){
                  that.proimgH=that.proscreenWidth/24*20*0.5/6;
                
                }
                that.timer = false
            },400)
        }
    }
},
methods:{
  changecolor(id){
    this.num=id;
    this.productName=this.prolist[this.num].productName;
    this.productTitle=this.prolist[this.num].productTitle;
    this.productThumbnail=this.prolist[this.num].productThumbnail;
    this.content=marked(this.prolist[this.num].productParameter.split('产品特性：')[0]);
  },
  toprocontent(){
    this.$router.push('/product/content')
    sessionStorage.setItem("productId",this.prolist[this.num].productId);
  }
},
props:{
  proscreenWidth:{defauct:""},
},
mounted(){
  get('/portalProducts/getAll',{params:{
    pageNum:0,
    pageSize:8
    }
    }).then(res=>{
      this.prolist=res.content;
    this.productName=this.prolist[this.num].productName;
    this.productTitle=this.prolist[this.num].productTitle;
    this.productThumbnail=this.prolist[this.num].productThumbnail;
    this.content=marked(this.prolist[0].productParameter.split('产品特性：')[0]);
    })
  this.$nextTick(()=>{
    const that =this;
    that.proimgH=that.proscreenWidth/24*20*0.5/6;

    $(document).ready(function(){
    var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".industy-center");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
            $(".industy-center").stop().animate({
              'opacity': '1',
              'left':'0px',
            },800)
        }else{
            
        }
    });
});

  })
}
}
</script>
<style scoped>
.product-list{
    margin-top: 20px;
}
.product-list h1{
  font-size: 30px;
  width: 130px;
  padding-bottom: 10px;
  border-bottom: 2px solid #b1cc1d;
  text-align: center;
}
.product-list h4{
  font-size: 18px;
  margin-bottom: 20px;
}
.product-list-left{
  background-color: rgb(241, 239, 239);
}
.list-left-left{
  background-color: rgb(241, 239, 239);
  display: flex;
  justify-content: center;
}
.list-left-k{
  overflow-y: scroll;
  width: 90%;
  padding-left: 10%;
  padding-top: 20%;
  padding-bottom: 20px;
  margin: 40px 0px;
}
.list-left-k::-webkit-scrollbar {
  width: 4px;
}
.list-left-k::-webkit-scrollbar-track-piece{
  width: 5px;
  background-color: rgb(241, 239, 239);
}
.list-left-k::-webkit-scrollbar-thumb {
  width: 1px;
  background-color: rgb(241, 239, 239);
}

.list-left-k h1{
  margin-top: 0px;
}
.list-left-k .zican{
  margin-top: 30px;
}
.list-left-k .dazixian{
  margin-top: 20px;
  width: 81px;
  height:2px;
  background-color: #b1cc1d;
}
.list-left-k .canshu{
  margin-top: 20px;
  width: 90%;
}
.list-left-k .canshu ul li{
  font-size: 16px;
  line-height: 26px;
}
.list-left-right{
overflow-y: scroll;
overflow-x: hidden;
}
.list-left-right::-webkit-scrollbar {
width: 1px;
}
.list-left-right-k{
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
}
.list-left-right-mb{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.6;
}
.list-left-right-mb1{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0;
}
.product-list-right{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>