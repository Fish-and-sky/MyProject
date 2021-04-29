<template>
  <!-- <div id="app" :class="{app:inflag,app1:!inflag}"> -->
  <div id="app">
    <div id="nav">
    
    </div>
    <router-view v-if="active"/>
  </div>
</template>
<script>
export default {
  data(){
    return{
      inflag:true,
      screenWidth:0,
      active:true,
    }
  },
  provide (){
     return {
       reload:this.reload,
     }
  },
    methods:{
    reload (){
       this.active = false;
       this.$nextTick(function(){
          this.active = true;
       })
    }
  },
  mounted(){
    //待修改
    this.screenWidth= document.body.clientWidth;
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.inflag=true;
    }else if(this.screenWidth>1300){
      this.inflag=true;
    }else if(this.screenWidth<=600){
      this.inflag=false
    }
    window.onresize=()=>{
      this.screenWidth = document.body.clientWidth;
    }
    if(this.screenWidth<=1300&&this.screenWidth>=600){
      this.inflag=true;
    }else if(this.screenWidth>1300){
      this.inflag=true;
    }else if(this.screenWidth<=600){
      this.inflag=false;
    }
  }
}
</script>
<style>
.app {
  min-width: 1100px;
}
.app1 {
  min-width: 1300px;
}
</style>
