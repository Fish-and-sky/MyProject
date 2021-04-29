<template>
  <div :class="{ fileinside: proflag, fileinside1: !proflag }">
  <div><header1></header1></div>
  <div class="inside-k">
    <div class="inside-title1">
    <h2>{{titleh}}</h2>
    <h5>{{titletime}}</h5>
    </div>
    <div class="inside-title" v-html="fileinsidevalue">
    </div>
    </div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header1 from "../header2/header.vue";
import bottom from "../bottom/bottom.vue";
import '../../../assets/css/theprostyle.css';
import marked from 'marked'
import axios from 'axios';
export default {
  name:"fileinside",
  data() {
    return {
      proflag: true,
      screenWidth: 0,
      fileinsideid:null,
      titleh:'',
      titletime:'',
      fileinsidevalue:''
    };
  },
  methods:{
  },
  mounted() {
    
    var _this=this;
    axios.get('/portalNews/getById',{
      params:{
        id:sessionStorage.getItem('fileinside')
      }
    }).then(res=>{
      _this.fileinsidevalue=marked(res.data.data.newsContent);
      _this.titleh=res.data.data.newsTitle;
      _this.titletime=res.data.data.newsCreateTime;
    }).catch(err=>{
      console.log(err);
    })
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.fileinside {
  min-width: 1100px;
}
.fileinside1 {
  min-width: 1300px;
}
.inside-k{
  width: 1060px;
  margin: 0 auto;
}
.inside-title{
  width: 1060px;
  min-height: 500px;
  margin: 0 auto;
}
.inside-title1{
  width: 1060px;
  padding-top: 160px;
  margin: 0 auto;
  margin-bottom: 40px;
}
.inside-title1 h2{
    text-align: center;
    font-size: 30px;
    color: rgb(110, 110, 110);
}
.inside-title1 h5{
    text-align: center;
    font-size: 16px;
    color: rgb(110, 110, 110);
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>