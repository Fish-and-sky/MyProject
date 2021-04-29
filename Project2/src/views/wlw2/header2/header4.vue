<template>
<div>
    <div class="header">
        <div class="header-top">
            <div class="header-dh">
                <div class="header-left">
                    <div><el-image :src="headerimg"></el-image></div>
                </div>
                <div class="header-right">
                    <div class="header-right-left">
                    <div class="header-right-left-b">
                    <p>首页</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>产品</p>
                    <div class="header-right-color"></div>
                    <div class="header-right-zi">
                    <ul class="prul">
                    <li v-for="(item,id) of prlist" :key="id">{{item.title3}}</li>
                    </ul>
                    </div>
                    </div>
                    <div class="header-right-left-b">
                    <p>行业方案</p>
                    <div class="header-right-color"></div>
                    <div class="header-right-zi">
                    <ul>
                    <li></li>
                    </ul>
                    </div>
                    </div>
                    <div class="header-right-left-b">
                    <p>文档动态</p>
                    <div class="header-right-color"></div>
                    <div class="header-right-zi">
                    <ul>
                    <li></li>
                    </ul>
                    </div>
                    </div>
                    <div class="header-right-left-b">
                    <p>关于我们</p>
                    <div class="header-right-color"></div>
                    <div class="header-right-zi">
                    <ul class="aboutul">
                    <li v-for="(item,id) of h3list" :key="id">{{item.title3}}</li>
                    </ul>
                    </div>
                    </div>
                    <div class="header-right-left-b">
                    <p>English</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    </div>
                    <div class="header-right-right">
                        <div><el-image :src="headerimg2"></el-image></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            prflag:false,
            tubiao:'图标1',
            one:'一',
            two:'二',
            flag:false,
            flag1:false,
            headerimg:'http://www.ubitraq.com/images/logo.png?v=1',
            headerimg2:'http://www.ubitraq.com/images/tel_phone_13811940257.png',
            index:0,
            h3list:[
                {id:0,title3:'公司简介'},
                {id:1,title3:'公司理念'},
                {id:2,title3:'管理层信息'},
                {id:3,title3:'办公环境'},
            ],
            prlist:[
                {id:0,title3:'系统'},
                {id:1,title3:'硬件'},
                {id:2,title3:'软件'},
            ]
        }
    },
    methods:{
        // shouye(){
        //     this.$router.push("/theindex");
        // },
        // xinwen(){
        //     this.$router.push("/xwhd");
        // },
        // torecruit(){
        //     this.$router.push("/recruit");
        // },
        // totheabout(){
        //     this.$router.push("/theabout");
        // },
        // toproduct(){
        //     this.$router.push("/product");
        // },
        // h3dianj(id){
        //     this.$router.push({ name: 'theabout', params: { theabout: id }});
        //     // console.log('header3'+id);
        //     this.$emit('h3set',id);
        //     window.scroll(0, 0); 
        // },
        // prdianj(id){
        //     this.$router.push({ name: 'product', params: { product: id }});
        //     this.$emit('prset',id);
        //     window.scroll(0, 0); 
        // }
    },
    mounted(){
        var _this=this;
        $(".header-right-left-b").hover(function () {
                $(this).find(".header-right-zi").css({
                    display:'block'
                })
            }, function () {
                $(this).find(".header-right-zi").css({
                    display:'none'
                })
            }
        );
        $(".header-right-left-b").click(function () {
            console.log(123)
            $(this).find(".header-right-color").css({
                display:'block',
            }).parent().siblings().find(".header-right-color").css({
                display:'none',
            })
            
        });
    }
}
</script>

<style scoped>
.header-top{
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: black;
    opacity: 0.75;
    display: flex;
    justify-content: center;
    z-index: 1009;
    color: black;
}
.header-dh{
    position: relative;
    max-width: 1100px;
    display: flex;
    background-color: black;
    align-items: center;
    z-index: 999;
}
.header-left{
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 70px;
    overflow: hidden;
    max-width: 200px;
    flex-grow: 4;
    margin-right: 20px;
    /*border: 1px solid #dadd44;*/
}
.header-left div{
    max-width: 200px;
    height: 50px;
}
.header-right{
    height: 70px;
    display: flex;
    align-items: center;
    width: 900px;
    display: flex;
}
.header-right-left{
        /*width: 80px;
        height: 20px;*/
        height: 70px;
        /*align-items: center;*/
        /*border: 1px solid black;*/
        flex-grow: 5;
        /*border: 1px solid red ;*/
        display: flex;
        /*justify-content: center;*/
        justify-content: space-around;
    }
    .header-right-left  .header-right-left-b{
        flex-grow: 4;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        /*background-color: #dadd44;*/
    }
     .header-right-left  .header-right-left-b p{
        font-size: 18px;
        font-weight: 600;
        color: white;
     }
    .header-right-color{
        position: absolute;
        display: none;
        bottom: 0px;
        flex-grow: 4;
       /*max-width: 80px;*/
        height: 4px;
        background-color: white;
        font-size: 20px;
        font-weight: 600;

        /*margin: 0 auto;*/
    }
    .header-right-right{
        color: white;
        max-width: 200px;
        margin-left:30px;
    }
    .header-right-zi{
        position: absolute;
        display: none;
        top: 70px;
        z-index: 999;
        background-color: black;
        min-width: 100px;
    }
    .header-right-zi ul{
        /*border: 1px solid black;*/
        min-width: 80px;
        text-align: center;
    }
    .header-right-zi ul li{
        font-size: 16px;
        font-weight: bolder;
        line-height: 50px;
        color: #a7a5a5;
        /*padding-left: 10px;
        padding-right: 10px;*/
    }
    /*
    简单的头部导航栏,
    */
</style>