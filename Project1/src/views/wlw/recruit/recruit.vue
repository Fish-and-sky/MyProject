<template>
    <div class="recruit">
    <!--<div v-show="!flag"><header1></header1></div>-->
    <div v-show="!flag"><header3></header3></div>
    <!--<div v-show="!flag"><header4></header4></div>-->
    <div class="head" v-show="flag">
        <div :class="{'headside':recflag,'headside1':!recflag}"><span @click="tiaozhuan2()">返回职位列表</span></div>
    </div>
    <div :class="{'recruit-next':recflag,'recruit-next1':!recflag}">
    <div :class="{'recruit-center':recflag,'recruit-center1':!recflag}" v-show="!flag">
    <div class="recruit-show">二维码</div>
    <div class="recruit-top">
    <div class="recruit-top-div1">
    <div><span>职位筛选</span></div>
    <div>
    <div class="recruit-div1-ks"><span>分享到</span></div>
    </div>
    </div>
    <div class="recruit-top-div2">
    <input type="test" v-model="neiro" class="input1" placeholder="输入职位关键字" style="padding-left:20px">
    <input type="button" value="搜索职位" @click="openingDemand" @keyup.enter="enterSearch">
    </div>
    <div class="recruit-top-div3">
    <div class="recruit-l">
    <el-select v-model="value" clearable placeholder="工作地点" filterable class="recruit-select" @change="change(value)">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
    </div>
    <div class="recruit-c">
    <el-select v-model="two" clearable placeholder="学历要求" filterable class="recruit-select" @change="openingEducation(two)">
    <el-option
      v-for="item in list"
      :key="item.id"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
    </div>
    <div class="recruit-r">
    <el-select v-model="three" clearable placeholder="职能性质" filterable class="recruit-select" @change="openingProperties(three)">
    <el-option
      v-for="item in list1"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
    </div>
    </div>
    </div>
    <div class="recruit-list">
    <div class="recruit-list-one" v-for="(item,id) in reclist1" :key="id" @click="tiaozhuan1(item.openingId)">
    <div>
    <div class="list-one1">
    <span>急</span><span>{{item.openingPosition}} -{{item.openingPlace | ellipsis(2)}}</span>
    </div>
    <div class="list-one2">
    <span>{{item.openingProperties}}</span><span>{{item.openingEducation}}</span>
    </div>
    <div class="list-one3">
    <!-- <span>·</span> --><span>{{item.openingPlace}}市</span>
    </div>
    </div>
    <div class="list-right"><span>发布时间： {{item.openingDate}}</span></div>
    </div>
    </div>
    <div class="recruit-bottom" v-if="recflag1">
    <div class="recruit-b-k">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="pageall" @current-change="pagechange" :current-page="page1" :page-size="number">
    </el-pagination>
    </div>
    </div>
    <div class="recruit-bottom" v-if="!recflag1">
    <div class="recruit-b-k">
    <el-pagination
    background
    layout="prev, pager, next"
    :total="pageall1" @current-change="pagechange1" :current-page="page3" :page-size="number1">
    </el-pagination>
    </div>
    </div>
    </div>
    <div class="recruit-center" v-show="flag" style="background-color:white">
        <div class="show-top">
        <div class="recruit-list" style="margin-top:0px">
    <div class="recruit-list-one">
    <div>
    <div class="list-one0"><span>发布时间： {{openingDate}}</span></div>
    <div class="list-one1">
    <span>急</span><span>{{openingPosition}} -{{openingPlace}}</span>
    </div>
    <div class="list-one2">
    <span>{{openingProperties1}}</span><span>{{openingEducation1}}</span>
    </div>
    <div class="list-one3">
    <span>{{openingPlace}}</span>
    </div>
    </div>
    <div class="list-right"><el-button type="primary">申请职位</el-button></div>
    </div>
    </div>
        </div>
        <div class="show-center">
        <div style="margin-bottom:20px;font-size:18px;font-weight:600"><span>职位描述</span></div>
        <div v-html="div" style="margin-bottom:20px"></div>
        <div style="margin-bottom:20px;font-size:18px;font-weight:600"><span>职位信息</span></div>
        <div style="margin-bottom:20px;"><span style="font-size:14px;color:rgb(129, 129, 129);">职位类别</span></div>
        <div><span>{{openingPosition}}</span></div>
        <div style="whide:100%;margin-top:60px;margin-bottom:20px;display:flex;justify-content: center;"><el-button type="primary">申请职位</el-button></div>
        </div>
    </div>
    <div :class="{'recruit-right':recflag,'recruit-right1':!recflag}">
    <div class="recruit-right-k">
    <div class="recruit-right-y">
    <div class="recruit-y-top"><span>最新职位</span></div>
    <div class="recruit-y-next" v-for="(item,id) in reclist2" :key="id" @click="tiaozhuan1(item.openingId)"><span>急</span><span>{{item.openingPosition}} - {{item.openingPlace | ellipsis(2)}}</span></div>
    </div>
    <div class="fudo" v-show="recflag">更多</div>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import {Select,Option,Pagination,Button} from 'element-ui'
