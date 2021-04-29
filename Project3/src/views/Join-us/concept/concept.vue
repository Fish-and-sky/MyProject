<template>
  <div class="concept">
    <div><header1></header1></div>
    <div class="concept-top">
      <el-row>
        <el-col :xl="20" :lg="19" :md="22" :sm="22" :xs="22">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item
              >
              <el-breadcrumb-item>{{$route.query.name}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col
          :xl="20"
          :lg="19"
          :md="22"
          :sm="22"
          :xs="22"
          class="concept-next"
        >
          <el-col
            :span="12"
            class="concept-next-left"
            :style="{ height: conceptH + 'px' }"
          >
            <el-image
              src="https://www.luxshare-ict.com/Upload/image/20180115/20180115162709_8384_743x502.jpg"
            ></el-image>
            <div class="concept-next-left-title">
              <h2>求贤原则</h2>
              <h3>寻找与本公司志同道合的人。</h3>
              <h3>致力于追求员工物质与精神的双重幸福度。</h3>
            </div>
          </el-col>
          <el-col
            :span="12"
            class="concept-next-right"
            :style="{ height: conceptH + 'px' }"
          >
            <el-image
              src="https://www.luxshare-ict.com/images/idea_02.jpg"
            ></el-image>
            <div class="concept-next-right-title">
              <h2>人才发展</h2>
              <p>
                我们坚信人才是企业最有价值的资源，人才发展是公司发展的关键。因此吸引人才、培养人才、留住人才、激励人才、成就人才是我们人力资源工作的理念。我们不断拓展新的业务领域，努力为员工提供更大的发展空间，凭借不断清晰并逐渐完善的晋级通道，良好的企业文化，为员工提供可持续发展的机会和空间。
              </p>
              <p>
                在公司持续成长的同时，我们关注员工的职业发展，努力为员工提供多种价值实现通道，帮助员工实现个人价值。
              </p>
            </div>
          </el-col>
        </el-col>
        <el-col
          :xl="20"
          :lg="19"
          :md="22"
          :sm="22"
          :xs="22"
          class="concept-bottom"
        >
          <el-col :span="18" class="concept-bottom-k">
            <div class="bottom-div" v-for="(item, id) in conceptlist" :key="id">
              <div class="bottom-div-circle">
                <el-image :src="item.img"></el-image>
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.titp }}</p>
            </div>
          </el-col>
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
      conceptH: 420,
      scrollb:0,
      a:0,
      heightlist:[],
      conceptlist: [
        {
          img: "https://www.luxshare-ict.com/images/idea_ic01.png",
          title: "培训系统",
          titp:
            "人才是企业最有价值的资源，人才是企业发展的关键。我们为员工提供充分且平等的培训和晋升机会，帮助员工成长和实现自身价值，让员工跟随公司一同成长。",
        },
        {
          img: "https://www.luxshare-ict.com/images/idea_ic02.png",
          title: "关爱员工",
          titp:
            "关爱员工作为公司的重要责任，融入到公司运营的方方面面，努力追求多样化的培训，提供相对舒适的环境，营造尊重、信任、快乐的工作氛围等，让员工能够快乐工作，快乐生活。",
        },
        {
          img: "https://www.luxshare-ict.com/images/idea_ic03.png",
          title: "薪酬福利",
          titp:
            "我们一贯重视为员工提供具有竞争力的薪酬，把员工福利保障放在首位，为员工创建健康安全的工作环境，并推行物质激励与非物质激励并行的员工激励政策，使奋斗者得到及时、合理的回报。我们采取绩效奖金制度、股权激励制度，员工个人成长与公司经营状况、员工所在部门的业绩以及其个人的绩效贡献密切相关。",
        },
        {
          img: "https://www.luxshare-ict.com/images/idea_ic04.png",
          title: "职业规划",
          titp:
            "我们不断坚持探索员工职业规划的方向和通道，钻研未来人才发展的需求，学习新的人力资源管理模式，最终公司与员工的双赢。",
        },
      ],
    };
  },
  watch: {
        scrollb:{
      handler(newVal){
        if(!this.timer){
          this.scrollb = newVal;
          this.timer = true;
          let that = this;
          setTimeout(function (){
            for(var i=0;i<that.heightlist.length;i++){
              if(that.a+that.scrollb>that.heightlist[i]){
                $(".bottom-div").eq(i).stop().animate({
                  'opacity':'1',
                  'margin-top':'0px'
                },400)
            }
            }
            that.timer = false;
          },400);
        }
      },
      deep:true,
      immediate: true
    },
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值
          if (that.screenWidth >= 1920) {
            that.conceptH = (that.screenWidth / 24) * 20 * 0.5 * 0.67;
          } else if (that.screenWidth >= 1200) {
            that.conceptH = (that.screenWidth / 24) * 19 * 0.5 * 0.67;
          } else {
            that.conceptH = (that.screenWidth / 24) * 22 * 0.5 * 0.67;
          }
          that.timer = false;
        }, 400);
      }
    },
    deep: true,
    immediate: true,
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      if (that.screenWidth >= 1920) {
            that.conceptH = (that.screenWidth / 24) * 20 * 0.5 * 0.67;
          } else if (that.screenWidth >= 1200) {
            that.conceptH = (that.screenWidth / 24) * 19 * 0.5 * 0.67;
          } else {
            that.conceptH = (that.screenWidth / 24) * 22 * 0.5 * 0.67;
          }
          $(".concept-next").find(".concept-next-left").stop().animate({
              'opacity': '1',
              'left':'0px',
            },800).next().stop().animate({
              'opacity': '1',
              'right':'0px',
            },800)
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
            for(var i=0;i<that.conceptlist.length;i++){
        var height=$(".bottom-div").eq(i).offset().top-40;
        that.heightlist.push(height);
      }
      $(document).ready(function(){
    var b,c;
    that.a = $(window).height();    //浏览器窗口高度
    $(window).scroll(function(){
        b = $(this).scrollTop();  //页面滚动的高度
        that.scrollb = b;
    });
});
    });
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.concept-top {
  margin-top: 20px;
}
.concept-top .el-row {
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
.concept-next{
  position: relative;
}
.concept-next-left {
  position: relative;
  left: -300px;
  opacity: 0;
  overflow: hidden;
  display: flex;
}
.concept-next-left-title {
  position: absolute;
  top: 36%;
  left: 10%;
  right: 5%;
  /*transform: translate(-50%,-50%);*/
}
.concept-next-left-title h2 {
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
}
.concept-next-left-title h3 {
  font-size: 24px;
  line-height: 30px;
  color: white;
}
.concept-next-right {
  position: relative;
  right: -300px;
  opacity: 0;
  overflow: hidden;
  display: flex;
}
.concept-next-right-title {
  position: absolute;
  overflow-y: scroll;
  height: 50%;
  top: 36%;
  left: 8%;
  right: 8%;
}
.concept-next-right-title::-webkit-scrollbar {
  width: 3px;
}
.concept-next-right-title::-webkit-scrollbar-track-piece {
  background-color: black;
}
.concept-next-right-title::-webkit-scrollbar-thumb {
  background-color: wheat;
}
.concept-next-right-title h2 {
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
}
.concept-next-right-title p {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 10px;
  color: white;
}
.concept-bottom {
  margin-top: 80px;
  display: flex;
  justify-content: center;
}
.bottom-div {
  opacity: 0;
  display: flex;
  align-items: center;
  padding: 30px 0px;
  margin-top: 40px;
}
.bottom-div-circle {
  min-width: 70px;
  min-height: 70px;
  border-radius: 50%;
  margin-right: 40px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(161, 207, 52);
}
.bottom-div h3 {
  min-width: 120px;
  font-size: 28px;
  margin-right: 40px;
}
.bottom-div p {
  max-width: 70%;
  font-size: 14px;
  line-height: 26px;
  color: rgb(126, 126, 126);
}
</style>