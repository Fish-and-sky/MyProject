<template>
  <div class="newassembly2">
    <div class="newassembly2-center">
        <div class="newassembly2-rright" :style="{ height: hh}">
        <div class="newassembly2-center-divd" :style="{ height: hh }">
          <div style="margin-top: 30px"></div>
          <div class="newassembly2-div-right-k" v-for="(item, id) in list" :key="id" @click="toxwhdinside(id)">
            <div class="newassembly2-right-kk">
              <div>{{ title }}</div>
              <div>2020年11月12日</div>
            </div>
            <div class="xw"><span>新闻</span></div>
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
      nr1:'更多新闻',
      nr2:'更多活动',
      title: "昇腾助力全国AI大赛 产学研共促人工智能产业发展",
      list: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      hh:'450px'
    };
  },
  methods: {},
  mounted(){
      $(".newassembly2-div-right-k").hover(
      function () {
        // over
        $(this).find(".newassembly2-right-kk div").css({
          color: "rgb(150, 12, 12)",
        });
      },
      function () {
        $(this)
          .find(".newassembly2-right-kk div")
          .eq(0)
          .css({
            color: "black",
          })
          .next()
          .css({
            color: "#5e5e5e",
          });
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
.newassembly2-div-right-k {
  padding: 15px;
}
.newassembly2-right-kk {
  border: 1px solid #dadada;
}
.newassembly2-right-kk div:nth-child(1) {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.newassembly2-right-kk div:nth-child(2) {
  font-size: 16px;
  margin-top: 10px;
  color: #5e5e5e;
}
.xw {
  position: absolute;
  width: 60px;
  height: 30px;
  top: 0px;
  left: 0px;
  background-color: rgb(177, 177, 177);
  text-align: center;
}
.xw span {
  line-height: 30px;
}
.newassembly2-center-divd {
  /*border: 1px solid black;*/
  overflow-y: auto;
}
.newassembly2-rright {
  position: relative;
  /*border: 1px solid black;*/
  width: 400px;
  background-color: #f1eeee;
}

.newassembly2-center-divd::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.newassembly2-center-divd::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
  background: rgba(0, 0, 0, 0.2);
}
.newassembly2-center-divd::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.newassembly2-bottomx{
  display: flex;
  padding: 40px 0;
  justify-content: center;
}
</style>