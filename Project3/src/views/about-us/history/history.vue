<template>
  <div class="history">
  <div><header1></header1></div>
  <div class="history-top">
  <el-row>
        <el-col :span="20">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{$route.query.funame}}</el-breadcrumb-item>
              <el-breadcrumb-item>发展历程</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
      </el-row>
  </div>
  <div class="history-k" v-if="timelist.length>0">
  <el-timeline class="his-time">
    <el-timeline-item :timestamp="item.year+''" placement="top" v-for="(item,id) in timelist" :key="id">
      <div class="time-div">
        <div v-for="(it,index) in item.content" :key="index"><span style="margin-right:10px">{{it.hisMonth}}月</span><span>{{it.hisEvent}}</span></div>
      </div>
    </el-timeline-item>
    <el-timeline-item></el-timeline-item>
  </el-timeline>
  </div>
  <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../../header/header1.vue"
import bottom from "../../bottom/bottom.vue"
import $ from "jquery"
import axios from 'axios'
export default {
  data(){
    return{
        screenWidth: document.body.clientWidth,
      timelist:[],
      heightlist:[],
      scrollb:0,
      a:0,
    }
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
                $(".el-timeline-item").eq(i).find(".time-div").animate({
                  'margin-left':'0px',
                  'opacity':'1'
                })
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
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
        setTimeout(function () {
          if (that.screenWidth >= 1000) {
            // that.proimgH = ((that.screenWidth / 24) * 20 * 0.5) / 6;
          }
          that.timer = false;
        }, 400);
      }
    },
    
  },
  mounted(){
    axios.get('/portalHis/getAll').then(res=>{
      this.timelist=res.data.content;
    }).catch(err=>{
      console.log(err);
    })
    this.$nextTick(() => {
      const that = this;
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
      setTimeout(function(){
        for(var i=0;i<that.timelist.length;i++){
        var height=$(".el-timeline-item").eq(i).offset().top;
        that.heightlist.push(height);
      }
      for(var i=0;i<that.heightlist.length;i++){
              if(that.a+that.scrollb>that.heightlist[i]){
                $(".el-timeline-item").eq(i).find(".time-div").animate({
                  'margin-left':'0px',
                  'opacity':'1'
                })
            }
            }
      },1000)
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
  components:{header1 , bottom ,}
}
</script>
<style scoped>
.history-k{
margin-top: 100px;
display: flex;
justify-content: center;
}
.history-top {
  margin-top: 20px;
}
.history-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.pagehead{
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.his-time{
  padding-top: 20px;
  padding-bottom: 100px;
  padding-left: 450px;
}
.his-time .el-timeline-item>>>.el-timeline-item__wrapper{
  padding-bottom: 60px;
}
.his-time .el-timeline-item:nth-child(even)>>>.el-timeline-item__wrapper{
  margin-left: -450px;
}
.his-time >>>.el-timeline-item__tail{
  padding-bottom: 80px;
  border: 4px solid #2957b3;
}
.his-time >>> .el-timeline-item__node--normal {
    top: -4px;
    left: -4px;
    width: 24px;
    height: 24px;
    background-color: #2957b3;
}
.his-time .el-timeline-item:nth-child(even)>>>.el-timeline-item__node--normal{
  background-color: #addd3c;
}
.his-time >>>.el-timeline-item__timestamp{
  font-size: 40px;
  color: #2957b3;
}
.his-time .el-timeline-item:nth-child(even)>>>.el-timeline-item__timestamp{
  font-size: 40px;
  color: #addd3c;
}
.time-div{
  width: 400px;
  margin-left:-50px;
  opacity: 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(148, 148, 148);
}
.time-div span{
  font-size: 20px;
  line-height: 30px;
}
</style>