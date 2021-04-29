<template>
  <div class="sustainable">
    <div><header1></header1></div>
    <div class="sustainable-top">
      <el-row>
        <el-col :span="20" class="sustainable-top-img">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{
                $route.query.funame
              }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.query.name }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :span="20" class="sustainable-next" v-if="sustainablelist1.length>0">
          <el-col :span="14" class="next-left" :style="{ height: susH + 'px' }">
            <el-image :src="sustainablelist1[0].newsThumbnail" lazy></el-image>
          </el-col>
          <el-col
            :span="12"
            class="next-right"
            :style="{ height: susH * 0.8 + 'px' }"
          >
            <div class="next-right-title">
              <h2>{{sustainablelist1[0].newsTitle}}</h2>
              <p>
                {{sustainablelist1[0].newsTitle2}}
              </p>
            </div>
          </el-col>
        </el-col>
        <el-col :span="20" class="sustainable-list">
          <el-col
            :span="24"
            v-for="(item, id) in sustainablelist"
            :key="id"
            class="list-div"
          >
            <el-col
              :span="4"
              class="list-left"
              :style="{ height: (susH / 7) * 2.5 + 'px' }"
            >
              <el-image :src="item.newsThumbnail" lazy></el-image>
            </el-col>
            <el-col :span="18" :offset="1" class="list-right">
              <div class="list-right-title" :style="{ height: '136px' }">
                <span>{{ item.newsUpdateTime }}</span>
                <h2 @click="tonewsdetails(item.newsContent)" onmouseover="this.style.cursor='pointer';" 
                onmouseout="this.style.cursor='normal'">{{ item.newsTitle }}</h2>
                <p>{{ item.newsTitle2 }}</p>
              </div>
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="20" class="sustainable-page">
        <el-pagination :background='true' layout="prev, pager, next" 
        :total="total" :page-size="pagesize" 
        :current-page="currentpage" @current-change="getagain">
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
import $ from "jquery";
import axios from "axios"
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      currentpage:1,
      total:2,
      pagesize:8,
      pagenum:0,
      api:'',
      id:1,
      susH: 384,
      sustainablelist1:[],
      sustainablelist: [],
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
          if (that.screenWidth >= 1000) {
            that.susH = (((that.screenWidth / 24) * 20) / 24) * 14 * 0.5;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  methods:{
    getagain(val){
      axios.get(this.api,{params:{
        id:this.id,
      pageNum:val-1,
      pageSize:this.pagesize
      }}).then(res=>{
        this.sustainablelist=res.data.content;
      }).catch(err=>{
        console.log(err)
      })
    },
    tonewsdetails(val){
      sessionStorage.setItem('newsdetails',val);
      this.$router.push('/newdetails');
    }
  },
  mounted() {
    this.api=sessionStorage.getItem('API').split(',')[0];
    this.id=sessionStorage.getItem('API').split(',')[1];
    axios.get(this.api,{params:{
      id:this.id,
      pageNum:this.pagenum,
      pageSize:this.pagesize
    }}).then(res=>{
      this.sustainablelist=res.data.content;
      console.log(res.data.content)
      this.sustainablelist1=res.data.content;
      this.total=res.data.totalElements;
      setTimeout(function (){
        $(".next-left .el-image")
        .stop()
        .animate(
          {
            left: "0px",
            opacity: "1",
          },
          1000
        )
        .parent()
        .next()
        .stop()
        .animate(
          {
            top: "10%",
            opacity: "0.9",
          },
          1000
        );
      },400)
    }).catch(err=>{
      console.log(err);
    })
    this.$nextTick(() => {
      const that = this;
      that.susH = (((that.screenWidth / 24) * 20) / 24) * 14 * 0.5;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
        $(".next-left .el-image")
        .stop()
        .animate(
          {
            left: "0px",
            opacity: "1",
          },
          1000
        )
        .parent()
        .next()
        .stop()
        .animate(
          {
            top: "10%",
            opacity: "0.9",
          },
          1000
        );
    });
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.sustainable-top {
  margin-top: 20px;
}
.sustainable-top .el-row {
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
.sustainable-next {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.next-left {
  display: flex;
  overflow: hidden;
}
.next-left .el-image {
  left: -300px;
  width: 100%;
  opacity: 0;
}
.next-right {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 500px;
  right: 0px;
  background-color: rgb(145, 189, 45);
  opacity: 0;
  padding: 40px;
}
.next-right-title {
  max-height: 100%;
  overflow: hidden;
}
.next-right-title h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
}
.next-right-title p {
  font-size: 16px;
  line-height: 22px;
  color: white;
}
.sustainable-list {
  margin-top: 80px;
}
.sustainable-page{
  display: flex;
  justify-content: center;
}
.sustainable-page>>>.el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff; 
  }
.sustainable-page>>>.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: rgb(146, 145, 145);
    color: #fff;
  }
.list-div {
  margin-bottom: 40px;
}
.list-right {
  padding-bottom: 40px;
  border-bottom: 1px solid rgb(192, 192, 192);
}
.list-left {
  display: flex;
  overflow: hidden;
}
.list-right-title {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-overflow: ellipsis;
}
.list-right-title span {
  font-size: 14px;
  color: rgb(160, 160, 160);
}
.list-right-title h2 {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.list-right-title p {
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>