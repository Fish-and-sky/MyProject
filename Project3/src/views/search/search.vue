<template>
  <div class="search">
    <div><header1></header1></div>
    <div class="search-top">
      <el-row>
        <el-col :xl="19" :lg="19" :md="23" :sm="23" :xs="23">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>搜索结果</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col
          :xl="19"
          :lg="19"
          :md="23"
          :sm="23"
          :xs="23"
          class="search-center"
        >
          <el-col class="search-center-k">
            <div class="xian"></div>
            <div class="bottom-xian">
              <div class="theinput">
                <el-input
                  type="text"
                  v-model="value"
                  placeholder="搜索"
                  clearable=""
                ></el-input>
              </div>
              <div class="thebutton">
                <el-button
                  type="success"
                  style="width: 100px; font-size: 20px"
                  @click="search"
                  @keyup.enter.native="search"
                  >搜索</el-button
                >
              </div>
            </div>
          </el-col>
        </el-col>
        <el-col
          :xl="19"
          :lg="19"
          :md="23"
          :sm="23"
          :xs="23"
          class="search-bottom"
        >
          <div class="search-bottom-zi">
            <span>{{ total }}条：</span
            ><span
              style="background-color: rgb(136, 177, 97); margin-right: 10px"
              >{{ neiro }}
            </span>
            <span> 搜索结果</span>
          </div>
          <div class="search-bottom-k">
            <div class="search-list-div" v-for="(item, id) in list" :key="id">
              <div class="search-list-thediv1">
              <el-image :src="item.productThumbnail" 
              style="height:100px;width:100px"></el-image>
              </div>
              <div class="search-list-thediv2">
              <h2 @click="pagechange(item.productId)" onmouseover="this.style.cursor='pointer';"
              onmouseout="this.style.cursor='normal'">{{ item.productName }}</h2>
              <p>{{ item.productTitle }}</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="19" class="more-page">
        <el-pagination
          :background="true"
          layout="prev, pager, next"
          :total="total"
          :page-size="pagesize"
          :current-page.sync="currentpage"
          @current-change="numchange"
          hide-on-single-page
        >
        </el-pagination>
      </el-col>
      </el-row>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../header/header1.vue";
import bottom from "../bottom/bottom.vue";
import axios from "axios";
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      currentpage: 1,
      total: 0,
      pagesize: 8,
      pageNum:0,
      value: "",
      neiro: "0",
      list:[],
      api:{},
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
            // that.proimgH = ((that.screenWidth / 24) * 20 * 0.5) / 6;
          }
          that.timer = false;
        }, 400);
      }
    },
  },
  methods: {
    search() {
      var reg = /^[\s]*$/;
      if (reg.test(this.value)) {
        alert("请输入搜索内容");
      } else {
        this.neiro = this.value;
        this.api();
        this.currentpage=1;
      }
    },
    numchange(val){
      this.pageNum=val-1;
      this.api();
    },
    pagechange(id){
      sessionStorage.setItem("productId",id)
      this.$router.push({ name: "productcontent", params: { theid: id } });
    },
    keyDown(e) {
      // 回车则执行登录方法 enter键的ASCII是13
      if (e.keyCode === 13) {
        this.search(); // 定义的登录方法
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", this.keyDown);
    this.neiro = this.$route.params.search;
    this.value = this.$route.params.search;
   this.api=function(){ axios
      .get("/portalProducts/seek", {
        params: {
          keycode: this.neiro,
          pageNum:this.pageNum,
          pageSize:this.pagesize,
        },
      })
      .then((res) => {
        this.list=res.data.content;
        this.total=res.data.totalElements;
      })
      .catch((err) => {
        console.log(err);
      });
      this.pageNum=0;
   }
   this.api();
    this.$nextTick(() => {
      const that = this;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    });
  },
  destroyed() {
    // 销毁事件
    window.removeEventListener("keydown", this.keyDown, false);
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.search-top {
  margin-top: 20px;
}
.search-top .el-row {
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
.search-center-k {
  display: flex;
  height: 50px;
  /*border: 1px solid black;*/
  max-width: 800px;
}
.search-center-k .theinput {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.search-center-k .theinput .el-input {
  font-size: 30px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.search-center-k >>> .el-input__inner {
  border: none;
}
.search-center-k .el-input--suffix >>> .el-input__suffix {
  font-size: 40px;
  color: red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-input--suffix {
  position: relative;
}
.search-center-k .el-input--suffix >>> .el-icon-circle-close:before {
  position: absolute;
  font-size: 30px;
  right: -5px;
}
.search-center-k .xian {
  border-left: 3px solid black;
  margin-right: 20px;
}
.search-center-k .bottom-xian {
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(160, 160, 160);
}
.search-center-k .thebutton {
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-bottom {
  margin-top: 70px;
}
.search-bottom-zi span {
  font-size: 20px;
}
.search-bottom-k {
  margin-top: 80px;
}
.search-list-div {
  padding-bottom: 25px;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 30px;
  display: flex;
}
.search-list-thediv1{
  border: 1px solid rgb(167, 167, 167);
  margin-right: 40px;
}
.search-list-div h2 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #b1cc1d;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.search-list-div p {
  color: #004e97;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.more-page {
  display: flex;
  justify-content: center;
}
.more-page >>> .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #fff;
}
.more-page >>> .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: rgb(146, 145, 145);
  color: #fff;
}
</style>