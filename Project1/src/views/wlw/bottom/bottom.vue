<template>
  <div class="bottom">
  <div class="bottom-s">
  <div class="bottom-s-left">
  <div class="bottom-div">
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>关于公司</h1></div>
  <ul>
  <li v-for="(item,id) in list" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>新闻动态</h1></div>
  <ul>
  <li v-for="(item,id) in list1" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>业务板块</h1></div>
  <ul>
  <li v-for="(item,id) in list2" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>服务与支持</h1></div>
  <ul>
  <li v-for="(item,id) in list3" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>供应商平台</h1></div>
  <ul>
  <li v-for="(item,id) in list4" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>投资者关系</h1></div>
  <ul>
  <li v-for="(item,id) in list5" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  <div class="bottom-left-div1">
  <div class="thetitle"><h1>加入我们</h1></div>
  <ul>
  <li v-for="(item,id) in list6" :key="id"><span>{{item.tit}}</span></li>
  </ul>
  </div>
  </div>
  </div>
  <div class="bottom-s-right">
  <div>
  <div class="thetitle" style="margin-left:20px"><h1>关注我们</h1></div>
  <div class="theimg">
  <div  v-for="(item,id) in list7" :key="id"><img :src="item.img" alt=""></div>
  </div>
  <div class="theimg2"><img :src="img1" alt=""></div>
  </div>
  </div>
  </div>
  <div class="bottom-x">
    <div>©2020 <span>{{settingSitename}}</span> <span>{{settingCopyright}}</span></div>
    <!-- <div>{{bottlist[0].settingSiteurl}}</div> -->
    <ul><li>联系我们</li><li>法律声明</li><li>隐私保护</li></ul>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      list:[
        {id:1,tit:"公司简介"},
        {id:2,tit:'公司理念'},
        {id:4,tit:'发展历程'},
        {id:5,tit:'董事长致辞'},
        {id:6,tit:'公司未来'},
        {id:7,tit:'联系我们'},
      ],
      list1:[
        {id:1,tit:"公司新闻"},
        {id:2,tit:'行业新闻'},
        {id:4,tit:'项目动态'},
      ],
      list2:[
        {id:1,tit:"人员定位"},
        {id:2,tit:'智能网联'},
        {id:4,tit:'电子工具'},
        {id:1,tit:"人员定位"},
        {id:1,tit:"人员定位"},
        {id:1,tit:"人员定位"},
      ],
      list3:[
        {id:1,tit:"“研发体系"},
        {id:2,tit:'生产制造'},
        {id:4,tit:'质量管理'},
        {id:5,tit:'营销团队'},
        {id:6,tit:'服务保障'},
      ],
      list4:[
        {id:1,tit:"供应商自荐"},
        {id:2,tit:'内控管理'},
        {id:4,tit:'供方导入介绍'},
      ],
      list5:[
        {id:1,tit:"股票信息"},
        {id:2,tit:'信息公告'},
        {id:4,tit:'互动易'},
        {id:5,tit:'规章制度'},
      ],
      list6:[
        {id:1,tit:"招贤纳士"},
        {id:2,tit:'校园招聘'},
        {id:4,tit:'工作在立捷'},
      ],
      list7:[
        {id:1,img:'https://www-file.huawei.com/-/media/corporate/minisite/Tech4ALL/images/social-linkedin.png'},
        {id:2,img:'https://www-file.huawei.com/-/media/corporate/minisite/Tech4ALL/images/social-facebook.png'},
        {id:3,img:'https://www-file.huawei.com/-/media/corporate/minisite/Tech4ALL/images/social-twitter.png'},
        {id:4,img:'https://www-file.huawei.com/-/media/corporate/minisite/Tech4ALL/images/social-youtube.png'},
      ],
      img1:'https://www-file.huawei.com/-/media/corporate/minisite/Tech4ALL/images/social-instagram.png',
      bottlist:[],
      settingCopyright:'',
      settingSitename:'',
    }
  },
  mounted(){
    var _this=this;
    axios.get('/portalSetting/getAll')
    .then((res)=>{
      _this.bottlist=res.data.data;
      _this.settingCopyright=_this.bottlist[0].settingCopyright;
      _this.settingSitename=_this.bottlist[0].settingSitename;
    }).catch(err=>{
      console.log(err);
    })
    $(".bottom-left-div1 ul li span").hover(function () {
        // over
        $(this).css({
          "border-bottom": "1px solid #5e5c5c"
        })
      }, function () {
        $(this).css({
          "border-bottom": "0px solid #5e5c5c"
        })
      }
    );
  }
}
</script>
<style scoped>
.bottom{
  width: 100%;
  background-color: rgb(247, 247, 247);
  /*border: 1px solid black;*/
}
.bottom .bottom-s{
  display: flex;
  justify-content: space-between;
  padding: 60px 0px 40px 0px;
}
.bottom .bottom-s-left{
  width: 75%;
  display: flex;
  /*border: 1px solid black;*/
  justify-content: space-around;
}
.bottom-div{
  width: 90%;
  /*border: 1px solid black;*/
  margin: 0 0 0 10%;
  display: flex;
  justify-content: space-around;
}
/*.bottom-left-div1{
  border: 1px solid darkblue;
}*/
.bottom-left-div1 .thetitle{
  margin-bottom: 20px;
}
.bottom-left-div1 .thetitle h1{
  font-size: 20px;
  font-weight: bold;
}
.bottom-left-div1 ul li{
  font-size: 16px;
  line-height: 30px;
  color: #5e5c5c;
  /*border: 1px solid #5e5c5c;*/
}
.bottom .bottom-s-right{
  /*border: 1px solid slateblue;*/
  width: 25%;
}
.bottom-s-right .theimg{
  margin-top: 30px;
  display: flex;
  align-items: center;
}
.bottom-s-right .theimg div{
  margin-left: 20px;
}
.bottom-s-right .theimg2{
  margin-top: 20px;
  margin-left: 20px;
}
.bottom-x{
  display: flex;
  height: 40px;
  background-color: black;
  border-top: 1px solid white;
  justify-content: space-between;
  align-items: center;
}
.bottom-x div{
  margin-left: 120px;
  color: white;
}
.bottom-x ul{
  display: flex;
  text-align: center;
  margin-right: 200px;
}
.bottom-x ul li{
  width: 60px;
  height: 20px;
  border-left: 1px solid white;
  line-height: 20px;
  color: white;
}
.bottom-x ul li:nth-child(1){
  border: 0px;
}
</style>