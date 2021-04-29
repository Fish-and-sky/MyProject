<template>
  <div class="active">
    <div class="active-top">
      <h1>新闻与活动</h1>
    </div>
    <div class="active-center">
      <div class="active-center-div" @click="toxwhdinside1" :style="{ height: ach}">
        <div class="active-div-s" :style="{ height: h }">
          <div class="theimg" :style="{ height: h }">
            <img :src="img2" alt="" :style="{ height: h }" />
          </div>
          <div class="theann">
            <span>展会活动</span>
          </div>
        </div>
        <div class="active-bottom">
          <div class="active-bottom-k">
            <div><h1>{{newsTitle}}</h1></div>
            <div><span>出版方：{{newsCreator}} </span><span style="margin-left:10px;line-height:20px;"> 时间：{{newsCreateTime}}</span></div>
            <div v-show="flag">{{newsContent | ellipsis(8)}}</div>
          </div>
        </div>
      </div>
      <div class="active-center-div" @click="toxwhdinside2" :style="{ height: ach}">
        <div class="active-div-s" :style="{ height: h }">
          <div class="theimg" :style="{ height: h }">
            <img :src="img3" alt="" :style="{ height: h }" />
          </div>
          <div class="theann">
            <span>展会活动</span>
          </div>
        </div>
        <div class="active-bottom">
          <div class="active-bottom-k">
            <div><h1>{{newsTitle2}}</h1></div>
            <div><span>出版方：{{newsCreator2}} </span><span style="margin-left:10px;line-height:20px;"> 时间：{{newsCreateTime2}}</span></div>
            <div v-show="flag">{{newsContent2 | ellipsis(8)}}</div>
          </div>
        </div>
      </div>
      <div class="active-rright" >
        <div class="active-center-divd" :style="{ height: ach}">
          <div style="margin-top: 30px"></div>
          <div class="active-div-right-k" v-for="(item, id) in activelist" :key="id" @click="toxwhdinside(item.newsId)">
            <div class="active-right-kk">
              <div>{{ item.newsContent | ellipsis(40)}}</div>
              <div>{{item.newsCreateTime}}</div>
            </div>
            <div class="xw"><span>新闻</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="active-bottomx">
    <div><ann :nr="nr2"></ann></div>
    <div style="width:40px"></div>
    <div @click="toxwhd"><ann :nr="nr1"></ann></div>
    </div>
  </div>
