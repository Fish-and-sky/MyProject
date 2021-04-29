<template>
  <div :class="{Hotnews:flag,Hotnews1:!flag}">
    <div class="Hot-title">
      <span>新闻热点</span>
    </div>
    <div class="Hot-img">
      <div class="Hot-div" :style="{height:hoth+'px'}" v-for="(item,id) of hotlist" :key="id" @click="toxwhdinside(item.newsId)">
        <div class="div1" v-show="flag">
          <span>{{item.newsTitle | ellipsis(8)}}</span>
        </div>
        <div class="div2">
          <span>{{item.newsContent | ellipsis(40)}}</span>
        </div>

        <div class="div3">
          <div>
            <span>了解更多</span>
          </div>
          <div class="div3-k" id="div3-k"></div>
        </div>

        <div class="div4" :style="{height:hoth+'px',width:whot+'px'}">
          <img :src="item.newsThumbnail"  alt="" :style="{height:hoth+'px',width:whot+'px'}"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery"
import axios from 'axios'
export default {
  data() {
    return {
      img1:'../../assets/image/HC-2018-keynotes-0403.jpg',
      h:0,
      w:0,
      hotlist:[
        {id:0,newsThumbnail:'https://e-file.huawei.com/-/media/EBG/Images/SolutionV2/iot/02-IoT-latest-03-1.jpg',newsTitle:'打开了的接口带,来空前加!大了的离"开球队经理发"的链接了大量进口',newsContent:'物联网引爆数字经济时代，生产从过去生产商主导变为消费者主导，客户需求从消费产品到消费服务，ICT从支撑系统转变为生产系统，物理世界和数字世界将深度融合。'},
        {id:1,newsThumbnail:'https://e-file.huawei.com/-/media/EBG/Images/SolutionV2/iot/02-IoT-latest-03-1.jpg',newsTitle:'打开了的接口带,来空前加!大了的离"开球队经理发"的链接了大量进口',newsContent:'物联网引爆数字经济时代，生产从过去生产商主导变为消费者主导，客户需求从消费产品到消费服务，ICT从支撑系统转变为生产系统，物理世界和数字世界将深度融合。'},
        {id:2,newsThumbnail:'https://e-file.huawei.com/-/media/EBG/Images/SolutionV2/iot/02-IoT-latest-03-1.jpg',newsTitle:'打开了的接口带,来空前加!大了的离"开球队经理发"的链接了大量进口',newsContent:'物联网引爆数字经济时代，生产从过去生产商主导变为消费者主导，客户需求从消费产品到消费服务，ICT从支撑系统转变为生产系统，物理世界和数字世界将深度融合。'},
      ],
      hotnlist:[],
      // hoth:300,
      // whot:300,
    };
  },
  created(){
    var _this=this;
    axios.get('/portalNews/getAll',{
        params:{
            pageNum:0,
            pageSize:3
        }
    })
    .then(res=>{
        _this.hotlist=res.data.data;
    }).catch(err=>{
        console.log(err);
    })
  },
  props:{
    hoth:{defauct:""},
    whot:{defauct:""},
    flag:{defauct:""}
  },
  methods:{
    toxwhdinside(id){
      //将新闻id缓存到本地，防止在xwhdinside页面中刷新页面数据丢失
      sessionStorage.setItem('inside', id);
      this.$router.push({ name: 'xwhdinside', params: { xwhdinside: id }});
    }
  },
  mounted(){
    // console.log(123)
   var _this=this;
    $(".Hot-div").hover(
      function () {
        _this.w=_this.whot;
        _this.h=_this.hoth;
        $(this)
          .find(".div2")
          .stop()
          .css({ opacity: "1", display: "block" })
          .animate(
            {
              bottom: "160px",
            },
            300
          )
          .next()
          .stop()
          .css({ opacity: "1", display: "block" })
          .animate(
            {
              bottom: "60px",
            },
            400
          ).next().find("img").stop().animate({
            top:"-20px",
            left:"-20px",
            width:_this.w+40,
            height:_this.h+40
          },2400);
      },
      function () {
        $(this)
          .find(".div2")
          .stop()
          .animate(
            {
              opacity: "0",
              bottom: "100px",
            },
            300,
            function () {
              $(this).hide();
            }
          )
          .next()
          .stop()
          .animate(
            {
              opacity: "0",
              bottom: "0px",
            },
            400,
            function () {
              $(this).hide();
            }
          ).next().find("img").stop().animate({
            top:"0px",
            left:"0px",
            width:_this.whot,
            height:_this.hoth
          },1000);
      }
    );

    $(".div3").hover(function () {
        // over
        $(this).find(".div3-k").css({
          "border": "2px solid brown"
        })
      }, function () {
        $(this).find(".div3-k").css({
          "border": "2px solid black"
        })
        // out
      }
    );
  },
};
</script>
<style scoped>
.Hotnews {
  width: 1300px;/*84%改1300*/
  /*height: 500px;*/
  margin: 0 auto;
}
.Hotnews .Hot-title {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.Hotnews .Hot-title span {
  font-size: 40px;
  font-weight: bold;
  color: rgb(88, 88, 88);
}
.Hotnews .Hot-img {
  display: flex;
  justify-content: space-between;
}
.Hotnews .Hot-div {
  position: relative;
  width: 360px;/*380改360*/
  /*height: 340px;*/
  padding: 0px 30px 0px 30px;
  background-color: red;
  overflow: hidden;
  color: black;
}
.Hotnews .Hot-div .div1 {
  position: relative;
  margin-top: 50px;
  z-index: 2;
}
.Hotnews .Hot-div .div1 span {
  position: relative;
  font-size: 22px;
  font-weight: bold;
}
.Hotnews .Hot-div .div2 {
  display: none;
  position: absolute;
  bottom: 100px;
  padding-right: 30px;
  font-size: 18px;
  font-weight: bold;
  z-index: 2;
}
.Hotnews .Hot-div .div2 span{
  line-height: 24px;
}
.Hotnews .Hot-div .div3 {
  position: absolute;
  display: none;
  bottom: 0px;
  width: 140px;
  height: 44px;
  /*border: 2px solid black;*/
  text-align: center;
}
.Hotnews .Hot-div .div3 span {
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
}
.Hotnews .Hot-div .div3 div:nth-child(1) {
  position: relative;
  z-index: 11;
}
.Hotnews .Hot-div .div3 .div3-k {
  position: absolute;
  top: 0px;
  width: 140px;
  height: 44px;
  border: 2px solid black;
  /*background-color: brown;*/
  z-index: 10;
}
.Hotnews .Hot-div .div4 {
  position: absolute;
  top: 0px;
  left: 0px;
  /*width: 444px;
  height: 370px;*/
  overflow: hidden;
  z-index: 1;
}
.Hotnews .Hot-div .div4 img {
  position: absolute;
  /*width: 444px;
  height: 370px;*/
  object-fit: fill;
  z-index: 1;
}
/*
实现图片的移入放大，文字从透明到显示，并向上移动
移出反之
*/
.Hotnews1 {
  width: 1000px;/*84%改1300*/
  /*height: 500px;*/
  margin: 0 auto;
}
.Hotnews1 .Hot-title {
  margin: 0 auto;
  /*border: 1px solid black;*/
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.Hotnews1 .Hot-title span {
  font-size: 40px;
  font-weight: bold;
  color: rgb(88, 88, 88);
}
.Hotnews1 .Hot-img {
  display: flex;
  justify-content: space-between;
}
.Hotnews1 .Hot-div {
  position: relative;
  width: 300px;/*380改360*/
  background-color: red;
  overflow: hidden;
  color: black;
}
.Hotnews1 .Hot-div .div1 {
  position: relative;
  margin-top: 50px;
  margin-left: 30px;
  z-index: 2;
}
.Hotnews1 .Hot-div .div1 span {
  position: relative;
  font-size: 22px;
  font-weight: bold;
}
.Hotnews1 .Hot-div .div2 {
  display: none;
  position: absolute;
  left: 30px;
  bottom: 100px;
  padding-right: 30px;
  font-size: 16px;
  font-weight: bold;
  z-index: 2;
}
.Hotnews1 .Hot-div .div2 span{
  line-height: 24px;
}
.Hotnews1 .Hot-div .div3 {
  position: absolute;
  display: none;
  left: 30px;
  bottom: 0px;
  width: 140px;
  height: 44px;
  /*border: 2px solid black;*/
  text-align: center;
}
.Hotnews1 .Hot-div .div3 span {
  line-height: 44px;
  font-size: 20px;
  font-weight: bold;
}
.Hotnews1 .Hot-div .div3 div:nth-child(1) {
  position: relative;
  z-index: 11;
}
.Hotnews1 .Hot-div .div3 .div3-k {
  position: absolute;
  top: 0px;
  width: 140px;
  height: 44px;
  border: 2px solid black;
  /*background-color: brown;*/
  z-index: 10;
}
.Hotnews1 .Hot-div .div4 {
  position: absolute;
  top: 0px;
  left: 0px;
  /*width: 444px;
  height: 370px;*/
  overflow: hidden;
  z-index: 1;
}
.Hotnews1 .Hot-div .div4 img {
  position: absolute;
  /*width: 444px;
  height: 370px;*/
  object-fit: fill;
  z-index: 1;
}
</style>