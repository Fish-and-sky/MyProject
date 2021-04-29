<template>
    <div :class="{introduce2:flag,introduce21:!flag}">
        <div class="Row2">
        <div class="Row2-right" :style="{width:intw2+'px',height:inth2+'px'}" @click="toprodetails2">
        <div class="mb" v-show="false"></div>
                <div class="Row2y-title">
                    <div>{{productName}}</div>
                    <div>{{productIntroduction |ellipsis(10)}}</div>
                    <div>了解更多 ></div>
                </div>
                <div class="Row2y-img" :style="{width:intw2+'px',height:inth2+'px'}"><img :src="productThumbnail" alt="" :style="{width:intw2+'px',height:inth2+'px'}"></div>
            </div>
            <div class="Row2-left" :style="{width:intw1+'px',height:inth1+'px'}" @click="toprodetails3">
            <div class="mb" v-show="false"></div>
            <div class="Row2z-title">
                <div>{{productName2}}</div>
                <div>{{productIntroduction2 |ellipsis(10)}}</div>
                <div>了解更多 ></div>
            </div>
                <div class="Row2z-img"><img :src="productThumbnail2" alt="" :style="{width:intw1+'px',height:inth1+'px'}"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            intr2list:[
                {id:0,title1:'FAJ FLJASD KAL',img21:'https://www-file.huawei.com/-/media/corp2020/home/box/2/1230/matebook_x_m_en.jpg'},
                {id:1,title1:'FAJ FLJASD KALdl',img21:'https://www-file.huawei.com/-/media/corp2020/home/box/2/1230/freebuds_studio_p.jpg'},
            ],
            productName:'',
            productIntroduction:'',
            productThumbnail:'',
            productId:'',
            productName2:'',
            productIntroduction2:'',
            productThumbnail2:'',
            productId2:'',
        }
    },
    props:{
        inth1:{defauct:""},
        intw1:{defauct:""},
        inth2:{defauct:""},
        intw2:{defauct:""},
        flag:{defauct:""}
    },
    created(){
        var _this=this;
        axios.get('/portalProducts/getAll',{
        params:{
            pageNum:0,
            pageSize:4
        }
    }).then(res=>{
        _this.introducelist=res.data.data;
        _this.productName=_this.introducelist[2].productName;
        _this.productIntroduction=_this.introducelist[2].productIntroduction;
        _this.productThumbnail=_this.introducelist[2].productThumbnail;
        _this.productId=_this.introducelist[2].productId;
        _this.productName2=_this.introducelist[3].productName;
        _this.productIntroduction2=_this.introducelist[3].productIntroduction;
        _this.productThumbnail2=_this.introducelist[3].productThumbnail;
        _this.productId2=_this.introducelist[3].productId;
    }).catch(err=>{
        console.log(err)
    })
    },
    methods:{
        toprodetails2(){
            sessionStorage.setItem('prodetails',this.productId);
            this.$router.push({ name: 'prodetails', params: { prodetails: this.productId }})
        },
        toprodetails3(){
            sessionStorage.setItem('prodetails',this.productId2);
            this.$router.push({ name: 'prodetails', params: { prodetails: this.productId2 }})
        }
    },
    mounted(){
        var _this=this;
        $(".Row2-left").mouseover(function(){
            $(".Row2z-title").stop().animate({
                "padding-bottom":"60px"
            },300).prev().show();
            $(".Row2z-img img").stop().animate({
                "top":"-10px",
                "left":"-10px",
                "height":_this.inth1+20,
                "width":_this.intw1+20
            },600)
        })
        $(".Row2-left").mouseleave(function () { 
            $(".Row2z-title").stop().animate({
                "padding-bottom":"0px"
            },300).prev().hide();
            $(".Row2z-img img").stop().animate({
                "top":"0px",
                "left":"0px",
                "height":_this.inth1,
                "width":_this.intw1
            },600)
            // console.log(2);
        });
        $(".Row2-right").mouseover(function(){
            $(".Row2y-title").stop().animate({
                "padding-bottom":"60px"
            },300).prev().show();
            $(".Row2y-img img").stop().animate({
                "top":"-10px",
                "left":"-10px",
                "height":_this.inth2+20,
                "width":_this.intw2+20
            },600)
        })
        $(".Row2-right").mouseleave(function(){
            $(".Row2y-title").stop().animate({
                "padding-bottom":"0px"
            },300).prev().hide();
            $(".Row2y-img img").stop().animate({
                "top":"0px",
                "left":"0px",
                "height":_this.inth2,
                "width":_this.intw2
            },600)
        })
    }    
}
</script>
<style scoped>
.introduce2{
    width: 1300px;
    /*border: 1px solid #cccccc;*/
    margin: 0 auto;
}
.introduce2 .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 20%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce2 .Row2{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.introduce2 .Row2-left{
    position: relative;
    overflow: hidden;
    
}
.introduce2 .Row2z-title{
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: 999;
}
.introduce2 .Row2z-title div{
    margin-left: 30px;
    color: white;
}
.introduce2 .Row2z-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce2 .Row2z-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce2 .Row2z-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce2 .Row2z-img{
    height: 350px;
    object-fit: cover;
    background-color: cadetblue;
    overflow: hidden;
}
.introduce2 .Row2z-img img{
    position: absolute;
    height: 350px;
    width: 900px;
}
.introduce2 .Row2-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
    margin-right: 20px;
}
.introduce2 .Row2y-title{
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: 999;
}
.introduce2 .Row2y-title div{
    margin-left: 30px;
    color: white;
}
.introduce2 .Row2y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce2 .Row2y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce2 .Row2y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce2 .Row2y-img{
    overflow: hidden;
}
.introduce2 .Row2y-img img{
    position: absolute;
}
/*
改组件因为是上一张改动使用左图样式为right，右图样式为left。正好相反其他未改动
图片展示情况，左短图，右长图。
实现效果：鼠标移入字体上移，图片居中放大，蒙版出现。移出，变回原本样式
*/
.introduce21{
    width: 1000px;
    margin: 0 auto;
}
.introduce21 .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 20%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce21 .Row2{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.introduce21 .Row2-left{
    position: relative;
    overflow: hidden;
    
}
.introduce21 .Row2z-title{
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: 999;
}
.introduce21 .Row2z-title div{
    margin-left: 30px;
    color: white;
}
.introduce21 .Row2z-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce21 .Row2z-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce21 .Row2z-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce21 .Row2z-img{
    height: 350px;
    object-fit: cover;
    background-color: cadetblue;
    overflow: hidden;
}
.introduce21 .Row2z-img img{
    position: absolute;
    height: 350px;
    width: 900px;
}
.introduce21 .Row2-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
    margin-right: 20px;
}
.introduce21 .Row2y-title{
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: 999;
}
.introduce21 .Row2y-title div{
    margin-left: 30px;
    color: white;
}
.introduce21 .Row2y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce21 .Row2y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce21 .Row2y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce21 .Row2y-img{
    height: 350px;
    overflow: hidden;
}
.introduce21 .Row2y-img img{
    position: absolute;
}
</style>