<template>
    <div class="prostart">
    <div class="prostart-k">
    <div class="prostart-square">
    <div class="start-img"><el-image :src="src1"></el-image></div>
    <div class="start-mb"></div>
    <div class="start-wk">
    <div class="prostart-zi">
    <h1>产品1</h1>
    <div class="start-no">
    <p>平等的学习机会，是个人就业发展，进一步回馈社会的第一步。华为致力于通过创新的ICT技术，为不同地域与种族的人们提供同等优质的教育机会，促进人类社会整体健康发展进步</p>
    <div class="start-an">了解更多</div>
    </div>
    </div>
    </div>
    </div>
        <div class="prostart-square" style="left:300px">
    <div class="start-img"><el-image :src="src1"></el-image></div>
    <div class="start-mb"></div>
    <div class="start-wk">
    <div class="prostart-zi">
    <h1>产品1</h1>
    <div class="start-no">
    <p>平等的学习机会，是个人就业发展，进一步回馈社会的第一步。华为致力于通过创新的ICT技术，为不同地域与种族的人们提供同等优质的教育机会，促进人类社会整体健康发展进步</p>
    <div class="start-an">了解更多</div>
    </div>
    </div>
    </div>
    </div>
        <div class="prostart-square" style="left:600px">
    <div class="start-img"><el-image :src="src1"></el-image></div>
    <div class="start-mb"></div>
    <div class="start-wk">
    <div class="prostart-zi">
    <h1>产品1</h1>
    <div class="start-no">
    <p>平等的学习机会，是个人就业发展，进一步回馈社会的第一步。华为致力于通过创新的ICT技术，为不同地域与种族的人们提供同等优质的教育机会，促进人类社会整体健康发展进步</p>
    <div class="start-an">了解更多</div>
    </div>
    </div>
    </div>
    </div>
        <div class="prostart-square" style="right:0px">
    <div class="start-img"><el-image :src="src1"></el-image></div>
    <div class="start-mb"></div>
    <div class="start-wk">
    <div class="prostart-zi">
    <h1>产品1</h1>
    <div class="start-no">
    <p>平等的学习机会，是个人就业发展，进一步回馈社会的第一步。华为致力于通过创新的ICT技术，为不同地域与种族的人们提供同等优质的教育机会，促进人类社会整体健康发展进步</p>
    <div class="start-an">了解更多</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
export default {
            data(){
                return{
                    src1:'http://www.ubitraq.com/images/system/anchors_system.png',
                    distance:0,
                }
            },
            mounted(){
               var _this=this;
               $(".prostart-square").hover(function () {
                  var b=$(this).position().left;
                  _this.distance=b;
                  var c= b-50+'';
                //   console.log(b);
                       $(this).stop().animate({
                           "z-index":'100',
                           "top":'-50',
                           "left": c,
                           "width":'400px',
                           "height":'400px',
                       },400).find(".start-mb").stop().animate({
                           opacity: '0.6',
                           width:'400px',
                           height:'400px'
                       },400).next().stop().animate({
                           "width":'400px',
                           "height":'400px',
                           "bottom":'20px'
                       },400).find("h1").stop().animate({
                           "bottom":'220px',
                           "font-size":'50px'
                       },400).next().stop().show().animate({
                           "width":'360px',
                           "bottom":'60px'
                       },400)
                       
                   }, function () {
                       $(this).stop().animate({
                           "top":'0',
                           "left":_this.distance,
                           "width":'300px',
                           "height":'300px',
                           "z-index":'1'
                       },400).find(".start-mb").stop().animate({
                           opacity: '0',
                           width:'300px',
                           height:'300px'
                       },400).next().stop().animate({
                           "width":'300px',
                           "height":'300px',
                           "bottom":'0px'
                       },400).find("h1").stop().animate({
                           "bottom":'0px',
                           "font-size":'30px'
                       },400).next().stop().animate({
                           "width":'260px',
                           "bottom":'-200px'
                       },400).hide()
                   }
               );
            }
}
</script>
<style scoped>
.prostart-k{
    position: relative;
    width: 1200px;
    height: 400px;
    /*border: 1px solid black;*/
    margin: 0 auto;
    display: flex;
    margin-top: 100px;
}
.prostart-square{
    position: absolute;
    width: 300px;
    height: 300px;
    /*border: 1px solid black;*/
    overflow: hidden;
}
.start-img{
    position: absolute;
}
.start-mb{
    position: absolute;
    opacity: 0;
    width: 300px;
    height: 300px;
    background-color: cadetblue;
}
.start-wk{
    position: relative;
    width: 300px;
    height: 300px;
    /*border: 1px solid red;*/
}
.prostart-zi{
    margin-left: 20px;
    margin-right: 20px;
}
.prostart-zi h1{
    position: absolute;
    bottom: 0px;
    font-size: 30px;
    margin-bottom: 50px;
}
.start-no{
    position: absolute;
    bottom: -200px;
    width: 260px;
    /*border: 1px solid black;*/
}
.prostart-zi p{
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 40px;
}
.start-an{
    width: 160px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid black;
    text-align: center;
    line-height: 40px;
    font-size: 20px;
}
</style>