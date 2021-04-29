<template>
    <div class="prolistimg">
        <div class="prolistimg-k">
        <div class="prolistimg-div">
        <div class="prolist" v-for="(item,id) in prolist" :key="id">
        <el-image :src="item.img"></el-image>
        <div class="prolist-title">{{item.title}}</div>
        </div>
        </div>
        <div class="prolistimg-div">
        <div class="prolist" v-for="(item,id) in prolist" :key="id">
        <el-image :src="item.img"></el-image>
        <div class="prolist-title">{{item.title}}</div>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
          prolist:[
            {id:0,img:'http://www.ubitraq.com/images/soft/u1_i1.png',title:'实时位置监控'},
            {id:1,img:'http://www.ubitraq.com/images/soft/u1_i2.png',title:'历史轨迹回放'},
            {id:2,img:'http://www.ubitraq.com/images/soft/u1_i3.png',title:'电子围栏管理'},
            {id:3,img:'http://www.ubitraq.com/images/soft/u1_i4.png',title:'灵活标签管理'},
            {id:4,img:'http://www.ubitraq.com/images/soft/u2_i5.png',title:'摄像头联动'},
          ],
          prolist1:[
            {id:0,img:'http://www.ubitraq.com/images/soft/u1_i5.png',title:'多屏便捷查看'},
            {id:1,img:'http://www.ubitraq.com/images/soft/u2_i1.png',title:'账户权限管理'},
            {id:2,img:'http://www.ubitraq.com/images/soft/u2_i4.png',title:'开放API'},
            {id:3,img:'http://www.ubitraq.com/images/soft/u2_i2.png',title:'全面统计信息'},
            {id:4,img:'http://www.ubitraq.com/images/soft/u2_i6.png',title:'大数据分析'},
          ],
        }
    }
}
</script>
<style scoped>
.prolistimg{
    width: 100%;
    margin-top: 80px;
}
.prolistimg-k{
    width: 1060px;
    height: 500px;
    margin: 0 auto;
}
.prolistimg .prolistimg-div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.prolistimg .prolist{
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.prolistimg .prolist-title{
  font-size: 18px;
  margin-top: 40px;
}
</style>