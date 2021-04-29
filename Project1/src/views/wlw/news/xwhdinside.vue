<template>
  <div class="inside">
  <!--<div style="position: relative;"><div class="inside-top"><header1></header1></div></div>-->
  <div style="position: relative;"><div class="inside-top"><header3></header3></div></div>
    <div class="inside-center">
    <div class="inside-c-z">
    <div class="inside-c-top"><h1>{{newsTitle}}</h1></div>
    <div class="inside-c-time"><span>{{newsUpdateTime}}</span></div>
    <div class="wenben"><p style="font-size:16px;color: rgb(117, 117, 117);" v-html="newsContent" class="markdown"></p></div>
    </div>
    <div><bottom></bottom></div>
    </div>
  </div>
</template>
<script>
import header1 from '../header/header.vue'
import header3 from '../header/header3.vue'
import bottom from '../bottom/bottom.vue'
import axios from 'axios'
import '../../../assets/css/markdown.css'
import marked from 'marked'
export default {
    data(){
        return{
            title:'标题654651165161',
            insidetime:'2020-12-23',
            titleda:'<p>超多内容</p>',
            newsTitle:'',
            newsContent:'',
            newsUpdateTime:'',
            insidenei:''
        }
    },
    components:{header1,bottom,header3},
    created(){
        var _this=this;
        window.scroll(0, 0);
        //获取本地缓存的新闻id，防止刷新页面数据丢失
        var a = sessionStorage.getItem('inside');
        axios.get('/portalNews/getById',{
            params:{
                id:a
            }
        }).then(res=>{
            _this.newsTitle=res.data.data.newsTitle;
            _this.newsContent=res.data.data.newsContent;
            _this.newsContent=marked(_this.newsContent);
            _this.newsUpdateTime=res.data.data.newsUpdateTime;
        }).catch(err=>{
            console.log(err);
        })
        // console.log(this.$route.params.xwhdinside);
    },
    mounted(){
        $(window).scroll(function(){
            var height=$(window).scrollTop();
            if(height>=300){
                $(".inside-top").css({
                    "position": "fixed",
                    "top":"0px"
                })
            }else{
                // console.log(33333)
                $(".inside-top").css({
                    "position":"absolute",
                    "top":"-60px"
                })
            }
            // console.log(height);
        })
    }
}
</script>
<style scoped>
.inside{
    width: 100%;
    height: 100%;
}
.inside-top{
position: absolute;
width: 100%;
top: -60px;
z-index: 999;
border: 1px solid black;
}
.inside-center{
    width: 100%;
    position: relative;
    top: 80px;
}
.inside-c-z{
    width: 1000px;
    /*border: 1px solid black;*/
    margin: 0 auto;
}
.inside-c-z .inside-c-top{
    margin-top: 60px;
    text-align: center;
}
.inside-c-z .inside-c-top h1{
    font-size: 40px;
}
.inside-c-z .inside-c-time{
    margin-top: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid #cccccc;
    text-align: center;
}
.inside-c-z .inside-c-time span{
    font-size: 16px;
    color: rgb(184, 183, 183);
}
.wenben{
    margin-top:40px;
    min-height: 600px;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 40px;
    padding-bottom: 40px;
}
</style>