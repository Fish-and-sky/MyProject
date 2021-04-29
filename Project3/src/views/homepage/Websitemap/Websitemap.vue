<template>
    <div class="Websitemap">
    <div><header1></header1></div>
    <div class="Websitemap-top">
    <el-row>
        <el-col :xl="19" :lg="19" :md="23" :sm="23" :xs="23">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>网站地图</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col :xl="19" :lg="19" :md="23" :sm="23" :xs="23" class="Websitemap-next">
        <div class="Websitemap-list" v-for="(item,id) in bottomlist" :key="id">
        <div class="Websitemap-left">
        <span>{{item.name}}</span>
        </div>
        <div class="Websitemap-right">
        <div v-for="(it,index) in item.children" :key="index"><span>|</span><span @click="changepage(id,index)">{{it.name}}</span></div>
        </div>
        </div>
        </el-col>
      </el-row>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
    </div>
</template>
<script>
import header1 from "../../header/header1.vue"
import bottom from "../../bottom/bottom.vue"
import axios from "axios"
export default {
  inject: ['reload'],
    data(){
        return{
            screenWidth: document.body.clientWidth,
            bottomlist:[],
        }
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
          that.timer = false;
        }, 400);
      }
    },
  },
  methods:{
    changepage(id,index){
      this.reload();
      this.$router.push({path:this.bottomlist[id].children[index].href,
      query: {
      funame:this.bottomlist[id].name,
      name:this.bottomlist[id].children[index].name,
      href:this.bottomlist[id].children[index].href,
       }})
       sessionStorage.setItem("API",this.bottomlist[id].children[index].api);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
      axios.get('/portalNav/getAll').then(res=>{
        this.bottomlist=res.data.content;
      }).catch(err=>{
        console.log(err);
      })
    });
  },
    components:{header1 , bottom ,}
}
</script>
<style scoped>
.Websitemap-top {
  margin-top: 20px;
}
.Websitemap-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pagehead{
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.Websitemap-list{
    border-top: 1px dashed black;
    padding: 40px 0px;
    display: flex;
    align-items: center;
}
.Websitemap-left{
    width: 110px;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(161, 199, 58);
}
.Websitemap-left span{
    font-size: 18px;
    font-weight: 620;
    color: white;
}
.Websitemap-right{
    display: flex;
}
.Websitemap-right div{
    margin-left: 50px;
}
.Websitemap-right div span{
    font-size: 20px;
}
.Websitemap-right div span:nth-child(1){
    margin-right: 10px;
    color: rgb(161, 199, 58);
}
</style>