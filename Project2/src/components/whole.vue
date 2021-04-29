<template>
    <div class="whole">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="首页" name="first">
    <!-- <Rotation2></Rotation2> -->
    </el-tab-pane>
    <el-tab-pane label="产品介绍" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="关于我们" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="展会活动" name="fourth">定时任务补偿</el-tab-pane>
    <el-tab-pane label="加入我们" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  
  </div>
</template>
<script>
import {TabPane,Tabs} from 'element-ui'
import Rotation2 from '../views/wlw/Rotation/Rotation2.vue';
import Rotation from '../views/wlw/Rotation/Rotation.vue';
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        "el-tabs":Tabs,
        "el-tab-pane":TabPane,
        Rotation2,
        Rotation,

    },
  };
</script>
<style scoped>

</style>