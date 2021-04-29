<template>
  <div class="solu">
    <el-row class="solu-k">
      <el-col :xl="12" :lg="12" :md="24" :sm="24" class="solu-left">
        <el-col
          :xl="20"
          :lg="20"
          :md="20"
          :offset="distance"
          class="solu-title"
        >
          <h2>解决方案</h2>
          <div class="xian"></div>
          <p>我们专注于行业技术创新。</p>
          <p>
            灵活满足全球不同客户的差异化需求以及快速创新的追求。立讯拥有自主产品的核心技术和智慧财产权，并继续不断创新与改善。
          </p>
          <div class="solu-title-bottom">
            <div
              class="solu-tuzi"
              v-for="(item, id) in solulist"
              :key="id"
              @click="tosolution(item.title)"
              onmouseover="this.style.cursor='pointer';"
              onmouseout="this.style.cursor='normal'"
            >
              <div
                :class="{ 'solu-quan1': num == id }"
                class="solu-quan"
                @mouseover="over(id)"
                @mouseleave="leave"
              >
                <el-image
                  :src="item.soluimg"
                  :class="{ 'el-image1': num == id }"
                  class="el-image"
                ></el-image>
              </div>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </el-col>
      </el-col>
      <el-col
        :xl="12"
        :lg="12"
        :md="24"
        :sm="24"
        class="solu-right"
        :style="{ height: soluH + 40 + 'px' }"
      >
        <el-image
          :src="soluimg"
          :style="{ height: soluH + 40 + 'px' }"
          lazy
        ></el-image>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      soluimg:
        "https://www.luxshare-ict.com/Upload/image/20180116/20180116143648_8309.png",
      soluH: 400,
      solulist: [
        {
          soluimg: "https://www.luxshare-ict.com/images/fnic_01.png",
          title: "消费类解决方案",
        },
        {
          soluimg: "https://www.luxshare-ict.com/images/fnic_03.png",
          title: "通信及无线设备",
        },
        {
          soluimg: "https://www.luxshare-ict.com/images/fnic_04.png",
          title: "汽车行业解决方案",
        },
      ],
      num: null,
      distance: 3,
    };
  },
  methods: {
    over(id) {
      this.num = id;
    },
    leave() {
      this.num = null;
    },
    tosolution(val) {
      //页面跳转待定
      // this.$router.push({ name: "solution", params: { name: val } });
      // sessionStorage.setItem("API",);
    },
  },
  props: {
    screenWidth: { defauct: "" },
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
          if (that.screenWidth >= 1000) {
            const W = that.screenWidth / 2;
            that.soluH = W * 0.5;
            that.distance = 3;
          } else {
            that.soluH = that.screenWidth / 2;
            that.distance = 1;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      if (that.screenWidth >= 1000) {
        const W = that.screenWidth / 2;
        that.soluH = W * 0.5;
        that.distance = 3;
      } else {
        that.soluH = that.screenWidth / 2;
        that.distance = 1;
      }
    });
  },
};
</script>
<style scoped>
.solu {
  margin-top: 60px;
}
.solu h2 {
  font-size: 30px;
}
.solu p {
  font-size: 14px;
  line-height: 24px;
}
.solu-k {
  width: 100%;
  background-color: rgb(241, 239, 239);
  position: relative;
}
.solu-left {
  background-color: rgb(241, 239, 239);
}
.solu-title {
  padding: 4%;
}
.solu-title .xian {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 60px;
  height: 1px;
  background-color: seagreen;
}
.solu-title-bottom {
  display: flex;
  margin-top: 5%;
}
.solu-tuzi {
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 10%;
}
.solu-tuzi span {
  margin-top: 20%;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.solu-quan {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s;
  transform: scale(1);
}
.solu-quan1 {
  transition: all 0.5s;
  transform: scale(0.8);
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.solu-quan .el-image {
  transition: all 0.3s;
  transform: rotate(0deg);
}
.solu-quan1 .el-image1 {
  transition: all 0.3s;
  transform: rotate(360deg);
}
</style>