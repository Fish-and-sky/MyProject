<template>
  <div class="prointroduce">
    <div class="prointroduce-k">
      <div class="intro-h"><h3>基站</h3></div>
      <div class="intro-pro-k">
        <div
          class="intro-pro"
          v-for="(item, index) of 5"
          :key="index"
          @click="proshow(index)"
        >
          <el-image :src="introimg"></el-image>
        </div>
      </div>
    </div>
    <transition name="intr">
      <div v-show="intrflag">
        <div class="pro-k" @click="intrflag = false"></div>
        <div class="pro-intr" ref="intr">
          <div class="pro-intr-left">
            <el-image :src="introimg1"></el-image>
          </div>
          <div class="pro-intr-right">
            <div class="intr-right-title" v-html="provalue"></div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import "../../../../assets/css/theprostyle.css"
export default {
  data() {
    return {
      introimg: "http://www.ubitraq.com/images/hard/a1.png?v=1",
      introimg1: "http://www.ubitraq.com/images/hard/aa.png?v=1",
      provalue: "<h3>放弃破解</h3><p>啊hi送了发货安抚就阿婆i防破解破破解哦</p>",
      intrflag: false,
    };
  },
  methods: {
    proshow(id) {
      //接口
      this.intrflag = !this.intrflag;
    },
  },
};
</script>
<style scoped>
.prointroduce {
  width: 100%;
  position: relative;
  margin-top: 80px;
}
.prointroduce-k {
  width: 1060px;
  margin: 0 auto;
}
.prointroduce .intro-h {
  border-left: 5px solid rgb(211, 35, 35);
  height: 40px;
}
.prointroduce .intro-h h3 {
  font-size: 20px;
  line-height: 40px;
  margin-left: 20px;
}
.intro-pro-k {
  margin-top: 40px;
  width: 1060px;
  display: flex;
  flex-wrap: wrap;
}
.intro-pro {
  width: 310px;
  height: 400px;
  display: flex;
  align-items: center;
  background-color: rgb(238, 255, 254);
  margin-right: 40px;
  margin-bottom: 40px;
}
.intro-pro .el-image{
  height: 400px;
}
.pro-intr {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 450px;
  background-color: white;
  display: flex;
  overflow: hidden;
  z-index: 1000;
}
.pro-intr-left {
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.pro-intr-right {
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: center;
}
.intr-right-title {
  width: 300px;
  overflow: hidden;
}
.pro-k {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9;
}
.intr-enter,
.intr-leave-to {
  opacity: 0;
}
.intr-enter-to,
.intr-leave {
  opacity: 1;
}
.intr-enter-active,
.intr-leave-active {
  transition: all 1s;
}
</style>