<template>
  <div class="solution-img">
    <el-row>
      <el-col :xl="20" :lg="20" :md="23" :sm="23" :xs="22" class="solution-k">
        <el-col
          :span="12"
          class="solution-k-left"
          :style="{ height: soluimgH + 'px' }"
        >
          <div class="k-left-title">
            <span>应用</span>
            <h2 @click="tosoludetails(soluimglist.solutionId)" onmouseover="this.style.cursor='pointer';" 
            onmouseout="this.style.cursor='normal'">{{soluimglist.solutionName}}</h2>
            <p>{{soluimglist.solutionTitle}}</p>
          </div>
        </el-col>
        <el-col
          :span="12"
          class="solution-k-right"
          :style="{ height: soluimgH + 'px' }"
        >
          <el-image
            :src="soluimglist.solutionImg"
            lazy
            style="width: 100%"
            :class="{ 'el-image1': num == 1 }"
            @mouseover="over"
            @mouseleave="leave"
          ></el-image>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      //   screenWidth: document.body.clientWidth,
      soluimgH: 350,
      soluimg1:
        "https://www.luxshare-ict.com/Upload/image/20190107/20190107181539_5847.png",
      num: null,
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          if (that.screenWidth <= 1000) {
            that.soluimgH = (that.screenWidth / 24) * 7;
          } else {
            that.soluimgH = 350;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted(){
    this.$nextTick(()=>{
      const that =this;
      if (that.screenWidth <= 1000) {
            that.soluimgH = (that.screenWidth / 24) * 7;
          } else {
            that.soluimgH = 350;
          }
    })
  },
  props: {
    screenWidth: { defauct: "" },
    soluimglist: { default: "" },
  },
  methods: {
    over() {
      this.num = 1;
    },
    leave() {
      this.num = null;
    },
    tosoludetails(id) {
      sessionStorage.setItem('solutiondetailid',id);
      this.$router.push({ name: "solutiondetails"});
    },
  },
};
</script>
<style scoped>
.solution-img {
  margin-top: 40px;
}
.solution-img span {
  font-size: 16px;
  color: rgb(34, 34, 231);
}
.solution-img h2 {
  font-size: 20px;
  margin: 20px 0px;
  color: rgb(145, 189, 45);
}
.solution-img p {
  font-size: 16px;
  line-height: 20px;
}
.solution-img .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.solution-k-left {
  position: relative;
  background-color: rgb(247, 245, 245);
  display: flex;
  justify-content: center;
  align-items: center;
}
.k-left-title {
  position: relative;
  /*opacity: 0;*/
  padding-bottom: 10%;
  width: 80%;
}
.k-left-title p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.solution-k-right {
  display: flex;
  overflow: hidden;
}
.solution-k-right .el-image {
  width: 100%;
  transition: all 0.6s;
  transform: scale(1);
}
.solution-k-right .el-image1 {
  transition: all 0.6s;
  transform: scale(1.1);
}
</style>