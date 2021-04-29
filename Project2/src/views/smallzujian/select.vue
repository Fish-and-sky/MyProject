<template>
  <div class="select">
  <div><input type="text" v-model="tt"></div>
  <div class="xz">
  <div><span>{{list[where]}}</span></div>
  <div><span>1</span></div>
  </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            tt:'工作地点',
            list:[
                {id:1,where:"上海"}
            ]
        }
    },
    mounted(){

    }
}
</script>
<style scoped>
.select{
    position: relative;
}
.select input{
    width: 160px;
    height: 40px;
    background: none;
    outline: none;
}
.select .xz{
    width: 160px;
    border: 1px solid black;
}
.select .xz div{
    font-size: 20px;
    line-height: 26px;
}
</style>