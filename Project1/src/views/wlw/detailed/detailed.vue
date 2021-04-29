<template>
<div class="detailed">
  <div class="deta-title">
    <span @click="dianj2">优质产品</span>
  </div>
  <div class="deta-bottom">
  <div class="deta-b-top">
  <div class="deta-b-top-div1" id="div1" @click="dianj1"><span>{{title1}}</span><div class="deta-b-k" v-show="flag"></div></div>
  <div class="deta-b-top-div1" id="div1" @click="dianj2"><span>{{title2}}</span><div class="deta-b-k" v-show="flag1"></div></div>
  </div>
  <div class="deta-b-bottom" v-show="flag">
  <div class="deta-b-left">
    <img src="../../../assets/image/20200821121729935.png" :style="{height:dh}" alt="">
  </div>
  <div class="deta-b-center"></div>
  <div class="deta-b-right">
  <div class="deta-b-r">
  <div class="deta-right-top">
  <h1><span>物联网链接管理平台</span></h1>
  </div>
  <div class="deta-right-center">
  <p>{{tit}}</p>
  </div>
  <div class="deta-right-bottom" @click="toprodetails">
  <div>
  <p>了解更多</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  <div class="deta-b-bottom" v-show="flag1">
  <div class="deta-b-left" :style="{height:dh}">
    <img src="../../../assets/image/20200821121729935.png" alt="">
  </div>
  <div class="deta-b-center"></div>
  <div class="deta-b-right">
  <div class="deta-b-r">
  <div class="deta-right-top">
  <h1><span>{{title2}}</span></h1>
  </div>
  <div class="deta-right-center">
  <p>{{tit2}}</p>
  </div>
  <div class="deta-right-bottom" @click="toprodetails">
  <div>
  <p>了解更多</p>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</div>  
</template>
<script>
export default {
  data(){
    return{
      title:'',
      title1:'物联网链接管理平台',
      title2:'边缘计算物联网',
      tit2:'华为边缘计算物联网解决方案（EC-IoT，Edge Computing IoT）支持丰富的工业协议和接口，广泛适应不同行业联接场景，而且通过开放的边缘计算能力和云管理架构，快速满足不同行业边缘智能数据处理诉求，助力行业快速创新。',
      tit:'面向物与物、人与物的IoT联接管理平台，支持多种垂直行业应用快速集成，同时提供多种API满足多样化设备接入，满足运营商、企业和行业构建物联网端到端整体解决方案。',
      flag:true,
      flag1:false,
      hh:"80px"
    }
  },
  props:{
    dh:{defauct:""}
  },
  methods:{
    dianj1(){
      // console.log(1);
        this.flag=true;
        this.flag1=false;
    },
    dianj2(){
      // console.log(2);
        this.flag1=true;
        this.flag=false;
    },
    toprodetails(){
      if(this.flag==true){
        this.$router.push({ name: 'product', params: { prodetails: 1 }})
      }else if(this.flag1==true){
        this.$router.push({ name: 'product', params: { prodetails: 2 }})
      }
    }
  },
  mounted(){
   var _this=this;
   /*获取图片外边框的宽度*/
   var ww=$(".deta-b-left").innerWidth()
  /*实时监听浏览器的宽度(theW)和高度(theY)   当图片外框的宽度小于240px使框的宽度才会变化*/
    window.onresize = function(){
      // var theW = $(window).width();
      // var theY = $(window).height();
      /*实时获取图片变化的宽度*/
      var www=$(".deta-b-left").innerWidth()
       //var hhh=$(".deta-right-center p").innerHeight();
      //_this.hh=hhh+'px'
    var bi=www/ww;
    if(bi<=1){
      _this.dh=parseInt(240*bi)+'px';
    }
  }

    /*进出更改字体颜色*/
    $(".deta-right-top h1 span").hover(function () {
        $(this).css({
        color:"rgb(155, 7, 7)"
      })
      }, function () {
        $(this).css({
        color:"black"
      })
      });
      /*进出更改按钮边框颜色*/
      $(".deta-right-bottom").find("div").hover(function () {
          $(this).css({
            "border":"2px solid rgb(155, 7, 7)"
          })
        }, function () {
          $(this).css({
            "border":"2px solid black"
          })
        });
        /*进出显示颜色，若为点击状态则不会更改颜色*/
          $(".deta-b-top-div1").eq(1).hover(function () {
            if(_this.flag1==false){
              $(this).css({
              "background-color": "rgb(138, 14, 14)"
            })
            }else{}
            }, function () {
              if(_this.flag1==false){
                $(this).css({
              "background-color": "#555454"
            })
              }else{}
            }
          );
          $(".deta-b-top-div1").eq(0).hover(function () {
            if(_this.flag==false){
              $(this).css({
              "background-color": "rgb(138, 14, 14)"
            })
            }else{}
            }, function () {
              if(_this.flag==false){
                $(this).css({
              "background-color": "#555454"
            })
              }else{}
            }
          );
        /*点击按钮切换显示*/
        $(".deta-b-top-div1").click(function(){
          $(this).css({
            "background-color": "rgb(138, 14, 14)"
          }).find(".deta-b-k").css({
            display:'block'
          }).parent().siblings().css({
            "background-color": "#555454"
          }).find(".deta-b-k").css({
            display:"none"
          })
        })
  }
}
</script>
<style scoped>
.detailed{
  width: 84%;
  /*border: 1px solid black;*/
  margin: 0 auto;
}
.deta-title{
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}
.deta-title span{
  font-size: 40px;
  font-weight: bold;
  color: rgb(88, 88, 88);
}
.deta-b-top{
  width: 100%;
  height: 60px;
  /*border: 1px solid #dadada;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 34px;
}
.deta-b-top .deta-b-top-div1{
  height: 100%;
  text-align: center;
  width: 100%;
  grid-row: 1;
  /*border: 1px solid springgreen;*/
  background-color: #555454;
  line-height: 60px;
  font-size: 20px;
  font-weight: bold;
  color: white;
}
.deta-b-top div:nth-child(1){
  background-color: rgb(138, 14, 14);
}
.deta-b-k{
  margin:0 auto;
		width: 0px;
		height: 0px;
		border-left: 16px solid transparent;
		border-top: 16px solid rgb(138, 14, 14);
		border-right: 16px solid transparent;
		border-bottom: 16px solid transparent;
}
.deta-b-bottom{
  display: flex;
}
.deta-b-bottom .deta-b-left{
  width: 30%;
  /*border: 1px solid black;*/
  height: 240px;
  overflow: hidden;
}
.deta-b-bottom .deta-b-left img{
  width: 100%;
    height: 100%;
    object-fit:fill;
}
.deta-b-bottom .deta-b-center{
  width: 5%;
}
.deta-b-bottom .deta-b-right{
  width: 65%;
  /*border: 1px solid black;*/
}
.deta-b-r{
  margin: 40px 0px;
}
.deta-right-top h1{
  width: 100%;
  font-size: 26px;
}
.deta-right-center{
  margin-top: 20px;
  height: 80px;
}
.deta-right-center p{
  font-size: 20px;
  line-height: 26px;
  /*border:1px solid black;*/
}
.deta-right-bottom{
  margin-top: 30px;
}
.deta-right-bottom div:nth-child(1){
  width: 140px;
  height: 40px;
  border: 2px solid black;
}
.deta-right-bottom div:nth-child(1) p{
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}
/*实现左右点击切换内部页面，移入移出，字体颜色及边框的变化*/
</style>