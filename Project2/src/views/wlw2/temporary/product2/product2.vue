<template>
    <div class="product2">
    <div class="header">
    <div><el-image :src="src" class="about-img"></el-image></div>
    <div class="header-title"><span>人员定位系统</span></div>
    </div>
    <div class="center">
    <div class="center-top">
    <p>{{title1}}</p>
    <p>{{title2}}</p>
    </div>
    <div class="center-z">
    <div class="center-z-one">
    <div v-for="(item,id) in p2list" :key="id"><briefly 
    :srcb="item.src"
    :titleb="item.title"
    :neirob="item.content"></briefly></div>
    </div>
    </div>
    </div>
    <div class="center2">
    <div class="center-z-two">
    <div><el-image :src="src1"></el-image></div>
    <div class="z-two-next">
    <h1 style="font-size:30px;">特性及功能</h1>
    <ul>
    <li v-for="(item,index) in 5" :key="index">
    <h1>功能</h1>
    <p>介绍</p>
    </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import briefly from '../../smallzujian/briefly.vue'
export default {
    data(){
        return{
            src: 'http://www.ubitraq.com/images/system/banner_system.png',
            src1:'http://www.xlink.cn/static/images/feature-bg.6512ad2.jpg',
            title1:'什么是人员定位?111111111111111111',
            title2:'为什么选择人员定位?2222222222222222222222222',
            p2list:[
                {id:0,title:'标题',content:'内容',src:''},
                {id:1,title:'标题',content:'内容',src:''},
                {id:2,title:'标题',content:'内容',scr:''},
                {id:3,title:'标题',content:'内容',scr:''},
            ],
        }
    },
    methods:{},
    mounted(){},
    components:{
        briefly,
    }
}
</script>
<style scoped>
.product2{
    width: 100%;
}
.product2 .header{
    position: relative;
}
.product2 .header-title{
    position: absolute;
    width: 320px;
    height: 100px;
    border: 2px solid white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.product2 .header-title span{
    color: white;
    font-size: 30px;
    font-weight: bolder;
    line-height: 100px;
}
.product2 .center{
    width: 1300px;
    margin: 0 auto;
    border: 1px solid black;
}
.product2 .center-top{
    border: 1px solid black;
    margin-top: 80px;
    text-align: center;
}
.product2 .center-top p{
    font-size: 20px;
    font-weight: bolder;
    line-height: 30px;
    color: rgb(78, 78, 78);
}
.product2 .center-z{
    margin-top: 100px;
}
.product2 .center-z-one{
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
}
.product2 .center-z-two{
    position: relative;
}
.product2 .z-two-next{
    position: absolute;
    width: 1300px;
    left: 140px;
    border: 1px solid black;
    top: 140px;
    /*left: 50%;*/
    /*transform: translate(-50%,-50%);*/
}
.product2 .z-two-next h1{
    font-size: 20px;
    font-weight: bolder;
}
.product2 ul{
    margin-top: 40px;
}
.product2 ul li{
    margin-top: 20px;
}
.product2 ul li p{
    margin-top: 10px;
    font-size: 16px;
    line-height: 22px;
}
</style>