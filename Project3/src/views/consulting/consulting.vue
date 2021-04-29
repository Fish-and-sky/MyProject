<template>
  <div class="consulting">
    <div><header1></header1></div>
    <div class="consulting-top">
      <el-row>
        <el-col :xl="19" :lg="19" :md="23" :sm="23" :xs="23">
          <div class="pagehead">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.query.funame }}</el-breadcrumb-item>
              <el-breadcrumb-item>{{ $route.query.name }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-col>
        <el-col
          :xl="19"
          :lg="19"
          :md="23"
          :sm="23"
          :xs="23"
          class="consulting-form"
          :style="{ 'background-image': 'url(' + consultingimg + ')' }"
        >
          <el-col
            :xl="17"
            :lg="15"
            :md="20"
            :sm="23"
            :xs="23"
            class="theform-k"
          >
            <el-form
              label-position="top"
              label-width="80px"
              :model="formLabelAlign"
              :rules="rules"
              :ref="formLabelAlign"
              class="theform"
            >
              <el-form-item label="需求描述" prop="opinionDemain">
                <el-input
                  type="textarea"
                  v-model="formLabelAlign.opinionDemain"
                  :rows="4"
                ></el-input>
              </el-form-item>
              <el-form-item label="姓" prop="opinionFirstname">
                <el-input v-model="formLabelAlign.opinionFirstname"></el-input>
              </el-form-item>
              <el-form-item label="名" prop="opinionLastname">
                <el-input v-model="formLabelAlign.opinionLastname"></el-input>
              </el-form-item>
              <el-form-item label="公司" prop="opinionCompany">
                <el-input v-model="formLabelAlign.opinionCompany"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="opinionEmail">
                <el-input v-model="formLabelAlign.opinionEmail"></el-input>
              </el-form-item>
              <el-form-item label="手机号码" prop="opinionTelephone">
                <el-input v-model="formLabelAlign.opinionTelephone"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="opinionPlane">
                <el-input v-model="formLabelAlign.opinionPlane"></el-input>
              </el-form-item>
              <el-form-item label="城市" prop="opinionCity">
                <el-input v-model="formLabelAlign.opinionCity"></el-input>
              </el-form-item>
              <el-form-item
                label="国家"
                prop="opinionCountry"
                style="position: relative"
                required
              >
                <el-select
                  v-model="formLabelAlign.opinionCountry"
                  filterable
                  allow-create
                  default-first-option
                >
                  <el-option
                    v-for="it in option[0].options"
                    :key="it.value"
                    :label="it.label"
                    :value="it.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="职务"
                prop="opinionJob"
                style="position: relative"
                required
              >
                <el-select
                  v-model="formLabelAlign.opinionJob"
                  filterable
                  allow-create
                  default-first-option
                >
                  <el-option
                    v-for="it in option[1].options"
                    :key="it.value"
                    :label="it.label"
                    :value="it.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                label="兴趣"
                prop="opinionInterest"
                style="position: relative"
                required
              >
                <el-select
                  v-model="formLabelAlign.opinionInterest"
                  filterable
                  allow-create
                  default-first-option
                >
                  <el-option
                    v-for="it in option[2].options"
                    :key="it.value"
                    :label="it.label"
                    :value="it.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-button
              type="success"
              style="width: 120px"
              @click="submitForm(formLabelAlign)"
              >提交</el-button
            >
          </el-col>
        </el-col>
      </el-row>
    </div>
    <div><bottom :screenWidth="screenWidth"></bottom></div>
  </div>
</template>
<script>
import header1 from "../header/header1.vue";
import bottom from "../bottom/bottom.vue";
import axios from "axios";
import qs from "qs";
import {post} from '../../api/apis/allapi.js'
export default {
  data() {
    var thephone = (rule, value, callback) => {
      var reg = /^1[3456789][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      } else if (!reg.test(value)) {
        return callback(new Error("号码的格式错误"));
      } else {
        return callback();
      }
    };
    // var therule = (rule, value, callback) => {
    //   var reg = /^[\s]*$/;
    //   if(reg.test(value)){
    //     if(rule.field=="opinionCountry"){
    //       return callback(new Error("国家不能为空"))
    //     }else if(rule.field=="opinionJob"){
    //       return callback(new Error("职务不能为空"))
    //     }else if(rule.field=="opinionInterest"){
    //       return callback(new Error("兴趣不能为空"))
    //     }
    //   }
    // };
    return {
      screenWidth: document.body.clientWidth,
      consultingimg: "https://www.luxshare-ict.com/images/fk_bg.jpg",
      option: [
        {
          label: "国家",
          prop: "opinionCountry",
          other: "其他",
          options: [
            { value: "China", lable: "中国" },
            { value: "Germary", lable: "Germary" },
            { value: "USA", lable: "USA" },
            { value: "Korea", lable: "Korea" },
            { value: "Japan", lable: "Japan" },
            { value: "Italy", lable: "Italy" },
          ],
          span: "国家不能为空",
        },
        {
          label: "职务",
          prop: "opinionJob",
          other: "其他",
          options: [
            { value: "人资", lable: "人资" },
            { value: "销售", lable: "销售" },
            { value: "商务", lable: "商务" },
            { value: "客服", lable: "客服" },
          ],
          span: "职务不能为空",
        },
        {
          label: "感兴趣的领域",
          prop: "opinionInterest",
          other: "其他",
          options: [
            { value: "其他", lable: "其他" },
            { value: "医疗级产品", lable: "医疗级产品" },
            { value: "汽车产品", lable: "汽车产品" },
            { value: "企业级产品", lable: "企业级产品" },
          ],
          span: "兴趣不能为空",
        },
      ],
      formLabelAlign: {
        opinionDemain: "",
        opinionFirstname: "",
        opinionLastname: "",
        opinionCompany: "",
        opinionEmail: "",
        opinionTelephone: "",
        opinionPlane: "",
        opinionCity: "",
        opinionCountry: "",
        opinionJob: "",
        opinionInterest: "",
      },
      rules: {
        opinionDemain: [
          { required: true, message: "请输入需求描述", trigger: "blur" },
        ],
        opinionFirstname: [
          { required: true, message: "请输入姓", trigger: "blur" },
        ],
        opinionLastname: [
          { required: true, message: "请输入名", trigger: "blur" },
        ],
        opinionCompany: [
          { required: true, message: "请输入公司名称", trigger: "blur" },
        ],
        opinionEmail: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        opinionTelephone: [
          { required: true, validator: thephone, trigger: "blur" },
        ],
        opinionPlane: [
          { required: true, message: "请输入地址", trigger: "blur" },
        ],
        opinionCity: [
          { required: true, message: "请输入所在城市", trigger: "blur" },
        ],
        opinionCountry: {
          required: true,
          message: "请输入国家",
          trigger: ["blur", "change"],
        },
        opinionJob: {
          required: true,
          message: "请输入职务",
          trigger: ["blur", "change"],
        },
        opinionInterest: {
          required: true,
          message: "请输入兴趣",
          trigger: ["blur", "change"],
        },
      },
      num: 0,
    };
  },
  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          // 打印screenWidth变化的值,或执行方法

          that.timer = false;
        }, 400);
      }
    },
  },
  methods: {
    submitForm(formName) {
      let data = formName;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          post('/portalOpinion',JSON.stringify(formName)).then(res=>{
            console.log(res);
          })
            alert('消息传递成功');
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      const that = this;
      //实时获取页面宽度变化
      window.screenWidth = document.body.clientWidth;
      that.screenWidth = window.screenWidth;
      window.onresize = () => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      };
    });
  },
  components: { header1, bottom },
};
</script>
<style scoped>
.consulting-top {
  margin-top: 20px;
}
.consulting-top .el-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.pagehead {
  display: flex;
  flex-direction: row-reverse;
  margin: 20px 0px;
}
.consulting-form {
  display: flex;
  justify-content: center;
  padding: 40px 0px 80px 0px;
  background-size: 100% 100%;
}
.theform-k {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.theform-k .el-button {
  margin-top: 40px;
}
.theform {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
.theform .el-form-item:nth-child(1) {
  width: 100%;
}
.theform .el-form-item {
  width: 45%;
}
.theform .el-select {
  width: 100%;
}
.theform .el-form-item .redspan {
  display: none;
  position: absolute;
  bottom: -30px;
  left: 0px;
  font-size: 12px;
  color: rgb(243, 64, 64);
}
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}
.my-autocomplete .highlighted .addr {
  color: #ddd;
}
</style>