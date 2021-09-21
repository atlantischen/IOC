<template>
  <div class="container">
    <div class="warper">
      <el-dialog
        center
        :title="form.title"
        v-model="dialogShowChange"
        @close="closeDialog"
         @open='openClick'
        :destroy-on-close="true"
      >
        <div class="box">
          <!-- <div class="set_t">
                <span>设置时间</span>

            </div>
            <div class="set_r"></div> -->
          <div class="set_t">
            <span>设置时间</span>
            <span>请设置触发场景执行的时间</span>
            <span>选择执行结果</span>
            <span>如果时间到点了就做什么？</span>
          </div>
          <el-form
            :model="form"
            :rules="rules"
            ref="ruleForm"
            size="mini"
            label-width="200px"
            class="demo-ruleForm"
          >
            <el-form-item label="&nbsp;" prop="date">
              <el-date-picker
                type="date"
                placeholder="设置时间"
                v-model="form.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="&nbsp;" prop="type">
              <el-select
                v-model="form.type"
                multiple
                placeholder="设置重复(可多选)"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="interval" prop="type1" label="&nbsp;">
              <el-select
                v-model="form.type1"
                multiple
                placeholder="选择区域(可多选)"
              >
                <el-option
                  v-for="item in region"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="&nbsp;" prop="resource" >
              <el-radio-group
                v-model="form.resource"
                @change="changeSelect"
              >
                <el-radio label="开关回路"></el-radio>
                <el-radio label="照明回路"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-if="form.resource==='照明回路'">
              <el-slider v-model="value" :format-tooltip="handlDelta"></el-slider>
            </el-form-item>

            <el-form-item label="&nbsp;" prop="region" v-else :required='isShow'>
              <el-select v-model="form.region"  clearable  placeholder="选择执行动作">
                <el-option
                  v-for="item in action"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
                <div class="add_btn">添加执行动作</div>
              <!-- <el-button plain size="mini">添加执行动作</el-button> -->
            </el-form-item>
          </el-form>
        </div>
        <div class="btn">
            <div class="btn_i" @click="submitForm('ruleForm')">提交</div>
            <div class="btn_i" @click="closeDialog">取消</div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
     var validateRegion = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请选择活动区域'));
        } else {
          callback();
        }
      };
    return {
      dialogShowChange: this.dialogShow,
      ruleForm: this.formData,
      rules: {
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
         region: [
            { validator: validateRegion, trigger: 'change' }
          ],

        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个选项",
            trigger: "change",
          },
        ],
         type1: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个选项",
            trigger: "change",
          },
        ],
      },
      options: [
        {
          value: "每天",
          label: "每天",
        },
        {
          value: "法定工作日",
          label: "法定工作日",
        },
        {
          value: "法定节假日",
          label: "法定节假日",
        },
        {
          value: "周日",
          label: "周日",
        },
        {
          value: "周一",
          label: "周一",
        },
         {
          value: "周二",
          label: "周二",
        },
        {
          value: "周三",
          label: "周三",
        },
         {
          value: "周四",
          label: "周四",
        },
        {
          value: "周五",
          label: "周五",
        },
        {
          value: "周六",
          label: "周六",
        },
      ],
      region:[
       {
          value: "电梯间",
          label: "电梯间",
        },
        {
          value: "楼梯间",
          label: "楼梯间",
        },
        {
          value: "走廊",
          label: "走廊",
        },
        {
          value: "卫生间",
          label: "卫生间",
        },
        {
          value: "茶水间",
          label: "茶水间",
        },
         {
          value: "大堂",
          label: "大堂",
        },
      ],
      action:[
         {
          value: "开启照明",
          label: "开启照明",
        },
         {
          value: "关闭照明",
          label: "关闭照明",
        },
      ],
      // isShow: true,
      value: 50,
      form:{

      }

      
   
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    dialogShow: {
      type: Boolean,
      default: false,
    },
    formData:{
      type: Object,
      default: {},
    }
  },
  watch: {
    dialogShow(val) {
      this.dialogShowChange = val;
    },
   
  },

  methods: {
    closeDialog() {
      this.$emit("dialogShowChange", false);
    },
    handlDelta(e) {
      return e + '%'

    },
   
    // 单选框
    // changeSelect(val) {
    //   // if (val === "开关回路") {
    //   //   this.isShow = true;
    //   // } else if(val === "照明回路") {
    //   //   this.isShow = false;
    //   // }
    // },
     openClick(){
      this.form={...this.formData}
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
           this.$message({ message: `照明场景${this.form==='添加场景'?'新增':'编辑'}成功`, type: "success" });
            this.$emit("dialogShowChange", false);
            this.$emit("formDataClick", this.form);
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },

  created() {},
};
</script>

