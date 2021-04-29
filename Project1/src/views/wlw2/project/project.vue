
<template>
    <div :class="{project:proflag,project1:!proflag}">
    <div><header1></header1></div>
    <div v-show="flag"><protopimg :titleh="titleh" :titlep="titlep" :systemimg="systemimg"></protopimg></div>
    <div class="project-list">
    <div class="list-top">
    <div class="list-left" @click="todetails(projectlist[0].newsId)">
    <div class="project-men"></div>
    <el-image :src="projectlist[0].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[0].newsTitle}}</div>
    </div>
    <div class="list-right">
    <div class="list-right-div" style="margin-bottom:36px" @click="todetails(projectlist[8].newsId)">
    <div class="project-men2"></div>
    <el-image :src="projectlist[8].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[8].newsTitle}}</div>
    </div>
    <div class="list-right-div" @click="todetails(projectlist[7].newsId)">
    <div class="project-men2"></div>
    <el-image :src="projectlist[7].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[7].newsTitle}}</div>
    </div>
    </div>
    </div>
    <div class="list-center">
    <div class="list-center-s">
    <div class="list-l" @click="todetails(projectlist[5].newsId)">
    <div class="project-men3"></div>
    <el-image :src="projectlist[5].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[5].newsTitle}}</div>
    </div>
    <div class="list-r" @click="todetails(projectlist[6].newsId)">
    <div class="project-men4"></div>
    <el-image :src="projectlist[6].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[6].newsTitle}}</div>
    </div>
    </div>
    <div class="list-center-x">
    <div class="list-r" @click="todetails(projectlist[2].newsId)">
    <div class="project-men4"></div>
    <el-image :src="projectlist[2].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[2].newsTitle}}</div>
    </div>
    <div class="list-l" @click="todetails(projectlist[4].newsId)">
    <div class="project-men3"></div>
    <el-image :src="projectlist[4].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[4].newsTitle}}</div>
    </div>
    </div>
    </div>
    <div class="list-bottom">
    <div class="list-right">
    <div class="list-right-div" style="margin-bottom:36px" @click="todetails(projectlist[1].newsId)">
    <div class="project-men2"></div>
    <el-image :src="projectlist[1].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[1].newsTitle}}</div>
    </div>
    <div class="list-right-div">
    <div class="project-men2"></div>
    <el-image :src="projectimg8"></el-image>
    <div class="list-title1">其他</div>
    </div>
    </div>
    <div class="list-left" @click="todetails(projectlist[3].newsId)">
    <div class="project-men"></div>
    <el-image :src="projectlist[3].newsThumbnail"></el-image>
    <div class="list-title1">{{projectlist[3].newsTitle}}</div>
    </div>
    </div>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../wlw2/header2/header.vue'
