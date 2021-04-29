<template>
    <div class="header">
        <div class="header-top">
            <div class="header-dh">
                <div class="header-left">
                    <div>logo</div>
                </div>
                <div class="header-right">
                    <div class="header-right-left">
                    <div class="header-right-left-b" @click="shouye">
                    <p>首页</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b" @click="toproduct">
                    <p>产品中心</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b" @click="xinwen">
                    <p>新闻活动</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b" @click="torecruit">
                    <p>加入我们</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    <div class="header-right-left-b" @click="totheabout">
                    <p>关于我们</p>
                    <div class="header-right-color" v-show="flag"></div>
                    </div>
                    </div>
                    <div class="header-right-right">
                        <div>{{tubiao}}</div>
                        <div>图标2</div>
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
            tubiao:'图标1',
            one:'一',
            two:'二',
            flag:false,
            flag1:false,
            index:0
        }
    },
    methods:{
        shouye(){
            this.$router.push("/theindex");
        },
        xinwen(){
            this.$router.push("/xwhd");
        },
        torecruit(){
            this.$router.push("/recruit");
        },
        totheabout(){
            this.$router.push("/theabout")
        },
        toproduct(){
            this.$router.push("/product")
        }
    },
    mounted(){
        var _this=this;
        $(".header-right-left div").hover(function () {
                // over
                $(this).find("p").css({
                    color:'red'
                }).next().show();
            }, function () {
                // out
                $(this).find("p").css({
                    color:'black'
                }).next().hide();
            }
        );
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 100%;
    border-bottom:1px solid rgb(214, 213, 213);
}
.header-top{
    position: relative;
    width: 100%;
    height: 80px;
    background-color: white;
    display: flex;
    justify-content: center;
    z-index: 999;
    color: black;
}
.header-top2{
    width: 100%;
    height: 80px;
    background-color: white;
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
    background-color: white;
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
    background-color: white;
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
     .header-right-left  .header-right-left-b p{
        font-size: 16px;
        font-weight: 600;
     }
    .header-right-color{
        position: absolute;
        bottom: 0px;
        width: 80px;
        height: 3px;
        background-color: black;
        font-size: 20px;
        font-weight: 600;

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
    简单的头部导航栏,
    */
</style>