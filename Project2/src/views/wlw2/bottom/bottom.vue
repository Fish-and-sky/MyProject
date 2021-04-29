<template>
  <div class="bottom">
      <div class="bottom-top">
        <div class="bottom-top-left">
          <div class="bottom-left-title" v-for="(item,index) in list" :key="index">
            <h4>{{item.titlename}}</h4>
            <ul>
              <li v-for="(it,id) in item.lilist" :key="id" @click="pagechange(index,id)">{{it.titleli}}</li>
            </ul>
          </div>
        </div>
        <div class="bottom-top-right">
        <div><h4>公众号</h4></div>
        <div class="bottom-right-img">
        <el-image :src="bottomimg"></el-image>
        </div>
        </div>
      </div>
      <div class="bottom-bottom">
      <div class="bottom-k">
      <span>北京全迹科技有限公司 </span>
      <span style="margin-right:10px"> UbiTraq Technology, Co., Ltd.</span>
      <span> 京ICP备16053698号 </span>
      <span> 北京全迹科技有限公司 </span>
      <span> 版权所有</span>
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bottomimg:'http://www.ubitraq.com/images/DGJDDS.png',
      list:[
        {titlename:'首页',lilist:[{titleli:'特点'},{titleli:'产品'},{titleli:'行业方案'},]},
        {titlename:'产品',lilist:[{titleli:'系统'},{titleli:'硬件'},{titleli:'软件'},]},
        {titlename:'行业方案',lilist:[{titleli:'行业方案'},]},
        {titlename:'文档动态',lilist:[{titleli:'技术文档'},{titleli:'新闻动态'},]},
        {titlename:'关于我们',lilist:[{titleli:'公司简历'},{titleli:'公司资质'},{titleli:'联系我们'},{titleli:'加入我们'},]},
      ]
    };
  },
  methods:{
    pagechange(index,id){
      if(index==0){
        this.$router.push('/index')
      }else if(index==1){
        if(id==0){
          this.$router.push('/product_system');
        }else if(id==1){
          this.$router.push('/product_hard');
        }else if(id==2){
          this.$router.push('/product_soft');
        }
      }else if(index==2){
          this.$router.push('/project');
      }else if(index==3){
        if(id==0){
          this.$router.push('/file/skill');
        }else if(id==1){
          this.$router.push('/file/new');
        }
      }else if(index==4){
        this.$router.push({ name: 'aboutus', params: { aboutus: id }})
        sessionStorage.setItem('aboutus',id);
        this.$emit('bottomtoabout',id)
      }
    }
  },
};
</script>
<style scoped>
.bottom {
  width: 100%;
}
.bottom li{
  color: rgb(125, 125, 126);
}
.bottom h4{
  font-size: 18px;
  font-weight: bolder;
}
.bottom span{
  color: rgb(170, 170, 173);
  font-size: 14px;
}
.bottom-top {
  width: 1060px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  margin-bottom: 40px;
}
.bottom-top-left {
  width: 850px;
  display: flex;
  justify-content: space-around;
}
.bottom-left-title{
  width: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-left-title ul{
  margin-top: 20px;
}
.bottom-left-title ul li{
  text-align: center;
  font-size: 16px;
  line-height: 30px;
}
.bottom-top-right{
  width: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-right-img{
  margin-top: 30px;
  width: 100px;
  height: 100px;
}
.bottom-bottom{
  width: 100%;
  height: 50px;
  background-color: black;
}
.bottom-k{
  width: 1060px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
}
.bottom-k span{
  line-height: 50px;
}
</style>