<template>
  <div class="themap">
  <el-row>
  <el-col :span="20" :offset="2" class="themap-top">
  <h1>企业地址</h1>
  <div class="xian"></div>
  </el-col>
  <el-col :span="20" :offset="2">
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
                  @open="infoWindowOpen">
                  <p>宁波同讯:</p>
                  <p style="margin-top:20px">地址： 宁波市高新区智慧园新材料科技大厦A座4010</p>
                  </bm-info-window
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
                <span>地址： 宁波市高新区智慧园新材料科技大厦A座4008</span>
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
  </el-col>
  </el-row>
  </div>
</template>
<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  data(){
    return{
      location: {
        lng: 121.643374,
        lat: 29.88032,
      },
      zoom: 13,
      show: true,
    }
  },
  methods:{
    infoWindowClose() {
      this.show = false;
    },
    infoWindowOpen() {
      this.show = true;
    },
  },
  components:{BaiduMap}
}
</script>
<style scoped>
.themap h1 {
  font-size: 30px;
}
.themap .xian {
  width: 60px;
  height: 1px;
  background-color: rgb(132, 218, 47);
  margin: 30px 0px 20px 0px;
}
.themap-top{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.three-center {
  margin-top: 40px;
  margin-bottom: 80px;
}
.three-center .map {
  width: 100%;
  height: 400px;
  border-top: 2px solid rgb(74, 86, 87);
  border-left: 2px solid rgb(74, 86, 87);
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