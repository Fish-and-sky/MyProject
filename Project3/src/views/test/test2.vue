<template>
  <div class="product-more">
    <el-row>
      <el-col :span="20" class="more-top">
        <h1>产品中心</h1>
        <div class="xian"></div>
        <p>
          立讯精密具备制造突破性技术优势，可以快速适应电子产品“高速、微型、整合”等技术产业发展趋势。
        </p>
        <p>
          拥有自主产品的核心技术和智慧财产权，专注于行业技术创新。灵活满足全球不同客户的差异化需求以及快速创新的追求。
        </p>
      </el-col>
      <el-col :span="20" class="more-center">
        <el-col :span="12" class="center-top">
          <div
            class="center-top-button"
            @click="productchange(-1)"
            :class="{ 'center-top-button1': idd == num }"
            onmouseover="this.style.cursor='pointer';" 
            onmouseout="this.style.cursor='normal'"
          >
            全部
          </div>
          <div
            class="center-top-button"
            v-for="(item, id) in morelist"
            :key="id"
            @click="productchange(id)"
            :class="{ 'center-top-button1': id == num }"
            onmouseover="this.style.cursor='pointer';" 
            onmouseout="this.style.cursor='normal'"
          >
            {{ item.name }}
          </div>
        </el-col>
        <el-col :span="24" class="container-k">
        <el-col :span="22" :offset="1">
          <div class="swiper-container" ref="mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, id) in Sortedarray" 
              :key="id"
              @mouseover="over(id)"
              @mouseleave="leave">
                <transition name="fade">
                  <el-image
                    :src="item.productThumbnail"
                    lazy
                    :class="{ 'el-image1': numm == id }"
                  ></el-image>
                </transition>
                <div class="center-div-tit">
                  <h4 style="color: white; margin-bottom: 8px">
                    {{ item.productTitle }}
                  </h4>
                  <h4 style="color: rgb(166, 255, 0)">
                    {{ item.productName }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </el-col>
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
      idd: -1,
      num: -1,
      numm: null,
      moreH: 263,
      canshu: "10G SFP+ Direct Attached Cable Asse",
      morelist: [
        { name: "消费电子产品" },
        { name: "企业级及通讯产品" },
        { name: "汽车及医疗产品" },
      ],
      alllist:[],
      Sortedarray:[],
      gapX: 0,
      startx: 0,
      downleft:null,
      downtop:null,
      upleft:null,
      uptop:null,
      allAPI:{},
      move:{},
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
          // console.log(that.screenWidth/24*20*0.2);
          if (that.screenWidth >= 1000) {
            const W = (that.screenWidth / 24) * 20 * 0.2;
            that.moreH = W;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  props:{
      screenWidth:{defauct:""},
  },
  mounted() {
    const that=this;
    axios.get('/portalProducts/getListByFirstType',{params:{
      pageNum:0,
      pageSize:12,
    }}).then(res=>{
      console.log(res.data.content);
      that.morelist=res.data.content;
      for(var i=0;i<res.data.content.length;i++){
        that.Sortedarray=that.Sortedarray.concat(res.data.content[i].list);
      }
      console.log(that.Sortedarray)
    }).catch(err=>{
      console.log(err)
    })
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
      grabCursor: true,
      setWrapperSize: true,
      roundLengths: true,
      watchOverflow: true,
      observer: true,
      spaceBetween: 30,
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
        hiddenClass: "my-button-hidden",
      },
    });
    })
  },
  methods: {
    productchange(id) {
      this.num = id;
      // this.allAPI();
      // this.move();
      // console.log(id)
    },
    over(id) {
      this.numm = id;
    },
    leave() {
      this.numm = null;
    },
  },
};
</script>
<style scoped>
.product-more {
  margin-top: 60px;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-bottom: 60px;
  background-color: rgb(241, 239, 239);
}
.product-more h1 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}
.product-more p {
  font-size: 14px;
  line-height: 24px;
}
.product-more .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.more-top {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.more-top .xian {
  width: 50px;
  height: 2px;
  background-color: #b1cc1d;
  margin-bottom: 20px;
}
.more-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-top {
  display: flex;
  justify-content: center;
}
.center-top-button {
  width: 160px;
  height: 36px;
  border: 1px solid rgb(199, 199, 199);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
.center-top-button1 {
  width: 160px;
  height: 36px;
  border: 1px solid #b1cc1d;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b1cc1d;
  color: white;
}
.center-bottom-prev {
  overflow: scroll;
  display: flex;
  overflow-y: hidden;
}
.center-bottom-prev::-webkit-scrollbar {
  width: 1px;
}
.center-bottom {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.swiper-slide{
  overflow: hidden;
}
.swiper-slide .el-image {
  width: 100%;
  transition: all 0.6s;
  transform: scale(1);
}
.swiper-slide .el-image1 {
  transition: all 0.6s;
  transform: scale(1.4);
}
.center-div-tit {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 30px;
  background-color: black;
  opacity: 0.6;
  padding: 10px 0px 10px 0px;
}
.center-div-tit h4 {
  font-size: 14px;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.container-k {
  margin-top: 40px;
  border: 1px solid black;
  position: relative;
}
.swiper-wrapper{
  padding: 30px 0px 30px 0px;
}
.swiper-wrapper .swiper-slide {
  height: 220px;
}
</style>