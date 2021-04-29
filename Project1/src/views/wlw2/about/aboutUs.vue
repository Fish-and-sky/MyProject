<template>
  <div :class="{ aboutus: proflag, aboutus1: !proflag }">
    <div><header1 @headertoabout="aboutus"></header1></div>
    <div>
      <protopimg
        :titleh="titleh"
        :titlep="titlep"
        :systemimg="systemimg"
      ></protopimg>
    </div>
    <div class="about">
      <div class="about-k">
        <div class="about-one" id="about-one">
          <div class="about-top">
            <h3>ABOUT US</h3>
            <div class="about-top-title">
              <el-image :src="aboutimg"></el-image>
              <div>
                <span>公司</span
                ><span style="color: rgb(214, 40, 40)">简介</span>
              </div>
            </div>
          </div>
          <div class="about-center">
            <div class="one-left">
              <el-image :src="aboutimg2"></el-image>
            </div>
            <div class="one-right">
              <p style="color: rgb(192, 47, 47)">
                公司名称： 北京全迹科技有限公司
              </p>
              <p style="color: rgb(192, 47, 47)">成立时间： 2016年4月</p>
              <p style="color: rgb(192, 47, 47)">中文品牌： 全迹 (全部轨迹)</p>
              <p style="color: rgb(192, 47, 47)">
                英文品牌： UbiTraq (全称： Ubiqutious Track,无处不在的追踪)
              </p>
              <br /><br /><br />
              <p>
                北京全迹科技有限公司成立于2016年4月，是国家级高新技术企业，获得多家知名风险投资机构投资。公司使用UWB（超宽带）技术实现厘米级高精度室
                内外定位。产品覆盖B端及C端众多应用场景，可用于工业、农业、商业、养老、科技、司法、建筑等众多领域。产品具备行业领先的性能成本优势，可快速
                规模化部署。
              </p>
              <br />
              <p>
                公司创始团队来自华为、威盛和清华，具备工业和学术界资深经验。
              </p>
              <br />
              <p>
                公司产品已在国内外数百家客户落地，各行业龙头客户包括：京东集团（亚洲一号仓库）、富士康（iPhone产线）、华为、中国联通、中国移动、博世、
                三一重工、徐州重工、比亚迪、滴滴出行、中国航天、中广核、中国电科、中国重汽、国家电网、中国中铁、百威啤酒、万科、清华大学、北京大学、NEC、
                Nokia、Intel、NIST（美国国家标准与技术研究院）等。
              </p>
              <br />
              <p>公司拥有多项业界领先的优势技术，具体主要包括：</p>
              <p>
                1、行业领先的性能成本优势（同样环境所需基站设备数量比竞品更少）
              </p>
              <p>2、抗强遮挡定位技术（抗复杂工业环境下严重金属遮挡）</p>
              <p>
                3、标签大容量且低功耗技术（单区域上千容量，丢包率小于1%，电池寿命长）
              </p>
              <p>4、高精度定位和滤波组合算法（稳定达到分米内精度）</p>
              <p>5、大规模组网的定位算法（适合复杂大规模场景）</p>
              <p>6、亚纳秒级无线时钟同步（省掉同步机和同步电缆）</p>
              <br />
              <p>
                高精度定位技术是把模拟世界中的万物进行数字化的一项底层技术。人与物品、线上物品和线下物品，都能通过高精度定位得到有效连接。我们相信：在未来，
                高精度室内定位服务会像GPS和云服务一样，成为每个人都触手可得的基础设施。我们致力成为该行业的领导者。
              </p>
            </div>
          </div>
        </div>
        <div class="about-two" id="about-two">
          <div class="about-top">
            <h3>QUALIFICATION OF US</h3>
            <div class="about-top-title">
              <el-image :src="aboutimg"></el-image>
              <div>
                <span>公司</span
                ><span style="color: rgb(214, 40, 40)">资质</span>
              </div>
            </div>
            <el-image
              :src="aboutimg3"
              style="margin-top: 30px; width: 260px"
            ></el-image>
          </div>
          <div class="two-center">
            <div><el-image :src="aboutimg4"></el-image></div>
            <div>
              <el-image
                src="http://www.ubitraq.com/images/about/liantong.png"
                style="width: 400px"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/standard.png"
                style="width: 400px"
              ></el-image>
            </div>
            <div>
              <el-image
                src="http://www.ubitraq.com/images/about/hNew.png"
                style="width: 400px"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/z-park.png"
                style="width: 400px"
              ></el-image>
            </div>
            <div>
              <div class="theleft">
                认证证书
                <div class="san"></div>
              </div>
              <el-image
                src="http://www.ubitraq.com/images/about/quality.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_one.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/fangbao.png"
              ></el-image>
            </div>
            <div>
              <div class="theleft">
                授权专利
                <div class="san"></div>
              </div>
              <el-image
                src="http://www.ubitraq.com/images/about/image_two_one.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_two_three.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_two_two.png"
              ></el-image>
            </div>
            <div>
              <div class="theleft">
                受理中专利
                <div class="san"></div>
              </div>
              <el-image
                src="http://www.ubitraq.com/images/about/image_three_one.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_three_two.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_three_three.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_three_four.png"
              ></el-image>
            </div>
            <div>
              <div class="theleft">
                软件著作权
                <div class="san"></div>
              </div>
              <el-image
                src="http://www.ubitraq.com/images/about/image_four_one.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_four_two.jpeg"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_four_three.png"
              ></el-image>
              <el-image
                src="http://www.ubitraq.com/images/about/image_four_four.png"
              ></el-image>
            </div>
          </div>
        </div>
        <div class="about-three" id="about-three">
          <div class="about-top">
            <h3>CONTACT US</h3>
            <div class="about-top-title">
              <el-image :src="aboutimg"></el-image>
              <div>
                <span>联系</span
                ><span style="color: rgb(214, 40, 40)">我们</span>
              </div>
            </div>
          </div>
          <div class="three-center">
            <baidu-map
              class="map"
              :center="location"
              :zoom="zoom"
              :scroll-wheel-zoom="true"
            >
              <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
              <bm-marker
                :position="location"
                :dragging="true"
                @click="infoWindowOpen"
              >
                <bm-info-window
                  :show="show"
                  @close="infoWindowClose"
                  @open="infoWindowOpen"
                  >宁波立捷电子</bm-info-window
                >
              </bm-marker>
            </baidu-map>
            <div class="three-bottom">
              <p>
                <span
                  ><img
                    src="http://www.ubitraq.com/images/about/home_about.png"
                    alt=""
                /></span>
                <span>地址： 北京市朝阳区酒仙桥中路10号星科大厦C座3001</span>
              </p>
              <p>
                <span
                  ><img
                    src="http://www.ubitraq.com/images/about/message_about.png"
                    alt=""
                /></span>
                <span>商务： bd@ubitraq.com</span>
              </p>
              <p>
                <span
                  ><img
                    src="http://www.ubitraq.com/images/about/message_about.png"
                    alt=""
                /></span>
                <span>应聘： hr@ubitraq.com</span>
              </p>
              <p>
                <span
                  ><img
                    src="http://www.ubitraq.com/images/about/message_about.png"
                    alt=""
                /></span>
                <span>其他： yxdu@ubitraq.com</span>
              </p>
              <p>
                <span
                  ><img
                    src="http://www.ubitraq.com/images/about/tel_about.png"
                    alt=""
                /></span>
                <span>商务电话/微信：13811940257 (商务)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header1 from "../../wlw2/header2/header.vue";