</template>
<script>
import ann from '../../smallzujian/ann.vue'
import axios from 'axios'
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
      nr1:'更多新闻',
      nr2:'更多活动',
      title: "昇腾助力全国AI大赛 产学研共促人工智能产业发展",
      activelist: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
      newsCreateTime:'',
      newsCreateTime2:'',
      newsContent:'',
      newsContent2:'',
      newsTitle:'',
      newsTitle2:'',
      newsCreator:'',
      newsCreator2:'',
      newsId:'',
      newsId2:'',
      newsThumbnail:'',
      newsThumbnail2:'',
    };
  },
  methods:{
    toxwhd(){
      this.$router.push("/xwhd");
    },
    toxwhdinside1(){
      sessionStorage.setItem('inside',this.newsId);
      this.$router.push({ name: 'xwhdinside', params: { xwhdinside: this.newsId }})
    },
    toxwhdinside2(){
      sessionStorage.setItem('inside',this.newsId2)
      this.$router.push({ name: 'xwhdinside', params: { xwhdinside: this.newsId2 }})
    },
    toxwhdinside(id){
      sessionStorage.setItem('inside',id)
      this.$router.push({ name: 'xwhdinside', params: { xwhdinside: id }})
    }
  },
  props:{
    h:{defauct:""},
    hh:{defauct:""},
    ach:{defauct:""},
    flag:{defauct:""}
  },
  components:{ann},
  mounted() {
    var _this = this;
    var acw = $(".active-div-s").innerWidth();
    // window.onresize = function () {
    //   var acww = $(".active-div-s").innerWidth();
    //   var ach = $(".active-center-div").innerHeight();
    //   // console.log(ach);
    //   _this.hh = ach + "px";
    //   var b = acww / acw;
    //   /*console.log(b)*/
    //   _this.h = parseInt(260 * b) + "px";
    //   // console.log(_this.h);
    // };
    $(".active-center-div").hover(
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
    //最左侧滚动新闻的动态jquery
    $(".active-div-right-k").hover(
      function () {
        // over
        $(this).find(".active-right-kk div").css({
          color: "rgb(150, 12, 12)",
        });
      },
      function () {
        $(this)
          .find(".active-right-kk div")
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
  axios.get('/portalNews/getAll',{
    params:{
      pageNum:0,
      pageSize:6
    }
  }).then(res=>{
    // console.log(res.data.data);
    _this.activelist=res.data.data;
    _this.newsCreateTime=res.data.data[0].newsCreateTime;
    _this.newsContent=res.data.data[0].newsContent;
    _this.newsTitle=res.data.data[0].newsTitle;
    _this.newsCreator=res.data.data[0].newsCreator;
    _this.newsId=res.data.data[0].newsId;
    _this.newsThumbnail=res.data.data[0].newsThumbnail;
    _this.newsCreateTime2=res.data.data[1].newsCreateTime;
    _this.newsContent2=res.data.data[1].newsContent;
    _this.newsTitle2=res.data.data[1].newsTitle;
    _this.newsCreator2=res.data.data[1].newsCreator;
    _this.newsId2=res.data.data[1].newsId;
    _this.newsThumbnail2=res.data.data[1].newsThumbnail;
  }).catch(err=>{
    console.log(err);
  })
  },
};
</script>
<style scoped>
.active {
  width: 84%;
  margin: 0 auto;
  /*border: 1px solid black;*/
}
.active-top {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.active-top h1 {
  font-size: 30px;
  font-weight: bold;
  color: rgb(88, 88, 88);
}
.active-center {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.active-center-div {
  position: relative;
  /*border: 1px solid black;*/
  width: 32%;
  background-color: #f1eeee;
}
.active-div-s {
  position: relative;
  width: 100%;
  height: 260px;
 /*border: 1px solid rgb(150, 12, 12);*/
  overflow: hidden;
}
.active-div-s .theimg {
  height: 260px;
  position: relative;
}
.active-div-s .theann {
  position: absolute;
  top: 0px;
  width: 80px;
  height: 30px;
  background-color: rgb(143, 142, 142);
  text-align: center;
}
.active-div-s .theann span {
  line-height: 30px;
  color: white;
  font-weight: bold;
}
.active-div-s div img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: fill;
}
/*.active-bottom {
  background-color: #e9e6e6;
}*/
.active-bottom-k {
  padding: 20px 20px 20px 20px;
}
.active-bottom-k div {
  margin-top: 30px;
  font-size: 16px;
  color: #5e5e5e;
}
.active-bottom-k div:nth-child(1) {
  margin-top: 0px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(26, 26, 26);
}
.active-div-right-k {
  padding: 15px;
}
.active-right-kk {
  border: 1px solid #dadada;
}
.active-right-kk div:nth-child(1) {
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
}
.active-right-kk div:nth-child(2) {
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
.active-center-divd {
  /*border: 1px solid black;*/
  overflow-y: auto;
}
.active-rright {
  position: relative;
  /*border: 1px solid black;*/
  width: 32%;
  background-color: #f1eeee;
}

.active-center-divd::-webkit-scrollbar {
  width: 4px;
  /*height: 4px;*/
}
.active-center-divd::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
  background: rgba(0, 0, 0, 0.2);
}
.active-center-divd::-webkit-scrollbar-track {
  /*-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);*/
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
.active-bottomx{
  display: flex;
  padding: 40px 0;
  justify-content: center;
}
</style>