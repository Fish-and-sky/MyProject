<template>
    <div class="work">
    <div class="work-top">
    <div class="work-tu">
    <div><el-image :src="src" class="work-img"></el-image></div>
    <div class="work-title">
    <div style="text-align: center;"><span>办公环境</span></div>
    <div style="margin-top:40px"><p>聚合微小善行，以科技让世界更美好</p></div>
    </div>
    </div>
    </div>
    <div :class="{'work-center':flag,'work-center1':!flag}">
    <div :class="{'work-next':flag,'work-next1':!flag}">
    <div class="work-next-left">
    <div class="work-l-k">
        <div class="work-l-s"><h1>温暖舒适的工作环境</h1></div>
        <div class="work-l-z">
        <p>在新冠肺炎疫情之战中，腾讯秉持科技向善，</p>
        <p>以互联网科技的力量，通过我们的技术和产品为全球战疫提供支持。</p>
        </div>
        <div class="work-l-x">
         <el-image :src="worksrc2" style="width:50px"></el-image>
        </div>
    </div>
    </div>
    <div class="work-next-right">
    <el-image :src="worksrc1"></el-image>
    </div>
    </div>
    <div :class="{'work-next2':flag,'work-next21':!flag}">
    <div class="work-n2-t"><h1>办公回廊</h1></div>
    <div class="work-n2-bottom">
    <div class="work-n2-b" v-for="(item,id) of worklist" :key="id">
    <div class="work-n2-tt"><span>{{item.title}}</span></div>
    <el-image :src="item.worksrc3"></el-image>
    </div>
    </div>
    </div>
    <div :class="{'work-next3':flag,'work-next31':!flag}">
        <div class="n3-top">
        <h1>地理环境</h1>
        </div>
        <div class="n3-bottom">
        <div class="n3-b-div">
        <div class="n3-b-top">
        <el-image :src="worksrc4"></el-image>
        </div>
        <div class="n3-b-b">
        <h1>生活小照</h1>
        <p>腾讯公益慈善基金会（腾讯基金会）于2007年6月成立，推动互联网与公益慈善事业的深度融合与发展。我们每年向腾讯基金会捐出部分利润，以支持慈善工作。</p>
        </div>
        </div>
        <div class="n3-b-div">
        <div class="n3-b-top">
        <el-image :src="worksrc5"></el-image>
        </div>
        <div class="n3-b-b">
        <h1>生活小照</h1>
        <p>网络捐款平台是腾讯基金会推出的首个网上公开募捐平台，开放给合资格的慈善机构免费使用。个人用户可通过“乐捐”、“一起捐”等方式，选择自己信任的公益慈善项目，自主选择捐款，让人人可公益成为现实。</p>
        </div>
        </div>
        </div>
    </div>
    <div :class="{'work-next4':flag,'work-next41':!flag}">
    <div><xinwen :img2="worksrc6" 
    :xinti="workti" 
    :xinti2="workti2"
    :h="newh"
    :xinh="xinh"
    :xinw="xinw"></xinwen></div>
    <div><xinwen :img2="worksrc6" 
    :xinti="workti" 
    :xinti2="workti2"
    :h="newh"
    :xinh="xinh"
    :xinw="xinw"></xinwen></div>
    <div><xinwen :img2="worksrc6" 
    :xinti="workti" 
    :xinti2="workti2"
    :h="newh"
    :xinh="xinh"
    :xinw="xinw"></xinwen></div>
    </div>
        <div class="work-next">
    <div class="work-next-left" style="width:1300px">
    <div class="work-l-k" style="position: absolute;top:0;z-index:2;color:white">
        <div class="work-l-s"><h1>温暖舒适的工作环境</h1></div>
        <div class="work-l-z">
        <p>在新冠肺炎疫情之战中，腾讯秉持科技向善，</p>
        <p>以互联网科技的力量，通过我们的技术和产品为全球战疫提供支持。</p>
        </div>
        <!-- <div class="work-l-x">
         <el-image :src="worksrc2" style="width:50px"></el-image>
        </div> -->
    </div>
    <el-image :src="worksrc7" style="position: absolute;z-index:1;margin-top:-200px;"></el-image>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import xinwen from '../../../smallzujian/xinwen'
