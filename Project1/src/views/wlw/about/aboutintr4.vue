<template>
  <div class="intr4">
  <div :class="{'intr4-k':flag,'intr4-k1':!flag}">
  <div class="intr4-left">
  <div class="intr4-left-tt"><h1>质量方针</h1><div class="intr4-xian"></div></div>
  <div :class="{'intr4-left-title':flag,'intr4-left-title1':!flag}">
  <p>·时刻铭记质量是华为生存的基石，是客户选择华为的理由。</p>
  <p>·我们把客户要求与期望准确传递到华为整个价值链，共同构建质量；</p>
  <p>·我们尊重规则流程，一次把事情做对；我们发挥全球员工潜能，持续改进；</p>
  <p>·我们与客户一起平衡机会与风险，快速响应客户需求，实现可持续发展。</p>
  <p>·华为承诺向客户提供高质量的产品、服务和解决方案，持续不断让客户体验到我们致力于为每个客户创造价值</p>
  </div>
  </div>
  <div :class="{'intr4-right':flag,'intr4-right1':!flag}"><el-image :src="src4"></el-image></div>
  </div>
  </div>
</template>
<script>
import {Image} from 'element-ui'
export default {
    data(){
        return{
            src4:'https://www-file.huawei.com/-/media/corp2020/abouthuawei/quality.jpg'
        }
    },
    props:{
        flag:{defauct:""}
    },
    components:{'el-image':Image}
}
</script>
<style scoped>
.intr4{
    width: 100%;
    margin-top: 80px;
    margin-bottom: 60px;
}
.intr4-k{/*改*/
    display: flex;
    justify-content: space-between;
    width: 1300px;
    margin: 0 auto;
    /*border: 1px solid black;*/
}
.intr4-left{
    width: 560px;
    /*border: 1px solid black;*/
}
.intr4-left-tt{
    margin-bottom: 40px;
}
.intr4-left-tt h1{
    font-size: 30px;
    font-weight: bolder;
}
.intr4-xian{
    margin-top: 10px;
    width: 40px;
    height: 2px;
    background-color: black;
}
.intr4-left-title p{
    font-size: 16px;
    line-height: 30px;
}
.intr4-right{
    width: 500px;
}

.intr4-k1{/*改*/
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
    /*border: 1px solid black;*/
}
.intr4-right1{
    width: 400px;
}
.intr4-left-title1 p{
    font-size: 14px;
    line-height: 24px;
}
</style>