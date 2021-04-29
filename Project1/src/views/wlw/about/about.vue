<template>
  <div class="about">
    <!--<div><header1></header1></div>-->
    <div class="about-h3-top"><header3 @h3set="h3git"></header3></div>
    <!--<div class="about-h3-top"><header4 @h3set="h3git"></header4></div>-->
    <div class="about-tabs-top"><tabs @chuan-di='fuzujian' :h3id="h3id"></tabs></div>
    <div class="about-top" v-if="aboutid==0">
    <div class="about-tu">
    <div><el-image :src="src" class="about-img"></el-image></div>
    <div class="about-title">
    <div style="text-align: center;"><span>公司简介</span></div>
    <div style="margin-top:40px"><p>官方发布的最新动态或消息，为您提供关于本公司的第一手资讯</p></div>
    </div>
    </div>
    </div>
    <div class="about-center" v-if="aboutid==0">
    <div><aboutintr :flag="aboutflag"></aboutintr></div>
    <div><aboutintr2 :flag="aboutflag"></aboutintr2></div>
    <div><aboutintr3 :flag="aboutflag"></aboutintr3></div>
    <div><aboutintr4 :flag="aboutflag"></aboutintr4></div>
    </div>
    <div class="about-center" v-if="aboutid==1"><idea :flag="aboutflag"></idea></div>
    <div class="about-center" v-if="aboutid==2"><leader></leader></div>
    <div class="about-center" v-if="aboutid==3"><work :flag="aboutflag" :newh="newh" :xinh="xinh" :xinw="xinw"></work></div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header1 from '../header/header.vue'
import tabs from '../../smallzujian/tabs.vue'
import {Image} from 'element-ui'
import aboutintr from './aboutintr.vue'
import aboutintr2 from './aboutintr2.vue'
import aboutintr3 from './aboutintr3.vue'
import aboutintr4 from './aboutintr4.vue'
import bottom from '../bottom/bottom.vue'
import idea from './idea.vue'
import header3 from '../header/header3.vue'
import header4 from '../header/header4.vue'
import work from './work/work.vue'
import leader from './leader/leader.vue'
export default {
    data(){
        return{
            src: 'https://www-file.huawei.com/-/media/corp2020/abouthuawei/corporate-information/corp-info-banner.jpg',
            aboutid:0,
            h3id:0,
            aboutflag:true,
            aboutthW:0,
            newh:260,
            xinw:400,
            xinh:400,
        }
    },
    created(){
        // console.log(this.aboutid);
        window.scroll(0, 0); 
        this.aboutid=this.$route.params.theabout;
        this.h3id=this.$route.params.theabout;
        if(this.aboutid==undefined){
            this.aboutid=0;
        }
    },
    methods:{
        fuzujian(data){
            this.aboutid=data;
        },
        h3git(id){
            this.aboutid=id;
            this.h3id=id;
        }
    },
    mounted(){
        var _this=this;

        _this.aboutthW=$(window).width();
        if(_this.aboutthW>=1300){
          _this.aboutflag=true;
          _this.newh=260;
            _this.xinw=400;
            _this.xinh=400;
        }else if(_this.aboutthW<1300){
          _this.aboutflag=false;
          _this.newh=160;
            _this.xinw=300;
            _this.xinh=320;
        }else{}
        window.onresize =function(){
          _this.aboutthW=$(window).width();
        if(_this.aboutthW>=1300){
          _this.aboutflag=true;
          _this.newh=260;
            _this.xinw=400;
            _this.xinh=400;
        }else if(_this.aboutthW<1300){
          _this.aboutflag=false;
          _this.newh=160;
            _this.xinw=300;
            _this.xinh=320;
        }else{}
        }
        $(window).scroll(function(){
            var height=$(window).scrollTop();
            if(height>=300){
                $(".about-h3-top").css({
                    "position": "fixed"
                })
            }else{
                $(".about-h3-top").css({
                    "position":"absolute"
                })
            }
        })
        $(".header-right-zi").click(function(){
            $(".tabs-list div").eq(_this.h3id).find("span").css({
                "border-bottom": "2px solid black"
            }).parent().siblings().find("span").css({
                "border-bottom": "0px solid black"
            })
        })
    },
    components:{
        header1,tabs,"el-image":Image,aboutintr,aboutintr2,aboutintr3,aboutintr4,bottom,idea,header3,work,leader,header4
    }
}
</script>
<style scoped>
.about-h3-top{
position: absolute;
width: 100%;
top: 0px;
z-index: 999;
}
.about .about-center{
  margin: 0 auto;
  /*border: 1px solid black;*/
}
.about-tabs-top{
    margin-top: 80px;
}
.about-tu{
    position: relative;
}
.about-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.about-title span{
    font-size: 50px;
    color: white;
    font-weight: bolder;
}
.about-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.about-img{
    height: 340px;
    width: 100%;
}
/*
有bug，在about页面点击导航栏页面会跳，下划线不会变化
*/
</style>