<template>
    <div class="Rotation">
        <div class="img">
        <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        </ul>
        </div>
        <div class="ann">
        <div>
        <div @click="zget" class="zget">左点击</div>
        <!--<div class="left-b"></div>-->
        </div>

        <div>
        <div @click="yget" class="yget">右点击</div>
        <!--<div class="right-b" @click="yget"></div>-->
        </div>
        </div>
        
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    data(){
        return{
            i:0
        }
    },
    methods:{
        yget(){
            this.get();
            clearInterval(this.timer);
            this.timer = setInterval(this.get, 8000);
            // setInterval(this.get, 4000);
        },
        zget(){
            this.gett();
            clearInterval(this.timer);
            this.timer = setInterval(this.get, 8000);
        },
        gett(){
            this.i--;
            if(this.i<0){
                this.i=3
                $(".img ul li").eq(this.i).fadeIn(1000).siblings().fadeOut(1000);
            }else if(this.i>=0&&this.i<=3){
                $(".img ul li").eq(this.i).fadeIn(1000).siblings().fadeOut(1000);
            }
        },
        get(){
            this.i++;
            if(this.i>3){
                // console.log(this.i)
                this.i=0;
                $(".img ul li").eq(this.i).fadeIn(1000).siblings().fadeOut(1000);
            }else if(this.i>=0&&this.i<=3){
                // console.log(this.i)
            $(".img ul li").eq(this.i).fadeIn(1000).siblings().fadeOut(1000);
            }
        }
    },
    mounted(){
        var _this=this;
        _this.timer = setInterval(this.get, 8000);
        $(".Rotation").hover(function () {
                // over
                $(".ann").show(function(){
                    clearInterval(_this.timer);
                });
                
            }, function () {
                $(".ann").hide();
                _this.timer = setInterval(_this.get, 8000);
                // out
            }
        );
    }
}
</script>
<style scoped>
.Rotation .img {
    position: relative;
    width: 100%;
    height: 500px;
    border: 1px solid black;
    margin: 0 auto;
}
/*.Rotation .img ul{
    width: 100%;
}*/
.Rotation .img ul li{
    position: absolute;
    width: 100%;
    height: 500px;
    /*float: left;*/
}
.Rotation .img ul li:nth-child(1){
    background-color: blue;
    /*left: -200px;*/
}
.Rotation .img ul li:nth-child(2){
    background-color: brown;
    display: none;
}
.Rotation .img ul li:nth-child(3){
    background-color: burlywood;
    display: none;
    /*left: 200px;*/
}
.Rotation .img ul li:nth-child(4){
    background-color: black;
    display: none;
    /*left: 200px;*/
}
.Rotation .ann{
    display: none;
    color: #0bc924;
}
.Rotation .ann div:nth-child(1){
    margin-top: 0px;
    margin-left: 0px;
}
.Rotation .ann div:nth-child(2){
    margin-right: 0px;
    margin-top: 0px;
}
.Rotation .left-b{
    position: absolute;
    opacity: 50%;
    top: -60px;
    left: 20px;
    width: 50px;
    height: 50px;
    background-color: green;
    border-radius: 50%;
}
.Rotation .right-b{
    position: absolute;
    opacity: 50%;
    top: -60px;
    right: -10px;
    width: 50px;
    height: 50px;
    background-color: green;
    border-radius: 50%;
}
.Rotation .zget{
    position: absolute;
    left: 20px;
    top: 320px;
}
.Rotation .yget{
    position: absolute;
    top: 320px;
    right: 20px;
}
/*图片轮播页面 左右点击按钮，图片淡入淡出*/
</style>