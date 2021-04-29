<template>
    <div :class="{detail:proflag,detail1:!proflag}">
    <div><header1></header1></div>
    <div class="project-detail">
    <div class="details-k">
    <div class="details-left">
    <div class="details-xian"></div>
    <div class="details-h"><h3>解决方案</h3></div>
    <ul>
    <li v-for="(item,id) in detailslist" :key="id">
    <p :class="{'details-p2':(item.nav_href || '').split(',')[1]==clicknumber,'details-p1':(item.nav_href || '').split(',')[1]==mousenumber}" 
    @mouseenter="mouseenter(item.nav_href.split(',')[1])" 
    @mouseleave="mouseleave"
    @click="changeid(item.nav_href.split(',')[1])">
    {{item.nav_name}}
    </p>
    </li>
    </ul>
    <ul class="lightul">
    <li><span style="font-size:16px;color:black;">其他</span></li>
    <li v-for="(item,id) in detailslist2" :key="id"><span>{{item.titlep}}</span></li>
    </ul>
    </div>
    <div class="details-right" v-html="detailvalue"></div>
    </div>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header2/header.vue'
import bottom from '../../bottom/bottom.vue'
import '../../../../assets/css/theprostyle.css'
import axios from 'axios'
import marked from 'marked'
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
          detailslist:[
            {id:0,titlep:'工业/工厂'},
            {id:1,titlep:'隧道/矿井/地下轨道'},
            {id:2,titlep:'监狱/看守所'},
            {id:3,titlep:'医院/康复中心'},
            {id:4,titlep:'养老院/疗养院'},
            {id:5,titlep:'港口/码头'},
            {id:6,titlep:'仓储/物流'},
            {id:7,titlep:'建筑工地'},
            {id:8,titlep:'重点单位访客管理'},
          ],
          detailslist2:[
            {id:0,titlep:'博物馆'},
            {id:1,titlep:'公检司法'},
            {id:2,titlep:'智慧园区'},
            {id:3,titlep:'应急安全'},
            {id:4,titlep:'度假酒店'},
            {id:5,titlep:'智慧景区'},
            {id:6,titlep:'机场/高铁'},
            {id:7,titlep:'教育/学校'},
            {id:8,titlep:'金融数据中心'},
          ],
          detailsflag:true,
          mousenumber:'',
          clicknumber:'',
          detailsflag2:true,
          detailvalue:'',
          detalist:[],
          nameid:0,
        }
    },
    methods:{
      mouseenter(id){
        this.detailsflag=false;
        this.mousenumber=id;
      },
      mouseleave(){
        this.datailsflag=true;
        this.mousenumber=null;
      },
      changeid(id){
        this.clicknumber=id;
        var _this=this;
        // this.nameid=this.clicknumber.split(',')[1];
        sessionStorage.setItem('nameid',this.clicknumber);
        axios.get('/portalNews/getById',{
          params:{
            id:_this.clicknumber,
          }
        }).then(res=>{
          _this.detailvalue=marked(res.data.data.newsContent);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      var _this=this;
      this.clicknumber=sessionStorage.getItem('nameid');
      axios.get('/portalNews/getById',{
          params:{
            id:_this.clicknumber,
          }
        }).then(res=>{
          _this.detailvalue=marked(res.data.data.newsContent);
        }).catch(err=>{
          console.log(err);
        })
      axios.post('/portalNav/getNavById?id='+3).then(res=>{
        _this.detailslist=res.data.data;
      }).catch(err=>{
        console.log(err);
      })
        this.screenWidth= document.body.clientWidth;
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
    window.onresize=()=>{
      this.screenWidth = document.body.clientWidth;
    }
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.proflag=false;
    }else if(this.screenWidth>1300){
      this.proflag=true;
    }else if(this.screenWidth<=600){
      this.proflag=true
    }
    },
    components:{header1,bottom}
}
</script>
<style scoped>
.detail {
  min-width: 1300px;
}
.detail1 {
  min-width: 1200px;
}
.project-detail{
    width: 100%;
    padding-top: 120px;
}
.details-k{
    width: 1060px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.details-left{
  width: 200px
}
.details-left ul{
  margin-top: 20px;
}
.details-left ul li{
  margin-top: 10px;
  margin-bottom: 10px;
}
.details-left ul li P{
  font-size: 16px;
  line-height: 26px;
  padding-left:15px;
}
.details-p {
  font-size: 16px;
  line-height: 26px;
  padding-left:15px;
}
.details-p1{
  font-size: 16px;
  line-height: 26px;
  padding-left:15px;
  border-left:3px solid red;
  color: red;
}
.details-p2{
  font-size: 16px;
  line-height: 26px;
  padding-left:15px;
  border-left:3px solid red;
  color: red;
}
.details-xian{
  width: 160px;
  background-color: rgb(214, 21, 8);
  height: 6px;
}
.details-right{
  width: 850px;
}
.details-h{
  margin-top: 20px;
}
.details-left h3{
  font-size: 20px;
}
.project-detail .lightul{
  margin-top: 40px;
}
.project-detail .lightul li span{
  padding-left: 15px;
  font-size: 16px;
  color: rgb(131, 131, 130);
}
/*
动态vue的运用代替之前的jquery直接操纵dom树
*/
</style>