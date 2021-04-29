<template>
  <div class="xinwen">
  <div class="active-center-div" :style="{width:xinw+'px',height:xinh+'px'}">
        <div class="active-div-s" :style="{ height: h+'px',width:xinw+'px'}">
          <div class="theimg" :style="{ height: h+'px',width:xinw+'px'}">
            <img :src="img2" alt="" :style="{ height: h+'px',width:xinw+'px'}" />
          </div>
          <div class="theann" :style="{'backgroundColor':color}">
            <span>{{t}}</span>
          </div>
        </div>
        <div class="active-bottom">
          <div class="active-bottom-k">
            <div><h1>{{xinti}}</h1></div>
            <div class="xinwen-zi"><p>{{xinti2 | ellipsis(62)}}</p></div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
        t:'',
        color:'',
        }
    },
    props:{
        img2:{defauct:''},
        xinti:{defauct:''},
        xinti2:{defauct:''},
        h:{defauct:''},
        xinw:{defauct:''},
        xinh:{defauct:''},
    },
    mounted(){
      var _this=this;
        $(".active-center-div").hover(
      function () {
        // over
        $(this).find(".theimg img").stop().animate(
          {
            top: "-10px",
            left: "-10px",
            width: _this.xinw+20,
            height: _this.h+20,
          },
          400
        );
      },
      function () {
        $(this).find(".theimg img").stop().animate(
          {
            top: "0",
            left: "0",
            width: _this.xinw,
            height: _this.h,
          },
          400
        );
      }
    );
    }
}
</script>
<style scoped>
.active-center-div {
  position: relative;
  background-color: #f1eeee;
  /*overflow: hidden;*/
}
.active-div-s {
  position: relative;
  width: 100%;
 /*border: 1px solid rgb(150, 12, 12);*/
  overflow: hidden;
}
.active-div-s .theimg {
  width: 380px;
  height: 260px;
  position: relative;
}
.active-div-s .theann {
  position: absolute;
  top: 0px;
  width: 80px;
  height: 30px;
  /*background-color: rgb(143, 142, 142);*/
  text-align: center;
}
.active-div-s .theann span {
  line-height: 30px;
  color: white;
  font-weight: bold;
}
.active-div-s div img {
  position: relative;
  width: 380px;
  height: 100%;
  object-fit: fill;
}
.active-bottom-k {
  padding: 20px 20px 30px 20px;
}
.active-bottom-k div {
  font-size: 14px;
  color: #5e5e5e;
}
.active-bottom-k div h1{
font-size: 14px;
line-height: 30px;
}
.active-bottom-k div:nth-child(1) {
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
}
.xinwen-zi{
  margin-top: 10px;
}
.active-bottom-k div h1{
  font-size: 20px;
  font-weight: bolder;
}
.xinwen-zi p{
  font-size: 14px;
  line-height: 24px;
}
</style>