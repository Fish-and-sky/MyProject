<template>
  <div class="middle">
    <div class="middle-k">
      <div class="middle-top">
        <div><h2>简便、易用、高精度定位</h2></div>
        <div>
          <p>极简部署，基站接上电源，打开任意浏览器，即可拥有定位能力</p>
          <p>多项业界首创、专利技术，电信级稳定性</p>
        </div>
      </div>
      <div class="middle-center">
      <div class="middle-center-div">
      <div class="middle-div-inside" v-for="(item,index) in middlelist" :key="index">
      <div><el-image :src="item.middleimg"></el-image></div>
      <div><span>{{item.titspan}}</span></div>
      <div><p>{{item.titp}}</p></div>
      </div>
      </div>
      <div class="middle-center-div">
      <div class="middle-div-inside" v-for="(item,index) in middlelist2" :key="index">
      <div><el-image :src="item.middleimg"></el-image></div>
      <div><span>{{item.titspan}}</span></div>
      <div><p>{{item.titp}}</p></div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      middlelist:[
        {id:0,middleimg:'http://www.ubitraq.com/images/a.png',titspan:'定位精度高',titp:'UWB高精度厘米级定位精度最高10cm'},
        {id:1,middleimg:'http://www.ubitraq.com/images/b.png',titspan:'覆盖范围广',titp:'基站覆盖距离100米基站数量少，成本低'},
        {id:2,middleimg:'http://www.ubitraq.com/images/c.png',titspan:'标签容量大',titp:'系统容纳标签数量无上限易拓展'},
        {id:3,middleimg:'http://www.ubitraq.com/images/d.png',titspan:'便于系统集成',titp:'丰富的API接口便于二次开发'},
      ],
      middlelist2:[
        {id:0,middleimg:'http://www.ubitraq.com/images/e.png',titspan:'定位精度高',titp:'UWB高精度厘米级定位精度最高10cm'},
        {id:1,middleimg:'http://www.ubitraq.com/images/f.png',titspan:'覆盖范围广',titp:'基站覆盖距离100米基站数量少，成本低'},
        {id:2,middleimg:'http://www.ubitraq.com/images/g.png',titspan:'标签容量大',titp:'系统容纳标签数量无上限易拓展'},
        {id:3,middleimg:'http://www.ubitraq.com/images/h.png',titspan:'便于系统集成',titp:'丰富的API接口便于二次开发'},
      ],
    }
  },
  mounted() {},
};
</script>
<style scoped>
.middle {
  margin-top: 80px;
  width: 100%;
}
.middle h2{
  font-size: 30px;
  font-weight: bolder;
}
.middle p{
  font-size: 16px;
  line-height: 30px;
  color: rgb(71, 71, 71);
}
.middle span{
  font-size: 16px;
  color: rgb(194, 6, 6);
}
.middle-k{
  width: 1060px;
  margin: 0 auto;
}
.middle-top{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
}
.middle-top div:nth-child(1){
  margin-bottom: 40px;
}
.middle-top div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.middle-center-div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.middle-div-inside{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 265px;
}
.middle-div-inside div:nth-child(1){
  margin-bottom: 20px;
}
.middle-div-inside div:nth-child(2){
  margin-bottom: 20px;
}
.middle-div-inside div:nth-child(3){
  width: 150px;
}
.middle-div-inside div:nth-child(3) p{
  text-align: center;
  font-size: 14px;
  line-height: 24px;
}
</style>