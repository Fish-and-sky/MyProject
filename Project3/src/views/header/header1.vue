<template>
  <div class="header1">
    <el-row class="header1-top">
      <el-col :xl="21" :lg="21" :md="24" class="header1-k">
        <el-col class="header1-left" :xl="4" :lg="4" :md="4" :sm="4">
          <el-image :src="logoimg" lazy @click="tohomepage" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'"></el-image>
        </el-col>
        <el-col
          class="header1-center hidden-sm-and-down"
          :xl="12"
          :lg="12"
          :md="12"
        >
          <ul>
            <li v-for="(item, id) in headerlist" 
            :key="id" class="header1-ulli"
            @mouseover="headerlistover(id)"
            @mouseleave="headerlistleave">
              <div :class="{'header1-ulli-color':num==id}">{{ item.name }}</div>
              <div :class="{'header1-xiahua1':num==id,'header1-xiahua':num==null}">
                <div class="header1-xiahua-k" v-if="num==id">
                  <span v-for="(it, index) in item.children" :key="index" 
                  onmouseover="this.style.cursor='pointer';" 
                  onmouseout="this.style.cursor='normal'"
                  :class="{'xiahua-color':number==index}"
                  @mouseover="xiahuaover(index)"
                  @mouseleave="xiahualeave"
                  @click="changepage(id,index)">{{
                    it.name
                  }}</span>
                </div>
              </div>
            </li>
          </ul>
        </el-col>
        <el-col class="hidden-md-and-up" :sm="12"></el-col>
        <el-col class="header1-center2" :xl="6" :lg="6" :md="6" :sm="4">
          <el-col :xl="9" :lg="9" class="center2-left hidden-md-and-down">
            <div><el-image :src="wbimg" class="tu"></el-image></div>
            <div>
              <el-image :src="wximg" class="tu" @click="flag = true" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'"></el-image>
              <div class="weixin" v-show="flag">
                <div class="weixin-top">
                  <span>二维码</span>
                  <span @click="flag = false" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'">X</span>
                </div>
                <div class="weixin-center">
                  <el-image :src="weixin" style="width: 200px"></el-image>
                  <span>扫一扫</span>
                </div>
              </div>
            </div>
            <div>
              <el-image
                :src="searchimg"
                @click="searchflag = !searchflag"
                onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'"
              ></el-image>
              <div class="search" v-show="searchflag">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="tosearch(input)"
                ></el-button>
              </div>
            </div>
          </el-col>
          <el-col :xl="9" :lg="9" class="center2-right">
            <span>简体</span><span>繁体</span><span>EN</span>
          </el-col>
        </el-col>
        <el-col class="header1-right" :xl="2" :gl="2" :md="2" :sm="4">
          <div class="header1-right-button" @click="drawer = true" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <div class="side-border">
      <el-drawer title="侧导航栏" :visible.sync="drawer" :with-header="false">
      <div class="cesearch">
      <el-input v-model="input" placeholder="请输入内容" style="width:60%"></el-input>
                <el-button
                  slot="append"
                  icon="el-icon-search"
                  @click="tosearch(input)"
                ></el-button>
      </div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item
            :title="item.name"
            :name="item.name"
            v-for="(item, id) in headerlist1"
            :key="id"
          >
            <div v-for="(it, index) in item.children" :key="index" class="side-border-zi" 
            onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'"
            @click="changepage(id,index)">
              {{ it.name }}
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios"
export default {
  inject: ['reload'],
  data() {
    return {
      activeName: "1",
      flag: false,
      searchflag: false,
      drawer: false,
      input: "",
      num:null,
      number:null,
      weixin:"",
      logoimg:
        "https://www.luxshare-ict.com/Upload/image/20200330/20200330100752_1739.png",
      wbimg: "https://www.luxshare-ict.com/images/weibo.png",
      wximg: "https://www.luxshare-ict.com/images/weixin.png",
      searchimg: "https://www.luxshare-ict.com/images/search.png",
      headerlist: [],
      headerlist1:[],
    };
  },
  methods: {
    tosearch(val) {
      var reg = /^[\s]*$/;
      if(reg.test(val)){
        alert('请输入搜索内容');
      }else{
        this.$router.push({ name: 'search', params: { search: val }});
      }
    },
    changepage(id,index){
      this.reload();
      this.$router.push({path:this.headerlist1[id].children[index].href,
      query: {
      funame:this.headerlist1[id].name,
      name:this.headerlist1[id].children[index].name,
      href:this.headerlist1[id].children[index].href,
       }})
       sessionStorage.setItem("API",this.headerlist1[id].children[index].api);
    },
    tohomepage(){
      this.$router.push('/homepage')
    },
    headerlistover(id){
      this.num=id;
    },
    headerlistleave(){
      this.num=null;
    },
    xiahuaover(index){
      this.number=index;
    },
    xiahualeave(){
      this.number=null;
    }
  },
  mounted() {
    axios.get('/portalNav/getAll').then(res=>{
        this.headerlist=res.data.content.splice(0,2);
        this.headerlist1=this.headerlist.concat(res.data.content);
      }).catch(err=>{
        console.log(err);
      })
      axios.get('/portalSetting/getAll').then(res=>{
        this.logoimg=res.data[0].settingImg;
        this.weixin=res.data[0].settingWechat;
      }).catch(err=>{
        console.log(err)
      })
    this.$nextTick(() => {

    });
  },
};
</script>
<style scoped>
.header1{
    background-color: white;
}
.header1-top {
  position: relative;
  height: 80px;
  border-bottom: 1px solid rgb(212, 212, 212);
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  z-index: 50;
}
.header1-k {
  height: 80px;
  display: flex;
  justify-content: space-between;
}
.header1-left {
  min-width: 160px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header1-center {
  min-width: 400px;
  height: 100%;
}
.header1-center ul {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header1-center ul li {
  height: 80px;
  line-height: 80px;
  padding-left: 20px;
  margin-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  font-weight: bold;
}
.header1-ulli-color{
  color: rgb(145, 189, 45);
}
.header1-center ul li .header1-xiahua {
  width: 100%;
  left: 0px;
  height: 80px;
  position: absolute;
  z-index: 110;
  background-color: rgb(240, 235, 228);
  display: none;
}
.header1-center ul li .header1-xiahua1 {
  width: 100%;
  left: 0px;
  height: 80px;
  position: absolute;
  z-index: 110;
  background-color: rgb(240, 235, 228);
}
.header1-xiahua-k {
  display: flex;
  justify-content: center;
}
.header1-center ul li .header1-xiahua1 span {
  padding-left: 30px;
  padding-right: 30px;
}
.xiahua-color{
  color: rgb(145, 189, 45);
}
.header1-center2 {
  height: 100%;
  min-width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header1-center2 .el-col {
  display: flex;
  justify-content: space-around;
}
.header1-center2 .el-col .tu {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  overflow: hidden;
}
.header1-center2 .el-col .weixin {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border: 1px solid black;
  background-color: white;
  z-index: 3000;
}
.weixin-top {
  height: 40px;
  border-bottom: 1px solid rgb(173, 173, 173);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding-right: 10px;
  padding-left: 20px;
}
.weixin-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.weixin-center span {
  font-size: 20px;
}
.header1-center2 .el-col .search {
  position: absolute;
  display: flex;
  top: 80px;
  width: 340px;
  left: 60%;
  z-index: 111;
}
.header1-center2 .center2-left div:nth-child(3) {
  width: 24px;
  height: 24px;
  border-radius: 0%;
  overflow: hidden;
}
.center2-right span {
  font-size: 16px;
}
.header1-right {
  height: 100%;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header1-right-button {
  position: fixed;
  width: 40px;
  z-index: 1111;
}
.header1-right-button p {
  width: 40px;
  height: 4px;
  background-color: black;
  margin-top: 10px;
}
.header1-right-button p:first-child {
  margin-top: 0px;
}
.side-border .cesearch{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header1 >>> .el-collapse-item__header {
    display: flex;
    align-items: center;
    height: 48px;
    line-height: 48px;
    padding-left: 30px;
    width: 100%;
    color: black;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px dashed white;
    transition: border-bottom-color .3s;
    outline: 0;
    }
.header1 >>> .el-collapse-item__wrap {
    will-change: height;
    padding-left: 30px;
    font-size: 16px;
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: none;
}
.header1 >>> .el-collapse-item__header.is-active {
    border-bottom: 1px dashed #a7aaad;
}
.header1 >>> .el-collapse-item__content {
    padding-bottom: 0px;
    font-size: 13px;
    color: black;
    line-height: 1.769230769230769;
}
.side-border-zi{
  font-size: 16px;
  line-height: 40px;
}
</style>