<template>
  <div class="product">
    <div class="product-h3-top"><header3 @prset="prgit"></header3></div>
    <!--<div class="product-h3-top"><header4 @prset="prgit"></header4></div>-->
    <div class="product-top">
    <div class="about-tu">
    <div><el-image :src="src" class="about-img"></el-image></div>
    <div class="about-title">
    <div style="text-align: center;"><span>产品中心</span></div>
    <div style="margin-top:40px"><p>官方发布的最新动态或消息，为您提供关于本公司的第一手资讯</p></div>
    </div>
    </div>
    </div>
    <div :class="{'product-k':proflag,'change-product-k':!proflag}">
      <div class="product-left">
      <div class="product-l-s">
      <div style="font-weight:bold;font-size:30px;line-height:40px;">产品中心</div>
      <div style="font-weight:bold;font-size:30px;line-height:40px;">PRODUCT</div>
      </div>
      <div class="product-l-x">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item name="1">
            <template slot="title">
            <div>
                <span class="product-tou">{{productCategoryName}}</span>
            </div>
            </template>
            <div class="product-x-z">
            <div class="product-thelist" v-for="(item,id) in productlist" :key="id" @click="showdetail(item.productId)">
              {{item.productName}}
            </div>
            </div>
          </el-collapse-item>
         <el-collapse-item name="2">
            <template slot="title">
                <span class="product-tou">硬件</span>
            </template>
            <div class="product-x-z" @click="other">
            <div>
              资料整理中
            </div>
            <div>
             资料整理中
            </div>
            <div>
              资料整理中
            </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3">
            <template slot="title">
                <span class="product-tou">软件</span>
            </template>
            <div class="product-x-z" @click="other">
            <div>
              资料整理中
            </div>
            <div>
             资料整理中
            </div>
            <div>
              资料整理中
            </div>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title" class="el-tou">
            <div><span class="product-tou">待定</span></div>
            </template>
            <div class="product-x-z" @click="other">
            <div>
              资料整理中
            </div>
            <div>
              资料整理中
            </div>
            <div>
              资料整理中
            </div>
            </div>
          </el-collapse-item>
        </el-collapse>
        </div>
      </div>
      <div :class="{'product-right':proflag,'change-product-right':!proflag}" v-show="theshow">
      <div :class="{'product-r-k':proflag,'change-product-r-k':!proflag}">
      <div class="product-r-top">
      <h1>{{productCategoryId2}}</h1>
      </div>
      <div class="product-r-center">
        <div class="product-center-div">
        <h1>{{productName}}</h1>
        <div style="margin-top:20px;" v-html="productIntroduction" class="markdown1"></div>
        <!--<div class="product-center-image">
        <div style="display:flex;justify-content: center;"><el-image :src="src1"></el-image></div>
        <div class="product-imgz1"><p>{{imgz}}</p></div>
        </div>-->
        </div>
      </div>
      </div>
      </div>
      <div :class="{'product-right':proflag,'change-product-right':!proflag}" v-show="!theshow">
      <div :class="{'product-r-k':proflag,'change-product-r-k':!proflag}">
      <div class="product-center-div">
      <div><h1>资料整理中</h1></div>
      </div>
      </div>
      </div>
    </div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import { Collapse, CollapseItem,Container,Image} from "element-ui";
