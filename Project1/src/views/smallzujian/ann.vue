<template>
  <div class="ann">
    <div class="ann-k">
      <span>{{nr}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
      nr:{defacut:""}
  },
  mounted(){
    $(".ann").hover(function () {
        // over
        $(this).find(".ann-k").css({
          "border":"2px solid brown",
          "background-color": "brown",
          "color":"white"
        })
      }, function () {
        $(this).find(".ann-k").css({
          "border":"2px solid black",
          "background-color": "",
          "color":"black"
        })
      }
    );
  }
}
</script>
<style scoped>
.ann{
  width: 140px;
  height: 40px;
}
.ann-k{
  width: 140px;
  height: 40px;
  border: 2px solid black;
  text-align: center;
}
.ann-k span{
  line-height: 40px;
  font-size: 16px;
  font-weight: bold;
}
</style>