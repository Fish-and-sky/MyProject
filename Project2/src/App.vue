<template>
  <div id="app" :class="{app:inflag,app1:!inflag}">
    <div id="nav">
    </div>
    <keep-alive :exclude="notneed">
    <router-view v-if="active"/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide (){
     return {
       reload:this.reload,
     }
  },
  data(){
    return {
       active:true,
       inflag:true,
      screenWidth:0,
       notneed:"aboutus,project-details,fileinside,index",
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
