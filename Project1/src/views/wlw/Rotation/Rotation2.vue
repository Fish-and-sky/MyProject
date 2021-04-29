<template>
  <div class="Rotation2">
    <el-carousel trigger="click" height="500px" :interval="8000">
      <el-carousel-item v-for="(item,id) in ro2list" :key="id">
        <el-image :src="item.bannerImg" style="width:100%"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import {Carousel,CarouselItem,Image} from 'element-ui'
import axios from 'axios'
export default {
    data(){
        return{
          data:'',
          ro2list:[],
            list:[
                {id:1,bannerImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3778871930,1376563598&fm=26&gp=0.jpg'},
                {id:2,bannerImg:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3778871930,1376563598&fm=26&gp=0.jpg'},
            ]
        }
    },
    mounted(){
      var _this=this;
      axios.get('/portalBanner/getAll')
      .then(function(res){
        _this.ro2list=res.data.data.splice(0,4);
      })
      .catch(function(err){
        _this.ro2list=_this.list;
        console.log(err);
      })
    },
    methods:{
      
    },
    components:{
        "el-carousel":Carousel,
        "el-carousel-item":CarouselItem,
        "el-image":Image
    }
}
</script>
<style scoped>
</style>