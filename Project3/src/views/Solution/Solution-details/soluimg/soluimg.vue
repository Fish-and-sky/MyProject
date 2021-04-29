<template>
  <div class="soluimg" v-if="list.length>0">
    <el-row>
      <el-col :span="20" class="soluimg-top">
        <el-col :span="24" class="soluimg-an">
          <div class="swiper-button-prev1" @click="theprev">
            <el-image :src="imgprev"></el-image>
          </div>

          <el-col :span="20" :class="{'anniu':list.length>=4}">
            <div class="swiper-container gallery-thumbs" id="thumbs">
              <div class="swiper-wrapper">
                <div
                  :class="{ 'swiper-slide1': num == id }"
                  class="swiper-slide"
                  v-for="(item, id) in list"
                  :key="id"
                  @click="imgchange(id)"
                >
                  {{ item.name }}
                </div>
              </div>
            </div>
          </el-col>
          <div class="swiper-button-next1" @click="thenext">
            <el-image :src="imgnext"></el-image>
          </div>
        </el-col>
        <div class="theswiper" :style="{height:imgkheight+'px'}">
          <div class="swiperimg-title">
          <span>{{list[num].title}}</span>
          <h2>{{tt}}应用设计</h2>
          <p>{{list[num].title2}}</p>
          </div>
          <el-image :src="list[num].img" class="swiperimg"></el-image>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import axios from "axios";
Swiper.use([Navigation, Pagination, Autoplay]);
export default {
  data() {
    return {
      tt: "",
      num: "0",
      imgkheight:null,
      prev1: "https://www.luxshare-ict.com/images/arr_l.png",
      prev2: "https://www.luxshare-ict.com/images/arr_l_dis.png",
      next1: "https://www.luxshare-ict.com/images/arr_r.png",
      next2: "https://www.luxshare-ict.com/images/arr_r_dis.png",
      imgprev: "",
      imgnext: "",
    };
  },
    watch: {
      screenWidth:{
        handler(newValue,oldValue){
          if(!this.timer){
            this.screenWidth = newValue;
            this.timer=true;
            let that = this;
            setTimeout(function(){
              that.imgkheight=that.screenWidth/24*20*0.34;
              console.log(that.imgkheight);
            },400)
            this.timer=false;
          }
        },
        deep: true,
        immediate: true,
      },
  },
  props:{
    list:{default:""},
    screenWidth:{default:""},
  },
  created() {
    this.imgprev = this.prev2;
    this.imgnext = this.next1;
  },
  methods: {
    imgchange(id) {
      this.num = id;
      if (this.num < 1) {
        this.imgprev = this.prev2;
        this.imgnext = this.next1;
      } else if (this.num > this.list.length-2) {
        this.imgprev = this.prev1;
        this.imgnext = this.next2;
      }else if(this.num>0&&this.num<this.list.length-1){
        this.imgprev = this.prev1;
    this.imgnext = this.next1;
      }
    },
    thenext() {
      if (this.num < this.list.length-1) {
        this.num++;
      }
      if (this.num < 1) {
        this.imgprev = this.prev2;
        this.imgnext = this.next1;
      } else if (this.num > this.list.length-2) {
        this.imgprev = this.prev1;
        this.imgnext = this.next2;
      }else if(this.num>0&&this.num<this.list.length-1){
        this.imgprev = this.prev1;
    this.imgnext = this.next1;
      }
    },
    theprev() {
      if (this.num > 0) {
        this.num--;
      }
      if (this.num < 1) {
        this.imgprev = this.prev2;
        this.imgnext = this.next1;
      } else if (this.num > this.list.length-2) {
        this.imgprev = this.prev1;
        this.imgnext = this.next2;
      }else if(this.num>0&&this.num<this.list.length-1){
        this.imgprev = this.prev1;
    this.imgnext = this.next1;
      }
    },
  },
  mounted() {
    this.tt=sessionStorage.getItem('solutionName');
    setTimeout(function(){
      var thumbsSwiper = new Swiper("#thumbs", {
      spaceBetween: 40,
      slidesPerView: 4,
      watchSlidesVisibility: true,
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
    });
    },1000)
  },
};
</script>
<style scoped>
.soluimg{
    margin-top: 60px;
}
.soluimg span{
  font-size: 14px;
  color: rgb(58, 58, 58);
}
.soluimg h2{
  font-size: 24px;
  margin-top: 2%;
}
.soluimg p{
  font-size: 14px;
  line-height: 20px;
  margin-top: 4%;
  color: rgb(58, 58, 58);
}
.soluimg .el-row {
  display: flex;
  justify-content: center;
}
.gallery-thumbs {
  display: flex;
  justify-content: center;
}
.soluimg-an {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.swiper-button-prev1 {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(177, 177, 177);
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-button-next1 {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(177, 177, 177);
  display: flex;
  justify-content: center;
  align-items: center;
}
.anniu {
  border-right: 1px solid rgb(122, 122, 122);
}
.swiper-slide1 {
  background-color: #B1CC1D;
  border: 1px solid rgb(122, 122, 122);
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.swiper-slide {
  border: 1px solid rgb(156, 156, 156);
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.theswiper {
  overflow: hidden;
  position: relative;
  margin-top: 80px;
}
.swiperimg{
  display: flex;
}
.swiperimg-title{
  position: absolute;
  width: 30%;
  height: 32%;
  overflow: hidden;
  top: 20%;
  left: 6%;
  z-index: 66;
}
</style>