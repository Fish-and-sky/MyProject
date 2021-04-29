<template>
    <div class="downBox">
        <div class="header-top3" v-show="flag">
        <div class="header-top3-center">
            <div class="top3-tt" v-for="(item,index1) in dlist" :key="index1">
                <div class="header-top3-title">{{(dlist[index1])[0]}}</div>
                <div>
                <div class="top3-ttt" v-for="(item,index) in dlist[index1]" :key="index">{{dlist[index1][index+1]}}</div>
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
            flag:true,
            list:[],
            dlist:[
                ["产品","运营商网络","企业无线","企业网络","企业光传送与接入","华为云","数据储存","智能协作"],
                ["服务","运营商网络服务","企业网络服务","华为云专业服务"],
                ["行业解决方案","电信行业","数字政府","智慧园区","交通行业","电力行业"],
                ["热点话题","智能体","5G加速","F5G，光联万物","自动驾驶网络"]
            ]
        }
    },
     props:{
        // dlist: {
		// 		type: Array
		// 	},
    },
    methods:{
        
    },
    mounted(){
    }
}
</script>
<style scoped>
.header-top3{
    width: 100%;
    /*height: 80px;*/
    padding: 20px;
    background-color: antiquewhite;
    border:1px solid black;
    display: flex;
    justify-content: center;
    z-index: 999;
    /*visibility: hidden;*/
}
.header-top3-center{
    margin-left: -40px;
    width: 80%;
    justify-content: center;
    /*background-color: rgb(240, 151, 18);*/
    display: flex;
}
    .header-top3-title{
        font-size: 30px;
        min-width:100px;
        font-weight: bold;
        padding-right: 10px;
        padding-bottom: 10px;
        /*background-color: chartreuse;*/
        border-bottom: 2px solid #ccc;
    }
    .top3-tt{
        padding-right: 40px;
    }
    .top3-ttt{
        font-size: 16px;
        color: rgb(13, 191, 214);
        margin: 12px;
        margin-left: 0px;
        /*background-color: chartreuse;*/
    }
    /*
    下拉框
    */
</style>