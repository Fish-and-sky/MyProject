<template>
    <div class="prodetails">
    <div class="prod-top">
    <el-page-header @back="goBack" content="产品详情页面" style="padding-left:20px;"></el-page-header>
    </div>
    <div class="prod-c-top"><h1>{{productName}}</h1></div>
    <div class="prod-center">
    <div class="prod-title"></div>
    <div v-html="value" class="markdown"></div>
    </div>
    <div><bottom></bottom></div>
    </div>
</template>
<script>
import bottom from '../bottom/bottom.vue'
import marked from 'marked'
import axios from 'axios'
import '../../../assets/css/markdown.css'
export default {
    data(){
        return{
            prodtt:'13213211321',
            value:'',
            msg1:'```![弗利萨](https://blog-static.cnblogs.com/files/yanl55555/fulisa.ico) \n@RestController \n public class XXXController{ \n \n @ResponseStatus(HttpStatus.FOUND)\n public User postResponseController() {\n    return new User(\"Thanks For Posting!!!\");\n }\n@ResponseStatus\nResponseStatus虽然只是规定了返回的状态，但是只需要标注在方法上，简单，而且状态码与返回类型分离，比较清晰。我们将上面返回对象列表的代码使用ResponseStatus改写如下，注意类级别@RestController:```',
            msg:'```html \n<form method="GET" action="/transferFunds ">\n cash: <input type="text" name="cash"> \n to: <input type=" text " name=“to"> \n<input type="submit" name="action" value=""> \n</form> \n```',
            prodetailsid:'',
            productName:'',
            productIntroduction:'',
        }
    },
    created(){
        var _this=this;
        this.prodetailsid=this.$route.params.prodetails;
        _this.prodetailsid=sessionStorage.getItem('prodetails');
        axios.get('/portalProducts/getById',{
            params:{
                id:_this.prodetailsid
            }
        }).then(res=>{
            _this.productName=res.data.data.productName;
            _this.productIntroduction=res.data.data.productIntroduction;
            _this.value=marked(_this.productIntroduction);
        }).catch(err=>{
            console.log(err)
        })
        window.scroll(0, 0);
    },
     methods: {
      goBack() {
        this.$router.go(-1);
      }
    },
    components:{bottom}
}
</script>
<style scoped>
.prod-top{
    width: 100%;
    height: 60px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
}
.prod-center{
    width: 960px;
    min-height: 100px;
    padding: 0 20px;
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 0px;
    overflow: hidden;
}
.prod-c-top{
    display: flex;
    justify-content: center;
    margin-top: 80px;
}
.prod-c-top h1{
    font-size: 30px;
}   
</style>