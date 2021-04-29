<template>
    <div class="idea">
    <div class="idea-top">
    <div class="idea-tu">
    <div><el-image :src="src" class="idea-img"></el-image></div>
    <div class="idea-title">
    <div style="text-align: center;"><span>公司理念</span></div>
    <div style="margin-top:40px"><p>官方发布的最新动态或消息，为您提供关于本公司的第一手资讯</p></div>
    </div>
    </div>
    </div>
    <div :class="{'idea-center':flag,'idea-center1':!flag}">
    <div class="idea-center-s"><h1>公司理念</h1></div>
    <div class="idea-center-z">
    <p>公司存在的唯一理由是为客户服务。多产粮食，增加土壤肥力是为了
    更有能力为客户服务。“以客户为中心，为客户创造价值”是公司的共同价值。
    权力是为了实现共同价值的推进剂和润滑剂。反之，权力不受约束，会阻碍和
    破坏共同价值守护。公司拥有完善的内部治理架构，各治理机构权责清晰、责任
    聚焦，但又分权制衡，使权力在闭合中循环，在循环中科学更替。</p>
    <p>公司在治理层实行集体领导，不把公司的命运系于个人身上，
    集体领导遵循共同价值、责任聚焦、民主集中、分权制衡、自我批判的原则。</p>
    <p>公司坚持以客户为中心、以奋斗者为本，持续改善公司治理架构、组织、
    流程和考核，使公司长期保持有效增长。</p>
    <p>股东会是公司权力机构，对公司增资、利润分配、选举董事/监事等重大事项作出决策。</p>
    <p>董事会是公司战略、经营管理和客户满意度的最高责任机构，承担带领公司前进的使命，
    行使公司战略与经营管理决策权，确保客户与股东的利益得到维护。</p>
    <p>公司董事会及董事会常务委员会由轮值董事长主持，轮值董事长在当值期间是公司最高领袖。</p>
    <p style="text-align: center;"><img src="https://www-file.huawei.com/-/media/corporate/images/about-huawei/2020/c
    orporate-governance-structure-19cn.jpg?la=zh" alt="" style="width:94%;"></p>
    <p>为加强对ICT基础设施业务的端到端经营管理，公司成立了ICT基础设施业务管理委员会，
    作为公司ICT基础设施业务战略、经营管理和客户满意度的责任机构。</p>
    </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            src: 'https://www-file.huawei.com/-/media/corp2020/abouthuawei/corporate-information/corp-info-banner.jpg',
            ideatitle:'内容',
        }
    },
    props:{
        flag:{defauct:""},
    }
}
</script>
<style scoped>
.idea-tu{
    position: relative;
}
.idea-title{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.idea-title span{
    font-size: 50px;
    color: white;
    font-weight: bolder;
}
.idea-title p{
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.idea-img{
    height: 340px;
    width: 100%;
}
.idea-center{
    width: 1300px;
    /*border-left: 1px solid #cccccc;*/
    /*border-right: 1px solid #cccccc;*/
    margin: 0 auto;
    margin-top: 40px;
}
.idea-center-s{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
.idea-center-s h1{
    font-size: 30px;
    font-weight: bolder;
}
.idea-center-z{
    margin-top: 40px;
    font-size: 14px;
    line-height: 24px;
}
.idea-center-z p{
    font-size: 16px;
    line-height: 26px;
    margin-top: 10px;
}
.idea-center1{
    width: 1000px;
    /*border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;*/
    margin: 0 auto;
    margin-top: 40px;
}
</style>