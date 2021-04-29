<template>
  <div class="produce">
    <div class="produce-k">
    <div class="produce-div">
    <el-image :src='proimg'></el-image>
    <div class="produce-title">
    <h3>产品硬件</h3>
    <div class="pro-title">
    <p>运营商级品质</p>
    <p>长寿命</p>
    <p>低成本</p>
    </div>
    </div>
    </div>
    <div class="produce-div" @click="changepage">
    <el-image :src='proimg3' ref="img" class="img1"></el-image>
    <div class="produce-men"></div>
    <div class="produce-title">
    <el-image :src="proimg5" class="imgg"></el-image>
    <div class="pro-title" style="margin-top:40px">
    <p>定位基站</p>
    </div>
    </div>
    </div>
    <div class="produce-div">
    <el-image :src='proimg2'></el-image>
    <div class="produce-title">
    <h3>产品软件</h3>
    <div class="pro-title">
    <p>云端／本地部署</p>
    <p>开放位置平台</p>
    <p>深入洞见数据</p>
    </div>
    </div>
    </div>
    <div class="produce-div" @click="changepage2">
    <el-image :src='proimg4' class="img1"></el-image>
    <div class="produce-men"></div>
    <div class="produce-title">
    <el-image :src="proimg6" class="imgg"></el-image>
    <div class="pro-title" style="margin-top:40px">
    <p>厘米级高精度定位系统</p>
    </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data(){
    return{
        proimg:'http://www.ubitraq.com/images/aaa.png',
        proimg2:'http://www.ubitraq.com/images/ccc.png',
        proimg3:'http://www.ubitraq.com/images/ddd.png',
        proimg4:'http://www.ubitraq.com/images/bbb.png',

        proimg5:'http://www.ubitraq.com/images/ttt.png',
        proimg6:'http://www.ubitraq.com/images/yyy.png',

    }
  },
  methods:{
    changepage(){
      this.$router.push('/product_hard');
    },
    changepage2(){
      this.$router.push('/product_soft');
    }
},
mounted(){
  $(".produce-div").hover(function () {
      $(this).find('.img1').stop().animate({
        'top':'-20px',
        'left':'-20px',
         'width':'315px',
         'height':'540px'
      },400).next().stop().css({
        'opacity': '0.4',
      })
    }, function () {
      $(this).find('.img1').stop().animate({
        'top':'0px',
        'left':'0px',
         'width':'275px',
         'height':'470px'
      },400).next().stop().css({
        'opacity': '0.6',
      })
    }
  );
}
}
</script>
<style scoped>
.produce{
  width: 100%;
  color: white;
  margin-top: 80px;
}
.produce h3{
  font-size: 20px;
}
.produce p{
  font-size: 14px;
  line-height: 24px;
}
.produce-k{
  width: 1060px;
  height: 470px;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
}
.produce-div{
  position: relative;
  width: 273px;
  height: 470px;
  overflow: hidden;
  border: 1px solid black;
}
.produce-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  text-align: center;
}
.produce-title h3{
  margin-bottom: 30px;
}
.pro-title{
  text-align: center;
  width: 160px;
}
.produce-men{
  position: absolute;
  top: 0px;
  opacity: 0.6;
  width: 273px;
  height: 470px;
  background-color: black;
  z-index: 998;
}
.produce-div .el-image{
  width: 275px;
  height: 470px;
}
.produce-div .imgg{
  width: 60px;
  height: 60px;
}
</style>