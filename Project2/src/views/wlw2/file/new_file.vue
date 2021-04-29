<template>
  <div :class="{ skill_file: proflag, skill_file1: !proflag }">
    <div><header1></header1></div>
    <div>
      <protopimg
        :titleh="titleh"
        :titlep="titlep"
        :systemimg="systemimg"
      ></protopimg>
    </div>
    <div class="skill">
    <div class="skill-k">
    <div class="skill-top">
    <h3>LATEST NEWS</h3>
    <div class="skill-top-title">
    <el-image :src="skillimg"></el-image>
    <div>
    <span>最新</span><span style="color: rgb(214, 40, 40);">动态</span>
    </div>
    </div>
    </div>
    <div class="skill-center">
    <div class="skill-center-div" v-for="(item,id) in skilllist" :key="id">
    <div class="skill-div-left" @click="changepage(item.newsId)"><el-image :src="item.newsThumbnail"></el-image></div>
    <div class="skill-div-rightt">
    <div class="skill-div-right">
    <div class="skill-right-s"><p>{{item.newsTitle | ellipsi(26)}}</p><span>{{item.newsCreateTime}}</span></div>
    <p>{{item.newsContent | ellipsi(80)}}</p>
    </div>
    <div :class="{'right-men2':id==skillindex,'right-men':true}"
    @mouseenter="mouseenter(id)"
    @mouseleave="mouseleave"
    @click="changepage(item.newsId)"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header1 from "../../wlw2/header2/header.vue";
import protopimg from "../../wlw2/product/protopimg/protopimg.vue";
import bottom from "../../wlw2/bottom/bottom.vue";
import axios from 'axios';
export default {
  data() {
    return {
      proflag: true,
      screenWidth: 0,
      titleh: "NEWS / 新闻动态",
      titlep: "公司动态、我们对行业的观察",
      systemimg: "http://www.ubitraq.com/images/news/banner_news.png",
      skillimg: "http://www.ubitraq.com/images/line.png",
      skillimg2:'http://www.ubitraq.com/images/news/docs6_content_0.png',
      skillindex:null,
      skilllist:[]
    };
  },
  methods:{
    mouseenter(id){
        this.skillindex=id;
    },
    mouseleave(){
      this.skillindex=null;
    },
    changepage(id){
      this.$router.push({ name: 'fileinside', params: { fileinside: id }})
      sessionStorage.setItem('fileinside',id);
    }
  },
  mounted() {
    var _this=this;
    axios.get('/portalNews/getListByType',{
      params:{
        id:2,
        pageNum:0,
        pageSize:6,
      }
    }).then(res=>{
      _this.skilllist=res.data.data;
    }).catch(err=>{
      console.log(err);
    })
  },
  components: { header1, protopimg, bottom },
};
</script>
<style scoped>
.skill_file {
  min-width: 1100px;
}
.skill_file1 {
  min-width: 1300px;
}
.skill {
  width: 100%;
  margin-top: 80px;
}
.skill-k{
  width: 1060px;
  margin: 0 auto;
}
.skill-top{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1060px;
  height: 100px;
}
.skill h3{
  font-size: 20px;
}
.skill-top-title{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 1060px;
}
.skill-top-title .el-image{
  top: 0px;
}
.skill-top-title div{
  position: absolute;
  text-align: center;
}
.skill-top-title div span{
  font-size: 30px;
  font-weight: bolder;
}
.skill-center{
  width: 1060px;
  margin-top: 40px;
}
.skill-center-div{
  width: 1060px;
  height: 160px;
  display: flex;
  justify-content: space-between;
}
.skill-div-left{
  width: 220px;
  height: 126px;
  border: 1px solid black;
  overflow: hidden;
  display: flex;
}
.skill-div-right{
  width: 830px;
  height: 160px;
}
.skill-div-rightt{
  position: relative;
  width: 830px;
  height: 160px;
}
.right-men{
  position: absolute;
  top: 0px;
  width: 830px;
  height: 80px;
  opacity: 0;
  background-color: black;
}
.right-men2{
  position: absolute;
  top: 0px;
  width: 830px;
  height: 80px;
  opacity: 0.4;
  background-color: rgb(36, 36, 13);
}
.skill-right-s{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 4px;
}
.skill-div-right p{
  font-size: 14px;
  color: rgb(110, 110, 110);
}
.skill-right-s p{
  font-size: 26px;
  font-weight: bold;
  color: black;
}
.skill-right-s span{
  font-size: 20px;
  color: rgb(110, 110, 110);
}
</style>