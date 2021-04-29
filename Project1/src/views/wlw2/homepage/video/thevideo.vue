<template>
  <div class="thevideo">
    <div class="thevideo-k">
      <div class="thevideo-top">
        <div><h2>丰富的实际场景精准定位，多端同步查看</h2></div>
        <div>
          <p>
            此效果展示为访客定位实际效果,有人体遮挡（右手拿胸牌定位卡贴于胸前，低于人体身高）
          </p>
          <p>
            支持服务端与手机端微信同步查看，自己即可查看自己实时位置，从会议室到办公区都能实现亚米级精度
          </p>
        </div>
      </div>
      <div class="thevideo-center">
        <video
          class="video1"
          src="http://www.ubitraq.com/source_media/position.mp4"
          controls
          preload="metadata"
          width="1060px"
          poster="http://www.ubitraq.com/images/video_wrap.png"
        ></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.thevideo {
  width: 100%;
  background-color: rgb(242, 250, 250);
}
.thevideo h2 {
  font-size: 30px;
  font-weight: bolder;
}
.thevideo p {
  font-size: 16px;
  line-height: 30px;
  color: rgb(71, 71, 71);
}
.thevideo-k {
  width: 1060px;
  height: 850px;
  margin: 0 auto;
  background-color: rgb(242, 250, 250);
}
.thevideo-top {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.thevideo-top div:nth-child(1) {
  margin-bottom: 40px;
}
.thevideo-top div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>