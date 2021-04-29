<template>
    <div class="function">
    <div class="function-whole">
    <div class="function-top">
    <h1>选择立捷电子的理由</h1>
    </div>
    <div class="function-k">
    <div class="function-div">
    <div class="function-div-top"><img src="../../../assets/logo.png" alt=""></div>
    <div class="function-div-bottom">
    <h3>123</h3>
    <p>{{ title|ellipsis(60)}}</p>
    </div>
    </div>
    <div class="function-div">
    <div class="function-div-top"><img src="../../../assets/logo.png" alt=""></div>
    <div class="function-div-bottom">
    <h3>123</h3>
    <p>{{ title|ellipsis(60)}}</p>
    </div>
    </div>
    <div class="function-div">
    <div class="function-div-top"><img src="../../../assets/logo.png" alt=""></div>
    <div class="function-div-bottom">
    <h3>123</h3>
    <p>{{ title|ellipsis(60)}}</p>
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
            title:'发觉佛i就破i斤斤计较评价哦iiiiiiiii离开家斤斤计较经济界了解酷酷酷12333333333333312222222222'
        }
    }
}
</script>
<style scoped>
.function p{
    font-size: 16px;
    color: black;
    line-height: 24px;
    text-indent: 36px;
}
.function h3{
    font-size: 20px;
    font-weight: bolder;
}
.function h1{
    font-size: 36px;
    font-weight: bolder;
}
.function-whole{
    width: 1000px;
    margin: 0 auto;
}
.function-top{
    text-align: center;
    margin-bottom: 30px;
}
.function-k{
    width: 1000px;
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
}
.function-div{
    width: 300px;
    height: 300px;
    border: 1px solid black;
}
.function-div-top{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50px;
    border: 1px solid black;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.function-div-top img{
    width: 80%;
    height: 80%;
}
.function-div-bottom{
    width: 280px;
    height: 120px;
    margin: 40px 10px 0px 10px;
    border: 1px solid black;
    overflow: hidden;
}
.function-div-bottom h3{
    text-align: center;
    margin-bottom: 10px;
}
</style>