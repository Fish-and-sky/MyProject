<template>
  <div class="industy">
    <el-row>
    <el-col :xl="20" :lg="20" :md="20" :sm="20" class="industy-top">
      <h1>行业应用</h1>
      <div class="xian"></div>
      <p>专注于连接线、连接器、马达、无线充电、FPC、天线、声学和电子模块等产品的研发、生产和销售。</p>
      <p>产品应用于3C（计算机、通讯、消费电子）、企业级设备、汽车、医疗等领域，致力于为客户提供一站式采购服务。</p>
    </el-col>
    <el-col :xl="20" :lg="20" :md="20" :sm="20" class="industy-center" :style="{height:industyH+50+'px'}">
    <div  class="industy-center-div" :style="{height:industyH+'px',left:screenWidth/24*20*0.015+'px'}">
    <div class="center-div-img"><el-image :src="industyimg3"></el-image></div>
    <div class="center-div-title">
      <div class="center-div-title-k">
        <h2>消费电子产品</h2>
        <p>我们提供各种物联网、可穿戴设备、智能手机、平板电脑和笔记本电脑创新连接解决方案，以帮助您迎接当前的挑战和未来的创新。</p>
      </div>
      <div class="div-mb"></div>
    </div>
    </div>
    <div  class="industy-center-div" :style="{height:industyH+'px',left:screenWidth/24*20*0.34+'px'}" >
    <div class="center-div-img"><el-image :src="industyimg3"></el-image></div>
    <div class="center-div-title">
      <div class="center-div-title-k">
        <h2>消费电子产品</h2>
        <p>我们提供各种物联网、可穿戴设备、智能手机、平板电脑和笔记本电脑创新连接解决方案，以帮助您迎接当前的挑战和未来的创新。</p>
      </div>
      <div class="div-mb"></div>
    </div>
    </div>
    <div  class="industy-center-div" :style="{height:industyH+'px',left:screenWidth/24*20*0.33*2+'px'}" >
    <div class="center-div-img"><el-image :src="industyimg3"></el-image></div>
    <div class="center-div-title">
      <div class="center-div-title-k">
        <h2>消费电子产品</h2>
        <p>我们提供各种物联网、可穿戴设备、智能手机、平板电脑和笔记本电脑创新连接解决方案，以帮助您迎接当前的挑战和未来的创新。</p>
      </div>
      <div class="div-mb"></div>
    </div>
    </div>
    </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data(){
    return{
      distance:0,
      industyH:600,
      industyimg1:'https://www.luxshare-ict.com/Upload/image/20180115/20180115135019_7771_1493x1493.jpg',
      industyimg2:'https://www.luxshare-ict.com/Upload/image/20180115/20180115135531_9804_2791x2791.jpg',
      industyimg3:'https://www.luxshare-ict.com/Upload/image/20180116/20180116134143_2163.png'
    }
  },
  watch:{
    screenWidth(val){
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        if(!this.timer){
            // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                // 打印screenWidth变化的值
                if(that.screenWidth>=1000){
                  const W=that.screenWidth/24*20*0.31;
                that.industyH=W*1.7;
                }
                that.timer = false
            },400)
        }
    }
},
props:{
  screenWidth:{defauct:""},
},
  mounted(){
    this.$nextTick(()=>{
      const that = this
      const W=that.screenWidth/24*20*0.31;
                that.industyH=W*1.7;

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

    $(".industy-center-div").hover(function () {
      var b=$(this).position().left;
                  that.distance=b;
        $(this).stop().animate({
          'left':that.distance-that.screenWidth/24*20*0.3*0.085,
          'top':'-2%',
          'height':that.industyH/0.31*0.35,
          'width':'35%',
          'z-index':'2'
        }).find('.center-div-title-k h2').css({
          'color':'white'
        }).next().css({
          'color':'white'
        }).parent().next().stop().animate({
          'opacity':'1'
        },600)
      }, function () {
        $(this).stop().animate({
          'left':that.distance,
          'top':'25',
          'height':that.industyH,
          'width':'30%',
          'z-index':'1'
        }).find('.center-div-title-k h2').css({
          'color':'#b1cc1d'
        }).next().css({
          'color':'black'
        }).parent().next().stop().animate({
          'opacity':'0'
        },600)
      }
    );
    })
  }
}
</script>
<style scoped>
.industy{
  margin-top: 80px;
}
.industy h1{
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.industy p{
  font-size: 14px;
  line-height: 24px;
}
.industy .el-row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.industy-top{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
}
.industy-top .xian{
  width: 50px;
  height: 2px;
  background-color: #b1cc1d;
  margin-bottom: 20px;
}
.industy-center{
  position: relative;
  opacity: 0;
  left: -300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.industy-center-div{
  position: absolute;
  top: 25px;
  width: 30%;
  z-index: 1;
}
.center-div-img{
  width: 100%;
  height: 57%;
  display: flex;
  object-fit: fill;
  overflow: hidden;
}
.center-div-img .el-image{
  width: 100%;
}
.center-div-title{
  width: 100%;
  height: 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.center-div-title-k{
  width: 80%;
  height: 80%;
  z-index: 2;
}
.center-div-title-k h2{
  font-size: 24px;
  margin-bottom: 20px;
  color: #b1cc1d;
}
.center-div-title-k p{
  font-size: 16px;
  line-height: 24px;
}
.div-mb{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: #b1cc1d;
  z-index: 1;
  opacity: 0;
}
</style>