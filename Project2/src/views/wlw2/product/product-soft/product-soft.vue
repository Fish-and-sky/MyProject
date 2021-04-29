<template>
    <div :class="{product:proflag,product1:!proflag}">
    <div><header1></header1></div>
    <div v-show="flag"><protopimg :titleh="titleh" :titlep="titlep" :systemimg="systemimg"></protopimg></div>
    <div><prolistimg></prolistimg></div>
    <div v-for="(item,id) in softlist" :key="id">
    <prostyleleft v-if="(item.productStyle+'').split(',')[2]==1"
    :proimg="item.productThumbnail2"
    :proimg1="item.productThumbnail3"
    :provalue="item.productIntroduction2"></prostyleleft>
    <prostyleright v-if="(item.productStyle+'').split(',')[2]==2"
    :proimg="item.productThumbnail2"
    :proimg1="item.productThumbnail3"
    :provalue="item.productIntroduction2"></prostyleright>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header2/header.vue'
import bottom from '../../bottom/bottom.vue'
import protopimg from '../protopimg/protopimg.vue'
import prolistimg from '../product-listimg/prolistimg.vue'
import prostyleleft from '../product-style/prostyleleft.vue'
import prostyleright from '../product-style/prostyleright.vue'
import '../../../../assets/css/theprostyle.css'
import axios from "axios"
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
            flag:true,
            titleh:'SOFTWARE / 软件',
            titlep:'云端/本地部署， 开放位置平台， 深入洞见数据',
            systemimg:'http://www.ubitraq.com/images/soft/banner_software.png',
            softlist:[],
        }
    },
    mounted() {
      var _this=this;
      axios.get('/portalProducts/getListByType',{
        params:{
          id:3
        }
      }).then(res=>{
        _this.softlist=res.data.data;
      }).catch(err=>{
        console.log(err);
      })
  },
    components:{header1,bottom,protopimg,prolistimg,prostyleleft,prostyleright}
}
</script>
<style scoped>
.product {
  min-width: 1100px;
}
.product1 {
  min-width: 1300px;
}
</style>