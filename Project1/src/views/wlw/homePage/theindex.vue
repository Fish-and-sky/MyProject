<template>
    <div class="header">
        <!--<div class="header-ttop"><header1></header1></div>-->
        <div class="header-ttop"><header3></header3></div>
        <!--<div class="header-ttop"><header4></header4></div>-->
        <!-- <div><header2></header2></div> -->
        <!-- <div style="margin-bottom:60px"><Rotation></Rotation></div> -->
        <div style="position:relative;top:60px">
        <div style="margin-bottom:60px;"><Rotation2></Rotation2></div>
        <div style="margin-bottom:100px;"><Hotnews :hoth="hoth" :whot="whot" :hotnlist="hotlist" :flag="htflag"></Hotnews></div>
        <div><introduce :inth1="inth1" :intw1="intw1" :inth2="inth2" :intw2="intw2" :flag="htflag"></introduce></div>
        <div><introduce2 :inth1="inth1" :intw1="intw1" :inth2="inth2" :intw2="intw2" :flag="htflag"></introduce2></div>
        <div><introduce3 :inth2="inth2" :intw2="intw2" :flag="htflag"></introduce3></div>
        <div style="margin-bottom:60px"><thevideo></thevideo></div>
        <div><detailed :dh="dh"></detailed></div>
        <div><active :h="h" :hh="hh" :ach="ach" :flag="htflag"></active></div>
        <div><bottom></bottom></div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
import header1 from '../header/header.vue'
import header2 from '../header/header2.vue'
import DownBox from '../header/downBox/downBox.vue'
import DownBox2 from '../header/downBox/downBox2.vue'
import Rotation from '../Rotation/Rotation.vue'
import Rotation2 from '../Rotation/Rotation2.vue'
import introduce from '../introduce/introduce.vue'
import introduce2 from '../introduce/introduce2.vue'
import introduce3 from '../introduce/introduce3.vue'
import thevideo from '../video/thevideo.vue'
import Hotnews from '../Hotnews/Hotnews.vue'
import detailed from '../detailed/detailed.vue'
import active from '../news/active.vue'
import bottom from '../bottom/bottom.vue'
import header3 from '../header/header3.vue'
import header4 from '../header/header4.vue'
export default {
    data(){
        return{
            dh:'240px',
            h:'260px',
            hh:'450px',
            ach:'450px',
            hoth:370,
            whot:444,
            inth1:350,
            intw1:850,
            inth2:350,
            intw2:410,
            thew:0,
            htflag:true,
            list:[
                {id:1,name:'一',color:''},
                {id:2,name:'二',color:''},
                {id:3,name:'三',color:''},
                {id:4,name:'四',color:''},
                {id:5,name:'五',color:''},
                // {id:6,name:'六',color:''},
                // {id:7,name:'七',color:''},
                ],
            tubiao:'图标1',
            one:'一',
            two:'二',
            flag:false,
            flag1:false,
            index:0,
            hotlist:[],
        }
    },
    methods:{
        
    },
    components:{
        DownBox,DownBox2,Rotation,introduce,introduce2,introduce3,thevideo,Hotnews,
        detailed,active,bottom,Rotation2,header2,header1,header3,header4
    },
    created(){
        window.scroll(0, 0); 
    },
    mounted(){
        var _this=this;
        /*实时监听页面滚动事件*/
        $(window).scroll(function(){
            var height=$(window).scrollTop();
            if(height>=300){
                $(".header-ttop").css({
                    "position": "fixed"
                })
            }else{
                $(".header-ttop").css({
                    "position":"absolute"
                })
            }
        })
    /*实时监听浏览器的宽度(theW)和高度(theY)   1300的时候变化*/
    var ww=$(".deta-b-left").innerWidth();
    var acw = $(".active-div-s").innerWidth();
    var intw11 = $(".Row1-left").innerWidth();
    var intw21 = $(".Row1-right").innerWidth();
    _this.theW = $(window).width();
    if(_this.theW>=1300){
        $(".active .home").css({
          "flex-direction": "row",
        });
    }else if(_this.theW<1300){
        _this.dh='240px';
        _this.h='173px';
        _this.hh='300px';
        _this.ach='300px';

        _this.hoth=300;
        _this.whot=300;
        _this.htflag=false;
        _this.inth1=260;
        _this.intw1=660;
        _this.inth2=260;
        _this.intw2=310;

        _this.wth = _this.theW / 1.4;
        $(".active .home").css({
          "flex-direction": "column",
        });
    }else{}
    window.onresize = function () { 
        _this.theW = $(window).width();
        if(_this.theW>=1300){
            _this.hoth=370;
            _this.whot=444;
            _this.htflag=true;
            _this.inth1=350;
            _this.intw1=850;
            _this.inth2=350;
            _this.intw2=410;
        }else if(_this.theW<1300){
            _this.hoth=300;
            _this.whot=300;
            _this.htflag=false;
            _this.inth1=260;
        _this.intw1=660;
        _this.inth2=260;
        _this.intw2=310;
        }
      //thevideo
      var theY = $(window).height();
      if (_this.theW >= 1210) {
        _this.wth = _this.theW / 2;
        $(".home").css({
          "flex-direction": "row",
        });
      } else if (_this.theW <= 1210) {
        _this.wth = _this.theW / 1.4;
        $(".home").css({
          "flex-direction": "column",
        });
      }
      //detailed
      var www=$(".deta-b-left").innerWidth()
    var bi=www/ww;
    // if(bi<=1){
      _this.dh=parseInt(240*bi)+'px';
    // }else{}
    //active
    var acww = $(".active-div-s").innerWidth();
      var ach = $(".active-center-div").innerHeight();
      _this.hh = ach + "px";
      var b = acww / acw;
      _this.h = parseInt(260 * b) + "px";
      _this.ach = parseInt(450 * b) + 'px';
    };
    }
}
</script>

