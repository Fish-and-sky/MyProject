<template>
  <div id="app">
    <div id="nav">
    </div>
    <!--<router-view v-if="active"/>-->
    <keep-alive>
    <router-view v-if="active&&$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide (){
     return {
       reload:this.reload
     }
  },
  data(){
    return {
       active:true
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
}
</script>
<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