import bottom from '../../wlw2/bottom/bottom.vue'
import protopimg from '../../wlw2/product/protopimg/protopimg.vue'
import $ from 'jquery'
import axios from 'axios'
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
            flag:true,
            titleh:'运营商级位置服务解决方案',
            titlep:'厘米级高精度室内外定位系统， 便携部署， 洞见数据',
            systemimg:'http://www.ubitraq.com/images/project/banner_project.png',
            projectimg:'http://www.ubitraq.com/images/project/one_1.png',
            projectimg2:'http://www.ubitraq.com/images/project/one_2.png',
            projectimg3:'http://www.ubitraq.com/images/project/one_3.jpeg',
            projectimg4:'http://www.ubitraq.com/images/project/two_2.png',
            projectimg5:'http://www.ubitraq.com/images/project/two_1.png',
            projectimg6:'http://www.ubitraq.com/images/project/two_4.png',
            projectimg7:'http://www.ubitraq.com/images/project/two_3.png',
            projectimg8:'http://www.ubitraq.com/images/project/three_2.png',
            projectimg9:'http://www.ubitraq.com/images/project/three_1.png',
            projectimg10:'http://www.ubitraq.com/images/project/three_3.png',
            projectlist:[
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              {newsTitle:'',newsThumbnail:'',newsId:''},
              ],
        }
    },
    methods:{
      todetails(id){
        sessionStorage.setItem('nameid',id);
        this.$router.push({ path: '/project/details', query: { details: id }})
      }
    },
    mounted() {
      var _this=this;
      axios.get('/portalNews/getListByType',{
        params:{
          pageNum:0,
          pageSize:9,
          id:3,
        }
      }).then(res=>{
        // console.log(res.data.data);
        _this.projectlist=res.data.data;
      }).catch(err=>{
        console.log(err);
      })
    this.screenWidth= document.body.clientWidth;
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
    window.onresize=()=>{
      this.screenWidth = document.body.clientWidth;
    }
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
    var _this=this;
    $(".list-left").hover(function () {
        $(this).find(".project-men").stop().css({'display':'block'}).next().stop().animate({
          top:'-50px',
          left:'-30px',
          width:'426px',
          height:'700px'
        },300)
      }, function () {
        $(this).find(".project-men").stop().css({'display':'none'}).next().stop().animate({
          top:'0px',
          left:'0px',
          width:'366px',
          height:'600px'
        },300)
      }
    );
    $(".list-right-div").hover(function () {
        $(this).find(".project-men2").stop().css({'display':'block'}).next().stop().animate({
          top:'-20px',
          left:'-50px',
          height:'322px',
          width:'700px'
        })
      }, function () {
        $(this).find(".project-men2").stop().css({'display':'none'}).next().stop().animate({
          top:'0px',
          left:'0px',
          height:'282px',
          width:'600px'
        })
      }
    );
    $(".list-l").hover(function () {
        $(this).find(".project-men3").stop().css({'display':'block'}).next().stop().animate({
          top:'-30px',
          left:'-50px',
          height:'426',
          width:'700',
        })
      }, function () {
        $(this).find(".project-men3").stop().css({'display':'none'}).next().stop().animate({
          top:'0px',
          left:'0px',
          height:'366',
          width:'600',
        })
      }
    );
    $(".list-r").hover(function () {
        $(this).find(".project-men4").stop().css({'display':'block'}).next().stop().animate({
          top:'-30px',
          left:'-30px',
          height:'426',
          width:'426',
        })
      }, function () {
        $(this).find(".project-men4").stop().css({'display':'none'}).next().stop().animate({
          top:'0px',
          left:'0px',
          height:'366',
          width:'366',
        })
      }
    );
  },
    components:{header1,bottom,protopimg,}
}
</script>
<style scoped>
.project {
  min-width: 1300px;
}
.project1 {
  min-width: 1100px;
}

.project-list{
  width: 1000px;
  margin: 0 auto;
  margin-top: 80px;
}
.list-top{
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
}
.list-left{
  position: relative;
  width: 366px;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
}
.list-right{
  height: 600px;
  display: flex;
  align-content: space-between;
  flex-direction: column;
}
.list-right-div{
  position: relative;
  width: 600px;
  height: 282px;
  border-radius: 10px;
  overflow: hidden;
}
.list-center-s{
  display: flex;
  justify-content: space-between;
}
.list-center-x{
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
}
.list-l{
  position: relative;
  width: 600px;
  height: 366px;
  border-radius: 10px;
  overflow: hidden;
}
.list-r{
  position: relative;
  width: 366px;
  height: 366px;
  border-radius: 10px;
  overflow: hidden;
}
.list-bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
}
.list-title1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-width: 200px;
  min-height: 60px;
  border: 4px solid white;
  color: white;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  z-index: 11;
}
.project-men{
  display: none;
  position: absolute;
  opacity: 0.3;
  top: 0px;
  z-index: 10;
  width: 366px;
  height: 600px;
  background-color: black;
}
.project-men2{
  display: none;
   position: absolute;
  opacity: 0.3;
  top: 0px;
  z-index: 10;
  width: 600px;
  height: 282px;
  background-color: black;
}
.project-men3{
  display: none;
   position: absolute;
  opacity: 0.3;
  top: 0px;
  z-index: 10;
  width: 600px;
  height: 366px;
  background-color: black;
}
.project-men4{
  display: none;
   position: absolute;
  opacity: 0.3;
  top: 0px;
  z-index: 10;
  width: 366px;
  height: 366px;
  background-color: black;
}
</style>