<template>
  <div class="aboutintr">
  <div :class="{'aboutintr-k':flag,'aboutintr-k1':!flag}">
  <div :class="{'intr-top':flag,'intr-top1':!flag}">
  <div class="intr-top-left">
  <h1>公司起步</h1>
  <div class="top-left-xian"></div>
  </div>
  <div class="intr-top-right">
  <p>{{intrtitle}}</p>
  </div>
  </div>
  <div class="intr-center">
  <div :class="{'intr-tu':flag,'intr-tu1':!flag}">
  <el-image :src="src"></el-image>
  </div>
  </div>
  <div class="intr-bottom">
  <div :class="{'intr-bottom-k':flag,'intr-bottom-k1':!flag}">
  <div class="intr-bottom-div">
  <div class="intr-bottom-top">
  <div><span :class="{'activeClass':flag1}">持有</span></div>
  <div><span :class="{'activeClass':flag2}">控制</span></div>
  <div><span :class="{'activeClass':flag3}">影响</span></div>
  </div>
  <div class="intr-bottom-title"><p>{{intrtitle}}</p></div>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>
<script>
import {Image} from 'element-ui'
export default {
    data(){
        return{
            intrtitle:'',
            intrtitle1:'华为创立于1987年，是全球领先的ICT（信息与通信）基础设施和智能终端提供商，我们致力于把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界：让无处不Image, 在的联接，成为人人平等的权利；为世界提供最强算力，让云无处不在，让智能无所不及；所有的行业和组织，因强大的数字平台而变得敏捷、高效、生机勃勃；通过AI重新定义体验，让消费者在家居、办公、出行等',
            tt:'华为是一家100%由员工持有的民营企业。华为通过工会实行员工持股计划，参与人数为104,572人，参与人仅为公司员工，没有任何政府部门、机构持有华为股权。',
            src:'https://www-file.huawei.com/-/media/corp2020/abouthuawei/corporate-information/virtual_tour.jpg',
            flag1:true,
            flag2:false,
            flag3:false,
            activeClass:{
                "padding-bottom": "10px",
                "border-bottom": "2px solid black",
                "color": "black"
            }
        }
    },
    props:{
        flag:{default:""},
    },
    components:{"el-image":Image},
    methods:{

    },
    mounted(){
        var _this=this;
        _this.intrtitle=_this.intrtitle1;
        $(".intr-bottom-top div").eq(0).click(function () { 
            _this.flag1=true;
            _this.flag2=false;
            _this.flag3=false;
            _this.intrtitle=_this.intrtitle1;
            $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                }).parent().siblings().find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
        });
        $(".intr-bottom-top div").eq(1).click(function () { 
            _this.flag1=false;
            _this.flag2=true;
            _this.flag3=false;
            _this.intrtitle=_this.tt;
            $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                }).parent().siblings().find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
        });
        $(".intr-bottom-top div").eq(2).click(function () { 
            _this.flag1=false;
            _this.flag2=false;
            _this.flag3=true;
            _this.intrtitle=_this.src;
            $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                }).parent().siblings().find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
        });
            $(".intr-bottom-top div").eq(0).hover(function () {
                if(_this.flag1==false){
                    $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                })
                }
            }, function () {
                if(_this.flag1==false){
                    $(this).find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
                }
            }
        );
        $(".intr-bottom-top div").eq(1).hover(function () {
                if(_this.flag2==false){
                    $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                })
                }
            }, function () {
                if(_this.flag2==false){
                    $(this).find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
                }
            }
        );
        $(".intr-bottom-top div").eq(2).hover(function () {
                if(_this.flag3==false){
                    $(this).find("span").css({
                    "padding-bottom":"10px",
                    "border-bottom": "2px solid black",
                    "color": "black"
                })
                }
            }, function () {
                if(_this.flag3==false){
                    $(this).find("span").css({
                    "padding-bottom":"0px",
                    "border-bottom": "0px solid black",
                    "color": "rgb(102, 101, 101)"
                })
                }
            }
        );
    }
}
</script>
<style scoped>
.aboutintr{
    width: 100%;
    margin-top: 40px;
}
.aboutintr-k{/*改*/
    width: 1300px;
    margin: 0 auto;
}
.intr-top{
    display: flex;
    /*border: 1px solid black;*/
    justify-content: space-between;
    margin-bottom: 50px;
}
.intr-top-left h1{
    font-size: 30px;
    font-weight: bold;
}
.top-left-xian{
    margin-top: 10px;
    width: 40px;
    height: 2px;
    background-color: black;
}
.intr-top-right{
    width: 700px;
}
.intr-top-right p{
    font-size: 18px;
    line-height: 30px;
}
.intr-center{
    display: flex;
    flex-direction:row-reverse;
}
.intr-center .intr-tu{/*改*/
    object-fit: fill;
    width: 930px;
    height: 491px;
    margin-bottom: 40px;
    border: 1px solid black;
}
.intr-bottom{
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 50px;
    /*border: 1px solid black;*/
}
.intr-bottom-k{
    display: flex;
    width: 800px;
    /*border: 1px solid red;*/
}
.intr-bottom-div div:nth-child(1){
    margin-bottom: 30px;
}
.intr-bottom-top div{
    font-size: 18px;
    font-weight: bold;
    color: rgb(102, 101, 101);
}
.activeClass{
    padding-bottom: 10px;
    border-bottom: 2px solid black;
    color: black;
}
.intr-bottom-top{
    display: flex;
}
.intr-bottom-title p{
    font-size: 16px;
    line-height: 24px;
}
.intr-bottom-top div{
    margin-right: 60px;
}


.intr-top1{/*改*/
    width: 800px;
    /*border: 1px solid black;*/
    margin: 0 auto;
    margin-bottom: 50px;
}
.intr-top1 .intr-top-left{
    margin-bottom: 20px;
}
.intr-bottom-k1{
    display: flex;
    width: 900px;
    /*border: 1px solid red;*/
}
.aboutintr-k1{/*改*/
    width: 1000px;
    margin: 0 auto;
}
.intr-center .intr-tu1{/*改*/
    object-fit: fill;
    width: 930px;
    height: 491px;
    margin-bottom: 40px;
    border: 1px solid black;
}
</style>