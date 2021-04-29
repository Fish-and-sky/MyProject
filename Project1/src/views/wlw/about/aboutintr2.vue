<template>
  <div class="intr2">
  <div class="intr2-tu">
    <div><el-image :src="src" class="intr2-img"></el-image></div>
    <div class="intr2-title">
    <div style="text-align: center;"><span>我们为世界带来什么</span><div class="intr2-xian"></div></div>
    <div :class="{'intr2-hang':flag,'intr2-hang1':!flag}">
    <span>为客户创造价值</span>
    <span>保障网络安全稳定运行</span>
    <span>推动产业良性稳定发展</span>
    <span>促进社会可持续发展</span>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import {Image} from 'element-ui'
export default {
    data(){
        return{
            src: 'https://www-file.huawei.com/-/media/corp2020/abouthuawei/what_we_offer.jpg',
        }
    },
    props:{
        flag:{defauct:""},
    },
    components:{
        "el-image":Image
    }
}
</script>
<style scoped>
.intr2-tu{
    position: relative;
}
.intr2-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.intr2-title span{
    font-size: 30px;
    color: white;
    font-weight: bolder;
}
.intr2-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.intr2-img{
    height: 400px;
    width: 100%;
}
.intr2-xian{
    width: 80px;
    height: 2px;
    background-color: red;
    margin: 0 auto;
    margin-top: 10px;
}
.intr2-hang{
    width: 1200px;
    /*border: 1px solid black;*/
    margin-top:40px;
    display: flex;
    justify-content: space-around;
}
.intr2-hang span{
    font-size: 26px;
    font-weight: bolder;
}
.intr2-hang1{
    width: 1000px;
    /*border: 1px solid black;*/
    margin-top:40px;
    display: flex;
    justify-content: space-around;
}
.intr2-hang1 span{
    font-size: 20px;
    font-weight: bolder;
}
</style>