import header1 from '../header/header.vue'
import header3 from '../header/header3.vue'
import header4 from '../header/header4.vue'
export default {
    data(){
        return{
            div:'<h1>有的大部分内容</h1>',
            recflag1:true,
            recflag:true,
            openingDate:'',
            openingPosition:'',
            openingPlace:'',
            page:0,
            page1:1,
            page2:0,
            page3:1,
            openingProperties1:'',
            reclist1:[],
            reclist2:[],
            reclist3:[],
            flag:false,
            neiro:"",
            options: [{
          value: '选项1',
          label: '浙江·宁波',
          time:'2020-12-26',
          neng:'技术类',
          li:'其他'
        }, {
          value: '选项2',
          label: '上海',
          time:'2020-12-23',
          neng:'业务拓展类',
          li:'实习'
        }, {
          value: '选项3',
          label: '北京',
          time:'2020-12-16',
          neng:'产品类',
          li:'兼职'
        }, {
          value: '选项4',
          label: '广东·深圳',
          time:'2020-12-22',
          neng:'综合类',
          li:'兼职'
        }, {
          value: '选项5',
          label: '广州',
          time:'2020-12-22',
          neng:'项目类',
          li:'全职'
        }],
        list:[
            {id:1,label:"博士"},
            {id:2,label:"硕士"},
            {id:3,label:"本科"},
            {id:4,label:"大专"},
        ],
        list1:[
            {id:0,label:"全职"},
            {id:1,label:"兼职"},
            {id:2,label:"实习"},
            {id:3,label:"其他"},
        ],
        value: '',
        thelist:['选项1',
          '杭州',
          '2020-12-26',
          '技术类',
          '其他',
          '前端工程师'],
        two:'',
        three:'',
        openingPlace1:'',
        openingEducation1:'',
        openingProperties2:'',
        openingEducation2:'',
        length:0,
        recthW:0,
        pageall:1,
        number:9,
        pageall1:1,
        number1:9,
        }
    },
    created(){
        window.scroll(0, 0);
        //解决进入详情页刷新后回到选择页
        this.flag=sessionStorage.getItem('recruitflag');
        if(this.flag=='false'){
            this.flag=false;
        }else if(this.flag=='true'){
            this.flag=true;
        }
        this.page=parseInt(sessionStorage.getItem('recpage'));
        this.page1=parseInt(sessionStorage.getItem('recpage1'));
        this.recid=sessionStorage.getItem('recruit');
        var _this=this;
        axios.get('/portalOpenings/getById?id='+_this.recid)
            .then(res=>{
                _this.reclist3=res.data.data;
                _this.div=_this.reclist3.openingDemand;
                _this.openingDate=_this.reclist3.openingDate;
                _this.openingPlace=_this.reclist3.openingPlace;
                _this.openingPosition=_this.reclist3.openingPosition;
                _this.openingProperties1=_this.reclist3.openingProperties;
                _this.openingEducation1=_this.reclist3.openingEducation;
            }).catch(err=>{
                console.log(err);
            })
        //防止页面刷新，下方分页器页数变化
        if(this.page>0){
            this.page=parseInt(sessionStorage.getItem('recpage'));
            axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:_this.page,
                pageSize:_this.number,
            }
        })
        .then(function(res){
            _this.reclist1=res.data.content;
            _this.pageall=res.data.totalElements;
            // console.log(res);
        }).catch(function(err){
            console.log(err);
        })
        }else{
            this.page=0;
            axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:_this.page,
                pageSize:_this.number,
            }
        })
        .then(function(res){
            _this.reclist1=res.data.content;
            _this.pageall=res.data.totalElements;
        }).catch(function(err){
            console.log(err);
        })
        }
        if(this.page1>1){
            this.page1=parseInt(sessionStorage.getItem('recpage1'));
            axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:_this.page,
                pageSize:_this.number,
            }
        })
        .then(function(res){
            _this.reclist1=res.data.content;
            _this.pageall=res.data.totalElements;
            // console.log(res);
        }).catch(function(err){
            console.log(err);
        })
        }else{
            this.page1=1;
            axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:_this.page,
                pageSize:_this.number,
            }
        })
        .then(function(res){
            _this.reclist1=res.data.content;
            _this.pageall=res.data.totalElements;
            // console.log(res);
        }).catch(function(err){
            console.log(err);
        })
        }
        this.enterSearch();
    },
    methods:{
        change(val){
            this.openingPlace1=val;
            this.page3=1;
            this.page2=0;
            this.all();
        },
        openingProperties(id){
            this.openingProperties2=id;
            this.page3=1;
            this.page2=0;
            this.all();
        },
        openingEducation(val){
            this.openingEducation2=val;
            this.page2=0;
            this.page3=1;
            this.all();
        },
        //搜索框的按钮点击实现
        openingDemand(){
            this.page2=0;
            this.page3=1;
            this.all();
        },
        all(){
            var _this=this;
            _this.recflag1=false;
            axios.get('/portalOpenings/getAll',{
                params: {
                pageNum:_this.page2,
                pageSize:_this.number1,
                openingPlace:_this.openingPlace1,
                openingProperties:_this.openingProperties2,
                openingEducation:_this.openingEducation2,
                openingDemand:_this.neiro
                }
            })
            .then(res=>{
                _this.reclist1=res.data.content;
                console.log(_this.reclist1);
                _this.pageall1=res.data.totalElements;
            }).catch(err=>{
                console.log();
            })
        },
        //按钮绑定回车事件
        enterSearch(){
            document.onkeydown = e =>{
                //13表示回车键，baseURI是当前页面的地址，为了更严谨，也可以加别的，可以打印e看一下
                if (e.keyCode === 13 && e.target.baseURI.match('/recruit')) {
                //回车后执行搜索方法
                    this.openingDemand();
                }
            }},
        pagechange(val){
            
                this.page=val-1;
            this.page1=val;
            console.log(this.page);
            sessionStorage.setItem('recpage',this.page);
            sessionStorage.setItem('recpage1',this.page1);
            console.log(this.page);
            var _this=this;
            axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:_this.page,
                pageSize:_this.number,
            }
        })
        .then(function(res){
            _this.reclist1=res.data.content;
            console.log(_this.reclist1);
        }).catch(function(err){
            console.log(err);
        })
            
        },
        pagechange1(val){
            this.page2=val-1;
            this.page3=val;
            sessionStorage.setItem('recpage2',this.page2);
            sessionStorage.setItem('recpage3',this.page3);
            this.all();
        },
        tiaozhuan1(id){
            this.flag=true;
            var _this=this;
            sessionStorage.setItem('recruit',id);
            sessionStorage.setItem('recruitflag',this.flag);
            _this.recid=sessionStorage.getItem('recruit');
            //改动
            axios.get('/portalOpenings/getById?id='+_this.recid)
            .then(res=>{
                _this.reclist3=res.data.data;
                _this.div=_this.reclist3.openingDemand;
                _this.openingDate=_this.reclist3.openingDate;
                _this.openingPlace=_this.reclist3.openingPlace;
                _this.openingPosition=_this.reclist3.openingPosition;
                _this.openingProperties1=_this.reclist3.openingProperties;
                _this.openingEducation1=_this.reclist3.openingEducation;
            }).catch(err=>{
                console.log(err);
            })
        },
        tiaozhuan2(){
            this.flag=false;
            sessionStorage.setItem('recruitflag',this.flag);

        }
    },
    mounted(){
        var _this=this;
        _this.recthW = $(window).width();
        if(_this.recthW>=1300){
            _this.recflag=true;
        }else if(_this.recthW<1300){
            _this.recflag=false;
        }else{}

        window.onresize = function(){
            _this.recthW = $(window).width();
            if(_this.recthW>=1300){
            _this.recflag=true;
        }else if(_this.recthW<1300){
            _this.recflag=false;
        }else{}
        }
        var recid=sessionStorage.getItem('recruit');
        var _this=this;
        //获取最热门的三条
        axios.get('/portalOpenings/getAll',{
            params:{
                pageNum:0,
                pageSize:3,
            }
        })
        .then(function(res){
            _this.reclist2=res.data.content;
        }).catch(function(err){
            console.log(err);
        })
        $(".recruit-div1-ks span").hover(function () {
                $(".recruit-show").css({
                    display:'block'
                })
            }, function () {
                $(".recruit-show").css({
                    display:'none'
                })
            }
        );
        $(".input1").focus(function () { 
            $(this).css({
                
            })
            
        });
    },
    components:{header1,"el-select":Select,"el-option":Option,"el-pagination":Pagination,"el-button":Button,header3,header4}
}
</script>
<style scoped>
.recruit{
    background-color: rgb(238, 241, 240);
}
.recruit .head{
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.recruit .head .headside{
    width:1160px;
    font-size:16px;
    margin-top:20px;
    font-weight:500
}
.recruit-next{
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: center;
    padding: 30px 0px 0px 0px;
}
.recruit-center{
    position: relative;
    width: 840px;
}
.recruit-top{
    padding: 20px;
    background-color: white;
}
.recruit-top-div1{
    position: relative;
    display: flex;
    justify-content: space-between;
}
.recruit-top-div1 div:nth-child(1) span{
    font-size: 16px;
    font-weight: 500;
    font-weight: 500;
    color: black;
    font-weight: 500;
}
.recruit-top-div2{
    margin-top: 20px;
    display: flex;
}
.recruit-top-div2 input:nth-child(1){
    width: 760px;
    height: 30px;
    background:none;  
    outline:none;  
    border:1px solid #ccc;
}
.recruit-top-div2 input:nth-child(1):focus{
    border: 1px solid rgb(114, 114, 114);
}
.recruit-top-div2 input:nth-child(2){
    width: 80px;
    height: 32px;
    background-color: burlywood;
    outline:none;  
    border:none;
}
.recruit-top-div2 input:nth-child(2):focus{
    border: none;
}
.recruit-div1-ks{
    top: 0px;
    right: 0px;
}
.recruit-show{
    position: absolute;
    display: none;
    top: 40px;
    right: 0px;
    width: 100px;
    height: 100px;
    background-color: burlywood;
    z-index: 2;
}
.recruit-top-div3{
    display: flex;
    margin-top: 20px;
}
.recruit-l{
    margin-right: 20px;
}
.recruit-c{
    margin-right: 20px;
}
.recruit-select{
    width: 160px;
}
.recruit-list{
    margin-top: 10px;
    background-color: white;
    padding: 20px;
    padding-top: 0px ;
}
.recruit-list-one{
    position: relative;
    padding: 20px 0px 20px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(216, 214, 214);
}
.list-right{
    position: absolute;
    bottom: 20px;
    right: 0px;
}
.list-right span{
    font-size: 14px;
}
.list-one0{
    margin-bottom: 10px;
    font-size: 12px;
    color: rgb(129, 129, 129);
}
.list-one1 span:nth-child(1){
    padding: 4px;
    background-color: rgb(247, 110, 110);
    color: white;
    margin-right: 5px;
    border-radius: 1px;
}
.list-one1 span:nth-child(2){
    font-size: 18px;
    font-weight: 400;
}
.list-one2{
    margin-top: 20px;
}
.list-one2 span{
    font-size: 14px;
    color: rgb(105, 105, 105);
}
.list-one2 span:nth-child(1){
    margin-right: 20px;
}
.list-one3{
    margin-top: 20px;
    font-size: 14px;
}
.recruit-right{
    background-color: white;
    width: 260px;
    max-height: 380px;
    margin-left: 20px;
    padding:20px;
}
.recruit-right-k{
    position: relative;
    width: 100%;
    height: 100%;
}
.recruit-right .fudo{
    position: absolute;
    right: 0px;
    top: 0px;
}
.recruit-y-top{
    margin-bottom: 10px;
}
.recruit-y-top span{
    font-size: 20px;
    color: black;
    font-weight: 500;
}
.recruit-y-next{
    padding: 20px 0px;
    border-bottom: 1px solid rgb(231, 231, 231);
}
.recruit-y-next span:nth-child(1){
    padding: 4px;
    background-color: rgb(247, 110, 110);
    color: white;
    margin-right: 5px;
    border-radius: 1px;
}
.recruit-y-next span:nth-child(2){
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
}
.recruit-bottom{
    margin: 20px 0px 40px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-center{
    padding: 0px 20px 0px 20px;
}
/*另一*/
.recruit .head .headside1{
    width: 1000px;
    font-size:16px;
    margin-top:20px;
    font-weight:500;
}
.recruit-right1{/*改*/
    background-color: white;
    width: 240px;
    max-height: 380px;
    margin-left: 20px;
    padding:20px;
}
.recruit-center1{/*改*/
    position: relative;
    width: 660px;
}
.recruit-next1{/*改*/
    margin: 0 auto;
    width: 1000px;
    display: flex;
    justify-content: center;
    padding: 30px 0px 0px 0px;
}
/*
2月1号，修复根据地区，学历，职位，状态查询的bug（绑定属性重复导致属性留存，清零失败）
*/
</style>