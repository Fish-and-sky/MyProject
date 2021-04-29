<template>
  <div class="thevideo">
    <div class="home">
      <div>
        <video
          class="video1"
          src="http://vanjikeji.oss-cn-beijing.aliyuncs.com/wanjikeji.mp4"
          controls
          preload="metadata"
          :width="wth"
          poster="http://wanji.net.cn/uploadfile/2020/0821/20200821121729935.png"
        ></video>
      </div>

      <div class="video-title">
        <div class="tit1">科技之力</div>
        <div class="tit2"></div>
        <div>{{ title2 }}</div>
        <div class="tt">
          <div class="tit">READ MORE</div>
          <div class="dynamic"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wth: 800,
      title2:
        "打开，链接离开街坊邻居了浪费精“力打开链接离开街”坊邻居了浪费，精力打开链接离开！街坊邻居了浪（费精力打开链接离开街）坊邻居了浪费精力打开链接离开街坊邻居了浪费精力。",
    };
  },
  mounted() {
    var _this = this;
    /*实时监听浏览器的宽度(theW)和高度(theY)   1210的时候变化*/
    var theW = $(window).width();
    if (theW >= 1210) {
        _this.wth = theW / 2;
        $(".home").css({
          "flex-direction": "row",
        });
      } else if (theW <= 1210) {
        // console.log("小于1210")
        _this.wth = theW / 1.4;
        $(".home").css({
          "flex-direction": "column",
        });
      }
    window.onresize = function () {
      theW = $(window).width();
      var theY = $(window).height();
      // console.log("X:"+theW);
      /*console.log("Y:"+theY);*/
      if (theW >= 1210) {
        _this.wth = theW / 2;
        $(".home").css({
          "flex-direction": "row",
        });
      } else if (theW <= 1210) {
        // console.log("小于1210")
        _this.wth = theW / 1.4;
        $(".home").css({
          "flex-direction": "column",
        });
      }
    };
    // console.log($(window).width());
    // console.log(_this.wth);
    $(".tt").mouseenter(function () {
      $(this)
        .find(".dynamic")
        .stop()
        .animate(
          {
            width: "200px",
          },
          1000,
          function () {
            $(this).prev().css({
                // color: "white"
                });
          }
        );
    });
    $(".tt").mouseleave(function () {
      $(this)
        .find(".dynamic")
        .stop()
        .animate(
          {
            width: "0px",
          },
          1000
        )
        .prev()
        .css({
          color: "black",
        });
    });
  },
};
</script>
<style scoped>
.thevideo {
  padding-top: 40px;
  width: 84%;
  margin: 0 auto;
  /*border: 1px solid black;*/
}
.home {
  display: flex;
  padding: 20px;
  padding-left: 0px;
  align-items: center;
}
.video-title {
  margin-left: 40px;
  margin-top: 10px;
}
.video-title .tit1 {
  font-size: 50px;
  font-weight: bolder;
  color: rgb(41, 41, 41);
}
.video-title .tit2 {
  width: 40px;
  height: 1px;
  background-color: #969595;
  margin: 40px 0px 30px 0px;
}
.video-title div:nth-child(3) {
  font-size: 20px;
  text-indent: 2em;
  line-height: 40px;
  color: #474747;
  font-weight: 600;
}
.video-title div:nth-child(4) {
  margin-top: 50px;
  width: 200px;
  height: 50px;
  border: 2px solid burlywood;
  position: relative;
  /*background-color: burlywood;*/
}
.tit {
  position: relative;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  z-index: 999;
}
.dynamic {
  position: absolute;
  top: 0px;
  width: 0px;
  height: 50px;
  background-color: burlywood;
}
.video1 {
  /*width: 600;*/
  object-fit: cover;
}
/*
  npm install --save qrcode
npm uninstall qrcode

npm i swiper
cnpm install vue-video-player -S
cnpm install 'video.js' -S
  */
</style>