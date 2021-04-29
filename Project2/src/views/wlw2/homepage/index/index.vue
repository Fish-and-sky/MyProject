<template>
  <div :class="{index:inflag,index1:!inflag}">
    <!--<div class="index-top"><header4></header4></div>-->
    <div class="index-top"><header1></header1></div>
    <div><rotation></rotation></div>
    <div><middle></middle></div>
    <div><thevideo></thevideo></div>
    <div><produce></produce></div>
    <div><industry></industry></div>
    <div><partner></partner></div>
    <div><bottom></bottom></div>
  </div>
</template>
<script>
import header4 from "../../header2/header4.vue";
import rotation from "../rotation/rotation3.vue";
import header1 from "../../header2/header.vue";
import middle from "../middle/middle.vue";
import thevideo from "../video/thevideo.vue";
import produce from "../produce/produce.vue"
import industry from "../industry/industry.vue"
import partner from "../partner/partner.vue"
import bottom from "../../bottom/bottom.vue"
export default {
  name:"index",
  data() {
    return {
      inflag:true,
      screenWidth:0,
    };
  },
  mounted() {
  },
  components: { header4, rotation, header1, middle, thevideo ,produce ,industry,partner,bottom},
};
</script>
<style scoped>
.index {
  min-width: 1100px;
}
.index1 {
  min-width: 1300px;
}
</style>