<template>
  <div class="product-more">
    <el-row>
      <el-col :span="20" class="more-top">
        <h1>热门产品</h1>
        <div class="xian"></div>
      </el-col>
      <el-col :span="20" class="more-center">
        <el-col
          :span="24"
          class="center-bottom-prev"
          :style="{ width: (screenWidth / 24) * 20 + 'px' }"
        >
          <el-col :span="24" class="center-bottom">
            <div
              class="center-bottom-div"
              v-for="(item, id) in soluprolist"
              :key="id"
              :style="{ height: moreH + 'px' }"
              @mouseover="over(id)"
              @mouseleave="leave"
              @click="imgclick(item.productId)"
              onmouseover="this.style.cursor='pointer';" 
            onmouseout="this.style.cursor='normal'"
            >
              <transition name="fade">
                <el-image
                  :src="item.productThumbnail"
                  lazy
                  :class="{ 'el-image1': numm == id }"
                ></el-image>
              </transition>
              <div class="center-div-tit">
                <h4 style="color: white; margin-bottom: 8px">{{item.productTitle}}</h4>
                <h4 style="color: rgb(166, 255, 0)">
                  {{ item.productName }}
                </h4>
              </div>
            </div>
          </el-col>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  data() {
    return {
      idd: -1,
      num: -1,
      numm: null,
      moreH: 263,
      canshu: "10G SFP+ Direct Attached Cable Asse",
      soluprolist:[],
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
          if (that.screenWidth >= 1000) {
            const W = (that.screenWidth / 24) * 20 * 0.2;
            that.moreH = W;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  props: {
    screenWidth: { defauct: "" },
  },
  mounted() {
    axios.get('/portalProducts/getListByFirstType',{params:{
      pageNum:0,
      pageSize:8,
    }}).then(res=>{
      console.log(res.data.content[0])
      this.soluprolist=res.data.content[0].list;
    }).catch(err=>{
      console.log(err);
    })
    this.$nextTick(() => {
      const that = this;
      const W = (that.screenWidth / 24) * 20 * 0.2;
            that.moreH = W;
      $(document).ready(function(){
    var a,b,c;
    a = $(window).height();    //浏览器窗口高度
    var group = $(".more-center");
    $(window).scroll(function(){
        b = $(this).scrollTop();   //页面滚动的高度
        c = group.offset().top;    //元素距离文档（document）顶部的高度
        if(a+b>c){
            $(".more-center").stop().animate({
              'opacity': '1',
              'margin-top':'0px',
            },400)
        }else{
            
        }
    });
});
    });
  },
  methods: {
    productchange(id) {
      this.num = id;
    },
    over(id) {
      this.numm = id;
    },
    leave() {
      this.numm = null;
    },
    imgclick(id) {
      this.$router.push({ name: 'productcontent', params: { theid: id }})
      sessionStorage.setItem("productId",id);
    },
  },
};
</script>
<style scoped>
.product-more {
  margin-top: 60px;
  padding-top: 60px;
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
  margin-bottom: 10px;
}
.more-top .xian {
  width: 50px;
  height: 2px;
  background-color: rgb(145, 189, 45);
  margin-top: 10px;
}
.more-center {
  position: relative;
  opacity: 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.center-top {
  display: flex;
  justify-content: center;
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
.center-bottom-div {
  position: relative;
  border: 1px solid rgb(143, 143, 143);
  overflow: hidden;
  margin-right: 1.7%;
  margin-bottom: 20px;
  width: 23%;
}
.center-bottom-div .el-image {
  width: 100%;
  transition: all 0.6s;
  transform: scale(1);
}
.center-bottom-div .el-image1 {
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
  padding: 10px;
}
.center-div-tit h4 {
  font-size: 14px;
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>