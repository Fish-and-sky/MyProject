<template>
    <div class="aboutintr3">
    <div :class="{'intr3-w':flag,'intr3-w1':!flag}">
    <div :class="{'intr3-right':flag,'intr3-right1':!flag}">
    <div class="intr3-right-top">
    <div class="intr3-right-title"><h1>开发·合作·共赢</h1><div class="intr3-xian"></div></div>
    <div style="display:flex;flex-direction:row-reverse;"><div class="intr3-right-tt"><p>{{intr3tt3}}</p></div></div>
    <div style="display:flex;flex-direction:row-reverse;font-size:16px;font-weight:bold;margin-top:40px"><span>了解更多</span></div>
    </div>
    <div>
    <div :class="{'intr3-left-tu':flag,'intr3-left-tu1':!flag}">
    <el-image :src="src2"></el-image>
    </div>
    <div :class="{'intr3-left-title':flag,'intr3-left-title1':!flag}">
    <h1>关键进展和产业贡献</h1>
    <p>{{intr3tt2}}
    </p></div>
    </div>
    </div>
    <div :class="{'intr3-left':flag,'intr3-left1':!flag}">
    <div :class="{'intr3-left-tu':flag,'intr3-left-tu1':!flag}">
    <el-image :src="src1"></el-image>
    </div>
    <div :class="{'intr3-left-title':flag,'intr3-left-title1':!flag}">
    <h1>生态与产业发展理念</h1>
    <p>{{intr3tt}}
    </p></div>
    </div>
    </div>
    </div>
</template>
<script>
import {Image} from 'element-ui'
export default {
    data(){
        return{
            src1:'https://www-file.huawei.com/-/media/corp2020/abouthuawei/corporate-information/debate_in_transparency_center.jpg',
            src2:'https://www-file.huawei.com/-/media/corp2020/abouthuawei/corporate-information/huawei_developer_day.jpg',
            intr3tt:'聚焦ICT基础设施和智能终端，坚持开放式创新，构建友好、健康的产业环境，开拓遍及全球、贴近生态伙伴的数字化、智能化、本地化的“黑土地”，让各个伙伴的内容、应用在上面生长，形成合力，为客户提供场景化的解决方案与服务。',
            intr3tt2:'2019年，华为得到众多产业组织、合作伙伴的信任和支持， 共同维护公平、公正、公开的产业环境。3GPP、GSMA、ETSI、IEEE、IETF、Linux Foundation、Apache、TMF等国际组织发表公开声明，在遵循法律的基础上，支持包括华为在内的所有会员参与公开的产业活动，为产业持续贡献。',
            intr3tt3:'产业组织、合作伙伴的信任和支持， 共同维护公平、公正、公开的产业环境。护公平、公正、公开的产业环ffafqfqfq'
        }
    },
    props:{
        flag:{defauct:""},
    },
    components:{'el-image':Image}
}
</script>
<style scoped>
.aboutintr3{
    margin-top: 60px;
    width: 100%;
}
.intr3-w{/*改*/
    width: 1300px;
    margin: 0 auto;
    display: flex;
    /*border: 1px solid black;*/
    flex-direction: row-reverse;
    justify-content: space-between;
}
.intr3-left{/*改*/
    margin-top: 180px;
    width: 600px;
    /*border:1px solid red;*/
}
.intr3-left-tu{/*改*/
    width: 600px;
    overflow: hidden;
    object-fit: fill;
}
.intr3-left-title{/*改*/
    width: 600px;
}
.intr3-left-title h1{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bolder;
}
.intr3-left-title p{
    font-size: 16px;
    line-height: 30px;
}
.intr3-right-top{
    margin-bottom: 100px;
    /*border: 1px solid black;*/
}
.intr3-right{/*改*/
    width: 600px;
    /*border: 1px solid brown;*/
}
.intr3-right-title{
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 30px;
}
.intr3-right-title h1{
    font-size: 32px;
    font-weight: bolder;
}
.intr3-xian{
    position: absolute;
    top: 40px;
    right: 0px;
    width: 80px;
    height: 2px;
    background-color: black;
}
.intr3-right-tt{
    display: flex;
    flex-direction: row-reverse;
    width: 400px;
    /*border: 1px solid black;*/
    margin-top: 20px;
}
.intr3-right-tt p{
    font-size: 16px;
    line-height: 26px;
}

.intr3-w1{/*改*/
    width: 1000px;
    margin: 0 auto;
    display: flex;
    /*border: 1px solid black;*/
    flex-direction: row-reverse;
    justify-content: space-between;
}
.intr3-left1{/*改*/
    margin-top: 180px;
    width: 480px;
    /*border:1px solid red;*/
}
.intr3-left-tu1{/*改*/
    width: 480px;
    overflow: hidden;
    object-fit: fill;
}
.intr3-left-title1{/*改*/
    width: 480px;
}
.intr3-right1{/*改*/
    width: 480px;
    /*border: 1px solid brown;*/
}
.intr3-left-title1 h1{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bolder;
}
.intr3-left-title1 p{
    font-size: 14px;
    line-height: 24px;
}
</style>