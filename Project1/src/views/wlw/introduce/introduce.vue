<template>
    <div :class="{introduce:flag,introduce11:!flag}">
    <div class="title">
    <div>
        <span>推荐信息</span>
    </div>
    <div class="Underline"></div>
    </div>
        <div class="Row1">
            <div class="Row1-left" :style="{width:intw1+'px',height:inth1+'px'}" @click="toprodetails">
            <div class="mb" v-show="false"></div>
            <div class="Row1z-title">
                <div>{{productName}}</div>
                <div>{{productIntroduction |ellipsis(10)}}</div>
                <div>了解更多 ></div>
            </div>
                <div class="Row1z-img"><img :src="productThumbnail" alt="" :style="{width:intw1+'px',height:inth1+'px'}"></div>
            </div>
            <div class="Row1-right" :style="{width:intw2+'px',height:inth2+'px'}" @click="toprodetails1">
            <div class="mb" v-show="false"></div>
                <div class="Row1y-title">
                    <div>{{productName2}}</div>
                    <div>{{productIntroduction2 | ellipsis(10)}}</div>
                    <div>了解更多 ></div>
                </div>
                <div class="Row1y-img" :style="{width:intw2+'px',height:inth2+'px'}"><img :src="productThumbnail2" alt="" :style="{width:intw2+'px',height:inth2+'px'}"></div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            img11:'https://www-file.huawei.com/-/media/corp2020/home/box/2/1230/mate40_pro_p.jpg',
            intr1list:[
                {id:0,title1:'FAJ FLJASD KAL'},
                {id:1,title1:'FAJ FLJASD KALdl'},
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
    created(){
        var _this=this;
        axios.get('/portalProducts/getAll',{
        params:{
            pageNum:0,
            pageSize:8
        }
    }).then(res=>{
        _this.introducelist=res.data.data;
        console.log(_this.introducelist);
        _this.productName=_this.introducelist[0].productName;
        _this.productIntroduction=_this.introducelist[0].productIntroduction;
        _this.productThumbnail=_this.introducelist[0].productThumbnail;
        _this.productId=_this.introducelist[0].productId;
        _this.productName2=_this.introducelist[1].productName;
        _this.productIntroduction2=_this.introducelist[1].productIntroduction;
        _this.productThumbnail2=_this.introducelist[1].productThumbnail;
        _this.productId2=_this.introducelist[1].productId;
        // console.log(_this.introducelist)
    }).catch(err=>{
        console.log(err)
    })
    },
    props:{
        inth1:{defauct:""},
        intw1:{defauct:""},
        inth2:{defauct:""},
        intw2:{defauct:""},
        flag:{defauct:""}
    },
    methods:{
        toprodetails(){
            sessionStorage.setItem('prodetails',this.productId);
            this.$router.push({ name: 'prodetails', params: { prodetails: this.productId }});
        },
        toprodetails1(){
            sessionStorage.setItem('prodetails',this.productId2);
            this.$router.push({ name: 'prodetails', params: { prodetails: this.productId2 }})
        }
    },
    mounted(){
        var _this=this;
        $(".Row1-left").mouseover(function(){
            $(".Row1z-title").stop().animate({
                "padding-bottom":"60px"
            },300).prev().show();
            $(".Row1z-img img").stop().animate({
                "top":"-10px",
                "left":"-10px",
                "height":_this.inth1+20,
                "width":_this.intw1+20
            },600)
        })
        $(".Row1-left").mouseleave(function () { 
            $(".Row1z-title").stop().animate({
                "padding-bottom":"0px"
            },300).prev().hide();
            $(".Row1z-img img").stop().animate({
                "top":"0px",
                "left":"0px",
                "height":_this.inth1,
                "width":_this.intw1
            },600)
            // console.log(2);
        });
        $(".Row1-right").mouseover(function(){
            $(".Row1y-title").stop().animate({
                "padding-bottom":"60px"
            },300).prev().show();
            $(".Row1y-img img").stop().animate({
                "top":"-10px",
                "left":"-10px",
                "height":_this.inth2+20,
                "width":_this.intw2+20
            },600)
        })
        $(".Row1-right").mouseleave(function(){
            $(".Row1y-title").stop().animate({
                "padding-bottom":"0px"
            },300).prev().hide();
            $(".Row1y-img img").stop().animate({
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
.introduce{
    width: 1300px;
    /*border: 1px solid #cccccc;*/
    overflow: hidden;
    margin: 0 auto;
}
.introduce .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 10%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce .title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.introduce .title div{
    margin: 0 auto;
 }
 .introduce .title .Underline{
     margin: 20px auto;
     margin-bottom: 60px;
     width: 40px;
     height: 2px;
     background-color: brown;
 }
.introduce .title span{
    font-size: 36px;
    font-weight: bold;
}
.introduce .Row1{
    display: flex;
    justify-content: space-between;
    width: 1300px;
    overflow: hidden;
    margin-bottom: 40px;
    /*justify-content: center;*/
}
.introduce .Row1-left{
    position: relative;
    margin-right: 20px;
    overflow: hidden;
}
.introduce .Row1z-title{
    /*background-color: crimson;*/
    position: absolute;
    bottom: -30px;
    /*top: 0px;*/
    width: 100%;
    z-index: 999;
}
.introduce .Row1z-title div{
    margin-left: 30px;
    color: white;
}
.introduce .Row1z-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce .Row1z-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce .Row1z-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce .Row1z-img{
    height: 350px;
    object-fit: cover;
    background-color: cadetblue;
    overflow: hidden;
}
.introduce .Row1z-img img{
    position: absolute;
    height: 350px;
    width: 900px;
}
.introduce .Row1-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
}
.introduce .Row1y-title{
    /*background-color: crimson;*/
    position: absolute;
    bottom: -30px;
    /*top: 0px;*/
    width: 100%;
    z-index: 999;
}
.introduce .Row1y-title div{
    margin-left: 30px;
    color: white;
}
.introduce .Row1y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce .Row1y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce .Row1y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce .Row1y-img{
    overflow: hidden;
    object-fit: fill;
}
.introduce .Row1y-img img{
    position: absolute;
    /*transform:translateX(-30px)*/
}
/*
图片展示情况，左长图，右短图。
实现效果：鼠标移入字体上移，图片居中放大，蒙版出现。移出，变回原本样式
*/
.introduce11{
    width: 1000px;
    overflow: hidden;
    margin: 0 auto;
}
.introduce11 .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 10%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce11 .title{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}
.introduce11 .title div{
    margin: 0 auto;
 }
 .introduce11 .title .Underline{
     margin: 20px auto;
     margin-bottom: 60px;
     width: 40px;
     height: 2px;
     background-color: brown;
 }
.introduce11 .title span{
    font-size: 36px;
    font-weight: bold;
}
.introduce11 .Row1{
    display: flex;
    justify-content: space-between;
    width: 1000px;
    overflow: hidden;
    margin-bottom: 40px;
    /*justify-content: center;*/
}
.introduce11 .Row1-left{
    position: relative;
    margin-right: 20px;
    overflow: hidden;
}
.introduce11 .Row1z-title{
    /*background-color: crimson;*/
    position: absolute;
    bottom: -30px;
    /*top: 0px;*/
    width: 100%;
    z-index: 999;
}
.introduce11 .Row1z-title div{
    margin-left: 30px;
    color: white;
}
.introduce11 .Row1z-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce11 .Row1z-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce11 .Row1z-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce11 .Row1z-img{
    height: 350px;
    object-fit: cover;
    background-color: cadetblue;
    overflow: hidden;
}
.introduce11 .Row1z-img img{
    position: absolute;
    height: 350px;
    width: 900px;
}
.introduce11 .Row1-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
    /*flex-grow: 3;*/
    /*width: 32%;*/
    /*margin-left: 30px;*/
}
.introduce11 .Row1y-title{
    /*background-color: crimson;*/
    position: absolute;
    bottom: -30px;
    /*top: 0px;*/
    width: 100%;
    z-index: 999;
}
.introduce11 .Row1y-title div{
    margin-left: 30px;
    color: white;
}
.introduce11 .Row1y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce11 .Row1y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce11 .Row1y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce11 .Row1y-img{
    overflow: hidden;
    object-fit: fill;
    background-color: cadetblue;
}
.introduce11 .Row1y-img img{
    position: absolute;
    /*transform:translateX(-30px)*/
}
</style>