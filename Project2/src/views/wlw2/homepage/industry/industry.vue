<template>
  <div class="industry">
      <div class="industry-k" @click="changepage">
      <div class="industry-title">
      <h2>厘米级高精度室内外定位系统，超宽带技术</h2>
      </div>
      <div class="industry-img">
      <el-image :src="induimg"></el-image>
      <div class="industry-men"></div>
      <div class="industry-img-title">
      <p>运营商级位置服务解决方案</p>
      <p>厘米级高精度室内外定位系统，便捷部署，洞见数据</p>
      </div>
      </div>
      </div>
  </div>
</template>
<script>
import $ from "jquery"
export default {
  data(){
    return{
      induimg:'http://www.ubitraq.com/images/zzz.png'
    }
  },
  methods:{
    changepage(){
      this.$router.push('/project')
    }
  },
  mounted(){
    $(".industry-img").hover(function () {
        $(this).find(".el-image").stop().animate({
          'top':'-40px',
          'left':'-80px',
          'width':'1220px',
          'height':'450px'
        }).next().stop().css({
          'opacity':'0.4'
        })
      }, function () {
        $(this).find(".el-image").stop().animate({
          'top':'0px',
          'left':'0px',
          'width':'1060px',
          'height':'370px'
        }).next().stop().css({
          'opacity':'0.5'
        })
      }
    );
  }
}
</script>
<style scoped>
.industry{
  width: 100%;
  background-color: rgb(242, 250, 250);
  margin-top: 80px;
}
.industry h2{
  font-size: 30px;
  font-weight: bolder;
}
.industry p{
  font-size: 18px;
  color: white;
  line-height: 30px;
}
.industry-k{
  width: 1060px;
  height: 550px;
  padding-bottom: 40px;
  margin: 0 auto;
  background-color: rgb(242, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.industry-title{
  margin-top: 40px;
  margin-bottom: 60px;
}
.industry-img{
  position: relative;
  width: 1060px;
  height: 370px;
  border: 1px solid black;
  overflow: hidden;
}
.industry-img .el-image{
  width: 1060px;
  height: 370px;
}
.industry-men{
  position: absolute;
  top: 0px;
  width: 1060px;
  height: 370px;
  background-color: black;
  opacity: 0.5;
  z-index: 2;
}
.industry-img-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  z-index: 3;
}
</style>