import header1 from "../header/header.vue";
import bottom from '../bottom/bottom.vue'
import header3 from '../header/header3.vue'
import header4 from '../header/header4.vue'
import '../../../assets/css/markdown1.css'
import marked from 'marked'
import axios from 'axios'
export default {
  data() {
    return {
      activeName: "1",
      title: "物联网",
      src: 'https://www-file.huawei.com/-/media/corp2020/abouthuawei/sustainability/sustainability_herobanner2.jpg',
      src1:'https://www.zdtoi.com/upload/2019101512455941.png',
      src2:'https://www.zdtoi.com/upload/2019101512425059.jpg',
      src3:'https://www.zdtoi.com/upload/2019101512455941.png',
      protitle:'文字内容',
      tou:'人员定位一',
      tou2:'',
      imgz:'图：产品实物图',
      productlist:[
        {},
        {},
        {},
        {},
        {},
      ],
      proflag:true,
      proW:0,
      productCategoryName:'',
      productCategoryId:'',
      productIntroduction:'',
      productName:'',
      productCategoryId2:'',
      productId:'1',
      theshow:true
    };
  },
  created(){
    window.scroll(0, 0); 
    this.activeName=(this.$route.params.product+1)+'';
    if(this.activeName!='1'&&this.activeName!='2'&&this.activeName!='3'&&this.activeName!='4'){
      this.activeName='1';
    }else{}
    var _this=this;
    if(sessionStorage.getItem('product')==''){

    }else{
      _this.productId=sessionStorage.getItem('product');
    }
      axios.get('/portalProducts/getById',{
        params:{
          id:_this.productId
        }
      }).then(res=>{
        _this.productIntroduction=marked(res.data.data.productIntroduction);
        _this.productName=res.data.data.productName;
        _this.productCategoryId2=res.data.data.productCategoryId;
      }).catch(err=>{
        console.log(err)
      })
  },
  methods:{
    other(){
      this.theshow=false;
    },
    prgit(id){
      this.activeName=(id+1)+'';
    },
    showdetail(id){
      this.theshow=true;
      var _this=this;
      _this.productId=id;
      sessionStorage.setItem('product',_this.productId);
      axios.get('/portalProducts/getById',{
        params:{
          id:_this.productId
        }
      }).then(res=>{
        _this.productIntroduction=marked(res.data.data.productIntroduction);
        _this.productName=res.data.data.productName;
        _this.productCategoryId=res.data.data.productCategoryId;
      }).catch(err=>{
        console.log(err)
      })
    }
  },
  mounted(){
    var _this=this;
    $(window).scroll(function(){
            var height=$(window).scrollTop();
            if(height>=300){
                $(".product-h3-top").css({
                    "position": "fixed"
                })
            }else{
                // console.log(33333)
                $(".product-h3-top").css({
                    "position":"absolute"
                })
            }
            // console.log(height);
        })
        _this.proW = $(window).width();
        if(_this.proW>=1300){
            _this.proflag=true;
        }else if(_this.proW<1300){
            _this.proflag=false;
        }else{}

        window.onresize = function(){
            _this.proW = $(window).width();
            if(_this.proW>=1300){
            _this.proflag=true;
        }else if(_this.proW<1300){
            _this.proflag=false;
        }else{}
        }
    $(".product-x-z div").click(function(){
      // console.log(123);
      // var index = $(".product-x-z div").index(this);
      $(this).css({
        "font-weight":"bold",
        // "color":"red"
      }).siblings().css({
        // "color":"black"
        "font-weight":"200"
      })
    })
    //查询产品类型id
    axios.get('/portalProductsCategory/getAll',{
      params:{
        id:1
      }
    }).then(res=>{
      _this.productCategoryName=res.data.data[0].productCategoryName;
      _this.productCategoryId=res.data.data[0].productCategoryId;
      // console.log(_this.productCategoryId)
      getListByType();
    }).catch(err=>{
      console.log(err)
    })

  let getListByType=function(){
   axios.get('/portalProducts/getListByType',{
      params:{
        id:_this.productCategoryId,
        pageNum:0,
        pageSize:4,
      }
    }).then(res=>{
      _this.productlist=res.data.data;
    }).catch(err=>{
      console.log(err)
    })
    }
  },
  components: {
    "el-collapse": Collapse,
    "el-collapse-item": CollapseItem,
    header1,
    "el-image":Image,
    bottom,
    header3,
    header4,
  },
};
</script>
<style scoped>
.product-h3-top{
position: absolute;
width: 100%;
top: 0px;
z-index: 999;
}
.product {
  width: 100%;
}
.product-top{
  margin-top: 80px;
}
.product-k {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
}
.product-left {
  width: 240px;
  /*border: 1px solid black;*/
}
.product-tou{
    font-weight: bolder;
    font-size: 20px;
}
.product-left div{
font-size: 20px;
line-height: 40px;
}
.product-l-s{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 4PX solid #dd1933;
    margin-bottom: 20px;
}
.product-l-x{
    width: 100%;
    /*border: 1px solid red;*/
}
.product-x-z div{
  color: black;
}
.product-thelist:nth-child(1){
  font-weight: bolder;
}
.product-right{
    width: 900px;
    min-height: 450px;
    border: 1px solid rgb(177, 173, 173);
}
.product-r-top h1{
    font-size: 30px;
    font-weight: bolder;
}
.product-r-k{
    width: 860px;
    margin: 0 auto;
    /*border: 1px solid black;*/
    margin-top: 40px;
}
.product-r-center{
    margin-top: 40px;
}


.about-tu{
    position: relative;
}
.about-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.about-title span{
    font-size: 50px;
    color: white;
    font-weight: bolder;
}
.about-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.about-img{
    height: 340px;
    width: 100%;
}
.product-center-image{
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.product-imgz1{
  display:flex;
  justify-content: center;
}
.product-imgz1 p{
  font-size: 20px;
  font-weight: bolder;
}
.product-l-x >>> .el-collapse-item__header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    /*background-color: rgb(255, 255, 255);*/
    /*background-color: #3acefc;*/
    /*background: linear-gradient(to right,#3acefc ,#0ce9e9);*/
    width: 100%;
    /*color: #303133;*/
    color: black;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    border-bottom: 1px dashed white;
    transition: border-bottom-color .3s;
    outline: 0;
    }
.product-l-x >>> .el-collapse-item__wrap {
    will-change: height;
    /*background-color:  rgb(255, 255, 255);*/
    /*background-color: #34bce6;*/
    /*background: linear-gradient(to right,#3acefc ,#0ce9e9);*/
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: none;
}
.product-l-x >>> .el-collapse-item__header.is-active {
    border-bottom: 1px dashed #a7aaad;
}
.product-l-x >>> .el-collapse-item__content {
    padding-bottom: 25px;
    font-size: 13px;
    /*color: #303133;*/
    color: black;
    line-height: 1.769230769230769;
}
/*改*/
.change-product-k {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 40px;
}
.change-product-right{
    width: 740px;
    min-height: 450px;
    border: 1px solid rgb(177, 173, 173);
    overflow: hidden;
}
.change-product-r-k{
    width: 700px;
    margin: 0 auto;
    margin-top: 40px;
}
</style>