import protopimg from "../../wlw2/product/protopimg/protopimg.vue";
import bottom from "../../wlw2/bottom/bottom.vue";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  data() {
    return {
      proflag: true,
      screenWidth: 0,
      titleh: "ABOUT US / 关于我们",
      titlep:
        "我们为您提供更精准的室内定位服务， 让您工作和生活更加安全、高效、便携！",
      systemimg: "http://www.ubitraq.com/images/about/banner_about.png",
      aboutimg: "http://www.ubitraq.com/images/line.png",
      aboutimg2: "http://www.ubitraq.com/images/about/info_rect.png",
      aboutimg3: "http://www.ubitraq.com/images/about/firaconsortium.svg",
      aboutimg4: "http://www.ubitraq.com/images/about/jingzhun.jpeg",
      location: {
        lng: 121.643374,
        lat: 29.88032,
      },
      zoom: 13,
      show: true,
      target: 0,
      pageid: null,
    };
  },
  created() {
    var id = this.$route.params.aboutus;
  },
  methods: {
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
    aboutus(id) {
      // console.log(id);
      sessionStorage.setItem('aboutus',id);
      //页面滚动有问题
      if(id==0){
        this.$el.querySelector('.about-one').scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
      }else if(id==1){
        this.$el.querySelector('.about-two').scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
      }else if(id==2){
        this.$el.querySelector('.about-three').scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start", // 上边框与视窗顶部平齐。默认值
      });
      }
    },
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    if (this.screenWidth <= 1300 && this.screenWidth >= 600) {
      this.proflag = false;
    } else if (this.screenWidth > 1300) {
      this.proflag = true;
    } else if (this.screenWidth <= 600) {
      this.proflag = true;
    }
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
    };
    if (this.screenWidth <= 1300 && this.screenWidth >= 600) {
      this.proflag = false;
    } else if (this.screenWidth > 1300) {
      this.proflag = true;
    } else if (this.screenWidth <= 600) {
      this.proflag = true;
    }
    this.pageid = sessionStorage.getItem('aboutus');
    if (this.pageid == 0) {
      this.$nextTick(() => {
        setTimeout(() => {
          //获取指定的div盒
          let targetbox = document.getElementById("about-one");
          //获取这个div盒的高度位置
          this.target = targetbox.offsetTop;
          //将滚动条定位到这个高度位置
          document.documentElement.scrollTop = this.target;
        });
      });
    } else if (this.pageid == 1) {
      this.$nextTick(() => {
        setTimeout(() => {
          //获取指定的div盒
          let targetbox = document.getElementById("about-two");
          //获取这个div盒的高度位置
          this.target = targetbox.offsetTop;
          //将滚动条定位到这个高度位置
          document.documentElement.scrollTop = this.target;
        });
      });
    } else if (this.pageid == 2) {
      this.$nextTick(() => {
        setTimeout(() => {
          //获取指定的div盒
          let targetbox = document.getElementById("about-three");
          //获取这个div盒的高度位置
          this.target = targetbox.offsetTop;
          //将滚动条定位到这个高度位置
          document.documentElement.scrollTop = this.target;
        });
      });
    }
  },
  components: { header1, protopimg, bottom, BaiduMap },
};
</script>
<style scoped>
.aboutus {
  min-width: 1300px;
}
.aboutus1 {
  min-width: 1100px;
}
.about {
  width: 100%;
  margin-top: 80px;
}
.about-k {
  width: 1060px;
  margin: 0 auto;
}
.about-top {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1060px;
  min-height: 100px;
}
.about h3 {
  font-size: 20px;
}
.about-top-title {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 1060px;
}
.about-top-title .el-image {
  top: 0px;
}
.about-top-title div {
  position: absolute;
  text-align: center;
}
.about-top-title div span {
  font-size: 30px;
  font-weight: bolder;
}
.about-one {
  width: 1060px;
  margin-bottom: 100px;
}
.about-center {
  display: flex;
  justify-content: space-between;
  width: 1060px;
  margin-top: 50px;
}
.one-left {
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.one-right {
  width: 740px;
}
.one-right p {
  font-size: 16px;
  line-height: 30px;
}
.about-two{
  width: 1060px;
  height: 100%;
}
.two-center {
  width: 1060px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.two-center div {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
}
.two-center .el-image {
  width: 250px;
  margin-right: 10px;
}
.theleft {
  position: relative;
  width: 30px;
  font-size: 18px;
  text-align: center;
  background-color: rgb(221, 41, 41);
  padding-top: 10px;
  padding-bottom: 30px;
  color: white;
  line-height: 30px;
  border-radius: 10px;
  font-weight: bold;
  margin-right: 30px;
}
.san {
  position: absolute;
  bottom: 10px;
  left: 13px;
  width: 0;
  height: 0;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent white;
}
.about-three {
  margin-top: 40px;
  width: 1060px;
}
.three-center {
  margin-top: 40px;
  width: 1060px;
  margin-bottom: 80px;
}
.three-center .map {
  width: 100%;
  height: 400px;
  border-top: 3px solid rgb(74, 86, 87);
  border-left: 3px solid rgb(74, 86, 87);
}
.three-bottom {
  margin-top: 30px;
}
.three-bottom span {
  font-size: 18px;
}
.three-bottom p {
  margin-top: 20px;
}
.three-bottom span:nth-child(1) {
  margin-right: 20px;
}
</style>