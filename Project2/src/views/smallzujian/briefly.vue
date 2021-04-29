<template>
    <div class="briefly">
    <div class="briefly-div">
        <div class="div-top"><el-image srcb=""></el-image></div>
        <div class="div-next">
        <div class="next-top"><h1>{{titleb}}</h1></div>
        <div class="next-bottom"><p>{{neirob | ellipsis(100)}}</p></div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            // titleb:'标题',
            // neirob:'内容',
            // srcb:''
        }
    },
    props:{
        srcb:{defauct:''},
        titleb:{defauct:''},
        neirob:{defauct:''}
    }
}
</script>
<style scoped>
.briefly{
    width: 300px;
    height: 400px;
    border: 1px solid black;
}
.briefly-div{
    width: 240px;
    border: 1px solid black;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
}
.div-top{
    width: 60px;
    height: 60px;
    border-radius: 60px;
    border: 1px solid black;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.div-next{
    margin-top: 40px;
    border: 1px solid black;
    margin-bottom: 40px;
}
.next-top{
    text-align: center;
}
.next-top h1{
    font-size: 30px;
    font-weight: bolder;
}
.next-bottom{
    margin-top: 20px;
}
.next-bottom p{
    font-size: 18px;
    line-height: 26px;
}
</style>