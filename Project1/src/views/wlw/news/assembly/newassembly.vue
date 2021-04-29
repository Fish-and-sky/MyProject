<template>
  <div class="newassembly">
    <div class="newassembly-center">
        <div class="newassembly-center-div">
        <div class="newassembly-div-s" :style="{ height: h }">
          <div class="theimg" :style="{ height: h }">
            <img :src="img2" alt="" :style="{ height: h }" />
          </div>
          <div class="theann">
            <span>展会活动</span>
          </div>
        </div>
        <div class="newassembly-bottom">
          <div class="newassembly-bottom-k">
            <div><h1>上海城市峰会2020</h1></div>
            <div>地点：中国上海 时间：2020年12月15日</div>
            <div>智慧上海·进而有为</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img1:
        "https://www-file.huawei.com/-/media/corp2020/home/nav/bciw-cn.jpg?la=zh",
      img2:
        "https://www-file.huawei.com/-/media/corp2020/home/event/1/citysummit_shanghai.jpg",
      img3:
        "https://www-file.huawei.com/-/media/corp2020/home/event/1/event-bws-adn-cn.jpg",
      img4: "",
      nr1: "更多新闻",
      nr2:'更多活动',
      h:'260px'
    };
  },
  methods: {},
  mounted(){
      $(".newassembly-center-div").hover(
      function () {
        // over
        $(this).find(".theimg img").stop().animate(
          {
            top: "-5%",
            left: "-5%",
            width: "110%",
            height: "110%",
          },
          400
        );
      },
      function () {
        $(this).find(".theimg img").stop().animate(
          {
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          },
          400
        );
      }
    );
  },
};
</script>
<style scoped>
.newassembly-center {
  display: flex;
  justify-content: space-between;
}
.newassembly-center-div {
  position: relative;
  /*border: 1px solid black;*/
  width: 400px;
  background-color: #f1eeee;
}
.newassembly-div-s {
  position: relative;
  width: 100%;
  height: 260px;
 /*border: 1px solid rgb(150, 12, 12);*/
  overflow: hidden;
}
.newassembly-div-s .theimg {
  height: 260px;
  position: relative;
}
.newassembly-div-s .theann {
  position: absolute;
  top: 0px;
  width: 80px;
  height: 30px;
  background-color: rgb(143, 142, 142);
  text-align: center;
}
.newassembly-div-s .theann span {
  line-height: 30px;
  color: white;
  font-weight: bold;
}
.newassembly-div-s div img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
/*.newassembly-bottom {
  background-color: #e9e6e6;
}*/
.newassembly-bottom-k {
  padding: 20px 20px 60px 20px;
}
.newassembly-bottom-k div {
  margin-top: 30px;
  font-size: 16px;
  color: #5e5e5e;
}
.newassembly-bottom-k div:nth-child(1) {
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
}
</style>