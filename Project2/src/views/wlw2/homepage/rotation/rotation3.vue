<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,id) in rotalist" :key="id">
        <div class="rotation-img"><el-image  :src="item.bannerImg"></el-image></div>
        <div class="rotation-title">
        <div>
        <span>{{(item.bannerTitle  || '').split(',')[0]}}</span>
        <span style="color: rgb(179, 89, 89);font-size:3rem">{{(item.bannerTitle  || '').split(',')[1]}}</span></div>
        <div><p>{{(item.bannerTitle  || '').split(',')[2]}}</p></div>
        <div>
        <div class="title-zi"><span style="font-size:20px">了解更多</span></div>
        <el-image :src="buttonimg"></el-image>
        </div>
        </div>
        </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>
<script>
import Swiper, { Navigation, Pagination ,Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
Swiper.use([Navigation, Pagination ,Autoplay]);
  export default {
    data(){
        return{
            rotalist:[
                {id:0,bannerImg:'http://www.ubitraq.com/images/bg_banner_1.png'},
                {id:1,bannerImg:'http://www.ubitraq.com/images/bg_banner_2.jpg'},
                {id:2,bannerImg:'http://www.ubitraq.com/images/bg_banner_3.jpg'},
                {id:3,bannerImg:'http://www.ubitraq.com/images/bg_banner_4.jpg?v=1'},
                {id:4,bannerImg:'http://www.ubitraq.com/images/bg_banner_5.jpg'},
            ],
            buttonimg:'http://www.ubitraq.com/images/bg_banner_link.png',
            titleimg:'http://www.ubitraq.com/images/fontbg_banner_2.png',
            titleimg2:'http://www.ubitraq.com/images/fontbg_banner_3.png',
            imgheight:0,
        }
    },
    methods:{
        prev () {
            this.$refs.mySwiper.swiper.slidePrev();
    },
    next () {
      this.$refs.mySwiper.swiper.slideNext()
    },
    al(){
      this.imgheight=$('.rotation-img').outerHeight();
      console.log(this.imgheight);
    }
    },
    mounted(){
      var _this=this;
      axios.get('/portalBanner/getAll').then(res=>{
        _this.rotalist=res.data.data.splice(4,9);
      }).catch(err=>{
        console.log(err);
      })
      //轮播图大小变化（有问题）功能最好不删
      // $(document).ready(function(){
      //   $(".swiper-slide").find(".rotation-img .el-image").stop().animate({
      //         'top':'-5%',
      //         'left':'-5%',
      //         'width':'110%',
      //         'height':'110%'
      //     },0).parent().parent().eq(0).find(".rotation-img .el-image").stop().animate({
      //         'top':'0%',
      //         'left':'0%',
      //         'width':'100%',
      //         'height':'100%'
      //     },3000)
      // })
        var mySwiper = new Swiper('.swiper-container', {
    // loop: true,//循环播放后图片图片加载问题 （大概是有冲突）
    // loopAdditionalSlides : 3,
    grabCursor : true,
    setWrapperSize :true,
    width:window.innerWidth,
    height:window.innerHeight,
    roundLengths : true,
    watchOverflow: true,
    observer:true,

    on: {
       resize: function(){
         this.params.width = window.innerWidth;
         this.update();
       },
       slideChangeTransitionEnd: function(data){
           //切换轮播图时执行
          var id =data.activeIndex;
          //轮播图大小变化（有问题）功能最好不删
          // console.log(id);
          // $(".swiper-slide").eq(id).find(".rotation-img .el-image").stop().animate({
          //     'top':'0%',
          //     'left':'0%',
          //     'width':'100%',
          //     'height':'100%'
          // },3000).parent().parent().siblings().find(".rotation-img .el-image").stop().animate({
          //   'top':'-5%',
          //     'left':'-5%',
          //     'width':'110%',
          //     'height':'110%'
          // })
    },
    } ,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
    hiddenClass: 'my-button-hidden',
  },
  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
      waitForTransition: true,
  },
})
    },
  };
</script>
<style scoped>
.swiper-container span{
  font-size: 2rem;
  font-weight: bolder;
  color: white;
}
.swiper-container p{
  font-size: 2.5rem;
  color: white;
}
.swiper-pagination{
  left: 50%;
  bottom: 30px;
  transform: translate(-50%,0%);
}
.swiper-wrapper{
    display: flex;
}
.swiper-slide{
  position: relative;
  top: 0px;
  z-index:99;
}
.swiper-slide .title-zi{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 33;
}
.swiper-slide .rotation-img{
  overflow: hidden;
}
.swiper-slide .rotation-title{
  position: absolute;
  height: 50%;
  width: 100%;
  top: 70%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
.rotation-title div:nth-child(1){
  margin-bottom: 20px;
}
.rotation-title div:nth-child(3){
  position: relative;
  margin-top: 120px;
}
</style>