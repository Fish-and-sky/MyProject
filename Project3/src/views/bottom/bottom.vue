<template>
  <div class="bottom">
  <el-row>
  <el-col :xl="20" :lg="20" :md="20" :sm="24" :class="{'bottom-k':screenWidth>992,'bottom-k1':screenWidth<=992}">
  <el-col :sm="24" v-for="(item,id) in bottomlist" :key="id" :class="{'title':screenWidth>992,'title1':screenWidth<=992}">
  <h4 :class="{'theh4':screenWidth>992,'smallh4':screenWidth<=992}">{{item.name}}</h4>
  <ul :class="{smallul:screenWidth<=992}">
  <li v-for="(it,index) in item.children" :key="index" :class="{smallli:screenWidth<=992}">
  <span @click="pagechange(id,index)" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'">{{it.name}}</span>
  </li>
  </ul>
  </el-col>
  </el-col>
  <el-col :span="24" class="bottom-x">
  <el-col :span="20" class="bottom-x-k">
  <div class="bottom-x-k-top">
  <p>
  <span>电话：{{settingTelephone}} </span>
  <span style="margin-left:10px;"> 公司地址：{{settingPlace}} </span>
  <span style="margin-left:10px;"> 邮箱：{{settingEmail}} </span>
  </p>
  <p>
  <span onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'">法律声明 </span>|
  <span @click="toWebsitemap" onmouseover="this.style.cursor='pointer';" onmouseout="this.style.cursor='normal'"> 网站地图</span>
  </p>
  </div>
  <p>Copyright© <span>{{settingName}}</span> All rights reserved. <span style="margin-left:10px;">粤ICP备11045145号</span></p>
  </el-col>
  </el-col>
  </el-row>
  </div>
</template>
<script>
import axios from "axios"
export default {
  inject: ['reload'],
  data(){
    return{
        bottomlist:[],
        settingTelephone:'',
        settingPlace:'',
        settingSiteUrl:'',
        settingName:'',
        settingEmail:'',
    }
  },
  mounted(){
    axios.get('/portalNav/getAll').then(res=>{
        this.bottomlist=res.data.content;
      }).catch(err=>{
        console.log(err);
      })
      axios.get('/portalSetting/getAll').then(res=>{
        this.settingTelephone=res.data[0].settingTelephone;
        this.settingPlace=res.data[0].settingPlace;
        this.settingSiteUrl=res.data[0].settingSiteUrl;
        this.settingName=res.data[0].settingName;
        this.settingEmail=res.data[0].settingEmail;
      }).catch(err=>{
        console.log(err);
      })
  },
  methods:{
    pagechange(id,index){
      this.reload();
      this.$router.push({path:this.bottomlist[id].children[index].href,
      query: {
      funame:this.bottomlist[id].name,
      name:this.bottomlist[id].children[index].name,
      href:this.bottomlist[id].children[index].href,
       }})
       sessionStorage.setItem("API",this.bottomlist[id].children[index].api);
    },
    toWebsitemap(){
      this.reload();
      this.$router.push('/Websitemap');
    }
  },
  props:{
      screenWidth:{defauct:""},
  }
}
</script>
<style scoped>
.bottom{
  margin-top: 80px;
  background-color: rgb(70, 70, 70);
  color: white;
}
.bottom .theh4{
  font-size: 18px;
  margin-bottom: 26px;
  text-align: center;
}
.smallh4{
    text-align: left;
    font-size: 18px;
  margin-top: 26px;
  margin-left: 20px;
}
.bottom li{
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom p{
  font-size: 14px;
  line-height: 30px;
}
.bottom span{
  font-size: 14px;
  line-height: 30px;
}
.title1{
    padding-bottom: 10px;
    border-bottom: 1px dashed black;
}
.title1:last-child{
    border-bottom: 0px;
}
.bottom .el-row{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bottom-k{
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
}
.bottom-k1{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.smallul{
    display: flex;
}
.smallli{
    margin-left: 20px;
    padding-bottom: 20px;
}
.bottom-x{
  border-top: 1px solid rgb(145, 189, 45);
  display: flex;
  justify-content: center;
}
.bottom-x-k{
  margin-top: 20px;
  margin-bottom: 60px;
}
.bottom-x-k-top{
  display: flex;
  justify-content: space-between;
}
</style>