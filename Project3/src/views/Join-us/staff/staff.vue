<template>
  <div class="staff">
    <div><header1></header1></div>
    <div class="staff-top">
      <el-row>
        <el-col :xl="20" :span="19">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item
              >
              <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :xl="19" :lg="19" :md="23" :sm="23" :xs="23" class="staff-next">
          <el-col class="staff-next-top">
            <div
              class="top-an"
              v-for="(item, id) in stafflist1"
              :key="id"
              :class="{ 'top-an1': num == id }"
              @click="num = id"
            >
              <span>{{ item.span }}</span>
            </div>
          </el-col>
          <el-col class="staff-next-bottom">
            <div
              class="next-bottom-title"
              :style="{ height: staffH + 'px' }"
              v-for="(item, id) in 6"
              :key="id"
              @mouseover="theover(id)"
              @mouseleave="theleave"
            >
              <div class="xian"></div>
              <h2 :class="{ otherh2: numm == id }">公园一角</h2>
              <div class="bottom-title-img">
                <el-image
                  src="https://www.luxshare-ict.com/Upload/image/20181203/20181203140113_9734_1040x586.jpg"
                  lazy
                  :class="{ 'el-image1': numm == id }"
                ></el-image>
              </div>
            </div>
          </el-col>
        </el-col>
        <el-col class="staff-last" :span="24">
          <el-pagination background layout="prev, pager, next" :total="20">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../../header/header1.vue";
import bottom from "../../bottom/bottom.vue";
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      stafflist1: [{ span: "工作" }, { span: "生活" }, { span: "活动" }],
      num: 0,
      numm: null,
      staffH: 310,
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
          that.staffH = (that.screenWidth / 24) * 19 * 0.31 * 0.8;
          that.timer = false;
        }, 400);
      }
    },
    deep: true,
    immediate: true,
  },
  methods: {
    theover(id) {
      this.numm = id;
    },
    theleave() {
      this.numm = null;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      that.staffH = (that.screenWidth / 24) * 19 * 0.31 * 0.8;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    });
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.staff-top {
  margin-top: 20px;
}
.staff-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pagehead {
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.staff-next {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.staff-next-top {
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-an {
  width: 150px;
  height: 36px;
  border: 1px solid rgb(141, 141, 141);
  text-align: center;
  line-height: 36px;
  font-size: 16px;
}
.top-an1 {
  width: 150px;
  height: 36px;
  border: 1px solid #b1cc1d;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
  background-color: #b1cc1d;
}
.staff-next-bottom {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
}
.next-bottom-title {
  width: 32%;
  margin-right: 2%;
  margin-bottom: 30px;
}
.next-bottom-title:nth-child(3n+3) {
  width: 32%;
  margin-right: 0px;
  margin-bottom: 30px;
}
.next-bottom-title .xian {
  height: 3px;
  background-color: #b1cc1d;
}
.next-bottom-title h2 {
  font-size: 24px;
  margin: 8% 0px;
}
.next-bottom-title .otherh2 {
  color: #b1cc1d;
}
.next-bottom-title .bottom-title-img {
  overflow: hidden;
  height: 64%;
}
.bottom-title-img .el-image {
  width: 100%;
  transition: all 0.6s;
  transform: scale(1);
}
.bottom-title-img .el-image1 {
  transition: all 0.6s;
  transform: scale(1.1);
}
.staff-last{
  display: flex;
  justify-content: center;
}
.staff-last>>>.el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;   
  }
.staff-last>>>.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: rgb(146, 145, 145); 
    color: #fff;
  }
</style>