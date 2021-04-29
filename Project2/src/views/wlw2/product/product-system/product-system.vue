<template>
    <div :class="{product:proflag,product1:!proflag}">
    <div><header1></header1></div>
    <div v-show="flag"><protopimg :titleh="titleh" :titlep="titlep" :systemimg="systemimg"></protopimg></div>
    <div class="product-title">
    <p>为什么选择UWB定位技术？ 更精准 ——『UWB与蓝牙技术对比』,『漫谈室内定位』</p>
    <p>为什么选择UWB TDOA方案？大容量、长待机 ——『UWB方案比较』,『TDOA与TOF的技术细节』</p>
    </div>
    <div v-for="(item,id) in syslist" :key="id">
    <prostyle1 v-if="(item.productStyle+'').split(',')[2]==1" 
    :prostyle="item.productThumbnail2" 
    :provalue="item.productIntroduction2"></prostyle1>
    <prostyle3 v-if="(item.productStyle+'').split(',')[2]==2"
    :prostyleimg="item.productThumbnail2"
    :provalue="item.productIntroduction2"></prostyle3>
    <prostyle2 v-if="(item.productStyle+'').split(',')[2]==3"
    :prostyleimg="item.productThumbnail2"
    :provalue="item.productIntroduction2"></prostyle2>
    <prostyle5 v-if="(item.productStyle+'').split(',')[2]==4"
    :prostyleimg="item.productThumbnail2"
    :provalue="item.productIntroduction2"></prostyle5>
    <prostyle4 v-if="(item.productStyle+'').split(',')[2]==5"
    :prostyleimg="item.productThumbnail2"
    :provalue="item.productIntroduction2"></prostyle4>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header2/header.vue'
import bottom from '../../bottom/bottom.vue'
import protopimg from '../protopimg/protopimg.vue'
import prostyle1 from '../product-style/prostyle1.vue'
import prostyle2 from '../product-style/prostyle2.vue'
import prostyle3 from '../product-style/prostyle3.vue'
import prostyle4 from '../product-style/prostyle4.vue'
import prostyle5 from '../product-style/prostyle5.vue'
import '../../../../assets/css/theprostyle.css'
import axios from 'axios'
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
            flag:true,
            titleh:'SYSTEM/高精度定位系统',
            titlep:'高精度定位系统， 超宽带技术',
            systemimg:'http://www.ubitraq.com/images/system/banner_system.png',
            syslist:[],
        }
    },
    mounted() {
      var _this=this;
      axios.get('/portalProducts/getListByType',{
        params:{
          id:1
        }
      }).then(res=>{
        _this.syslist=res.data.data;
      }).catch(err=>{
        console.log(err);
      })
  },
    components:{header1,bottom,protopimg,prostyle1,prostyle2,prostyle3,prostyle4,prostyle5}
}
</script>
<style scoped>
.product {
  min-width: 1100px;
}
.product1 {
  min-width: 1300px;
}
.product-title{
    width: 1060px;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    margin-top: 80px;
}
</style>