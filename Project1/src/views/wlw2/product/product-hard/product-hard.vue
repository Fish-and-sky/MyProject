<template>
    <div :class="{product:proflag,product1:!proflag}">
    <div><header1></header1></div>
    <div v-show="flag"><protopimg :titleh="titleh" :titlep="titlep" :systemimg="systemimg"></protopimg></div>
    <div><prointroduce></prointroduce></div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import header1 from '../../header2/header.vue'
import bottom from '../../bottom/bottom.vue'
import protopimg from '../protopimg/protopimg.vue'
import prointroduce from '../prointroduce/prointroduce.vue'
import '../../../../assets/css/theprostyle.css'
export default {
    data(){
        return{
            proflag:true,
            screenWidth:0,
            flag:true,
            titleh:'HARDWARE / 硬件',
            titlep:'运营商级品质、寿命长、成本低',
            systemimg:'http://www.ubitraq.com/images/hard/banner_hardware.png',
        }
    },
    mounted() {
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
    components:{header1,bottom,protopimg,prointroduce}
}
</script>
<style scoped>
.product {
  min-width: 1300px;
}
.product1 {
  min-width: 1100px;
}
</style>