<style lang="less" scoped>
.container {
  :deep(.warper) {
    .el-dialog {
      width: 15.6875rem /* 1255/80 */ /* 1331/80 */ /* 1744/80 */ /* 1392/80 */ !important;
      height: 8.8875rem /* 711/80 */ /* 724/80 */ /* 920/80 */ /* 750/80 */
        /* 772/80 */ !important;
      margin-top: 15vh !important;
      background-image: url("../assets/img/dtjk_pic.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-color: transparent;
    }
    .el-overlay {
      overflow: hidden;
    }
    .el-dialog__body {
      padding-top: 0.125rem /* 10/80 */;
    }
    .el-dialog__headerbtn .el-dialog__close {
      font-size: 0.375rem /* 30/80 */ /* 20/80 */;
      color: #fff;
    }
    .el-dialog__title {
      color: #fff;
      font-size: 0.3rem /* 24/80 */;
    }
    .el-dialog__header {
      padding: 0.266667rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }
    .el-input__inner {
      width: 4.0375rem /* 323/80 */ !important ;
      background-color: rgba(0, 0, 0, .3);
    //   opacity: .5;
    }
  }
  :deep(.box) {
    position: relative;

    padding: 0.625rem /* 50/80 */ 2rem /* 140/80 */ /* 120/80 */ 0 /* 80/80 */;
    display: flex;
    justify-content: space-around;
    .set_t {
      display: flex;
      flex-direction: column;
      font-size: 0.3rem /* 24/80 */;
      color: #fff;
      &>span{
          margin-bottom: .3125rem /* 25/80 */;
          line-height: .4375rem /* 35/80 */;
      }
      &>span:nth-child(even){
          font-size: .225rem /* 18/80 */;
      }
      &>span:nth-child(3){
          margin-top: .85rem /* 68/80 */
      }
    }
    .el-form {
      float: right !important;
    }
    .el-input__inner, .el-textarea__inner{
        color:#fff ;
    }
    .el-slider__runway{
        background-color: #224362;
    }
    .interval{
        margin-top: 1.1625rem /* 93/80 *//* 57/80 */;
    }
    .el-form-item {
        margin-bottom: .3125rem /* 25/80 */;
    }
    .el-form-item.is-required:not(.is-no-asterisk)
      .el-form-item__label-wrap
      > .el-form-item__label:before,
    .el-form-item.is-required:not(.is-no-asterisk)
      > .el-form-item__label:before {
      content: "*";
      color: #4396f3;
      margin-right: 0.053333rem;
      font-size: 0.375rem /* 30/80 */;
    }
    .add_btn{
          width: 100%;
          height: .375rem /* 30/80 */;
          text-align: center;
            color: #4396f3;
            background: #101F33;
        border: 1px solid #FFFFFF;
        border-radius: .0625rem /* 5/80 */;
    }
    .el-button {
      width: 100%;
      color: #4396f3;
    }
     &::before{
        content: '';
        position: absolute;
        left: 50%;
        top: 35%;
        transform: translateX(-50%);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
        width: 80%;
    }
    &::after{
        content: '';
        position: absolute;
        bottom:0;
        left: 50%;
        transform: translateX(-50%);
         border-bottom: 1px solid rgba(255, 255, 255, 0.5);;
        width: 80%;
    }
  }
  .btn{
      display: flex;
      justify-content: center;
      margin-top: .5rem /* 40/80 */;
      .btn_i{
          width: 1.5rem /* 120/80 */;
          height: .4375rem /* 35/80 */;
          line-height: .4375rem /* 35/80 */;
          text-align: center;
          background-color: #4396f3;
          color: #fff;
          box-shadow: 0px 2px 5px 0px #021323;
            border-radius: 5px;
      }
      .btn_i:last-child{
          margin-left: .4375rem /* 35/80 */;
          background: linear-gradient(0deg, #6F7C9C, #D8E8FA);
      }
  }
}
</style>
