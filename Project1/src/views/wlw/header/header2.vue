<template>
    <div class="header">
        <div class="header-top">
            <div class="header-dh">
                <div class="header-left">
                    <div>logo</div>
                </div>
                <div class="header-right">
                    <div class="header-right-left">
                    <div class="header-right-left-b">
                    <p>首页</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>产品介绍</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>关于我们</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>展会活动</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>职位招聘</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <!--<div class="header-right-left-b">
                    <p>六</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b">
                    <p>七</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>-->
                    </div>
                    <div class="header-right-right">
                        <div>{{tubiao}}</div>
                        <div>图标2</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-center">
        <div style="display:none" class="d1"><DownBox2></DownBox2></div>
        <div style="display:none" class="d2"><DownBox></DownBox>1</div>
        <div style="display:none" class="d3"><DownBox></DownBox>2</div>
        <div style="display:none" class="d4"><DownBox></DownBox>3</div>
        <div style="display:none" class="d5"><DownBox></DownBox>4</div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import DownBox from './downBox/downBox.vue'
import DownBox2 from './downBox/downBox2.vue'
export default {
    data(){
        return{
            dh:'240px',
            h:'260px',
            hh:'450px',
            hoth:370,
            whot:444,
            inth1:350,
            intw1:937,
            inth2:350,
            intw2:460,
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
            list1:[
                ["产品","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
                ["服务","运营商网络服务","企业网络服务","华为云专业服务"],
                ["行业解决方案","电信行业","数字政府","智慧园区","交通行业","电力行业"],
                ["热点话题","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            ],
            list2:[
                ["2","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
                ["2","运营商网络服务","企业网络服务","华为云专业服务"],
                ["2","电信行业","数字政府","智慧园区","交通行业","电力行业"],
                ["2","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            ],
            list3:[
                ["3","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
                ["3","运营商网络服务","企业网络服务","华为云专业服务"],
                ["3","电信行业","数字政府","智慧园区","交通行业","电力行业"],
                ["3","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            ]
        }
    },
    methods:{
        
    },
    components:{
        DownBox,DownBox2
    },
    mounted(){
        var _this=this;
        $(".header-right-left-b").click(function(){
            _this.index = $(".header-right-left-b").index(this);
            // console.log(_this.index)
            // $(".d3").slideDown();
            if(_this.index==4){
                $(".d5").siblings().hide().stop()
                $(".d5").siblings().slideUp(1,function(){
                    $(".d5").slideToggle(300);
                }).stop();
            }else if(_this.index==3){
                $(".d4").siblings().hide().stop()
                $(".d4").siblings().slideUp(1,function(){
                    $(".d4").slideToggle(300);
                }).stop();
            }else if(_this.index==2){
                $(".d3").siblings().hide().stop()
                $(".d3").siblings().slideUp(1,function(){
                    $(".d3").slideToggle(300);
                }).stop();
            }else if(_this.index==1){
                $(".d2").siblings().hide().stop()
                $(".d2").siblings().slideUp(1,function(){
                    $(".d2").slideToggle(300);
                }).stop();
            }else if(_this.index==0){
                $(".d1").siblings().hide().stop()
                $(".d1").siblings().slideUp(1,function(){
                    $(".d1").slideToggle(300);
                }).stop();
            }
        });
        $(".header-right-left div").hover(function () {
                // over
                $(this).find("p").css({
                    color:'red'
                }).next().show();
            }, function () {
                // out
                $(this).find("p").css({
                    color:'white'
                }).next().hide();
            }
        );
        $(".header-center").next().click(function(){
            // console.log("da"+_this.index)
            if(_this.index==4){
                $(".d5").slideUp()
            }else if(_this.index==3){
                $(".d4").slideUp()
            }else if(_this.index==2){
                $(".d3").slideUp()
            }else if(_this.index==1){
                $(".d2").slideUp()
            }else if(_this.index==0){
                $(".d1").slideUp()
            }

        })
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 100%;
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
    /*border:1px solid black;*/
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
    /*border: 1px solid #dadd44;*/
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
        /*border: 1px solid black;*/
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
        /*border: 1px solid #212231;*/
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
    头部导航栏,有点击切换功能和鼠标进入显示与移除反之
    */
</style>