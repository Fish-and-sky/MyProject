<template>
  <div class="product-more">
    <el-row>
      <el-col :span="20" class="more-top">
        <div style="padding-right: 20px">
          <h1>{{productmorelist.productCategoryName}}</h1>
          <div class="xian"></div>
        </div>
        <div style="margin-left: 20px">
          <p>{{productmorelist.productCategoryTitle}}</p>
        </div>
      </el-col>
      <el-col :span="20" class="more-button">
        <div class="all-button">
          <div
            :class="{ thebutton1: button1 == id, thebutton2: buttton2 == id }"
            class="thebutton"
            v-for="(item, id) in childrenlist"
            :key="id"
            @mouseover="buttonover(id)"
            @mouseleave="buttonleave"
            @click="buttonclick(id)"
            onmouseover="this.style.cursor='pointer';"
            onmouseout="this.style.cursor='normal'"
          >
            <span>{{ item.name }}</span>
          </div>
        </div>
        <div class="more-nextbutton">
          <div
            class="nextbutton"
            v-for="(item, id) in nextchildren"
            :key="id"
            @mouseover="nextbuttonover(id)"
            @mouseleave="nextbuttonleave"
            @click="nextbuttonclick(id, item.id)"
            onmouseover="this.style.cursor='pointer';"
            onmouseout="this.style.cursor='normal'"
          >
            <span
              :class="{
                nextbutton1: nextbutton1 == id,
                nextbutton2: nextbutton2 == id,
              }"
              >{{ item.name }}</span
            >
            <span style="margin: 0px 20px">|</span>
          </div>
        </div>
      </el-col>
      <el-col :span="20" class="more-center">
        <el-col
          :span="24"
          class="center-bottom-prev"
          :style="{ width: (screenWidth / 24) * 20 + 'px' }"
          v-show="flag"
        >
          <el-col class="center-bottom">
            <div
              class="center-bottom-div"
              v-for="(item, id) in lastimglist"
              :key="id"
              :style="{ height: moreH + 'px' }"
              @mouseover="over(id)"
              @mouseleave="leave"
              @click="pagechange(item.productId)"
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
        <el-col v-show="!flag">当前无分类产品</el-col>
      </el-col>
      
      <el-col :span="20" class="more-page">
        <el-pagination
          :background="true"
          layout="prev, pager, next"
          :total="total"
          :page-size="pagesize"
          :current-page.sync="currentpage"
          @current-change="numchange"
          hide-on-single-page
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      numm: null,
      moreH: 263,
      canshu: "10G SFP+ Direct Attached Cable Asse",
      childrenlist: [],
      buttontitle: "Eafal dlak",
      button1: 0,
      buttton2: 0,
      nextbutton: "USB-C dongle",
      nextbutton1: null,
      nextbutton2: 0,
      currentpage: 1,
      total: 0,
      pagesize: 8,
      productmorelist: [],
      nextchildren: [],
      lastimglist:[],
      fun:{},
      pageNum:0,
      flag:true,
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
    const that = this;
    that.api = sessionStorage.getItem("API").split(",")[0];
    that.id = sessionStorage.getItem("API").split(",")[1];
   that.fun=function(index){
     if(that.nextchildren.length>0){
       this.flag=true;
     if(index==undefined){
       index=that.nextchildren[0].id;
     }
     axios.get('/portalProducts/getListByLastType',{params:{
        id:index,
        pageNum:this.pageNum,
        pageSize:this.pagesize
      }}).then(res=>{
        this.lastimglist=res.data.content;
        this.total=res.data.totalElements;
      }).catch(err=>{
        console.log(err)
      })
      this.pageNum=0;
      }else{
        this.flag=false;
      }
   }
     axios
      .get("/portalProductsCategory/getAll", {
        params: {
          pid: that.id,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        that.productmorelist = res.data.data;
        that.childrenlist = res.data.children;
        that.nextchildren = that.childrenlist[0].children;
        that.fun();
      })
      .catch((err) => {
        console.log(err);
      });
    this.$nextTick(() => {
      const that = this;
      const W = (that.screenWidth / 24) * 20 * 0.2;
      that.moreH = W;
    });
  },
  methods: {
    over(id) {
      this.numm = id;
    },
    leave() {
      this.numm = null;
    },
    pagechange(id) {
      this.$router.push({ name: "productcontent", params: { theid: id } });
      sessionStorage.setItem("productId",id);
    },
    buttonover(id) {
      this.button1 = id;
    },
    buttonleave() {
      this.button1 = null;
    },
    buttonclick(id) {
      this.buttton2 = id;
      this.nextbutton2 =0;
      this.nextchildren = this.childrenlist[id].children;
      this.currentpage=1;
      if(this.nextchildren.length<=0){}else{
        this.fun();
      }
    },
    nextbuttonclick(id, index) {
      this.nextbutton2 = id;
      this.fun(index);
      sessionStorage.setItem('proindex',index)
      this.currentpage=1;
    },
    nextbuttonover(id) {
      this.nextbutton1 = id;
      
    },
    nextbuttonleave() {
      this.nextbutton1 = null;
    },
    numchange(val){
      this.pageNum=val-1;
      if(this.nextbutton2>0){
        this.fun(sessionStorage.getItem('proindex'));
      }else{
        this.fun();
      }
    }
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
.product-more span {
  font-size: 14px;
}
.product-more .nextbutton1 {
  color: rgb(145, 189, 45);
}
.product-more .nextbutton2 {
  color: rgb(145, 189, 45);
}
.product-more .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.more-top {
  display: flex;
}
.more-top .xian {
  width: 50px;
  height: 2px;
  background-color: rgb(145, 189, 45);
  margin-bottom: 20px;
}
.more-button {
  margin-top: 20px;
}
.more-nextbutton {
  display: flex;
  margin-top: 20px;
}
.more-button .all-button {
  display: flex;
  flex-wrap: wrap;
}
.more-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.thebutton {
  width: 160px;
  height: 36px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-right: 20px;
  margin-top: 20px;
}
.thebutton1 {
  width: 160px;
  height: 36px;
  border: 1px solid rgb(145, 189, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(145, 189, 45);
  color: white;
  margin-right: 20px;
  margin-top: 20px;
}
.thebutton2 {
  width: 160px;
  height: 36px;
  border: 1px solid rgb(145, 189, 45);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(145, 189, 45);
  color: white;
  margin-right: 20px;
  margin-top: 20px;
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
.more-page {
  display: flex;
  justify-content: center;
}
.more-page >>> .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #fff;
}
.more-page >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: rgb(146, 145, 145);
  color: #fff;
}
</style>