<style scoped>
.header{
    position: relative;
    width: 100%;
    height: 100%;
}
.header-ttop{
position: absolute;
width: 100%;
top: 0px;
z-index: 9999;
}
.header-top{
    position: relative;
    width: 100%;
    height: 80px;
    background-color: antiquewhite;
    display: flex;
    justify-content: center;
    z-index: 999;
    color: white;
}
.header-top2{
    width: 100%;
    height: 80px;
    background-color: black;
    opacity: 20%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    z-index: 1;
}
.header-top3{
    width: 100%;
    /*height: 80px;*/
    padding: 20px;
    background-color: antiquewhite;
    border:1px solid black;
    display: flex;
    justify-content: center;
    z-index: 999;
    /*visibility: hidden;*/
}
.header-top3-center{
    margin-left: -40px;
    width: 80%;
    /*background-color: rgb(240, 151, 18);*/
    display: flex;
}
.header-dh{
    width: 80%;
    background-color: rgb(110, 112, 112);
    display: flex;
    align-items: center;

}
.header-left{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    flex-grow: 2;
    border: 1px solid #dadd44;
}
.header-right{
    height: 80px;
    display: flex;
    align-items: center;
    flex-grow: 8;
    display: flex;
}
.header-right-left{
        /*width: 80px;
        height: 20px;*/
        height: 80px;
        /*align-items: center;*/
        border: 1px solid black;
        flex-grow: 5;
        /*border: 1px solid red ;*/
        display: flex;
        /*justify-content: center;*/
        justify-content: space-around;
    }
    .header-right-left  .header-right-left-b{
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #dadd44;*/
    }
    .header-right-color{
        position: absolute;
        bottom: 0px;
        width: 80px;
        height: 3px;
        background-color: black;

        /*margin: 0 auto;*/
    }
    .header-right-right{
        flex-grow: 1;
        border: 1px solid #212231;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-around;
    }
    .header-top3-title{
        font-size: 30px;
        font-weight: bold;
        padding-bottom: 10px;
        padding-right: 200px;
        border-bottom: 2px solid #ccc;
    }
    .top3-tt{
        padding-right: 40px;
    }
    .top3-ttt{
        font-size: 16px;
        color: rgb(13, 191, 214);
        margin: 12px;
        margin-left: 0px;
    }
    .header-center-z{
        width: 100%;
        height: 400px;
        /*background-color: aquamarine;*/
    }
    .header-center{
        width: 100%;
        position: absolute;
        z-index: 999;
    }
    /*
    头部导航栏

                // list1:[
            //     ["产品","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
            //     ["服务","运营商网络服务","企业网络服务","华为云专业服务"],
            //     ["行业解决方案","电信行业","数字政府","智慧园区","交通行业","电力行业"],
            //     ["热点话题","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            // ],
            // list2:[
            //     ["2","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
            //     ["2","运营商网络服务","企业网络服务","华为云专业服务"],
            //     ["2","电信行业","数字政府","智慧园区","交通行业","电力行业"],
            //     ["2","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            // ],
            // list3:[
            //     ["3","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
            //     ["3","运营商网络服务","企业网络服务","华为云专业服务"],
            //     ["3","电信行业","数字政府","智慧园区","交通行业","电力行业"],
            //     ["3","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            // ]
    */
</style>