export default {
    data(){
        return{
            src: 'https://www.tencent.com/img/banners/responsibility-1.jpg',
            worksrc1:'https://www.tencent.com/data/responsibility/type-box-2.jpg',
            worksrc2:'https://www.tencent.com/img/business/go-icon.png',
            worklist:[
                {id:0,worksrc3:'https://www.tencent.com/data/responsibility/type-box-1.jpg',title:'办公室一'},
                {id:1,worksrc3:'https://www.tencent.com/data/responsibility/type-box-2.jpg',title:'办公室二'},
                {id:2,worksrc3:'https://www.tencent.com/data/responsibility/type-box-3.jpg',title:'办公室三'},
                {id:3,worksrc3:'https://www.tencent.com/data/responsibility/type-box-4.jpg',title:'办公室四'},
            ],
            worksrc4:'https://www.tencent.com/data/responsibility/flx-1.jpg',
            worksrc5:'https://www.tencent.com/data/responsibility/flx-2.jpg',
            worksrc6:'https://www.tencent.com/data/responsibility/flx-3.jpg',
            worksrc7:'https://www.tencent.com/data/responsibility/flx-4.jpg',
            workti:'99 公益日',
            workti2:'腾讯基金会慈善工作的重头戏是每年一度于9月举行的"99公益日"活动，可以透过网上平台将大众在活动期间网上作出的捐款进行匹配。',
        }
    },
    props:{
        flag:{defauct:""},
        newh:{defauct:""},
        xinw:{defauct:""},
        xinh:{decauct:""},
    },
    mounted(){
        var _this=this;
    },
    components:{xinwen},
}
</script>
<style scoped>
.work h1{
    font-size: 30px;
    font-weight: bolder;
}
.work-tu{
    position: relative;
}
.work-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.work-title span{
    font-size: 50px;
    color: white;
    font-weight: bolder;
}
.work-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.work-img{
    height: 400px;
    width: 100%;
}
.work-center{/*改*/
    width: 1300px;
    /*border: 1px solid black;*/
    margin: 0 auto;
    margin-top: 80px;
}
.work-next{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 80px;
}
.work-next .work-next-left{
    position: relative;
    width: 650px;
    height: 300px;
    background-color: #f0eaea;
}
.work-next .work-next-right{
    width: 650px;
    height: 300px;
    overflow: hidden;
    /*border: 1px solid black;*/
}
.work-next .work-l-k{
    margin: 80px 0px 40px 80px;
    /*border: 1px solid black;*/
}
.work-next .work-l-s{
    margin-bottom: 20px;
}
.work-next .work-l-s h1{
    font-size: 30px;
    font-weight: bolder;
}
.work-next .work-l-z p{
    font-size: 16px;
    line-height: 30px;
}
.work-next .work-l-x{
    margin-top: 30px;
}
.work-next2{
    margin-bottom: 100px;
}
.work-next2 .work-n2-t{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.work-next2 .work-n2-bottom{
    display: flex;
    flex-wrap:wrap;
}
.work-next2 .work-n2-bottom .work-n2-b{
    position: relative;
    /*border: 1px solid black;*/
    width: 648px;
    height: 300px;
    overflow: hidden;
    z-index: 1;
}
.work-next2 .work-n2-tt{
bottom: 40px;
left: 30px;
position: absolute;
z-index: 99;
}
.work-next2 .work-n2-tt span{
    font-size: 20px;
    color: white;
    font-weight: bolder;
}
.work-next3{
    margin-bottom: 60px;
}
.work-next3 .n3-top{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.work-next3 .n3-bottom{
    display: flex;
    justify-content: space-between;
}
.work-next3 .n3-b-div{
    width: 630px;
    /*border: 1px solid black;*/
}
.work-next3 .n3-b-top{
    width: 630px;
    min-height: 300px;
    /*border: 1px solid red;*/
    /*overflow: hidden;*/
}
.work-next3 .n3-b-b{
    margin-top: 40px;
}
.work-next3 .n3-b-b h1{
    margin-bottom: 10px    ;
}
.work-next3 .n3-b-b p{
    font-size: 16px;
    line-height: 24px;
}
.work-next4{
    display: flex;
    width: 1300px;
    justify-content: space-between;
    margin-bottom: 100px;
}

/*另一*/
.work-center1{/*改*/
    width: 1000px;
    /*border: 1px solid black;*/
    margin: 0 auto;
    margin-top: 80px;
}
.work-next1{
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-bottom: 80px;
}
.work-next1 .work-next-left{
    position: relative;
    width: 500px;
    height: 260px;
    background-color: #f0eaea;
}
.work-next1 .work-next-right{
    width: 500px;
    height: 260px;
    overflow: hidden;
    border: 1px solid black;
}
.work-next1 .work-l-k{
    margin: 60px 0px 40px 60px;
    /*border: 1px solid black;*/
}
.work-next1 .work-l-s{
    margin-bottom: 20px;
}
.work-next1 .work-l-s h1{
    font-size: 30px;
    font-weight: bolder;
}
.work-next1 .work-l-z p{
    font-size: 16px;
    line-height: 30px;
}
.work-next1 .work-l-x{
    margin-top: 30px;
}
.work-next21{
    margin-bottom: 100px;
}
.work-next21 .work-n2-t{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.work-next21 .work-n2-bottom{
    display: flex;
    flex-wrap:wrap;
}
.work-next21 .work-n2-bottom .work-n2-b{
    position: relative;
    /*border-bottom: 1px solid black;*/
    width: 500px;
    height: 260px;
    overflow: hidden;
    z-index: 1;
}
.work-next21 .work-n2-tt{
bottom: 40px;
left: 30px;
position: absolute;
z-index: 99;
}
.work-next21 .work-n2-tt span{
    font-size: 20px;
    color: white;
    font-weight: bolder;
}
.work-next31{
    margin-bottom: 60px;
}
.work-next31 .n3-top{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.work-next31 .n3-bottom{
    display: flex;
    justify-content: space-between;
}
.work-next31 .n3-b-div{
    width: 480px;
    /*border: 1px solid black;*/
}
.work-next31 .n3-b-top{
    width: 480px;
    min-height: 300px;
    /*border: 1px solid red;*/
    /*overflow: hidden;*/
}
.work-next31 .n3-b-b{
    margin-top: 40px;
}
.work-next31 .n3-b-b h1{
    font-size: 24px;
    margin-bottom: 10px    ;
}
.work-next31 .n3-b-b p{
    font-size: 14px;
    line-height: 24px;
}
.work-next41{
    display: flex;
    width: 1000px;
    overflow: hidden;
    justify-content: space-between;
    margin-bottom: 100px;
}
</style>