<template>
<div class="rotation">
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, id) in rotalist" :key="id" :index="id">
        <div class="rotation-img" :style="{height:screenWidth*0.5+'px'}">
        <img :src="item.bannerImg" alt=""><!--el-image和swiper造成图片显示出现空白页问题，(猜测大概是el-image中图片的加载方式和swiper冲突（el-image大概为lazy（懒加载））)-->
        </div>
        <div class="rotation-title">
        <div><span style="margin-right:20px">{{(item.bannerTitle ||'').split('。')[0]}}</span><span>{{(item.bannerTitle ||'').split('。')[1]}}</span></div>
        <div><p>{{item.bannerTitle2 }}</p></div>
        <div><el-button type="success" @click="tochangepage(item.bannerUrl)">了解更多</el-button></div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
Swiper.use([Navigation, Pagination, Autoplay])
export default {
  inject: ['reload'],
  data() {
    return {
      rotalist: [],
      imgheight: 0,
      laowidth:0,
    };
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
                //（初始获得的laowidth与screenWidth相差17）通过比较当前页面宽度和之前页面宽度的，来进行刷新页面处理（解决swiper中loop复制出来的两个slide大小固定的问题）
                if(that.screenWidth!=that.laowidth-17){
                  that.reload();
                  that.laowidth=that.screenWidth;
                }
                that.timer = false
            },400)
        }
    }
},
  props:{
    screenWidth:{defauct:""},
  },
  computed: {
  swiper() {
    return this.$refs.mySwiper;
  }
},
updated() {
  if (this.rotalist.length>1) {
    this.swiper;
  }
},
  methods: {
    prev() {
      this.$refs.mySwiper.swiper.slidePrev();
    },
    next() {
      this.$refs.mySwiper.swiper.slideNext();
    },
    tochangepage(value){
      this.reload();
      var href ,funame,name,api
      href=(value ||'').split('&')[0];
      funame=(value ||'').split('&')[1];
      name=(value ||'').split('&')[2];
      api=(value || '').split('&')[3];
      sessionStorage.setItem('API',api);
      this.$router.push({path:href,
      query: {
      funame:funame,
      name:name,
      href:href,
       }})
    }
  },
  created(){
          $(".rotation-img .el-image").ready(function(){
        $(".swiper-slide").eq(0).find(".rotation-title").stop().delay(1000).animate({
              'left':'10%',
              'opacity':'1'
            },800).parent().siblings().find(".rotation-title").stop().animate({
              'left':'30%',
              'opacity':'0'
            },10)
      })
  },
  mounted() {
    this.laowidth=this.screenWidth;
    axios.get('/portalBanner/getAll').then(res=>{
        this.rotalist=res.data.content;
        if(res.data.content!=undefined){
              this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        grabCursor: true,
        setWrapperSize: true,
        roundLengths: true,
        watchOverflow: true,
        observer:true,
        loop:true,
        on: {
          slideChangeTransitionEnd: function (data) {
            //切换轮播图时执行
            var id = data.activeIndex;
            $(".swiper-slide").eq(id).find(".rotation-title").stop().animate({
              'left':'10%',
              'opacity':'1'
            },800).parent().siblings().find(".rotation-title").stop().animate({
              'left':'30%',
              'opacity':'0'
            },10)

          },
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable :true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
          hiddenClass: "my-button-hidden",
        },
        autoplay: {
          loop:true,
          delay: 8000,
          disableOnInteraction: false,
          waitForTransition: true,
        },
      });
    });
        }
      }).catch(err=>{
        console.log(err);
      })
  },
};
</script>
<style scoped>
.swiper-container span {
  font-size: 2.2rem;
  font-weight: bolder;
  color: white;
}
.swiper-container p {
  font-size: 1rem;
  color: white;
}
.swiper-pagination {
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, 0%);
}
.swiper-wrapper {
  display: flex;
}
.swiper-slide {
  position: relative;
  top: 0px;
  z-index: 99;
}
.swiper-slide .title-zi {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 33;
}
.swiper-slide .rotation-img {
  overflow: hidden;
  display: flex;
}
.swiper-slide .rotation-title {
  position: absolute;
  bottom: 16%;
  height: 30%;
  opacity: 0;
  left: 30%;
}
.rotation-title div:nth-child(1) {
  margin-bottom: 4%;
  color: white;
}
.rotation-title div:nth-child(2) {
  color: white;
}
.rotation-title div:nth-child(3) {
  margin-top: 10%;
  color: white;
}
 .swiper-container{
    --swiper-pagination-color: white;/* 两种都可以 */
    --swiper-pagination-width:50px;
  }
  .swiper-container >>>.swiper-pagination-bullet-active{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  }
  .swiper-container >>>.swiper-pagination-bullet{
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  }
</style>