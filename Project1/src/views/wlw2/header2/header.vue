<template>
  <div class="header">
    <div class="header-kk">
      <div class="header-k">
        <div class="header-left">
          <el-image :src="headerimg" @click="toindex"></el-image>
        </div>
        <div class="header-center">
          <div class="header-title" v-for="(item, index) in goods" :key="index">
            <span @click="pagechange0(index)">{{ item.nav_name }}</span>
            <div class="header-color"></div>
            <div class="header-ul">
              <ul>
                <li v-for="(it, foodindex) in item.twoData" :key="foodindex" @click="pagechange(item,index,foodindex)">
                  {{ it.nav_name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-right">
          <el-image :src="headerimg2"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery"
import axios from 'axios'
export default {
  inject: ['reload'],
  data() {
    return {
      headerimg: "http://www.ubitraq.com/images/logo.png?v=1",
      headerimg2: "http://www.ubitraq.com/images/tel_phone_13811940257.png",
      goods: [
        { nav_name: "首页", foods: [], activeIndex: null },
        {
          nav_name: "产品",
          foods: [{ nav_name: "系统" }, { nav_name: "软件" }, { nav_name: "硬件" }],
          activeIndex: null,
        },
        {
          nav_name: "行业方案",
          foods: [{ nav_name: 1 }, { nav_name: 2 }, { nav_name: 3 }, { nav_name: 4 }],
          activeIndex: null,
        },
        {
          nav_name: "文档动态",
          foods: [{ nav_name: 1 }, { nav_name: 2 }, { nav_name: 3 }, { nav_name: 4 }],
          activeIndex: null,
        },
        {
          nav_name: "关于我们",
          foods: [{ nav_name: 1 }, { nav_name: 2 }, { nav_name: 3 }, { nav_name: 4 }],
          activeIndex: null,
        },
        { nav_name: "English", foods: [], activeIndex: null },
      ],
    };
  },
  methods: {
    toindex(){
      this.$router.push('/index');
    },
    pagechange0(index){
      if(index==0){
        this.$router.push('/index');
      }else if(index==2){
        this.$router.push('/project');
      }
    },
    pagechange(item,index,foodindex){
      if(index==1){
        if(foodindex==0){
          this.$router.push('/product_system');
        }else if(foodindex==1){
          this.$router.push('/product_hard');
        }else if(foodindex==2){
          this.$router.push('/product_soft');
        }
      }else if(index==2){
        this.reload();
        // console.log(item.twoData[foodindex]);
        // console.log(item.twoData[foodindex].nav_href.split(',')[1]);
        sessionStorage.setItem('nameid',(item.twoData[foodindex].nav_href).split(',')[1]);
        this.$router.push({ path: '/project/details', query: { details: foodindex }})
      }else if(index==3){
        if(foodindex==0){
          this.$router.push('/file/skill');
        }else if(foodindex==1){
          this.$router.push('/file/new');
        }
      }else if(index==4){
        this.$router.push({ name: 'aboutus', params: { aboutus: foodindex }})
        sessionStorage.setItem('aboutus',foodindex);
        this.$emit('headertoabout',foodindex)
      }
    },
  },
  mounted() {
    var _this = this;
    axios.post('/portalNav/getNavList').then(res=>{
      // console.log(res.data.data);
      _this.goods=res.data.data;
    }).catch(err=>{
      console.log(err);
    })
    $(".header-title").hover(
      function () {
        $(this).find(".header-ul").css({
          display: "block",
        });
      },
      function () {
        $(this).find(".header-ul").css({
          display: "none",
        });
      }
    );
  },
};
</script>
<style scoped>
.header {
  position: fixed;
  width: 100%;
  background-color: black;
  z-index: 10000;
  opacity: 0.8;
}
.header-k {
  width: 1100px;
  height: 60px;
  background-color: black;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.header-left {
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
}
.header-center {
  width: 600px;
  height: 60px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  position: relative;
  flex-grow: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-title span {
  font-size: 20px;
  min-width: 80px;
  text-align: center;
}
.header-color {
  display: none;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: white;
  bottom: 0px;
}
.header-ul {
  display: none;
  position: absolute;
  top: 60px;
  background-color: black;
  min-width: 100%;
}
.header-ul ul {
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
}
.header-ul ul li {
  font-weight: bolder;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 30px;
  min-width: 100px;
}
.header-right {
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>