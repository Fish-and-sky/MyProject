<template>
  <div class="xwhd">
    <!--<div class="xwhd-top"><header1></header1></div>-->
    <div class="xwhd-top"><header3></header3></div>
    <!--<div class="xwhd-top"><header4></header4></div>-->
    <div class="xwhd-tu">
    <div><el-image :src="src" class="xwhd-img"></el-image></div>
    <div class="xwhd-title">
    <div style="text-align: center;"><span>新闻活动</span></div>
    <div style="margin-top:40px"><p>官方发布的最新动态或消息，为您提供关于本公司的第一手资讯</p></div>
    </div>
    </div>
    <div class="xwhd-center-w">
    <div :class="{'xwhd-center':xwhdflag,'xwhd-center1':!xwhdflag}"><!-- 待改-->
    <div class="xwhd-size" v-for="(item,index) in xwhdlist" :key="index" @click="toinside(item.newsId)">
    <xinwen 
    :img2="item.newsThumbnail" 
    :xinti="item.newsTitle" 
    :xinti2="item.newsUpdateTime"
    :h="newh"
    :xinh="xinh"
    :xinw="xinw"></xinwen>
    </div>
    </div>
    </div>
    <div class="xwhd-bottom">
    <div class="recruit-b-k">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="pageNumber" @current-change="xwpagechange" :current-page="xwhdpage1" :page-size="pageSize">
    </el-pagination>
    </div>
    </div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header1 from '../header/header.vue'
import {Image,Pagination} from 'element-ui'
import xinwen from '../../smallzujian/xinwen.vue'
import bottom from '../bottom/bottom.vue'
import header3 from '../header/header3.vue'
import header4 from '../header/header4.vue'
import axios from 'axios'
export default {
    data(){
        return{
            src: 'https://www-file.huawei.com/-/media/corp2020/pressevents/news_list1.jpg',
            xwhdpage:0,
            xwhdpage1:1,
            xwhdlist:[
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201222-9.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201230.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201221-3.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corp2020/default-img/default_img3.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201222.png',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corp2020/default-img/default_img3.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corp2020/default-img/default_img1.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201229.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},
                {src1:'https://www-file.huawei.com/-/media/corporate/images/news4/2020/q4/201223-1.jpg',xwhdti:'上海城市峰会2020',xwhdti2:'2020年12月15日'},   
            ],
            pageNumber:0,
            pageSize:9,
            newh:260,
            xinw:400,
            xinh:360,
            xwthW:0,
            xwhdflag:true
        }
    },
    methods:{
        xwpagechange(val){
            this.xwhdpage=val;
            this.xwhdpage1=val;
            sessionStorage.setItem('xwhdpage1',this.xwhdpage1);
            sessionStorage.setItem('xwhdpage',this.xwhdpage-1);
            var _this=this;
        axios.get('/portalNews/getAll',{
            params:{
                pageNum:_this.xwhdpage-1,
                pageSize:_this.pageSize
            }
        }).then(res=>{
            _this.xwhdlist=res.data.data;
        }).catch(err=>{
            console.log(err);
        })

        },
        toinside(index){
            sessionStorage.setItem('inside', index);
            this.$router.push({ name: 'xwhdinside', params: { xwhdinside: index }})
        }
    },
    created(){
        window.scroll(0, 0);
        var _this=this;
        // 通过页码与每页条数查询新闻
        _this.xwhdpage=sessionStorage.getItem('xwhdpage');
        _this.xwhdpage1=parseInt(sessionStorage.getItem('xwhdpage1'));
        axios.get('/portalNews/getAll',{
            params:{
                pageNum:_this.xwhdpage,
                pageSize:_this.pageSize
            }
        }).then(res=>{
            _this.xwhdlist=res.data.data;
        }).catch(err=>{
            console.log(err);
        })
        
        //获取新闻总条数用于底部分页
        axios.get('/portalNews/getCounts').then(res=>{
            _this.pageNumber=res.data.data;
        }).catch(err=>{
            console.log(err);
        })
    },
    mounted(){
        var _this=this;
            _this.xwthW = $(window).width();
        if(_this.xwthW>=1300){
            _this.xwhdflag=true;
            _this.newh=260;
            _this.xinw=400;
            _this.xinh=360;
        }else if(_this.xwthW<1300){
            _this.xwhdflag=false;
            _this.newh=160;
            _this.xinw=300;
            _this.xinh=260;
        }else{}

        window.onresize = function(){
            _this.xwthW = $(window).width();
            if(_this.xwthW>=1300){
            _this.xwhdflag=true;
            _this.newh=260;
            _this.xinw=400;
            _this.xinh=360;
        }else if(_this.xwthW<1300){
            _this.xwhdflag=false;
            _this.newh=160;
            _this.xinw=300;
            _this.xinh=260;
        }else{}
        }
        
        $(window).scroll(function(){
            var height=$(window).scrollTop();
            if(height>=300){
                $(".xwhd-top").css({
                    "position": "fixed"
                })
            }else{
                // console.log(33333)
                $(".xwhd-top").css({
                    "position":"absolute"
                })
            }
            // console.log(height);
        })
    },
    components:{header1,"el-image":Image,xinwen,"el-pagination":Pagination,bottom,header3,header4}
}
</script>
<style scoped>
.xwhd{
    position: relative;
    width: 100%;
    height: 100%;
}
.xwhd-top{
position: absolute;
width: 100%;
top: 0px;
z-index: 999;
}
.xwhd-tu{
    position: relative;
    top: 80px;
}
.xwhd-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.xwhd-title span{
    font-size: 50px;
    color: white;
    font-weight: bolder;
}
.xwhd-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.xwhd-img{
    height: 340px;
    width: 100%;
}
.xwhd-center-w{
    margin-top: 160px;
}
.xwhd-center{
    display: flex;
    /*justify-content: space-between;*/
    width: 1300px;
    margin: 0 auto;
    margin-bottom: 30px;
    flex-wrap: wrap;
} 
.xwhd-size{
margin-top: 30px;
margin-left: 25px;
}
.xwhd-bottom{
    margin: 20px 0px 40px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.xwhd-center1{
    display: flex;
    width: 1000px;
    margin: 0 auto;
    margin-bottom: 30px;
    flex-wrap: wrap;
}
</style>