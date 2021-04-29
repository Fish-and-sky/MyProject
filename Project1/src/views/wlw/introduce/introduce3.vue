<template>
    <div :class="{introduce3:flag,introduce31:!flag}">
        <div class="Row3">
            <div class="Row3-right" :style="{width:intw2+'px',height:inth2+'px'}" @click="toprodetails4(item.productId)" v-for="(item,id) in intr3list" :key="id">
            <div class="mb" v-show="false"></div>
                <div class="Row3y-title">
                    <div>{{item.productName}}</div>
                    <div>{{item.productIntroduction |ellipsis(10)}}</div>
                    <div>了解更多 ></div>
                </div>
                <div class="Row3y-img"><img :src="item.productThumbnail" alt="" :style="{width:intw2+'px',height:inth2+'px'}"></div>
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
            intr3list:[
                {id:0,title3:'FAJ FLJASD KAL',img31:'https://www-file.huawei.com/-/media/corp2020/home/banner/2/mate40-pro.jpg?la=zh'},
                {id:1,title3:'FAJ FLJASD KAL',img31:'https://www-file.huawei.com/-/media/corp2020/home/box/2/intelligent-twins.jpg'},
                {id:2,title3:'FAJ FLJASD KAL',img31:'https://www-file.huawei.com/-/media/corp2020/home/box/2/dbs-3.jpg'},
            ],
            introducelist:[],
        }
    },
    props:{
        inth2:{defauct:""},
        intw2:{defauct:""},
        flag:{defauct:""}
    },
        created(){
        var _this=this;
        axios.get('/portalProducts/getAll',{
        params:{
            pageNum:0,
            pageSize:8
        }
    }).then(res=>{
        _this.intr3list=res.data.data;
        _this.intr3list=_this.intr3list.slice(4,7);
        console.log(_this.intr3list);
    }).catch(err=>{
        console.log(err)
    })
    },
    methods:{
        toprodetails4(id){
            sessionStorage.setItem('prodetails',id);
            this.$router.push({ name: 'prodetails', params: { prodetails: id }})
        },
    },
    mounted(){
        var _this=this;
        $(".Row3 div").mouseover(function(){
            $(this).find(".Row3y-title").stop().animate({
                "padding-bottom":"60px"
            },300).prev().show();
            $(this).find(".Row3y-img img").stop().animate({
                "top":"-10px",
                "left":"-10px",
                "height":_this.inth2+20,
                "width":_this.intw2+20
            },600)
        })
        $(".Row3 div").mouseleave(function(){
            $(this).find(".Row3y-title").stop().animate({
                "padding-bottom":"0px"
            },300).prev().hide();
           $(this).find(".Row3y-img img").stop().animate({
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
.introduce3{
    width: 1300px;
    margin: 0 auto;
}
.introduce3 .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 10%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce3 .Row3{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.introduce3 .Row3-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
    margin-right: 20px;
}
.introduce3 .Row3y-title{
    position: absolute;
    bottom: -30px;
    width: 100%;
    z-index: 999;
}
.introduce3 .Row3y-title div{
    margin-left: 30px;
    color: white;
}
.introduce3 .Row3y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce3 .Row3y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce3 .Row3y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce3 .Row3y-img{
    overflow: hidden;
}
.introduce3 .Row3y-img img{
    position: absolute;
}
.introduce3 .Row3 div:nth-child(3){
    margin-right: 0px;
}
/*
图片展示情况，三张图一字排列。
实现效果：鼠标移入字体上移，图片居中放大，蒙版出现。移出，变回原本样式
*/
.introduce31{
    width: 1000px;
    margin: 0 auto;
}
.introduce31 .mb{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 220px;
    background-color: black;
    opacity: 10%;
    box-shadow:0px 0px 30px 70px black;
    z-index: 1000;
}
.introduce31 .Row3{
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    /*justify-content: center;*/
}
.introduce31 .Row3-right{
    position: relative;
    overflow: hidden;
    background-color: cadetblue;
    /*flex-grow: 3;*/
    margin-right: 20px;
}
.introduce31 .Row3y-title{
    /*background-color: crimson;*/
    position: absolute;
    bottom: -30px;
    /*top: 0px;*/
    width: 100%;
    z-index: 999;
}
.introduce31 .Row3y-title div{
    margin-left: 30px;
    color: white;
}
.introduce31 .Row3y-title div:nth-child(1){
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}
.introduce31 .Row3y-title div:nth-child(2){
    font-size: 20px;
    font-weight: bold;
}
.introduce31 .Row3y-title div:nth-child(3){
    font-size: 18px;
    font-weight: bold;
    margin-top: 40px;
}
.introduce31 .Row3y-img{
    overflow: hidden;
}
.introduce31 .Row3y-img img{
    position: absolute;
}
.introduce31 .Row3 div:nth-child(3){
    margin-right: 0px;
}
</style>