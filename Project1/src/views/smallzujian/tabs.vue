<template>
  <div class="tabs">
    <div class="tabs-top">
        <div class="tabs-title"><h1>关于立捷</h1></div>
        <div class="tabs-list" >
        <div class="tabs-dan" v-for="(item,id) of tablist" :key="id" @click="dianj(id)">
        <span>{{item.title}}</span>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            tablist:[
                {id:1,title:'公司简介'},
                {id:2,title:'公司理念'},
                {id:3,title:'管理层信息'},
                {id:4,title:'办公环境'},
            ],
            tabindex:3,
        }
    },
    props:{
        h3id:{defauct:""}
    },
    created(){
        // console.log('h3'+this.h3id);
    },
    methods:{
        dianj(id){
            /*console.log(id);*/
            // console.log('h3'+this.h3id);
            this.$emit('chuan-di',id);
        },
    },
    mounted(){
      var _this=this;
      $(function(){
            $(".tabs-list div").eq(_this.h3id).find("span").css({
                "border-bottom": "2px solid black"
            }).parent().siblings().find("span").css({
                "border-bottom": "0px solid black"
            })
      })
        $(".tabs-dan").click(function(){
            $(this).find("span").css({
                "border-bottom": "2px solid black"
            }).parent().siblings().find("span").css({
                "border-bottom": "0px solid black"
            })
        })
    }
}
</script>
<style scoped>
.tabs{
    width: 100%;
    border-bottom: 1px solid rgb(204, 204, 204);
}
.tabs-top{
    width: 60%;
    height: 50px;
    /*border: 1px solid black;*/
    display: flex;
    align-items: center;
    margin: 0 auto;
}
.tabs-title{
    width: 100px;
    border-right: 2px solid rgb(185, 185, 185);
}
.tabs-title h1{
    font-size: 16px;
    font-weight: bold;
}
.tabs-list{
    display: flex;
}
.tabs-dan{
    margin-left:20px;
    margin-right: 20px;
    /*border-bottom: 2px solid black;*/
}
.tabs-dan span{
    font-size: 16px;
    padding-bottom: 15px;
}
.tabs-list .tabs-dan:nth-child(1) span{
    border-bottom: 2px solid black;
}
.tabs-xian{
    width: 100px;
    height: 1px;
    background-color: black;
}
</style>